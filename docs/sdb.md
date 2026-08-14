# `sdb` Submodule <a name="`sdb` Submodule" id="@cdk_utils/iam.sdb"></a>


## Structs <a name="Structs" id="Structs"></a>

### SdbDomainArnComponents <a name="SdbDomainArnComponents" id="@cdk_utils/iam.sdb.SdbDomainArnComponents"></a>

Parsed components of a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sdb.SdbDomainArnComponents.Initializer"></a>

```typescript
import { sdb } from '@cdk_utils/iam'

const sdbDomainArnComponents: sdb.SdbDomainArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sdb.SdbDomainArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sdb.SdbDomainArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.sdb.SdbDomainArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sdb.SdbDomainArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sdb.SdbDomainArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.sdb.SdbDomainArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sdb.SdbDomainArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sdb.SdbDomainArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SdbDomainArnProps <a name="SdbDomainArnProps" id="@cdk_utils/iam.sdb.SdbDomainArnProps"></a>

Properties for building a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sdb.SdbDomainArnProps.Initializer"></a>

```typescript
import { sdb } from '@cdk_utils/iam'

const sdbDomainArnProps: sdb.SdbDomainArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sdb.SdbDomainArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.sdb.SdbDomainArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sdb.SdbDomainArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sdb.SdbDomainArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.sdb.SdbDomainArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sdb.SdbDomainArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sdb.SdbDomainArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sdb.SdbDomainArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SdbExportArnComponents <a name="SdbExportArnComponents" id="@cdk_utils/iam.sdb.SdbExportArnComponents"></a>

Parsed components of a export ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sdb.SdbExportArnComponents.Initializer"></a>

```typescript
import { sdb } from '@cdk_utils/iam'

const sdbExportArnComponents: sdb.SdbExportArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sdb.SdbExportArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sdb.SdbExportArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.sdb.SdbExportArnComponents.property.exportUuid">exportUuid</a></code> | <code>string</code> | The ExportUUID component. |
| <code><a href="#@cdk_utils/iam.sdb.SdbExportArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sdb.SdbExportArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sdb.SdbExportArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.sdb.SdbExportArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `exportUuid`<sup>Required</sup> <a name="exportUuid" id="@cdk_utils/iam.sdb.SdbExportArnComponents.property.exportUuid"></a>

```typescript
public readonly exportUuid: string;
```

- *Type:* string

The ExportUUID component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sdb.SdbExportArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sdb.SdbExportArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SdbExportArnProps <a name="SdbExportArnProps" id="@cdk_utils/iam.sdb.SdbExportArnProps"></a>

Properties for building a export ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sdb.SdbExportArnProps.Initializer"></a>

```typescript
import { sdb } from '@cdk_utils/iam'

const sdbExportArnProps: sdb.SdbExportArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sdb.SdbExportArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.sdb.SdbExportArnProps.property.exportUuid">exportUuid</a></code> | <code>string</code> | The ExportUUID component of the ARN. |
| <code><a href="#@cdk_utils/iam.sdb.SdbExportArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sdb.SdbExportArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sdb.SdbExportArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.sdb.SdbExportArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `exportUuid`<sup>Required</sup> <a name="exportUuid" id="@cdk_utils/iam.sdb.SdbExportArnProps.property.exportUuid"></a>

```typescript
public readonly exportUuid: string;
```

- *Type:* string

The ExportUUID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sdb.SdbExportArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sdb.SdbExportArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sdb.SdbExportArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SdbActions <a name="SdbActions" id="@cdk_utils/iam.sdb.SdbActions"></a>

IAM action constants for the sdb service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sdb.SdbActions.Initializer"></a>

