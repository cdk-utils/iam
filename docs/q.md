# `q` Submodule <a name="`q` Submodule" id="@cdk_utils/iam.q"></a>


## Structs <a name="Structs" id="Structs"></a>

### QPluginArnComponents <a name="QPluginArnComponents" id="@cdk_utils/iam.q.QPluginArnComponents"></a>

Parsed components of a plugin ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.q.QPluginArnComponents.Initializer"></a>

```typescript
import { q } from '@cdk_utils/iam'

const qPluginArnComponents: q.QPluginArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.q.QPluginArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.q.QPluginArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.q.QPluginArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.q.QPluginArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.q.QPluginArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.q.QPluginArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.q.QPluginArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.q.QPluginArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### QPluginArnProps <a name="QPluginArnProps" id="@cdk_utils/iam.q.QPluginArnProps"></a>

Properties for building a plugin ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.q.QPluginArnProps.Initializer"></a>

```typescript
import { q } from '@cdk_utils/iam'

const qPluginArnProps: q.QPluginArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.q.QPluginArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.q.QPluginArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.q.QPluginArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.q.QPluginArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.q.QPluginArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.q.QPluginArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.q.QPluginArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.q.QPluginArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QProfileArnComponents <a name="QProfileArnComponents" id="@cdk_utils/iam.q.QProfileArnComponents"></a>

Parsed components of a profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.q.QProfileArnComponents.Initializer"></a>

```typescript
import { q } from '@cdk_utils/iam'

const qProfileArnComponents: q.QProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.q.QProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.q.QProfileArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.q.QProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.q.QProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.q.QProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.q.QProfileArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.q.QProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.q.QProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### QProfileArnProps <a name="QProfileArnProps" id="@cdk_utils/iam.q.QProfileArnProps"></a>

Properties for building a profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.q.QProfileArnProps.Initializer"></a>

```typescript
import { q } from '@cdk_utils/iam'

const qProfileArnProps: q.QProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.q.QProfileArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.q.QProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.q.QProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.q.QProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.q.QProfileArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.q.QProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.q.QProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.q.QProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### QActions <a name="QActions" id="@cdk_utils/iam.q.QActions"></a>

IAM action constants for the q service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.q.QActions.Initializer"></a>

