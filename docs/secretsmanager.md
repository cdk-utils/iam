# `secretsmanager` Submodule <a name="`secretsmanager` Submodule" id="@cdk_utils/iam.secretsmanager"></a>


## Structs <a name="Structs" id="Structs"></a>

### SecretsManagerSecretArnComponents <a name="SecretsManagerSecretArnComponents" id="@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnComponents"></a>

Parsed components of a Secret ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnComponents.Initializer"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

const secretsManagerSecretArnComponents: secretsmanager.SecretsManagerSecretArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnComponents.property.secretId">secretId</a></code> | <code>string</code> | The SecretId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnComponents.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

The SecretId component.

---

### SecretsManagerSecretArnProps <a name="SecretsManagerSecretArnProps" id="@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnProps"></a>

Properties for building a Secret ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnProps.Initializer"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

const secretsManagerSecretArnProps: secretsmanager.SecretsManagerSecretArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnProps.property.secretId">secretId</a></code> | <code>string</code> | The SecretId component of the ARN. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnProps.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

The SecretId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SecretsManagerActions <a name="SecretsManagerActions" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions"></a>

IAM action constants for the secretsmanager service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.Initializer"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

new secretsmanager.SecretsManagerActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.actionGetRandomPassword">actionGetRandomPassword</a></code> | <code>string</code> | [Read] secretsmanager:GetRandomPassword. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] secretsmanager:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.actionGetSecretValue">actionGetSecretValue</a></code> | <code>string</code> | [Read] secretsmanager:GetSecretValue. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.BatchGetSecretValue">BatchGetSecretValue</a></code> | <code>string</code> | [Read] secretsmanager:BatchGetSecretValue. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.CancelRotateSecret">CancelRotateSecret</a></code> | <code>string</code> | [Write] secretsmanager:CancelRotateSecret. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.CreateSecret">CreateSecret</a></code> | <code>string</code> | [Write] secretsmanager:CreateSecret. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] secretsmanager:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.DeleteSecret">DeleteSecret</a></code> | <code>string</code> | [Write] secretsmanager:DeleteSecret. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.DescribeSecret">DescribeSecret</a></code> | <code>string</code> | [Read] secretsmanager:DescribeSecret. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.ListSecrets">ListSecrets</a></code> | <code>string</code> | [List] secretsmanager:ListSecrets. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.ListSecretVersionIds">ListSecretVersionIds</a></code> | <code>string</code> | [Read] secretsmanager:ListSecretVersionIds. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] secretsmanager:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.PutSecretValue">PutSecretValue</a></code> | <code>string</code> | [Write] secretsmanager:PutSecretValue. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.RemoveRegionsFromReplication">RemoveRegionsFromReplication</a></code> | <code>string</code> | [Write] secretsmanager:RemoveRegionsFromReplication. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.ReplicateSecretToRegions">ReplicateSecretToRegions</a></code> | <code>string</code> | [Write] secretsmanager:ReplicateSecretToRegions. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.RestoreSecret">RestoreSecret</a></code> | <code>string</code> | [Write] secretsmanager:RestoreSecret. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.RotateSecret">RotateSecret</a></code> | <code>string</code> | [Write] secretsmanager:RotateSecret. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.StopReplicationToReplica">StopReplicationToReplica</a></code> | <code>string</code> | [Write] secretsmanager:StopReplicationToReplica. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] secretsmanager:TagResource. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] secretsmanager:UntagResource. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.UpdateSecret">UpdateSecret</a></code> | <code>string</code> | [Write] secretsmanager:UpdateSecret. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.UpdateSecretVersionStage">UpdateSecretVersionStage</a></code> | <code>string</code> | [Write] secretsmanager:UpdateSecretVersionStage. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.ValidateResourcePolicy">ValidateResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] secretsmanager:ValidateResourcePolicy. |

---

##### `actionGetRandomPassword`<sup>Required</sup> <a name="actionGetRandomPassword" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.actionGetRandomPassword"></a>

```typescript
public readonly actionGetRandomPassword: string;
```

- *Type:* string

[Read] secretsmanager:GetRandomPassword.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] secretsmanager:GetResourcePolicy.

---

##### `actionGetSecretValue`<sup>Required</sup> <a name="actionGetSecretValue" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.actionGetSecretValue"></a>

```typescript
public readonly actionGetSecretValue: string;
```

- *Type:* string

