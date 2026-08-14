# `opensearch` Submodule <a name="`opensearch` Submodule" id="@cdk_utils/iam.opensearch"></a>


## Structs <a name="Structs" id="Structs"></a>

### OpenSearchApplicationArnComponents <a name="OpenSearchApplicationArnComponents" id="@cdk_utils/iam.opensearch.OpenSearchApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.opensearch.OpenSearchApplicationArnComponents.Initializer"></a>

```typescript
import { opensearch } from '@cdk_utils/iam'

const openSearchApplicationArnComponents: opensearch.OpenSearchApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchApplicationArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.opensearch.OpenSearchApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.opensearch.OpenSearchApplicationArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.opensearch.OpenSearchApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.opensearch.OpenSearchApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OpenSearchApplicationArnProps <a name="OpenSearchApplicationArnProps" id="@cdk_utils/iam.opensearch.OpenSearchApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.opensearch.OpenSearchApplicationArnProps.Initializer"></a>

```typescript
import { opensearch } from '@cdk_utils/iam'

const openSearchApplicationArnProps: opensearch.OpenSearchApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchApplicationArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.opensearch.OpenSearchApplicationArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.opensearch.OpenSearchApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.opensearch.OpenSearchApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.opensearch.OpenSearchApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OpenSearchDatasourceArnComponents <a name="OpenSearchDatasourceArnComponents" id="@cdk_utils/iam.opensearch.OpenSearchDatasourceArnComponents"></a>

Parsed components of a datasource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.opensearch.OpenSearchDatasourceArnComponents.Initializer"></a>

```typescript
import { opensearch } from '@cdk_utils/iam'

const openSearchDatasourceArnComponents: opensearch.OpenSearchDatasourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchDatasourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchDatasourceArnComponents.property.dataSourceName">dataSourceName</a></code> | <code>string</code> | The DataSourceName component. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchDatasourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchDatasourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.opensearch.OpenSearchDatasourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdk_utils/iam.opensearch.OpenSearchDatasourceArnComponents.property.dataSourceName"></a>

```typescript
public readonly dataSourceName: string;
```

- *Type:* string

The DataSourceName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.opensearch.OpenSearchDatasourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.opensearch.OpenSearchDatasourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OpenSearchDatasourceArnProps <a name="OpenSearchDatasourceArnProps" id="@cdk_utils/iam.opensearch.OpenSearchDatasourceArnProps"></a>

Properties for building a datasource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.opensearch.OpenSearchDatasourceArnProps.Initializer"></a>

```typescript
import { opensearch } from '@cdk_utils/iam'

const openSearchDatasourceArnProps: opensearch.OpenSearchDatasourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchDatasourceArnProps.property.dataSourceName">dataSourceName</a></code> | <code>string</code> | The DataSourceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchDatasourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchDatasourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchDatasourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdk_utils/iam.opensearch.OpenSearchDatasourceArnProps.property.dataSourceName"></a>

```typescript
public readonly dataSourceName: string;
```

- *Type:* string

The DataSourceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.opensearch.OpenSearchDatasourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.opensearch.OpenSearchDatasourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.opensearch.OpenSearchDatasourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### OpenSearchActions <a name="OpenSearchActions" id="@cdk_utils/iam.opensearch.OpenSearchActions"></a>

IAM action constants for the opensearch service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.opensearch.OpenSearchActions.Initializer"></a>

```typescript
import { opensearch } from '@cdk_utils/iam'

new opensearch.OpenSearchActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchActions.property.actionGetAutoOptimizeJob">actionGetAutoOptimizeJob</a></code> | <code>string</code> | [Read] opensearch:GetAutoOptimizeJob. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchActions.property.actionGetDirectQuery">actionGetDirectQuery</a></code> | <code>string</code> | [Read] opensearch:GetDirectQuery. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchActions.property.actionGetDirectQueryResult">actionGetDirectQueryResult</a></code> | <code>string</code> | [Read] opensearch:GetDirectQueryResult. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchActions.property.ApplicationAccessAll">ApplicationAccessAll</a></code> | <code>string</code> | [PermissionManagement] opensearch:ApplicationAccessAll. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchActions.property.CancelAutoOptimizeJob">CancelAutoOptimizeJob</a></code> | <code>string</code> | [Write] opensearch:CancelAutoOptimizeJob. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchActions.property.CancelDirectQuery">CancelDirectQuery</a></code> | <code>string</code> | [Write] opensearch:CancelDirectQuery. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchActions.property.DeleteAutoOptimizeJob">DeleteAutoOptimizeJob</a></code> | <code>string</code> | [Write] opensearch:DeleteAutoOptimizeJob. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchActions.property.ListAutoOptimizeJobs">ListAutoOptimizeJobs</a></code> | <code>string</code> | [List] opensearch:ListAutoOptimizeJobs. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchActions.property.StartDirectQuery">StartDirectQuery</a></code> | <code>string</code> | [Write] opensearch:StartDirectQuery. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchActions.property.SubmitAutoOptimizeJob">SubmitAutoOptimizeJob</a></code> | <code>string</code> | [Write] opensearch:SubmitAutoOptimizeJob. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchActions.property.ViewLoginPage">ViewLoginPage</a></code> | <code>string</code> | [PermissionManagement] opensearch:ViewLoginPage. |

---

##### `actionGetAutoOptimizeJob`<sup>Required</sup> <a name="actionGetAutoOptimizeJob" id="@cdk_utils/iam.opensearch.OpenSearchActions.property.actionGetAutoOptimizeJob"></a>

```typescript
public readonly actionGetAutoOptimizeJob: string;
```

- *Type:* string

[Read] opensearch:GetAutoOptimizeJob.

---

##### `actionGetDirectQuery`<sup>Required</sup> <a name="actionGetDirectQuery" id="@cdk_utils/iam.opensearch.OpenSearchActions.property.actionGetDirectQuery"></a>

```typescript
public readonly actionGetDirectQuery: string;
```

- *Type:* string

[Read] opensearch:GetDirectQuery.

---

##### `actionGetDirectQueryResult`<sup>Required</sup> <a name="actionGetDirectQueryResult" id="@cdk_utils/iam.opensearch.OpenSearchActions.property.actionGetDirectQueryResult"></a>

```typescript
public readonly actionGetDirectQueryResult: string;
```

- *Type:* string

[Read] opensearch:GetDirectQueryResult.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.opensearch.OpenSearchActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.opensearch.OpenSearchActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.opensearch.OpenSearchActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.opensearch.OpenSearchActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.opensearch.OpenSearchActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ApplicationAccessAll`<sup>Required</sup> <a name="ApplicationAccessAll" id="@cdk_utils/iam.opensearch.OpenSearchActions.property.ApplicationAccessAll"></a>

