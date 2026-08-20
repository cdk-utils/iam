# `workspaces` Submodule <a name="`workspaces` Submodule" id="@cdk_utils/iam.workspaces"></a>


## Structs <a name="Structs" id="Structs"></a>

### WorkSpacesCertificateidArnComponents <a name="WorkSpacesCertificateidArnComponents" id="@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnComponents"></a>

Parsed components of a certificateid ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnComponents.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

const workSpacesCertificateidArnComponents: workspaces.WorkSpacesCertificateidArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnComponents.property.certificateId">certificateId</a></code> | <code>string</code> | The CertificateId component. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnComponents.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

The CertificateId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WorkSpacesCertificateidArnProps <a name="WorkSpacesCertificateidArnProps" id="@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnProps"></a>

Properties for building a certificateid ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnProps.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

const workSpacesCertificateidArnProps: workspaces.WorkSpacesCertificateidArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnProps.property.certificateId">certificateId</a></code> | <code>string</code> | The CertificateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnProps.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

The CertificateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WorkSpacesConnectionaliasArnComponents <a name="WorkSpacesConnectionaliasArnComponents" id="@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnComponents"></a>

Parsed components of a connectionalias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnComponents.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

const workSpacesConnectionaliasArnComponents: workspaces.WorkSpacesConnectionaliasArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnComponents.property.connectionAliasId">connectionAliasId</a></code> | <code>string</code> | The ConnectionAliasId component. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectionAliasId`<sup>Required</sup> <a name="connectionAliasId" id="@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnComponents.property.connectionAliasId"></a>

```typescript
public readonly connectionAliasId: string;
```

- *Type:* string

The ConnectionAliasId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WorkSpacesConnectionaliasArnProps <a name="WorkSpacesConnectionaliasArnProps" id="@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnProps"></a>

Properties for building a connectionalias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnProps.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

const workSpacesConnectionaliasArnProps: workspaces.WorkSpacesConnectionaliasArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnProps.property.connectionAliasId">connectionAliasId</a></code> | <code>string</code> | The ConnectionAliasId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectionAliasId`<sup>Required</sup> <a name="connectionAliasId" id="@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnProps.property.connectionAliasId"></a>

```typescript
public readonly connectionAliasId: string;
```

- *Type:* string

The ConnectionAliasId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WorkSpacesDirectoryidArnComponents <a name="WorkSpacesDirectoryidArnComponents" id="@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnComponents"></a>

Parsed components of a directoryid ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnComponents.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

const workSpacesDirectoryidArnComponents: workspaces.WorkSpacesDirectoryidArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnComponents.property.directoryId">directoryId</a></code> | <code>string</code> | The DirectoryId component. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnComponents.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

The DirectoryId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WorkSpacesDirectoryidArnProps <a name="WorkSpacesDirectoryidArnProps" id="@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnProps"></a>

Properties for building a directoryid ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnProps.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

const workSpacesDirectoryidArnProps: workspaces.WorkSpacesDirectoryidArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnProps.property.directoryId">directoryId</a></code> | <code>string</code> | The DirectoryId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnProps.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

The DirectoryId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WorkSpacesWorkspaceapplicationArnComponents <a name="WorkSpacesWorkspaceapplicationArnComponents" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnComponents"></a>

Parsed components of a workspaceapplication ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnComponents.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

const workSpacesWorkspaceapplicationArnComponents: workspaces.WorkSpacesWorkspaceapplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnComponents.property.workSpaceApplicationId">workSpaceApplicationId</a></code> | <code>string</code> | The WorkSpaceApplicationId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workSpaceApplicationId`<sup>Required</sup> <a name="workSpaceApplicationId" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnComponents.property.workSpaceApplicationId"></a>

```typescript
public readonly workSpaceApplicationId: string;
```

- *Type:* string

The WorkSpaceApplicationId component.

---

### WorkSpacesWorkspaceapplicationArnProps <a name="WorkSpacesWorkspaceapplicationArnProps" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnProps"></a>

Properties for building a workspaceapplication ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnProps.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

const workSpacesWorkspaceapplicationArnProps: workspaces.WorkSpacesWorkspaceapplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnProps.property.workSpaceApplicationId">workSpaceApplicationId</a></code> | <code>string</code> | The WorkSpaceApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workSpaceApplicationId`<sup>Required</sup> <a name="workSpaceApplicationId" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnProps.property.workSpaceApplicationId"></a>

```typescript
public readonly workSpaceApplicationId: string;
```

- *Type:* string

The WorkSpaceApplicationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WorkSpacesWorkspacebundleArnComponents <a name="WorkSpacesWorkspacebundleArnComponents" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnComponents"></a>

Parsed components of a workspacebundle ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnComponents.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

const workSpacesWorkspacebundleArnComponents: workspaces.WorkSpacesWorkspacebundleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnComponents.property.bundleId">bundleId</a></code> | <code>string</code> | The BundleId component. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnComponents.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

The BundleId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WorkSpacesWorkspacebundleArnProps <a name="WorkSpacesWorkspacebundleArnProps" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnProps"></a>

Properties for building a workspacebundle ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnProps.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

const workSpacesWorkspacebundleArnProps: workspaces.WorkSpacesWorkspacebundleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnProps.property.bundleId">bundleId</a></code> | <code>string</code> | The BundleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnProps.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

The BundleId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WorkSpacesWorkspaceidArnComponents <a name="WorkSpacesWorkspaceidArnComponents" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnComponents"></a>

Parsed components of a workspaceid ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnComponents.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

const workSpacesWorkspaceidArnComponents: workspaces.WorkSpacesWorkspaceidArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnComponents.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnComponents.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component.

---

### WorkSpacesWorkspaceidArnProps <a name="WorkSpacesWorkspaceidArnProps" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnProps"></a>

Properties for building a workspaceid ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnProps.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

const workSpacesWorkspaceidArnProps: workspaces.WorkSpacesWorkspaceidArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnProps.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnProps.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WorkSpacesWorkspaceimageArnComponents <a name="WorkSpacesWorkspaceimageArnComponents" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnComponents"></a>

Parsed components of a workspaceimage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnComponents.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

const workSpacesWorkspaceimageArnComponents: workspaces.WorkSpacesWorkspaceimageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnComponents.property.imageId">imageId</a></code> | <code>string</code> | The ImageId component. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnComponents.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

The ImageId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WorkSpacesWorkspaceimageArnProps <a name="WorkSpacesWorkspaceimageArnProps" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnProps"></a>

Properties for building a workspaceimage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnProps.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

const workSpacesWorkspaceimageArnProps: workspaces.WorkSpacesWorkspaceimageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnProps.property.imageId">imageId</a></code> | <code>string</code> | The ImageId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnProps.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

The ImageId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WorkSpacesWorkspaceipgroupArnComponents <a name="WorkSpacesWorkspaceipgroupArnComponents" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnComponents"></a>

Parsed components of a workspaceipgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnComponents.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

const workSpacesWorkspaceipgroupArnComponents: workspaces.WorkSpacesWorkspaceipgroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnComponents.property.groupId">groupId</a></code> | <code>string</code> | The GroupId component. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnComponents.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The GroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WorkSpacesWorkspaceipgroupArnProps <a name="WorkSpacesWorkspaceipgroupArnProps" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnProps"></a>

Properties for building a workspaceipgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnProps.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

const workSpacesWorkspaceipgroupArnProps: workspaces.WorkSpacesWorkspaceipgroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnProps.property.groupId">groupId</a></code> | <code>string</code> | The GroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnProps.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The GroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WorkSpacesWorkspacespoolArnComponents <a name="WorkSpacesWorkspacespoolArnComponents" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnComponents"></a>

Parsed components of a workspacespool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnComponents.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

const workSpacesWorkspacespoolArnComponents: workspaces.WorkSpacesWorkspacespoolArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnComponents.property.poolId">poolId</a></code> | <code>string</code> | The PoolId component. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnComponents.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

The PoolId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WorkSpacesWorkspacespoolArnProps <a name="WorkSpacesWorkspacespoolArnProps" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnProps"></a>

Properties for building a workspacespool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnProps.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

const workSpacesWorkspacespoolArnProps: workspaces.WorkSpacesWorkspacespoolArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnProps.property.poolId">poolId</a></code> | <code>string</code> | The PoolId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnProps.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

The PoolId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### WorkSpacesActions <a name="WorkSpacesActions" id="@cdk_utils/iam.workspaces.WorkSpacesActions"></a>

IAM action constants for the workspaces service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workspaces.WorkSpacesActions.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