[Read] secretsmanager:GetSecretValue.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGetSecretValue`<sup>Required</sup> <a name="BatchGetSecretValue" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.BatchGetSecretValue"></a>

```typescript
public readonly BatchGetSecretValue: string;
```

- *Type:* string

[Read] secretsmanager:BatchGetSecretValue.

---

##### `CancelRotateSecret`<sup>Required</sup> <a name="CancelRotateSecret" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.CancelRotateSecret"></a>

```typescript
public readonly CancelRotateSecret: string;
```

- *Type:* string

[Write] secretsmanager:CancelRotateSecret.

---

##### `CreateSecret`<sup>Required</sup> <a name="CreateSecret" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.CreateSecret"></a>

```typescript
public readonly CreateSecret: string;
```

- *Type:* string

[Write] secretsmanager:CreateSecret.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] secretsmanager:DeleteResourcePolicy.

---

##### `DeleteSecret`<sup>Required</sup> <a name="DeleteSecret" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.DeleteSecret"></a>

```typescript
public readonly DeleteSecret: string;
```

- *Type:* string

[Write] secretsmanager:DeleteSecret.

---

##### `DescribeSecret`<sup>Required</sup> <a name="DescribeSecret" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.DescribeSecret"></a>

```typescript
public readonly DescribeSecret: string;
```

- *Type:* string

[Read] secretsmanager:DescribeSecret.

---

##### `ListSecrets`<sup>Required</sup> <a name="ListSecrets" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.ListSecrets"></a>

```typescript
public readonly ListSecrets: string;
```

- *Type:* string

[List] secretsmanager:ListSecrets.

---

##### `ListSecretVersionIds`<sup>Required</sup> <a name="ListSecretVersionIds" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.ListSecretVersionIds"></a>

```typescript
public readonly ListSecretVersionIds: string;
```

- *Type:* string

[Read] secretsmanager:ListSecretVersionIds.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] secretsmanager:PutResourcePolicy.

---

##### `PutSecretValue`<sup>Required</sup> <a name="PutSecretValue" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.PutSecretValue"></a>

```typescript
public readonly PutSecretValue: string;
```

- *Type:* string

[Write] secretsmanager:PutSecretValue.

---

##### `RemoveRegionsFromReplication`<sup>Required</sup> <a name="RemoveRegionsFromReplication" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.RemoveRegionsFromReplication"></a>

```typescript
public readonly RemoveRegionsFromReplication: string;
```

- *Type:* string

[Write] secretsmanager:RemoveRegionsFromReplication.

---

##### `ReplicateSecretToRegions`<sup>Required</sup> <a name="ReplicateSecretToRegions" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.ReplicateSecretToRegions"></a>

```typescript
public readonly ReplicateSecretToRegions: string;
```

- *Type:* string

[Write] secretsmanager:ReplicateSecretToRegions.

---

##### `RestoreSecret`<sup>Required</sup> <a name="RestoreSecret" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.RestoreSecret"></a>

```typescript
public readonly RestoreSecret: string;
```

- *Type:* string

[Write] secretsmanager:RestoreSecret.

---

##### `RotateSecret`<sup>Required</sup> <a name="RotateSecret" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.RotateSecret"></a>

```typescript
public readonly RotateSecret: string;
```

- *Type:* string

[Write] secretsmanager:RotateSecret.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StopReplicationToReplica`<sup>Required</sup> <a name="StopReplicationToReplica" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.StopReplicationToReplica"></a>

```typescript
public readonly StopReplicationToReplica: string;
```

- *Type:* string

[Write] secretsmanager:StopReplicationToReplica.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] secretsmanager:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] secretsmanager:UntagResource.

---

##### `UpdateSecret`<sup>Required</sup> <a name="UpdateSecret" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.UpdateSecret"></a>

```typescript
public readonly UpdateSecret: string;
```

- *Type:* string

[Write] secretsmanager:UpdateSecret.

---

##### `UpdateSecretVersionStage`<sup>Required</sup> <a name="UpdateSecretVersionStage" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.UpdateSecretVersionStage"></a>

```typescript
public readonly UpdateSecretVersionStage: string;
```

- *Type:* string

[Write] secretsmanager:UpdateSecretVersionStage.

---

##### `ValidateResourcePolicy`<sup>Required</sup> <a name="ValidateResourcePolicy" id="@cdk_utils/iam.secretsmanager.SecretsManagerActions.property.ValidateResourcePolicy"></a>

```typescript
public readonly ValidateResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] secretsmanager:ValidateResourcePolicy.

---

### SecretsManagerConditions <a name="SecretsManagerConditions" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions"></a>

Condition key constants and builders for secretsmanager.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.Initializer"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

new secretsmanager.SecretsManagerConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.addReplicaRegions">addReplicaRegions</a></code> | Generates a condition block for `secretsmanager:AddReplicaRegions`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.blockPublicPolicy">blockPublicPolicy</a></code> | Generates a condition block for `secretsmanager:BlockPublicPolicy`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.conditionName">conditionName</a></code> | Generates a condition block for `secretsmanager:Name`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.description">description</a></code> | Generates a condition block for `secretsmanager:Description`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.externalSecretRotationRoleARN">externalSecretRotationRoleARN</a></code> | Generates a condition block for `secretsmanager:ExternalSecretRotationRoleArn`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.forceDeleteWithoutRecovery">forceDeleteWithoutRecovery</a></code> | Generates a condition block for `secretsmanager:ForceDeleteWithoutRecovery`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.forceOverwriteReplicaSecret">forceOverwriteReplicaSecret</a></code> | Generates a condition block for `secretsmanager:ForceOverwriteReplicaSecret`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.kmsKeyARN">kmsKeyARN</a></code> | Generates a condition block for `secretsmanager:KmsKeyArn`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.kmsKeyId">kmsKeyId</a></code> | Generates a condition block for `secretsmanager:KmsKeyId`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.modifyRotationRules">modifyRotationRules</a></code> | Generates a condition block for `secretsmanager:ModifyRotationRules`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.recoveryWindowInDays">recoveryWindowInDays</a></code> | Generates a condition block for `secretsmanager:RecoveryWindowInDays`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.resourceAllowRotationLambdaARN">resourceAllowRotationLambdaARN</a></code> | Generates a condition block for `secretsmanager:resource/AllowRotationLambdaArn`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.resourceTagTagKey">resourceTagTagKey</a></code> | Generates a condition block for `secretsmanager:ResourceTag/tag-key`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.resourceType">resourceType</a></code> | Generates a condition block for `secretsmanager:resource/Type`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.rotateImmediately">rotateImmediately</a></code> | Generates a condition block for `secretsmanager:RotateImmediately`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.rotationLambdaARN">rotationLambdaARN</a></code> | Generates a condition block for `secretsmanager:RotationLambdaARN`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.secretId">secretId</a></code> | Generates a condition block for `secretsmanager:SecretId`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.secretPrimaryRegion">secretPrimaryRegion</a></code> | Generates a condition block for `secretsmanager:SecretPrimaryRegion`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.type">type</a></code> | Generates a condition block for `secretsmanager:Type`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.versionId">versionId</a></code> | Generates a condition block for `secretsmanager:VersionId`. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.versionStage">versionStage</a></code> | Generates a condition block for `secretsmanager:VersionStage`. |

---

##### `addReplicaRegions` <a name="addReplicaRegions" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.addReplicaRegions"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.addReplicaRegions(values: string[])
```

