# `cloudhsm` Submodule <a name="`cloudhsm` Submodule" id="@cdk_utils/iam.cloudhsm"></a>


## Structs <a name="Structs" id="Structs"></a>

### CloudHSMBackupArnComponents <a name="CloudHSMBackupArnComponents" id="@cdk_utils/iam.cloudhsm.CloudHSMBackupArnComponents"></a>

Parsed components of a backup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudhsm.CloudHSMBackupArnComponents.Initializer"></a>

```typescript
import { cloudhsm } from '@cdk_utils/iam'

const cloudHSMBackupArnComponents: cloudhsm.CloudHSMBackupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMBackupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMBackupArnComponents.property.cloudHsmBackupInstanceName">cloudHsmBackupInstanceName</a></code> | <code>string</code> | The CloudHsmBackupInstanceName component. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMBackupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMBackupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudhsm.CloudHSMBackupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `cloudHsmBackupInstanceName`<sup>Required</sup> <a name="cloudHsmBackupInstanceName" id="@cdk_utils/iam.cloudhsm.CloudHSMBackupArnComponents.property.cloudHsmBackupInstanceName"></a>

```typescript
public readonly cloudHsmBackupInstanceName: string;
```

- *Type:* string

The CloudHsmBackupInstanceName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudhsm.CloudHSMBackupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudhsm.CloudHSMBackupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudHSMBackupArnProps <a name="CloudHSMBackupArnProps" id="@cdk_utils/iam.cloudhsm.CloudHSMBackupArnProps"></a>

Properties for building a backup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudhsm.CloudHSMBackupArnProps.Initializer"></a>

```typescript
import { cloudhsm } from '@cdk_utils/iam'

const cloudHSMBackupArnProps: cloudhsm.CloudHSMBackupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMBackupArnProps.property.cloudHsmBackupInstanceName">cloudHsmBackupInstanceName</a></code> | <code>string</code> | The CloudHsmBackupInstanceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMBackupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMBackupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMBackupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `cloudHsmBackupInstanceName`<sup>Required</sup> <a name="cloudHsmBackupInstanceName" id="@cdk_utils/iam.cloudhsm.CloudHSMBackupArnProps.property.cloudHsmBackupInstanceName"></a>

```typescript
public readonly cloudHsmBackupInstanceName: string;
```

- *Type:* string

The CloudHsmBackupInstanceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudhsm.CloudHSMBackupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudhsm.CloudHSMBackupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudhsm.CloudHSMBackupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudHSMClusterArnComponents <a name="CloudHSMClusterArnComponents" id="@cdk_utils/iam.cloudhsm.CloudHSMClusterArnComponents"></a>

Parsed components of a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudhsm.CloudHSMClusterArnComponents.Initializer"></a>

```typescript
import { cloudhsm } from '@cdk_utils/iam'

const cloudHSMClusterArnComponents: cloudhsm.CloudHSMClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMClusterArnComponents.property.cloudHsmClusterInstanceName">cloudHsmClusterInstanceName</a></code> | <code>string</code> | The CloudHsmClusterInstanceName component. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudhsm.CloudHSMClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `cloudHsmClusterInstanceName`<sup>Required</sup> <a name="cloudHsmClusterInstanceName" id="@cdk_utils/iam.cloudhsm.CloudHSMClusterArnComponents.property.cloudHsmClusterInstanceName"></a>

```typescript
public readonly cloudHsmClusterInstanceName: string;
```

- *Type:* string

The CloudHsmClusterInstanceName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudhsm.CloudHSMClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudhsm.CloudHSMClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudHSMClusterArnProps <a name="CloudHSMClusterArnProps" id="@cdk_utils/iam.cloudhsm.CloudHSMClusterArnProps"></a>

Properties for building a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudhsm.CloudHSMClusterArnProps.Initializer"></a>

```typescript
import { cloudhsm } from '@cdk_utils/iam'

const cloudHSMClusterArnProps: cloudhsm.CloudHSMClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMClusterArnProps.property.cloudHsmClusterInstanceName">cloudHsmClusterInstanceName</a></code> | <code>string</code> | The CloudHsmClusterInstanceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `cloudHsmClusterInstanceName`<sup>Required</sup> <a name="cloudHsmClusterInstanceName" id="@cdk_utils/iam.cloudhsm.CloudHSMClusterArnProps.property.cloudHsmClusterInstanceName"></a>