new workspaces.WorkSpacesActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.AcceptAccountLinkInvitation">AcceptAccountLinkInvitation</a></code> | <code>string</code> | [Write] workspaces:AcceptAccountLinkInvitation. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.actionGetAccountLink">actionGetAccountLink</a></code> | <code>string</code> | [Read] workspaces:GetAccountLink. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.actionGetTroubleshootingRecommendation">actionGetTroubleshootingRecommendation</a></code> | <code>string</code> | [Read] workspaces:GetTroubleshootingRecommendation. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.AssociateConnectionAlias">AssociateConnectionAlias</a></code> | <code>string</code> | [Write] workspaces:AssociateConnectionAlias. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.AssociateIpGroups">AssociateIpGroups</a></code> | <code>string</code> | [Write] workspaces:AssociateIpGroups. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.AssociateWorkspaceApplication">AssociateWorkspaceApplication</a></code> | <code>string</code> | [Write] workspaces:AssociateWorkspaceApplication. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.AuthorizeIpRules">AuthorizeIpRules</a></code> | <code>string</code> | [Write] workspaces:AuthorizeIpRules. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.CopyWorkspaceImage">CopyWorkspaceImage</a></code> | <code>string</code> | [Write] workspaces:CopyWorkspaceImage. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateAccountLinkInvitation">CreateAccountLinkInvitation</a></code> | <code>string</code> | [Write] workspaces:CreateAccountLinkInvitation. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateConnectClientAddIn">CreateConnectClientAddIn</a></code> | <code>string</code> | [Write] workspaces:CreateConnectClientAddIn. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateConnectionAlias">CreateConnectionAlias</a></code> | <code>string</code> | [Write] workspaces:CreateConnectionAlias. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateIpGroup">CreateIpGroup</a></code> | <code>string</code> | [Write] workspaces:CreateIpGroup. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateRootClientCertificate">CreateRootClientCertificate</a></code> | <code>string</code> | [Write] workspaces:CreateRootClientCertificate. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateStandbyWorkspaces">CreateStandbyWorkspaces</a></code> | <code>string</code> | [Write] workspaces:CreateStandbyWorkspaces. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateTags">CreateTags</a></code> | <code>string</code> | [Tagging] workspaces:CreateTags. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateUpdatedWorkspaceImage">CreateUpdatedWorkspaceImage</a></code> | <code>string</code> | [Write] workspaces:CreateUpdatedWorkspaceImage. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateWorkspaceBundle">CreateWorkspaceBundle</a></code> | <code>string</code> | [Write] workspaces:CreateWorkspaceBundle. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateWorkspaceImage">CreateWorkspaceImage</a></code> | <code>string</code> | [Write] workspaces:CreateWorkspaceImage. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateWorkspaces">CreateWorkspaces</a></code> | <code>string</code> | [Write] workspaces:CreateWorkspaces. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateWorkspacesPool">CreateWorkspacesPool</a></code> | <code>string</code> | [Write] workspaces:CreateWorkspacesPool. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeleteAccountLinkInvitation">DeleteAccountLinkInvitation</a></code> | <code>string</code> | [Write] workspaces:DeleteAccountLinkInvitation. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeleteClientBranding">DeleteClientBranding</a></code> | <code>string</code> | [Write] workspaces:DeleteClientBranding. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeleteConnectClientAddIn">DeleteConnectClientAddIn</a></code> | <code>string</code> | [Write] workspaces:DeleteConnectClientAddIn. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeleteConnectionAlias">DeleteConnectionAlias</a></code> | <code>string</code> | [Write] workspaces:DeleteConnectionAlias. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeleteIpGroup">DeleteIpGroup</a></code> | <code>string</code> | [Write] workspaces:DeleteIpGroup. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeleteRootClientCertificate">DeleteRootClientCertificate</a></code> | <code>string</code> | [Write] workspaces:DeleteRootClientCertificate. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeleteTags">DeleteTags</a></code> | <code>string</code> | [Tagging] workspaces:DeleteTags. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeleteWorkspaceBundle">DeleteWorkspaceBundle</a></code> | <code>string</code> | [Write] workspaces:DeleteWorkspaceBundle. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeleteWorkspaceImage">DeleteWorkspaceImage</a></code> | <code>string</code> | [Write] workspaces:DeleteWorkspaceImage. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeployWorkspaceApplications">DeployWorkspaceApplications</a></code> | <code>string</code> | [Write] workspaces:DeployWorkspaceApplications. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeregisterWorkspaceDirectory">DeregisterWorkspaceDirectory</a></code> | <code>string</code> | [Write] workspaces:DeregisterWorkspaceDirectory. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeAccount">DescribeAccount</a></code> | <code>string</code> | [Read] workspaces:DescribeAccount. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeAccountModifications">DescribeAccountModifications</a></code> | <code>string</code> | [Read] workspaces:DescribeAccountModifications. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeApplicationAssociations">DescribeApplicationAssociations</a></code> | <code>string</code> | [List] workspaces:DescribeApplicationAssociations. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeApplications">DescribeApplications</a></code> | <code>string</code> | [List] workspaces:DescribeApplications. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeBundleAssociations">DescribeBundleAssociations</a></code> | <code>string</code> | [List] workspaces:DescribeBundleAssociations. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeClientBranding">DescribeClientBranding</a></code> | <code>string</code> | [Read] workspaces:DescribeClientBranding. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeClientProperties">DescribeClientProperties</a></code> | <code>string</code> | [List] workspaces:DescribeClientProperties. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeConnectClientAddIns">DescribeConnectClientAddIns</a></code> | <code>string</code> | [List] workspaces:DescribeConnectClientAddIns. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeConnectionAliases">DescribeConnectionAliases</a></code> | <code>string</code> | [Read] workspaces:DescribeConnectionAliases. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeConnectionAliasPermissions">DescribeConnectionAliasPermissions</a></code> | <code>string</code> | [Read] workspaces:DescribeConnectionAliasPermissions. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeConsent">DescribeConsent</a></code> | <code>string</code> | [Read] workspaces:DescribeConsent. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeCustomWorkspaceImageImport">DescribeCustomWorkspaceImageImport</a></code> | <code>string</code> | [Read] workspaces:DescribeCustomWorkspaceImageImport. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeImageAssociations">DescribeImageAssociations</a></code> | <code>string</code> | [List] workspaces:DescribeImageAssociations. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeIpGroups">DescribeIpGroups</a></code> | <code>string</code> | [Read] workspaces:DescribeIpGroups. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeTags">DescribeTags</a></code> | <code>string</code> | [Read] workspaces:DescribeTags. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspaceAssociations">DescribeWorkspaceAssociations</a></code> | <code>string</code> | [List] workspaces:DescribeWorkspaceAssociations. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspaceBundles">DescribeWorkspaceBundles</a></code> | <code>string</code> | [List] workspaces:DescribeWorkspaceBundles. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspaceDirectories">DescribeWorkspaceDirectories</a></code> | <code>string</code> | [Read] workspaces:DescribeWorkspaceDirectories. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspaceImagePermissions">DescribeWorkspaceImagePermissions</a></code> | <code>string</code> | [Read] workspaces:DescribeWorkspaceImagePermissions. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspaceImages">DescribeWorkspaceImages</a></code> | <code>string</code> | [List] workspaces:DescribeWorkspaceImages. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspaces">DescribeWorkspaces</a></code> | <code>string</code> | [List] workspaces:DescribeWorkspaces. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspacesConnectionStatus">DescribeWorkspacesConnectionStatus</a></code> | <code>string</code> | [Read] workspaces:DescribeWorkspacesConnectionStatus. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspaceSnapshots">DescribeWorkspaceSnapshots</a></code> | <code>string</code> | [List] workspaces:DescribeWorkspaceSnapshots. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspacesPools">DescribeWorkspacesPools</a></code> | <code>string</code> | [List] workspaces:DescribeWorkspacesPools. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspacesPoolSessions">DescribeWorkspacesPoolSessions</a></code> | <code>string</code> | [List] workspaces:DescribeWorkspacesPoolSessions. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DirectoryAccessManagement">DirectoryAccessManagement</a></code> | <code>string</code> | [List] workspaces:DirectoryAccessManagement. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DisassociateConnectionAlias">DisassociateConnectionAlias</a></code> | <code>string</code> | [Write] workspaces:DisassociateConnectionAlias. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DisassociateIpGroups">DisassociateIpGroups</a></code> | <code>string</code> | [Write] workspaces:DisassociateIpGroups. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.DisassociateWorkspaceApplication">DisassociateWorkspaceApplication</a></code> | <code>string</code> | [Write] workspaces:DisassociateWorkspaceApplication. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.ImportClientBranding">ImportClientBranding</a></code> | <code>string</code> | [Write] workspaces:ImportClientBranding. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.ImportCustomWorkspaceImage">ImportCustomWorkspaceImage</a></code> | <code>string</code> | [Write] workspaces:ImportCustomWorkspaceImage. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.ImportWorkspaceImage">ImportWorkspaceImage</a></code> | <code>string</code> | [Write] workspaces:ImportWorkspaceImage. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.InvokeOnboardingAgent">InvokeOnboardingAgent</a></code> | <code>string</code> | [Write] workspaces:InvokeOnboardingAgent. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.InvokeTroubleshootingInvestigation">InvokeTroubleshootingInvestigation</a></code> | <code>string</code> | [Read] workspaces:InvokeTroubleshootingInvestigation. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.ListAccountLinks">ListAccountLinks</a></code> | <code>string</code> | [List] workspaces:ListAccountLinks. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.ListAvailableManagementCidrRanges">ListAvailableManagementCidrRanges</a></code> | <code>string</code> | [List] workspaces:ListAvailableManagementCidrRanges. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.ListTroubleshootingRecommendations">ListTroubleshootingRecommendations</a></code> | <code>string</code> | [Read] workspaces:ListTroubleshootingRecommendations. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.MigrateWorkspace">MigrateWorkspace</a></code> | <code>string</code> | [Write] workspaces:MigrateWorkspace. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifyAccount">ModifyAccount</a></code> | <code>string</code> | [Write] workspaces:ModifyAccount. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifyCertificateBasedAuthProperties">ModifyCertificateBasedAuthProperties</a></code> | <code>string</code> | [Write] workspaces:ModifyCertificateBasedAuthProperties. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifyClientProperties">ModifyClientProperties</a></code> | <code>string</code> | [Write] workspaces:ModifyClientProperties. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifyEndpointEncryptionMode">ModifyEndpointEncryptionMode</a></code> | <code>string</code> | [Write] workspaces:ModifyEndpointEncryptionMode. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifySamlProperties">ModifySamlProperties</a></code> | <code>string</code> | [Write] workspaces:ModifySamlProperties. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifySelfservicePermissions">ModifySelfservicePermissions</a></code> | <code>string</code> | [PermissionManagement] workspaces:ModifySelfservicePermissions. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifyStreamingProperties">ModifyStreamingProperties</a></code> | <code>string</code> | [Write] workspaces:ModifyStreamingProperties. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifyWorkspaceAccessProperties">ModifyWorkspaceAccessProperties</a></code> | <code>string</code> | [Write] workspaces:ModifyWorkspaceAccessProperties. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifyWorkspaceCreationProperties">ModifyWorkspaceCreationProperties</a></code> | <code>string</code> | [Write] workspaces:ModifyWorkspaceCreationProperties. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifyWorkspaceProperties">ModifyWorkspaceProperties</a></code> | <code>string</code> | [Write] workspaces:ModifyWorkspaceProperties. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifyWorkspaceState">ModifyWorkspaceState</a></code> | <code>string</code> | [Write] workspaces:ModifyWorkspaceState. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.Personalization">Personalization</a></code> | <code>string</code> | [Write] workspaces:Personalization. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.RebootWorkspaces">RebootWorkspaces</a></code> | <code>string</code> | [Write] workspaces:RebootWorkspaces. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.RebuildWorkspaces">RebuildWorkspaces</a></code> | <code>string</code> | [Write] workspaces:RebuildWorkspaces. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.RegisterWorkspaceDirectory">RegisterWorkspaceDirectory</a></code> | <code>string</code> | [Write] workspaces:RegisterWorkspaceDirectory. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.RejectAccountLinkInvitation">RejectAccountLinkInvitation</a></code> | <code>string</code> | [Write] workspaces:RejectAccountLinkInvitation. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.RestoreWorkspace">RestoreWorkspace</a></code> | <code>string</code> | [Write] workspaces:RestoreWorkspace. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.RevokeIpRules">RevokeIpRules</a></code> | <code>string</code> | [Write] workspaces:RevokeIpRules. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.StartWorkspaces">StartWorkspaces</a></code> | <code>string</code> | [Write] workspaces:StartWorkspaces. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.StartWorkspacesPool">StartWorkspacesPool</a></code> | <code>string</code> | [Write] workspaces:StartWorkspacesPool. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.StopWorkspaces">StopWorkspaces</a></code> | <code>string</code> | [Write] workspaces:StopWorkspaces. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.StopWorkspacesPool">StopWorkspacesPool</a></code> | <code>string</code> | [Write] workspaces:StopWorkspacesPool. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.Stream">Stream</a></code> | <code>string</code> | [Write] workspaces:Stream. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.TerminateWorkspaces">TerminateWorkspaces</a></code> | <code>string</code> | [Write] workspaces:TerminateWorkspaces. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.TerminateWorkspacesPool">TerminateWorkspacesPool</a></code> | <code>string</code> | [Write] workspaces:TerminateWorkspacesPool. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.TerminateWorkspacesPoolSession">TerminateWorkspacesPoolSession</a></code> | <code>string</code> | [Write] workspaces:TerminateWorkspacesPoolSession. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.UpdateConnectClientAddIn">UpdateConnectClientAddIn</a></code> | <code>string</code> | [Write] workspaces:UpdateConnectClientAddIn. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.UpdateConnectionAliasPermission">UpdateConnectionAliasPermission</a></code> | <code>string</code> | [PermissionManagement] workspaces:UpdateConnectionAliasPermission. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.UpdateConsent">UpdateConsent</a></code> | <code>string</code> | [Write] workspaces:UpdateConsent. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.UpdateRootClientCertificate">UpdateRootClientCertificate</a></code> | <code>string</code> | [Write] workspaces:UpdateRootClientCertificate. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.UpdateRulesOfIpGroup">UpdateRulesOfIpGroup</a></code> | <code>string</code> | [Write] workspaces:UpdateRulesOfIpGroup. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.UpdateWorkspaceBundle">UpdateWorkspaceBundle</a></code> | <code>string</code> | [Write] workspaces:UpdateWorkspaceBundle. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.UpdateWorkspaceImagePermission">UpdateWorkspaceImagePermission</a></code> | <code>string</code> | [PermissionManagement] workspaces:UpdateWorkspaceImagePermission. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesActions.property.UpdateWorkspacesPool">UpdateWorkspacesPool</a></code> | <code>string</code> | [Write] workspaces:UpdateWorkspacesPool. |

---

##### `AcceptAccountLinkInvitation`<sup>Required</sup> <a name="AcceptAccountLinkInvitation" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.AcceptAccountLinkInvitation"></a>

```typescript
public readonly AcceptAccountLinkInvitation: string;
```

- *Type:* string

[Write] workspaces:AcceptAccountLinkInvitation.

---

##### `actionGetAccountLink`<sup>Required</sup> <a name="actionGetAccountLink" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.actionGetAccountLink"></a>

```typescript
public readonly actionGetAccountLink: string;
```

- *Type:* string

[Read] workspaces:GetAccountLink.

---

##### `actionGetTroubleshootingRecommendation`<sup>Required</sup> <a name="actionGetTroubleshootingRecommendation" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.actionGetTroubleshootingRecommendation"></a>

```typescript
public readonly actionGetTroubleshootingRecommendation: string;
```

- *Type:* string

