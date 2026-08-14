# `transform` Submodule <a name="`transform` Submodule" id="@cdk_utils/iam.transform"></a>


## Structs <a name="Structs" id="Structs"></a>

### TransformConnectorArnComponents <a name="TransformConnectorArnComponents" id="@cdk_utils/iam.transform.TransformConnectorArnComponents"></a>

Parsed components of a connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform.TransformConnectorArnComponents.Initializer"></a>

```typescript
import { transform } from '@cdk_utils/iam'

const transformConnectorArnComponents: transform.TransformConnectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform.TransformConnectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform.TransformConnectorArnComponents.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorId component. |
| <code><a href="#@cdk_utils/iam.transform.TransformConnectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform.TransformConnectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.transform.TransformConnectorArnComponents.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transform.TransformConnectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.transform.TransformConnectorArnComponents.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transform.TransformConnectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transform.TransformConnectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.transform.TransformConnectorArnComponents.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component.

---

### TransformConnectorArnProps <a name="TransformConnectorArnProps" id="@cdk_utils/iam.transform.TransformConnectorArnProps"></a>

Properties for building a connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform.TransformConnectorArnProps.Initializer"></a>

```typescript
import { transform } from '@cdk_utils/iam'

const transformConnectorArnProps: transform.TransformConnectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform.TransformConnectorArnProps.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.transform.TransformConnectorArnProps.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.transform.TransformConnectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform.TransformConnectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform.TransformConnectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.transform.TransformConnectorArnProps.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorId component of the ARN.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.transform.TransformConnectorArnProps.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transform.TransformConnectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transform.TransformConnectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transform.TransformConnectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TransformProfileArnComponents <a name="TransformProfileArnComponents" id="@cdk_utils/iam.transform.TransformProfileArnComponents"></a>

Parsed components of a profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform.TransformProfileArnComponents.Initializer"></a>

```typescript
import { transform } from '@cdk_utils/iam'

const transformProfileArnComponents: transform.TransformProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform.TransformProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform.TransformProfileArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.transform.TransformProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform.TransformProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transform.TransformProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.transform.TransformProfileArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transform.TransformProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transform.TransformProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TransformProfileArnProps <a name="TransformProfileArnProps" id="@cdk_utils/iam.transform.TransformProfileArnProps"></a>

Properties for building a profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform.TransformProfileArnProps.Initializer"></a>

```typescript
import { transform } from '@cdk_utils/iam'

const transformProfileArnProps: transform.TransformProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform.TransformProfileArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.transform.TransformProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform.TransformProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform.TransformProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.transform.TransformProfileArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transform.TransformProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transform.TransformProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transform.TransformProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### TransformActions <a name="TransformActions" id="@cdk_utils/iam.transform.TransformActions"></a>

IAM action constants for the transform service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.transform.TransformActions.Initializer"></a>