```typescript
public readonly cloudHsmClusterInstanceName: string;
```

- *Type:* string

The CloudHsmClusterInstanceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudhsm.CloudHSMClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudhsm.CloudHSMClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudhsm.CloudHSMClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CloudHSMActions <a name="CloudHSMActions" id="@cdk_utils/iam.cloudhsm.CloudHSMActions"></a>

IAM action constants for the cloudhsm service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.Initializer"></a>

```typescript
import { cloudhsm } from '@cdk_utils/iam'

new cloudhsm.CloudHSMActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] cloudhsm:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.CopyBackupToRegion">CopyBackupToRegion</a></code> | <code>string</code> | [Write] cloudhsm:CopyBackupToRegion. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.CreateCluster">CreateCluster</a></code> | <code>string</code> | [Write] cloudhsm:CreateCluster. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.CreateHsm">CreateHsm</a></code> | <code>string</code> | [Write] cloudhsm:CreateHsm. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.DeleteBackup">DeleteBackup</a></code> | <code>string</code> | [Write] cloudhsm:DeleteBackup. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.DeleteCluster">DeleteCluster</a></code> | <code>string</code> | [Write] cloudhsm:DeleteCluster. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.DeleteHsm">DeleteHsm</a></code> | <code>string</code> | [Write] cloudhsm:DeleteHsm. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] cloudhsm:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.DescribeBackups">DescribeBackups</a></code> | <code>string</code> | [Read] cloudhsm:DescribeBackups. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.DescribeClusters">DescribeClusters</a></code> | <code>string</code> | [Read] cloudhsm:DescribeClusters. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.InitializeCluster">InitializeCluster</a></code> | <code>string</code> | [Write] cloudhsm:InitializeCluster. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.ListTags">ListTags</a></code> | <code>string</code> | [Read] cloudhsm:ListTags. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.ModifyBackupAttributes">ModifyBackupAttributes</a></code> | <code>string</code> | [Write] cloudhsm:ModifyBackupAttributes. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.ModifyCluster">ModifyCluster</a></code> | <code>string</code> | [Write] cloudhsm:ModifyCluster. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] cloudhsm:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.RestoreBackup">RestoreBackup</a></code> | <code>string</code> | [Write] cloudhsm:RestoreBackup. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] cloudhsm:TagResource. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] cloudhsm:UntagResource. |

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] cloudhsm:GetResourcePolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CopyBackupToRegion`<sup>Required</sup> <a name="CopyBackupToRegion" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.CopyBackupToRegion"></a>

```typescript
public readonly CopyBackupToRegion: string;
```

- *Type:* string

[Write] cloudhsm:CopyBackupToRegion.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string;
```

- *Type:* string

[Write] cloudhsm:CreateCluster.

---

##### `CreateHsm`<sup>Required</sup> <a name="CreateHsm" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.CreateHsm"></a>

```typescript
public readonly CreateHsm: string;
```

- *Type:* string

[Write] cloudhsm:CreateHsm.

---

##### `DeleteBackup`<sup>Required</sup> <a name="DeleteBackup" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.DeleteBackup"></a>

```typescript
public readonly DeleteBackup: string;
```

- *Type:* string

[Write] cloudhsm:DeleteBackup.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string;
```

- *Type:* string

[Write] cloudhsm:DeleteCluster.

---

##### `DeleteHsm`<sup>Required</sup> <a name="DeleteHsm" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.DeleteHsm"></a>

```typescript
public readonly DeleteHsm: string;
```

- *Type:* string

[Write] cloudhsm:DeleteHsm.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] cloudhsm:DeleteResourcePolicy.

---

##### `DescribeBackups`<sup>Required</sup> <a name="DescribeBackups" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.DescribeBackups"></a>

```typescript
public readonly DescribeBackups: string;
```

- *Type:* string

[Read] cloudhsm:DescribeBackups.

---

##### `DescribeClusters`<sup>Required</sup> <a name="DescribeClusters" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.DescribeClusters"></a>

```typescript
public readonly DescribeClusters: string;
```

- *Type:* string

[Read] cloudhsm:DescribeClusters.

---

##### `InitializeCluster`<sup>Required</sup> <a name="InitializeCluster" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.InitializeCluster"></a>