```typescript
public readonly ApplicationAccessAll: string;
```

- *Type:* string

[PermissionManagement] opensearch:ApplicationAccessAll.

---

##### `CancelAutoOptimizeJob`<sup>Required</sup> <a name="CancelAutoOptimizeJob" id="@cdk_utils/iam.opensearch.OpenSearchActions.property.CancelAutoOptimizeJob"></a>

```typescript
public readonly CancelAutoOptimizeJob: string;
```

- *Type:* string

[Write] opensearch:CancelAutoOptimizeJob.

---

##### `CancelDirectQuery`<sup>Required</sup> <a name="CancelDirectQuery" id="@cdk_utils/iam.opensearch.OpenSearchActions.property.CancelDirectQuery"></a>

```typescript
public readonly CancelDirectQuery: string;
```

- *Type:* string

[Write] opensearch:CancelDirectQuery.

---

##### `DeleteAutoOptimizeJob`<sup>Required</sup> <a name="DeleteAutoOptimizeJob" id="@cdk_utils/iam.opensearch.OpenSearchActions.property.DeleteAutoOptimizeJob"></a>

```typescript
public readonly DeleteAutoOptimizeJob: string;
```

- *Type:* string

[Write] opensearch:DeleteAutoOptimizeJob.

---

##### `ListAutoOptimizeJobs`<sup>Required</sup> <a name="ListAutoOptimizeJobs" id="@cdk_utils/iam.opensearch.OpenSearchActions.property.ListAutoOptimizeJobs"></a>

```typescript
public readonly ListAutoOptimizeJobs: string;
```

- *Type:* string

[List] opensearch:ListAutoOptimizeJobs.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.opensearch.OpenSearchActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDirectQuery`<sup>Required</sup> <a name="StartDirectQuery" id="@cdk_utils/iam.opensearch.OpenSearchActions.property.StartDirectQuery"></a>

```typescript
public readonly StartDirectQuery: string;
```

- *Type:* string

[Write] opensearch:StartDirectQuery.

---

##### `SubmitAutoOptimizeJob`<sup>Required</sup> <a name="SubmitAutoOptimizeJob" id="@cdk_utils/iam.opensearch.OpenSearchActions.property.SubmitAutoOptimizeJob"></a>

```typescript
public readonly SubmitAutoOptimizeJob: string;
```

- *Type:* string

[Write] opensearch:SubmitAutoOptimizeJob.

---

##### `ViewLoginPage`<sup>Required</sup> <a name="ViewLoginPage" id="@cdk_utils/iam.opensearch.OpenSearchActions.property.ViewLoginPage"></a>

```typescript
public readonly ViewLoginPage: string;
```

- *Type:* string

[PermissionManagement] opensearch:ViewLoginPage.

---

### OpenSearchOperations <a name="OpenSearchOperations" id="@cdk_utils/iam.opensearch.OpenSearchOperations"></a>

API operation to required IAM actions mapping for opensearch.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.opensearch.OpenSearchOperations.Initializer"></a>

```typescript
import { opensearch } from '@cdk_utils/iam'

