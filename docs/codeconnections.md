# `codeconnections` Submodule <a name="`codeconnections` Submodule" id="@cdk_utils/iam.codeconnections"></a>


## Structs <a name="Structs" id="Structs"></a>

### CodeconnectionsConnectionArnComponents <a name="CodeconnectionsConnectionArnComponents" id="@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnComponents"></a>

Parsed components of a Connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnComponents.Initializer"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

const codeconnectionsConnectionArnComponents: codeconnections.CodeconnectionsConnectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnComponents.property.connectionId">connectionId</a></code> | <code>string</code> | The ConnectionId component. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnComponents.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

The ConnectionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodeconnectionsConnectionArnProps <a name="CodeconnectionsConnectionArnProps" id="@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnProps"></a>

Properties for building a Connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnProps.Initializer"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

const codeconnectionsConnectionArnProps: codeconnections.CodeconnectionsConnectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnProps.property.connectionId">connectionId</a></code> | <code>string</code> | The ConnectionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnProps.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

The ConnectionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodeconnectionsHostArnComponents <a name="CodeconnectionsHostArnComponents" id="@cdk_utils/iam.codeconnections.CodeconnectionsHostArnComponents"></a>

Parsed components of a Host ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeconnections.CodeconnectionsHostArnComponents.Initializer"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

const codeconnectionsHostArnComponents: codeconnections.CodeconnectionsHostArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsHostArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsHostArnComponents.property.hostId">hostId</a></code> | <code>string</code> | The HostId component. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsHostArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsHostArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codeconnections.CodeconnectionsHostArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdk_utils/iam.codeconnections.CodeconnectionsHostArnComponents.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

The HostId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codeconnections.CodeconnectionsHostArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codeconnections.CodeconnectionsHostArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodeconnectionsHostArnProps <a name="CodeconnectionsHostArnProps" id="@cdk_utils/iam.codeconnections.CodeconnectionsHostArnProps"></a>

Properties for building a Host ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeconnections.CodeconnectionsHostArnProps.Initializer"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

const codeconnectionsHostArnProps: codeconnections.CodeconnectionsHostArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsHostArnProps.property.hostId">hostId</a></code> | <code>string</code> | The HostId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsHostArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsHostArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsHostArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdk_utils/iam.codeconnections.CodeconnectionsHostArnProps.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

The HostId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codeconnections.CodeconnectionsHostArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codeconnections.CodeconnectionsHostArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codeconnections.CodeconnectionsHostArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodeconnectionsRepositoryLinkArnComponents <a name="CodeconnectionsRepositoryLinkArnComponents" id="@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnComponents"></a>

Parsed components of a RepositoryLink ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnComponents.Initializer"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

const codeconnectionsRepositoryLinkArnComponents: codeconnections.CodeconnectionsRepositoryLinkArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnComponents.property.repositoryLinkId">repositoryLinkId</a></code> | <code>string</code> | The RepositoryLinkId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `repositoryLinkId`<sup>Required</sup> <a name="repositoryLinkId" id="@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnComponents.property.repositoryLinkId"></a>

```typescript
public readonly repositoryLinkId: string;
```

- *Type:* string

The RepositoryLinkId component.

---

### CodeconnectionsRepositoryLinkArnProps <a name="CodeconnectionsRepositoryLinkArnProps" id="@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnProps"></a>

Properties for building a RepositoryLink ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnProps.Initializer"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

const codeconnectionsRepositoryLinkArnProps: codeconnections.CodeconnectionsRepositoryLinkArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnProps.property.repositoryLinkId">repositoryLinkId</a></code> | <code>string</code> | The RepositoryLinkId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `repositoryLinkId`<sup>Required</sup> <a name="repositoryLinkId" id="@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnProps.property.repositoryLinkId"></a>

```typescript
public readonly repositoryLinkId: string;
```

- *Type:* string

The RepositoryLinkId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CodeconnectionsActions <a name="CodeconnectionsActions" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions"></a>

IAM action constants for the codeconnections service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.Initializer"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

