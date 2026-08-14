# `kinesisanalytics` Submodule <a name="`kinesisanalytics` Submodule" id="@cdk_utils/iam.kinesisanalytics"></a>


## Structs <a name="Structs" id="Structs"></a>

### KinesisanalyticsApplicationArnComponents <a name="KinesisanalyticsApplicationArnComponents" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnComponents.Initializer"></a>

```typescript
import { kinesisanalytics } from '@cdk_utils/iam'

const kinesisanalyticsApplicationArnComponents: kinesisanalytics.KinesisanalyticsApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnComponents.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnComponents.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### KinesisanalyticsApplicationArnProps <a name="KinesisanalyticsApplicationArnProps" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnProps.Initializer"></a>

```typescript
import { kinesisanalytics } from '@cdk_utils/iam'

const kinesisanalyticsApplicationArnProps: kinesisanalytics.KinesisanalyticsApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnProps.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnProps.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisanalyticsActions <a name="KinesisanalyticsActions" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions"></a>

IAM action constants for the kinesisanalytics service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.Initializer"></a>

```typescript
import { kinesisanalytics } from '@cdk_utils/iam'

new kinesisanalytics.KinesisanalyticsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.actionGetApplicationState">actionGetApplicationState</a></code> | <code>string</code> | [Read] kinesisanalytics:GetApplicationState. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AddApplicationCloudWatchLoggingOption">AddApplicationCloudWatchLoggingOption</a></code> | <code>string</code> | [Write] kinesisanalytics:AddApplicationCloudWatchLoggingOption. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AddApplicationInput">AddApplicationInput</a></code> | <code>string</code> | [Write] kinesisanalytics:AddApplicationInput. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AddApplicationInputProcessingConfiguration">AddApplicationInputProcessingConfiguration</a></code> | <code>string</code> | [Write] kinesisanalytics:AddApplicationInputProcessingConfiguration. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AddApplicationOutput">AddApplicationOutput</a></code> | <code>string</code> | [Write] kinesisanalytics:AddApplicationOutput. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AddApplicationReferenceDataSource">AddApplicationReferenceDataSource</a></code> | <code>string</code> | [Write] kinesisanalytics:AddApplicationReferenceDataSource. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AddApplicationVpcConfiguration">AddApplicationVpcConfiguration</a></code> | <code>string</code> | [Write] kinesisanalytics:AddApplicationVpcConfiguration. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] kinesisanalytics:CreateApplication. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.CreateApplicationPresignedUrl">CreateApplicationPresignedUrl</a></code> | <code>string</code> | [Read] kinesisanalytics:CreateApplicationPresignedUrl. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.CreateApplicationSnapshot">CreateApplicationSnapshot</a></code> | <code>string</code> | [Write] kinesisanalytics:CreateApplicationSnapshot. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] kinesisanalytics:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DeleteApplicationCloudWatchLoggingOption">DeleteApplicationCloudWatchLoggingOption</a></code> | <code>string</code> | [Write] kinesisanalytics:DeleteApplicationCloudWatchLoggingOption. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DeleteApplicationInputProcessingConfiguration">DeleteApplicationInputProcessingConfiguration</a></code> | <code>string</code> | [Write] kinesisanalytics:DeleteApplicationInputProcessingConfiguration. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DeleteApplicationOutput">DeleteApplicationOutput</a></code> | <code>string</code> | [Write] kinesisanalytics:DeleteApplicationOutput. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DeleteApplicationReferenceDataSource">DeleteApplicationReferenceDataSource</a></code> | <code>string</code> | [Write] kinesisanalytics:DeleteApplicationReferenceDataSource. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DeleteApplicationSnapshot">DeleteApplicationSnapshot</a></code> | <code>string</code> | [Write] kinesisanalytics:DeleteApplicationSnapshot. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DeleteApplicationVpcConfiguration">DeleteApplicationVpcConfiguration</a></code> | <code>string</code> | [Write] kinesisanalytics:DeleteApplicationVpcConfiguration. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DescribeApplication">DescribeApplication</a></code> | <code>string</code> | [Read] kinesisanalytics:DescribeApplication. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DescribeApplicationOperation">DescribeApplicationOperation</a></code> | <code>string</code> | [Read] kinesisanalytics:DescribeApplicationOperation. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DescribeApplicationSnapshot">DescribeApplicationSnapshot</a></code> | <code>string</code> | [Read] kinesisanalytics:DescribeApplicationSnapshot. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DescribeApplicationVersion">DescribeApplicationVersion</a></code> | <code>string</code> | [Read] kinesisanalytics:DescribeApplicationVersion. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DiscoverInputSchema">DiscoverInputSchema</a></code> | <code>string</code> | [Read] kinesisanalytics:DiscoverInputSchema. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.ListApplicationOperations">ListApplicationOperations</a></code> | <code>string</code> | [Read] kinesisanalytics:ListApplicationOperations. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.ListApplications">ListApplications</a></code> | <code>string</code> | [List] kinesisanalytics:ListApplications. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.ListApplicationSnapshots">ListApplicationSnapshots</a></code> | <code>string</code> | [Read] kinesisanalytics:ListApplicationSnapshots. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.ListApplicationVersions">ListApplicationVersions</a></code> | <code>string</code> | [Read] kinesisanalytics:ListApplicationVersions. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] kinesisanalytics:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.RollbackApplication">RollbackApplication</a></code> | <code>string</code> | [Write] kinesisanalytics:RollbackApplication. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.StartApplication">StartApplication</a></code> | <code>string</code> | [Write] kinesisanalytics:StartApplication. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.StopApplication">StopApplication</a></code> | <code>string</code> | [Write] kinesisanalytics:StopApplication. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] kinesisanalytics:TagResource. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] kinesisanalytics:UntagResource. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.UpdateApplication">UpdateApplication</a></code> | <code>string</code> | [Write] kinesisanalytics:UpdateApplication. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.UpdateApplicationMaintenanceConfiguration">UpdateApplicationMaintenanceConfiguration</a></code> | <code>string</code> | [Write] kinesisanalytics:UpdateApplicationMaintenanceConfiguration. |

---

##### `actionGetApplicationState`<sup>Required</sup> <a name="actionGetApplicationState" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.actionGetApplicationState"></a>

```typescript
public readonly actionGetApplicationState: string;
```

- *Type:* string

[Read] kinesisanalytics:GetApplicationState.

---

##### `AddApplicationCloudWatchLoggingOption`<sup>Required</sup> <a name="AddApplicationCloudWatchLoggingOption" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AddApplicationCloudWatchLoggingOption"></a>

```typescript
public readonly AddApplicationCloudWatchLoggingOption: string;
```

- *Type:* string

[Write] kinesisanalytics:AddApplicationCloudWatchLoggingOption.

---

##### `AddApplicationInput`<sup>Required</sup> <a name="AddApplicationInput" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AddApplicationInput"></a>

```typescript
public readonly AddApplicationInput: string;
```

- *Type:* string

[Write] kinesisanalytics:AddApplicationInput.

---

##### `AddApplicationInputProcessingConfiguration`<sup>Required</sup> <a name="AddApplicationInputProcessingConfiguration" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AddApplicationInputProcessingConfiguration"></a>

```typescript
public readonly AddApplicationInputProcessingConfiguration: string;
```

- *Type:* string

[Write] kinesisanalytics:AddApplicationInputProcessingConfiguration.

---

##### `AddApplicationOutput`<sup>Required</sup> <a name="AddApplicationOutput" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AddApplicationOutput"></a>

```typescript
public readonly AddApplicationOutput: string;
```

- *Type:* string

[Write] kinesisanalytics:AddApplicationOutput.

---

##### `AddApplicationReferenceDataSource`<sup>Required</sup> <a name="AddApplicationReferenceDataSource" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AddApplicationReferenceDataSource"></a>

```typescript
public readonly AddApplicationReferenceDataSource: string;
```

- *Type:* string

[Write] kinesisanalytics:AddApplicationReferenceDataSource.

---

##### `AddApplicationVpcConfiguration`<sup>Required</sup> <a name="AddApplicationVpcConfiguration" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AddApplicationVpcConfiguration"></a>

```typescript
public readonly AddApplicationVpcConfiguration: string;
```

- *Type:* string

[Write] kinesisanalytics:AddApplicationVpcConfiguration.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] kinesisanalytics:CreateApplication.

---

##### `CreateApplicationPresignedUrl`<sup>Required</sup> <a name="CreateApplicationPresignedUrl" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.CreateApplicationPresignedUrl"></a>

```typescript
public readonly CreateApplicationPresignedUrl: string;
```

- *Type:* string

[Read] kinesisanalytics:CreateApplicationPresignedUrl.

---

##### `CreateApplicationSnapshot`<sup>Required</sup> <a name="CreateApplicationSnapshot" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.CreateApplicationSnapshot"></a>

```typescript
public readonly CreateApplicationSnapshot: string;
```

- *Type:* string

[Write] kinesisanalytics:CreateApplicationSnapshot.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] kinesisanalytics:DeleteApplication.

---

##### `DeleteApplicationCloudWatchLoggingOption`<sup>Required</sup> <a name="DeleteApplicationCloudWatchLoggingOption" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DeleteApplicationCloudWatchLoggingOption"></a>

```typescript
public readonly DeleteApplicationCloudWatchLoggingOption: string;
```

- *Type:* string

[Write] kinesisanalytics:DeleteApplicationCloudWatchLoggingOption.

---

##### `DeleteApplicationInputProcessingConfiguration`<sup>Required</sup> <a name="DeleteApplicationInputProcessingConfiguration" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DeleteApplicationInputProcessingConfiguration"></a>

```typescript
public readonly DeleteApplicationInputProcessingConfiguration: string;
```

- *Type:* string

[Write] kinesisanalytics:DeleteApplicationInputProcessingConfiguration.

---

##### `DeleteApplicationOutput`<sup>Required</sup> <a name="DeleteApplicationOutput" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DeleteApplicationOutput"></a>

```typescript
public readonly DeleteApplicationOutput: string;
```

- *Type:* string

[Write] kinesisanalytics:DeleteApplicationOutput.

---

##### `DeleteApplicationReferenceDataSource`<sup>Required</sup> <a name="DeleteApplicationReferenceDataSource" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DeleteApplicationReferenceDataSource"></a>

```typescript
public readonly DeleteApplicationReferenceDataSource: string;
```

- *Type:* string

[Write] kinesisanalytics:DeleteApplicationReferenceDataSource.

---

##### `DeleteApplicationSnapshot`<sup>Required</sup> <a name="DeleteApplicationSnapshot" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DeleteApplicationSnapshot"></a>

```typescript
public readonly DeleteApplicationSnapshot: string;
```

- *Type:* string

[Write] kinesisanalytics:DeleteApplicationSnapshot.

---

##### `DeleteApplicationVpcConfiguration`<sup>Required</sup> <a name="DeleteApplicationVpcConfiguration" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DeleteApplicationVpcConfiguration"></a>

```typescript
public readonly DeleteApplicationVpcConfiguration: string;
```

- *Type:* string

[Write] kinesisanalytics:DeleteApplicationVpcConfiguration.

---

##### `DescribeApplication`<sup>Required</sup> <a name="DescribeApplication" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DescribeApplication"></a>

```typescript
public readonly DescribeApplication: string;
```

- *Type:* string

[Read] kinesisanalytics:DescribeApplication.

---

##### `DescribeApplicationOperation`<sup>Required</sup> <a name="DescribeApplicationOperation" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DescribeApplicationOperation"></a>

```typescript
public readonly DescribeApplicationOperation: string;
```

- *Type:* string

[Read] kinesisanalytics:DescribeApplicationOperation.

---

##### `DescribeApplicationSnapshot`<sup>Required</sup> <a name="DescribeApplicationSnapshot" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DescribeApplicationSnapshot"></a>

```typescript
public readonly DescribeApplicationSnapshot: string;
```

- *Type:* string

[Read] kinesisanalytics:DescribeApplicationSnapshot.

---

##### `DescribeApplicationVersion`<sup>Required</sup> <a name="DescribeApplicationVersion" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DescribeApplicationVersion"></a>

```typescript
public readonly DescribeApplicationVersion: string;
```

- *Type:* string

[Read] kinesisanalytics:DescribeApplicationVersion.

---

##### `DiscoverInputSchema`<sup>Required</sup> <a name="DiscoverInputSchema" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.DiscoverInputSchema"></a>

```typescript
public readonly DiscoverInputSchema: string;
```

- *Type:* string

[Read] kinesisanalytics:DiscoverInputSchema.

---

##### `ListApplicationOperations`<sup>Required</sup> <a name="ListApplicationOperations" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.ListApplicationOperations"></a>

```typescript
public readonly ListApplicationOperations: string;
```

- *Type:* string

[Read] kinesisanalytics:ListApplicationOperations.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.ListApplications"></a>

```typescript
public readonly ListApplications: string;
```

- *Type:* string

[List] kinesisanalytics:ListApplications.

---

##### `ListApplicationSnapshots`<sup>Required</sup> <a name="ListApplicationSnapshots" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.ListApplicationSnapshots"></a>

```typescript
public readonly ListApplicationSnapshots: string;
```

- *Type:* string

[Read] kinesisanalytics:ListApplicationSnapshots.

---

##### `ListApplicationVersions`<sup>Required</sup> <a name="ListApplicationVersions" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.ListApplicationVersions"></a>

```typescript
public readonly ListApplicationVersions: string;
```

- *Type:* string

[Read] kinesisanalytics:ListApplicationVersions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] kinesisanalytics:ListTagsForResource.

---

##### `RollbackApplication`<sup>Required</sup> <a name="RollbackApplication" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.RollbackApplication"></a>

```typescript
public readonly RollbackApplication: string;
```

- *Type:* string

[Write] kinesisanalytics:RollbackApplication.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartApplication`<sup>Required</sup> <a name="StartApplication" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.StartApplication"></a>