[Read] workspaces:GetTroubleshootingRecommendation.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateConnectionAlias`<sup>Required</sup> <a name="AssociateConnectionAlias" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.AssociateConnectionAlias"></a>

```typescript
public readonly AssociateConnectionAlias: string;
```

- *Type:* string

[Write] workspaces:AssociateConnectionAlias.

---

##### `AssociateIpGroups`<sup>Required</sup> <a name="AssociateIpGroups" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.AssociateIpGroups"></a>

```typescript
public readonly AssociateIpGroups: string;
```

- *Type:* string

[Write] workspaces:AssociateIpGroups.

---

##### `AssociateWorkspaceApplication`<sup>Required</sup> <a name="AssociateWorkspaceApplication" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.AssociateWorkspaceApplication"></a>

```typescript
public readonly AssociateWorkspaceApplication: string;
```

- *Type:* string

[Write] workspaces:AssociateWorkspaceApplication.

---

##### `AuthorizeIpRules`<sup>Required</sup> <a name="AuthorizeIpRules" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.AuthorizeIpRules"></a>

```typescript
public readonly AuthorizeIpRules: string;
```

- *Type:* string

[Write] workspaces:AuthorizeIpRules.

---

##### `CopyWorkspaceImage`<sup>Required</sup> <a name="CopyWorkspaceImage" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.CopyWorkspaceImage"></a>

```typescript
public readonly CopyWorkspaceImage: string;
```

- *Type:* string

[Write] workspaces:CopyWorkspaceImage.

---

##### `CreateAccountLinkInvitation`<sup>Required</sup> <a name="CreateAccountLinkInvitation" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateAccountLinkInvitation"></a>

```typescript
public readonly CreateAccountLinkInvitation: string;
```

- *Type:* string

[Write] workspaces:CreateAccountLinkInvitation.

---

##### `CreateConnectClientAddIn`<sup>Required</sup> <a name="CreateConnectClientAddIn" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateConnectClientAddIn"></a>

```typescript
public readonly CreateConnectClientAddIn: string;
```

- *Type:* string

[Write] workspaces:CreateConnectClientAddIn.

---

##### `CreateConnectionAlias`<sup>Required</sup> <a name="CreateConnectionAlias" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateConnectionAlias"></a>

```typescript
public readonly CreateConnectionAlias: string;
```

- *Type:* string

[Write] workspaces:CreateConnectionAlias.

---

##### `CreateIpGroup`<sup>Required</sup> <a name="CreateIpGroup" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateIpGroup"></a>

```typescript
public readonly CreateIpGroup: string;
```

- *Type:* string

[Write] workspaces:CreateIpGroup.

---

##### `CreateRootClientCertificate`<sup>Required</sup> <a name="CreateRootClientCertificate" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateRootClientCertificate"></a>

```typescript
public readonly CreateRootClientCertificate: string;
```

- *Type:* string

[Write] workspaces:CreateRootClientCertificate.

---

##### `CreateStandbyWorkspaces`<sup>Required</sup> <a name="CreateStandbyWorkspaces" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateStandbyWorkspaces"></a>

```typescript
public readonly CreateStandbyWorkspaces: string;
```

- *Type:* string

[Write] workspaces:CreateStandbyWorkspaces.

---

##### `CreateTags`<sup>Required</sup> <a name="CreateTags" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateTags"></a>

```typescript
public readonly CreateTags: string;
```

- *Type:* string

[Tagging] workspaces:CreateTags.

---

##### `CreateUpdatedWorkspaceImage`<sup>Required</sup> <a name="CreateUpdatedWorkspaceImage" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateUpdatedWorkspaceImage"></a>

```typescript
public readonly CreateUpdatedWorkspaceImage: string;
```

- *Type:* string

[Write] workspaces:CreateUpdatedWorkspaceImage.

---

##### `CreateWorkspaceBundle`<sup>Required</sup> <a name="CreateWorkspaceBundle" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateWorkspaceBundle"></a>

```typescript
public readonly CreateWorkspaceBundle: string;
```

- *Type:* string

[Write] workspaces:CreateWorkspaceBundle.

---

##### `CreateWorkspaceImage`<sup>Required</sup> <a name="CreateWorkspaceImage" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateWorkspaceImage"></a>

```typescript
public readonly CreateWorkspaceImage: string;
```

- *Type:* string

[Write] workspaces:CreateWorkspaceImage.

---

##### `CreateWorkspaces`<sup>Required</sup> <a name="CreateWorkspaces" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateWorkspaces"></a>

```typescript
public readonly CreateWorkspaces: string;
```

- *Type:* string

[Write] workspaces:CreateWorkspaces.

---

##### `CreateWorkspacesPool`<sup>Required</sup> <a name="CreateWorkspacesPool" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.CreateWorkspacesPool"></a>

```typescript
public readonly CreateWorkspacesPool: string;
```

- *Type:* string

[Write] workspaces:CreateWorkspacesPool.

---

##### `DeleteAccountLinkInvitation`<sup>Required</sup> <a name="DeleteAccountLinkInvitation" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeleteAccountLinkInvitation"></a>

```typescript
public readonly DeleteAccountLinkInvitation: string;
```

- *Type:* string

[Write] workspaces:DeleteAccountLinkInvitation.

---

##### `DeleteClientBranding`<sup>Required</sup> <a name="DeleteClientBranding" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeleteClientBranding"></a>

```typescript
public readonly DeleteClientBranding: string;
```

- *Type:* string

[Write] workspaces:DeleteClientBranding.

---

##### `DeleteConnectClientAddIn`<sup>Required</sup> <a name="DeleteConnectClientAddIn" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeleteConnectClientAddIn"></a>

```typescript
public readonly DeleteConnectClientAddIn: string;
```

- *Type:* string

[Write] workspaces:DeleteConnectClientAddIn.

---

##### `DeleteConnectionAlias`<sup>Required</sup> <a name="DeleteConnectionAlias" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeleteConnectionAlias"></a>

```typescript
public readonly DeleteConnectionAlias: string;
```

- *Type:* string

[Write] workspaces:DeleteConnectionAlias.

---

##### `DeleteIpGroup`<sup>Required</sup> <a name="DeleteIpGroup" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeleteIpGroup"></a>

```typescript
public readonly DeleteIpGroup: string;
```

- *Type:* string

[Write] workspaces:DeleteIpGroup.

---

##### `DeleteRootClientCertificate`<sup>Required</sup> <a name="DeleteRootClientCertificate" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeleteRootClientCertificate"></a>

```typescript
public readonly DeleteRootClientCertificate: string;
```

- *Type:* string

[Write] workspaces:DeleteRootClientCertificate.

---

##### `DeleteTags`<sup>Required</sup> <a name="DeleteTags" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeleteTags"></a>

```typescript
public readonly DeleteTags: string;
```

- *Type:* string

[Tagging] workspaces:DeleteTags.

---

##### `DeleteWorkspaceBundle`<sup>Required</sup> <a name="DeleteWorkspaceBundle" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeleteWorkspaceBundle"></a>

```typescript
public readonly DeleteWorkspaceBundle: string;
```

- *Type:* string

[Write] workspaces:DeleteWorkspaceBundle.

---

##### `DeleteWorkspaceImage`<sup>Required</sup> <a name="DeleteWorkspaceImage" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeleteWorkspaceImage"></a>

```typescript
public readonly DeleteWorkspaceImage: string;
```

- *Type:* string

[Write] workspaces:DeleteWorkspaceImage.

---

##### `DeployWorkspaceApplications`<sup>Required</sup> <a name="DeployWorkspaceApplications" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeployWorkspaceApplications"></a>

```typescript
public readonly DeployWorkspaceApplications: string;
```

- *Type:* string

[Write] workspaces:DeployWorkspaceApplications.

---

##### `DeregisterWorkspaceDirectory`<sup>Required</sup> <a name="DeregisterWorkspaceDirectory" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DeregisterWorkspaceDirectory"></a>

```typescript
public readonly DeregisterWorkspaceDirectory: string;
```

- *Type:* string

[Write] workspaces:DeregisterWorkspaceDirectory.

---

##### `DescribeAccount`<sup>Required</sup> <a name="DescribeAccount" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeAccount"></a>

```typescript
public readonly DescribeAccount: string;
```

- *Type:* string

[Read] workspaces:DescribeAccount.

---

##### `DescribeAccountModifications`<sup>Required</sup> <a name="DescribeAccountModifications" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeAccountModifications"></a>

```typescript
public readonly DescribeAccountModifications: string;
```

- *Type:* string

[Read] workspaces:DescribeAccountModifications.

---

##### `DescribeApplicationAssociations`<sup>Required</sup> <a name="DescribeApplicationAssociations" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeApplicationAssociations"></a>

```typescript
public readonly DescribeApplicationAssociations: string;
```

- *Type:* string

[List] workspaces:DescribeApplicationAssociations.

---

##### `DescribeApplications`<sup>Required</sup> <a name="DescribeApplications" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeApplications"></a>

```typescript
public readonly DescribeApplications: string;
```

- *Type:* string

[List] workspaces:DescribeApplications.

---

##### `DescribeBundleAssociations`<sup>Required</sup> <a name="DescribeBundleAssociations" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeBundleAssociations"></a>

```typescript
public readonly DescribeBundleAssociations: string;
```

- *Type:* string

[List] workspaces:DescribeBundleAssociations.

---

##### `DescribeClientBranding`<sup>Required</sup> <a name="DescribeClientBranding" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeClientBranding"></a>

```typescript
public readonly DescribeClientBranding: string;
```

- *Type:* string

[Read] workspaces:DescribeClientBranding.

---

##### `DescribeClientProperties`<sup>Required</sup> <a name="DescribeClientProperties" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeClientProperties"></a>

```typescript
public readonly DescribeClientProperties: string;
```

- *Type:* string

[List] workspaces:DescribeClientProperties.

---

##### `DescribeConnectClientAddIns`<sup>Required</sup> <a name="DescribeConnectClientAddIns" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeConnectClientAddIns"></a>

```typescript
public readonly DescribeConnectClientAddIns: string;
```

- *Type:* string

[List] workspaces:DescribeConnectClientAddIns.

---

##### `DescribeConnectionAliases`<sup>Required</sup> <a name="DescribeConnectionAliases" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeConnectionAliases"></a>

```typescript
public readonly DescribeConnectionAliases: string;
```

- *Type:* string

[Read] workspaces:DescribeConnectionAliases.

---

##### `DescribeConnectionAliasPermissions`<sup>Required</sup> <a name="DescribeConnectionAliasPermissions" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeConnectionAliasPermissions"></a>

```typescript
public readonly DescribeConnectionAliasPermissions: string;
```

- *Type:* string

[Read] workspaces:DescribeConnectionAliasPermissions.

---

##### `DescribeConsent`<sup>Required</sup> <a name="DescribeConsent" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeConsent"></a>

```typescript
public readonly DescribeConsent: string;
```

- *Type:* string

[Read] workspaces:DescribeConsent.

---

##### `DescribeCustomWorkspaceImageImport`<sup>Required</sup> <a name="DescribeCustomWorkspaceImageImport" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeCustomWorkspaceImageImport"></a>

```typescript
public readonly DescribeCustomWorkspaceImageImport: string;
```

- *Type:* string

[Read] workspaces:DescribeCustomWorkspaceImageImport.

---

##### `DescribeImageAssociations`<sup>Required</sup> <a name="DescribeImageAssociations" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeImageAssociations"></a>

```typescript
public readonly DescribeImageAssociations: string;
```

- *Type:* string

[List] workspaces:DescribeImageAssociations.

---

##### `DescribeIpGroups`<sup>Required</sup> <a name="DescribeIpGroups" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeIpGroups"></a>

```typescript
public readonly DescribeIpGroups: string;
```

- *Type:* string

[Read] workspaces:DescribeIpGroups.

---

##### `DescribeTags`<sup>Required</sup> <a name="DescribeTags" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeTags"></a>

```typescript
public readonly DescribeTags: string;
```

- *Type:* string

[Read] workspaces:DescribeTags.

---

##### `DescribeWorkspaceAssociations`<sup>Required</sup> <a name="DescribeWorkspaceAssociations" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspaceAssociations"></a>

```typescript
public readonly DescribeWorkspaceAssociations: string;
```

- *Type:* string

[List] workspaces:DescribeWorkspaceAssociations.

---

##### `DescribeWorkspaceBundles`<sup>Required</sup> <a name="DescribeWorkspaceBundles" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspaceBundles"></a>

```typescript
public readonly DescribeWorkspaceBundles: string;
```

- *Type:* string

[List] workspaces:DescribeWorkspaceBundles.

---

##### `DescribeWorkspaceDirectories`<sup>Required</sup> <a name="DescribeWorkspaceDirectories" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspaceDirectories"></a>

```typescript
public readonly DescribeWorkspaceDirectories: string;
```

- *Type:* string

[Read] workspaces:DescribeWorkspaceDirectories.

---

##### `DescribeWorkspaceImagePermissions`<sup>Required</sup> <a name="DescribeWorkspaceImagePermissions" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspaceImagePermissions"></a>

```typescript
public readonly DescribeWorkspaceImagePermissions: string;
```

- *Type:* string

[Read] workspaces:DescribeWorkspaceImagePermissions.

---

##### `DescribeWorkspaceImages`<sup>Required</sup> <a name="DescribeWorkspaceImages" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspaceImages"></a>

```typescript
public readonly DescribeWorkspaceImages: string;
```

- *Type:* string

[List] workspaces:DescribeWorkspaceImages.

---

##### `DescribeWorkspaces`<sup>Required</sup> <a name="DescribeWorkspaces" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspaces"></a>

```typescript
public readonly DescribeWorkspaces: string;
```

- *Type:* string

[List] workspaces:DescribeWorkspaces.

---

##### `DescribeWorkspacesConnectionStatus`<sup>Required</sup> <a name="DescribeWorkspacesConnectionStatus" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspacesConnectionStatus"></a>

```typescript
public readonly DescribeWorkspacesConnectionStatus: string;
```

- *Type:* string

[Read] workspaces:DescribeWorkspacesConnectionStatus.

---

##### `DescribeWorkspaceSnapshots`<sup>Required</sup> <a name="DescribeWorkspaceSnapshots" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspaceSnapshots"></a>

```typescript
public readonly DescribeWorkspaceSnapshots: string;
```

- *Type:* string

[List] workspaces:DescribeWorkspaceSnapshots.

---

##### `DescribeWorkspacesPools`<sup>Required</sup> <a name="DescribeWorkspacesPools" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspacesPools"></a>

```typescript
public readonly DescribeWorkspacesPools: string;
```

- *Type:* string

[List] workspaces:DescribeWorkspacesPools.

---

##### `DescribeWorkspacesPoolSessions`<sup>Required</sup> <a name="DescribeWorkspacesPoolSessions" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DescribeWorkspacesPoolSessions"></a>

```typescript
public readonly DescribeWorkspacesPoolSessions: string;
```

- *Type:* string

[List] workspaces:DescribeWorkspacesPoolSessions.

---

##### `DirectoryAccessManagement`<sup>Required</sup> <a name="DirectoryAccessManagement" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DirectoryAccessManagement"></a>

```typescript
public readonly DirectoryAccessManagement: string;
```

- *Type:* string

[List] workspaces:DirectoryAccessManagement.

---

##### `DisassociateConnectionAlias`<sup>Required</sup> <a name="DisassociateConnectionAlias" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DisassociateConnectionAlias"></a>

```typescript
public readonly DisassociateConnectionAlias: string;
```

- *Type:* string

[Write] workspaces:DisassociateConnectionAlias.

---

##### `DisassociateIpGroups`<sup>Required</sup> <a name="DisassociateIpGroups" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DisassociateIpGroups"></a>

```typescript
public readonly DisassociateIpGroups: string;
```

- *Type:* string

[Write] workspaces:DisassociateIpGroups.

---

##### `DisassociateWorkspaceApplication`<sup>Required</sup> <a name="DisassociateWorkspaceApplication" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.DisassociateWorkspaceApplication"></a>

```typescript
public readonly DisassociateWorkspaceApplication: string;
```

- *Type:* string

[Write] workspaces:DisassociateWorkspaceApplication.

---

##### `ImportClientBranding`<sup>Required</sup> <a name="ImportClientBranding" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.ImportClientBranding"></a>

```typescript
public readonly ImportClientBranding: string;
```

- *Type:* string

[Write] workspaces:ImportClientBranding.

---

##### `ImportCustomWorkspaceImage`<sup>Required</sup> <a name="ImportCustomWorkspaceImage" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.ImportCustomWorkspaceImage"></a>

```typescript
public readonly ImportCustomWorkspaceImage: string;
```

- *Type:* string

[Write] workspaces:ImportCustomWorkspaceImage.

---

##### `ImportWorkspaceImage`<sup>Required</sup> <a name="ImportWorkspaceImage" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.ImportWorkspaceImage"></a>

```typescript
public readonly ImportWorkspaceImage: string;
```

- *Type:* string

[Write] workspaces:ImportWorkspaceImage.

---

##### `InvokeOnboardingAgent`<sup>Required</sup> <a name="InvokeOnboardingAgent" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.InvokeOnboardingAgent"></a>

```typescript
public readonly InvokeOnboardingAgent: string;
```

- *Type:* string

[Write] workspaces:InvokeOnboardingAgent.

---

##### `InvokeTroubleshootingInvestigation`<sup>Required</sup> <a name="InvokeTroubleshootingInvestigation" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.InvokeTroubleshootingInvestigation"></a>

```typescript
public readonly InvokeTroubleshootingInvestigation: string;
```

- *Type:* string

[Read] workspaces:InvokeTroubleshootingInvestigation.

---

##### `ListAccountLinks`<sup>Required</sup> <a name="ListAccountLinks" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.ListAccountLinks"></a>

```typescript
public readonly ListAccountLinks: string;
```

- *Type:* string

[List] workspaces:ListAccountLinks.

---

##### `ListAvailableManagementCidrRanges`<sup>Required</sup> <a name="ListAvailableManagementCidrRanges" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.ListAvailableManagementCidrRanges"></a>

```typescript
public readonly ListAvailableManagementCidrRanges: string;
```

- *Type:* string

[List] workspaces:ListAvailableManagementCidrRanges.

---

##### `ListTroubleshootingRecommendations`<sup>Required</sup> <a name="ListTroubleshootingRecommendations" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.ListTroubleshootingRecommendations"></a>

```typescript
public readonly ListTroubleshootingRecommendations: string;
```

- *Type:* string

[Read] workspaces:ListTroubleshootingRecommendations.

---

##### `MigrateWorkspace`<sup>Required</sup> <a name="MigrateWorkspace" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.MigrateWorkspace"></a>

```typescript
public readonly MigrateWorkspace: string;
```

- *Type:* string

[Write] workspaces:MigrateWorkspace.

---

##### `ModifyAccount`<sup>Required</sup> <a name="ModifyAccount" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifyAccount"></a>

```typescript
public readonly ModifyAccount: string;
```

- *Type:* string

[Write] workspaces:ModifyAccount.

---

##### `ModifyCertificateBasedAuthProperties`<sup>Required</sup> <a name="ModifyCertificateBasedAuthProperties" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifyCertificateBasedAuthProperties"></a>

```typescript
public readonly ModifyCertificateBasedAuthProperties: string;
```

- *Type:* string

[Write] workspaces:ModifyCertificateBasedAuthProperties.

---

##### `ModifyClientProperties`<sup>Required</sup> <a name="ModifyClientProperties" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifyClientProperties"></a>

```typescript
public readonly ModifyClientProperties: string;
```

- *Type:* string

[Write] workspaces:ModifyClientProperties.

---

##### `ModifyEndpointEncryptionMode`<sup>Required</sup> <a name="ModifyEndpointEncryptionMode" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifyEndpointEncryptionMode"></a>

```typescript
public readonly ModifyEndpointEncryptionMode: string;
```

- *Type:* string

[Write] workspaces:ModifyEndpointEncryptionMode.

---

##### `ModifySamlProperties`<sup>Required</sup> <a name="ModifySamlProperties" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifySamlProperties"></a>

```typescript
public readonly ModifySamlProperties: string;
```

- *Type:* string

[Write] workspaces:ModifySamlProperties.

---

##### `ModifySelfservicePermissions`<sup>Required</sup> <a name="ModifySelfservicePermissions" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifySelfservicePermissions"></a>

```typescript
public readonly ModifySelfservicePermissions: string;
```

- *Type:* string

[PermissionManagement] workspaces:ModifySelfservicePermissions.

---

##### `ModifyStreamingProperties`<sup>Required</sup> <a name="ModifyStreamingProperties" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifyStreamingProperties"></a>

```typescript
public readonly ModifyStreamingProperties: string;
```

- *Type:* string

[Write] workspaces:ModifyStreamingProperties.

---

##### `ModifyWorkspaceAccessProperties`<sup>Required</sup> <a name="ModifyWorkspaceAccessProperties" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifyWorkspaceAccessProperties"></a>

```typescript
public readonly ModifyWorkspaceAccessProperties: string;
```

- *Type:* string

[Write] workspaces:ModifyWorkspaceAccessProperties.

---

##### `ModifyWorkspaceCreationProperties`<sup>Required</sup> <a name="ModifyWorkspaceCreationProperties" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifyWorkspaceCreationProperties"></a>

```typescript
public readonly ModifyWorkspaceCreationProperties: string;
```

- *Type:* string

[Write] workspaces:ModifyWorkspaceCreationProperties.

---

##### `ModifyWorkspaceProperties`<sup>Required</sup> <a name="ModifyWorkspaceProperties" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifyWorkspaceProperties"></a>

```typescript
public readonly ModifyWorkspaceProperties: string;
```

- *Type:* string

[Write] workspaces:ModifyWorkspaceProperties.

---

##### `ModifyWorkspaceState`<sup>Required</sup> <a name="ModifyWorkspaceState" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.ModifyWorkspaceState"></a>

```typescript
public readonly ModifyWorkspaceState: string;
```

- *Type:* string

[Write] workspaces:ModifyWorkspaceState.

---

##### `Personalization`<sup>Required</sup> <a name="Personalization" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.Personalization"></a>

```typescript
public readonly Personalization: string;
```

- *Type:* string

[Write] workspaces:Personalization.

---

##### `RebootWorkspaces`<sup>Required</sup> <a name="RebootWorkspaces" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.RebootWorkspaces"></a>

```typescript
public readonly RebootWorkspaces: string;
```

- *Type:* string

[Write] workspaces:RebootWorkspaces.

---

##### `RebuildWorkspaces`<sup>Required</sup> <a name="RebuildWorkspaces" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.RebuildWorkspaces"></a>

```typescript
public readonly RebuildWorkspaces: string;
```

- *Type:* string

[Write] workspaces:RebuildWorkspaces.

---

##### `RegisterWorkspaceDirectory`<sup>Required</sup> <a name="RegisterWorkspaceDirectory" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.RegisterWorkspaceDirectory"></a>

```typescript
public readonly RegisterWorkspaceDirectory: string;
```

- *Type:* string

[Write] workspaces:RegisterWorkspaceDirectory.

---

##### `RejectAccountLinkInvitation`<sup>Required</sup> <a name="RejectAccountLinkInvitation" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.RejectAccountLinkInvitation"></a>

```typescript
public readonly RejectAccountLinkInvitation: string;
```

- *Type:* string

[Write] workspaces:RejectAccountLinkInvitation.

---

##### `RestoreWorkspace`<sup>Required</sup> <a name="RestoreWorkspace" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.RestoreWorkspace"></a>

```typescript
public readonly RestoreWorkspace: string;
```

- *Type:* string

[Write] workspaces:RestoreWorkspace.

---

##### `RevokeIpRules`<sup>Required</sup> <a name="RevokeIpRules" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.RevokeIpRules"></a>

```typescript
public readonly RevokeIpRules: string;
```

- *Type:* string

[Write] workspaces:RevokeIpRules.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartWorkspaces`<sup>Required</sup> <a name="StartWorkspaces" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.StartWorkspaces"></a>