```typescript
import { transform } from '@cdk_utils/iam'

new transform.TransformActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.AccessTransformProfile">AccessTransformProfile</a></code> | <code>string</code> | [Write] transform:AccessTransformProfile. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.actionGetAccountSettings">actionGetAccountSettings</a></code> | <code>string</code> | [Read] transform:GetAccountSettings. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.actionGetAgent">actionGetAgent</a></code> | <code>string</code> | [Read] transform:GetAgent. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.actionGetAgentRuntimeConfiguration">actionGetAgentRuntimeConfiguration</a></code> | <code>string</code> | [Read] transform:GetAgentRuntimeConfiguration. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.actionGetConnector">actionGetConnector</a></code> | <code>string</code> | [Read] transform:GetConnector. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.actionGetWebAppUrl">actionGetWebAppUrl</a></code> | <code>string</code> | [Read] transform:GetWebAppUrl. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.AssociateConnectorResource">AssociateConnectorResource</a></code> | <code>string</code> | [Write] transform:AssociateConnectorResource. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.CreateProfile">CreateProfile</a></code> | <code>string</code> | [Write] transform:CreateProfile. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.DeleteAgentRuntimeConfiguration">DeleteAgentRuntimeConfiguration</a></code> | <code>string</code> | [Write] transform:DeleteAgentRuntimeConfiguration. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.DeleteConnector">DeleteConnector</a></code> | <code>string</code> | [Write] transform:DeleteConnector. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.DeleteProfile">DeleteProfile</a></code> | <code>string</code> | [Write] transform:DeleteProfile. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.ListAgents">ListAgents</a></code> | <code>string</code> | [Read] transform:ListAgents. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.ListConnectors">ListConnectors</a></code> | <code>string</code> | [List] transform:ListConnectors. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.ListProfiles">ListProfiles</a></code> | <code>string</code> | [List] transform:ListProfiles. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] transform:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.PutAgentRuntimeConfiguration">PutAgentRuntimeConfiguration</a></code> | <code>string</code> | [Write] transform:PutAgentRuntimeConfiguration. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.RejectConnector">RejectConnector</a></code> | <code>string</code> | [Write] transform:RejectConnector. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] transform:TagResource. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] transform:UntagResource. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.UpdateAccountSettings">UpdateAccountSettings</a></code> | <code>string</code> | [Write] transform:UpdateAccountSettings. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.UpdateAgentAccess">UpdateAgentAccess</a></code> | <code>string</code> | [Write] transform:UpdateAgentAccess. |
| <code><a href="#@cdk_utils/iam.transform.TransformActions.property.UpdateProfile">UpdateProfile</a></code> | <code>string</code> | [Write] transform:UpdateProfile. |

---

##### `AccessTransformProfile`<sup>Required</sup> <a name="AccessTransformProfile" id="@cdk_utils/iam.transform.TransformActions.property.AccessTransformProfile"></a>

```typescript
public readonly AccessTransformProfile: string;
```

- *Type:* string

[Write] transform:AccessTransformProfile.

---

##### `actionGetAccountSettings`<sup>Required</sup> <a name="actionGetAccountSettings" id="@cdk_utils/iam.transform.TransformActions.property.actionGetAccountSettings"></a>

```typescript
public readonly actionGetAccountSettings: string;
```

- *Type:* string

[Read] transform:GetAccountSettings.

---

##### `actionGetAgent`<sup>Required</sup> <a name="actionGetAgent" id="@cdk_utils/iam.transform.TransformActions.property.actionGetAgent"></a>

```typescript
public readonly actionGetAgent: string;
```

- *Type:* string

[Read] transform:GetAgent.

---

##### `actionGetAgentRuntimeConfiguration`<sup>Required</sup> <a name="actionGetAgentRuntimeConfiguration" id="@cdk_utils/iam.transform.TransformActions.property.actionGetAgentRuntimeConfiguration"></a>

```typescript
public readonly actionGetAgentRuntimeConfiguration: string;
```

- *Type:* string

[Read] transform:GetAgentRuntimeConfiguration.

---

##### `actionGetConnector`<sup>Required</sup> <a name="actionGetConnector" id="@cdk_utils/iam.transform.TransformActions.property.actionGetConnector"></a>

```typescript
public readonly actionGetConnector: string;
```

- *Type:* string

[Read] transform:GetConnector.

---

##### `actionGetWebAppUrl`<sup>Required</sup> <a name="actionGetWebAppUrl" id="@cdk_utils/iam.transform.TransformActions.property.actionGetWebAppUrl"></a>

```typescript
public readonly actionGetWebAppUrl: string;
```

- *Type:* string

[Read] transform:GetWebAppUrl.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.transform.TransformActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.transform.TransformActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.transform.TransformActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.transform.TransformActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.transform.TransformActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateConnectorResource`<sup>Required</sup> <a name="AssociateConnectorResource" id="@cdk_utils/iam.transform.TransformActions.property.AssociateConnectorResource"></a>

```typescript
public readonly AssociateConnectorResource: string;
```

- *Type:* string

[Write] transform:AssociateConnectorResource.

---

##### `CreateProfile`<sup>Required</sup> <a name="CreateProfile" id="@cdk_utils/iam.transform.TransformActions.property.CreateProfile"></a>

```typescript
public readonly CreateProfile: string;
```

- *Type:* string

[Write] transform:CreateProfile.

---

##### `DeleteAgentRuntimeConfiguration`<sup>Required</sup> <a name="DeleteAgentRuntimeConfiguration" id="@cdk_utils/iam.transform.TransformActions.property.DeleteAgentRuntimeConfiguration"></a>

```typescript
public readonly DeleteAgentRuntimeConfiguration: string;
```

- *Type:* string

[Write] transform:DeleteAgentRuntimeConfiguration.

---

##### `DeleteConnector`<sup>Required</sup> <a name="DeleteConnector" id="@cdk_utils/iam.transform.TransformActions.property.DeleteConnector"></a>

```typescript
public readonly DeleteConnector: string;
```

- *Type:* string

[Write] transform:DeleteConnector.

---

##### `DeleteProfile`<sup>Required</sup> <a name="DeleteProfile" id="@cdk_utils/iam.transform.TransformActions.property.DeleteProfile"></a>

```typescript
public readonly DeleteProfile: string;
```