Generates a condition block for `secretsmanager:AddReplicaRegions`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.addReplicaRegions.parameter.values"></a>

- *Type:* string[]

---

##### `blockPublicPolicy` <a name="blockPublicPolicy" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.blockPublicPolicy"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.blockPublicPolicy(value: boolean)
```

Generates a condition block for `secretsmanager:BlockPublicPolicy`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.blockPublicPolicy.parameter.value"></a>

- *Type:* boolean

---

##### `conditionName` <a name="conditionName" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.conditionName"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.conditionName(value: string)
```

Generates a condition block for `secretsmanager:Name`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.conditionName.parameter.value"></a>

- *Type:* string

---

##### `description` <a name="description" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.description"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.description(value: string)
```

Generates a condition block for `secretsmanager:Description`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.description.parameter.value"></a>

- *Type:* string

---

##### `externalSecretRotationRoleARN` <a name="externalSecretRotationRoleARN" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.externalSecretRotationRoleARN"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.externalSecretRotationRoleARN(value: string)
```

Generates a condition block for `secretsmanager:ExternalSecretRotationRoleArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.externalSecretRotationRoleARN.parameter.value"></a>

- *Type:* string

---

##### `forceDeleteWithoutRecovery` <a name="forceDeleteWithoutRecovery" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.forceDeleteWithoutRecovery"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.forceDeleteWithoutRecovery(value: boolean)
```

Generates a condition block for `secretsmanager:ForceDeleteWithoutRecovery`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.forceDeleteWithoutRecovery.parameter.value"></a>

- *Type:* boolean

---

##### `forceOverwriteReplicaSecret` <a name="forceOverwriteReplicaSecret" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.forceOverwriteReplicaSecret"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.forceOverwriteReplicaSecret(value: boolean)
```

Generates a condition block for `secretsmanager:ForceOverwriteReplicaSecret`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.forceOverwriteReplicaSecret.parameter.value"></a>

- *Type:* boolean

---

##### `kmsKeyARN` <a name="kmsKeyARN" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.kmsKeyARN"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.kmsKeyARN(value: string)
```

Generates a condition block for `secretsmanager:KmsKeyArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.kmsKeyARN.parameter.value"></a>

- *Type:* string

---

##### `kmsKeyId` <a name="kmsKeyId" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.kmsKeyId"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.kmsKeyId(value: string)
```

Generates a condition block for `secretsmanager:KmsKeyId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.kmsKeyId.parameter.value"></a>

- *Type:* string

---

##### `modifyRotationRules` <a name="modifyRotationRules" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.modifyRotationRules"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.modifyRotationRules(value: boolean)
```

Generates a condition block for `secretsmanager:ModifyRotationRules`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.modifyRotationRules.parameter.value"></a>

- *Type:* boolean

---

##### `recoveryWindowInDays` <a name="recoveryWindowInDays" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.recoveryWindowInDays"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.recoveryWindowInDays(value: number)
```

Generates a condition block for `secretsmanager:RecoveryWindowInDays`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.recoveryWindowInDays.parameter.value"></a>

- *Type:* number

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.requestTag"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceAllowRotationLambdaARN` <a name="resourceAllowRotationLambdaARN" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.resourceAllowRotationLambdaARN"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.resourceAllowRotationLambdaARN(value: string)
```

Generates a condition block for `secretsmanager:resource/AllowRotationLambdaArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.resourceAllowRotationLambdaARN.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.resourceTag"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTagTagKey` <a name="resourceTagTagKey" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.resourceTagTagKey"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.resourceTagTagKey(value: string)
```

Generates a condition block for `secretsmanager:ResourceTag/tag-key`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.resourceTagTagKey.parameter.value"></a>

- *Type:* string

---

##### `resourceType` <a name="resourceType" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.resourceType"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.resourceType(value: string)
```

Generates a condition block for `secretsmanager:resource/Type`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.resourceType.parameter.value"></a>

- *Type:* string

---

##### `rotateImmediately` <a name="rotateImmediately" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.rotateImmediately"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.rotateImmediately(value: boolean)
```

Generates a condition block for `secretsmanager:RotateImmediately`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.rotateImmediately.parameter.value"></a>

- *Type:* boolean

---

##### `rotationLambdaARN` <a name="rotationLambdaARN" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.rotationLambdaARN"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.rotationLambdaARN(value: string)
```