new opensearch.OpenSearchOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.AcceptInboundConnection">AcceptInboundConnection</a></code> | <code>string[]</code> | IAM actions required for the AcceptInboundConnection API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.AddDataSource">AddDataSource</a></code> | <code>string[]</code> | IAM actions required for the AddDataSource API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.AddDirectQueryDataSource">AddDirectQueryDataSource</a></code> | <code>string[]</code> | IAM actions required for the AddDirectQueryDataSource API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.AddTags">AddTags</a></code> | <code>string[]</code> | IAM actions required for the AddTags API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.AssociatePackage">AssociatePackage</a></code> | <code>string[]</code> | IAM actions required for the AssociatePackage API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.AssociatePackages">AssociatePackages</a></code> | <code>string[]</code> | IAM actions required for the AssociatePackages API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.AttachDataSource">AttachDataSource</a></code> | <code>string[]</code> | IAM actions required for the AttachDataSource API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.AuthorizeVpcEndpointAccess">AuthorizeVpcEndpointAccess</a></code> | <code>string[]</code> | IAM actions required for the AuthorizeVpcEndpointAccess API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.CancelDomainConfigChange">CancelDomainConfigChange</a></code> | <code>string[]</code> | IAM actions required for the CancelDomainConfigChange API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.CancelServiceSoftwareUpdate">CancelServiceSoftwareUpdate</a></code> | <code>string[]</code> | IAM actions required for the CancelServiceSoftwareUpdate API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.CreateDomain">CreateDomain</a></code> | <code>string[]</code> | IAM actions required for the CreateDomain API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.CreateIndex">CreateIndex</a></code> | <code>string[]</code> | IAM actions required for the CreateIndex API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.CreateOutboundConnection">CreateOutboundConnection</a></code> | <code>string[]</code> | IAM actions required for the CreateOutboundConnection API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.CreatePackage">CreatePackage</a></code> | <code>string[]</code> | IAM actions required for the CreatePackage API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.CreateVpcEndpoint">CreateVpcEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateVpcEndpoint API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeleteDataSource">DeleteDataSource</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataSource API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeleteDirectQueryDataSource">DeleteDirectQueryDataSource</a></code> | <code>string[]</code> | IAM actions required for the DeleteDirectQueryDataSource API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeleteDomain">DeleteDomain</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomain API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeleteInboundConnection">DeleteInboundConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteInboundConnection API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeleteIndex">DeleteIndex</a></code> | <code>string[]</code> | IAM actions required for the DeleteIndex API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeleteOutboundConnection">DeleteOutboundConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteOutboundConnection API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeletePackage">DeletePackage</a></code> | <code>string[]</code> | IAM actions required for the DeletePackage API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeleteVpcEndpoint">DeleteVpcEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteVpcEndpoint API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeregisterCapability">DeregisterCapability</a></code> | <code>string[]</code> | IAM actions required for the DeregisterCapability API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeDataSourceAttachment">DescribeDataSourceAttachment</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataSourceAttachment API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeDomain">DescribeDomain</a></code> | <code>string[]</code> | IAM actions required for the DescribeDomain API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeDomainAutoTunes">DescribeDomainAutoTunes</a></code> | <code>string[]</code> | IAM actions required for the DescribeDomainAutoTunes API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeDomainChangeProgress">DescribeDomainChangeProgress</a></code> | <code>string[]</code> | IAM actions required for the DescribeDomainChangeProgress API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeDomainConfig">DescribeDomainConfig</a></code> | <code>string[]</code> | IAM actions required for the DescribeDomainConfig API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeDomainHealth">DescribeDomainHealth</a></code> | <code>string[]</code> | IAM actions required for the DescribeDomainHealth API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeDomainNodes">DescribeDomainNodes</a></code> | <code>string[]</code> | IAM actions required for the DescribeDomainNodes API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeDomains">DescribeDomains</a></code> | <code>string[]</code> | IAM actions required for the DescribeDomains API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeDryRunProgress">DescribeDryRunProgress</a></code> | <code>string[]</code> | IAM actions required for the DescribeDryRunProgress API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeInboundConnections">DescribeInboundConnections</a></code> | <code>string[]</code> | IAM actions required for the DescribeInboundConnections API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeInsightDetails">DescribeInsightDetails</a></code> | <code>string[]</code> | IAM actions required for the DescribeInsightDetails API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeInstanceTypeLimits">DescribeInstanceTypeLimits</a></code> | <code>string[]</code> | IAM actions required for the DescribeInstanceTypeLimits API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeOutboundConnections">DescribeOutboundConnections</a></code> | <code>string[]</code> | IAM actions required for the DescribeOutboundConnections API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribePackages">DescribePackages</a></code> | <code>string[]</code> | IAM actions required for the DescribePackages API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeReservedInstanceOfferings">DescribeReservedInstanceOfferings</a></code> | <code>string[]</code> | IAM actions required for the DescribeReservedInstanceOfferings API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeReservedInstances">DescribeReservedInstances</a></code> | <code>string[]</code> | IAM actions required for the DescribeReservedInstances API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeVpcEndpoints">DescribeVpcEndpoints</a></code> | <code>string[]</code> | IAM actions required for the DescribeVpcEndpoints API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DetachDataSource">DetachDataSource</a></code> | <code>string[]</code> | IAM actions required for the DetachDataSource API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DissociatePackage">DissociatePackage</a></code> | <code>string[]</code> | IAM actions required for the DissociatePackage API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.DissociatePackages">DissociatePackages</a></code> | <code>string[]</code> | IAM actions required for the DissociatePackages API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.InsightFeedback">InsightFeedback</a></code> | <code>string[]</code> | IAM actions required for the InsightFeedback API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListApplications">ListApplications</a></code> | <code>string[]</code> | IAM actions required for the ListApplications API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListDataSourceAttachments">ListDataSourceAttachments</a></code> | <code>string[]</code> | IAM actions required for the ListDataSourceAttachments API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListDataSources">ListDataSources</a></code> | <code>string[]</code> | IAM actions required for the ListDataSources API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListDirectQueryDataSources">ListDirectQueryDataSources</a></code> | <code>string[]</code> | IAM actions required for the ListDirectQueryDataSources API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListDomainMaintenances">ListDomainMaintenances</a></code> | <code>string[]</code> | IAM actions required for the ListDomainMaintenances API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListDomainNames">ListDomainNames</a></code> | <code>string[]</code> | IAM actions required for the ListDomainNames API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListDomainsForPackage">ListDomainsForPackage</a></code> | <code>string[]</code> | IAM actions required for the ListDomainsForPackage API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListInsights">ListInsights</a></code> | <code>string[]</code> | IAM actions required for the ListInsights API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListInstanceTypeDetails">ListInstanceTypeDetails</a></code> | <code>string[]</code> | IAM actions required for the ListInstanceTypeDetails API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListMigrations">ListMigrations</a></code> | <code>string[]</code> | IAM actions required for the ListMigrations API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListPackagesForDomain">ListPackagesForDomain</a></code> | <code>string[]</code> | IAM actions required for the ListPackagesForDomain API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListScheduledActions">ListScheduledActions</a></code> | <code>string[]</code> | IAM actions required for the ListScheduledActions API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListTags">ListTags</a></code> | <code>string[]</code> | IAM actions required for the ListTags API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListVersions">ListVersions</a></code> | <code>string[]</code> | IAM actions required for the ListVersions API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListVpcEndpointAccess">ListVpcEndpointAccess</a></code> | <code>string[]</code> | IAM actions required for the ListVpcEndpointAccess API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListVpcEndpoints">ListVpcEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListVpcEndpoints API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListVpcEndpointsForDomain">ListVpcEndpointsForDomain</a></code> | <code>string[]</code> | IAM actions required for the ListVpcEndpointsForDomain API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetApplication">opGetApplication</a></code> | <code>string[]</code> | IAM actions required for the GetApplication API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetCapability">opGetCapability</a></code> | <code>string[]</code> | IAM actions required for the GetCapability API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetCompatibleVersions">opGetCompatibleVersions</a></code> | <code>string[]</code> | IAM actions required for the GetCompatibleVersions API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetDataSource">opGetDataSource</a></code> | <code>string[]</code> | IAM actions required for the GetDataSource API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetDefaultApplicationSetting">opGetDefaultApplicationSetting</a></code> | <code>string[]</code> | IAM actions required for the GetDefaultApplicationSetting API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetDirectQueryDataSource">opGetDirectQueryDataSource</a></code> | <code>string[]</code> | IAM actions required for the GetDirectQueryDataSource API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetDomainMaintenanceStatus">opGetDomainMaintenanceStatus</a></code> | <code>string[]</code> | IAM actions required for the GetDomainMaintenanceStatus API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetIndex">opGetIndex</a></code> | <code>string[]</code> | IAM actions required for the GetIndex API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetMigration">opGetMigration</a></code> | <code>string[]</code> | IAM actions required for the GetMigration API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetPackageVersionHistory">opGetPackageVersionHistory</a></code> | <code>string[]</code> | IAM actions required for the GetPackageVersionHistory API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetUpgradeHistory">opGetUpgradeHistory</a></code> | <code>string[]</code> | IAM actions required for the GetUpgradeHistory API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetUpgradeStatus">opGetUpgradeStatus</a></code> | <code>string[]</code> | IAM actions required for the GetUpgradeStatus API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.PurchaseReservedInstanceOffering">PurchaseReservedInstanceOffering</a></code> | <code>string[]</code> | IAM actions required for the PurchaseReservedInstanceOffering API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.PutDefaultApplicationSetting">PutDefaultApplicationSetting</a></code> | <code>string[]</code> | IAM actions required for the PutDefaultApplicationSetting API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.RegisterCapability">RegisterCapability</a></code> | <code>string[]</code> | IAM actions required for the RegisterCapability API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.RejectInboundConnection">RejectInboundConnection</a></code> | <code>string[]</code> | IAM actions required for the RejectInboundConnection API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.RemoveTags">RemoveTags</a></code> | <code>string[]</code> | IAM actions required for the RemoveTags API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.RevokeVpcEndpointAccess">RevokeVpcEndpointAccess</a></code> | <code>string[]</code> | IAM actions required for the RevokeVpcEndpointAccess API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.RollbackServiceSoftwareUpdate">RollbackServiceSoftwareUpdate</a></code> | <code>string[]</code> | IAM actions required for the RollbackServiceSoftwareUpdate API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.StartDomainMaintenance">StartDomainMaintenance</a></code> | <code>string[]</code> | IAM actions required for the StartDomainMaintenance API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.StartMigration">StartMigration</a></code> | <code>string[]</code> | IAM actions required for the StartMigration API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.StartServiceSoftwareUpdate">StartServiceSoftwareUpdate</a></code> | <code>string[]</code> | IAM actions required for the StartServiceSoftwareUpdate API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpdateApplication">UpdateApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplication API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpdateDataSource">UpdateDataSource</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataSource API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpdateDirectQueryDataSource">UpdateDirectQueryDataSource</a></code> | <code>string[]</code> | IAM actions required for the UpdateDirectQueryDataSource API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpdateDomainConfig">UpdateDomainConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateDomainConfig API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpdateIndex">UpdateIndex</a></code> | <code>string[]</code> | IAM actions required for the UpdateIndex API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpdatePackage">UpdatePackage</a></code> | <code>string[]</code> | IAM actions required for the UpdatePackage API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpdatePackageScope">UpdatePackageScope</a></code> | <code>string[]</code> | IAM actions required for the UpdatePackageScope API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpdateScheduledAction">UpdateScheduledAction</a></code> | <code>string[]</code> | IAM actions required for the UpdateScheduledAction API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpdateVpcEndpoint">UpdateVpcEndpoint</a></code> | <code>string[]</code> | IAM actions required for the UpdateVpcEndpoint API call. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpgradeDomain">UpgradeDomain</a></code> | <code>string[]</code> | IAM actions required for the UpgradeDomain API call. |