new codeconnections.CodeconnectionsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetConnection">actionGetConnection</a></code> | <code>string</code> | [Read] codeconnections:GetConnection. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetConnectionToken">actionGetConnectionToken</a></code> | <code>string</code> | [Read] codeconnections:GetConnectionToken. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetHost">actionGetHost</a></code> | <code>string</code> | [Read] codeconnections:GetHost. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetIndividualAccessToken">actionGetIndividualAccessToken</a></code> | <code>string</code> | [Read] codeconnections:GetIndividualAccessToken. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetInstallationUrl">actionGetInstallationUrl</a></code> | <code>string</code> | [Read] codeconnections:GetInstallationUrl. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetRepositoryLink">actionGetRepositoryLink</a></code> | <code>string</code> | [Read] codeconnections:GetRepositoryLink. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetRepositorySyncStatus">actionGetRepositorySyncStatus</a></code> | <code>string</code> | [Read] codeconnections:GetRepositorySyncStatus. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetResourceSyncStatus">actionGetResourceSyncStatus</a></code> | <code>string</code> | [Read] codeconnections:GetResourceSyncStatus. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetSyncBlockerSummary">actionGetSyncBlockerSummary</a></code> | <code>string</code> | [Read] codeconnections:GetSyncBlockerSummary. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetSyncConfiguration">actionGetSyncConfiguration</a></code> | <code>string</code> | [Read] codeconnections:GetSyncConfiguration. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.CreateConnection">CreateConnection</a></code> | <code>string</code> | [Write] codeconnections:CreateConnection. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.CreateHost">CreateHost</a></code> | <code>string</code> | [Write] codeconnections:CreateHost. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.CreateRepositoryLink">CreateRepositoryLink</a></code> | <code>string</code> | [Write] codeconnections:CreateRepositoryLink. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.CreateSyncConfiguration">CreateSyncConfiguration</a></code> | <code>string</code> | [Write] codeconnections:CreateSyncConfiguration. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.DeleteConnection">DeleteConnection</a></code> | <code>string</code> | [Write] codeconnections:DeleteConnection. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.DeleteHost">DeleteHost</a></code> | <code>string</code> | [Write] codeconnections:DeleteHost. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.DeleteRepositoryLink">DeleteRepositoryLink</a></code> | <code>string</code> | [Write] codeconnections:DeleteRepositoryLink. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.DeleteSyncConfiguration">DeleteSyncConfiguration</a></code> | <code>string</code> | [Write] codeconnections:DeleteSyncConfiguration. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.ListConnections">ListConnections</a></code> | <code>string</code> | [List] codeconnections:ListConnections. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.ListHosts">ListHosts</a></code> | <code>string</code> | [List] codeconnections:ListHosts. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.ListInstallationTargets">ListInstallationTargets</a></code> | <code>string</code> | [List] codeconnections:ListInstallationTargets. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.ListRepositoryLinks">ListRepositoryLinks</a></code> | <code>string</code> | [List] codeconnections:ListRepositoryLinks. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.ListRepositorySyncDefinitions">ListRepositorySyncDefinitions</a></code> | <code>string</code> | [List] codeconnections:ListRepositorySyncDefinitions. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.ListSyncConfigurations">ListSyncConfigurations</a></code> | <code>string</code> | [List] codeconnections:ListSyncConfigurations. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] codeconnections:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.PassConnection">PassConnection</a></code> | <code>string</code> | [Read] codeconnections:PassConnection. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.PassRepository">PassRepository</a></code> | <code>string</code> | [Read] codeconnections:PassRepository. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.RegisterAppCode">RegisterAppCode</a></code> | <code>string</code> | [Read] codeconnections:RegisterAppCode. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.StartAppRegistrationHandshake">StartAppRegistrationHandshake</a></code> | <code>string</code> | [Read] codeconnections:StartAppRegistrationHandshake. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.StartOAuthHandshake">StartOAuthHandshake</a></code> | <code>string</code> | [Read] codeconnections:StartOAuthHandshake. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] codeconnections:TagResource. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] codeconnections:UntagResource. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.UpdateConnectionInstallation">UpdateConnectionInstallation</a></code> | <code>string</code> | [Write] codeconnections:UpdateConnectionInstallation. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.UpdateHost">UpdateHost</a></code> | <code>string</code> | [Write] codeconnections:UpdateHost. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.UpdateRepositoryLink">UpdateRepositoryLink</a></code> | <code>string</code> | [Write] codeconnections:UpdateRepositoryLink. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.UpdateSyncBlocker">UpdateSyncBlocker</a></code> | <code>string</code> | [Write] codeconnections:UpdateSyncBlocker. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.UpdateSyncConfiguration">UpdateSyncConfiguration</a></code> | <code>string</code> | [Write] codeconnections:UpdateSyncConfiguration. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.UseConnection">UseConnection</a></code> | <code>string</code> | [Read] codeconnections:UseConnection. |

---

##### `actionGetConnection`<sup>Required</sup> <a name="actionGetConnection" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetConnection"></a>

```typescript
public readonly actionGetConnection: string;
```

- *Type:* string

[Read] codeconnections:GetConnection.

---

##### `actionGetConnectionToken`<sup>Required</sup> <a name="actionGetConnectionToken" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetConnectionToken"></a>

```typescript
public readonly actionGetConnectionToken: string;
```

- *Type:* string

[Read] codeconnections:GetConnectionToken.

---

##### `actionGetHost`<sup>Required</sup> <a name="actionGetHost" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetHost"></a>

```typescript
public readonly actionGetHost: string;
```

- *Type:* string

[Read] codeconnections:GetHost.

---

##### `actionGetIndividualAccessToken`<sup>Required</sup> <a name="actionGetIndividualAccessToken" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetIndividualAccessToken"></a>

```typescript
public readonly actionGetIndividualAccessToken: string;
```

- *Type:* string

[Read] codeconnections:GetIndividualAccessToken.

---

##### `actionGetInstallationUrl`<sup>Required</sup> <a name="actionGetInstallationUrl" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetInstallationUrl"></a>

```typescript
public readonly actionGetInstallationUrl: string;
```

- *Type:* string

[Read] codeconnections:GetInstallationUrl.

---

##### `actionGetRepositoryLink`<sup>Required</sup> <a name="actionGetRepositoryLink" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetRepositoryLink"></a>

```typescript
public readonly actionGetRepositoryLink: string;
```

- *Type:* string

[Read] codeconnections:GetRepositoryLink.

---

##### `actionGetRepositorySyncStatus`<sup>Required</sup> <a name="actionGetRepositorySyncStatus" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetRepositorySyncStatus"></a>

```typescript
public readonly actionGetRepositorySyncStatus: string;
```

- *Type:* string

[Read] codeconnections:GetRepositorySyncStatus.

---

##### `actionGetResourceSyncStatus`<sup>Required</sup> <a name="actionGetResourceSyncStatus" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetResourceSyncStatus"></a>

```typescript
public readonly actionGetResourceSyncStatus: string;
```

- *Type:* string

[Read] codeconnections:GetResourceSyncStatus.

---

##### `actionGetSyncBlockerSummary`<sup>Required</sup> <a name="actionGetSyncBlockerSummary" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetSyncBlockerSummary"></a>

```typescript
public readonly actionGetSyncBlockerSummary: string;
```

- *Type:* string

[Read] codeconnections:GetSyncBlockerSummary.

---

##### `actionGetSyncConfiguration`<sup>Required</sup> <a name="actionGetSyncConfiguration" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.actionGetSyncConfiguration"></a>

```typescript
public readonly actionGetSyncConfiguration: string;
```

- *Type:* string

