# `controlcatalog` Submodule <a name="`controlcatalog` Submodule" id="@cdk_utils/iam.controlcatalog"></a>


## Structs <a name="Structs" id="Structs"></a>

### ControlcatalogCommonControlArnComponents <a name="ControlcatalogCommonControlArnComponents" id="@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnComponents"></a>

Parsed components of a common-control ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnComponents.Initializer"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

const controlcatalogCommonControlArnComponents: controlcatalog.ControlcatalogCommonControlArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnComponents.property.commonControlId">commonControlId</a></code> | <code>string</code> | The CommonControlId component. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `commonControlId`<sup>Required</sup> <a name="commonControlId" id="@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnComponents.property.commonControlId"></a>

```typescript
public readonly commonControlId: string;
```

- *Type:* string

The CommonControlId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ControlcatalogCommonControlArnProps <a name="ControlcatalogCommonControlArnProps" id="@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnProps"></a>

Properties for building a common-control ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnProps.Initializer"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

const controlcatalogCommonControlArnProps: controlcatalog.ControlcatalogCommonControlArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnProps.property.commonControlId">commonControlId</a></code> | <code>string</code> | The CommonControlId component of the ARN. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `commonControlId`<sup>Required</sup> <a name="commonControlId" id="@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnProps.property.commonControlId"></a>

```typescript
public readonly commonControlId: string;
```

- *Type:* string

The CommonControlId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ControlcatalogControlArnComponents <a name="ControlcatalogControlArnComponents" id="@cdk_utils/iam.controlcatalog.ControlcatalogControlArnComponents"></a>

Parsed components of a control ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.controlcatalog.ControlcatalogControlArnComponents.Initializer"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

const controlcatalogControlArnComponents: controlcatalog.ControlcatalogControlArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogControlArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogControlArnComponents.property.controlId">controlId</a></code> | <code>string</code> | The ControlId component. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogControlArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogControlArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.controlcatalog.ControlcatalogControlArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `controlId`<sup>Required</sup> <a name="controlId" id="@cdk_utils/iam.controlcatalog.ControlcatalogControlArnComponents.property.controlId"></a>

```typescript
public readonly controlId: string;
```

- *Type:* string

The ControlId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.controlcatalog.ControlcatalogControlArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.controlcatalog.ControlcatalogControlArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ControlcatalogControlArnProps <a name="ControlcatalogControlArnProps" id="@cdk_utils/iam.controlcatalog.ControlcatalogControlArnProps"></a>

Properties for building a control ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.controlcatalog.ControlcatalogControlArnProps.Initializer"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

const controlcatalogControlArnProps: controlcatalog.ControlcatalogControlArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogControlArnProps.property.controlId">controlId</a></code> | <code>string</code> | The ControlId component of the ARN. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogControlArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogControlArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogControlArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `controlId`<sup>Required</sup> <a name="controlId" id="@cdk_utils/iam.controlcatalog.ControlcatalogControlArnProps.property.controlId"></a>

```typescript
public readonly controlId: string;
```

- *Type:* string

The ControlId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.controlcatalog.ControlcatalogControlArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.controlcatalog.ControlcatalogControlArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.controlcatalog.ControlcatalogControlArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ControlcatalogDomainArnComponents <a name="ControlcatalogDomainArnComponents" id="@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnComponents"></a>

Parsed components of a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnComponents.Initializer"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

const controlcatalogDomainArnComponents: controlcatalog.ControlcatalogDomainArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnComponents.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnComponents.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ControlcatalogDomainArnProps <a name="ControlcatalogDomainArnProps" id="@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnProps"></a>

Properties for building a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnProps.Initializer"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

const controlcatalogDomainArnProps: controlcatalog.ControlcatalogDomainArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnProps.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ControlcatalogObjectiveArnComponents <a name="ControlcatalogObjectiveArnComponents" id="@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnComponents"></a>

Parsed components of a objective ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnComponents.Initializer"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

const controlcatalogObjectiveArnComponents: controlcatalog.ControlcatalogObjectiveArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnComponents.property.objectiveId">objectiveId</a></code> | <code>string</code> | The ObjectiveId component. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `objectiveId`<sup>Required</sup> <a name="objectiveId" id="@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnComponents.property.objectiveId"></a>

```typescript
public readonly objectiveId: string;
```

- *Type:* string

The ObjectiveId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ControlcatalogObjectiveArnProps <a name="ControlcatalogObjectiveArnProps" id="@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnProps"></a>

Properties for building a objective ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnProps.Initializer"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

const controlcatalogObjectiveArnProps: controlcatalog.ControlcatalogObjectiveArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnProps.property.objectiveId">objectiveId</a></code> | <code>string</code> | The ObjectiveId component of the ARN. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `objectiveId`<sup>Required</sup> <a name="objectiveId" id="@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnProps.property.objectiveId"></a>

```typescript
public readonly objectiveId: string;
```

- *Type:* string