---

##### `AcceptInboundConnection`<sup>Required</sup> <a name="AcceptInboundConnection" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.AcceptInboundConnection"></a>

```typescript
public readonly AcceptInboundConnection: string[];
```

- *Type:* string[]

IAM actions required for the AcceptInboundConnection API call.

---

##### `AddDataSource`<sup>Required</sup> <a name="AddDataSource" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.AddDataSource"></a>

```typescript
public readonly AddDataSource: string[];
```

- *Type:* string[]

IAM actions required for the AddDataSource API call.

---

##### `AddDirectQueryDataSource`<sup>Required</sup> <a name="AddDirectQueryDataSource" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.AddDirectQueryDataSource"></a>

```typescript
public readonly AddDirectQueryDataSource: string[];
```

- *Type:* string[]

IAM actions required for the AddDirectQueryDataSource API call.

---

##### `AddTags`<sup>Required</sup> <a name="AddTags" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.AddTags"></a>

```typescript
public readonly AddTags: string[];
```

- *Type:* string[]

IAM actions required for the AddTags API call.

---

##### `AssociatePackage`<sup>Required</sup> <a name="AssociatePackage" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.AssociatePackage"></a>

```typescript
public readonly AssociatePackage: string[];
```

- *Type:* string[]

IAM actions required for the AssociatePackage API call.

---

##### `AssociatePackages`<sup>Required</sup> <a name="AssociatePackages" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.AssociatePackages"></a>

```typescript
public readonly AssociatePackages: string[];
```

- *Type:* string[]

IAM actions required for the AssociatePackages API call.

---

##### `AttachDataSource`<sup>Required</sup> <a name="AttachDataSource" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.AttachDataSource"></a>

```typescript
public readonly AttachDataSource: string[];
```

- *Type:* string[]

IAM actions required for the AttachDataSource API call.

---

