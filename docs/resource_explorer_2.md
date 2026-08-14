# `resource_explorer_2` Submodule <a name="`resource_explorer_2` Submodule" id="@cdk_utils/iam.resource_explorer_2"></a>


## Structs <a name="Structs" id="Structs"></a>

### ResourceExplorer2IndexArnComponents <a name="ResourceExplorer2IndexArnComponents" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnComponents"></a>

Parsed components of a index ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnComponents.Initializer"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

const resourceExplorer2IndexArnComponents: resource_explorer_2.ResourceExplorer2IndexArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnComponents.property.indexUuid">indexUuid</a></code> | <code>string</code> | The IndexUuid component. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `indexUuid`<sup>Required</sup> <a name="indexUuid" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnComponents.property.indexUuid"></a>

```typescript
public readonly indexUuid: string;
```

- *Type:* string

The IndexUuid component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ResourceExplorer2IndexArnProps <a name="ResourceExplorer2IndexArnProps" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnProps"></a>

Properties for building a index ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnProps.Initializer"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

const resourceExplorer2IndexArnProps: resource_explorer_2.ResourceExplorer2IndexArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnProps.property.indexUuid">indexUuid</a></code> | <code>string</code> | The IndexUuid component of the ARN. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `indexUuid`<sup>Required</sup> <a name="indexUuid" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnProps.property.indexUuid"></a>

```typescript
public readonly indexUuid: string;
```

- *Type:* string

The IndexUuid component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ResourceExplorer2ManagedViewArnComponents <a name="ResourceExplorer2ManagedViewArnComponents" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnComponents"></a>

Parsed components of a managed-view ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnComponents.Initializer"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

const resourceExplorer2ManagedViewArnComponents: resource_explorer_2.ResourceExplorer2ManagedViewArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnComponents.property.managedViewName">managedViewName</a></code> | <code>string</code> | The ManagedViewName component. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnComponents.property.managedViewUuid">managedViewUuid</a></code> | <code>string</code> | The ManagedViewUuid component. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `managedViewName`<sup>Required</sup> <a name="managedViewName" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnComponents.property.managedViewName"></a>

```typescript
public readonly managedViewName: string;
```

- *Type:* string

The ManagedViewName component.

---

##### `managedViewUuid`<sup>Required</sup> <a name="managedViewUuid" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnComponents.property.managedViewUuid"></a>

```typescript
public readonly managedViewUuid: string;
```

- *Type:* string

The ManagedViewUuid component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ResourceExplorer2ManagedViewArnProps <a name="ResourceExplorer2ManagedViewArnProps" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnProps"></a>

Properties for building a managed-view ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnProps.Initializer"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

const resourceExplorer2ManagedViewArnProps: resource_explorer_2.ResourceExplorer2ManagedViewArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnProps.property.managedViewName">managedViewName</a></code> | <code>string</code> | The ManagedViewName component of the ARN. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnProps.property.managedViewUuid">managedViewUuid</a></code> | <code>string</code> | The ManagedViewUuid component of the ARN. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `managedViewName`<sup>Required</sup> <a name="managedViewName" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnProps.property.managedViewName"></a>

```typescript
public readonly managedViewName: string;
```

- *Type:* string

The ManagedViewName component of the ARN.

---

##### `managedViewUuid`<sup>Required</sup> <a name="managedViewUuid" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnProps.property.managedViewUuid"></a>

```typescript
public readonly managedViewUuid: string;
```

- *Type:* string

The ManagedViewUuid component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ResourceExplorer2ViewArnComponents <a name="ResourceExplorer2ViewArnComponents" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnComponents"></a>

Parsed components of a view ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnComponents.Initializer"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

const resourceExplorer2ViewArnComponents: resource_explorer_2.ResourceExplorer2ViewArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnComponents.property.viewName">viewName</a></code> | <code>string</code> | The ViewName component. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnComponents.property.viewUuid">viewUuid</a></code> | <code>string</code> | The ViewUuid component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `viewName`<sup>Required</sup> <a name="viewName" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnComponents.property.viewName"></a>

```typescript
public readonly viewName: string;
```

- *Type:* string

The ViewName component.

---

##### `viewUuid`<sup>Required</sup> <a name="viewUuid" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnComponents.property.viewUuid"></a>

```typescript
public readonly viewUuid: string;
```

- *Type:* string

The ViewUuid component.

---

