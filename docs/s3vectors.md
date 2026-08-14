# `s3vectors` Submodule <a name="`s3vectors` Submodule" id="@cdk_utils/iam.s3vectors"></a>


## Structs <a name="Structs" id="Structs"></a>

### S3vectorsIndexArnComponents <a name="S3vectorsIndexArnComponents" id="@cdk_utils/iam.s3vectors.S3vectorsIndexArnComponents"></a>

Parsed components of a Index ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3vectors.S3vectorsIndexArnComponents.Initializer"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

const s3vectorsIndexArnComponents: s3vectors.S3vectorsIndexArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsIndexArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsIndexArnComponents.property.bucketName">bucketName</a></code> | <code>string</code> | The BucketName component. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsIndexArnComponents.property.indexName">indexName</a></code> | <code>string</code> | The IndexName component. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsIndexArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsIndexArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.s3vectors.S3vectorsIndexArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdk_utils/iam.s3vectors.S3vectorsIndexArnComponents.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The BucketName component.

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdk_utils/iam.s3vectors.S3vectorsIndexArnComponents.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

The IndexName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.s3vectors.S3vectorsIndexArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.s3vectors.S3vectorsIndexArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### S3vectorsIndexArnProps <a name="S3vectorsIndexArnProps" id="@cdk_utils/iam.s3vectors.S3vectorsIndexArnProps"></a>

Properties for building a Index ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3vectors.S3vectorsIndexArnProps.Initializer"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

const s3vectorsIndexArnProps: s3vectors.S3vectorsIndexArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsIndexArnProps.property.bucketName">bucketName</a></code> | <code>string</code> | The BucketName component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsIndexArnProps.property.indexName">indexName</a></code> | <code>string</code> | The IndexName component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsIndexArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsIndexArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsIndexArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdk_utils/iam.s3vectors.S3vectorsIndexArnProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The BucketName component of the ARN.

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdk_utils/iam.s3vectors.S3vectorsIndexArnProps.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

The IndexName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.s3vectors.S3vectorsIndexArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.s3vectors.S3vectorsIndexArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.s3vectors.S3vectorsIndexArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### S3vectorsVectorBucketArnComponents <a name="S3vectorsVectorBucketArnComponents" id="@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnComponents"></a>

Parsed components of a VectorBucket ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnComponents.Initializer"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

const s3vectorsVectorBucketArnComponents: s3vectors.S3vectorsVectorBucketArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnComponents.property.bucketName">bucketName</a></code> | <code>string</code> | The BucketName component. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnComponents.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The BucketName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### S3vectorsVectorBucketArnProps <a name="S3vectorsVectorBucketArnProps" id="@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnProps"></a>

Properties for building a VectorBucket ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnProps.Initializer"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

const s3vectorsVectorBucketArnProps: s3vectors.S3vectorsVectorBucketArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnProps.property.bucketName">bucketName</a></code> | <code>string</code> | The BucketName component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The BucketName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### S3vectorsActions <a name="S3vectorsActions" id="@cdk_utils/iam.s3vectors.S3vectorsActions"></a>

IAM action constants for the s3vectors service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3vectors.S3vectorsActions.Initializer"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

