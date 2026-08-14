# `s3_object_lambda` Submodule <a name="`s3_object_lambda` Submodule" id="@cdk_utils/iam.s3_object_lambda"></a>


## Structs <a name="Structs" id="Structs"></a>

### S3ObjectLambdaObjectlambdaaccesspointArnComponents <a name="S3ObjectLambdaObjectlambdaaccesspointArnComponents" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnComponents"></a>

Parsed components of a objectlambdaaccesspoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnComponents.Initializer"></a>

```typescript
import { s3_object_lambda } from '@cdk_utils/iam'

const s3ObjectLambdaObjectlambdaaccesspointArnComponents: s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnComponents.property.accessPointName">accessPointName</a></code> | <code>string</code> | The AccessPointName component. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessPointName`<sup>Required</sup> <a name="accessPointName" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnComponents.property.accessPointName"></a>

```typescript
public readonly accessPointName: string;
```

- *Type:* string

The AccessPointName component.

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### S3ObjectLambdaObjectlambdaaccesspointArnProps <a name="S3ObjectLambdaObjectlambdaaccesspointArnProps" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnProps"></a>

Properties for building a objectlambdaaccesspoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnProps.Initializer"></a>

```typescript
import { s3_object_lambda } from '@cdk_utils/iam'

const s3ObjectLambdaObjectlambdaaccesspointArnProps: s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnProps.property.accessPointName">accessPointName</a></code> | <code>string</code> | The AccessPointName component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessPointName`<sup>Required</sup> <a name="accessPointName" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnProps.property.accessPointName"></a>

```typescript
public readonly accessPointName: string;
```

- *Type:* string

The AccessPointName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### S3ObjectLambdaActions <a name="S3ObjectLambdaActions" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions"></a>

IAM action constants for the s3-object-lambda service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.Initializer"></a>