```typescript
import { q } from '@cdk_utils/iam'

new q.QActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.q.QActions.property.actionGetArtifact">actionGetArtifact</a></code> | <code>string</code> | [Read] q:GetArtifact. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.actionGetArtifactActionResult">actionGetArtifactActionResult</a></code> | <code>string</code> | [Read] q:GetArtifactActionResult. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.actionGetConnector">actionGetConnector</a></code> | <code>string</code> | [Read] q:GetConnector. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.actionGetConversation">actionGetConversation</a></code> | <code>string</code> | [Read] q:GetConversation. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.actionGetIdentityMetadata">actionGetIdentityMetadata</a></code> | <code>string</code> | [Read] q:GetIdentityMetadata. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.actionGetPlugin">actionGetPlugin</a></code> | <code>string</code> | [Read] q:GetPlugin. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.actionGetTroubleshootingResults">actionGetTroubleshootingResults</a></code> | <code>string</code> | [Read] q:GetTroubleshootingResults. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.AssociateConnectorResource">AssociateConnectorResource</a></code> | <code>string</code> | [Write] q:AssociateConnectorResource. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.AssociateLoginDomain">AssociateLoginDomain</a></code> | <code>string</code> | [Write] q:AssociateLoginDomain. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.BatchDescribeGroups">BatchDescribeGroups</a></code> | <code>string</code> | [Read] q:BatchDescribeGroups. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.BatchDescribeUsers">BatchDescribeUsers</a></code> | <code>string</code> | [Read] q:BatchDescribeUsers. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.BatchGetGroups">BatchGetGroups</a></code> | <code>string</code> | [Read] q:BatchGetGroups. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.BatchGetUsers">BatchGetUsers</a></code> | <code>string</code> | [Read] q:BatchGetUsers. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.CreateArtifact">CreateArtifact</a></code> | <code>string</code> | [Write] q:CreateArtifact. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.CreateAssignment">CreateAssignment</a></code> | <code>string</code> | [Write] q:CreateAssignment. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.CreateAuthGrant">CreateAuthGrant</a></code> | <code>string</code> | [Write] q:CreateAuthGrant. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.CreateOAuthAppConnection">CreateOAuthAppConnection</a></code> | <code>string</code> | [Write] q:CreateOAuthAppConnection. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.CreatePlugin">CreatePlugin</a></code> | <code>string</code> | [Write] q:CreatePlugin. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.CreateScimAccessToken">CreateScimAccessToken</a></code> | <code>string</code> | [Write] q:CreateScimAccessToken. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.DeleteAssignment">DeleteAssignment</a></code> | <code>string</code> | [Write] q:DeleteAssignment. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.DeleteConversation">DeleteConversation</a></code> | <code>string</code> | [Write] q:DeleteConversation. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.DeleteOAuthAppConnection">DeleteOAuthAppConnection</a></code> | <code>string</code> | [Write] q:DeleteOAuthAppConnection. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.DeletePlugin">DeletePlugin</a></code> | <code>string</code> | [Write] q:DeletePlugin. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.DeleteScimAccessToken">DeleteScimAccessToken</a></code> | <code>string</code> | [Write] q:DeleteScimAccessToken. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.DisassociateLoginDomain">DisassociateLoginDomain</a></code> | <code>string</code> | [Write] q:DisassociateLoginDomain. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.GenerateCodeFromCommands">GenerateCodeFromCommands</a></code> | <code>string</code> | [Read] q:GenerateCodeFromCommands. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.GenerateCodeRecommendations">GenerateCodeRecommendations</a></code> | <code>string</code> | [Read] q:GenerateCodeRecommendations. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.ListConversations">ListConversations</a></code> | <code>string</code> | [Read] q:ListConversations. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.ListDashboardMetrics">ListDashboardMetrics</a></code> | <code>string</code> | [List] q:ListDashboardMetrics. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.ListGroups">ListGroups</a></code> | <code>string</code> | [List] q:ListGroups. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.ListLoginDomains">ListLoginDomains</a></code> | <code>string</code> | [List] q:ListLoginDomains. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.ListPluginProviders">ListPluginProviders</a></code> | <code>string</code> | [List] q:ListPluginProviders. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.ListPlugins">ListPlugins</a></code> | <code>string</code> | [List] q:ListPlugins. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.ListScimAccessTokens">ListScimAccessTokens</a></code> | <code>string</code> | [List] q:ListScimAccessTokens. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] q:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.ListUsers">ListUsers</a></code> | <code>string</code> | [List] q:ListUsers. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.PassRequest">PassRequest</a></code> | <code>string</code> | [Write] q:PassRequest. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.PerformArtifactAction">PerformArtifactAction</a></code> | <code>string</code> | [Write] q:PerformArtifactAction. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.RejectConnector">RejectConnector</a></code> | <code>string</code> | [Write] q:RejectConnector. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.SendEvent">SendEvent</a></code> | <code>string</code> | [Write] q:SendEvent. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.SendMessage">SendMessage</a></code> | <code>string</code> | [Write] q:SendMessage. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.StartConversation">StartConversation</a></code> | <code>string</code> | [Write] q:StartConversation. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.StartTroubleshootingAnalysis">StartTroubleshootingAnalysis</a></code> | <code>string</code> | [Write] q:StartTroubleshootingAnalysis. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.StartTroubleshootingResolutionExplanation">StartTroubleshootingResolutionExplanation</a></code> | <code>string</code> | [Write] q:StartTroubleshootingResolutionExplanation. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] q:TagResource. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] q:UntagResource. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.UpdateAssignment">UpdateAssignment</a></code> | <code>string</code> | [Write] q:UpdateAssignment. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.UpdateAuthGrant">UpdateAuthGrant</a></code> | <code>string</code> | [Write] q:UpdateAuthGrant. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.UpdateConversation">UpdateConversation</a></code> | <code>string</code> | [Write] q:UpdateConversation. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.UpdateOAuthAppConnection">UpdateOAuthAppConnection</a></code> | <code>string</code> | [Write] q:UpdateOAuthAppConnection. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.UpdatePlugin">UpdatePlugin</a></code> | <code>string</code> | [Write] q:UpdatePlugin. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.UpdateTroubleshootingCommandResult">UpdateTroubleshootingCommandResult</a></code> | <code>string</code> | [Write] q:UpdateTroubleshootingCommandResult. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.UsePlugin">UsePlugin</a></code> | <code>string</code> | [Write] q:UsePlugin. |
| <code><a href="#@cdk_utils/iam.q.QActions.property.VerifyOAuthAppConnection">VerifyOAuthAppConnection</a></code> | <code>string</code> | [Write] q:VerifyOAuthAppConnection. |

---

##### `actionGetArtifact`<sup>Required</sup> <a name="actionGetArtifact" id="@cdk_utils/iam.q.QActions.property.actionGetArtifact"></a>

```typescript
public readonly actionGetArtifact: string;
```

- *Type:* string

[Read] q:GetArtifact.

---

##### `actionGetArtifactActionResult`<sup>Required</sup> <a name="actionGetArtifactActionResult" id="@cdk_utils/iam.q.QActions.property.actionGetArtifactActionResult"></a>

```typescript
public readonly actionGetArtifactActionResult: string;
```

- *Type:* string

[Read] q:GetArtifactActionResult.

---

##### `actionGetConnector`<sup>Required</sup> <a name="actionGetConnector" id="@cdk_utils/iam.q.QActions.property.actionGetConnector"></a>

```typescript
public readonly actionGetConnector: string;
```

- *Type:* string

[Read] q:GetConnector.

---

##### `actionGetConversation`<sup>Required</sup> <a name="actionGetConversation" id="@cdk_utils/iam.q.QActions.property.actionGetConversation"></a>

```typescript
public readonly actionGetConversation: string;
```

- *Type:* string

[Read] q:GetConversation.

---

##### `actionGetIdentityMetadata`<sup>Required</sup> <a name="actionGetIdentityMetadata" id="@cdk_utils/iam.q.QActions.property.actionGetIdentityMetadata"></a>

```typescript
public readonly actionGetIdentityMetadata: string;
```

- *Type:* string

[Read] q:GetIdentityMetadata.

---

##### `actionGetPlugin`<sup>Required</sup> <a name="actionGetPlugin" id="@cdk_utils/iam.q.QActions.property.actionGetPlugin"></a>

```typescript
public readonly actionGetPlugin: string;
```

- *Type:* string

[Read] q:GetPlugin.

---

##### `actionGetTroubleshootingResults`<sup>Required</sup> <a name="actionGetTroubleshootingResults" id="@cdk_utils/iam.q.QActions.property.actionGetTroubleshootingResults"></a>

```typescript
public readonly actionGetTroubleshootingResults: string;
```

- *Type:* string

[Read] q:GetTroubleshootingResults.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.q.QActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.q.QActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.q.QActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.q.QActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.q.QActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateConnectorResource`<sup>Required</sup> <a name="AssociateConnectorResource" id="@cdk_utils/iam.q.QActions.property.AssociateConnectorResource"></a>

