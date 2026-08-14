# `codestar_connections` Submodule <a name="`codestar_connections` Submodule" id="@cdk_utils/iam.codestar_connections"></a>


## Structs <a name="Structs" id="Structs"></a>

### CodestarConnectionsConnectionArnComponents <a name="CodestarConnectionsConnectionArnComponents" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnComponents"></a>

Parsed components of a Connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnComponents.Initializer"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

const codestarConnectionsConnectionArnComponents: codestar_connections.CodestarConnectionsConnectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnComponents.property.connectionId">connectionId</a></code> | <code>string</code> | The ConnectionId component. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnComponents.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

The ConnectionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodestarConnectionsConnectionArnProps <a name="CodestarConnectionsConnectionArnProps" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnProps"></a>

Properties for building a Connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnProps.Initializer"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

const codestarConnectionsConnectionArnProps: codestar_connections.CodestarConnectionsConnectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnProps.property.connectionId">connectionId</a></code> | <code>string</code> | The ConnectionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnProps.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

The ConnectionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodestarConnectionsHostArnComponents <a name="CodestarConnectionsHostArnComponents" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnComponents"></a>

Parsed components of a Host ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnComponents.Initializer"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

const codestarConnectionsHostArnComponents: codestar_connections.CodestarConnectionsHostArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnComponents.property.hostId">hostId</a></code> | <code>string</code> | The HostId component. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnComponents.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

The HostId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodestarConnectionsHostArnProps <a name="CodestarConnectionsHostArnProps" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnProps"></a>

Properties for building a Host ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnProps.Initializer"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

const codestarConnectionsHostArnProps: codestar_connections.CodestarConnectionsHostArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnProps.property.hostId">hostId</a></code> | <code>string</code> | The HostId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnProps.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

The HostId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodestarConnectionsRepositoryLinkArnComponents <a name="CodestarConnectionsRepositoryLinkArnComponents" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnComponents"></a>

Parsed components of a RepositoryLink ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnComponents.Initializer"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

const codestarConnectionsRepositoryLinkArnComponents: codestar_connections.CodestarConnectionsRepositoryLinkArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnComponents.property.repositoryLinkId">repositoryLinkId</a></code> | <code>string</code> | The RepositoryLinkId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `repositoryLinkId`<sup>Required</sup> <a name="repositoryLinkId" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnComponents.property.repositoryLinkId"></a>

```typescript
public readonly repositoryLinkId: string;
```

- *Type:* string

The RepositoryLinkId component.

---

### CodestarConnectionsRepositoryLinkArnProps <a name="CodestarConnectionsRepositoryLinkArnProps" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnProps"></a>

Properties for building a RepositoryLink ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnProps.Initializer"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

const codestarConnectionsRepositoryLinkArnProps: codestar_connections.CodestarConnectionsRepositoryLinkArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnProps.property.repositoryLinkId">repositoryLinkId</a></code> | <code>string</code> | The RepositoryLinkId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `repositoryLinkId`<sup>Required</sup> <a name="repositoryLinkId" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnProps.property.repositoryLinkId"></a>

```typescript
public readonly repositoryLinkId: string;
```

- *Type:* string

The RepositoryLinkId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CodestarConnectionsActions <a name="CodestarConnectionsActions" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions"></a>

IAM action constants for the codestar-connections service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.Initializer"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

