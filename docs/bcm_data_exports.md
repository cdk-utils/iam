# `bcm_data_exports` Submodule <a name="`bcm_data_exports` Submodule" id="@cdk_utils/iam.bcm_data_exports"></a>


## Structs <a name="Structs" id="Structs"></a>

### BcmDataExportsBillingviewArnComponents <a name="BcmDataExportsBillingviewArnComponents" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsBillingviewArnComponents"></a>

Parsed components of a billingview ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsBillingviewArnComponents.Initializer"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

const bcmDataExportsBillingviewArnComponents: bcm_data_exports.BcmDataExportsBillingviewArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsBillingviewArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsBillingviewArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsBillingviewArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsBillingviewArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsBillingviewArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsBillingviewArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BcmDataExportsBillingviewArnProps <a name="BcmDataExportsBillingviewArnProps" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsBillingviewArnProps"></a>

Properties for building a billingview ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsBillingviewArnProps.Initializer"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

const bcmDataExportsBillingviewArnProps: bcm_data_exports.BcmDataExportsBillingviewArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsBillingviewArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsBillingviewArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsBillingviewArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsBillingviewArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsBillingviewArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsBillingviewArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### BcmDataExportsExportArnComponents <a name="BcmDataExportsExportArnComponents" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnComponents"></a>

Parsed components of a export ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnComponents.Initializer"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

const bcmDataExportsExportArnComponents: bcm_data_exports.BcmDataExportsExportArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BcmDataExportsExportArnProps <a name="BcmDataExportsExportArnProps" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnProps"></a>

Properties for building a export ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnProps.Initializer"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

const bcmDataExportsExportArnProps: bcm_data_exports.BcmDataExportsExportArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BcmDataExportsTableArnComponents <a name="BcmDataExportsTableArnComponents" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnComponents"></a>

Parsed components of a table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnComponents.Initializer"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

const bcmDataExportsTableArnComponents: bcm_data_exports.BcmDataExportsTableArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BcmDataExportsTableArnProps <a name="BcmDataExportsTableArnProps" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnProps"></a>

Properties for building a table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnProps.Initializer"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

const bcmDataExportsTableArnProps: bcm_data_exports.BcmDataExportsTableArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### BcmDataExportsActions <a name="BcmDataExportsActions" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions"></a>

IAM action constants for the bcm-data-exports service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.Initializer"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

new bcm_data_exports.BcmDataExportsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.actionGetExecution">actionGetExecution</a></code> | <code>string</code> | [Read] bcm-data-exports:GetExecution. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.actionGetExport">actionGetExport</a></code> | <code>string</code> | [Read] bcm-data-exports:GetExport. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.actionGetTable">actionGetTable</a></code> | <code>string</code> | [Read] bcm-data-exports:GetTable. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.CreateExport">CreateExport</a></code> | <code>string</code> | [Write] bcm-data-exports:CreateExport. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.DeleteExport">DeleteExport</a></code> | <code>string</code> | [Write] bcm-data-exports:DeleteExport. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.ListExecutions">ListExecutions</a></code> | <code>string</code> | [List] bcm-data-exports:ListExecutions. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.ListExports">ListExports</a></code> | <code>string</code> | [List] bcm-data-exports:ListExports. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.ListTables">ListTables</a></code> | <code>string</code> | [List] bcm-data-exports:ListTables. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] bcm-data-exports:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] bcm-data-exports:TagResource. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] bcm-data-exports:UntagResource. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.UpdateExport">UpdateExport</a></code> | <code>string</code> | [Write] bcm-data-exports:UpdateExport. |

---

##### `actionGetExecution`<sup>Required</sup> <a name="actionGetExecution" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.actionGetExecution"></a>

```typescript
public readonly actionGetExecution: string;
```

- *Type:* string

[Read] bcm-data-exports:GetExecution.

---

##### `actionGetExport`<sup>Required</sup> <a name="actionGetExport" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.actionGetExport"></a>

```typescript
public readonly actionGetExport: string;
```

- *Type:* string

[Read] bcm-data-exports:GetExport.

---

##### `actionGetTable`<sup>Required</sup> <a name="actionGetTable" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.actionGetTable"></a>

```typescript
public readonly actionGetTable: string;
```

- *Type:* string

