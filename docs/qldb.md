# `qldb` Submodule <a name="`qldb` Submodule" id="@cdk_utils/iam.qldb"></a>


## Structs <a name="Structs" id="Structs"></a>

### QldbCatalogArnComponents <a name="QldbCatalogArnComponents" id="@cdk_utils/iam.qldb.QldbCatalogArnComponents"></a>

Parsed components of a catalog ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qldb.QldbCatalogArnComponents.Initializer"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

const qldbCatalogArnComponents: qldb.QldbCatalogArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qldb.QldbCatalogArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qldb.QldbCatalogArnComponents.property.ledgerName">ledgerName</a></code> | <code>string</code> | The LedgerName component. |
| <code><a href="#@cdk_utils/iam.qldb.QldbCatalogArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qldb.QldbCatalogArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.qldb.QldbCatalogArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `ledgerName`<sup>Required</sup> <a name="ledgerName" id="@cdk_utils/iam.qldb.QldbCatalogArnComponents.property.ledgerName"></a>

```typescript
public readonly ledgerName: string;
```

- *Type:* string

The LedgerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.qldb.QldbCatalogArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.qldb.QldbCatalogArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### QldbCatalogArnProps <a name="QldbCatalogArnProps" id="@cdk_utils/iam.qldb.QldbCatalogArnProps"></a>

Properties for building a catalog ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qldb.QldbCatalogArnProps.Initializer"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

const qldbCatalogArnProps: qldb.QldbCatalogArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qldb.QldbCatalogArnProps.property.ledgerName">ledgerName</a></code> | <code>string</code> | The LedgerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.qldb.QldbCatalogArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qldb.QldbCatalogArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qldb.QldbCatalogArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `ledgerName`<sup>Required</sup> <a name="ledgerName" id="@cdk_utils/iam.qldb.QldbCatalogArnProps.property.ledgerName"></a>

```typescript
public readonly ledgerName: string;
```

- *Type:* string

The LedgerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.qldb.QldbCatalogArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.qldb.QldbCatalogArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.qldb.QldbCatalogArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QldbLedgerArnComponents <a name="QldbLedgerArnComponents" id="@cdk_utils/iam.qldb.QldbLedgerArnComponents"></a>

Parsed components of a ledger ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qldb.QldbLedgerArnComponents.Initializer"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

const qldbLedgerArnComponents: qldb.QldbLedgerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qldb.QldbLedgerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qldb.QldbLedgerArnComponents.property.ledgerName">ledgerName</a></code> | <code>string</code> | The LedgerName component. |
| <code><a href="#@cdk_utils/iam.qldb.QldbLedgerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qldb.QldbLedgerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.qldb.QldbLedgerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `ledgerName`<sup>Required</sup> <a name="ledgerName" id="@cdk_utils/iam.qldb.QldbLedgerArnComponents.property.ledgerName"></a>

```typescript
public readonly ledgerName: string;
```

- *Type:* string

The LedgerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.qldb.QldbLedgerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.qldb.QldbLedgerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### QldbLedgerArnProps <a name="QldbLedgerArnProps" id="@cdk_utils/iam.qldb.QldbLedgerArnProps"></a>

Properties for building a ledger ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qldb.QldbLedgerArnProps.Initializer"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

const qldbLedgerArnProps: qldb.QldbLedgerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qldb.QldbLedgerArnProps.property.ledgerName">ledgerName</a></code> | <code>string</code> | The LedgerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.qldb.QldbLedgerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qldb.QldbLedgerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qldb.QldbLedgerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `ledgerName`<sup>Required</sup> <a name="ledgerName" id="@cdk_utils/iam.qldb.QldbLedgerArnProps.property.ledgerName"></a>

```typescript
public readonly ledgerName: string;
```

- *Type:* string

The LedgerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.qldb.QldbLedgerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.qldb.QldbLedgerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.qldb.QldbLedgerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QldbStreamArnComponents <a name="QldbStreamArnComponents" id="@cdk_utils/iam.qldb.QldbStreamArnComponents"></a>

Parsed components of a stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qldb.QldbStreamArnComponents.Initializer"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