new codestar_connections.CodestarConnectionsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetConnection">actionGetConnection</a></code> | <code>string</code> | [Read] codestar-connections:GetConnection. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetConnectionToken">actionGetConnectionToken</a></code> | <code>string</code> | [Read] codestar-connections:GetConnectionToken. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetHost">actionGetHost</a></code> | <code>string</code> | [Read] codestar-connections:GetHost. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetIndividualAccessToken">actionGetIndividualAccessToken</a></code> | <code>string</code> | [Read] codestar-connections:GetIndividualAccessToken. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetInstallationUrl">actionGetInstallationUrl</a></code> | <code>string</code> | [Read] codestar-connections:GetInstallationUrl. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetRepositoryLink">actionGetRepositoryLink</a></code> | <code>string</code> | [Read] codestar-connections:GetRepositoryLink. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetRepositorySyncStatus">actionGetRepositorySyncStatus</a></code> | <code>string</code> | [Read] codestar-connections:GetRepositorySyncStatus. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetResourceSyncStatus">actionGetResourceSyncStatus</a></code> | <code>string</code> | [Read] codestar-connections:GetResourceSyncStatus. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetSyncBlockerSummary">actionGetSyncBlockerSummary</a></code> | <code>string</code> | [Read] codestar-connections:GetSyncBlockerSummary. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetSyncConfiguration">actionGetSyncConfiguration</a></code> | <code>string</code> | [Read] codestar-connections:GetSyncConfiguration. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.CreateConnection">CreateConnection</a></code> | <code>string</code> | [Write] codestar-connections:CreateConnection. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.CreateHost">CreateHost</a></code> | <code>string</code> | [Write] codestar-connections:CreateHost. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.CreateRepositoryLink">CreateRepositoryLink</a></code> | <code>string</code> | [Write] codestar-connections:CreateRepositoryLink. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.CreateSyncConfiguration">CreateSyncConfiguration</a></code> | <code>string</code> | [Write] codestar-connections:CreateSyncConfiguration. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.DeleteConnection">DeleteConnection</a></code> | <code>string</code> | [Write] codestar-connections:DeleteConnection. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.DeleteHost">DeleteHost</a></code> | <code>string</code> | [Write] codestar-connections:DeleteHost. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.DeleteRepositoryLink">DeleteRepositoryLink</a></code> | <code>string</code> | [Write] codestar-connections:DeleteRepositoryLink. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.DeleteSyncConfiguration">DeleteSyncConfiguration</a></code> | <code>string</code> | [Write] codestar-connections:DeleteSyncConfiguration. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.ListConnections">ListConnections</a></code> | <code>string</code> | [List] codestar-connections:ListConnections. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.ListHosts">ListHosts</a></code> | <code>string</code> | [List] codestar-connections:ListHosts. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.ListInstallationTargets">ListInstallationTargets</a></code> | <code>string</code> | [List] codestar-connections:ListInstallationTargets. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.ListRepositoryLinks">ListRepositoryLinks</a></code> | <code>string</code> | [List] codestar-connections:ListRepositoryLinks. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.ListRepositorySyncDefinitions">ListRepositorySyncDefinitions</a></code> | <code>string</code> | [List] codestar-connections:ListRepositorySyncDefinitions. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.ListSyncConfigurations">ListSyncConfigurations</a></code> | <code>string</code> | [List] codestar-connections:ListSyncConfigurations. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] codestar-connections:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.PassConnection">PassConnection</a></code> | <code>string</code> | [Read] codestar-connections:PassConnection. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.PassRepository">PassRepository</a></code> | <code>string</code> | [Read] codestar-connections:PassRepository. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.RegisterAppCode">RegisterAppCode</a></code> | <code>string</code> | [Read] codestar-connections:RegisterAppCode. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.StartAppRegistrationHandshake">StartAppRegistrationHandshake</a></code> | <code>string</code> | [Read] codestar-connections:StartAppRegistrationHandshake. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.StartOAuthHandshake">StartOAuthHandshake</a></code> | <code>string</code> | [Read] codestar-connections:StartOAuthHandshake. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] codestar-connections:TagResource. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] codestar-connections:UntagResource. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.UpdateConnectionInstallation">UpdateConnectionInstallation</a></code> | <code>string</code> | [Write] codestar-connections:UpdateConnectionInstallation. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.UpdateHost">UpdateHost</a></code> | <code>string</code> | [Write] codestar-connections:UpdateHost. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.UpdateRepositoryLink">UpdateRepositoryLink</a></code> | <code>string</code> | [Write] codestar-connections:UpdateRepositoryLink. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.UpdateSyncBlocker">UpdateSyncBlocker</a></code> | <code>string</code> | [Write] codestar-connections:UpdateSyncBlocker. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.UpdateSyncConfiguration">UpdateSyncConfiguration</a></code> | <code>string</code> | [Write] codestar-connections:UpdateSyncConfiguration. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.UseConnection">UseConnection</a></code> | <code>string</code> | [Read] codestar-connections:UseConnection. |

---

##### `actionGetConnection`<sup>Required</sup> <a name="actionGetConnection" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetConnection"></a>

```typescript
public readonly actionGetConnection: string;
```

- *Type:* string

[Read] codestar-connections:GetConnection.

---

##### `actionGetConnectionToken`<sup>Required</sup> <a name="actionGetConnectionToken" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetConnectionToken"></a>

```typescript
public readonly actionGetConnectionToken: string;
```

- *Type:* string

[Read] codestar-connections:GetConnectionToken.

---

##### `actionGetHost`<sup>Required</sup> <a name="actionGetHost" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetHost"></a>

```typescript
public readonly actionGetHost: string;
```

- *Type:* string

[Read] codestar-connections:GetHost.

---

##### `actionGetIndividualAccessToken`<sup>Required</sup> <a name="actionGetIndividualAccessToken" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetIndividualAccessToken"></a>

```typescript
public readonly actionGetIndividualAccessToken: string;
```

- *Type:* string

[Read] codestar-connections:GetIndividualAccessToken.

---

##### `actionGetInstallationUrl`<sup>Required</sup> <a name="actionGetInstallationUrl" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetInstallationUrl"></a>

```typescript
public readonly actionGetInstallationUrl: string;
```

- *Type:* string

[Read] codestar-connections:GetInstallationUrl.

---

##### `actionGetRepositoryLink`<sup>Required</sup> <a name="actionGetRepositoryLink" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetRepositoryLink"></a>

```typescript
public readonly actionGetRepositoryLink: string;
```

- *Type:* string

[Read] codestar-connections:GetRepositoryLink.

---

##### `actionGetRepositorySyncStatus`<sup>Required</sup> <a name="actionGetRepositorySyncStatus" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetRepositorySyncStatus"></a>

```typescript
public readonly actionGetRepositorySyncStatus: string;
```

- *Type:* string

[Read] codestar-connections:GetRepositorySyncStatus.

---

##### `actionGetResourceSyncStatus`<sup>Required</sup> <a name="actionGetResourceSyncStatus" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetResourceSyncStatus"></a>

```typescript
public readonly actionGetResourceSyncStatus: string;
```

- *Type:* string

[Read] codestar-connections:GetResourceSyncStatus.

---

##### `actionGetSyncBlockerSummary`<sup>Required</sup> <a name="actionGetSyncBlockerSummary" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetSyncBlockerSummary"></a>

```typescript
public readonly actionGetSyncBlockerSummary: string;
```

- *Type:* string

[Read] codestar-connections:GetSyncBlockerSummary.

---

##### `actionGetSyncConfiguration`<sup>Required</sup> <a name="actionGetSyncConfiguration" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.actionGetSyncConfiguration"></a>

```typescript
public readonly actionGetSyncConfiguration: string;
```

- *Type:* string