```typescript
public readonly AssociateConnectorResource: string;
```

- *Type:* string

[Write] q:AssociateConnectorResource.

---

##### `AssociateLoginDomain`<sup>Required</sup> <a name="AssociateLoginDomain" id="@cdk_utils/iam.q.QActions.property.AssociateLoginDomain"></a>

```typescript
public readonly AssociateLoginDomain: string;
```

- *Type:* string

[Write] q:AssociateLoginDomain.

---

##### `BatchDescribeGroups`<sup>Required</sup> <a name="BatchDescribeGroups" id="@cdk_utils/iam.q.QActions.property.BatchDescribeGroups"></a>

```typescript
public readonly BatchDescribeGroups: string;
```

- *Type:* string

[Read] q:BatchDescribeGroups.

---

##### `BatchDescribeUsers`<sup>Required</sup> <a name="BatchDescribeUsers" id="@cdk_utils/iam.q.QActions.property.BatchDescribeUsers"></a>

```typescript
public readonly BatchDescribeUsers: string;
```

- *Type:* string

[Read] q:BatchDescribeUsers.

---

##### `BatchGetGroups`<sup>Required</sup> <a name="BatchGetGroups" id="@cdk_utils/iam.q.QActions.property.BatchGetGroups"></a>

```typescript
public readonly BatchGetGroups: string;
```