```typescript
public readonly InitializeCluster: string;
```

- *Type:* string

[Write] cloudhsm:InitializeCluster.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.ListTags"></a>

```typescript
public readonly ListTags: string;
```

- *Type:* string

[Read] cloudhsm:ListTags.

---

##### `ModifyBackupAttributes`<sup>Required</sup> <a name="ModifyBackupAttributes" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.ModifyBackupAttributes"></a>

```typescript
public readonly ModifyBackupAttributes: string;
```

- *Type:* string

[Write] cloudhsm:ModifyBackupAttributes.

---

##### `ModifyCluster`<sup>Required</sup> <a name="ModifyCluster" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.ModifyCluster"></a>

```typescript
public readonly ModifyCluster: string;
```

- *Type:* string

[Write] cloudhsm:ModifyCluster.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] cloudhsm:PutResourcePolicy.

---

##### `RestoreBackup`<sup>Required</sup> <a name="RestoreBackup" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.RestoreBackup"></a>

```typescript
public readonly RestoreBackup: string;
```

- *Type:* string

[Write] cloudhsm:RestoreBackup.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] cloudhsm:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cloudhsm.CloudHSMActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] cloudhsm:UntagResource.

---

### CloudHSMConditions <a name="CloudHSMConditions" id="@cdk_utils/iam.cloudhsm.CloudHSMConditions"></a>

Condition key constants and builders for cloudhsm.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudhsm.CloudHSMConditions.Initializer"></a>

```typescript
import { cloudhsm } from '@cdk_utils/iam'

new cloudhsm.CloudHSMConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.cloudhsm.CloudHSMConditions.requestTag"></a>

```typescript
import { cloudhsm } from '@cdk_utils/iam'

cloudhsm.CloudHSMConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudhsm.CloudHSMConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.cloudhsm.CloudHSMConditions.resourceTag"></a>

```typescript
import { cloudhsm } from '@cdk_utils/iam'

cloudhsm.CloudHSMConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudhsm.CloudHSMConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.cloudhsm.CloudHSMConditions.tagKeys"></a>

```typescript
import { cloudhsm } from '@cdk_utils/iam'

cloudhsm.CloudHSMConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cloudhsm.CloudHSMConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMConditions.property.CopyBackupToRegionConditionKeys">CopyBackupToRegionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CopyBackupToRegion action. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMConditions.property.CreateClusterConditionKeys">CreateClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCluster action. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.cloudhsm.CloudHSMConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.cloudhsm.CloudHSMConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.cloudhsm.CloudHSMConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CopyBackupToRegionConditionKeys`<sup>Required</sup> <a name="CopyBackupToRegionConditionKeys" id="@cdk_utils/iam.cloudhsm.CloudHSMConditions.property.CopyBackupToRegionConditionKeys"></a>

```typescript
public readonly CopyBackupToRegionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CopyBackupToRegion action.

---

##### `CreateClusterConditionKeys`<sup>Required</sup> <a name="CreateClusterConditionKeys" id="@cdk_utils/iam.cloudhsm.CloudHSMConditions.property.CreateClusterConditionKeys"></a>

```typescript
public readonly CreateClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCluster action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.cloudhsm.CloudHSMConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.cloudhsm.CloudHSMConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### CloudHSMOperations <a name="CloudHSMOperations" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations"></a>

API operation to required IAM actions mapping for cloudhsm.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.Initializer"></a>

```typescript
import { cloudhsm } from '@cdk_utils/iam'