- *Type:* string

[Write] transform:DeleteProfile.

---

##### `ListAgents`<sup>Required</sup> <a name="ListAgents" id="@cdk_utils/iam.transform.TransformActions.property.ListAgents"></a>

```typescript
public readonly ListAgents: string;
```

- *Type:* string

[Read] transform:ListAgents.

---

##### `ListConnectors`<sup>Required</sup> <a name="ListConnectors" id="@cdk_utils/iam.transform.TransformActions.property.ListConnectors"></a>

```typescript
public readonly ListConnectors: string;
```

- *Type:* string

[List] transform:ListConnectors.

---

##### `ListProfiles`<sup>Required</sup> <a name="ListProfiles" id="@cdk_utils/iam.transform.TransformActions.property.ListProfiles"></a>

```typescript
public readonly ListProfiles: string;
```

- *Type:* string

[List] transform:ListProfiles.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.transform.TransformActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] transform:ListTagsForResource.

---

##### `PutAgentRuntimeConfiguration`<sup>Required</sup> <a name="PutAgentRuntimeConfiguration" id="@cdk_utils/iam.transform.TransformActions.property.PutAgentRuntimeConfiguration"></a>

```typescript
public readonly PutAgentRuntimeConfiguration: string;
```

- *Type:* string

[Write] transform:PutAgentRuntimeConfiguration.

---

##### `RejectConnector`<sup>Required</sup> <a name="RejectConnector" id="@cdk_utils/iam.transform.TransformActions.property.RejectConnector"></a>

```typescript
public readonly RejectConnector: string;
```

- *Type:* string

[Write] transform:RejectConnector.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.transform.TransformActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.transform.TransformActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] transform:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.transform.TransformActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] transform:UntagResource.

---

##### `UpdateAccountSettings`<sup>Required</sup> <a name="UpdateAccountSettings" id="@cdk_utils/iam.transform.TransformActions.property.UpdateAccountSettings"></a>

```typescript
public readonly UpdateAccountSettings: string;
```

- *Type:* string

[Write] transform:UpdateAccountSettings.

---

##### `UpdateAgentAccess`<sup>Required</sup> <a name="UpdateAgentAccess" id="@cdk_utils/iam.transform.TransformActions.property.UpdateAgentAccess"></a>

```typescript
public readonly UpdateAgentAccess: string;
```

- *Type:* string

[Write] transform:UpdateAgentAccess.

---

##### `UpdateProfile`<sup>Required</sup> <a name="UpdateProfile" id="@cdk_utils/iam.transform.TransformActions.property.UpdateProfile"></a>

```typescript
public readonly UpdateProfile: string;
```

- *Type:* string

[Write] transform:UpdateProfile.

---

### TransformConditions <a name="TransformConditions" id="@cdk_utils/iam.transform.TransformConditions"></a>

Condition key constants and builders for transform.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.transform.TransformConditions.Initializer"></a>

```typescript
import { transform } from '@cdk_utils/iam'

new transform.TransformConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.transform.TransformConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.transform.TransformConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.transform.TransformConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.transform.TransformConditions.requestTag"></a>

```typescript
import { transform } from '@cdk_utils/iam'

transform.TransformConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.transform.TransformConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.transform.TransformConditions.resourceTag"></a>

```typescript
import { transform } from '@cdk_utils/iam'

transform.TransformConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.transform.TransformConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.transform.TransformConditions.tagKeys"></a>

```typescript
import { transform } from '@cdk_utils/iam'

transform.TransformConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.transform.TransformConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform.TransformConditions.property.actionGetConnectorConditionKeys">actionGetConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetConnector action. |
| <code><a href="#@cdk_utils/iam.transform.TransformConditions.property.AssociateConnectorResourceConditionKeys">AssociateConnectorResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateConnectorResource action. |
| <code><a href="#@cdk_utils/iam.transform.TransformConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.transform.TransformConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.transform.TransformConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.transform.TransformConditions.property.DeleteConnectorConditionKeys">DeleteConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteConnector action. |
| <code><a href="#@cdk_utils/iam.transform.TransformConditions.property.ListConnectorsConditionKeys">ListConnectorsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListConnectors action. |
| <code><a href="#@cdk_utils/iam.transform.TransformConditions.property.RejectConnectorConditionKeys">RejectConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RejectConnector action. |
| <code><a href="#@cdk_utils/iam.transform.TransformConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.transform.TransformConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `actionGetConnectorConditionKeys`<sup>Required</sup> <a name="actionGetConnectorConditionKeys" id="@cdk_utils/iam.transform.TransformConditions.property.actionGetConnectorConditionKeys"></a>

