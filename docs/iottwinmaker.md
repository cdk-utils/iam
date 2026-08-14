# `iottwinmaker` Submodule <a name="`iottwinmaker` Submodule" id="@cdk_utils/iam.iottwinmaker"></a>


## Structs <a name="Structs" id="Structs"></a>

### IottwinmakerComponentTypeArnComponents <a name="IottwinmakerComponentTypeArnComponents" id="@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnComponents"></a>

Parsed components of a componentType ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnComponents.Initializer"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

const iottwinmakerComponentTypeArnComponents: iottwinmaker.IottwinmakerComponentTypeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnComponents.property.componentTypeId">componentTypeId</a></code> | <code>string</code> | The ComponentTypeId component. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnComponents.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `componentTypeId`<sup>Required</sup> <a name="componentTypeId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnComponents.property.componentTypeId"></a>

```typescript
public readonly componentTypeId: string;
```

- *Type:* string

The ComponentTypeId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnComponents.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component.

---

### IottwinmakerComponentTypeArnProps <a name="IottwinmakerComponentTypeArnProps" id="@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnProps"></a>

Properties for building a componentType ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnProps.Initializer"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

const iottwinmakerComponentTypeArnProps: iottwinmaker.IottwinmakerComponentTypeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnProps.property.componentTypeId">componentTypeId</a></code> | <code>string</code> | The ComponentTypeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnProps.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `componentTypeId`<sup>Required</sup> <a name="componentTypeId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnProps.property.componentTypeId"></a>

```typescript
public readonly componentTypeId: string;
```

- *Type:* string

The ComponentTypeId component of the ARN.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnProps.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IottwinmakerEntityArnComponents <a name="IottwinmakerEntityArnComponents" id="@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnComponents"></a>

Parsed components of a entity ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnComponents.Initializer"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

const iottwinmakerEntityArnComponents: iottwinmaker.IottwinmakerEntityArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnComponents.property.entityId">entityId</a></code> | <code>string</code> | The EntityId component. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnComponents.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnComponents.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

The EntityId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnComponents.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component.

---

### IottwinmakerEntityArnProps <a name="IottwinmakerEntityArnProps" id="@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnProps"></a>

Properties for building a entity ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnProps.Initializer"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

const iottwinmakerEntityArnProps: iottwinmaker.IottwinmakerEntityArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnProps.property.entityId">entityId</a></code> | <code>string</code> | The EntityId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnProps.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnProps.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

The EntityId component of the ARN.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnProps.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IottwinmakerMetadataTransferJobArnComponents <a name="IottwinmakerMetadataTransferJobArnComponents" id="@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnComponents"></a>

Parsed components of a metadataTransferJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnComponents.Initializer"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

const iottwinmakerMetadataTransferJobArnComponents: iottwinmaker.IottwinmakerMetadataTransferJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnComponents.property.metadataTransferJobId">metadataTransferJobId</a></code> | <code>string</code> | The MetadataTransferJobId component. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `metadataTransferJobId`<sup>Required</sup> <a name="metadataTransferJobId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnComponents.property.metadataTransferJobId"></a>

```typescript
public readonly metadataTransferJobId: string;
```

- *Type:* string

The MetadataTransferJobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IottwinmakerMetadataTransferJobArnProps <a name="IottwinmakerMetadataTransferJobArnProps" id="@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnProps"></a>

Properties for building a metadataTransferJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnProps.Initializer"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

const iottwinmakerMetadataTransferJobArnProps: iottwinmaker.IottwinmakerMetadataTransferJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnProps.property.metadataTransferJobId">metadataTransferJobId</a></code> | <code>string</code> | The MetadataTransferJobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `metadataTransferJobId`<sup>Required</sup> <a name="metadataTransferJobId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnProps.property.metadataTransferJobId"></a>

```typescript
public readonly metadataTransferJobId: string;
```

- *Type:* string

The MetadataTransferJobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IottwinmakerSceneArnComponents <a name="IottwinmakerSceneArnComponents" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnComponents"></a>

Parsed components of a scene ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnComponents.Initializer"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

const iottwinmakerSceneArnComponents: iottwinmaker.IottwinmakerSceneArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnComponents.property.sceneId">sceneId</a></code> | <code>string</code> | The SceneId component. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnComponents.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sceneId`<sup>Required</sup> <a name="sceneId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnComponents.property.sceneId"></a>

```typescript
public readonly sceneId: string;
```

- *Type:* string

The SceneId component.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnComponents.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component.

---

### IottwinmakerSceneArnProps <a name="IottwinmakerSceneArnProps" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnProps"></a>

Properties for building a scene ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnProps.Initializer"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

const iottwinmakerSceneArnProps: iottwinmaker.IottwinmakerSceneArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnProps.property.sceneId">sceneId</a></code> | <code>string</code> | The SceneId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnProps.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sceneId`<sup>Required</sup> <a name="sceneId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnProps.property.sceneId"></a>

```typescript
public readonly sceneId: string;
```

- *Type:* string

The SceneId component of the ARN.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnProps.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IottwinmakerSyncJobArnComponents <a name="IottwinmakerSyncJobArnComponents" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnComponents"></a>

Parsed components of a syncJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnComponents.Initializer"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

const iottwinmakerSyncJobArnComponents: iottwinmaker.IottwinmakerSyncJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnComponents.property.syncJobId">syncJobId</a></code> | <code>string</code> | The SyncJobId component. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnComponents.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `syncJobId`<sup>Required</sup> <a name="syncJobId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnComponents.property.syncJobId"></a>

```typescript
public readonly syncJobId: string;
```

- *Type:* string

The SyncJobId component.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnComponents.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component.

---

### IottwinmakerSyncJobArnProps <a name="IottwinmakerSyncJobArnProps" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnProps"></a>