```typescript
public readonly StartApplication: string;
```

- *Type:* string

[Write] kinesisanalytics:StartApplication.

---

##### `StopApplication`<sup>Required</sup> <a name="StopApplication" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.StopApplication"></a>

```typescript
public readonly StopApplication: string;
```

- *Type:* string

[Write] kinesisanalytics:StopApplication.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] kinesisanalytics:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] kinesisanalytics:UntagResource.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string;
```

- *Type:* string

[Write] kinesisanalytics:UpdateApplication.

---

##### `UpdateApplicationMaintenanceConfiguration`<sup>Required</sup> <a name="UpdateApplicationMaintenanceConfiguration" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsActions.property.UpdateApplicationMaintenanceConfiguration"></a>

```typescript
public readonly UpdateApplicationMaintenanceConfiguration: string;
```

- *Type:* string

[Write] kinesisanalytics:UpdateApplicationMaintenanceConfiguration.

---

### KinesisanalyticsConditions <a name="KinesisanalyticsConditions" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions"></a>

Condition key constants and builders for kinesisanalytics.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.Initializer"></a>

```typescript
import { kinesisanalytics } from '@cdk_utils/iam'

new kinesisanalytics.KinesisanalyticsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.requestTag"></a>

```typescript
import { kinesisanalytics } from '@cdk_utils/iam'

kinesisanalytics.KinesisanalyticsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.resourceTag"></a>

```typescript
import { kinesisanalytics } from '@cdk_utils/iam'