Generates a condition block for `secretsmanager:RotationLambdaARN`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.rotationLambdaARN.parameter.value"></a>

- *Type:* string

---

##### `secretId` <a name="secretId" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.secretId"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.secretId(value: string)
```

Generates a condition block for `secretsmanager:SecretId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.secretId.parameter.value"></a>

- *Type:* string

---

##### `secretPrimaryRegion` <a name="secretPrimaryRegion" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.secretPrimaryRegion"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.secretPrimaryRegion(value: string)
```

Generates a condition block for `secretsmanager:SecretPrimaryRegion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.secretPrimaryRegion.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.tagKeys"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `type` <a name="type" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.type"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.type(value: string)
```

Generates a condition block for `secretsmanager:Type`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.type.parameter.value"></a>

- *Type:* string

---

##### `versionId` <a name="versionId" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.versionId"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.versionId(value: string)
```

Generates a condition block for `secretsmanager:VersionId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.versionId.parameter.value"></a>

- *Type:* string

---

##### `versionStage` <a name="versionStage" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.versionStage"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerConditions.versionStage(value: string)
```

Generates a condition block for `secretsmanager:VersionStage`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.versionStage.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.actionGetResourcePolicyConditionKeys">actionGetResourcePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetResourcePolicy action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.actionGetSecretValueConditionKeys">actionGetSecretValueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSecretValue action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.ADD_REPLICA_REGIONS">ADD_REPLICA_REGIONS</a></code> | <code>string</code> | Condition key: secretsmanager:AddReplicaRegions (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.BLOCK_PUBLIC_POLICY">BLOCK_PUBLIC_POLICY</a></code> | <code>string</code> | Condition key: secretsmanager:BlockPublicPolicy (Bool). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.CancelRotateSecretConditionKeys">CancelRotateSecretConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelRotateSecret action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.CreateSecretConditionKeys">CreateSecretConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSecret action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.DeleteResourcePolicyConditionKeys">DeleteResourcePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteResourcePolicy action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.DeleteSecretConditionKeys">DeleteSecretConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteSecret action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.DescribeSecretConditionKeys">DescribeSecretConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeSecret action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.DESCRIPTION">DESCRIPTION</a></code> | <code>string</code> | Condition key: secretsmanager:Description (String). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.EXTERNAL_SECRET_ROTATION_ROLE_ARN">EXTERNAL_SECRET_ROTATION_ROLE_ARN</a></code> | <code>string</code> | Condition key: secretsmanager:ExternalSecretRotationRoleArn (ARN). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.FORCE_DELETE_WITHOUT_RECOVERY">FORCE_DELETE_WITHOUT_RECOVERY</a></code> | <code>string</code> | Condition key: secretsmanager:ForceDeleteWithoutRecovery (Bool). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.FORCE_OVERWRITE_REPLICA_SECRET">FORCE_OVERWRITE_REPLICA_SECRET</a></code> | <code>string</code> | Condition key: secretsmanager:ForceOverwriteReplicaSecret (Bool). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.KMS_KEY_ARN">KMS_KEY_ARN</a></code> | <code>string</code> | Condition key: secretsmanager:KmsKeyArn (ARN). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.KMS_KEY_ID">KMS_KEY_ID</a></code> | <code>string</code> | Condition key: secretsmanager:KmsKeyId (String). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.ListSecretVersionIdsConditionKeys">ListSecretVersionIdsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSecretVersionIds action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.MODIFY_ROTATION_RULES">MODIFY_ROTATION_RULES</a></code> | <code>string</code> | Condition key: secretsmanager:ModifyRotationRules (Bool). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.NAME">NAME</a></code> | <code>string</code> | Condition key: secretsmanager:Name (String). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.PutResourcePolicyConditionKeys">PutResourcePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutResourcePolicy action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.PutSecretValueConditionKeys">PutSecretValueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutSecretValue action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.RECOVERY_WINDOW_IN_DAYS">RECOVERY_WINDOW_IN_DAYS</a></code> | <code>string</code> | Condition key: secretsmanager:RecoveryWindowInDays (Numeric). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.RemoveRegionsFromReplicationConditionKeys">RemoveRegionsFromReplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoveRegionsFromReplication action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.ReplicateSecretToRegionsConditionKeys">ReplicateSecretToRegionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ReplicateSecretToRegions action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.RESOURCE_ALLOW_ROTATION_LAMBDA_ARN">RESOURCE_ALLOW_ROTATION_LAMBDA_ARN</a></code> | <code>string</code> | Condition key: secretsmanager:resource/AllowRotationLambdaArn (ARN). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.RESOURCE_TAG_TAG_KEY">RESOURCE_TAG_TAG_KEY</a></code> | <code>string</code> | Condition key: secretsmanager:ResourceTag/tag-key (String). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.RESOURCE_TYPE">RESOURCE_TYPE</a></code> | <code>string</code> | Condition key: secretsmanager:resource/Type (String). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.RestoreSecretConditionKeys">RestoreSecretConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RestoreSecret action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.ROTATE_IMMEDIATELY">ROTATE_IMMEDIATELY</a></code> | <code>string</code> | Condition key: secretsmanager:RotateImmediately (Bool). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.RotateSecretConditionKeys">RotateSecretConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RotateSecret action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.ROTATION_LAMBDA_ARN">ROTATION_LAMBDA_ARN</a></code> | <code>string</code> | Condition key: secretsmanager:RotationLambdaARN (ARN). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.SECRET_ID">SECRET_ID</a></code> | <code>string</code> | Condition key: secretsmanager:SecretId (ARN). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.SECRET_PRIMARY_REGION">SECRET_PRIMARY_REGION</a></code> | <code>string</code> | Condition key: secretsmanager:SecretPrimaryRegion (String). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.StopReplicationToReplicaConditionKeys">StopReplicationToReplicaConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopReplicationToReplica action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.TYPE">TYPE</a></code> | <code>string</code> | Condition key: secretsmanager:Type (String). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.UpdateSecretConditionKeys">UpdateSecretConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSecret action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.UpdateSecretVersionStageConditionKeys">UpdateSecretVersionStageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSecretVersionStage action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.ValidateResourcePolicyConditionKeys">ValidateResourcePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ValidateResourcePolicy action. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.VERSION_ID">VERSION_ID</a></code> | <code>string</code> | Condition key: secretsmanager:VersionId (String). |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.VERSION_STAGE">VERSION_STAGE</a></code> | <code>string</code> | Condition key: secretsmanager:VersionStage (String). |