### ResourceExplorer2ViewArnProps <a name="ResourceExplorer2ViewArnProps" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnProps"></a>

Properties for building a view ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnProps.Initializer"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

const resourceExplorer2ViewArnProps: resource_explorer_2.ResourceExplorer2ViewArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnProps.property.viewName">viewName</a></code> | <code>string</code> | The ViewName component of the ARN. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnProps.property.viewUuid">viewUuid</a></code> | <code>string</code> | The ViewUuid component of the ARN. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `viewName`<sup>Required</sup> <a name="viewName" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnProps.property.viewName"></a>

```typescript
public readonly viewName: string;
```

- *Type:* string

The ViewName component of the ARN.

---

##### `viewUuid`<sup>Required</sup> <a name="viewUuid" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnProps.property.viewUuid"></a>

```typescript
public readonly viewUuid: string;
```

- *Type:* string

The ViewUuid component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceExplorer2Actions <a name="ResourceExplorer2Actions" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions"></a>

IAM action constants for the resource-explorer-2 service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.Initializer"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

new resource_explorer_2.ResourceExplorer2Actions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.actionGetAccountLevelServiceConfiguration">actionGetAccountLevelServiceConfiguration</a></code> | <code>string</code> | [Read] resource-explorer-2:GetAccountLevelServiceConfiguration. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.actionGetDefaultView">actionGetDefaultView</a></code> | <code>string</code> | [Read] resource-explorer-2:GetDefaultView. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.actionGetIndex">actionGetIndex</a></code> | <code>string</code> | [Read] resource-explorer-2:GetIndex. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.actionGetManagedView">actionGetManagedView</a></code> | <code>string</code> | [Read] resource-explorer-2:GetManagedView. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.actionGetResourceExplorerSetup">actionGetResourceExplorerSetup</a></code> | <code>string</code> | [Read] resource-explorer-2:GetResourceExplorerSetup. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] resource-explorer-2:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.actionGetServiceIndex">actionGetServiceIndex</a></code> | <code>string</code> | [Read] resource-explorer-2:GetServiceIndex. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.actionGetServiceView">actionGetServiceView</a></code> | <code>string</code> | [Read] resource-explorer-2:GetServiceView. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.actionGetView">actionGetView</a></code> | <code>string</code> | [Read] resource-explorer-2:GetView. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.AssociateDefaultView">AssociateDefaultView</a></code> | <code>string</code> | [Write] resource-explorer-2:AssociateDefaultView. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.BatchGetView">BatchGetView</a></code> | <code>string</code> | [Read] resource-explorer-2:BatchGetView. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.CreateIndex">CreateIndex</a></code> | <code>string</code> | [Write] resource-explorer-2:CreateIndex. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.CreateManagedView">CreateManagedView</a></code> | <code>string</code> | [Write] resource-explorer-2:CreateManagedView. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.CreateResourceExplorerSetup">CreateResourceExplorerSetup</a></code> | <code>string</code> | [Write] resource-explorer-2:CreateResourceExplorerSetup. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.CreateStreamingAccessForService">CreateStreamingAccessForService</a></code> | <code>string</code> | [Write] resource-explorer-2:CreateStreamingAccessForService. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.CreateView">CreateView</a></code> | <code>string</code> | [Write] resource-explorer-2:CreateView. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.DeleteIndex">DeleteIndex</a></code> | <code>string</code> | [Write] resource-explorer-2:DeleteIndex. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.DeleteResourceExplorerSetup">DeleteResourceExplorerSetup</a></code> | <code>string</code> | [Write] resource-explorer-2:DeleteResourceExplorerSetup. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] resource-explorer-2:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.DeleteStreamingAccessForService">DeleteStreamingAccessForService</a></code> | <code>string</code> | [Write] resource-explorer-2:DeleteStreamingAccessForService. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.DeleteView">DeleteView</a></code> | <code>string</code> | [Write] resource-explorer-2:DeleteView. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.DisassociateDefaultView">DisassociateDefaultView</a></code> | <code>string</code> | [Write] resource-explorer-2:DisassociateDefaultView. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.ListIndexes">ListIndexes</a></code> | <code>string</code> | [List] resource-explorer-2:ListIndexes. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.ListIndexesForMembers">ListIndexesForMembers</a></code> | <code>string</code> | [List] resource-explorer-2:ListIndexesForMembers. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.ListManagedViews">ListManagedViews</a></code> | <code>string</code> | [List] resource-explorer-2:ListManagedViews. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.ListServiceIndexes">ListServiceIndexes</a></code> | <code>string</code> | [List] resource-explorer-2:ListServiceIndexes. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.ListServiceViews">ListServiceViews</a></code> | <code>string</code> | [List] resource-explorer-2:ListServiceViews. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.ListStreamingAccessForServices">ListStreamingAccessForServices</a></code> | <code>string</code> | [List] resource-explorer-2:ListStreamingAccessForServices. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.ListSupportedResourceTypes">ListSupportedResourceTypes</a></code> | <code>string</code> | [List] resource-explorer-2:ListSupportedResourceTypes. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] resource-explorer-2:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.ListViews">ListViews</a></code> | <code>string</code> | [List] resource-explorer-2:ListViews. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] resource-explorer-2:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.Search">Search</a></code> | <code>string</code> | [Read] resource-explorer-2:Search. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] resource-explorer-2:TagResource. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] resource-explorer-2:UntagResource. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.UpdateIndexType">UpdateIndexType</a></code> | <code>string</code> | [Write] resource-explorer-2:UpdateIndexType. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.UpdateView">UpdateView</a></code> | <code>string</code> | [Write] resource-explorer-2:UpdateView. |