[Read] codeconnections:GetSyncConfiguration.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string;
```

- *Type:* string

[Write] codeconnections:CreateConnection.

---

##### `CreateHost`<sup>Required</sup> <a name="CreateHost" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.CreateHost"></a>

```typescript
public readonly CreateHost: string;
```

- *Type:* string

[Write] codeconnections:CreateHost.

---

##### `CreateRepositoryLink`<sup>Required</sup> <a name="CreateRepositoryLink" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.CreateRepositoryLink"></a>

```typescript
public readonly CreateRepositoryLink: string;
```

- *Type:* string

[Write] codeconnections:CreateRepositoryLink.

---

##### `CreateSyncConfiguration`<sup>Required</sup> <a name="CreateSyncConfiguration" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.CreateSyncConfiguration"></a>

```typescript
public readonly CreateSyncConfiguration: string;
```

- *Type:* string

[Write] codeconnections:CreateSyncConfiguration.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string;
```

- *Type:* string

[Write] codeconnections:DeleteConnection.

---

##### `DeleteHost`<sup>Required</sup> <a name="DeleteHost" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.DeleteHost"></a>

```typescript
public readonly DeleteHost: string;
```

- *Type:* string

[Write] codeconnections:DeleteHost.

---

##### `DeleteRepositoryLink`<sup>Required</sup> <a name="DeleteRepositoryLink" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.DeleteRepositoryLink"></a>

```typescript
public readonly DeleteRepositoryLink: string;
```

- *Type:* string

[Write] codeconnections:DeleteRepositoryLink.

---

##### `DeleteSyncConfiguration`<sup>Required</sup> <a name="DeleteSyncConfiguration" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.DeleteSyncConfiguration"></a>

```typescript
public readonly DeleteSyncConfiguration: string;
```

- *Type:* string

[Write] codeconnections:DeleteSyncConfiguration.

---

##### `ListConnections`<sup>Required</sup> <a name="ListConnections" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.ListConnections"></a>

```typescript
public readonly ListConnections: string;
```

- *Type:* string

[List] codeconnections:ListConnections.

---

##### `ListHosts`<sup>Required</sup> <a name="ListHosts" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.ListHosts"></a>

```typescript
public readonly ListHosts: string;
```

- *Type:* string

[List] codeconnections:ListHosts.

---

##### `ListInstallationTargets`<sup>Required</sup> <a name="ListInstallationTargets" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.ListInstallationTargets"></a>

```typescript
public readonly ListInstallationTargets: string;
```

- *Type:* string

[List] codeconnections:ListInstallationTargets.

---

##### `ListRepositoryLinks`<sup>Required</sup> <a name="ListRepositoryLinks" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.ListRepositoryLinks"></a>

```typescript
public readonly ListRepositoryLinks: string;
```

- *Type:* string

[List] codeconnections:ListRepositoryLinks.

---

##### `ListRepositorySyncDefinitions`<sup>Required</sup> <a name="ListRepositorySyncDefinitions" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.ListRepositorySyncDefinitions"></a>

```typescript
public readonly ListRepositorySyncDefinitions: string;
```

- *Type:* string

[List] codeconnections:ListRepositorySyncDefinitions.

---

##### `ListSyncConfigurations`<sup>Required</sup> <a name="ListSyncConfigurations" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.ListSyncConfigurations"></a>

```typescript
public readonly ListSyncConfigurations: string;
```

- *Type:* string

[List] codeconnections:ListSyncConfigurations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] codeconnections:ListTagsForResource.

---

##### `PassConnection`<sup>Required</sup> <a name="PassConnection" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.PassConnection"></a>

```typescript
public readonly PassConnection: string;
```

- *Type:* string

[Read] codeconnections:PassConnection.

---

##### `PassRepository`<sup>Required</sup> <a name="PassRepository" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.PassRepository"></a>

```typescript
public readonly PassRepository: string;
```

- *Type:* string

[Read] codeconnections:PassRepository.

---

##### `RegisterAppCode`<sup>Required</sup> <a name="RegisterAppCode" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.RegisterAppCode"></a>

```typescript
public readonly RegisterAppCode: string;
```

- *Type:* string