- *Type:* string

[Read] q:BatchGetGroups.

---

##### `BatchGetUsers`<sup>Required</sup> <a name="BatchGetUsers" id="@cdk_utils/iam.q.QActions.property.BatchGetUsers"></a>

```typescript
public readonly BatchGetUsers: string;
```

- *Type:* string

[Read] q:BatchGetUsers.

---

##### `CreateArtifact`<sup>Required</sup> <a name="CreateArtifact" id="@cdk_utils/iam.q.QActions.property.CreateArtifact"></a>

```typescript
public readonly CreateArtifact: string;
```

- *Type:* string

[Write] q:CreateArtifact.

---

##### `CreateAssignment`<sup>Required</sup> <a name="CreateAssignment" id="@cdk_utils/iam.q.QActions.property.CreateAssignment"></a>

```typescript
public readonly CreateAssignment: string;
```

- *Type:* string

[Write] q:CreateAssignment.

---

##### `CreateAuthGrant`<sup>Required</sup> <a name="CreateAuthGrant" id="@cdk_utils/iam.q.QActions.property.CreateAuthGrant"></a>

```typescript
public readonly CreateAuthGrant: string;
```

- *Type:* string

[Write] q:CreateAuthGrant.

---

##### `CreateOAuthAppConnection`<sup>Required</sup> <a name="CreateOAuthAppConnection" id="@cdk_utils/iam.q.QActions.property.CreateOAuthAppConnection"></a>

```typescript
public readonly CreateOAuthAppConnection: string;
```

- *Type:* string

[Write] q:CreateOAuthAppConnection.

---

##### `CreatePlugin`<sup>Required</sup> <a name="CreatePlugin" id="@cdk_utils/iam.q.QActions.property.CreatePlugin"></a>

```typescript
public readonly CreatePlugin: string;
```

- *Type:* string

[Write] q:CreatePlugin.

---

##### `CreateScimAccessToken`<sup>Required</sup> <a name="CreateScimAccessToken" id="@cdk_utils/iam.q.QActions.property.CreateScimAccessToken"></a>

```typescript
public readonly CreateScimAccessToken: string;
```

- *Type:* string

[Write] q:CreateScimAccessToken.

---

##### `DeleteAssignment`<sup>Required</sup> <a name="DeleteAssignment" id="@cdk_utils/iam.q.QActions.property.DeleteAssignment"></a>

```typescript
public readonly DeleteAssignment: string;
```

- *Type:* string

[Write] q:DeleteAssignment.

---

##### `DeleteConversation`<sup>Required</sup> <a name="DeleteConversation" id="@cdk_utils/iam.q.QActions.property.DeleteConversation"></a>

```typescript
public readonly DeleteConversation: string;
```

- *Type:* string

[Write] q:DeleteConversation.

---

##### `DeleteOAuthAppConnection`<sup>Required</sup> <a name="DeleteOAuthAppConnection" id="@cdk_utils/iam.q.QActions.property.DeleteOAuthAppConnection"></a>

```typescript
public readonly DeleteOAuthAppConnection: string;
```

- *Type:* string

[Write] q:DeleteOAuthAppConnection.

---

##### `DeletePlugin`<sup>Required</sup> <a name="DeletePlugin" id="@cdk_utils/iam.q.QActions.property.DeletePlugin"></a>

```typescript
public readonly DeletePlugin: string;
```

- *Type:* string

[Write] q:DeletePlugin.

---