---

##### `actionGetAccountLevelServiceConfiguration`<sup>Required</sup> <a name="actionGetAccountLevelServiceConfiguration" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.actionGetAccountLevelServiceConfiguration"></a>

```typescript
public readonly actionGetAccountLevelServiceConfiguration: string;
```

- *Type:* string

[Read] resource-explorer-2:GetAccountLevelServiceConfiguration.

---

##### `actionGetDefaultView`<sup>Required</sup> <a name="actionGetDefaultView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.actionGetDefaultView"></a>

```typescript
public readonly actionGetDefaultView: string;
```

- *Type:* string

[Read] resource-explorer-2:GetDefaultView.

---

##### `actionGetIndex`<sup>Required</sup> <a name="actionGetIndex" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.actionGetIndex"></a>

```typescript
public readonly actionGetIndex: string;
```

- *Type:* string

[Read] resource-explorer-2:GetIndex.

---

##### `actionGetManagedView`<sup>Required</sup> <a name="actionGetManagedView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.actionGetManagedView"></a>

```typescript
public readonly actionGetManagedView: string;
```

- *Type:* string

[Read] resource-explorer-2:GetManagedView.

---

##### `actionGetResourceExplorerSetup`<sup>Required</sup> <a name="actionGetResourceExplorerSetup" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.actionGetResourceExplorerSetup"></a>

```typescript
public readonly actionGetResourceExplorerSetup: string;
```

- *Type:* string

[Read] resource-explorer-2:GetResourceExplorerSetup.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] resource-explorer-2:GetResourcePolicy.

---

##### `actionGetServiceIndex`<sup>Required</sup> <a name="actionGetServiceIndex" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.actionGetServiceIndex"></a>

```typescript
public readonly actionGetServiceIndex: string;
```

- *Type:* string

[Read] resource-explorer-2:GetServiceIndex.

---

##### `actionGetServiceView`<sup>Required</sup> <a name="actionGetServiceView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.actionGetServiceView"></a>

```typescript
public readonly actionGetServiceView: string;
```

- *Type:* string

[Read] resource-explorer-2:GetServiceView.

---

##### `actionGetView`<sup>Required</sup> <a name="actionGetView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.actionGetView"></a>

```typescript
public readonly actionGetView: string;
```

- *Type:* string

