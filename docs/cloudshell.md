# `cloudshell` Submodule <a name="`cloudshell` Submodule" id="@cdk_utils/iam.cloudshell"></a>


## Structs <a name="Structs" id="Structs"></a>

### CloudShellEnvironmentArnComponents <a name="CloudShellEnvironmentArnComponents" id="@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnComponents"></a>

Parsed components of a Environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnComponents.Initializer"></a>

```typescript
import { cloudshell } from '@cdk_utils/iam'

const cloudShellEnvironmentArnComponents: cloudshell.CloudShellEnvironmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudShellEnvironmentArnProps <a name="CloudShellEnvironmentArnProps" id="@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnProps"></a>

Properties for building a Environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnProps.Initializer"></a>

```typescript
import { cloudshell } from '@cdk_utils/iam'

const cloudShellEnvironmentArnProps: cloudshell.CloudShellEnvironmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CloudShellActions <a name="CloudShellActions" id="@cdk_utils/iam.cloudshell.CloudShellActions"></a>

IAM action constants for the cloudshell service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudshell.CloudShellActions.Initializer"></a>

```typescript
import { cloudshell } from '@cdk_utils/iam'

new cloudshell.CloudShellActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellActions.property.actionGetEnvironmentStatus">actionGetEnvironmentStatus</a></code> | <code>string</code> | [Read] cloudshell:GetEnvironmentStatus. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellActions.property.actionGetFileDownloadUrls">actionGetFileDownloadUrls</a></code> | <code>string</code> | [Write] cloudshell:GetFileDownloadUrls. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellActions.property.actionGetFileUploadUrls">actionGetFileUploadUrls</a></code> | <code>string</code> | [Write] cloudshell:GetFileUploadUrls. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellActions.property.ApproveCommand">ApproveCommand</a></code> | <code>string</code> | [Read] cloudshell:ApproveCommand. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellActions.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string</code> | [Write] cloudshell:CreateEnvironment. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellActions.property.CreateSession">CreateSession</a></code> | <code>string</code> | [Write] cloudshell:CreateSession. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellActions.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string</code> | [Write] cloudshell:DeleteEnvironment. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellActions.property.DescribeEnvironments">DescribeEnvironments</a></code> | <code>string</code> | [List] cloudshell:DescribeEnvironments. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellActions.property.PutCredentials">PutCredentials</a></code> | <code>string</code> | [Write] cloudshell:PutCredentials. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellActions.property.StartEnvironment">StartEnvironment</a></code> | <code>string</code> | [Write] cloudshell:StartEnvironment. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellActions.property.StopEnvironment">StopEnvironment</a></code> | <code>string</code> | [Write] cloudshell:StopEnvironment. |

---

##### `actionGetEnvironmentStatus`<sup>Required</sup> <a name="actionGetEnvironmentStatus" id="@cdk_utils/iam.cloudshell.CloudShellActions.property.actionGetEnvironmentStatus"></a>

```typescript
public readonly actionGetEnvironmentStatus: string;
```

- *Type:* string

[Read] cloudshell:GetEnvironmentStatus.

---

##### `actionGetFileDownloadUrls`<sup>Required</sup> <a name="actionGetFileDownloadUrls" id="@cdk_utils/iam.cloudshell.CloudShellActions.property.actionGetFileDownloadUrls"></a>

```typescript
public readonly actionGetFileDownloadUrls: string;
```

- *Type:* string

[Write] cloudshell:GetFileDownloadUrls.

---

##### `actionGetFileUploadUrls`<sup>Required</sup> <a name="actionGetFileUploadUrls" id="@cdk_utils/iam.cloudshell.CloudShellActions.property.actionGetFileUploadUrls"></a>

```typescript
public readonly actionGetFileUploadUrls: string;
```

- *Type:* string

[Write] cloudshell:GetFileUploadUrls.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.cloudshell.CloudShellActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.cloudshell.CloudShellActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.cloudshell.CloudShellActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.cloudshell.CloudShellActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.cloudshell.CloudShellActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ApproveCommand`<sup>Required</sup> <a name="ApproveCommand" id="@cdk_utils/iam.cloudshell.CloudShellActions.property.ApproveCommand"></a>

