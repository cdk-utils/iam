# `cognito_sync` Submodule <a name="`cognito_sync` Submodule" id="@cdk_utils/iam.cognito_sync"></a>


## Structs <a name="Structs" id="Structs"></a>

### CognitoSyncDatasetArnComponents <a name="CognitoSyncDatasetArnComponents" id="@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnComponents"></a>

Parsed components of a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnComponents.Initializer"></a>

```typescript
import { cognito_sync } from '@cdk_utils/iam'

const cognitoSyncDatasetArnComponents: cognito_sync.CognitoSyncDatasetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnComponents.property.datasetName">datasetName</a></code> | <code>string</code> | The DatasetName component. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnComponents.property.identityId">identityId</a></code> | <code>string</code> | The IdentityId component. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnComponents.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | The IdentityPoolId component. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnComponents.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

The DatasetName component.

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnComponents.property.identityId"></a>

```typescript
public readonly identityId: string;
```

- *Type:* string

The IdentityId component.

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnComponents.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

The IdentityPoolId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CognitoSyncDatasetArnProps <a name="CognitoSyncDatasetArnProps" id="@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnProps"></a>

Properties for building a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnProps.Initializer"></a>

```typescript
import { cognito_sync } from '@cdk_utils/iam'

const cognitoSyncDatasetArnProps: cognito_sync.CognitoSyncDatasetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnProps.property.datasetName">datasetName</a></code> | <code>string</code> | The DatasetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnProps.property.identityId">identityId</a></code> | <code>string</code> | The IdentityId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnProps.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | The IdentityPoolId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnProps.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

The DatasetName component of the ARN.

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnProps.property.identityId"></a>

```typescript
public readonly identityId: string;
```

- *Type:* string

The IdentityId component of the ARN.

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnProps.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

The IdentityPoolId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CognitoSyncIdentityArnComponents <a name="CognitoSyncIdentityArnComponents" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnComponents"></a>

Parsed components of a identity ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnComponents.Initializer"></a>

```typescript
import { cognito_sync } from '@cdk_utils/iam'

const cognitoSyncIdentityArnComponents: cognito_sync.CognitoSyncIdentityArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnComponents.property.identityId">identityId</a></code> | <code>string</code> | The IdentityId component. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnComponents.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | The IdentityPoolId component. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnComponents.property.identityId"></a>

```typescript
public readonly identityId: string;
```

- *Type:* string

The IdentityId component.

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnComponents.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

The IdentityPoolId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CognitoSyncIdentityArnProps <a name="CognitoSyncIdentityArnProps" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnProps"></a>

Properties for building a identity ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnProps.Initializer"></a>

```typescript
import { cognito_sync } from '@cdk_utils/iam'

const cognitoSyncIdentityArnProps: cognito_sync.CognitoSyncIdentityArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnProps.property.identityId">identityId</a></code> | <code>string</code> | The IdentityId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnProps.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | The IdentityPoolId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnProps.property.identityId"></a>

```typescript
public readonly identityId: string;
```

- *Type:* string

The IdentityId component of the ARN.

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnProps.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

The IdentityPoolId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CognitoSyncIdentitypoolArnComponents <a name="CognitoSyncIdentitypoolArnComponents" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnComponents"></a>

Parsed components of a identitypool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnComponents.Initializer"></a>

```typescript
import { cognito_sync } from '@cdk_utils/iam'

const cognitoSyncIdentitypoolArnComponents: cognito_sync.CognitoSyncIdentitypoolArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnComponents.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | The IdentityPoolId component. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnComponents.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

The IdentityPoolId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CognitoSyncIdentitypoolArnProps <a name="CognitoSyncIdentitypoolArnProps" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnProps"></a>

Properties for building a identitypool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnProps.Initializer"></a>

```typescript
import { cognito_sync } from '@cdk_utils/iam'

const cognitoSyncIdentitypoolArnProps: cognito_sync.CognitoSyncIdentitypoolArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnProps.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | The IdentityPoolId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnProps.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