new cloudhsm.CloudHSMOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.AddTagsToResource">AddTagsToResource</a></code> | <code>string[]</code> | IAM actions required for the AddTagsToResource API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.CopyBackupToRegion">CopyBackupToRegion</a></code> | <code>string[]</code> | IAM actions required for the CopyBackupToRegion API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.CreateCluster">CreateCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateCluster API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.CreateHapg">CreateHapg</a></code> | <code>string[]</code> | IAM actions required for the CreateHapg API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.CreateHsm">CreateHsm</a></code> | <code>string[]</code> | IAM actions required for the CreateHsm API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.CreateLunaClient">CreateLunaClient</a></code> | <code>string[]</code> | IAM actions required for the CreateLunaClient API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DeleteBackup">DeleteBackup</a></code> | <code>string[]</code> | IAM actions required for the DeleteBackup API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DeleteCluster">DeleteCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteCluster API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DeleteHapg">DeleteHapg</a></code> | <code>string[]</code> | IAM actions required for the DeleteHapg API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DeleteHsm">DeleteHsm</a></code> | <code>string[]</code> | IAM actions required for the DeleteHsm API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DeleteLunaClient">DeleteLunaClient</a></code> | <code>string[]</code> | IAM actions required for the DeleteLunaClient API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DescribeBackups">DescribeBackups</a></code> | <code>string[]</code> | IAM actions required for the DescribeBackups API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DescribeClusters">DescribeClusters</a></code> | <code>string[]</code> | IAM actions required for the DescribeClusters API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DescribeHapg">DescribeHapg</a></code> | <code>string[]</code> | IAM actions required for the DescribeHapg API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DescribeHsm">DescribeHsm</a></code> | <code>string[]</code> | IAM actions required for the DescribeHsm API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DescribeLunaClient">DescribeLunaClient</a></code> | <code>string[]</code> | IAM actions required for the DescribeLunaClient API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.InitializeCluster">InitializeCluster</a></code> | <code>string[]</code> | IAM actions required for the InitializeCluster API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ListAvailableZones">ListAvailableZones</a></code> | <code>string[]</code> | IAM actions required for the ListAvailableZones API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ListHapgs">ListHapgs</a></code> | <code>string[]</code> | IAM actions required for the ListHapgs API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ListHsms">ListHsms</a></code> | <code>string[]</code> | IAM actions required for the ListHsms API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ListLunaClients">ListLunaClients</a></code> | <code>string[]</code> | IAM actions required for the ListLunaClients API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ListTags">ListTags</a></code> | <code>string[]</code> | IAM actions required for the ListTags API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ModifyBackupAttributes">ModifyBackupAttributes</a></code> | <code>string[]</code> | IAM actions required for the ModifyBackupAttributes API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ModifyCluster">ModifyCluster</a></code> | <code>string[]</code> | IAM actions required for the ModifyCluster API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ModifyHapg">ModifyHapg</a></code> | <code>string[]</code> | IAM actions required for the ModifyHapg API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ModifyHsm">ModifyHsm</a></code> | <code>string[]</code> | IAM actions required for the ModifyHsm API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ModifyLunaClient">ModifyLunaClient</a></code> | <code>string[]</code> | IAM actions required for the ModifyLunaClient API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.opGetConfig">opGetConfig</a></code> | <code>string[]</code> | IAM actions required for the GetConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.RemoveTagsFromResource">RemoveTagsFromResource</a></code> | <code>string[]</code> | IAM actions required for the RemoveTagsFromResource API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.RestoreBackup">RestoreBackup</a></code> | <code>string[]</code> | IAM actions required for the RestoreBackup API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `AddTagsToResource`<sup>Required</sup> <a name="AddTagsToResource" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.AddTagsToResource"></a>

```typescript
public readonly AddTagsToResource: string[];
```

- *Type:* string[]

IAM actions required for the AddTagsToResource API call.

---

##### `CopyBackupToRegion`<sup>Required</sup> <a name="CopyBackupToRegion" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.CopyBackupToRegion"></a>

```typescript
public readonly CopyBackupToRegion: string[];
```

- *Type:* string[]

IAM actions required for the CopyBackupToRegion API call.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateCluster API call.

---

##### `CreateHapg`<sup>Required</sup> <a name="CreateHapg" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.CreateHapg"></a>

```typescript
public readonly CreateHapg: string[];
```

- *Type:* string[]

IAM actions required for the CreateHapg API call.

---

##### `CreateHsm`<sup>Required</sup> <a name="CreateHsm" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.CreateHsm"></a>

```typescript
public readonly CreateHsm: string[];
```

- *Type:* string[]

IAM actions required for the CreateHsm API call.

---

##### `CreateLunaClient`<sup>Required</sup> <a name="CreateLunaClient" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.CreateLunaClient"></a>

```typescript
public readonly CreateLunaClient: string[];
```

- *Type:* string[]

IAM actions required for the CreateLunaClient API call.

---

##### `DeleteBackup`<sup>Required</sup> <a name="DeleteBackup" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DeleteBackup"></a>