##### `DeleteScimAccessToken`<sup>Required</sup> <a name="DeleteScimAccessToken" id="@cdk_utils/iam.q.QActions.property.DeleteScimAccessToken"></a>

```typescript
public readonly DeleteScimAccessToken: string;
```

- *Type:* string

[Write] q:DeleteScimAccessToken.

---

##### `DisassociateLoginDomain`<sup>Required</sup> <a name="DisassociateLoginDomain" id="@cdk_utils/iam.q.QActions.property.DisassociateLoginDomain"></a>

```typescript
public readonly DisassociateLoginDomain: string;
```

- *Type:* string

[Write] q:DisassociateLoginDomain.

---

##### `GenerateCodeFromCommands`<sup>Required</sup> <a name="GenerateCodeFromCommands" id="@cdk_utils/iam.q.QActions.property.GenerateCodeFromCommands"></a>

```typescript
public readonly GenerateCodeFromCommands: string;
```

- *Type:* string

[Read] q:GenerateCodeFromCommands.

---

##### `GenerateCodeRecommendations`<sup>Required</sup> <a name="GenerateCodeRecommendations" id="@cdk_utils/iam.q.QActions.property.GenerateCodeRecommendations"></a>

```typescript
public readonly GenerateCodeRecommendations: string;
```

- *Type:* string

[Read] q:GenerateCodeRecommendations.

---

##### `ListConversations`<sup>Required</sup> <a name="ListConversations" id="@cdk_utils/iam.q.QActions.property.ListConversations"></a>

```typescript
public readonly ListConversations: string;
```

- *Type:* string

[Read] q:ListConversations.

---

##### `ListDashboardMetrics`<sup>Required</sup> <a name="ListDashboardMetrics" id="@cdk_utils/iam.q.QActions.property.ListDashboardMetrics"></a>

```typescript
public readonly ListDashboardMetrics: string;
```

- *Type:* string

[List] q:ListDashboardMetrics.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.q.QActions.property.ListGroups"></a>

```typescript
public readonly ListGroups: string;
```

- *Type:* string

[List] q:ListGroups.

---

##### `ListLoginDomains`<sup>Required</sup> <a name="ListLoginDomains" id="@cdk_utils/iam.q.QActions.property.ListLoginDomains"></a>

```typescript
public readonly ListLoginDomains: string;
```

- *Type:* string

[List] q:ListLoginDomains.

---

##### `ListPluginProviders`<sup>Required</sup> <a name="ListPluginProviders" id="@cdk_utils/iam.q.QActions.property.ListPluginProviders"></a>

```typescript
public readonly ListPluginProviders: string;
```

- *Type:* string

[List] q:ListPluginProviders.

---

##### `ListPlugins`<sup>Required</sup> <a name="ListPlugins" id="@cdk_utils/iam.q.QActions.property.ListPlugins"></a>

```typescript
public readonly ListPlugins: string;
```

- *Type:* string

[List] q:ListPlugins.

---

##### `ListScimAccessTokens`<sup>Required</sup> <a name="ListScimAccessTokens" id="@cdk_utils/iam.q.QActions.property.ListScimAccessTokens"></a>

```typescript
public readonly ListScimAccessTokens: string;
```

- *Type:* string

[List] q:ListScimAccessTokens.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.q.QActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] q:ListTagsForResource.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.q.QActions.property.ListUsers"></a>

```typescript
public readonly ListUsers: string;
```

- *Type:* string

[List] q:ListUsers.

---

##### `PassRequest`<sup>Required</sup> <a name="PassRequest" id="@cdk_utils/iam.q.QActions.property.PassRequest"></a>

```typescript
public readonly PassRequest: string;
```

- *Type:* string

[Write] q:PassRequest.

---

##### `PerformArtifactAction`<sup>Required</sup> <a name="PerformArtifactAction" id="@cdk_utils/iam.q.QActions.property.PerformArtifactAction"></a>

```typescript
public readonly PerformArtifactAction: string;
```

- *Type:* string

[Write] q:PerformArtifactAction.

---