```typescript
public readonly ApproveCommand: string;
```

- *Type:* string

[Read] cloudshell:ApproveCommand.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.cloudshell.CloudShellActions.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string;
```

- *Type:* string

[Write] cloudshell:CreateEnvironment.

---

##### `CreateSession`<sup>Required</sup> <a name="CreateSession" id="@cdk_utils/iam.cloudshell.CloudShellActions.property.CreateSession"></a>

```typescript
public readonly CreateSession: string;
```

- *Type:* string

[Write] cloudshell:CreateSession.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.cloudshell.CloudShellActions.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string;
```

- *Type:* string

[Write] cloudshell:DeleteEnvironment.

---

##### `DescribeEnvironments`<sup>Required</sup> <a name="DescribeEnvironments" id="@cdk_utils/iam.cloudshell.CloudShellActions.property.DescribeEnvironments"></a>

```typescript
public readonly DescribeEnvironments: string;
```

- *Type:* string

[List] cloudshell:DescribeEnvironments.

---

##### `PutCredentials`<sup>Required</sup> <a name="PutCredentials" id="@cdk_utils/iam.cloudshell.CloudShellActions.property.PutCredentials"></a>

```typescript
public readonly PutCredentials: string;
```

- *Type:* string

[Write] cloudshell:PutCredentials.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.cloudshell.CloudShellActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartEnvironment`<sup>Required</sup> <a name="StartEnvironment" id="@cdk_utils/iam.cloudshell.CloudShellActions.property.StartEnvironment"></a>

```typescript
public readonly StartEnvironment: string;
```

- *Type:* string

[Write] cloudshell:StartEnvironment.

---

##### `StopEnvironment`<sup>Required</sup> <a name="StopEnvironment" id="@cdk_utils/iam.cloudshell.CloudShellActions.property.StopEnvironment"></a>

```typescript
public readonly StopEnvironment: string;
```

- *Type:* string

[Write] cloudshell:StopEnvironment.

---

### CloudShellConditions <a name="CloudShellConditions" id="@cdk_utils/iam.cloudshell.CloudShellConditions"></a>

Condition key constants and builders for cloudshell.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudshell.CloudShellConditions.Initializer"></a>

```typescript
import { cloudshell } from '@cdk_utils/iam'

new cloudshell.CloudShellConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellConditions.securityGroupIds">securityGroupIds</a></code> | Generates a condition block for `cloudshell:SecurityGroupIds`. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellConditions.subnetIds">subnetIds</a></code> | Generates a condition block for `cloudshell:SubnetIds`. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellConditions.vpcIds">vpcIds</a></code> | Generates a condition block for `cloudshell:VpcIds`. |

---

##### `securityGroupIds` <a name="securityGroupIds" id="@cdk_utils/iam.cloudshell.CloudShellConditions.securityGroupIds"></a>

```typescript
import { cloudshell } from '@cdk_utils/iam'

cloudshell.CloudShellConditions.securityGroupIds(values: string[])
```

Generates a condition block for `cloudshell:SecurityGroupIds`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cloudshell.CloudShellConditions.securityGroupIds.parameter.values"></a>

- *Type:* string[]

---

##### `subnetIds` <a name="subnetIds" id="@cdk_utils/iam.cloudshell.CloudShellConditions.subnetIds"></a>

```typescript
import { cloudshell } from '@cdk_utils/iam'

cloudshell.CloudShellConditions.subnetIds(values: string[])
```

Generates a condition block for `cloudshell:SubnetIds`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cloudshell.CloudShellConditions.subnetIds.parameter.values"></a>

- *Type:* string[]

---

##### `vpcIds` <a name="vpcIds" id="@cdk_utils/iam.cloudshell.CloudShellConditions.vpcIds"></a>

```typescript
import { cloudshell } from '@cdk_utils/iam'

cloudshell.CloudShellConditions.vpcIds(values: string[])
```