const qldbStreamArnComponents: qldb.QldbStreamArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qldb.QldbStreamArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qldb.QldbStreamArnComponents.property.ledgerName">ledgerName</a></code> | <code>string</code> | The LedgerName component. |
| <code><a href="#@cdk_utils/iam.qldb.QldbStreamArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qldb.QldbStreamArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.qldb.QldbStreamArnComponents.property.streamId">streamId</a></code> | <code>string</code> | The StreamId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.qldb.QldbStreamArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `ledgerName`<sup>Required</sup> <a name="ledgerName" id="@cdk_utils/iam.qldb.QldbStreamArnComponents.property.ledgerName"></a>

```typescript
public readonly ledgerName: string;
```

- *Type:* string

The LedgerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.qldb.QldbStreamArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.qldb.QldbStreamArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdk_utils/iam.qldb.QldbStreamArnComponents.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

The StreamId component.

---

### QldbStreamArnProps <a name="QldbStreamArnProps" id="@cdk_utils/iam.qldb.QldbStreamArnProps"></a>

Properties for building a stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qldb.QldbStreamArnProps.Initializer"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

const qldbStreamArnProps: qldb.QldbStreamArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qldb.QldbStreamArnProps.property.ledgerName">ledgerName</a></code> | <code>string</code> | The LedgerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.qldb.QldbStreamArnProps.property.streamId">streamId</a></code> | <code>string</code> | The StreamId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qldb.QldbStreamArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qldb.QldbStreamArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qldb.QldbStreamArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `ledgerName`<sup>Required</sup> <a name="ledgerName" id="@cdk_utils/iam.qldb.QldbStreamArnProps.property.ledgerName"></a>

```typescript
public readonly ledgerName: string;
```

- *Type:* string

The LedgerName component of the ARN.

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdk_utils/iam.qldb.QldbStreamArnProps.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

The StreamId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.qldb.QldbStreamArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.qldb.QldbStreamArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.qldb.QldbStreamArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QldbTableArnComponents <a name="QldbTableArnComponents" id="@cdk_utils/iam.qldb.QldbTableArnComponents"></a>

Parsed components of a table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qldb.QldbTableArnComponents.Initializer"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

const qldbTableArnComponents: qldb.QldbTableArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qldb.QldbTableArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qldb.QldbTableArnComponents.property.ledgerName">ledgerName</a></code> | <code>string</code> | The LedgerName component. |
| <code><a href="#@cdk_utils/iam.qldb.QldbTableArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qldb.QldbTableArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.qldb.QldbTableArnComponents.property.tableId">tableId</a></code> | <code>string</code> | The TableId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.qldb.QldbTableArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `ledgerName`<sup>Required</sup> <a name="ledgerName" id="@cdk_utils/iam.qldb.QldbTableArnComponents.property.ledgerName"></a>

```typescript
public readonly ledgerName: string;
```

- *Type:* string

The LedgerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.qldb.QldbTableArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.qldb.QldbTableArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdk_utils/iam.qldb.QldbTableArnComponents.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The TableId component.

---

### QldbTableArnProps <a name="QldbTableArnProps" id="@cdk_utils/iam.qldb.QldbTableArnProps"></a>

Properties for building a table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qldb.QldbTableArnProps.Initializer"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

const qldbTableArnProps: qldb.QldbTableArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qldb.QldbTableArnProps.property.ledgerName">ledgerName</a></code> | <code>string</code> | The LedgerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.qldb.QldbTableArnProps.property.tableId">tableId</a></code> | <code>string</code> | The TableId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qldb.QldbTableArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qldb.QldbTableArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qldb.QldbTableArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `ledgerName`<sup>Required</sup> <a name="ledgerName" id="@cdk_utils/iam.qldb.QldbTableArnProps.property.ledgerName"></a>

```typescript
public readonly ledgerName: string;
```

- *Type:* string

The LedgerName component of the ARN.

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdk_utils/iam.qldb.QldbTableArnProps.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The TableId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.qldb.QldbTableArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.qldb.QldbTableArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.qldb.QldbTableArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### QldbActions <a name="QldbActions" id="@cdk_utils/iam.qldb.QldbActions"></a>

IAM action constants for the qldb service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.qldb.QldbActions.Initializer"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