[Read] resource-explorer-2:GetView.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateDefaultView`<sup>Required</sup> <a name="AssociateDefaultView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.AssociateDefaultView"></a>

```typescript
public readonly AssociateDefaultView: string;
```

- *Type:* string

[Write] resource-explorer-2:AssociateDefaultView.

---

##### `BatchGetView`<sup>Required</sup> <a name="BatchGetView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.BatchGetView"></a>

```typescript
public readonly BatchGetView: string;
```

- *Type:* string

[Read] resource-explorer-2:BatchGetView.

---

##### `CreateIndex`<sup>Required</sup> <a name="CreateIndex" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.CreateIndex"></a>

```typescript
public readonly CreateIndex: string;
```

- *Type:* string

[Write] resource-explorer-2:CreateIndex.

---

##### `CreateManagedView`<sup>Required</sup> <a name="CreateManagedView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.CreateManagedView"></a>

```typescript
public readonly CreateManagedView: string;
```

- *Type:* string

[Write] resource-explorer-2:CreateManagedView.

---

##### `CreateResourceExplorerSetup`<sup>Required</sup> <a name="CreateResourceExplorerSetup" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.CreateResourceExplorerSetup"></a>

```typescript
public readonly CreateResourceExplorerSetup: string;
```

- *Type:* string

[Write] resource-explorer-2:CreateResourceExplorerSetup.

---

##### `CreateStreamingAccessForService`<sup>Required</sup> <a name="CreateStreamingAccessForService" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.CreateStreamingAccessForService"></a>

```typescript
public readonly CreateStreamingAccessForService: string;
```

- *Type:* string

[Write] resource-explorer-2:CreateStreamingAccessForService.

---

##### `CreateView`<sup>Required</sup> <a name="CreateView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.CreateView"></a>

```typescript
public readonly CreateView: string;
```

- *Type:* string

[Write] resource-explorer-2:CreateView.

---

##### `DeleteIndex`<sup>Required</sup> <a name="DeleteIndex" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.DeleteIndex"></a>

```typescript
public readonly DeleteIndex: string;
```

- *Type:* string

[Write] resource-explorer-2:DeleteIndex.

---

##### `DeleteResourceExplorerSetup`<sup>Required</sup> <a name="DeleteResourceExplorerSetup" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.DeleteResourceExplorerSetup"></a>

```typescript
public readonly DeleteResourceExplorerSetup: string;
```

- *Type:* string

[Write] resource-explorer-2:DeleteResourceExplorerSetup.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] resource-explorer-2:DeleteResourcePolicy.

---

##### `DeleteStreamingAccessForService`<sup>Required</sup> <a name="DeleteStreamingAccessForService" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.DeleteStreamingAccessForService"></a>

```typescript
public readonly DeleteStreamingAccessForService: string;
```

- *Type:* string

[Write] resource-explorer-2:DeleteStreamingAccessForService.

---

##### `DeleteView`<sup>Required</sup> <a name="DeleteView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.DeleteView"></a>

```typescript
public readonly DeleteView: string;
```

- *Type:* string

[Write] resource-explorer-2:DeleteView.

---

##### `DisassociateDefaultView`<sup>Required</sup> <a name="DisassociateDefaultView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.DisassociateDefaultView"></a>

```typescript
public readonly DisassociateDefaultView: string;
```

- *Type:* string

[Write] resource-explorer-2:DisassociateDefaultView.

---

##### `ListIndexes`<sup>Required</sup> <a name="ListIndexes" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.ListIndexes"></a>

```typescript
public readonly ListIndexes: string;
```

- *Type:* string

[List] resource-explorer-2:ListIndexes.

---

##### `ListIndexesForMembers`<sup>Required</sup> <a name="ListIndexesForMembers" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.ListIndexesForMembers"></a>

```typescript
public readonly ListIndexesForMembers: string;
```

- *Type:* string

[List] resource-explorer-2:ListIndexesForMembers.

---

##### `ListManagedViews`<sup>Required</sup> <a name="ListManagedViews" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.ListManagedViews"></a>

```typescript
public readonly ListManagedViews: string;
```

- *Type:* string

[List] resource-explorer-2:ListManagedViews.

---

##### `ListServiceIndexes`<sup>Required</sup> <a name="ListServiceIndexes" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.ListServiceIndexes"></a>

```typescript
public readonly ListServiceIndexes: string;
```

- *Type:* string

[List] resource-explorer-2:ListServiceIndexes.

---

##### `ListServiceViews`<sup>Required</sup> <a name="ListServiceViews" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.ListServiceViews"></a>

```typescript
public readonly ListServiceViews: string;
```

- *Type:* string

[List] resource-explorer-2:ListServiceViews.

---

##### `ListStreamingAccessForServices`<sup>Required</sup> <a name="ListStreamingAccessForServices" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.ListStreamingAccessForServices"></a>

```typescript
public readonly ListStreamingAccessForServices: string;
```

- *Type:* string

[List] resource-explorer-2:ListStreamingAccessForServices.

---

##### `ListSupportedResourceTypes`<sup>Required</sup> <a name="ListSupportedResourceTypes" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.ListSupportedResourceTypes"></a>

```typescript
public readonly ListSupportedResourceTypes: string;
```

- *Type:* string

[List] resource-explorer-2:ListSupportedResourceTypes.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] resource-explorer-2:ListTagsForResource.

---

##### `ListViews`<sup>Required</sup> <a name="ListViews" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.ListViews"></a>

```typescript
public readonly ListViews: string;
```

- *Type:* string

[List] resource-explorer-2:ListViews.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] resource-explorer-2:PutResourcePolicy.

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.Search"></a>

```typescript
public readonly Search: string;
```

- *Type:* string

[Read] resource-explorer-2:Search.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] resource-explorer-2:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] resource-explorer-2:UntagResource.

---

##### `UpdateIndexType`<sup>Required</sup> <a name="UpdateIndexType" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.UpdateIndexType"></a>

```typescript
public readonly UpdateIndexType: string;
```

- *Type:* string

[Write] resource-explorer-2:UpdateIndexType.

---

##### `UpdateView`<sup>Required</sup> <a name="UpdateView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Actions.property.UpdateView"></a>

```typescript
public readonly UpdateView: string;
```

- *Type:* string

[Write] resource-explorer-2:UpdateView.

---

### ResourceExplorer2Conditions <a name="ResourceExplorer2Conditions" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions"></a>

Condition key constants and builders for resource-explorer-2.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.Initializer"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

new resource_explorer_2.ResourceExplorer2Conditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.operation">operation</a></code> | Generates a condition block for `resource-explorer-2:Operation`. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `operation` <a name="operation" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.operation"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

resource_explorer_2.ResourceExplorer2Conditions.operation(value: string)
```

