# `s3express` Submodule <a name="`s3express` Submodule" id="@cdk_utils/iam.s3express"></a>


## Structs <a name="Structs" id="Structs"></a>

### S3expressAccesspointArnComponents <a name="S3expressAccesspointArnComponents" id="@cdk_utils/iam.s3express.S3expressAccesspointArnComponents"></a>

Parsed components of a accesspoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3express.S3expressAccesspointArnComponents.Initializer"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

const s3expressAccesspointArnComponents: s3express.S3expressAccesspointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3express.S3expressAccesspointArnComponents.property.accessPointName">accessPointName</a></code> | <code>string</code> | The AccessPointName component. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressAccesspointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressAccesspointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressAccesspointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessPointName`<sup>Required</sup> <a name="accessPointName" id="@cdk_utils/iam.s3express.S3expressAccesspointArnComponents.property.accessPointName"></a>

```typescript
public readonly accessPointName: string;
```

- *Type:* string

The AccessPointName component.

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.s3express.S3expressAccesspointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.s3express.S3expressAccesspointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.s3express.S3expressAccesspointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### S3expressAccesspointArnProps <a name="S3expressAccesspointArnProps" id="@cdk_utils/iam.s3express.S3expressAccesspointArnProps"></a>

Properties for building a accesspoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3express.S3expressAccesspointArnProps.Initializer"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

const s3expressAccesspointArnProps: s3express.S3expressAccesspointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3express.S3expressAccesspointArnProps.property.accessPointName">accessPointName</a></code> | <code>string</code> | The AccessPointName component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressAccesspointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressAccesspointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressAccesspointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessPointName`<sup>Required</sup> <a name="accessPointName" id="@cdk_utils/iam.s3express.S3expressAccesspointArnProps.property.accessPointName"></a>

```typescript
public readonly accessPointName: string;
```

- *Type:* string

The AccessPointName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.s3express.S3expressAccesspointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.s3express.S3expressAccesspointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.s3express.S3expressAccesspointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### S3expressBucketArnComponents <a name="S3expressBucketArnComponents" id="@cdk_utils/iam.s3express.S3expressBucketArnComponents"></a>

Parsed components of a bucket ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3express.S3expressBucketArnComponents.Initializer"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

const s3expressBucketArnComponents: s3express.S3expressBucketArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3express.S3expressBucketArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressBucketArnComponents.property.bucketName">bucketName</a></code> | <code>string</code> | The BucketName component. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressBucketArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressBucketArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.s3express.S3expressBucketArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdk_utils/iam.s3express.S3expressBucketArnComponents.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The BucketName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.s3express.S3expressBucketArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.s3express.S3expressBucketArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### S3expressBucketArnProps <a name="S3expressBucketArnProps" id="@cdk_utils/iam.s3express.S3expressBucketArnProps"></a>

Properties for building a bucket ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3express.S3expressBucketArnProps.Initializer"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

const s3expressBucketArnProps: s3express.S3expressBucketArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3express.S3expressBucketArnProps.property.bucketName">bucketName</a></code> | <code>string</code> | The BucketName component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressBucketArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressBucketArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressBucketArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdk_utils/iam.s3express.S3expressBucketArnProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The BucketName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.s3express.S3expressBucketArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.s3express.S3expressBucketArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.s3express.S3expressBucketArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### S3expressActions <a name="S3expressActions" id="@cdk_utils/iam.s3express.S3expressActions"></a>

IAM action constants for the s3express service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3express.S3expressActions.Initializer"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

new s3express.S3expressActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.actionGetAccessPoint">actionGetAccessPoint</a></code> | <code>string</code> | [Read] s3express:GetAccessPoint. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.actionGetAccessPointPolicy">actionGetAccessPointPolicy</a></code> | <code>string</code> | [Read] s3express:GetAccessPointPolicy. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.actionGetAccessPointScope">actionGetAccessPointScope</a></code> | <code>string</code> | [Read] s3express:GetAccessPointScope. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.actionGetBucketPolicy">actionGetBucketPolicy</a></code> | <code>string</code> | [Read] s3express:GetBucketPolicy. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.actionGetEncryptionConfiguration">actionGetEncryptionConfiguration</a></code> | <code>string</code> | [Read] s3express:GetEncryptionConfiguration. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.actionGetInventoryConfiguration">actionGetInventoryConfiguration</a></code> | <code>string</code> | [Read] s3express:GetInventoryConfiguration. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.actionGetLifecycleConfiguration">actionGetLifecycleConfiguration</a></code> | <code>string</code> | [Read] s3express:GetLifecycleConfiguration. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.actionGetMetricsConfiguration">actionGetMetricsConfiguration</a></code> | <code>string</code> | [Read] s3express:GetMetricsConfiguration. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.CreateAccessPoint">CreateAccessPoint</a></code> | <code>string</code> | [Write] s3express:CreateAccessPoint. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.CreateBucket">CreateBucket</a></code> | <code>string</code> | [Write] s3express:CreateBucket. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.CreateSession">CreateSession</a></code> | <code>string</code> | [Write] s3express:CreateSession. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.DeleteAccessPoint">DeleteAccessPoint</a></code> | <code>string</code> | [Write] s3express:DeleteAccessPoint. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.DeleteAccessPointPolicy">DeleteAccessPointPolicy</a></code> | <code>string</code> | [PermissionManagement] s3express:DeleteAccessPointPolicy. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.DeleteAccessPointScope">DeleteAccessPointScope</a></code> | <code>string</code> | [PermissionManagement] s3express:DeleteAccessPointScope. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.DeleteBucket">DeleteBucket</a></code> | <code>string</code> | [Write] s3express:DeleteBucket. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.DeleteBucketPolicy">DeleteBucketPolicy</a></code> | <code>string</code> | [PermissionManagement] s3express:DeleteBucketPolicy. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.ListAccessPointsForDirectoryBuckets">ListAccessPointsForDirectoryBuckets</a></code> | <code>string</code> | [List] s3express:ListAccessPointsForDirectoryBuckets. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.ListAllMyDirectoryBuckets">ListAllMyDirectoryBuckets</a></code> | <code>string</code> | [List] s3express:ListAllMyDirectoryBuckets. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] s3express:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.PutAccessPointPolicy">PutAccessPointPolicy</a></code> | <code>string</code> | [PermissionManagement] s3express:PutAccessPointPolicy. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.PutAccessPointScope">PutAccessPointScope</a></code> | <code>string</code> | [PermissionManagement] s3express:PutAccessPointScope. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.PutBucketPolicy">PutBucketPolicy</a></code> | <code>string</code> | [PermissionManagement] s3express:PutBucketPolicy. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.PutEncryptionConfiguration">PutEncryptionConfiguration</a></code> | <code>string</code> | [Write] s3express:PutEncryptionConfiguration. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.PutInventoryConfiguration">PutInventoryConfiguration</a></code> | <code>string</code> | [Write] s3express:PutInventoryConfiguration. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.PutLifecycleConfiguration">PutLifecycleConfiguration</a></code> | <code>string</code> | [Write] s3express:PutLifecycleConfiguration. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.PutMetricsConfiguration">PutMetricsConfiguration</a></code> | <code>string</code> | [Write] s3express:PutMetricsConfiguration. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] s3express:TagResource. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] s3express:UntagResource. |