kinesisanalytics.KinesisanalyticsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.tagKeys"></a>

```typescript
import { kinesisanalytics } from '@cdk_utils/iam'

kinesisanalytics.KinesisanalyticsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.property.CreateApplicationConditionKeys">CreateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplication action. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateApplicationConditionKeys`<sup>Required</sup> <a name="CreateApplicationConditionKeys" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.property.CreateApplicationConditionKeys"></a>

```typescript
public readonly CreateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplication action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### KinesisanalyticsOperations <a name="KinesisanalyticsOperations" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations"></a>

API operation to required IAM actions mapping for kinesisanalytics.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.Initializer"></a>

```typescript
import { kinesisanalytics } from '@cdk_utils/iam'

new kinesisanalytics.KinesisanalyticsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.AddApplicationCloudWatchLoggingOption">AddApplicationCloudWatchLoggingOption</a></code> | <code>string[]</code> | IAM actions required for the AddApplicationCloudWatchLoggingOption API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.AddApplicationInput">AddApplicationInput</a></code> | <code>string[]</code> | IAM actions required for the AddApplicationInput API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.AddApplicationInputProcessingConfiguration">AddApplicationInputProcessingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the AddApplicationInputProcessingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.AddApplicationOutput">AddApplicationOutput</a></code> | <code>string[]</code> | IAM actions required for the AddApplicationOutput API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.AddApplicationReferenceDataSource">AddApplicationReferenceDataSource</a></code> | <code>string[]</code> | IAM actions required for the AddApplicationReferenceDataSource API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.AddApplicationVpcConfiguration">AddApplicationVpcConfiguration</a></code> | <code>string[]</code> | IAM actions required for the AddApplicationVpcConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.CreateApplicationPresignedUrl">CreateApplicationPresignedUrl</a></code> | <code>string[]</code> | IAM actions required for the CreateApplicationPresignedUrl API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.CreateApplicationSnapshot">CreateApplicationSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateApplicationSnapshot API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DeleteApplicationCloudWatchLoggingOption">DeleteApplicationCloudWatchLoggingOption</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplicationCloudWatchLoggingOption API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DeleteApplicationInputProcessingConfiguration">DeleteApplicationInputProcessingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplicationInputProcessingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DeleteApplicationOutput">DeleteApplicationOutput</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplicationOutput API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DeleteApplicationReferenceDataSource">DeleteApplicationReferenceDataSource</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplicationReferenceDataSource API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DeleteApplicationSnapshot">DeleteApplicationSnapshot</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplicationSnapshot API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DeleteApplicationVpcConfiguration">DeleteApplicationVpcConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplicationVpcConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DescribeApplication">DescribeApplication</a></code> | <code>string[]</code> | IAM actions required for the DescribeApplication API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DescribeApplicationOperation">DescribeApplicationOperation</a></code> | <code>string[]</code> | IAM actions required for the DescribeApplicationOperation API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DescribeApplicationSnapshot">DescribeApplicationSnapshot</a></code> | <code>string[]</code> | IAM actions required for the DescribeApplicationSnapshot API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DescribeApplicationVersion">DescribeApplicationVersion</a></code> | <code>string[]</code> | IAM actions required for the DescribeApplicationVersion API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DiscoverInputSchema">DiscoverInputSchema</a></code> | <code>string[]</code> | IAM actions required for the DiscoverInputSchema API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.ListApplicationOperations">ListApplicationOperations</a></code> | <code>string[]</code> | IAM actions required for the ListApplicationOperations API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.ListApplications">ListApplications</a></code> | <code>string[]</code> | IAM actions required for the ListApplications API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.ListApplicationSnapshots">ListApplicationSnapshots</a></code> | <code>string[]</code> | IAM actions required for the ListApplicationSnapshots API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.ListApplicationVersions">ListApplicationVersions</a></code> | <code>string[]</code> | IAM actions required for the ListApplicationVersions API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.RollbackApplication">RollbackApplication</a></code> | <code>string[]</code> | IAM actions required for the RollbackApplication API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.StartApplication">StartApplication</a></code> | <code>string[]</code> | IAM actions required for the StartApplication API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.StopApplication">StopApplication</a></code> | <code>string[]</code> | IAM actions required for the StopApplication API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.UpdateApplication">UpdateApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplication API call. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.UpdateApplicationMaintenanceConfiguration">UpdateApplicationMaintenanceConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplicationMaintenanceConfiguration API call. |

---

##### `AddApplicationCloudWatchLoggingOption`<sup>Required</sup> <a name="AddApplicationCloudWatchLoggingOption" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.AddApplicationCloudWatchLoggingOption"></a>

```typescript
public readonly AddApplicationCloudWatchLoggingOption: string[];
```

- *Type:* string[]

IAM actions required for the AddApplicationCloudWatchLoggingOption API call.

---

##### `AddApplicationInput`<sup>Required</sup> <a name="AddApplicationInput" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.AddApplicationInput"></a>

```typescript
public readonly AddApplicationInput: string[];
```

- *Type:* string[]

IAM actions required for the AddApplicationInput API call.

---

##### `AddApplicationInputProcessingConfiguration`<sup>Required</sup> <a name="AddApplicationInputProcessingConfiguration" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.AddApplicationInputProcessingConfiguration"></a>

```typescript
public readonly AddApplicationInputProcessingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the AddApplicationInputProcessingConfiguration API call.

---

##### `AddApplicationOutput`<sup>Required</sup> <a name="AddApplicationOutput" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.AddApplicationOutput"></a>

```typescript
public readonly AddApplicationOutput: string[];
```

- *Type:* string[]

IAM actions required for the AddApplicationOutput API call.

---

##### `AddApplicationReferenceDataSource`<sup>Required</sup> <a name="AddApplicationReferenceDataSource" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.AddApplicationReferenceDataSource"></a>

```typescript
public readonly AddApplicationReferenceDataSource: string[];
```

- *Type:* string[]

IAM actions required for the AddApplicationReferenceDataSource API call.

---

##### `AddApplicationVpcConfiguration`<sup>Required</sup> <a name="AddApplicationVpcConfiguration" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.AddApplicationVpcConfiguration"></a>

```typescript
public readonly AddApplicationVpcConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the AddApplicationVpcConfiguration API call.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateApplicationPresignedUrl`<sup>Required</sup> <a name="CreateApplicationPresignedUrl" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.CreateApplicationPresignedUrl"></a>

```typescript
public readonly CreateApplicationPresignedUrl: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplicationPresignedUrl API call.