##### `RejectConnector`<sup>Required</sup> <a name="RejectConnector" id="@cdk_utils/iam.q.QActions.property.RejectConnector"></a>

```typescript
public readonly RejectConnector: string;
```

- *Type:* string

[Write] q:RejectConnector.

---

##### `SendEvent`<sup>Required</sup> <a name="SendEvent" id="@cdk_utils/iam.q.QActions.property.SendEvent"></a>

```typescript
public readonly SendEvent: string;
```

- *Type:* string

[Write] q:SendEvent.

---

##### `SendMessage`<sup>Required</sup> <a name="SendMessage" id="@cdk_utils/iam.q.QActions.property.SendMessage"></a>

```typescript
public readonly SendMessage: string;
```

- *Type:* string

[Write] q:SendMessage.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.q.QActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartConversation`<sup>Required</sup> <a name="StartConversation" id="@cdk_utils/iam.q.QActions.property.StartConversation"></a>

```typescript
public readonly StartConversation: string;
```

- *Type:* string

[Write] q:StartConversation.

---

##### `StartTroubleshootingAnalysis`<sup>Required</sup> <a name="StartTroubleshootingAnalysis" id="@cdk_utils/iam.q.QActions.property.StartTroubleshootingAnalysis"></a>

```typescript
public readonly StartTroubleshootingAnalysis: string;
```

- *Type:* string

[Write] q:StartTroubleshootingAnalysis.

---

##### `StartTroubleshootingResolutionExplanation`<sup>Required</sup> <a name="StartTroubleshootingResolutionExplanation" id="@cdk_utils/iam.q.QActions.property.StartTroubleshootingResolutionExplanation"></a>

```typescript
public readonly StartTroubleshootingResolutionExplanation: string;
```

- *Type:* string

[Write] q:StartTroubleshootingResolutionExplanation.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.q.QActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] q:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.q.QActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] q:UntagResource.

---

##### `UpdateAssignment`<sup>Required</sup> <a name="UpdateAssignment" id="@cdk_utils/iam.q.QActions.property.UpdateAssignment"></a>

```typescript
public readonly UpdateAssignment: string;
```

- *Type:* string

[Write] q:UpdateAssignment.

---

##### `UpdateAuthGrant`<sup>Required</sup> <a name="UpdateAuthGrant" id="@cdk_utils/iam.q.QActions.property.UpdateAuthGrant"></a>

```typescript
public readonly UpdateAuthGrant: string;
```

- *Type:* string

[Write] q:UpdateAuthGrant.

---

##### `UpdateConversation`<sup>Required</sup> <a name="UpdateConversation" id="@cdk_utils/iam.q.QActions.property.UpdateConversation"></a>

```typescript
public readonly UpdateConversation: string;
```

- *Type:* string

[Write] q:UpdateConversation.

---

##### `UpdateOAuthAppConnection`<sup>Required</sup> <a name="UpdateOAuthAppConnection" id="@cdk_utils/iam.q.QActions.property.UpdateOAuthAppConnection"></a>

```typescript
public readonly UpdateOAuthAppConnection: string;
```

- *Type:* string

[Write] q:UpdateOAuthAppConnection.

---

##### `UpdatePlugin`<sup>Required</sup> <a name="UpdatePlugin" id="@cdk_utils/iam.q.QActions.property.UpdatePlugin"></a>

```typescript
public readonly UpdatePlugin: string;
```

- *Type:* string

[Write] q:UpdatePlugin.

---

##### `UpdateTroubleshootingCommandResult`<sup>Required</sup> <a name="UpdateTroubleshootingCommandResult" id="@cdk_utils/iam.q.QActions.property.UpdateTroubleshootingCommandResult"></a>

```typescript
public readonly UpdateTroubleshootingCommandResult: string;
```

- *Type:* string

[Write] q:UpdateTroubleshootingCommandResult.

---

##### `UsePlugin`<sup>Required</sup> <a name="UsePlugin" id="@cdk_utils/iam.q.QActions.property.UsePlugin"></a>

```typescript
public readonly UsePlugin: string;
```

- *Type:* string

[Write] q:UsePlugin.

---

##### `VerifyOAuthAppConnection`<sup>Required</sup> <a name="VerifyOAuthAppConnection" id="@cdk_utils/iam.q.QActions.property.VerifyOAuthAppConnection"></a>

```typescript
public readonly VerifyOAuthAppConnection: string;
```

- *Type:* string

[Write] q:VerifyOAuthAppConnection.

---

### QConditions <a name="QConditions" id="@cdk_utils/iam.q.QConditions"></a>

Condition key constants and builders for q.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.q.QConditions.Initializer"></a>

```typescript
import { q } from '@cdk_utils/iam'