```typescript
import { s3_object_lambda } from '@cdk_utils/iam'

new s3_object_lambda.S3ObjectLambdaActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.AbortMultipartUpload">AbortMultipartUpload</a></code> | <code>string</code> | [Write] s3-object-lambda:AbortMultipartUpload. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.actionGetObject">actionGetObject</a></code> | <code>string</code> | [Read] s3-object-lambda:GetObject. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.actionGetObjectAcl">actionGetObjectAcl</a></code> | <code>string</code> | [Read] s3-object-lambda:GetObjectAcl. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.actionGetObjectLegalHold">actionGetObjectLegalHold</a></code> | <code>string</code> | [Read] s3-object-lambda:GetObjectLegalHold. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.actionGetObjectRetention">actionGetObjectRetention</a></code> | <code>string</code> | [Read] s3-object-lambda:GetObjectRetention. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.actionGetObjectTagging">actionGetObjectTagging</a></code> | <code>string</code> | [Read] s3-object-lambda:GetObjectTagging. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.actionGetObjectVersion">actionGetObjectVersion</a></code> | <code>string</code> | [Read] s3-object-lambda:GetObjectVersion. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.actionGetObjectVersionAcl">actionGetObjectVersionAcl</a></code> | <code>string</code> | [Read] s3-object-lambda:GetObjectVersionAcl. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.actionGetObjectVersionTagging">actionGetObjectVersionTagging</a></code> | <code>string</code> | [Read] s3-object-lambda:GetObjectVersionTagging. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.DeleteObject">DeleteObject</a></code> | <code>string</code> | [Write] s3-object-lambda:DeleteObject. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.DeleteObjectTagging">DeleteObjectTagging</a></code> | <code>string</code> | [Tagging] s3-object-lambda:DeleteObjectTagging. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.DeleteObjectVersion">DeleteObjectVersion</a></code> | <code>string</code> | [Write] s3-object-lambda:DeleteObjectVersion. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.DeleteObjectVersionTagging">DeleteObjectVersionTagging</a></code> | <code>string</code> | [Tagging] s3-object-lambda:DeleteObjectVersionTagging. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.ListBucket">ListBucket</a></code> | <code>string</code> | [List] s3-object-lambda:ListBucket. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.ListBucketMultipartUploads">ListBucketMultipartUploads</a></code> | <code>string</code> | [List] s3-object-lambda:ListBucketMultipartUploads. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.ListBucketVersions">ListBucketVersions</a></code> | <code>string</code> | [List] s3-object-lambda:ListBucketVersions. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.ListMultipartUploadParts">ListMultipartUploadParts</a></code> | <code>string</code> | [List] s3-object-lambda:ListMultipartUploadParts. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.PutObject">PutObject</a></code> | <code>string</code> | [Write] s3-object-lambda:PutObject. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.PutObjectAcl">PutObjectAcl</a></code> | <code>string</code> | [PermissionManagement] s3-object-lambda:PutObjectAcl. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.PutObjectLegalHold">PutObjectLegalHold</a></code> | <code>string</code> | [Write] s3-object-lambda:PutObjectLegalHold. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.PutObjectRetention">PutObjectRetention</a></code> | <code>string</code> | [Write] s3-object-lambda:PutObjectRetention. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.PutObjectTagging">PutObjectTagging</a></code> | <code>string</code> | [Tagging] s3-object-lambda:PutObjectTagging. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.PutObjectVersionAcl">PutObjectVersionAcl</a></code> | <code>string</code> | [PermissionManagement] s3-object-lambda:PutObjectVersionAcl. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.PutObjectVersionTagging">PutObjectVersionTagging</a></code> | <code>string</code> | [Tagging] s3-object-lambda:PutObjectVersionTagging. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.RestoreObject">RestoreObject</a></code> | <code>string</code> | [Write] s3-object-lambda:RestoreObject. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.WriteGetObjectResponse">WriteGetObjectResponse</a></code> | <code>string</code> | [Write] s3-object-lambda:WriteGetObjectResponse. |

---

##### `AbortMultipartUpload`<sup>Required</sup> <a name="AbortMultipartUpload" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.AbortMultipartUpload"></a>

```typescript
public readonly AbortMultipartUpload: string;
```

- *Type:* string

[Write] s3-object-lambda:AbortMultipartUpload.

---

##### `actionGetObject`<sup>Required</sup> <a name="actionGetObject" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.actionGetObject"></a>

```typescript
public readonly actionGetObject: string;
```

- *Type:* string

[Read] s3-object-lambda:GetObject.

---

##### `actionGetObjectAcl`<sup>Required</sup> <a name="actionGetObjectAcl" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.actionGetObjectAcl"></a>

```typescript
public readonly actionGetObjectAcl: string;
```

- *Type:* string

[Read] s3-object-lambda:GetObjectAcl.

---

##### `actionGetObjectLegalHold`<sup>Required</sup> <a name="actionGetObjectLegalHold" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.actionGetObjectLegalHold"></a>

```typescript
public readonly actionGetObjectLegalHold: string;
```

- *Type:* string

[Read] s3-object-lambda:GetObjectLegalHold.

---

##### `actionGetObjectRetention`<sup>Required</sup> <a name="actionGetObjectRetention" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.actionGetObjectRetention"></a>

```typescript
public readonly actionGetObjectRetention: string;
```

- *Type:* string

[Read] s3-object-lambda:GetObjectRetention.

---

##### `actionGetObjectTagging`<sup>Required</sup> <a name="actionGetObjectTagging" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.actionGetObjectTagging"></a>

```typescript
public readonly actionGetObjectTagging: string;
```

- *Type:* string

[Read] s3-object-lambda:GetObjectTagging.

---

##### `actionGetObjectVersion`<sup>Required</sup> <a name="actionGetObjectVersion" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.actionGetObjectVersion"></a>

```typescript
public readonly actionGetObjectVersion: string;
```

- *Type:* string

[Read] s3-object-lambda:GetObjectVersion.

---

##### `actionGetObjectVersionAcl`<sup>Required</sup> <a name="actionGetObjectVersionAcl" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.actionGetObjectVersionAcl"></a>

```typescript
public readonly actionGetObjectVersionAcl: string;
```

- *Type:* string

[Read] s3-object-lambda:GetObjectVersionAcl.

---

##### `actionGetObjectVersionTagging`<sup>Required</sup> <a name="actionGetObjectVersionTagging" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.actionGetObjectVersionTagging"></a>

```typescript
public readonly actionGetObjectVersionTagging: string;
```

- *Type:* string

[Read] s3-object-lambda:GetObjectVersionTagging.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `DeleteObject`<sup>Required</sup> <a name="DeleteObject" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.DeleteObject"></a>

```typescript
public readonly DeleteObject: string;
```

- *Type:* string

[Write] s3-object-lambda:DeleteObject.

---

##### `DeleteObjectTagging`<sup>Required</sup> <a name="DeleteObjectTagging" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.DeleteObjectTagging"></a>

```typescript
public readonly DeleteObjectTagging: string;
```

- *Type:* string

[Tagging] s3-object-lambda:DeleteObjectTagging.

---

##### `DeleteObjectVersion`<sup>Required</sup> <a name="DeleteObjectVersion" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.DeleteObjectVersion"></a>

```typescript
public readonly DeleteObjectVersion: string;
```

- *Type:* string

[Write] s3-object-lambda:DeleteObjectVersion.

---

##### `DeleteObjectVersionTagging`<sup>Required</sup> <a name="DeleteObjectVersionTagging" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.DeleteObjectVersionTagging"></a>

```typescript
public readonly DeleteObjectVersionTagging: string;
```

- *Type:* string

[Tagging] s3-object-lambda:DeleteObjectVersionTagging.

---

##### `ListBucket`<sup>Required</sup> <a name="ListBucket" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.ListBucket"></a>

```typescript
public readonly ListBucket: string;
```

- *Type:* string

[List] s3-object-lambda:ListBucket.

---

##### `ListBucketMultipartUploads`<sup>Required</sup> <a name="ListBucketMultipartUploads" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.ListBucketMultipartUploads"></a>

```typescript
public readonly ListBucketMultipartUploads: string;
```

- *Type:* string

[List] s3-object-lambda:ListBucketMultipartUploads.

---

##### `ListBucketVersions`<sup>Required</sup> <a name="ListBucketVersions" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.ListBucketVersions"></a>

```typescript
public readonly ListBucketVersions: string;
```

- *Type:* string

[List] s3-object-lambda:ListBucketVersions.

---

##### `ListMultipartUploadParts`<sup>Required</sup> <a name="ListMultipartUploadParts" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.ListMultipartUploadParts"></a>

```typescript
public readonly ListMultipartUploadParts: string;
```

- *Type:* string

[List] s3-object-lambda:ListMultipartUploadParts.

---

##### `PutObject`<sup>Required</sup> <a name="PutObject" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.PutObject"></a>

```typescript
public readonly PutObject: string;
```

- *Type:* string

[Write] s3-object-lambda:PutObject.

---

##### `PutObjectAcl`<sup>Required</sup> <a name="PutObjectAcl" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.PutObjectAcl"></a>

```typescript
public readonly PutObjectAcl: string;
```

- *Type:* string

[PermissionManagement] s3-object-lambda:PutObjectAcl.

---

##### `PutObjectLegalHold`<sup>Required</sup> <a name="PutObjectLegalHold" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.PutObjectLegalHold"></a>

```typescript
public readonly PutObjectLegalHold: string;
```

- *Type:* string

[Write] s3-object-lambda:PutObjectLegalHold.

---

##### `PutObjectRetention`<sup>Required</sup> <a name="PutObjectRetention" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.PutObjectRetention"></a>

```typescript
public readonly PutObjectRetention: string;
```

- *Type:* string

[Write] s3-object-lambda:PutObjectRetention.

---

##### `PutObjectTagging`<sup>Required</sup> <a name="PutObjectTagging" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.PutObjectTagging"></a>

```typescript
public readonly PutObjectTagging: string;
```

- *Type:* string

[Tagging] s3-object-lambda:PutObjectTagging.

---

##### `PutObjectVersionAcl`<sup>Required</sup> <a name="PutObjectVersionAcl" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.PutObjectVersionAcl"></a>

```typescript
public readonly PutObjectVersionAcl: string;
```

- *Type:* string

[PermissionManagement] s3-object-lambda:PutObjectVersionAcl.

---

##### `PutObjectVersionTagging`<sup>Required</sup> <a name="PutObjectVersionTagging" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.PutObjectVersionTagging"></a>

```typescript
public readonly PutObjectVersionTagging: string;
```

- *Type:* string

[Tagging] s3-object-lambda:PutObjectVersionTagging.

---

##### `RestoreObject`<sup>Required</sup> <a name="RestoreObject" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.RestoreObject"></a>

```typescript
public readonly RestoreObject: string;
```

- *Type:* string

[Write] s3-object-lambda:RestoreObject.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `WriteGetObjectResponse`<sup>Required</sup> <a name="WriteGetObjectResponse" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaActions.property.WriteGetObjectResponse"></a>

```typescript
public readonly WriteGetObjectResponse: string;
```

- *Type:* string

[Write] s3-object-lambda:WriteGetObjectResponse.

---

### S3ObjectLambdaConditions <a name="S3ObjectLambdaConditions" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions"></a>

Condition key constants and builders for s3-object-lambda.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.Initializer"></a>

```typescript
import { s3_object_lambda } from '@cdk_utils/iam'