---

##### `CreateApplicationSnapshot`<sup>Required</sup> <a name="CreateApplicationSnapshot" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.CreateApplicationSnapshot"></a>

```typescript
public readonly CreateApplicationSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplicationSnapshot API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `DeleteApplicationCloudWatchLoggingOption`<sup>Required</sup> <a name="DeleteApplicationCloudWatchLoggingOption" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DeleteApplicationCloudWatchLoggingOption"></a>

```typescript
public readonly DeleteApplicationCloudWatchLoggingOption: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplicationCloudWatchLoggingOption API call.

---

##### `DeleteApplicationInputProcessingConfiguration`<sup>Required</sup> <a name="DeleteApplicationInputProcessingConfiguration" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DeleteApplicationInputProcessingConfiguration"></a>

```typescript
public readonly DeleteApplicationInputProcessingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplicationInputProcessingConfiguration API call.

---

##### `DeleteApplicationOutput`<sup>Required</sup> <a name="DeleteApplicationOutput" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DeleteApplicationOutput"></a>

```typescript
public readonly DeleteApplicationOutput: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplicationOutput API call.

---

##### `DeleteApplicationReferenceDataSource`<sup>Required</sup> <a name="DeleteApplicationReferenceDataSource" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DeleteApplicationReferenceDataSource"></a>