new qldb.QldbActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.actionGetBlock">actionGetBlock</a></code> | <code>string</code> | [Read] qldb:GetBlock. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.actionGetDigest">actionGetDigest</a></code> | <code>string</code> | [Read] qldb:GetDigest. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.actionGetRevision">actionGetRevision</a></code> | <code>string</code> | [Read] qldb:GetRevision. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.CancelJournalKinesisStream">CancelJournalKinesisStream</a></code> | <code>string</code> | [Write] qldb:CancelJournalKinesisStream. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.CreateLedger">CreateLedger</a></code> | <code>string</code> | [Write] qldb:CreateLedger. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.DeleteLedger">DeleteLedger</a></code> | <code>string</code> | [Write] qldb:DeleteLedger. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.DescribeJournalKinesisStream">DescribeJournalKinesisStream</a></code> | <code>string</code> | [Read] qldb:DescribeJournalKinesisStream. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.DescribeJournalS3Export">DescribeJournalS3Export</a></code> | <code>string</code> | [Read] qldb:DescribeJournalS3Export. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.DescribeLedger">DescribeLedger</a></code> | <code>string</code> | [Read] qldb:DescribeLedger. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.ExecuteStatement">ExecuteStatement</a></code> | <code>string</code> | [Write] qldb:ExecuteStatement. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.ExportJournalToS3">ExportJournalToS3</a></code> | <code>string</code> | [Write] qldb:ExportJournalToS3. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.InsertSampleData">InsertSampleData</a></code> | <code>string</code> | [Write] qldb:InsertSampleData. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.ListJournalKinesisStreamsForLedger">ListJournalKinesisStreamsForLedger</a></code> | <code>string</code> | [List] qldb:ListJournalKinesisStreamsForLedger. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.ListJournalS3Exports">ListJournalS3Exports</a></code> | <code>string</code> | [List] qldb:ListJournalS3Exports. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.ListJournalS3ExportsForLedger">ListJournalS3ExportsForLedger</a></code> | <code>string</code> | [List] qldb:ListJournalS3ExportsForLedger. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.ListLedgers">ListLedgers</a></code> | <code>string</code> | [List] qldb:ListLedgers. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] qldb:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.PartiQLCreateIndex">PartiQLCreateIndex</a></code> | <code>string</code> | [Write] qldb:PartiQLCreateIndex. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.PartiQLCreateTable">PartiQLCreateTable</a></code> | <code>string</code> | [Write] qldb:PartiQLCreateTable. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.PartiQLDelete">PartiQLDelete</a></code> | <code>string</code> | [Write] qldb:PartiQLDelete. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.PartiQLDropIndex">PartiQLDropIndex</a></code> | <code>string</code> | [Write] qldb:PartiQLDropIndex. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.PartiQLDropTable">PartiQLDropTable</a></code> | <code>string</code> | [Write] qldb:PartiQLDropTable. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.PartiQLHistoryFunction">PartiQLHistoryFunction</a></code> | <code>string</code> | [Read] qldb:PartiQLHistoryFunction. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.PartiQLInsert">PartiQLInsert</a></code> | <code>string</code> | [Write] qldb:PartiQLInsert. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.PartiQLRedact">PartiQLRedact</a></code> | <code>string</code> | [Write] qldb:PartiQLRedact. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.PartiQLSelect">PartiQLSelect</a></code> | <code>string</code> | [Read] qldb:PartiQLSelect. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.PartiQLUndropTable">PartiQLUndropTable</a></code> | <code>string</code> | [Write] qldb:PartiQLUndropTable. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.PartiQLUpdate">PartiQLUpdate</a></code> | <code>string</code> | [Write] qldb:PartiQLUpdate. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.SendCommand">SendCommand</a></code> | <code>string</code> | [Write] qldb:SendCommand. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.ShowCatalog">ShowCatalog</a></code> | <code>string</code> | [Write] qldb:ShowCatalog. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.StreamJournalToKinesis">StreamJournalToKinesis</a></code> | <code>string</code> | [Write] qldb:StreamJournalToKinesis. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] qldb:TagResource. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] qldb:UntagResource. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.UpdateLedger">UpdateLedger</a></code> | <code>string</code> | [Write] qldb:UpdateLedger. |
| <code><a href="#@cdk_utils/iam.qldb.QldbActions.property.UpdateLedgerPermissionsMode">UpdateLedgerPermissionsMode</a></code> | <code>string</code> | [Write] qldb:UpdateLedgerPermissionsMode. |