The ObjectiveId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ControlcatalogActions <a name="ControlcatalogActions" id="@cdk_utils/iam.controlcatalog.ControlcatalogActions"></a>

IAM action constants for the controlcatalog service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.controlcatalog.ControlcatalogActions.Initializer"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

new controlcatalog.ControlcatalogActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.actionGetControl">actionGetControl</a></code> | <code>string</code> | [Read] controlcatalog:GetControl. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.ListCommonControls">ListCommonControls</a></code> | <code>string</code> | [List] controlcatalog:ListCommonControls. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.ListControlMappings">ListControlMappings</a></code> | <code>string</code> | [List] controlcatalog:ListControlMappings. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.ListControls">ListControls</a></code> | <code>string</code> | [List] controlcatalog:ListControls. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.ListDomains">ListDomains</a></code> | <code>string</code> | [List] controlcatalog:ListDomains. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.ListObjectives">ListObjectives</a></code> | <code>string</code> | [List] controlcatalog:ListObjectives. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `actionGetControl`<sup>Required</sup> <a name="actionGetControl" id="@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.actionGetControl"></a>

```typescript
public readonly actionGetControl: string;
```

- *Type:* string

[Read] controlcatalog:GetControl.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ListCommonControls`<sup>Required</sup> <a name="ListCommonControls" id="@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.ListCommonControls"></a>

```typescript
public readonly ListCommonControls: string;
```

- *Type:* string

[List] controlcatalog:ListCommonControls.

---

##### `ListControlMappings`<sup>Required</sup> <a name="ListControlMappings" id="@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.ListControlMappings"></a>

```typescript
public readonly ListControlMappings: string;
```

- *Type:* string

[List] controlcatalog:ListControlMappings.

---

##### `ListControls`<sup>Required</sup> <a name="ListControls" id="@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.ListControls"></a>

```typescript
public readonly ListControls: string;
```

- *Type:* string

[List] controlcatalog:ListControls.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.ListDomains"></a>

```typescript
public readonly ListDomains: string;
```

- *Type:* string

[List] controlcatalog:ListDomains.

---

##### `ListObjectives`<sup>Required</sup> <a name="ListObjectives" id="@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.ListObjectives"></a>

```typescript
public readonly ListObjectives: string;
```

- *Type:* string

[List] controlcatalog:ListObjectives.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.controlcatalog.ControlcatalogActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### ControlcatalogOperations <a name="ControlcatalogOperations" id="@cdk_utils/iam.controlcatalog.ControlcatalogOperations"></a>

API operation to required IAM actions mapping for controlcatalog.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.controlcatalog.ControlcatalogOperations.Initializer"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

new controlcatalog.ControlcatalogOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogOperations.property.ListCommonControls">ListCommonControls</a></code> | <code>string[]</code> | IAM actions required for the ListCommonControls API call. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogOperations.property.ListControlMappings">ListControlMappings</a></code> | <code>string[]</code> | IAM actions required for the ListControlMappings API call. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogOperations.property.ListControls">ListControls</a></code> | <code>string[]</code> | IAM actions required for the ListControls API call. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogOperations.property.ListDomains">ListDomains</a></code> | <code>string[]</code> | IAM actions required for the ListDomains API call. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogOperations.property.ListObjectives">ListObjectives</a></code> | <code>string[]</code> | IAM actions required for the ListObjectives API call. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogOperations.property.opGetControl">opGetControl</a></code> | <code>string[]</code> | IAM actions required for the GetControl API call. |

---

##### `ListCommonControls`<sup>Required</sup> <a name="ListCommonControls" id="@cdk_utils/iam.controlcatalog.ControlcatalogOperations.property.ListCommonControls"></a>

```typescript
public readonly ListCommonControls: string[];
```

- *Type:* string[]

IAM actions required for the ListCommonControls API call.

---

##### `ListControlMappings`<sup>Required</sup> <a name="ListControlMappings" id="@cdk_utils/iam.controlcatalog.ControlcatalogOperations.property.ListControlMappings"></a>

```typescript
public readonly ListControlMappings: string[];
```

- *Type:* string[]

IAM actions required for the ListControlMappings API call.

---

##### `ListControls`<sup>Required</sup> <a name="ListControls" id="@cdk_utils/iam.controlcatalog.ControlcatalogOperations.property.ListControls"></a>

```typescript
public readonly ListControls: string[];
```

- *Type:* string[]

IAM actions required for the ListControls API call.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.controlcatalog.ControlcatalogOperations.property.ListDomains"></a>

```typescript
public readonly ListDomains: string[];
```

- *Type:* string[]

IAM actions required for the ListDomains API call.

---

##### `ListObjectives`<sup>Required</sup> <a name="ListObjectives" id="@cdk_utils/iam.controlcatalog.ControlcatalogOperations.property.ListObjectives"></a>

```typescript
public readonly ListObjectives: string[];
```

- *Type:* string[]

IAM actions required for the ListObjectives API call.

---

##### `opGetControl`<sup>Required</sup> <a name="opGetControl" id="@cdk_utils/iam.controlcatalog.ControlcatalogOperations.property.opGetControl"></a>

```typescript
public readonly opGetControl: string[];
```

- *Type:* string[]

IAM actions required for the GetControl API call.

---

### ControlcatalogResources <a name="ControlcatalogResources" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources"></a>

ARN builders, validators, and parsers for controlcatalog resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.Initializer"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

new controlcatalog.ControlcatalogResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogResources.commonControl">commonControl</a></code> | Builds an ARN for the common-control resource. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogResources.control">control</a></code> | Builds an ARN for the control resource. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogResources.domain">domain</a></code> | Builds an ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogResources.isValidCommonControlArn">isValidCommonControlArn</a></code> | Validates whether a string is a valid ARN for the common-control resource. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogResources.isValidControlArn">isValidControlArn</a></code> | Validates whether a string is a valid ARN for the control resource. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogResources.isValidDomainArn">isValidDomainArn</a></code> | Validates whether a string is a valid ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogResources.isValidObjectiveArn">isValidObjectiveArn</a></code> | Validates whether a string is a valid ARN for the objective resource. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogResources.objective">objective</a></code> | Builds an ARN for the objective resource. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogResources.parseCommonControlArn">parseCommonControlArn</a></code> | Parses a common-control ARN into its components. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogResources.parseControlArn">parseControlArn</a></code> | Parses a control ARN into its components. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogResources.parseDomainArn">parseDomainArn</a></code> | Parses a domain ARN into its components. |
| <code><a href="#@cdk_utils/iam.controlcatalog.ControlcatalogResources.parseObjectiveArn">parseObjectiveArn</a></code> | Parses a objective ARN into its components. |

---

##### `commonControl` <a name="commonControl" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.commonControl"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

controlcatalog.ControlcatalogResources.commonControl(props: ControlcatalogCommonControlArnProps)
```