```typescript
public readonly StartWorkspaces: string;
```

- *Type:* string

[Write] workspaces:StartWorkspaces.

---

##### `StartWorkspacesPool`<sup>Required</sup> <a name="StartWorkspacesPool" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.StartWorkspacesPool"></a>

```typescript
public readonly StartWorkspacesPool: string;
```

- *Type:* string

[Write] workspaces:StartWorkspacesPool.

---

##### `StopWorkspaces`<sup>Required</sup> <a name="StopWorkspaces" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.StopWorkspaces"></a>

```typescript
public readonly StopWorkspaces: string;
```

- *Type:* string

[Write] workspaces:StopWorkspaces.

---

##### `StopWorkspacesPool`<sup>Required</sup> <a name="StopWorkspacesPool" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.StopWorkspacesPool"></a>

```typescript
public readonly StopWorkspacesPool: string;
```

- *Type:* string

[Write] workspaces:StopWorkspacesPool.

---

##### `Stream`<sup>Required</sup> <a name="Stream" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.Stream"></a>

```typescript
public readonly Stream: string;
```

- *Type:* string

[Write] workspaces:Stream.

---

##### `TerminateWorkspaces`<sup>Required</sup> <a name="TerminateWorkspaces" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.TerminateWorkspaces"></a>

```typescript
public readonly TerminateWorkspaces: string;
```

- *Type:* string

[Write] workspaces:TerminateWorkspaces.

---

##### `TerminateWorkspacesPool`<sup>Required</sup> <a name="TerminateWorkspacesPool" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.TerminateWorkspacesPool"></a>

```typescript
public readonly TerminateWorkspacesPool: string;
```

- *Type:* string

[Write] workspaces:TerminateWorkspacesPool.

---

##### `TerminateWorkspacesPoolSession`<sup>Required</sup> <a name="TerminateWorkspacesPoolSession" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.TerminateWorkspacesPoolSession"></a>

```typescript
public readonly TerminateWorkspacesPoolSession: string;
```

- *Type:* string

[Write] workspaces:TerminateWorkspacesPoolSession.

---

##### `UpdateConnectClientAddIn`<sup>Required</sup> <a name="UpdateConnectClientAddIn" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.UpdateConnectClientAddIn"></a>

```typescript
public readonly UpdateConnectClientAddIn: string;
```

- *Type:* string

[Write] workspaces:UpdateConnectClientAddIn.

---

##### `UpdateConnectionAliasPermission`<sup>Required</sup> <a name="UpdateConnectionAliasPermission" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.UpdateConnectionAliasPermission"></a>

```typescript
public readonly UpdateConnectionAliasPermission: string;
```

- *Type:* string

[PermissionManagement] workspaces:UpdateConnectionAliasPermission.

---

##### `UpdateConsent`<sup>Required</sup> <a name="UpdateConsent" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.UpdateConsent"></a>

```typescript
public readonly UpdateConsent: string;
```

- *Type:* string

[Write] workspaces:UpdateConsent.

---

##### `UpdateRootClientCertificate`<sup>Required</sup> <a name="UpdateRootClientCertificate" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.UpdateRootClientCertificate"></a>

```typescript
public readonly UpdateRootClientCertificate: string;
```

- *Type:* string

[Write] workspaces:UpdateRootClientCertificate.

---

##### `UpdateRulesOfIpGroup`<sup>Required</sup> <a name="UpdateRulesOfIpGroup" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.UpdateRulesOfIpGroup"></a>

```typescript
public readonly UpdateRulesOfIpGroup: string;
```

- *Type:* string

[Write] workspaces:UpdateRulesOfIpGroup.

---

##### `UpdateWorkspaceBundle`<sup>Required</sup> <a name="UpdateWorkspaceBundle" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.UpdateWorkspaceBundle"></a>

```typescript
public readonly UpdateWorkspaceBundle: string;
```

- *Type:* string

[Write] workspaces:UpdateWorkspaceBundle.

---

##### `UpdateWorkspaceImagePermission`<sup>Required</sup> <a name="UpdateWorkspaceImagePermission" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.UpdateWorkspaceImagePermission"></a>

```typescript
public readonly UpdateWorkspaceImagePermission: string;
```

- *Type:* string

[PermissionManagement] workspaces:UpdateWorkspaceImagePermission.

---

##### `UpdateWorkspacesPool`<sup>Required</sup> <a name="UpdateWorkspacesPool" id="@cdk_utils/iam.workspaces.WorkSpacesActions.property.UpdateWorkspacesPool"></a>

```typescript
public readonly UpdateWorkspacesPool: string;
```

- *Type:* string

[Write] workspaces:UpdateWorkspacesPool.

---

### WorkSpacesConditions <a name="WorkSpacesConditions" id="@cdk_utils/iam.workspaces.WorkSpacesConditions"></a>