---

##### `actionGetAccessPoint`<sup>Required</sup> <a name="actionGetAccessPoint" id="@cdk_utils/iam.s3express.S3expressActions.property.actionGetAccessPoint"></a>

```typescript
public readonly actionGetAccessPoint: string;
```

- *Type:* string

[Read] s3express:GetAccessPoint.

---

##### `actionGetAccessPointPolicy`<sup>Required</sup> <a name="actionGetAccessPointPolicy" id="@cdk_utils/iam.s3express.S3expressActions.property.actionGetAccessPointPolicy"></a>

```typescript
public readonly actionGetAccessPointPolicy: string;
```

- *Type:* string

[Read] s3express:GetAccessPointPolicy.

---

##### `actionGetAccessPointScope`<sup>Required</sup> <a name="actionGetAccessPointScope" id="@cdk_utils/iam.s3express.S3expressActions.property.actionGetAccessPointScope"></a>

```typescript
public readonly actionGetAccessPointScope: string;
```

- *Type:* string

[Read] s3express:GetAccessPointScope.

---

##### `actionGetBucketPolicy`<sup>Required</sup> <a name="actionGetBucketPolicy" id="@cdk_utils/iam.s3express.S3expressActions.property.actionGetBucketPolicy"></a>

```typescript
public readonly actionGetBucketPolicy: string;
```

- *Type:* string

[Read] s3express:GetBucketPolicy.

---

##### `actionGetEncryptionConfiguration`<sup>Required</sup> <a name="actionGetEncryptionConfiguration" id="@cdk_utils/iam.s3express.S3expressActions.property.actionGetEncryptionConfiguration"></a>

```typescript
public readonly actionGetEncryptionConfiguration: string;
```

- *Type:* string

[Read] s3express:GetEncryptionConfiguration.

---

##### `actionGetInventoryConfiguration`<sup>Required</sup> <a name="actionGetInventoryConfiguration" id="@cdk_utils/iam.s3express.S3expressActions.property.actionGetInventoryConfiguration"></a>

```typescript
public readonly actionGetInventoryConfiguration: string;
```

- *Type:* string

[Read] s3express:GetInventoryConfiguration.

---

##### `actionGetLifecycleConfiguration`<sup>Required</sup> <a name="actionGetLifecycleConfiguration" id="@cdk_utils/iam.s3express.S3expressActions.property.actionGetLifecycleConfiguration"></a>

```typescript
public readonly actionGetLifecycleConfiguration: string;
```

- *Type:* string

[Read] s3express:GetLifecycleConfiguration.

---

##### `actionGetMetricsConfiguration`<sup>Required</sup> <a name="actionGetMetricsConfiguration" id="@cdk_utils/iam.s3express.S3expressActions.property.actionGetMetricsConfiguration"></a>

```typescript
public readonly actionGetMetricsConfiguration: string;
```

- *Type:* string