Generates a condition block for `resource-explorer-2:Operation`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.operation.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.requestTag"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

resource_explorer_2.ResourceExplorer2Conditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.resourceTag"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

resource_explorer_2.ResourceExplorer2Conditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.tagKeys"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

resource_explorer_2.ResourceExplorer2Conditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.property.CreateIndexConditionKeys">CreateIndexConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIndex action. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.property.CreateViewConditionKeys">CreateViewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateView action. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.property.OPERATION">OPERATION</a></code> | <code>string</code> | Condition key: resource-explorer-2:Operation (String). |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.property.SearchConditionKeys">SearchConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Search action. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateIndexConditionKeys`<sup>Required</sup> <a name="CreateIndexConditionKeys" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.property.CreateIndexConditionKeys"></a>

```typescript
public readonly CreateIndexConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIndex action.

---

##### `CreateViewConditionKeys`<sup>Required</sup> <a name="CreateViewConditionKeys" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.property.CreateViewConditionKeys"></a>

```typescript
public readonly CreateViewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateView action.

---

##### `OPERATION`<sup>Required</sup> <a name="OPERATION" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.property.OPERATION"></a>

```typescript
public readonly OPERATION: string;
```

- *Type:* string

Condition key: resource-explorer-2:Operation (String).

---

##### `SearchConditionKeys`<sup>Required</sup> <a name="SearchConditionKeys" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.property.SearchConditionKeys"></a>

```typescript
public readonly SearchConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Search action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Conditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ResourceExplorer2Operations <a name="ResourceExplorer2Operations" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations"></a>

API operation to required IAM actions mapping for resource-explorer-2.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.Initializer"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