Builds an ARN for the common-control resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.commonControl.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.controlcatalog.ControlcatalogCommonControlArnProps">ControlcatalogCommonControlArnProps</a>

---

##### `control` <a name="control" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.control"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

controlcatalog.ControlcatalogResources.control(props: ControlcatalogControlArnProps)
```

Builds an ARN for the control resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.control.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.controlcatalog.ControlcatalogControlArnProps">ControlcatalogControlArnProps</a>

---

##### `domain` <a name="domain" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.domain"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

controlcatalog.ControlcatalogResources.domain(props: ControlcatalogDomainArnProps)
```

Builds an ARN for the domain resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.domain.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.controlcatalog.ControlcatalogDomainArnProps">ControlcatalogDomainArnProps</a>

---

##### `isValidCommonControlArn` <a name="isValidCommonControlArn" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.isValidCommonControlArn"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

controlcatalog.ControlcatalogResources.isValidCommonControlArn(arn: string)
```

Validates whether a string is a valid ARN for the common-control resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.isValidCommonControlArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidControlArn` <a name="isValidControlArn" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.isValidControlArn"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

controlcatalog.ControlcatalogResources.isValidControlArn(arn: string)
```

Validates whether a string is a valid ARN for the control resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.isValidControlArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDomainArn` <a name="isValidDomainArn" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.isValidDomainArn"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

controlcatalog.ControlcatalogResources.isValidDomainArn(arn: string)
```

Validates whether a string is a valid ARN for the domain resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.isValidDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidObjectiveArn` <a name="isValidObjectiveArn" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.isValidObjectiveArn"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

controlcatalog.ControlcatalogResources.isValidObjectiveArn(arn: string)
```

Validates whether a string is a valid ARN for the objective resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.isValidObjectiveArn.parameter.arn"></a>

- *Type:* string

---

##### `objective` <a name="objective" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.objective"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

controlcatalog.ControlcatalogResources.objective(props: ControlcatalogObjectiveArnProps)
```

Builds an ARN for the objective resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.objective.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.controlcatalog.ControlcatalogObjectiveArnProps">ControlcatalogObjectiveArnProps</a>

---

##### `parseCommonControlArn` <a name="parseCommonControlArn" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.parseCommonControlArn"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

controlcatalog.ControlcatalogResources.parseCommonControlArn(arn: string)
```

Parses a common-control ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.parseCommonControlArn.parameter.arn"></a>

- *Type:* string

---

##### `parseControlArn` <a name="parseControlArn" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.parseControlArn"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

controlcatalog.ControlcatalogResources.parseControlArn(arn: string)
```

Parses a control ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.parseControlArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainArn` <a name="parseDomainArn" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.parseDomainArn"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

controlcatalog.ControlcatalogResources.parseDomainArn(arn: string)
```

Parses a domain ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.parseDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `parseObjectiveArn` <a name="parseObjectiveArn" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.parseObjectiveArn"></a>

```typescript
import { controlcatalog } from '@cdk_utils/iam'

controlcatalog.ControlcatalogResources.parseObjectiveArn(arn: string)
```

Parses a objective ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.controlcatalog.ControlcatalogResources.parseObjectiveArn.parameter.arn"></a>

- *Type:* string

---