---

##### `actionGetBlock`<sup>Required</sup> <a name="actionGetBlock" id="@cdk_utils/iam.qldb.QldbActions.property.actionGetBlock"></a>

```typescript
public readonly actionGetBlock: string;
```

- *Type:* string

[Read] qldb:GetBlock.

---

##### `actionGetDigest`<sup>Required</sup> <a name="actionGetDigest" id="@cdk_utils/iam.qldb.QldbActions.property.actionGetDigest"></a>

```typescript
public readonly actionGetDigest: string;
```

- *Type:* string

[Read] qldb:GetDigest.

---

##### `actionGetRevision`<sup>Required</sup> <a name="actionGetRevision" id="@cdk_utils/iam.qldb.QldbActions.property.actionGetRevision"></a>

```typescript
public readonly actionGetRevision: string;
```

- *Type:* string

[Read] qldb:GetRevision.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.qldb.QldbActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.qldb.QldbActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.qldb.QldbActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.qldb.QldbActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.qldb.QldbActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelJournalKinesisStream`<sup>Required</sup> <a name="CancelJournalKinesisStream" id="@cdk_utils/iam.qldb.QldbActions.property.CancelJournalKinesisStream"></a>

```typescript
public readonly CancelJournalKinesisStream: string;
```

- *Type:* string

[Write] qldb:CancelJournalKinesisStream.

---

##### `CreateLedger`<sup>Required</sup> <a name="CreateLedger" id="@cdk_utils/iam.qldb.QldbActions.property.CreateLedger"></a>

```typescript
public readonly CreateLedger: string;
```

- *Type:* string

[Write] qldb:CreateLedger.

---

##### `DeleteLedger`<sup>Required</sup> <a name="DeleteLedger" id="@cdk_utils/iam.qldb.QldbActions.property.DeleteLedger"></a>

```typescript
public readonly DeleteLedger: string;
```

- *Type:* string

[Write] qldb:DeleteLedger.

---

##### `DescribeJournalKinesisStream`<sup>Required</sup> <a name="DescribeJournalKinesisStream" id="@cdk_utils/iam.qldb.QldbActions.property.DescribeJournalKinesisStream"></a>

```typescript
public readonly DescribeJournalKinesisStream: string;
```

- *Type:* string

[Read] qldb:DescribeJournalKinesisStream.

---

##### `DescribeJournalS3Export`<sup>Required</sup> <a name="DescribeJournalS3Export" id="@cdk_utils/iam.qldb.QldbActions.property.DescribeJournalS3Export"></a>

```typescript
public readonly DescribeJournalS3Export: string;
```

- *Type:* string

[Read] qldb:DescribeJournalS3Export.

---

##### `DescribeLedger`<sup>Required</sup> <a name="DescribeLedger" id="@cdk_utils/iam.qldb.QldbActions.property.DescribeLedger"></a>

```typescript
public readonly DescribeLedger: string;
```

- *Type:* string

[Read] qldb:DescribeLedger.

---

##### `ExecuteStatement`<sup>Required</sup> <a name="ExecuteStatement" id="@cdk_utils/iam.qldb.QldbActions.property.ExecuteStatement"></a>

```typescript
public readonly ExecuteStatement: string;
```

- *Type:* string

[Write] qldb:ExecuteStatement.

---

##### `ExportJournalToS3`<sup>Required</sup> <a name="ExportJournalToS3" id="@cdk_utils/iam.qldb.QldbActions.property.ExportJournalToS3"></a>

```typescript
public readonly ExportJournalToS3: string;
```

- *Type:* string

[Write] qldb:ExportJournalToS3.

---

##### `InsertSampleData`<sup>Required</sup> <a name="InsertSampleData" id="@cdk_utils/iam.qldb.QldbActions.property.InsertSampleData"></a>

```typescript
public readonly InsertSampleData: string;
```

- *Type:* string

[Write] qldb:InsertSampleData.

---

##### `ListJournalKinesisStreamsForLedger`<sup>Required</sup> <a name="ListJournalKinesisStreamsForLedger" id="@cdk_utils/iam.qldb.QldbActions.property.ListJournalKinesisStreamsForLedger"></a>

```typescript
public readonly ListJournalKinesisStreamsForLedger: string;
```

- *Type:* string

[List] qldb:ListJournalKinesisStreamsForLedger.

---

##### `ListJournalS3Exports`<sup>Required</sup> <a name="ListJournalS3Exports" id="@cdk_utils/iam.qldb.QldbActions.property.ListJournalS3Exports"></a>

```typescript
public readonly ListJournalS3Exports: string;
```

- *Type:* string

[List] qldb:ListJournalS3Exports.

---

##### `ListJournalS3ExportsForLedger`<sup>Required</sup> <a name="ListJournalS3ExportsForLedger" id="@cdk_utils/iam.qldb.QldbActions.property.ListJournalS3ExportsForLedger"></a>

```typescript
public readonly ListJournalS3ExportsForLedger: string;
```

- *Type:* string

[List] qldb:ListJournalS3ExportsForLedger.

---

##### `ListLedgers`<sup>Required</sup> <a name="ListLedgers" id="@cdk_utils/iam.qldb.QldbActions.property.ListLedgers"></a>

```typescript
public readonly ListLedgers: string;
```

- *Type:* string

[List] qldb:ListLedgers.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.qldb.QldbActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] qldb:ListTagsForResource.

---

##### `PartiQLCreateIndex`<sup>Required</sup> <a name="PartiQLCreateIndex" id="@cdk_utils/iam.qldb.QldbActions.property.PartiQLCreateIndex"></a>

```typescript
public readonly PartiQLCreateIndex: string;
```

- *Type:* string

[Write] qldb:PartiQLCreateIndex.

---

##### `PartiQLCreateTable`<sup>Required</sup> <a name="PartiQLCreateTable" id="@cdk_utils/iam.qldb.QldbActions.property.PartiQLCreateTable"></a>

```typescript
public readonly PartiQLCreateTable: string;
```

- *Type:* string

[Write] qldb:PartiQLCreateTable.

---

##### `PartiQLDelete`<sup>Required</sup> <a name="PartiQLDelete" id="@cdk_utils/iam.qldb.QldbActions.property.PartiQLDelete"></a>

```typescript
public readonly PartiQLDelete: string;
```

- *Type:* string

[Write] qldb:PartiQLDelete.

---

##### `PartiQLDropIndex`<sup>Required</sup> <a name="PartiQLDropIndex" id="@cdk_utils/iam.qldb.QldbActions.property.PartiQLDropIndex"></a>

```typescript
public readonly PartiQLDropIndex: string;
```

- *Type:* string

[Write] qldb:PartiQLDropIndex.

---

##### `PartiQLDropTable`<sup>Required</sup> <a name="PartiQLDropTable" id="@cdk_utils/iam.qldb.QldbActions.property.PartiQLDropTable"></a>

```typescript
public readonly PartiQLDropTable: string;
```

- *Type:* string

[Write] qldb:PartiQLDropTable.

---

##### `PartiQLHistoryFunction`<sup>Required</sup> <a name="PartiQLHistoryFunction" id="@cdk_utils/iam.qldb.QldbActions.property.PartiQLHistoryFunction"></a>

```typescript
public readonly PartiQLHistoryFunction: string;
```

- *Type:* string

[Read] qldb:PartiQLHistoryFunction.

---

##### `PartiQLInsert`<sup>Required</sup> <a name="PartiQLInsert" id="@cdk_utils/iam.qldb.QldbActions.property.PartiQLInsert"></a>

```typescript
public readonly PartiQLInsert: string;
```

- *Type:* string

[Write] qldb:PartiQLInsert.

---

##### `PartiQLRedact`<sup>Required</sup> <a name="PartiQLRedact" id="@cdk_utils/iam.qldb.QldbActions.property.PartiQLRedact"></a>

```typescript
public readonly PartiQLRedact: string;
```

- *Type:* string

[Write] qldb:PartiQLRedact.

---

##### `PartiQLSelect`<sup>Required</sup> <a name="PartiQLSelect" id="@cdk_utils/iam.qldb.QldbActions.property.PartiQLSelect"></a>

```typescript
public readonly PartiQLSelect: string;
```

- *Type:* string

[Read] qldb:PartiQLSelect.

---

##### `PartiQLUndropTable`<sup>Required</sup> <a name="PartiQLUndropTable" id="@cdk_utils/iam.qldb.QldbActions.property.PartiQLUndropTable"></a>

```typescript
public readonly PartiQLUndropTable: string;
```

- *Type:* string

[Write] qldb:PartiQLUndropTable.

---

##### `PartiQLUpdate`<sup>Required</sup> <a name="PartiQLUpdate" id="@cdk_utils/iam.qldb.QldbActions.property.PartiQLUpdate"></a>

```typescript
public readonly PartiQLUpdate: string;
```

- *Type:* string

[Write] qldb:PartiQLUpdate.

---

##### `SendCommand`<sup>Required</sup> <a name="SendCommand" id="@cdk_utils/iam.qldb.QldbActions.property.SendCommand"></a>

```typescript
public readonly SendCommand: string;
```

- *Type:* string

[Write] qldb:SendCommand.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.qldb.QldbActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `ShowCatalog`<sup>Required</sup> <a name="ShowCatalog" id="@cdk_utils/iam.qldb.QldbActions.property.ShowCatalog"></a>

```typescript
public readonly ShowCatalog: string;
```

- *Type:* string

[Write] qldb:ShowCatalog.

---

##### `StreamJournalToKinesis`<sup>Required</sup> <a name="StreamJournalToKinesis" id="@cdk_utils/iam.qldb.QldbActions.property.StreamJournalToKinesis"></a>

```typescript
public readonly StreamJournalToKinesis: string;
```

- *Type:* string

[Write] qldb:StreamJournalToKinesis.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.qldb.QldbActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] qldb:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.qldb.QldbActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] qldb:UntagResource.

---

##### `UpdateLedger`<sup>Required</sup> <a name="UpdateLedger" id="@cdk_utils/iam.qldb.QldbActions.property.UpdateLedger"></a>

```typescript
public readonly UpdateLedger: string;
```

- *Type:* string

[Write] qldb:UpdateLedger.

---

##### `UpdateLedgerPermissionsMode`<sup>Required</sup> <a name="UpdateLedgerPermissionsMode" id="@cdk_utils/iam.qldb.QldbActions.property.UpdateLedgerPermissionsMode"></a>

```typescript
public readonly UpdateLedgerPermissionsMode: string;
```

- *Type:* string

[Write] qldb:UpdateLedgerPermissionsMode.

---

### QldbConditions <a name="QldbConditions" id="@cdk_utils/iam.qldb.QldbConditions"></a>

Condition key constants and builders for qldb.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.qldb.QldbConditions.Initializer"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

new qldb.QldbConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.qldb.QldbConditions.purge">purge</a></code> | Generates a condition block for `qldb:Purge`. |
| <code><a href="#@cdk_utils/iam.qldb.QldbConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.qldb.QldbConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.qldb.QldbConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `purge` <a name="purge" id="@cdk_utils/iam.qldb.QldbConditions.purge"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

qldb.QldbConditions.purge(value: string)
```