##### `AuthorizeVpcEndpointAccess`<sup>Required</sup> <a name="AuthorizeVpcEndpointAccess" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.AuthorizeVpcEndpointAccess"></a>

```typescript
public readonly AuthorizeVpcEndpointAccess: string[];
```

- *Type:* string[]

IAM actions required for the AuthorizeVpcEndpointAccess API call.

---

##### `CancelDomainConfigChange`<sup>Required</sup> <a name="CancelDomainConfigChange" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.CancelDomainConfigChange"></a>

```typescript
public readonly CancelDomainConfigChange: string[];
```

- *Type:* string[]

IAM actions required for the CancelDomainConfigChange API call.

---

##### `CancelServiceSoftwareUpdate`<sup>Required</sup> <a name="CancelServiceSoftwareUpdate" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.CancelServiceSoftwareUpdate"></a>

```typescript
public readonly CancelServiceSoftwareUpdate: string[];
```

- *Type:* string[]

IAM actions required for the CancelServiceSoftwareUpdate API call.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string[];
```

- *Type:* string[]

IAM actions required for the CreateDomain API call.

---

##### `CreateIndex`<sup>Required</sup> <a name="CreateIndex" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.CreateIndex"></a>

```typescript
public readonly CreateIndex: string[];
```

- *Type:* string[]

IAM actions required for the CreateIndex API call.

---

##### `CreateOutboundConnection`<sup>Required</sup> <a name="CreateOutboundConnection" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.CreateOutboundConnection"></a>

```typescript
public readonly CreateOutboundConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreateOutboundConnection API call.

---

##### `CreatePackage`<sup>Required</sup> <a name="CreatePackage" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.CreatePackage"></a>

```typescript
public readonly CreatePackage: string[];
```

- *Type:* string[]

IAM actions required for the CreatePackage API call.

---

##### `CreateVpcEndpoint`<sup>Required</sup> <a name="CreateVpcEndpoint" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.CreateVpcEndpoint"></a>

```typescript
public readonly CreateVpcEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateVpcEndpoint API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `DeleteDataSource`<sup>Required</sup> <a name="DeleteDataSource" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeleteDataSource"></a>

```typescript
public readonly DeleteDataSource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataSource API call.

---

##### `DeleteDirectQueryDataSource`<sup>Required</sup> <a name="DeleteDirectQueryDataSource" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeleteDirectQueryDataSource"></a>

```typescript
public readonly DeleteDirectQueryDataSource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDirectQueryDataSource API call.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomain API call.

---

##### `DeleteInboundConnection`<sup>Required</sup> <a name="DeleteInboundConnection" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeleteInboundConnection"></a>

```typescript
public readonly DeleteInboundConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInboundConnection API call.

---

##### `DeleteIndex`<sup>Required</sup> <a name="DeleteIndex" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeleteIndex"></a>

```typescript
public readonly DeleteIndex: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIndex API call.

---

##### `DeleteOutboundConnection`<sup>Required</sup> <a name="DeleteOutboundConnection" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeleteOutboundConnection"></a>

```typescript
public readonly DeleteOutboundConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOutboundConnection API call.

---

##### `DeletePackage`<sup>Required</sup> <a name="DeletePackage" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeletePackage"></a>

```typescript
public readonly DeletePackage: string[];
```

- *Type:* string[]

IAM actions required for the DeletePackage API call.

---

##### `DeleteVpcEndpoint`<sup>Required</sup> <a name="DeleteVpcEndpoint" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeleteVpcEndpoint"></a>

```typescript
public readonly DeleteVpcEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVpcEndpoint API call.

---

##### `DeregisterCapability`<sup>Required</sup> <a name="DeregisterCapability" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DeregisterCapability"></a>

```typescript
public readonly DeregisterCapability: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterCapability API call.

---

##### `DescribeDataSourceAttachment`<sup>Required</sup> <a name="DescribeDataSourceAttachment" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeDataSourceAttachment"></a>

```typescript
public readonly DescribeDataSourceAttachment: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataSourceAttachment API call.

---

##### `DescribeDomain`<sup>Required</sup> <a name="DescribeDomain" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeDomain"></a>

```typescript
public readonly DescribeDomain: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDomain API call.

---

##### `DescribeDomainAutoTunes`<sup>Required</sup> <a name="DescribeDomainAutoTunes" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeDomainAutoTunes"></a>

```typescript
public readonly DescribeDomainAutoTunes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDomainAutoTunes API call.

---

##### `DescribeDomainChangeProgress`<sup>Required</sup> <a name="DescribeDomainChangeProgress" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeDomainChangeProgress"></a>

```typescript
public readonly DescribeDomainChangeProgress: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDomainChangeProgress API call.

---

##### `DescribeDomainConfig`<sup>Required</sup> <a name="DescribeDomainConfig" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeDomainConfig"></a>

```typescript
public readonly DescribeDomainConfig: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDomainConfig API call.

---

##### `DescribeDomainHealth`<sup>Required</sup> <a name="DescribeDomainHealth" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeDomainHealth"></a>

```typescript
public readonly DescribeDomainHealth: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDomainHealth API call.

---

##### `DescribeDomainNodes`<sup>Required</sup> <a name="DescribeDomainNodes" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeDomainNodes"></a>

```typescript
public readonly DescribeDomainNodes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDomainNodes API call.

---

##### `DescribeDomains`<sup>Required</sup> <a name="DescribeDomains" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeDomains"></a>

```typescript
public readonly DescribeDomains: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDomains API call.

---

##### `DescribeDryRunProgress`<sup>Required</sup> <a name="DescribeDryRunProgress" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeDryRunProgress"></a>

```typescript
public readonly DescribeDryRunProgress: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDryRunProgress API call.

---

##### `DescribeInboundConnections`<sup>Required</sup> <a name="DescribeInboundConnections" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeInboundConnections"></a>

```typescript
public readonly DescribeInboundConnections: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInboundConnections API call.

---

##### `DescribeInsightDetails`<sup>Required</sup> <a name="DescribeInsightDetails" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeInsightDetails"></a>