[Read] bcm-data-exports:GetTable.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateExport`<sup>Required</sup> <a name="CreateExport" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.CreateExport"></a>

```typescript
public readonly CreateExport: string;
```

- *Type:* string

[Write] bcm-data-exports:CreateExport.

---

##### `DeleteExport`<sup>Required</sup> <a name="DeleteExport" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.DeleteExport"></a>

```typescript
public readonly DeleteExport: string;
```

- *Type:* string

[Write] bcm-data-exports:DeleteExport.

---

##### `ListExecutions`<sup>Required</sup> <a name="ListExecutions" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.ListExecutions"></a>

```typescript
public readonly ListExecutions: string;
```

- *Type:* string

[List] bcm-data-exports:ListExecutions.

---

##### `ListExports`<sup>Required</sup> <a name="ListExports" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.ListExports"></a>

```typescript
public readonly ListExports: string;
```

- *Type:* string

[List] bcm-data-exports:ListExports.

---

##### `ListTables`<sup>Required</sup> <a name="ListTables" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.ListTables"></a>

```typescript
public readonly ListTables: string;
```

- *Type:* string

[List] bcm-data-exports:ListTables.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] bcm-data-exports:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] bcm-data-exports:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] bcm-data-exports:UntagResource.

---

##### `UpdateExport`<sup>Required</sup> <a name="UpdateExport" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsActions.property.UpdateExport"></a>

```typescript
public readonly UpdateExport: string;
```

- *Type:* string

[Write] bcm-data-exports:UpdateExport.

---

### BcmDataExportsConditions <a name="BcmDataExportsConditions" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions"></a>

Condition key constants and builders for bcm-data-exports.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.Initializer"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

new bcm_data_exports.BcmDataExportsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.requestTag"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

bcm_data_exports.BcmDataExportsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.resourceTag"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

bcm_data_exports.BcmDataExportsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.tagKeys"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

bcm_data_exports.BcmDataExportsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.actionGetExecutionConditionKeys">actionGetExecutionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetExecution action. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.actionGetExportConditionKeys">actionGetExportConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetExport action. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.CreateExportConditionKeys">CreateExportConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateExport action. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.DeleteExportConditionKeys">DeleteExportConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteExport action. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.ListExecutionsConditionKeys">ListExecutionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListExecutions action. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.UpdateExportConditionKeys">UpdateExportConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateExport action. |

---

##### `actionGetExecutionConditionKeys`<sup>Required</sup> <a name="actionGetExecutionConditionKeys" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.actionGetExecutionConditionKeys"></a>

```typescript
public readonly actionGetExecutionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetExecution action.

---

##### `actionGetExportConditionKeys`<sup>Required</sup> <a name="actionGetExportConditionKeys" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.actionGetExportConditionKeys"></a>

```typescript
public readonly actionGetExportConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetExport action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateExportConditionKeys`<sup>Required</sup> <a name="CreateExportConditionKeys" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.CreateExportConditionKeys"></a>

```typescript
public readonly CreateExportConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateExport action.

---

##### `DeleteExportConditionKeys`<sup>Required</sup> <a name="DeleteExportConditionKeys" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.DeleteExportConditionKeys"></a>

```typescript
public readonly DeleteExportConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteExport action.

---

##### `ListExecutionsConditionKeys`<sup>Required</sup> <a name="ListExecutionsConditionKeys" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.ListExecutionsConditionKeys"></a>

```typescript
public readonly ListExecutionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListExecutions action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateExportConditionKeys`<sup>Required</sup> <a name="UpdateExportConditionKeys" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsConditions.property.UpdateExportConditionKeys"></a>

```typescript
public readonly UpdateExportConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateExport action.

---

### BcmDataExportsOperations <a name="BcmDataExportsOperations" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations"></a>

API operation to required IAM actions mapping for bcm-data-exports.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.Initializer"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

new bcm_data_exports.BcmDataExportsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.CreateExport">CreateExport</a></code> | <code>string[]</code> | IAM actions required for the CreateExport API call. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.DeleteExport">DeleteExport</a></code> | <code>string[]</code> | IAM actions required for the DeleteExport API call. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.ListExecutions">ListExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListExecutions API call. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.ListExports">ListExports</a></code> | <code>string[]</code> | IAM actions required for the ListExports API call. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.ListTables">ListTables</a></code> | <code>string[]</code> | IAM actions required for the ListTables API call. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.opGetExecution">opGetExecution</a></code> | <code>string[]</code> | IAM actions required for the GetExecution API call. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.opGetExport">opGetExport</a></code> | <code>string[]</code> | IAM actions required for the GetExport API call. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.opGetTable">opGetTable</a></code> | <code>string[]</code> | IAM actions required for the GetTable API call. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.UpdateExport">UpdateExport</a></code> | <code>string[]</code> | IAM actions required for the UpdateExport API call. |

---

##### `CreateExport`<sup>Required</sup> <a name="CreateExport" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.CreateExport"></a>

```typescript
public readonly CreateExport: string[];
```

- *Type:* string[]

IAM actions required for the CreateExport API call.

---

##### `DeleteExport`<sup>Required</sup> <a name="DeleteExport" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.DeleteExport"></a>

```typescript
public readonly DeleteExport: string[];
```

- *Type:* string[]

IAM actions required for the DeleteExport API call.

---

##### `ListExecutions`<sup>Required</sup> <a name="ListExecutions" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.ListExecutions"></a>

```typescript
public readonly ListExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListExecutions API call.