---

##### `actionGetResourcePolicyConditionKeys`<sup>Required</sup> <a name="actionGetResourcePolicyConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.actionGetResourcePolicyConditionKeys"></a>

```typescript
public readonly actionGetResourcePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetResourcePolicy action.

---

##### `actionGetSecretValueConditionKeys`<sup>Required</sup> <a name="actionGetSecretValueConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.actionGetSecretValueConditionKeys"></a>

```typescript
public readonly actionGetSecretValueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSecretValue action.

---

##### `ADD_REPLICA_REGIONS`<sup>Required</sup> <a name="ADD_REPLICA_REGIONS" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.ADD_REPLICA_REGIONS"></a>

```typescript
public readonly ADD_REPLICA_REGIONS: string;
```

- *Type:* string

Condition key: secretsmanager:AddReplicaRegions (ArrayOfString).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BLOCK_PUBLIC_POLICY`<sup>Required</sup> <a name="BLOCK_PUBLIC_POLICY" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.BLOCK_PUBLIC_POLICY"></a>

```typescript
public readonly BLOCK_PUBLIC_POLICY: string;
```

- *Type:* string

Condition key: secretsmanager:BlockPublicPolicy (Bool).

---

##### `CancelRotateSecretConditionKeys`<sup>Required</sup> <a name="CancelRotateSecretConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.CancelRotateSecretConditionKeys"></a>

```typescript
public readonly CancelRotateSecretConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelRotateSecret action.

---

##### `CreateSecretConditionKeys`<sup>Required</sup> <a name="CreateSecretConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.CreateSecretConditionKeys"></a>

```typescript
public readonly CreateSecretConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSecret action.

---

##### `DeleteResourcePolicyConditionKeys`<sup>Required</sup> <a name="DeleteResourcePolicyConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.DeleteResourcePolicyConditionKeys"></a>

```typescript
public readonly DeleteResourcePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteResourcePolicy action.

---

##### `DeleteSecretConditionKeys`<sup>Required</sup> <a name="DeleteSecretConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.DeleteSecretConditionKeys"></a>

```typescript
public readonly DeleteSecretConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteSecret action.

---

##### `DescribeSecretConditionKeys`<sup>Required</sup> <a name="DescribeSecretConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.DescribeSecretConditionKeys"></a>

```typescript
public readonly DescribeSecretConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeSecret action.

---

##### `DESCRIPTION`<sup>Required</sup> <a name="DESCRIPTION" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.DESCRIPTION"></a>

```typescript
public readonly DESCRIPTION: string;
```

- *Type:* string

Condition key: secretsmanager:Description (String).

---

##### `EXTERNAL_SECRET_ROTATION_ROLE_ARN`<sup>Required</sup> <a name="EXTERNAL_SECRET_ROTATION_ROLE_ARN" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.EXTERNAL_SECRET_ROTATION_ROLE_ARN"></a>

```typescript
public readonly EXTERNAL_SECRET_ROTATION_ROLE_ARN: string;
```

- *Type:* string

Condition key: secretsmanager:ExternalSecretRotationRoleArn (ARN).

---

##### `FORCE_DELETE_WITHOUT_RECOVERY`<sup>Required</sup> <a name="FORCE_DELETE_WITHOUT_RECOVERY" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.FORCE_DELETE_WITHOUT_RECOVERY"></a>

```typescript
public readonly FORCE_DELETE_WITHOUT_RECOVERY: string;
```

- *Type:* string

Condition key: secretsmanager:ForceDeleteWithoutRecovery (Bool).

---

##### `FORCE_OVERWRITE_REPLICA_SECRET`<sup>Required</sup> <a name="FORCE_OVERWRITE_REPLICA_SECRET" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.FORCE_OVERWRITE_REPLICA_SECRET"></a>

```typescript
public readonly FORCE_OVERWRITE_REPLICA_SECRET: string;
```

- *Type:* string

Condition key: secretsmanager:ForceOverwriteReplicaSecret (Bool).

---

##### `KMS_KEY_ARN`<sup>Required</sup> <a name="KMS_KEY_ARN" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.KMS_KEY_ARN"></a>

```typescript
public readonly KMS_KEY_ARN: string;
```

- *Type:* string

Condition key: secretsmanager:KmsKeyArn (ARN).

---