Generates a condition block for `cloudshell:VpcIds`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cloudshell.CloudShellConditions.vpcIds.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellConditions.property.CreateEnvironmentConditionKeys">CreateEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironment action. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellConditions.property.SECURITY_GROUP_IDS">SECURITY_GROUP_IDS</a></code> | <code>string</code> | Condition key: cloudshell:SecurityGroupIds (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellConditions.property.SUBNET_IDS">SUBNET_IDS</a></code> | <code>string</code> | Condition key: cloudshell:SubnetIds (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellConditions.property.VPC_IDS">VPC_IDS</a></code> | <code>string</code> | Condition key: cloudshell:VpcIds (ArrayOfString). |

---

##### `CreateEnvironmentConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentConditionKeys" id="@cdk_utils/iam.cloudshell.CloudShellConditions.property.CreateEnvironmentConditionKeys"></a>

```typescript
public readonly CreateEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironment action.

---

##### `SECURITY_GROUP_IDS`<sup>Required</sup> <a name="SECURITY_GROUP_IDS" id="@cdk_utils/iam.cloudshell.CloudShellConditions.property.SECURITY_GROUP_IDS"></a>

```typescript
public readonly SECURITY_GROUP_IDS: string;
```

- *Type:* string

Condition key: cloudshell:SecurityGroupIds (ArrayOfString).

---

##### `SUBNET_IDS`<sup>Required</sup> <a name="SUBNET_IDS" id="@cdk_utils/iam.cloudshell.CloudShellConditions.property.SUBNET_IDS"></a>

```typescript
public readonly SUBNET_IDS: string;
```

- *Type:* string

Condition key: cloudshell:SubnetIds (ArrayOfString).

---

##### `VPC_IDS`<sup>Required</sup> <a name="VPC_IDS" id="@cdk_utils/iam.cloudshell.CloudShellConditions.property.VPC_IDS"></a>

```typescript
public readonly VPC_IDS: string;
```

- *Type:* string

Condition key: cloudshell:VpcIds (ArrayOfString).

---

### CloudShellResources <a name="CloudShellResources" id="@cdk_utils/iam.cloudshell.CloudShellResources"></a>

ARN builders, validators, and parsers for cloudshell resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudshell.CloudShellResources.Initializer"></a>

```typescript
import { cloudshell } from '@cdk_utils/iam'

new cloudshell.CloudShellResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellResources.environment">environment</a></code> | Builds an ARN for the Environment resource. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellResources.isValidEnvironmentArn">isValidEnvironmentArn</a></code> | Validates whether a string is a valid ARN for the Environment resource. |
| <code><a href="#@cdk_utils/iam.cloudshell.CloudShellResources.parseEnvironmentArn">parseEnvironmentArn</a></code> | Parses a Environment ARN into its components. |

---

##### `environment` <a name="environment" id="@cdk_utils/iam.cloudshell.CloudShellResources.environment"></a>

```typescript
import { cloudshell } from '@cdk_utils/iam'

cloudshell.CloudShellResources.environment(props: CloudShellEnvironmentArnProps)
```

Builds an ARN for the Environment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudshell.CloudShellResources.environment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudshell.CloudShellEnvironmentArnProps">CloudShellEnvironmentArnProps</a>

---

##### `isValidEnvironmentArn` <a name="isValidEnvironmentArn" id="@cdk_utils/iam.cloudshell.CloudShellResources.isValidEnvironmentArn"></a>

```typescript
import { cloudshell } from '@cdk_utils/iam'

cloudshell.CloudShellResources.isValidEnvironmentArn(arn: string)
```

Validates whether a string is a valid ARN for the Environment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudshell.CloudShellResources.isValidEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnvironmentArn` <a name="parseEnvironmentArn" id="@cdk_utils/iam.cloudshell.CloudShellResources.parseEnvironmentArn"></a>

```typescript
import { cloudshell } from '@cdk_utils/iam'

cloudshell.CloudShellResources.parseEnvironmentArn(arn: string)
```

Parses a Environment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudshell.CloudShellResources.parseEnvironmentArn.parameter.arn"></a>

- *Type:* string

---