new resource_explorer_2.ResourceExplorer2Operations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.AssociateDefaultView">AssociateDefaultView</a></code> | <code>string[]</code> | IAM actions required for the AssociateDefaultView API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.BatchGetView">BatchGetView</a></code> | <code>string[]</code> | IAM actions required for the BatchGetView API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.CreateIndex">CreateIndex</a></code> | <code>string[]</code> | IAM actions required for the CreateIndex API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.CreateResourceExplorerSetup">CreateResourceExplorerSetup</a></code> | <code>string[]</code> | IAM actions required for the CreateResourceExplorerSetup API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.CreateView">CreateView</a></code> | <code>string[]</code> | IAM actions required for the CreateView API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.DeleteIndex">DeleteIndex</a></code> | <code>string[]</code> | IAM actions required for the DeleteIndex API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.DeleteResourceExplorerSetup">DeleteResourceExplorerSetup</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourceExplorerSetup API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.DeleteView">DeleteView</a></code> | <code>string[]</code> | IAM actions required for the DeleteView API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.DisassociateDefaultView">DisassociateDefaultView</a></code> | <code>string[]</code> | IAM actions required for the DisassociateDefaultView API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListIndexes">ListIndexes</a></code> | <code>string[]</code> | IAM actions required for the ListIndexes API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListIndexesForMembers">ListIndexesForMembers</a></code> | <code>string[]</code> | IAM actions required for the ListIndexesForMembers API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListManagedViews">ListManagedViews</a></code> | <code>string[]</code> | IAM actions required for the ListManagedViews API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListResources">ListResources</a></code> | <code>string[]</code> | IAM actions required for the ListResources API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListServiceIndexes">ListServiceIndexes</a></code> | <code>string[]</code> | IAM actions required for the ListServiceIndexes API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListServiceViews">ListServiceViews</a></code> | <code>string[]</code> | IAM actions required for the ListServiceViews API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListStreamingAccessForServices">ListStreamingAccessForServices</a></code> | <code>string[]</code> | IAM actions required for the ListStreamingAccessForServices API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListSupportedResourceTypes">ListSupportedResourceTypes</a></code> | <code>string[]</code> | IAM actions required for the ListSupportedResourceTypes API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListViews">ListViews</a></code> | <code>string[]</code> | IAM actions required for the ListViews API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.opGetAccountLevelServiceConfiguration">opGetAccountLevelServiceConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetAccountLevelServiceConfiguration API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.opGetDefaultView">opGetDefaultView</a></code> | <code>string[]</code> | IAM actions required for the GetDefaultView API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.opGetIndex">opGetIndex</a></code> | <code>string[]</code> | IAM actions required for the GetIndex API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.opGetManagedView">opGetManagedView</a></code> | <code>string[]</code> | IAM actions required for the GetManagedView API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.opGetResourceExplorerSetup">opGetResourceExplorerSetup</a></code> | <code>string[]</code> | IAM actions required for the GetResourceExplorerSetup API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.opGetServiceIndex">opGetServiceIndex</a></code> | <code>string[]</code> | IAM actions required for the GetServiceIndex API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.opGetServiceView">opGetServiceView</a></code> | <code>string[]</code> | IAM actions required for the GetServiceView API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.opGetView">opGetView</a></code> | <code>string[]</code> | IAM actions required for the GetView API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.Search">Search</a></code> | <code>string[]</code> | IAM actions required for the Search API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.UpdateIndexType">UpdateIndexType</a></code> | <code>string[]</code> | IAM actions required for the UpdateIndexType API call. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.UpdateView">UpdateView</a></code> | <code>string[]</code> | IAM actions required for the UpdateView API call. |

---

##### `AssociateDefaultView`<sup>Required</sup> <a name="AssociateDefaultView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.AssociateDefaultView"></a>

```typescript
public readonly AssociateDefaultView: string[];
```

- *Type:* string[]

IAM actions required for the AssociateDefaultView API call.

---

##### `BatchGetView`<sup>Required</sup> <a name="BatchGetView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.BatchGetView"></a>

```typescript
public readonly BatchGetView: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetView API call.

---

##### `CreateIndex`<sup>Required</sup> <a name="CreateIndex" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.CreateIndex"></a>

```typescript
public readonly CreateIndex: string[];
```

- *Type:* string[]

IAM actions required for the CreateIndex API call.

---

##### `CreateResourceExplorerSetup`<sup>Required</sup> <a name="CreateResourceExplorerSetup" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.CreateResourceExplorerSetup"></a>

```typescript
public readonly CreateResourceExplorerSetup: string[];
```

- *Type:* string[]

IAM actions required for the CreateResourceExplorerSetup API call.

---

##### `CreateView`<sup>Required</sup> <a name="CreateView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.CreateView"></a>

```typescript
public readonly CreateView: string[];
```

- *Type:* string[]

IAM actions required for the CreateView API call.

---

##### `DeleteIndex`<sup>Required</sup> <a name="DeleteIndex" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.DeleteIndex"></a>

```typescript
public readonly DeleteIndex: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIndex API call.

---

##### `DeleteResourceExplorerSetup`<sup>Required</sup> <a name="DeleteResourceExplorerSetup" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.DeleteResourceExplorerSetup"></a>

