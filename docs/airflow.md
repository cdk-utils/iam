# `airflow` Submodule <a name="`airflow` Submodule" id="@cdk_utils/iam.airflow"></a>


## Structs <a name="Structs" id="Structs"></a>

### AirflowEnvironmentArnComponents <a name="AirflowEnvironmentArnComponents" id="@cdk_utils/iam.airflow.AirflowEnvironmentArnComponents"></a>

Parsed components of a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.airflow.AirflowEnvironmentArnComponents.Initializer"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

const airflowEnvironmentArnComponents: airflow.AirflowEnvironmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.airflow.AirflowEnvironmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowEnvironmentArnComponents.property.environmentName">environmentName</a></code> | <code>string</code> | The EnvironmentName component. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowEnvironmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowEnvironmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.airflow.AirflowEnvironmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdk_utils/iam.airflow.AirflowEnvironmentArnComponents.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

The EnvironmentName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.airflow.AirflowEnvironmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.airflow.AirflowEnvironmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AirflowEnvironmentArnProps <a name="AirflowEnvironmentArnProps" id="@cdk_utils/iam.airflow.AirflowEnvironmentArnProps"></a>

Properties for building a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.airflow.AirflowEnvironmentArnProps.Initializer"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

const airflowEnvironmentArnProps: airflow.AirflowEnvironmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.airflow.AirflowEnvironmentArnProps.property.environmentName">environmentName</a></code> | <code>string</code> | The EnvironmentName component of the ARN. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowEnvironmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowEnvironmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowEnvironmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdk_utils/iam.airflow.AirflowEnvironmentArnProps.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

The EnvironmentName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.airflow.AirflowEnvironmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.airflow.AirflowEnvironmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.airflow.AirflowEnvironmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AirflowRbacRoleArnComponents <a name="AirflowRbacRoleArnComponents" id="@cdk_utils/iam.airflow.AirflowRbacRoleArnComponents"></a>

Parsed components of a rbac-role ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.airflow.AirflowRbacRoleArnComponents.Initializer"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

const airflowRbacRoleArnComponents: airflow.AirflowRbacRoleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.airflow.AirflowRbacRoleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowRbacRoleArnComponents.property.environmentName">environmentName</a></code> | <code>string</code> | The EnvironmentName component. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowRbacRoleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowRbacRoleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowRbacRoleArnComponents.property.roleName">roleName</a></code> | <code>string</code> | The RoleName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.airflow.AirflowRbacRoleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdk_utils/iam.airflow.AirflowRbacRoleArnComponents.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

The EnvironmentName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.airflow.AirflowRbacRoleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.airflow.AirflowRbacRoleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdk_utils/iam.airflow.AirflowRbacRoleArnComponents.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The RoleName component.

---

### AirflowRbacRoleArnProps <a name="AirflowRbacRoleArnProps" id="@cdk_utils/iam.airflow.AirflowRbacRoleArnProps"></a>

Properties for building a rbac-role ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.airflow.AirflowRbacRoleArnProps.Initializer"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

const airflowRbacRoleArnProps: airflow.AirflowRbacRoleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.airflow.AirflowRbacRoleArnProps.property.environmentName">environmentName</a></code> | <code>string</code> | The EnvironmentName component of the ARN. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowRbacRoleArnProps.property.roleName">roleName</a></code> | <code>string</code> | The RoleName component of the ARN. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowRbacRoleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowRbacRoleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowRbacRoleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdk_utils/iam.airflow.AirflowRbacRoleArnProps.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

The EnvironmentName component of the ARN.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdk_utils/iam.airflow.AirflowRbacRoleArnProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The RoleName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.airflow.AirflowRbacRoleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.airflow.AirflowRbacRoleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.airflow.AirflowRbacRoleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AirflowActions <a name="AirflowActions" id="@cdk_utils/iam.airflow.AirflowActions"></a>

IAM action constants for the airflow service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.airflow.AirflowActions.Initializer"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