new s3_object_lambda.S3ObjectLambdaConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.authType">authType</a></code> | Generates a condition block for `s3-object-lambda:authType`. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.signatureAge">signatureAge</a></code> | Generates a condition block for `s3-object-lambda:signatureAge`. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.tlsVersion">tlsVersion</a></code> | Generates a condition block for `s3-object-lambda:TlsVersion`. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.versionid">versionid</a></code> | Generates a condition block for `s3-object-lambda:versionid`. |

---

##### `authType` <a name="authType" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.authType"></a>

```typescript
import { s3_object_lambda } from '@cdk_utils/iam'

s3_object_lambda.S3ObjectLambdaConditions.authType(value: string)
```

Generates a condition block for `s3-object-lambda:authType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.authType.parameter.value"></a>

- *Type:* string

---

##### `signatureAge` <a name="signatureAge" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.signatureAge"></a>

```typescript
import { s3_object_lambda } from '@cdk_utils/iam'

s3_object_lambda.S3ObjectLambdaConditions.signatureAge(value: number)
```

Generates a condition block for `s3-object-lambda:signatureAge`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.signatureAge.parameter.value"></a>

- *Type:* number

---

##### `tlsVersion` <a name="tlsVersion" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.tlsVersion"></a>

```typescript
import { s3_object_lambda } from '@cdk_utils/iam'