```typescript
public readonly DeleteApplicationReferenceDataSource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplicationReferenceDataSource API call.

---

##### `DeleteApplicationSnapshot`<sup>Required</sup> <a name="DeleteApplicationSnapshot" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DeleteApplicationSnapshot"></a>

```typescript
public readonly DeleteApplicationSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplicationSnapshot API call.

---

##### `DeleteApplicationVpcConfiguration`<sup>Required</sup> <a name="DeleteApplicationVpcConfiguration" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DeleteApplicationVpcConfiguration"></a>

```typescript
public readonly DeleteApplicationVpcConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplicationVpcConfiguration API call.

---

##### `DescribeApplication`<sup>Required</sup> <a name="DescribeApplication" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DescribeApplication"></a>

```typescript
public readonly DescribeApplication: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApplication API call.

---

##### `DescribeApplicationOperation`<sup>Required</sup> <a name="DescribeApplicationOperation" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DescribeApplicationOperation"></a>

```typescript
public readonly DescribeApplicationOperation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApplicationOperation API call.

---

##### `DescribeApplicationSnapshot`<sup>Required</sup> <a name="DescribeApplicationSnapshot" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DescribeApplicationSnapshot"></a>

```typescript
public readonly DescribeApplicationSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApplicationSnapshot API call.