Generates a condition block for `qldb:Purge`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.qldb.QldbConditions.purge.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.qldb.QldbConditions.requestTag"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

qldb.QldbConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.qldb.QldbConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.qldb.QldbConditions.resourceTag"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

qldb.QldbConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.qldb.QldbConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.qldb.QldbConditions.tagKeys"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

qldb.QldbConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.qldb.QldbConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qldb.QldbConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.qldb.QldbConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.qldb.QldbConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.qldb.QldbConditions.property.CreateLedgerConditionKeys">CreateLedgerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLedger action. |
| <code><a href="#@cdk_utils/iam.qldb.QldbConditions.property.PartiQLCreateTableConditionKeys">PartiQLCreateTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PartiQLCreateTable action. |
| <code><a href="#@cdk_utils/iam.qldb.QldbConditions.property.PartiQLDropIndexConditionKeys">PartiQLDropIndexConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PartiQLDropIndex action. |
| <code><a href="#@cdk_utils/iam.qldb.QldbConditions.property.PartiQLDropTableConditionKeys">PartiQLDropTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PartiQLDropTable action. |
| <code><a href="#@cdk_utils/iam.qldb.QldbConditions.property.PURGE">PURGE</a></code> | <code>string</code> | Condition key: qldb:Purge (String). |
| <code><a href="#@cdk_utils/iam.qldb.QldbConditions.property.StreamJournalToKinesisConditionKeys">StreamJournalToKinesisConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StreamJournalToKinesis action. |
| <code><a href="#@cdk_utils/iam.qldb.QldbConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.qldb.QldbConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.qldb.QldbConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.qldb.QldbConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.qldb.QldbConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateLedgerConditionKeys`<sup>Required</sup> <a name="CreateLedgerConditionKeys" id="@cdk_utils/iam.qldb.QldbConditions.property.CreateLedgerConditionKeys"></a>