[Read] codestar-connections:GetSyncConfiguration.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string;
```

- *Type:* string

[Write] codestar-connections:CreateConnection.

---

##### `CreateHost`<sup>Required</sup> <a name="CreateHost" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.CreateHost"></a>

```typescript
public readonly CreateHost: string;
```

- *Type:* string

[Write] codestar-connections:CreateHost.

---

##### `CreateRepositoryLink`<sup>Required</sup> <a name="CreateRepositoryLink" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.CreateRepositoryLink"></a>

```typescript
public readonly CreateRepositoryLink: string;
```

- *Type:* string

[Write] codestar-connections:CreateRepositoryLink.

---

##### `CreateSyncConfiguration`<sup>Required</sup> <a name="CreateSyncConfiguration" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.CreateSyncConfiguration"></a>

```typescript
public readonly CreateSyncConfiguration: string;
```

- *Type:* string

[Write] codestar-connections:CreateSyncConfiguration.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string;
```

- *Type:* string

[Write] codestar-connections:DeleteConnection.

---

##### `DeleteHost`<sup>Required</sup> <a name="DeleteHost" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.DeleteHost"></a>

```typescript
public readonly DeleteHost: string;
```

- *Type:* string

[Write] codestar-connections:DeleteHost.

---

##### `DeleteRepositoryLink`<sup>Required</sup> <a name="DeleteRepositoryLink" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.DeleteRepositoryLink"></a>

```typescript
public readonly DeleteRepositoryLink: string;
```

- *Type:* string

[Write] codestar-connections:DeleteRepositoryLink.

---

##### `DeleteSyncConfiguration`<sup>Required</sup> <a name="DeleteSyncConfiguration" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.DeleteSyncConfiguration"></a>

```typescript
public readonly DeleteSyncConfiguration: string;
```

- *Type:* string

[Write] codestar-connections:DeleteSyncConfiguration.

---

##### `ListConnections`<sup>Required</sup> <a name="ListConnections" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.ListConnections"></a>

```typescript
public readonly ListConnections: string;
```

- *Type:* string

[List] codestar-connections:ListConnections.

---

##### `ListHosts`<sup>Required</sup> <a name="ListHosts" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.ListHosts"></a>

```typescript
public readonly ListHosts: string;
```

- *Type:* string

[List] codestar-connections:ListHosts.

---

##### `ListInstallationTargets`<sup>Required</sup> <a name="ListInstallationTargets" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.ListInstallationTargets"></a>

```typescript
public readonly ListInstallationTargets: string;
```

- *Type:* string

[List] codestar-connections:ListInstallationTargets.

---

##### `ListRepositoryLinks`<sup>Required</sup> <a name="ListRepositoryLinks" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.ListRepositoryLinks"></a>

```typescript
public readonly ListRepositoryLinks: string;
```

- *Type:* string

[List] codestar-connections:ListRepositoryLinks.

---

##### `ListRepositorySyncDefinitions`<sup>Required</sup> <a name="ListRepositorySyncDefinitions" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.ListRepositorySyncDefinitions"></a>

```typescript
public readonly ListRepositorySyncDefinitions: string;
```

- *Type:* string

[List] codestar-connections:ListRepositorySyncDefinitions.

---

##### `ListSyncConfigurations`<sup>Required</sup> <a name="ListSyncConfigurations" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.ListSyncConfigurations"></a>

```typescript
public readonly ListSyncConfigurations: string;
```

- *Type:* string

[List] codestar-connections:ListSyncConfigurations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] codestar-connections:ListTagsForResource.

---

##### `PassConnection`<sup>Required</sup> <a name="PassConnection" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.PassConnection"></a>

```typescript
public readonly PassConnection: string;
```

- *Type:* string

[Read] codestar-connections:PassConnection.

---

##### `PassRepository`<sup>Required</sup> <a name="PassRepository" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.PassRepository"></a>

```typescript
public readonly PassRepository: string;
```

- *Type:* string

[Read] codestar-connections:PassRepository.

---

##### `RegisterAppCode`<sup>Required</sup> <a name="RegisterAppCode" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.RegisterAppCode"></a>

```typescript
public readonly RegisterAppCode: string;
```

- *Type:* string