new q.QConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.q.QConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.q.QConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.q.QConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.q.QConditions.requestTag"></a>

```typescript
import { q } from '@cdk_utils/iam'

q.QConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.q.QConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.q.QConditions.resourceTag"></a>

```typescript
import { q } from '@cdk_utils/iam'

q.QConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.q.QConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.q.QConditions.tagKeys"></a>

```typescript
import { q } from '@cdk_utils/iam'

q.QConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.q.QConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.q.QConditions.property.actionGetPluginConditionKeys">actionGetPluginConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetPlugin action. |
| <code><a href="#@cdk_utils/iam.q.QConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.q.QConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.q.QConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.q.QConditions.property.CreateAssignmentConditionKeys">CreateAssignmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAssignment action. |
| <code><a href="#@cdk_utils/iam.q.QConditions.property.CreatePluginConditionKeys">CreatePluginConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePlugin action. |
| <code><a href="#@cdk_utils/iam.q.QConditions.property.DeleteAssignmentConditionKeys">DeleteAssignmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAssignment action. |
| <code><a href="#@cdk_utils/iam.q.QConditions.property.DeletePluginConditionKeys">DeletePluginConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeletePlugin action. |
| <code><a href="#@cdk_utils/iam.q.QConditions.property.GROUP_ID">GROUP_ID</a></code> | <code>string</code> | Condition key: identitystore:GroupId (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.q.QConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.q.QConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.q.QConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.q.QConditions.property.UpdateAssignmentConditionKeys">UpdateAssignmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAssignment action. |
| <code><a href="#@cdk_utils/iam.q.QConditions.property.UpdatePluginConditionKeys">UpdatePluginConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePlugin action. |
| <code><a href="#@cdk_utils/iam.q.QConditions.property.USER_ID">USER_ID</a></code> | <code>string</code> | Condition key: identitystore:UserId (ArrayOfString). |

---

##### `actionGetPluginConditionKeys`<sup>Required</sup> <a name="actionGetPluginConditionKeys" id="@cdk_utils/iam.q.QConditions.property.actionGetPluginConditionKeys"></a>

```typescript
public readonly actionGetPluginConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetPlugin action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.q.QConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.q.QConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.q.QConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAssignmentConditionKeys`<sup>Required</sup> <a name="CreateAssignmentConditionKeys" id="@cdk_utils/iam.q.QConditions.property.CreateAssignmentConditionKeys"></a>

```typescript
public readonly CreateAssignmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAssignment action.

---

##### `CreatePluginConditionKeys`<sup>Required</sup> <a name="CreatePluginConditionKeys" id="@cdk_utils/iam.q.QConditions.property.CreatePluginConditionKeys"></a>

```typescript
public readonly CreatePluginConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePlugin action.

---

##### `DeleteAssignmentConditionKeys`<sup>Required</sup> <a name="DeleteAssignmentConditionKeys" id="@cdk_utils/iam.q.QConditions.property.DeleteAssignmentConditionKeys"></a>

```typescript
public readonly DeleteAssignmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAssignment action.

---

##### `DeletePluginConditionKeys`<sup>Required</sup> <a name="DeletePluginConditionKeys" id="@cdk_utils/iam.q.QConditions.property.DeletePluginConditionKeys"></a>