new s3vectors.S3vectorsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.actionGetIndex">actionGetIndex</a></code> | <code>string</code> | [Read] s3vectors:GetIndex. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.actionGetVectorBucket">actionGetVectorBucket</a></code> | <code>string</code> | [Read] s3vectors:GetVectorBucket. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.actionGetVectorBucketPolicy">actionGetVectorBucketPolicy</a></code> | <code>string</code> | [Read] s3vectors:GetVectorBucketPolicy. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.actionGetVectors">actionGetVectors</a></code> | <code>string</code> | [Read] s3vectors:GetVectors. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.CreateIndex">CreateIndex</a></code> | <code>string</code> | [Write] s3vectors:CreateIndex. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.CreateVectorBucket">CreateVectorBucket</a></code> | <code>string</code> | [Write] s3vectors:CreateVectorBucket. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.DeleteIndex">DeleteIndex</a></code> | <code>string</code> | [Write] s3vectors:DeleteIndex. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.DeleteVectorBucket">DeleteVectorBucket</a></code> | <code>string</code> | [Write] s3vectors:DeleteVectorBucket. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.DeleteVectorBucketPolicy">DeleteVectorBucketPolicy</a></code> | <code>string</code> | [PermissionManagement] s3vectors:DeleteVectorBucketPolicy. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.DeleteVectors">DeleteVectors</a></code> | <code>string</code> | [Write] s3vectors:DeleteVectors. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.ListIndexes">ListIndexes</a></code> | <code>string</code> | [List] s3vectors:ListIndexes. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] s3vectors:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.ListVectorBuckets">ListVectorBuckets</a></code> | <code>string</code> | [List] s3vectors:ListVectorBuckets. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.ListVectors">ListVectors</a></code> | <code>string</code> | [List] s3vectors:ListVectors. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.PutVectorBucketPolicy">PutVectorBucketPolicy</a></code> | <code>string</code> | [PermissionManagement] s3vectors:PutVectorBucketPolicy. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.PutVectors">PutVectors</a></code> | <code>string</code> | [Write] s3vectors:PutVectors. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.QueryVectors">QueryVectors</a></code> | <code>string</code> | [Read] s3vectors:QueryVectors. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] s3vectors:TagResource. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] s3vectors:UntagResource. |

---

##### `actionGetIndex`<sup>Required</sup> <a name="actionGetIndex" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.actionGetIndex"></a>

```typescript
public readonly actionGetIndex: string;
```

- *Type:* string

[Read] s3vectors:GetIndex.

---

##### `actionGetVectorBucket`<sup>Required</sup> <a name="actionGetVectorBucket" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.actionGetVectorBucket"></a>

```typescript
public readonly actionGetVectorBucket: string;
```

- *Type:* string

[Read] s3vectors:GetVectorBucket.

---

##### `actionGetVectorBucketPolicy`<sup>Required</sup> <a name="actionGetVectorBucketPolicy" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.actionGetVectorBucketPolicy"></a>

```typescript
public readonly actionGetVectorBucketPolicy: string;
```

- *Type:* string

[Read] s3vectors:GetVectorBucketPolicy.

---

##### `actionGetVectors`<sup>Required</sup> <a name="actionGetVectors" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.actionGetVectors"></a>

```typescript
public readonly actionGetVectors: string;
```

- *Type:* string