Properties for building a syncJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnProps.Initializer"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

const iottwinmakerSyncJobArnProps: iottwinmaker.IottwinmakerSyncJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnProps.property.syncJobId">syncJobId</a></code> | <code>string</code> | The SyncJobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnProps.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `syncJobId`<sup>Required</sup> <a name="syncJobId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnProps.property.syncJobId"></a>

```typescript
public readonly syncJobId: string;
```

- *Type:* string

The SyncJobId component of the ARN.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnProps.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IottwinmakerWorkspaceArnComponents <a name="IottwinmakerWorkspaceArnComponents" id="@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnComponents"></a>

Parsed components of a workspace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnComponents.Initializer"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

const iottwinmakerWorkspaceArnComponents: iottwinmaker.IottwinmakerWorkspaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnComponents.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnComponents.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component.

---

### IottwinmakerWorkspaceArnProps <a name="IottwinmakerWorkspaceArnProps" id="@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnProps"></a>

Properties for building a workspace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnProps.Initializer"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

const iottwinmakerWorkspaceArnProps: iottwinmaker.IottwinmakerWorkspaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnProps.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnProps.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### IottwinmakerActions <a name="IottwinmakerActions" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions"></a>

IAM action constants for the iottwinmaker service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.Initializer"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

new iottwinmaker.IottwinmakerActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.actionGetComponentType">actionGetComponentType</a></code> | <code>string</code> | [Read] iottwinmaker:GetComponentType. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.actionGetEntity">actionGetEntity</a></code> | <code>string</code> | [Read] iottwinmaker:GetEntity. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.actionGetMetadataTransferJob">actionGetMetadataTransferJob</a></code> | <code>string</code> | [Read] iottwinmaker:GetMetadataTransferJob. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.actionGetPricingPlan">actionGetPricingPlan</a></code> | <code>string</code> | [Read] iottwinmaker:GetPricingPlan. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.actionGetPropertyValue">actionGetPropertyValue</a></code> | <code>string</code> | [Read] iottwinmaker:GetPropertyValue. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.actionGetPropertyValueHistory">actionGetPropertyValueHistory</a></code> | <code>string</code> | [Read] iottwinmaker:GetPropertyValueHistory. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.actionGetScene">actionGetScene</a></code> | <code>string</code> | [Read] iottwinmaker:GetScene. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.actionGetSyncJob">actionGetSyncJob</a></code> | <code>string</code> | [Read] iottwinmaker:GetSyncJob. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.actionGetWorkspace">actionGetWorkspace</a></code> | <code>string</code> | [Read] iottwinmaker:GetWorkspace. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.BatchPutPropertyValues">BatchPutPropertyValues</a></code> | <code>string</code> | [Write] iottwinmaker:BatchPutPropertyValues. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.CancelMetadataTransferJob">CancelMetadataTransferJob</a></code> | <code>string</code> | [Write] iottwinmaker:CancelMetadataTransferJob. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.CreateComponentType">CreateComponentType</a></code> | <code>string</code> | [Write] iottwinmaker:CreateComponentType. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.CreateEntity">CreateEntity</a></code> | <code>string</code> | [Write] iottwinmaker:CreateEntity. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.CreateMetadataTransferJob">CreateMetadataTransferJob</a></code> | <code>string</code> | [Write] iottwinmaker:CreateMetadataTransferJob. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.CreateScene">CreateScene</a></code> | <code>string</code> | [Write] iottwinmaker:CreateScene. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.CreateSyncJob">CreateSyncJob</a></code> | <code>string</code> | [Write] iottwinmaker:CreateSyncJob. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.CreateWorkspace">CreateWorkspace</a></code> | <code>string</code> | [Write] iottwinmaker:CreateWorkspace. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.DeleteComponentType">DeleteComponentType</a></code> | <code>string</code> | [Write] iottwinmaker:DeleteComponentType. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.DeleteEntity">DeleteEntity</a></code> | <code>string</code> | [Write] iottwinmaker:DeleteEntity. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.DeleteScene">DeleteScene</a></code> | <code>string</code> | [Write] iottwinmaker:DeleteScene. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.DeleteSyncJob">DeleteSyncJob</a></code> | <code>string</code> | [Write] iottwinmaker:DeleteSyncJob. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.DeleteWorkspace">DeleteWorkspace</a></code> | <code>string</code> | [Write] iottwinmaker:DeleteWorkspace. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ExecuteQuery">ExecuteQuery</a></code> | <code>string</code> | [Read] iottwinmaker:ExecuteQuery. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListComponents">ListComponents</a></code> | <code>string</code> | [List] iottwinmaker:ListComponents. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListComponentTypes">ListComponentTypes</a></code> | <code>string</code> | [List] iottwinmaker:ListComponentTypes. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListEntities">ListEntities</a></code> | <code>string</code> | [List] iottwinmaker:ListEntities. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListMetadataTransferJobs">ListMetadataTransferJobs</a></code> | <code>string</code> | [List] iottwinmaker:ListMetadataTransferJobs. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListProperties">ListProperties</a></code> | <code>string</code> | [List] iottwinmaker:ListProperties. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListScenes">ListScenes</a></code> | <code>string</code> | [List] iottwinmaker:ListScenes. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListSyncJobs">ListSyncJobs</a></code> | <code>string</code> | [List] iottwinmaker:ListSyncJobs. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListSyncResources">ListSyncResources</a></code> | <code>string</code> | [List] iottwinmaker:ListSyncResources. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] iottwinmaker:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListWorkspaces">ListWorkspaces</a></code> | <code>string</code> | [List] iottwinmaker:ListWorkspaces. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] iottwinmaker:TagResource. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] iottwinmaker:UntagResource. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.UpdateComponentType">UpdateComponentType</a></code> | <code>string</code> | [Write] iottwinmaker:UpdateComponentType. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.UpdateEntity">UpdateEntity</a></code> | <code>string</code> | [Write] iottwinmaker:UpdateEntity. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.UpdatePricingPlan">UpdatePricingPlan</a></code> | <code>string</code> | [Write] iottwinmaker:UpdatePricingPlan. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.UpdateScene">UpdateScene</a></code> | <code>string</code> | [Write] iottwinmaker:UpdateScene. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.UpdateWorkspace">UpdateWorkspace</a></code> | <code>string</code> | [Write] iottwinmaker:UpdateWorkspace. |