```typescript
import { sdb } from '@cdk_utils/iam'

new sdb.SdbActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sdb.SdbActions.property.actionGetAttributes">actionGetAttributes</a></code> | <code>string</code> | [Read] sdb:GetAttributes. |
| <code><a href="#@cdk_utils/iam.sdb.SdbActions.property.actionGetExport">actionGetExport</a></code> | <code>string</code> | [Read] sdb:GetExport. |
| <code><a href="#@cdk_utils/iam.sdb.SdbActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.sdb.SdbActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.sdb.SdbActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.sdb.SdbActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.sdb.SdbActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.sdb.SdbActions.property.BatchDeleteAttributes">BatchDeleteAttributes</a></code> | <code>string</code> | [Write] sdb:BatchDeleteAttributes. |
| <code><a href="#@cdk_utils/iam.sdb.SdbActions.property.BatchPutAttributes">BatchPutAttributes</a></code> | <code>string</code> | [Write] sdb:BatchPutAttributes. |
| <code><a href="#@cdk_utils/iam.sdb.SdbActions.property.CreateDomain">CreateDomain</a></code> | <code>string</code> | [Write] sdb:CreateDomain. |
| <code><a href="#@cdk_utils/iam.sdb.SdbActions.property.DeleteAttributes">DeleteAttributes</a></code> | <code>string</code> | [Write] sdb:DeleteAttributes. |
| <code><a href="#@cdk_utils/iam.sdb.SdbActions.property.DeleteDomain">DeleteDomain</a></code> | <code>string</code> | [Write] sdb:DeleteDomain. |
| <code><a href="#@cdk_utils/iam.sdb.SdbActions.property.DomainMetadata">DomainMetadata</a></code> | <code>string</code> | [Read] sdb:DomainMetadata. |
| <code><a href="#@cdk_utils/iam.sdb.SdbActions.property.ListDomains">ListDomains</a></code> | <code>string</code> | [List] sdb:ListDomains. |
| <code><a href="#@cdk_utils/iam.sdb.SdbActions.property.ListExports">ListExports</a></code> | <code>string</code> | [List] sdb:ListExports. |
| <code><a href="#@cdk_utils/iam.sdb.SdbActions.property.PutAttributes">PutAttributes</a></code> | <code>string</code> | [Write] sdb:PutAttributes. |
| <code><a href="#@cdk_utils/iam.sdb.SdbActions.property.Select">Select</a></code> | <code>string</code> | [Read] sdb:Select. |
| <code><a href="#@cdk_utils/iam.sdb.SdbActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.sdb.SdbActions.property.StartDomainExport">StartDomainExport</a></code> | <code>string</code> | [Write] sdb:StartDomainExport. |

---

##### `actionGetAttributes`<sup>Required</sup> <a name="actionGetAttributes" id="@cdk_utils/iam.sdb.SdbActions.property.actionGetAttributes"></a>

```typescript
public readonly actionGetAttributes: string;
```

- *Type:* string

[Read] sdb:GetAttributes.

---

##### `actionGetExport`<sup>Required</sup> <a name="actionGetExport" id="@cdk_utils/iam.sdb.SdbActions.property.actionGetExport"></a>

```typescript
public readonly actionGetExport: string;
```

- *Type:* string

[Read] sdb:GetExport.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.sdb.SdbActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.sdb.SdbActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.sdb.SdbActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.sdb.SdbActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.sdb.SdbActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchDeleteAttributes`<sup>Required</sup> <a name="BatchDeleteAttributes" id="@cdk_utils/iam.sdb.SdbActions.property.BatchDeleteAttributes"></a>

```typescript
public readonly BatchDeleteAttributes: string;
```

- *Type:* string

[Write] sdb:BatchDeleteAttributes.

---

##### `BatchPutAttributes`<sup>Required</sup> <a name="BatchPutAttributes" id="@cdk_utils/iam.sdb.SdbActions.property.BatchPutAttributes"></a>

```typescript
public readonly BatchPutAttributes: string;
```

- *Type:* string

[Write] sdb:BatchPutAttributes.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.sdb.SdbActions.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string;
```

- *Type:* string

[Write] sdb:CreateDomain.

---

##### `DeleteAttributes`<sup>Required</sup> <a name="DeleteAttributes" id="@cdk_utils/iam.sdb.SdbActions.property.DeleteAttributes"></a>

```typescript
public readonly DeleteAttributes: string;
```

- *Type:* string

[Write] sdb:DeleteAttributes.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.sdb.SdbActions.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string;
```

- *Type:* string

[Write] sdb:DeleteDomain.

---

##### `DomainMetadata`<sup>Required</sup> <a name="DomainMetadata" id="@cdk_utils/iam.sdb.SdbActions.property.DomainMetadata"></a>

```typescript
public readonly DomainMetadata: string;
```

- *Type:* string

[Read] sdb:DomainMetadata.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.sdb.SdbActions.property.ListDomains"></a>

```typescript
public readonly ListDomains: string;
```

- *Type:* string

[List] sdb:ListDomains.

---

##### `ListExports`<sup>Required</sup> <a name="ListExports" id="@cdk_utils/iam.sdb.SdbActions.property.ListExports"></a>

```typescript
public readonly ListExports: string;
```

- *Type:* string

[List] sdb:ListExports.

---

##### `PutAttributes`<sup>Required</sup> <a name="PutAttributes" id="@cdk_utils/iam.sdb.SdbActions.property.PutAttributes"></a>

```typescript
public readonly PutAttributes: string;
```

- *Type:* string

[Write] sdb:PutAttributes.

---

##### `Select`<sup>Required</sup> <a name="Select" id="@cdk_utils/iam.sdb.SdbActions.property.Select"></a>

```typescript
public readonly Select: string;
```

- *Type:* string