s3_object_lambda.S3ObjectLambdaConditions.tlsVersion(value: number)
```

Generates a condition block for `s3-object-lambda:TlsVersion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.tlsVersion.parameter.value"></a>

- *Type:* number

---

##### `versionid` <a name="versionid" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.versionid"></a>

```typescript
import { s3_object_lambda } from '@cdk_utils/iam'

s3_object_lambda.S3ObjectLambdaConditions.versionid(value: string)
```

Generates a condition block for `s3-object-lambda:versionid`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.versionid.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.AbortMultipartUploadConditionKeys">AbortMultipartUploadConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AbortMultipartUpload action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.actionGetObjectAclConditionKeys">actionGetObjectAclConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetObjectAcl action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.actionGetObjectConditionKeys">actionGetObjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetObject action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.actionGetObjectLegalHoldConditionKeys">actionGetObjectLegalHoldConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetObjectLegalHold action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.actionGetObjectRetentionConditionKeys">actionGetObjectRetentionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetObjectRetention action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.actionGetObjectTaggingConditionKeys">actionGetObjectTaggingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetObjectTagging action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.actionGetObjectVersionAclConditionKeys">actionGetObjectVersionAclConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetObjectVersionAcl action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.actionGetObjectVersionConditionKeys">actionGetObjectVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetObjectVersion action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.actionGetObjectVersionTaggingConditionKeys">actionGetObjectVersionTaggingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetObjectVersionTagging action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.AUTH_TYPE">AUTH_TYPE</a></code> | <code>string</code> | Condition key: s3-object-lambda:authType (String). |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.DeleteObjectConditionKeys">DeleteObjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteObject action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.DeleteObjectTaggingConditionKeys">DeleteObjectTaggingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteObjectTagging action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.DeleteObjectVersionConditionKeys">DeleteObjectVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteObjectVersion action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.DeleteObjectVersionTaggingConditionKeys">DeleteObjectVersionTaggingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteObjectVersionTagging action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.ListBucketConditionKeys">ListBucketConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListBucket action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.ListBucketMultipartUploadsConditionKeys">ListBucketMultipartUploadsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListBucketMultipartUploads action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.ListBucketVersionsConditionKeys">ListBucketVersionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListBucketVersions action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.ListMultipartUploadPartsConditionKeys">ListMultipartUploadPartsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListMultipartUploadParts action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.PutObjectAclConditionKeys">PutObjectAclConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutObjectAcl action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.PutObjectConditionKeys">PutObjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutObject action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.PutObjectLegalHoldConditionKeys">PutObjectLegalHoldConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutObjectLegalHold action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.PutObjectRetentionConditionKeys">PutObjectRetentionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutObjectRetention action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.PutObjectTaggingConditionKeys">PutObjectTaggingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutObjectTagging action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.PutObjectVersionAclConditionKeys">PutObjectVersionAclConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutObjectVersionAcl action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.PutObjectVersionTaggingConditionKeys">PutObjectVersionTaggingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutObjectVersionTagging action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.RestoreObjectConditionKeys">RestoreObjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RestoreObject action. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.SIGNATURE_AGE">SIGNATURE_AGE</a></code> | <code>string</code> | Condition key: s3-object-lambda:signatureAge (Numeric). |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.TLS_VERSION">TLS_VERSION</a></code> | <code>string</code> | Condition key: s3-object-lambda:TlsVersion (Numeric). |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.VERSIONID">VERSIONID</a></code> | <code>string</code> | Condition key: s3-object-lambda:versionid (String). |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.WriteGetObjectResponseConditionKeys">WriteGetObjectResponseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the WriteGetObjectResponse action. |