[Read] s3vectors:GetVectors.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateIndex`<sup>Required</sup> <a name="CreateIndex" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.CreateIndex"></a>

```typescript
public readonly CreateIndex: string;
```

- *Type:* string

[Write] s3vectors:CreateIndex.

---

##### `CreateVectorBucket`<sup>Required</sup> <a name="CreateVectorBucket" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.CreateVectorBucket"></a>

```typescript
public readonly CreateVectorBucket: string;
```

- *Type:* string

[Write] s3vectors:CreateVectorBucket.

---

##### `DeleteIndex`<sup>Required</sup> <a name="DeleteIndex" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.DeleteIndex"></a>

```typescript
public readonly DeleteIndex: string;
```

- *Type:* string

[Write] s3vectors:DeleteIndex.

---

##### `DeleteVectorBucket`<sup>Required</sup> <a name="DeleteVectorBucket" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.DeleteVectorBucket"></a>

```typescript
public readonly DeleteVectorBucket: string;
```

- *Type:* string

[Write] s3vectors:DeleteVectorBucket.

---

##### `DeleteVectorBucketPolicy`<sup>Required</sup> <a name="DeleteVectorBucketPolicy" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.DeleteVectorBucketPolicy"></a>

```typescript
public readonly DeleteVectorBucketPolicy: string;
```

- *Type:* string

[PermissionManagement] s3vectors:DeleteVectorBucketPolicy.

---

##### `DeleteVectors`<sup>Required</sup> <a name="DeleteVectors" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.DeleteVectors"></a>

```typescript
public readonly DeleteVectors: string;
```

- *Type:* string

[Write] s3vectors:DeleteVectors.

---

##### `ListIndexes`<sup>Required</sup> <a name="ListIndexes" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.ListIndexes"></a>

```typescript
public readonly ListIndexes: string;
```

- *Type:* string

[List] s3vectors:ListIndexes.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] s3vectors:ListTagsForResource.

---

##### `ListVectorBuckets`<sup>Required</sup> <a name="ListVectorBuckets" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.ListVectorBuckets"></a>

```typescript
public readonly ListVectorBuckets: string;
```

- *Type:* string

[List] s3vectors:ListVectorBuckets.

---

##### `ListVectors`<sup>Required</sup> <a name="ListVectors" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.ListVectors"></a>

```typescript
public readonly ListVectors: string;
```

- *Type:* string

[List] s3vectors:ListVectors.

---

##### `PutVectorBucketPolicy`<sup>Required</sup> <a name="PutVectorBucketPolicy" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.PutVectorBucketPolicy"></a>

```typescript
public readonly PutVectorBucketPolicy: string;
```

- *Type:* string

[PermissionManagement] s3vectors:PutVectorBucketPolicy.

---

##### `PutVectors`<sup>Required</sup> <a name="PutVectors" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.PutVectors"></a>

```typescript
public readonly PutVectors: string;
```

- *Type:* string

[Write] s3vectors:PutVectors.

---

##### `QueryVectors`<sup>Required</sup> <a name="QueryVectors" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.QueryVectors"></a>

```typescript
public readonly QueryVectors: string;
```

- *Type:* string

[Read] s3vectors:QueryVectors.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] s3vectors:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.s3vectors.S3vectorsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] s3vectors:UntagResource.

---

### S3vectorsConditions <a name="S3vectorsConditions" id="@cdk_utils/iam.s3vectors.S3vectorsConditions"></a>

Condition key constants and builders for s3vectors.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.Initializer"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

new s3vectors.S3vectorsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.kmsKeyARN">kmsKeyARN</a></code> | Generates a condition block for `s3vectors:kmsKeyArn`. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.sseType">sseType</a></code> | Generates a condition block for `s3vectors:sseType`. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.vectorBucketTag">vectorBucketTag</a></code> | Generates a condition block for `s3vectors:VectorBucketTag/${TagKey}`. |

---

##### `kmsKeyARN` <a name="kmsKeyARN" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.kmsKeyARN"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

s3vectors.S3vectorsConditions.kmsKeyARN(value: string)
```

Generates a condition block for `s3vectors:kmsKeyArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.kmsKeyARN.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.requestTag"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

s3vectors.S3vectorsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.resourceTag"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

s3vectors.S3vectorsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `sseType` <a name="sseType" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.sseType"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

s3vectors.S3vectorsConditions.sseType(value: string)
```

Generates a condition block for `s3vectors:sseType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.sseType.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.tagKeys"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

s3vectors.S3vectorsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `vectorBucketTag` <a name="vectorBucketTag" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.vectorBucketTag"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

s3vectors.S3vectorsConditions.vectorBucketTag(value: string)
```