```typescript
public readonly CreateLedgerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLedger action.

---

##### `PartiQLCreateTableConditionKeys`<sup>Required</sup> <a name="PartiQLCreateTableConditionKeys" id="@cdk_utils/iam.qldb.QldbConditions.property.PartiQLCreateTableConditionKeys"></a>

```typescript
public readonly PartiQLCreateTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PartiQLCreateTable action.

---

##### `PartiQLDropIndexConditionKeys`<sup>Required</sup> <a name="PartiQLDropIndexConditionKeys" id="@cdk_utils/iam.qldb.QldbConditions.property.PartiQLDropIndexConditionKeys"></a>

```typescript
public readonly PartiQLDropIndexConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PartiQLDropIndex action.

---

##### `PartiQLDropTableConditionKeys`<sup>Required</sup> <a name="PartiQLDropTableConditionKeys" id="@cdk_utils/iam.qldb.QldbConditions.property.PartiQLDropTableConditionKeys"></a>

```typescript
public readonly PartiQLDropTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PartiQLDropTable action.

---

##### `PURGE`<sup>Required</sup> <a name="PURGE" id="@cdk_utils/iam.qldb.QldbConditions.property.PURGE"></a>

```typescript
public readonly PURGE: string;
```

- *Type:* string

Condition key: qldb:Purge (String).