```typescript
public readonly DeleteBackup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBackup API call.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCluster API call.

---

##### `DeleteHapg`<sup>Required</sup> <a name="DeleteHapg" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DeleteHapg"></a>

```typescript
public readonly DeleteHapg: string[];
```

- *Type:* string[]

IAM actions required for the DeleteHapg API call.

---

##### `DeleteHsm`<sup>Required</sup> <a name="DeleteHsm" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DeleteHsm"></a>

```typescript
public readonly DeleteHsm: string[];
```

- *Type:* string[]

IAM actions required for the DeleteHsm API call.

---

##### `DeleteLunaClient`<sup>Required</sup> <a name="DeleteLunaClient" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DeleteLunaClient"></a>

```typescript
public readonly DeleteLunaClient: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLunaClient API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DescribeBackups`<sup>Required</sup> <a name="DescribeBackups" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DescribeBackups"></a>

```typescript
public readonly DescribeBackups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBackups API call.

---

##### `DescribeClusters`<sup>Required</sup> <a name="DescribeClusters" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DescribeClusters"></a>

```typescript
public readonly DescribeClusters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClusters API call.

---

##### `DescribeHapg`<sup>Required</sup> <a name="DescribeHapg" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DescribeHapg"></a>

```typescript
public readonly DescribeHapg: string[];
```

- *Type:* string[]

IAM actions required for the DescribeHapg API call.

---

##### `DescribeHsm`<sup>Required</sup> <a name="DescribeHsm" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DescribeHsm"></a>

```typescript
public readonly DescribeHsm: string[];
```

- *Type:* string[]

IAM actions required for the DescribeHsm API call.

---

##### `DescribeLunaClient`<sup>Required</sup> <a name="DescribeLunaClient" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.DescribeLunaClient"></a>

```typescript
public readonly DescribeLunaClient: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLunaClient API call.

---

##### `InitializeCluster`<sup>Required</sup> <a name="InitializeCluster" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.InitializeCluster"></a>

```typescript
public readonly InitializeCluster: string[];
```

- *Type:* string[]

IAM actions required for the InitializeCluster API call.

---

##### `ListAvailableZones`<sup>Required</sup> <a name="ListAvailableZones" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ListAvailableZones"></a>

```typescript
public readonly ListAvailableZones: string[];
```

- *Type:* string[]

IAM actions required for the ListAvailableZones API call.

---

##### `ListHapgs`<sup>Required</sup> <a name="ListHapgs" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ListHapgs"></a>

```typescript
public readonly ListHapgs: string[];
```

- *Type:* string[]

IAM actions required for the ListHapgs API call.

---

##### `ListHsms`<sup>Required</sup> <a name="ListHsms" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ListHsms"></a>

```typescript
public readonly ListHsms: string[];
```

- *Type:* string[]

IAM actions required for the ListHsms API call.

---

##### `ListLunaClients`<sup>Required</sup> <a name="ListLunaClients" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ListLunaClients"></a>

```typescript
public readonly ListLunaClients: string[];
```

- *Type:* string[]

IAM actions required for the ListLunaClients API call.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ListTags"></a>

```typescript
public readonly ListTags: string[];
```

- *Type:* string[]

IAM actions required for the ListTags API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ModifyBackupAttributes`<sup>Required</sup> <a name="ModifyBackupAttributes" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ModifyBackupAttributes"></a>

```typescript
public readonly ModifyBackupAttributes: string[];
```

- *Type:* string[]

IAM actions required for the ModifyBackupAttributes API call.

---

##### `ModifyCluster`<sup>Required</sup> <a name="ModifyCluster" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ModifyCluster"></a>

```typescript
public readonly ModifyCluster: string[];
```

- *Type:* string[]

IAM actions required for the ModifyCluster API call.

---

##### `ModifyHapg`<sup>Required</sup> <a name="ModifyHapg" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ModifyHapg"></a>

```typescript
public readonly ModifyHapg: string[];
```

- *Type:* string[]

IAM actions required for the ModifyHapg API call.

---

##### `ModifyHsm`<sup>Required</sup> <a name="ModifyHsm" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ModifyHsm"></a>

```typescript
public readonly ModifyHsm: string[];
```

- *Type:* string[]

IAM actions required for the ModifyHsm API call.

---

##### `ModifyLunaClient`<sup>Required</sup> <a name="ModifyLunaClient" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.ModifyLunaClient"></a>

```typescript
public readonly ModifyLunaClient: string[];
```

- *Type:* string[]

IAM actions required for the ModifyLunaClient API call.

---

##### `opGetConfig`<sup>Required</sup> <a name="opGetConfig" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.opGetConfig"></a>

```typescript
public readonly opGetConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetConfig API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `RemoveTagsFromResource`<sup>Required</sup> <a name="RemoveTagsFromResource" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.RemoveTagsFromResource"></a>