Generates a condition block for `s3vectors:VectorBucketTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.vectorBucketTag.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.actionGetIndexConditionKeys">actionGetIndexConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetIndex action. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.actionGetVectorBucketConditionKeys">actionGetVectorBucketConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetVectorBucket action. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.actionGetVectorBucketPolicyConditionKeys">actionGetVectorBucketPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetVectorBucketPolicy action. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.actionGetVectorsConditionKeys">actionGetVectorsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetVectors action. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.CreateIndexConditionKeys">CreateIndexConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIndex action. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.CreateVectorBucketConditionKeys">CreateVectorBucketConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVectorBucket action. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.DeleteIndexConditionKeys">DeleteIndexConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteIndex action. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.DeleteVectorBucketConditionKeys">DeleteVectorBucketConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteVectorBucket action. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.DeleteVectorBucketPolicyConditionKeys">DeleteVectorBucketPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteVectorBucketPolicy action. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.DeleteVectorsConditionKeys">DeleteVectorsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteVectors action. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.KMS_KEY_ARN">KMS_KEY_ARN</a></code> | <code>string</code> | Condition key: s3vectors:kmsKeyArn (ARN). |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.ListIndexesConditionKeys">ListIndexesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListIndexes action. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.ListVectorsConditionKeys">ListVectorsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListVectors action. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.PutVectorBucketPolicyConditionKeys">PutVectorBucketPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutVectorBucketPolicy action. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.PutVectorsConditionKeys">PutVectorsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutVectors action. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.QueryVectorsConditionKeys">QueryVectorsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the QueryVectors action. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.SSE_TYPE">SSE_TYPE</a></code> | <code>string</code> | Condition key: s3vectors:sseType (String). |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsConditions.property.VECTOR_BUCKET_TAG">VECTOR_BUCKET_TAG</a></code> | <code>string</code> | Condition key: s3vectors:VectorBucketTag/${TagKey} (String). |

---

##### `actionGetIndexConditionKeys`<sup>Required</sup> <a name="actionGetIndexConditionKeys" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.actionGetIndexConditionKeys"></a>

```typescript
public readonly actionGetIndexConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetIndex action.

---

##### `actionGetVectorBucketConditionKeys`<sup>Required</sup> <a name="actionGetVectorBucketConditionKeys" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.actionGetVectorBucketConditionKeys"></a>

```typescript
public readonly actionGetVectorBucketConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetVectorBucket action.

---

##### `actionGetVectorBucketPolicyConditionKeys`<sup>Required</sup> <a name="actionGetVectorBucketPolicyConditionKeys" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.actionGetVectorBucketPolicyConditionKeys"></a>

```typescript
public readonly actionGetVectorBucketPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetVectorBucketPolicy action.

---

##### `actionGetVectorsConditionKeys`<sup>Required</sup> <a name="actionGetVectorsConditionKeys" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.actionGetVectorsConditionKeys"></a>

```typescript
public readonly actionGetVectorsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetVectors action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateIndexConditionKeys`<sup>Required</sup> <a name="CreateIndexConditionKeys" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.CreateIndexConditionKeys"></a>

```typescript
public readonly CreateIndexConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIndex action.

---

##### `CreateVectorBucketConditionKeys`<sup>Required</sup> <a name="CreateVectorBucketConditionKeys" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.CreateVectorBucketConditionKeys"></a>

```typescript
public readonly CreateVectorBucketConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVectorBucket action.

---

##### `DeleteIndexConditionKeys`<sup>Required</sup> <a name="DeleteIndexConditionKeys" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.DeleteIndexConditionKeys"></a>

```typescript
public readonly DeleteIndexConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteIndex action.

---

##### `DeleteVectorBucketConditionKeys`<sup>Required</sup> <a name="DeleteVectorBucketConditionKeys" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.DeleteVectorBucketConditionKeys"></a>

```typescript
public readonly DeleteVectorBucketConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteVectorBucket action.

---

##### `DeleteVectorBucketPolicyConditionKeys`<sup>Required</sup> <a name="DeleteVectorBucketPolicyConditionKeys" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.DeleteVectorBucketPolicyConditionKeys"></a>

```typescript
public readonly DeleteVectorBucketPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteVectorBucketPolicy action.

---

##### `DeleteVectorsConditionKeys`<sup>Required</sup> <a name="DeleteVectorsConditionKeys" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.DeleteVectorsConditionKeys"></a>

```typescript
public readonly DeleteVectorsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteVectors action.

---

##### `KMS_KEY_ARN`<sup>Required</sup> <a name="KMS_KEY_ARN" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.KMS_KEY_ARN"></a>