[Read] codeconnections:RegisterAppCode.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAppRegistrationHandshake`<sup>Required</sup> <a name="StartAppRegistrationHandshake" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.StartAppRegistrationHandshake"></a>

```typescript
public readonly StartAppRegistrationHandshake: string;
```

- *Type:* string

[Read] codeconnections:StartAppRegistrationHandshake.

---

##### `StartOAuthHandshake`<sup>Required</sup> <a name="StartOAuthHandshake" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.StartOAuthHandshake"></a>

```typescript
public readonly StartOAuthHandshake: string;
```

- *Type:* string

[Read] codeconnections:StartOAuthHandshake.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] codeconnections:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] codeconnections:UntagResource.

---

##### `UpdateConnectionInstallation`<sup>Required</sup> <a name="UpdateConnectionInstallation" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.UpdateConnectionInstallation"></a>

```typescript
public readonly UpdateConnectionInstallation: string;
```

- *Type:* string

[Write] codeconnections:UpdateConnectionInstallation.

---

##### `UpdateHost`<sup>Required</sup> <a name="UpdateHost" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.UpdateHost"></a>

```typescript
public readonly UpdateHost: string;
```

- *Type:* string

[Write] codeconnections:UpdateHost.

---

##### `UpdateRepositoryLink`<sup>Required</sup> <a name="UpdateRepositoryLink" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.UpdateRepositoryLink"></a>

```typescript
public readonly UpdateRepositoryLink: string;
```

- *Type:* string

[Write] codeconnections:UpdateRepositoryLink.

---

##### `UpdateSyncBlocker`<sup>Required</sup> <a name="UpdateSyncBlocker" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.UpdateSyncBlocker"></a>

```typescript
public readonly UpdateSyncBlocker: string;
```

- *Type:* string

[Write] codeconnections:UpdateSyncBlocker.

---

##### `UpdateSyncConfiguration`<sup>Required</sup> <a name="UpdateSyncConfiguration" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.UpdateSyncConfiguration"></a>

```typescript
public readonly UpdateSyncConfiguration: string;
```

- *Type:* string

[Write] codeconnections:UpdateSyncConfiguration.

---

##### `UseConnection`<sup>Required</sup> <a name="UseConnection" id="@cdk_utils/iam.codeconnections.CodeconnectionsActions.property.UseConnection"></a>

```typescript
public readonly UseConnection: string;
```

- *Type:* string

[Read] codeconnections:UseConnection.

---

### CodeconnectionsConditions <a name="CodeconnectionsConditions" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions"></a>

Condition key constants and builders for codeconnections.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.Initializer"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

new codeconnections.CodeconnectionsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.branch">branch</a></code> | Generates a condition block for `codeconnections:Branch`. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.branchName">branchName</a></code> | Generates a condition block for `codeconnections:BranchName`. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.fullRepositoryId">fullRepositoryId</a></code> | Generates a condition block for `codeconnections:FullRepositoryId`. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.hostARN">hostARN</a></code> | Generates a condition block for `codeconnections:HostArn`. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.installationId">installationId</a></code> | Generates a condition block for `codeconnections:InstallationId`. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.ownerId">ownerId</a></code> | Generates a condition block for `codeconnections:OwnerId`. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.passedToService">passedToService</a></code> | Generates a condition block for `codeconnections:PassedToService`. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.providerAction">providerAction</a></code> | Generates a condition block for `codeconnections:ProviderAction`. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.providerPermissionsRequired">providerPermissionsRequired</a></code> | Generates a condition block for `codeconnections:ProviderPermissionsRequired`. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.providerType">providerType</a></code> | Generates a condition block for `codeconnections:ProviderType`. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.providerTypeFilter">providerTypeFilter</a></code> | Generates a condition block for `codeconnections:ProviderTypeFilter`. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.repositoryName">repositoryName</a></code> | Generates a condition block for `codeconnections:RepositoryName`. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.vpcId">vpcId</a></code> | Generates a condition block for `codeconnections:VpcId`. |

---

##### `branch` <a name="branch" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.branch"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsConditions.branch(value: string)
```

Generates a condition block for `codeconnections:Branch`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.branch.parameter.value"></a>

- *Type:* string

---

##### `branchName` <a name="branchName" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.branchName"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsConditions.branchName(value: string)
```

Generates a condition block for `codeconnections:BranchName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.branchName.parameter.value"></a>

- *Type:* string

---

##### `fullRepositoryId` <a name="fullRepositoryId" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.fullRepositoryId"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsConditions.fullRepositoryId(value: string)
```

Generates a condition block for `codeconnections:FullRepositoryId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.fullRepositoryId.parameter.value"></a>

- *Type:* string

---

##### `hostARN` <a name="hostARN" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.hostARN"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsConditions.hostARN(value: string)
```

Generates a condition block for `codeconnections:HostArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.hostARN.parameter.value"></a>

- *Type:* string

---

##### `installationId` <a name="installationId" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.installationId"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsConditions.installationId(value: string)
```

Generates a condition block for `codeconnections:InstallationId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.installationId.parameter.value"></a>

- *Type:* string

---

##### `ownerId` <a name="ownerId" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.ownerId"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsConditions.ownerId(value: string)
```

Generates a condition block for `codeconnections:OwnerId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.ownerId.parameter.value"></a>

- *Type:* string

---

##### `passedToService` <a name="passedToService" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.passedToService"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsConditions.passedToService(value: string)
```

Generates a condition block for `codeconnections:PassedToService`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.passedToService.parameter.value"></a>

- *Type:* string

---

##### `providerAction` <a name="providerAction" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.providerAction"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsConditions.providerAction(value: string)
```

Generates a condition block for `codeconnections:ProviderAction`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.providerAction.parameter.value"></a>

- *Type:* string

---

##### `providerPermissionsRequired` <a name="providerPermissionsRequired" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.providerPermissionsRequired"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsConditions.providerPermissionsRequired(value: string)
```

Generates a condition block for `codeconnections:ProviderPermissionsRequired`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.providerPermissionsRequired.parameter.value"></a>

- *Type:* string

---

##### `providerType` <a name="providerType" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.providerType"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsConditions.providerType(value: string)
```

Generates a condition block for `codeconnections:ProviderType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.providerType.parameter.value"></a>

- *Type:* string

---

##### `providerTypeFilter` <a name="providerTypeFilter" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.providerTypeFilter"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsConditions.providerTypeFilter(value: string)
```

Generates a condition block for `codeconnections:ProviderTypeFilter`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.providerTypeFilter.parameter.value"></a>

- *Type:* string

---