[Read] s3express:GetMetricsConfiguration.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.s3express.S3expressActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.s3express.S3expressActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.s3express.S3expressActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.s3express.S3expressActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.s3express.S3expressActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateAccessPoint`<sup>Required</sup> <a name="CreateAccessPoint" id="@cdk_utils/iam.s3express.S3expressActions.property.CreateAccessPoint"></a>

```typescript
public readonly CreateAccessPoint: string;
```

- *Type:* string

[Write] s3express:CreateAccessPoint.

---

##### `CreateBucket`<sup>Required</sup> <a name="CreateBucket" id="@cdk_utils/iam.s3express.S3expressActions.property.CreateBucket"></a>

```typescript
public readonly CreateBucket: string;
```

- *Type:* string

[Write] s3express:CreateBucket.

---

##### `CreateSession`<sup>Required</sup> <a name="CreateSession" id="@cdk_utils/iam.s3express.S3expressActions.property.CreateSession"></a>

```typescript
public readonly CreateSession: string;
```

- *Type:* string

[Write] s3express:CreateSession.

---

##### `DeleteAccessPoint`<sup>Required</sup> <a name="DeleteAccessPoint" id="@cdk_utils/iam.s3express.S3expressActions.property.DeleteAccessPoint"></a>

```typescript
public readonly DeleteAccessPoint: string;
```

- *Type:* string

[Write] s3express:DeleteAccessPoint.

---

##### `DeleteAccessPointPolicy`<sup>Required</sup> <a name="DeleteAccessPointPolicy" id="@cdk_utils/iam.s3express.S3expressActions.property.DeleteAccessPointPolicy"></a>

```typescript
public readonly DeleteAccessPointPolicy: string;
```

- *Type:* string

[PermissionManagement] s3express:DeleteAccessPointPolicy.

---

##### `DeleteAccessPointScope`<sup>Required</sup> <a name="DeleteAccessPointScope" id="@cdk_utils/iam.s3express.S3expressActions.property.DeleteAccessPointScope"></a>

```typescript
public readonly DeleteAccessPointScope: string;
```

- *Type:* string

[PermissionManagement] s3express:DeleteAccessPointScope.

---

##### `DeleteBucket`<sup>Required</sup> <a name="DeleteBucket" id="@cdk_utils/iam.s3express.S3expressActions.property.DeleteBucket"></a>

```typescript
public readonly DeleteBucket: string;
```

- *Type:* string

[Write] s3express:DeleteBucket.

---

##### `DeleteBucketPolicy`<sup>Required</sup> <a name="DeleteBucketPolicy" id="@cdk_utils/iam.s3express.S3expressActions.property.DeleteBucketPolicy"></a>

```typescript
public readonly DeleteBucketPolicy: string;
```

- *Type:* string

[PermissionManagement] s3express:DeleteBucketPolicy.

---

##### `ListAccessPointsForDirectoryBuckets`<sup>Required</sup> <a name="ListAccessPointsForDirectoryBuckets" id="@cdk_utils/iam.s3express.S3expressActions.property.ListAccessPointsForDirectoryBuckets"></a>

```typescript
public readonly ListAccessPointsForDirectoryBuckets: string;
```

- *Type:* string

[List] s3express:ListAccessPointsForDirectoryBuckets.

---

##### `ListAllMyDirectoryBuckets`<sup>Required</sup> <a name="ListAllMyDirectoryBuckets" id="@cdk_utils/iam.s3express.S3expressActions.property.ListAllMyDirectoryBuckets"></a>

```typescript
public readonly ListAllMyDirectoryBuckets: string;
```

- *Type:* string

[List] s3express:ListAllMyDirectoryBuckets.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.s3express.S3expressActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] s3express:ListTagsForResource.

---

##### `PutAccessPointPolicy`<sup>Required</sup> <a name="PutAccessPointPolicy" id="@cdk_utils/iam.s3express.S3expressActions.property.PutAccessPointPolicy"></a>

```typescript
public readonly PutAccessPointPolicy: string;
```

- *Type:* string

[PermissionManagement] s3express:PutAccessPointPolicy.

---

##### `PutAccessPointScope`<sup>Required</sup> <a name="PutAccessPointScope" id="@cdk_utils/iam.s3express.S3expressActions.property.PutAccessPointScope"></a>

```typescript
public readonly PutAccessPointScope: string;
```

- *Type:* string

[PermissionManagement] s3express:PutAccessPointScope.

---

##### `PutBucketPolicy`<sup>Required</sup> <a name="PutBucketPolicy" id="@cdk_utils/iam.s3express.S3expressActions.property.PutBucketPolicy"></a>

```typescript
public readonly PutBucketPolicy: string;
```

- *Type:* string

[PermissionManagement] s3express:PutBucketPolicy.

---

##### `PutEncryptionConfiguration`<sup>Required</sup> <a name="PutEncryptionConfiguration" id="@cdk_utils/iam.s3express.S3expressActions.property.PutEncryptionConfiguration"></a>

```typescript
public readonly PutEncryptionConfiguration: string;
```

- *Type:* string

[Write] s3express:PutEncryptionConfiguration.

---

##### `PutInventoryConfiguration`<sup>Required</sup> <a name="PutInventoryConfiguration" id="@cdk_utils/iam.s3express.S3expressActions.property.PutInventoryConfiguration"></a>

```typescript
public readonly PutInventoryConfiguration: string;
```

- *Type:* string

[Write] s3express:PutInventoryConfiguration.

---

##### `PutLifecycleConfiguration`<sup>Required</sup> <a name="PutLifecycleConfiguration" id="@cdk_utils/iam.s3express.S3expressActions.property.PutLifecycleConfiguration"></a>

```typescript
public readonly PutLifecycleConfiguration: string;
```

- *Type:* string

[Write] s3express:PutLifecycleConfiguration.

---

##### `PutMetricsConfiguration`<sup>Required</sup> <a name="PutMetricsConfiguration" id="@cdk_utils/iam.s3express.S3expressActions.property.PutMetricsConfiguration"></a>

```typescript
public readonly PutMetricsConfiguration: string;
```

- *Type:* string

[Write] s3express:PutMetricsConfiguration.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.s3express.S3expressActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.s3express.S3expressActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] s3express:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.s3express.S3expressActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] s3express:UntagResource.

---

### S3expressConditions <a name="S3expressConditions" id="@cdk_utils/iam.s3express.S3expressConditions"></a>

Condition key constants and builders for s3express.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3express.S3expressConditions.Initializer"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

new s3express.S3expressConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.accessPointNetworkOrigin">accessPointNetworkOrigin</a></code> | Generates a condition block for `s3express:AccessPointNetworkOrigin`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.accessPointTag">accessPointTag</a></code> | Generates a condition block for `s3express:AccessPointTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.allAccessRestrictedToLocalZoneGroup">allAccessRestrictedToLocalZoneGroup</a></code> | Generates a condition block for `s3express:AllAccessRestrictedToLocalZoneGroup`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.authType">authType</a></code> | Generates a condition block for `s3express:authType`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.bucketTag">bucketTag</a></code> | Generates a condition block for `s3express:BucketTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.dataAccessPointAccount">dataAccessPointAccount</a></code> | Generates a condition block for `s3express:DataAccessPointAccount`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.dataAccessPointARN">dataAccessPointARN</a></code> | Generates a condition block for `s3express:DataAccessPointArn`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.inventoryAccessibleOptionalFields">inventoryAccessibleOptionalFields</a></code> | Generates a condition block for `s3express:InventoryAccessibleOptionalFields`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.locationName">locationName</a></code> | Generates a condition block for `s3express:LocationName`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.permissions">permissions</a></code> | Generates a condition block for `s3express:Permissions`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.resourceAccount">resourceAccount</a></code> | Generates a condition block for `s3express:ResourceAccount`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.sessionMode">sessionMode</a></code> | Generates a condition block for `s3express:SessionMode`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.signatureAge">signatureAge</a></code> | Generates a condition block for `s3express:signatureAge`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.signatureversion">signatureversion</a></code> | Generates a condition block for `s3express:signatureversion`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.tlsVersion">tlsVersion</a></code> | Generates a condition block for `s3express:TlsVersion`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.xAmzContentSha256">xAmzContentSha256</a></code> | Generates a condition block for `s3express:x-amz-content-sha256`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.xAmzServerSideEncryption">xAmzServerSideEncryption</a></code> | Generates a condition block for `s3express:x-amz-server-side-encryption`. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.xAmzServerSideEncryptionAWSKMSKeyId">xAmzServerSideEncryptionAWSKMSKeyId</a></code> | Generates a condition block for `s3express:x-amz-server-side-encryption-aws-kms-key-id`. |