```typescript
public readonly KMS_KEY_ARN: string;
```

- *Type:* string

Condition key: s3vectors:kmsKeyArn (ARN).

---

##### `ListIndexesConditionKeys`<sup>Required</sup> <a name="ListIndexesConditionKeys" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.ListIndexesConditionKeys"></a>

```typescript
public readonly ListIndexesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListIndexes action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `ListVectorsConditionKeys`<sup>Required</sup> <a name="ListVectorsConditionKeys" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.ListVectorsConditionKeys"></a>

```typescript
public readonly ListVectorsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListVectors action.

---

##### `PutVectorBucketPolicyConditionKeys`<sup>Required</sup> <a name="PutVectorBucketPolicyConditionKeys" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.PutVectorBucketPolicyConditionKeys"></a>

```typescript
public readonly PutVectorBucketPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutVectorBucketPolicy action.

---

##### `PutVectorsConditionKeys`<sup>Required</sup> <a name="PutVectorsConditionKeys" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.PutVectorsConditionKeys"></a>

```typescript
public readonly PutVectorsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutVectors action.

---

##### `QueryVectorsConditionKeys`<sup>Required</sup> <a name="QueryVectorsConditionKeys" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.QueryVectorsConditionKeys"></a>

```typescript
public readonly QueryVectorsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the QueryVectors action.

---

##### `SSE_TYPE`<sup>Required</sup> <a name="SSE_TYPE" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.SSE_TYPE"></a>

```typescript
public readonly SSE_TYPE: string;
```

- *Type:* string

Condition key: s3vectors:sseType (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `VECTOR_BUCKET_TAG`<sup>Required</sup> <a name="VECTOR_BUCKET_TAG" id="@cdk_utils/iam.s3vectors.S3vectorsConditions.property.VECTOR_BUCKET_TAG"></a>

```typescript
public readonly VECTOR_BUCKET_TAG: string;
```

- *Type:* string

Condition key: s3vectors:VectorBucketTag/${TagKey} (String).

---

### S3vectorsOperations <a name="S3vectorsOperations" id="@cdk_utils/iam.s3vectors.S3vectorsOperations"></a>

API operation to required IAM actions mapping for s3vectors.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.Initializer"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

new s3vectors.S3vectorsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsOperations.property.CreateIndex">CreateIndex</a></code> | <code>string[]</code> | IAM actions required for the CreateIndex API call. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsOperations.property.CreateVectorBucket">CreateVectorBucket</a></code> | <code>string[]</code> | IAM actions required for the CreateVectorBucket API call. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsOperations.property.DeleteIndex">DeleteIndex</a></code> | <code>string[]</code> | IAM actions required for the DeleteIndex API call. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsOperations.property.DeleteVectorBucket">DeleteVectorBucket</a></code> | <code>string[]</code> | IAM actions required for the DeleteVectorBucket API call. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsOperations.property.DeleteVectorBucketPolicy">DeleteVectorBucketPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteVectorBucketPolicy API call. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsOperations.property.DeleteVectors">DeleteVectors</a></code> | <code>string[]</code> | IAM actions required for the DeleteVectors API call. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsOperations.property.ListIndexes">ListIndexes</a></code> | <code>string[]</code> | IAM actions required for the ListIndexes API call. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsOperations.property.ListVectorBuckets">ListVectorBuckets</a></code> | <code>string[]</code> | IAM actions required for the ListVectorBuckets API call. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsOperations.property.ListVectors">ListVectors</a></code> | <code>string[]</code> | IAM actions required for the ListVectors API call. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsOperations.property.opGetIndex">opGetIndex</a></code> | <code>string[]</code> | IAM actions required for the GetIndex API call. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsOperations.property.opGetVectorBucket">opGetVectorBucket</a></code> | <code>string[]</code> | IAM actions required for the GetVectorBucket API call. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsOperations.property.opGetVectorBucketPolicy">opGetVectorBucketPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetVectorBucketPolicy API call. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsOperations.property.opGetVectors">opGetVectors</a></code> | <code>string[]</code> | IAM actions required for the GetVectors API call. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsOperations.property.PutVectorBucketPolicy">PutVectorBucketPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutVectorBucketPolicy API call. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsOperations.property.PutVectors">PutVectors</a></code> | <code>string[]</code> | IAM actions required for the PutVectors API call. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsOperations.property.QueryVectors">QueryVectors</a></code> | <code>string[]</code> | IAM actions required for the QueryVectors API call. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `CreateIndex`<sup>Required</sup> <a name="CreateIndex" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.property.CreateIndex"></a>

```typescript
public readonly CreateIndex: string[];
```

- *Type:* string[]

IAM actions required for the CreateIndex API call.

---

##### `CreateVectorBucket`<sup>Required</sup> <a name="CreateVectorBucket" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.property.CreateVectorBucket"></a>

```typescript
public readonly CreateVectorBucket: string[];
```

- *Type:* string[]

IAM actions required for the CreateVectorBucket API call.

---

##### `DeleteIndex`<sup>Required</sup> <a name="DeleteIndex" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.property.DeleteIndex"></a>

```typescript
public readonly DeleteIndex: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIndex API call.