```typescript
public readonly DeleteResourceExplorerSetup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourceExplorerSetup API call.

---

##### `DeleteView`<sup>Required</sup> <a name="DeleteView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.DeleteView"></a>

```typescript
public readonly DeleteView: string[];
```

- *Type:* string[]

IAM actions required for the DeleteView API call.

---

##### `DisassociateDefaultView`<sup>Required</sup> <a name="DisassociateDefaultView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.DisassociateDefaultView"></a>

```typescript
public readonly DisassociateDefaultView: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateDefaultView API call.

---

##### `ListIndexes`<sup>Required</sup> <a name="ListIndexes" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListIndexes"></a>

```typescript
public readonly ListIndexes: string[];
```

- *Type:* string[]

IAM actions required for the ListIndexes API call.

---

##### `ListIndexesForMembers`<sup>Required</sup> <a name="ListIndexesForMembers" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListIndexesForMembers"></a>

```typescript
public readonly ListIndexesForMembers: string[];
```

- *Type:* string[]

IAM actions required for the ListIndexesForMembers API call.

---

##### `ListManagedViews`<sup>Required</sup> <a name="ListManagedViews" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListManagedViews"></a>

```typescript
public readonly ListManagedViews: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedViews API call.

---

##### `ListResources`<sup>Required</sup> <a name="ListResources" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListResources"></a>

```typescript
public readonly ListResources: string[];
```

- *Type:* string[]

IAM actions required for the ListResources API call.

---

##### `ListServiceIndexes`<sup>Required</sup> <a name="ListServiceIndexes" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListServiceIndexes"></a>

```typescript
public readonly ListServiceIndexes: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceIndexes API call.

---

##### `ListServiceViews`<sup>Required</sup> <a name="ListServiceViews" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListServiceViews"></a>

```typescript
public readonly ListServiceViews: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceViews API call.

---

##### `ListStreamingAccessForServices`<sup>Required</sup> <a name="ListStreamingAccessForServices" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListStreamingAccessForServices"></a>

```typescript
public readonly ListStreamingAccessForServices: string[];
```

- *Type:* string[]

IAM actions required for the ListStreamingAccessForServices API call.

---

##### `ListSupportedResourceTypes`<sup>Required</sup> <a name="ListSupportedResourceTypes" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListSupportedResourceTypes"></a>

```typescript
public readonly ListSupportedResourceTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListSupportedResourceTypes API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListViews`<sup>Required</sup> <a name="ListViews" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.ListViews"></a>

```typescript
public readonly ListViews: string[];
```

- *Type:* string[]

IAM actions required for the ListViews API call.

---

##### `opGetAccountLevelServiceConfiguration`<sup>Required</sup> <a name="opGetAccountLevelServiceConfiguration" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.opGetAccountLevelServiceConfiguration"></a>

```typescript
public readonly opGetAccountLevelServiceConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountLevelServiceConfiguration API call.

---

##### `opGetDefaultView`<sup>Required</sup> <a name="opGetDefaultView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.opGetDefaultView"></a>

```typescript
public readonly opGetDefaultView: string[];
```

- *Type:* string[]

IAM actions required for the GetDefaultView API call.

---

##### `opGetIndex`<sup>Required</sup> <a name="opGetIndex" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.opGetIndex"></a>

```typescript
public readonly opGetIndex: string[];
```

- *Type:* string[]

IAM actions required for the GetIndex API call.

---

##### `opGetManagedView`<sup>Required</sup> <a name="opGetManagedView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.opGetManagedView"></a>

```typescript
public readonly opGetManagedView: string[];
```

- *Type:* string[]

IAM actions required for the GetManagedView API call.

---

##### `opGetResourceExplorerSetup`<sup>Required</sup> <a name="opGetResourceExplorerSetup" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.opGetResourceExplorerSetup"></a>

```typescript
public readonly opGetResourceExplorerSetup: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceExplorerSetup API call.

---

##### `opGetServiceIndex`<sup>Required</sup> <a name="opGetServiceIndex" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.opGetServiceIndex"></a>

```typescript
public readonly opGetServiceIndex: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceIndex API call.

---

##### `opGetServiceView`<sup>Required</sup> <a name="opGetServiceView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.opGetServiceView"></a>

```typescript
public readonly opGetServiceView: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceView API call.

---

##### `opGetView`<sup>Required</sup> <a name="opGetView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.opGetView"></a>

```typescript
public readonly opGetView: string[];
```

- *Type:* string[]

IAM actions required for the GetView API call.

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.Search"></a>

```typescript
public readonly Search: string[];
```

- *Type:* string[]

IAM actions required for the Search API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateIndexType`<sup>Required</sup> <a name="UpdateIndexType" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.UpdateIndexType"></a>