Condition key constants and builders for workspaces.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

new workspaces.WorkSpacesConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.userId">userId</a></code> | Generates a condition block for `workspaces:userId`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.requestTag"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.resourceTag"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.tagKeys"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `userId` <a name="userId" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.userId"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesConditions.userId(value: string)
```

Generates a condition block for `workspaces:userId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.userId.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.property.AssociateWorkspaceApplicationConditionKeys">AssociateWorkspaceApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateWorkspaceApplication action. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.property.CreateConnectionAliasConditionKeys">CreateConnectionAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnectionAlias action. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.property.CreateIpGroupConditionKeys">CreateIpGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIpGroup action. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.property.CreateTagsConditionKeys">CreateTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTags action. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.property.DeleteTagsConditionKeys">DeleteTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTags action. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.property.DeployWorkspaceApplicationsConditionKeys">DeployWorkspaceApplicationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeployWorkspaceApplications action. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.property.DescribeApplicationAssociationsConditionKeys">DescribeApplicationAssociationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeApplicationAssociations action. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.property.DescribeBundleAssociationsConditionKeys">DescribeBundleAssociationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeBundleAssociations action. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.property.DescribeImageAssociationsConditionKeys">DescribeImageAssociationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeImageAssociations action. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.property.DescribeWorkspaceAssociationsConditionKeys">DescribeWorkspaceAssociationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeWorkspaceAssociations action. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.property.DisassociateWorkspaceApplicationConditionKeys">DisassociateWorkspaceApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateWorkspaceApplication action. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.property.ImportCustomWorkspaceImageConditionKeys">ImportCustomWorkspaceImageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportCustomWorkspaceImage action. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.property.ImportWorkspaceImageConditionKeys">ImportWorkspaceImageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportWorkspaceImage action. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.property.RegisterWorkspaceDirectoryConditionKeys">RegisterWorkspaceDirectoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterWorkspaceDirectory action. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.property.StreamConditionKeys">StreamConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Stream action. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesConditions.property.USER_ID">USER_ID</a></code> | <code>string</code> | Condition key: workspaces:userId (String). |

---

##### `AssociateWorkspaceApplicationConditionKeys`<sup>Required</sup> <a name="AssociateWorkspaceApplicationConditionKeys" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.property.AssociateWorkspaceApplicationConditionKeys"></a>

```typescript
public readonly AssociateWorkspaceApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateWorkspaceApplication action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateConnectionAliasConditionKeys`<sup>Required</sup> <a name="CreateConnectionAliasConditionKeys" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.property.CreateConnectionAliasConditionKeys"></a>

```typescript
public readonly CreateConnectionAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnectionAlias action.

---

##### `CreateIpGroupConditionKeys`<sup>Required</sup> <a name="CreateIpGroupConditionKeys" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.property.CreateIpGroupConditionKeys"></a>

```typescript
public readonly CreateIpGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIpGroup action.

---

##### `CreateTagsConditionKeys`<sup>Required</sup> <a name="CreateTagsConditionKeys" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.property.CreateTagsConditionKeys"></a>

```typescript
public readonly CreateTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTags action.

---

##### `DeleteTagsConditionKeys`<sup>Required</sup> <a name="DeleteTagsConditionKeys" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.property.DeleteTagsConditionKeys"></a>

```typescript
public readonly DeleteTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTags action.

---

##### `DeployWorkspaceApplicationsConditionKeys`<sup>Required</sup> <a name="DeployWorkspaceApplicationsConditionKeys" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.property.DeployWorkspaceApplicationsConditionKeys"></a>

```typescript
public readonly DeployWorkspaceApplicationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeployWorkspaceApplications action.

---

##### `DescribeApplicationAssociationsConditionKeys`<sup>Required</sup> <a name="DescribeApplicationAssociationsConditionKeys" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.property.DescribeApplicationAssociationsConditionKeys"></a>

```typescript
public readonly DescribeApplicationAssociationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeApplicationAssociations action.

---

##### `DescribeBundleAssociationsConditionKeys`<sup>Required</sup> <a name="DescribeBundleAssociationsConditionKeys" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.property.DescribeBundleAssociationsConditionKeys"></a>

```typescript
public readonly DescribeBundleAssociationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeBundleAssociations action.

---

##### `DescribeImageAssociationsConditionKeys`<sup>Required</sup> <a name="DescribeImageAssociationsConditionKeys" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.property.DescribeImageAssociationsConditionKeys"></a>

```typescript
public readonly DescribeImageAssociationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeImageAssociations action.

---

##### `DescribeWorkspaceAssociationsConditionKeys`<sup>Required</sup> <a name="DescribeWorkspaceAssociationsConditionKeys" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.property.DescribeWorkspaceAssociationsConditionKeys"></a>

```typescript
public readonly DescribeWorkspaceAssociationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeWorkspaceAssociations action.

---

##### `DisassociateWorkspaceApplicationConditionKeys`<sup>Required</sup> <a name="DisassociateWorkspaceApplicationConditionKeys" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.property.DisassociateWorkspaceApplicationConditionKeys"></a>

```typescript
public readonly DisassociateWorkspaceApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateWorkspaceApplication action.

---

##### `ImportCustomWorkspaceImageConditionKeys`<sup>Required</sup> <a name="ImportCustomWorkspaceImageConditionKeys" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.property.ImportCustomWorkspaceImageConditionKeys"></a>

```typescript
public readonly ImportCustomWorkspaceImageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportCustomWorkspaceImage action.

---

##### `ImportWorkspaceImageConditionKeys`<sup>Required</sup> <a name="ImportWorkspaceImageConditionKeys" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.property.ImportWorkspaceImageConditionKeys"></a>

```typescript
public readonly ImportWorkspaceImageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportWorkspaceImage action.

---

##### `RegisterWorkspaceDirectoryConditionKeys`<sup>Required</sup> <a name="RegisterWorkspaceDirectoryConditionKeys" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.property.RegisterWorkspaceDirectoryConditionKeys"></a>

```typescript
public readonly RegisterWorkspaceDirectoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterWorkspaceDirectory action.

---

##### `StreamConditionKeys`<sup>Required</sup> <a name="StreamConditionKeys" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.property.StreamConditionKeys"></a>

```typescript
public readonly StreamConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Stream action.

---

##### `USER_ID`<sup>Required</sup> <a name="USER_ID" id="@cdk_utils/iam.workspaces.WorkSpacesConditions.property.USER_ID"></a>

```typescript
public readonly USER_ID: string;
```

- *Type:* string

Condition key: workspaces:userId (String).

---

### WorkSpacesOperations <a name="WorkSpacesOperations" id="@cdk_utils/iam.workspaces.WorkSpacesOperations"></a>

API operation to required IAM actions mapping for workspaces.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

new workspaces.WorkSpacesOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.AcceptAccountLinkInvitation">AcceptAccountLinkInvitation</a></code> | <code>string[]</code> | IAM actions required for the AcceptAccountLinkInvitation API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.AssociateConnectionAlias">AssociateConnectionAlias</a></code> | <code>string[]</code> | IAM actions required for the AssociateConnectionAlias API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.AssociateIpGroups">AssociateIpGroups</a></code> | <code>string[]</code> | IAM actions required for the AssociateIpGroups API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.AssociateWorkspaceApplication">AssociateWorkspaceApplication</a></code> | <code>string[]</code> | IAM actions required for the AssociateWorkspaceApplication API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.AuthorizeIpRules">AuthorizeIpRules</a></code> | <code>string[]</code> | IAM actions required for the AuthorizeIpRules API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CopyWorkspaceImage">CopyWorkspaceImage</a></code> | <code>string[]</code> | IAM actions required for the CopyWorkspaceImage API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateAccountLinkInvitation">CreateAccountLinkInvitation</a></code> | <code>string[]</code> | IAM actions required for the CreateAccountLinkInvitation API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateConnectClientAddIn">CreateConnectClientAddIn</a></code> | <code>string[]</code> | IAM actions required for the CreateConnectClientAddIn API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateConnectionAlias">CreateConnectionAlias</a></code> | <code>string[]</code> | IAM actions required for the CreateConnectionAlias API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateIpGroup">CreateIpGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateIpGroup API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateStandbyWorkspaces">CreateStandbyWorkspaces</a></code> | <code>string[]</code> | IAM actions required for the CreateStandbyWorkspaces API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateTags">CreateTags</a></code> | <code>string[]</code> | IAM actions required for the CreateTags API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateUpdatedWorkspaceImage">CreateUpdatedWorkspaceImage</a></code> | <code>string[]</code> | IAM actions required for the CreateUpdatedWorkspaceImage API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateWorkspaceBundle">CreateWorkspaceBundle</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkspaceBundle API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateWorkspaceImage">CreateWorkspaceImage</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkspaceImage API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateWorkspaces">CreateWorkspaces</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkspaces API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateWorkspacesPool">CreateWorkspacesPool</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkspacesPool API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeleteAccountLinkInvitation">DeleteAccountLinkInvitation</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccountLinkInvitation API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeleteClientBranding">DeleteClientBranding</a></code> | <code>string[]</code> | IAM actions required for the DeleteClientBranding API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeleteConnectClientAddIn">DeleteConnectClientAddIn</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnectClientAddIn API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeleteConnectionAlias">DeleteConnectionAlias</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnectionAlias API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeleteIpGroup">DeleteIpGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteIpGroup API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeleteTags">DeleteTags</a></code> | <code>string[]</code> | IAM actions required for the DeleteTags API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeleteWorkspaceBundle">DeleteWorkspaceBundle</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkspaceBundle API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeleteWorkspaceImage">DeleteWorkspaceImage</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkspaceImage API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeployWorkspaceApplications">DeployWorkspaceApplications</a></code> | <code>string[]</code> | IAM actions required for the DeployWorkspaceApplications API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeregisterWorkspaceDirectory">DeregisterWorkspaceDirectory</a></code> | <code>string[]</code> | IAM actions required for the DeregisterWorkspaceDirectory API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeAccount">DescribeAccount</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccount API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeAccountModifications">DescribeAccountModifications</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountModifications API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeApplicationAssociations">DescribeApplicationAssociations</a></code> | <code>string[]</code> | IAM actions required for the DescribeApplicationAssociations API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeApplications">DescribeApplications</a></code> | <code>string[]</code> | IAM actions required for the DescribeApplications API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeBundleAssociations">DescribeBundleAssociations</a></code> | <code>string[]</code> | IAM actions required for the DescribeBundleAssociations API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeClientBranding">DescribeClientBranding</a></code> | <code>string[]</code> | IAM actions required for the DescribeClientBranding API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeClientProperties">DescribeClientProperties</a></code> | <code>string[]</code> | IAM actions required for the DescribeClientProperties API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeConnectClientAddIns">DescribeConnectClientAddIns</a></code> | <code>string[]</code> | IAM actions required for the DescribeConnectClientAddIns API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeConnectionAliases">DescribeConnectionAliases</a></code> | <code>string[]</code> | IAM actions required for the DescribeConnectionAliases API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeConnectionAliasPermissions">DescribeConnectionAliasPermissions</a></code> | <code>string[]</code> | IAM actions required for the DescribeConnectionAliasPermissions API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeCustomWorkspaceImageImport">DescribeCustomWorkspaceImageImport</a></code> | <code>string[]</code> | IAM actions required for the DescribeCustomWorkspaceImageImport API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeImageAssociations">DescribeImageAssociations</a></code> | <code>string[]</code> | IAM actions required for the DescribeImageAssociations API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeIpGroups">DescribeIpGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeIpGroups API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeTags">DescribeTags</a></code> | <code>string[]</code> | IAM actions required for the DescribeTags API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspaceAssociations">DescribeWorkspaceAssociations</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkspaceAssociations API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspaceBundles">DescribeWorkspaceBundles</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkspaceBundles API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspaceDirectories">DescribeWorkspaceDirectories</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkspaceDirectories API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspaceImagePermissions">DescribeWorkspaceImagePermissions</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkspaceImagePermissions API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspaceImages">DescribeWorkspaceImages</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkspaceImages API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspaces">DescribeWorkspaces</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkspaces API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspacesConnectionStatus">DescribeWorkspacesConnectionStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkspacesConnectionStatus API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspaceSnapshots">DescribeWorkspaceSnapshots</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkspaceSnapshots API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspacesPools">DescribeWorkspacesPools</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkspacesPools API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspacesPoolSessions">DescribeWorkspacesPoolSessions</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkspacesPoolSessions API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DisassociateConnectionAlias">DisassociateConnectionAlias</a></code> | <code>string[]</code> | IAM actions required for the DisassociateConnectionAlias API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DisassociateIpGroups">DisassociateIpGroups</a></code> | <code>string[]</code> | IAM actions required for the DisassociateIpGroups API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DisassociateWorkspaceApplication">DisassociateWorkspaceApplication</a></code> | <code>string[]</code> | IAM actions required for the DisassociateWorkspaceApplication API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ImportClientBranding">ImportClientBranding</a></code> | <code>string[]</code> | IAM actions required for the ImportClientBranding API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ImportCustomWorkspaceImage">ImportCustomWorkspaceImage</a></code> | <code>string[]</code> | IAM actions required for the ImportCustomWorkspaceImage API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ImportWorkspaceImage">ImportWorkspaceImage</a></code> | <code>string[]</code> | IAM actions required for the ImportWorkspaceImage API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ListAccountLinks">ListAccountLinks</a></code> | <code>string[]</code> | IAM actions required for the ListAccountLinks API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ListAvailableManagementCidrRanges">ListAvailableManagementCidrRanges</a></code> | <code>string[]</code> | IAM actions required for the ListAvailableManagementCidrRanges API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.MigrateWorkspace">MigrateWorkspace</a></code> | <code>string[]</code> | IAM actions required for the MigrateWorkspace API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifyAccount">ModifyAccount</a></code> | <code>string[]</code> | IAM actions required for the ModifyAccount API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifyCertificateBasedAuthProperties">ModifyCertificateBasedAuthProperties</a></code> | <code>string[]</code> | IAM actions required for the ModifyCertificateBasedAuthProperties API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifyClientProperties">ModifyClientProperties</a></code> | <code>string[]</code> | IAM actions required for the ModifyClientProperties API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifyEndpointEncryptionMode">ModifyEndpointEncryptionMode</a></code> | <code>string[]</code> | IAM actions required for the ModifyEndpointEncryptionMode API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifySamlProperties">ModifySamlProperties</a></code> | <code>string[]</code> | IAM actions required for the ModifySamlProperties API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifySelfservicePermissions">ModifySelfservicePermissions</a></code> | <code>string[]</code> | IAM actions required for the ModifySelfservicePermissions API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifyStreamingProperties">ModifyStreamingProperties</a></code> | <code>string[]</code> | IAM actions required for the ModifyStreamingProperties API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifyWorkspaceAccessProperties">ModifyWorkspaceAccessProperties</a></code> | <code>string[]</code> | IAM actions required for the ModifyWorkspaceAccessProperties API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifyWorkspaceCreationProperties">ModifyWorkspaceCreationProperties</a></code> | <code>string[]</code> | IAM actions required for the ModifyWorkspaceCreationProperties API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifyWorkspaceProperties">ModifyWorkspaceProperties</a></code> | <code>string[]</code> | IAM actions required for the ModifyWorkspaceProperties API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifyWorkspaceState">ModifyWorkspaceState</a></code> | <code>string[]</code> | IAM actions required for the ModifyWorkspaceState API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.opGetAccountLink">opGetAccountLink</a></code> | <code>string[]</code> | IAM actions required for the GetAccountLink API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.RebootWorkspaces">RebootWorkspaces</a></code> | <code>string[]</code> | IAM actions required for the RebootWorkspaces API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.RebuildWorkspaces">RebuildWorkspaces</a></code> | <code>string[]</code> | IAM actions required for the RebuildWorkspaces API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.RegisterWorkspaceDirectory">RegisterWorkspaceDirectory</a></code> | <code>string[]</code> | IAM actions required for the RegisterWorkspaceDirectory API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.RejectAccountLinkInvitation">RejectAccountLinkInvitation</a></code> | <code>string[]</code> | IAM actions required for the RejectAccountLinkInvitation API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.RestoreWorkspace">RestoreWorkspace</a></code> | <code>string[]</code> | IAM actions required for the RestoreWorkspace API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.RevokeIpRules">RevokeIpRules</a></code> | <code>string[]</code> | IAM actions required for the RevokeIpRules API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.StartWorkspaces">StartWorkspaces</a></code> | <code>string[]</code> | IAM actions required for the StartWorkspaces API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.StartWorkspacesPool">StartWorkspacesPool</a></code> | <code>string[]</code> | IAM actions required for the StartWorkspacesPool API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.StopWorkspaces">StopWorkspaces</a></code> | <code>string[]</code> | IAM actions required for the StopWorkspaces API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.StopWorkspacesPool">StopWorkspacesPool</a></code> | <code>string[]</code> | IAM actions required for the StopWorkspacesPool API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.TerminateWorkspaces">TerminateWorkspaces</a></code> | <code>string[]</code> | IAM actions required for the TerminateWorkspaces API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.TerminateWorkspacesPool">TerminateWorkspacesPool</a></code> | <code>string[]</code> | IAM actions required for the TerminateWorkspacesPool API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.TerminateWorkspacesPoolSession">TerminateWorkspacesPoolSession</a></code> | <code>string[]</code> | IAM actions required for the TerminateWorkspacesPoolSession API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.UpdateConnectClientAddIn">UpdateConnectClientAddIn</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnectClientAddIn API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.UpdateConnectionAliasPermission">UpdateConnectionAliasPermission</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnectionAliasPermission API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.UpdateRulesOfIpGroup">UpdateRulesOfIpGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateRulesOfIpGroup API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.UpdateWorkspaceBundle">UpdateWorkspaceBundle</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkspaceBundle API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.UpdateWorkspaceImagePermission">UpdateWorkspaceImagePermission</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkspaceImagePermission API call. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesOperations.property.UpdateWorkspacesPool">UpdateWorkspacesPool</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkspacesPool API call. |