[Read] codestar-connections:RegisterAppCode.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAppRegistrationHandshake`<sup>Required</sup> <a name="StartAppRegistrationHandshake" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.StartAppRegistrationHandshake"></a>

```typescript
public readonly StartAppRegistrationHandshake: string;
```

- *Type:* string

[Read] codestar-connections:StartAppRegistrationHandshake.

---

##### `StartOAuthHandshake`<sup>Required</sup> <a name="StartOAuthHandshake" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.StartOAuthHandshake"></a>

```typescript
public readonly StartOAuthHandshake: string;
```

- *Type:* string

[Read] codestar-connections:StartOAuthHandshake.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] codestar-connections:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] codestar-connections:UntagResource.

---

##### `UpdateConnectionInstallation`<sup>Required</sup> <a name="UpdateConnectionInstallation" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.UpdateConnectionInstallation"></a>

```typescript
public readonly UpdateConnectionInstallation: string;
```

- *Type:* string

[Write] codestar-connections:UpdateConnectionInstallation.

---

##### `UpdateHost`<sup>Required</sup> <a name="UpdateHost" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.UpdateHost"></a>

```typescript
public readonly UpdateHost: string;
```

- *Type:* string

[Write] codestar-connections:UpdateHost.

---

##### `UpdateRepositoryLink`<sup>Required</sup> <a name="UpdateRepositoryLink" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.UpdateRepositoryLink"></a>

```typescript
public readonly UpdateRepositoryLink: string;
```

- *Type:* string

[Write] codestar-connections:UpdateRepositoryLink.

---

##### `UpdateSyncBlocker`<sup>Required</sup> <a name="UpdateSyncBlocker" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.UpdateSyncBlocker"></a>

```typescript
public readonly UpdateSyncBlocker: string;
```

- *Type:* string

[Write] codestar-connections:UpdateSyncBlocker.

---

##### `UpdateSyncConfiguration`<sup>Required</sup> <a name="UpdateSyncConfiguration" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.UpdateSyncConfiguration"></a>

```typescript
public readonly UpdateSyncConfiguration: string;
```

- *Type:* string

[Write] codestar-connections:UpdateSyncConfiguration.

---

##### `UseConnection`<sup>Required</sup> <a name="UseConnection" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsActions.property.UseConnection"></a>

```typescript
public readonly UseConnection: string;
```

- *Type:* string

[Read] codestar-connections:UseConnection.

---

### CodestarConnectionsConditions <a name="CodestarConnectionsConditions" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions"></a>

Condition key constants and builders for codestar-connections.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.Initializer"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

new codestar_connections.CodestarConnectionsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.branch">branch</a></code> | Generates a condition block for `codestar-connections:Branch`. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.branchName">branchName</a></code> | Generates a condition block for `codestar-connections:BranchName`. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.fullRepositoryId">fullRepositoryId</a></code> | Generates a condition block for `codestar-connections:FullRepositoryId`. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.hostARN">hostARN</a></code> | Generates a condition block for `codestar-connections:HostArn`. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.installationId">installationId</a></code> | Generates a condition block for `codestar-connections:InstallationId`. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.ownerId">ownerId</a></code> | Generates a condition block for `codestar-connections:OwnerId`. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.passedToService">passedToService</a></code> | Generates a condition block for `codestar-connections:PassedToService`. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.providerAction">providerAction</a></code> | Generates a condition block for `codestar-connections:ProviderAction`. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.providerPermissionsRequired">providerPermissionsRequired</a></code> | Generates a condition block for `codestar-connections:ProviderPermissionsRequired`. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.providerType">providerType</a></code> | Generates a condition block for `codestar-connections:ProviderType`. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.providerTypeFilter">providerTypeFilter</a></code> | Generates a condition block for `codestar-connections:ProviderTypeFilter`. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.repositoryName">repositoryName</a></code> | Generates a condition block for `codestar-connections:RepositoryName`. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.vpcId">vpcId</a></code> | Generates a condition block for `codestar-connections:VpcId`. |

---

##### `branch` <a name="branch" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.branch"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsConditions.branch(value: string)
```

Generates a condition block for `codestar-connections:Branch`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.branch.parameter.value"></a>

- *Type:* string

---

##### `branchName` <a name="branchName" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.branchName"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsConditions.branchName(value: string)
```

Generates a condition block for `codestar-connections:BranchName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.branchName.parameter.value"></a>

- *Type:* string

---

##### `fullRepositoryId` <a name="fullRepositoryId" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.fullRepositoryId"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsConditions.fullRepositoryId(value: string)
```

Generates a condition block for `codestar-connections:FullRepositoryId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.fullRepositoryId.parameter.value"></a>

- *Type:* string

---

##### `hostARN` <a name="hostARN" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.hostARN"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsConditions.hostARN(value: string)
```

Generates a condition block for `codestar-connections:HostArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.hostARN.parameter.value"></a>

- *Type:* string

---

##### `installationId` <a name="installationId" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.installationId"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsConditions.installationId(value: string)
```

Generates a condition block for `codestar-connections:InstallationId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.installationId.parameter.value"></a>

- *Type:* string

---

##### `ownerId` <a name="ownerId" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.ownerId"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsConditions.ownerId(value: string)
```

Generates a condition block for `codestar-connections:OwnerId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.ownerId.parameter.value"></a>

- *Type:* string

---

##### `passedToService` <a name="passedToService" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.passedToService"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsConditions.passedToService(value: string)
```

Generates a condition block for `codestar-connections:PassedToService`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.passedToService.parameter.value"></a>

- *Type:* string

---

##### `providerAction` <a name="providerAction" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.providerAction"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsConditions.providerAction(value: string)
```

Generates a condition block for `codestar-connections:ProviderAction`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.providerAction.parameter.value"></a>

- *Type:* string

---

##### `providerPermissionsRequired` <a name="providerPermissionsRequired" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.providerPermissionsRequired"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsConditions.providerPermissionsRequired(value: string)
```

Generates a condition block for `codestar-connections:ProviderPermissionsRequired`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.providerPermissionsRequired.parameter.value"></a>

- *Type:* string

---

##### `providerType` <a name="providerType" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.providerType"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsConditions.providerType(value: string)
```

Generates a condition block for `codestar-connections:ProviderType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.providerType.parameter.value"></a>

- *Type:* string

---

##### `providerTypeFilter` <a name="providerTypeFilter" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.providerTypeFilter"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsConditions.providerTypeFilter(value: string)
```

Generates a condition block for `codestar-connections:ProviderTypeFilter`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.providerTypeFilter.parameter.value"></a>

- *Type:* string

---