```typescript
public readonly actionGetConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetConnector action.

---

##### `AssociateConnectorResourceConditionKeys`<sup>Required</sup> <a name="AssociateConnectorResourceConditionKeys" id="@cdk_utils/iam.transform.TransformConditions.property.AssociateConnectorResourceConditionKeys"></a>

```typescript
public readonly AssociateConnectorResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateConnectorResource action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.transform.TransformConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.transform.TransformConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.transform.TransformConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `DeleteConnectorConditionKeys`<sup>Required</sup> <a name="DeleteConnectorConditionKeys" id="@cdk_utils/iam.transform.TransformConditions.property.DeleteConnectorConditionKeys"></a>

```typescript
public readonly DeleteConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteConnector action.

---

##### `ListConnectorsConditionKeys`<sup>Required</sup> <a name="ListConnectorsConditionKeys" id="@cdk_utils/iam.transform.TransformConditions.property.ListConnectorsConditionKeys"></a>

```typescript
public readonly ListConnectorsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListConnectors action.

---

##### `RejectConnectorConditionKeys`<sup>Required</sup> <a name="RejectConnectorConditionKeys" id="@cdk_utils/iam.transform.TransformConditions.property.RejectConnectorConditionKeys"></a>

```typescript
public readonly RejectConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RejectConnector action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.transform.TransformConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.transform.TransformConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### TransformResources <a name="TransformResources" id="@cdk_utils/iam.transform.TransformResources"></a>

ARN builders, validators, and parsers for transform resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.transform.TransformResources.Initializer"></a>

```typescript
import { transform } from '@cdk_utils/iam'

new transform.TransformResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.transform.TransformResources.connector">connector</a></code> | Builds an ARN for the connector resource. |
| <code><a href="#@cdk_utils/iam.transform.TransformResources.isValidConnectorArn">isValidConnectorArn</a></code> | Validates whether a string is a valid ARN for the connector resource. |
| <code><a href="#@cdk_utils/iam.transform.TransformResources.isValidProfileArn">isValidProfileArn</a></code> | Validates whether a string is a valid ARN for the profile resource. |
| <code><a href="#@cdk_utils/iam.transform.TransformResources.parseConnectorArn">parseConnectorArn</a></code> | Parses a connector ARN into its components. |
| <code><a href="#@cdk_utils/iam.transform.TransformResources.parseProfileArn">parseProfileArn</a></code> | Parses a profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.transform.TransformResources.profile">profile</a></code> | Builds an ARN for the profile resource. |

---

##### `connector` <a name="connector" id="@cdk_utils/iam.transform.TransformResources.connector"></a>

```typescript
import { transform } from '@cdk_utils/iam'

transform.TransformResources.connector(props: TransformConnectorArnProps)
```

Builds an ARN for the connector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transform.TransformResources.connector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transform.TransformConnectorArnProps">TransformConnectorArnProps</a>

---

##### `isValidConnectorArn` <a name="isValidConnectorArn" id="@cdk_utils/iam.transform.TransformResources.isValidConnectorArn"></a>

```typescript
import { transform } from '@cdk_utils/iam'

transform.TransformResources.isValidConnectorArn(arn: string)
```

Validates whether a string is a valid ARN for the connector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform.TransformResources.isValidConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProfileArn` <a name="isValidProfileArn" id="@cdk_utils/iam.transform.TransformResources.isValidProfileArn"></a>

```typescript
import { transform } from '@cdk_utils/iam'

transform.TransformResources.isValidProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform.TransformResources.isValidProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectorArn` <a name="parseConnectorArn" id="@cdk_utils/iam.transform.TransformResources.parseConnectorArn"></a>

```typescript
import { transform } from '@cdk_utils/iam'

transform.TransformResources.parseConnectorArn(arn: string)
```

Parses a connector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform.TransformResources.parseConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProfileArn` <a name="parseProfileArn" id="@cdk_utils/iam.transform.TransformResources.parseProfileArn"></a>

```typescript
import { transform } from '@cdk_utils/iam'

transform.TransformResources.parseProfileArn(arn: string)
```

Parses a profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform.TransformResources.parseProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `profile` <a name="profile" id="@cdk_utils/iam.transform.TransformResources.profile"></a>

```typescript
import { transform } from '@cdk_utils/iam'

transform.TransformResources.profile(props: TransformProfileArnProps)
```

Builds an ARN for the profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transform.TransformResources.profile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transform.TransformProfileArnProps">TransformProfileArnProps</a>

---