---

##### `AcceptAccountLinkInvitation`<sup>Required</sup> <a name="AcceptAccountLinkInvitation" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.AcceptAccountLinkInvitation"></a>

```typescript
public readonly AcceptAccountLinkInvitation: string[];
```

- *Type:* string[]

IAM actions required for the AcceptAccountLinkInvitation API call.

---

##### `AssociateConnectionAlias`<sup>Required</sup> <a name="AssociateConnectionAlias" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.AssociateConnectionAlias"></a>

```typescript
public readonly AssociateConnectionAlias: string[];
```

- *Type:* string[]

IAM actions required for the AssociateConnectionAlias API call.

---

##### `AssociateIpGroups`<sup>Required</sup> <a name="AssociateIpGroups" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.AssociateIpGroups"></a>

```typescript
public readonly AssociateIpGroups: string[];
```

- *Type:* string[]

IAM actions required for the AssociateIpGroups API call.

---

##### `AssociateWorkspaceApplication`<sup>Required</sup> <a name="AssociateWorkspaceApplication" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.AssociateWorkspaceApplication"></a>

```typescript
public readonly AssociateWorkspaceApplication: string[];
```

- *Type:* string[]

IAM actions required for the AssociateWorkspaceApplication API call.

---

##### `AuthorizeIpRules`<sup>Required</sup> <a name="AuthorizeIpRules" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.AuthorizeIpRules"></a>

```typescript
public readonly AuthorizeIpRules: string[];
```

- *Type:* string[]

IAM actions required for the AuthorizeIpRules API call.

---

##### `CopyWorkspaceImage`<sup>Required</sup> <a name="CopyWorkspaceImage" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CopyWorkspaceImage"></a>

```typescript
public readonly CopyWorkspaceImage: string[];
```

- *Type:* string[]

IAM actions required for the CopyWorkspaceImage API call.

---

##### `CreateAccountLinkInvitation`<sup>Required</sup> <a name="CreateAccountLinkInvitation" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateAccountLinkInvitation"></a>

```typescript
public readonly CreateAccountLinkInvitation: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccountLinkInvitation API call.

---

##### `CreateConnectClientAddIn`<sup>Required</sup> <a name="CreateConnectClientAddIn" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateConnectClientAddIn"></a>

```typescript
public readonly CreateConnectClientAddIn: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnectClientAddIn API call.

---

##### `CreateConnectionAlias`<sup>Required</sup> <a name="CreateConnectionAlias" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateConnectionAlias"></a>

```typescript
public readonly CreateConnectionAlias: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnectionAlias API call.

---

##### `CreateIpGroup`<sup>Required</sup> <a name="CreateIpGroup" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateIpGroup"></a>

```typescript
public readonly CreateIpGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateIpGroup API call.

---

##### `CreateStandbyWorkspaces`<sup>Required</sup> <a name="CreateStandbyWorkspaces" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateStandbyWorkspaces"></a>

```typescript
public readonly CreateStandbyWorkspaces: string[];
```

- *Type:* string[]

IAM actions required for the CreateStandbyWorkspaces API call.

---

##### `CreateTags`<sup>Required</sup> <a name="CreateTags" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateTags"></a>

```typescript
public readonly CreateTags: string[];
```

- *Type:* string[]

IAM actions required for the CreateTags API call.

---

##### `CreateUpdatedWorkspaceImage`<sup>Required</sup> <a name="CreateUpdatedWorkspaceImage" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateUpdatedWorkspaceImage"></a>

```typescript
public readonly CreateUpdatedWorkspaceImage: string[];
```

- *Type:* string[]

IAM actions required for the CreateUpdatedWorkspaceImage API call.

---

##### `CreateWorkspaceBundle`<sup>Required</sup> <a name="CreateWorkspaceBundle" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateWorkspaceBundle"></a>

```typescript
public readonly CreateWorkspaceBundle: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkspaceBundle API call.

---

##### `CreateWorkspaceImage`<sup>Required</sup> <a name="CreateWorkspaceImage" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateWorkspaceImage"></a>

```typescript
public readonly CreateWorkspaceImage: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkspaceImage API call.

---

##### `CreateWorkspaces`<sup>Required</sup> <a name="CreateWorkspaces" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateWorkspaces"></a>

```typescript
public readonly CreateWorkspaces: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkspaces API call.

---

##### `CreateWorkspacesPool`<sup>Required</sup> <a name="CreateWorkspacesPool" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.CreateWorkspacesPool"></a>

```typescript
public readonly CreateWorkspacesPool: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkspacesPool API call.

---

##### `DeleteAccountLinkInvitation`<sup>Required</sup> <a name="DeleteAccountLinkInvitation" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeleteAccountLinkInvitation"></a>

```typescript
public readonly DeleteAccountLinkInvitation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccountLinkInvitation API call.

---

##### `DeleteClientBranding`<sup>Required</sup> <a name="DeleteClientBranding" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeleteClientBranding"></a>

```typescript
public readonly DeleteClientBranding: string[];
```

- *Type:* string[]

IAM actions required for the DeleteClientBranding API call.

---

##### `DeleteConnectClientAddIn`<sup>Required</sup> <a name="DeleteConnectClientAddIn" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeleteConnectClientAddIn"></a>

```typescript
public readonly DeleteConnectClientAddIn: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnectClientAddIn API call.

---

##### `DeleteConnectionAlias`<sup>Required</sup> <a name="DeleteConnectionAlias" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeleteConnectionAlias"></a>

```typescript
public readonly DeleteConnectionAlias: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnectionAlias API call.

---

##### `DeleteIpGroup`<sup>Required</sup> <a name="DeleteIpGroup" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeleteIpGroup"></a>

```typescript
public readonly DeleteIpGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIpGroup API call.

---

##### `DeleteTags`<sup>Required</sup> <a name="DeleteTags" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeleteTags"></a>

```typescript
public readonly DeleteTags: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTags API call.

---

##### `DeleteWorkspaceBundle`<sup>Required</sup> <a name="DeleteWorkspaceBundle" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeleteWorkspaceBundle"></a>

```typescript
public readonly DeleteWorkspaceBundle: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkspaceBundle API call.

---

##### `DeleteWorkspaceImage`<sup>Required</sup> <a name="DeleteWorkspaceImage" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeleteWorkspaceImage"></a>

```typescript
public readonly DeleteWorkspaceImage: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkspaceImage API call.

---

##### `DeployWorkspaceApplications`<sup>Required</sup> <a name="DeployWorkspaceApplications" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeployWorkspaceApplications"></a>

```typescript
public readonly DeployWorkspaceApplications: string[];
```

- *Type:* string[]

IAM actions required for the DeployWorkspaceApplications API call.

---

##### `DeregisterWorkspaceDirectory`<sup>Required</sup> <a name="DeregisterWorkspaceDirectory" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DeregisterWorkspaceDirectory"></a>

```typescript
public readonly DeregisterWorkspaceDirectory: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterWorkspaceDirectory API call.

---

##### `DescribeAccount`<sup>Required</sup> <a name="DescribeAccount" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeAccount"></a>

```typescript
public readonly DescribeAccount: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccount API call.

---

##### `DescribeAccountModifications`<sup>Required</sup> <a name="DescribeAccountModifications" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeAccountModifications"></a>

```typescript
public readonly DescribeAccountModifications: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountModifications API call.

---

##### `DescribeApplicationAssociations`<sup>Required</sup> <a name="DescribeApplicationAssociations" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeApplicationAssociations"></a>

```typescript
public readonly DescribeApplicationAssociations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApplicationAssociations API call.

---

##### `DescribeApplications`<sup>Required</sup> <a name="DescribeApplications" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeApplications"></a>

```typescript
public readonly DescribeApplications: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApplications API call.

---

##### `DescribeBundleAssociations`<sup>Required</sup> <a name="DescribeBundleAssociations" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeBundleAssociations"></a>

```typescript
public readonly DescribeBundleAssociations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBundleAssociations API call.

---

##### `DescribeClientBranding`<sup>Required</sup> <a name="DescribeClientBranding" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeClientBranding"></a>

```typescript
public readonly DescribeClientBranding: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClientBranding API call.

---

##### `DescribeClientProperties`<sup>Required</sup> <a name="DescribeClientProperties" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeClientProperties"></a>

```typescript
public readonly DescribeClientProperties: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClientProperties API call.

---

##### `DescribeConnectClientAddIns`<sup>Required</sup> <a name="DescribeConnectClientAddIns" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeConnectClientAddIns"></a>

```typescript
public readonly DescribeConnectClientAddIns: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConnectClientAddIns API call.