The IdentityPoolId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoSyncActions <a name="CognitoSyncActions" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions"></a>

IAM action constants for the cognito-sync service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.Initializer"></a>

```typescript
import { cognito_sync } from '@cdk_utils/iam'

new cognito_sync.CognitoSyncActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.actionGetBulkPublishDetails">actionGetBulkPublishDetails</a></code> | <code>string</code> | [Read] cognito-sync:GetBulkPublishDetails. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.actionGetCognitoEvents">actionGetCognitoEvents</a></code> | <code>string</code> | [Read] cognito-sync:GetCognitoEvents. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.actionGetIdentityPoolConfiguration">actionGetIdentityPoolConfiguration</a></code> | <code>string</code> | [Read] cognito-sync:GetIdentityPoolConfiguration. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.actionSetCognitoEvents">actionSetCognitoEvents</a></code> | <code>string</code> | [Write] cognito-sync:SetCognitoEvents. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.actionSetDatasetConfiguration">actionSetDatasetConfiguration</a></code> | <code>string</code> | [Write] cognito-sync:SetDatasetConfiguration. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.actionSetIdentityPoolConfiguration">actionSetIdentityPoolConfiguration</a></code> | <code>string</code> | [Write] cognito-sync:SetIdentityPoolConfiguration. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.BulkPublish">BulkPublish</a></code> | <code>string</code> | [Write] cognito-sync:BulkPublish. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.DeleteDataset">DeleteDataset</a></code> | <code>string</code> | [Write] cognito-sync:DeleteDataset. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.DescribeDataset">DescribeDataset</a></code> | <code>string</code> | [Read] cognito-sync:DescribeDataset. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.DescribeIdentityPoolUsage">DescribeIdentityPoolUsage</a></code> | <code>string</code> | [Read] cognito-sync:DescribeIdentityPoolUsage. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.DescribeIdentityUsage">DescribeIdentityUsage</a></code> | <code>string</code> | [Read] cognito-sync:DescribeIdentityUsage. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.ListDatasets">ListDatasets</a></code> | <code>string</code> | [List] cognito-sync:ListDatasets. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.ListIdentityPoolUsage">ListIdentityPoolUsage</a></code> | <code>string</code> | [Read] cognito-sync:ListIdentityPoolUsage. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.ListRecords">ListRecords</a></code> | <code>string</code> | [Read] cognito-sync:ListRecords. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.QueryRecords">QueryRecords</a></code> | <code>string</code> | [Read] cognito-sync:QueryRecords. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.RegisterDevice">RegisterDevice</a></code> | <code>string</code> | [Write] cognito-sync:RegisterDevice. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.SubscribeToDataset">SubscribeToDataset</a></code> | <code>string</code> | [Write] cognito-sync:SubscribeToDataset. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.UnsubscribeFromDataset">UnsubscribeFromDataset</a></code> | <code>string</code> | [Write] cognito-sync:UnsubscribeFromDataset. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.UpdateRecords">UpdateRecords</a></code> | <code>string</code> | [Write] cognito-sync:UpdateRecords. |

---

##### `actionGetBulkPublishDetails`<sup>Required</sup> <a name="actionGetBulkPublishDetails" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.actionGetBulkPublishDetails"></a>

```typescript
public readonly actionGetBulkPublishDetails: string;
```

- *Type:* string

[Read] cognito-sync:GetBulkPublishDetails.

---

##### `actionGetCognitoEvents`<sup>Required</sup> <a name="actionGetCognitoEvents" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.actionGetCognitoEvents"></a>

```typescript
public readonly actionGetCognitoEvents: string;
```

- *Type:* string

[Read] cognito-sync:GetCognitoEvents.

---

##### `actionGetIdentityPoolConfiguration`<sup>Required</sup> <a name="actionGetIdentityPoolConfiguration" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.actionGetIdentityPoolConfiguration"></a>

```typescript
public readonly actionGetIdentityPoolConfiguration: string;
```

- *Type:* string

[Read] cognito-sync:GetIdentityPoolConfiguration.

---

##### `actionSetCognitoEvents`<sup>Required</sup> <a name="actionSetCognitoEvents" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.actionSetCognitoEvents"></a>

```typescript
public readonly actionSetCognitoEvents: string;
```

- *Type:* string

[Write] cognito-sync:SetCognitoEvents.

---

##### `actionSetDatasetConfiguration`<sup>Required</sup> <a name="actionSetDatasetConfiguration" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.actionSetDatasetConfiguration"></a>

```typescript
public readonly actionSetDatasetConfiguration: string;
```

- *Type:* string

[Write] cognito-sync:SetDatasetConfiguration.

---

##### `actionSetIdentityPoolConfiguration`<sup>Required</sup> <a name="actionSetIdentityPoolConfiguration" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.actionSetIdentityPoolConfiguration"></a>

```typescript
public readonly actionSetIdentityPoolConfiguration: string;
```

- *Type:* string

[Write] cognito-sync:SetIdentityPoolConfiguration.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BulkPublish`<sup>Required</sup> <a name="BulkPublish" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.BulkPublish"></a>