---

##### `actionGetComponentType`<sup>Required</sup> <a name="actionGetComponentType" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.actionGetComponentType"></a>

```typescript
public readonly actionGetComponentType: string;
```

- *Type:* string

[Read] iottwinmaker:GetComponentType.

---

##### `actionGetEntity`<sup>Required</sup> <a name="actionGetEntity" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.actionGetEntity"></a>

```typescript
public readonly actionGetEntity: string;
```

- *Type:* string

[Read] iottwinmaker:GetEntity.

---

##### `actionGetMetadataTransferJob`<sup>Required</sup> <a name="actionGetMetadataTransferJob" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.actionGetMetadataTransferJob"></a>

```typescript
public readonly actionGetMetadataTransferJob: string;
```

- *Type:* string

[Read] iottwinmaker:GetMetadataTransferJob.

---

##### `actionGetPricingPlan`<sup>Required</sup> <a name="actionGetPricingPlan" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.actionGetPricingPlan"></a>

```typescript
public readonly actionGetPricingPlan: string;
```

- *Type:* string

[Read] iottwinmaker:GetPricingPlan.

---

##### `actionGetPropertyValue`<sup>Required</sup> <a name="actionGetPropertyValue" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.actionGetPropertyValue"></a>

```typescript
public readonly actionGetPropertyValue: string;
```

- *Type:* string

[Read] iottwinmaker:GetPropertyValue.

---

##### `actionGetPropertyValueHistory`<sup>Required</sup> <a name="actionGetPropertyValueHistory" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.actionGetPropertyValueHistory"></a>

```typescript
public readonly actionGetPropertyValueHistory: string;
```

- *Type:* string

[Read] iottwinmaker:GetPropertyValueHistory.

---

##### `actionGetScene`<sup>Required</sup> <a name="actionGetScene" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.actionGetScene"></a>

```typescript
public readonly actionGetScene: string;
```

- *Type:* string

[Read] iottwinmaker:GetScene.

---

##### `actionGetSyncJob`<sup>Required</sup> <a name="actionGetSyncJob" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.actionGetSyncJob"></a>

```typescript
public readonly actionGetSyncJob: string;
```

- *Type:* string

[Read] iottwinmaker:GetSyncJob.

---

##### `actionGetWorkspace`<sup>Required</sup> <a name="actionGetWorkspace" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.actionGetWorkspace"></a>

```typescript
public readonly actionGetWorkspace: string;
```

- *Type:* string