[Read] sdb:Select.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.sdb.SdbActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDomainExport`<sup>Required</sup> <a name="StartDomainExport" id="@cdk_utils/iam.sdb.SdbActions.property.StartDomainExport"></a>

```typescript
public readonly StartDomainExport: string;
```

- *Type:* string

[Write] sdb:StartDomainExport.

---

### SdbOperations <a name="SdbOperations" id="@cdk_utils/iam.sdb.SdbOperations"></a>

API operation to required IAM actions mapping for sdb.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sdb.SdbOperations.Initializer"></a>

```typescript
import { sdb } from '@cdk_utils/iam'

new sdb.SdbOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sdb.SdbOperations.property.BatchDeleteAttributes">BatchDeleteAttributes</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteAttributes API call. |
| <code><a href="#@cdk_utils/iam.sdb.SdbOperations.property.BatchPutAttributes">BatchPutAttributes</a></code> | <code>string[]</code> | IAM actions required for the BatchPutAttributes API call. |
| <code><a href="#@cdk_utils/iam.sdb.SdbOperations.property.CreateDomain">CreateDomain</a></code> | <code>string[]</code> | IAM actions required for the CreateDomain API call. |
| <code><a href="#@cdk_utils/iam.sdb.SdbOperations.property.DeleteAttributes">DeleteAttributes</a></code> | <code>string[]</code> | IAM actions required for the DeleteAttributes API call. |
| <code><a href="#@cdk_utils/iam.sdb.SdbOperations.property.DeleteDomain">DeleteDomain</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomain API call. |
| <code><a href="#@cdk_utils/iam.sdb.SdbOperations.property.DomainMetadata">DomainMetadata</a></code> | <code>string[]</code> | IAM actions required for the DomainMetadata API call. |
| <code><a href="#@cdk_utils/iam.sdb.SdbOperations.property.ListDomains">ListDomains</a></code> | <code>string[]</code> | IAM actions required for the ListDomains API call. |
| <code><a href="#@cdk_utils/iam.sdb.SdbOperations.property.ListExports">ListExports</a></code> | <code>string[]</code> | IAM actions required for the ListExports API call. |
| <code><a href="#@cdk_utils/iam.sdb.SdbOperations.property.opGetAttributes">opGetAttributes</a></code> | <code>string[]</code> | IAM actions required for the GetAttributes API call. |
| <code><a href="#@cdk_utils/iam.sdb.SdbOperations.property.opGetExport">opGetExport</a></code> | <code>string[]</code> | IAM actions required for the GetExport API call. |
| <code><a href="#@cdk_utils/iam.sdb.SdbOperations.property.PutAttributes">PutAttributes</a></code> | <code>string[]</code> | IAM actions required for the PutAttributes API call. |
| <code><a href="#@cdk_utils/iam.sdb.SdbOperations.property.Select">Select</a></code> | <code>string[]</code> | IAM actions required for the Select API call. |
| <code><a href="#@cdk_utils/iam.sdb.SdbOperations.property.StartDomainExport">StartDomainExport</a></code> | <code>string[]</code> | IAM actions required for the StartDomainExport API call. |

---

##### `BatchDeleteAttributes`<sup>Required</sup> <a name="BatchDeleteAttributes" id="@cdk_utils/iam.sdb.SdbOperations.property.BatchDeleteAttributes"></a>

```typescript
public readonly BatchDeleteAttributes: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteAttributes API call.

---

##### `BatchPutAttributes`<sup>Required</sup> <a name="BatchPutAttributes" id="@cdk_utils/iam.sdb.SdbOperations.property.BatchPutAttributes"></a>

```typescript
public readonly BatchPutAttributes: string[];
```

- *Type:* string[]

IAM actions required for the BatchPutAttributes API call.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.sdb.SdbOperations.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string[];
```

- *Type:* string[]

IAM actions required for the CreateDomain API call.

---

##### `DeleteAttributes`<sup>Required</sup> <a name="DeleteAttributes" id="@cdk_utils/iam.sdb.SdbOperations.property.DeleteAttributes"></a>