```typescript
public readonly DescribeInsightDetails: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInsightDetails API call.

---

##### `DescribeInstanceTypeLimits`<sup>Required</sup> <a name="DescribeInstanceTypeLimits" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeInstanceTypeLimits"></a>

```typescript
public readonly DescribeInstanceTypeLimits: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInstanceTypeLimits API call.

---

##### `DescribeOutboundConnections`<sup>Required</sup> <a name="DescribeOutboundConnections" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeOutboundConnections"></a>

```typescript
public readonly DescribeOutboundConnections: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOutboundConnections API call.

---

##### `DescribePackages`<sup>Required</sup> <a name="DescribePackages" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribePackages"></a>

```typescript
public readonly DescribePackages: string[];
```

- *Type:* string[]

IAM actions required for the DescribePackages API call.

---

##### `DescribeReservedInstanceOfferings`<sup>Required</sup> <a name="DescribeReservedInstanceOfferings" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeReservedInstanceOfferings"></a>

```typescript
public readonly DescribeReservedInstanceOfferings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReservedInstanceOfferings API call.

---

##### `DescribeReservedInstances`<sup>Required</sup> <a name="DescribeReservedInstances" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeReservedInstances"></a>

```typescript
public readonly DescribeReservedInstances: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReservedInstances API call.

---

##### `DescribeVpcEndpoints`<sup>Required</sup> <a name="DescribeVpcEndpoints" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DescribeVpcEndpoints"></a>

```typescript
public readonly DescribeVpcEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVpcEndpoints API call.

---

##### `DetachDataSource`<sup>Required</sup> <a name="DetachDataSource" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DetachDataSource"></a>

```typescript
public readonly DetachDataSource: string[];
```

- *Type:* string[]

IAM actions required for the DetachDataSource API call.

---

##### `DissociatePackage`<sup>Required</sup> <a name="DissociatePackage" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DissociatePackage"></a>

```typescript
public readonly DissociatePackage: string[];
```

- *Type:* string[]

IAM actions required for the DissociatePackage API call.

---

##### `DissociatePackages`<sup>Required</sup> <a name="DissociatePackages" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.DissociatePackages"></a>

```typescript
public readonly DissociatePackages: string[];
```

- *Type:* string[]

IAM actions required for the DissociatePackages API call.

---

##### `InsightFeedback`<sup>Required</sup> <a name="InsightFeedback" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.InsightFeedback"></a>

```typescript
public readonly InsightFeedback: string[];
```

- *Type:* string[]

IAM actions required for the InsightFeedback API call.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListApplications"></a>

```typescript
public readonly ListApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListApplications API call.

---

##### `ListDataSourceAttachments`<sup>Required</sup> <a name="ListDataSourceAttachments" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListDataSourceAttachments"></a>

```typescript
public readonly ListDataSourceAttachments: string[];
```

- *Type:* string[]

IAM actions required for the ListDataSourceAttachments API call.

---

##### `ListDataSources`<sup>Required</sup> <a name="ListDataSources" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListDataSources"></a>

```typescript
public readonly ListDataSources: string[];
```

- *Type:* string[]

IAM actions required for the ListDataSources API call.

---

##### `ListDirectQueryDataSources`<sup>Required</sup> <a name="ListDirectQueryDataSources" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListDirectQueryDataSources"></a>

```typescript
public readonly ListDirectQueryDataSources: string[];
```

- *Type:* string[]

IAM actions required for the ListDirectQueryDataSources API call.

---

##### `ListDomainMaintenances`<sup>Required</sup> <a name="ListDomainMaintenances" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListDomainMaintenances"></a>

```typescript
public readonly ListDomainMaintenances: string[];
```

- *Type:* string[]

IAM actions required for the ListDomainMaintenances API call.

---

##### `ListDomainNames`<sup>Required</sup> <a name="ListDomainNames" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListDomainNames"></a>

```typescript
public readonly ListDomainNames: string[];
```

- *Type:* string[]

IAM actions required for the ListDomainNames API call.

---

##### `ListDomainsForPackage`<sup>Required</sup> <a name="ListDomainsForPackage" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListDomainsForPackage"></a>

```typescript
public readonly ListDomainsForPackage: string[];
```

- *Type:* string[]

IAM actions required for the ListDomainsForPackage API call.

---

##### `ListInsights`<sup>Required</sup> <a name="ListInsights" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListInsights"></a>

```typescript
public readonly ListInsights: string[];
```

- *Type:* string[]

IAM actions required for the ListInsights API call.

---

##### `ListInstanceTypeDetails`<sup>Required</sup> <a name="ListInstanceTypeDetails" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListInstanceTypeDetails"></a>

```typescript
public readonly ListInstanceTypeDetails: string[];
```

- *Type:* string[]

IAM actions required for the ListInstanceTypeDetails API call.

---

##### `ListMigrations`<sup>Required</sup> <a name="ListMigrations" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListMigrations"></a>

```typescript
public readonly ListMigrations: string[];
```

- *Type:* string[]

IAM actions required for the ListMigrations API call.

---

##### `ListPackagesForDomain`<sup>Required</sup> <a name="ListPackagesForDomain" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListPackagesForDomain"></a>

```typescript
public readonly ListPackagesForDomain: string[];
```

- *Type:* string[]

IAM actions required for the ListPackagesForDomain API call.

---

##### `ListScheduledActions`<sup>Required</sup> <a name="ListScheduledActions" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListScheduledActions"></a>

```typescript
public readonly ListScheduledActions: string[];
```

- *Type:* string[]

IAM actions required for the ListScheduledActions API call.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListTags"></a>

```typescript
public readonly ListTags: string[];
```

- *Type:* string[]

IAM actions required for the ListTags API call.

---

##### `ListVersions`<sup>Required</sup> <a name="ListVersions" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListVersions"></a>

```typescript
public readonly ListVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListVersions API call.

---