```typescript
public readonly DeletePluginConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeletePlugin action.

---

##### `GROUP_ID`<sup>Required</sup> <a name="GROUP_ID" id="@cdk_utils/iam.q.QConditions.property.GROUP_ID"></a>

```typescript
public readonly GROUP_ID: string;
```

- *Type:* string

Condition key: identitystore:GroupId (ArrayOfString).

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.q.QConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.q.QConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.q.QConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateAssignmentConditionKeys`<sup>Required</sup> <a name="UpdateAssignmentConditionKeys" id="@cdk_utils/iam.q.QConditions.property.UpdateAssignmentConditionKeys"></a>

```typescript
public readonly UpdateAssignmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAssignment action.

---

##### `UpdatePluginConditionKeys`<sup>Required</sup> <a name="UpdatePluginConditionKeys" id="@cdk_utils/iam.q.QConditions.property.UpdatePluginConditionKeys"></a>

```typescript
public readonly UpdatePluginConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePlugin action.

---

##### `USER_ID`<sup>Required</sup> <a name="USER_ID" id="@cdk_utils/iam.q.QConditions.property.USER_ID"></a>

```typescript
public readonly USER_ID: string;
```

- *Type:* string

Condition key: identitystore:UserId (ArrayOfString).

---

### QResources <a name="QResources" id="@cdk_utils/iam.q.QResources"></a>

ARN builders, validators, and parsers for q resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.q.QResources.Initializer"></a>

```typescript
import { q } from '@cdk_utils/iam'

new q.QResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.q.QResources.isValidPluginArn">isValidPluginArn</a></code> | Validates whether a string is a valid ARN for the plugin resource. |
| <code><a href="#@cdk_utils/iam.q.QResources.isValidProfileArn">isValidProfileArn</a></code> | Validates whether a string is a valid ARN for the profile resource. |
| <code><a href="#@cdk_utils/iam.q.QResources.parsePluginArn">parsePluginArn</a></code> | Parses a plugin ARN into its components. |
| <code><a href="#@cdk_utils/iam.q.QResources.parseProfileArn">parseProfileArn</a></code> | Parses a profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.q.QResources.plugin">plugin</a></code> | Builds an ARN for the plugin resource. |
| <code><a href="#@cdk_utils/iam.q.QResources.profile">profile</a></code> | Builds an ARN for the profile resource. |

---

##### `isValidPluginArn` <a name="isValidPluginArn" id="@cdk_utils/iam.q.QResources.isValidPluginArn"></a>

```typescript
import { q } from '@cdk_utils/iam'

q.QResources.isValidPluginArn(arn: string)
```

Validates whether a string is a valid ARN for the plugin resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.q.QResources.isValidPluginArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProfileArn` <a name="isValidProfileArn" id="@cdk_utils/iam.q.QResources.isValidProfileArn"></a>

```typescript
import { q } from '@cdk_utils/iam'

q.QResources.isValidProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.q.QResources.isValidProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePluginArn` <a name="parsePluginArn" id="@cdk_utils/iam.q.QResources.parsePluginArn"></a>

```typescript
import { q } from '@cdk_utils/iam'

q.QResources.parsePluginArn(arn: string)
```

Parses a plugin ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.q.QResources.parsePluginArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProfileArn` <a name="parseProfileArn" id="@cdk_utils/iam.q.QResources.parseProfileArn"></a>

```typescript
import { q } from '@cdk_utils/iam'

q.QResources.parseProfileArn(arn: string)
```

Parses a profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.q.QResources.parseProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `plugin` <a name="plugin" id="@cdk_utils/iam.q.QResources.plugin"></a>

```typescript
import { q } from '@cdk_utils/iam'

q.QResources.plugin(props: QPluginArnProps)
```

Builds an ARN for the plugin resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.q.QResources.plugin.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.q.QPluginArnProps">QPluginArnProps</a>

---

##### `profile` <a name="profile" id="@cdk_utils/iam.q.QResources.profile"></a>

```typescript
import { q } from '@cdk_utils/iam'

q.QResources.profile(props: QProfileArnProps)
```

Builds an ARN for the profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.q.QResources.profile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.q.QProfileArnProps">QProfileArnProps</a>

---