---

##### `AbortMultipartUploadConditionKeys`<sup>Required</sup> <a name="AbortMultipartUploadConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.AbortMultipartUploadConditionKeys"></a>

```typescript
public readonly AbortMultipartUploadConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AbortMultipartUpload action.

---

##### `actionGetObjectAclConditionKeys`<sup>Required</sup> <a name="actionGetObjectAclConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.actionGetObjectAclConditionKeys"></a>

```typescript
public readonly actionGetObjectAclConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetObjectAcl action.

---

##### `actionGetObjectConditionKeys`<sup>Required</sup> <a name="actionGetObjectConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.actionGetObjectConditionKeys"></a>

```typescript
public readonly actionGetObjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetObject action.

---

##### `actionGetObjectLegalHoldConditionKeys`<sup>Required</sup> <a name="actionGetObjectLegalHoldConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.actionGetObjectLegalHoldConditionKeys"></a>

```typescript
public readonly actionGetObjectLegalHoldConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetObjectLegalHold action.

---

##### `actionGetObjectRetentionConditionKeys`<sup>Required</sup> <a name="actionGetObjectRetentionConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.actionGetObjectRetentionConditionKeys"></a>

```typescript
public readonly actionGetObjectRetentionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetObjectRetention action.

---

##### `actionGetObjectTaggingConditionKeys`<sup>Required</sup> <a name="actionGetObjectTaggingConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.actionGetObjectTaggingConditionKeys"></a>

```typescript
public readonly actionGetObjectTaggingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetObjectTagging action.

---

##### `actionGetObjectVersionAclConditionKeys`<sup>Required</sup> <a name="actionGetObjectVersionAclConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.actionGetObjectVersionAclConditionKeys"></a>

```typescript
public readonly actionGetObjectVersionAclConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetObjectVersionAcl action.

---

##### `actionGetObjectVersionConditionKeys`<sup>Required</sup> <a name="actionGetObjectVersionConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.actionGetObjectVersionConditionKeys"></a>

```typescript
public readonly actionGetObjectVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetObjectVersion action.

---