##### `repositoryName` <a name="repositoryName" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.repositoryName"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsConditions.repositoryName(value: string)
```

Generates a condition block for `codestar-connections:RepositoryName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.repositoryName.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.requestTag"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.resourceTag"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.tagKeys"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `vpcId` <a name="vpcId" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.vpcId"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsConditions.vpcId(value: string)
```

Generates a condition block for `codestar-connections:VpcId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.vpcId.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.actionGetIndividualAccessTokenConditionKeys">actionGetIndividualAccessTokenConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetIndividualAccessToken action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.actionGetInstallationUrlConditionKeys">actionGetInstallationUrlConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetInstallationUrl action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.actionGetRepositorySyncStatusConditionKeys">actionGetRepositorySyncStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRepositorySyncStatus action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.BRANCH">BRANCH</a></code> | <code>string</code> | Condition key: codestar-connections:Branch (String). |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.BRANCH_NAME">BRANCH_NAME</a></code> | <code>string</code> | Condition key: codestar-connections:BranchName (String). |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.CreateConnectionConditionKeys">CreateConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnection action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.CreateHostConditionKeys">CreateHostConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateHost action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.CreateRepositoryLinkConditionKeys">CreateRepositoryLinkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRepositoryLink action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.CreateSyncConfigurationConditionKeys">CreateSyncConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSyncConfiguration action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.FULL_REPOSITORY_ID">FULL_REPOSITORY_ID</a></code> | <code>string</code> | Condition key: codestar-connections:FullRepositoryId (String). |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.HOST_ARN">HOST_ARN</a></code> | <code>string</code> | Condition key: codestar-connections:HostArn (ARN). |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.INSTALLATION_ID">INSTALLATION_ID</a></code> | <code>string</code> | Condition key: codestar-connections:InstallationId (String). |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.ListConnectionsConditionKeys">ListConnectionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListConnections action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.ListHostsConditionKeys">ListHostsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListHosts action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.OWNER_ID">OWNER_ID</a></code> | <code>string</code> | Condition key: codestar-connections:OwnerId (String). |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.PassConnectionConditionKeys">PassConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PassConnection action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.PASSED_TO_SERVICE">PASSED_TO_SERVICE</a></code> | <code>string</code> | Condition key: codestar-connections:PassedToService (String). |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.PassRepositoryConditionKeys">PassRepositoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PassRepository action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.PROVIDER_ACTION">PROVIDER_ACTION</a></code> | <code>string</code> | Condition key: codestar-connections:ProviderAction (String). |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.PROVIDER_PERMISSIONS_REQUIRED">PROVIDER_PERMISSIONS_REQUIRED</a></code> | <code>string</code> | Condition key: codestar-connections:ProviderPermissionsRequired (String). |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.PROVIDER_TYPE">PROVIDER_TYPE</a></code> | <code>string</code> | Condition key: codestar-connections:ProviderType (String). |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.PROVIDER_TYPE_FILTER">PROVIDER_TYPE_FILTER</a></code> | <code>string</code> | Condition key: codestar-connections:ProviderTypeFilter (String). |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.RegisterAppCodeConditionKeys">RegisterAppCodeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterAppCode action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.REPOSITORY_NAME">REPOSITORY_NAME</a></code> | <code>string</code> | Condition key: codestar-connections:RepositoryName (String). |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.StartAppRegistrationHandshakeConditionKeys">StartAppRegistrationHandshakeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartAppRegistrationHandshake action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.StartOAuthHandshakeConditionKeys">StartOAuthHandshakeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartOAuthHandshake action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.UpdateConnectionInstallationConditionKeys">UpdateConnectionInstallationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateConnectionInstallation action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.UpdateHostConditionKeys">UpdateHostConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateHost action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.UpdateSyncConfigurationConditionKeys">UpdateSyncConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSyncConfiguration action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.UseConnectionConditionKeys">UseConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UseConnection action. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.VPC_ID">VPC_ID</a></code> | <code>string</code> | Condition key: codestar-connections:VpcId (String). |

---

##### `actionGetIndividualAccessTokenConditionKeys`<sup>Required</sup> <a name="actionGetIndividualAccessTokenConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.actionGetIndividualAccessTokenConditionKeys"></a>

```typescript
public readonly actionGetIndividualAccessTokenConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetIndividualAccessToken action.

---

##### `actionGetInstallationUrlConditionKeys`<sup>Required</sup> <a name="actionGetInstallationUrlConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.actionGetInstallationUrlConditionKeys"></a>

```typescript
public readonly actionGetInstallationUrlConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetInstallationUrl action.

---

##### `actionGetRepositorySyncStatusConditionKeys`<sup>Required</sup> <a name="actionGetRepositorySyncStatusConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.actionGetRepositorySyncStatusConditionKeys"></a>

```typescript
public readonly actionGetRepositorySyncStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRepositorySyncStatus action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BRANCH`<sup>Required</sup> <a name="BRANCH" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.BRANCH"></a>

```typescript
public readonly BRANCH: string;
```

- *Type:* string

Condition key: codestar-connections:Branch (String).

---

##### `BRANCH_NAME`<sup>Required</sup> <a name="BRANCH_NAME" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.BRANCH_NAME"></a>

```typescript
public readonly BRANCH_NAME: string;
```

- *Type:* string

Condition key: codestar-connections:BranchName (String).

---

##### `CreateConnectionConditionKeys`<sup>Required</sup> <a name="CreateConnectionConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.CreateConnectionConditionKeys"></a>

```typescript
public readonly CreateConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnection action.

---

##### `CreateHostConditionKeys`<sup>Required</sup> <a name="CreateHostConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.CreateHostConditionKeys"></a>

```typescript
public readonly CreateHostConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateHost action.

---

##### `CreateRepositoryLinkConditionKeys`<sup>Required</sup> <a name="CreateRepositoryLinkConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.CreateRepositoryLinkConditionKeys"></a>

```typescript
public readonly CreateRepositoryLinkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRepositoryLink action.

---

##### `CreateSyncConfigurationConditionKeys`<sup>Required</sup> <a name="CreateSyncConfigurationConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.CreateSyncConfigurationConditionKeys"></a>

```typescript
public readonly CreateSyncConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSyncConfiguration action.

---

##### `FULL_REPOSITORY_ID`<sup>Required</sup> <a name="FULL_REPOSITORY_ID" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.FULL_REPOSITORY_ID"></a>

```typescript
public readonly FULL_REPOSITORY_ID: string;
```

- *Type:* string

Condition key: codestar-connections:FullRepositoryId (String).

---

##### `HOST_ARN`<sup>Required</sup> <a name="HOST_ARN" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.HOST_ARN"></a>

```typescript
public readonly HOST_ARN: string;
```

- *Type:* string

Condition key: codestar-connections:HostArn (ARN).