```typescript
public readonly RemoveTagsFromResource: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTagsFromResource API call.

---

##### `RestoreBackup`<sup>Required</sup> <a name="RestoreBackup" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.RestoreBackup"></a>

```typescript
public readonly RestoreBackup: string[];
```

- *Type:* string[]

IAM actions required for the RestoreBackup API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cloudhsm.CloudHSMOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### CloudHSMResources <a name="CloudHSMResources" id="@cdk_utils/iam.cloudhsm.CloudHSMResources"></a>

ARN builders, validators, and parsers for cloudhsm resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudhsm.CloudHSMResources.Initializer"></a>

```typescript
import { cloudhsm } from '@cdk_utils/iam'

new cloudhsm.CloudHSMResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMResources.backup">backup</a></code> | Builds an ARN for the backup resource. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMResources.cluster">cluster</a></code> | Builds an ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMResources.isValidBackupArn">isValidBackupArn</a></code> | Validates whether a string is a valid ARN for the backup resource. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMResources.isValidClusterArn">isValidClusterArn</a></code> | Validates whether a string is a valid ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMResources.parseBackupArn">parseBackupArn</a></code> | Parses a backup ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudhsm.CloudHSMResources.parseClusterArn">parseClusterArn</a></code> | Parses a cluster ARN into its components. |

---

##### `backup` <a name="backup" id="@cdk_utils/iam.cloudhsm.CloudHSMResources.backup"></a>

```typescript
import { cloudhsm } from '@cdk_utils/iam'

cloudhsm.CloudHSMResources.backup(props: CloudHSMBackupArnProps)
```

Builds an ARN for the backup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudhsm.CloudHSMResources.backup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudhsm.CloudHSMBackupArnProps">CloudHSMBackupArnProps</a>

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.cloudhsm.CloudHSMResources.cluster"></a>

```typescript
import { cloudhsm } from '@cdk_utils/iam'

cloudhsm.CloudHSMResources.cluster(props: CloudHSMClusterArnProps)
```

Builds an ARN for the cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudhsm.CloudHSMResources.cluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudhsm.CloudHSMClusterArnProps">CloudHSMClusterArnProps</a>

---

##### `isValidBackupArn` <a name="isValidBackupArn" id="@cdk_utils/iam.cloudhsm.CloudHSMResources.isValidBackupArn"></a>

```typescript
import { cloudhsm } from '@cdk_utils/iam'

cloudhsm.CloudHSMResources.isValidBackupArn(arn: string)
```

Validates whether a string is a valid ARN for the backup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudhsm.CloudHSMResources.isValidBackupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidClusterArn` <a name="isValidClusterArn" id="@cdk_utils/iam.cloudhsm.CloudHSMResources.isValidClusterArn"></a>

```typescript
import { cloudhsm } from '@cdk_utils/iam'

cloudhsm.CloudHSMResources.isValidClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudhsm.CloudHSMResources.isValidClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBackupArn` <a name="parseBackupArn" id="@cdk_utils/iam.cloudhsm.CloudHSMResources.parseBackupArn"></a>

```typescript
import { cloudhsm } from '@cdk_utils/iam'

cloudhsm.CloudHSMResources.parseBackupArn(arn: string)
```

Parses a backup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudhsm.CloudHSMResources.parseBackupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterArn` <a name="parseClusterArn" id="@cdk_utils/iam.cloudhsm.CloudHSMResources.parseClusterArn"></a>

```typescript
import { cloudhsm } from '@cdk_utils/iam'

cloudhsm.CloudHSMResources.parseClusterArn(arn: string)
```

Parses a cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudhsm.CloudHSMResources.parseClusterArn.parameter.arn"></a>

- *Type:* string

---