---

##### `DeleteVectorBucket`<sup>Required</sup> <a name="DeleteVectorBucket" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.property.DeleteVectorBucket"></a>

```typescript
public readonly DeleteVectorBucket: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVectorBucket API call.

---

##### `DeleteVectorBucketPolicy`<sup>Required</sup> <a name="DeleteVectorBucketPolicy" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.property.DeleteVectorBucketPolicy"></a>

```typescript
public readonly DeleteVectorBucketPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVectorBucketPolicy API call.

---

##### `DeleteVectors`<sup>Required</sup> <a name="DeleteVectors" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.property.DeleteVectors"></a>

```typescript
public readonly DeleteVectors: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVectors API call.

---

##### `ListIndexes`<sup>Required</sup> <a name="ListIndexes" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.property.ListIndexes"></a>

```typescript
public readonly ListIndexes: string[];
```

- *Type:* string[]

IAM actions required for the ListIndexes API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListVectorBuckets`<sup>Required</sup> <a name="ListVectorBuckets" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.property.ListVectorBuckets"></a>

```typescript
public readonly ListVectorBuckets: string[];
```

- *Type:* string[]

IAM actions required for the ListVectorBuckets API call.

---

##### `ListVectors`<sup>Required</sup> <a name="ListVectors" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.property.ListVectors"></a>

```typescript
public readonly ListVectors: string[];
```

- *Type:* string[]

IAM actions required for the ListVectors API call.

---

##### `opGetIndex`<sup>Required</sup> <a name="opGetIndex" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.property.opGetIndex"></a>

```typescript
public readonly opGetIndex: string[];
```

- *Type:* string[]

IAM actions required for the GetIndex API call.

---

##### `opGetVectorBucket`<sup>Required</sup> <a name="opGetVectorBucket" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.property.opGetVectorBucket"></a>

```typescript
public readonly opGetVectorBucket: string[];
```

- *Type:* string[]

IAM actions required for the GetVectorBucket API call.

---

##### `opGetVectorBucketPolicy`<sup>Required</sup> <a name="opGetVectorBucketPolicy" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.property.opGetVectorBucketPolicy"></a>

```typescript
public readonly opGetVectorBucketPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetVectorBucketPolicy API call.

---

##### `opGetVectors`<sup>Required</sup> <a name="opGetVectors" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.property.opGetVectors"></a>

```typescript
public readonly opGetVectors: string[];
```

- *Type:* string[]

IAM actions required for the GetVectors API call.

---

##### `PutVectorBucketPolicy`<sup>Required</sup> <a name="PutVectorBucketPolicy" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.property.PutVectorBucketPolicy"></a>

```typescript
public readonly PutVectorBucketPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutVectorBucketPolicy API call.