---

##### `INSTALLATION_ID`<sup>Required</sup> <a name="INSTALLATION_ID" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.INSTALLATION_ID"></a>

```typescript
public readonly INSTALLATION_ID: string;
```

- *Type:* string

Condition key: codestar-connections:InstallationId (String).

---

##### `ListConnectionsConditionKeys`<sup>Required</sup> <a name="ListConnectionsConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.ListConnectionsConditionKeys"></a>

```typescript
public readonly ListConnectionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListConnections action.

---

##### `ListHostsConditionKeys`<sup>Required</sup> <a name="ListHostsConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.ListHostsConditionKeys"></a>

```typescript
public readonly ListHostsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListHosts action.

---

##### `OWNER_ID`<sup>Required</sup> <a name="OWNER_ID" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.OWNER_ID"></a>

```typescript
public readonly OWNER_ID: string;
```

- *Type:* string

Condition key: codestar-connections:OwnerId (String).

---

##### `PassConnectionConditionKeys`<sup>Required</sup> <a name="PassConnectionConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.PassConnectionConditionKeys"></a>

```typescript
public readonly PassConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PassConnection action.

---

##### `PASSED_TO_SERVICE`<sup>Required</sup> <a name="PASSED_TO_SERVICE" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.PASSED_TO_SERVICE"></a>

```typescript
public readonly PASSED_TO_SERVICE: string;
```

- *Type:* string

Condition key: codestar-connections:PassedToService (String).

---

##### `PassRepositoryConditionKeys`<sup>Required</sup> <a name="PassRepositoryConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.PassRepositoryConditionKeys"></a>

```typescript
public readonly PassRepositoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PassRepository action.

---

##### `PROVIDER_ACTION`<sup>Required</sup> <a name="PROVIDER_ACTION" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.PROVIDER_ACTION"></a>

```typescript
public readonly PROVIDER_ACTION: string;
```

- *Type:* string

Condition key: codestar-connections:ProviderAction (String).

---

##### `PROVIDER_PERMISSIONS_REQUIRED`<sup>Required</sup> <a name="PROVIDER_PERMISSIONS_REQUIRED" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.PROVIDER_PERMISSIONS_REQUIRED"></a>

```typescript
public readonly PROVIDER_PERMISSIONS_REQUIRED: string;
```

- *Type:* string

Condition key: codestar-connections:ProviderPermissionsRequired (String).

---

##### `PROVIDER_TYPE`<sup>Required</sup> <a name="PROVIDER_TYPE" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.PROVIDER_TYPE"></a>

```typescript
public readonly PROVIDER_TYPE: string;
```

- *Type:* string

Condition key: codestar-connections:ProviderType (String).

---

##### `PROVIDER_TYPE_FILTER`<sup>Required</sup> <a name="PROVIDER_TYPE_FILTER" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.PROVIDER_TYPE_FILTER"></a>

```typescript
public readonly PROVIDER_TYPE_FILTER: string;
```

- *Type:* string

Condition key: codestar-connections:ProviderTypeFilter (String).

---

##### `RegisterAppCodeConditionKeys`<sup>Required</sup> <a name="RegisterAppCodeConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.RegisterAppCodeConditionKeys"></a>

```typescript
public readonly RegisterAppCodeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterAppCode action.

---

##### `REPOSITORY_NAME`<sup>Required</sup> <a name="REPOSITORY_NAME" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.REPOSITORY_NAME"></a>

```typescript
public readonly REPOSITORY_NAME: string;
```

- *Type:* string

Condition key: codestar-connections:RepositoryName (String).

---

##### `StartAppRegistrationHandshakeConditionKeys`<sup>Required</sup> <a name="StartAppRegistrationHandshakeConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.StartAppRegistrationHandshakeConditionKeys"></a>

```typescript
public readonly StartAppRegistrationHandshakeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartAppRegistrationHandshake action.

---

##### `StartOAuthHandshakeConditionKeys`<sup>Required</sup> <a name="StartOAuthHandshakeConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.StartOAuthHandshakeConditionKeys"></a>

```typescript
public readonly StartOAuthHandshakeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartOAuthHandshake action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateConnectionInstallationConditionKeys`<sup>Required</sup> <a name="UpdateConnectionInstallationConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.UpdateConnectionInstallationConditionKeys"></a>

```typescript
public readonly UpdateConnectionInstallationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateConnectionInstallation action.

---

##### `UpdateHostConditionKeys`<sup>Required</sup> <a name="UpdateHostConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.UpdateHostConditionKeys"></a>

```typescript
public readonly UpdateHostConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateHost action.

---

##### `UpdateSyncConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateSyncConfigurationConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.UpdateSyncConfigurationConditionKeys"></a>

```typescript
public readonly UpdateSyncConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSyncConfiguration action.

---

##### `UseConnectionConditionKeys`<sup>Required</sup> <a name="UseConnectionConditionKeys" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.UseConnectionConditionKeys"></a>

```typescript
public readonly UseConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UseConnection action.

---

##### `VPC_ID`<sup>Required</sup> <a name="VPC_ID" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsConditions.property.VPC_ID"></a>

```typescript
public readonly VPC_ID: string;
```

- *Type:* string

Condition key: codestar-connections:VpcId (String).

---

### CodestarConnectionsOperations <a name="CodestarConnectionsOperations" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations"></a>

API operation to required IAM actions mapping for codestar-connections.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.Initializer"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