[Read] iottwinmaker:GetWorkspace.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchPutPropertyValues`<sup>Required</sup> <a name="BatchPutPropertyValues" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.BatchPutPropertyValues"></a>

```typescript
public readonly BatchPutPropertyValues: string;
```

- *Type:* string

[Write] iottwinmaker:BatchPutPropertyValues.

---

##### `CancelMetadataTransferJob`<sup>Required</sup> <a name="CancelMetadataTransferJob" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.CancelMetadataTransferJob"></a>

```typescript
public readonly CancelMetadataTransferJob: string;
```

- *Type:* string

[Write] iottwinmaker:CancelMetadataTransferJob.

---

##### `CreateComponentType`<sup>Required</sup> <a name="CreateComponentType" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.CreateComponentType"></a>

```typescript
public readonly CreateComponentType: string;
```

- *Type:* string

[Write] iottwinmaker:CreateComponentType.

---

##### `CreateEntity`<sup>Required</sup> <a name="CreateEntity" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.CreateEntity"></a>

```typescript
public readonly CreateEntity: string;
```

- *Type:* string

[Write] iottwinmaker:CreateEntity.

---

##### `CreateMetadataTransferJob`<sup>Required</sup> <a name="CreateMetadataTransferJob" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.CreateMetadataTransferJob"></a>

```typescript
public readonly CreateMetadataTransferJob: string;
```

- *Type:* string

[Write] iottwinmaker:CreateMetadataTransferJob.

---

##### `CreateScene`<sup>Required</sup> <a name="CreateScene" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.CreateScene"></a>

```typescript
public readonly CreateScene: string;
```

- *Type:* string

[Write] iottwinmaker:CreateScene.

---

##### `CreateSyncJob`<sup>Required</sup> <a name="CreateSyncJob" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.CreateSyncJob"></a>

```typescript
public readonly CreateSyncJob: string;
```

- *Type:* string

[Write] iottwinmaker:CreateSyncJob.

---

##### `CreateWorkspace`<sup>Required</sup> <a name="CreateWorkspace" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.CreateWorkspace"></a>

```typescript
public readonly CreateWorkspace: string;
```

- *Type:* string

[Write] iottwinmaker:CreateWorkspace.

---

##### `DeleteComponentType`<sup>Required</sup> <a name="DeleteComponentType" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.DeleteComponentType"></a>

```typescript
public readonly DeleteComponentType: string;
```

- *Type:* string

[Write] iottwinmaker:DeleteComponentType.

---

##### `DeleteEntity`<sup>Required</sup> <a name="DeleteEntity" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.DeleteEntity"></a>

```typescript
public readonly DeleteEntity: string;
```

- *Type:* string

[Write] iottwinmaker:DeleteEntity.

---

##### `DeleteScene`<sup>Required</sup> <a name="DeleteScene" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.DeleteScene"></a>

```typescript
public readonly DeleteScene: string;
```

- *Type:* string

[Write] iottwinmaker:DeleteScene.

---

##### `DeleteSyncJob`<sup>Required</sup> <a name="DeleteSyncJob" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.DeleteSyncJob"></a>

```typescript
public readonly DeleteSyncJob: string;
```

- *Type:* string

[Write] iottwinmaker:DeleteSyncJob.

---

##### `DeleteWorkspace`<sup>Required</sup> <a name="DeleteWorkspace" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.DeleteWorkspace"></a>

```typescript
public readonly DeleteWorkspace: string;
```

- *Type:* string

[Write] iottwinmaker:DeleteWorkspace.

---

##### `ExecuteQuery`<sup>Required</sup> <a name="ExecuteQuery" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ExecuteQuery"></a>

```typescript
public readonly ExecuteQuery: string;
```

- *Type:* string

[Read] iottwinmaker:ExecuteQuery.

---

##### `ListComponents`<sup>Required</sup> <a name="ListComponents" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListComponents"></a>

```typescript
public readonly ListComponents: string;
```

- *Type:* string

[List] iottwinmaker:ListComponents.

---

##### `ListComponentTypes`<sup>Required</sup> <a name="ListComponentTypes" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListComponentTypes"></a>

```typescript
public readonly ListComponentTypes: string;
```

- *Type:* string

[List] iottwinmaker:ListComponentTypes.

---

##### `ListEntities`<sup>Required</sup> <a name="ListEntities" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListEntities"></a>

```typescript
public readonly ListEntities: string;
```

- *Type:* string

[List] iottwinmaker:ListEntities.

---

##### `ListMetadataTransferJobs`<sup>Required</sup> <a name="ListMetadataTransferJobs" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListMetadataTransferJobs"></a>

```typescript
public readonly ListMetadataTransferJobs: string;
```

- *Type:* string

[List] iottwinmaker:ListMetadataTransferJobs.

---

##### `ListProperties`<sup>Required</sup> <a name="ListProperties" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListProperties"></a>

```typescript
public readonly ListProperties: string;
```

- *Type:* string

[List] iottwinmaker:ListProperties.

---

##### `ListScenes`<sup>Required</sup> <a name="ListScenes" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListScenes"></a>

```typescript
public readonly ListScenes: string;
```

- *Type:* string

[List] iottwinmaker:ListScenes.

---

##### `ListSyncJobs`<sup>Required</sup> <a name="ListSyncJobs" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListSyncJobs"></a>

```typescript
public readonly ListSyncJobs: string;
```

- *Type:* string

[List] iottwinmaker:ListSyncJobs.

---

##### `ListSyncResources`<sup>Required</sup> <a name="ListSyncResources" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListSyncResources"></a>

```typescript
public readonly ListSyncResources: string;
```

- *Type:* string

[List] iottwinmaker:ListSyncResources.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] iottwinmaker:ListTagsForResource.

---

##### `ListWorkspaces`<sup>Required</sup> <a name="ListWorkspaces" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.ListWorkspaces"></a>

```typescript
public readonly ListWorkspaces: string;
```

- *Type:* string

[List] iottwinmaker:ListWorkspaces.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] iottwinmaker:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] iottwinmaker:UntagResource.

---

##### `UpdateComponentType`<sup>Required</sup> <a name="UpdateComponentType" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.UpdateComponentType"></a>

```typescript
public readonly UpdateComponentType: string;
```

- *Type:* string

[Write] iottwinmaker:UpdateComponentType.

---

##### `UpdateEntity`<sup>Required</sup> <a name="UpdateEntity" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.UpdateEntity"></a>

```typescript
public readonly UpdateEntity: string;
```

- *Type:* string

[Write] iottwinmaker:UpdateEntity.

---

##### `UpdatePricingPlan`<sup>Required</sup> <a name="UpdatePricingPlan" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.UpdatePricingPlan"></a>

```typescript
public readonly UpdatePricingPlan: string;
```

- *Type:* string

[Write] iottwinmaker:UpdatePricingPlan.

---

##### `UpdateScene`<sup>Required</sup> <a name="UpdateScene" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.UpdateScene"></a>

```typescript
public readonly UpdateScene: string;
```

- *Type:* string

[Write] iottwinmaker:UpdateScene.

---

##### `UpdateWorkspace`<sup>Required</sup> <a name="UpdateWorkspace" id="@cdk_utils/iam.iottwinmaker.IottwinmakerActions.property.UpdateWorkspace"></a>

```typescript
public readonly UpdateWorkspace: string;
```

- *Type:* string

[Write] iottwinmaker:UpdateWorkspace.

---

### IottwinmakerConditions <a name="IottwinmakerConditions" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions"></a>

Condition key constants and builders for iottwinmaker.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.Initializer"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

new iottwinmaker.IottwinmakerConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.destinationType">destinationType</a></code> | Generates a condition block for `iottwinmaker:destinationType`. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.linkedServices">linkedServices</a></code> | Generates a condition block for `iottwinmaker:linkedServices`. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.sourceType">sourceType</a></code> | Generates a condition block for `iottwinmaker:sourceType`. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `destinationType` <a name="destinationType" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.destinationType"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerConditions.destinationType(value: string)
```

Generates a condition block for `iottwinmaker:destinationType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.destinationType.parameter.value"></a>

- *Type:* string

---

##### `linkedServices` <a name="linkedServices" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.linkedServices"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerConditions.linkedServices(values: string[])
```