new airflow.AirflowActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.airflow.AirflowActions.property.actionGetEnvironment">actionGetEnvironment</a></code> | <code>string</code> | [Read] airflow:GetEnvironment. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowActions.property.CreateCliToken">CreateCliToken</a></code> | <code>string</code> | [Write] airflow:CreateCliToken. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowActions.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string</code> | [Write] airflow:CreateEnvironment. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowActions.property.CreateWebLoginToken">CreateWebLoginToken</a></code> | <code>string</code> | [Write] airflow:CreateWebLoginToken. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowActions.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string</code> | [Write] airflow:DeleteEnvironment. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowActions.property.InvokeRestApi">InvokeRestApi</a></code> | <code>string</code> | [Write] airflow:InvokeRestApi. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowActions.property.ListEnvironments">ListEnvironments</a></code> | <code>string</code> | [List] airflow:ListEnvironments. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] airflow:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowActions.property.PublishMetrics">PublishMetrics</a></code> | <code>string</code> | [Write] airflow:PublishMetrics. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] airflow:TagResource. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] airflow:UntagResource. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowActions.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string</code> | [Write] airflow:UpdateEnvironment. |

---

##### `actionGetEnvironment`<sup>Required</sup> <a name="actionGetEnvironment" id="@cdk_utils/iam.airflow.AirflowActions.property.actionGetEnvironment"></a>

```typescript
public readonly actionGetEnvironment: string;
```

- *Type:* string

[Read] airflow:GetEnvironment.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.airflow.AirflowActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.airflow.AirflowActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.airflow.AirflowActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.airflow.AirflowActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.airflow.AirflowActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateCliToken`<sup>Required</sup> <a name="CreateCliToken" id="@cdk_utils/iam.airflow.AirflowActions.property.CreateCliToken"></a>

```typescript
public readonly CreateCliToken: string;
```

- *Type:* string

[Write] airflow:CreateCliToken.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.airflow.AirflowActions.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string;
```

- *Type:* string

[Write] airflow:CreateEnvironment.

---

##### `CreateWebLoginToken`<sup>Required</sup> <a name="CreateWebLoginToken" id="@cdk_utils/iam.airflow.AirflowActions.property.CreateWebLoginToken"></a>

```typescript
public readonly CreateWebLoginToken: string;
```

- *Type:* string

[Write] airflow:CreateWebLoginToken.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.airflow.AirflowActions.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string;
```

- *Type:* string

[Write] airflow:DeleteEnvironment.

---

##### `InvokeRestApi`<sup>Required</sup> <a name="InvokeRestApi" id="@cdk_utils/iam.airflow.AirflowActions.property.InvokeRestApi"></a>

```typescript
public readonly InvokeRestApi: string;
```

- *Type:* string

[Write] airflow:InvokeRestApi.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.airflow.AirflowActions.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string;
```

- *Type:* string

[List] airflow:ListEnvironments.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.airflow.AirflowActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] airflow:ListTagsForResource.

---

##### `PublishMetrics`<sup>Required</sup> <a name="PublishMetrics" id="@cdk_utils/iam.airflow.AirflowActions.property.PublishMetrics"></a>

```typescript
public readonly PublishMetrics: string;
```

- *Type:* string

[Write] airflow:PublishMetrics.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.airflow.AirflowActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.airflow.AirflowActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] airflow:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.airflow.AirflowActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] airflow:UntagResource.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.airflow.AirflowActions.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string;
```

- *Type:* string

[Write] airflow:UpdateEnvironment.

---

### AirflowConditions <a name="AirflowConditions" id="@cdk_utils/iam.airflow.AirflowConditions"></a>

Condition key constants and builders for airflow.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.airflow.AirflowConditions.Initializer"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

new airflow.AirflowConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.dagAccessEntity">dagAccessEntity</a></code> | Generates a condition block for `airflow:DagAccessEntity`. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.resourceAction">resourceAction</a></code> | Generates a condition block for `airflow:ResourceAction`. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.resourceId">resourceId</a></code> | Generates a condition block for `airflow:ResourceId`. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.resourceType">resourceType</a></code> | Generates a condition block for `airflow:ResourceType`. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.teamNames">teamNames</a></code> | Generates a condition block for `airflow:TeamNames`. |

---

##### `dagAccessEntity` <a name="dagAccessEntity" id="@cdk_utils/iam.airflow.AirflowConditions.dagAccessEntity"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

airflow.AirflowConditions.dagAccessEntity(value: string)
```