```typescript
public readonly BulkPublish: string;
```

- *Type:* string

[Write] cognito-sync:BulkPublish.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string;
```

- *Type:* string

[Write] cognito-sync:DeleteDataset.

---

##### `DescribeDataset`<sup>Required</sup> <a name="DescribeDataset" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.DescribeDataset"></a>

```typescript
public readonly DescribeDataset: string;
```

- *Type:* string

[Read] cognito-sync:DescribeDataset.

---

##### `DescribeIdentityPoolUsage`<sup>Required</sup> <a name="DescribeIdentityPoolUsage" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.DescribeIdentityPoolUsage"></a>

```typescript
public readonly DescribeIdentityPoolUsage: string;
```

- *Type:* string

[Read] cognito-sync:DescribeIdentityPoolUsage.

---

##### `DescribeIdentityUsage`<sup>Required</sup> <a name="DescribeIdentityUsage" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.DescribeIdentityUsage"></a>

```typescript
public readonly DescribeIdentityUsage: string;
```

- *Type:* string

[Read] cognito-sync:DescribeIdentityUsage.

---

##### `ListDatasets`<sup>Required</sup> <a name="ListDatasets" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.ListDatasets"></a>

```typescript
public readonly ListDatasets: string;
```

- *Type:* string

[List] cognito-sync:ListDatasets.

---

##### `ListIdentityPoolUsage`<sup>Required</sup> <a name="ListIdentityPoolUsage" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.ListIdentityPoolUsage"></a>

```typescript
public readonly ListIdentityPoolUsage: string;
```

- *Type:* string

[Read] cognito-sync:ListIdentityPoolUsage.

---

##### `ListRecords`<sup>Required</sup> <a name="ListRecords" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.ListRecords"></a>

```typescript
public readonly ListRecords: string;
```

- *Type:* string

[Read] cognito-sync:ListRecords.

---

##### `QueryRecords`<sup>Required</sup> <a name="QueryRecords" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.QueryRecords"></a>

```typescript
public readonly QueryRecords: string;
```

- *Type:* string

[Read] cognito-sync:QueryRecords.

---

##### `RegisterDevice`<sup>Required</sup> <a name="RegisterDevice" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.RegisterDevice"></a>

```typescript
public readonly RegisterDevice: string;
```

- *Type:* string

[Write] cognito-sync:RegisterDevice.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SubscribeToDataset`<sup>Required</sup> <a name="SubscribeToDataset" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.SubscribeToDataset"></a>

```typescript
public readonly SubscribeToDataset: string;
```

- *Type:* string

[Write] cognito-sync:SubscribeToDataset.

---

##### `UnsubscribeFromDataset`<sup>Required</sup> <a name="UnsubscribeFromDataset" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.UnsubscribeFromDataset"></a>

```typescript
public readonly UnsubscribeFromDataset: string;
```

- *Type:* string

[Write] cognito-sync:UnsubscribeFromDataset.

---