##### `ListVpcEndpointAccess`<sup>Required</sup> <a name="ListVpcEndpointAccess" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListVpcEndpointAccess"></a>

```typescript
public readonly ListVpcEndpointAccess: string[];
```

- *Type:* string[]

IAM actions required for the ListVpcEndpointAccess API call.

---

##### `ListVpcEndpoints`<sup>Required</sup> <a name="ListVpcEndpoints" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListVpcEndpoints"></a>

```typescript
public readonly ListVpcEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListVpcEndpoints API call.

---

##### `ListVpcEndpointsForDomain`<sup>Required</sup> <a name="ListVpcEndpointsForDomain" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.ListVpcEndpointsForDomain"></a>

```typescript
public readonly ListVpcEndpointsForDomain: string[];
```

- *Type:* string[]

IAM actions required for the ListVpcEndpointsForDomain API call.

---

##### `opGetApplication`<sup>Required</sup> <a name="opGetApplication" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetApplication"></a>

```typescript
public readonly opGetApplication: string[];
```

- *Type:* string[]

IAM actions required for the GetApplication API call.

---

##### `opGetCapability`<sup>Required</sup> <a name="opGetCapability" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetCapability"></a>

```typescript
public readonly opGetCapability: string[];
```

- *Type:* string[]

IAM actions required for the GetCapability API call.

---

##### `opGetCompatibleVersions`<sup>Required</sup> <a name="opGetCompatibleVersions" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetCompatibleVersions"></a>

```typescript
public readonly opGetCompatibleVersions: string[];
```

- *Type:* string[]

IAM actions required for the GetCompatibleVersions API call.

---

##### `opGetDataSource`<sup>Required</sup> <a name="opGetDataSource" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetDataSource"></a>

```typescript
public readonly opGetDataSource: string[];
```

- *Type:* string[]

IAM actions required for the GetDataSource API call.

---

##### `opGetDefaultApplicationSetting`<sup>Required</sup> <a name="opGetDefaultApplicationSetting" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetDefaultApplicationSetting"></a>

```typescript
public readonly opGetDefaultApplicationSetting: string[];
```

- *Type:* string[]

IAM actions required for the GetDefaultApplicationSetting API call.

---

##### `opGetDirectQueryDataSource`<sup>Required</sup> <a name="opGetDirectQueryDataSource" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetDirectQueryDataSource"></a>

```typescript
public readonly opGetDirectQueryDataSource: string[];
```

- *Type:* string[]

IAM actions required for the GetDirectQueryDataSource API call.

---

##### `opGetDomainMaintenanceStatus`<sup>Required</sup> <a name="opGetDomainMaintenanceStatus" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetDomainMaintenanceStatus"></a>

```typescript
public readonly opGetDomainMaintenanceStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetDomainMaintenanceStatus API call.

---

##### `opGetIndex`<sup>Required</sup> <a name="opGetIndex" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetIndex"></a>

```typescript
public readonly opGetIndex: string[];
```

- *Type:* string[]

IAM actions required for the GetIndex API call.

---

##### `opGetMigration`<sup>Required</sup> <a name="opGetMigration" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetMigration"></a>

```typescript
public readonly opGetMigration: string[];
```

- *Type:* string[]

IAM actions required for the GetMigration API call.

---

##### `opGetPackageVersionHistory`<sup>Required</sup> <a name="opGetPackageVersionHistory" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetPackageVersionHistory"></a>

```typescript
public readonly opGetPackageVersionHistory: string[];
```

- *Type:* string[]

IAM actions required for the GetPackageVersionHistory API call.

---

##### `opGetUpgradeHistory`<sup>Required</sup> <a name="opGetUpgradeHistory" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetUpgradeHistory"></a>

```typescript
public readonly opGetUpgradeHistory: string[];
```

- *Type:* string[]

IAM actions required for the GetUpgradeHistory API call.

---

##### `opGetUpgradeStatus`<sup>Required</sup> <a name="opGetUpgradeStatus" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.opGetUpgradeStatus"></a>

```typescript
public readonly opGetUpgradeStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetUpgradeStatus API call.

---

##### `PurchaseReservedInstanceOffering`<sup>Required</sup> <a name="PurchaseReservedInstanceOffering" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.PurchaseReservedInstanceOffering"></a>

```typescript
public readonly PurchaseReservedInstanceOffering: string[];
```

- *Type:* string[]

IAM actions required for the PurchaseReservedInstanceOffering API call.

---

##### `PutDefaultApplicationSetting`<sup>Required</sup> <a name="PutDefaultApplicationSetting" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.PutDefaultApplicationSetting"></a>

```typescript
public readonly PutDefaultApplicationSetting: string[];
```

- *Type:* string[]

IAM actions required for the PutDefaultApplicationSetting API call.

---

##### `RegisterCapability`<sup>Required</sup> <a name="RegisterCapability" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.RegisterCapability"></a>

```typescript
public readonly RegisterCapability: string[];
```

- *Type:* string[]

IAM actions required for the RegisterCapability API call.

---

##### `RejectInboundConnection`<sup>Required</sup> <a name="RejectInboundConnection" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.RejectInboundConnection"></a>

```typescript
public readonly RejectInboundConnection: string[];
```

- *Type:* string[]

IAM actions required for the RejectInboundConnection API call.

---

##### `RemoveTags`<sup>Required</sup> <a name="RemoveTags" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.RemoveTags"></a>

```typescript
public readonly RemoveTags: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTags API call.

---

##### `RevokeVpcEndpointAccess`<sup>Required</sup> <a name="RevokeVpcEndpointAccess" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.RevokeVpcEndpointAccess"></a>

```typescript
public readonly RevokeVpcEndpointAccess: string[];
```

- *Type:* string[]

IAM actions required for the RevokeVpcEndpointAccess API call.

---

##### `RollbackServiceSoftwareUpdate`<sup>Required</sup> <a name="RollbackServiceSoftwareUpdate" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.RollbackServiceSoftwareUpdate"></a>

