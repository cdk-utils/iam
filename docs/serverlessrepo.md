# `serverlessrepo` Submodule <a name="`serverlessrepo` Submodule" id="@cdk_utils/iam.serverlessrepo"></a>


## Structs <a name="Structs" id="Structs"></a>

### ServerlessrepoApplicationsArnComponents <a name="ServerlessrepoApplicationsArnComponents" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnComponents"></a>

Parsed components of a applications ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnComponents.Initializer"></a>

```typescript
import { serverlessrepo } from '@cdk_utils/iam'

const serverlessrepoApplicationsArnComponents: serverlessrepo.ServerlessrepoApplicationsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ServerlessrepoApplicationsArnProps <a name="ServerlessrepoApplicationsArnProps" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnProps"></a>

Properties for building a applications ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnProps.Initializer"></a>

```typescript
import { serverlessrepo } from '@cdk_utils/iam'

const serverlessrepoApplicationsArnProps: serverlessrepo.ServerlessrepoApplicationsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ServerlessrepoActions <a name="ServerlessrepoActions" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions"></a>

IAM action constants for the serverlessrepo service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.Initializer"></a>

```typescript
import { serverlessrepo } from '@cdk_utils/iam'

new serverlessrepo.ServerlessrepoActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.actionGetApplication">actionGetApplication</a></code> | <code>string</code> | [Read] serverlessrepo:GetApplication. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.actionGetApplicationPolicy">actionGetApplicationPolicy</a></code> | <code>string</code> | [Read] serverlessrepo:GetApplicationPolicy. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.actionGetCloudFormationTemplate">actionGetCloudFormationTemplate</a></code> | <code>string</code> | [Read] serverlessrepo:GetCloudFormationTemplate. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] serverlessrepo:CreateApplication. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.CreateApplicationVersion">CreateApplicationVersion</a></code> | <code>string</code> | [Write] serverlessrepo:CreateApplicationVersion. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.CreateCloudFormationChangeSet">CreateCloudFormationChangeSet</a></code> | <code>string</code> | [Write] serverlessrepo:CreateCloudFormationChangeSet. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.CreateCloudFormationTemplate">CreateCloudFormationTemplate</a></code> | <code>string</code> | [Write] serverlessrepo:CreateCloudFormationTemplate. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] serverlessrepo:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.ListApplicationDependencies">ListApplicationDependencies</a></code> | <code>string</code> | [List] serverlessrepo:ListApplicationDependencies. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.ListApplications">ListApplications</a></code> | <code>string</code> | [List] serverlessrepo:ListApplications. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.ListApplicationVersions">ListApplicationVersions</a></code> | <code>string</code> | [List] serverlessrepo:ListApplicationVersions. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.PutApplicationPolicy">PutApplicationPolicy</a></code> | <code>string</code> | [Write] serverlessrepo:PutApplicationPolicy. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.SearchApplications">SearchApplications</a></code> | <code>string</code> | [Read] serverlessrepo:SearchApplications. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.UnshareApplication">UnshareApplication</a></code> | <code>string</code> | [Write] serverlessrepo:UnshareApplication. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.UpdateApplication">UpdateApplication</a></code> | <code>string</code> | [Write] serverlessrepo:UpdateApplication. |

---

##### `actionGetApplication`<sup>Required</sup> <a name="actionGetApplication" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.actionGetApplication"></a>

```typescript
public readonly actionGetApplication: string;
```

- *Type:* string

[Read] serverlessrepo:GetApplication.

---

##### `actionGetApplicationPolicy`<sup>Required</sup> <a name="actionGetApplicationPolicy" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.actionGetApplicationPolicy"></a>

```typescript
public readonly actionGetApplicationPolicy: string;
```

- *Type:* string

[Read] serverlessrepo:GetApplicationPolicy.

---

##### `actionGetCloudFormationTemplate`<sup>Required</sup> <a name="actionGetCloudFormationTemplate" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.actionGetCloudFormationTemplate"></a>

```typescript
public readonly actionGetCloudFormationTemplate: string;
```

- *Type:* string

[Read] serverlessrepo:GetCloudFormationTemplate.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] serverlessrepo:CreateApplication.

---

##### `CreateApplicationVersion`<sup>Required</sup> <a name="CreateApplicationVersion" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.CreateApplicationVersion"></a>

```typescript
public readonly CreateApplicationVersion: string;
```

- *Type:* string

[Write] serverlessrepo:CreateApplicationVersion.

---

##### `CreateCloudFormationChangeSet`<sup>Required</sup> <a name="CreateCloudFormationChangeSet" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.CreateCloudFormationChangeSet"></a>

```typescript
public readonly CreateCloudFormationChangeSet: string;
```

- *Type:* string

[Write] serverlessrepo:CreateCloudFormationChangeSet.

---

##### `CreateCloudFormationTemplate`<sup>Required</sup> <a name="CreateCloudFormationTemplate" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.CreateCloudFormationTemplate"></a>

```typescript
public readonly CreateCloudFormationTemplate: string;
```

- *Type:* string

[Write] serverlessrepo:CreateCloudFormationTemplate.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] serverlessrepo:DeleteApplication.

---

##### `ListApplicationDependencies`<sup>Required</sup> <a name="ListApplicationDependencies" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.ListApplicationDependencies"></a>

```typescript
public readonly ListApplicationDependencies: string;
```

- *Type:* string

[List] serverlessrepo:ListApplicationDependencies.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.ListApplications"></a>

```typescript
public readonly ListApplications: string;
```

- *Type:* string

[List] serverlessrepo:ListApplications.

---

##### `ListApplicationVersions`<sup>Required</sup> <a name="ListApplicationVersions" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.ListApplicationVersions"></a>

```typescript
public readonly ListApplicationVersions: string;
```

- *Type:* string

[List] serverlessrepo:ListApplicationVersions.

---

##### `PutApplicationPolicy`<sup>Required</sup> <a name="PutApplicationPolicy" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.PutApplicationPolicy"></a>

```typescript
public readonly PutApplicationPolicy: string;
```

- *Type:* string

[Write] serverlessrepo:PutApplicationPolicy.

---

##### `SearchApplications`<sup>Required</sup> <a name="SearchApplications" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.SearchApplications"></a>

```typescript
public readonly SearchApplications: string;
```

- *Type:* string

[Read] serverlessrepo:SearchApplications.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UnshareApplication`<sup>Required</sup> <a name="UnshareApplication" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.UnshareApplication"></a>