##### `UpdateRecords`<sup>Required</sup> <a name="UpdateRecords" id="@cdk_utils/iam.cognito_sync.CognitoSyncActions.property.UpdateRecords"></a>

```typescript
public readonly UpdateRecords: string;
```

- *Type:* string

[Write] cognito-sync:UpdateRecords.

---

### CognitoSyncOperations <a name="CognitoSyncOperations" id="@cdk_utils/iam.cognito_sync.CognitoSyncOperations"></a>

API operation to required IAM actions mapping for cognito-sync.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cognito_sync.CognitoSyncOperations.Initializer"></a>

```typescript
import { cognito_sync } from '@cdk_utils/iam'

new cognito_sync.CognitoSyncOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.BulkPublish">BulkPublish</a></code> | <code>string[]</code> | IAM actions required for the BulkPublish API call. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.DeleteDataset">DeleteDataset</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataset API call. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.DescribeDataset">DescribeDataset</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataset API call. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.DescribeIdentityPoolUsage">DescribeIdentityPoolUsage</a></code> | <code>string[]</code> | IAM actions required for the DescribeIdentityPoolUsage API call. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.DescribeIdentityUsage">DescribeIdentityUsage</a></code> | <code>string[]</code> | IAM actions required for the DescribeIdentityUsage API call. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.ListDatasets">ListDatasets</a></code> | <code>string[]</code> | IAM actions required for the ListDatasets API call. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.ListIdentityPoolUsage">ListIdentityPoolUsage</a></code> | <code>string[]</code> | IAM actions required for the ListIdentityPoolUsage API call. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.ListRecords">ListRecords</a></code> | <code>string[]</code> | IAM actions required for the ListRecords API call. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.opGetBulkPublishDetails">opGetBulkPublishDetails</a></code> | <code>string[]</code> | IAM actions required for the GetBulkPublishDetails API call. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.opGetCognitoEvents">opGetCognitoEvents</a></code> | <code>string[]</code> | IAM actions required for the GetCognitoEvents API call. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.opGetIdentityPoolConfiguration">opGetIdentityPoolConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetIdentityPoolConfiguration API call. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.opSetCognitoEvents">opSetCognitoEvents</a></code> | <code>string[]</code> | IAM actions required for the SetCognitoEvents API call. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.opSetIdentityPoolConfiguration">opSetIdentityPoolConfiguration</a></code> | <code>string[]</code> | IAM actions required for the SetIdentityPoolConfiguration API call. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.RegisterDevice">RegisterDevice</a></code> | <code>string[]</code> | IAM actions required for the RegisterDevice API call. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.SubscribeToDataset">SubscribeToDataset</a></code> | <code>string[]</code> | IAM actions required for the SubscribeToDataset API call. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.UnsubscribeFromDataset">UnsubscribeFromDataset</a></code> | <code>string[]</code> | IAM actions required for the UnsubscribeFromDataset API call. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.UpdateRecords">UpdateRecords</a></code> | <code>string[]</code> | IAM actions required for the UpdateRecords API call. |

---

##### `BulkPublish`<sup>Required</sup> <a name="BulkPublish" id="@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.BulkPublish"></a>

```typescript
public readonly BulkPublish: string[];
```

- *Type:* string[]

IAM actions required for the BulkPublish API call.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataset API call.

---

##### `DescribeDataset`<sup>Required</sup> <a name="DescribeDataset" id="@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.DescribeDataset"></a>

```typescript
public readonly DescribeDataset: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataset API call.

---

##### `DescribeIdentityPoolUsage`<sup>Required</sup> <a name="DescribeIdentityPoolUsage" id="@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.DescribeIdentityPoolUsage"></a>

```typescript
public readonly DescribeIdentityPoolUsage: string[];
```

- *Type:* string[]

IAM actions required for the DescribeIdentityPoolUsage API call.

---

##### `DescribeIdentityUsage`<sup>Required</sup> <a name="DescribeIdentityUsage" id="@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.DescribeIdentityUsage"></a>

```typescript
public readonly DescribeIdentityUsage: string[];
```