---

##### `accessPointNetworkOrigin` <a name="accessPointNetworkOrigin" id="@cdk_utils/iam.s3express.S3expressConditions.accessPointNetworkOrigin"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.accessPointNetworkOrigin(value: string)
```

Generates a condition block for `s3express:AccessPointNetworkOrigin`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3express.S3expressConditions.accessPointNetworkOrigin.parameter.value"></a>

- *Type:* string

---

##### `accessPointTag` <a name="accessPointTag" id="@cdk_utils/iam.s3express.S3expressConditions.accessPointTag"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.accessPointTag(value: string)
```

Generates a condition block for `s3express:AccessPointTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3express.S3expressConditions.accessPointTag.parameter.value"></a>

- *Type:* string

---

##### `allAccessRestrictedToLocalZoneGroup` <a name="allAccessRestrictedToLocalZoneGroup" id="@cdk_utils/iam.s3express.S3expressConditions.allAccessRestrictedToLocalZoneGroup"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.allAccessRestrictedToLocalZoneGroup(value: string)
```

Generates a condition block for `s3express:AllAccessRestrictedToLocalZoneGroup`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3express.S3expressConditions.allAccessRestrictedToLocalZoneGroup.parameter.value"></a>

- *Type:* string

---

##### `authType` <a name="authType" id="@cdk_utils/iam.s3express.S3expressConditions.authType"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.authType(value: string)
```

Generates a condition block for `s3express:authType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3express.S3expressConditions.authType.parameter.value"></a>

- *Type:* string

---

##### `bucketTag` <a name="bucketTag" id="@cdk_utils/iam.s3express.S3expressConditions.bucketTag"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.bucketTag(value: string)
```

Generates a condition block for `s3express:BucketTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3express.S3expressConditions.bucketTag.parameter.value"></a>

- *Type:* string

---

##### `dataAccessPointAccount` <a name="dataAccessPointAccount" id="@cdk_utils/iam.s3express.S3expressConditions.dataAccessPointAccount"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.dataAccessPointAccount(value: string)
```

Generates a condition block for `s3express:DataAccessPointAccount`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3express.S3expressConditions.dataAccessPointAccount.parameter.value"></a>

- *Type:* string

---

##### `dataAccessPointARN` <a name="dataAccessPointARN" id="@cdk_utils/iam.s3express.S3expressConditions.dataAccessPointARN"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.dataAccessPointARN(value: string)
```

Generates a condition block for `s3express:DataAccessPointArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3express.S3expressConditions.dataAccessPointARN.parameter.value"></a>

- *Type:* string

---

##### `inventoryAccessibleOptionalFields` <a name="inventoryAccessibleOptionalFields" id="@cdk_utils/iam.s3express.S3expressConditions.inventoryAccessibleOptionalFields"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.inventoryAccessibleOptionalFields(values: string[])
```

Generates a condition block for `s3express:InventoryAccessibleOptionalFields`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.s3express.S3expressConditions.inventoryAccessibleOptionalFields.parameter.values"></a>

- *Type:* string[]

---

##### `locationName` <a name="locationName" id="@cdk_utils/iam.s3express.S3expressConditions.locationName"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.locationName(value: string)
```

Generates a condition block for `s3express:LocationName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3express.S3expressConditions.locationName.parameter.value"></a>

- *Type:* string

---

##### `permissions` <a name="permissions" id="@cdk_utils/iam.s3express.S3expressConditions.permissions"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.permissions(values: string[])
```

Generates a condition block for `s3express:Permissions`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.s3express.S3expressConditions.permissions.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.s3express.S3expressConditions.requestTag"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3express.S3expressConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceAccount` <a name="resourceAccount" id="@cdk_utils/iam.s3express.S3expressConditions.resourceAccount"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.resourceAccount(value: string)
```

Generates a condition block for `s3express:ResourceAccount`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3express.S3expressConditions.resourceAccount.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.s3express.S3expressConditions.resourceTag"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3express.S3expressConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `sessionMode` <a name="sessionMode" id="@cdk_utils/iam.s3express.S3expressConditions.sessionMode"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.sessionMode(value: string)
```

Generates a condition block for `s3express:SessionMode`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3express.S3expressConditions.sessionMode.parameter.value"></a>

- *Type:* string

---

##### `signatureAge` <a name="signatureAge" id="@cdk_utils/iam.s3express.S3expressConditions.signatureAge"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.signatureAge(value: number)
```

Generates a condition block for `s3express:signatureAge`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3express.S3expressConditions.signatureAge.parameter.value"></a>

- *Type:* number

---

##### `signatureversion` <a name="signatureversion" id="@cdk_utils/iam.s3express.S3expressConditions.signatureversion"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.signatureversion(value: string)
```

Generates a condition block for `s3express:signatureversion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3express.S3expressConditions.signatureversion.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.s3express.S3expressConditions.tagKeys"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.s3express.S3expressConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `tlsVersion` <a name="tlsVersion" id="@cdk_utils/iam.s3express.S3expressConditions.tlsVersion"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.tlsVersion(value: number)
```

Generates a condition block for `s3express:TlsVersion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3express.S3expressConditions.tlsVersion.parameter.value"></a>

- *Type:* number

---

##### `xAmzContentSha256` <a name="xAmzContentSha256" id="@cdk_utils/iam.s3express.S3expressConditions.xAmzContentSha256"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.xAmzContentSha256(value: string)
```