```typescript
public readonly UnshareApplication: string;
```

- *Type:* string

[Write] serverlessrepo:UnshareApplication.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoActions.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string;
```

- *Type:* string

[Write] serverlessrepo:UpdateApplication.

---

### ServerlessrepoConditions <a name="ServerlessrepoConditions" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoConditions"></a>

Condition key constants and builders for serverlessrepo.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoConditions.Initializer"></a>

```typescript
import { serverlessrepo } from '@cdk_utils/iam'

new serverlessrepo.ServerlessrepoConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoConditions.applicationType">applicationType</a></code> | Generates a condition block for `serverlessrepo:applicationType`. |

---

##### `applicationType` <a name="applicationType" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoConditions.applicationType"></a>

```typescript
import { serverlessrepo } from '@cdk_utils/iam'

serverlessrepo.ServerlessrepoConditions.applicationType(value: string)
```

Generates a condition block for `serverlessrepo:applicationType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoConditions.applicationType.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoConditions.property.actionGetApplicationConditionKeys">actionGetApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetApplication action. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoConditions.property.APPLICATION_TYPE">APPLICATION_TYPE</a></code> | <code>string</code> | Condition key: serverlessrepo:applicationType (String). |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoConditions.property.CreateCloudFormationChangeSetConditionKeys">CreateCloudFormationChangeSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCloudFormationChangeSet action. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoConditions.property.CreateCloudFormationTemplateConditionKeys">CreateCloudFormationTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCloudFormationTemplate action. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoConditions.property.ListApplicationDependenciesConditionKeys">ListApplicationDependenciesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListApplicationDependencies action. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoConditions.property.ListApplicationVersionsConditionKeys">ListApplicationVersionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListApplicationVersions action. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoConditions.property.SearchApplicationsConditionKeys">SearchApplicationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchApplications action. |

---

##### `actionGetApplicationConditionKeys`<sup>Required</sup> <a name="actionGetApplicationConditionKeys" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoConditions.property.actionGetApplicationConditionKeys"></a>

```typescript
public readonly actionGetApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetApplication action.

