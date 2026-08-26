# `quicksight` Submodule <a name="`quicksight` Submodule" id="@cdk_utils/iam.quicksight"></a>


## Structs <a name="Structs" id="Structs"></a>

### QuickSightAccountArnComponents <a name="QuickSightAccountArnComponents" id="@cdk_utils/iam.quicksight.QuickSightAccountArnComponents"></a>

Parsed components of a account ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAccountArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAccountArnComponents: quicksight.QuickSightAccountArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAccountArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAccountArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAccountArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAccountArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAccountArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAccountArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightAccountArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAccountArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightAccountArnProps <a name="QuickSightAccountArnProps" id="@cdk_utils/iam.quicksight.QuickSightAccountArnProps"></a>

Properties for building a account ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAccountArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAccountArnProps: quicksight.QuickSightAccountArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAccountArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAccountArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAccountArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAccountArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAccountArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAccountArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAccountArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightAccountArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightActionconnectorArnComponents <a name="QuickSightActionconnectorArnComponents" id="@cdk_utils/iam.quicksight.QuickSightActionconnectorArnComponents"></a>

Parsed components of a actionconnector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightActionconnectorArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightActionconnectorArnComponents: quicksight.QuickSightActionconnectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActionconnectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActionconnectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActionconnectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActionconnectorArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightActionconnectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightActionconnectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightActionconnectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightActionconnectorArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightActionconnectorArnProps <a name="QuickSightActionconnectorArnProps" id="@cdk_utils/iam.quicksight.QuickSightActionconnectorArnProps"></a>

Properties for building a actionconnector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightActionconnectorArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightActionconnectorArnProps: quicksight.QuickSightActionconnectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActionconnectorArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActionconnectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActionconnectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActionconnectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightActionconnectorArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightActionconnectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightActionconnectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightActionconnectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightAgentArnComponents <a name="QuickSightAgentArnComponents" id="@cdk_utils/iam.quicksight.QuickSightAgentArnComponents"></a>

Parsed components of a agent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAgentArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAgentArnComponents: quicksight.QuickSightAgentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAgentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAgentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAgentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAgentArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAgentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAgentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightAgentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAgentArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightAgentArnProps <a name="QuickSightAgentArnProps" id="@cdk_utils/iam.quicksight.QuickSightAgentArnProps"></a>

Properties for building a agent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAgentArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAgentArnProps: quicksight.QuickSightAgentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAgentArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAgentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAgentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAgentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAgentArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAgentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAgentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightAgentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightAnalysisArnComponents <a name="QuickSightAnalysisArnComponents" id="@cdk_utils/iam.quicksight.QuickSightAnalysisArnComponents"></a>

Parsed components of a analysis ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAnalysisArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAnalysisArnComponents: quicksight.QuickSightAnalysisArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAnalysisArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAnalysisArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAnalysisArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAnalysisArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAnalysisArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAnalysisArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightAnalysisArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAnalysisArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightAnalysisArnProps <a name="QuickSightAnalysisArnProps" id="@cdk_utils/iam.quicksight.QuickSightAnalysisArnProps"></a>

Properties for building a analysis ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAnalysisArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAnalysisArnProps: quicksight.QuickSightAnalysisArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAnalysisArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAnalysisArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAnalysisArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAnalysisArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAnalysisArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAnalysisArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAnalysisArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightAnalysisArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightAppArnComponents <a name="QuickSightAppArnComponents" id="@cdk_utils/iam.quicksight.QuickSightAppArnComponents"></a>

Parsed components of a app ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAppArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAppArnComponents: quicksight.QuickSightAppArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAppArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAppArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAppArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAppArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAppArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAppArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightAppArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAppArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightAppArnProps <a name="QuickSightAppArnProps" id="@cdk_utils/iam.quicksight.QuickSightAppArnProps"></a>

Properties for building a app ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAppArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAppArnProps: quicksight.QuickSightAppArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAppArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAppArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAppArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAppArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAppArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAppArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAppArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightAppArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightApprovalPolicyArnComponents <a name="QuickSightApprovalPolicyArnComponents" id="@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnComponents"></a>

Parsed components of a approvalPolicy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightApprovalPolicyArnComponents: quicksight.QuickSightApprovalPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightApprovalPolicyArnProps <a name="QuickSightApprovalPolicyArnProps" id="@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnProps"></a>

Properties for building a approvalPolicy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightApprovalPolicyArnProps: quicksight.QuickSightApprovalPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightAssetBundleExportJobArnComponents <a name="QuickSightAssetBundleExportJobArnComponents" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnComponents"></a>

Parsed components of a assetBundleExportJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAssetBundleExportJobArnComponents: quicksight.QuickSightAssetBundleExportJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightAssetBundleExportJobArnProps <a name="QuickSightAssetBundleExportJobArnProps" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnProps"></a>

Properties for building a assetBundleExportJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAssetBundleExportJobArnProps: quicksight.QuickSightAssetBundleExportJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightAssetBundleImportJobArnComponents <a name="QuickSightAssetBundleImportJobArnComponents" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnComponents"></a>

Parsed components of a assetBundleImportJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAssetBundleImportJobArnComponents: quicksight.QuickSightAssetBundleImportJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightAssetBundleImportJobArnProps <a name="QuickSightAssetBundleImportJobArnProps" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnProps"></a>

Properties for building a assetBundleImportJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAssetBundleImportJobArnProps: quicksight.QuickSightAssetBundleImportJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightAssignmentArnComponents <a name="QuickSightAssignmentArnComponents" id="@cdk_utils/iam.quicksight.QuickSightAssignmentArnComponents"></a>

Parsed components of a assignment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAssignmentArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAssignmentArnComponents: quicksight.QuickSightAssignmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssignmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssignmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssignmentArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAssignmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAssignmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAssignmentArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightAssignmentArnProps <a name="QuickSightAssignmentArnProps" id="@cdk_utils/iam.quicksight.QuickSightAssignmentArnProps"></a>

Properties for building a assignment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAssignmentArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAssignmentArnProps: quicksight.QuickSightAssignmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssignmentArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssignmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAssignmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAssignmentArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAssignmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAssignmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### QuickSightAutomationArnComponents <a name="QuickSightAutomationArnComponents" id="@cdk_utils/iam.quicksight.QuickSightAutomationArnComponents"></a>

Parsed components of a automation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAutomationArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAutomationArnComponents: quicksight.QuickSightAutomationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationArnComponents.property.automationGroupId">automationGroupId</a></code> | <code>string</code> | The AutomationGroupId component. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAutomationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `automationGroupId`<sup>Required</sup> <a name="automationGroupId" id="@cdk_utils/iam.quicksight.QuickSightAutomationArnComponents.property.automationGroupId"></a>

```typescript
public readonly automationGroupId: string;
```

- *Type:* string

The AutomationGroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAutomationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightAutomationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAutomationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightAutomationArnProps <a name="QuickSightAutomationArnProps" id="@cdk_utils/iam.quicksight.QuickSightAutomationArnProps"></a>

Properties for building a automation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAutomationArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAutomationArnProps: quicksight.QuickSightAutomationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationArnProps.property.automationGroupId">automationGroupId</a></code> | <code>string</code> | The AutomationGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `automationGroupId`<sup>Required</sup> <a name="automationGroupId" id="@cdk_utils/iam.quicksight.QuickSightAutomationArnProps.property.automationGroupId"></a>

```typescript
public readonly automationGroupId: string;
```

- *Type:* string

The AutomationGroupId component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAutomationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAutomationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAutomationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightAutomationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightAutomationGroupArnComponents <a name="QuickSightAutomationGroupArnComponents" id="@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnComponents"></a>

Parsed components of a automationGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAutomationGroupArnComponents: quicksight.QuickSightAutomationGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightAutomationGroupArnProps <a name="QuickSightAutomationGroupArnProps" id="@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnProps"></a>

Properties for building a automationGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAutomationGroupArnProps: quicksight.QuickSightAutomationGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightAutomationJobArnComponents <a name="QuickSightAutomationJobArnComponents" id="@cdk_utils/iam.quicksight.QuickSightAutomationJobArnComponents"></a>

Parsed components of a automationJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAutomationJobArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAutomationJobArnComponents: quicksight.QuickSightAutomationJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationJobArnComponents.property.automationGroupId">automationGroupId</a></code> | <code>string</code> | The AutomationGroupId component. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationJobArnComponents.property.automationId">automationId</a></code> | <code>string</code> | The AutomationId component. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAutomationJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `automationGroupId`<sup>Required</sup> <a name="automationGroupId" id="@cdk_utils/iam.quicksight.QuickSightAutomationJobArnComponents.property.automationGroupId"></a>

```typescript
public readonly automationGroupId: string;
```

- *Type:* string

The AutomationGroupId component.

---

##### `automationId`<sup>Required</sup> <a name="automationId" id="@cdk_utils/iam.quicksight.QuickSightAutomationJobArnComponents.property.automationId"></a>

```typescript
public readonly automationId: string;
```

- *Type:* string

The AutomationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAutomationJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightAutomationJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAutomationJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightAutomationJobArnProps <a name="QuickSightAutomationJobArnProps" id="@cdk_utils/iam.quicksight.QuickSightAutomationJobArnProps"></a>

Properties for building a automationJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightAutomationJobArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightAutomationJobArnProps: quicksight.QuickSightAutomationJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationJobArnProps.property.automationGroupId">automationGroupId</a></code> | <code>string</code> | The AutomationGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationJobArnProps.property.automationId">automationId</a></code> | <code>string</code> | The AutomationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightAutomationJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `automationGroupId`<sup>Required</sup> <a name="automationGroupId" id="@cdk_utils/iam.quicksight.QuickSightAutomationJobArnProps.property.automationGroupId"></a>

```typescript
public readonly automationGroupId: string;
```

- *Type:* string

The AutomationGroupId component of the ARN.

---

##### `automationId`<sup>Required</sup> <a name="automationId" id="@cdk_utils/iam.quicksight.QuickSightAutomationJobArnProps.property.automationId"></a>

```typescript
public readonly automationId: string;
```

- *Type:* string

The AutomationId component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightAutomationJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightAutomationJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightAutomationJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightAutomationJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightBrandArnComponents <a name="QuickSightBrandArnComponents" id="@cdk_utils/iam.quicksight.QuickSightBrandArnComponents"></a>

Parsed components of a brand ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightBrandArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightBrandArnComponents: quicksight.QuickSightBrandArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightBrandArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightBrandArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightBrandArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightBrandArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightBrandArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightBrandArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightBrandArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightBrandArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightBrandArnProps <a name="QuickSightBrandArnProps" id="@cdk_utils/iam.quicksight.QuickSightBrandArnProps"></a>

Properties for building a brand ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightBrandArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightBrandArnProps: quicksight.QuickSightBrandArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightBrandArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightBrandArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightBrandArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightBrandArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightBrandArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightBrandArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightBrandArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightBrandArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightCustomizationArnComponents <a name="QuickSightCustomizationArnComponents" id="@cdk_utils/iam.quicksight.QuickSightCustomizationArnComponents"></a>

Parsed components of a customization ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightCustomizationArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightCustomizationArnComponents: quicksight.QuickSightCustomizationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightCustomizationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightCustomizationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightCustomizationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightCustomizationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightCustomizationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightCustomizationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightCustomizationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightCustomizationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightCustomizationArnProps <a name="QuickSightCustomizationArnProps" id="@cdk_utils/iam.quicksight.QuickSightCustomizationArnProps"></a>

Properties for building a customization ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightCustomizationArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightCustomizationArnProps: quicksight.QuickSightCustomizationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightCustomizationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightCustomizationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightCustomizationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightCustomizationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightCustomizationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightCustomizationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightCustomizationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightCustomizationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightCustompermissionsArnComponents <a name="QuickSightCustompermissionsArnComponents" id="@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnComponents"></a>

Parsed components of a custompermissions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightCustompermissionsArnComponents: quicksight.QuickSightCustompermissionsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightCustompermissionsArnProps <a name="QuickSightCustompermissionsArnProps" id="@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnProps"></a>

Properties for building a custompermissions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightCustompermissionsArnProps: quicksight.QuickSightCustompermissionsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightDashboardArnComponents <a name="QuickSightDashboardArnComponents" id="@cdk_utils/iam.quicksight.QuickSightDashboardArnComponents"></a>

Parsed components of a dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightDashboardArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightDashboardArnComponents: quicksight.QuickSightDashboardArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDashboardArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDashboardArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDashboardArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDashboardArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightDashboardArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightDashboardArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightDashboardArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightDashboardArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightDashboardArnProps <a name="QuickSightDashboardArnProps" id="@cdk_utils/iam.quicksight.QuickSightDashboardArnProps"></a>

Properties for building a dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightDashboardArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightDashboardArnProps: quicksight.QuickSightDashboardArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDashboardArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDashboardArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDashboardArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDashboardArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightDashboardArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightDashboardArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightDashboardArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightDashboardArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightDashboardSnapshotJobArnComponents <a name="QuickSightDashboardSnapshotJobArnComponents" id="@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnComponents"></a>

Parsed components of a dashboardSnapshotJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightDashboardSnapshotJobArnComponents: quicksight.QuickSightDashboardSnapshotJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnComponents.property.dashboardId">dashboardId</a></code> | <code>string</code> | The DashboardId component. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnComponents.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

The DashboardId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightDashboardSnapshotJobArnProps <a name="QuickSightDashboardSnapshotJobArnProps" id="@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnProps"></a>

Properties for building a dashboardSnapshotJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightDashboardSnapshotJobArnProps: quicksight.QuickSightDashboardSnapshotJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnProps.property.dashboardId">dashboardId</a></code> | <code>string</code> | The DashboardId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnProps.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

The DashboardId component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightDatasetArnComponents <a name="QuickSightDatasetArnComponents" id="@cdk_utils/iam.quicksight.QuickSightDatasetArnComponents"></a>

Parsed components of a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightDatasetArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightDatasetArnComponents: quicksight.QuickSightDatasetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDatasetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDatasetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDatasetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDatasetArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightDatasetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightDatasetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightDatasetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightDatasetArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightDatasetArnProps <a name="QuickSightDatasetArnProps" id="@cdk_utils/iam.quicksight.QuickSightDatasetArnProps"></a>

Properties for building a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightDatasetArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightDatasetArnProps: quicksight.QuickSightDatasetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDatasetArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDatasetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDatasetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDatasetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightDatasetArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightDatasetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightDatasetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightDatasetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightDatasourceArnComponents <a name="QuickSightDatasourceArnComponents" id="@cdk_utils/iam.quicksight.QuickSightDatasourceArnComponents"></a>

Parsed components of a datasource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightDatasourceArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightDatasourceArnComponents: quicksight.QuickSightDatasourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDatasourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDatasourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDatasourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDatasourceArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightDatasourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightDatasourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightDatasourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightDatasourceArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightDatasourceArnProps <a name="QuickSightDatasourceArnProps" id="@cdk_utils/iam.quicksight.QuickSightDatasourceArnProps"></a>

Properties for building a datasource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightDatasourceArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightDatasourceArnProps: quicksight.QuickSightDatasourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDatasourceArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDatasourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDatasourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDatasourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightDatasourceArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightDatasourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightDatasourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightDatasourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightDlpSettingArnComponents <a name="QuickSightDlpSettingArnComponents" id="@cdk_utils/iam.quicksight.QuickSightDlpSettingArnComponents"></a>

Parsed components of a dlpSetting ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightDlpSettingArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightDlpSettingArnComponents: quicksight.QuickSightDlpSettingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDlpSettingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDlpSettingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDlpSettingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDlpSettingArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightDlpSettingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightDlpSettingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightDlpSettingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightDlpSettingArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightDlpSettingArnProps <a name="QuickSightDlpSettingArnProps" id="@cdk_utils/iam.quicksight.QuickSightDlpSettingArnProps"></a>

Properties for building a dlpSetting ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightDlpSettingArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightDlpSettingArnProps: quicksight.QuickSightDlpSettingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDlpSettingArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDlpSettingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDlpSettingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightDlpSettingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightDlpSettingArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightDlpSettingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightDlpSettingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightDlpSettingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightEmailCustomizationTemplateArnComponents <a name="QuickSightEmailCustomizationTemplateArnComponents" id="@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnComponents"></a>

Parsed components of a emailCustomizationTemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightEmailCustomizationTemplateArnComponents: quicksight.QuickSightEmailCustomizationTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightEmailCustomizationTemplateArnProps <a name="QuickSightEmailCustomizationTemplateArnProps" id="@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnProps"></a>

Properties for building a emailCustomizationTemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightEmailCustomizationTemplateArnProps: quicksight.QuickSightEmailCustomizationTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightExtensionaccessArnComponents <a name="QuickSightExtensionaccessArnComponents" id="@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnComponents"></a>

Parsed components of a extensionaccess ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightExtensionaccessArnComponents: quicksight.QuickSightExtensionaccessArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightExtensionaccessArnProps <a name="QuickSightExtensionaccessArnProps" id="@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnProps"></a>

Properties for building a extensionaccess ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightExtensionaccessArnProps: quicksight.QuickSightExtensionaccessArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightFlowArnComponents <a name="QuickSightFlowArnComponents" id="@cdk_utils/iam.quicksight.QuickSightFlowArnComponents"></a>

Parsed components of a flow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightFlowArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightFlowArnComponents: quicksight.QuickSightFlowArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightFlowArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightFlowArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightFlowArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightFlowArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightFlowArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightFlowArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightFlowArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightFlowArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightFlowArnProps <a name="QuickSightFlowArnProps" id="@cdk_utils/iam.quicksight.QuickSightFlowArnProps"></a>

Properties for building a flow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightFlowArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightFlowArnProps: quicksight.QuickSightFlowArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightFlowArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightFlowArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightFlowArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightFlowArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightFlowArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightFlowArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightFlowArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightFlowArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightFolderArnComponents <a name="QuickSightFolderArnComponents" id="@cdk_utils/iam.quicksight.QuickSightFolderArnComponents"></a>

Parsed components of a folder ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightFolderArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightFolderArnComponents: quicksight.QuickSightFolderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightFolderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightFolderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightFolderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightFolderArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightFolderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightFolderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightFolderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightFolderArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightFolderArnProps <a name="QuickSightFolderArnProps" id="@cdk_utils/iam.quicksight.QuickSightFolderArnProps"></a>

Properties for building a folder ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightFolderArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightFolderArnProps: quicksight.QuickSightFolderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightFolderArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightFolderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightFolderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightFolderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightFolderArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightFolderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightFolderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightFolderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightGroupArnComponents <a name="QuickSightGroupArnComponents" id="@cdk_utils/iam.quicksight.QuickSightGroupArnComponents"></a>

Parsed components of a group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightGroupArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightGroupArnComponents: quicksight.QuickSightGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightGroupArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightGroupArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightGroupArnProps <a name="QuickSightGroupArnProps" id="@cdk_utils/iam.quicksight.QuickSightGroupArnProps"></a>

Properties for building a group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightGroupArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightGroupArnProps: quicksight.QuickSightGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightGroupArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightGroupArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightIngestionArnComponents <a name="QuickSightIngestionArnComponents" id="@cdk_utils/iam.quicksight.QuickSightIngestionArnComponents"></a>

Parsed components of a ingestion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightIngestionArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightIngestionArnComponents: quicksight.QuickSightIngestionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightIngestionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightIngestionArnComponents.property.datasetId">datasetId</a></code> | <code>string</code> | The DatasetId component. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightIngestionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightIngestionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightIngestionArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightIngestionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdk_utils/iam.quicksight.QuickSightIngestionArnComponents.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The DatasetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightIngestionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightIngestionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightIngestionArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightIngestionArnProps <a name="QuickSightIngestionArnProps" id="@cdk_utils/iam.quicksight.QuickSightIngestionArnProps"></a>

Properties for building a ingestion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightIngestionArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightIngestionArnProps: quicksight.QuickSightIngestionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightIngestionArnProps.property.datasetId">datasetId</a></code> | <code>string</code> | The DatasetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightIngestionArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightIngestionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightIngestionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightIngestionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdk_utils/iam.quicksight.QuickSightIngestionArnProps.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The DatasetId component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightIngestionArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightIngestionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightIngestionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightIngestionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightKnowledgeBaseArnComponents <a name="QuickSightKnowledgeBaseArnComponents" id="@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnComponents"></a>

Parsed components of a knowledgeBase ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightKnowledgeBaseArnComponents: quicksight.QuickSightKnowledgeBaseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightKnowledgeBaseArnProps <a name="QuickSightKnowledgeBaseArnProps" id="@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnProps"></a>

Properties for building a knowledgeBase ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightKnowledgeBaseArnProps: quicksight.QuickSightKnowledgeBaseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightLimitsProfileArnComponents <a name="QuickSightLimitsProfileArnComponents" id="@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnComponents"></a>

Parsed components of a limitsProfile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightLimitsProfileArnComponents: quicksight.QuickSightLimitsProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightLimitsProfileArnProps <a name="QuickSightLimitsProfileArnProps" id="@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnProps"></a>

Properties for building a limitsProfile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightLimitsProfileArnProps: quicksight.QuickSightLimitsProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightNamespaceArnComponents <a name="QuickSightNamespaceArnComponents" id="@cdk_utils/iam.quicksight.QuickSightNamespaceArnComponents"></a>

Parsed components of a namespace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightNamespaceArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightNamespaceArnComponents: quicksight.QuickSightNamespaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightNamespaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightNamespaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightNamespaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightNamespaceArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightNamespaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightNamespaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightNamespaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightNamespaceArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightNamespaceArnProps <a name="QuickSightNamespaceArnProps" id="@cdk_utils/iam.quicksight.QuickSightNamespaceArnProps"></a>

Properties for building a namespace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightNamespaceArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightNamespaceArnProps: quicksight.QuickSightNamespaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightNamespaceArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightNamespaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightNamespaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightNamespaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightNamespaceArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightNamespaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightNamespaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightNamespaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightOauthClientApplicationArnComponents <a name="QuickSightOauthClientApplicationArnComponents" id="@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnComponents"></a>

Parsed components of a oauthClientApplication ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightOauthClientApplicationArnComponents: quicksight.QuickSightOauthClientApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightOauthClientApplicationArnProps <a name="QuickSightOauthClientApplicationArnProps" id="@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnProps"></a>

Properties for building a oauthClientApplication ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightOauthClientApplicationArnProps: quicksight.QuickSightOauthClientApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightRefreshscheduleArnComponents <a name="QuickSightRefreshscheduleArnComponents" id="@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnComponents"></a>

Parsed components of a refreshschedule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightRefreshscheduleArnComponents: quicksight.QuickSightRefreshscheduleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnComponents.property.datasetId">datasetId</a></code> | <code>string</code> | The DatasetId component. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnComponents.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The DatasetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightRefreshscheduleArnProps <a name="QuickSightRefreshscheduleArnProps" id="@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnProps"></a>

Properties for building a refreshschedule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightRefreshscheduleArnProps: quicksight.QuickSightRefreshscheduleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnProps.property.datasetId">datasetId</a></code> | <code>string</code> | The DatasetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnProps.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The DatasetId component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightSpaceArnComponents <a name="QuickSightSpaceArnComponents" id="@cdk_utils/iam.quicksight.QuickSightSpaceArnComponents"></a>

Parsed components of a space ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightSpaceArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightSpaceArnComponents: quicksight.QuickSightSpaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightSpaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightSpaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightSpaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightSpaceArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightSpaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightSpaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightSpaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightSpaceArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightSpaceArnProps <a name="QuickSightSpaceArnProps" id="@cdk_utils/iam.quicksight.QuickSightSpaceArnProps"></a>

Properties for building a space ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightSpaceArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightSpaceArnProps: quicksight.QuickSightSpaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightSpaceArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightSpaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightSpaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightSpaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightSpaceArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightSpaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightSpaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightSpaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightTemplateArnComponents <a name="QuickSightTemplateArnComponents" id="@cdk_utils/iam.quicksight.QuickSightTemplateArnComponents"></a>

Parsed components of a template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightTemplateArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightTemplateArnComponents: quicksight.QuickSightTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightTemplateArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightTemplateArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightTemplateArnProps <a name="QuickSightTemplateArnProps" id="@cdk_utils/iam.quicksight.QuickSightTemplateArnProps"></a>

Properties for building a template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightTemplateArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightTemplateArnProps: quicksight.QuickSightTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightTemplateArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightTemplateArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightThemeArnComponents <a name="QuickSightThemeArnComponents" id="@cdk_utils/iam.quicksight.QuickSightThemeArnComponents"></a>

Parsed components of a theme ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightThemeArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightThemeArnComponents: quicksight.QuickSightThemeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightThemeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightThemeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightThemeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightThemeArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightThemeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightThemeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightThemeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightThemeArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightThemeArnProps <a name="QuickSightThemeArnProps" id="@cdk_utils/iam.quicksight.QuickSightThemeArnProps"></a>

Properties for building a theme ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightThemeArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightThemeArnProps: quicksight.QuickSightThemeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightThemeArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightThemeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightThemeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightThemeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightThemeArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightThemeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightThemeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightThemeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightTopicArnComponents <a name="QuickSightTopicArnComponents" id="@cdk_utils/iam.quicksight.QuickSightTopicArnComponents"></a>

Parsed components of a topic ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightTopicArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightTopicArnComponents: quicksight.QuickSightTopicArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightTopicArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightTopicArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightTopicArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightTopicArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightTopicArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightTopicArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightTopicArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightTopicArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightTopicArnProps <a name="QuickSightTopicArnProps" id="@cdk_utils/iam.quicksight.QuickSightTopicArnProps"></a>

Properties for building a topic ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightTopicArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightTopicArnProps: quicksight.QuickSightTopicArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightTopicArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightTopicArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightTopicArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightTopicArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightTopicArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightTopicArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightTopicArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightTopicArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightUserArnComponents <a name="QuickSightUserArnComponents" id="@cdk_utils/iam.quicksight.QuickSightUserArnComponents"></a>

Parsed components of a user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightUserArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightUserArnComponents: quicksight.QuickSightUserArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightUserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightUserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightUserArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightUserArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightUserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightUserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightUserArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightUserArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightUserArnProps <a name="QuickSightUserArnProps" id="@cdk_utils/iam.quicksight.QuickSightUserArnProps"></a>

Properties for building a user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightUserArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightUserArnProps: quicksight.QuickSightUserArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightUserArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightUserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightUserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightUserArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightUserArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightUserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightUserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightUserArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QuickSightVpcconnectionArnComponents <a name="QuickSightVpcconnectionArnComponents" id="@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnComponents"></a>

Parsed components of a vpcconnection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnComponents.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightVpcconnectionArnComponents: quicksight.QuickSightVpcconnectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### QuickSightVpcconnectionArnProps <a name="QuickSightVpcconnectionArnProps" id="@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnProps"></a>

Properties for building a vpcconnection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnProps.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

const quickSightVpcconnectionArnProps: quicksight.QuickSightVpcconnectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### QuickSightActions <a name="QuickSightActions" id="@cdk_utils/iam.quicksight.QuickSightActions"></a>

IAM action constants for the quicksight service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.quicksight.QuickSightActions.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

new quicksight.QuickSightActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.AccountConfigurations">AccountConfigurations</a></code> | <code>string</code> | [Write] quicksight:AccountConfigurations. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.actionGetAnonymousUserEmbedUrl">actionGetAnonymousUserEmbedUrl</a></code> | <code>string</code> | [Read] quicksight:GetAnonymousUserEmbedUrl. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.actionGetAuthCode">actionGetAuthCode</a></code> | <code>string</code> | [Read] quicksight:GetAuthCode. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.actionGetCustomPermissionsSummary">actionGetCustomPermissionsSummary</a></code> | <code>string</code> | [Read] quicksight:GetCustomPermissionsSummary. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.actionGetDashboardEmbedUrl">actionGetDashboardEmbedUrl</a></code> | <code>string</code> | [Read] quicksight:GetDashboardEmbedUrl. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.actionGetFlowMetadata">actionGetFlowMetadata</a></code> | <code>string</code> | [Read] quicksight:GetFlowMetadata. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.actionGetFlowPermissions">actionGetFlowPermissions</a></code> | <code>string</code> | [Read] quicksight:GetFlowPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.actionGetGroupMapping">actionGetGroupMapping</a></code> | <code>string</code> | [Read] quicksight:GetGroupMapping. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.actionGetIdentityContext">actionGetIdentityContext</a></code> | <code>string</code> | [Read] quicksight:GetIdentityContext. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.actionGetSessionEmbedUrl">actionGetSessionEmbedUrl</a></code> | <code>string</code> | [Read] quicksight:GetSessionEmbedUrl. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.actionSetGroupMapping">actionSetGroupMapping</a></code> | <code>string</code> | [Write] quicksight:SetGroupMapping. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.AllowVendedLogDeliveryForResource">AllowVendedLogDeliveryForResource</a></code> | <code>string</code> | [PermissionManagement] quicksight:AllowVendedLogDeliveryForResource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.BatchCreateTopicReviewedAnswer">BatchCreateTopicReviewedAnswer</a></code> | <code>string</code> | [Write] quicksight:BatchCreateTopicReviewedAnswer. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.BatchDeleteKnowledgeBase">BatchDeleteKnowledgeBase</a></code> | <code>string</code> | [Write] quicksight:BatchDeleteKnowledgeBase. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.BatchDeleteTopicReviewedAnswer">BatchDeleteTopicReviewedAnswer</a></code> | <code>string</code> | [Write] quicksight:BatchDeleteTopicReviewedAnswer. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.BatchDescribeUserLimits">BatchDescribeUserLimits</a></code> | <code>string</code> | [Read] quicksight:BatchDescribeUserLimits. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.BatchGetPreferences">BatchGetPreferences</a></code> | <code>string</code> | [Read] quicksight:BatchGetPreferences. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.BatchUpdatePreferences">BatchUpdatePreferences</a></code> | <code>string</code> | [Write] quicksight:BatchUpdatePreferences. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CancelIngestion">CancelIngestion</a></code> | <code>string</code> | [Write] quicksight:CancelIngestion. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateAccountCustomization">CreateAccountCustomization</a></code> | <code>string</code> | [Write] quicksight:CreateAccountCustomization. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateAccountSubscription">CreateAccountSubscription</a></code> | <code>string</code> | [Write] quicksight:CreateAccountSubscription. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateActionConnector">CreateActionConnector</a></code> | <code>string</code> | [Write] quicksight:CreateActionConnector. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateAdmin">CreateAdmin</a></code> | <code>string</code> | [Write] quicksight:CreateAdmin. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateAgent">CreateAgent</a></code> | <code>string</code> | [Write] quicksight:CreateAgent. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateAnalysis">CreateAnalysis</a></code> | <code>string</code> | [Write] quicksight:CreateAnalysis. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateApprovalPolicy">CreateApprovalPolicy</a></code> | <code>string</code> | [Write] quicksight:CreateApprovalPolicy. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateBrand">CreateBrand</a></code> | <code>string</code> | [Write] quicksight:CreateBrand. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateCustomPermissions">CreateCustomPermissions</a></code> | <code>string</code> | [Write] quicksight:CreateCustomPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateDashboard">CreateDashboard</a></code> | <code>string</code> | [Write] quicksight:CreateDashboard. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateDataSet">CreateDataSet</a></code> | <code>string</code> | [Write] quicksight:CreateDataSet. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateDataSource">CreateDataSource</a></code> | <code>string</code> | [Write] quicksight:CreateDataSource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateDlpSetting">CreateDlpSetting</a></code> | <code>string</code> | [Write] quicksight:CreateDlpSetting. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateEmailCustomizationTemplate">CreateEmailCustomizationTemplate</a></code> | <code>string</code> | [Write] quicksight:CreateEmailCustomizationTemplate. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateExtensionAccess">CreateExtensionAccess</a></code> | <code>string</code> | [Write] quicksight:CreateExtensionAccess. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateFlow">CreateFlow</a></code> | <code>string</code> | [Write] quicksight:CreateFlow. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateFolder">CreateFolder</a></code> | <code>string</code> | [Write] quicksight:CreateFolder. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateFolderMembership">CreateFolderMembership</a></code> | <code>string</code> | [Write] quicksight:CreateFolderMembership. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateGroup">CreateGroup</a></code> | <code>string</code> | [Write] quicksight:CreateGroup. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateGroupMembership">CreateGroupMembership</a></code> | <code>string</code> | [Write] quicksight:CreateGroupMembership. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateIAMPolicyAssignment">CreateIAMPolicyAssignment</a></code> | <code>string</code> | [Write] quicksight:CreateIAMPolicyAssignment. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateIngestion">CreateIngestion</a></code> | <code>string</code> | [Write] quicksight:CreateIngestion. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateKnowledgeBase">CreateKnowledgeBase</a></code> | <code>string</code> | [Write] quicksight:CreateKnowledgeBase. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateLimitsProfile">CreateLimitsProfile</a></code> | <code>string</code> | [Write] quicksight:CreateLimitsProfile. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateNamespace">CreateNamespace</a></code> | <code>string</code> | [Write] quicksight:CreateNamespace. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateOAuthClientApplication">CreateOAuthClientApplication</a></code> | <code>string</code> | [Write] quicksight:CreateOAuthClientApplication. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateReader">CreateReader</a></code> | <code>string</code> | [Write] quicksight:CreateReader. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateRefreshSchedule">CreateRefreshSchedule</a></code> | <code>string</code> | [Write] quicksight:CreateRefreshSchedule. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateRoleMembership">CreateRoleMembership</a></code> | <code>string</code> | [Write] quicksight:CreateRoleMembership. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateSpace">CreateSpace</a></code> | <code>string</code> | [Write] quicksight:CreateSpace. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateTemplate">CreateTemplate</a></code> | <code>string</code> | [Write] quicksight:CreateTemplate. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateTemplateAlias">CreateTemplateAlias</a></code> | <code>string</code> | [Write] quicksight:CreateTemplateAlias. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateTheme">CreateTheme</a></code> | <code>string</code> | [Write] quicksight:CreateTheme. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateThemeAlias">CreateThemeAlias</a></code> | <code>string</code> | [Write] quicksight:CreateThemeAlias. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateTopic">CreateTopic</a></code> | <code>string</code> | [Write] quicksight:CreateTopic. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateTopicRefreshSchedule">CreateTopicRefreshSchedule</a></code> | <code>string</code> | [Write] quicksight:CreateTopicRefreshSchedule. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateUser">CreateUser</a></code> | <code>string</code> | [Write] quicksight:CreateUser. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.CreateVPCConnection">CreateVPCConnection</a></code> | <code>string</code> | [Write] quicksight:CreateVPCConnection. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteAccountCustomization">DeleteAccountCustomization</a></code> | <code>string</code> | [Write] quicksight:DeleteAccountCustomization. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteAccountCustomPermission">DeleteAccountCustomPermission</a></code> | <code>string</code> | [Write] quicksight:DeleteAccountCustomPermission. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteAccountSubscription">DeleteAccountSubscription</a></code> | <code>string</code> | [Write] quicksight:DeleteAccountSubscription. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteActionConnector">DeleteActionConnector</a></code> | <code>string</code> | [Write] quicksight:DeleteActionConnector. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteAgent">DeleteAgent</a></code> | <code>string</code> | [Write] quicksight:DeleteAgent. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteAnalysis">DeleteAnalysis</a></code> | <code>string</code> | [Write] quicksight:DeleteAnalysis. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteApp">DeleteApp</a></code> | <code>string</code> | [Write] quicksight:DeleteApp. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteApprovalPolicy">DeleteApprovalPolicy</a></code> | <code>string</code> | [Write] quicksight:DeleteApprovalPolicy. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteBrand">DeleteBrand</a></code> | <code>string</code> | [Write] quicksight:DeleteBrand. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteBrandAssignment">DeleteBrandAssignment</a></code> | <code>string</code> | [Write] quicksight:DeleteBrandAssignment. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteCustomPermissions">DeleteCustomPermissions</a></code> | <code>string</code> | [Write] quicksight:DeleteCustomPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteDashboard">DeleteDashboard</a></code> | <code>string</code> | [Write] quicksight:DeleteDashboard. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteDataSet">DeleteDataSet</a></code> | <code>string</code> | [Write] quicksight:DeleteDataSet. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteDataSetRefreshProperties">DeleteDataSetRefreshProperties</a></code> | <code>string</code> | [Write] quicksight:DeleteDataSetRefreshProperties. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteDataSource">DeleteDataSource</a></code> | <code>string</code> | [Write] quicksight:DeleteDataSource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteDefaultQBusinessApplication">DeleteDefaultQBusinessApplication</a></code> | <code>string</code> | [Write] quicksight:DeleteDefaultQBusinessApplication. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteDlpSetting">DeleteDlpSetting</a></code> | <code>string</code> | [Write] quicksight:DeleteDlpSetting. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteEmailCustomizationTemplate">DeleteEmailCustomizationTemplate</a></code> | <code>string</code> | [Write] quicksight:DeleteEmailCustomizationTemplate. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteExtensionAccess">DeleteExtensionAccess</a></code> | <code>string</code> | [Write] quicksight:DeleteExtensionAccess. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteFlow">DeleteFlow</a></code> | <code>string</code> | [Write] quicksight:DeleteFlow. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteFolder">DeleteFolder</a></code> | <code>string</code> | [Write] quicksight:DeleteFolder. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteFolderMembership">DeleteFolderMembership</a></code> | <code>string</code> | [Write] quicksight:DeleteFolderMembership. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteGroup">DeleteGroup</a></code> | <code>string</code> | [Write] quicksight:DeleteGroup. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteGroupMembership">DeleteGroupMembership</a></code> | <code>string</code> | [Write] quicksight:DeleteGroupMembership. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteIAMPolicyAssignment">DeleteIAMPolicyAssignment</a></code> | <code>string</code> | [Write] quicksight:DeleteIAMPolicyAssignment. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteIdentityPropagationConfig">DeleteIdentityPropagationConfig</a></code> | <code>string</code> | [Write] quicksight:DeleteIdentityPropagationConfig. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteKnowledgeBase">DeleteKnowledgeBase</a></code> | <code>string</code> | [Write] quicksight:DeleteKnowledgeBase. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteLimitsProfile">DeleteLimitsProfile</a></code> | <code>string</code> | [Write] quicksight:DeleteLimitsProfile. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteNamespace">DeleteNamespace</a></code> | <code>string</code> | [Write] quicksight:DeleteNamespace. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteOAuthClientApplication">DeleteOAuthClientApplication</a></code> | <code>string</code> | [Write] quicksight:DeleteOAuthClientApplication. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteRefreshSchedule">DeleteRefreshSchedule</a></code> | <code>string</code> | [Write] quicksight:DeleteRefreshSchedule. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteRoleCustomPermission">DeleteRoleCustomPermission</a></code> | <code>string</code> | [Write] quicksight:DeleteRoleCustomPermission. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteRoleMembership">DeleteRoleMembership</a></code> | <code>string</code> | [Write] quicksight:DeleteRoleMembership. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteSpace">DeleteSpace</a></code> | <code>string</code> | [Write] quicksight:DeleteSpace. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteTemplate">DeleteTemplate</a></code> | <code>string</code> | [Write] quicksight:DeleteTemplate. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteTemplateAlias">DeleteTemplateAlias</a></code> | <code>string</code> | [Write] quicksight:DeleteTemplateAlias. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteTheme">DeleteTheme</a></code> | <code>string</code> | [Write] quicksight:DeleteTheme. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteThemeAlias">DeleteThemeAlias</a></code> | <code>string</code> | [Write] quicksight:DeleteThemeAlias. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteTopic">DeleteTopic</a></code> | <code>string</code> | [Write] quicksight:DeleteTopic. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteTopicRefreshSchedule">DeleteTopicRefreshSchedule</a></code> | <code>string</code> | [Write] quicksight:DeleteTopicRefreshSchedule. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteUser">DeleteUser</a></code> | <code>string</code> | [Write] quicksight:DeleteUser. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteUserByPrincipalId">DeleteUserByPrincipalId</a></code> | <code>string</code> | [Write] quicksight:DeleteUserByPrincipalId. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteUserCustomPermission">DeleteUserCustomPermission</a></code> | <code>string</code> | [Write] quicksight:DeleteUserCustomPermission. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteVPCConnection">DeleteVPCConnection</a></code> | <code>string</code> | [Write] quicksight:DeleteVPCConnection. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAccountCustomization">DescribeAccountCustomization</a></code> | <code>string</code> | [Read] quicksight:DescribeAccountCustomization. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAccountCustomPermission">DescribeAccountCustomPermission</a></code> | <code>string</code> | [Read] quicksight:DescribeAccountCustomPermission. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAccountSettings">DescribeAccountSettings</a></code> | <code>string</code> | [Read] quicksight:DescribeAccountSettings. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAccountSubscription">DescribeAccountSubscription</a></code> | <code>string</code> | [Read] quicksight:DescribeAccountSubscription. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeActionConnector">DescribeActionConnector</a></code> | <code>string</code> | [Read] quicksight:DescribeActionConnector. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeActionConnectorPermissions">DescribeActionConnectorPermissions</a></code> | <code>string</code> | [Read] quicksight:DescribeActionConnectorPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAgent">DescribeAgent</a></code> | <code>string</code> | [Read] quicksight:DescribeAgent. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAgentPermissions">DescribeAgentPermissions</a></code> | <code>string</code> | [Read] quicksight:DescribeAgentPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAnalysis">DescribeAnalysis</a></code> | <code>string</code> | [Read] quicksight:DescribeAnalysis. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAnalysisPermissions">DescribeAnalysisPermissions</a></code> | <code>string</code> | [Read] quicksight:DescribeAnalysisPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeApp">DescribeApp</a></code> | <code>string</code> | [Read] quicksight:DescribeApp. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAppPermissions">DescribeAppPermissions</a></code> | <code>string</code> | [Read] quicksight:DescribeAppPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeApprovalPolicy">DescribeApprovalPolicy</a></code> | <code>string</code> | [Read] quicksight:DescribeApprovalPolicy. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAssetBundleExportJob">DescribeAssetBundleExportJob</a></code> | <code>string</code> | [Read] quicksight:DescribeAssetBundleExportJob. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAssetBundleImportJob">DescribeAssetBundleImportJob</a></code> | <code>string</code> | [Read] quicksight:DescribeAssetBundleImportJob. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAutomationJob">DescribeAutomationJob</a></code> | <code>string</code> | [Read] quicksight:DescribeAutomationJob. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeBrand">DescribeBrand</a></code> | <code>string</code> | [Read] quicksight:DescribeBrand. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeBrandAssignment">DescribeBrandAssignment</a></code> | <code>string</code> | [Read] quicksight:DescribeBrandAssignment. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeBrandPublishedVersion">DescribeBrandPublishedVersion</a></code> | <code>string</code> | [Read] quicksight:DescribeBrandPublishedVersion. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeChatConfiguration">DescribeChatConfiguration</a></code> | <code>string</code> | [Read] quicksight:DescribeChatConfiguration. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeCustomPermissions">DescribeCustomPermissions</a></code> | <code>string</code> | [Read] quicksight:DescribeCustomPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDashboard">DescribeDashboard</a></code> | <code>string</code> | [Read] quicksight:DescribeDashboard. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDashboardPermissions">DescribeDashboardPermissions</a></code> | <code>string</code> | [Read] quicksight:DescribeDashboardPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDashboardSnapshotJob">DescribeDashboardSnapshotJob</a></code> | <code>string</code> | [Read] quicksight:DescribeDashboardSnapshotJob. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDashboardSnapshotJobResult">DescribeDashboardSnapshotJobResult</a></code> | <code>string</code> | [Read] quicksight:DescribeDashboardSnapshotJobResult. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDashboardsQAConfiguration">DescribeDashboardsQAConfiguration</a></code> | <code>string</code> | [Read] quicksight:DescribeDashboardsQAConfiguration. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDataSet">DescribeDataSet</a></code> | <code>string</code> | [Read] quicksight:DescribeDataSet. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDataSetPermissions">DescribeDataSetPermissions</a></code> | <code>string</code> | [Read] quicksight:DescribeDataSetPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDataSetRefreshProperties">DescribeDataSetRefreshProperties</a></code> | <code>string</code> | [Read] quicksight:DescribeDataSetRefreshProperties. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDataSource">DescribeDataSource</a></code> | <code>string</code> | [Read] quicksight:DescribeDataSource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDataSourcePermissions">DescribeDataSourcePermissions</a></code> | <code>string</code> | [Read] quicksight:DescribeDataSourcePermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDefaultQBusinessApplication">DescribeDefaultQBusinessApplication</a></code> | <code>string</code> | [Read] quicksight:DescribeDefaultQBusinessApplication. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDlpJob">DescribeDlpJob</a></code> | <code>string</code> | [Read] quicksight:DescribeDlpJob. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDlpSetting">DescribeDlpSetting</a></code> | <code>string</code> | [Read] quicksight:DescribeDlpSetting. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeEmailCustomizationTemplate">DescribeEmailCustomizationTemplate</a></code> | <code>string</code> | [Read] quicksight:DescribeEmailCustomizationTemplate. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeExtensionAccess">DescribeExtensionAccess</a></code> | <code>string</code> | [Read] quicksight:DescribeExtensionAccess. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeFlow">DescribeFlow</a></code> | <code>string</code> | [Read] quicksight:DescribeFlow. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeFolder">DescribeFolder</a></code> | <code>string</code> | [Read] quicksight:DescribeFolder. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeFolderPermissions">DescribeFolderPermissions</a></code> | <code>string</code> | [Read] quicksight:DescribeFolderPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeFolderResolvedPermissions">DescribeFolderResolvedPermissions</a></code> | <code>string</code> | [Read] quicksight:DescribeFolderResolvedPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeGroup">DescribeGroup</a></code> | <code>string</code> | [Read] quicksight:DescribeGroup. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeGroupMembership">DescribeGroupMembership</a></code> | <code>string</code> | [Read] quicksight:DescribeGroupMembership. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeIAMPolicyAssignment">DescribeIAMPolicyAssignment</a></code> | <code>string</code> | [Read] quicksight:DescribeIAMPolicyAssignment. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeIngestion">DescribeIngestion</a></code> | <code>string</code> | [Read] quicksight:DescribeIngestion. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeIpRestriction">DescribeIpRestriction</a></code> | <code>string</code> | [Read] quicksight:DescribeIpRestriction. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeKeyRegistration">DescribeKeyRegistration</a></code> | <code>string</code> | [Read] quicksight:DescribeKeyRegistration. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeKnowledgeBase">DescribeKnowledgeBase</a></code> | <code>string</code> | [Read] quicksight:DescribeKnowledgeBase. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeKnowledgeBasePermissions">DescribeKnowledgeBasePermissions</a></code> | <code>string</code> | [PermissionManagement] quicksight:DescribeKnowledgeBasePermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeLimitsProfile">DescribeLimitsProfile</a></code> | <code>string</code> | [Read] quicksight:DescribeLimitsProfile. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeNamespace">DescribeNamespace</a></code> | <code>string</code> | [Read] quicksight:DescribeNamespace. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeOAuthClientApplication">DescribeOAuthClientApplication</a></code> | <code>string</code> | [Read] quicksight:DescribeOAuthClientApplication. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeQPersonalizationConfiguration">DescribeQPersonalizationConfiguration</a></code> | <code>string</code> | [Read] quicksight:DescribeQPersonalizationConfiguration. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeQuickIndexCapacity">DescribeQuickIndexCapacity</a></code> | <code>string</code> | [Read] quicksight:DescribeQuickIndexCapacity. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeQuickSightQSearchConfiguration">DescribeQuickSightQSearchConfiguration</a></code> | <code>string</code> | [Read] quicksight:DescribeQuickSightQSearchConfiguration. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeRefreshSchedule">DescribeRefreshSchedule</a></code> | <code>string</code> | [Read] quicksight:DescribeRefreshSchedule. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeRoleCustomPermission">DescribeRoleCustomPermission</a></code> | <code>string</code> | [Read] quicksight:DescribeRoleCustomPermission. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeSelfUpgradeConfiguration">DescribeSelfUpgradeConfiguration</a></code> | <code>string</code> | [Read] quicksight:DescribeSelfUpgradeConfiguration. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeSpace">DescribeSpace</a></code> | <code>string</code> | [Read] quicksight:DescribeSpace. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeSpacePermissions">DescribeSpacePermissions</a></code> | <code>string</code> | [PermissionManagement] quicksight:DescribeSpacePermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeTemplate">DescribeTemplate</a></code> | <code>string</code> | [Read] quicksight:DescribeTemplate. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeTemplateAlias">DescribeTemplateAlias</a></code> | <code>string</code> | [Read] quicksight:DescribeTemplateAlias. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeTemplatePermissions">DescribeTemplatePermissions</a></code> | <code>string</code> | [Read] quicksight:DescribeTemplatePermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeTheme">DescribeTheme</a></code> | <code>string</code> | [Read] quicksight:DescribeTheme. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeThemeAlias">DescribeThemeAlias</a></code> | <code>string</code> | [Read] quicksight:DescribeThemeAlias. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeThemePermissions">DescribeThemePermissions</a></code> | <code>string</code> | [Read] quicksight:DescribeThemePermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeTopic">DescribeTopic</a></code> | <code>string</code> | [Read] quicksight:DescribeTopic. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeTopicPermissions">DescribeTopicPermissions</a></code> | <code>string</code> | [PermissionManagement] quicksight:DescribeTopicPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeTopicRefresh">DescribeTopicRefresh</a></code> | <code>string</code> | [Read] quicksight:DescribeTopicRefresh. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeTopicRefreshSchedule">DescribeTopicRefreshSchedule</a></code> | <code>string</code> | [Read] quicksight:DescribeTopicRefreshSchedule. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeUser">DescribeUser</a></code> | <code>string</code> | [Read] quicksight:DescribeUser. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeVPCConnection">DescribeVPCConnection</a></code> | <code>string</code> | [Read] quicksight:DescribeVPCConnection. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.GenerateEmbedUrlForAnonymousUser">GenerateEmbedUrlForAnonymousUser</a></code> | <code>string</code> | [Write] quicksight:GenerateEmbedUrlForAnonymousUser. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.GenerateEmbedUrlForRegisteredUser">GenerateEmbedUrlForRegisteredUser</a></code> | <code>string</code> | [Write] quicksight:GenerateEmbedUrlForRegisteredUser. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.GenerateEmbedUrlForRegisteredUserWithIdentity">GenerateEmbedUrlForRegisteredUserWithIdentity</a></code> | <code>string</code> | [Write] quicksight:GenerateEmbedUrlForRegisteredUserWithIdentity. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListActionConnectors">ListActionConnectors</a></code> | <code>string</code> | [List] quicksight:ListActionConnectors. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListAgents">ListAgents</a></code> | <code>string</code> | [List] quicksight:ListAgents. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListAnalyses">ListAnalyses</a></code> | <code>string</code> | [List] quicksight:ListAnalyses. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListApprovalPolicies">ListApprovalPolicies</a></code> | <code>string</code> | [List] quicksight:ListApprovalPolicies. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListApps">ListApps</a></code> | <code>string</code> | [List] quicksight:ListApps. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListAssetBundleExportJobs">ListAssetBundleExportJobs</a></code> | <code>string</code> | [List] quicksight:ListAssetBundleExportJobs. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListAssetBundleImportJobs">ListAssetBundleImportJobs</a></code> | <code>string</code> | [List] quicksight:ListAssetBundleImportJobs. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListBrands">ListBrands</a></code> | <code>string</code> | [List] quicksight:ListBrands. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListCustomerManagedKeys">ListCustomerManagedKeys</a></code> | <code>string</code> | [List] quicksight:ListCustomerManagedKeys. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListCustomPermissionAssignments">ListCustomPermissionAssignments</a></code> | <code>string</code> | [List] quicksight:ListCustomPermissionAssignments. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListCustomPermissions">ListCustomPermissions</a></code> | <code>string</code> | [List] quicksight:ListCustomPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListDashboards">ListDashboards</a></code> | <code>string</code> | [List] quicksight:ListDashboards. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListDashboardVersions">ListDashboardVersions</a></code> | <code>string</code> | [List] quicksight:ListDashboardVersions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListDataSets">ListDataSets</a></code> | <code>string</code> | [List] quicksight:ListDataSets. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListDataSources">ListDataSources</a></code> | <code>string</code> | [List] quicksight:ListDataSources. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListDlpLabels">ListDlpLabels</a></code> | <code>string</code> | [List] quicksight:ListDlpLabels. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListDlpSettings">ListDlpSettings</a></code> | <code>string</code> | [List] quicksight:ListDlpSettings. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListExtensionAccesses">ListExtensionAccesses</a></code> | <code>string</code> | [List] quicksight:ListExtensionAccesses. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListFlows">ListFlows</a></code> | <code>string</code> | [List] quicksight:ListFlows. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListFolderMembers">ListFolderMembers</a></code> | <code>string</code> | [Read] quicksight:ListFolderMembers. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListFolders">ListFolders</a></code> | <code>string</code> | [List] quicksight:ListFolders. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListFoldersForResource">ListFoldersForResource</a></code> | <code>string</code> | [List] quicksight:ListFoldersForResource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListGroupMemberships">ListGroupMemberships</a></code> | <code>string</code> | [List] quicksight:ListGroupMemberships. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListGroups">ListGroups</a></code> | <code>string</code> | [List] quicksight:ListGroups. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListIAMPolicyAssignments">ListIAMPolicyAssignments</a></code> | <code>string</code> | [List] quicksight:ListIAMPolicyAssignments. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListIAMPolicyAssignmentsForUser">ListIAMPolicyAssignmentsForUser</a></code> | <code>string</code> | [List] quicksight:ListIAMPolicyAssignmentsForUser. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListIdentityPropagationConfigs">ListIdentityPropagationConfigs</a></code> | <code>string</code> | [List] quicksight:ListIdentityPropagationConfigs. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListIngestions">ListIngestions</a></code> | <code>string</code> | [List] quicksight:ListIngestions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListKMSKeysForUser">ListKMSKeysForUser</a></code> | <code>string</code> | [List] quicksight:ListKMSKeysForUser. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListKnowledgeBases">ListKnowledgeBases</a></code> | <code>string</code> | [List] quicksight:ListKnowledgeBases. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListLimitsProfiles">ListLimitsProfiles</a></code> | <code>string</code> | [List] quicksight:ListLimitsProfiles. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListNamespaces">ListNamespaces</a></code> | <code>string</code> | [List] quicksight:ListNamespaces. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListOAuthClientApplications">ListOAuthClientApplications</a></code> | <code>string</code> | [List] quicksight:ListOAuthClientApplications. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListRefreshSchedules">ListRefreshSchedules</a></code> | <code>string</code> | [List] quicksight:ListRefreshSchedules. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListRoleMemberships">ListRoleMemberships</a></code> | <code>string</code> | [List] quicksight:ListRoleMemberships. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListSelfUpgrades">ListSelfUpgrades</a></code> | <code>string</code> | [List] quicksight:ListSelfUpgrades. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListSpaceResources">ListSpaceResources</a></code> | <code>string</code> | [List] quicksight:ListSpaceResources. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListSpaces">ListSpaces</a></code> | <code>string</code> | [List] quicksight:ListSpaces. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] quicksight:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListTemplateAliases">ListTemplateAliases</a></code> | <code>string</code> | [List] quicksight:ListTemplateAliases. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListTemplates">ListTemplates</a></code> | <code>string</code> | [List] quicksight:ListTemplates. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListTemplateVersions">ListTemplateVersions</a></code> | <code>string</code> | [List] quicksight:ListTemplateVersions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListThemeAliases">ListThemeAliases</a></code> | <code>string</code> | [List] quicksight:ListThemeAliases. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListThemes">ListThemes</a></code> | <code>string</code> | [List] quicksight:ListThemes. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListThemeVersions">ListThemeVersions</a></code> | <code>string</code> | [List] quicksight:ListThemeVersions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListTopicRefreshSchedules">ListTopicRefreshSchedules</a></code> | <code>string</code> | [List] quicksight:ListTopicRefreshSchedules. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListTopicReviewedAnswers">ListTopicReviewedAnswers</a></code> | <code>string</code> | [List] quicksight:ListTopicReviewedAnswers. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListTopics">ListTopics</a></code> | <code>string</code> | [List] quicksight:ListTopics. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListUserGroups">ListUserGroups</a></code> | <code>string</code> | [List] quicksight:ListUserGroups. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListUsers">ListUsers</a></code> | <code>string</code> | [List] quicksight:ListUsers. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListUsersIndexCapacity">ListUsersIndexCapacity</a></code> | <code>string</code> | [List] quicksight:ListUsersIndexCapacity. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ListVPCConnections">ListVPCConnections</a></code> | <code>string</code> | [List] quicksight:ListVPCConnections. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.PassDataSet">PassDataSet</a></code> | <code>string</code> | [Read] quicksight:PassDataSet. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.PassDataSource">PassDataSource</a></code> | <code>string</code> | [Read] quicksight:PassDataSource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.PassTopic">PassTopic</a></code> | <code>string</code> | [Read] quicksight:PassTopic. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.PredictQAResults">PredictQAResults</a></code> | <code>string</code> | [Read] quicksight:PredictQAResults. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.PutDataSetRefreshProperties">PutDataSetRefreshProperties</a></code> | <code>string</code> | [Write] quicksight:PutDataSetRefreshProperties. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.QuickSuiteUsageMetrics">QuickSuiteUsageMetrics</a></code> | <code>string</code> | [Read] quicksight:QuickSuiteUsageMetrics. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.RegisterCustomerManagedKey">RegisterCustomerManagedKey</a></code> | <code>string</code> | [Write] quicksight:RegisterCustomerManagedKey. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.RegisterUser">RegisterUser</a></code> | <code>string</code> | [Write] quicksight:RegisterUser. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.RemoveCustomerManagedKey">RemoveCustomerManagedKey</a></code> | <code>string</code> | [Write] quicksight:RemoveCustomerManagedKey. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.RestoreAnalysis">RestoreAnalysis</a></code> | <code>string</code> | [Write] quicksight:RestoreAnalysis. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.ScopeDownPolicy">ScopeDownPolicy</a></code> | <code>string</code> | [Write] quicksight:ScopeDownPolicy. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.SearchActionConnectors">SearchActionConnectors</a></code> | <code>string</code> | [List] quicksight:SearchActionConnectors. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.SearchAgents">SearchAgents</a></code> | <code>string</code> | [List] quicksight:SearchAgents. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.SearchAnalyses">SearchAnalyses</a></code> | <code>string</code> | [List] quicksight:SearchAnalyses. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.SearchApps">SearchApps</a></code> | <code>string</code> | [List] quicksight:SearchApps. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.SearchDashboards">SearchDashboards</a></code> | <code>string</code> | [List] quicksight:SearchDashboards. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.SearchDataSets">SearchDataSets</a></code> | <code>string</code> | [List] quicksight:SearchDataSets. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.SearchDataSources">SearchDataSources</a></code> | <code>string</code> | [List] quicksight:SearchDataSources. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.SearchDirectoryGroups">SearchDirectoryGroups</a></code> | <code>string</code> | [List] quicksight:SearchDirectoryGroups. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.SearchFlows">SearchFlows</a></code> | <code>string</code> | [List] quicksight:SearchFlows. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.SearchFolders">SearchFolders</a></code> | <code>string</code> | [Read] quicksight:SearchFolders. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.SearchGroups">SearchGroups</a></code> | <code>string</code> | [List] quicksight:SearchGroups. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.SearchKnowledgeBases">SearchKnowledgeBases</a></code> | <code>string</code> | [List] quicksight:SearchKnowledgeBases. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.SearchSpaces">SearchSpaces</a></code> | <code>string</code> | [List] quicksight:SearchSpaces. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.SearchTopics">SearchTopics</a></code> | <code>string</code> | [List] quicksight:SearchTopics. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.SearchUsers">SearchUsers</a></code> | <code>string</code> | [List] quicksight:SearchUsers. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.StartAssetBundleExportJob">StartAssetBundleExportJob</a></code> | <code>string</code> | [Write] quicksight:StartAssetBundleExportJob. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.StartAssetBundleImportJob">StartAssetBundleImportJob</a></code> | <code>string</code> | [Write] quicksight:StartAssetBundleImportJob. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.StartAutomationJob">StartAutomationJob</a></code> | <code>string</code> | [Write] quicksight:StartAutomationJob. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.StartDashboardSnapshotJob">StartDashboardSnapshotJob</a></code> | <code>string</code> | [Write] quicksight:StartDashboardSnapshotJob. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.StartDashboardSnapshotJobSchedule">StartDashboardSnapshotJobSchedule</a></code> | <code>string</code> | [Write] quicksight:StartDashboardSnapshotJobSchedule. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.StartDlpJob">StartDlpJob</a></code> | <code>string</code> | [Write] quicksight:StartDlpJob. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.Subscribe">Subscribe</a></code> | <code>string</code> | [Write] quicksight:Subscribe. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] quicksight:TagResource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UnpublishFlow">UnpublishFlow</a></code> | <code>string</code> | [Write] quicksight:UnpublishFlow. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.Unsubscribe">Unsubscribe</a></code> | <code>string</code> | [Write] quicksight:Unsubscribe. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] quicksight:UntagResource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateAccountCustomization">UpdateAccountCustomization</a></code> | <code>string</code> | [Write] quicksight:UpdateAccountCustomization. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateAccountCustomPermission">UpdateAccountCustomPermission</a></code> | <code>string</code> | [Write] quicksight:UpdateAccountCustomPermission. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateAccountSettings">UpdateAccountSettings</a></code> | <code>string</code> | [Write] quicksight:UpdateAccountSettings. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateActionConnector">UpdateActionConnector</a></code> | <code>string</code> | [Write] quicksight:UpdateActionConnector. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateActionConnectorPermissions">UpdateActionConnectorPermissions</a></code> | <code>string</code> | [PermissionManagement] quicksight:UpdateActionConnectorPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateAgent">UpdateAgent</a></code> | <code>string</code> | [Write] quicksight:UpdateAgent. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateAgentPermissions">UpdateAgentPermissions</a></code> | <code>string</code> | [PermissionManagement] quicksight:UpdateAgentPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateAnalysis">UpdateAnalysis</a></code> | <code>string</code> | [Write] quicksight:UpdateAnalysis. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateAnalysisPermissions">UpdateAnalysisPermissions</a></code> | <code>string</code> | [PermissionManagement] quicksight:UpdateAnalysisPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateApplicationWithTokenExchangeGrant">UpdateApplicationWithTokenExchangeGrant</a></code> | <code>string</code> | [Write] quicksight:UpdateApplicationWithTokenExchangeGrant. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateAppPermissions">UpdateAppPermissions</a></code> | <code>string</code> | [PermissionManagement] quicksight:UpdateAppPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateApprovalPolicy">UpdateApprovalPolicy</a></code> | <code>string</code> | [Write] quicksight:UpdateApprovalPolicy. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateBrand">UpdateBrand</a></code> | <code>string</code> | [Write] quicksight:UpdateBrand. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateBrandAssignment">UpdateBrandAssignment</a></code> | <code>string</code> | [Write] quicksight:UpdateBrandAssignment. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateBrandPublishedVersion">UpdateBrandPublishedVersion</a></code> | <code>string</code> | [Write] quicksight:UpdateBrandPublishedVersion. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateChatConfiguration">UpdateChatConfiguration</a></code> | <code>string</code> | [Write] quicksight:UpdateChatConfiguration. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateCustomPermissions">UpdateCustomPermissions</a></code> | <code>string</code> | [Write] quicksight:UpdateCustomPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDashboard">UpdateDashboard</a></code> | <code>string</code> | [Write] quicksight:UpdateDashboard. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDashboardLinks">UpdateDashboardLinks</a></code> | <code>string</code> | [Write] quicksight:UpdateDashboardLinks. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDashboardPermissions">UpdateDashboardPermissions</a></code> | <code>string</code> | [PermissionManagement] quicksight:UpdateDashboardPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDashboardPublishedVersion">UpdateDashboardPublishedVersion</a></code> | <code>string</code> | [Write] quicksight:UpdateDashboardPublishedVersion. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDashboardsQAConfiguration">UpdateDashboardsQAConfiguration</a></code> | <code>string</code> | [Write] quicksight:UpdateDashboardsQAConfiguration. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDataSet">UpdateDataSet</a></code> | <code>string</code> | [Write] quicksight:UpdateDataSet. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDataSetPermissions">UpdateDataSetPermissions</a></code> | <code>string</code> | [PermissionManagement] quicksight:UpdateDataSetPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDataSource">UpdateDataSource</a></code> | <code>string</code> | [Write] quicksight:UpdateDataSource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDataSourcePermissions">UpdateDataSourcePermissions</a></code> | <code>string</code> | [PermissionManagement] quicksight:UpdateDataSourcePermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDefaultQBusinessApplication">UpdateDefaultQBusinessApplication</a></code> | <code>string</code> | [Write] quicksight:UpdateDefaultQBusinessApplication. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDlpSetting">UpdateDlpSetting</a></code> | <code>string</code> | [Write] quicksight:UpdateDlpSetting. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateEmailCustomizationTemplate">UpdateEmailCustomizationTemplate</a></code> | <code>string</code> | [Write] quicksight:UpdateEmailCustomizationTemplate. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateExtensionAccess">UpdateExtensionAccess</a></code> | <code>string</code> | [Write] quicksight:UpdateExtensionAccess. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateFlow">UpdateFlow</a></code> | <code>string</code> | [Write] quicksight:UpdateFlow. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateFlowPermissions">UpdateFlowPermissions</a></code> | <code>string</code> | [PermissionManagement] quicksight:UpdateFlowPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateFolder">UpdateFolder</a></code> | <code>string</code> | [Write] quicksight:UpdateFolder. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateFolderPermissions">UpdateFolderPermissions</a></code> | <code>string</code> | [PermissionManagement] quicksight:UpdateFolderPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateGroup">UpdateGroup</a></code> | <code>string</code> | [Write] quicksight:UpdateGroup. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateIAMPolicyAssignment">UpdateIAMPolicyAssignment</a></code> | <code>string</code> | [Write] quicksight:UpdateIAMPolicyAssignment. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateIdentityPropagationConfig">UpdateIdentityPropagationConfig</a></code> | <code>string</code> | [Write] quicksight:UpdateIdentityPropagationConfig. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateIpRestriction">UpdateIpRestriction</a></code> | <code>string</code> | [Write] quicksight:UpdateIpRestriction. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateKeyRegistration">UpdateKeyRegistration</a></code> | <code>string</code> | [Write] quicksight:UpdateKeyRegistration. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateKnowledgeBase">UpdateKnowledgeBase</a></code> | <code>string</code> | [Write] quicksight:UpdateKnowledgeBase. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateKnowledgeBasePermissions">UpdateKnowledgeBasePermissions</a></code> | <code>string</code> | [PermissionManagement] quicksight:UpdateKnowledgeBasePermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateLimitsProfile">UpdateLimitsProfile</a></code> | <code>string</code> | [Write] quicksight:UpdateLimitsProfile. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateOAuthClientApplication">UpdateOAuthClientApplication</a></code> | <code>string</code> | [Write] quicksight:UpdateOAuthClientApplication. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdatePublicSharingSettings">UpdatePublicSharingSettings</a></code> | <code>string</code> | [Write] quicksight:UpdatePublicSharingSettings. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateQPersonalizationConfiguration">UpdateQPersonalizationConfiguration</a></code> | <code>string</code> | [Write] quicksight:UpdateQPersonalizationConfiguration. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateQuickIndexCapacity">UpdateQuickIndexCapacity</a></code> | <code>string</code> | [Write] quicksight:UpdateQuickIndexCapacity. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateQuickSightQSearchConfiguration">UpdateQuickSightQSearchConfiguration</a></code> | <code>string</code> | [Write] quicksight:UpdateQuickSightQSearchConfiguration. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateRefreshSchedule">UpdateRefreshSchedule</a></code> | <code>string</code> | [Write] quicksight:UpdateRefreshSchedule. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateResourcePermissions">UpdateResourcePermissions</a></code> | <code>string</code> | [Write] quicksight:UpdateResourcePermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateRoleCustomPermission">UpdateRoleCustomPermission</a></code> | <code>string</code> | [Write] quicksight:UpdateRoleCustomPermission. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateSelfUpgrade">UpdateSelfUpgrade</a></code> | <code>string</code> | [Write] quicksight:UpdateSelfUpgrade. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateSelfUpgradeConfiguration">UpdateSelfUpgradeConfiguration</a></code> | <code>string</code> | [Write] quicksight:UpdateSelfUpgradeConfiguration. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateSpace">UpdateSpace</a></code> | <code>string</code> | [Write] quicksight:UpdateSpace. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateSpacePermissions">UpdateSpacePermissions</a></code> | <code>string</code> | [PermissionManagement] quicksight:UpdateSpacePermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateSpaceResources">UpdateSpaceResources</a></code> | <code>string</code> | [Write] quicksight:UpdateSpaceResources. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateSPICECapacityConfiguration">UpdateSPICECapacityConfiguration</a></code> | <code>string</code> | [Write] quicksight:UpdateSPICECapacityConfiguration. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateTemplate">UpdateTemplate</a></code> | <code>string</code> | [Write] quicksight:UpdateTemplate. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateTemplateAlias">UpdateTemplateAlias</a></code> | <code>string</code> | [Write] quicksight:UpdateTemplateAlias. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateTemplatePermissions">UpdateTemplatePermissions</a></code> | <code>string</code> | [PermissionManagement] quicksight:UpdateTemplatePermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateTheme">UpdateTheme</a></code> | <code>string</code> | [Write] quicksight:UpdateTheme. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateThemeAlias">UpdateThemeAlias</a></code> | <code>string</code> | [Write] quicksight:UpdateThemeAlias. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateThemePermissions">UpdateThemePermissions</a></code> | <code>string</code> | [PermissionManagement] quicksight:UpdateThemePermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateTopic">UpdateTopic</a></code> | <code>string</code> | [Write] quicksight:UpdateTopic. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateTopicPermissions">UpdateTopicPermissions</a></code> | <code>string</code> | [PermissionManagement] quicksight:UpdateTopicPermissions. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateTopicRefreshSchedule">UpdateTopicRefreshSchedule</a></code> | <code>string</code> | [Write] quicksight:UpdateTopicRefreshSchedule. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateUser">UpdateUser</a></code> | <code>string</code> | [Write] quicksight:UpdateUser. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateUserCustomPermission">UpdateUserCustomPermission</a></code> | <code>string</code> | [Write] quicksight:UpdateUserCustomPermission. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateVPCConnection">UpdateVPCConnection</a></code> | <code>string</code> | [Write] quicksight:UpdateVPCConnection. |

---

##### `AccountConfigurations`<sup>Required</sup> <a name="AccountConfigurations" id="@cdk_utils/iam.quicksight.QuickSightActions.property.AccountConfigurations"></a>

```typescript
public readonly AccountConfigurations: string;
```

- *Type:* string

[Write] quicksight:AccountConfigurations.

---

##### `actionGetAnonymousUserEmbedUrl`<sup>Required</sup> <a name="actionGetAnonymousUserEmbedUrl" id="@cdk_utils/iam.quicksight.QuickSightActions.property.actionGetAnonymousUserEmbedUrl"></a>

```typescript
public readonly actionGetAnonymousUserEmbedUrl: string;
```

- *Type:* string

[Read] quicksight:GetAnonymousUserEmbedUrl.

---

##### `actionGetAuthCode`<sup>Required</sup> <a name="actionGetAuthCode" id="@cdk_utils/iam.quicksight.QuickSightActions.property.actionGetAuthCode"></a>

```typescript
public readonly actionGetAuthCode: string;
```

- *Type:* string

[Read] quicksight:GetAuthCode.

---

##### `actionGetCustomPermissionsSummary`<sup>Required</sup> <a name="actionGetCustomPermissionsSummary" id="@cdk_utils/iam.quicksight.QuickSightActions.property.actionGetCustomPermissionsSummary"></a>

```typescript
public readonly actionGetCustomPermissionsSummary: string;
```

- *Type:* string

[Read] quicksight:GetCustomPermissionsSummary.

---

##### `actionGetDashboardEmbedUrl`<sup>Required</sup> <a name="actionGetDashboardEmbedUrl" id="@cdk_utils/iam.quicksight.QuickSightActions.property.actionGetDashboardEmbedUrl"></a>

```typescript
public readonly actionGetDashboardEmbedUrl: string;
```

- *Type:* string

[Read] quicksight:GetDashboardEmbedUrl.

---

##### `actionGetFlowMetadata`<sup>Required</sup> <a name="actionGetFlowMetadata" id="@cdk_utils/iam.quicksight.QuickSightActions.property.actionGetFlowMetadata"></a>

```typescript
public readonly actionGetFlowMetadata: string;
```

- *Type:* string

[Read] quicksight:GetFlowMetadata.

---

##### `actionGetFlowPermissions`<sup>Required</sup> <a name="actionGetFlowPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.actionGetFlowPermissions"></a>

```typescript
public readonly actionGetFlowPermissions: string;
```

- *Type:* string

[Read] quicksight:GetFlowPermissions.

---

##### `actionGetGroupMapping`<sup>Required</sup> <a name="actionGetGroupMapping" id="@cdk_utils/iam.quicksight.QuickSightActions.property.actionGetGroupMapping"></a>

```typescript
public readonly actionGetGroupMapping: string;
```

- *Type:* string

[Read] quicksight:GetGroupMapping.

---

##### `actionGetIdentityContext`<sup>Required</sup> <a name="actionGetIdentityContext" id="@cdk_utils/iam.quicksight.QuickSightActions.property.actionGetIdentityContext"></a>

```typescript
public readonly actionGetIdentityContext: string;
```

- *Type:* string

[Read] quicksight:GetIdentityContext.

---

##### `actionGetSessionEmbedUrl`<sup>Required</sup> <a name="actionGetSessionEmbedUrl" id="@cdk_utils/iam.quicksight.QuickSightActions.property.actionGetSessionEmbedUrl"></a>

```typescript
public readonly actionGetSessionEmbedUrl: string;
```

- *Type:* string

[Read] quicksight:GetSessionEmbedUrl.

---

##### `actionSetGroupMapping`<sup>Required</sup> <a name="actionSetGroupMapping" id="@cdk_utils/iam.quicksight.QuickSightActions.property.actionSetGroupMapping"></a>

```typescript
public readonly actionSetGroupMapping: string;
```

- *Type:* string

[Write] quicksight:SetGroupMapping.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowVendedLogDeliveryForResource`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResource" id="@cdk_utils/iam.quicksight.QuickSightActions.property.AllowVendedLogDeliveryForResource"></a>

```typescript
public readonly AllowVendedLogDeliveryForResource: string;
```

- *Type:* string

[PermissionManagement] quicksight:AllowVendedLogDeliveryForResource.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchCreateTopicReviewedAnswer`<sup>Required</sup> <a name="BatchCreateTopicReviewedAnswer" id="@cdk_utils/iam.quicksight.QuickSightActions.property.BatchCreateTopicReviewedAnswer"></a>

```typescript
public readonly BatchCreateTopicReviewedAnswer: string;
```

- *Type:* string

[Write] quicksight:BatchCreateTopicReviewedAnswer.

---

##### `BatchDeleteKnowledgeBase`<sup>Required</sup> <a name="BatchDeleteKnowledgeBase" id="@cdk_utils/iam.quicksight.QuickSightActions.property.BatchDeleteKnowledgeBase"></a>

```typescript
public readonly BatchDeleteKnowledgeBase: string;
```

- *Type:* string

[Write] quicksight:BatchDeleteKnowledgeBase.

---

##### `BatchDeleteTopicReviewedAnswer`<sup>Required</sup> <a name="BatchDeleteTopicReviewedAnswer" id="@cdk_utils/iam.quicksight.QuickSightActions.property.BatchDeleteTopicReviewedAnswer"></a>

```typescript
public readonly BatchDeleteTopicReviewedAnswer: string;
```

- *Type:* string

[Write] quicksight:BatchDeleteTopicReviewedAnswer.

---

##### `BatchDescribeUserLimits`<sup>Required</sup> <a name="BatchDescribeUserLimits" id="@cdk_utils/iam.quicksight.QuickSightActions.property.BatchDescribeUserLimits"></a>

```typescript
public readonly BatchDescribeUserLimits: string;
```

- *Type:* string

[Read] quicksight:BatchDescribeUserLimits.

---

##### `BatchGetPreferences`<sup>Required</sup> <a name="BatchGetPreferences" id="@cdk_utils/iam.quicksight.QuickSightActions.property.BatchGetPreferences"></a>

```typescript
public readonly BatchGetPreferences: string;
```

- *Type:* string

[Read] quicksight:BatchGetPreferences.

---

##### `BatchUpdatePreferences`<sup>Required</sup> <a name="BatchUpdatePreferences" id="@cdk_utils/iam.quicksight.QuickSightActions.property.BatchUpdatePreferences"></a>

```typescript
public readonly BatchUpdatePreferences: string;
```

- *Type:* string

[Write] quicksight:BatchUpdatePreferences.

---

##### `CancelIngestion`<sup>Required</sup> <a name="CancelIngestion" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CancelIngestion"></a>

```typescript
public readonly CancelIngestion: string;
```

- *Type:* string

[Write] quicksight:CancelIngestion.

---

##### `CreateAccountCustomization`<sup>Required</sup> <a name="CreateAccountCustomization" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateAccountCustomization"></a>

```typescript
public readonly CreateAccountCustomization: string;
```

- *Type:* string

[Write] quicksight:CreateAccountCustomization.

---

##### `CreateAccountSubscription`<sup>Required</sup> <a name="CreateAccountSubscription" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateAccountSubscription"></a>

```typescript
public readonly CreateAccountSubscription: string;
```

- *Type:* string

[Write] quicksight:CreateAccountSubscription.

---

##### `CreateActionConnector`<sup>Required</sup> <a name="CreateActionConnector" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateActionConnector"></a>

```typescript
public readonly CreateActionConnector: string;
```

- *Type:* string

[Write] quicksight:CreateActionConnector.

---

##### `CreateAdmin`<sup>Required</sup> <a name="CreateAdmin" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateAdmin"></a>

```typescript
public readonly CreateAdmin: string;
```

- *Type:* string

[Write] quicksight:CreateAdmin.

---

##### `CreateAgent`<sup>Required</sup> <a name="CreateAgent" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateAgent"></a>

```typescript
public readonly CreateAgent: string;
```

- *Type:* string

[Write] quicksight:CreateAgent.

---

##### `CreateAnalysis`<sup>Required</sup> <a name="CreateAnalysis" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateAnalysis"></a>

```typescript
public readonly CreateAnalysis: string;
```

- *Type:* string

[Write] quicksight:CreateAnalysis.

---

##### `CreateApprovalPolicy`<sup>Required</sup> <a name="CreateApprovalPolicy" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateApprovalPolicy"></a>

```typescript
public readonly CreateApprovalPolicy: string;
```

- *Type:* string

[Write] quicksight:CreateApprovalPolicy.

---

##### `CreateBrand`<sup>Required</sup> <a name="CreateBrand" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateBrand"></a>

```typescript
public readonly CreateBrand: string;
```

- *Type:* string

[Write] quicksight:CreateBrand.

---

##### `CreateCustomPermissions`<sup>Required</sup> <a name="CreateCustomPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateCustomPermissions"></a>

```typescript
public readonly CreateCustomPermissions: string;
```

- *Type:* string

[Write] quicksight:CreateCustomPermissions.

---

##### `CreateDashboard`<sup>Required</sup> <a name="CreateDashboard" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateDashboard"></a>

```typescript
public readonly CreateDashboard: string;
```

- *Type:* string

[Write] quicksight:CreateDashboard.

---

##### `CreateDataSet`<sup>Required</sup> <a name="CreateDataSet" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateDataSet"></a>

```typescript
public readonly CreateDataSet: string;
```

- *Type:* string

[Write] quicksight:CreateDataSet.

---

##### `CreateDataSource`<sup>Required</sup> <a name="CreateDataSource" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateDataSource"></a>

```typescript
public readonly CreateDataSource: string;
```

- *Type:* string

[Write] quicksight:CreateDataSource.

---

##### `CreateDlpSetting`<sup>Required</sup> <a name="CreateDlpSetting" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateDlpSetting"></a>

```typescript
public readonly CreateDlpSetting: string;
```

- *Type:* string

[Write] quicksight:CreateDlpSetting.

---

##### `CreateEmailCustomizationTemplate`<sup>Required</sup> <a name="CreateEmailCustomizationTemplate" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateEmailCustomizationTemplate"></a>

```typescript
public readonly CreateEmailCustomizationTemplate: string;
```

- *Type:* string

[Write] quicksight:CreateEmailCustomizationTemplate.

---

##### `CreateExtensionAccess`<sup>Required</sup> <a name="CreateExtensionAccess" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateExtensionAccess"></a>

```typescript
public readonly CreateExtensionAccess: string;
```

- *Type:* string

[Write] quicksight:CreateExtensionAccess.

---

##### `CreateFlow`<sup>Required</sup> <a name="CreateFlow" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateFlow"></a>

```typescript
public readonly CreateFlow: string;
```

- *Type:* string

[Write] quicksight:CreateFlow.

---

##### `CreateFolder`<sup>Required</sup> <a name="CreateFolder" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateFolder"></a>

```typescript
public readonly CreateFolder: string;
```

- *Type:* string

[Write] quicksight:CreateFolder.

---

##### `CreateFolderMembership`<sup>Required</sup> <a name="CreateFolderMembership" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateFolderMembership"></a>

```typescript
public readonly CreateFolderMembership: string;
```

- *Type:* string

[Write] quicksight:CreateFolderMembership.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string;
```

- *Type:* string

[Write] quicksight:CreateGroup.

---

##### `CreateGroupMembership`<sup>Required</sup> <a name="CreateGroupMembership" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateGroupMembership"></a>

```typescript
public readonly CreateGroupMembership: string;
```

- *Type:* string

[Write] quicksight:CreateGroupMembership.

---

##### `CreateIAMPolicyAssignment`<sup>Required</sup> <a name="CreateIAMPolicyAssignment" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateIAMPolicyAssignment"></a>

```typescript
public readonly CreateIAMPolicyAssignment: string;
```

- *Type:* string

[Write] quicksight:CreateIAMPolicyAssignment.

---

##### `CreateIngestion`<sup>Required</sup> <a name="CreateIngestion" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateIngestion"></a>

```typescript
public readonly CreateIngestion: string;
```

- *Type:* string

[Write] quicksight:CreateIngestion.

---

##### `CreateKnowledgeBase`<sup>Required</sup> <a name="CreateKnowledgeBase" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateKnowledgeBase"></a>

```typescript
public readonly CreateKnowledgeBase: string;
```

- *Type:* string

[Write] quicksight:CreateKnowledgeBase.

---

##### `CreateLimitsProfile`<sup>Required</sup> <a name="CreateLimitsProfile" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateLimitsProfile"></a>

```typescript
public readonly CreateLimitsProfile: string;
```

- *Type:* string

[Write] quicksight:CreateLimitsProfile.

---

##### `CreateNamespace`<sup>Required</sup> <a name="CreateNamespace" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateNamespace"></a>

```typescript
public readonly CreateNamespace: string;
```

- *Type:* string

[Write] quicksight:CreateNamespace.

---

##### `CreateOAuthClientApplication`<sup>Required</sup> <a name="CreateOAuthClientApplication" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateOAuthClientApplication"></a>

```typescript
public readonly CreateOAuthClientApplication: string;
```

- *Type:* string

[Write] quicksight:CreateOAuthClientApplication.

---

##### `CreateReader`<sup>Required</sup> <a name="CreateReader" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateReader"></a>

```typescript
public readonly CreateReader: string;
```

- *Type:* string

[Write] quicksight:CreateReader.

---

##### `CreateRefreshSchedule`<sup>Required</sup> <a name="CreateRefreshSchedule" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateRefreshSchedule"></a>

```typescript
public readonly CreateRefreshSchedule: string;
```

- *Type:* string

[Write] quicksight:CreateRefreshSchedule.

---

##### `CreateRoleMembership`<sup>Required</sup> <a name="CreateRoleMembership" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateRoleMembership"></a>

```typescript
public readonly CreateRoleMembership: string;
```

- *Type:* string

[Write] quicksight:CreateRoleMembership.

---

##### `CreateSpace`<sup>Required</sup> <a name="CreateSpace" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateSpace"></a>

```typescript
public readonly CreateSpace: string;
```

- *Type:* string

[Write] quicksight:CreateSpace.

---

##### `CreateTemplate`<sup>Required</sup> <a name="CreateTemplate" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateTemplate"></a>

```typescript
public readonly CreateTemplate: string;
```

- *Type:* string

[Write] quicksight:CreateTemplate.

---

##### `CreateTemplateAlias`<sup>Required</sup> <a name="CreateTemplateAlias" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateTemplateAlias"></a>

```typescript
public readonly CreateTemplateAlias: string;
```

- *Type:* string

[Write] quicksight:CreateTemplateAlias.

---

##### `CreateTheme`<sup>Required</sup> <a name="CreateTheme" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateTheme"></a>

```typescript
public readonly CreateTheme: string;
```

- *Type:* string

[Write] quicksight:CreateTheme.

---

##### `CreateThemeAlias`<sup>Required</sup> <a name="CreateThemeAlias" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateThemeAlias"></a>

```typescript
public readonly CreateThemeAlias: string;
```

- *Type:* string

[Write] quicksight:CreateThemeAlias.

---

##### `CreateTopic`<sup>Required</sup> <a name="CreateTopic" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateTopic"></a>

```typescript
public readonly CreateTopic: string;
```

- *Type:* string

[Write] quicksight:CreateTopic.

---

##### `CreateTopicRefreshSchedule`<sup>Required</sup> <a name="CreateTopicRefreshSchedule" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateTopicRefreshSchedule"></a>

```typescript
public readonly CreateTopicRefreshSchedule: string;
```

- *Type:* string

[Write] quicksight:CreateTopicRefreshSchedule.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateUser"></a>

```typescript
public readonly CreateUser: string;
```

- *Type:* string

[Write] quicksight:CreateUser.

---

##### `CreateVPCConnection`<sup>Required</sup> <a name="CreateVPCConnection" id="@cdk_utils/iam.quicksight.QuickSightActions.property.CreateVPCConnection"></a>

```typescript
public readonly CreateVPCConnection: string;
```

- *Type:* string

[Write] quicksight:CreateVPCConnection.

---

##### `DeleteAccountCustomization`<sup>Required</sup> <a name="DeleteAccountCustomization" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteAccountCustomization"></a>

```typescript
public readonly DeleteAccountCustomization: string;
```

- *Type:* string

[Write] quicksight:DeleteAccountCustomization.

---

##### `DeleteAccountCustomPermission`<sup>Required</sup> <a name="DeleteAccountCustomPermission" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteAccountCustomPermission"></a>

```typescript
public readonly DeleteAccountCustomPermission: string;
```

- *Type:* string

[Write] quicksight:DeleteAccountCustomPermission.

---

##### `DeleteAccountSubscription`<sup>Required</sup> <a name="DeleteAccountSubscription" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteAccountSubscription"></a>

```typescript
public readonly DeleteAccountSubscription: string;
```

- *Type:* string

[Write] quicksight:DeleteAccountSubscription.

---

##### `DeleteActionConnector`<sup>Required</sup> <a name="DeleteActionConnector" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteActionConnector"></a>

```typescript
public readonly DeleteActionConnector: string;
```

- *Type:* string

[Write] quicksight:DeleteActionConnector.

---

##### `DeleteAgent`<sup>Required</sup> <a name="DeleteAgent" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteAgent"></a>

```typescript
public readonly DeleteAgent: string;
```

- *Type:* string

[Write] quicksight:DeleteAgent.

---

##### `DeleteAnalysis`<sup>Required</sup> <a name="DeleteAnalysis" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteAnalysis"></a>

```typescript
public readonly DeleteAnalysis: string;
```

- *Type:* string

[Write] quicksight:DeleteAnalysis.

---

##### `DeleteApp`<sup>Required</sup> <a name="DeleteApp" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteApp"></a>

```typescript
public readonly DeleteApp: string;
```

- *Type:* string

[Write] quicksight:DeleteApp.

---

##### `DeleteApprovalPolicy`<sup>Required</sup> <a name="DeleteApprovalPolicy" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteApprovalPolicy"></a>

```typescript
public readonly DeleteApprovalPolicy: string;
```

- *Type:* string

[Write] quicksight:DeleteApprovalPolicy.

---

##### `DeleteBrand`<sup>Required</sup> <a name="DeleteBrand" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteBrand"></a>

```typescript
public readonly DeleteBrand: string;
```

- *Type:* string

[Write] quicksight:DeleteBrand.

---

##### `DeleteBrandAssignment`<sup>Required</sup> <a name="DeleteBrandAssignment" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteBrandAssignment"></a>

```typescript
public readonly DeleteBrandAssignment: string;
```

- *Type:* string

[Write] quicksight:DeleteBrandAssignment.

---

##### `DeleteCustomPermissions`<sup>Required</sup> <a name="DeleteCustomPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteCustomPermissions"></a>

```typescript
public readonly DeleteCustomPermissions: string;
```

- *Type:* string

[Write] quicksight:DeleteCustomPermissions.

---

##### `DeleteDashboard`<sup>Required</sup> <a name="DeleteDashboard" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteDashboard"></a>

```typescript
public readonly DeleteDashboard: string;
```

- *Type:* string

[Write] quicksight:DeleteDashboard.

---

##### `DeleteDataSet`<sup>Required</sup> <a name="DeleteDataSet" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteDataSet"></a>

```typescript
public readonly DeleteDataSet: string;
```

- *Type:* string

[Write] quicksight:DeleteDataSet.

---

##### `DeleteDataSetRefreshProperties`<sup>Required</sup> <a name="DeleteDataSetRefreshProperties" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteDataSetRefreshProperties"></a>

```typescript
public readonly DeleteDataSetRefreshProperties: string;
```

- *Type:* string

[Write] quicksight:DeleteDataSetRefreshProperties.

---

##### `DeleteDataSource`<sup>Required</sup> <a name="DeleteDataSource" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteDataSource"></a>

```typescript
public readonly DeleteDataSource: string;
```

- *Type:* string

[Write] quicksight:DeleteDataSource.

---

##### `DeleteDefaultQBusinessApplication`<sup>Required</sup> <a name="DeleteDefaultQBusinessApplication" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteDefaultQBusinessApplication"></a>

```typescript
public readonly DeleteDefaultQBusinessApplication: string;
```

- *Type:* string

[Write] quicksight:DeleteDefaultQBusinessApplication.

---

##### `DeleteDlpSetting`<sup>Required</sup> <a name="DeleteDlpSetting" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteDlpSetting"></a>

```typescript
public readonly DeleteDlpSetting: string;
```

- *Type:* string

[Write] quicksight:DeleteDlpSetting.

---

##### `DeleteEmailCustomizationTemplate`<sup>Required</sup> <a name="DeleteEmailCustomizationTemplate" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteEmailCustomizationTemplate"></a>

```typescript
public readonly DeleteEmailCustomizationTemplate: string;
```

- *Type:* string

[Write] quicksight:DeleteEmailCustomizationTemplate.

---

##### `DeleteExtensionAccess`<sup>Required</sup> <a name="DeleteExtensionAccess" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteExtensionAccess"></a>

```typescript
public readonly DeleteExtensionAccess: string;
```

- *Type:* string

[Write] quicksight:DeleteExtensionAccess.

---

##### `DeleteFlow`<sup>Required</sup> <a name="DeleteFlow" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteFlow"></a>

```typescript
public readonly DeleteFlow: string;
```

- *Type:* string

[Write] quicksight:DeleteFlow.

---

##### `DeleteFolder`<sup>Required</sup> <a name="DeleteFolder" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteFolder"></a>

```typescript
public readonly DeleteFolder: string;
```

- *Type:* string

[Write] quicksight:DeleteFolder.

---

##### `DeleteFolderMembership`<sup>Required</sup> <a name="DeleteFolderMembership" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteFolderMembership"></a>

```typescript
public readonly DeleteFolderMembership: string;
```

- *Type:* string

[Write] quicksight:DeleteFolderMembership.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string;
```

- *Type:* string

[Write] quicksight:DeleteGroup.

---

##### `DeleteGroupMembership`<sup>Required</sup> <a name="DeleteGroupMembership" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteGroupMembership"></a>

```typescript
public readonly DeleteGroupMembership: string;
```

- *Type:* string

[Write] quicksight:DeleteGroupMembership.

---

##### `DeleteIAMPolicyAssignment`<sup>Required</sup> <a name="DeleteIAMPolicyAssignment" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteIAMPolicyAssignment"></a>

```typescript
public readonly DeleteIAMPolicyAssignment: string;
```

- *Type:* string

[Write] quicksight:DeleteIAMPolicyAssignment.

---

##### `DeleteIdentityPropagationConfig`<sup>Required</sup> <a name="DeleteIdentityPropagationConfig" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteIdentityPropagationConfig"></a>

```typescript
public readonly DeleteIdentityPropagationConfig: string;
```

- *Type:* string

[Write] quicksight:DeleteIdentityPropagationConfig.

---

##### `DeleteKnowledgeBase`<sup>Required</sup> <a name="DeleteKnowledgeBase" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteKnowledgeBase"></a>

```typescript
public readonly DeleteKnowledgeBase: string;
```

- *Type:* string

[Write] quicksight:DeleteKnowledgeBase.

---

##### `DeleteLimitsProfile`<sup>Required</sup> <a name="DeleteLimitsProfile" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteLimitsProfile"></a>

```typescript
public readonly DeleteLimitsProfile: string;
```

- *Type:* string

[Write] quicksight:DeleteLimitsProfile.

---

##### `DeleteNamespace`<sup>Required</sup> <a name="DeleteNamespace" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteNamespace"></a>

```typescript
public readonly DeleteNamespace: string;
```

- *Type:* string

[Write] quicksight:DeleteNamespace.

---

##### `DeleteOAuthClientApplication`<sup>Required</sup> <a name="DeleteOAuthClientApplication" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteOAuthClientApplication"></a>

```typescript
public readonly DeleteOAuthClientApplication: string;
```

- *Type:* string

[Write] quicksight:DeleteOAuthClientApplication.

---

##### `DeleteRefreshSchedule`<sup>Required</sup> <a name="DeleteRefreshSchedule" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteRefreshSchedule"></a>

```typescript
public readonly DeleteRefreshSchedule: string;
```

- *Type:* string

[Write] quicksight:DeleteRefreshSchedule.

---

##### `DeleteRoleCustomPermission`<sup>Required</sup> <a name="DeleteRoleCustomPermission" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteRoleCustomPermission"></a>

```typescript
public readonly DeleteRoleCustomPermission: string;
```

- *Type:* string

[Write] quicksight:DeleteRoleCustomPermission.

---

##### `DeleteRoleMembership`<sup>Required</sup> <a name="DeleteRoleMembership" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteRoleMembership"></a>

```typescript
public readonly DeleteRoleMembership: string;
```

- *Type:* string

[Write] quicksight:DeleteRoleMembership.

---

##### `DeleteSpace`<sup>Required</sup> <a name="DeleteSpace" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteSpace"></a>

```typescript
public readonly DeleteSpace: string;
```

- *Type:* string

[Write] quicksight:DeleteSpace.

---

##### `DeleteTemplate`<sup>Required</sup> <a name="DeleteTemplate" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteTemplate"></a>

```typescript
public readonly DeleteTemplate: string;
```

- *Type:* string

[Write] quicksight:DeleteTemplate.

---

##### `DeleteTemplateAlias`<sup>Required</sup> <a name="DeleteTemplateAlias" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteTemplateAlias"></a>

```typescript
public readonly DeleteTemplateAlias: string;
```

- *Type:* string

[Write] quicksight:DeleteTemplateAlias.

---

##### `DeleteTheme`<sup>Required</sup> <a name="DeleteTheme" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteTheme"></a>

```typescript
public readonly DeleteTheme: string;
```

- *Type:* string

[Write] quicksight:DeleteTheme.

---

##### `DeleteThemeAlias`<sup>Required</sup> <a name="DeleteThemeAlias" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteThemeAlias"></a>

```typescript
public readonly DeleteThemeAlias: string;
```

- *Type:* string

[Write] quicksight:DeleteThemeAlias.

---

##### `DeleteTopic`<sup>Required</sup> <a name="DeleteTopic" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteTopic"></a>

```typescript
public readonly DeleteTopic: string;
```

- *Type:* string

[Write] quicksight:DeleteTopic.

---

##### `DeleteTopicRefreshSchedule`<sup>Required</sup> <a name="DeleteTopicRefreshSchedule" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteTopicRefreshSchedule"></a>

```typescript
public readonly DeleteTopicRefreshSchedule: string;
```

- *Type:* string

[Write] quicksight:DeleteTopicRefreshSchedule.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string;
```

- *Type:* string

[Write] quicksight:DeleteUser.

---

##### `DeleteUserByPrincipalId`<sup>Required</sup> <a name="DeleteUserByPrincipalId" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteUserByPrincipalId"></a>

```typescript
public readonly DeleteUserByPrincipalId: string;
```

- *Type:* string

[Write] quicksight:DeleteUserByPrincipalId.

---

##### `DeleteUserCustomPermission`<sup>Required</sup> <a name="DeleteUserCustomPermission" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteUserCustomPermission"></a>

```typescript
public readonly DeleteUserCustomPermission: string;
```

- *Type:* string

[Write] quicksight:DeleteUserCustomPermission.

---

##### `DeleteVPCConnection`<sup>Required</sup> <a name="DeleteVPCConnection" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DeleteVPCConnection"></a>

```typescript
public readonly DeleteVPCConnection: string;
```

- *Type:* string

[Write] quicksight:DeleteVPCConnection.

---

##### `DescribeAccountCustomization`<sup>Required</sup> <a name="DescribeAccountCustomization" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAccountCustomization"></a>

```typescript
public readonly DescribeAccountCustomization: string;
```

- *Type:* string

[Read] quicksight:DescribeAccountCustomization.

---

##### `DescribeAccountCustomPermission`<sup>Required</sup> <a name="DescribeAccountCustomPermission" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAccountCustomPermission"></a>

```typescript
public readonly DescribeAccountCustomPermission: string;
```

- *Type:* string

[Read] quicksight:DescribeAccountCustomPermission.

---

##### `DescribeAccountSettings`<sup>Required</sup> <a name="DescribeAccountSettings" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAccountSettings"></a>

```typescript
public readonly DescribeAccountSettings: string;
```

- *Type:* string

[Read] quicksight:DescribeAccountSettings.

---

##### `DescribeAccountSubscription`<sup>Required</sup> <a name="DescribeAccountSubscription" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAccountSubscription"></a>

```typescript
public readonly DescribeAccountSubscription: string;
```

- *Type:* string

[Read] quicksight:DescribeAccountSubscription.

---

##### `DescribeActionConnector`<sup>Required</sup> <a name="DescribeActionConnector" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeActionConnector"></a>

```typescript
public readonly DescribeActionConnector: string;
```

- *Type:* string

[Read] quicksight:DescribeActionConnector.

---

##### `DescribeActionConnectorPermissions`<sup>Required</sup> <a name="DescribeActionConnectorPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeActionConnectorPermissions"></a>

```typescript
public readonly DescribeActionConnectorPermissions: string;
```

- *Type:* string

[Read] quicksight:DescribeActionConnectorPermissions.

---

##### `DescribeAgent`<sup>Required</sup> <a name="DescribeAgent" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAgent"></a>

```typescript
public readonly DescribeAgent: string;
```

- *Type:* string

[Read] quicksight:DescribeAgent.

---

##### `DescribeAgentPermissions`<sup>Required</sup> <a name="DescribeAgentPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAgentPermissions"></a>

```typescript
public readonly DescribeAgentPermissions: string;
```

- *Type:* string

[Read] quicksight:DescribeAgentPermissions.

---

##### `DescribeAnalysis`<sup>Required</sup> <a name="DescribeAnalysis" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAnalysis"></a>

```typescript
public readonly DescribeAnalysis: string;
```

- *Type:* string

[Read] quicksight:DescribeAnalysis.

---

##### `DescribeAnalysisPermissions`<sup>Required</sup> <a name="DescribeAnalysisPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAnalysisPermissions"></a>

```typescript
public readonly DescribeAnalysisPermissions: string;
```

- *Type:* string

[Read] quicksight:DescribeAnalysisPermissions.

---

##### `DescribeApp`<sup>Required</sup> <a name="DescribeApp" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeApp"></a>

```typescript
public readonly DescribeApp: string;
```

- *Type:* string

[Read] quicksight:DescribeApp.

---

##### `DescribeAppPermissions`<sup>Required</sup> <a name="DescribeAppPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAppPermissions"></a>

```typescript
public readonly DescribeAppPermissions: string;
```

- *Type:* string

[Read] quicksight:DescribeAppPermissions.

---

##### `DescribeApprovalPolicy`<sup>Required</sup> <a name="DescribeApprovalPolicy" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeApprovalPolicy"></a>

```typescript
public readonly DescribeApprovalPolicy: string;
```

- *Type:* string

[Read] quicksight:DescribeApprovalPolicy.

---

##### `DescribeAssetBundleExportJob`<sup>Required</sup> <a name="DescribeAssetBundleExportJob" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAssetBundleExportJob"></a>

```typescript
public readonly DescribeAssetBundleExportJob: string;
```

- *Type:* string

[Read] quicksight:DescribeAssetBundleExportJob.

---

##### `DescribeAssetBundleImportJob`<sup>Required</sup> <a name="DescribeAssetBundleImportJob" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAssetBundleImportJob"></a>

```typescript
public readonly DescribeAssetBundleImportJob: string;
```

- *Type:* string

[Read] quicksight:DescribeAssetBundleImportJob.

---

##### `DescribeAutomationJob`<sup>Required</sup> <a name="DescribeAutomationJob" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeAutomationJob"></a>

```typescript
public readonly DescribeAutomationJob: string;
```

- *Type:* string

[Read] quicksight:DescribeAutomationJob.

---

##### `DescribeBrand`<sup>Required</sup> <a name="DescribeBrand" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeBrand"></a>

```typescript
public readonly DescribeBrand: string;
```

- *Type:* string

[Read] quicksight:DescribeBrand.

---

##### `DescribeBrandAssignment`<sup>Required</sup> <a name="DescribeBrandAssignment" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeBrandAssignment"></a>

```typescript
public readonly DescribeBrandAssignment: string;
```

- *Type:* string

[Read] quicksight:DescribeBrandAssignment.

---

##### `DescribeBrandPublishedVersion`<sup>Required</sup> <a name="DescribeBrandPublishedVersion" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeBrandPublishedVersion"></a>

```typescript
public readonly DescribeBrandPublishedVersion: string;
```

- *Type:* string

[Read] quicksight:DescribeBrandPublishedVersion.

---

##### `DescribeChatConfiguration`<sup>Required</sup> <a name="DescribeChatConfiguration" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeChatConfiguration"></a>

```typescript
public readonly DescribeChatConfiguration: string;
```

- *Type:* string

[Read] quicksight:DescribeChatConfiguration.

---

##### `DescribeCustomPermissions`<sup>Required</sup> <a name="DescribeCustomPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeCustomPermissions"></a>

```typescript
public readonly DescribeCustomPermissions: string;
```

- *Type:* string

[Read] quicksight:DescribeCustomPermissions.

---

##### `DescribeDashboard`<sup>Required</sup> <a name="DescribeDashboard" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDashboard"></a>

```typescript
public readonly DescribeDashboard: string;
```

- *Type:* string

[Read] quicksight:DescribeDashboard.

---

##### `DescribeDashboardPermissions`<sup>Required</sup> <a name="DescribeDashboardPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDashboardPermissions"></a>

```typescript
public readonly DescribeDashboardPermissions: string;
```

- *Type:* string

[Read] quicksight:DescribeDashboardPermissions.

---

##### `DescribeDashboardSnapshotJob`<sup>Required</sup> <a name="DescribeDashboardSnapshotJob" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDashboardSnapshotJob"></a>

```typescript
public readonly DescribeDashboardSnapshotJob: string;
```

- *Type:* string

[Read] quicksight:DescribeDashboardSnapshotJob.

---

##### `DescribeDashboardSnapshotJobResult`<sup>Required</sup> <a name="DescribeDashboardSnapshotJobResult" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDashboardSnapshotJobResult"></a>

```typescript
public readonly DescribeDashboardSnapshotJobResult: string;
```

- *Type:* string

[Read] quicksight:DescribeDashboardSnapshotJobResult.

---

##### `DescribeDashboardsQAConfiguration`<sup>Required</sup> <a name="DescribeDashboardsQAConfiguration" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDashboardsQAConfiguration"></a>

```typescript
public readonly DescribeDashboardsQAConfiguration: string;
```

- *Type:* string

[Read] quicksight:DescribeDashboardsQAConfiguration.

---

##### `DescribeDataSet`<sup>Required</sup> <a name="DescribeDataSet" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDataSet"></a>

```typescript
public readonly DescribeDataSet: string;
```

- *Type:* string

[Read] quicksight:DescribeDataSet.

---

##### `DescribeDataSetPermissions`<sup>Required</sup> <a name="DescribeDataSetPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDataSetPermissions"></a>

```typescript
public readonly DescribeDataSetPermissions: string;
```

- *Type:* string

[Read] quicksight:DescribeDataSetPermissions.

---

##### `DescribeDataSetRefreshProperties`<sup>Required</sup> <a name="DescribeDataSetRefreshProperties" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDataSetRefreshProperties"></a>

```typescript
public readonly DescribeDataSetRefreshProperties: string;
```

- *Type:* string

[Read] quicksight:DescribeDataSetRefreshProperties.

---

##### `DescribeDataSource`<sup>Required</sup> <a name="DescribeDataSource" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDataSource"></a>

```typescript
public readonly DescribeDataSource: string;
```

- *Type:* string

[Read] quicksight:DescribeDataSource.

---

##### `DescribeDataSourcePermissions`<sup>Required</sup> <a name="DescribeDataSourcePermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDataSourcePermissions"></a>

```typescript
public readonly DescribeDataSourcePermissions: string;
```

- *Type:* string

[Read] quicksight:DescribeDataSourcePermissions.

---

##### `DescribeDefaultQBusinessApplication`<sup>Required</sup> <a name="DescribeDefaultQBusinessApplication" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDefaultQBusinessApplication"></a>

```typescript
public readonly DescribeDefaultQBusinessApplication: string;
```

- *Type:* string

[Read] quicksight:DescribeDefaultQBusinessApplication.

---

##### `DescribeDlpJob`<sup>Required</sup> <a name="DescribeDlpJob" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDlpJob"></a>

```typescript
public readonly DescribeDlpJob: string;
```

- *Type:* string

[Read] quicksight:DescribeDlpJob.

---

##### `DescribeDlpSetting`<sup>Required</sup> <a name="DescribeDlpSetting" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeDlpSetting"></a>

```typescript
public readonly DescribeDlpSetting: string;
```

- *Type:* string

[Read] quicksight:DescribeDlpSetting.

---

##### `DescribeEmailCustomizationTemplate`<sup>Required</sup> <a name="DescribeEmailCustomizationTemplate" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeEmailCustomizationTemplate"></a>

```typescript
public readonly DescribeEmailCustomizationTemplate: string;
```

- *Type:* string

[Read] quicksight:DescribeEmailCustomizationTemplate.

---

##### `DescribeExtensionAccess`<sup>Required</sup> <a name="DescribeExtensionAccess" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeExtensionAccess"></a>

```typescript
public readonly DescribeExtensionAccess: string;
```

- *Type:* string

[Read] quicksight:DescribeExtensionAccess.

---

##### `DescribeFlow`<sup>Required</sup> <a name="DescribeFlow" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeFlow"></a>

```typescript
public readonly DescribeFlow: string;
```

- *Type:* string

[Read] quicksight:DescribeFlow.

---

##### `DescribeFolder`<sup>Required</sup> <a name="DescribeFolder" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeFolder"></a>

```typescript
public readonly DescribeFolder: string;
```

- *Type:* string

[Read] quicksight:DescribeFolder.

---

##### `DescribeFolderPermissions`<sup>Required</sup> <a name="DescribeFolderPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeFolderPermissions"></a>

```typescript
public readonly DescribeFolderPermissions: string;
```

- *Type:* string

[Read] quicksight:DescribeFolderPermissions.

---

##### `DescribeFolderResolvedPermissions`<sup>Required</sup> <a name="DescribeFolderResolvedPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeFolderResolvedPermissions"></a>

```typescript
public readonly DescribeFolderResolvedPermissions: string;
```

- *Type:* string

[Read] quicksight:DescribeFolderResolvedPermissions.

---

##### `DescribeGroup`<sup>Required</sup> <a name="DescribeGroup" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeGroup"></a>

```typescript
public readonly DescribeGroup: string;
```

- *Type:* string

[Read] quicksight:DescribeGroup.

---

##### `DescribeGroupMembership`<sup>Required</sup> <a name="DescribeGroupMembership" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeGroupMembership"></a>

```typescript
public readonly DescribeGroupMembership: string;
```

- *Type:* string

[Read] quicksight:DescribeGroupMembership.

---

##### `DescribeIAMPolicyAssignment`<sup>Required</sup> <a name="DescribeIAMPolicyAssignment" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeIAMPolicyAssignment"></a>

```typescript
public readonly DescribeIAMPolicyAssignment: string;
```

- *Type:* string

[Read] quicksight:DescribeIAMPolicyAssignment.

---

##### `DescribeIngestion`<sup>Required</sup> <a name="DescribeIngestion" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeIngestion"></a>

```typescript
public readonly DescribeIngestion: string;
```

- *Type:* string

[Read] quicksight:DescribeIngestion.

---

##### `DescribeIpRestriction`<sup>Required</sup> <a name="DescribeIpRestriction" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeIpRestriction"></a>

```typescript
public readonly DescribeIpRestriction: string;
```

- *Type:* string

[Read] quicksight:DescribeIpRestriction.

---

##### `DescribeKeyRegistration`<sup>Required</sup> <a name="DescribeKeyRegistration" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeKeyRegistration"></a>

```typescript
public readonly DescribeKeyRegistration: string;
```

- *Type:* string

[Read] quicksight:DescribeKeyRegistration.

---

##### `DescribeKnowledgeBase`<sup>Required</sup> <a name="DescribeKnowledgeBase" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeKnowledgeBase"></a>

```typescript
public readonly DescribeKnowledgeBase: string;
```

- *Type:* string

[Read] quicksight:DescribeKnowledgeBase.

---

##### `DescribeKnowledgeBasePermissions`<sup>Required</sup> <a name="DescribeKnowledgeBasePermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeKnowledgeBasePermissions"></a>

```typescript
public readonly DescribeKnowledgeBasePermissions: string;
```

- *Type:* string

[PermissionManagement] quicksight:DescribeKnowledgeBasePermissions.

---

##### `DescribeLimitsProfile`<sup>Required</sup> <a name="DescribeLimitsProfile" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeLimitsProfile"></a>

```typescript
public readonly DescribeLimitsProfile: string;
```

- *Type:* string

[Read] quicksight:DescribeLimitsProfile.

---

##### `DescribeNamespace`<sup>Required</sup> <a name="DescribeNamespace" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeNamespace"></a>

```typescript
public readonly DescribeNamespace: string;
```

- *Type:* string

[Read] quicksight:DescribeNamespace.

---

##### `DescribeOAuthClientApplication`<sup>Required</sup> <a name="DescribeOAuthClientApplication" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeOAuthClientApplication"></a>

```typescript
public readonly DescribeOAuthClientApplication: string;
```

- *Type:* string

[Read] quicksight:DescribeOAuthClientApplication.

---

##### `DescribeQPersonalizationConfiguration`<sup>Required</sup> <a name="DescribeQPersonalizationConfiguration" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeQPersonalizationConfiguration"></a>

```typescript
public readonly DescribeQPersonalizationConfiguration: string;
```

- *Type:* string

[Read] quicksight:DescribeQPersonalizationConfiguration.

---

##### `DescribeQuickIndexCapacity`<sup>Required</sup> <a name="DescribeQuickIndexCapacity" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeQuickIndexCapacity"></a>

```typescript
public readonly DescribeQuickIndexCapacity: string;
```

- *Type:* string

[Read] quicksight:DescribeQuickIndexCapacity.

---

##### `DescribeQuickSightQSearchConfiguration`<sup>Required</sup> <a name="DescribeQuickSightQSearchConfiguration" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeQuickSightQSearchConfiguration"></a>

```typescript
public readonly DescribeQuickSightQSearchConfiguration: string;
```

- *Type:* string

[Read] quicksight:DescribeQuickSightQSearchConfiguration.

---

##### `DescribeRefreshSchedule`<sup>Required</sup> <a name="DescribeRefreshSchedule" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeRefreshSchedule"></a>

```typescript
public readonly DescribeRefreshSchedule: string;
```

- *Type:* string

[Read] quicksight:DescribeRefreshSchedule.

---

##### `DescribeRoleCustomPermission`<sup>Required</sup> <a name="DescribeRoleCustomPermission" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeRoleCustomPermission"></a>

```typescript
public readonly DescribeRoleCustomPermission: string;
```

- *Type:* string

[Read] quicksight:DescribeRoleCustomPermission.

---

##### `DescribeSelfUpgradeConfiguration`<sup>Required</sup> <a name="DescribeSelfUpgradeConfiguration" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeSelfUpgradeConfiguration"></a>

```typescript
public readonly DescribeSelfUpgradeConfiguration: string;
```

- *Type:* string

[Read] quicksight:DescribeSelfUpgradeConfiguration.

---

##### `DescribeSpace`<sup>Required</sup> <a name="DescribeSpace" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeSpace"></a>

```typescript
public readonly DescribeSpace: string;
```

- *Type:* string

[Read] quicksight:DescribeSpace.

---

##### `DescribeSpacePermissions`<sup>Required</sup> <a name="DescribeSpacePermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeSpacePermissions"></a>

```typescript
public readonly DescribeSpacePermissions: string;
```

- *Type:* string

[PermissionManagement] quicksight:DescribeSpacePermissions.

---

##### `DescribeTemplate`<sup>Required</sup> <a name="DescribeTemplate" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeTemplate"></a>

```typescript
public readonly DescribeTemplate: string;
```

- *Type:* string

[Read] quicksight:DescribeTemplate.

---

##### `DescribeTemplateAlias`<sup>Required</sup> <a name="DescribeTemplateAlias" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeTemplateAlias"></a>

```typescript
public readonly DescribeTemplateAlias: string;
```

- *Type:* string

[Read] quicksight:DescribeTemplateAlias.

---

##### `DescribeTemplatePermissions`<sup>Required</sup> <a name="DescribeTemplatePermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeTemplatePermissions"></a>

```typescript
public readonly DescribeTemplatePermissions: string;
```

- *Type:* string

[Read] quicksight:DescribeTemplatePermissions.

---

##### `DescribeTheme`<sup>Required</sup> <a name="DescribeTheme" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeTheme"></a>

```typescript
public readonly DescribeTheme: string;
```

- *Type:* string

[Read] quicksight:DescribeTheme.

---

##### `DescribeThemeAlias`<sup>Required</sup> <a name="DescribeThemeAlias" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeThemeAlias"></a>

```typescript
public readonly DescribeThemeAlias: string;
```

- *Type:* string

[Read] quicksight:DescribeThemeAlias.

---

##### `DescribeThemePermissions`<sup>Required</sup> <a name="DescribeThemePermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeThemePermissions"></a>

```typescript
public readonly DescribeThemePermissions: string;
```

- *Type:* string

[Read] quicksight:DescribeThemePermissions.

---

##### `DescribeTopic`<sup>Required</sup> <a name="DescribeTopic" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeTopic"></a>

```typescript
public readonly DescribeTopic: string;
```

- *Type:* string

[Read] quicksight:DescribeTopic.

---

##### `DescribeTopicPermissions`<sup>Required</sup> <a name="DescribeTopicPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeTopicPermissions"></a>

```typescript
public readonly DescribeTopicPermissions: string;
```

- *Type:* string

[PermissionManagement] quicksight:DescribeTopicPermissions.

---

##### `DescribeTopicRefresh`<sup>Required</sup> <a name="DescribeTopicRefresh" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeTopicRefresh"></a>

```typescript
public readonly DescribeTopicRefresh: string;
```

- *Type:* string

[Read] quicksight:DescribeTopicRefresh.

---

##### `DescribeTopicRefreshSchedule`<sup>Required</sup> <a name="DescribeTopicRefreshSchedule" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeTopicRefreshSchedule"></a>

```typescript
public readonly DescribeTopicRefreshSchedule: string;
```

- *Type:* string

[Read] quicksight:DescribeTopicRefreshSchedule.

---

##### `DescribeUser`<sup>Required</sup> <a name="DescribeUser" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeUser"></a>

```typescript
public readonly DescribeUser: string;
```

- *Type:* string

[Read] quicksight:DescribeUser.

---

##### `DescribeVPCConnection`<sup>Required</sup> <a name="DescribeVPCConnection" id="@cdk_utils/iam.quicksight.QuickSightActions.property.DescribeVPCConnection"></a>

```typescript
public readonly DescribeVPCConnection: string;
```

- *Type:* string

[Read] quicksight:DescribeVPCConnection.

---

##### `GenerateEmbedUrlForAnonymousUser`<sup>Required</sup> <a name="GenerateEmbedUrlForAnonymousUser" id="@cdk_utils/iam.quicksight.QuickSightActions.property.GenerateEmbedUrlForAnonymousUser"></a>

```typescript
public readonly GenerateEmbedUrlForAnonymousUser: string;
```

- *Type:* string

[Write] quicksight:GenerateEmbedUrlForAnonymousUser.

---

##### `GenerateEmbedUrlForRegisteredUser`<sup>Required</sup> <a name="GenerateEmbedUrlForRegisteredUser" id="@cdk_utils/iam.quicksight.QuickSightActions.property.GenerateEmbedUrlForRegisteredUser"></a>

```typescript
public readonly GenerateEmbedUrlForRegisteredUser: string;
```

- *Type:* string

[Write] quicksight:GenerateEmbedUrlForRegisteredUser.

---

##### `GenerateEmbedUrlForRegisteredUserWithIdentity`<sup>Required</sup> <a name="GenerateEmbedUrlForRegisteredUserWithIdentity" id="@cdk_utils/iam.quicksight.QuickSightActions.property.GenerateEmbedUrlForRegisteredUserWithIdentity"></a>

```typescript
public readonly GenerateEmbedUrlForRegisteredUserWithIdentity: string;
```

- *Type:* string

[Write] quicksight:GenerateEmbedUrlForRegisteredUserWithIdentity.

---

##### `ListActionConnectors`<sup>Required</sup> <a name="ListActionConnectors" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListActionConnectors"></a>

```typescript
public readonly ListActionConnectors: string;
```

- *Type:* string

[List] quicksight:ListActionConnectors.

---

##### `ListAgents`<sup>Required</sup> <a name="ListAgents" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListAgents"></a>

```typescript
public readonly ListAgents: string;
```

- *Type:* string

[List] quicksight:ListAgents.

---

##### `ListAnalyses`<sup>Required</sup> <a name="ListAnalyses" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListAnalyses"></a>

```typescript
public readonly ListAnalyses: string;
```

- *Type:* string

[List] quicksight:ListAnalyses.

---

##### `ListApprovalPolicies`<sup>Required</sup> <a name="ListApprovalPolicies" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListApprovalPolicies"></a>

```typescript
public readonly ListApprovalPolicies: string;
```

- *Type:* string

[List] quicksight:ListApprovalPolicies.

---

##### `ListApps`<sup>Required</sup> <a name="ListApps" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListApps"></a>

```typescript
public readonly ListApps: string;
```

- *Type:* string

[List] quicksight:ListApps.

---

##### `ListAssetBundleExportJobs`<sup>Required</sup> <a name="ListAssetBundleExportJobs" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListAssetBundleExportJobs"></a>

```typescript
public readonly ListAssetBundleExportJobs: string;
```

- *Type:* string

[List] quicksight:ListAssetBundleExportJobs.

---

##### `ListAssetBundleImportJobs`<sup>Required</sup> <a name="ListAssetBundleImportJobs" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListAssetBundleImportJobs"></a>

```typescript
public readonly ListAssetBundleImportJobs: string;
```

- *Type:* string

[List] quicksight:ListAssetBundleImportJobs.

---

##### `ListBrands`<sup>Required</sup> <a name="ListBrands" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListBrands"></a>

```typescript
public readonly ListBrands: string;
```

- *Type:* string

[List] quicksight:ListBrands.

---

##### `ListCustomerManagedKeys`<sup>Required</sup> <a name="ListCustomerManagedKeys" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListCustomerManagedKeys"></a>

```typescript
public readonly ListCustomerManagedKeys: string;
```

- *Type:* string

[List] quicksight:ListCustomerManagedKeys.

---

##### `ListCustomPermissionAssignments`<sup>Required</sup> <a name="ListCustomPermissionAssignments" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListCustomPermissionAssignments"></a>

```typescript
public readonly ListCustomPermissionAssignments: string;
```

- *Type:* string

[List] quicksight:ListCustomPermissionAssignments.

---

##### `ListCustomPermissions`<sup>Required</sup> <a name="ListCustomPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListCustomPermissions"></a>

```typescript
public readonly ListCustomPermissions: string;
```

- *Type:* string

[List] quicksight:ListCustomPermissions.

---

##### `ListDashboards`<sup>Required</sup> <a name="ListDashboards" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListDashboards"></a>

```typescript
public readonly ListDashboards: string;
```

- *Type:* string

[List] quicksight:ListDashboards.

---

##### `ListDashboardVersions`<sup>Required</sup> <a name="ListDashboardVersions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListDashboardVersions"></a>

```typescript
public readonly ListDashboardVersions: string;
```

- *Type:* string

[List] quicksight:ListDashboardVersions.

---

##### `ListDataSets`<sup>Required</sup> <a name="ListDataSets" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListDataSets"></a>

```typescript
public readonly ListDataSets: string;
```

- *Type:* string

[List] quicksight:ListDataSets.

---

##### `ListDataSources`<sup>Required</sup> <a name="ListDataSources" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListDataSources"></a>

```typescript
public readonly ListDataSources: string;
```

- *Type:* string

[List] quicksight:ListDataSources.

---

##### `ListDlpLabels`<sup>Required</sup> <a name="ListDlpLabels" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListDlpLabels"></a>

```typescript
public readonly ListDlpLabels: string;
```

- *Type:* string

[List] quicksight:ListDlpLabels.

---

##### `ListDlpSettings`<sup>Required</sup> <a name="ListDlpSettings" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListDlpSettings"></a>

```typescript
public readonly ListDlpSettings: string;
```

- *Type:* string

[List] quicksight:ListDlpSettings.

---

##### `ListExtensionAccesses`<sup>Required</sup> <a name="ListExtensionAccesses" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListExtensionAccesses"></a>

```typescript
public readonly ListExtensionAccesses: string;
```

- *Type:* string

[List] quicksight:ListExtensionAccesses.

---

##### `ListFlows`<sup>Required</sup> <a name="ListFlows" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListFlows"></a>

```typescript
public readonly ListFlows: string;
```

- *Type:* string

[List] quicksight:ListFlows.

---

##### `ListFolderMembers`<sup>Required</sup> <a name="ListFolderMembers" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListFolderMembers"></a>

```typescript
public readonly ListFolderMembers: string;
```

- *Type:* string

[Read] quicksight:ListFolderMembers.

---

##### `ListFolders`<sup>Required</sup> <a name="ListFolders" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListFolders"></a>

```typescript
public readonly ListFolders: string;
```

- *Type:* string

[List] quicksight:ListFolders.

---

##### `ListFoldersForResource`<sup>Required</sup> <a name="ListFoldersForResource" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListFoldersForResource"></a>

```typescript
public readonly ListFoldersForResource: string;
```

- *Type:* string

[List] quicksight:ListFoldersForResource.

---

##### `ListGroupMemberships`<sup>Required</sup> <a name="ListGroupMemberships" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListGroupMemberships"></a>

```typescript
public readonly ListGroupMemberships: string;
```

- *Type:* string

[List] quicksight:ListGroupMemberships.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListGroups"></a>

```typescript
public readonly ListGroups: string;
```

- *Type:* string

[List] quicksight:ListGroups.

---

##### `ListIAMPolicyAssignments`<sup>Required</sup> <a name="ListIAMPolicyAssignments" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListIAMPolicyAssignments"></a>

```typescript
public readonly ListIAMPolicyAssignments: string;
```

- *Type:* string

[List] quicksight:ListIAMPolicyAssignments.

---

##### `ListIAMPolicyAssignmentsForUser`<sup>Required</sup> <a name="ListIAMPolicyAssignmentsForUser" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListIAMPolicyAssignmentsForUser"></a>

```typescript
public readonly ListIAMPolicyAssignmentsForUser: string;
```

- *Type:* string

[List] quicksight:ListIAMPolicyAssignmentsForUser.

---

##### `ListIdentityPropagationConfigs`<sup>Required</sup> <a name="ListIdentityPropagationConfigs" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListIdentityPropagationConfigs"></a>

```typescript
public readonly ListIdentityPropagationConfigs: string;
```

- *Type:* string

[List] quicksight:ListIdentityPropagationConfigs.

---

##### `ListIngestions`<sup>Required</sup> <a name="ListIngestions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListIngestions"></a>

```typescript
public readonly ListIngestions: string;
```

- *Type:* string

[List] quicksight:ListIngestions.

---

##### `ListKMSKeysForUser`<sup>Required</sup> <a name="ListKMSKeysForUser" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListKMSKeysForUser"></a>

```typescript
public readonly ListKMSKeysForUser: string;
```

- *Type:* string

[List] quicksight:ListKMSKeysForUser.

---

##### `ListKnowledgeBases`<sup>Required</sup> <a name="ListKnowledgeBases" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListKnowledgeBases"></a>

```typescript
public readonly ListKnowledgeBases: string;
```

- *Type:* string

[List] quicksight:ListKnowledgeBases.

---

##### `ListLimitsProfiles`<sup>Required</sup> <a name="ListLimitsProfiles" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListLimitsProfiles"></a>

```typescript
public readonly ListLimitsProfiles: string;
```

- *Type:* string

[List] quicksight:ListLimitsProfiles.

---

##### `ListNamespaces`<sup>Required</sup> <a name="ListNamespaces" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListNamespaces"></a>

```typescript
public readonly ListNamespaces: string;
```

- *Type:* string

[List] quicksight:ListNamespaces.

---

##### `ListOAuthClientApplications`<sup>Required</sup> <a name="ListOAuthClientApplications" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListOAuthClientApplications"></a>

```typescript
public readonly ListOAuthClientApplications: string;
```

- *Type:* string

[List] quicksight:ListOAuthClientApplications.

---

##### `ListRefreshSchedules`<sup>Required</sup> <a name="ListRefreshSchedules" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListRefreshSchedules"></a>

```typescript
public readonly ListRefreshSchedules: string;
```

- *Type:* string

[List] quicksight:ListRefreshSchedules.

---

##### `ListRoleMemberships`<sup>Required</sup> <a name="ListRoleMemberships" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListRoleMemberships"></a>

```typescript
public readonly ListRoleMemberships: string;
```

- *Type:* string

[List] quicksight:ListRoleMemberships.

---

##### `ListSelfUpgrades`<sup>Required</sup> <a name="ListSelfUpgrades" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListSelfUpgrades"></a>

```typescript
public readonly ListSelfUpgrades: string;
```

- *Type:* string

[List] quicksight:ListSelfUpgrades.

---

##### `ListSpaceResources`<sup>Required</sup> <a name="ListSpaceResources" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListSpaceResources"></a>

```typescript
public readonly ListSpaceResources: string;
```

- *Type:* string

[List] quicksight:ListSpaceResources.

---

##### `ListSpaces`<sup>Required</sup> <a name="ListSpaces" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListSpaces"></a>

```typescript
public readonly ListSpaces: string;
```

- *Type:* string

[List] quicksight:ListSpaces.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] quicksight:ListTagsForResource.

---

##### `ListTemplateAliases`<sup>Required</sup> <a name="ListTemplateAliases" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListTemplateAliases"></a>

```typescript
public readonly ListTemplateAliases: string;
```

- *Type:* string

[List] quicksight:ListTemplateAliases.

---

##### `ListTemplates`<sup>Required</sup> <a name="ListTemplates" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListTemplates"></a>

```typescript
public readonly ListTemplates: string;
```

- *Type:* string

[List] quicksight:ListTemplates.

---

##### `ListTemplateVersions`<sup>Required</sup> <a name="ListTemplateVersions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListTemplateVersions"></a>

```typescript
public readonly ListTemplateVersions: string;
```

- *Type:* string

[List] quicksight:ListTemplateVersions.

---

##### `ListThemeAliases`<sup>Required</sup> <a name="ListThemeAliases" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListThemeAliases"></a>

```typescript
public readonly ListThemeAliases: string;
```

- *Type:* string

[List] quicksight:ListThemeAliases.

---

##### `ListThemes`<sup>Required</sup> <a name="ListThemes" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListThemes"></a>

```typescript
public readonly ListThemes: string;
```

- *Type:* string

[List] quicksight:ListThemes.

---

##### `ListThemeVersions`<sup>Required</sup> <a name="ListThemeVersions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListThemeVersions"></a>

```typescript
public readonly ListThemeVersions: string;
```

- *Type:* string

[List] quicksight:ListThemeVersions.

---

##### `ListTopicRefreshSchedules`<sup>Required</sup> <a name="ListTopicRefreshSchedules" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListTopicRefreshSchedules"></a>

```typescript
public readonly ListTopicRefreshSchedules: string;
```

- *Type:* string

[List] quicksight:ListTopicRefreshSchedules.

---

##### `ListTopicReviewedAnswers`<sup>Required</sup> <a name="ListTopicReviewedAnswers" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListTopicReviewedAnswers"></a>

```typescript
public readonly ListTopicReviewedAnswers: string;
```

- *Type:* string

[List] quicksight:ListTopicReviewedAnswers.

---

##### `ListTopics`<sup>Required</sup> <a name="ListTopics" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListTopics"></a>

```typescript
public readonly ListTopics: string;
```

- *Type:* string

[List] quicksight:ListTopics.

---

##### `ListUserGroups`<sup>Required</sup> <a name="ListUserGroups" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListUserGroups"></a>

```typescript
public readonly ListUserGroups: string;
```

- *Type:* string

[List] quicksight:ListUserGroups.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListUsers"></a>

```typescript
public readonly ListUsers: string;
```

- *Type:* string

[List] quicksight:ListUsers.

---

##### `ListUsersIndexCapacity`<sup>Required</sup> <a name="ListUsersIndexCapacity" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListUsersIndexCapacity"></a>

```typescript
public readonly ListUsersIndexCapacity: string;
```

- *Type:* string

[List] quicksight:ListUsersIndexCapacity.

---

##### `ListVPCConnections`<sup>Required</sup> <a name="ListVPCConnections" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ListVPCConnections"></a>

```typescript
public readonly ListVPCConnections: string;
```

- *Type:* string

[List] quicksight:ListVPCConnections.

---

##### `PassDataSet`<sup>Required</sup> <a name="PassDataSet" id="@cdk_utils/iam.quicksight.QuickSightActions.property.PassDataSet"></a>

```typescript
public readonly PassDataSet: string;
```

- *Type:* string

[Read] quicksight:PassDataSet.

---

##### `PassDataSource`<sup>Required</sup> <a name="PassDataSource" id="@cdk_utils/iam.quicksight.QuickSightActions.property.PassDataSource"></a>

```typescript
public readonly PassDataSource: string;
```

- *Type:* string

[Read] quicksight:PassDataSource.

---

##### `PassTopic`<sup>Required</sup> <a name="PassTopic" id="@cdk_utils/iam.quicksight.QuickSightActions.property.PassTopic"></a>

```typescript
public readonly PassTopic: string;
```

- *Type:* string

[Read] quicksight:PassTopic.

---

##### `PredictQAResults`<sup>Required</sup> <a name="PredictQAResults" id="@cdk_utils/iam.quicksight.QuickSightActions.property.PredictQAResults"></a>

```typescript
public readonly PredictQAResults: string;
```

- *Type:* string

[Read] quicksight:PredictQAResults.

---

##### `PutDataSetRefreshProperties`<sup>Required</sup> <a name="PutDataSetRefreshProperties" id="@cdk_utils/iam.quicksight.QuickSightActions.property.PutDataSetRefreshProperties"></a>

```typescript
public readonly PutDataSetRefreshProperties: string;
```

- *Type:* string

[Write] quicksight:PutDataSetRefreshProperties.

---

##### `QuickSuiteUsageMetrics`<sup>Required</sup> <a name="QuickSuiteUsageMetrics" id="@cdk_utils/iam.quicksight.QuickSightActions.property.QuickSuiteUsageMetrics"></a>

```typescript
public readonly QuickSuiteUsageMetrics: string;
```

- *Type:* string

[Read] quicksight:QuickSuiteUsageMetrics.

---

##### `RegisterCustomerManagedKey`<sup>Required</sup> <a name="RegisterCustomerManagedKey" id="@cdk_utils/iam.quicksight.QuickSightActions.property.RegisterCustomerManagedKey"></a>

```typescript
public readonly RegisterCustomerManagedKey: string;
```

- *Type:* string

[Write] quicksight:RegisterCustomerManagedKey.

---

##### `RegisterUser`<sup>Required</sup> <a name="RegisterUser" id="@cdk_utils/iam.quicksight.QuickSightActions.property.RegisterUser"></a>

```typescript
public readonly RegisterUser: string;
```

- *Type:* string

[Write] quicksight:RegisterUser.

---

##### `RemoveCustomerManagedKey`<sup>Required</sup> <a name="RemoveCustomerManagedKey" id="@cdk_utils/iam.quicksight.QuickSightActions.property.RemoveCustomerManagedKey"></a>

```typescript
public readonly RemoveCustomerManagedKey: string;
```

- *Type:* string

[Write] quicksight:RemoveCustomerManagedKey.

---

##### `RestoreAnalysis`<sup>Required</sup> <a name="RestoreAnalysis" id="@cdk_utils/iam.quicksight.QuickSightActions.property.RestoreAnalysis"></a>

```typescript
public readonly RestoreAnalysis: string;
```

- *Type:* string

[Write] quicksight:RestoreAnalysis.

---

##### `ScopeDownPolicy`<sup>Required</sup> <a name="ScopeDownPolicy" id="@cdk_utils/iam.quicksight.QuickSightActions.property.ScopeDownPolicy"></a>

```typescript
public readonly ScopeDownPolicy: string;
```

- *Type:* string

[Write] quicksight:ScopeDownPolicy.

---

##### `SearchActionConnectors`<sup>Required</sup> <a name="SearchActionConnectors" id="@cdk_utils/iam.quicksight.QuickSightActions.property.SearchActionConnectors"></a>

```typescript
public readonly SearchActionConnectors: string;
```

- *Type:* string

[List] quicksight:SearchActionConnectors.

---

##### `SearchAgents`<sup>Required</sup> <a name="SearchAgents" id="@cdk_utils/iam.quicksight.QuickSightActions.property.SearchAgents"></a>

```typescript
public readonly SearchAgents: string;
```

- *Type:* string

[List] quicksight:SearchAgents.

---

##### `SearchAnalyses`<sup>Required</sup> <a name="SearchAnalyses" id="@cdk_utils/iam.quicksight.QuickSightActions.property.SearchAnalyses"></a>

```typescript
public readonly SearchAnalyses: string;
```

- *Type:* string

[List] quicksight:SearchAnalyses.

---

##### `SearchApps`<sup>Required</sup> <a name="SearchApps" id="@cdk_utils/iam.quicksight.QuickSightActions.property.SearchApps"></a>

```typescript
public readonly SearchApps: string;
```

- *Type:* string

[List] quicksight:SearchApps.

---

##### `SearchDashboards`<sup>Required</sup> <a name="SearchDashboards" id="@cdk_utils/iam.quicksight.QuickSightActions.property.SearchDashboards"></a>

```typescript
public readonly SearchDashboards: string;
```

- *Type:* string

[List] quicksight:SearchDashboards.

---

##### `SearchDataSets`<sup>Required</sup> <a name="SearchDataSets" id="@cdk_utils/iam.quicksight.QuickSightActions.property.SearchDataSets"></a>

```typescript
public readonly SearchDataSets: string;
```

- *Type:* string

[List] quicksight:SearchDataSets.

---

##### `SearchDataSources`<sup>Required</sup> <a name="SearchDataSources" id="@cdk_utils/iam.quicksight.QuickSightActions.property.SearchDataSources"></a>

```typescript
public readonly SearchDataSources: string;
```

- *Type:* string

[List] quicksight:SearchDataSources.

---

##### `SearchDirectoryGroups`<sup>Required</sup> <a name="SearchDirectoryGroups" id="@cdk_utils/iam.quicksight.QuickSightActions.property.SearchDirectoryGroups"></a>

```typescript
public readonly SearchDirectoryGroups: string;
```

- *Type:* string

[List] quicksight:SearchDirectoryGroups.

---

##### `SearchFlows`<sup>Required</sup> <a name="SearchFlows" id="@cdk_utils/iam.quicksight.QuickSightActions.property.SearchFlows"></a>

```typescript
public readonly SearchFlows: string;
```

- *Type:* string

[List] quicksight:SearchFlows.

---

##### `SearchFolders`<sup>Required</sup> <a name="SearchFolders" id="@cdk_utils/iam.quicksight.QuickSightActions.property.SearchFolders"></a>

```typescript
public readonly SearchFolders: string;
```

- *Type:* string

[Read] quicksight:SearchFolders.

---

##### `SearchGroups`<sup>Required</sup> <a name="SearchGroups" id="@cdk_utils/iam.quicksight.QuickSightActions.property.SearchGroups"></a>

```typescript
public readonly SearchGroups: string;
```

- *Type:* string

[List] quicksight:SearchGroups.

---

##### `SearchKnowledgeBases`<sup>Required</sup> <a name="SearchKnowledgeBases" id="@cdk_utils/iam.quicksight.QuickSightActions.property.SearchKnowledgeBases"></a>

```typescript
public readonly SearchKnowledgeBases: string;
```

- *Type:* string

[List] quicksight:SearchKnowledgeBases.

---

##### `SearchSpaces`<sup>Required</sup> <a name="SearchSpaces" id="@cdk_utils/iam.quicksight.QuickSightActions.property.SearchSpaces"></a>

```typescript
public readonly SearchSpaces: string;
```

- *Type:* string

[List] quicksight:SearchSpaces.

---

##### `SearchTopics`<sup>Required</sup> <a name="SearchTopics" id="@cdk_utils/iam.quicksight.QuickSightActions.property.SearchTopics"></a>

```typescript
public readonly SearchTopics: string;
```

- *Type:* string

[List] quicksight:SearchTopics.

---

##### `SearchUsers`<sup>Required</sup> <a name="SearchUsers" id="@cdk_utils/iam.quicksight.QuickSightActions.property.SearchUsers"></a>

```typescript
public readonly SearchUsers: string;
```

- *Type:* string

[List] quicksight:SearchUsers.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.quicksight.QuickSightActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAssetBundleExportJob`<sup>Required</sup> <a name="StartAssetBundleExportJob" id="@cdk_utils/iam.quicksight.QuickSightActions.property.StartAssetBundleExportJob"></a>

```typescript
public readonly StartAssetBundleExportJob: string;
```

- *Type:* string

[Write] quicksight:StartAssetBundleExportJob.

---

##### `StartAssetBundleImportJob`<sup>Required</sup> <a name="StartAssetBundleImportJob" id="@cdk_utils/iam.quicksight.QuickSightActions.property.StartAssetBundleImportJob"></a>

```typescript
public readonly StartAssetBundleImportJob: string;
```

- *Type:* string

[Write] quicksight:StartAssetBundleImportJob.

---

##### `StartAutomationJob`<sup>Required</sup> <a name="StartAutomationJob" id="@cdk_utils/iam.quicksight.QuickSightActions.property.StartAutomationJob"></a>

```typescript
public readonly StartAutomationJob: string;
```

- *Type:* string

[Write] quicksight:StartAutomationJob.

---

##### `StartDashboardSnapshotJob`<sup>Required</sup> <a name="StartDashboardSnapshotJob" id="@cdk_utils/iam.quicksight.QuickSightActions.property.StartDashboardSnapshotJob"></a>

```typescript
public readonly StartDashboardSnapshotJob: string;
```

- *Type:* string

[Write] quicksight:StartDashboardSnapshotJob.

---

##### `StartDashboardSnapshotJobSchedule`<sup>Required</sup> <a name="StartDashboardSnapshotJobSchedule" id="@cdk_utils/iam.quicksight.QuickSightActions.property.StartDashboardSnapshotJobSchedule"></a>

```typescript
public readonly StartDashboardSnapshotJobSchedule: string;
```

- *Type:* string

[Write] quicksight:StartDashboardSnapshotJobSchedule.

---

##### `StartDlpJob`<sup>Required</sup> <a name="StartDlpJob" id="@cdk_utils/iam.quicksight.QuickSightActions.property.StartDlpJob"></a>

```typescript
public readonly StartDlpJob: string;
```

- *Type:* string

[Write] quicksight:StartDlpJob.

---

##### `Subscribe`<sup>Required</sup> <a name="Subscribe" id="@cdk_utils/iam.quicksight.QuickSightActions.property.Subscribe"></a>

```typescript
public readonly Subscribe: string;
```

- *Type:* string

[Write] quicksight:Subscribe.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.quicksight.QuickSightActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] quicksight:TagResource.

---

##### `UnpublishFlow`<sup>Required</sup> <a name="UnpublishFlow" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UnpublishFlow"></a>

```typescript
public readonly UnpublishFlow: string;
```

- *Type:* string

[Write] quicksight:UnpublishFlow.

---

##### `Unsubscribe`<sup>Required</sup> <a name="Unsubscribe" id="@cdk_utils/iam.quicksight.QuickSightActions.property.Unsubscribe"></a>

```typescript
public readonly Unsubscribe: string;
```

- *Type:* string

[Write] quicksight:Unsubscribe.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] quicksight:UntagResource.

---

##### `UpdateAccountCustomization`<sup>Required</sup> <a name="UpdateAccountCustomization" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateAccountCustomization"></a>

```typescript
public readonly UpdateAccountCustomization: string;
```

- *Type:* string

[Write] quicksight:UpdateAccountCustomization.

---

##### `UpdateAccountCustomPermission`<sup>Required</sup> <a name="UpdateAccountCustomPermission" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateAccountCustomPermission"></a>

```typescript
public readonly UpdateAccountCustomPermission: string;
```

- *Type:* string

[Write] quicksight:UpdateAccountCustomPermission.

---

##### `UpdateAccountSettings`<sup>Required</sup> <a name="UpdateAccountSettings" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateAccountSettings"></a>

```typescript
public readonly UpdateAccountSettings: string;
```

- *Type:* string

[Write] quicksight:UpdateAccountSettings.

---

##### `UpdateActionConnector`<sup>Required</sup> <a name="UpdateActionConnector" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateActionConnector"></a>

```typescript
public readonly UpdateActionConnector: string;
```

- *Type:* string

[Write] quicksight:UpdateActionConnector.

---

##### `UpdateActionConnectorPermissions`<sup>Required</sup> <a name="UpdateActionConnectorPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateActionConnectorPermissions"></a>

```typescript
public readonly UpdateActionConnectorPermissions: string;
```

- *Type:* string

[PermissionManagement] quicksight:UpdateActionConnectorPermissions.

---

##### `UpdateAgent`<sup>Required</sup> <a name="UpdateAgent" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateAgent"></a>

```typescript
public readonly UpdateAgent: string;
```

- *Type:* string

[Write] quicksight:UpdateAgent.

---

##### `UpdateAgentPermissions`<sup>Required</sup> <a name="UpdateAgentPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateAgentPermissions"></a>

```typescript
public readonly UpdateAgentPermissions: string;
```

- *Type:* string

[PermissionManagement] quicksight:UpdateAgentPermissions.

---

##### `UpdateAnalysis`<sup>Required</sup> <a name="UpdateAnalysis" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateAnalysis"></a>

```typescript
public readonly UpdateAnalysis: string;
```

- *Type:* string

[Write] quicksight:UpdateAnalysis.

---

##### `UpdateAnalysisPermissions`<sup>Required</sup> <a name="UpdateAnalysisPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateAnalysisPermissions"></a>

```typescript
public readonly UpdateAnalysisPermissions: string;
```

- *Type:* string

[PermissionManagement] quicksight:UpdateAnalysisPermissions.

---

##### `UpdateApplicationWithTokenExchangeGrant`<sup>Required</sup> <a name="UpdateApplicationWithTokenExchangeGrant" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateApplicationWithTokenExchangeGrant"></a>

```typescript
public readonly UpdateApplicationWithTokenExchangeGrant: string;
```

- *Type:* string

[Write] quicksight:UpdateApplicationWithTokenExchangeGrant.

---

##### `UpdateAppPermissions`<sup>Required</sup> <a name="UpdateAppPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateAppPermissions"></a>

```typescript
public readonly UpdateAppPermissions: string;
```

- *Type:* string

[PermissionManagement] quicksight:UpdateAppPermissions.

---

##### `UpdateApprovalPolicy`<sup>Required</sup> <a name="UpdateApprovalPolicy" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateApprovalPolicy"></a>

```typescript
public readonly UpdateApprovalPolicy: string;
```

- *Type:* string

[Write] quicksight:UpdateApprovalPolicy.

---

##### `UpdateBrand`<sup>Required</sup> <a name="UpdateBrand" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateBrand"></a>

```typescript
public readonly UpdateBrand: string;
```

- *Type:* string

[Write] quicksight:UpdateBrand.

---

##### `UpdateBrandAssignment`<sup>Required</sup> <a name="UpdateBrandAssignment" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateBrandAssignment"></a>

```typescript
public readonly UpdateBrandAssignment: string;
```

- *Type:* string

[Write] quicksight:UpdateBrandAssignment.

---

##### `UpdateBrandPublishedVersion`<sup>Required</sup> <a name="UpdateBrandPublishedVersion" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateBrandPublishedVersion"></a>

```typescript
public readonly UpdateBrandPublishedVersion: string;
```

- *Type:* string

[Write] quicksight:UpdateBrandPublishedVersion.

---

##### `UpdateChatConfiguration`<sup>Required</sup> <a name="UpdateChatConfiguration" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateChatConfiguration"></a>

```typescript
public readonly UpdateChatConfiguration: string;
```

- *Type:* string

[Write] quicksight:UpdateChatConfiguration.

---

##### `UpdateCustomPermissions`<sup>Required</sup> <a name="UpdateCustomPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateCustomPermissions"></a>

```typescript
public readonly UpdateCustomPermissions: string;
```

- *Type:* string

[Write] quicksight:UpdateCustomPermissions.

---

##### `UpdateDashboard`<sup>Required</sup> <a name="UpdateDashboard" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDashboard"></a>

```typescript
public readonly UpdateDashboard: string;
```

- *Type:* string

[Write] quicksight:UpdateDashboard.

---

##### `UpdateDashboardLinks`<sup>Required</sup> <a name="UpdateDashboardLinks" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDashboardLinks"></a>

```typescript
public readonly UpdateDashboardLinks: string;
```

- *Type:* string

[Write] quicksight:UpdateDashboardLinks.

---

##### `UpdateDashboardPermissions`<sup>Required</sup> <a name="UpdateDashboardPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDashboardPermissions"></a>

```typescript
public readonly UpdateDashboardPermissions: string;
```

- *Type:* string

[PermissionManagement] quicksight:UpdateDashboardPermissions.

---

##### `UpdateDashboardPublishedVersion`<sup>Required</sup> <a name="UpdateDashboardPublishedVersion" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDashboardPublishedVersion"></a>

```typescript
public readonly UpdateDashboardPublishedVersion: string;
```

- *Type:* string

[Write] quicksight:UpdateDashboardPublishedVersion.

---

##### `UpdateDashboardsQAConfiguration`<sup>Required</sup> <a name="UpdateDashboardsQAConfiguration" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDashboardsQAConfiguration"></a>

```typescript
public readonly UpdateDashboardsQAConfiguration: string;
```

- *Type:* string

[Write] quicksight:UpdateDashboardsQAConfiguration.

---

##### `UpdateDataSet`<sup>Required</sup> <a name="UpdateDataSet" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDataSet"></a>

```typescript
public readonly UpdateDataSet: string;
```

- *Type:* string

[Write] quicksight:UpdateDataSet.

---

##### `UpdateDataSetPermissions`<sup>Required</sup> <a name="UpdateDataSetPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDataSetPermissions"></a>

```typescript
public readonly UpdateDataSetPermissions: string;
```

- *Type:* string

[PermissionManagement] quicksight:UpdateDataSetPermissions.

---

##### `UpdateDataSource`<sup>Required</sup> <a name="UpdateDataSource" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDataSource"></a>

```typescript
public readonly UpdateDataSource: string;
```

- *Type:* string

[Write] quicksight:UpdateDataSource.

---

##### `UpdateDataSourcePermissions`<sup>Required</sup> <a name="UpdateDataSourcePermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDataSourcePermissions"></a>

```typescript
public readonly UpdateDataSourcePermissions: string;
```

- *Type:* string

[PermissionManagement] quicksight:UpdateDataSourcePermissions.

---

##### `UpdateDefaultQBusinessApplication`<sup>Required</sup> <a name="UpdateDefaultQBusinessApplication" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDefaultQBusinessApplication"></a>

```typescript
public readonly UpdateDefaultQBusinessApplication: string;
```

- *Type:* string

[Write] quicksight:UpdateDefaultQBusinessApplication.

---

##### `UpdateDlpSetting`<sup>Required</sup> <a name="UpdateDlpSetting" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateDlpSetting"></a>

```typescript
public readonly UpdateDlpSetting: string;
```

- *Type:* string

[Write] quicksight:UpdateDlpSetting.

---

##### `UpdateEmailCustomizationTemplate`<sup>Required</sup> <a name="UpdateEmailCustomizationTemplate" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateEmailCustomizationTemplate"></a>

```typescript
public readonly UpdateEmailCustomizationTemplate: string;
```

- *Type:* string

[Write] quicksight:UpdateEmailCustomizationTemplate.

---

##### `UpdateExtensionAccess`<sup>Required</sup> <a name="UpdateExtensionAccess" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateExtensionAccess"></a>

```typescript
public readonly UpdateExtensionAccess: string;
```

- *Type:* string

[Write] quicksight:UpdateExtensionAccess.

---

##### `UpdateFlow`<sup>Required</sup> <a name="UpdateFlow" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateFlow"></a>

```typescript
public readonly UpdateFlow: string;
```

- *Type:* string

[Write] quicksight:UpdateFlow.

---

##### `UpdateFlowPermissions`<sup>Required</sup> <a name="UpdateFlowPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateFlowPermissions"></a>

```typescript
public readonly UpdateFlowPermissions: string;
```

- *Type:* string

[PermissionManagement] quicksight:UpdateFlowPermissions.

---

##### `UpdateFolder`<sup>Required</sup> <a name="UpdateFolder" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateFolder"></a>

```typescript
public readonly UpdateFolder: string;
```

- *Type:* string

[Write] quicksight:UpdateFolder.

---

##### `UpdateFolderPermissions`<sup>Required</sup> <a name="UpdateFolderPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateFolderPermissions"></a>

```typescript
public readonly UpdateFolderPermissions: string;
```

- *Type:* string

[PermissionManagement] quicksight:UpdateFolderPermissions.

---

##### `UpdateGroup`<sup>Required</sup> <a name="UpdateGroup" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateGroup"></a>

```typescript
public readonly UpdateGroup: string;
```

- *Type:* string

[Write] quicksight:UpdateGroup.

---

##### `UpdateIAMPolicyAssignment`<sup>Required</sup> <a name="UpdateIAMPolicyAssignment" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateIAMPolicyAssignment"></a>

```typescript
public readonly UpdateIAMPolicyAssignment: string;
```

- *Type:* string

[Write] quicksight:UpdateIAMPolicyAssignment.

---

##### `UpdateIdentityPropagationConfig`<sup>Required</sup> <a name="UpdateIdentityPropagationConfig" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateIdentityPropagationConfig"></a>

```typescript
public readonly UpdateIdentityPropagationConfig: string;
```

- *Type:* string

[Write] quicksight:UpdateIdentityPropagationConfig.

---

##### `UpdateIpRestriction`<sup>Required</sup> <a name="UpdateIpRestriction" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateIpRestriction"></a>

```typescript
public readonly UpdateIpRestriction: string;
```

- *Type:* string

[Write] quicksight:UpdateIpRestriction.

---

##### `UpdateKeyRegistration`<sup>Required</sup> <a name="UpdateKeyRegistration" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateKeyRegistration"></a>

```typescript
public readonly UpdateKeyRegistration: string;
```

- *Type:* string

[Write] quicksight:UpdateKeyRegistration.

---

##### `UpdateKnowledgeBase`<sup>Required</sup> <a name="UpdateKnowledgeBase" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateKnowledgeBase"></a>

```typescript
public readonly UpdateKnowledgeBase: string;
```

- *Type:* string

[Write] quicksight:UpdateKnowledgeBase.

---

##### `UpdateKnowledgeBasePermissions`<sup>Required</sup> <a name="UpdateKnowledgeBasePermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateKnowledgeBasePermissions"></a>

```typescript
public readonly UpdateKnowledgeBasePermissions: string;
```

- *Type:* string

[PermissionManagement] quicksight:UpdateKnowledgeBasePermissions.

---

##### `UpdateLimitsProfile`<sup>Required</sup> <a name="UpdateLimitsProfile" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateLimitsProfile"></a>

```typescript
public readonly UpdateLimitsProfile: string;
```

- *Type:* string

[Write] quicksight:UpdateLimitsProfile.

---

##### `UpdateOAuthClientApplication`<sup>Required</sup> <a name="UpdateOAuthClientApplication" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateOAuthClientApplication"></a>

```typescript
public readonly UpdateOAuthClientApplication: string;
```

- *Type:* string

[Write] quicksight:UpdateOAuthClientApplication.

---

##### `UpdatePublicSharingSettings`<sup>Required</sup> <a name="UpdatePublicSharingSettings" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdatePublicSharingSettings"></a>

```typescript
public readonly UpdatePublicSharingSettings: string;
```

- *Type:* string

[Write] quicksight:UpdatePublicSharingSettings.

---

##### `UpdateQPersonalizationConfiguration`<sup>Required</sup> <a name="UpdateQPersonalizationConfiguration" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateQPersonalizationConfiguration"></a>

```typescript
public readonly UpdateQPersonalizationConfiguration: string;
```

- *Type:* string

[Write] quicksight:UpdateQPersonalizationConfiguration.

---

##### `UpdateQuickIndexCapacity`<sup>Required</sup> <a name="UpdateQuickIndexCapacity" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateQuickIndexCapacity"></a>

```typescript
public readonly UpdateQuickIndexCapacity: string;
```

- *Type:* string

[Write] quicksight:UpdateQuickIndexCapacity.

---

##### `UpdateQuickSightQSearchConfiguration`<sup>Required</sup> <a name="UpdateQuickSightQSearchConfiguration" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateQuickSightQSearchConfiguration"></a>

```typescript
public readonly UpdateQuickSightQSearchConfiguration: string;
```

- *Type:* string

[Write] quicksight:UpdateQuickSightQSearchConfiguration.

---

##### `UpdateRefreshSchedule`<sup>Required</sup> <a name="UpdateRefreshSchedule" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateRefreshSchedule"></a>

```typescript
public readonly UpdateRefreshSchedule: string;
```

- *Type:* string

[Write] quicksight:UpdateRefreshSchedule.

---

##### `UpdateResourcePermissions`<sup>Required</sup> <a name="UpdateResourcePermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateResourcePermissions"></a>

```typescript
public readonly UpdateResourcePermissions: string;
```

- *Type:* string

[Write] quicksight:UpdateResourcePermissions.

---

##### `UpdateRoleCustomPermission`<sup>Required</sup> <a name="UpdateRoleCustomPermission" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateRoleCustomPermission"></a>

```typescript
public readonly UpdateRoleCustomPermission: string;
```

- *Type:* string

[Write] quicksight:UpdateRoleCustomPermission.

---

##### `UpdateSelfUpgrade`<sup>Required</sup> <a name="UpdateSelfUpgrade" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateSelfUpgrade"></a>

```typescript
public readonly UpdateSelfUpgrade: string;
```

- *Type:* string

[Write] quicksight:UpdateSelfUpgrade.

---

##### `UpdateSelfUpgradeConfiguration`<sup>Required</sup> <a name="UpdateSelfUpgradeConfiguration" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateSelfUpgradeConfiguration"></a>

```typescript
public readonly UpdateSelfUpgradeConfiguration: string;
```

- *Type:* string

[Write] quicksight:UpdateSelfUpgradeConfiguration.

---

##### `UpdateSpace`<sup>Required</sup> <a name="UpdateSpace" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateSpace"></a>

```typescript
public readonly UpdateSpace: string;
```

- *Type:* string

[Write] quicksight:UpdateSpace.

---

##### `UpdateSpacePermissions`<sup>Required</sup> <a name="UpdateSpacePermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateSpacePermissions"></a>

```typescript
public readonly UpdateSpacePermissions: string;
```

- *Type:* string

[PermissionManagement] quicksight:UpdateSpacePermissions.

---

##### `UpdateSpaceResources`<sup>Required</sup> <a name="UpdateSpaceResources" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateSpaceResources"></a>

```typescript
public readonly UpdateSpaceResources: string;
```

- *Type:* string

[Write] quicksight:UpdateSpaceResources.

---

##### `UpdateSPICECapacityConfiguration`<sup>Required</sup> <a name="UpdateSPICECapacityConfiguration" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateSPICECapacityConfiguration"></a>

```typescript
public readonly UpdateSPICECapacityConfiguration: string;
```

- *Type:* string

[Write] quicksight:UpdateSPICECapacityConfiguration.

---

##### `UpdateTemplate`<sup>Required</sup> <a name="UpdateTemplate" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateTemplate"></a>

```typescript
public readonly UpdateTemplate: string;
```

- *Type:* string

[Write] quicksight:UpdateTemplate.

---

##### `UpdateTemplateAlias`<sup>Required</sup> <a name="UpdateTemplateAlias" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateTemplateAlias"></a>

```typescript
public readonly UpdateTemplateAlias: string;
```

- *Type:* string

[Write] quicksight:UpdateTemplateAlias.

---

##### `UpdateTemplatePermissions`<sup>Required</sup> <a name="UpdateTemplatePermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateTemplatePermissions"></a>

```typescript
public readonly UpdateTemplatePermissions: string;
```

- *Type:* string

[PermissionManagement] quicksight:UpdateTemplatePermissions.

---

##### `UpdateTheme`<sup>Required</sup> <a name="UpdateTheme" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateTheme"></a>

```typescript
public readonly UpdateTheme: string;
```

- *Type:* string

[Write] quicksight:UpdateTheme.

---

##### `UpdateThemeAlias`<sup>Required</sup> <a name="UpdateThemeAlias" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateThemeAlias"></a>

```typescript
public readonly UpdateThemeAlias: string;
```

- *Type:* string

[Write] quicksight:UpdateThemeAlias.

---

##### `UpdateThemePermissions`<sup>Required</sup> <a name="UpdateThemePermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateThemePermissions"></a>

```typescript
public readonly UpdateThemePermissions: string;
```

- *Type:* string

[PermissionManagement] quicksight:UpdateThemePermissions.

---

##### `UpdateTopic`<sup>Required</sup> <a name="UpdateTopic" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateTopic"></a>

```typescript
public readonly UpdateTopic: string;
```

- *Type:* string

[Write] quicksight:UpdateTopic.

---

##### `UpdateTopicPermissions`<sup>Required</sup> <a name="UpdateTopicPermissions" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateTopicPermissions"></a>

```typescript
public readonly UpdateTopicPermissions: string;
```

- *Type:* string

[PermissionManagement] quicksight:UpdateTopicPermissions.

---

##### `UpdateTopicRefreshSchedule`<sup>Required</sup> <a name="UpdateTopicRefreshSchedule" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateTopicRefreshSchedule"></a>

```typescript
public readonly UpdateTopicRefreshSchedule: string;
```

- *Type:* string

[Write] quicksight:UpdateTopicRefreshSchedule.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string;
```

- *Type:* string

[Write] quicksight:UpdateUser.

---

##### `UpdateUserCustomPermission`<sup>Required</sup> <a name="UpdateUserCustomPermission" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateUserCustomPermission"></a>

```typescript
public readonly UpdateUserCustomPermission: string;
```

- *Type:* string

[Write] quicksight:UpdateUserCustomPermission.

---

##### `UpdateVPCConnection`<sup>Required</sup> <a name="UpdateVPCConnection" id="@cdk_utils/iam.quicksight.QuickSightActions.property.UpdateVPCConnection"></a>

```typescript
public readonly UpdateVPCConnection: string;
```

- *Type:* string

[Write] quicksight:UpdateVPCConnection.

---

### QuickSightConditions <a name="QuickSightConditions" id="@cdk_utils/iam.quicksight.QuickSightConditions"></a>

Condition key constants and builders for quicksight.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.quicksight.QuickSightConditions.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

new quicksight.QuickSightConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.allowedEmbeddingDomains">allowedEmbeddingDomains</a></code> | Generates a condition block for `quicksight:AllowedEmbeddingDomains`. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.directoryType">directoryType</a></code> | Generates a condition block for `quicksight:DirectoryType`. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.edition">edition</a></code> | Generates a condition block for `quicksight:Edition`. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.group">group</a></code> | Generates a condition block for `quicksight:Group`. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.iamARN">iamARN</a></code> | Generates a condition block for `quicksight:IamArn`. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.kmsKeyArns">kmsKeyArns</a></code> | Generates a condition block for `quicksight:KmsKeyArns`. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.sessionName">sessionName</a></code> | Generates a condition block for `quicksight:SessionName`. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.userName">userName</a></code> | Generates a condition block for `quicksight:UserName`. |

---

##### `allowedEmbeddingDomains` <a name="allowedEmbeddingDomains" id="@cdk_utils/iam.quicksight.QuickSightConditions.allowedEmbeddingDomains"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightConditions.allowedEmbeddingDomains(values: string[])
```

Generates a condition block for `quicksight:AllowedEmbeddingDomains`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.quicksight.QuickSightConditions.allowedEmbeddingDomains.parameter.values"></a>

- *Type:* string[]

---

##### `directoryType` <a name="directoryType" id="@cdk_utils/iam.quicksight.QuickSightConditions.directoryType"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightConditions.directoryType(value: string)
```

Generates a condition block for `quicksight:DirectoryType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.quicksight.QuickSightConditions.directoryType.parameter.value"></a>

- *Type:* string

---

##### `edition` <a name="edition" id="@cdk_utils/iam.quicksight.QuickSightConditions.edition"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightConditions.edition(value: string)
```

Generates a condition block for `quicksight:Edition`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.quicksight.QuickSightConditions.edition.parameter.value"></a>

- *Type:* string

---

##### `group` <a name="group" id="@cdk_utils/iam.quicksight.QuickSightConditions.group"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightConditions.group(value: string)
```

Generates a condition block for `quicksight:Group`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.quicksight.QuickSightConditions.group.parameter.value"></a>

- *Type:* string

---

##### `iamARN` <a name="iamARN" id="@cdk_utils/iam.quicksight.QuickSightConditions.iamARN"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightConditions.iamARN(value: string)
```

Generates a condition block for `quicksight:IamArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.quicksight.QuickSightConditions.iamARN.parameter.value"></a>

- *Type:* string

---

##### `kmsKeyArns` <a name="kmsKeyArns" id="@cdk_utils/iam.quicksight.QuickSightConditions.kmsKeyArns"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightConditions.kmsKeyArns(values: string[])
```

Generates a condition block for `quicksight:KmsKeyArns`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.quicksight.QuickSightConditions.kmsKeyArns.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.quicksight.QuickSightConditions.requestTag"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.quicksight.QuickSightConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.quicksight.QuickSightConditions.resourceTag"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.quicksight.QuickSightConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `sessionName` <a name="sessionName" id="@cdk_utils/iam.quicksight.QuickSightConditions.sessionName"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightConditions.sessionName(value: string)
```

Generates a condition block for `quicksight:SessionName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.quicksight.QuickSightConditions.sessionName.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.tagKeys"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.quicksight.QuickSightConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `userName` <a name="userName" id="@cdk_utils/iam.quicksight.QuickSightConditions.userName"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightConditions.userName(value: string)
```

Generates a condition block for `quicksight:UserName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.quicksight.QuickSightConditions.userName.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.ALLOWED_EMBEDDING_DOMAINS">ALLOWED_EMBEDDING_DOMAINS</a></code> | <code>string</code> | Condition key: quicksight:AllowedEmbeddingDomains (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.BatchCreateTopicReviewedAnswerConditionKeys">BatchCreateTopicReviewedAnswerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchCreateTopicReviewedAnswer action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.BatchDeleteTopicReviewedAnswerConditionKeys">BatchDeleteTopicReviewedAnswerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchDeleteTopicReviewedAnswer action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CancelIngestionConditionKeys">CancelIngestionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelIngestion action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateAccountCustomizationConditionKeys">CreateAccountCustomizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAccountCustomization action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateAccountSubscriptionConditionKeys">CreateAccountSubscriptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAccountSubscription action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateActionConnectorConditionKeys">CreateActionConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateActionConnector action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateAnalysisConditionKeys">CreateAnalysisConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAnalysis action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateBrandConditionKeys">CreateBrandConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBrand action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateCustomPermissionsConditionKeys">CreateCustomPermissionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCustomPermissions action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateDashboardConditionKeys">CreateDashboardConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDashboard action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateDataSetConditionKeys">CreateDataSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataSet action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateDataSourceConditionKeys">CreateDataSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataSource action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateDlpSettingConditionKeys">CreateDlpSettingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDlpSetting action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateEmailCustomizationTemplateConditionKeys">CreateEmailCustomizationTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEmailCustomizationTemplate action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateFolderConditionKeys">CreateFolderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFolder action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateGroupMembershipConditionKeys">CreateGroupMembershipConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGroupMembership action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateIngestionConditionKeys">CreateIngestionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIngestion action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateKnowledgeBaseConditionKeys">CreateKnowledgeBaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateKnowledgeBase action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateNamespaceConditionKeys">CreateNamespaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNamespace action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateOAuthClientApplicationConditionKeys">CreateOAuthClientApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOAuthClientApplication action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateRoleMembershipConditionKeys">CreateRoleMembershipConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRoleMembership action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateTemplateAliasConditionKeys">CreateTemplateAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTemplateAlias action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateTemplateConditionKeys">CreateTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTemplate action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateThemeAliasConditionKeys">CreateThemeAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateThemeAlias action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateThemeConditionKeys">CreateThemeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTheme action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateTopicConditionKeys">CreateTopicConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTopic action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateVPCConnectionConditionKeys">CreateVPCConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVPCConnection action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.DeleteDataSetConditionKeys">DeleteDataSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteDataSet action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.DeleteDataSourceConditionKeys">DeleteDataSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteDataSource action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.DeleteOAuthClientApplicationConditionKeys">DeleteOAuthClientApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteOAuthClientApplication action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.DeleteRoleMembershipConditionKeys">DeleteRoleMembershipConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteRoleMembership action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.DeleteTopicConditionKeys">DeleteTopicConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTopic action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.DeleteVPCConnectionConditionKeys">DeleteVPCConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteVPCConnection action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeDataSetConditionKeys">DescribeDataSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeDataSet action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeDataSetPermissionsConditionKeys">DescribeDataSetPermissionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeDataSetPermissions action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeDataSourceConditionKeys">DescribeDataSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeDataSource action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeDataSourcePermissionsConditionKeys">DescribeDataSourcePermissionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeDataSourcePermissions action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeIngestionConditionKeys">DescribeIngestionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeIngestion action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeOAuthClientApplicationConditionKeys">DescribeOAuthClientApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeOAuthClientApplication action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeTopicConditionKeys">DescribeTopicConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeTopic action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeTopicPermissionsConditionKeys">DescribeTopicPermissionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeTopicPermissions action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeTopicRefreshConditionKeys">DescribeTopicRefreshConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeTopicRefresh action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeVPCConnectionConditionKeys">DescribeVPCConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeVPCConnection action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.DIRECTORY_TYPE">DIRECTORY_TYPE</a></code> | <code>string</code> | Condition key: quicksight:DirectoryType (String). |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.EDITION">EDITION</a></code> | <code>string</code> | Condition key: quicksight:Edition (String). |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.GenerateEmbedUrlForAnonymousUserConditionKeys">GenerateEmbedUrlForAnonymousUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GenerateEmbedUrlForAnonymousUser action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.GenerateEmbedUrlForRegisteredUserConditionKeys">GenerateEmbedUrlForRegisteredUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GenerateEmbedUrlForRegisteredUser action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.GenerateEmbedUrlForRegisteredUserWithIdentityConditionKeys">GenerateEmbedUrlForRegisteredUserWithIdentityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GenerateEmbedUrlForRegisteredUserWithIdentity action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.GROUP">GROUP</a></code> | <code>string</code> | Condition key: quicksight:Group (ARN). |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.IAM_ARN">IAM_ARN</a></code> | <code>string</code> | Condition key: quicksight:IamArn (ARN). |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.KMS_KEY_ARNS">KMS_KEY_ARNS</a></code> | <code>string</code> | Condition key: quicksight:KmsKeyArns (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.ListDataSetsConditionKeys">ListDataSetsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListDataSets action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.ListDataSourcesConditionKeys">ListDataSourcesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListDataSources action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.ListIngestionsConditionKeys">ListIngestionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListIngestions action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.ListOAuthClientApplicationsConditionKeys">ListOAuthClientApplicationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListOAuthClientApplications action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.ListTopicReviewedAnswersConditionKeys">ListTopicReviewedAnswersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTopicReviewedAnswers action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.ListTopicsConditionKeys">ListTopicsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTopics action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.ListVPCConnectionsConditionKeys">ListVPCConnectionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListVPCConnections action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.PassDataSetConditionKeys">PassDataSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PassDataSet action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.PassDataSourceConditionKeys">PassDataSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PassDataSource action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.PassTopicConditionKeys">PassTopicConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PassTopic action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.RegisterUserConditionKeys">RegisterUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterUser action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.SESSION_NAME">SESSION_NAME</a></code> | <code>string</code> | Condition key: quicksight:SessionName (String). |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.SubscribeConditionKeys">SubscribeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Subscribe action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.UpdateDataSetConditionKeys">UpdateDataSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDataSet action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.UpdateDataSetPermissionsConditionKeys">UpdateDataSetPermissionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDataSetPermissions action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.UpdateDataSourceConditionKeys">UpdateDataSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDataSource action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.UpdateDataSourcePermissionsConditionKeys">UpdateDataSourcePermissionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDataSourcePermissions action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.UpdateOAuthClientApplicationConditionKeys">UpdateOAuthClientApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateOAuthClientApplication action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.UpdateTopicConditionKeys">UpdateTopicConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateTopic action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.UpdateTopicPermissionsConditionKeys">UpdateTopicPermissionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateTopicPermissions action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.UpdateVPCConnectionConditionKeys">UpdateVPCConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateVPCConnection action. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightConditions.property.USER_NAME">USER_NAME</a></code> | <code>string</code> | Condition key: quicksight:UserName (String). |

---

##### `ALLOWED_EMBEDDING_DOMAINS`<sup>Required</sup> <a name="ALLOWED_EMBEDDING_DOMAINS" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.ALLOWED_EMBEDDING_DOMAINS"></a>

```typescript
public readonly ALLOWED_EMBEDDING_DOMAINS: string;
```

- *Type:* string

Condition key: quicksight:AllowedEmbeddingDomains (ArrayOfString).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BatchCreateTopicReviewedAnswerConditionKeys`<sup>Required</sup> <a name="BatchCreateTopicReviewedAnswerConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.BatchCreateTopicReviewedAnswerConditionKeys"></a>

```typescript
public readonly BatchCreateTopicReviewedAnswerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchCreateTopicReviewedAnswer action.

---

##### `BatchDeleteTopicReviewedAnswerConditionKeys`<sup>Required</sup> <a name="BatchDeleteTopicReviewedAnswerConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.BatchDeleteTopicReviewedAnswerConditionKeys"></a>

```typescript
public readonly BatchDeleteTopicReviewedAnswerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchDeleteTopicReviewedAnswer action.

---

##### `CancelIngestionConditionKeys`<sup>Required</sup> <a name="CancelIngestionConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CancelIngestionConditionKeys"></a>

```typescript
public readonly CancelIngestionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelIngestion action.

---

##### `CreateAccountCustomizationConditionKeys`<sup>Required</sup> <a name="CreateAccountCustomizationConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateAccountCustomizationConditionKeys"></a>

```typescript
public readonly CreateAccountCustomizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAccountCustomization action.

---

##### `CreateAccountSubscriptionConditionKeys`<sup>Required</sup> <a name="CreateAccountSubscriptionConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateAccountSubscriptionConditionKeys"></a>

```typescript
public readonly CreateAccountSubscriptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAccountSubscription action.

---

##### `CreateActionConnectorConditionKeys`<sup>Required</sup> <a name="CreateActionConnectorConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateActionConnectorConditionKeys"></a>

```typescript
public readonly CreateActionConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateActionConnector action.

---

##### `CreateAnalysisConditionKeys`<sup>Required</sup> <a name="CreateAnalysisConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateAnalysisConditionKeys"></a>

```typescript
public readonly CreateAnalysisConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAnalysis action.

---

##### `CreateBrandConditionKeys`<sup>Required</sup> <a name="CreateBrandConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateBrandConditionKeys"></a>

```typescript
public readonly CreateBrandConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBrand action.

---

##### `CreateCustomPermissionsConditionKeys`<sup>Required</sup> <a name="CreateCustomPermissionsConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateCustomPermissionsConditionKeys"></a>

```typescript
public readonly CreateCustomPermissionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCustomPermissions action.

---

##### `CreateDashboardConditionKeys`<sup>Required</sup> <a name="CreateDashboardConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateDashboardConditionKeys"></a>

```typescript
public readonly CreateDashboardConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDashboard action.

---

##### `CreateDataSetConditionKeys`<sup>Required</sup> <a name="CreateDataSetConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateDataSetConditionKeys"></a>

```typescript
public readonly CreateDataSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataSet action.

---

##### `CreateDataSourceConditionKeys`<sup>Required</sup> <a name="CreateDataSourceConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateDataSourceConditionKeys"></a>

```typescript
public readonly CreateDataSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataSource action.

---

##### `CreateDlpSettingConditionKeys`<sup>Required</sup> <a name="CreateDlpSettingConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateDlpSettingConditionKeys"></a>

```typescript
public readonly CreateDlpSettingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDlpSetting action.

---

##### `CreateEmailCustomizationTemplateConditionKeys`<sup>Required</sup> <a name="CreateEmailCustomizationTemplateConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateEmailCustomizationTemplateConditionKeys"></a>

```typescript
public readonly CreateEmailCustomizationTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEmailCustomizationTemplate action.

---

##### `CreateFolderConditionKeys`<sup>Required</sup> <a name="CreateFolderConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateFolderConditionKeys"></a>

```typescript
public readonly CreateFolderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFolder action.

---

##### `CreateGroupMembershipConditionKeys`<sup>Required</sup> <a name="CreateGroupMembershipConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateGroupMembershipConditionKeys"></a>

```typescript
public readonly CreateGroupMembershipConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGroupMembership action.

---

##### `CreateIngestionConditionKeys`<sup>Required</sup> <a name="CreateIngestionConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateIngestionConditionKeys"></a>

```typescript
public readonly CreateIngestionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIngestion action.

---

##### `CreateKnowledgeBaseConditionKeys`<sup>Required</sup> <a name="CreateKnowledgeBaseConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateKnowledgeBaseConditionKeys"></a>

```typescript
public readonly CreateKnowledgeBaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateKnowledgeBase action.

---

##### `CreateNamespaceConditionKeys`<sup>Required</sup> <a name="CreateNamespaceConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateNamespaceConditionKeys"></a>

```typescript
public readonly CreateNamespaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNamespace action.

---

##### `CreateOAuthClientApplicationConditionKeys`<sup>Required</sup> <a name="CreateOAuthClientApplicationConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateOAuthClientApplicationConditionKeys"></a>

```typescript
public readonly CreateOAuthClientApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOAuthClientApplication action.

---

##### `CreateRoleMembershipConditionKeys`<sup>Required</sup> <a name="CreateRoleMembershipConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateRoleMembershipConditionKeys"></a>

```typescript
public readonly CreateRoleMembershipConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRoleMembership action.

---

##### `CreateTemplateAliasConditionKeys`<sup>Required</sup> <a name="CreateTemplateAliasConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateTemplateAliasConditionKeys"></a>

```typescript
public readonly CreateTemplateAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTemplateAlias action.

---

##### `CreateTemplateConditionKeys`<sup>Required</sup> <a name="CreateTemplateConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateTemplateConditionKeys"></a>

```typescript
public readonly CreateTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTemplate action.

---

##### `CreateThemeAliasConditionKeys`<sup>Required</sup> <a name="CreateThemeAliasConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateThemeAliasConditionKeys"></a>

```typescript
public readonly CreateThemeAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateThemeAlias action.

---

##### `CreateThemeConditionKeys`<sup>Required</sup> <a name="CreateThemeConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateThemeConditionKeys"></a>

```typescript
public readonly CreateThemeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTheme action.

---

##### `CreateTopicConditionKeys`<sup>Required</sup> <a name="CreateTopicConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateTopicConditionKeys"></a>

```typescript
public readonly CreateTopicConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTopic action.

---

##### `CreateVPCConnectionConditionKeys`<sup>Required</sup> <a name="CreateVPCConnectionConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.CreateVPCConnectionConditionKeys"></a>

```typescript
public readonly CreateVPCConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVPCConnection action.

---

##### `DeleteDataSetConditionKeys`<sup>Required</sup> <a name="DeleteDataSetConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.DeleteDataSetConditionKeys"></a>

```typescript
public readonly DeleteDataSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteDataSet action.

---

##### `DeleteDataSourceConditionKeys`<sup>Required</sup> <a name="DeleteDataSourceConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.DeleteDataSourceConditionKeys"></a>

```typescript
public readonly DeleteDataSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteDataSource action.

---

##### `DeleteOAuthClientApplicationConditionKeys`<sup>Required</sup> <a name="DeleteOAuthClientApplicationConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.DeleteOAuthClientApplicationConditionKeys"></a>

```typescript
public readonly DeleteOAuthClientApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteOAuthClientApplication action.

---

##### `DeleteRoleMembershipConditionKeys`<sup>Required</sup> <a name="DeleteRoleMembershipConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.DeleteRoleMembershipConditionKeys"></a>

```typescript
public readonly DeleteRoleMembershipConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteRoleMembership action.

---

##### `DeleteTopicConditionKeys`<sup>Required</sup> <a name="DeleteTopicConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.DeleteTopicConditionKeys"></a>

```typescript
public readonly DeleteTopicConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTopic action.

---

##### `DeleteVPCConnectionConditionKeys`<sup>Required</sup> <a name="DeleteVPCConnectionConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.DeleteVPCConnectionConditionKeys"></a>

```typescript
public readonly DeleteVPCConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteVPCConnection action.

---

##### `DescribeDataSetConditionKeys`<sup>Required</sup> <a name="DescribeDataSetConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeDataSetConditionKeys"></a>

```typescript
public readonly DescribeDataSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeDataSet action.

---

##### `DescribeDataSetPermissionsConditionKeys`<sup>Required</sup> <a name="DescribeDataSetPermissionsConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeDataSetPermissionsConditionKeys"></a>

```typescript
public readonly DescribeDataSetPermissionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeDataSetPermissions action.

---

##### `DescribeDataSourceConditionKeys`<sup>Required</sup> <a name="DescribeDataSourceConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeDataSourceConditionKeys"></a>

```typescript
public readonly DescribeDataSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeDataSource action.

---

##### `DescribeDataSourcePermissionsConditionKeys`<sup>Required</sup> <a name="DescribeDataSourcePermissionsConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeDataSourcePermissionsConditionKeys"></a>

```typescript
public readonly DescribeDataSourcePermissionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeDataSourcePermissions action.

---

##### `DescribeIngestionConditionKeys`<sup>Required</sup> <a name="DescribeIngestionConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeIngestionConditionKeys"></a>

```typescript
public readonly DescribeIngestionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeIngestion action.

---

##### `DescribeOAuthClientApplicationConditionKeys`<sup>Required</sup> <a name="DescribeOAuthClientApplicationConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeOAuthClientApplicationConditionKeys"></a>

```typescript
public readonly DescribeOAuthClientApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeOAuthClientApplication action.

---

##### `DescribeTopicConditionKeys`<sup>Required</sup> <a name="DescribeTopicConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeTopicConditionKeys"></a>

```typescript
public readonly DescribeTopicConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeTopic action.

---

##### `DescribeTopicPermissionsConditionKeys`<sup>Required</sup> <a name="DescribeTopicPermissionsConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeTopicPermissionsConditionKeys"></a>

```typescript
public readonly DescribeTopicPermissionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeTopicPermissions action.

---

##### `DescribeTopicRefreshConditionKeys`<sup>Required</sup> <a name="DescribeTopicRefreshConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeTopicRefreshConditionKeys"></a>

```typescript
public readonly DescribeTopicRefreshConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeTopicRefresh action.

---

##### `DescribeVPCConnectionConditionKeys`<sup>Required</sup> <a name="DescribeVPCConnectionConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.DescribeVPCConnectionConditionKeys"></a>

```typescript
public readonly DescribeVPCConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeVPCConnection action.

---

##### `DIRECTORY_TYPE`<sup>Required</sup> <a name="DIRECTORY_TYPE" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.DIRECTORY_TYPE"></a>

```typescript
public readonly DIRECTORY_TYPE: string;
```

- *Type:* string

Condition key: quicksight:DirectoryType (String).

---

##### `EDITION`<sup>Required</sup> <a name="EDITION" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.EDITION"></a>

```typescript
public readonly EDITION: string;
```

- *Type:* string

Condition key: quicksight:Edition (String).

---

##### `GenerateEmbedUrlForAnonymousUserConditionKeys`<sup>Required</sup> <a name="GenerateEmbedUrlForAnonymousUserConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.GenerateEmbedUrlForAnonymousUserConditionKeys"></a>

```typescript
public readonly GenerateEmbedUrlForAnonymousUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GenerateEmbedUrlForAnonymousUser action.

---

##### `GenerateEmbedUrlForRegisteredUserConditionKeys`<sup>Required</sup> <a name="GenerateEmbedUrlForRegisteredUserConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.GenerateEmbedUrlForRegisteredUserConditionKeys"></a>

```typescript
public readonly GenerateEmbedUrlForRegisteredUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GenerateEmbedUrlForRegisteredUser action.

---

##### `GenerateEmbedUrlForRegisteredUserWithIdentityConditionKeys`<sup>Required</sup> <a name="GenerateEmbedUrlForRegisteredUserWithIdentityConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.GenerateEmbedUrlForRegisteredUserWithIdentityConditionKeys"></a>

```typescript
public readonly GenerateEmbedUrlForRegisteredUserWithIdentityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GenerateEmbedUrlForRegisteredUserWithIdentity action.

---

##### `GROUP`<sup>Required</sup> <a name="GROUP" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.GROUP"></a>

```typescript
public readonly GROUP: string;
```

- *Type:* string

Condition key: quicksight:Group (ARN).

---

##### `IAM_ARN`<sup>Required</sup> <a name="IAM_ARN" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.IAM_ARN"></a>

```typescript
public readonly IAM_ARN: string;
```

- *Type:* string

Condition key: quicksight:IamArn (ARN).

---

##### `KMS_KEY_ARNS`<sup>Required</sup> <a name="KMS_KEY_ARNS" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.KMS_KEY_ARNS"></a>

```typescript
public readonly KMS_KEY_ARNS: string;
```

- *Type:* string

Condition key: quicksight:KmsKeyArns (ArrayOfARN).

---

##### `ListDataSetsConditionKeys`<sup>Required</sup> <a name="ListDataSetsConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.ListDataSetsConditionKeys"></a>

```typescript
public readonly ListDataSetsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListDataSets action.

---

##### `ListDataSourcesConditionKeys`<sup>Required</sup> <a name="ListDataSourcesConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.ListDataSourcesConditionKeys"></a>

```typescript
public readonly ListDataSourcesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListDataSources action.

---

##### `ListIngestionsConditionKeys`<sup>Required</sup> <a name="ListIngestionsConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.ListIngestionsConditionKeys"></a>

```typescript
public readonly ListIngestionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListIngestions action.

---

##### `ListOAuthClientApplicationsConditionKeys`<sup>Required</sup> <a name="ListOAuthClientApplicationsConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.ListOAuthClientApplicationsConditionKeys"></a>

```typescript
public readonly ListOAuthClientApplicationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListOAuthClientApplications action.

---

##### `ListTopicReviewedAnswersConditionKeys`<sup>Required</sup> <a name="ListTopicReviewedAnswersConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.ListTopicReviewedAnswersConditionKeys"></a>

```typescript
public readonly ListTopicReviewedAnswersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTopicReviewedAnswers action.

---

##### `ListTopicsConditionKeys`<sup>Required</sup> <a name="ListTopicsConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.ListTopicsConditionKeys"></a>

```typescript
public readonly ListTopicsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTopics action.

---

##### `ListVPCConnectionsConditionKeys`<sup>Required</sup> <a name="ListVPCConnectionsConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.ListVPCConnectionsConditionKeys"></a>

```typescript
public readonly ListVPCConnectionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListVPCConnections action.

---

##### `PassDataSetConditionKeys`<sup>Required</sup> <a name="PassDataSetConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.PassDataSetConditionKeys"></a>

```typescript
public readonly PassDataSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PassDataSet action.

---

##### `PassDataSourceConditionKeys`<sup>Required</sup> <a name="PassDataSourceConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.PassDataSourceConditionKeys"></a>

```typescript
public readonly PassDataSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PassDataSource action.

---

##### `PassTopicConditionKeys`<sup>Required</sup> <a name="PassTopicConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.PassTopicConditionKeys"></a>

```typescript
public readonly PassTopicConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PassTopic action.

---

##### `RegisterUserConditionKeys`<sup>Required</sup> <a name="RegisterUserConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.RegisterUserConditionKeys"></a>

```typescript
public readonly RegisterUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterUser action.

---

##### `SESSION_NAME`<sup>Required</sup> <a name="SESSION_NAME" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.SESSION_NAME"></a>

```typescript
public readonly SESSION_NAME: string;
```

- *Type:* string

Condition key: quicksight:SessionName (String).

---

##### `SubscribeConditionKeys`<sup>Required</sup> <a name="SubscribeConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.SubscribeConditionKeys"></a>

```typescript
public readonly SubscribeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Subscribe action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateDataSetConditionKeys`<sup>Required</sup> <a name="UpdateDataSetConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.UpdateDataSetConditionKeys"></a>

```typescript
public readonly UpdateDataSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDataSet action.

---

##### `UpdateDataSetPermissionsConditionKeys`<sup>Required</sup> <a name="UpdateDataSetPermissionsConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.UpdateDataSetPermissionsConditionKeys"></a>

```typescript
public readonly UpdateDataSetPermissionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDataSetPermissions action.

---

##### `UpdateDataSourceConditionKeys`<sup>Required</sup> <a name="UpdateDataSourceConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.UpdateDataSourceConditionKeys"></a>

```typescript
public readonly UpdateDataSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDataSource action.

---

##### `UpdateDataSourcePermissionsConditionKeys`<sup>Required</sup> <a name="UpdateDataSourcePermissionsConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.UpdateDataSourcePermissionsConditionKeys"></a>

```typescript
public readonly UpdateDataSourcePermissionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDataSourcePermissions action.

---

##### `UpdateOAuthClientApplicationConditionKeys`<sup>Required</sup> <a name="UpdateOAuthClientApplicationConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.UpdateOAuthClientApplicationConditionKeys"></a>

```typescript
public readonly UpdateOAuthClientApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateOAuthClientApplication action.

---

##### `UpdateTopicConditionKeys`<sup>Required</sup> <a name="UpdateTopicConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.UpdateTopicConditionKeys"></a>

```typescript
public readonly UpdateTopicConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateTopic action.

---

##### `UpdateTopicPermissionsConditionKeys`<sup>Required</sup> <a name="UpdateTopicPermissionsConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.UpdateTopicPermissionsConditionKeys"></a>

```typescript
public readonly UpdateTopicPermissionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateTopicPermissions action.

---

##### `UpdateVPCConnectionConditionKeys`<sup>Required</sup> <a name="UpdateVPCConnectionConditionKeys" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.UpdateVPCConnectionConditionKeys"></a>

```typescript
public readonly UpdateVPCConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateVPCConnection action.

---

##### `USER_NAME`<sup>Required</sup> <a name="USER_NAME" id="@cdk_utils/iam.quicksight.QuickSightConditions.property.USER_NAME"></a>

```typescript
public readonly USER_NAME: string;
```

- *Type:* string

Condition key: quicksight:UserName (String).

---

### QuickSightOperations <a name="QuickSightOperations" id="@cdk_utils/iam.quicksight.QuickSightOperations"></a>

API operation to required IAM actions mapping for quicksight.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.quicksight.QuickSightOperations.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

new quicksight.QuickSightOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.BatchCreateTopicReviewedAnswer">BatchCreateTopicReviewedAnswer</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateTopicReviewedAnswer API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.BatchDeleteKnowledgeBase">BatchDeleteKnowledgeBase</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteKnowledgeBase API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.BatchDeleteTopicReviewedAnswer">BatchDeleteTopicReviewedAnswer</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteTopicReviewedAnswer API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.BatchDescribeUserLimits">BatchDescribeUserLimits</a></code> | <code>string[]</code> | IAM actions required for the BatchDescribeUserLimits API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CancelIngestion">CancelIngestion</a></code> | <code>string[]</code> | IAM actions required for the CancelIngestion API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateAccountCustomization">CreateAccountCustomization</a></code> | <code>string[]</code> | IAM actions required for the CreateAccountCustomization API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateAccountSubscription">CreateAccountSubscription</a></code> | <code>string[]</code> | IAM actions required for the CreateAccountSubscription API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateActionConnector">CreateActionConnector</a></code> | <code>string[]</code> | IAM actions required for the CreateActionConnector API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateAgent">CreateAgent</a></code> | <code>string[]</code> | IAM actions required for the CreateAgent API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateAnalysis">CreateAnalysis</a></code> | <code>string[]</code> | IAM actions required for the CreateAnalysis API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateApprovalPolicy">CreateApprovalPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateApprovalPolicy API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateBrand">CreateBrand</a></code> | <code>string[]</code> | IAM actions required for the CreateBrand API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateCustomPermissions">CreateCustomPermissions</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateDashboard">CreateDashboard</a></code> | <code>string[]</code> | IAM actions required for the CreateDashboard API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateDataSet">CreateDataSet</a></code> | <code>string[]</code> | IAM actions required for the CreateDataSet API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateDataSource">CreateDataSource</a></code> | <code>string[]</code> | IAM actions required for the CreateDataSource API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateDlpSetting">CreateDlpSetting</a></code> | <code>string[]</code> | IAM actions required for the CreateDlpSetting API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateFlow">CreateFlow</a></code> | <code>string[]</code> | IAM actions required for the CreateFlow API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateFolder">CreateFolder</a></code> | <code>string[]</code> | IAM actions required for the CreateFolder API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateFolderMembership">CreateFolderMembership</a></code> | <code>string[]</code> | IAM actions required for the CreateFolderMembership API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateGroup">CreateGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateGroup API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateGroupMembership">CreateGroupMembership</a></code> | <code>string[]</code> | IAM actions required for the CreateGroupMembership API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateIAMPolicyAssignment">CreateIAMPolicyAssignment</a></code> | <code>string[]</code> | IAM actions required for the CreateIAMPolicyAssignment API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateIngestion">CreateIngestion</a></code> | <code>string[]</code> | IAM actions required for the CreateIngestion API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateKnowledgeBase">CreateKnowledgeBase</a></code> | <code>string[]</code> | IAM actions required for the CreateKnowledgeBase API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateLimitsProfile">CreateLimitsProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateLimitsProfile API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateNamespace">CreateNamespace</a></code> | <code>string[]</code> | IAM actions required for the CreateNamespace API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateOAuthClientApplication">CreateOAuthClientApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateOAuthClientApplication API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateRefreshSchedule">CreateRefreshSchedule</a></code> | <code>string[]</code> | IAM actions required for the CreateRefreshSchedule API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateRoleMembership">CreateRoleMembership</a></code> | <code>string[]</code> | IAM actions required for the CreateRoleMembership API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateSpace">CreateSpace</a></code> | <code>string[]</code> | IAM actions required for the CreateSpace API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateTemplate">CreateTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateTemplate API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateTemplateAlias">CreateTemplateAlias</a></code> | <code>string[]</code> | IAM actions required for the CreateTemplateAlias API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateTheme">CreateTheme</a></code> | <code>string[]</code> | IAM actions required for the CreateTheme API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateThemeAlias">CreateThemeAlias</a></code> | <code>string[]</code> | IAM actions required for the CreateThemeAlias API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateTopic">CreateTopic</a></code> | <code>string[]</code> | IAM actions required for the CreateTopic API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateTopicRefreshSchedule">CreateTopicRefreshSchedule</a></code> | <code>string[]</code> | IAM actions required for the CreateTopicRefreshSchedule API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateTopicV2">CreateTopicV2</a></code> | <code>string[]</code> | IAM actions required for the CreateTopicV2 API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateVPCConnection">CreateVPCConnection</a></code> | <code>string[]</code> | IAM actions required for the CreateVPCConnection API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteAccountCustomization">DeleteAccountCustomization</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccountCustomization API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteAccountCustomPermission">DeleteAccountCustomPermission</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccountCustomPermission API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteAccountSubscription">DeleteAccountSubscription</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccountSubscription API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteActionConnector">DeleteActionConnector</a></code> | <code>string[]</code> | IAM actions required for the DeleteActionConnector API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteAgent">DeleteAgent</a></code> | <code>string[]</code> | IAM actions required for the DeleteAgent API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteAnalysis">DeleteAnalysis</a></code> | <code>string[]</code> | IAM actions required for the DeleteAnalysis API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteApprovalPolicy">DeleteApprovalPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteApprovalPolicy API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteBrand">DeleteBrand</a></code> | <code>string[]</code> | IAM actions required for the DeleteBrand API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteBrandAssignment">DeleteBrandAssignment</a></code> | <code>string[]</code> | IAM actions required for the DeleteBrandAssignment API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteCustomPermissions">DeleteCustomPermissions</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteDashboard">DeleteDashboard</a></code> | <code>string[]</code> | IAM actions required for the DeleteDashboard API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteDataSet">DeleteDataSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataSet API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteDataSetRefreshProperties">DeleteDataSetRefreshProperties</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataSetRefreshProperties API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteDataSource">DeleteDataSource</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataSource API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteDefaultQBusinessApplication">DeleteDefaultQBusinessApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteDefaultQBusinessApplication API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteDlpSetting">DeleteDlpSetting</a></code> | <code>string[]</code> | IAM actions required for the DeleteDlpSetting API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteFlow">DeleteFlow</a></code> | <code>string[]</code> | IAM actions required for the DeleteFlow API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteFolder">DeleteFolder</a></code> | <code>string[]</code> | IAM actions required for the DeleteFolder API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteFolderMembership">DeleteFolderMembership</a></code> | <code>string[]</code> | IAM actions required for the DeleteFolderMembership API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteGroup">DeleteGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteGroup API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteGroupMembership">DeleteGroupMembership</a></code> | <code>string[]</code> | IAM actions required for the DeleteGroupMembership API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteIAMPolicyAssignment">DeleteIAMPolicyAssignment</a></code> | <code>string[]</code> | IAM actions required for the DeleteIAMPolicyAssignment API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteIdentityPropagationConfig">DeleteIdentityPropagationConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteIdentityPropagationConfig API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteKnowledgeBase">DeleteKnowledgeBase</a></code> | <code>string[]</code> | IAM actions required for the DeleteKnowledgeBase API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteLimitsProfile">DeleteLimitsProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteLimitsProfile API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteNamespace">DeleteNamespace</a></code> | <code>string[]</code> | IAM actions required for the DeleteNamespace API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteOAuthClientApplication">DeleteOAuthClientApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteOAuthClientApplication API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteRefreshSchedule">DeleteRefreshSchedule</a></code> | <code>string[]</code> | IAM actions required for the DeleteRefreshSchedule API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteRoleCustomPermission">DeleteRoleCustomPermission</a></code> | <code>string[]</code> | IAM actions required for the DeleteRoleCustomPermission API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteRoleMembership">DeleteRoleMembership</a></code> | <code>string[]</code> | IAM actions required for the DeleteRoleMembership API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteSpace">DeleteSpace</a></code> | <code>string[]</code> | IAM actions required for the DeleteSpace API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteTemplate">DeleteTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteTemplate API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteTemplateAlias">DeleteTemplateAlias</a></code> | <code>string[]</code> | IAM actions required for the DeleteTemplateAlias API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteTheme">DeleteTheme</a></code> | <code>string[]</code> | IAM actions required for the DeleteTheme API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteThemeAlias">DeleteThemeAlias</a></code> | <code>string[]</code> | IAM actions required for the DeleteThemeAlias API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteTopic">DeleteTopic</a></code> | <code>string[]</code> | IAM actions required for the DeleteTopic API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteTopicRefreshSchedule">DeleteTopicRefreshSchedule</a></code> | <code>string[]</code> | IAM actions required for the DeleteTopicRefreshSchedule API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteTopicV2">DeleteTopicV2</a></code> | <code>string[]</code> | IAM actions required for the DeleteTopicV2 API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteUser">DeleteUser</a></code> | <code>string[]</code> | IAM actions required for the DeleteUser API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteUserByPrincipalId">DeleteUserByPrincipalId</a></code> | <code>string[]</code> | IAM actions required for the DeleteUserByPrincipalId API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteUserCustomPermission">DeleteUserCustomPermission</a></code> | <code>string[]</code> | IAM actions required for the DeleteUserCustomPermission API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteVPCConnection">DeleteVPCConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteVPCConnection API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAccountCustomization">DescribeAccountCustomization</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountCustomization API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAccountCustomPermission">DescribeAccountCustomPermission</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountCustomPermission API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAccountSettings">DescribeAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAccountSubscription">DescribeAccountSubscription</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountSubscription API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeActionConnector">DescribeActionConnector</a></code> | <code>string[]</code> | IAM actions required for the DescribeActionConnector API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeActionConnectorPermissions">DescribeActionConnectorPermissions</a></code> | <code>string[]</code> | IAM actions required for the DescribeActionConnectorPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAgent">DescribeAgent</a></code> | <code>string[]</code> | IAM actions required for the DescribeAgent API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAgentPermissions">DescribeAgentPermissions</a></code> | <code>string[]</code> | IAM actions required for the DescribeAgentPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAnalysis">DescribeAnalysis</a></code> | <code>string[]</code> | IAM actions required for the DescribeAnalysis API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAnalysisDefinition">DescribeAnalysisDefinition</a></code> | <code>string[]</code> | IAM actions required for the DescribeAnalysisDefinition API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAnalysisPermissions">DescribeAnalysisPermissions</a></code> | <code>string[]</code> | IAM actions required for the DescribeAnalysisPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeApprovalPolicy">DescribeApprovalPolicy</a></code> | <code>string[]</code> | IAM actions required for the DescribeApprovalPolicy API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAssetBundleExportJob">DescribeAssetBundleExportJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeAssetBundleExportJob API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAssetBundleImportJob">DescribeAssetBundleImportJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeAssetBundleImportJob API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAutomationJob">DescribeAutomationJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeAutomationJob API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeBrand">DescribeBrand</a></code> | <code>string[]</code> | IAM actions required for the DescribeBrand API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeBrandAssignment">DescribeBrandAssignment</a></code> | <code>string[]</code> | IAM actions required for the DescribeBrandAssignment API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeBrandPublishedVersion">DescribeBrandPublishedVersion</a></code> | <code>string[]</code> | IAM actions required for the DescribeBrandPublishedVersion API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeCustomPermissions">DescribeCustomPermissions</a></code> | <code>string[]</code> | IAM actions required for the DescribeCustomPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDashboard">DescribeDashboard</a></code> | <code>string[]</code> | IAM actions required for the DescribeDashboard API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDashboardDefinition">DescribeDashboardDefinition</a></code> | <code>string[]</code> | IAM actions required for the DescribeDashboardDefinition API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDashboardPermissions">DescribeDashboardPermissions</a></code> | <code>string[]</code> | IAM actions required for the DescribeDashboardPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDashboardSnapshotJob">DescribeDashboardSnapshotJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeDashboardSnapshotJob API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDashboardSnapshotJobResult">DescribeDashboardSnapshotJobResult</a></code> | <code>string[]</code> | IAM actions required for the DescribeDashboardSnapshotJobResult API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDashboardsQAConfiguration">DescribeDashboardsQAConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeDashboardsQAConfiguration API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDataSet">DescribeDataSet</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataSet API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDataSetPermissions">DescribeDataSetPermissions</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataSetPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDataSetRefreshProperties">DescribeDataSetRefreshProperties</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataSetRefreshProperties API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDataSource">DescribeDataSource</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataSource API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDataSourcePermissions">DescribeDataSourcePermissions</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataSourcePermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDefaultQBusinessApplication">DescribeDefaultQBusinessApplication</a></code> | <code>string[]</code> | IAM actions required for the DescribeDefaultQBusinessApplication API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDlpSetting">DescribeDlpSetting</a></code> | <code>string[]</code> | IAM actions required for the DescribeDlpSetting API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeFlow">DescribeFlow</a></code> | <code>string[]</code> | IAM actions required for the DescribeFlow API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeFolder">DescribeFolder</a></code> | <code>string[]</code> | IAM actions required for the DescribeFolder API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeFolderPermissions">DescribeFolderPermissions</a></code> | <code>string[]</code> | IAM actions required for the DescribeFolderPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeFolderResolvedPermissions">DescribeFolderResolvedPermissions</a></code> | <code>string[]</code> | IAM actions required for the DescribeFolderResolvedPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeGroup">DescribeGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeGroup API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeGroupMembership">DescribeGroupMembership</a></code> | <code>string[]</code> | IAM actions required for the DescribeGroupMembership API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeIAMPolicyAssignment">DescribeIAMPolicyAssignment</a></code> | <code>string[]</code> | IAM actions required for the DescribeIAMPolicyAssignment API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeIngestion">DescribeIngestion</a></code> | <code>string[]</code> | IAM actions required for the DescribeIngestion API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeIpRestriction">DescribeIpRestriction</a></code> | <code>string[]</code> | IAM actions required for the DescribeIpRestriction API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeKeyRegistration">DescribeKeyRegistration</a></code> | <code>string[]</code> | IAM actions required for the DescribeKeyRegistration API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeKnowledgeBase">DescribeKnowledgeBase</a></code> | <code>string[]</code> | IAM actions required for the DescribeKnowledgeBase API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeKnowledgeBasePermissions">DescribeKnowledgeBasePermissions</a></code> | <code>string[]</code> | IAM actions required for the DescribeKnowledgeBasePermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeLimitsProfile">DescribeLimitsProfile</a></code> | <code>string[]</code> | IAM actions required for the DescribeLimitsProfile API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeNamespace">DescribeNamespace</a></code> | <code>string[]</code> | IAM actions required for the DescribeNamespace API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeOAuthClientApplication">DescribeOAuthClientApplication</a></code> | <code>string[]</code> | IAM actions required for the DescribeOAuthClientApplication API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeQPersonalizationConfiguration">DescribeQPersonalizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeQPersonalizationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeQuickSightQSearchConfiguration">DescribeQuickSightQSearchConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeQuickSightQSearchConfiguration API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeRefreshSchedule">DescribeRefreshSchedule</a></code> | <code>string[]</code> | IAM actions required for the DescribeRefreshSchedule API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeRoleCustomPermission">DescribeRoleCustomPermission</a></code> | <code>string[]</code> | IAM actions required for the DescribeRoleCustomPermission API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeSelfUpgradeConfiguration">DescribeSelfUpgradeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeSelfUpgradeConfiguration API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeSpace">DescribeSpace</a></code> | <code>string[]</code> | IAM actions required for the DescribeSpace API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeSpacePermissions">DescribeSpacePermissions</a></code> | <code>string[]</code> | IAM actions required for the DescribeSpacePermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTemplate">DescribeTemplate</a></code> | <code>string[]</code> | IAM actions required for the DescribeTemplate API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTemplateAlias">DescribeTemplateAlias</a></code> | <code>string[]</code> | IAM actions required for the DescribeTemplateAlias API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTemplateDefinition">DescribeTemplateDefinition</a></code> | <code>string[]</code> | IAM actions required for the DescribeTemplateDefinition API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTemplatePermissions">DescribeTemplatePermissions</a></code> | <code>string[]</code> | IAM actions required for the DescribeTemplatePermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTheme">DescribeTheme</a></code> | <code>string[]</code> | IAM actions required for the DescribeTheme API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeThemeAlias">DescribeThemeAlias</a></code> | <code>string[]</code> | IAM actions required for the DescribeThemeAlias API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeThemePermissions">DescribeThemePermissions</a></code> | <code>string[]</code> | IAM actions required for the DescribeThemePermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTopic">DescribeTopic</a></code> | <code>string[]</code> | IAM actions required for the DescribeTopic API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTopicPermissions">DescribeTopicPermissions</a></code> | <code>string[]</code> | IAM actions required for the DescribeTopicPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTopicPermissionsV2">DescribeTopicPermissionsV2</a></code> | <code>string[]</code> | IAM actions required for the DescribeTopicPermissionsV2 API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTopicRefresh">DescribeTopicRefresh</a></code> | <code>string[]</code> | IAM actions required for the DescribeTopicRefresh API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTopicRefreshSchedule">DescribeTopicRefreshSchedule</a></code> | <code>string[]</code> | IAM actions required for the DescribeTopicRefreshSchedule API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTopicV2">DescribeTopicV2</a></code> | <code>string[]</code> | IAM actions required for the DescribeTopicV2 API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeUser">DescribeUser</a></code> | <code>string[]</code> | IAM actions required for the DescribeUser API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeVPCConnection">DescribeVPCConnection</a></code> | <code>string[]</code> | IAM actions required for the DescribeVPCConnection API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.GenerateEmbedUrlForAnonymousUser">GenerateEmbedUrlForAnonymousUser</a></code> | <code>string[]</code> | IAM actions required for the GenerateEmbedUrlForAnonymousUser API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.GenerateEmbedUrlForRegisteredUser">GenerateEmbedUrlForRegisteredUser</a></code> | <code>string[]</code> | IAM actions required for the GenerateEmbedUrlForRegisteredUser API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.GenerateEmbedUrlForRegisteredUserWithIdentity">GenerateEmbedUrlForRegisteredUserWithIdentity</a></code> | <code>string[]</code> | IAM actions required for the GenerateEmbedUrlForRegisteredUserWithIdentity API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListActionConnectors">ListActionConnectors</a></code> | <code>string[]</code> | IAM actions required for the ListActionConnectors API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListAgents">ListAgents</a></code> | <code>string[]</code> | IAM actions required for the ListAgents API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListAnalyses">ListAnalyses</a></code> | <code>string[]</code> | IAM actions required for the ListAnalyses API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListApprovalPolicies">ListApprovalPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListApprovalPolicies API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListAssetBundleExportJobs">ListAssetBundleExportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListAssetBundleExportJobs API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListAssetBundleImportJobs">ListAssetBundleImportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListAssetBundleImportJobs API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListBrands">ListBrands</a></code> | <code>string[]</code> | IAM actions required for the ListBrands API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListCustomPermissions">ListCustomPermissions</a></code> | <code>string[]</code> | IAM actions required for the ListCustomPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListDashboards">ListDashboards</a></code> | <code>string[]</code> | IAM actions required for the ListDashboards API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListDashboardVersions">ListDashboardVersions</a></code> | <code>string[]</code> | IAM actions required for the ListDashboardVersions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListDataSets">ListDataSets</a></code> | <code>string[]</code> | IAM actions required for the ListDataSets API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListDataSources">ListDataSources</a></code> | <code>string[]</code> | IAM actions required for the ListDataSources API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListDlpSettings">ListDlpSettings</a></code> | <code>string[]</code> | IAM actions required for the ListDlpSettings API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListFlows">ListFlows</a></code> | <code>string[]</code> | IAM actions required for the ListFlows API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListFolderMembers">ListFolderMembers</a></code> | <code>string[]</code> | IAM actions required for the ListFolderMembers API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListFolders">ListFolders</a></code> | <code>string[]</code> | IAM actions required for the ListFolders API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListFoldersForResource">ListFoldersForResource</a></code> | <code>string[]</code> | IAM actions required for the ListFoldersForResource API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListGroupMemberships">ListGroupMemberships</a></code> | <code>string[]</code> | IAM actions required for the ListGroupMemberships API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListGroups">ListGroups</a></code> | <code>string[]</code> | IAM actions required for the ListGroups API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListIAMPolicyAssignments">ListIAMPolicyAssignments</a></code> | <code>string[]</code> | IAM actions required for the ListIAMPolicyAssignments API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListIAMPolicyAssignmentsForUser">ListIAMPolicyAssignmentsForUser</a></code> | <code>string[]</code> | IAM actions required for the ListIAMPolicyAssignmentsForUser API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListIdentityPropagationConfigs">ListIdentityPropagationConfigs</a></code> | <code>string[]</code> | IAM actions required for the ListIdentityPropagationConfigs API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListIngestions">ListIngestions</a></code> | <code>string[]</code> | IAM actions required for the ListIngestions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListKnowledgeBases">ListKnowledgeBases</a></code> | <code>string[]</code> | IAM actions required for the ListKnowledgeBases API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListLimitsProfiles">ListLimitsProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListLimitsProfiles API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListNamespaces">ListNamespaces</a></code> | <code>string[]</code> | IAM actions required for the ListNamespaces API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListOAuthClientApplications">ListOAuthClientApplications</a></code> | <code>string[]</code> | IAM actions required for the ListOAuthClientApplications API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListRefreshSchedules">ListRefreshSchedules</a></code> | <code>string[]</code> | IAM actions required for the ListRefreshSchedules API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListRoleMemberships">ListRoleMemberships</a></code> | <code>string[]</code> | IAM actions required for the ListRoleMemberships API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListSelfUpgrades">ListSelfUpgrades</a></code> | <code>string[]</code> | IAM actions required for the ListSelfUpgrades API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListSpaceResources">ListSpaceResources</a></code> | <code>string[]</code> | IAM actions required for the ListSpaceResources API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListSpaces">ListSpaces</a></code> | <code>string[]</code> | IAM actions required for the ListSpaces API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListTemplateAliases">ListTemplateAliases</a></code> | <code>string[]</code> | IAM actions required for the ListTemplateAliases API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListTemplates">ListTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListTemplates API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListTemplateVersions">ListTemplateVersions</a></code> | <code>string[]</code> | IAM actions required for the ListTemplateVersions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListThemeAliases">ListThemeAliases</a></code> | <code>string[]</code> | IAM actions required for the ListThemeAliases API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListThemes">ListThemes</a></code> | <code>string[]</code> | IAM actions required for the ListThemes API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListThemeVersions">ListThemeVersions</a></code> | <code>string[]</code> | IAM actions required for the ListThemeVersions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListTopicRefreshSchedules">ListTopicRefreshSchedules</a></code> | <code>string[]</code> | IAM actions required for the ListTopicRefreshSchedules API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListTopicReviewedAnswers">ListTopicReviewedAnswers</a></code> | <code>string[]</code> | IAM actions required for the ListTopicReviewedAnswers API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListTopics">ListTopics</a></code> | <code>string[]</code> | IAM actions required for the ListTopics API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListTopicsV2">ListTopicsV2</a></code> | <code>string[]</code> | IAM actions required for the ListTopicsV2 API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListUserGroups">ListUserGroups</a></code> | <code>string[]</code> | IAM actions required for the ListUserGroups API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListUsers">ListUsers</a></code> | <code>string[]</code> | IAM actions required for the ListUsers API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListUsersIndexCapacity">ListUsersIndexCapacity</a></code> | <code>string[]</code> | IAM actions required for the ListUsersIndexCapacity API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.ListVPCConnections">ListVPCConnections</a></code> | <code>string[]</code> | IAM actions required for the ListVPCConnections API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.opGetDashboardEmbedUrl">opGetDashboardEmbedUrl</a></code> | <code>string[]</code> | IAM actions required for the GetDashboardEmbedUrl API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.opGetFlowMetadata">opGetFlowMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetFlowMetadata API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.opGetFlowPermissions">opGetFlowPermissions</a></code> | <code>string[]</code> | IAM actions required for the GetFlowPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.opGetIdentityContext">opGetIdentityContext</a></code> | <code>string[]</code> | IAM actions required for the GetIdentityContext API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.opGetSessionEmbedUrl">opGetSessionEmbedUrl</a></code> | <code>string[]</code> | IAM actions required for the GetSessionEmbedUrl API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.PredictQAResults">PredictQAResults</a></code> | <code>string[]</code> | IAM actions required for the PredictQAResults API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.PutDataSetRefreshProperties">PutDataSetRefreshProperties</a></code> | <code>string[]</code> | IAM actions required for the PutDataSetRefreshProperties API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.RegisterUser">RegisterUser</a></code> | <code>string[]</code> | IAM actions required for the RegisterUser API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.RestoreAnalysis">RestoreAnalysis</a></code> | <code>string[]</code> | IAM actions required for the RestoreAnalysis API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchActionConnectors">SearchActionConnectors</a></code> | <code>string[]</code> | IAM actions required for the SearchActionConnectors API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchAgents">SearchAgents</a></code> | <code>string[]</code> | IAM actions required for the SearchAgents API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchAnalyses">SearchAnalyses</a></code> | <code>string[]</code> | IAM actions required for the SearchAnalyses API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchDashboards">SearchDashboards</a></code> | <code>string[]</code> | IAM actions required for the SearchDashboards API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchDataSets">SearchDataSets</a></code> | <code>string[]</code> | IAM actions required for the SearchDataSets API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchDataSources">SearchDataSources</a></code> | <code>string[]</code> | IAM actions required for the SearchDataSources API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchFlows">SearchFlows</a></code> | <code>string[]</code> | IAM actions required for the SearchFlows API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchFolders">SearchFolders</a></code> | <code>string[]</code> | IAM actions required for the SearchFolders API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchGroups">SearchGroups</a></code> | <code>string[]</code> | IAM actions required for the SearchGroups API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchKnowledgeBases">SearchKnowledgeBases</a></code> | <code>string[]</code> | IAM actions required for the SearchKnowledgeBases API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchSpaces">SearchSpaces</a></code> | <code>string[]</code> | IAM actions required for the SearchSpaces API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchTopics">SearchTopics</a></code> | <code>string[]</code> | IAM actions required for the SearchTopics API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchTopicsV2">SearchTopicsV2</a></code> | <code>string[]</code> | IAM actions required for the SearchTopicsV2 API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.StartAssetBundleExportJob">StartAssetBundleExportJob</a></code> | <code>string[]</code> | IAM actions required for the StartAssetBundleExportJob API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.StartAssetBundleImportJob">StartAssetBundleImportJob</a></code> | <code>string[]</code> | IAM actions required for the StartAssetBundleImportJob API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.StartAutomationJob">StartAutomationJob</a></code> | <code>string[]</code> | IAM actions required for the StartAutomationJob API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.StartDashboardSnapshotJob">StartDashboardSnapshotJob</a></code> | <code>string[]</code> | IAM actions required for the StartDashboardSnapshotJob API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.StartDashboardSnapshotJobSchedule">StartDashboardSnapshotJobSchedule</a></code> | <code>string[]</code> | IAM actions required for the StartDashboardSnapshotJobSchedule API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateAccountCustomization">UpdateAccountCustomization</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccountCustomization API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateAccountCustomPermission">UpdateAccountCustomPermission</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccountCustomPermission API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateAccountSettings">UpdateAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateActionConnector">UpdateActionConnector</a></code> | <code>string[]</code> | IAM actions required for the UpdateActionConnector API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateActionConnectorPermissions">UpdateActionConnectorPermissions</a></code> | <code>string[]</code> | IAM actions required for the UpdateActionConnectorPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateAgent">UpdateAgent</a></code> | <code>string[]</code> | IAM actions required for the UpdateAgent API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateAgentPermissions">UpdateAgentPermissions</a></code> | <code>string[]</code> | IAM actions required for the UpdateAgentPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateAnalysis">UpdateAnalysis</a></code> | <code>string[]</code> | IAM actions required for the UpdateAnalysis API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateAnalysisPermissions">UpdateAnalysisPermissions</a></code> | <code>string[]</code> | IAM actions required for the UpdateAnalysisPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateApplicationWithTokenExchangeGrant">UpdateApplicationWithTokenExchangeGrant</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplicationWithTokenExchangeGrant API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateApprovalPolicy">UpdateApprovalPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateApprovalPolicy API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateBrand">UpdateBrand</a></code> | <code>string[]</code> | IAM actions required for the UpdateBrand API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateBrandAssignment">UpdateBrandAssignment</a></code> | <code>string[]</code> | IAM actions required for the UpdateBrandAssignment API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateBrandPublishedVersion">UpdateBrandPublishedVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateBrandPublishedVersion API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateCustomPermissions">UpdateCustomPermissions</a></code> | <code>string[]</code> | IAM actions required for the UpdateCustomPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDashboard">UpdateDashboard</a></code> | <code>string[]</code> | IAM actions required for the UpdateDashboard API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDashboardLinks">UpdateDashboardLinks</a></code> | <code>string[]</code> | IAM actions required for the UpdateDashboardLinks API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDashboardPermissions">UpdateDashboardPermissions</a></code> | <code>string[]</code> | IAM actions required for the UpdateDashboardPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDashboardPublishedVersion">UpdateDashboardPublishedVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateDashboardPublishedVersion API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDashboardsQAConfiguration">UpdateDashboardsQAConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateDashboardsQAConfiguration API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDataSet">UpdateDataSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataSet API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDataSetPermissions">UpdateDataSetPermissions</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataSetPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDataSource">UpdateDataSource</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataSource API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDataSourcePermissions">UpdateDataSourcePermissions</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataSourcePermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDefaultQBusinessApplication">UpdateDefaultQBusinessApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateDefaultQBusinessApplication API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDlpSetting">UpdateDlpSetting</a></code> | <code>string[]</code> | IAM actions required for the UpdateDlpSetting API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateFlow">UpdateFlow</a></code> | <code>string[]</code> | IAM actions required for the UpdateFlow API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateFlowPermissions">UpdateFlowPermissions</a></code> | <code>string[]</code> | IAM actions required for the UpdateFlowPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateFolder">UpdateFolder</a></code> | <code>string[]</code> | IAM actions required for the UpdateFolder API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateFolderPermissions">UpdateFolderPermissions</a></code> | <code>string[]</code> | IAM actions required for the UpdateFolderPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateGroup">UpdateGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateGroup API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateIAMPolicyAssignment">UpdateIAMPolicyAssignment</a></code> | <code>string[]</code> | IAM actions required for the UpdateIAMPolicyAssignment API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateIdentityPropagationConfig">UpdateIdentityPropagationConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateIdentityPropagationConfig API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateIpRestriction">UpdateIpRestriction</a></code> | <code>string[]</code> | IAM actions required for the UpdateIpRestriction API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateKeyRegistration">UpdateKeyRegistration</a></code> | <code>string[]</code> | IAM actions required for the UpdateKeyRegistration API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateKnowledgeBase">UpdateKnowledgeBase</a></code> | <code>string[]</code> | IAM actions required for the UpdateKnowledgeBase API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateKnowledgeBasePermissions">UpdateKnowledgeBasePermissions</a></code> | <code>string[]</code> | IAM actions required for the UpdateKnowledgeBasePermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateLimitsProfile">UpdateLimitsProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateLimitsProfile API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateOAuthClientApplication">UpdateOAuthClientApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateOAuthClientApplication API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdatePublicSharingSettings">UpdatePublicSharingSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdatePublicSharingSettings API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateQPersonalizationConfiguration">UpdateQPersonalizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateQPersonalizationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateQuickSightQSearchConfiguration">UpdateQuickSightQSearchConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateQuickSightQSearchConfiguration API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateRefreshSchedule">UpdateRefreshSchedule</a></code> | <code>string[]</code> | IAM actions required for the UpdateRefreshSchedule API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateRoleCustomPermission">UpdateRoleCustomPermission</a></code> | <code>string[]</code> | IAM actions required for the UpdateRoleCustomPermission API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateSelfUpgrade">UpdateSelfUpgrade</a></code> | <code>string[]</code> | IAM actions required for the UpdateSelfUpgrade API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateSelfUpgradeConfiguration">UpdateSelfUpgradeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateSelfUpgradeConfiguration API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateSpace">UpdateSpace</a></code> | <code>string[]</code> | IAM actions required for the UpdateSpace API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateSpacePermissions">UpdateSpacePermissions</a></code> | <code>string[]</code> | IAM actions required for the UpdateSpacePermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateSpaceResources">UpdateSpaceResources</a></code> | <code>string[]</code> | IAM actions required for the UpdateSpaceResources API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateSPICECapacityConfiguration">UpdateSPICECapacityConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateSPICECapacityConfiguration API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateTemplate">UpdateTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateTemplate API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateTemplateAlias">UpdateTemplateAlias</a></code> | <code>string[]</code> | IAM actions required for the UpdateTemplateAlias API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateTemplatePermissions">UpdateTemplatePermissions</a></code> | <code>string[]</code> | IAM actions required for the UpdateTemplatePermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateTheme">UpdateTheme</a></code> | <code>string[]</code> | IAM actions required for the UpdateTheme API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateThemeAlias">UpdateThemeAlias</a></code> | <code>string[]</code> | IAM actions required for the UpdateThemeAlias API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateThemePermissions">UpdateThemePermissions</a></code> | <code>string[]</code> | IAM actions required for the UpdateThemePermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateTopic">UpdateTopic</a></code> | <code>string[]</code> | IAM actions required for the UpdateTopic API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateTopicPermissions">UpdateTopicPermissions</a></code> | <code>string[]</code> | IAM actions required for the UpdateTopicPermissions API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateTopicPermissionsV2">UpdateTopicPermissionsV2</a></code> | <code>string[]</code> | IAM actions required for the UpdateTopicPermissionsV2 API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateTopicRefreshSchedule">UpdateTopicRefreshSchedule</a></code> | <code>string[]</code> | IAM actions required for the UpdateTopicRefreshSchedule API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateTopicV2">UpdateTopicV2</a></code> | <code>string[]</code> | IAM actions required for the UpdateTopicV2 API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateUser">UpdateUser</a></code> | <code>string[]</code> | IAM actions required for the UpdateUser API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateUserCustomPermission">UpdateUserCustomPermission</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserCustomPermission API call. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateVPCConnection">UpdateVPCConnection</a></code> | <code>string[]</code> | IAM actions required for the UpdateVPCConnection API call. |

---

##### `BatchCreateTopicReviewedAnswer`<sup>Required</sup> <a name="BatchCreateTopicReviewedAnswer" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.BatchCreateTopicReviewedAnswer"></a>

```typescript
public readonly BatchCreateTopicReviewedAnswer: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateTopicReviewedAnswer API call.

---

##### `BatchDeleteKnowledgeBase`<sup>Required</sup> <a name="BatchDeleteKnowledgeBase" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.BatchDeleteKnowledgeBase"></a>

```typescript
public readonly BatchDeleteKnowledgeBase: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteKnowledgeBase API call.

---

##### `BatchDeleteTopicReviewedAnswer`<sup>Required</sup> <a name="BatchDeleteTopicReviewedAnswer" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.BatchDeleteTopicReviewedAnswer"></a>

```typescript
public readonly BatchDeleteTopicReviewedAnswer: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteTopicReviewedAnswer API call.

---

##### `BatchDescribeUserLimits`<sup>Required</sup> <a name="BatchDescribeUserLimits" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.BatchDescribeUserLimits"></a>

```typescript
public readonly BatchDescribeUserLimits: string[];
```

- *Type:* string[]

IAM actions required for the BatchDescribeUserLimits API call.

---

##### `CancelIngestion`<sup>Required</sup> <a name="CancelIngestion" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CancelIngestion"></a>

```typescript
public readonly CancelIngestion: string[];
```

- *Type:* string[]

IAM actions required for the CancelIngestion API call.

---

##### `CreateAccountCustomization`<sup>Required</sup> <a name="CreateAccountCustomization" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateAccountCustomization"></a>

```typescript
public readonly CreateAccountCustomization: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccountCustomization API call.

---

##### `CreateAccountSubscription`<sup>Required</sup> <a name="CreateAccountSubscription" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateAccountSubscription"></a>

```typescript
public readonly CreateAccountSubscription: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccountSubscription API call.

---

##### `CreateActionConnector`<sup>Required</sup> <a name="CreateActionConnector" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateActionConnector"></a>

```typescript
public readonly CreateActionConnector: string[];
```

- *Type:* string[]

IAM actions required for the CreateActionConnector API call.

---

##### `CreateAgent`<sup>Required</sup> <a name="CreateAgent" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateAgent"></a>

```typescript
public readonly CreateAgent: string[];
```

- *Type:* string[]

IAM actions required for the CreateAgent API call.

---

##### `CreateAnalysis`<sup>Required</sup> <a name="CreateAnalysis" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateAnalysis"></a>

```typescript
public readonly CreateAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the CreateAnalysis API call.

---

##### `CreateApprovalPolicy`<sup>Required</sup> <a name="CreateApprovalPolicy" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateApprovalPolicy"></a>

```typescript
public readonly CreateApprovalPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateApprovalPolicy API call.

---

##### `CreateBrand`<sup>Required</sup> <a name="CreateBrand" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateBrand"></a>

```typescript
public readonly CreateBrand: string[];
```

- *Type:* string[]

IAM actions required for the CreateBrand API call.

---

##### `CreateCustomPermissions`<sup>Required</sup> <a name="CreateCustomPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateCustomPermissions"></a>

```typescript
public readonly CreateCustomPermissions: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomPermissions API call.

---

##### `CreateDashboard`<sup>Required</sup> <a name="CreateDashboard" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateDashboard"></a>

```typescript
public readonly CreateDashboard: string[];
```

- *Type:* string[]

IAM actions required for the CreateDashboard API call.

---

##### `CreateDataSet`<sup>Required</sup> <a name="CreateDataSet" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateDataSet"></a>

```typescript
public readonly CreateDataSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataSet API call.

---

##### `CreateDataSource`<sup>Required</sup> <a name="CreateDataSource" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateDataSource"></a>

```typescript
public readonly CreateDataSource: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataSource API call.

---

##### `CreateDlpSetting`<sup>Required</sup> <a name="CreateDlpSetting" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateDlpSetting"></a>

```typescript
public readonly CreateDlpSetting: string[];
```

- *Type:* string[]

IAM actions required for the CreateDlpSetting API call.

---

##### `CreateFlow`<sup>Required</sup> <a name="CreateFlow" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateFlow"></a>

```typescript
public readonly CreateFlow: string[];
```

- *Type:* string[]

IAM actions required for the CreateFlow API call.

---

##### `CreateFolder`<sup>Required</sup> <a name="CreateFolder" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateFolder"></a>

```typescript
public readonly CreateFolder: string[];
```

- *Type:* string[]

IAM actions required for the CreateFolder API call.

---

##### `CreateFolderMembership`<sup>Required</sup> <a name="CreateFolderMembership" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateFolderMembership"></a>

```typescript
public readonly CreateFolderMembership: string[];
```

- *Type:* string[]

IAM actions required for the CreateFolderMembership API call.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateGroup API call.

---

##### `CreateGroupMembership`<sup>Required</sup> <a name="CreateGroupMembership" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateGroupMembership"></a>

```typescript
public readonly CreateGroupMembership: string[];
```

- *Type:* string[]

IAM actions required for the CreateGroupMembership API call.

---

##### `CreateIAMPolicyAssignment`<sup>Required</sup> <a name="CreateIAMPolicyAssignment" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateIAMPolicyAssignment"></a>

```typescript
public readonly CreateIAMPolicyAssignment: string[];
```

- *Type:* string[]

IAM actions required for the CreateIAMPolicyAssignment API call.

---

##### `CreateIngestion`<sup>Required</sup> <a name="CreateIngestion" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateIngestion"></a>

```typescript
public readonly CreateIngestion: string[];
```

- *Type:* string[]

IAM actions required for the CreateIngestion API call.

---

##### `CreateKnowledgeBase`<sup>Required</sup> <a name="CreateKnowledgeBase" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateKnowledgeBase"></a>

```typescript
public readonly CreateKnowledgeBase: string[];
```

- *Type:* string[]

IAM actions required for the CreateKnowledgeBase API call.

---

##### `CreateLimitsProfile`<sup>Required</sup> <a name="CreateLimitsProfile" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateLimitsProfile"></a>

```typescript
public readonly CreateLimitsProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateLimitsProfile API call.

---

##### `CreateNamespace`<sup>Required</sup> <a name="CreateNamespace" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateNamespace"></a>

```typescript
public readonly CreateNamespace: string[];
```

- *Type:* string[]

IAM actions required for the CreateNamespace API call.

---

##### `CreateOAuthClientApplication`<sup>Required</sup> <a name="CreateOAuthClientApplication" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateOAuthClientApplication"></a>

```typescript
public readonly CreateOAuthClientApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateOAuthClientApplication API call.

---

##### `CreateRefreshSchedule`<sup>Required</sup> <a name="CreateRefreshSchedule" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateRefreshSchedule"></a>

```typescript
public readonly CreateRefreshSchedule: string[];
```

- *Type:* string[]

IAM actions required for the CreateRefreshSchedule API call.

---

##### `CreateRoleMembership`<sup>Required</sup> <a name="CreateRoleMembership" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateRoleMembership"></a>

```typescript
public readonly CreateRoleMembership: string[];
```

- *Type:* string[]

IAM actions required for the CreateRoleMembership API call.

---

##### `CreateSpace`<sup>Required</sup> <a name="CreateSpace" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateSpace"></a>

```typescript
public readonly CreateSpace: string[];
```

- *Type:* string[]

IAM actions required for the CreateSpace API call.

---

##### `CreateTemplate`<sup>Required</sup> <a name="CreateTemplate" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateTemplate"></a>

```typescript
public readonly CreateTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateTemplate API call.

---

##### `CreateTemplateAlias`<sup>Required</sup> <a name="CreateTemplateAlias" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateTemplateAlias"></a>

```typescript
public readonly CreateTemplateAlias: string[];
```

- *Type:* string[]

IAM actions required for the CreateTemplateAlias API call.

---

##### `CreateTheme`<sup>Required</sup> <a name="CreateTheme" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateTheme"></a>

```typescript
public readonly CreateTheme: string[];
```

- *Type:* string[]

IAM actions required for the CreateTheme API call.

---

##### `CreateThemeAlias`<sup>Required</sup> <a name="CreateThemeAlias" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateThemeAlias"></a>

```typescript
public readonly CreateThemeAlias: string[];
```

- *Type:* string[]

IAM actions required for the CreateThemeAlias API call.

---

##### `CreateTopic`<sup>Required</sup> <a name="CreateTopic" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateTopic"></a>

```typescript
public readonly CreateTopic: string[];
```

- *Type:* string[]

IAM actions required for the CreateTopic API call.

---

##### `CreateTopicRefreshSchedule`<sup>Required</sup> <a name="CreateTopicRefreshSchedule" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateTopicRefreshSchedule"></a>

```typescript
public readonly CreateTopicRefreshSchedule: string[];
```

- *Type:* string[]

IAM actions required for the CreateTopicRefreshSchedule API call.

---

##### `CreateTopicV2`<sup>Required</sup> <a name="CreateTopicV2" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateTopicV2"></a>

```typescript
public readonly CreateTopicV2: string[];
```

- *Type:* string[]

IAM actions required for the CreateTopicV2 API call.

---

##### `CreateVPCConnection`<sup>Required</sup> <a name="CreateVPCConnection" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.CreateVPCConnection"></a>

```typescript
public readonly CreateVPCConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreateVPCConnection API call.

---

##### `DeleteAccountCustomization`<sup>Required</sup> <a name="DeleteAccountCustomization" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteAccountCustomization"></a>

```typescript
public readonly DeleteAccountCustomization: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccountCustomization API call.

---

##### `DeleteAccountCustomPermission`<sup>Required</sup> <a name="DeleteAccountCustomPermission" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteAccountCustomPermission"></a>

```typescript
public readonly DeleteAccountCustomPermission: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccountCustomPermission API call.

---

##### `DeleteAccountSubscription`<sup>Required</sup> <a name="DeleteAccountSubscription" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteAccountSubscription"></a>

```typescript
public readonly DeleteAccountSubscription: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccountSubscription API call.

---

##### `DeleteActionConnector`<sup>Required</sup> <a name="DeleteActionConnector" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteActionConnector"></a>

```typescript
public readonly DeleteActionConnector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteActionConnector API call.

---

##### `DeleteAgent`<sup>Required</sup> <a name="DeleteAgent" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteAgent"></a>

```typescript
public readonly DeleteAgent: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAgent API call.

---

##### `DeleteAnalysis`<sup>Required</sup> <a name="DeleteAnalysis" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteAnalysis"></a>

```typescript
public readonly DeleteAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAnalysis API call.

---

##### `DeleteApprovalPolicy`<sup>Required</sup> <a name="DeleteApprovalPolicy" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteApprovalPolicy"></a>

```typescript
public readonly DeleteApprovalPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApprovalPolicy API call.

---

##### `DeleteBrand`<sup>Required</sup> <a name="DeleteBrand" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteBrand"></a>

```typescript
public readonly DeleteBrand: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBrand API call.

---

##### `DeleteBrandAssignment`<sup>Required</sup> <a name="DeleteBrandAssignment" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteBrandAssignment"></a>

```typescript
public readonly DeleteBrandAssignment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBrandAssignment API call.

---

##### `DeleteCustomPermissions`<sup>Required</sup> <a name="DeleteCustomPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteCustomPermissions"></a>

```typescript
public readonly DeleteCustomPermissions: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomPermissions API call.

---

##### `DeleteDashboard`<sup>Required</sup> <a name="DeleteDashboard" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteDashboard"></a>

```typescript
public readonly DeleteDashboard: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDashboard API call.

---

##### `DeleteDataSet`<sup>Required</sup> <a name="DeleteDataSet" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteDataSet"></a>

```typescript
public readonly DeleteDataSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataSet API call.

---

##### `DeleteDataSetRefreshProperties`<sup>Required</sup> <a name="DeleteDataSetRefreshProperties" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteDataSetRefreshProperties"></a>

```typescript
public readonly DeleteDataSetRefreshProperties: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataSetRefreshProperties API call.

---

##### `DeleteDataSource`<sup>Required</sup> <a name="DeleteDataSource" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteDataSource"></a>

```typescript
public readonly DeleteDataSource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataSource API call.

---

##### `DeleteDefaultQBusinessApplication`<sup>Required</sup> <a name="DeleteDefaultQBusinessApplication" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteDefaultQBusinessApplication"></a>

```typescript
public readonly DeleteDefaultQBusinessApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDefaultQBusinessApplication API call.

---

##### `DeleteDlpSetting`<sup>Required</sup> <a name="DeleteDlpSetting" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteDlpSetting"></a>

```typescript
public readonly DeleteDlpSetting: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDlpSetting API call.

---

##### `DeleteFlow`<sup>Required</sup> <a name="DeleteFlow" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteFlow"></a>

```typescript
public readonly DeleteFlow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFlow API call.

---

##### `DeleteFolder`<sup>Required</sup> <a name="DeleteFolder" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteFolder"></a>

```typescript
public readonly DeleteFolder: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFolder API call.

---

##### `DeleteFolderMembership`<sup>Required</sup> <a name="DeleteFolderMembership" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteFolderMembership"></a>

```typescript
public readonly DeleteFolderMembership: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFolderMembership API call.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGroup API call.

---

##### `DeleteGroupMembership`<sup>Required</sup> <a name="DeleteGroupMembership" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteGroupMembership"></a>

```typescript
public readonly DeleteGroupMembership: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGroupMembership API call.

---

##### `DeleteIAMPolicyAssignment`<sup>Required</sup> <a name="DeleteIAMPolicyAssignment" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteIAMPolicyAssignment"></a>

```typescript
public readonly DeleteIAMPolicyAssignment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIAMPolicyAssignment API call.

---

##### `DeleteIdentityPropagationConfig`<sup>Required</sup> <a name="DeleteIdentityPropagationConfig" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteIdentityPropagationConfig"></a>

```typescript
public readonly DeleteIdentityPropagationConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIdentityPropagationConfig API call.

---

##### `DeleteKnowledgeBase`<sup>Required</sup> <a name="DeleteKnowledgeBase" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteKnowledgeBase"></a>

```typescript
public readonly DeleteKnowledgeBase: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKnowledgeBase API call.

---

##### `DeleteLimitsProfile`<sup>Required</sup> <a name="DeleteLimitsProfile" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteLimitsProfile"></a>

```typescript
public readonly DeleteLimitsProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLimitsProfile API call.

---

##### `DeleteNamespace`<sup>Required</sup> <a name="DeleteNamespace" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteNamespace"></a>

```typescript
public readonly DeleteNamespace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNamespace API call.

---

##### `DeleteOAuthClientApplication`<sup>Required</sup> <a name="DeleteOAuthClientApplication" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteOAuthClientApplication"></a>

```typescript
public readonly DeleteOAuthClientApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOAuthClientApplication API call.

---

##### `DeleteRefreshSchedule`<sup>Required</sup> <a name="DeleteRefreshSchedule" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteRefreshSchedule"></a>

```typescript
public readonly DeleteRefreshSchedule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRefreshSchedule API call.

---

##### `DeleteRoleCustomPermission`<sup>Required</sup> <a name="DeleteRoleCustomPermission" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteRoleCustomPermission"></a>

```typescript
public readonly DeleteRoleCustomPermission: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRoleCustomPermission API call.

---

##### `DeleteRoleMembership`<sup>Required</sup> <a name="DeleteRoleMembership" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteRoleMembership"></a>

```typescript
public readonly DeleteRoleMembership: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRoleMembership API call.

---

##### `DeleteSpace`<sup>Required</sup> <a name="DeleteSpace" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteSpace"></a>

```typescript
public readonly DeleteSpace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSpace API call.

---

##### `DeleteTemplate`<sup>Required</sup> <a name="DeleteTemplate" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteTemplate"></a>

```typescript
public readonly DeleteTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTemplate API call.

---

##### `DeleteTemplateAlias`<sup>Required</sup> <a name="DeleteTemplateAlias" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteTemplateAlias"></a>

```typescript
public readonly DeleteTemplateAlias: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTemplateAlias API call.

---

##### `DeleteTheme`<sup>Required</sup> <a name="DeleteTheme" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteTheme"></a>

```typescript
public readonly DeleteTheme: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTheme API call.

---

##### `DeleteThemeAlias`<sup>Required</sup> <a name="DeleteThemeAlias" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteThemeAlias"></a>

```typescript
public readonly DeleteThemeAlias: string[];
```

- *Type:* string[]

IAM actions required for the DeleteThemeAlias API call.

---

##### `DeleteTopic`<sup>Required</sup> <a name="DeleteTopic" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteTopic"></a>

```typescript
public readonly DeleteTopic: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTopic API call.

---

##### `DeleteTopicRefreshSchedule`<sup>Required</sup> <a name="DeleteTopicRefreshSchedule" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteTopicRefreshSchedule"></a>

```typescript
public readonly DeleteTopicRefreshSchedule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTopicRefreshSchedule API call.

---

##### `DeleteTopicV2`<sup>Required</sup> <a name="DeleteTopicV2" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteTopicV2"></a>

```typescript
public readonly DeleteTopicV2: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTopicV2 API call.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUser API call.

---

##### `DeleteUserByPrincipalId`<sup>Required</sup> <a name="DeleteUserByPrincipalId" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteUserByPrincipalId"></a>

```typescript
public readonly DeleteUserByPrincipalId: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUserByPrincipalId API call.

---

##### `DeleteUserCustomPermission`<sup>Required</sup> <a name="DeleteUserCustomPermission" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteUserCustomPermission"></a>

```typescript
public readonly DeleteUserCustomPermission: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUserCustomPermission API call.

---

##### `DeleteVPCConnection`<sup>Required</sup> <a name="DeleteVPCConnection" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DeleteVPCConnection"></a>

```typescript
public readonly DeleteVPCConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVPCConnection API call.

---

##### `DescribeAccountCustomization`<sup>Required</sup> <a name="DescribeAccountCustomization" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAccountCustomization"></a>

```typescript
public readonly DescribeAccountCustomization: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountCustomization API call.

---

##### `DescribeAccountCustomPermission`<sup>Required</sup> <a name="DescribeAccountCustomPermission" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAccountCustomPermission"></a>

```typescript
public readonly DescribeAccountCustomPermission: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountCustomPermission API call.

---

##### `DescribeAccountSettings`<sup>Required</sup> <a name="DescribeAccountSettings" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAccountSettings"></a>

```typescript
public readonly DescribeAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountSettings API call.

---

##### `DescribeAccountSubscription`<sup>Required</sup> <a name="DescribeAccountSubscription" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAccountSubscription"></a>

```typescript
public readonly DescribeAccountSubscription: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountSubscription API call.

---

##### `DescribeActionConnector`<sup>Required</sup> <a name="DescribeActionConnector" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeActionConnector"></a>

```typescript
public readonly DescribeActionConnector: string[];
```

- *Type:* string[]

IAM actions required for the DescribeActionConnector API call.

---

##### `DescribeActionConnectorPermissions`<sup>Required</sup> <a name="DescribeActionConnectorPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeActionConnectorPermissions"></a>

```typescript
public readonly DescribeActionConnectorPermissions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeActionConnectorPermissions API call.

---

##### `DescribeAgent`<sup>Required</sup> <a name="DescribeAgent" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAgent"></a>

```typescript
public readonly DescribeAgent: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAgent API call.

---

##### `DescribeAgentPermissions`<sup>Required</sup> <a name="DescribeAgentPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAgentPermissions"></a>

```typescript
public readonly DescribeAgentPermissions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAgentPermissions API call.

---

##### `DescribeAnalysis`<sup>Required</sup> <a name="DescribeAnalysis" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAnalysis"></a>

```typescript
public readonly DescribeAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAnalysis API call.

---

##### `DescribeAnalysisDefinition`<sup>Required</sup> <a name="DescribeAnalysisDefinition" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAnalysisDefinition"></a>

```typescript
public readonly DescribeAnalysisDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAnalysisDefinition API call.

---

##### `DescribeAnalysisPermissions`<sup>Required</sup> <a name="DescribeAnalysisPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAnalysisPermissions"></a>

```typescript
public readonly DescribeAnalysisPermissions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAnalysisPermissions API call.

---

##### `DescribeApprovalPolicy`<sup>Required</sup> <a name="DescribeApprovalPolicy" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeApprovalPolicy"></a>

```typescript
public readonly DescribeApprovalPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApprovalPolicy API call.

---

##### `DescribeAssetBundleExportJob`<sup>Required</sup> <a name="DescribeAssetBundleExportJob" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAssetBundleExportJob"></a>

```typescript
public readonly DescribeAssetBundleExportJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAssetBundleExportJob API call.

---

##### `DescribeAssetBundleImportJob`<sup>Required</sup> <a name="DescribeAssetBundleImportJob" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAssetBundleImportJob"></a>

```typescript
public readonly DescribeAssetBundleImportJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAssetBundleImportJob API call.

---

##### `DescribeAutomationJob`<sup>Required</sup> <a name="DescribeAutomationJob" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeAutomationJob"></a>

```typescript
public readonly DescribeAutomationJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAutomationJob API call.

---

##### `DescribeBrand`<sup>Required</sup> <a name="DescribeBrand" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeBrand"></a>

```typescript
public readonly DescribeBrand: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBrand API call.

---

##### `DescribeBrandAssignment`<sup>Required</sup> <a name="DescribeBrandAssignment" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeBrandAssignment"></a>

```typescript
public readonly DescribeBrandAssignment: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBrandAssignment API call.

---

##### `DescribeBrandPublishedVersion`<sup>Required</sup> <a name="DescribeBrandPublishedVersion" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeBrandPublishedVersion"></a>

```typescript
public readonly DescribeBrandPublishedVersion: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBrandPublishedVersion API call.

---

##### `DescribeCustomPermissions`<sup>Required</sup> <a name="DescribeCustomPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeCustomPermissions"></a>

```typescript
public readonly DescribeCustomPermissions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCustomPermissions API call.

---

##### `DescribeDashboard`<sup>Required</sup> <a name="DescribeDashboard" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDashboard"></a>

```typescript
public readonly DescribeDashboard: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDashboard API call.

---

##### `DescribeDashboardDefinition`<sup>Required</sup> <a name="DescribeDashboardDefinition" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDashboardDefinition"></a>

```typescript
public readonly DescribeDashboardDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDashboardDefinition API call.

---

##### `DescribeDashboardPermissions`<sup>Required</sup> <a name="DescribeDashboardPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDashboardPermissions"></a>

```typescript
public readonly DescribeDashboardPermissions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDashboardPermissions API call.

---

##### `DescribeDashboardSnapshotJob`<sup>Required</sup> <a name="DescribeDashboardSnapshotJob" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDashboardSnapshotJob"></a>

```typescript
public readonly DescribeDashboardSnapshotJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDashboardSnapshotJob API call.

---

##### `DescribeDashboardSnapshotJobResult`<sup>Required</sup> <a name="DescribeDashboardSnapshotJobResult" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDashboardSnapshotJobResult"></a>

```typescript
public readonly DescribeDashboardSnapshotJobResult: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDashboardSnapshotJobResult API call.

---

##### `DescribeDashboardsQAConfiguration`<sup>Required</sup> <a name="DescribeDashboardsQAConfiguration" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDashboardsQAConfiguration"></a>

```typescript
public readonly DescribeDashboardsQAConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDashboardsQAConfiguration API call.

---

##### `DescribeDataSet`<sup>Required</sup> <a name="DescribeDataSet" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDataSet"></a>

```typescript
public readonly DescribeDataSet: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataSet API call.

---

##### `DescribeDataSetPermissions`<sup>Required</sup> <a name="DescribeDataSetPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDataSetPermissions"></a>

```typescript
public readonly DescribeDataSetPermissions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataSetPermissions API call.

---

##### `DescribeDataSetRefreshProperties`<sup>Required</sup> <a name="DescribeDataSetRefreshProperties" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDataSetRefreshProperties"></a>

```typescript
public readonly DescribeDataSetRefreshProperties: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataSetRefreshProperties API call.

---

##### `DescribeDataSource`<sup>Required</sup> <a name="DescribeDataSource" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDataSource"></a>

```typescript
public readonly DescribeDataSource: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataSource API call.

---

##### `DescribeDataSourcePermissions`<sup>Required</sup> <a name="DescribeDataSourcePermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDataSourcePermissions"></a>

```typescript
public readonly DescribeDataSourcePermissions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataSourcePermissions API call.

---

##### `DescribeDefaultQBusinessApplication`<sup>Required</sup> <a name="DescribeDefaultQBusinessApplication" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDefaultQBusinessApplication"></a>

```typescript
public readonly DescribeDefaultQBusinessApplication: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDefaultQBusinessApplication API call.

---

##### `DescribeDlpSetting`<sup>Required</sup> <a name="DescribeDlpSetting" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeDlpSetting"></a>

```typescript
public readonly DescribeDlpSetting: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDlpSetting API call.

---

##### `DescribeFlow`<sup>Required</sup> <a name="DescribeFlow" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeFlow"></a>

```typescript
public readonly DescribeFlow: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFlow API call.

---

##### `DescribeFolder`<sup>Required</sup> <a name="DescribeFolder" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeFolder"></a>

```typescript
public readonly DescribeFolder: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFolder API call.

---

##### `DescribeFolderPermissions`<sup>Required</sup> <a name="DescribeFolderPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeFolderPermissions"></a>

```typescript
public readonly DescribeFolderPermissions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFolderPermissions API call.

---

##### `DescribeFolderResolvedPermissions`<sup>Required</sup> <a name="DescribeFolderResolvedPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeFolderResolvedPermissions"></a>

```typescript
public readonly DescribeFolderResolvedPermissions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFolderResolvedPermissions API call.

---

##### `DescribeGroup`<sup>Required</sup> <a name="DescribeGroup" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeGroup"></a>

```typescript
public readonly DescribeGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGroup API call.

---

##### `DescribeGroupMembership`<sup>Required</sup> <a name="DescribeGroupMembership" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeGroupMembership"></a>

```typescript
public readonly DescribeGroupMembership: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGroupMembership API call.

---

##### `DescribeIAMPolicyAssignment`<sup>Required</sup> <a name="DescribeIAMPolicyAssignment" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeIAMPolicyAssignment"></a>

```typescript
public readonly DescribeIAMPolicyAssignment: string[];
```

- *Type:* string[]

IAM actions required for the DescribeIAMPolicyAssignment API call.

---

##### `DescribeIngestion`<sup>Required</sup> <a name="DescribeIngestion" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeIngestion"></a>

```typescript
public readonly DescribeIngestion: string[];
```

- *Type:* string[]

IAM actions required for the DescribeIngestion API call.

---

##### `DescribeIpRestriction`<sup>Required</sup> <a name="DescribeIpRestriction" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeIpRestriction"></a>

```typescript
public readonly DescribeIpRestriction: string[];
```

- *Type:* string[]

IAM actions required for the DescribeIpRestriction API call.

---

##### `DescribeKeyRegistration`<sup>Required</sup> <a name="DescribeKeyRegistration" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeKeyRegistration"></a>

```typescript
public readonly DescribeKeyRegistration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeKeyRegistration API call.

---

##### `DescribeKnowledgeBase`<sup>Required</sup> <a name="DescribeKnowledgeBase" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeKnowledgeBase"></a>

```typescript
public readonly DescribeKnowledgeBase: string[];
```

- *Type:* string[]

IAM actions required for the DescribeKnowledgeBase API call.

---

##### `DescribeKnowledgeBasePermissions`<sup>Required</sup> <a name="DescribeKnowledgeBasePermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeKnowledgeBasePermissions"></a>

```typescript
public readonly DescribeKnowledgeBasePermissions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeKnowledgeBasePermissions API call.

---

##### `DescribeLimitsProfile`<sup>Required</sup> <a name="DescribeLimitsProfile" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeLimitsProfile"></a>

```typescript
public readonly DescribeLimitsProfile: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLimitsProfile API call.

---

##### `DescribeNamespace`<sup>Required</sup> <a name="DescribeNamespace" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeNamespace"></a>

```typescript
public readonly DescribeNamespace: string[];
```

- *Type:* string[]

IAM actions required for the DescribeNamespace API call.

---

##### `DescribeOAuthClientApplication`<sup>Required</sup> <a name="DescribeOAuthClientApplication" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeOAuthClientApplication"></a>

```typescript
public readonly DescribeOAuthClientApplication: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOAuthClientApplication API call.

---

##### `DescribeQPersonalizationConfiguration`<sup>Required</sup> <a name="DescribeQPersonalizationConfiguration" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeQPersonalizationConfiguration"></a>

```typescript
public readonly DescribeQPersonalizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeQPersonalizationConfiguration API call.

---

##### `DescribeQuickSightQSearchConfiguration`<sup>Required</sup> <a name="DescribeQuickSightQSearchConfiguration" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeQuickSightQSearchConfiguration"></a>

```typescript
public readonly DescribeQuickSightQSearchConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeQuickSightQSearchConfiguration API call.

---

##### `DescribeRefreshSchedule`<sup>Required</sup> <a name="DescribeRefreshSchedule" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeRefreshSchedule"></a>

```typescript
public readonly DescribeRefreshSchedule: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRefreshSchedule API call.

---

##### `DescribeRoleCustomPermission`<sup>Required</sup> <a name="DescribeRoleCustomPermission" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeRoleCustomPermission"></a>

```typescript
public readonly DescribeRoleCustomPermission: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRoleCustomPermission API call.

---

##### `DescribeSelfUpgradeConfiguration`<sup>Required</sup> <a name="DescribeSelfUpgradeConfiguration" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeSelfUpgradeConfiguration"></a>

```typescript
public readonly DescribeSelfUpgradeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSelfUpgradeConfiguration API call.

---

##### `DescribeSpace`<sup>Required</sup> <a name="DescribeSpace" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeSpace"></a>

```typescript
public readonly DescribeSpace: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSpace API call.

---

##### `DescribeSpacePermissions`<sup>Required</sup> <a name="DescribeSpacePermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeSpacePermissions"></a>

```typescript
public readonly DescribeSpacePermissions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSpacePermissions API call.

---

##### `DescribeTemplate`<sup>Required</sup> <a name="DescribeTemplate" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTemplate"></a>

```typescript
public readonly DescribeTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTemplate API call.

---

##### `DescribeTemplateAlias`<sup>Required</sup> <a name="DescribeTemplateAlias" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTemplateAlias"></a>

```typescript
public readonly DescribeTemplateAlias: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTemplateAlias API call.

---

##### `DescribeTemplateDefinition`<sup>Required</sup> <a name="DescribeTemplateDefinition" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTemplateDefinition"></a>

```typescript
public readonly DescribeTemplateDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTemplateDefinition API call.

---

##### `DescribeTemplatePermissions`<sup>Required</sup> <a name="DescribeTemplatePermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTemplatePermissions"></a>

```typescript
public readonly DescribeTemplatePermissions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTemplatePermissions API call.

---

##### `DescribeTheme`<sup>Required</sup> <a name="DescribeTheme" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTheme"></a>

```typescript
public readonly DescribeTheme: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTheme API call.

---

##### `DescribeThemeAlias`<sup>Required</sup> <a name="DescribeThemeAlias" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeThemeAlias"></a>

```typescript
public readonly DescribeThemeAlias: string[];
```

- *Type:* string[]

IAM actions required for the DescribeThemeAlias API call.

---

##### `DescribeThemePermissions`<sup>Required</sup> <a name="DescribeThemePermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeThemePermissions"></a>

```typescript
public readonly DescribeThemePermissions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeThemePermissions API call.

---

##### `DescribeTopic`<sup>Required</sup> <a name="DescribeTopic" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTopic"></a>

```typescript
public readonly DescribeTopic: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTopic API call.

---

##### `DescribeTopicPermissions`<sup>Required</sup> <a name="DescribeTopicPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTopicPermissions"></a>

```typescript
public readonly DescribeTopicPermissions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTopicPermissions API call.

---

##### `DescribeTopicPermissionsV2`<sup>Required</sup> <a name="DescribeTopicPermissionsV2" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTopicPermissionsV2"></a>

```typescript
public readonly DescribeTopicPermissionsV2: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTopicPermissionsV2 API call.

---

##### `DescribeTopicRefresh`<sup>Required</sup> <a name="DescribeTopicRefresh" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTopicRefresh"></a>

```typescript
public readonly DescribeTopicRefresh: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTopicRefresh API call.

---

##### `DescribeTopicRefreshSchedule`<sup>Required</sup> <a name="DescribeTopicRefreshSchedule" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTopicRefreshSchedule"></a>

```typescript
public readonly DescribeTopicRefreshSchedule: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTopicRefreshSchedule API call.

---

##### `DescribeTopicV2`<sup>Required</sup> <a name="DescribeTopicV2" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeTopicV2"></a>

```typescript
public readonly DescribeTopicV2: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTopicV2 API call.

---

##### `DescribeUser`<sup>Required</sup> <a name="DescribeUser" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeUser"></a>

```typescript
public readonly DescribeUser: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUser API call.

---

##### `DescribeVPCConnection`<sup>Required</sup> <a name="DescribeVPCConnection" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.DescribeVPCConnection"></a>

```typescript
public readonly DescribeVPCConnection: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVPCConnection API call.

---

##### `GenerateEmbedUrlForAnonymousUser`<sup>Required</sup> <a name="GenerateEmbedUrlForAnonymousUser" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.GenerateEmbedUrlForAnonymousUser"></a>

```typescript
public readonly GenerateEmbedUrlForAnonymousUser: string[];
```

- *Type:* string[]

IAM actions required for the GenerateEmbedUrlForAnonymousUser API call.

---

##### `GenerateEmbedUrlForRegisteredUser`<sup>Required</sup> <a name="GenerateEmbedUrlForRegisteredUser" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.GenerateEmbedUrlForRegisteredUser"></a>

```typescript
public readonly GenerateEmbedUrlForRegisteredUser: string[];
```

- *Type:* string[]

IAM actions required for the GenerateEmbedUrlForRegisteredUser API call.

---

##### `GenerateEmbedUrlForRegisteredUserWithIdentity`<sup>Required</sup> <a name="GenerateEmbedUrlForRegisteredUserWithIdentity" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.GenerateEmbedUrlForRegisteredUserWithIdentity"></a>

```typescript
public readonly GenerateEmbedUrlForRegisteredUserWithIdentity: string[];
```

- *Type:* string[]

IAM actions required for the GenerateEmbedUrlForRegisteredUserWithIdentity API call.

---

##### `ListActionConnectors`<sup>Required</sup> <a name="ListActionConnectors" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListActionConnectors"></a>

```typescript
public readonly ListActionConnectors: string[];
```

- *Type:* string[]

IAM actions required for the ListActionConnectors API call.

---

##### `ListAgents`<sup>Required</sup> <a name="ListAgents" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListAgents"></a>

```typescript
public readonly ListAgents: string[];
```

- *Type:* string[]

IAM actions required for the ListAgents API call.

---

##### `ListAnalyses`<sup>Required</sup> <a name="ListAnalyses" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListAnalyses"></a>

```typescript
public readonly ListAnalyses: string[];
```

- *Type:* string[]

IAM actions required for the ListAnalyses API call.

---

##### `ListApprovalPolicies`<sup>Required</sup> <a name="ListApprovalPolicies" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListApprovalPolicies"></a>

```typescript
public readonly ListApprovalPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListApprovalPolicies API call.

---

##### `ListAssetBundleExportJobs`<sup>Required</sup> <a name="ListAssetBundleExportJobs" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListAssetBundleExportJobs"></a>

```typescript
public readonly ListAssetBundleExportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListAssetBundleExportJobs API call.

---

##### `ListAssetBundleImportJobs`<sup>Required</sup> <a name="ListAssetBundleImportJobs" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListAssetBundleImportJobs"></a>

```typescript
public readonly ListAssetBundleImportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListAssetBundleImportJobs API call.

---

##### `ListBrands`<sup>Required</sup> <a name="ListBrands" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListBrands"></a>

```typescript
public readonly ListBrands: string[];
```

- *Type:* string[]

IAM actions required for the ListBrands API call.

---

##### `ListCustomPermissions`<sup>Required</sup> <a name="ListCustomPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListCustomPermissions"></a>

```typescript
public readonly ListCustomPermissions: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomPermissions API call.

---

##### `ListDashboards`<sup>Required</sup> <a name="ListDashboards" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListDashboards"></a>

```typescript
public readonly ListDashboards: string[];
```

- *Type:* string[]

IAM actions required for the ListDashboards API call.

---

##### `ListDashboardVersions`<sup>Required</sup> <a name="ListDashboardVersions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListDashboardVersions"></a>

```typescript
public readonly ListDashboardVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListDashboardVersions API call.

---

##### `ListDataSets`<sup>Required</sup> <a name="ListDataSets" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListDataSets"></a>

```typescript
public readonly ListDataSets: string[];
```

- *Type:* string[]

IAM actions required for the ListDataSets API call.

---

##### `ListDataSources`<sup>Required</sup> <a name="ListDataSources" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListDataSources"></a>

```typescript
public readonly ListDataSources: string[];
```

- *Type:* string[]

IAM actions required for the ListDataSources API call.

---

##### `ListDlpSettings`<sup>Required</sup> <a name="ListDlpSettings" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListDlpSettings"></a>

```typescript
public readonly ListDlpSettings: string[];
```

- *Type:* string[]

IAM actions required for the ListDlpSettings API call.

---

##### `ListFlows`<sup>Required</sup> <a name="ListFlows" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListFlows"></a>

```typescript
public readonly ListFlows: string[];
```

- *Type:* string[]

IAM actions required for the ListFlows API call.

---

##### `ListFolderMembers`<sup>Required</sup> <a name="ListFolderMembers" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListFolderMembers"></a>

```typescript
public readonly ListFolderMembers: string[];
```

- *Type:* string[]

IAM actions required for the ListFolderMembers API call.

---

##### `ListFolders`<sup>Required</sup> <a name="ListFolders" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListFolders"></a>

```typescript
public readonly ListFolders: string[];
```

- *Type:* string[]

IAM actions required for the ListFolders API call.

---

##### `ListFoldersForResource`<sup>Required</sup> <a name="ListFoldersForResource" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListFoldersForResource"></a>

```typescript
public readonly ListFoldersForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListFoldersForResource API call.

---

##### `ListGroupMemberships`<sup>Required</sup> <a name="ListGroupMemberships" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListGroupMemberships"></a>

```typescript
public readonly ListGroupMemberships: string[];
```

- *Type:* string[]

IAM actions required for the ListGroupMemberships API call.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListGroups"></a>

```typescript
public readonly ListGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListGroups API call.

---

##### `ListIAMPolicyAssignments`<sup>Required</sup> <a name="ListIAMPolicyAssignments" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListIAMPolicyAssignments"></a>

```typescript
public readonly ListIAMPolicyAssignments: string[];
```

- *Type:* string[]

IAM actions required for the ListIAMPolicyAssignments API call.

---

##### `ListIAMPolicyAssignmentsForUser`<sup>Required</sup> <a name="ListIAMPolicyAssignmentsForUser" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListIAMPolicyAssignmentsForUser"></a>

```typescript
public readonly ListIAMPolicyAssignmentsForUser: string[];
```

- *Type:* string[]

IAM actions required for the ListIAMPolicyAssignmentsForUser API call.

---

##### `ListIdentityPropagationConfigs`<sup>Required</sup> <a name="ListIdentityPropagationConfigs" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListIdentityPropagationConfigs"></a>

```typescript
public readonly ListIdentityPropagationConfigs: string[];
```

- *Type:* string[]

IAM actions required for the ListIdentityPropagationConfigs API call.

---

##### `ListIngestions`<sup>Required</sup> <a name="ListIngestions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListIngestions"></a>

```typescript
public readonly ListIngestions: string[];
```

- *Type:* string[]

IAM actions required for the ListIngestions API call.

---

##### `ListKnowledgeBases`<sup>Required</sup> <a name="ListKnowledgeBases" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListKnowledgeBases"></a>

```typescript
public readonly ListKnowledgeBases: string[];
```

- *Type:* string[]

IAM actions required for the ListKnowledgeBases API call.

---

##### `ListLimitsProfiles`<sup>Required</sup> <a name="ListLimitsProfiles" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListLimitsProfiles"></a>

```typescript
public readonly ListLimitsProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListLimitsProfiles API call.

---

##### `ListNamespaces`<sup>Required</sup> <a name="ListNamespaces" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListNamespaces"></a>

```typescript
public readonly ListNamespaces: string[];
```

- *Type:* string[]

IAM actions required for the ListNamespaces API call.

---

##### `ListOAuthClientApplications`<sup>Required</sup> <a name="ListOAuthClientApplications" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListOAuthClientApplications"></a>

```typescript
public readonly ListOAuthClientApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListOAuthClientApplications API call.

---

##### `ListRefreshSchedules`<sup>Required</sup> <a name="ListRefreshSchedules" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListRefreshSchedules"></a>

```typescript
public readonly ListRefreshSchedules: string[];
```

- *Type:* string[]

IAM actions required for the ListRefreshSchedules API call.

---

##### `ListRoleMemberships`<sup>Required</sup> <a name="ListRoleMemberships" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListRoleMemberships"></a>

```typescript
public readonly ListRoleMemberships: string[];
```

- *Type:* string[]

IAM actions required for the ListRoleMemberships API call.

---

##### `ListSelfUpgrades`<sup>Required</sup> <a name="ListSelfUpgrades" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListSelfUpgrades"></a>

```typescript
public readonly ListSelfUpgrades: string[];
```

- *Type:* string[]

IAM actions required for the ListSelfUpgrades API call.

---

##### `ListSpaceResources`<sup>Required</sup> <a name="ListSpaceResources" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListSpaceResources"></a>

```typescript
public readonly ListSpaceResources: string[];
```

- *Type:* string[]

IAM actions required for the ListSpaceResources API call.

---

##### `ListSpaces`<sup>Required</sup> <a name="ListSpaces" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListSpaces"></a>

```typescript
public readonly ListSpaces: string[];
```

- *Type:* string[]

IAM actions required for the ListSpaces API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTemplateAliases`<sup>Required</sup> <a name="ListTemplateAliases" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListTemplateAliases"></a>

```typescript
public readonly ListTemplateAliases: string[];
```

- *Type:* string[]

IAM actions required for the ListTemplateAliases API call.

---

##### `ListTemplates`<sup>Required</sup> <a name="ListTemplates" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListTemplates"></a>

```typescript
public readonly ListTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListTemplates API call.

---

##### `ListTemplateVersions`<sup>Required</sup> <a name="ListTemplateVersions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListTemplateVersions"></a>

```typescript
public readonly ListTemplateVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListTemplateVersions API call.

---

##### `ListThemeAliases`<sup>Required</sup> <a name="ListThemeAliases" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListThemeAliases"></a>

```typescript
public readonly ListThemeAliases: string[];
```

- *Type:* string[]

IAM actions required for the ListThemeAliases API call.

---

##### `ListThemes`<sup>Required</sup> <a name="ListThemes" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListThemes"></a>

```typescript
public readonly ListThemes: string[];
```

- *Type:* string[]

IAM actions required for the ListThemes API call.

---

##### `ListThemeVersions`<sup>Required</sup> <a name="ListThemeVersions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListThemeVersions"></a>

```typescript
public readonly ListThemeVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListThemeVersions API call.

---

##### `ListTopicRefreshSchedules`<sup>Required</sup> <a name="ListTopicRefreshSchedules" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListTopicRefreshSchedules"></a>

```typescript
public readonly ListTopicRefreshSchedules: string[];
```

- *Type:* string[]

IAM actions required for the ListTopicRefreshSchedules API call.

---

##### `ListTopicReviewedAnswers`<sup>Required</sup> <a name="ListTopicReviewedAnswers" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListTopicReviewedAnswers"></a>

```typescript
public readonly ListTopicReviewedAnswers: string[];
```

- *Type:* string[]

IAM actions required for the ListTopicReviewedAnswers API call.

---

##### `ListTopics`<sup>Required</sup> <a name="ListTopics" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListTopics"></a>

```typescript
public readonly ListTopics: string[];
```

- *Type:* string[]

IAM actions required for the ListTopics API call.

---

##### `ListTopicsV2`<sup>Required</sup> <a name="ListTopicsV2" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListTopicsV2"></a>

```typescript
public readonly ListTopicsV2: string[];
```

- *Type:* string[]

IAM actions required for the ListTopicsV2 API call.

---

##### `ListUserGroups`<sup>Required</sup> <a name="ListUserGroups" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListUserGroups"></a>

```typescript
public readonly ListUserGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListUserGroups API call.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListUsers"></a>

```typescript
public readonly ListUsers: string[];
```

- *Type:* string[]

IAM actions required for the ListUsers API call.

---

##### `ListUsersIndexCapacity`<sup>Required</sup> <a name="ListUsersIndexCapacity" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListUsersIndexCapacity"></a>

```typescript
public readonly ListUsersIndexCapacity: string[];
```

- *Type:* string[]

IAM actions required for the ListUsersIndexCapacity API call.

---

##### `ListVPCConnections`<sup>Required</sup> <a name="ListVPCConnections" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.ListVPCConnections"></a>

```typescript
public readonly ListVPCConnections: string[];
```

- *Type:* string[]

IAM actions required for the ListVPCConnections API call.

---

##### `opGetDashboardEmbedUrl`<sup>Required</sup> <a name="opGetDashboardEmbedUrl" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.opGetDashboardEmbedUrl"></a>

```typescript
public readonly opGetDashboardEmbedUrl: string[];
```

- *Type:* string[]

IAM actions required for the GetDashboardEmbedUrl API call.

---

##### `opGetFlowMetadata`<sup>Required</sup> <a name="opGetFlowMetadata" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.opGetFlowMetadata"></a>

```typescript
public readonly opGetFlowMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetFlowMetadata API call.

---

##### `opGetFlowPermissions`<sup>Required</sup> <a name="opGetFlowPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.opGetFlowPermissions"></a>

```typescript
public readonly opGetFlowPermissions: string[];
```

- *Type:* string[]

IAM actions required for the GetFlowPermissions API call.

---

##### `opGetIdentityContext`<sup>Required</sup> <a name="opGetIdentityContext" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.opGetIdentityContext"></a>

```typescript
public readonly opGetIdentityContext: string[];
```

- *Type:* string[]

IAM actions required for the GetIdentityContext API call.

---

##### `opGetSessionEmbedUrl`<sup>Required</sup> <a name="opGetSessionEmbedUrl" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.opGetSessionEmbedUrl"></a>

```typescript
public readonly opGetSessionEmbedUrl: string[];
```

- *Type:* string[]

IAM actions required for the GetSessionEmbedUrl API call.

---

##### `PredictQAResults`<sup>Required</sup> <a name="PredictQAResults" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.PredictQAResults"></a>

```typescript
public readonly PredictQAResults: string[];
```

- *Type:* string[]

IAM actions required for the PredictQAResults API call.

---

##### `PutDataSetRefreshProperties`<sup>Required</sup> <a name="PutDataSetRefreshProperties" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.PutDataSetRefreshProperties"></a>

```typescript
public readonly PutDataSetRefreshProperties: string[];
```

- *Type:* string[]

IAM actions required for the PutDataSetRefreshProperties API call.

---

##### `RegisterUser`<sup>Required</sup> <a name="RegisterUser" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.RegisterUser"></a>

```typescript
public readonly RegisterUser: string[];
```

- *Type:* string[]

IAM actions required for the RegisterUser API call.

---

##### `RestoreAnalysis`<sup>Required</sup> <a name="RestoreAnalysis" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.RestoreAnalysis"></a>

```typescript
public readonly RestoreAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the RestoreAnalysis API call.

---

##### `SearchActionConnectors`<sup>Required</sup> <a name="SearchActionConnectors" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchActionConnectors"></a>

```typescript
public readonly SearchActionConnectors: string[];
```

- *Type:* string[]

IAM actions required for the SearchActionConnectors API call.

---

##### `SearchAgents`<sup>Required</sup> <a name="SearchAgents" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchAgents"></a>

```typescript
public readonly SearchAgents: string[];
```

- *Type:* string[]

IAM actions required for the SearchAgents API call.

---

##### `SearchAnalyses`<sup>Required</sup> <a name="SearchAnalyses" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchAnalyses"></a>

```typescript
public readonly SearchAnalyses: string[];
```

- *Type:* string[]

IAM actions required for the SearchAnalyses API call.

---

##### `SearchDashboards`<sup>Required</sup> <a name="SearchDashboards" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchDashboards"></a>

```typescript
public readonly SearchDashboards: string[];
```

- *Type:* string[]

IAM actions required for the SearchDashboards API call.

---

##### `SearchDataSets`<sup>Required</sup> <a name="SearchDataSets" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchDataSets"></a>

```typescript
public readonly SearchDataSets: string[];
```

- *Type:* string[]

IAM actions required for the SearchDataSets API call.

---

##### `SearchDataSources`<sup>Required</sup> <a name="SearchDataSources" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchDataSources"></a>

```typescript
public readonly SearchDataSources: string[];
```

- *Type:* string[]

IAM actions required for the SearchDataSources API call.

---

##### `SearchFlows`<sup>Required</sup> <a name="SearchFlows" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchFlows"></a>

```typescript
public readonly SearchFlows: string[];
```

- *Type:* string[]

IAM actions required for the SearchFlows API call.

---

##### `SearchFolders`<sup>Required</sup> <a name="SearchFolders" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchFolders"></a>

```typescript
public readonly SearchFolders: string[];
```

- *Type:* string[]

IAM actions required for the SearchFolders API call.

---

##### `SearchGroups`<sup>Required</sup> <a name="SearchGroups" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchGroups"></a>

```typescript
public readonly SearchGroups: string[];
```

- *Type:* string[]

IAM actions required for the SearchGroups API call.

---

##### `SearchKnowledgeBases`<sup>Required</sup> <a name="SearchKnowledgeBases" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchKnowledgeBases"></a>

```typescript
public readonly SearchKnowledgeBases: string[];
```

- *Type:* string[]

IAM actions required for the SearchKnowledgeBases API call.

---

##### `SearchSpaces`<sup>Required</sup> <a name="SearchSpaces" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchSpaces"></a>

```typescript
public readonly SearchSpaces: string[];
```

- *Type:* string[]

IAM actions required for the SearchSpaces API call.

---

##### `SearchTopics`<sup>Required</sup> <a name="SearchTopics" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchTopics"></a>

```typescript
public readonly SearchTopics: string[];
```

- *Type:* string[]

IAM actions required for the SearchTopics API call.

---

##### `SearchTopicsV2`<sup>Required</sup> <a name="SearchTopicsV2" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.SearchTopicsV2"></a>

```typescript
public readonly SearchTopicsV2: string[];
```

- *Type:* string[]

IAM actions required for the SearchTopicsV2 API call.

---

##### `StartAssetBundleExportJob`<sup>Required</sup> <a name="StartAssetBundleExportJob" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.StartAssetBundleExportJob"></a>

```typescript
public readonly StartAssetBundleExportJob: string[];
```

- *Type:* string[]

IAM actions required for the StartAssetBundleExportJob API call.

---

##### `StartAssetBundleImportJob`<sup>Required</sup> <a name="StartAssetBundleImportJob" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.StartAssetBundleImportJob"></a>

```typescript
public readonly StartAssetBundleImportJob: string[];
```

- *Type:* string[]

IAM actions required for the StartAssetBundleImportJob API call.

---

##### `StartAutomationJob`<sup>Required</sup> <a name="StartAutomationJob" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.StartAutomationJob"></a>

```typescript
public readonly StartAutomationJob: string[];
```

- *Type:* string[]

IAM actions required for the StartAutomationJob API call.

---

##### `StartDashboardSnapshotJob`<sup>Required</sup> <a name="StartDashboardSnapshotJob" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.StartDashboardSnapshotJob"></a>

```typescript
public readonly StartDashboardSnapshotJob: string[];
```

- *Type:* string[]

IAM actions required for the StartDashboardSnapshotJob API call.

---

##### `StartDashboardSnapshotJobSchedule`<sup>Required</sup> <a name="StartDashboardSnapshotJobSchedule" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.StartDashboardSnapshotJobSchedule"></a>

```typescript
public readonly StartDashboardSnapshotJobSchedule: string[];
```

- *Type:* string[]

IAM actions required for the StartDashboardSnapshotJobSchedule API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccountCustomization`<sup>Required</sup> <a name="UpdateAccountCustomization" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateAccountCustomization"></a>

```typescript
public readonly UpdateAccountCustomization: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccountCustomization API call.

---

##### `UpdateAccountCustomPermission`<sup>Required</sup> <a name="UpdateAccountCustomPermission" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateAccountCustomPermission"></a>

```typescript
public readonly UpdateAccountCustomPermission: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccountCustomPermission API call.

---

##### `UpdateAccountSettings`<sup>Required</sup> <a name="UpdateAccountSettings" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateAccountSettings"></a>

```typescript
public readonly UpdateAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccountSettings API call.

---

##### `UpdateActionConnector`<sup>Required</sup> <a name="UpdateActionConnector" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateActionConnector"></a>

```typescript
public readonly UpdateActionConnector: string[];
```

- *Type:* string[]

IAM actions required for the UpdateActionConnector API call.

---

##### `UpdateActionConnectorPermissions`<sup>Required</sup> <a name="UpdateActionConnectorPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateActionConnectorPermissions"></a>

```typescript
public readonly UpdateActionConnectorPermissions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateActionConnectorPermissions API call.

---

##### `UpdateAgent`<sup>Required</sup> <a name="UpdateAgent" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateAgent"></a>

```typescript
public readonly UpdateAgent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAgent API call.

---

##### `UpdateAgentPermissions`<sup>Required</sup> <a name="UpdateAgentPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateAgentPermissions"></a>

```typescript
public readonly UpdateAgentPermissions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAgentPermissions API call.

---

##### `UpdateAnalysis`<sup>Required</sup> <a name="UpdateAnalysis" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateAnalysis"></a>

```typescript
public readonly UpdateAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAnalysis API call.

---

##### `UpdateAnalysisPermissions`<sup>Required</sup> <a name="UpdateAnalysisPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateAnalysisPermissions"></a>

```typescript
public readonly UpdateAnalysisPermissions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAnalysisPermissions API call.

---

##### `UpdateApplicationWithTokenExchangeGrant`<sup>Required</sup> <a name="UpdateApplicationWithTokenExchangeGrant" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateApplicationWithTokenExchangeGrant"></a>

```typescript
public readonly UpdateApplicationWithTokenExchangeGrant: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplicationWithTokenExchangeGrant API call.

---

##### `UpdateApprovalPolicy`<sup>Required</sup> <a name="UpdateApprovalPolicy" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateApprovalPolicy"></a>

```typescript
public readonly UpdateApprovalPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApprovalPolicy API call.

---

##### `UpdateBrand`<sup>Required</sup> <a name="UpdateBrand" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateBrand"></a>

```typescript
public readonly UpdateBrand: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBrand API call.

---

##### `UpdateBrandAssignment`<sup>Required</sup> <a name="UpdateBrandAssignment" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateBrandAssignment"></a>

```typescript
public readonly UpdateBrandAssignment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBrandAssignment API call.

---

##### `UpdateBrandPublishedVersion`<sup>Required</sup> <a name="UpdateBrandPublishedVersion" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateBrandPublishedVersion"></a>

```typescript
public readonly UpdateBrandPublishedVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBrandPublishedVersion API call.

---

##### `UpdateCustomPermissions`<sup>Required</sup> <a name="UpdateCustomPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateCustomPermissions"></a>

```typescript
public readonly UpdateCustomPermissions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCustomPermissions API call.

---

##### `UpdateDashboard`<sup>Required</sup> <a name="UpdateDashboard" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDashboard"></a>

```typescript
public readonly UpdateDashboard: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDashboard API call.

---

##### `UpdateDashboardLinks`<sup>Required</sup> <a name="UpdateDashboardLinks" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDashboardLinks"></a>

```typescript
public readonly UpdateDashboardLinks: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDashboardLinks API call.

---

##### `UpdateDashboardPermissions`<sup>Required</sup> <a name="UpdateDashboardPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDashboardPermissions"></a>

```typescript
public readonly UpdateDashboardPermissions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDashboardPermissions API call.

---

##### `UpdateDashboardPublishedVersion`<sup>Required</sup> <a name="UpdateDashboardPublishedVersion" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDashboardPublishedVersion"></a>

```typescript
public readonly UpdateDashboardPublishedVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDashboardPublishedVersion API call.

---

##### `UpdateDashboardsQAConfiguration`<sup>Required</sup> <a name="UpdateDashboardsQAConfiguration" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDashboardsQAConfiguration"></a>

```typescript
public readonly UpdateDashboardsQAConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDashboardsQAConfiguration API call.

---

##### `UpdateDataSet`<sup>Required</sup> <a name="UpdateDataSet" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDataSet"></a>

```typescript
public readonly UpdateDataSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataSet API call.

---

##### `UpdateDataSetPermissions`<sup>Required</sup> <a name="UpdateDataSetPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDataSetPermissions"></a>

```typescript
public readonly UpdateDataSetPermissions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataSetPermissions API call.

---

##### `UpdateDataSource`<sup>Required</sup> <a name="UpdateDataSource" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDataSource"></a>

```typescript
public readonly UpdateDataSource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataSource API call.

---

##### `UpdateDataSourcePermissions`<sup>Required</sup> <a name="UpdateDataSourcePermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDataSourcePermissions"></a>

```typescript
public readonly UpdateDataSourcePermissions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataSourcePermissions API call.

---

##### `UpdateDefaultQBusinessApplication`<sup>Required</sup> <a name="UpdateDefaultQBusinessApplication" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDefaultQBusinessApplication"></a>

```typescript
public readonly UpdateDefaultQBusinessApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDefaultQBusinessApplication API call.

---

##### `UpdateDlpSetting`<sup>Required</sup> <a name="UpdateDlpSetting" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateDlpSetting"></a>

```typescript
public readonly UpdateDlpSetting: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDlpSetting API call.

---

##### `UpdateFlow`<sup>Required</sup> <a name="UpdateFlow" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateFlow"></a>

```typescript
public readonly UpdateFlow: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFlow API call.

---

##### `UpdateFlowPermissions`<sup>Required</sup> <a name="UpdateFlowPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateFlowPermissions"></a>

```typescript
public readonly UpdateFlowPermissions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFlowPermissions API call.

---

##### `UpdateFolder`<sup>Required</sup> <a name="UpdateFolder" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateFolder"></a>

```typescript
public readonly UpdateFolder: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFolder API call.

---

##### `UpdateFolderPermissions`<sup>Required</sup> <a name="UpdateFolderPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateFolderPermissions"></a>

```typescript
public readonly UpdateFolderPermissions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFolderPermissions API call.

---

##### `UpdateGroup`<sup>Required</sup> <a name="UpdateGroup" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateGroup"></a>

```typescript
public readonly UpdateGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGroup API call.

---

##### `UpdateIAMPolicyAssignment`<sup>Required</sup> <a name="UpdateIAMPolicyAssignment" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateIAMPolicyAssignment"></a>

```typescript
public readonly UpdateIAMPolicyAssignment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIAMPolicyAssignment API call.

---

##### `UpdateIdentityPropagationConfig`<sup>Required</sup> <a name="UpdateIdentityPropagationConfig" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateIdentityPropagationConfig"></a>

```typescript
public readonly UpdateIdentityPropagationConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIdentityPropagationConfig API call.

---

##### `UpdateIpRestriction`<sup>Required</sup> <a name="UpdateIpRestriction" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateIpRestriction"></a>

```typescript
public readonly UpdateIpRestriction: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIpRestriction API call.

---

##### `UpdateKeyRegistration`<sup>Required</sup> <a name="UpdateKeyRegistration" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateKeyRegistration"></a>

```typescript
public readonly UpdateKeyRegistration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKeyRegistration API call.

---

##### `UpdateKnowledgeBase`<sup>Required</sup> <a name="UpdateKnowledgeBase" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateKnowledgeBase"></a>

```typescript
public readonly UpdateKnowledgeBase: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKnowledgeBase API call.

---

##### `UpdateKnowledgeBasePermissions`<sup>Required</sup> <a name="UpdateKnowledgeBasePermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateKnowledgeBasePermissions"></a>

```typescript
public readonly UpdateKnowledgeBasePermissions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKnowledgeBasePermissions API call.

---

##### `UpdateLimitsProfile`<sup>Required</sup> <a name="UpdateLimitsProfile" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateLimitsProfile"></a>

```typescript
public readonly UpdateLimitsProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLimitsProfile API call.

---

##### `UpdateOAuthClientApplication`<sup>Required</sup> <a name="UpdateOAuthClientApplication" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateOAuthClientApplication"></a>

```typescript
public readonly UpdateOAuthClientApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOAuthClientApplication API call.

---

##### `UpdatePublicSharingSettings`<sup>Required</sup> <a name="UpdatePublicSharingSettings" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdatePublicSharingSettings"></a>

```typescript
public readonly UpdatePublicSharingSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePublicSharingSettings API call.

---

##### `UpdateQPersonalizationConfiguration`<sup>Required</sup> <a name="UpdateQPersonalizationConfiguration" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateQPersonalizationConfiguration"></a>

```typescript
public readonly UpdateQPersonalizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQPersonalizationConfiguration API call.

---

##### `UpdateQuickSightQSearchConfiguration`<sup>Required</sup> <a name="UpdateQuickSightQSearchConfiguration" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateQuickSightQSearchConfiguration"></a>

```typescript
public readonly UpdateQuickSightQSearchConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQuickSightQSearchConfiguration API call.

---

##### `UpdateRefreshSchedule`<sup>Required</sup> <a name="UpdateRefreshSchedule" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateRefreshSchedule"></a>

```typescript
public readonly UpdateRefreshSchedule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRefreshSchedule API call.

---

##### `UpdateRoleCustomPermission`<sup>Required</sup> <a name="UpdateRoleCustomPermission" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateRoleCustomPermission"></a>

```typescript
public readonly UpdateRoleCustomPermission: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRoleCustomPermission API call.

---

##### `UpdateSelfUpgrade`<sup>Required</sup> <a name="UpdateSelfUpgrade" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateSelfUpgrade"></a>

```typescript
public readonly UpdateSelfUpgrade: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSelfUpgrade API call.

---

##### `UpdateSelfUpgradeConfiguration`<sup>Required</sup> <a name="UpdateSelfUpgradeConfiguration" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateSelfUpgradeConfiguration"></a>

```typescript
public readonly UpdateSelfUpgradeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSelfUpgradeConfiguration API call.

---

##### `UpdateSpace`<sup>Required</sup> <a name="UpdateSpace" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateSpace"></a>

```typescript
public readonly UpdateSpace: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSpace API call.

---

##### `UpdateSpacePermissions`<sup>Required</sup> <a name="UpdateSpacePermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateSpacePermissions"></a>

```typescript
public readonly UpdateSpacePermissions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSpacePermissions API call.

---

##### `UpdateSpaceResources`<sup>Required</sup> <a name="UpdateSpaceResources" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateSpaceResources"></a>

```typescript
public readonly UpdateSpaceResources: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSpaceResources API call.

---

##### `UpdateSPICECapacityConfiguration`<sup>Required</sup> <a name="UpdateSPICECapacityConfiguration" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateSPICECapacityConfiguration"></a>

```typescript
public readonly UpdateSPICECapacityConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSPICECapacityConfiguration API call.

---

##### `UpdateTemplate`<sup>Required</sup> <a name="UpdateTemplate" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateTemplate"></a>

```typescript
public readonly UpdateTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTemplate API call.

---

##### `UpdateTemplateAlias`<sup>Required</sup> <a name="UpdateTemplateAlias" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateTemplateAlias"></a>

```typescript
public readonly UpdateTemplateAlias: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTemplateAlias API call.

---

##### `UpdateTemplatePermissions`<sup>Required</sup> <a name="UpdateTemplatePermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateTemplatePermissions"></a>

```typescript
public readonly UpdateTemplatePermissions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTemplatePermissions API call.

---

##### `UpdateTheme`<sup>Required</sup> <a name="UpdateTheme" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateTheme"></a>

```typescript
public readonly UpdateTheme: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTheme API call.

---

##### `UpdateThemeAlias`<sup>Required</sup> <a name="UpdateThemeAlias" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateThemeAlias"></a>

```typescript
public readonly UpdateThemeAlias: string[];
```

- *Type:* string[]

IAM actions required for the UpdateThemeAlias API call.

---

##### `UpdateThemePermissions`<sup>Required</sup> <a name="UpdateThemePermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateThemePermissions"></a>

```typescript
public readonly UpdateThemePermissions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateThemePermissions API call.

---

##### `UpdateTopic`<sup>Required</sup> <a name="UpdateTopic" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateTopic"></a>

```typescript
public readonly UpdateTopic: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTopic API call.

---

##### `UpdateTopicPermissions`<sup>Required</sup> <a name="UpdateTopicPermissions" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateTopicPermissions"></a>

```typescript
public readonly UpdateTopicPermissions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTopicPermissions API call.

---

##### `UpdateTopicPermissionsV2`<sup>Required</sup> <a name="UpdateTopicPermissionsV2" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateTopicPermissionsV2"></a>

```typescript
public readonly UpdateTopicPermissionsV2: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTopicPermissionsV2 API call.

---

##### `UpdateTopicRefreshSchedule`<sup>Required</sup> <a name="UpdateTopicRefreshSchedule" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateTopicRefreshSchedule"></a>

```typescript
public readonly UpdateTopicRefreshSchedule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTopicRefreshSchedule API call.

---

##### `UpdateTopicV2`<sup>Required</sup> <a name="UpdateTopicV2" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateTopicV2"></a>

```typescript
public readonly UpdateTopicV2: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTopicV2 API call.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUser API call.

---

##### `UpdateUserCustomPermission`<sup>Required</sup> <a name="UpdateUserCustomPermission" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateUserCustomPermission"></a>

```typescript
public readonly UpdateUserCustomPermission: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserCustomPermission API call.

---

##### `UpdateVPCConnection`<sup>Required</sup> <a name="UpdateVPCConnection" id="@cdk_utils/iam.quicksight.QuickSightOperations.property.UpdateVPCConnection"></a>

```typescript
public readonly UpdateVPCConnection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVPCConnection API call.

---

### QuickSightResources <a name="QuickSightResources" id="@cdk_utils/iam.quicksight.QuickSightResources"></a>

ARN builders, validators, and parsers for quicksight resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.quicksight.QuickSightResources.Initializer"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

new quicksight.QuickSightResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.account">account</a></code> | Builds an ARN for the account resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.actionconnector">actionconnector</a></code> | Builds an ARN for the actionconnector resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.agent">agent</a></code> | Builds an ARN for the agent resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.analysis">analysis</a></code> | Builds an ARN for the analysis resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.app">app</a></code> | Builds an ARN for the app resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.approvalPolicy">approvalPolicy</a></code> | Builds an ARN for the approvalPolicy resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.assetBundleExportJob">assetBundleExportJob</a></code> | Builds an ARN for the assetBundleExportJob resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.assetBundleImportJob">assetBundleImportJob</a></code> | Builds an ARN for the assetBundleImportJob resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.assignment">assignment</a></code> | Builds an ARN for the assignment resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.automation">automation</a></code> | Builds an ARN for the automation resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.automationGroup">automationGroup</a></code> | Builds an ARN for the automationGroup resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.automationJob">automationJob</a></code> | Builds an ARN for the automationJob resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.brand">brand</a></code> | Builds an ARN for the brand resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.customization">customization</a></code> | Builds an ARN for the customization resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.custompermissions">custompermissions</a></code> | Builds an ARN for the custompermissions resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.dashboard">dashboard</a></code> | Builds an ARN for the dashboard resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.dashboardSnapshotJob">dashboardSnapshotJob</a></code> | Builds an ARN for the dashboardSnapshotJob resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.dataset">dataset</a></code> | Builds an ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.datasource">datasource</a></code> | Builds an ARN for the datasource resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.dlpSetting">dlpSetting</a></code> | Builds an ARN for the dlpSetting resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.emailCustomizationTemplate">emailCustomizationTemplate</a></code> | Builds an ARN for the emailCustomizationTemplate resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.extensionaccess">extensionaccess</a></code> | Builds an ARN for the extensionaccess resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.flow">flow</a></code> | Builds an ARN for the flow resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.folder">folder</a></code> | Builds an ARN for the folder resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.group">group</a></code> | Builds an ARN for the group resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.ingestion">ingestion</a></code> | Builds an ARN for the ingestion resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidAccountArn">isValidAccountArn</a></code> | Validates whether a string is a valid ARN for the account resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidActionconnectorArn">isValidActionconnectorArn</a></code> | Validates whether a string is a valid ARN for the actionconnector resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidAgentArn">isValidAgentArn</a></code> | Validates whether a string is a valid ARN for the agent resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidAnalysisArn">isValidAnalysisArn</a></code> | Validates whether a string is a valid ARN for the analysis resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidAppArn">isValidAppArn</a></code> | Validates whether a string is a valid ARN for the app resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidApprovalPolicyArn">isValidApprovalPolicyArn</a></code> | Validates whether a string is a valid ARN for the approvalPolicy resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidAssetBundleExportJobArn">isValidAssetBundleExportJobArn</a></code> | Validates whether a string is a valid ARN for the assetBundleExportJob resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidAssetBundleImportJobArn">isValidAssetBundleImportJobArn</a></code> | Validates whether a string is a valid ARN for the assetBundleImportJob resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidAssignmentArn">isValidAssignmentArn</a></code> | Validates whether a string is a valid ARN for the assignment resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidAutomationArn">isValidAutomationArn</a></code> | Validates whether a string is a valid ARN for the automation resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidAutomationGroupArn">isValidAutomationGroupArn</a></code> | Validates whether a string is a valid ARN for the automationGroup resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidAutomationJobArn">isValidAutomationJobArn</a></code> | Validates whether a string is a valid ARN for the automationJob resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidBrandArn">isValidBrandArn</a></code> | Validates whether a string is a valid ARN for the brand resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidCustomizationArn">isValidCustomizationArn</a></code> | Validates whether a string is a valid ARN for the customization resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidCustompermissionsArn">isValidCustompermissionsArn</a></code> | Validates whether a string is a valid ARN for the custompermissions resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidDashboardArn">isValidDashboardArn</a></code> | Validates whether a string is a valid ARN for the dashboard resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidDashboardSnapshotJobArn">isValidDashboardSnapshotJobArn</a></code> | Validates whether a string is a valid ARN for the dashboardSnapshotJob resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidDatasetArn">isValidDatasetArn</a></code> | Validates whether a string is a valid ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidDatasourceArn">isValidDatasourceArn</a></code> | Validates whether a string is a valid ARN for the datasource resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidDlpSettingArn">isValidDlpSettingArn</a></code> | Validates whether a string is a valid ARN for the dlpSetting resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidEmailCustomizationTemplateArn">isValidEmailCustomizationTemplateArn</a></code> | Validates whether a string is a valid ARN for the emailCustomizationTemplate resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidExtensionaccessArn">isValidExtensionaccessArn</a></code> | Validates whether a string is a valid ARN for the extensionaccess resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidFlowArn">isValidFlowArn</a></code> | Validates whether a string is a valid ARN for the flow resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidFolderArn">isValidFolderArn</a></code> | Validates whether a string is a valid ARN for the folder resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidGroupArn">isValidGroupArn</a></code> | Validates whether a string is a valid ARN for the group resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidIngestionArn">isValidIngestionArn</a></code> | Validates whether a string is a valid ARN for the ingestion resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidKnowledgeBaseArn">isValidKnowledgeBaseArn</a></code> | Validates whether a string is a valid ARN for the knowledgeBase resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidLimitsProfileArn">isValidLimitsProfileArn</a></code> | Validates whether a string is a valid ARN for the limitsProfile resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidNamespaceArn">isValidNamespaceArn</a></code> | Validates whether a string is a valid ARN for the namespace resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidOauthClientApplicationArn">isValidOauthClientApplicationArn</a></code> | Validates whether a string is a valid ARN for the oauthClientApplication resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidRefreshscheduleArn">isValidRefreshscheduleArn</a></code> | Validates whether a string is a valid ARN for the refreshschedule resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidSpaceArn">isValidSpaceArn</a></code> | Validates whether a string is a valid ARN for the space resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidTemplateArn">isValidTemplateArn</a></code> | Validates whether a string is a valid ARN for the template resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidThemeArn">isValidThemeArn</a></code> | Validates whether a string is a valid ARN for the theme resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidTopicArn">isValidTopicArn</a></code> | Validates whether a string is a valid ARN for the topic resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidUserArn">isValidUserArn</a></code> | Validates whether a string is a valid ARN for the user resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.isValidVpcconnectionArn">isValidVpcconnectionArn</a></code> | Validates whether a string is a valid ARN for the vpcconnection resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.knowledgeBase">knowledgeBase</a></code> | Builds an ARN for the knowledgeBase resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.limitsProfile">limitsProfile</a></code> | Builds an ARN for the limitsProfile resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.namespace">namespace</a></code> | Builds an ARN for the namespace resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.oauthClientApplication">oauthClientApplication</a></code> | Builds an ARN for the oauthClientApplication resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseAccountArn">parseAccountArn</a></code> | Parses a account ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseActionconnectorArn">parseActionconnectorArn</a></code> | Parses a actionconnector ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseAgentArn">parseAgentArn</a></code> | Parses a agent ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseAnalysisArn">parseAnalysisArn</a></code> | Parses a analysis ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseAppArn">parseAppArn</a></code> | Parses a app ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseApprovalPolicyArn">parseApprovalPolicyArn</a></code> | Parses a approvalPolicy ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseAssetBundleExportJobArn">parseAssetBundleExportJobArn</a></code> | Parses a assetBundleExportJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseAssetBundleImportJobArn">parseAssetBundleImportJobArn</a></code> | Parses a assetBundleImportJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseAssignmentArn">parseAssignmentArn</a></code> | Parses a assignment ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseAutomationArn">parseAutomationArn</a></code> | Parses a automation ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseAutomationGroupArn">parseAutomationGroupArn</a></code> | Parses a automationGroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseAutomationJobArn">parseAutomationJobArn</a></code> | Parses a automationJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseBrandArn">parseBrandArn</a></code> | Parses a brand ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseCustomizationArn">parseCustomizationArn</a></code> | Parses a customization ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseCustompermissionsArn">parseCustompermissionsArn</a></code> | Parses a custompermissions ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseDashboardArn">parseDashboardArn</a></code> | Parses a dashboard ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseDashboardSnapshotJobArn">parseDashboardSnapshotJobArn</a></code> | Parses a dashboardSnapshotJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseDatasetArn">parseDatasetArn</a></code> | Parses a dataset ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseDatasourceArn">parseDatasourceArn</a></code> | Parses a datasource ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseDlpSettingArn">parseDlpSettingArn</a></code> | Parses a dlpSetting ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseEmailCustomizationTemplateArn">parseEmailCustomizationTemplateArn</a></code> | Parses a emailCustomizationTemplate ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseExtensionaccessArn">parseExtensionaccessArn</a></code> | Parses a extensionaccess ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseFlowArn">parseFlowArn</a></code> | Parses a flow ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseFolderArn">parseFolderArn</a></code> | Parses a folder ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseGroupArn">parseGroupArn</a></code> | Parses a group ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseIngestionArn">parseIngestionArn</a></code> | Parses a ingestion ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseKnowledgeBaseArn">parseKnowledgeBaseArn</a></code> | Parses a knowledgeBase ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseLimitsProfileArn">parseLimitsProfileArn</a></code> | Parses a limitsProfile ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseNamespaceArn">parseNamespaceArn</a></code> | Parses a namespace ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseOauthClientApplicationArn">parseOauthClientApplicationArn</a></code> | Parses a oauthClientApplication ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseRefreshscheduleArn">parseRefreshscheduleArn</a></code> | Parses a refreshschedule ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseSpaceArn">parseSpaceArn</a></code> | Parses a space ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseTemplateArn">parseTemplateArn</a></code> | Parses a template ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseThemeArn">parseThemeArn</a></code> | Parses a theme ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseTopicArn">parseTopicArn</a></code> | Parses a topic ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseUserArn">parseUserArn</a></code> | Parses a user ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.parseVpcconnectionArn">parseVpcconnectionArn</a></code> | Parses a vpcconnection ARN into its components. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.refreshschedule">refreshschedule</a></code> | Builds an ARN for the refreshschedule resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.space">space</a></code> | Builds an ARN for the space resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.template">template</a></code> | Builds an ARN for the template resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.theme">theme</a></code> | Builds an ARN for the theme resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.topic">topic</a></code> | Builds an ARN for the topic resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.user">user</a></code> | Builds an ARN for the user resource. |
| <code><a href="#@cdk_utils/iam.quicksight.QuickSightResources.vpcconnection">vpcconnection</a></code> | Builds an ARN for the vpcconnection resource. |

---

##### `account` <a name="account" id="@cdk_utils/iam.quicksight.QuickSightResources.account"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.account(props: QuickSightAccountArnProps)
```

Builds an ARN for the account resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.account.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightAccountArnProps">QuickSightAccountArnProps</a>

---

##### `actionconnector` <a name="actionconnector" id="@cdk_utils/iam.quicksight.QuickSightResources.actionconnector"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.actionconnector(props: QuickSightActionconnectorArnProps)
```

Builds an ARN for the actionconnector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.actionconnector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightActionconnectorArnProps">QuickSightActionconnectorArnProps</a>

---

##### `agent` <a name="agent" id="@cdk_utils/iam.quicksight.QuickSightResources.agent"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.agent(props: QuickSightAgentArnProps)
```

Builds an ARN for the agent resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.agent.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightAgentArnProps">QuickSightAgentArnProps</a>

---

##### `analysis` <a name="analysis" id="@cdk_utils/iam.quicksight.QuickSightResources.analysis"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.analysis(props: QuickSightAnalysisArnProps)
```

Builds an ARN for the analysis resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.analysis.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightAnalysisArnProps">QuickSightAnalysisArnProps</a>

---

##### `app` <a name="app" id="@cdk_utils/iam.quicksight.QuickSightResources.app"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.app(props: QuickSightAppArnProps)
```

Builds an ARN for the app resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.app.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightAppArnProps">QuickSightAppArnProps</a>

---

##### `approvalPolicy` <a name="approvalPolicy" id="@cdk_utils/iam.quicksight.QuickSightResources.approvalPolicy"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.approvalPolicy(props: QuickSightApprovalPolicyArnProps)
```

Builds an ARN for the approvalPolicy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.approvalPolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightApprovalPolicyArnProps">QuickSightApprovalPolicyArnProps</a>

---

##### `assetBundleExportJob` <a name="assetBundleExportJob" id="@cdk_utils/iam.quicksight.QuickSightResources.assetBundleExportJob"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.assetBundleExportJob(props: QuickSightAssetBundleExportJobArnProps)
```

Builds an ARN for the assetBundleExportJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.assetBundleExportJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightAssetBundleExportJobArnProps">QuickSightAssetBundleExportJobArnProps</a>

---

##### `assetBundleImportJob` <a name="assetBundleImportJob" id="@cdk_utils/iam.quicksight.QuickSightResources.assetBundleImportJob"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.assetBundleImportJob(props: QuickSightAssetBundleImportJobArnProps)
```

Builds an ARN for the assetBundleImportJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.assetBundleImportJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightAssetBundleImportJobArnProps">QuickSightAssetBundleImportJobArnProps</a>

---

##### `assignment` <a name="assignment" id="@cdk_utils/iam.quicksight.QuickSightResources.assignment"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.assignment(props: QuickSightAssignmentArnProps)
```

Builds an ARN for the assignment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.assignment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightAssignmentArnProps">QuickSightAssignmentArnProps</a>

---

##### `automation` <a name="automation" id="@cdk_utils/iam.quicksight.QuickSightResources.automation"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.automation(props: QuickSightAutomationArnProps)
```

Builds an ARN for the automation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.automation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightAutomationArnProps">QuickSightAutomationArnProps</a>

---

##### `automationGroup` <a name="automationGroup" id="@cdk_utils/iam.quicksight.QuickSightResources.automationGroup"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.automationGroup(props: QuickSightAutomationGroupArnProps)
```

Builds an ARN for the automationGroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.automationGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightAutomationGroupArnProps">QuickSightAutomationGroupArnProps</a>

---

##### `automationJob` <a name="automationJob" id="@cdk_utils/iam.quicksight.QuickSightResources.automationJob"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.automationJob(props: QuickSightAutomationJobArnProps)
```

Builds an ARN for the automationJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.automationJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightAutomationJobArnProps">QuickSightAutomationJobArnProps</a>

---

##### `brand` <a name="brand" id="@cdk_utils/iam.quicksight.QuickSightResources.brand"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.brand(props: QuickSightBrandArnProps)
```

Builds an ARN for the brand resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.brand.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightBrandArnProps">QuickSightBrandArnProps</a>

---

##### `customization` <a name="customization" id="@cdk_utils/iam.quicksight.QuickSightResources.customization"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.customization(props: QuickSightCustomizationArnProps)
```

Builds an ARN for the customization resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.customization.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightCustomizationArnProps">QuickSightCustomizationArnProps</a>

---

##### `custompermissions` <a name="custompermissions" id="@cdk_utils/iam.quicksight.QuickSightResources.custompermissions"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.custompermissions(props: QuickSightCustompermissionsArnProps)
```

Builds an ARN for the custompermissions resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.custompermissions.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightCustompermissionsArnProps">QuickSightCustompermissionsArnProps</a>

---

##### `dashboard` <a name="dashboard" id="@cdk_utils/iam.quicksight.QuickSightResources.dashboard"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.dashboard(props: QuickSightDashboardArnProps)
```

Builds an ARN for the dashboard resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.dashboard.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightDashboardArnProps">QuickSightDashboardArnProps</a>

---

##### `dashboardSnapshotJob` <a name="dashboardSnapshotJob" id="@cdk_utils/iam.quicksight.QuickSightResources.dashboardSnapshotJob"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.dashboardSnapshotJob(props: QuickSightDashboardSnapshotJobArnProps)
```

Builds an ARN for the dashboardSnapshotJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.dashboardSnapshotJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightDashboardSnapshotJobArnProps">QuickSightDashboardSnapshotJobArnProps</a>

---

##### `dataset` <a name="dataset" id="@cdk_utils/iam.quicksight.QuickSightResources.dataset"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.dataset(props: QuickSightDatasetArnProps)
```

Builds an ARN for the dataset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.dataset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightDatasetArnProps">QuickSightDatasetArnProps</a>

---

##### `datasource` <a name="datasource" id="@cdk_utils/iam.quicksight.QuickSightResources.datasource"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.datasource(props: QuickSightDatasourceArnProps)
```

Builds an ARN for the datasource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.datasource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightDatasourceArnProps">QuickSightDatasourceArnProps</a>

---

##### `dlpSetting` <a name="dlpSetting" id="@cdk_utils/iam.quicksight.QuickSightResources.dlpSetting"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.dlpSetting(props: QuickSightDlpSettingArnProps)
```

Builds an ARN for the dlpSetting resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.dlpSetting.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightDlpSettingArnProps">QuickSightDlpSettingArnProps</a>

---

##### `emailCustomizationTemplate` <a name="emailCustomizationTemplate" id="@cdk_utils/iam.quicksight.QuickSightResources.emailCustomizationTemplate"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.emailCustomizationTemplate(props: QuickSightEmailCustomizationTemplateArnProps)
```

Builds an ARN for the emailCustomizationTemplate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.emailCustomizationTemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightEmailCustomizationTemplateArnProps">QuickSightEmailCustomizationTemplateArnProps</a>

---

##### `extensionaccess` <a name="extensionaccess" id="@cdk_utils/iam.quicksight.QuickSightResources.extensionaccess"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.extensionaccess(props: QuickSightExtensionaccessArnProps)
```

Builds an ARN for the extensionaccess resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.extensionaccess.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightExtensionaccessArnProps">QuickSightExtensionaccessArnProps</a>

---

##### `flow` <a name="flow" id="@cdk_utils/iam.quicksight.QuickSightResources.flow"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.flow(props: QuickSightFlowArnProps)
```

Builds an ARN for the flow resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.flow.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightFlowArnProps">QuickSightFlowArnProps</a>

---

##### `folder` <a name="folder" id="@cdk_utils/iam.quicksight.QuickSightResources.folder"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.folder(props: QuickSightFolderArnProps)
```

Builds an ARN for the folder resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.folder.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightFolderArnProps">QuickSightFolderArnProps</a>

---

##### `group` <a name="group" id="@cdk_utils/iam.quicksight.QuickSightResources.group"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.group(props: QuickSightGroupArnProps)
```

Builds an ARN for the group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.group.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightGroupArnProps">QuickSightGroupArnProps</a>

---

##### `ingestion` <a name="ingestion" id="@cdk_utils/iam.quicksight.QuickSightResources.ingestion"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.ingestion(props: QuickSightIngestionArnProps)
```

Builds an ARN for the ingestion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.ingestion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightIngestionArnProps">QuickSightIngestionArnProps</a>

---

##### `isValidAccountArn` <a name="isValidAccountArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAccountArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidAccountArn(arn: string)
```

Validates whether a string is a valid ARN for the account resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAccountArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidActionconnectorArn` <a name="isValidActionconnectorArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidActionconnectorArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidActionconnectorArn(arn: string)
```

Validates whether a string is a valid ARN for the actionconnector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidActionconnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAgentArn` <a name="isValidAgentArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAgentArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidAgentArn(arn: string)
```

Validates whether a string is a valid ARN for the agent resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAgentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAnalysisArn` <a name="isValidAnalysisArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAnalysisArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidAnalysisArn(arn: string)
```

Validates whether a string is a valid ARN for the analysis resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAnalysisArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAppArn` <a name="isValidAppArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAppArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidAppArn(arn: string)
```

Validates whether a string is a valid ARN for the app resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAppArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidApprovalPolicyArn` <a name="isValidApprovalPolicyArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidApprovalPolicyArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidApprovalPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the approvalPolicy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidApprovalPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAssetBundleExportJobArn` <a name="isValidAssetBundleExportJobArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAssetBundleExportJobArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidAssetBundleExportJobArn(arn: string)
```

Validates whether a string is a valid ARN for the assetBundleExportJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAssetBundleExportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAssetBundleImportJobArn` <a name="isValidAssetBundleImportJobArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAssetBundleImportJobArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidAssetBundleImportJobArn(arn: string)
```

Validates whether a string is a valid ARN for the assetBundleImportJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAssetBundleImportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAssignmentArn` <a name="isValidAssignmentArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAssignmentArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidAssignmentArn(arn: string)
```

Validates whether a string is a valid ARN for the assignment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAssignmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAutomationArn` <a name="isValidAutomationArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAutomationArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidAutomationArn(arn: string)
```

Validates whether a string is a valid ARN for the automation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAutomationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAutomationGroupArn` <a name="isValidAutomationGroupArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAutomationGroupArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidAutomationGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the automationGroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAutomationGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAutomationJobArn` <a name="isValidAutomationJobArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAutomationJobArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidAutomationJobArn(arn: string)
```

Validates whether a string is a valid ARN for the automationJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidAutomationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBrandArn` <a name="isValidBrandArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidBrandArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidBrandArn(arn: string)
```

Validates whether a string is a valid ARN for the brand resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidBrandArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCustomizationArn` <a name="isValidCustomizationArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidCustomizationArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidCustomizationArn(arn: string)
```

Validates whether a string is a valid ARN for the customization resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidCustomizationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCustompermissionsArn` <a name="isValidCustompermissionsArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidCustompermissionsArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidCustompermissionsArn(arn: string)
```

Validates whether a string is a valid ARN for the custompermissions resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidCustompermissionsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDashboardArn` <a name="isValidDashboardArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidDashboardArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidDashboardArn(arn: string)
```

Validates whether a string is a valid ARN for the dashboard resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDashboardSnapshotJobArn` <a name="isValidDashboardSnapshotJobArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidDashboardSnapshotJobArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidDashboardSnapshotJobArn(arn: string)
```

Validates whether a string is a valid ARN for the dashboardSnapshotJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidDashboardSnapshotJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasetArn` <a name="isValidDatasetArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidDatasetArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidDatasetArn(arn: string)
```

Validates whether a string is a valid ARN for the dataset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasourceArn` <a name="isValidDatasourceArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidDatasourceArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidDatasourceArn(arn: string)
```

Validates whether a string is a valid ARN for the datasource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidDatasourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDlpSettingArn` <a name="isValidDlpSettingArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidDlpSettingArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidDlpSettingArn(arn: string)
```

Validates whether a string is a valid ARN for the dlpSetting resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidDlpSettingArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEmailCustomizationTemplateArn` <a name="isValidEmailCustomizationTemplateArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidEmailCustomizationTemplateArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidEmailCustomizationTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the emailCustomizationTemplate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidEmailCustomizationTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExtensionaccessArn` <a name="isValidExtensionaccessArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidExtensionaccessArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidExtensionaccessArn(arn: string)
```

Validates whether a string is a valid ARN for the extensionaccess resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidExtensionaccessArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFlowArn` <a name="isValidFlowArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidFlowArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidFlowArn(arn: string)
```

Validates whether a string is a valid ARN for the flow resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidFlowArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFolderArn` <a name="isValidFolderArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidFolderArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidFolderArn(arn: string)
```

Validates whether a string is a valid ARN for the folder resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidFolderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGroupArn` <a name="isValidGroupArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidGroupArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIngestionArn` <a name="isValidIngestionArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidIngestionArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidIngestionArn(arn: string)
```

Validates whether a string is a valid ARN for the ingestion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidIngestionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidKnowledgeBaseArn` <a name="isValidKnowledgeBaseArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidKnowledgeBaseArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidKnowledgeBaseArn(arn: string)
```

Validates whether a string is a valid ARN for the knowledgeBase resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidKnowledgeBaseArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLimitsProfileArn` <a name="isValidLimitsProfileArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidLimitsProfileArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidLimitsProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the limitsProfile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidLimitsProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNamespaceArn` <a name="isValidNamespaceArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidNamespaceArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidNamespaceArn(arn: string)
```

Validates whether a string is a valid ARN for the namespace resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidNamespaceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOauthClientApplicationArn` <a name="isValidOauthClientApplicationArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidOauthClientApplicationArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidOauthClientApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the oauthClientApplication resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidOauthClientApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRefreshscheduleArn` <a name="isValidRefreshscheduleArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidRefreshscheduleArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidRefreshscheduleArn(arn: string)
```

Validates whether a string is a valid ARN for the refreshschedule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidRefreshscheduleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSpaceArn` <a name="isValidSpaceArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidSpaceArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidSpaceArn(arn: string)
```

Validates whether a string is a valid ARN for the space resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidSpaceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTemplateArn` <a name="isValidTemplateArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidTemplateArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidThemeArn` <a name="isValidThemeArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidThemeArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidThemeArn(arn: string)
```

Validates whether a string is a valid ARN for the theme resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidThemeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTopicArn` <a name="isValidTopicArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidTopicArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidTopicArn(arn: string)
```

Validates whether a string is a valid ARN for the topic resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidTopicArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUserArn` <a name="isValidUserArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidUserArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidUserArn(arn: string)
```

Validates whether a string is a valid ARN for the user resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidUserArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVpcconnectionArn` <a name="isValidVpcconnectionArn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidVpcconnectionArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.isValidVpcconnectionArn(arn: string)
```

Validates whether a string is a valid ARN for the vpcconnection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.isValidVpcconnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `knowledgeBase` <a name="knowledgeBase" id="@cdk_utils/iam.quicksight.QuickSightResources.knowledgeBase"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.knowledgeBase(props: QuickSightKnowledgeBaseArnProps)
```

Builds an ARN for the knowledgeBase resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.knowledgeBase.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightKnowledgeBaseArnProps">QuickSightKnowledgeBaseArnProps</a>

---

##### `limitsProfile` <a name="limitsProfile" id="@cdk_utils/iam.quicksight.QuickSightResources.limitsProfile"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.limitsProfile(props: QuickSightLimitsProfileArnProps)
```

Builds an ARN for the limitsProfile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.limitsProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightLimitsProfileArnProps">QuickSightLimitsProfileArnProps</a>

---

##### `namespace` <a name="namespace" id="@cdk_utils/iam.quicksight.QuickSightResources.namespace"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.namespace(props: QuickSightNamespaceArnProps)
```

Builds an ARN for the namespace resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.namespace.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightNamespaceArnProps">QuickSightNamespaceArnProps</a>

---

##### `oauthClientApplication` <a name="oauthClientApplication" id="@cdk_utils/iam.quicksight.QuickSightResources.oauthClientApplication"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.oauthClientApplication(props: QuickSightOauthClientApplicationArnProps)
```

Builds an ARN for the oauthClientApplication resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.oauthClientApplication.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightOauthClientApplicationArnProps">QuickSightOauthClientApplicationArnProps</a>

---

##### `parseAccountArn` <a name="parseAccountArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAccountArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseAccountArn(arn: string)
```

Parses a account ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAccountArn.parameter.arn"></a>

- *Type:* string

---

##### `parseActionconnectorArn` <a name="parseActionconnectorArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseActionconnectorArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseActionconnectorArn(arn: string)
```

Parses a actionconnector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseActionconnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAgentArn` <a name="parseAgentArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAgentArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseAgentArn(arn: string)
```

Parses a agent ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAgentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAnalysisArn` <a name="parseAnalysisArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAnalysisArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseAnalysisArn(arn: string)
```

Parses a analysis ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAnalysisArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAppArn` <a name="parseAppArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAppArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseAppArn(arn: string)
```

Parses a app ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAppArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApprovalPolicyArn` <a name="parseApprovalPolicyArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseApprovalPolicyArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseApprovalPolicyArn(arn: string)
```

Parses a approvalPolicy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseApprovalPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAssetBundleExportJobArn` <a name="parseAssetBundleExportJobArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAssetBundleExportJobArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseAssetBundleExportJobArn(arn: string)
```

Parses a assetBundleExportJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAssetBundleExportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAssetBundleImportJobArn` <a name="parseAssetBundleImportJobArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAssetBundleImportJobArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseAssetBundleImportJobArn(arn: string)
```

Parses a assetBundleImportJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAssetBundleImportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAssignmentArn` <a name="parseAssignmentArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAssignmentArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseAssignmentArn(arn: string)
```

Parses a assignment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAssignmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAutomationArn` <a name="parseAutomationArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAutomationArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseAutomationArn(arn: string)
```

Parses a automation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAutomationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAutomationGroupArn` <a name="parseAutomationGroupArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAutomationGroupArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseAutomationGroupArn(arn: string)
```

Parses a automationGroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAutomationGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAutomationJobArn` <a name="parseAutomationJobArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAutomationJobArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseAutomationJobArn(arn: string)
```

Parses a automationJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseAutomationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBrandArn` <a name="parseBrandArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseBrandArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseBrandArn(arn: string)
```

Parses a brand ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseBrandArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCustomizationArn` <a name="parseCustomizationArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseCustomizationArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseCustomizationArn(arn: string)
```

Parses a customization ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseCustomizationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCustompermissionsArn` <a name="parseCustompermissionsArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseCustompermissionsArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseCustompermissionsArn(arn: string)
```

Parses a custompermissions ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseCustompermissionsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDashboardArn` <a name="parseDashboardArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseDashboardArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseDashboardArn(arn: string)
```

Parses a dashboard ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDashboardSnapshotJobArn` <a name="parseDashboardSnapshotJobArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseDashboardSnapshotJobArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseDashboardSnapshotJobArn(arn: string)
```

Parses a dashboardSnapshotJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseDashboardSnapshotJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasetArn` <a name="parseDatasetArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseDatasetArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseDatasetArn(arn: string)
```

Parses a dataset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasourceArn` <a name="parseDatasourceArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseDatasourceArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseDatasourceArn(arn: string)
```

Parses a datasource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseDatasourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDlpSettingArn` <a name="parseDlpSettingArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseDlpSettingArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseDlpSettingArn(arn: string)
```

Parses a dlpSetting ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseDlpSettingArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEmailCustomizationTemplateArn` <a name="parseEmailCustomizationTemplateArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseEmailCustomizationTemplateArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseEmailCustomizationTemplateArn(arn: string)
```

Parses a emailCustomizationTemplate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseEmailCustomizationTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExtensionaccessArn` <a name="parseExtensionaccessArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseExtensionaccessArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseExtensionaccessArn(arn: string)
```

Parses a extensionaccess ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseExtensionaccessArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFlowArn` <a name="parseFlowArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseFlowArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseFlowArn(arn: string)
```

Parses a flow ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseFlowArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFolderArn` <a name="parseFolderArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseFolderArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseFolderArn(arn: string)
```

Parses a folder ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseFolderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGroupArn` <a name="parseGroupArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseGroupArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseGroupArn(arn: string)
```

Parses a group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIngestionArn` <a name="parseIngestionArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseIngestionArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseIngestionArn(arn: string)
```

Parses a ingestion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseIngestionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseKnowledgeBaseArn` <a name="parseKnowledgeBaseArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseKnowledgeBaseArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseKnowledgeBaseArn(arn: string)
```

Parses a knowledgeBase ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseKnowledgeBaseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLimitsProfileArn` <a name="parseLimitsProfileArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseLimitsProfileArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseLimitsProfileArn(arn: string)
```

Parses a limitsProfile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseLimitsProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNamespaceArn` <a name="parseNamespaceArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseNamespaceArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseNamespaceArn(arn: string)
```

Parses a namespace ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseNamespaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOauthClientApplicationArn` <a name="parseOauthClientApplicationArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseOauthClientApplicationArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseOauthClientApplicationArn(arn: string)
```

Parses a oauthClientApplication ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseOauthClientApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRefreshscheduleArn` <a name="parseRefreshscheduleArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseRefreshscheduleArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseRefreshscheduleArn(arn: string)
```

Parses a refreshschedule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseRefreshscheduleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSpaceArn` <a name="parseSpaceArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseSpaceArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseSpaceArn(arn: string)
```

Parses a space ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseSpaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTemplateArn` <a name="parseTemplateArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseTemplateArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseTemplateArn(arn: string)
```

Parses a template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseThemeArn` <a name="parseThemeArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseThemeArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseThemeArn(arn: string)
```

Parses a theme ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseThemeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTopicArn` <a name="parseTopicArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseTopicArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseTopicArn(arn: string)
```

Parses a topic ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseTopicArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUserArn` <a name="parseUserArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseUserArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseUserArn(arn: string)
```

Parses a user ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseUserArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVpcconnectionArn` <a name="parseVpcconnectionArn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseVpcconnectionArn"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.parseVpcconnectionArn(arn: string)
```

Parses a vpcconnection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.quicksight.QuickSightResources.parseVpcconnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `refreshschedule` <a name="refreshschedule" id="@cdk_utils/iam.quicksight.QuickSightResources.refreshschedule"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.refreshschedule(props: QuickSightRefreshscheduleArnProps)
```

Builds an ARN for the refreshschedule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.refreshschedule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightRefreshscheduleArnProps">QuickSightRefreshscheduleArnProps</a>

---

##### `space` <a name="space" id="@cdk_utils/iam.quicksight.QuickSightResources.space"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.space(props: QuickSightSpaceArnProps)
```

Builds an ARN for the space resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.space.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightSpaceArnProps">QuickSightSpaceArnProps</a>

---

##### `template` <a name="template" id="@cdk_utils/iam.quicksight.QuickSightResources.template"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.template(props: QuickSightTemplateArnProps)
```

Builds an ARN for the template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.template.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightTemplateArnProps">QuickSightTemplateArnProps</a>

---

##### `theme` <a name="theme" id="@cdk_utils/iam.quicksight.QuickSightResources.theme"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.theme(props: QuickSightThemeArnProps)
```

Builds an ARN for the theme resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.theme.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightThemeArnProps">QuickSightThemeArnProps</a>

---

##### `topic` <a name="topic" id="@cdk_utils/iam.quicksight.QuickSightResources.topic"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.topic(props: QuickSightTopicArnProps)
```

Builds an ARN for the topic resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.topic.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightTopicArnProps">QuickSightTopicArnProps</a>

---

##### `user` <a name="user" id="@cdk_utils/iam.quicksight.QuickSightResources.user"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.user(props: QuickSightUserArnProps)
```

Builds an ARN for the user resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.user.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightUserArnProps">QuickSightUserArnProps</a>

---

##### `vpcconnection` <a name="vpcconnection" id="@cdk_utils/iam.quicksight.QuickSightResources.vpcconnection"></a>

```typescript
import { quicksight } from '@cdk_utils/iam'

quicksight.QuickSightResources.vpcconnection(props: QuickSightVpcconnectionArnProps)
```

Builds an ARN for the vpcconnection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.quicksight.QuickSightResources.vpcconnection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.quicksight.QuickSightVpcconnectionArnProps">QuickSightVpcconnectionArnProps</a>

---