Generates a condition block for `s3express:x-amz-content-sha256`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3express.S3expressConditions.xAmzContentSha256.parameter.value"></a>

- *Type:* string

---

##### `xAmzServerSideEncryption` <a name="xAmzServerSideEncryption" id="@cdk_utils/iam.s3express.S3expressConditions.xAmzServerSideEncryption"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.xAmzServerSideEncryption(value: string)
```

Generates a condition block for `s3express:x-amz-server-side-encryption`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3express.S3expressConditions.xAmzServerSideEncryption.parameter.value"></a>

- *Type:* string

---

##### `xAmzServerSideEncryptionAWSKMSKeyId` <a name="xAmzServerSideEncryptionAWSKMSKeyId" id="@cdk_utils/iam.s3express.S3expressConditions.xAmzServerSideEncryptionAWSKMSKeyId"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressConditions.xAmzServerSideEncryptionAWSKMSKeyId(value: string)
```

Generates a condition block for `s3express:x-amz-server-side-encryption-aws-kms-key-id`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3express.S3expressConditions.xAmzServerSideEncryptionAWSKMSKeyId.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.ACCESS_POINT_NETWORK_ORIGIN">ACCESS_POINT_NETWORK_ORIGIN</a></code> | <code>string</code> | Condition key: s3express:AccessPointNetworkOrigin (String). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.ACCESS_POINT_TAG">ACCESS_POINT_TAG</a></code> | <code>string</code> | Condition key: s3express:AccessPointTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.actionGetAccessPointConditionKeys">actionGetAccessPointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAccessPoint action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.actionGetAccessPointPolicyConditionKeys">actionGetAccessPointPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAccessPointPolicy action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.actionGetAccessPointScopeConditionKeys">actionGetAccessPointScopeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAccessPointScope action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.actionGetBucketPolicyConditionKeys">actionGetBucketPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetBucketPolicy action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.actionGetEncryptionConfigurationConditionKeys">actionGetEncryptionConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEncryptionConfiguration action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.actionGetInventoryConfigurationConditionKeys">actionGetInventoryConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetInventoryConfiguration action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.actionGetLifecycleConfigurationConditionKeys">actionGetLifecycleConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetLifecycleConfiguration action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.actionGetMetricsConfigurationConditionKeys">actionGetMetricsConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetMetricsConfiguration action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.ALL_ACCESS_RESTRICTED_TO_LOCAL_ZONE_GROUP">ALL_ACCESS_RESTRICTED_TO_LOCAL_ZONE_GROUP</a></code> | <code>string</code> | Condition key: s3express:AllAccessRestrictedToLocalZoneGroup (String). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.AUTH_TYPE">AUTH_TYPE</a></code> | <code>string</code> | Condition key: s3express:authType (String). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.BUCKET_TAG">BUCKET_TAG</a></code> | <code>string</code> | Condition key: s3express:BucketTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.CreateAccessPointConditionKeys">CreateAccessPointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAccessPoint action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.CreateBucketConditionKeys">CreateBucketConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBucket action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.CreateSessionConditionKeys">CreateSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSession action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.DATA_ACCESS_POINT_ACCOUNT">DATA_ACCESS_POINT_ACCOUNT</a></code> | <code>string</code> | Condition key: s3express:DataAccessPointAccount (String). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.DATA_ACCESS_POINT_ARN">DATA_ACCESS_POINT_ARN</a></code> | <code>string</code> | Condition key: s3express:DataAccessPointArn (ARN). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.DeleteAccessPointConditionKeys">DeleteAccessPointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAccessPoint action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.DeleteAccessPointPolicyConditionKeys">DeleteAccessPointPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAccessPointPolicy action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.DeleteAccessPointScopeConditionKeys">DeleteAccessPointScopeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAccessPointScope action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.DeleteBucketConditionKeys">DeleteBucketConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteBucket action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.DeleteBucketPolicyConditionKeys">DeleteBucketPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteBucketPolicy action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.INVENTORY_ACCESSIBLE_OPTIONAL_FIELDS">INVENTORY_ACCESSIBLE_OPTIONAL_FIELDS</a></code> | <code>string</code> | Condition key: s3express:InventoryAccessibleOptionalFields (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.ListAccessPointsForDirectoryBucketsConditionKeys">ListAccessPointsForDirectoryBucketsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAccessPointsForDirectoryBuckets action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.ListAllMyDirectoryBucketsConditionKeys">ListAllMyDirectoryBucketsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAllMyDirectoryBuckets action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.LOCATION_NAME">LOCATION_NAME</a></code> | <code>string</code> | Condition key: s3express:LocationName (String). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.PERMISSIONS">PERMISSIONS</a></code> | <code>string</code> | Condition key: s3express:Permissions (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.PutAccessPointPolicyConditionKeys">PutAccessPointPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAccessPointPolicy action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.PutAccessPointScopeConditionKeys">PutAccessPointScopeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAccessPointScope action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.PutBucketPolicyConditionKeys">PutBucketPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutBucketPolicy action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.PutEncryptionConfigurationConditionKeys">PutEncryptionConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutEncryptionConfiguration action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.PutInventoryConfigurationConditionKeys">PutInventoryConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutInventoryConfiguration action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.PutLifecycleConfigurationConditionKeys">PutLifecycleConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutLifecycleConfiguration action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.PutMetricsConfigurationConditionKeys">PutMetricsConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutMetricsConfiguration action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.RESOURCE_ACCOUNT">RESOURCE_ACCOUNT</a></code> | <code>string</code> | Condition key: s3express:ResourceAccount (String). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.SESSION_MODE">SESSION_MODE</a></code> | <code>string</code> | Condition key: s3express:SessionMode (String). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.SIGNATURE_AGE">SIGNATURE_AGE</a></code> | <code>string</code> | Condition key: s3express:signatureAge (Numeric). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.SIGNATUREVERSION">SIGNATUREVERSION</a></code> | <code>string</code> | Condition key: s3express:signatureversion (String). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.TLS_VERSION">TLS_VERSION</a></code> | <code>string</code> | Condition key: s3express:TlsVersion (Numeric). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.X_AMZ_CONTENT_SHA256">X_AMZ_CONTENT_SHA256</a></code> | <code>string</code> | Condition key: s3express:x-amz-content-sha256 (String). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.X_AMZ_SERVER_SIDE_ENCRYPTION">X_AMZ_SERVER_SIDE_ENCRYPTION</a></code> | <code>string</code> | Condition key: s3express:x-amz-server-side-encryption (String). |
| <code><a href="#@cdk_utils/iam.s3express.S3expressConditions.property.X_AMZ_SERVER_SIDE_ENCRYPTION_AWS_KMS_KEY_ID">X_AMZ_SERVER_SIDE_ENCRYPTION_AWS_KMS_KEY_ID</a></code> | <code>string</code> | Condition key: s3express:x-amz-server-side-encryption-aws-kms-key-id (ARN). |

---

##### `ACCESS_POINT_NETWORK_ORIGIN`<sup>Required</sup> <a name="ACCESS_POINT_NETWORK_ORIGIN" id="@cdk_utils/iam.s3express.S3expressConditions.property.ACCESS_POINT_NETWORK_ORIGIN"></a>

```typescript
public readonly ACCESS_POINT_NETWORK_ORIGIN: string;
```

- *Type:* string

Condition key: s3express:AccessPointNetworkOrigin (String).

---

##### `ACCESS_POINT_TAG`<sup>Required</sup> <a name="ACCESS_POINT_TAG" id="@cdk_utils/iam.s3express.S3expressConditions.property.ACCESS_POINT_TAG"></a>

```typescript
public readonly ACCESS_POINT_TAG: string;
```

- *Type:* string

Condition key: s3express:AccessPointTag/${TagKey} (String).

---

##### `actionGetAccessPointConditionKeys`<sup>Required</sup> <a name="actionGetAccessPointConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.actionGetAccessPointConditionKeys"></a>

```typescript
public readonly actionGetAccessPointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAccessPoint action.

---

##### `actionGetAccessPointPolicyConditionKeys`<sup>Required</sup> <a name="actionGetAccessPointPolicyConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.actionGetAccessPointPolicyConditionKeys"></a>

```typescript
public readonly actionGetAccessPointPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAccessPointPolicy action.

---

##### `actionGetAccessPointScopeConditionKeys`<sup>Required</sup> <a name="actionGetAccessPointScopeConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.actionGetAccessPointScopeConditionKeys"></a>

```typescript
public readonly actionGetAccessPointScopeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAccessPointScope action.

---

##### `actionGetBucketPolicyConditionKeys`<sup>Required</sup> <a name="actionGetBucketPolicyConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.actionGetBucketPolicyConditionKeys"></a>

```typescript
public readonly actionGetBucketPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetBucketPolicy action.

---

##### `actionGetEncryptionConfigurationConditionKeys`<sup>Required</sup> <a name="actionGetEncryptionConfigurationConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.actionGetEncryptionConfigurationConditionKeys"></a>

```typescript
public readonly actionGetEncryptionConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEncryptionConfiguration action.

---

##### `actionGetInventoryConfigurationConditionKeys`<sup>Required</sup> <a name="actionGetInventoryConfigurationConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.actionGetInventoryConfigurationConditionKeys"></a>

```typescript
public readonly actionGetInventoryConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetInventoryConfiguration action.

---

##### `actionGetLifecycleConfigurationConditionKeys`<sup>Required</sup> <a name="actionGetLifecycleConfigurationConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.actionGetLifecycleConfigurationConditionKeys"></a>

```typescript
public readonly actionGetLifecycleConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetLifecycleConfiguration action.

---

##### `actionGetMetricsConfigurationConditionKeys`<sup>Required</sup> <a name="actionGetMetricsConfigurationConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.actionGetMetricsConfigurationConditionKeys"></a>

```typescript
public readonly actionGetMetricsConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetMetricsConfiguration action.

---

##### `ALL_ACCESS_RESTRICTED_TO_LOCAL_ZONE_GROUP`<sup>Required</sup> <a name="ALL_ACCESS_RESTRICTED_TO_LOCAL_ZONE_GROUP" id="@cdk_utils/iam.s3express.S3expressConditions.property.ALL_ACCESS_RESTRICTED_TO_LOCAL_ZONE_GROUP"></a>

```typescript
public readonly ALL_ACCESS_RESTRICTED_TO_LOCAL_ZONE_GROUP: string;
```

- *Type:* string

Condition key: s3express:AllAccessRestrictedToLocalZoneGroup (String).

---

##### `AUTH_TYPE`<sup>Required</sup> <a name="AUTH_TYPE" id="@cdk_utils/iam.s3express.S3expressConditions.property.AUTH_TYPE"></a>

```typescript
public readonly AUTH_TYPE: string;
```

- *Type:* string

Condition key: s3express:authType (String).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.s3express.S3expressConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.s3express.S3expressConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.s3express.S3expressConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BUCKET_TAG`<sup>Required</sup> <a name="BUCKET_TAG" id="@cdk_utils/iam.s3express.S3expressConditions.property.BUCKET_TAG"></a>

```typescript
public readonly BUCKET_TAG: string;
```

- *Type:* string

Condition key: s3express:BucketTag/${TagKey} (String).

---

##### `CreateAccessPointConditionKeys`<sup>Required</sup> <a name="CreateAccessPointConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.CreateAccessPointConditionKeys"></a>

```typescript
public readonly CreateAccessPointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAccessPoint action.

---

##### `CreateBucketConditionKeys`<sup>Required</sup> <a name="CreateBucketConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.CreateBucketConditionKeys"></a>

```typescript
public readonly CreateBucketConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBucket action.

---

##### `CreateSessionConditionKeys`<sup>Required</sup> <a name="CreateSessionConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.CreateSessionConditionKeys"></a>

```typescript
public readonly CreateSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSession action.

---

##### `DATA_ACCESS_POINT_ACCOUNT`<sup>Required</sup> <a name="DATA_ACCESS_POINT_ACCOUNT" id="@cdk_utils/iam.s3express.S3expressConditions.property.DATA_ACCESS_POINT_ACCOUNT"></a>

```typescript
public readonly DATA_ACCESS_POINT_ACCOUNT: string;
```

- *Type:* string

Condition key: s3express:DataAccessPointAccount (String).

---

##### `DATA_ACCESS_POINT_ARN`<sup>Required</sup> <a name="DATA_ACCESS_POINT_ARN" id="@cdk_utils/iam.s3express.S3expressConditions.property.DATA_ACCESS_POINT_ARN"></a>

```typescript
public readonly DATA_ACCESS_POINT_ARN: string;
```

- *Type:* string

Condition key: s3express:DataAccessPointArn (ARN).

---

##### `DeleteAccessPointConditionKeys`<sup>Required</sup> <a name="DeleteAccessPointConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.DeleteAccessPointConditionKeys"></a>

```typescript
public readonly DeleteAccessPointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAccessPoint action.

---

##### `DeleteAccessPointPolicyConditionKeys`<sup>Required</sup> <a name="DeleteAccessPointPolicyConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.DeleteAccessPointPolicyConditionKeys"></a>

```typescript
public readonly DeleteAccessPointPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAccessPointPolicy action.

---

##### `DeleteAccessPointScopeConditionKeys`<sup>Required</sup> <a name="DeleteAccessPointScopeConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.DeleteAccessPointScopeConditionKeys"></a>

```typescript
public readonly DeleteAccessPointScopeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAccessPointScope action.

---

##### `DeleteBucketConditionKeys`<sup>Required</sup> <a name="DeleteBucketConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.DeleteBucketConditionKeys"></a>

```typescript
public readonly DeleteBucketConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteBucket action.

---

##### `DeleteBucketPolicyConditionKeys`<sup>Required</sup> <a name="DeleteBucketPolicyConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.DeleteBucketPolicyConditionKeys"></a>

```typescript
public readonly DeleteBucketPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteBucketPolicy action.

---

##### `INVENTORY_ACCESSIBLE_OPTIONAL_FIELDS`<sup>Required</sup> <a name="INVENTORY_ACCESSIBLE_OPTIONAL_FIELDS" id="@cdk_utils/iam.s3express.S3expressConditions.property.INVENTORY_ACCESSIBLE_OPTIONAL_FIELDS"></a>

```typescript
public readonly INVENTORY_ACCESSIBLE_OPTIONAL_FIELDS: string;
```

- *Type:* string

Condition key: s3express:InventoryAccessibleOptionalFields (ArrayOfString).

---

##### `ListAccessPointsForDirectoryBucketsConditionKeys`<sup>Required</sup> <a name="ListAccessPointsForDirectoryBucketsConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.ListAccessPointsForDirectoryBucketsConditionKeys"></a>

```typescript
public readonly ListAccessPointsForDirectoryBucketsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAccessPointsForDirectoryBuckets action.

---

##### `ListAllMyDirectoryBucketsConditionKeys`<sup>Required</sup> <a name="ListAllMyDirectoryBucketsConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.ListAllMyDirectoryBucketsConditionKeys"></a>

```typescript
public readonly ListAllMyDirectoryBucketsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAllMyDirectoryBuckets action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `LOCATION_NAME`<sup>Required</sup> <a name="LOCATION_NAME" id="@cdk_utils/iam.s3express.S3expressConditions.property.LOCATION_NAME"></a>

```typescript
public readonly LOCATION_NAME: string;
```

- *Type:* string

Condition key: s3express:LocationName (String).

---

##### `PERMISSIONS`<sup>Required</sup> <a name="PERMISSIONS" id="@cdk_utils/iam.s3express.S3expressConditions.property.PERMISSIONS"></a>

```typescript
public readonly PERMISSIONS: string;
```

- *Type:* string

Condition key: s3express:Permissions (ArrayOfString).

---

##### `PutAccessPointPolicyConditionKeys`<sup>Required</sup> <a name="PutAccessPointPolicyConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.PutAccessPointPolicyConditionKeys"></a>

```typescript
public readonly PutAccessPointPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAccessPointPolicy action.

---

##### `PutAccessPointScopeConditionKeys`<sup>Required</sup> <a name="PutAccessPointScopeConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.PutAccessPointScopeConditionKeys"></a>

```typescript
public readonly PutAccessPointScopeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAccessPointScope action.

---

##### `PutBucketPolicyConditionKeys`<sup>Required</sup> <a name="PutBucketPolicyConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.PutBucketPolicyConditionKeys"></a>

```typescript
public readonly PutBucketPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutBucketPolicy action.

---

##### `PutEncryptionConfigurationConditionKeys`<sup>Required</sup> <a name="PutEncryptionConfigurationConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.PutEncryptionConfigurationConditionKeys"></a>

```typescript
public readonly PutEncryptionConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutEncryptionConfiguration action.

---

##### `PutInventoryConfigurationConditionKeys`<sup>Required</sup> <a name="PutInventoryConfigurationConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.PutInventoryConfigurationConditionKeys"></a>

```typescript
public readonly PutInventoryConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutInventoryConfiguration action.

---

##### `PutLifecycleConfigurationConditionKeys`<sup>Required</sup> <a name="PutLifecycleConfigurationConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.PutLifecycleConfigurationConditionKeys"></a>

```typescript
public readonly PutLifecycleConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutLifecycleConfiguration action.

---

##### `PutMetricsConfigurationConditionKeys`<sup>Required</sup> <a name="PutMetricsConfigurationConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.PutMetricsConfigurationConditionKeys"></a>

```typescript
public readonly PutMetricsConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutMetricsConfiguration action.

---

##### `RESOURCE_ACCOUNT`<sup>Required</sup> <a name="RESOURCE_ACCOUNT" id="@cdk_utils/iam.s3express.S3expressConditions.property.RESOURCE_ACCOUNT"></a>

```typescript
public readonly RESOURCE_ACCOUNT: string;
```

- *Type:* string

Condition key: s3express:ResourceAccount (String).

---

##### `SESSION_MODE`<sup>Required</sup> <a name="SESSION_MODE" id="@cdk_utils/iam.s3express.S3expressConditions.property.SESSION_MODE"></a>

```typescript
public readonly SESSION_MODE: string;
```

- *Type:* string

Condition key: s3express:SessionMode (String).

---

##### `SIGNATURE_AGE`<sup>Required</sup> <a name="SIGNATURE_AGE" id="@cdk_utils/iam.s3express.S3expressConditions.property.SIGNATURE_AGE"></a>

```typescript
public readonly SIGNATURE_AGE: string;
```

- *Type:* string

Condition key: s3express:signatureAge (Numeric).

---

##### `SIGNATUREVERSION`<sup>Required</sup> <a name="SIGNATUREVERSION" id="@cdk_utils/iam.s3express.S3expressConditions.property.SIGNATUREVERSION"></a>

```typescript
public readonly SIGNATUREVERSION: string;
```

- *Type:* string

Condition key: s3express:signatureversion (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TLS_VERSION`<sup>Required</sup> <a name="TLS_VERSION" id="@cdk_utils/iam.s3express.S3expressConditions.property.TLS_VERSION"></a>

```typescript
public readonly TLS_VERSION: string;
```

- *Type:* string

Condition key: s3express:TlsVersion (Numeric).

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.s3express.S3expressConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `X_AMZ_CONTENT_SHA256`<sup>Required</sup> <a name="X_AMZ_CONTENT_SHA256" id="@cdk_utils/iam.s3express.S3expressConditions.property.X_AMZ_CONTENT_SHA256"></a>

```typescript
public readonly X_AMZ_CONTENT_SHA256: string;
```

- *Type:* string

Condition key: s3express:x-amz-content-sha256 (String).

---

##### `X_AMZ_SERVER_SIDE_ENCRYPTION`<sup>Required</sup> <a name="X_AMZ_SERVER_SIDE_ENCRYPTION" id="@cdk_utils/iam.s3express.S3expressConditions.property.X_AMZ_SERVER_SIDE_ENCRYPTION"></a>

```typescript
public readonly X_AMZ_SERVER_SIDE_ENCRYPTION: string;
```

- *Type:* string

Condition key: s3express:x-amz-server-side-encryption (String).

---

##### `X_AMZ_SERVER_SIDE_ENCRYPTION_AWS_KMS_KEY_ID`<sup>Required</sup> <a name="X_AMZ_SERVER_SIDE_ENCRYPTION_AWS_KMS_KEY_ID" id="@cdk_utils/iam.s3express.S3expressConditions.property.X_AMZ_SERVER_SIDE_ENCRYPTION_AWS_KMS_KEY_ID"></a>

```typescript
public readonly X_AMZ_SERVER_SIDE_ENCRYPTION_AWS_KMS_KEY_ID: string;
```

- *Type:* string

Condition key: s3express:x-amz-server-side-encryption-aws-kms-key-id (ARN).

---

### S3expressResources <a name="S3expressResources" id="@cdk_utils/iam.s3express.S3expressResources"></a>

ARN builders, validators, and parsers for s3express resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3express.S3expressResources.Initializer"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

new s3express.S3expressResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.s3express.S3expressResources.accesspoint">accesspoint</a></code> | Builds an ARN for the accesspoint resource. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressResources.bucket">bucket</a></code> | Builds an ARN for the bucket resource. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressResources.isValidAccesspointArn">isValidAccesspointArn</a></code> | Validates whether a string is a valid ARN for the accesspoint resource. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressResources.isValidBucketArn">isValidBucketArn</a></code> | Validates whether a string is a valid ARN for the bucket resource. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressResources.parseAccesspointArn">parseAccesspointArn</a></code> | Parses a accesspoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.s3express.S3expressResources.parseBucketArn">parseBucketArn</a></code> | Parses a bucket ARN into its components. |

---

##### `accesspoint` <a name="accesspoint" id="@cdk_utils/iam.s3express.S3expressResources.accesspoint"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressResources.accesspoint(props: S3expressAccesspointArnProps)
```

Builds an ARN for the accesspoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.s3express.S3expressResources.accesspoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.s3express.S3expressAccesspointArnProps">S3expressAccesspointArnProps</a>

---

##### `bucket` <a name="bucket" id="@cdk_utils/iam.s3express.S3expressResources.bucket"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressResources.bucket(props: S3expressBucketArnProps)
```

Builds an ARN for the bucket resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.s3express.S3expressResources.bucket.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.s3express.S3expressBucketArnProps">S3expressBucketArnProps</a>

---

##### `isValidAccesspointArn` <a name="isValidAccesspointArn" id="@cdk_utils/iam.s3express.S3expressResources.isValidAccesspointArn"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressResources.isValidAccesspointArn(arn: string)
```

Validates whether a string is a valid ARN for the accesspoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3express.S3expressResources.isValidAccesspointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBucketArn` <a name="isValidBucketArn" id="@cdk_utils/iam.s3express.S3expressResources.isValidBucketArn"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressResources.isValidBucketArn(arn: string)
```

Validates whether a string is a valid ARN for the bucket resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3express.S3expressResources.isValidBucketArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAccesspointArn` <a name="parseAccesspointArn" id="@cdk_utils/iam.s3express.S3expressResources.parseAccesspointArn"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressResources.parseAccesspointArn(arn: string)
```

Parses a accesspoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3express.S3expressResources.parseAccesspointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBucketArn` <a name="parseBucketArn" id="@cdk_utils/iam.s3express.S3expressResources.parseBucketArn"></a>

```typescript
import { s3express } from '@cdk_utils/iam'

s3express.S3expressResources.parseBucketArn(arn: string)
```

Parses a bucket ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3express.S3expressResources.parseBucketArn.parameter.arn"></a>

- *Type:* string

---