---

##### `APPLICATION_TYPE`<sup>Required</sup> <a name="APPLICATION_TYPE" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoConditions.property.APPLICATION_TYPE"></a>

```typescript
public readonly APPLICATION_TYPE: string;
```

- *Type:* string

Condition key: serverlessrepo:applicationType (String).

---

##### `CreateCloudFormationChangeSetConditionKeys`<sup>Required</sup> <a name="CreateCloudFormationChangeSetConditionKeys" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoConditions.property.CreateCloudFormationChangeSetConditionKeys"></a>

```typescript
public readonly CreateCloudFormationChangeSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCloudFormationChangeSet action.

---

##### `CreateCloudFormationTemplateConditionKeys`<sup>Required</sup> <a name="CreateCloudFormationTemplateConditionKeys" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoConditions.property.CreateCloudFormationTemplateConditionKeys"></a>

```typescript
public readonly CreateCloudFormationTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCloudFormationTemplate action.

---

##### `ListApplicationDependenciesConditionKeys`<sup>Required</sup> <a name="ListApplicationDependenciesConditionKeys" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoConditions.property.ListApplicationDependenciesConditionKeys"></a>

```typescript
public readonly ListApplicationDependenciesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListApplicationDependencies action.

---

##### `ListApplicationVersionsConditionKeys`<sup>Required</sup> <a name="ListApplicationVersionsConditionKeys" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoConditions.property.ListApplicationVersionsConditionKeys"></a>

```typescript
public readonly ListApplicationVersionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListApplicationVersions action.

---

##### `SearchApplicationsConditionKeys`<sup>Required</sup> <a name="SearchApplicationsConditionKeys" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoConditions.property.SearchApplicationsConditionKeys"></a>

```typescript
public readonly SearchApplicationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchApplications action.

---

### ServerlessrepoOperations <a name="ServerlessrepoOperations" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations"></a>

API operation to required IAM actions mapping for serverlessrepo.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.Initializer"></a>

```typescript
import { serverlessrepo } from '@cdk_utils/iam'

new serverlessrepo.ServerlessrepoOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.CreateApplicationVersion">CreateApplicationVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateApplicationVersion API call. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.CreateCloudFormationChangeSet">CreateCloudFormationChangeSet</a></code> | <code>string[]</code> | IAM actions required for the CreateCloudFormationChangeSet API call. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.CreateCloudFormationTemplate">CreateCloudFormationTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateCloudFormationTemplate API call. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.ListApplicationDependencies">ListApplicationDependencies</a></code> | <code>string[]</code> | IAM actions required for the ListApplicationDependencies API call. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.ListApplications">ListApplications</a></code> | <code>string[]</code> | IAM actions required for the ListApplications API call. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.ListApplicationVersions">ListApplicationVersions</a></code> | <code>string[]</code> | IAM actions required for the ListApplicationVersions API call. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.opGetApplication">opGetApplication</a></code> | <code>string[]</code> | IAM actions required for the GetApplication API call. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.opGetApplicationPolicy">opGetApplicationPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetApplicationPolicy API call. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.opGetCloudFormationTemplate">opGetCloudFormationTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetCloudFormationTemplate API call. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.PutApplicationPolicy">PutApplicationPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutApplicationPolicy API call. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.UnshareApplication">UnshareApplication</a></code> | <code>string[]</code> | IAM actions required for the UnshareApplication API call. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.UpdateApplication">UpdateApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplication API call. |

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateApplicationVersion`<sup>Required</sup> <a name="CreateApplicationVersion" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.CreateApplicationVersion"></a>

```typescript
public readonly CreateApplicationVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplicationVersion API call.

---

##### `CreateCloudFormationChangeSet`<sup>Required</sup> <a name="CreateCloudFormationChangeSet" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.CreateCloudFormationChangeSet"></a>