```typescript
public readonly UpdateIndexType: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIndexType API call.

---

##### `UpdateView`<sup>Required</sup> <a name="UpdateView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Operations.property.UpdateView"></a>

```typescript
public readonly UpdateView: string[];
```

- *Type:* string[]

IAM actions required for the UpdateView API call.

---

### ResourceExplorer2Resources <a name="ResourceExplorer2Resources" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources"></a>

ARN builders, validators, and parsers for resource-explorer-2 resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.Initializer"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

new resource_explorer_2.ResourceExplorer2Resources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.index">index</a></code> | Builds an ARN for the index resource. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.isValidIndexArn">isValidIndexArn</a></code> | Validates whether a string is a valid ARN for the index resource. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.isValidManagedViewArn">isValidManagedViewArn</a></code> | Validates whether a string is a valid ARN for the managed-view resource. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.isValidViewArn">isValidViewArn</a></code> | Validates whether a string is a valid ARN for the view resource. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.managedView">managedView</a></code> | Builds an ARN for the managed-view resource. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.parseIndexArn">parseIndexArn</a></code> | Parses a index ARN into its components. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.parseManagedViewArn">parseManagedViewArn</a></code> | Parses a managed-view ARN into its components. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.parseViewArn">parseViewArn</a></code> | Parses a view ARN into its components. |
| <code><a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.view">view</a></code> | Builds an ARN for the view resource. |

---

##### `index` <a name="index" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.index"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

resource_explorer_2.ResourceExplorer2Resources.index(props: ResourceExplorer2IndexArnProps)
```

Builds an ARN for the index resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.index.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2IndexArnProps">ResourceExplorer2IndexArnProps</a>

---

##### `isValidIndexArn` <a name="isValidIndexArn" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.isValidIndexArn"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

resource_explorer_2.ResourceExplorer2Resources.isValidIndexArn(arn: string)
```

Validates whether a string is a valid ARN for the index resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.isValidIndexArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidManagedViewArn` <a name="isValidManagedViewArn" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.isValidManagedViewArn"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

resource_explorer_2.ResourceExplorer2Resources.isValidManagedViewArn(arn: string)
```

Validates whether a string is a valid ARN for the managed-view resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.isValidManagedViewArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidViewArn` <a name="isValidViewArn" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.isValidViewArn"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

resource_explorer_2.ResourceExplorer2Resources.isValidViewArn(arn: string)
```

Validates whether a string is a valid ARN for the view resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.isValidViewArn.parameter.arn"></a>

- *Type:* string

---

##### `managedView` <a name="managedView" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.managedView"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

resource_explorer_2.ResourceExplorer2Resources.managedView(props: ResourceExplorer2ManagedViewArnProps)
```

Builds an ARN for the managed-view resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.managedView.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ManagedViewArnProps">ResourceExplorer2ManagedViewArnProps</a>

---

##### `parseIndexArn` <a name="parseIndexArn" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.parseIndexArn"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

resource_explorer_2.ResourceExplorer2Resources.parseIndexArn(arn: string)
```

Parses a index ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.parseIndexArn.parameter.arn"></a>

- *Type:* string

---

##### `parseManagedViewArn` <a name="parseManagedViewArn" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.parseManagedViewArn"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

resource_explorer_2.ResourceExplorer2Resources.parseManagedViewArn(arn: string)
```

Parses a managed-view ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.parseManagedViewArn.parameter.arn"></a>

- *Type:* string

---

##### `parseViewArn` <a name="parseViewArn" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.parseViewArn"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

resource_explorer_2.ResourceExplorer2Resources.parseViewArn(arn: string)
```

Parses a view ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.parseViewArn.parameter.arn"></a>

- *Type:* string

---

##### `view` <a name="view" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.view"></a>

```typescript
import { resource_explorer_2 } from '@cdk_utils/iam'

resource_explorer_2.ResourceExplorer2Resources.view(props: ResourceExplorer2ViewArnProps)
```

Builds an ARN for the view resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.resource_explorer_2.ResourceExplorer2Resources.view.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.resource_explorer_2.ResourceExplorer2ViewArnProps">ResourceExplorer2ViewArnProps</a>

---