```typescript
public readonly RollbackServiceSoftwareUpdate: string[];
```

- *Type:* string[]

IAM actions required for the RollbackServiceSoftwareUpdate API call.

---

##### `StartDomainMaintenance`<sup>Required</sup> <a name="StartDomainMaintenance" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.StartDomainMaintenance"></a>

```typescript
public readonly StartDomainMaintenance: string[];
```

- *Type:* string[]

IAM actions required for the StartDomainMaintenance API call.

---

##### `StartMigration`<sup>Required</sup> <a name="StartMigration" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.StartMigration"></a>

```typescript
public readonly StartMigration: string[];
```

- *Type:* string[]

IAM actions required for the StartMigration API call.

---

##### `StartServiceSoftwareUpdate`<sup>Required</sup> <a name="StartServiceSoftwareUpdate" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.StartServiceSoftwareUpdate"></a>

```typescript
public readonly StartServiceSoftwareUpdate: string[];
```

- *Type:* string[]

IAM actions required for the StartServiceSoftwareUpdate API call.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplication API call.

---

##### `UpdateDataSource`<sup>Required</sup> <a name="UpdateDataSource" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpdateDataSource"></a>

```typescript
public readonly UpdateDataSource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataSource API call.

---

##### `UpdateDirectQueryDataSource`<sup>Required</sup> <a name="UpdateDirectQueryDataSource" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpdateDirectQueryDataSource"></a>

```typescript
public readonly UpdateDirectQueryDataSource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDirectQueryDataSource API call.

---

##### `UpdateDomainConfig`<sup>Required</sup> <a name="UpdateDomainConfig" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpdateDomainConfig"></a>

```typescript
public readonly UpdateDomainConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDomainConfig API call.

---

##### `UpdateIndex`<sup>Required</sup> <a name="UpdateIndex" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpdateIndex"></a>

```typescript
public readonly UpdateIndex: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIndex API call.

---

##### `UpdatePackage`<sup>Required</sup> <a name="UpdatePackage" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpdatePackage"></a>

```typescript
public readonly UpdatePackage: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePackage API call.

---

##### `UpdatePackageScope`<sup>Required</sup> <a name="UpdatePackageScope" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpdatePackageScope"></a>

```typescript
public readonly UpdatePackageScope: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePackageScope API call.

---

##### `UpdateScheduledAction`<sup>Required</sup> <a name="UpdateScheduledAction" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpdateScheduledAction"></a>

```typescript
public readonly UpdateScheduledAction: string[];
```

- *Type:* string[]

IAM actions required for the UpdateScheduledAction API call.

---

##### `UpdateVpcEndpoint`<sup>Required</sup> <a name="UpdateVpcEndpoint" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpdateVpcEndpoint"></a>

```typescript
public readonly UpdateVpcEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVpcEndpoint API call.

---

##### `UpgradeDomain`<sup>Required</sup> <a name="UpgradeDomain" id="@cdk_utils/iam.opensearch.OpenSearchOperations.property.UpgradeDomain"></a>

```typescript
public readonly UpgradeDomain: string[];
```

- *Type:* string[]

IAM actions required for the UpgradeDomain API call.

---

### OpenSearchResources <a name="OpenSearchResources" id="@cdk_utils/iam.opensearch.OpenSearchResources"></a>

ARN builders, validators, and parsers for opensearch resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.opensearch.OpenSearchResources.Initializer"></a>

```typescript
import { opensearch } from '@cdk_utils/iam'

new opensearch.OpenSearchResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchResources.datasource">datasource</a></code> | Builds an ARN for the datasource resource. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchResources.isValidDatasourceArn">isValidDatasourceArn</a></code> | Validates whether a string is a valid ARN for the datasource resource. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |
| <code><a href="#@cdk_utils/iam.opensearch.OpenSearchResources.parseDatasourceArn">parseDatasourceArn</a></code> | Parses a datasource ARN into its components. |

---

##### `application` <a name="application" id="@cdk_utils/iam.opensearch.OpenSearchResources.application"></a>

```typescript
import { opensearch } from '@cdk_utils/iam'

opensearch.OpenSearchResources.application(props: OpenSearchApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.opensearch.OpenSearchResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.opensearch.OpenSearchApplicationArnProps">OpenSearchApplicationArnProps</a>

---

##### `datasource` <a name="datasource" id="@cdk_utils/iam.opensearch.OpenSearchResources.datasource"></a>

```typescript
import { opensearch } from '@cdk_utils/iam'

opensearch.OpenSearchResources.datasource(props: OpenSearchDatasourceArnProps)
```

Builds an ARN for the datasource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.opensearch.OpenSearchResources.datasource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.opensearch.OpenSearchDatasourceArnProps">OpenSearchDatasourceArnProps</a>

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.opensearch.OpenSearchResources.isValidApplicationArn"></a>

```typescript
import { opensearch } from '@cdk_utils/iam'

opensearch.OpenSearchResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.opensearch.OpenSearchResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasourceArn` <a name="isValidDatasourceArn" id="@cdk_utils/iam.opensearch.OpenSearchResources.isValidDatasourceArn"></a>

```typescript
import { opensearch } from '@cdk_utils/iam'

opensearch.OpenSearchResources.isValidDatasourceArn(arn: string)
```

Validates whether a string is a valid ARN for the datasource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.opensearch.OpenSearchResources.isValidDatasourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.opensearch.OpenSearchResources.parseApplicationArn"></a>

```typescript
import { opensearch } from '@cdk_utils/iam'

opensearch.OpenSearchResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.opensearch.OpenSearchResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasourceArn` <a name="parseDatasourceArn" id="@cdk_utils/iam.opensearch.OpenSearchResources.parseDatasourceArn"></a>

```typescript
import { opensearch } from '@cdk_utils/iam'

opensearch.OpenSearchResources.parseDatasourceArn(arn: string)
```

Parses a datasource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.opensearch.OpenSearchResources.parseDatasourceArn.parameter.arn"></a>

- *Type:* string

---