---

##### `DescribeApplicationVersion`<sup>Required</sup> <a name="DescribeApplicationVersion" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DescribeApplicationVersion"></a>

```typescript
public readonly DescribeApplicationVersion: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApplicationVersion API call.

---

##### `DiscoverInputSchema`<sup>Required</sup> <a name="DiscoverInputSchema" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.DiscoverInputSchema"></a>

```typescript
public readonly DiscoverInputSchema: string[];
```

- *Type:* string[]

IAM actions required for the DiscoverInputSchema API call.

---

##### `ListApplicationOperations`<sup>Required</sup> <a name="ListApplicationOperations" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.ListApplicationOperations"></a>

```typescript
public readonly ListApplicationOperations: string[];
```

- *Type:* string[]

IAM actions required for the ListApplicationOperations API call.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.ListApplications"></a>

```typescript
public readonly ListApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListApplications API call.

---

##### `ListApplicationSnapshots`<sup>Required</sup> <a name="ListApplicationSnapshots" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.ListApplicationSnapshots"></a>

```typescript
public readonly ListApplicationSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the ListApplicationSnapshots API call.

---

##### `ListApplicationVersions`<sup>Required</sup> <a name="ListApplicationVersions" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.ListApplicationVersions"></a>

```typescript
public readonly ListApplicationVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListApplicationVersions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `RollbackApplication`<sup>Required</sup> <a name="RollbackApplication" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.RollbackApplication"></a>

```typescript
public readonly RollbackApplication: string[];
```

- *Type:* string[]

IAM actions required for the RollbackApplication API call.

---

##### `StartApplication`<sup>Required</sup> <a name="StartApplication" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.StartApplication"></a>

```typescript
public readonly StartApplication: string[];
```

- *Type:* string[]

IAM actions required for the StartApplication API call.

---

##### `StopApplication`<sup>Required</sup> <a name="StopApplication" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.StopApplication"></a>

```typescript
public readonly StopApplication: string[];
```

- *Type:* string[]

IAM actions required for the StopApplication API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplication API call.

---

##### `UpdateApplicationMaintenanceConfiguration`<sup>Required</sup> <a name="UpdateApplicationMaintenanceConfiguration" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsOperations.property.UpdateApplicationMaintenanceConfiguration"></a>

```typescript
public readonly UpdateApplicationMaintenanceConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplicationMaintenanceConfiguration API call.

---

### KinesisanalyticsResources <a name="KinesisanalyticsResources" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsResources"></a>

ARN builders, validators, and parsers for kinesisanalytics resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsResources.Initializer"></a>

```typescript
import { kinesisanalytics } from '@cdk_utils/iam'

new kinesisanalytics.KinesisanalyticsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |

---

##### `application` <a name="application" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsResources.application"></a>

```typescript
import { kinesisanalytics } from '@cdk_utils/iam'

kinesisanalytics.KinesisanalyticsResources.application(props: KinesisanalyticsApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kinesisanalytics.KinesisanalyticsApplicationArnProps">KinesisanalyticsApplicationArnProps</a>

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsResources.isValidApplicationArn"></a>

```typescript
import { kinesisanalytics } from '@cdk_utils/iam'

kinesisanalytics.KinesisanalyticsResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsResources.parseApplicationArn"></a>

```typescript
import { kinesisanalytics } from '@cdk_utils/iam'

kinesisanalytics.KinesisanalyticsResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kinesisanalytics.KinesisanalyticsResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---