##### `repositoryName` <a name="repositoryName" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.repositoryName"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsConditions.repositoryName(value: string)
```

Generates a condition block for `codeconnections:RepositoryName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.repositoryName.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.requestTag"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.resourceTag"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.tagKeys"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `vpcId` <a name="vpcId" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.vpcId"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsConditions.vpcId(value: string)
```

Generates a condition block for `codeconnections:VpcId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.vpcId.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.actionGetIndividualAccessTokenConditionKeys">actionGetIndividualAccessTokenConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetIndividualAccessToken action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.actionGetInstallationUrlConditionKeys">actionGetInstallationUrlConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetInstallationUrl action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.actionGetRepositorySyncStatusConditionKeys">actionGetRepositorySyncStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRepositorySyncStatus action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.BRANCH">BRANCH</a></code> | <code>string</code> | Condition key: codeconnections:Branch (String). |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.BRANCH_NAME">BRANCH_NAME</a></code> | <code>string</code> | Condition key: codeconnections:BranchName (String). |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.CreateConnectionConditionKeys">CreateConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnection action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.CreateHostConditionKeys">CreateHostConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateHost action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.CreateRepositoryLinkConditionKeys">CreateRepositoryLinkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRepositoryLink action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.CreateSyncConfigurationConditionKeys">CreateSyncConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSyncConfiguration action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.FULL_REPOSITORY_ID">FULL_REPOSITORY_ID</a></code> | <code>string</code> | Condition key: codeconnections:FullRepositoryId (String). |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.HOST_ARN">HOST_ARN</a></code> | <code>string</code> | Condition key: codeconnections:HostArn (ARN). |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.INSTALLATION_ID">INSTALLATION_ID</a></code> | <code>string</code> | Condition key: codeconnections:InstallationId (String). |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.ListConnectionsConditionKeys">ListConnectionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListConnections action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.ListHostsConditionKeys">ListHostsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListHosts action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.OWNER_ID">OWNER_ID</a></code> | <code>string</code> | Condition key: codeconnections:OwnerId (String). |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.PassConnectionConditionKeys">PassConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PassConnection action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.PASSED_TO_SERVICE">PASSED_TO_SERVICE</a></code> | <code>string</code> | Condition key: codeconnections:PassedToService (String). |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.PassRepositoryConditionKeys">PassRepositoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PassRepository action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.PROVIDER_ACTION">PROVIDER_ACTION</a></code> | <code>string</code> | Condition key: codeconnections:ProviderAction (String). |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.PROVIDER_PERMISSIONS_REQUIRED">PROVIDER_PERMISSIONS_REQUIRED</a></code> | <code>string</code> | Condition key: codeconnections:ProviderPermissionsRequired (String). |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.PROVIDER_TYPE">PROVIDER_TYPE</a></code> | <code>string</code> | Condition key: codeconnections:ProviderType (String). |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.PROVIDER_TYPE_FILTER">PROVIDER_TYPE_FILTER</a></code> | <code>string</code> | Condition key: codeconnections:ProviderTypeFilter (String). |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.RegisterAppCodeConditionKeys">RegisterAppCodeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterAppCode action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.REPOSITORY_NAME">REPOSITORY_NAME</a></code> | <code>string</code> | Condition key: codeconnections:RepositoryName (String). |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.StartAppRegistrationHandshakeConditionKeys">StartAppRegistrationHandshakeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartAppRegistrationHandshake action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.StartOAuthHandshakeConditionKeys">StartOAuthHandshakeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartOAuthHandshake action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.UpdateConnectionInstallationConditionKeys">UpdateConnectionInstallationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateConnectionInstallation action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.UpdateHostConditionKeys">UpdateHostConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateHost action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.UpdateSyncConfigurationConditionKeys">UpdateSyncConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSyncConfiguration action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.UseConnectionConditionKeys">UseConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UseConnection action. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.VPC_ID">VPC_ID</a></code> | <code>string</code> | Condition key: codeconnections:VpcId (String). |

---

##### `actionGetIndividualAccessTokenConditionKeys`<sup>Required</sup> <a name="actionGetIndividualAccessTokenConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.actionGetIndividualAccessTokenConditionKeys"></a>

```typescript
public readonly actionGetIndividualAccessTokenConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetIndividualAccessToken action.

---

##### `actionGetInstallationUrlConditionKeys`<sup>Required</sup> <a name="actionGetInstallationUrlConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.actionGetInstallationUrlConditionKeys"></a>

```typescript
public readonly actionGetInstallationUrlConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetInstallationUrl action.

---

##### `actionGetRepositorySyncStatusConditionKeys`<sup>Required</sup> <a name="actionGetRepositorySyncStatusConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.actionGetRepositorySyncStatusConditionKeys"></a>

```typescript
public readonly actionGetRepositorySyncStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRepositorySyncStatus action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BRANCH`<sup>Required</sup> <a name="BRANCH" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.BRANCH"></a>

```typescript
public readonly BRANCH: string;
```

- *Type:* string

Condition key: codeconnections:Branch (String).

---

##### `BRANCH_NAME`<sup>Required</sup> <a name="BRANCH_NAME" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.BRANCH_NAME"></a>

```typescript
public readonly BRANCH_NAME: string;
```

- *Type:* string

Condition key: codeconnections:BranchName (String).

---

##### `CreateConnectionConditionKeys`<sup>Required</sup> <a name="CreateConnectionConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.CreateConnectionConditionKeys"></a>

```typescript
public readonly CreateConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnection action.

---

##### `CreateHostConditionKeys`<sup>Required</sup> <a name="CreateHostConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.CreateHostConditionKeys"></a>

```typescript
public readonly CreateHostConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateHost action.

---

##### `CreateRepositoryLinkConditionKeys`<sup>Required</sup> <a name="CreateRepositoryLinkConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.CreateRepositoryLinkConditionKeys"></a>

```typescript
public readonly CreateRepositoryLinkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRepositoryLink action.

---

##### `CreateSyncConfigurationConditionKeys`<sup>Required</sup> <a name="CreateSyncConfigurationConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.CreateSyncConfigurationConditionKeys"></a>

```typescript
public readonly CreateSyncConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSyncConfiguration action.

---

##### `FULL_REPOSITORY_ID`<sup>Required</sup> <a name="FULL_REPOSITORY_ID" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.FULL_REPOSITORY_ID"></a>

```typescript
public readonly FULL_REPOSITORY_ID: string;
```

- *Type:* string

Condition key: codeconnections:FullRepositoryId (String).

---

##### `HOST_ARN`<sup>Required</sup> <a name="HOST_ARN" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.HOST_ARN"></a>

```typescript
public readonly HOST_ARN: string;
```

- *Type:* string

Condition key: codeconnections:HostArn (ARN).

---