- *Type:* string[]

IAM actions required for the DescribeIdentityUsage API call.

---

##### `ListDatasets`<sup>Required</sup> <a name="ListDatasets" id="@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.ListDatasets"></a>

```typescript
public readonly ListDatasets: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasets API call.

---

##### `ListIdentityPoolUsage`<sup>Required</sup> <a name="ListIdentityPoolUsage" id="@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.ListIdentityPoolUsage"></a>

```typescript
public readonly ListIdentityPoolUsage: string[];
```

- *Type:* string[]

IAM actions required for the ListIdentityPoolUsage API call.

---

##### `ListRecords`<sup>Required</sup> <a name="ListRecords" id="@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.ListRecords"></a>

```typescript
public readonly ListRecords: string[];
```

- *Type:* string[]

IAM actions required for the ListRecords API call.

---

##### `opGetBulkPublishDetails`<sup>Required</sup> <a name="opGetBulkPublishDetails" id="@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.opGetBulkPublishDetails"></a>

```typescript
public readonly opGetBulkPublishDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetBulkPublishDetails API call.

---

##### `opGetCognitoEvents`<sup>Required</sup> <a name="opGetCognitoEvents" id="@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.opGetCognitoEvents"></a>

```typescript
public readonly opGetCognitoEvents: string[];
```

- *Type:* string[]

IAM actions required for the GetCognitoEvents API call.

---

##### `opGetIdentityPoolConfiguration`<sup>Required</sup> <a name="opGetIdentityPoolConfiguration" id="@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.opGetIdentityPoolConfiguration"></a>

```typescript
public readonly opGetIdentityPoolConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetIdentityPoolConfiguration API call.

---

##### `opSetCognitoEvents`<sup>Required</sup> <a name="opSetCognitoEvents" id="@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.opSetCognitoEvents"></a>

```typescript
public readonly opSetCognitoEvents: string[];
```

- *Type:* string[]

IAM actions required for the SetCognitoEvents API call.

---

##### `opSetIdentityPoolConfiguration`<sup>Required</sup> <a name="opSetIdentityPoolConfiguration" id="@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.opSetIdentityPoolConfiguration"></a>

```typescript
public readonly opSetIdentityPoolConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the SetIdentityPoolConfiguration API call.

---

##### `RegisterDevice`<sup>Required</sup> <a name="RegisterDevice" id="@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.RegisterDevice"></a>

```typescript
public readonly RegisterDevice: string[];
```

- *Type:* string[]

IAM actions required for the RegisterDevice API call.

---

##### `SubscribeToDataset`<sup>Required</sup> <a name="SubscribeToDataset" id="@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.SubscribeToDataset"></a>

```typescript
public readonly SubscribeToDataset: string[];
```

- *Type:* string[]

IAM actions required for the SubscribeToDataset API call.

---

##### `UnsubscribeFromDataset`<sup>Required</sup> <a name="UnsubscribeFromDataset" id="@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.UnsubscribeFromDataset"></a>

```typescript
public readonly UnsubscribeFromDataset: string[];
```

- *Type:* string[]

IAM actions required for the UnsubscribeFromDataset API call.

---

##### `UpdateRecords`<sup>Required</sup> <a name="UpdateRecords" id="@cdk_utils/iam.cognito_sync.CognitoSyncOperations.property.UpdateRecords"></a>

```typescript
public readonly UpdateRecords: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRecords API call.

---

### CognitoSyncResources <a name="CognitoSyncResources" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources"></a>

ARN builders, validators, and parsers for cognito-sync resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources.Initializer"></a>

```typescript
import { cognito_sync } from '@cdk_utils/iam'