##### `actionGetObjectVersionTaggingConditionKeys`<sup>Required</sup> <a name="actionGetObjectVersionTaggingConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.actionGetObjectVersionTaggingConditionKeys"></a>

```typescript
public readonly actionGetObjectVersionTaggingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetObjectVersionTagging action.

---

##### `AUTH_TYPE`<sup>Required</sup> <a name="AUTH_TYPE" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.AUTH_TYPE"></a>

```typescript
public readonly AUTH_TYPE: string;
```

- *Type:* string

Condition key: s3-object-lambda:authType (String).

---

##### `DeleteObjectConditionKeys`<sup>Required</sup> <a name="DeleteObjectConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.DeleteObjectConditionKeys"></a>

```typescript
public readonly DeleteObjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteObject action.

---

##### `DeleteObjectTaggingConditionKeys`<sup>Required</sup> <a name="DeleteObjectTaggingConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.DeleteObjectTaggingConditionKeys"></a>

```typescript
public readonly DeleteObjectTaggingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteObjectTagging action.

---

##### `DeleteObjectVersionConditionKeys`<sup>Required</sup> <a name="DeleteObjectVersionConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.DeleteObjectVersionConditionKeys"></a>

```typescript
public readonly DeleteObjectVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteObjectVersion action.

---

##### `DeleteObjectVersionTaggingConditionKeys`<sup>Required</sup> <a name="DeleteObjectVersionTaggingConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.DeleteObjectVersionTaggingConditionKeys"></a>

```typescript
public readonly DeleteObjectVersionTaggingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteObjectVersionTagging action.

---

##### `ListBucketConditionKeys`<sup>Required</sup> <a name="ListBucketConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.ListBucketConditionKeys"></a>

```typescript
public readonly ListBucketConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListBucket action.

---

##### `ListBucketMultipartUploadsConditionKeys`<sup>Required</sup> <a name="ListBucketMultipartUploadsConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.ListBucketMultipartUploadsConditionKeys"></a>

```typescript
public readonly ListBucketMultipartUploadsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListBucketMultipartUploads action.

---

##### `ListBucketVersionsConditionKeys`<sup>Required</sup> <a name="ListBucketVersionsConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.ListBucketVersionsConditionKeys"></a>

```typescript
public readonly ListBucketVersionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListBucketVersions action.

---

##### `ListMultipartUploadPartsConditionKeys`<sup>Required</sup> <a name="ListMultipartUploadPartsConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.ListMultipartUploadPartsConditionKeys"></a>

```typescript
public readonly ListMultipartUploadPartsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListMultipartUploadParts action.

---

##### `PutObjectAclConditionKeys`<sup>Required</sup> <a name="PutObjectAclConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.PutObjectAclConditionKeys"></a>

```typescript
public readonly PutObjectAclConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutObjectAcl action.

---

##### `PutObjectConditionKeys`<sup>Required</sup> <a name="PutObjectConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.PutObjectConditionKeys"></a>

```typescript
public readonly PutObjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutObject action.

---

##### `PutObjectLegalHoldConditionKeys`<sup>Required</sup> <a name="PutObjectLegalHoldConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.PutObjectLegalHoldConditionKeys"></a>

```typescript
public readonly PutObjectLegalHoldConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutObjectLegalHold action.

---

##### `PutObjectRetentionConditionKeys`<sup>Required</sup> <a name="PutObjectRetentionConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.PutObjectRetentionConditionKeys"></a>

```typescript
public readonly PutObjectRetentionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutObjectRetention action.

---

##### `PutObjectTaggingConditionKeys`<sup>Required</sup> <a name="PutObjectTaggingConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.PutObjectTaggingConditionKeys"></a>

```typescript
public readonly PutObjectTaggingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutObjectTagging action.

---

##### `PutObjectVersionAclConditionKeys`<sup>Required</sup> <a name="PutObjectVersionAclConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.PutObjectVersionAclConditionKeys"></a>