---

##### `ListExports`<sup>Required</sup> <a name="ListExports" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.ListExports"></a>

```typescript
public readonly ListExports: string[];
```

- *Type:* string[]

IAM actions required for the ListExports API call.

---

##### `ListTables`<sup>Required</sup> <a name="ListTables" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.ListTables"></a>

```typescript
public readonly ListTables: string[];
```

- *Type:* string[]

IAM actions required for the ListTables API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetExecution`<sup>Required</sup> <a name="opGetExecution" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.opGetExecution"></a>

```typescript
public readonly opGetExecution: string[];
```

- *Type:* string[]

IAM actions required for the GetExecution API call.

---

##### `opGetExport`<sup>Required</sup> <a name="opGetExport" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.opGetExport"></a>

```typescript
public readonly opGetExport: string[];
```

- *Type:* string[]

IAM actions required for the GetExport API call.

---

##### `opGetTable`<sup>Required</sup> <a name="opGetTable" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.opGetTable"></a>

```typescript
public readonly opGetTable: string[];
```

- *Type:* string[]

IAM actions required for the GetTable API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateExport`<sup>Required</sup> <a name="UpdateExport" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsOperations.property.UpdateExport"></a>

```typescript
public readonly UpdateExport: string[];
```

- *Type:* string[]

IAM actions required for the UpdateExport API call.

---

### BcmDataExportsResources <a name="BcmDataExportsResources" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources"></a>

ARN builders, validators, and parsers for bcm-data-exports resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.Initializer"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

new bcm_data_exports.BcmDataExportsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.billingview">billingview</a></code> | Builds an ARN for the billingview resource. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.export">export</a></code> | Builds an ARN for the export resource. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.isValidBillingviewArn">isValidBillingviewArn</a></code> | Validates whether a string is a valid ARN for the billingview resource. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.isValidExportArn">isValidExportArn</a></code> | Validates whether a string is a valid ARN for the export resource. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.isValidTableArn">isValidTableArn</a></code> | Validates whether a string is a valid ARN for the table resource. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.parseBillingviewArn">parseBillingviewArn</a></code> | Parses a billingview ARN into its components. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.parseExportArn">parseExportArn</a></code> | Parses a export ARN into its components. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.parseTableArn">parseTableArn</a></code> | Parses a table ARN into its components. |
| <code><a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.table">table</a></code> | Builds an ARN for the table resource. |

---

##### `billingview` <a name="billingview" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.billingview"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

bcm_data_exports.BcmDataExportsResources.billingview(props: BcmDataExportsBillingviewArnProps)
```

Builds an ARN for the billingview resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.billingview.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsBillingviewArnProps">BcmDataExportsBillingviewArnProps</a>

---

##### `export` <a name="export" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.export"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

bcm_data_exports.BcmDataExportsResources.export(props: BcmDataExportsExportArnProps)
```

Builds an ARN for the export resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.export.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsExportArnProps">BcmDataExportsExportArnProps</a>

---

##### `isValidBillingviewArn` <a name="isValidBillingviewArn" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.isValidBillingviewArn"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

bcm_data_exports.BcmDataExportsResources.isValidBillingviewArn(arn: string)
```

Validates whether a string is a valid ARN for the billingview resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.isValidBillingviewArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExportArn` <a name="isValidExportArn" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.isValidExportArn"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

bcm_data_exports.BcmDataExportsResources.isValidExportArn(arn: string)
```

Validates whether a string is a valid ARN for the export resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.isValidExportArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTableArn` <a name="isValidTableArn" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.isValidTableArn"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

bcm_data_exports.BcmDataExportsResources.isValidTableArn(arn: string)
```

Validates whether a string is a valid ARN for the table resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.isValidTableArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBillingviewArn` <a name="parseBillingviewArn" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.parseBillingviewArn"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

bcm_data_exports.BcmDataExportsResources.parseBillingviewArn(arn: string)
```

Parses a billingview ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.parseBillingviewArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExportArn` <a name="parseExportArn" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.parseExportArn"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

bcm_data_exports.BcmDataExportsResources.parseExportArn(arn: string)
```

Parses a export ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.parseExportArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTableArn` <a name="parseTableArn" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.parseTableArn"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

bcm_data_exports.BcmDataExportsResources.parseTableArn(arn: string)
```

Parses a table ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.parseTableArn.parameter.arn"></a>

- *Type:* string

---

##### `table` <a name="table" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.table"></a>

```typescript
import { bcm_data_exports } from '@cdk_utils/iam'

bcm_data_exports.BcmDataExportsResources.table(props: BcmDataExportsTableArnProps)
```

Builds an ARN for the table resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bcm_data_exports.BcmDataExportsResources.table.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bcm_data_exports.BcmDataExportsTableArnProps">BcmDataExportsTableArnProps</a>

---