```typescript
public readonly DeleteAttributes: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAttributes API call.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.sdb.SdbOperations.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomain API call.

---

##### `DomainMetadata`<sup>Required</sup> <a name="DomainMetadata" id="@cdk_utils/iam.sdb.SdbOperations.property.DomainMetadata"></a>

```typescript
public readonly DomainMetadata: string[];
```

- *Type:* string[]

IAM actions required for the DomainMetadata API call.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.sdb.SdbOperations.property.ListDomains"></a>

```typescript
public readonly ListDomains: string[];
```

- *Type:* string[]

IAM actions required for the ListDomains API call.

---

##### `ListExports`<sup>Required</sup> <a name="ListExports" id="@cdk_utils/iam.sdb.SdbOperations.property.ListExports"></a>

```typescript
public readonly ListExports: string[];
```

- *Type:* string[]

IAM actions required for the ListExports API call.

---

##### `opGetAttributes`<sup>Required</sup> <a name="opGetAttributes" id="@cdk_utils/iam.sdb.SdbOperations.property.opGetAttributes"></a>

```typescript
public readonly opGetAttributes: string[];
```

- *Type:* string[]

IAM actions required for the GetAttributes API call.

---

##### `opGetExport`<sup>Required</sup> <a name="opGetExport" id="@cdk_utils/iam.sdb.SdbOperations.property.opGetExport"></a>

```typescript
public readonly opGetExport: string[];
```

- *Type:* string[]

IAM actions required for the GetExport API call.

---

##### `PutAttributes`<sup>Required</sup> <a name="PutAttributes" id="@cdk_utils/iam.sdb.SdbOperations.property.PutAttributes"></a>

```typescript
public readonly PutAttributes: string[];
```

- *Type:* string[]

IAM actions required for the PutAttributes API call.

---

##### `Select`<sup>Required</sup> <a name="Select" id="@cdk_utils/iam.sdb.SdbOperations.property.Select"></a>

```typescript
public readonly Select: string[];
```

- *Type:* string[]

IAM actions required for the Select API call.

---

##### `StartDomainExport`<sup>Required</sup> <a name="StartDomainExport" id="@cdk_utils/iam.sdb.SdbOperations.property.StartDomainExport"></a>

```typescript
public readonly StartDomainExport: string[];
```

- *Type:* string[]

IAM actions required for the StartDomainExport API call.

---

### SdbResources <a name="SdbResources" id="@cdk_utils/iam.sdb.SdbResources"></a>

ARN builders, validators, and parsers for sdb resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sdb.SdbResources.Initializer"></a>

```typescript
import { sdb } from '@cdk_utils/iam'

new sdb.SdbResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.sdb.SdbResources.domain">domain</a></code> | Builds an ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.sdb.SdbResources.export">export</a></code> | Builds an ARN for the export resource. |
| <code><a href="#@cdk_utils/iam.sdb.SdbResources.isValidDomainArn">isValidDomainArn</a></code> | Validates whether a string is a valid ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.sdb.SdbResources.isValidExportArn">isValidExportArn</a></code> | Validates whether a string is a valid ARN for the export resource. |
| <code><a href="#@cdk_utils/iam.sdb.SdbResources.parseDomainArn">parseDomainArn</a></code> | Parses a domain ARN into its components. |
| <code><a href="#@cdk_utils/iam.sdb.SdbResources.parseExportArn">parseExportArn</a></code> | Parses a export ARN into its components. |

---

##### `domain` <a name="domain" id="@cdk_utils/iam.sdb.SdbResources.domain"></a>

```typescript
import { sdb } from '@cdk_utils/iam'

sdb.SdbResources.domain(props: SdbDomainArnProps)
```

Builds an ARN for the domain resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sdb.SdbResources.domain.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sdb.SdbDomainArnProps">SdbDomainArnProps</a>

---

##### `export` <a name="export" id="@cdk_utils/iam.sdb.SdbResources.export"></a>

```typescript
import { sdb } from '@cdk_utils/iam'

sdb.SdbResources.export(props: SdbExportArnProps)
```

Builds an ARN for the export resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sdb.SdbResources.export.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sdb.SdbExportArnProps">SdbExportArnProps</a>

---

##### `isValidDomainArn` <a name="isValidDomainArn" id="@cdk_utils/iam.sdb.SdbResources.isValidDomainArn"></a>

```typescript
import { sdb } from '@cdk_utils/iam'

sdb.SdbResources.isValidDomainArn(arn: string)
```

Validates whether a string is a valid ARN for the domain resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sdb.SdbResources.isValidDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExportArn` <a name="isValidExportArn" id="@cdk_utils/iam.sdb.SdbResources.isValidExportArn"></a>

```typescript
import { sdb } from '@cdk_utils/iam'

sdb.SdbResources.isValidExportArn(arn: string)
```

Validates whether a string is a valid ARN for the export resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sdb.SdbResources.isValidExportArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainArn` <a name="parseDomainArn" id="@cdk_utils/iam.sdb.SdbResources.parseDomainArn"></a>

```typescript
import { sdb } from '@cdk_utils/iam'

sdb.SdbResources.parseDomainArn(arn: string)
```

Parses a domain ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sdb.SdbResources.parseDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExportArn` <a name="parseExportArn" id="@cdk_utils/iam.sdb.SdbResources.parseExportArn"></a>

```typescript
import { sdb } from '@cdk_utils/iam'

sdb.SdbResources.parseExportArn(arn: string)
```

Parses a export ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sdb.SdbResources.parseExportArn.parameter.arn"></a>

- *Type:* string

---