Generates a condition block for `airflow:DagAccessEntity`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.airflow.AirflowConditions.dagAccessEntity.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.airflow.AirflowConditions.requestTag"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

airflow.AirflowConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.airflow.AirflowConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceAction` <a name="resourceAction" id="@cdk_utils/iam.airflow.AirflowConditions.resourceAction"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

airflow.AirflowConditions.resourceAction(value: string)
```

Generates a condition block for `airflow:ResourceAction`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.airflow.AirflowConditions.resourceAction.parameter.value"></a>

- *Type:* string

---

##### `resourceId` <a name="resourceId" id="@cdk_utils/iam.airflow.AirflowConditions.resourceId"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

airflow.AirflowConditions.resourceId(value: string)
```

Generates a condition block for `airflow:ResourceId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.airflow.AirflowConditions.resourceId.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.airflow.AirflowConditions.resourceTag"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

airflow.AirflowConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.airflow.AirflowConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `resourceType` <a name="resourceType" id="@cdk_utils/iam.airflow.AirflowConditions.resourceType"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

airflow.AirflowConditions.resourceType(value: string)
```

Generates a condition block for `airflow:ResourceType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.airflow.AirflowConditions.resourceType.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.airflow.AirflowConditions.tagKeys"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

airflow.AirflowConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.airflow.AirflowConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `teamNames` <a name="teamNames" id="@cdk_utils/iam.airflow.AirflowConditions.teamNames"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

airflow.AirflowConditions.teamNames(values: string[])
```

Generates a condition block for `airflow:TeamNames`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.airflow.AirflowConditions.teamNames.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.property.actionGetEnvironmentConditionKeys">actionGetEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEnvironment action. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.property.CreateEnvironmentConditionKeys">CreateEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironment action. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.property.DAG_ACCESS_ENTITY">DAG_ACCESS_ENTITY</a></code> | <code>string</code> | Condition key: airflow:DagAccessEntity (String). |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.property.DeleteEnvironmentConditionKeys">DeleteEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteEnvironment action. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.property.RESOURCE_ACTION">RESOURCE_ACTION</a></code> | <code>string</code> | Condition key: airflow:ResourceAction (String). |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.property.RESOURCE_ID">RESOURCE_ID</a></code> | <code>string</code> | Condition key: airflow:ResourceId (String). |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.property.RESOURCE_TYPE">RESOURCE_TYPE</a></code> | <code>string</code> | Condition key: airflow:ResourceType (String). |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.property.TEAM_NAMES">TEAM_NAMES</a></code> | <code>string</code> | Condition key: airflow:TeamNames (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowConditions.property.UpdateEnvironmentConditionKeys">UpdateEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateEnvironment action. |

---

##### `actionGetEnvironmentConditionKeys`<sup>Required</sup> <a name="actionGetEnvironmentConditionKeys" id="@cdk_utils/iam.airflow.AirflowConditions.property.actionGetEnvironmentConditionKeys"></a>

```typescript
public readonly actionGetEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEnvironment action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.airflow.AirflowConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.airflow.AirflowConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.airflow.AirflowConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateEnvironmentConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentConditionKeys" id="@cdk_utils/iam.airflow.AirflowConditions.property.CreateEnvironmentConditionKeys"></a>

```typescript
public readonly CreateEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironment action.

---

##### `DAG_ACCESS_ENTITY`<sup>Required</sup> <a name="DAG_ACCESS_ENTITY" id="@cdk_utils/iam.airflow.AirflowConditions.property.DAG_ACCESS_ENTITY"></a>

```typescript
public readonly DAG_ACCESS_ENTITY: string;
```

- *Type:* string

Condition key: airflow:DagAccessEntity (String).

---

##### `DeleteEnvironmentConditionKeys`<sup>Required</sup> <a name="DeleteEnvironmentConditionKeys" id="@cdk_utils/iam.airflow.AirflowConditions.property.DeleteEnvironmentConditionKeys"></a>

```typescript
public readonly DeleteEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteEnvironment action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.airflow.AirflowConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `RESOURCE_ACTION`<sup>Required</sup> <a name="RESOURCE_ACTION" id="@cdk_utils/iam.airflow.AirflowConditions.property.RESOURCE_ACTION"></a>