##### `INSTALLATION_ID`<sup>Required</sup> <a name="INSTALLATION_ID" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.INSTALLATION_ID"></a>

```typescript
public readonly INSTALLATION_ID: string;
```

- *Type:* string

Condition key: codeconnections:InstallationId (String).

---

##### `ListConnectionsConditionKeys`<sup>Required</sup> <a name="ListConnectionsConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.ListConnectionsConditionKeys"></a>

```typescript
public readonly ListConnectionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListConnections action.

---

##### `ListHostsConditionKeys`<sup>Required</sup> <a name="ListHostsConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.ListHostsConditionKeys"></a>

```typescript
public readonly ListHostsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListHosts action.

---

##### `OWNER_ID`<sup>Required</sup> <a name="OWNER_ID" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.OWNER_ID"></a>

```typescript
public readonly OWNER_ID: string;
```

- *Type:* string

Condition key: codeconnections:OwnerId (String).

---

##### `PassConnectionConditionKeys`<sup>Required</sup> <a name="PassConnectionConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.PassConnectionConditionKeys"></a>

```typescript
public readonly PassConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PassConnection action.

---

##### `PASSED_TO_SERVICE`<sup>Required</sup> <a name="PASSED_TO_SERVICE" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.PASSED_TO_SERVICE"></a>

```typescript
public readonly PASSED_TO_SERVICE: string;
```

- *Type:* string

Condition key: codeconnections:PassedToService (String).

---

##### `PassRepositoryConditionKeys`<sup>Required</sup> <a name="PassRepositoryConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.PassRepositoryConditionKeys"></a>

```typescript
public readonly PassRepositoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PassRepository action.

---

##### `PROVIDER_ACTION`<sup>Required</sup> <a name="PROVIDER_ACTION" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.PROVIDER_ACTION"></a>

```typescript
public readonly PROVIDER_ACTION: string;
```

- *Type:* string

Condition key: codeconnections:ProviderAction (String).

---

##### `PROVIDER_PERMISSIONS_REQUIRED`<sup>Required</sup> <a name="PROVIDER_PERMISSIONS_REQUIRED" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.PROVIDER_PERMISSIONS_REQUIRED"></a>

```typescript
public readonly PROVIDER_PERMISSIONS_REQUIRED: string;
```

- *Type:* string

Condition key: codeconnections:ProviderPermissionsRequired (String).

---

##### `PROVIDER_TYPE`<sup>Required</sup> <a name="PROVIDER_TYPE" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.PROVIDER_TYPE"></a>

```typescript
public readonly PROVIDER_TYPE: string;
```

- *Type:* string

Condition key: codeconnections:ProviderType (String).

---

##### `PROVIDER_TYPE_FILTER`<sup>Required</sup> <a name="PROVIDER_TYPE_FILTER" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.PROVIDER_TYPE_FILTER"></a>

```typescript
public readonly PROVIDER_TYPE_FILTER: string;
```

- *Type:* string

Condition key: codeconnections:ProviderTypeFilter (String).

---

##### `RegisterAppCodeConditionKeys`<sup>Required</sup> <a name="RegisterAppCodeConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.RegisterAppCodeConditionKeys"></a>

```typescript
public readonly RegisterAppCodeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterAppCode action.

---

##### `REPOSITORY_NAME`<sup>Required</sup> <a name="REPOSITORY_NAME" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.REPOSITORY_NAME"></a>

```typescript
public readonly REPOSITORY_NAME: string;
```

- *Type:* string

Condition key: codeconnections:RepositoryName (String).

---

##### `StartAppRegistrationHandshakeConditionKeys`<sup>Required</sup> <a name="StartAppRegistrationHandshakeConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.StartAppRegistrationHandshakeConditionKeys"></a>

```typescript
public readonly StartAppRegistrationHandshakeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartAppRegistrationHandshake action.

---

##### `StartOAuthHandshakeConditionKeys`<sup>Required</sup> <a name="StartOAuthHandshakeConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.StartOAuthHandshakeConditionKeys"></a>

```typescript
public readonly StartOAuthHandshakeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartOAuthHandshake action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateConnectionInstallationConditionKeys`<sup>Required</sup> <a name="UpdateConnectionInstallationConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.UpdateConnectionInstallationConditionKeys"></a>

```typescript
public readonly UpdateConnectionInstallationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateConnectionInstallation action.

---

##### `UpdateHostConditionKeys`<sup>Required</sup> <a name="UpdateHostConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.UpdateHostConditionKeys"></a>

```typescript
public readonly UpdateHostConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateHost action.

---

##### `UpdateSyncConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateSyncConfigurationConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.UpdateSyncConfigurationConditionKeys"></a>

```typescript
public readonly UpdateSyncConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSyncConfiguration action.

---

##### `UseConnectionConditionKeys`<sup>Required</sup> <a name="UseConnectionConditionKeys" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.UseConnectionConditionKeys"></a>

```typescript
public readonly UseConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UseConnection action.

---

##### `VPC_ID`<sup>Required</sup> <a name="VPC_ID" id="@cdk_utils/iam.codeconnections.CodeconnectionsConditions.property.VPC_ID"></a>

```typescript
public readonly VPC_ID: string;
```

- *Type:* string

Condition key: codeconnections:VpcId (String).

---

### CodeconnectionsOperations <a name="CodeconnectionsOperations" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations"></a>

API operation to required IAM actions mapping for codeconnections.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.Initializer"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