##### `KMS_KEY_ID`<sup>Required</sup> <a name="KMS_KEY_ID" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.KMS_KEY_ID"></a>

```typescript
public readonly KMS_KEY_ID: string;
```

- *Type:* string

Condition key: secretsmanager:KmsKeyId (String).

---

##### `ListSecretVersionIdsConditionKeys`<sup>Required</sup> <a name="ListSecretVersionIdsConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.ListSecretVersionIdsConditionKeys"></a>

```typescript
public readonly ListSecretVersionIdsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSecretVersionIds action.

---

##### `MODIFY_ROTATION_RULES`<sup>Required</sup> <a name="MODIFY_ROTATION_RULES" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.MODIFY_ROTATION_RULES"></a>

```typescript
public readonly MODIFY_ROTATION_RULES: string;
```

- *Type:* string

Condition key: secretsmanager:ModifyRotationRules (Bool).

---

##### `NAME`<sup>Required</sup> <a name="NAME" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.NAME"></a>

```typescript
public readonly NAME: string;
```

- *Type:* string

Condition key: secretsmanager:Name (String).

---

##### `PutResourcePolicyConditionKeys`<sup>Required</sup> <a name="PutResourcePolicyConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.PutResourcePolicyConditionKeys"></a>

```typescript
public readonly PutResourcePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutResourcePolicy action.

---

##### `PutSecretValueConditionKeys`<sup>Required</sup> <a name="PutSecretValueConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.PutSecretValueConditionKeys"></a>

```typescript
public readonly PutSecretValueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutSecretValue action.

---

##### `RECOVERY_WINDOW_IN_DAYS`<sup>Required</sup> <a name="RECOVERY_WINDOW_IN_DAYS" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.RECOVERY_WINDOW_IN_DAYS"></a>

```typescript
public readonly RECOVERY_WINDOW_IN_DAYS: string;
```

- *Type:* string

Condition key: secretsmanager:RecoveryWindowInDays (Numeric).

---

##### `RemoveRegionsFromReplicationConditionKeys`<sup>Required</sup> <a name="RemoveRegionsFromReplicationConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.RemoveRegionsFromReplicationConditionKeys"></a>

```typescript
public readonly RemoveRegionsFromReplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoveRegionsFromReplication action.

---

##### `ReplicateSecretToRegionsConditionKeys`<sup>Required</sup> <a name="ReplicateSecretToRegionsConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.ReplicateSecretToRegionsConditionKeys"></a>

```typescript
public readonly ReplicateSecretToRegionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ReplicateSecretToRegions action.

---

##### `RESOURCE_ALLOW_ROTATION_LAMBDA_ARN`<sup>Required</sup> <a name="RESOURCE_ALLOW_ROTATION_LAMBDA_ARN" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.RESOURCE_ALLOW_ROTATION_LAMBDA_ARN"></a>

```typescript
public readonly RESOURCE_ALLOW_ROTATION_LAMBDA_ARN: string;
```

- *Type:* string

Condition key: secretsmanager:resource/AllowRotationLambdaArn (ARN).

---

##### `RESOURCE_TAG_TAG_KEY`<sup>Required</sup> <a name="RESOURCE_TAG_TAG_KEY" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.RESOURCE_TAG_TAG_KEY"></a>

```typescript
public readonly RESOURCE_TAG_TAG_KEY: string;
```

- *Type:* string

Condition key: secretsmanager:ResourceTag/tag-key (String).

---

##### `RESOURCE_TYPE`<sup>Required</sup> <a name="RESOURCE_TYPE" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.RESOURCE_TYPE"></a>

```typescript
public readonly RESOURCE_TYPE: string;
```

- *Type:* string

Condition key: secretsmanager:resource/Type (String).

---

##### `RestoreSecretConditionKeys`<sup>Required</sup> <a name="RestoreSecretConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.RestoreSecretConditionKeys"></a>

```typescript
public readonly RestoreSecretConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RestoreSecret action.

---

##### `ROTATE_IMMEDIATELY`<sup>Required</sup> <a name="ROTATE_IMMEDIATELY" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.ROTATE_IMMEDIATELY"></a>

```typescript
public readonly ROTATE_IMMEDIATELY: string;
```

- *Type:* string

Condition key: secretsmanager:RotateImmediately (Bool).

---

##### `RotateSecretConditionKeys`<sup>Required</sup> <a name="RotateSecretConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.RotateSecretConditionKeys"></a>

```typescript
public readonly RotateSecretConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RotateSecret action.

---

##### `ROTATION_LAMBDA_ARN`<sup>Required</sup> <a name="ROTATION_LAMBDA_ARN" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.ROTATION_LAMBDA_ARN"></a>

```typescript
public readonly ROTATION_LAMBDA_ARN: string;
```

- *Type:* string

Condition key: secretsmanager:RotationLambdaARN (ARN).

---

##### `SECRET_ID`<sup>Required</sup> <a name="SECRET_ID" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.SECRET_ID"></a>

```typescript
public readonly SECRET_ID: string;
```

- *Type:* string

Condition key: secretsmanager:SecretId (ARN).

---

##### `SECRET_PRIMARY_REGION`<sup>Required</sup> <a name="SECRET_PRIMARY_REGION" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.SECRET_PRIMARY_REGION"></a>

```typescript
public readonly SECRET_PRIMARY_REGION: string;
```

- *Type:* string

Condition key: secretsmanager:SecretPrimaryRegion (String).

---

##### `StopReplicationToReplicaConditionKeys`<sup>Required</sup> <a name="StopReplicationToReplicaConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.StopReplicationToReplicaConditionKeys"></a>

```typescript
public readonly StopReplicationToReplicaConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopReplicationToReplica action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TYPE`<sup>Required</sup> <a name="TYPE" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.TYPE"></a>

```typescript
public readonly TYPE: string;
```

- *Type:* string

Condition key: secretsmanager:Type (String).

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateSecretConditionKeys`<sup>Required</sup> <a name="UpdateSecretConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.UpdateSecretConditionKeys"></a>