new codestar_connections.CodestarConnectionsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.CreateConnection">CreateConnection</a></code> | <code>string[]</code> | IAM actions required for the CreateConnection API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.CreateHost">CreateHost</a></code> | <code>string[]</code> | IAM actions required for the CreateHost API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.CreateRepositoryLink">CreateRepositoryLink</a></code> | <code>string[]</code> | IAM actions required for the CreateRepositoryLink API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.CreateSyncConfiguration">CreateSyncConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateSyncConfiguration API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.DeleteConnection">DeleteConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnection API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.DeleteHost">DeleteHost</a></code> | <code>string[]</code> | IAM actions required for the DeleteHost API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.DeleteRepositoryLink">DeleteRepositoryLink</a></code> | <code>string[]</code> | IAM actions required for the DeleteRepositoryLink API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.DeleteSyncConfiguration">DeleteSyncConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteSyncConfiguration API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.ListConnections">ListConnections</a></code> | <code>string[]</code> | IAM actions required for the ListConnections API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.ListHosts">ListHosts</a></code> | <code>string[]</code> | IAM actions required for the ListHosts API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.ListRepositoryLinks">ListRepositoryLinks</a></code> | <code>string[]</code> | IAM actions required for the ListRepositoryLinks API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.ListRepositorySyncDefinitions">ListRepositorySyncDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListRepositorySyncDefinitions API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.ListSyncConfigurations">ListSyncConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListSyncConfigurations API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.opGetConnection">opGetConnection</a></code> | <code>string[]</code> | IAM actions required for the GetConnection API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.opGetHost">opGetHost</a></code> | <code>string[]</code> | IAM actions required for the GetHost API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.opGetRepositoryLink">opGetRepositoryLink</a></code> | <code>string[]</code> | IAM actions required for the GetRepositoryLink API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.opGetRepositorySyncStatus">opGetRepositorySyncStatus</a></code> | <code>string[]</code> | IAM actions required for the GetRepositorySyncStatus API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.opGetResourceSyncStatus">opGetResourceSyncStatus</a></code> | <code>string[]</code> | IAM actions required for the GetResourceSyncStatus API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.opGetSyncBlockerSummary">opGetSyncBlockerSummary</a></code> | <code>string[]</code> | IAM actions required for the GetSyncBlockerSummary API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.opGetSyncConfiguration">opGetSyncConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetSyncConfiguration API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.UpdateHost">UpdateHost</a></code> | <code>string[]</code> | IAM actions required for the UpdateHost API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.UpdateRepositoryLink">UpdateRepositoryLink</a></code> | <code>string[]</code> | IAM actions required for the UpdateRepositoryLink API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.UpdateSyncBlocker">UpdateSyncBlocker</a></code> | <code>string[]</code> | IAM actions required for the UpdateSyncBlocker API call. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.UpdateSyncConfiguration">UpdateSyncConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateSyncConfiguration API call. |

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnection API call.

---

##### `CreateHost`<sup>Required</sup> <a name="CreateHost" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.CreateHost"></a>

```typescript
public readonly CreateHost: string[];
```

- *Type:* string[]

IAM actions required for the CreateHost API call.

---

##### `CreateRepositoryLink`<sup>Required</sup> <a name="CreateRepositoryLink" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.CreateRepositoryLink"></a>

```typescript
public readonly CreateRepositoryLink: string[];
```

- *Type:* string[]

IAM actions required for the CreateRepositoryLink API call.

---

##### `CreateSyncConfiguration`<sup>Required</sup> <a name="CreateSyncConfiguration" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.CreateSyncConfiguration"></a>

```typescript
public readonly CreateSyncConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateSyncConfiguration API call.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnection API call.

---

##### `DeleteHost`<sup>Required</sup> <a name="DeleteHost" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.DeleteHost"></a>

```typescript
public readonly DeleteHost: string[];
```

- *Type:* string[]

IAM actions required for the DeleteHost API call.

---

##### `DeleteRepositoryLink`<sup>Required</sup> <a name="DeleteRepositoryLink" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.DeleteRepositoryLink"></a>

```typescript
public readonly DeleteRepositoryLink: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRepositoryLink API call.

---

##### `DeleteSyncConfiguration`<sup>Required</sup> <a name="DeleteSyncConfiguration" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.DeleteSyncConfiguration"></a>

```typescript
public readonly DeleteSyncConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSyncConfiguration API call.

---

##### `ListConnections`<sup>Required</sup> <a name="ListConnections" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.ListConnections"></a>

```typescript
public readonly ListConnections: string[];
```

- *Type:* string[]

IAM actions required for the ListConnections API call.

---

##### `ListHosts`<sup>Required</sup> <a name="ListHosts" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.ListHosts"></a>

```typescript
public readonly ListHosts: string[];
```

- *Type:* string[]

IAM actions required for the ListHosts API call.

---

##### `ListRepositoryLinks`<sup>Required</sup> <a name="ListRepositoryLinks" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.ListRepositoryLinks"></a>

```typescript
public readonly ListRepositoryLinks: string[];
```

- *Type:* string[]

IAM actions required for the ListRepositoryLinks API call.

---

##### `ListRepositorySyncDefinitions`<sup>Required</sup> <a name="ListRepositorySyncDefinitions" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.ListRepositorySyncDefinitions"></a>

```typescript
public readonly ListRepositorySyncDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListRepositorySyncDefinitions API call.

---

##### `ListSyncConfigurations`<sup>Required</sup> <a name="ListSyncConfigurations" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.ListSyncConfigurations"></a>

```typescript
public readonly ListSyncConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListSyncConfigurations API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetConnection`<sup>Required</sup> <a name="opGetConnection" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.opGetConnection"></a>

```typescript
public readonly opGetConnection: string[];
```

- *Type:* string[]

IAM actions required for the GetConnection API call.

---

##### `opGetHost`<sup>Required</sup> <a name="opGetHost" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.opGetHost"></a>

```typescript
public readonly opGetHost: string[];
```

- *Type:* string[]