Generates a condition block for `iottwinmaker:linkedServices`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.linkedServices.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.requestTag"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.resourceTag"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `sourceType` <a name="sourceType" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.sourceType"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerConditions.sourceType(value: string)
```

Generates a condition block for `iottwinmaker:sourceType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.sourceType.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.tagKeys"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.CreateComponentTypeConditionKeys">CreateComponentTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateComponentType action. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.CreateEntityConditionKeys">CreateEntityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEntity action. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.CreateSceneConditionKeys">CreateSceneConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateScene action. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.CreateSyncJobConditionKeys">CreateSyncJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSyncJob action. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.CreateWorkspaceConditionKeys">CreateWorkspaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkspace action. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.DESTINATION_TYPE">DESTINATION_TYPE</a></code> | <code>string</code> | Condition key: iottwinmaker:destinationType (String). |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.LINKED_SERVICES">LINKED_SERVICES</a></code> | <code>string</code> | Condition key: iottwinmaker:linkedServices (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.SOURCE_TYPE">SOURCE_TYPE</a></code> | <code>string</code> | Condition key: iottwinmaker:sourceType (String). |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateComponentTypeConditionKeys`<sup>Required</sup> <a name="CreateComponentTypeConditionKeys" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.CreateComponentTypeConditionKeys"></a>

```typescript
public readonly CreateComponentTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateComponentType action.

---

##### `CreateEntityConditionKeys`<sup>Required</sup> <a name="CreateEntityConditionKeys" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.CreateEntityConditionKeys"></a>

```typescript
public readonly CreateEntityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEntity action.

---

##### `CreateSceneConditionKeys`<sup>Required</sup> <a name="CreateSceneConditionKeys" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.CreateSceneConditionKeys"></a>

```typescript
public readonly CreateSceneConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateScene action.

---

##### `CreateSyncJobConditionKeys`<sup>Required</sup> <a name="CreateSyncJobConditionKeys" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.CreateSyncJobConditionKeys"></a>

```typescript
public readonly CreateSyncJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSyncJob action.

---

##### `CreateWorkspaceConditionKeys`<sup>Required</sup> <a name="CreateWorkspaceConditionKeys" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.CreateWorkspaceConditionKeys"></a>

```typescript
public readonly CreateWorkspaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkspace action.

---

##### `DESTINATION_TYPE`<sup>Required</sup> <a name="DESTINATION_TYPE" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.DESTINATION_TYPE"></a>

```typescript
public readonly DESTINATION_TYPE: string;
```

- *Type:* string

Condition key: iottwinmaker:destinationType (String).

---

##### `LINKED_SERVICES`<sup>Required</sup> <a name="LINKED_SERVICES" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.LINKED_SERVICES"></a>

```typescript
public readonly LINKED_SERVICES: string;
```

- *Type:* string

Condition key: iottwinmaker:linkedServices (ArrayOfString).

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `SOURCE_TYPE`<sup>Required</sup> <a name="SOURCE_TYPE" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.SOURCE_TYPE"></a>

```typescript
public readonly SOURCE_TYPE: string;
```

- *Type:* string

Condition key: iottwinmaker:sourceType (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.iottwinmaker.IottwinmakerConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### IottwinmakerOperations <a name="IottwinmakerOperations" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations"></a>

API operation to required IAM actions mapping for iottwinmaker.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.Initializer"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

new iottwinmaker.IottwinmakerOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.BatchPutPropertyValues">BatchPutPropertyValues</a></code> | <code>string[]</code> | IAM actions required for the BatchPutPropertyValues API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.CancelMetadataTransferJob">CancelMetadataTransferJob</a></code> | <code>string[]</code> | IAM actions required for the CancelMetadataTransferJob API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.CreateComponentType">CreateComponentType</a></code> | <code>string[]</code> | IAM actions required for the CreateComponentType API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.CreateEntity">CreateEntity</a></code> | <code>string[]</code> | IAM actions required for the CreateEntity API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.CreateMetadataTransferJob">CreateMetadataTransferJob</a></code> | <code>string[]</code> | IAM actions required for the CreateMetadataTransferJob API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.CreateScene">CreateScene</a></code> | <code>string[]</code> | IAM actions required for the CreateScene API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.CreateSyncJob">CreateSyncJob</a></code> | <code>string[]</code> | IAM actions required for the CreateSyncJob API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.CreateWorkspace">CreateWorkspace</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkspace API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.DeleteComponentType">DeleteComponentType</a></code> | <code>string[]</code> | IAM actions required for the DeleteComponentType API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.DeleteEntity">DeleteEntity</a></code> | <code>string[]</code> | IAM actions required for the DeleteEntity API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.DeleteScene">DeleteScene</a></code> | <code>string[]</code> | IAM actions required for the DeleteScene API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.DeleteSyncJob">DeleteSyncJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteSyncJob API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.DeleteWorkspace">DeleteWorkspace</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkspace API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ExecuteQuery">ExecuteQuery</a></code> | <code>string[]</code> | IAM actions required for the ExecuteQuery API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListComponents">ListComponents</a></code> | <code>string[]</code> | IAM actions required for the ListComponents API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListComponentTypes">ListComponentTypes</a></code> | <code>string[]</code> | IAM actions required for the ListComponentTypes API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListEntities">ListEntities</a></code> | <code>string[]</code> | IAM actions required for the ListEntities API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListMetadataTransferJobs">ListMetadataTransferJobs</a></code> | <code>string[]</code> | IAM actions required for the ListMetadataTransferJobs API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListProperties">ListProperties</a></code> | <code>string[]</code> | IAM actions required for the ListProperties API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListScenes">ListScenes</a></code> | <code>string[]</code> | IAM actions required for the ListScenes API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListSyncJobs">ListSyncJobs</a></code> | <code>string[]</code> | IAM actions required for the ListSyncJobs API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListSyncResources">ListSyncResources</a></code> | <code>string[]</code> | IAM actions required for the ListSyncResources API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListWorkspaces">ListWorkspaces</a></code> | <code>string[]</code> | IAM actions required for the ListWorkspaces API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.opGetComponentType">opGetComponentType</a></code> | <code>string[]</code> | IAM actions required for the GetComponentType API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.opGetEntity">opGetEntity</a></code> | <code>string[]</code> | IAM actions required for the GetEntity API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.opGetMetadataTransferJob">opGetMetadataTransferJob</a></code> | <code>string[]</code> | IAM actions required for the GetMetadataTransferJob API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.opGetPricingPlan">opGetPricingPlan</a></code> | <code>string[]</code> | IAM actions required for the GetPricingPlan API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.opGetPropertyValue">opGetPropertyValue</a></code> | <code>string[]</code> | IAM actions required for the GetPropertyValue API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.opGetPropertyValueHistory">opGetPropertyValueHistory</a></code> | <code>string[]</code> | IAM actions required for the GetPropertyValueHistory API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.opGetScene">opGetScene</a></code> | <code>string[]</code> | IAM actions required for the GetScene API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.opGetSyncJob">opGetSyncJob</a></code> | <code>string[]</code> | IAM actions required for the GetSyncJob API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.opGetWorkspace">opGetWorkspace</a></code> | <code>string[]</code> | IAM actions required for the GetWorkspace API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.UpdateComponentType">UpdateComponentType</a></code> | <code>string[]</code> | IAM actions required for the UpdateComponentType API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.UpdateEntity">UpdateEntity</a></code> | <code>string[]</code> | IAM actions required for the UpdateEntity API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.UpdatePricingPlan">UpdatePricingPlan</a></code> | <code>string[]</code> | IAM actions required for the UpdatePricingPlan API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.UpdateScene">UpdateScene</a></code> | <code>string[]</code> | IAM actions required for the UpdateScene API call. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.UpdateWorkspace">UpdateWorkspace</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkspace API call. |

---

##### `BatchPutPropertyValues`<sup>Required</sup> <a name="BatchPutPropertyValues" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.BatchPutPropertyValues"></a>

```typescript
public readonly BatchPutPropertyValues: string[];
```

- *Type:* string[]

IAM actions required for the BatchPutPropertyValues API call.

---

##### `CancelMetadataTransferJob`<sup>Required</sup> <a name="CancelMetadataTransferJob" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.CancelMetadataTransferJob"></a>

```typescript
public readonly CancelMetadataTransferJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelMetadataTransferJob API call.

---

##### `CreateComponentType`<sup>Required</sup> <a name="CreateComponentType" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.CreateComponentType"></a>

```typescript
public readonly CreateComponentType: string[];
```

- *Type:* string[]

IAM actions required for the CreateComponentType API call.

---

##### `CreateEntity`<sup>Required</sup> <a name="CreateEntity" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.CreateEntity"></a>

```typescript
public readonly CreateEntity: string[];
```

- *Type:* string[]

IAM actions required for the CreateEntity API call.

---

##### `CreateMetadataTransferJob`<sup>Required</sup> <a name="CreateMetadataTransferJob" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.CreateMetadataTransferJob"></a>

```typescript
public readonly CreateMetadataTransferJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateMetadataTransferJob API call.

---

##### `CreateScene`<sup>Required</sup> <a name="CreateScene" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.CreateScene"></a>

```typescript
public readonly CreateScene: string[];
```

- *Type:* string[]

IAM actions required for the CreateScene API call.

---

##### `CreateSyncJob`<sup>Required</sup> <a name="CreateSyncJob" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.CreateSyncJob"></a>

```typescript
public readonly CreateSyncJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateSyncJob API call.

---

##### `CreateWorkspace`<sup>Required</sup> <a name="CreateWorkspace" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.CreateWorkspace"></a>

```typescript
public readonly CreateWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkspace API call.

---

##### `DeleteComponentType`<sup>Required</sup> <a name="DeleteComponentType" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.DeleteComponentType"></a>

```typescript
public readonly DeleteComponentType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteComponentType API call.

---

##### `DeleteEntity`<sup>Required</sup> <a name="DeleteEntity" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.DeleteEntity"></a>

```typescript
public readonly DeleteEntity: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEntity API call.

---

##### `DeleteScene`<sup>Required</sup> <a name="DeleteScene" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.DeleteScene"></a>

```typescript
public readonly DeleteScene: string[];
```

- *Type:* string[]

IAM actions required for the DeleteScene API call.

---

##### `DeleteSyncJob`<sup>Required</sup> <a name="DeleteSyncJob" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.DeleteSyncJob"></a>

```typescript
public readonly DeleteSyncJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSyncJob API call.

---

##### `DeleteWorkspace`<sup>Required</sup> <a name="DeleteWorkspace" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.DeleteWorkspace"></a>

```typescript
public readonly DeleteWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkspace API call.

---

##### `ExecuteQuery`<sup>Required</sup> <a name="ExecuteQuery" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ExecuteQuery"></a>

```typescript
public readonly ExecuteQuery: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteQuery API call.

---

##### `ListComponents`<sup>Required</sup> <a name="ListComponents" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListComponents"></a>

```typescript
public readonly ListComponents: string[];
```

- *Type:* string[]

IAM actions required for the ListComponents API call.

---

##### `ListComponentTypes`<sup>Required</sup> <a name="ListComponentTypes" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListComponentTypes"></a>

```typescript
public readonly ListComponentTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListComponentTypes API call.

---

##### `ListEntities`<sup>Required</sup> <a name="ListEntities" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListEntities"></a>

```typescript
public readonly ListEntities: string[];
```

- *Type:* string[]

IAM actions required for the ListEntities API call.

---

##### `ListMetadataTransferJobs`<sup>Required</sup> <a name="ListMetadataTransferJobs" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListMetadataTransferJobs"></a>

```typescript
public readonly ListMetadataTransferJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListMetadataTransferJobs API call.

---

##### `ListProperties`<sup>Required</sup> <a name="ListProperties" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListProperties"></a>

```typescript
public readonly ListProperties: string[];
```

- *Type:* string[]

IAM actions required for the ListProperties API call.

---

##### `ListScenes`<sup>Required</sup> <a name="ListScenes" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListScenes"></a>

```typescript
public readonly ListScenes: string[];
```

- *Type:* string[]

IAM actions required for the ListScenes API call.

---

##### `ListSyncJobs`<sup>Required</sup> <a name="ListSyncJobs" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListSyncJobs"></a>

```typescript
public readonly ListSyncJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListSyncJobs API call.

---

##### `ListSyncResources`<sup>Required</sup> <a name="ListSyncResources" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListSyncResources"></a>

```typescript
public readonly ListSyncResources: string[];
```

- *Type:* string[]

IAM actions required for the ListSyncResources API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWorkspaces`<sup>Required</sup> <a name="ListWorkspaces" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.ListWorkspaces"></a>

```typescript
public readonly ListWorkspaces: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkspaces API call.

---

##### `opGetComponentType`<sup>Required</sup> <a name="opGetComponentType" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.opGetComponentType"></a>

```typescript
public readonly opGetComponentType: string[];
```

- *Type:* string[]

IAM actions required for the GetComponentType API call.

---

##### `opGetEntity`<sup>Required</sup> <a name="opGetEntity" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.opGetEntity"></a>

```typescript
public readonly opGetEntity: string[];
```

- *Type:* string[]

IAM actions required for the GetEntity API call.

---

##### `opGetMetadataTransferJob`<sup>Required</sup> <a name="opGetMetadataTransferJob" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.opGetMetadataTransferJob"></a>

```typescript
public readonly opGetMetadataTransferJob: string[];
```

- *Type:* string[]

IAM actions required for the GetMetadataTransferJob API call.

---

##### `opGetPricingPlan`<sup>Required</sup> <a name="opGetPricingPlan" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.opGetPricingPlan"></a>

```typescript
public readonly opGetPricingPlan: string[];
```

- *Type:* string[]

IAM actions required for the GetPricingPlan API call.

---

##### `opGetPropertyValue`<sup>Required</sup> <a name="opGetPropertyValue" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.opGetPropertyValue"></a>

```typescript
public readonly opGetPropertyValue: string[];
```

- *Type:* string[]

IAM actions required for the GetPropertyValue API call.

---

##### `opGetPropertyValueHistory`<sup>Required</sup> <a name="opGetPropertyValueHistory" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.opGetPropertyValueHistory"></a>

```typescript
public readonly opGetPropertyValueHistory: string[];
```

- *Type:* string[]

IAM actions required for the GetPropertyValueHistory API call.

---

##### `opGetScene`<sup>Required</sup> <a name="opGetScene" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.opGetScene"></a>

```typescript
public readonly opGetScene: string[];
```

- *Type:* string[]

IAM actions required for the GetScene API call.

---

##### `opGetSyncJob`<sup>Required</sup> <a name="opGetSyncJob" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.opGetSyncJob"></a>

```typescript
public readonly opGetSyncJob: string[];
```

- *Type:* string[]

IAM actions required for the GetSyncJob API call.

---

##### `opGetWorkspace`<sup>Required</sup> <a name="opGetWorkspace" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.opGetWorkspace"></a>

```typescript
public readonly opGetWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkspace API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateComponentType`<sup>Required</sup> <a name="UpdateComponentType" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.UpdateComponentType"></a>

```typescript
public readonly UpdateComponentType: string[];
```

- *Type:* string[]

IAM actions required for the UpdateComponentType API call.

---

##### `UpdateEntity`<sup>Required</sup> <a name="UpdateEntity" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.UpdateEntity"></a>

```typescript
public readonly UpdateEntity: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEntity API call.

---

##### `UpdatePricingPlan`<sup>Required</sup> <a name="UpdatePricingPlan" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.UpdatePricingPlan"></a>

```typescript
public readonly UpdatePricingPlan: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePricingPlan API call.

---

##### `UpdateScene`<sup>Required</sup> <a name="UpdateScene" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.UpdateScene"></a>

```typescript
public readonly UpdateScene: string[];
```

- *Type:* string[]

IAM actions required for the UpdateScene API call.

---

##### `UpdateWorkspace`<sup>Required</sup> <a name="UpdateWorkspace" id="@cdk_utils/iam.iottwinmaker.IottwinmakerOperations.property.UpdateWorkspace"></a>

```typescript
public readonly UpdateWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkspace API call.

---

### IottwinmakerResources <a name="IottwinmakerResources" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources"></a>

ARN builders, validators, and parsers for iottwinmaker resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.Initializer"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

new iottwinmaker.IottwinmakerResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerResources.componentType">componentType</a></code> | Builds an ARN for the componentType resource. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerResources.entity">entity</a></code> | Builds an ARN for the entity resource. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerResources.isValidComponentTypeArn">isValidComponentTypeArn</a></code> | Validates whether a string is a valid ARN for the componentType resource. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerResources.isValidEntityArn">isValidEntityArn</a></code> | Validates whether a string is a valid ARN for the entity resource. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerResources.isValidMetadataTransferJobArn">isValidMetadataTransferJobArn</a></code> | Validates whether a string is a valid ARN for the metadataTransferJob resource. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerResources.isValidSceneArn">isValidSceneArn</a></code> | Validates whether a string is a valid ARN for the scene resource. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerResources.isValidSyncJobArn">isValidSyncJobArn</a></code> | Validates whether a string is a valid ARN for the syncJob resource. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerResources.isValidWorkspaceArn">isValidWorkspaceArn</a></code> | Validates whether a string is a valid ARN for the workspace resource. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerResources.metadataTransferJob">metadataTransferJob</a></code> | Builds an ARN for the metadataTransferJob resource. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerResources.parseComponentTypeArn">parseComponentTypeArn</a></code> | Parses a componentType ARN into its components. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerResources.parseEntityArn">parseEntityArn</a></code> | Parses a entity ARN into its components. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerResources.parseMetadataTransferJobArn">parseMetadataTransferJobArn</a></code> | Parses a metadataTransferJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerResources.parseSceneArn">parseSceneArn</a></code> | Parses a scene ARN into its components. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerResources.parseSyncJobArn">parseSyncJobArn</a></code> | Parses a syncJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerResources.parseWorkspaceArn">parseWorkspaceArn</a></code> | Parses a workspace ARN into its components. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerResources.scene">scene</a></code> | Builds an ARN for the scene resource. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerResources.syncJob">syncJob</a></code> | Builds an ARN for the syncJob resource. |
| <code><a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerResources.workspace">workspace</a></code> | Builds an ARN for the workspace resource. |

---

##### `componentType` <a name="componentType" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.componentType"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerResources.componentType(props: IottwinmakerComponentTypeArnProps)
```

Builds an ARN for the componentType resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.componentType.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerComponentTypeArnProps">IottwinmakerComponentTypeArnProps</a>

---

##### `entity` <a name="entity" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.entity"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerResources.entity(props: IottwinmakerEntityArnProps)
```

Builds an ARN for the entity resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.entity.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerEntityArnProps">IottwinmakerEntityArnProps</a>

---

##### `isValidComponentTypeArn` <a name="isValidComponentTypeArn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.isValidComponentTypeArn"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerResources.isValidComponentTypeArn(arn: string)
```

Validates whether a string is a valid ARN for the componentType resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.isValidComponentTypeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEntityArn` <a name="isValidEntityArn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.isValidEntityArn"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerResources.isValidEntityArn(arn: string)
```

Validates whether a string is a valid ARN for the entity resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.isValidEntityArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMetadataTransferJobArn` <a name="isValidMetadataTransferJobArn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.isValidMetadataTransferJobArn"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerResources.isValidMetadataTransferJobArn(arn: string)
```

Validates whether a string is a valid ARN for the metadataTransferJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.isValidMetadataTransferJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSceneArn` <a name="isValidSceneArn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.isValidSceneArn"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerResources.isValidSceneArn(arn: string)
```

Validates whether a string is a valid ARN for the scene resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.isValidSceneArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSyncJobArn` <a name="isValidSyncJobArn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.isValidSyncJobArn"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerResources.isValidSyncJobArn(arn: string)
```

Validates whether a string is a valid ARN for the syncJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.isValidSyncJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkspaceArn` <a name="isValidWorkspaceArn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.isValidWorkspaceArn"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerResources.isValidWorkspaceArn(arn: string)
```

Validates whether a string is a valid ARN for the workspace resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.isValidWorkspaceArn.parameter.arn"></a>

- *Type:* string

---

##### `metadataTransferJob` <a name="metadataTransferJob" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.metadataTransferJob"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerResources.metadataTransferJob(props: IottwinmakerMetadataTransferJobArnProps)
```

Builds an ARN for the metadataTransferJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.metadataTransferJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerMetadataTransferJobArnProps">IottwinmakerMetadataTransferJobArnProps</a>

---

##### `parseComponentTypeArn` <a name="parseComponentTypeArn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.parseComponentTypeArn"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerResources.parseComponentTypeArn(arn: string)
```

Parses a componentType ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.parseComponentTypeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEntityArn` <a name="parseEntityArn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.parseEntityArn"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerResources.parseEntityArn(arn: string)
```

Parses a entity ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.parseEntityArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMetadataTransferJobArn` <a name="parseMetadataTransferJobArn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.parseMetadataTransferJobArn"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerResources.parseMetadataTransferJobArn(arn: string)
```

Parses a metadataTransferJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.parseMetadataTransferJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSceneArn` <a name="parseSceneArn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.parseSceneArn"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerResources.parseSceneArn(arn: string)
```

Parses a scene ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.parseSceneArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSyncJobArn` <a name="parseSyncJobArn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.parseSyncJobArn"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerResources.parseSyncJobArn(arn: string)
```

Parses a syncJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.parseSyncJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkspaceArn` <a name="parseWorkspaceArn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.parseWorkspaceArn"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerResources.parseWorkspaceArn(arn: string)
```

Parses a workspace ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.parseWorkspaceArn.parameter.arn"></a>

- *Type:* string

---

##### `scene` <a name="scene" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.scene"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerResources.scene(props: IottwinmakerSceneArnProps)
```

Builds an ARN for the scene resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.scene.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSceneArnProps">IottwinmakerSceneArnProps</a>

---

##### `syncJob` <a name="syncJob" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.syncJob"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerResources.syncJob(props: IottwinmakerSyncJobArnProps)
```

Builds an ARN for the syncJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.syncJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerSyncJobArnProps">IottwinmakerSyncJobArnProps</a>

---

##### `workspace` <a name="workspace" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.workspace"></a>

```typescript
import { iottwinmaker } from '@cdk_utils/iam'

iottwinmaker.IottwinmakerResources.workspace(props: IottwinmakerWorkspaceArnProps)
```

Builds an ARN for the workspace resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iottwinmaker.IottwinmakerResources.workspace.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iottwinmaker.IottwinmakerWorkspaceArnProps">IottwinmakerWorkspaceArnProps</a>

---