new cognito_sync.CognitoSyncResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncResources.dataset">dataset</a></code> | Builds an ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncResources.identity">identity</a></code> | Builds an ARN for the identity resource. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncResources.identitypool">identitypool</a></code> | Builds an ARN for the identitypool resource. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncResources.isValidDatasetArn">isValidDatasetArn</a></code> | Validates whether a string is a valid ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncResources.isValidIdentityArn">isValidIdentityArn</a></code> | Validates whether a string is a valid ARN for the identity resource. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncResources.isValidIdentitypoolArn">isValidIdentitypoolArn</a></code> | Validates whether a string is a valid ARN for the identitypool resource. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncResources.parseDatasetArn">parseDatasetArn</a></code> | Parses a dataset ARN into its components. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncResources.parseIdentityArn">parseIdentityArn</a></code> | Parses a identity ARN into its components. |
| <code><a href="#@cdk_utils/iam.cognito_sync.CognitoSyncResources.parseIdentitypoolArn">parseIdentitypoolArn</a></code> | Parses a identitypool ARN into its components. |

---

##### `dataset` <a name="dataset" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources.dataset"></a>

```typescript
import { cognito_sync } from '@cdk_utils/iam'

cognito_sync.CognitoSyncResources.dataset(props: CognitoSyncDatasetArnProps)
```

Builds an ARN for the dataset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources.dataset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cognito_sync.CognitoSyncDatasetArnProps">CognitoSyncDatasetArnProps</a>

---

##### `identity` <a name="identity" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources.identity"></a>

```typescript
import { cognito_sync } from '@cdk_utils/iam'

cognito_sync.CognitoSyncResources.identity(props: CognitoSyncIdentityArnProps)
```

Builds an ARN for the identity resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources.identity.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentityArnProps">CognitoSyncIdentityArnProps</a>

---

##### `identitypool` <a name="identitypool" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources.identitypool"></a>

```typescript
import { cognito_sync } from '@cdk_utils/iam'

cognito_sync.CognitoSyncResources.identitypool(props: CognitoSyncIdentitypoolArnProps)
```

Builds an ARN for the identitypool resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources.identitypool.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cognito_sync.CognitoSyncIdentitypoolArnProps">CognitoSyncIdentitypoolArnProps</a>

---

##### `isValidDatasetArn` <a name="isValidDatasetArn" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources.isValidDatasetArn"></a>

```typescript
import { cognito_sync } from '@cdk_utils/iam'

cognito_sync.CognitoSyncResources.isValidDatasetArn(arn: string)
```

Validates whether a string is a valid ARN for the dataset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources.isValidDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIdentityArn` <a name="isValidIdentityArn" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources.isValidIdentityArn"></a>

```typescript
import { cognito_sync } from '@cdk_utils/iam'

cognito_sync.CognitoSyncResources.isValidIdentityArn(arn: string)
```

Validates whether a string is a valid ARN for the identity resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources.isValidIdentityArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIdentitypoolArn` <a name="isValidIdentitypoolArn" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources.isValidIdentitypoolArn"></a>

```typescript
import { cognito_sync } from '@cdk_utils/iam'

cognito_sync.CognitoSyncResources.isValidIdentitypoolArn(arn: string)
```

Validates whether a string is a valid ARN for the identitypool resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources.isValidIdentitypoolArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasetArn` <a name="parseDatasetArn" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources.parseDatasetArn"></a>

```typescript
import { cognito_sync } from '@cdk_utils/iam'

cognito_sync.CognitoSyncResources.parseDatasetArn(arn: string)
```

Parses a dataset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources.parseDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIdentityArn` <a name="parseIdentityArn" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources.parseIdentityArn"></a>

```typescript
import { cognito_sync } from '@cdk_utils/iam'

cognito_sync.CognitoSyncResources.parseIdentityArn(arn: string)
```

Parses a identity ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources.parseIdentityArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIdentitypoolArn` <a name="parseIdentitypoolArn" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources.parseIdentitypoolArn"></a>

```typescript
import { cognito_sync } from '@cdk_utils/iam'

cognito_sync.CognitoSyncResources.parseIdentitypoolArn(arn: string)
```

Parses a identitypool ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cognito_sync.CognitoSyncResources.parseIdentitypoolArn.parameter.arn"></a>

- *Type:* string

---