---

##### `StreamJournalToKinesisConditionKeys`<sup>Required</sup> <a name="StreamJournalToKinesisConditionKeys" id="@cdk_utils/iam.qldb.QldbConditions.property.StreamJournalToKinesisConditionKeys"></a>

```typescript
public readonly StreamJournalToKinesisConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StreamJournalToKinesis action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.qldb.QldbConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.qldb.QldbConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### QldbResources <a name="QldbResources" id="@cdk_utils/iam.qldb.QldbResources"></a>

ARN builders, validators, and parsers for qldb resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.qldb.QldbResources.Initializer"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

new qldb.QldbResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.qldb.QldbResources.catalog">catalog</a></code> | Builds an ARN for the catalog resource. |
| <code><a href="#@cdk_utils/iam.qldb.QldbResources.isValidCatalogArn">isValidCatalogArn</a></code> | Validates whether a string is a valid ARN for the catalog resource. |
| <code><a href="#@cdk_utils/iam.qldb.QldbResources.isValidLedgerArn">isValidLedgerArn</a></code> | Validates whether a string is a valid ARN for the ledger resource. |
| <code><a href="#@cdk_utils/iam.qldb.QldbResources.isValidStreamArn">isValidStreamArn</a></code> | Validates whether a string is a valid ARN for the stream resource. |
| <code><a href="#@cdk_utils/iam.qldb.QldbResources.isValidTableArn">isValidTableArn</a></code> | Validates whether a string is a valid ARN for the table resource. |
| <code><a href="#@cdk_utils/iam.qldb.QldbResources.ledger">ledger</a></code> | Builds an ARN for the ledger resource. |
| <code><a href="#@cdk_utils/iam.qldb.QldbResources.parseCatalogArn">parseCatalogArn</a></code> | Parses a catalog ARN into its components. |
| <code><a href="#@cdk_utils/iam.qldb.QldbResources.parseLedgerArn">parseLedgerArn</a></code> | Parses a ledger ARN into its components. |
| <code><a href="#@cdk_utils/iam.qldb.QldbResources.parseStreamArn">parseStreamArn</a></code> | Parses a stream ARN into its components. |
| <code><a href="#@cdk_utils/iam.qldb.QldbResources.parseTableArn">parseTableArn</a></code> | Parses a table ARN into its components. |
| <code><a href="#@cdk_utils/iam.qldb.QldbResources.stream">stream</a></code> | Builds an ARN for the stream resource. |
| <code><a href="#@cdk_utils/iam.qldb.QldbResources.table">table</a></code> | Builds an ARN for the table resource. |

---

##### `catalog` <a name="catalog" id="@cdk_utils/iam.qldb.QldbResources.catalog"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

qldb.QldbResources.catalog(props: QldbCatalogArnProps)
```