```typescript
public readonly RESOURCE_ACTION: string;
```

- *Type:* string

Condition key: airflow:ResourceAction (String).

---

##### `RESOURCE_ID`<sup>Required</sup> <a name="RESOURCE_ID" id="@cdk_utils/iam.airflow.AirflowConditions.property.RESOURCE_ID"></a>

```typescript
public readonly RESOURCE_ID: string;
```

- *Type:* string

Condition key: airflow:ResourceId (String).

---

##### `RESOURCE_TYPE`<sup>Required</sup> <a name="RESOURCE_TYPE" id="@cdk_utils/iam.airflow.AirflowConditions.property.RESOURCE_TYPE"></a>

```typescript
public readonly RESOURCE_TYPE: string;
```

- *Type:* string

Condition key: airflow:ResourceType (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.airflow.AirflowConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TEAM_NAMES`<sup>Required</sup> <a name="TEAM_NAMES" id="@cdk_utils/iam.airflow.AirflowConditions.property.TEAM_NAMES"></a>

```typescript
public readonly TEAM_NAMES: string;
```

- *Type:* string

Condition key: airflow:TeamNames (ArrayOfString).

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.airflow.AirflowConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateEnvironmentConditionKeys`<sup>Required</sup> <a name="UpdateEnvironmentConditionKeys" id="@cdk_utils/iam.airflow.AirflowConditions.property.UpdateEnvironmentConditionKeys"></a>

```typescript
public readonly UpdateEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateEnvironment action.

---

### AirflowOperations <a name="AirflowOperations" id="@cdk_utils/iam.airflow.AirflowOperations"></a>

API operation to required IAM actions mapping for airflow.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.airflow.AirflowOperations.Initializer"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

new airflow.AirflowOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.airflow.AirflowOperations.property.CreateCliToken">CreateCliToken</a></code> | <code>string[]</code> | IAM actions required for the CreateCliToken API call. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowOperations.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironment API call. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowOperations.property.CreateWebLoginToken">CreateWebLoginToken</a></code> | <code>string[]</code> | IAM actions required for the CreateWebLoginToken API call. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowOperations.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironment API call. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowOperations.property.InvokeRestApi">InvokeRestApi</a></code> | <code>string[]</code> | IAM actions required for the InvokeRestApi API call. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowOperations.property.ListEnvironments">ListEnvironments</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironments API call. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowOperations.property.opGetEnvironment">opGetEnvironment</a></code> | <code>string[]</code> | IAM actions required for the GetEnvironment API call. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowOperations.property.PublishMetrics">PublishMetrics</a></code> | <code>string[]</code> | IAM actions required for the PublishMetrics API call. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowOperations.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnvironment API call. |

---

##### `CreateCliToken`<sup>Required</sup> <a name="CreateCliToken" id="@cdk_utils/iam.airflow.AirflowOperations.property.CreateCliToken"></a>

```typescript
public readonly CreateCliToken: string[];
```

- *Type:* string[]

IAM actions required for the CreateCliToken API call.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.airflow.AirflowOperations.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironment API call.

---

##### `CreateWebLoginToken`<sup>Required</sup> <a name="CreateWebLoginToken" id="@cdk_utils/iam.airflow.AirflowOperations.property.CreateWebLoginToken"></a>

```typescript
public readonly CreateWebLoginToken: string[];
```

- *Type:* string[]

IAM actions required for the CreateWebLoginToken API call.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.airflow.AirflowOperations.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironment API call.

---

##### `InvokeRestApi`<sup>Required</sup> <a name="InvokeRestApi" id="@cdk_utils/iam.airflow.AirflowOperations.property.InvokeRestApi"></a>

```typescript
public readonly InvokeRestApi: string[];
```

- *Type:* string[]

IAM actions required for the InvokeRestApi API call.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.airflow.AirflowOperations.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironments API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.airflow.AirflowOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetEnvironment`<sup>Required</sup> <a name="opGetEnvironment" id="@cdk_utils/iam.airflow.AirflowOperations.property.opGetEnvironment"></a>

```typescript
public readonly opGetEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the GetEnvironment API call.

---

##### `PublishMetrics`<sup>Required</sup> <a name="PublishMetrics" id="@cdk_utils/iam.airflow.AirflowOperations.property.PublishMetrics"></a>

```typescript
public readonly PublishMetrics: string[];
```

- *Type:* string[]

IAM actions required for the PublishMetrics API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.airflow.AirflowOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.airflow.AirflowOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.airflow.AirflowOperations.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnvironment API call.

---

### AirflowResources <a name="AirflowResources" id="@cdk_utils/iam.airflow.AirflowResources"></a>

ARN builders, validators, and parsers for airflow resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.airflow.AirflowResources.Initializer"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

new airflow.AirflowResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.airflow.AirflowResources.environment">environment</a></code> | Builds an ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowResources.isValidEnvironmentArn">isValidEnvironmentArn</a></code> | Validates whether a string is a valid ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowResources.isValidRbacRoleArn">isValidRbacRoleArn</a></code> | Validates whether a string is a valid ARN for the rbac-role resource. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowResources.parseEnvironmentArn">parseEnvironmentArn</a></code> | Parses a environment ARN into its components. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowResources.parseRbacRoleArn">parseRbacRoleArn</a></code> | Parses a rbac-role ARN into its components. |
| <code><a href="#@cdk_utils/iam.airflow.AirflowResources.rbacRole">rbacRole</a></code> | Builds an ARN for the rbac-role resource. |

---

##### `environment` <a name="environment" id="@cdk_utils/iam.airflow.AirflowResources.environment"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

airflow.AirflowResources.environment(props: AirflowEnvironmentArnProps)
```

Builds an ARN for the environment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.airflow.AirflowResources.environment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.airflow.AirflowEnvironmentArnProps">AirflowEnvironmentArnProps</a>

---

##### `isValidEnvironmentArn` <a name="isValidEnvironmentArn" id="@cdk_utils/iam.airflow.AirflowResources.isValidEnvironmentArn"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

airflow.AirflowResources.isValidEnvironmentArn(arn: string)
```

Validates whether a string is a valid ARN for the environment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.airflow.AirflowResources.isValidEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRbacRoleArn` <a name="isValidRbacRoleArn" id="@cdk_utils/iam.airflow.AirflowResources.isValidRbacRoleArn"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

airflow.AirflowResources.isValidRbacRoleArn(arn: string)
```

Validates whether a string is a valid ARN for the rbac-role resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.airflow.AirflowResources.isValidRbacRoleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnvironmentArn` <a name="parseEnvironmentArn" id="@cdk_utils/iam.airflow.AirflowResources.parseEnvironmentArn"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

airflow.AirflowResources.parseEnvironmentArn(arn: string)
```

Parses a environment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.airflow.AirflowResources.parseEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRbacRoleArn` <a name="parseRbacRoleArn" id="@cdk_utils/iam.airflow.AirflowResources.parseRbacRoleArn"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

airflow.AirflowResources.parseRbacRoleArn(arn: string)
```

Parses a rbac-role ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.airflow.AirflowResources.parseRbacRoleArn.parameter.arn"></a>

- *Type:* string

---

##### `rbacRole` <a name="rbacRole" id="@cdk_utils/iam.airflow.AirflowResources.rbacRole"></a>

```typescript
import { airflow } from '@cdk_utils/iam'

airflow.AirflowResources.rbacRole(props: AirflowRbacRoleArnProps)
```

Builds an ARN for the rbac-role resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.airflow.AirflowResources.rbacRole.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.airflow.AirflowRbacRoleArnProps">AirflowRbacRoleArnProps</a>

---