new codeconnections.CodeconnectionsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.CreateConnection">CreateConnection</a></code> | <code>string[]</code> | IAM actions required for the CreateConnection API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.CreateHost">CreateHost</a></code> | <code>string[]</code> | IAM actions required for the CreateHost API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.CreateRepositoryLink">CreateRepositoryLink</a></code> | <code>string[]</code> | IAM actions required for the CreateRepositoryLink API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.CreateSyncConfiguration">CreateSyncConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateSyncConfiguration API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.DeleteConnection">DeleteConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnection API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.DeleteHost">DeleteHost</a></code> | <code>string[]</code> | IAM actions required for the DeleteHost API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.DeleteRepositoryLink">DeleteRepositoryLink</a></code> | <code>string[]</code> | IAM actions required for the DeleteRepositoryLink API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.DeleteSyncConfiguration">DeleteSyncConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteSyncConfiguration API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.ListConnections">ListConnections</a></code> | <code>string[]</code> | IAM actions required for the ListConnections API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.ListHosts">ListHosts</a></code> | <code>string[]</code> | IAM actions required for the ListHosts API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.ListRepositoryLinks">ListRepositoryLinks</a></code> | <code>string[]</code> | IAM actions required for the ListRepositoryLinks API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.ListRepositorySyncDefinitions">ListRepositorySyncDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListRepositorySyncDefinitions API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.ListSyncConfigurations">ListSyncConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListSyncConfigurations API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.opGetConnection">opGetConnection</a></code> | <code>string[]</code> | IAM actions required for the GetConnection API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.opGetHost">opGetHost</a></code> | <code>string[]</code> | IAM actions required for the GetHost API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.opGetRepositoryLink">opGetRepositoryLink</a></code> | <code>string[]</code> | IAM actions required for the GetRepositoryLink API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.opGetRepositorySyncStatus">opGetRepositorySyncStatus</a></code> | <code>string[]</code> | IAM actions required for the GetRepositorySyncStatus API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.opGetResourceSyncStatus">opGetResourceSyncStatus</a></code> | <code>string[]</code> | IAM actions required for the GetResourceSyncStatus API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.opGetSyncBlockerSummary">opGetSyncBlockerSummary</a></code> | <code>string[]</code> | IAM actions required for the GetSyncBlockerSummary API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.opGetSyncConfiguration">opGetSyncConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetSyncConfiguration API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.UpdateHost">UpdateHost</a></code> | <code>string[]</code> | IAM actions required for the UpdateHost API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.UpdateRepositoryLink">UpdateRepositoryLink</a></code> | <code>string[]</code> | IAM actions required for the UpdateRepositoryLink API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.UpdateSyncBlocker">UpdateSyncBlocker</a></code> | <code>string[]</code> | IAM actions required for the UpdateSyncBlocker API call. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.UpdateSyncConfiguration">UpdateSyncConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateSyncConfiguration API call. |

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnection API call.

---

##### `CreateHost`<sup>Required</sup> <a name="CreateHost" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.CreateHost"></a>

```typescript
public readonly CreateHost: string[];
```

- *Type:* string[]

IAM actions required for the CreateHost API call.

---

##### `CreateRepositoryLink`<sup>Required</sup> <a name="CreateRepositoryLink" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.CreateRepositoryLink"></a>

```typescript
public readonly CreateRepositoryLink: string[];
```

- *Type:* string[]

IAM actions required for the CreateRepositoryLink API call.

---

##### `CreateSyncConfiguration`<sup>Required</sup> <a name="CreateSyncConfiguration" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.CreateSyncConfiguration"></a>

```typescript
public readonly CreateSyncConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateSyncConfiguration API call.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnection API call.

---

##### `DeleteHost`<sup>Required</sup> <a name="DeleteHost" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.DeleteHost"></a>

```typescript
public readonly DeleteHost: string[];
```

- *Type:* string[]

IAM actions required for the DeleteHost API call.

---

##### `DeleteRepositoryLink`<sup>Required</sup> <a name="DeleteRepositoryLink" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.DeleteRepositoryLink"></a>

```typescript
public readonly DeleteRepositoryLink: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRepositoryLink API call.

---

##### `DeleteSyncConfiguration`<sup>Required</sup> <a name="DeleteSyncConfiguration" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.DeleteSyncConfiguration"></a>

```typescript
public readonly DeleteSyncConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSyncConfiguration API call.

---

##### `ListConnections`<sup>Required</sup> <a name="ListConnections" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.ListConnections"></a>

```typescript
public readonly ListConnections: string[];
```

- *Type:* string[]

IAM actions required for the ListConnections API call.

---

##### `ListHosts`<sup>Required</sup> <a name="ListHosts" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.ListHosts"></a>

```typescript
public readonly ListHosts: string[];
```

- *Type:* string[]

IAM actions required for the ListHosts API call.

---

##### `ListRepositoryLinks`<sup>Required</sup> <a name="ListRepositoryLinks" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.ListRepositoryLinks"></a>

```typescript
public readonly ListRepositoryLinks: string[];
```

- *Type:* string[]

IAM actions required for the ListRepositoryLinks API call.

---

##### `ListRepositorySyncDefinitions`<sup>Required</sup> <a name="ListRepositorySyncDefinitions" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.ListRepositorySyncDefinitions"></a>

```typescript
public readonly ListRepositorySyncDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListRepositorySyncDefinitions API call.

---

##### `ListSyncConfigurations`<sup>Required</sup> <a name="ListSyncConfigurations" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.ListSyncConfigurations"></a>

```typescript
public readonly ListSyncConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListSyncConfigurations API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetConnection`<sup>Required</sup> <a name="opGetConnection" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.opGetConnection"></a>

```typescript
public readonly opGetConnection: string[];
```

- *Type:* string[]

IAM actions required for the GetConnection API call.

---

##### `opGetHost`<sup>Required</sup> <a name="opGetHost" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.opGetHost"></a>

```typescript
public readonly opGetHost: string[];
```

- *Type:* string[]

IAM actions required for the GetHost API call.

---

##### `opGetRepositoryLink`<sup>Required</sup> <a name="opGetRepositoryLink" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.opGetRepositoryLink"></a>