```typescript
public readonly CreateCloudFormationChangeSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateCloudFormationChangeSet API call.

---

##### `CreateCloudFormationTemplate`<sup>Required</sup> <a name="CreateCloudFormationTemplate" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.CreateCloudFormationTemplate"></a>

```typescript
public readonly CreateCloudFormationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateCloudFormationTemplate API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `ListApplicationDependencies`<sup>Required</sup> <a name="ListApplicationDependencies" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.ListApplicationDependencies"></a>

```typescript
public readonly ListApplicationDependencies: string[];
```

- *Type:* string[]

IAM actions required for the ListApplicationDependencies API call.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.ListApplications"></a>

```typescript
public readonly ListApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListApplications API call.

---

##### `ListApplicationVersions`<sup>Required</sup> <a name="ListApplicationVersions" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.ListApplicationVersions"></a>

```typescript
public readonly ListApplicationVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListApplicationVersions API call.

---

##### `opGetApplication`<sup>Required</sup> <a name="opGetApplication" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.opGetApplication"></a>

```typescript
public readonly opGetApplication: string[];
```

- *Type:* string[]

IAM actions required for the GetApplication API call.

---

##### `opGetApplicationPolicy`<sup>Required</sup> <a name="opGetApplicationPolicy" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.opGetApplicationPolicy"></a>

```typescript
public readonly opGetApplicationPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetApplicationPolicy API call.

---

##### `opGetCloudFormationTemplate`<sup>Required</sup> <a name="opGetCloudFormationTemplate" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.opGetCloudFormationTemplate"></a>

```typescript
public readonly opGetCloudFormationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetCloudFormationTemplate API call.

---

##### `PutApplicationPolicy`<sup>Required</sup> <a name="PutApplicationPolicy" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.PutApplicationPolicy"></a>

```typescript
public readonly PutApplicationPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutApplicationPolicy API call.

---

##### `UnshareApplication`<sup>Required</sup> <a name="UnshareApplication" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.UnshareApplication"></a>

```typescript
public readonly UnshareApplication: string[];
```

- *Type:* string[]

IAM actions required for the UnshareApplication API call.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoOperations.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplication API call.

---

### ServerlessrepoResources <a name="ServerlessrepoResources" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoResources"></a>

ARN builders, validators, and parsers for serverlessrepo resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoResources.Initializer"></a>

```typescript
import { serverlessrepo } from '@cdk_utils/iam'

new serverlessrepo.ServerlessrepoResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoResources.applications">applications</a></code> | Builds an ARN for the applications resource. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoResources.isValidApplicationsArn">isValidApplicationsArn</a></code> | Validates whether a string is a valid ARN for the applications resource. |
| <code><a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoResources.parseApplicationsArn">parseApplicationsArn</a></code> | Parses a applications ARN into its components. |

---

##### `applications` <a name="applications" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoResources.applications"></a>

```typescript
import { serverlessrepo } from '@cdk_utils/iam'

serverlessrepo.ServerlessrepoResources.applications(props: ServerlessrepoApplicationsArnProps)
```

Builds an ARN for the applications resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoResources.applications.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.serverlessrepo.ServerlessrepoApplicationsArnProps">ServerlessrepoApplicationsArnProps</a>

---

##### `isValidApplicationsArn` <a name="isValidApplicationsArn" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoResources.isValidApplicationsArn"></a>

```typescript
import { serverlessrepo } from '@cdk_utils/iam'

serverlessrepo.ServerlessrepoResources.isValidApplicationsArn(arn: string)
```

Validates whether a string is a valid ARN for the applications resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoResources.isValidApplicationsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationsArn` <a name="parseApplicationsArn" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoResources.parseApplicationsArn"></a>

```typescript
import { serverlessrepo } from '@cdk_utils/iam'

serverlessrepo.ServerlessrepoResources.parseApplicationsArn(arn: string)
```

Parses a applications ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.serverlessrepo.ServerlessrepoResources.parseApplicationsArn.parameter.arn"></a>

- *Type:* string

---