---

##### `DescribeConnectionAliases`<sup>Required</sup> <a name="DescribeConnectionAliases" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeConnectionAliases"></a>

```typescript
public readonly DescribeConnectionAliases: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConnectionAliases API call.

---

##### `DescribeConnectionAliasPermissions`<sup>Required</sup> <a name="DescribeConnectionAliasPermissions" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeConnectionAliasPermissions"></a>

```typescript
public readonly DescribeConnectionAliasPermissions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConnectionAliasPermissions API call.

---

##### `DescribeCustomWorkspaceImageImport`<sup>Required</sup> <a name="DescribeCustomWorkspaceImageImport" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeCustomWorkspaceImageImport"></a>

```typescript
public readonly DescribeCustomWorkspaceImageImport: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCustomWorkspaceImageImport API call.

---

##### `DescribeImageAssociations`<sup>Required</sup> <a name="DescribeImageAssociations" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeImageAssociations"></a>

```typescript
public readonly DescribeImageAssociations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeImageAssociations API call.

---

##### `DescribeIpGroups`<sup>Required</sup> <a name="DescribeIpGroups" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeIpGroups"></a>

```typescript
public readonly DescribeIpGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeIpGroups API call.

---

##### `DescribeTags`<sup>Required</sup> <a name="DescribeTags" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeTags"></a>

```typescript
public readonly DescribeTags: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTags API call.

---

##### `DescribeWorkspaceAssociations`<sup>Required</sup> <a name="DescribeWorkspaceAssociations" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspaceAssociations"></a>

```typescript
public readonly DescribeWorkspaceAssociations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkspaceAssociations API call.

---

##### `DescribeWorkspaceBundles`<sup>Required</sup> <a name="DescribeWorkspaceBundles" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspaceBundles"></a>

```typescript
public readonly DescribeWorkspaceBundles: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkspaceBundles API call.

---

##### `DescribeWorkspaceDirectories`<sup>Required</sup> <a name="DescribeWorkspaceDirectories" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspaceDirectories"></a>

```typescript
public readonly DescribeWorkspaceDirectories: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkspaceDirectories API call.

---

##### `DescribeWorkspaceImagePermissions`<sup>Required</sup> <a name="DescribeWorkspaceImagePermissions" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspaceImagePermissions"></a>

```typescript
public readonly DescribeWorkspaceImagePermissions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkspaceImagePermissions API call.

---

##### `DescribeWorkspaceImages`<sup>Required</sup> <a name="DescribeWorkspaceImages" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspaceImages"></a>

```typescript
public readonly DescribeWorkspaceImages: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkspaceImages API call.

---

##### `DescribeWorkspaces`<sup>Required</sup> <a name="DescribeWorkspaces" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspaces"></a>

```typescript
public readonly DescribeWorkspaces: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkspaces API call.

---

##### `DescribeWorkspacesConnectionStatus`<sup>Required</sup> <a name="DescribeWorkspacesConnectionStatus" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspacesConnectionStatus"></a>

```typescript
public readonly DescribeWorkspacesConnectionStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkspacesConnectionStatus API call.

---

##### `DescribeWorkspaceSnapshots`<sup>Required</sup> <a name="DescribeWorkspaceSnapshots" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspaceSnapshots"></a>

```typescript
public readonly DescribeWorkspaceSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkspaceSnapshots API call.

---

##### `DescribeWorkspacesPools`<sup>Required</sup> <a name="DescribeWorkspacesPools" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspacesPools"></a>

```typescript
public readonly DescribeWorkspacesPools: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkspacesPools API call.

---

##### `DescribeWorkspacesPoolSessions`<sup>Required</sup> <a name="DescribeWorkspacesPoolSessions" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DescribeWorkspacesPoolSessions"></a>

```typescript
public readonly DescribeWorkspacesPoolSessions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkspacesPoolSessions API call.

---

##### `DisassociateConnectionAlias`<sup>Required</sup> <a name="DisassociateConnectionAlias" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DisassociateConnectionAlias"></a>

```typescript
public readonly DisassociateConnectionAlias: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateConnectionAlias API call.

---

##### `DisassociateIpGroups`<sup>Required</sup> <a name="DisassociateIpGroups" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DisassociateIpGroups"></a>

```typescript
public readonly DisassociateIpGroups: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateIpGroups API call.

---

##### `DisassociateWorkspaceApplication`<sup>Required</sup> <a name="DisassociateWorkspaceApplication" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.DisassociateWorkspaceApplication"></a>

```typescript
public readonly DisassociateWorkspaceApplication: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateWorkspaceApplication API call.

---

##### `ImportClientBranding`<sup>Required</sup> <a name="ImportClientBranding" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ImportClientBranding"></a>

```typescript
public readonly ImportClientBranding: string[];
```

- *Type:* string[]

IAM actions required for the ImportClientBranding API call.

---

##### `ImportCustomWorkspaceImage`<sup>Required</sup> <a name="ImportCustomWorkspaceImage" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ImportCustomWorkspaceImage"></a>

```typescript
public readonly ImportCustomWorkspaceImage: string[];
```

- *Type:* string[]

IAM actions required for the ImportCustomWorkspaceImage API call.

---

##### `ImportWorkspaceImage`<sup>Required</sup> <a name="ImportWorkspaceImage" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ImportWorkspaceImage"></a>

```typescript
public readonly ImportWorkspaceImage: string[];
```

- *Type:* string[]

IAM actions required for the ImportWorkspaceImage API call.

---

##### `ListAccountLinks`<sup>Required</sup> <a name="ListAccountLinks" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ListAccountLinks"></a>

```typescript
public readonly ListAccountLinks: string[];
```

- *Type:* string[]

IAM actions required for the ListAccountLinks API call.

---

##### `ListAvailableManagementCidrRanges`<sup>Required</sup> <a name="ListAvailableManagementCidrRanges" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ListAvailableManagementCidrRanges"></a>

```typescript
public readonly ListAvailableManagementCidrRanges: string[];
```

- *Type:* string[]

IAM actions required for the ListAvailableManagementCidrRanges API call.

---

##### `MigrateWorkspace`<sup>Required</sup> <a name="MigrateWorkspace" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.MigrateWorkspace"></a>

```typescript
public readonly MigrateWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the MigrateWorkspace API call.

---

##### `ModifyAccount`<sup>Required</sup> <a name="ModifyAccount" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifyAccount"></a>

```typescript
public readonly ModifyAccount: string[];
```

- *Type:* string[]

IAM actions required for the ModifyAccount API call.

---

##### `ModifyCertificateBasedAuthProperties`<sup>Required</sup> <a name="ModifyCertificateBasedAuthProperties" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifyCertificateBasedAuthProperties"></a>

```typescript
public readonly ModifyCertificateBasedAuthProperties: string[];
```

- *Type:* string[]

IAM actions required for the ModifyCertificateBasedAuthProperties API call.

---

##### `ModifyClientProperties`<sup>Required</sup> <a name="ModifyClientProperties" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifyClientProperties"></a>

```typescript
public readonly ModifyClientProperties: string[];
```

- *Type:* string[]

IAM actions required for the ModifyClientProperties API call.

---

##### `ModifyEndpointEncryptionMode`<sup>Required</sup> <a name="ModifyEndpointEncryptionMode" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifyEndpointEncryptionMode"></a>

```typescript
public readonly ModifyEndpointEncryptionMode: string[];
```

- *Type:* string[]

IAM actions required for the ModifyEndpointEncryptionMode API call.

---

##### `ModifySamlProperties`<sup>Required</sup> <a name="ModifySamlProperties" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifySamlProperties"></a>

```typescript
public readonly ModifySamlProperties: string[];
```

- *Type:* string[]

IAM actions required for the ModifySamlProperties API call.

---

##### `ModifySelfservicePermissions`<sup>Required</sup> <a name="ModifySelfservicePermissions" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifySelfservicePermissions"></a>

```typescript
public readonly ModifySelfservicePermissions: string[];
```

- *Type:* string[]

IAM actions required for the ModifySelfservicePermissions API call.

---

##### `ModifyStreamingProperties`<sup>Required</sup> <a name="ModifyStreamingProperties" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifyStreamingProperties"></a>

```typescript
public readonly ModifyStreamingProperties: string[];
```

- *Type:* string[]

IAM actions required for the ModifyStreamingProperties API call.

---

##### `ModifyWorkspaceAccessProperties`<sup>Required</sup> <a name="ModifyWorkspaceAccessProperties" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifyWorkspaceAccessProperties"></a>

```typescript
public readonly ModifyWorkspaceAccessProperties: string[];
```

- *Type:* string[]

IAM actions required for the ModifyWorkspaceAccessProperties API call.

---

##### `ModifyWorkspaceCreationProperties`<sup>Required</sup> <a name="ModifyWorkspaceCreationProperties" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifyWorkspaceCreationProperties"></a>

```typescript
public readonly ModifyWorkspaceCreationProperties: string[];
```

- *Type:* string[]

IAM actions required for the ModifyWorkspaceCreationProperties API call.

---

##### `ModifyWorkspaceProperties`<sup>Required</sup> <a name="ModifyWorkspaceProperties" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifyWorkspaceProperties"></a>

```typescript
public readonly ModifyWorkspaceProperties: string[];
```

- *Type:* string[]

IAM actions required for the ModifyWorkspaceProperties API call.

---

##### `ModifyWorkspaceState`<sup>Required</sup> <a name="ModifyWorkspaceState" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.ModifyWorkspaceState"></a>

```typescript
public readonly ModifyWorkspaceState: string[];
```

- *Type:* string[]

IAM actions required for the ModifyWorkspaceState API call.

---

##### `opGetAccountLink`<sup>Required</sup> <a name="opGetAccountLink" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.opGetAccountLink"></a>

```typescript
public readonly opGetAccountLink: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountLink API call.

---

##### `RebootWorkspaces`<sup>Required</sup> <a name="RebootWorkspaces" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.RebootWorkspaces"></a>

```typescript
public readonly RebootWorkspaces: string[];
```

- *Type:* string[]

IAM actions required for the RebootWorkspaces API call.

---

##### `RebuildWorkspaces`<sup>Required</sup> <a name="RebuildWorkspaces" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.RebuildWorkspaces"></a>

```typescript
public readonly RebuildWorkspaces: string[];
```

- *Type:* string[]

IAM actions required for the RebuildWorkspaces API call.

---

##### `RegisterWorkspaceDirectory`<sup>Required</sup> <a name="RegisterWorkspaceDirectory" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.RegisterWorkspaceDirectory"></a>

```typescript
public readonly RegisterWorkspaceDirectory: string[];
```

- *Type:* string[]

IAM actions required for the RegisterWorkspaceDirectory API call.

---

##### `RejectAccountLinkInvitation`<sup>Required</sup> <a name="RejectAccountLinkInvitation" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.RejectAccountLinkInvitation"></a>

```typescript
public readonly RejectAccountLinkInvitation: string[];
```

- *Type:* string[]

IAM actions required for the RejectAccountLinkInvitation API call.

---

##### `RestoreWorkspace`<sup>Required</sup> <a name="RestoreWorkspace" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.RestoreWorkspace"></a>

```typescript
public readonly RestoreWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the RestoreWorkspace API call.

---

##### `RevokeIpRules`<sup>Required</sup> <a name="RevokeIpRules" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.RevokeIpRules"></a>

```typescript
public readonly RevokeIpRules: string[];
```

- *Type:* string[]

IAM actions required for the RevokeIpRules API call.

---

##### `StartWorkspaces`<sup>Required</sup> <a name="StartWorkspaces" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.StartWorkspaces"></a>

```typescript
public readonly StartWorkspaces: string[];
```

- *Type:* string[]

IAM actions required for the StartWorkspaces API call.

---

##### `StartWorkspacesPool`<sup>Required</sup> <a name="StartWorkspacesPool" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.StartWorkspacesPool"></a>

```typescript
public readonly StartWorkspacesPool: string[];
```

- *Type:* string[]

IAM actions required for the StartWorkspacesPool API call.

---

##### `StopWorkspaces`<sup>Required</sup> <a name="StopWorkspaces" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.StopWorkspaces"></a>

```typescript
public readonly StopWorkspaces: string[];
```

- *Type:* string[]

IAM actions required for the StopWorkspaces API call.

---

##### `StopWorkspacesPool`<sup>Required</sup> <a name="StopWorkspacesPool" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.StopWorkspacesPool"></a>

```typescript
public readonly StopWorkspacesPool: string[];
```

- *Type:* string[]

IAM actions required for the StopWorkspacesPool API call.

---

##### `TerminateWorkspaces`<sup>Required</sup> <a name="TerminateWorkspaces" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.TerminateWorkspaces"></a>

```typescript
public readonly TerminateWorkspaces: string[];
```

- *Type:* string[]

IAM actions required for the TerminateWorkspaces API call.

---

##### `TerminateWorkspacesPool`<sup>Required</sup> <a name="TerminateWorkspacesPool" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.TerminateWorkspacesPool"></a>

```typescript
public readonly TerminateWorkspacesPool: string[];
```

- *Type:* string[]

IAM actions required for the TerminateWorkspacesPool API call.

---