```typescript
public readonly PutObjectVersionAclConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutObjectVersionAcl action.

---

##### `PutObjectVersionTaggingConditionKeys`<sup>Required</sup> <a name="PutObjectVersionTaggingConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.PutObjectVersionTaggingConditionKeys"></a>

```typescript
public readonly PutObjectVersionTaggingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutObjectVersionTagging action.

---

##### `RestoreObjectConditionKeys`<sup>Required</sup> <a name="RestoreObjectConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.RestoreObjectConditionKeys"></a>

```typescript
public readonly RestoreObjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RestoreObject action.

---

##### `SIGNATURE_AGE`<sup>Required</sup> <a name="SIGNATURE_AGE" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.SIGNATURE_AGE"></a>

```typescript
public readonly SIGNATURE_AGE: string;
```

- *Type:* string

Condition key: s3-object-lambda:signatureAge (Numeric).

---

##### `TLS_VERSION`<sup>Required</sup> <a name="TLS_VERSION" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.TLS_VERSION"></a>

```typescript
public readonly TLS_VERSION: string;
```

- *Type:* string

Condition key: s3-object-lambda:TlsVersion (Numeric).

---

##### `VERSIONID`<sup>Required</sup> <a name="VERSIONID" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.VERSIONID"></a>

```typescript
public readonly VERSIONID: string;
```

- *Type:* string

Condition key: s3-object-lambda:versionid (String).

---

##### `WriteGetObjectResponseConditionKeys`<sup>Required</sup> <a name="WriteGetObjectResponseConditionKeys" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaConditions.property.WriteGetObjectResponseConditionKeys"></a>

```typescript
public readonly WriteGetObjectResponseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the WriteGetObjectResponse action.

---

### S3ObjectLambdaResources <a name="S3ObjectLambdaResources" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaResources"></a>

ARN builders, validators, and parsers for s3-object-lambda resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaResources.Initializer"></a>

```typescript
import { s3_object_lambda } from '@cdk_utils/iam'

new s3_object_lambda.S3ObjectLambdaResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaResources.isValidObjectlambdaaccesspointArn">isValidObjectlambdaaccesspointArn</a></code> | Validates whether a string is a valid ARN for the objectlambdaaccesspoint resource. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaResources.objectlambdaaccesspoint">objectlambdaaccesspoint</a></code> | Builds an ARN for the objectlambdaaccesspoint resource. |
| <code><a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaResources.parseObjectlambdaaccesspointArn">parseObjectlambdaaccesspointArn</a></code> | Parses a objectlambdaaccesspoint ARN into its components. |

---

##### `isValidObjectlambdaaccesspointArn` <a name="isValidObjectlambdaaccesspointArn" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaResources.isValidObjectlambdaaccesspointArn"></a>

```typescript
import { s3_object_lambda } from '@cdk_utils/iam'

s3_object_lambda.S3ObjectLambdaResources.isValidObjectlambdaaccesspointArn(arn: string)
```

Validates whether a string is a valid ARN for the objectlambdaaccesspoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaResources.isValidObjectlambdaaccesspointArn.parameter.arn"></a>

- *Type:* string

---

##### `objectlambdaaccesspoint` <a name="objectlambdaaccesspoint" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaResources.objectlambdaaccesspoint"></a>

```typescript
import { s3_object_lambda } from '@cdk_utils/iam'

s3_object_lambda.S3ObjectLambdaResources.objectlambdaaccesspoint(props: S3ObjectLambdaObjectlambdaaccesspointArnProps)
```

Builds an ARN for the objectlambdaaccesspoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaResources.objectlambdaaccesspoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaObjectlambdaaccesspointArnProps">S3ObjectLambdaObjectlambdaaccesspointArnProps</a>

---

##### `parseObjectlambdaaccesspointArn` <a name="parseObjectlambdaaccesspointArn" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaResources.parseObjectlambdaaccesspointArn"></a>

```typescript
import { s3_object_lambda } from '@cdk_utils/iam'

s3_object_lambda.S3ObjectLambdaResources.parseObjectlambdaaccesspointArn(arn: string)
```

Parses a objectlambdaaccesspoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3_object_lambda.S3ObjectLambdaResources.parseObjectlambdaaccesspointArn.parameter.arn"></a>

- *Type:* string

---