Builds an ARN for the catalog resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.qldb.QldbResources.catalog.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.qldb.QldbCatalogArnProps">QldbCatalogArnProps</a>

---

##### `isValidCatalogArn` <a name="isValidCatalogArn" id="@cdk_utils/iam.qldb.QldbResources.isValidCatalogArn"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

qldb.QldbResources.isValidCatalogArn(arn: string)
```

Validates whether a string is a valid ARN for the catalog resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qldb.QldbResources.isValidCatalogArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLedgerArn` <a name="isValidLedgerArn" id="@cdk_utils/iam.qldb.QldbResources.isValidLedgerArn"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

qldb.QldbResources.isValidLedgerArn(arn: string)
```

Validates whether a string is a valid ARN for the ledger resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qldb.QldbResources.isValidLedgerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStreamArn` <a name="isValidStreamArn" id="@cdk_utils/iam.qldb.QldbResources.isValidStreamArn"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

qldb.QldbResources.isValidStreamArn(arn: string)
```

Validates whether a string is a valid ARN for the stream resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qldb.QldbResources.isValidStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTableArn` <a name="isValidTableArn" id="@cdk_utils/iam.qldb.QldbResources.isValidTableArn"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

qldb.QldbResources.isValidTableArn(arn: string)
```

Validates whether a string is a valid ARN for the table resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qldb.QldbResources.isValidTableArn.parameter.arn"></a>

- *Type:* string

---

##### `ledger` <a name="ledger" id="@cdk_utils/iam.qldb.QldbResources.ledger"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

qldb.QldbResources.ledger(props: QldbLedgerArnProps)
```

Builds an ARN for the ledger resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.qldb.QldbResources.ledger.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.qldb.QldbLedgerArnProps">QldbLedgerArnProps</a>

---

##### `parseCatalogArn` <a name="parseCatalogArn" id="@cdk_utils/iam.qldb.QldbResources.parseCatalogArn"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

qldb.QldbResources.parseCatalogArn(arn: string)
```

Parses a catalog ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qldb.QldbResources.parseCatalogArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLedgerArn` <a name="parseLedgerArn" id="@cdk_utils/iam.qldb.QldbResources.parseLedgerArn"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

qldb.QldbResources.parseLedgerArn(arn: string)
```

Parses a ledger ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qldb.QldbResources.parseLedgerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStreamArn` <a name="parseStreamArn" id="@cdk_utils/iam.qldb.QldbResources.parseStreamArn"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

qldb.QldbResources.parseStreamArn(arn: string)
```

Parses a stream ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qldb.QldbResources.parseStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTableArn` <a name="parseTableArn" id="@cdk_utils/iam.qldb.QldbResources.parseTableArn"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

qldb.QldbResources.parseTableArn(arn: string)
```

Parses a table ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qldb.QldbResources.parseTableArn.parameter.arn"></a>

- *Type:* string

---

##### `stream` <a name="stream" id="@cdk_utils/iam.qldb.QldbResources.stream"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

qldb.QldbResources.stream(props: QldbStreamArnProps)
```

Builds an ARN for the stream resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.qldb.QldbResources.stream.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.qldb.QldbStreamArnProps">QldbStreamArnProps</a>

---

##### `table` <a name="table" id="@cdk_utils/iam.qldb.QldbResources.table"></a>

```typescript
import { qldb } from '@cdk_utils/iam'

qldb.QldbResources.table(props: QldbTableArnProps)
```

Builds an ARN for the table resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.qldb.QldbResources.table.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.qldb.QldbTableArnProps">QldbTableArnProps</a>

---