##### `TerminateWorkspacesPoolSession`<sup>Required</sup> <a name="TerminateWorkspacesPoolSession" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.TerminateWorkspacesPoolSession"></a>

```typescript
public readonly TerminateWorkspacesPoolSession: string[];
```

- *Type:* string[]

IAM actions required for the TerminateWorkspacesPoolSession API call.

---

##### `UpdateConnectClientAddIn`<sup>Required</sup> <a name="UpdateConnectClientAddIn" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.UpdateConnectClientAddIn"></a>

```typescript
public readonly UpdateConnectClientAddIn: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnectClientAddIn API call.

---

##### `UpdateConnectionAliasPermission`<sup>Required</sup> <a name="UpdateConnectionAliasPermission" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.UpdateConnectionAliasPermission"></a>

```typescript
public readonly UpdateConnectionAliasPermission: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnectionAliasPermission API call.

---

##### `UpdateRulesOfIpGroup`<sup>Required</sup> <a name="UpdateRulesOfIpGroup" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.UpdateRulesOfIpGroup"></a>

```typescript
public readonly UpdateRulesOfIpGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRulesOfIpGroup API call.

---

##### `UpdateWorkspaceBundle`<sup>Required</sup> <a name="UpdateWorkspaceBundle" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.UpdateWorkspaceBundle"></a>

```typescript
public readonly UpdateWorkspaceBundle: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkspaceBundle API call.

---

##### `UpdateWorkspaceImagePermission`<sup>Required</sup> <a name="UpdateWorkspaceImagePermission" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.UpdateWorkspaceImagePermission"></a>

```typescript
public readonly UpdateWorkspaceImagePermission: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkspaceImagePermission API call.

---

##### `UpdateWorkspacesPool`<sup>Required</sup> <a name="UpdateWorkspacesPool" id="@cdk_utils/iam.workspaces.WorkSpacesOperations.property.UpdateWorkspacesPool"></a>

```typescript
public readonly UpdateWorkspacesPool: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkspacesPool API call.

---

### WorkSpacesResources <a name="WorkSpacesResources" id="@cdk_utils/iam.workspaces.WorkSpacesResources"></a>

ARN builders, validators, and parsers for workspaces resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workspaces.WorkSpacesResources.Initializer"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

new workspaces.WorkSpacesResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.certificateid">certificateid</a></code> | Builds an ARN for the certificateid resource. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.connectionalias">connectionalias</a></code> | Builds an ARN for the connectionalias resource. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.directoryid">directoryid</a></code> | Builds an ARN for the directoryid resource. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.isValidCertificateidArn">isValidCertificateidArn</a></code> | Validates whether a string is a valid ARN for the certificateid resource. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.isValidConnectionaliasArn">isValidConnectionaliasArn</a></code> | Validates whether a string is a valid ARN for the connectionalias resource. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.isValidDirectoryidArn">isValidDirectoryidArn</a></code> | Validates whether a string is a valid ARN for the directoryid resource. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.isValidWorkspaceapplicationArn">isValidWorkspaceapplicationArn</a></code> | Validates whether a string is a valid ARN for the workspaceapplication resource. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.isValidWorkspacebundleArn">isValidWorkspacebundleArn</a></code> | Validates whether a string is a valid ARN for the workspacebundle resource. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.isValidWorkspaceidArn">isValidWorkspaceidArn</a></code> | Validates whether a string is a valid ARN for the workspaceid resource. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.isValidWorkspaceimageArn">isValidWorkspaceimageArn</a></code> | Validates whether a string is a valid ARN for the workspaceimage resource. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.isValidWorkspaceipgroupArn">isValidWorkspaceipgroupArn</a></code> | Validates whether a string is a valid ARN for the workspaceipgroup resource. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.isValidWorkspacespoolArn">isValidWorkspacespoolArn</a></code> | Validates whether a string is a valid ARN for the workspacespool resource. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.parseCertificateidArn">parseCertificateidArn</a></code> | Parses a certificateid ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.parseConnectionaliasArn">parseConnectionaliasArn</a></code> | Parses a connectionalias ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.parseDirectoryidArn">parseDirectoryidArn</a></code> | Parses a directoryid ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.parseWorkspaceapplicationArn">parseWorkspaceapplicationArn</a></code> | Parses a workspaceapplication ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.parseWorkspacebundleArn">parseWorkspacebundleArn</a></code> | Parses a workspacebundle ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.parseWorkspaceidArn">parseWorkspaceidArn</a></code> | Parses a workspaceid ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.parseWorkspaceimageArn">parseWorkspaceimageArn</a></code> | Parses a workspaceimage ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.parseWorkspaceipgroupArn">parseWorkspaceipgroupArn</a></code> | Parses a workspaceipgroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.parseWorkspacespoolArn">parseWorkspacespoolArn</a></code> | Parses a workspacespool ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.workspaceapplication">workspaceapplication</a></code> | Builds an ARN for the workspaceapplication resource. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.workspacebundle">workspacebundle</a></code> | Builds an ARN for the workspacebundle resource. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.workspaceid">workspaceid</a></code> | Builds an ARN for the workspaceid resource. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.workspaceimage">workspaceimage</a></code> | Builds an ARN for the workspaceimage resource. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.workspaceipgroup">workspaceipgroup</a></code> | Builds an ARN for the workspaceipgroup resource. |
| <code><a href="#@cdk_utils/iam.workspaces.WorkSpacesResources.workspacespool">workspacespool</a></code> | Builds an ARN for the workspacespool resource. |

---

##### `certificateid` <a name="certificateid" id="@cdk_utils/iam.workspaces.WorkSpacesResources.certificateid"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.certificateid(props: WorkSpacesCertificateidArnProps)
```

Builds an ARN for the certificateid resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces.WorkSpacesResources.certificateid.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces.WorkSpacesCertificateidArnProps">WorkSpacesCertificateidArnProps</a>

---

##### `connectionalias` <a name="connectionalias" id="@cdk_utils/iam.workspaces.WorkSpacesResources.connectionalias"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.connectionalias(props: WorkSpacesConnectionaliasArnProps)
```

Builds an ARN for the connectionalias resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces.WorkSpacesResources.connectionalias.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces.WorkSpacesConnectionaliasArnProps">WorkSpacesConnectionaliasArnProps</a>

---

##### `directoryid` <a name="directoryid" id="@cdk_utils/iam.workspaces.WorkSpacesResources.directoryid"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.directoryid(props: WorkSpacesDirectoryidArnProps)
```

Builds an ARN for the directoryid resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces.WorkSpacesResources.directoryid.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces.WorkSpacesDirectoryidArnProps">WorkSpacesDirectoryidArnProps</a>

---

##### `isValidCertificateidArn` <a name="isValidCertificateidArn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.isValidCertificateidArn"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.isValidCertificateidArn(arn: string)
```

Validates whether a string is a valid ARN for the certificateid resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.isValidCertificateidArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectionaliasArn` <a name="isValidConnectionaliasArn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.isValidConnectionaliasArn"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.isValidConnectionaliasArn(arn: string)
```

Validates whether a string is a valid ARN for the connectionalias resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.isValidConnectionaliasArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDirectoryidArn` <a name="isValidDirectoryidArn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.isValidDirectoryidArn"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.isValidDirectoryidArn(arn: string)
```

Validates whether a string is a valid ARN for the directoryid resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.isValidDirectoryidArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkspaceapplicationArn` <a name="isValidWorkspaceapplicationArn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.isValidWorkspaceapplicationArn"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.isValidWorkspaceapplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the workspaceapplication resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.isValidWorkspaceapplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkspacebundleArn` <a name="isValidWorkspacebundleArn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.isValidWorkspacebundleArn"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.isValidWorkspacebundleArn(arn: string)
```

Validates whether a string is a valid ARN for the workspacebundle resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.isValidWorkspacebundleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkspaceidArn` <a name="isValidWorkspaceidArn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.isValidWorkspaceidArn"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.isValidWorkspaceidArn(arn: string)
```

Validates whether a string is a valid ARN for the workspaceid resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.isValidWorkspaceidArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkspaceimageArn` <a name="isValidWorkspaceimageArn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.isValidWorkspaceimageArn"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.isValidWorkspaceimageArn(arn: string)
```

Validates whether a string is a valid ARN for the workspaceimage resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.isValidWorkspaceimageArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkspaceipgroupArn` <a name="isValidWorkspaceipgroupArn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.isValidWorkspaceipgroupArn"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.isValidWorkspaceipgroupArn(arn: string)
```

Validates whether a string is a valid ARN for the workspaceipgroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.isValidWorkspaceipgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkspacespoolArn` <a name="isValidWorkspacespoolArn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.isValidWorkspacespoolArn"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.isValidWorkspacespoolArn(arn: string)
```

Validates whether a string is a valid ARN for the workspacespool resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.isValidWorkspacespoolArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCertificateidArn` <a name="parseCertificateidArn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.parseCertificateidArn"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.parseCertificateidArn(arn: string)
```

Parses a certificateid ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.parseCertificateidArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectionaliasArn` <a name="parseConnectionaliasArn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.parseConnectionaliasArn"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.parseConnectionaliasArn(arn: string)
```

Parses a connectionalias ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.parseConnectionaliasArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDirectoryidArn` <a name="parseDirectoryidArn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.parseDirectoryidArn"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.parseDirectoryidArn(arn: string)
```

Parses a directoryid ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.parseDirectoryidArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkspaceapplicationArn` <a name="parseWorkspaceapplicationArn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.parseWorkspaceapplicationArn"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.parseWorkspaceapplicationArn(arn: string)
```

Parses a workspaceapplication ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.parseWorkspaceapplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkspacebundleArn` <a name="parseWorkspacebundleArn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.parseWorkspacebundleArn"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.parseWorkspacebundleArn(arn: string)
```

Parses a workspacebundle ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.parseWorkspacebundleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkspaceidArn` <a name="parseWorkspaceidArn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.parseWorkspaceidArn"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.parseWorkspaceidArn(arn: string)
```

Parses a workspaceid ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.parseWorkspaceidArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkspaceimageArn` <a name="parseWorkspaceimageArn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.parseWorkspaceimageArn"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.parseWorkspaceimageArn(arn: string)
```

Parses a workspaceimage ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.parseWorkspaceimageArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkspaceipgroupArn` <a name="parseWorkspaceipgroupArn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.parseWorkspaceipgroupArn"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.parseWorkspaceipgroupArn(arn: string)
```

Parses a workspaceipgroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.parseWorkspaceipgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkspacespoolArn` <a name="parseWorkspacespoolArn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.parseWorkspacespoolArn"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.parseWorkspacespoolArn(arn: string)
```

Parses a workspacespool ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces.WorkSpacesResources.parseWorkspacespoolArn.parameter.arn"></a>

- *Type:* string

---

##### `workspaceapplication` <a name="workspaceapplication" id="@cdk_utils/iam.workspaces.WorkSpacesResources.workspaceapplication"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.workspaceapplication(props: WorkSpacesWorkspaceapplicationArnProps)
```

Builds an ARN for the workspaceapplication resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces.WorkSpacesResources.workspaceapplication.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceapplicationArnProps">WorkSpacesWorkspaceapplicationArnProps</a>

---

##### `workspacebundle` <a name="workspacebundle" id="@cdk_utils/iam.workspaces.WorkSpacesResources.workspacebundle"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.workspacebundle(props: WorkSpacesWorkspacebundleArnProps)
```

Builds an ARN for the workspacebundle resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces.WorkSpacesResources.workspacebundle.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspacebundleArnProps">WorkSpacesWorkspacebundleArnProps</a>

---

##### `workspaceid` <a name="workspaceid" id="@cdk_utils/iam.workspaces.WorkSpacesResources.workspaceid"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.workspaceid(props: WorkSpacesWorkspaceidArnProps)
```

Builds an ARN for the workspaceid resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces.WorkSpacesResources.workspaceid.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceidArnProps">WorkSpacesWorkspaceidArnProps</a>

---

##### `workspaceimage` <a name="workspaceimage" id="@cdk_utils/iam.workspaces.WorkSpacesResources.workspaceimage"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.workspaceimage(props: WorkSpacesWorkspaceimageArnProps)
```

Builds an ARN for the workspaceimage resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces.WorkSpacesResources.workspaceimage.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceimageArnProps">WorkSpacesWorkspaceimageArnProps</a>

---

##### `workspaceipgroup` <a name="workspaceipgroup" id="@cdk_utils/iam.workspaces.WorkSpacesResources.workspaceipgroup"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.workspaceipgroup(props: WorkSpacesWorkspaceipgroupArnProps)
```

Builds an ARN for the workspaceipgroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces.WorkSpacesResources.workspaceipgroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspaceipgroupArnProps">WorkSpacesWorkspaceipgroupArnProps</a>

---

##### `workspacespool` <a name="workspacespool" id="@cdk_utils/iam.workspaces.WorkSpacesResources.workspacespool"></a>

```typescript
import { workspaces } from '@cdk_utils/iam'

workspaces.WorkSpacesResources.workspacespool(props: WorkSpacesWorkspacespoolArnProps)
```

Builds an ARN for the workspacespool resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces.WorkSpacesResources.workspacespool.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces.WorkSpacesWorkspacespoolArnProps">WorkSpacesWorkspacespoolArnProps</a>

---