---

##### `PutVectors`<sup>Required</sup> <a name="PutVectors" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.property.PutVectors"></a>

```typescript
public readonly PutVectors: string[];
```

- *Type:* string[]

IAM actions required for the PutVectors API call.

---

##### `QueryVectors`<sup>Required</sup> <a name="QueryVectors" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.property.QueryVectors"></a>

```typescript
public readonly QueryVectors: string[];
```

- *Type:* string[]

IAM actions required for the QueryVectors API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.s3vectors.S3vectorsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### S3vectorsResources <a name="S3vectorsResources" id="@cdk_utils/iam.s3vectors.S3vectorsResources"></a>

ARN builders, validators, and parsers for s3vectors resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3vectors.S3vectorsResources.Initializer"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

new s3vectors.S3vectorsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsResources.index">index</a></code> | Builds an ARN for the Index resource. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsResources.isValidIndexArn">isValidIndexArn</a></code> | Validates whether a string is a valid ARN for the Index resource. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsResources.isValidVectorBucketArn">isValidVectorBucketArn</a></code> | Validates whether a string is a valid ARN for the VectorBucket resource. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsResources.parseIndexArn">parseIndexArn</a></code> | Parses a Index ARN into its components. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsResources.parseVectorBucketArn">parseVectorBucketArn</a></code> | Parses a VectorBucket ARN into its components. |
| <code><a href="#@cdk_utils/iam.s3vectors.S3vectorsResources.vectorBucket">vectorBucket</a></code> | Builds an ARN for the VectorBucket resource. |

---

##### `index` <a name="index" id="@cdk_utils/iam.s3vectors.S3vectorsResources.index"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

s3vectors.S3vectorsResources.index(props: S3vectorsIndexArnProps)
```

Builds an ARN for the Index resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.s3vectors.S3vectorsResources.index.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.s3vectors.S3vectorsIndexArnProps">S3vectorsIndexArnProps</a>

---

##### `isValidIndexArn` <a name="isValidIndexArn" id="@cdk_utils/iam.s3vectors.S3vectorsResources.isValidIndexArn"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

s3vectors.S3vectorsResources.isValidIndexArn(arn: string)
```

Validates whether a string is a valid ARN for the Index resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3vectors.S3vectorsResources.isValidIndexArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVectorBucketArn` <a name="isValidVectorBucketArn" id="@cdk_utils/iam.s3vectors.S3vectorsResources.isValidVectorBucketArn"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

s3vectors.S3vectorsResources.isValidVectorBucketArn(arn: string)
```

Validates whether a string is a valid ARN for the VectorBucket resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3vectors.S3vectorsResources.isValidVectorBucketArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIndexArn` <a name="parseIndexArn" id="@cdk_utils/iam.s3vectors.S3vectorsResources.parseIndexArn"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

s3vectors.S3vectorsResources.parseIndexArn(arn: string)
```

Parses a Index ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3vectors.S3vectorsResources.parseIndexArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVectorBucketArn` <a name="parseVectorBucketArn" id="@cdk_utils/iam.s3vectors.S3vectorsResources.parseVectorBucketArn"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

s3vectors.S3vectorsResources.parseVectorBucketArn(arn: string)
```

Parses a VectorBucket ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3vectors.S3vectorsResources.parseVectorBucketArn.parameter.arn"></a>

- *Type:* string

---

##### `vectorBucket` <a name="vectorBucket" id="@cdk_utils/iam.s3vectors.S3vectorsResources.vectorBucket"></a>

```typescript
import { s3vectors } from '@cdk_utils/iam'

s3vectors.S3vectorsResources.vectorBucket(props: S3vectorsVectorBucketArnProps)
```

Builds an ARN for the VectorBucket resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.s3vectors.S3vectorsResources.vectorBucket.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.s3vectors.S3vectorsVectorBucketArnProps">S3vectorsVectorBucketArnProps</a>

---