```typescript
public readonly opGetRepositoryLink: string[];
```

- *Type:* string[]

IAM actions required for the GetRepositoryLink API call.

---

##### `opGetRepositorySyncStatus`<sup>Required</sup> <a name="opGetRepositorySyncStatus" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.opGetRepositorySyncStatus"></a>

```typescript
public readonly opGetRepositorySyncStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetRepositorySyncStatus API call.

---

##### `opGetResourceSyncStatus`<sup>Required</sup> <a name="opGetResourceSyncStatus" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.opGetResourceSyncStatus"></a>

```typescript
public readonly opGetResourceSyncStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceSyncStatus API call.

---

##### `opGetSyncBlockerSummary`<sup>Required</sup> <a name="opGetSyncBlockerSummary" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.opGetSyncBlockerSummary"></a>

```typescript
public readonly opGetSyncBlockerSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetSyncBlockerSummary API call.

---

##### `opGetSyncConfiguration`<sup>Required</sup> <a name="opGetSyncConfiguration" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.opGetSyncConfiguration"></a>

```typescript
public readonly opGetSyncConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetSyncConfiguration API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateHost`<sup>Required</sup> <a name="UpdateHost" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.UpdateHost"></a>

```typescript
public readonly UpdateHost: string[];
```

- *Type:* string[]

IAM actions required for the UpdateHost API call.

---

##### `UpdateRepositoryLink`<sup>Required</sup> <a name="UpdateRepositoryLink" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.UpdateRepositoryLink"></a>

```typescript
public readonly UpdateRepositoryLink: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRepositoryLink API call.

---

##### `UpdateSyncBlocker`<sup>Required</sup> <a name="UpdateSyncBlocker" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.UpdateSyncBlocker"></a>

```typescript
public readonly UpdateSyncBlocker: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSyncBlocker API call.

---

##### `UpdateSyncConfiguration`<sup>Required</sup> <a name="UpdateSyncConfiguration" id="@cdk_utils/iam.codeconnections.CodeconnectionsOperations.property.UpdateSyncConfiguration"></a>

```typescript
public readonly UpdateSyncConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSyncConfiguration API call.

---

### CodeconnectionsResources <a name="CodeconnectionsResources" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources"></a>

ARN builders, validators, and parsers for codeconnections resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources.Initializer"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

new codeconnections.CodeconnectionsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsResources.connection">connection</a></code> | Builds an ARN for the Connection resource. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsResources.host">host</a></code> | Builds an ARN for the Host resource. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsResources.isValidConnectionArn">isValidConnectionArn</a></code> | Validates whether a string is a valid ARN for the Connection resource. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsResources.isValidHostArn">isValidHostArn</a></code> | Validates whether a string is a valid ARN for the Host resource. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsResources.isValidRepositoryLinkArn">isValidRepositoryLinkArn</a></code> | Validates whether a string is a valid ARN for the RepositoryLink resource. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsResources.parseConnectionArn">parseConnectionArn</a></code> | Parses a Connection ARN into its components. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsResources.parseHostArn">parseHostArn</a></code> | Parses a Host ARN into its components. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsResources.parseRepositoryLinkArn">parseRepositoryLinkArn</a></code> | Parses a RepositoryLink ARN into its components. |
| <code><a href="#@cdk_utils/iam.codeconnections.CodeconnectionsResources.repositoryLink">repositoryLink</a></code> | Builds an ARN for the RepositoryLink resource. |

---

##### `connection` <a name="connection" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources.connection"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsResources.connection(props: CodeconnectionsConnectionArnProps)
```

Builds an ARN for the Connection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources.connection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codeconnections.CodeconnectionsConnectionArnProps">CodeconnectionsConnectionArnProps</a>

---

##### `host` <a name="host" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources.host"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsResources.host(props: CodeconnectionsHostArnProps)
```

Builds an ARN for the Host resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources.host.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codeconnections.CodeconnectionsHostArnProps">CodeconnectionsHostArnProps</a>

---

##### `isValidConnectionArn` <a name="isValidConnectionArn" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources.isValidConnectionArn"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsResources.isValidConnectionArn(arn: string)
```

Validates whether a string is a valid ARN for the Connection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources.isValidConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidHostArn` <a name="isValidHostArn" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources.isValidHostArn"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsResources.isValidHostArn(arn: string)
```

Validates whether a string is a valid ARN for the Host resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources.isValidHostArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRepositoryLinkArn` <a name="isValidRepositoryLinkArn" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources.isValidRepositoryLinkArn"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsResources.isValidRepositoryLinkArn(arn: string)
```

Validates whether a string is a valid ARN for the RepositoryLink resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources.isValidRepositoryLinkArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectionArn` <a name="parseConnectionArn" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources.parseConnectionArn"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsResources.parseConnectionArn(arn: string)
```

Parses a Connection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources.parseConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseHostArn` <a name="parseHostArn" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources.parseHostArn"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsResources.parseHostArn(arn: string)
```

Parses a Host ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources.parseHostArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRepositoryLinkArn` <a name="parseRepositoryLinkArn" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources.parseRepositoryLinkArn"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsResources.parseRepositoryLinkArn(arn: string)
```

Parses a RepositoryLink ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources.parseRepositoryLinkArn.parameter.arn"></a>

- *Type:* string

---

##### `repositoryLink` <a name="repositoryLink" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources.repositoryLink"></a>

```typescript
import { codeconnections } from '@cdk_utils/iam'

codeconnections.CodeconnectionsResources.repositoryLink(props: CodeconnectionsRepositoryLinkArnProps)
```

Builds an ARN for the RepositoryLink resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codeconnections.CodeconnectionsResources.repositoryLink.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codeconnections.CodeconnectionsRepositoryLinkArnProps">CodeconnectionsRepositoryLinkArnProps</a>

---