```typescript
public readonly UpdateSecretConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSecret action.

---

##### `UpdateSecretVersionStageConditionKeys`<sup>Required</sup> <a name="UpdateSecretVersionStageConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.UpdateSecretVersionStageConditionKeys"></a>

```typescript
public readonly UpdateSecretVersionStageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSecretVersionStage action.

---

##### `ValidateResourcePolicyConditionKeys`<sup>Required</sup> <a name="ValidateResourcePolicyConditionKeys" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.ValidateResourcePolicyConditionKeys"></a>

```typescript
public readonly ValidateResourcePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ValidateResourcePolicy action.

---

##### `VERSION_ID`<sup>Required</sup> <a name="VERSION_ID" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.VERSION_ID"></a>

```typescript
public readonly VERSION_ID: string;
```

- *Type:* string

Condition key: secretsmanager:VersionId (String).

---

##### `VERSION_STAGE`<sup>Required</sup> <a name="VERSION_STAGE" id="@cdk_utils/iam.secretsmanager.SecretsManagerConditions.property.VERSION_STAGE"></a>

```typescript
public readonly VERSION_STAGE: string;
```

- *Type:* string

Condition key: secretsmanager:VersionStage (String).

---

### SecretsManagerOperations <a name="SecretsManagerOperations" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations"></a>

API operation to required IAM actions mapping for secretsmanager.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.Initializer"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

new secretsmanager.SecretsManagerOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.BatchGetSecretValue">BatchGetSecretValue</a></code> | <code>string[]</code> | IAM actions required for the BatchGetSecretValue API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.CancelRotateSecret">CancelRotateSecret</a></code> | <code>string[]</code> | IAM actions required for the CancelRotateSecret API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.CreateSecret">CreateSecret</a></code> | <code>string[]</code> | IAM actions required for the CreateSecret API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.DeleteSecret">DeleteSecret</a></code> | <code>string[]</code> | IAM actions required for the DeleteSecret API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.DescribeSecret">DescribeSecret</a></code> | <code>string[]</code> | IAM actions required for the DescribeSecret API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.ListSecrets">ListSecrets</a></code> | <code>string[]</code> | IAM actions required for the ListSecrets API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.ListSecretVersionIds">ListSecretVersionIds</a></code> | <code>string[]</code> | IAM actions required for the ListSecretVersionIds API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.opGetRandomPassword">opGetRandomPassword</a></code> | <code>string[]</code> | IAM actions required for the GetRandomPassword API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.opGetSecretValue">opGetSecretValue</a></code> | <code>string[]</code> | IAM actions required for the GetSecretValue API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.PutSecretValue">PutSecretValue</a></code> | <code>string[]</code> | IAM actions required for the PutSecretValue API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.RemoveRegionsFromReplication">RemoveRegionsFromReplication</a></code> | <code>string[]</code> | IAM actions required for the RemoveRegionsFromReplication API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.ReplicateSecretToRegions">ReplicateSecretToRegions</a></code> | <code>string[]</code> | IAM actions required for the ReplicateSecretToRegions API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.RestoreSecret">RestoreSecret</a></code> | <code>string[]</code> | IAM actions required for the RestoreSecret API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.RotateSecret">RotateSecret</a></code> | <code>string[]</code> | IAM actions required for the RotateSecret API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.StopReplicationToReplica">StopReplicationToReplica</a></code> | <code>string[]</code> | IAM actions required for the StopReplicationToReplica API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.UpdateSecret">UpdateSecret</a></code> | <code>string[]</code> | IAM actions required for the UpdateSecret API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.UpdateSecretVersionStage">UpdateSecretVersionStage</a></code> | <code>string[]</code> | IAM actions required for the UpdateSecretVersionStage API call. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.ValidateResourcePolicy">ValidateResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the ValidateResourcePolicy API call. |

---

##### `BatchGetSecretValue`<sup>Required</sup> <a name="BatchGetSecretValue" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.BatchGetSecretValue"></a>

```typescript
public readonly BatchGetSecretValue: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetSecretValue API call.

---

##### `CancelRotateSecret`<sup>Required</sup> <a name="CancelRotateSecret" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.CancelRotateSecret"></a>

```typescript
public readonly CancelRotateSecret: string[];
```

- *Type:* string[]

IAM actions required for the CancelRotateSecret API call.

---

##### `CreateSecret`<sup>Required</sup> <a name="CreateSecret" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.CreateSecret"></a>

```typescript
public readonly CreateSecret: string[];
```

- *Type:* string[]

IAM actions required for the CreateSecret API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteSecret`<sup>Required</sup> <a name="DeleteSecret" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.DeleteSecret"></a>

```typescript
public readonly DeleteSecret: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSecret API call.

---

##### `DescribeSecret`<sup>Required</sup> <a name="DescribeSecret" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.DescribeSecret"></a>