IAM actions required for the GetHost API call.

---

##### `opGetRepositoryLink`<sup>Required</sup> <a name="opGetRepositoryLink" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.opGetRepositoryLink"></a>

```typescript
public readonly opGetRepositoryLink: string[];
```

- *Type:* string[]

IAM actions required for the GetRepositoryLink API call.

---

##### `opGetRepositorySyncStatus`<sup>Required</sup> <a name="opGetRepositorySyncStatus" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.opGetRepositorySyncStatus"></a>

```typescript
public readonly opGetRepositorySyncStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetRepositorySyncStatus API call.

---

##### `opGetResourceSyncStatus`<sup>Required</sup> <a name="opGetResourceSyncStatus" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.opGetResourceSyncStatus"></a>

```typescript
public readonly opGetResourceSyncStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceSyncStatus API call.

---

##### `opGetSyncBlockerSummary`<sup>Required</sup> <a name="opGetSyncBlockerSummary" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.opGetSyncBlockerSummary"></a>

```typescript
public readonly opGetSyncBlockerSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetSyncBlockerSummary API call.

---

##### `opGetSyncConfiguration`<sup>Required</sup> <a name="opGetSyncConfiguration" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.opGetSyncConfiguration"></a>

```typescript
public readonly opGetSyncConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetSyncConfiguration API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateHost`<sup>Required</sup> <a name="UpdateHost" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.UpdateHost"></a>

```typescript
public readonly UpdateHost: string[];
```

- *Type:* string[]

IAM actions required for the UpdateHost API call.

---

##### `UpdateRepositoryLink`<sup>Required</sup> <a name="UpdateRepositoryLink" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.UpdateRepositoryLink"></a>

```typescript
public readonly UpdateRepositoryLink: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRepositoryLink API call.

---

##### `UpdateSyncBlocker`<sup>Required</sup> <a name="UpdateSyncBlocker" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.UpdateSyncBlocker"></a>

```typescript
public readonly UpdateSyncBlocker: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSyncBlocker API call.

---

##### `UpdateSyncConfiguration`<sup>Required</sup> <a name="UpdateSyncConfiguration" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsOperations.property.UpdateSyncConfiguration"></a>

```typescript
public readonly UpdateSyncConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSyncConfiguration API call.

---

### CodestarConnectionsResources <a name="CodestarConnectionsResources" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources"></a>

ARN builders, validators, and parsers for codestar-connections resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.Initializer"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

new codestar_connections.CodestarConnectionsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.connection">connection</a></code> | Builds an ARN for the Connection resource. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.host">host</a></code> | Builds an ARN for the Host resource. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.isValidConnectionArn">isValidConnectionArn</a></code> | Validates whether a string is a valid ARN for the Connection resource. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.isValidHostArn">isValidHostArn</a></code> | Validates whether a string is a valid ARN for the Host resource. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.isValidRepositoryLinkArn">isValidRepositoryLinkArn</a></code> | Validates whether a string is a valid ARN for the RepositoryLink resource. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.parseConnectionArn">parseConnectionArn</a></code> | Parses a Connection ARN into its components. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.parseHostArn">parseHostArn</a></code> | Parses a Host ARN into its components. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.parseRepositoryLinkArn">parseRepositoryLinkArn</a></code> | Parses a RepositoryLink ARN into its components. |
| <code><a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.repositoryLink">repositoryLink</a></code> | Builds an ARN for the RepositoryLink resource. |

---

##### `connection` <a name="connection" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.connection"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsResources.connection(props: CodestarConnectionsConnectionArnProps)
```

Builds an ARN for the Connection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.connection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsConnectionArnProps">CodestarConnectionsConnectionArnProps</a>

---

##### `host` <a name="host" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.host"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsResources.host(props: CodestarConnectionsHostArnProps)
```

Builds an ARN for the Host resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.host.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsHostArnProps">CodestarConnectionsHostArnProps</a>

---

##### `isValidConnectionArn` <a name="isValidConnectionArn" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.isValidConnectionArn"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsResources.isValidConnectionArn(arn: string)
```

Validates whether a string is a valid ARN for the Connection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.isValidConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidHostArn` <a name="isValidHostArn" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.isValidHostArn"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsResources.isValidHostArn(arn: string)
```

Validates whether a string is a valid ARN for the Host resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.isValidHostArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRepositoryLinkArn` <a name="isValidRepositoryLinkArn" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.isValidRepositoryLinkArn"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsResources.isValidRepositoryLinkArn(arn: string)
```

Validates whether a string is a valid ARN for the RepositoryLink resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.isValidRepositoryLinkArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectionArn` <a name="parseConnectionArn" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.parseConnectionArn"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsResources.parseConnectionArn(arn: string)
```

Parses a Connection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.parseConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseHostArn` <a name="parseHostArn" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.parseHostArn"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsResources.parseHostArn(arn: string)
```

Parses a Host ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.parseHostArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRepositoryLinkArn` <a name="parseRepositoryLinkArn" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.parseRepositoryLinkArn"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsResources.parseRepositoryLinkArn(arn: string)
```

Parses a RepositoryLink ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.parseRepositoryLinkArn.parameter.arn"></a>

- *Type:* string

---

##### `repositoryLink` <a name="repositoryLink" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.repositoryLink"></a>

```typescript
import { codestar_connections } from '@cdk_utils/iam'

codestar_connections.CodestarConnectionsResources.repositoryLink(props: CodestarConnectionsRepositoryLinkArnProps)
```

Builds an ARN for the RepositoryLink resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codestar_connections.CodestarConnectionsResources.repositoryLink.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codestar_connections.CodestarConnectionsRepositoryLinkArnProps">CodestarConnectionsRepositoryLinkArnProps</a>

---