```typescript
public readonly DescribeSecret: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSecret API call.

---

##### `ListSecrets`<sup>Required</sup> <a name="ListSecrets" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.ListSecrets"></a>

```typescript
public readonly ListSecrets: string[];
```

- *Type:* string[]

IAM actions required for the ListSecrets API call.

---

##### `ListSecretVersionIds`<sup>Required</sup> <a name="ListSecretVersionIds" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.ListSecretVersionIds"></a>

```typescript
public readonly ListSecretVersionIds: string[];
```

- *Type:* string[]

IAM actions required for the ListSecretVersionIds API call.

---

##### `opGetRandomPassword`<sup>Required</sup> <a name="opGetRandomPassword" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.opGetRandomPassword"></a>

```typescript
public readonly opGetRandomPassword: string[];
```

- *Type:* string[]

IAM actions required for the GetRandomPassword API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `opGetSecretValue`<sup>Required</sup> <a name="opGetSecretValue" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.opGetSecretValue"></a>

```typescript
public readonly opGetSecretValue: string[];
```

- *Type:* string[]

IAM actions required for the GetSecretValue API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `PutSecretValue`<sup>Required</sup> <a name="PutSecretValue" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.PutSecretValue"></a>

```typescript
public readonly PutSecretValue: string[];
```

- *Type:* string[]

IAM actions required for the PutSecretValue API call.

---

##### `RemoveRegionsFromReplication`<sup>Required</sup> <a name="RemoveRegionsFromReplication" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.RemoveRegionsFromReplication"></a>

```typescript
public readonly RemoveRegionsFromReplication: string[];
```

- *Type:* string[]

IAM actions required for the RemoveRegionsFromReplication API call.

---

##### `ReplicateSecretToRegions`<sup>Required</sup> <a name="ReplicateSecretToRegions" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.ReplicateSecretToRegions"></a>

```typescript
public readonly ReplicateSecretToRegions: string[];
```

- *Type:* string[]

IAM actions required for the ReplicateSecretToRegions API call.

---

##### `RestoreSecret`<sup>Required</sup> <a name="RestoreSecret" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.RestoreSecret"></a>

```typescript
public readonly RestoreSecret: string[];
```

- *Type:* string[]

IAM actions required for the RestoreSecret API call.

---

##### `RotateSecret`<sup>Required</sup> <a name="RotateSecret" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.RotateSecret"></a>

```typescript
public readonly RotateSecret: string[];
```

- *Type:* string[]

IAM actions required for the RotateSecret API call.

---

##### `StopReplicationToReplica`<sup>Required</sup> <a name="StopReplicationToReplica" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.StopReplicationToReplica"></a>

```typescript
public readonly StopReplicationToReplica: string[];
```

- *Type:* string[]

IAM actions required for the StopReplicationToReplica API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateSecret`<sup>Required</sup> <a name="UpdateSecret" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.UpdateSecret"></a>

```typescript
public readonly UpdateSecret: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSecret API call.

---

##### `UpdateSecretVersionStage`<sup>Required</sup> <a name="UpdateSecretVersionStage" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.UpdateSecretVersionStage"></a>

```typescript
public readonly UpdateSecretVersionStage: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSecretVersionStage API call.

---

##### `ValidateResourcePolicy`<sup>Required</sup> <a name="ValidateResourcePolicy" id="@cdk_utils/iam.secretsmanager.SecretsManagerOperations.property.ValidateResourcePolicy"></a>

```typescript
public readonly ValidateResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the ValidateResourcePolicy API call.

---

### SecretsManagerResources <a name="SecretsManagerResources" id="@cdk_utils/iam.secretsmanager.SecretsManagerResources"></a>

ARN builders, validators, and parsers for secretsmanager resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.secretsmanager.SecretsManagerResources.Initializer"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

new secretsmanager.SecretsManagerResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerResources.isValidSecretArn">isValidSecretArn</a></code> | Validates whether a string is a valid ARN for the Secret resource. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerResources.parseSecretArn">parseSecretArn</a></code> | Parses a Secret ARN into its components. |
| <code><a href="#@cdk_utils/iam.secretsmanager.SecretsManagerResources.secret">secret</a></code> | Builds an ARN for the Secret resource. |

---

##### `isValidSecretArn` <a name="isValidSecretArn" id="@cdk_utils/iam.secretsmanager.SecretsManagerResources.isValidSecretArn"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerResources.isValidSecretArn(arn: string)
```

Validates whether a string is a valid ARN for the Secret resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.secretsmanager.SecretsManagerResources.isValidSecretArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSecretArn` <a name="parseSecretArn" id="@cdk_utils/iam.secretsmanager.SecretsManagerResources.parseSecretArn"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerResources.parseSecretArn(arn: string)
```

Parses a Secret ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.secretsmanager.SecretsManagerResources.parseSecretArn.parameter.arn"></a>

- *Type:* string

---

##### `secret` <a name="secret" id="@cdk_utils/iam.secretsmanager.SecretsManagerResources.secret"></a>

```typescript
import { secretsmanager } from '@cdk_utils/iam'

secretsmanager.SecretsManagerResources.secret(props: SecretsManagerSecretArnProps)
```

Builds an ARN for the Secret resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.secretsmanager.SecretsManagerResources.secret.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.secretsmanager.SecretsManagerSecretArnProps">SecretsManagerSecretArnProps</a>

---




