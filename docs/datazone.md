# `datazone` Submodule <a name="`datazone` Submodule" id="@cdk_utils/iam.datazone"></a>


## Structs <a name="Structs" id="Structs"></a>

### DatazoneDomainArnComponents <a name="DatazoneDomainArnComponents" id="@cdk_utils/iam.datazone.DatazoneDomainArnComponents"></a>

Parsed components of a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.datazone.DatazoneDomainArnComponents.Initializer"></a>

```typescript
import { datazone } from '@cdk_utils/iam'

const datazoneDomainArnComponents: datazone.DatazoneDomainArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneDomainArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneDomainArnComponents.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneDomainArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneDomainArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.datazone.DatazoneDomainArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.datazone.DatazoneDomainArnComponents.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.datazone.DatazoneDomainArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.datazone.DatazoneDomainArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DatazoneDomainArnProps <a name="DatazoneDomainArnProps" id="@cdk_utils/iam.datazone.DatazoneDomainArnProps"></a>

Properties for building a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.datazone.DatazoneDomainArnProps.Initializer"></a>

```typescript
import { datazone } from '@cdk_utils/iam'

const datazoneDomainArnProps: datazone.DatazoneDomainArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneDomainArnProps.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneDomainArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneDomainArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneDomainArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.datazone.DatazoneDomainArnProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.datazone.DatazoneDomainArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.datazone.DatazoneDomainArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.datazone.DatazoneDomainArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneActions <a name="DatazoneActions" id="@cdk_utils/iam.datazone.DatazoneActions"></a>

IAM action constants for the datazone service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.datazone.DatazoneActions.Initializer"></a>

```typescript
import { datazone } from '@cdk_utils/iam'

new datazone.DatazoneActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.AcceptPredictions">AcceptPredictions</a></code> | <code>string</code> | [Write] datazone:AcceptPredictions. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.AcceptSubscriptionRequest">AcceptSubscriptionRequest</a></code> | <code>string</code> | [Write] datazone:AcceptSubscriptionRequest. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetAccountPool">actionGetAccountPool</a></code> | <code>string</code> | [Read] datazone:GetAccountPool. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetAsset">actionGetAsset</a></code> | <code>string</code> | [Read] datazone:GetAsset. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetAssetFilter">actionGetAssetFilter</a></code> | <code>string</code> | [Read] datazone:GetAssetFilter. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetAssetType">actionGetAssetType</a></code> | <code>string</code> | [Read] datazone:GetAssetType. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetCell">actionGetCell</a></code> | <code>string</code> | [Read] datazone:GetCell. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetCellRun">actionGetCellRun</a></code> | <code>string</code> | [Read] datazone:GetCellRun. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetCellRunResult">actionGetCellRunResult</a></code> | <code>string</code> | [Read] datazone:GetCellRunResult. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetCompute">actionGetCompute</a></code> | <code>string</code> | [Read] datazone:GetCompute. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetConnection">actionGetConnection</a></code> | <code>string</code> | [Read] datazone:GetConnection. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetConversation">actionGetConversation</a></code> | <code>string</code> | [Read] datazone:GetConversation. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetCurrentEffectivePolicy">actionGetCurrentEffectivePolicy</a></code> | <code>string</code> | [Read] datazone:GetCurrentEffectivePolicy. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetDataExportConfiguration">actionGetDataExportConfiguration</a></code> | <code>string</code> | [Read] datazone:GetDataExportConfiguration. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetDataProduct">actionGetDataProduct</a></code> | <code>string</code> | [Read] datazone:GetDataProduct. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetDataSource">actionGetDataSource</a></code> | <code>string</code> | [Read] datazone:GetDataSource. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetDataSourceRun">actionGetDataSourceRun</a></code> | <code>string</code> | [Read] datazone:GetDataSourceRun. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetDesignation">actionGetDesignation</a></code> | <code>string</code> | [Read] datazone:GetDesignation. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetDomain">actionGetDomain</a></code> | <code>string</code> | [Read] datazone:GetDomain. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetDomainExecutionRoleCredentials">actionGetDomainExecutionRoleCredentials</a></code> | <code>string</code> | [Read] datazone:GetDomainExecutionRoleCredentials. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetDomainSharingPolicy">actionGetDomainSharingPolicy</a></code> | <code>string</code> | [Read] datazone:GetDomainSharingPolicy. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetDomainUnit">actionGetDomainUnit</a></code> | <code>string</code> | [Read] datazone:GetDomainUnit. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetEnvironment">actionGetEnvironment</a></code> | <code>string</code> | [Read] datazone:GetEnvironment. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetEnvironmentAction">actionGetEnvironmentAction</a></code> | <code>string</code> | [Read] datazone:GetEnvironmentAction. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetEnvironmentActionLink">actionGetEnvironmentActionLink</a></code> | <code>string</code> | [Read] datazone:GetEnvironmentActionLink. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetEnvironmentBlueprint">actionGetEnvironmentBlueprint</a></code> | <code>string</code> | [Read] datazone:GetEnvironmentBlueprint. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetEnvironmentBlueprintConfiguration">actionGetEnvironmentBlueprintConfiguration</a></code> | <code>string</code> | [Read] datazone:GetEnvironmentBlueprintConfiguration. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetEnvironmentCredentials">actionGetEnvironmentCredentials</a></code> | <code>string</code> | [Read] datazone:GetEnvironmentCredentials. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetEnvironmentProfile">actionGetEnvironmentProfile</a></code> | <code>string</code> | [Read] datazone:GetEnvironmentProfile. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetFormType">actionGetFormType</a></code> | <code>string</code> | [Read] datazone:GetFormType. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetGlossary">actionGetGlossary</a></code> | <code>string</code> | [Read] datazone:GetGlossary. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetGlossaryTerm">actionGetGlossaryTerm</a></code> | <code>string</code> | [Read] datazone:GetGlossaryTerm. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetGroupProfile">actionGetGroupProfile</a></code> | <code>string</code> | [Read] datazone:GetGroupProfile. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetIamPortalLoginUrl">actionGetIamPortalLoginUrl</a></code> | <code>string</code> | [PermissionManagement] datazone:GetIamPortalLoginUrl. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetJobRun">actionGetJobRun</a></code> | <code>string</code> | [Read] datazone:GetJobRun. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetLineageEvent">actionGetLineageEvent</a></code> | <code>string</code> | [Read] datazone:GetLineageEvent. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetLineageNode">actionGetLineageNode</a></code> | <code>string</code> | [Read] datazone:GetLineageNode. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetListing">actionGetListing</a></code> | <code>string</code> | [Read] datazone:GetListing. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetMetadataGenerationRun">actionGetMetadataGenerationRun</a></code> | <code>string</code> | [Read] datazone:GetMetadataGenerationRun. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetNotebook">actionGetNotebook</a></code> | <code>string</code> | [Read] datazone:GetNotebook. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetNotebookCompute">actionGetNotebookCompute</a></code> | <code>string</code> | [Read] datazone:GetNotebookCompute. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetNotebookExport">actionGetNotebookExport</a></code> | <code>string</code> | [Read] datazone:GetNotebookExport. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetNotebookRun">actionGetNotebookRun</a></code> | <code>string</code> | [Read] datazone:GetNotebookRun. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetProject">actionGetProject</a></code> | <code>string</code> | [Read] datazone:GetProject. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetProjectProfile">actionGetProjectProfile</a></code> | <code>string</code> | [Read] datazone:GetProjectProfile. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetRule">actionGetRule</a></code> | <code>string</code> | [Read] datazone:GetRule. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetSubscription">actionGetSubscription</a></code> | <code>string</code> | [Read] datazone:GetSubscription. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetSubscriptionEligibility">actionGetSubscriptionEligibility</a></code> | <code>string</code> | [Read] datazone:GetSubscriptionEligibility. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetSubscriptionGrant">actionGetSubscriptionGrant</a></code> | <code>string</code> | [Read] datazone:GetSubscriptionGrant. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetSubscriptionRequestDetails">actionGetSubscriptionRequestDetails</a></code> | <code>string</code> | [Read] datazone:GetSubscriptionRequestDetails. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetSubscriptionTarget">actionGetSubscriptionTarget</a></code> | <code>string</code> | [Read] datazone:GetSubscriptionTarget. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetTimeSeriesDataPoint">actionGetTimeSeriesDataPoint</a></code> | <code>string</code> | [Read] datazone:GetTimeSeriesDataPoint. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetUpdateEligibility">actionGetUpdateEligibility</a></code> | <code>string</code> | [Read] datazone:GetUpdateEligibility. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.actionGetUserProfile">actionGetUserProfile</a></code> | <code>string</code> | [Read] datazone:GetUserProfile. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.AddEntityOwner">AddEntityOwner</a></code> | <code>string</code> | [Write] datazone:AddEntityOwner. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.AddPolicyGrant">AddPolicyGrant</a></code> | <code>string</code> | [PermissionManagement] datazone:AddPolicyGrant. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.AssociateEnvironmentRole">AssociateEnvironmentRole</a></code> | <code>string</code> | [Write] datazone:AssociateEnvironmentRole. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.AssociateGovernedTerms">AssociateGovernedTerms</a></code> | <code>string</code> | [Write] datazone:AssociateGovernedTerms. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.BatchDeleteLinkedTypes">BatchDeleteLinkedTypes</a></code> | <code>string</code> | [Write] datazone:BatchDeleteLinkedTypes. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.BatchGetAttributesMetadata">BatchGetAttributesMetadata</a></code> | <code>string</code> | [Read] datazone:BatchGetAttributesMetadata. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.BatchGetCell">BatchGetCell</a></code> | <code>string</code> | [Read] datazone:BatchGetCell. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.BatchGetCellRun">BatchGetCellRun</a></code> | <code>string</code> | [Read] datazone:BatchGetCellRun. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.BatchPutAttributesMetadata">BatchPutAttributesMetadata</a></code> | <code>string</code> | [Write] datazone:BatchPutAttributesMetadata. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.BatchPutLinkedTypes">BatchPutLinkedTypes</a></code> | <code>string</code> | [Write] datazone:BatchPutLinkedTypes. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.BatchUpdateNotifications">BatchUpdateNotifications</a></code> | <code>string</code> | [Write] datazone:BatchUpdateNotifications. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CancelMessage">CancelMessage</a></code> | <code>string</code> | [Write] datazone:CancelMessage. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CancelMetadataGenerationRun">CancelMetadataGenerationRun</a></code> | <code>string</code> | [Write] datazone:CancelMetadataGenerationRun. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CancelSubscription">CancelSubscription</a></code> | <code>string</code> | [Write] datazone:CancelSubscription. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateAccountPool">CreateAccountPool</a></code> | <code>string</code> | [Write] datazone:CreateAccountPool. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateAsset">CreateAsset</a></code> | <code>string</code> | [Write] datazone:CreateAsset. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateAssetFilter">CreateAssetFilter</a></code> | <code>string</code> | [Write] datazone:CreateAssetFilter. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateAssetRevision">CreateAssetRevision</a></code> | <code>string</code> | [Write] datazone:CreateAssetRevision. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateAssetType">CreateAssetType</a></code> | <code>string</code> | [Write] datazone:CreateAssetType. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateCell">CreateCell</a></code> | <code>string</code> | [Write] datazone:CreateCell. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateCellRun">CreateCellRun</a></code> | <code>string</code> | [Write] datazone:CreateCellRun. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateConnection">CreateConnection</a></code> | <code>string</code> | [Write] datazone:CreateConnection. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateDataProduct">CreateDataProduct</a></code> | <code>string</code> | [Write] datazone:CreateDataProduct. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateDataProductRevision">CreateDataProductRevision</a></code> | <code>string</code> | [Write] datazone:CreateDataProductRevision. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateDataSource">CreateDataSource</a></code> | <code>string</code> | [Write] datazone:CreateDataSource. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateDesignation">CreateDesignation</a></code> | <code>string</code> | [Write] datazone:CreateDesignation. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateDomain">CreateDomain</a></code> | <code>string</code> | [Write] datazone:CreateDomain. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateDomainUnit">CreateDomainUnit</a></code> | <code>string</code> | [Write] datazone:CreateDomainUnit. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string</code> | [Write] datazone:CreateEnvironment. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateEnvironmentAction">CreateEnvironmentAction</a></code> | <code>string</code> | [Write] datazone:CreateEnvironmentAction. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateEnvironmentBlueprint">CreateEnvironmentBlueprint</a></code> | <code>string</code> | [Write] datazone:CreateEnvironmentBlueprint. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateEnvironmentProfile">CreateEnvironmentProfile</a></code> | <code>string</code> | [Write] datazone:CreateEnvironmentProfile. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateFormType">CreateFormType</a></code> | <code>string</code> | [Write] datazone:CreateFormType. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateGlossary">CreateGlossary</a></code> | <code>string</code> | [Write] datazone:CreateGlossary. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateGlossaryTerm">CreateGlossaryTerm</a></code> | <code>string</code> | [Write] datazone:CreateGlossaryTerm. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateGroupProfile">CreateGroupProfile</a></code> | <code>string</code> | [Write] datazone:CreateGroupProfile. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateListingChangeSet">CreateListingChangeSet</a></code> | <code>string</code> | [Write] datazone:CreateListingChangeSet. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateNotebook">CreateNotebook</a></code> | <code>string</code> | [Write] datazone:CreateNotebook. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateProject">CreateProject</a></code> | <code>string</code> | [Write] datazone:CreateProject. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateProjectMembership">CreateProjectMembership</a></code> | <code>string</code> | [Write] datazone:CreateProjectMembership. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateProjectProfile">CreateProjectProfile</a></code> | <code>string</code> | [Write] datazone:CreateProjectProfile. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateRule">CreateRule</a></code> | <code>string</code> | [Write] datazone:CreateRule. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateSubscriptionGrant">CreateSubscriptionGrant</a></code> | <code>string</code> | [Write] datazone:CreateSubscriptionGrant. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateSubscriptionRequest">CreateSubscriptionRequest</a></code> | <code>string</code> | [Write] datazone:CreateSubscriptionRequest. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateSubscriptionTarget">CreateSubscriptionTarget</a></code> | <code>string</code> | [Write] datazone:CreateSubscriptionTarget. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.CreateUserProfile">CreateUserProfile</a></code> | <code>string</code> | [Write] datazone:CreateUserProfile. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteAccountPool">DeleteAccountPool</a></code> | <code>string</code> | [Write] datazone:DeleteAccountPool. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteAsset">DeleteAsset</a></code> | <code>string</code> | [Write] datazone:DeleteAsset. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteAssetFilter">DeleteAssetFilter</a></code> | <code>string</code> | [Write] datazone:DeleteAssetFilter. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteAssetType">DeleteAssetType</a></code> | <code>string</code> | [Write] datazone:DeleteAssetType. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteCell">DeleteCell</a></code> | <code>string</code> | [Write] datazone:DeleteCell. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteCellRun">DeleteCellRun</a></code> | <code>string</code> | [Write] datazone:DeleteCellRun. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteConnection">DeleteConnection</a></code> | <code>string</code> | [Write] datazone:DeleteConnection. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteDataExportConfiguration">DeleteDataExportConfiguration</a></code> | <code>string</code> | [Write] datazone:DeleteDataExportConfiguration. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteDataProduct">DeleteDataProduct</a></code> | <code>string</code> | [Write] datazone:DeleteDataProduct. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteDataSource">DeleteDataSource</a></code> | <code>string</code> | [Write] datazone:DeleteDataSource. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteDesignation">DeleteDesignation</a></code> | <code>string</code> | [Write] datazone:DeleteDesignation. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteDomain">DeleteDomain</a></code> | <code>string</code> | [Write] datazone:DeleteDomain. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteDomainSharingPolicy">DeleteDomainSharingPolicy</a></code> | <code>string</code> | [PermissionManagement] datazone:DeleteDomainSharingPolicy. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteDomainUnit">DeleteDomainUnit</a></code> | <code>string</code> | [Write] datazone:DeleteDomainUnit. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string</code> | [Write] datazone:DeleteEnvironment. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteEnvironmentAction">DeleteEnvironmentAction</a></code> | <code>string</code> | [Write] datazone:DeleteEnvironmentAction. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteEnvironmentBlueprint">DeleteEnvironmentBlueprint</a></code> | <code>string</code> | [Write] datazone:DeleteEnvironmentBlueprint. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteEnvironmentBlueprintConfiguration">DeleteEnvironmentBlueprintConfiguration</a></code> | <code>string</code> | [Write] datazone:DeleteEnvironmentBlueprintConfiguration. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteEnvironmentProfile">DeleteEnvironmentProfile</a></code> | <code>string</code> | [Write] datazone:DeleteEnvironmentProfile. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteFormType">DeleteFormType</a></code> | <code>string</code> | [Write] datazone:DeleteFormType. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteGlossary">DeleteGlossary</a></code> | <code>string</code> | [Write] datazone:DeleteGlossary. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteGlossaryTerm">DeleteGlossaryTerm</a></code> | <code>string</code> | [Write] datazone:DeleteGlossaryTerm. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteLineageEvent">DeleteLineageEvent</a></code> | <code>string</code> | [Write] datazone:DeleteLineageEvent. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteListing">DeleteListing</a></code> | <code>string</code> | [Write] datazone:DeleteListing. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteNotebook">DeleteNotebook</a></code> | <code>string</code> | [Write] datazone:DeleteNotebook. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteProject">DeleteProject</a></code> | <code>string</code> | [Write] datazone:DeleteProject. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteProjectMembership">DeleteProjectMembership</a></code> | <code>string</code> | [Write] datazone:DeleteProjectMembership. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteProjectProfile">DeleteProjectProfile</a></code> | <code>string</code> | [Write] datazone:DeleteProjectProfile. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteRule">DeleteRule</a></code> | <code>string</code> | [Write] datazone:DeleteRule. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteSubscriptionGrant">DeleteSubscriptionGrant</a></code> | <code>string</code> | [Write] datazone:DeleteSubscriptionGrant. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteSubscriptionRequest">DeleteSubscriptionRequest</a></code> | <code>string</code> | [Write] datazone:DeleteSubscriptionRequest. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteSubscriptionTarget">DeleteSubscriptionTarget</a></code> | <code>string</code> | [Write] datazone:DeleteSubscriptionTarget. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DeleteTimeSeriesDataPoints">DeleteTimeSeriesDataPoints</a></code> | <code>string</code> | [Write] datazone:DeleteTimeSeriesDataPoints. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DisassociateEnvironmentRole">DisassociateEnvironmentRole</a></code> | <code>string</code> | [Write] datazone:DisassociateEnvironmentRole. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.DisassociateGovernedTerms">DisassociateGovernedTerms</a></code> | <code>string</code> | [Write] datazone:DisassociateGovernedTerms. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.GenerateCode">GenerateCode</a></code> | <code>string</code> | [Write] datazone:GenerateCode. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListAccountEnvironments">ListAccountEnvironments</a></code> | <code>string</code> | [List] datazone:ListAccountEnvironments. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListAccountPools">ListAccountPools</a></code> | <code>string</code> | [List] datazone:ListAccountPools. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListAccountsInAccountPool">ListAccountsInAccountPool</a></code> | <code>string</code> | [List] datazone:ListAccountsInAccountPool. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListAssetFilters">ListAssetFilters</a></code> | <code>string</code> | [List] datazone:ListAssetFilters. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListAssetRevisions">ListAssetRevisions</a></code> | <code>string</code> | [List] datazone:ListAssetRevisions. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListCellRuns">ListCellRuns</a></code> | <code>string</code> | [List] datazone:ListCellRuns. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListConnections">ListConnections</a></code> | <code>string</code> | [List] datazone:ListConnections. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListConversations">ListConversations</a></code> | <code>string</code> | [List] datazone:ListConversations. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListDataProductRevisions">ListDataProductRevisions</a></code> | <code>string</code> | [List] datazone:ListDataProductRevisions. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListDataSourceRunActivities">ListDataSourceRunActivities</a></code> | <code>string</code> | [List] datazone:ListDataSourceRunActivities. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListDataSourceRuns">ListDataSourceRuns</a></code> | <code>string</code> | [List] datazone:ListDataSourceRuns. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListDataSources">ListDataSources</a></code> | <code>string</code> | [List] datazone:ListDataSources. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListDesignations">ListDesignations</a></code> | <code>string</code> | [List] datazone:ListDesignations. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListDomains">ListDomains</a></code> | <code>string</code> | [List] datazone:ListDomains. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListDomainUnitsForParent">ListDomainUnitsForParent</a></code> | <code>string</code> | [List] datazone:ListDomainUnitsForParent. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListEntityOwners">ListEntityOwners</a></code> | <code>string</code> | [List] datazone:ListEntityOwners. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListEnvironmentActions">ListEnvironmentActions</a></code> | <code>string</code> | [List] datazone:ListEnvironmentActions. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListEnvironmentBlueprintConfigurations">ListEnvironmentBlueprintConfigurations</a></code> | <code>string</code> | [List] datazone:ListEnvironmentBlueprintConfigurations. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListEnvironmentBlueprintConfigurationSummaries">ListEnvironmentBlueprintConfigurationSummaries</a></code> | <code>string</code> | [List] datazone:ListEnvironmentBlueprintConfigurationSummaries. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListEnvironmentBlueprints">ListEnvironmentBlueprints</a></code> | <code>string</code> | [List] datazone:ListEnvironmentBlueprints. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListEnvironmentProfiles">ListEnvironmentProfiles</a></code> | <code>string</code> | [List] datazone:ListEnvironmentProfiles. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListEnvironments">ListEnvironments</a></code> | <code>string</code> | [List] datazone:ListEnvironments. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListGroupsForUser">ListGroupsForUser</a></code> | <code>string</code> | [List] datazone:ListGroupsForUser. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListJobRuns">ListJobRuns</a></code> | <code>string</code> | [List] datazone:ListJobRuns. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListLineageEvents">ListLineageEvents</a></code> | <code>string</code> | [List] datazone:ListLineageEvents. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListLineageNodeHistory">ListLineageNodeHistory</a></code> | <code>string</code> | [List] datazone:ListLineageNodeHistory. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListLinkedTypes">ListLinkedTypes</a></code> | <code>string</code> | [List] datazone:ListLinkedTypes. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListMetadataGenerationRuns">ListMetadataGenerationRuns</a></code> | <code>string</code> | [List] datazone:ListMetadataGenerationRuns. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListNotebookRuns">ListNotebookRuns</a></code> | <code>string</code> | [List] datazone:ListNotebookRuns. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListNotebooks">ListNotebooks</a></code> | <code>string</code> | [List] datazone:ListNotebooks. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListNotifications">ListNotifications</a></code> | <code>string</code> | [List] datazone:ListNotifications. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListPolicyGrants">ListPolicyGrants</a></code> | <code>string</code> | [List] datazone:ListPolicyGrants. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListProjectMemberships">ListProjectMemberships</a></code> | <code>string</code> | [List] datazone:ListProjectMemberships. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListProjectProfiles">ListProjectProfiles</a></code> | <code>string</code> | [List] datazone:ListProjectProfiles. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListProjects">ListProjects</a></code> | <code>string</code> | [List] datazone:ListProjects. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListRules">ListRules</a></code> | <code>string</code> | [List] datazone:ListRules. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListSubscriptionGrants">ListSubscriptionGrants</a></code> | <code>string</code> | [List] datazone:ListSubscriptionGrants. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListSubscriptionRequests">ListSubscriptionRequests</a></code> | <code>string</code> | [List] datazone:ListSubscriptionRequests. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListSubscriptions">ListSubscriptions</a></code> | <code>string</code> | [List] datazone:ListSubscriptions. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListSubscriptionTargets">ListSubscriptionTargets</a></code> | <code>string</code> | [List] datazone:ListSubscriptionTargets. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] datazone:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListTimeSeriesDataPoints">ListTimeSeriesDataPoints</a></code> | <code>string</code> | [List] datazone:ListTimeSeriesDataPoints. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ListWarehouseMetadata">ListWarehouseMetadata</a></code> | <code>string</code> | [List] datazone:ListWarehouseMetadata. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.PostLineageEvent">PostLineageEvent</a></code> | <code>string</code> | [Write] datazone:PostLineageEvent. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.PostTimeSeriesDataPoints">PostTimeSeriesDataPoints</a></code> | <code>string</code> | [Write] datazone:PostTimeSeriesDataPoints. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ProvisionDomain">ProvisionDomain</a></code> | <code>string</code> | [Write] datazone:ProvisionDomain. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.PutCellRunResult">PutCellRunResult</a></code> | <code>string</code> | [Write] datazone:PutCellRunResult. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.PutDataExportConfiguration">PutDataExportConfiguration</a></code> | <code>string</code> | [Write] datazone:PutDataExportConfiguration. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.PutDomainSharingPolicy">PutDomainSharingPolicy</a></code> | <code>string</code> | [PermissionManagement] datazone:PutDomainSharingPolicy. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.PutEnvironmentBlueprintConfiguration">PutEnvironmentBlueprintConfiguration</a></code> | <code>string</code> | [Write] datazone:PutEnvironmentBlueprintConfiguration. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.QueryGraph">QueryGraph</a></code> | <code>string</code> | [List] datazone:QueryGraph. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.RefreshToken">RefreshToken</a></code> | <code>string</code> | [Write] datazone:RefreshToken. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.RejectPredictions">RejectPredictions</a></code> | <code>string</code> | [Write] datazone:RejectPredictions. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.RejectSubscriptionRequest">RejectSubscriptionRequest</a></code> | <code>string</code> | [Write] datazone:RejectSubscriptionRequest. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.RemoveEntityOwner">RemoveEntityOwner</a></code> | <code>string</code> | [Write] datazone:RemoveEntityOwner. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.RemovePolicyGrant">RemovePolicyGrant</a></code> | <code>string</code> | [PermissionManagement] datazone:RemovePolicyGrant. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.RevokeSubscription">RevokeSubscription</a></code> | <code>string</code> | [PermissionManagement] datazone:RevokeSubscription. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.Search">Search</a></code> | <code>string</code> | [List] datazone:Search. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.SearchGroupProfiles">SearchGroupProfiles</a></code> | <code>string</code> | [List] datazone:SearchGroupProfiles. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.SearchListings">SearchListings</a></code> | <code>string</code> | [List] datazone:SearchListings. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.SearchRules">SearchRules</a></code> | <code>string</code> | [List] datazone:SearchRules. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.SearchTypes">SearchTypes</a></code> | <code>string</code> | [List] datazone:SearchTypes. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.SearchUserProfiles">SearchUserProfiles</a></code> | <code>string</code> | [List] datazone:SearchUserProfiles. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.SendMessage">SendMessage</a></code> | <code>string</code> | [Write] datazone:SendMessage. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.SsoLogin">SsoLogin</a></code> | <code>string</code> | [Write] datazone:SsoLogin. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.SsoLogout">SsoLogout</a></code> | <code>string</code> | [Write] datazone:SsoLogout. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.StartAccountBootstrapAction">StartAccountBootstrapAction</a></code> | <code>string</code> | [Write] datazone:StartAccountBootstrapAction. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.StartCompute">StartCompute</a></code> | <code>string</code> | [Write] datazone:StartCompute. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.StartConversation">StartConversation</a></code> | <code>string</code> | [Write] datazone:StartConversation. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.StartDataSourceRun">StartDataSourceRun</a></code> | <code>string</code> | [Write] datazone:StartDataSourceRun. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.StartMetadataGenerationRun">StartMetadataGenerationRun</a></code> | <code>string</code> | [Write] datazone:StartMetadataGenerationRun. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.StartNotebookCompute">StartNotebookCompute</a></code> | <code>string</code> | [Write] datazone:StartNotebookCompute. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.StartNotebookExport">StartNotebookExport</a></code> | <code>string</code> | [Write] datazone:StartNotebookExport. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.StartNotebookImport">StartNotebookImport</a></code> | <code>string</code> | [Write] datazone:StartNotebookImport. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.StartNotebookRun">StartNotebookRun</a></code> | <code>string</code> | [Write] datazone:StartNotebookRun. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.StartNotebookSync">StartNotebookSync</a></code> | <code>string</code> | [Write] datazone:StartNotebookSync. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.StopCompute">StopCompute</a></code> | <code>string</code> | [Write] datazone:StopCompute. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.StopMetadataGenerationRun">StopMetadataGenerationRun</a></code> | <code>string</code> | [Write] datazone:StopMetadataGenerationRun. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.StopNotebookCompute">StopNotebookCompute</a></code> | <code>string</code> | [Write] datazone:StopNotebookCompute. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.StopNotebookRun">StopNotebookRun</a></code> | <code>string</code> | [Write] datazone:StopNotebookRun. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] datazone:TagResource. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] datazone:UntagResource. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateAccountPool">UpdateAccountPool</a></code> | <code>string</code> | [Write] datazone:UpdateAccountPool. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateAssetFilter">UpdateAssetFilter</a></code> | <code>string</code> | [Write] datazone:UpdateAssetFilter. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateCell">UpdateCell</a></code> | <code>string</code> | [Write] datazone:UpdateCell. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateCellRun">UpdateCellRun</a></code> | <code>string</code> | [Write] datazone:UpdateCellRun. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateConnection">UpdateConnection</a></code> | <code>string</code> | [Write] datazone:UpdateConnection. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateDataSource">UpdateDataSource</a></code> | <code>string</code> | [Write] datazone:UpdateDataSource. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateDataSourceRunActivities">UpdateDataSourceRunActivities</a></code> | <code>string</code> | [Write] datazone:UpdateDataSourceRunActivities. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateDesignation">UpdateDesignation</a></code> | <code>string</code> | [Write] datazone:UpdateDesignation. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateDomain">UpdateDomain</a></code> | <code>string</code> | [Write] datazone:UpdateDomain. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateDomainUnit">UpdateDomainUnit</a></code> | <code>string</code> | [Write] datazone:UpdateDomainUnit. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string</code> | [Write] datazone:UpdateEnvironment. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateEnvironmentAction">UpdateEnvironmentAction</a></code> | <code>string</code> | [Write] datazone:UpdateEnvironmentAction. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateEnvironmentBlueprint">UpdateEnvironmentBlueprint</a></code> | <code>string</code> | [Write] datazone:UpdateEnvironmentBlueprint. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateEnvironmentConfiguration">UpdateEnvironmentConfiguration</a></code> | <code>string</code> | [Write] datazone:UpdateEnvironmentConfiguration. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateEnvironmentDeploymentStatus">UpdateEnvironmentDeploymentStatus</a></code> | <code>string</code> | [Write] datazone:UpdateEnvironmentDeploymentStatus. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateEnvironmentProfile">UpdateEnvironmentProfile</a></code> | <code>string</code> | [Write] datazone:UpdateEnvironmentProfile. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateGlossary">UpdateGlossary</a></code> | <code>string</code> | [Write] datazone:UpdateGlossary. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateGlossaryTerm">UpdateGlossaryTerm</a></code> | <code>string</code> | [Write] datazone:UpdateGlossaryTerm. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateGroupProfile">UpdateGroupProfile</a></code> | <code>string</code> | [Write] datazone:UpdateGroupProfile. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateNotebook">UpdateNotebook</a></code> | <code>string</code> | [Write] datazone:UpdateNotebook. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateProject">UpdateProject</a></code> | <code>string</code> | [Write] datazone:UpdateProject. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateProjectProfile">UpdateProjectProfile</a></code> | <code>string</code> | [Write] datazone:UpdateProjectProfile. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateRule">UpdateRule</a></code> | <code>string</code> | [Write] datazone:UpdateRule. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateSubscriptionGrantStatus">UpdateSubscriptionGrantStatus</a></code> | <code>string</code> | [Write] datazone:UpdateSubscriptionGrantStatus. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateSubscriptionRequest">UpdateSubscriptionRequest</a></code> | <code>string</code> | [Write] datazone:UpdateSubscriptionRequest. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateSubscriptionTarget">UpdateSubscriptionTarget</a></code> | <code>string</code> | [Write] datazone:UpdateSubscriptionTarget. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.UpdateUserProfile">UpdateUserProfile</a></code> | <code>string</code> | [Write] datazone:UpdateUserProfile. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ValidatePassRole">ValidatePassRole</a></code> | <code>string</code> | [Write] datazone:ValidatePassRole. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneActions.property.ValidatePolicy">ValidatePolicy</a></code> | <code>string</code> | [Read] datazone:ValidatePolicy. |

---

##### `AcceptPredictions`<sup>Required</sup> <a name="AcceptPredictions" id="@cdk_utils/iam.datazone.DatazoneActions.property.AcceptPredictions"></a>

```typescript
public readonly AcceptPredictions: string;
```

- *Type:* string

[Write] datazone:AcceptPredictions.

---

##### `AcceptSubscriptionRequest`<sup>Required</sup> <a name="AcceptSubscriptionRequest" id="@cdk_utils/iam.datazone.DatazoneActions.property.AcceptSubscriptionRequest"></a>

```typescript
public readonly AcceptSubscriptionRequest: string;
```

- *Type:* string

[Write] datazone:AcceptSubscriptionRequest.

---

##### `actionGetAccountPool`<sup>Required</sup> <a name="actionGetAccountPool" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetAccountPool"></a>

```typescript
public readonly actionGetAccountPool: string;
```

- *Type:* string

[Read] datazone:GetAccountPool.

---

##### `actionGetAsset`<sup>Required</sup> <a name="actionGetAsset" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetAsset"></a>

```typescript
public readonly actionGetAsset: string;
```

- *Type:* string

[Read] datazone:GetAsset.

---

##### `actionGetAssetFilter`<sup>Required</sup> <a name="actionGetAssetFilter" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetAssetFilter"></a>

```typescript
public readonly actionGetAssetFilter: string;
```

- *Type:* string

[Read] datazone:GetAssetFilter.

---

##### `actionGetAssetType`<sup>Required</sup> <a name="actionGetAssetType" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetAssetType"></a>

```typescript
public readonly actionGetAssetType: string;
```

- *Type:* string

[Read] datazone:GetAssetType.

---

##### `actionGetCell`<sup>Required</sup> <a name="actionGetCell" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetCell"></a>

```typescript
public readonly actionGetCell: string;
```

- *Type:* string

[Read] datazone:GetCell.

---

##### `actionGetCellRun`<sup>Required</sup> <a name="actionGetCellRun" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetCellRun"></a>

```typescript
public readonly actionGetCellRun: string;
```

- *Type:* string

[Read] datazone:GetCellRun.

---

##### `actionGetCellRunResult`<sup>Required</sup> <a name="actionGetCellRunResult" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetCellRunResult"></a>

```typescript
public readonly actionGetCellRunResult: string;
```

- *Type:* string

[Read] datazone:GetCellRunResult.

---

##### `actionGetCompute`<sup>Required</sup> <a name="actionGetCompute" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetCompute"></a>

```typescript
public readonly actionGetCompute: string;
```

- *Type:* string

[Read] datazone:GetCompute.

---

##### `actionGetConnection`<sup>Required</sup> <a name="actionGetConnection" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetConnection"></a>

```typescript
public readonly actionGetConnection: string;
```

- *Type:* string

[Read] datazone:GetConnection.

---

##### `actionGetConversation`<sup>Required</sup> <a name="actionGetConversation" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetConversation"></a>

```typescript
public readonly actionGetConversation: string;
```

- *Type:* string

[Read] datazone:GetConversation.

---

##### `actionGetCurrentEffectivePolicy`<sup>Required</sup> <a name="actionGetCurrentEffectivePolicy" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetCurrentEffectivePolicy"></a>

```typescript
public readonly actionGetCurrentEffectivePolicy: string;
```

- *Type:* string

[Read] datazone:GetCurrentEffectivePolicy.

---

##### `actionGetDataExportConfiguration`<sup>Required</sup> <a name="actionGetDataExportConfiguration" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetDataExportConfiguration"></a>

```typescript
public readonly actionGetDataExportConfiguration: string;
```

- *Type:* string

[Read] datazone:GetDataExportConfiguration.

---

##### `actionGetDataProduct`<sup>Required</sup> <a name="actionGetDataProduct" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetDataProduct"></a>

```typescript
public readonly actionGetDataProduct: string;
```

- *Type:* string

[Read] datazone:GetDataProduct.

---

##### `actionGetDataSource`<sup>Required</sup> <a name="actionGetDataSource" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetDataSource"></a>

```typescript
public readonly actionGetDataSource: string;
```

- *Type:* string

[Read] datazone:GetDataSource.

---

##### `actionGetDataSourceRun`<sup>Required</sup> <a name="actionGetDataSourceRun" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetDataSourceRun"></a>

```typescript
public readonly actionGetDataSourceRun: string;
```

- *Type:* string

[Read] datazone:GetDataSourceRun.

---

##### `actionGetDesignation`<sup>Required</sup> <a name="actionGetDesignation" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetDesignation"></a>

```typescript
public readonly actionGetDesignation: string;
```

- *Type:* string

[Read] datazone:GetDesignation.

---

##### `actionGetDomain`<sup>Required</sup> <a name="actionGetDomain" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetDomain"></a>

```typescript
public readonly actionGetDomain: string;
```

- *Type:* string

[Read] datazone:GetDomain.

---

##### `actionGetDomainExecutionRoleCredentials`<sup>Required</sup> <a name="actionGetDomainExecutionRoleCredentials" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetDomainExecutionRoleCredentials"></a>

```typescript
public readonly actionGetDomainExecutionRoleCredentials: string;
```

- *Type:* string

[Read] datazone:GetDomainExecutionRoleCredentials.

---

##### `actionGetDomainSharingPolicy`<sup>Required</sup> <a name="actionGetDomainSharingPolicy" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetDomainSharingPolicy"></a>

```typescript
public readonly actionGetDomainSharingPolicy: string;
```

- *Type:* string

[Read] datazone:GetDomainSharingPolicy.

---

##### `actionGetDomainUnit`<sup>Required</sup> <a name="actionGetDomainUnit" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetDomainUnit"></a>

```typescript
public readonly actionGetDomainUnit: string;
```

- *Type:* string

[Read] datazone:GetDomainUnit.

---

##### `actionGetEnvironment`<sup>Required</sup> <a name="actionGetEnvironment" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetEnvironment"></a>

```typescript
public readonly actionGetEnvironment: string;
```

- *Type:* string

[Read] datazone:GetEnvironment.

---

##### `actionGetEnvironmentAction`<sup>Required</sup> <a name="actionGetEnvironmentAction" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetEnvironmentAction"></a>

```typescript
public readonly actionGetEnvironmentAction: string;
```

- *Type:* string

[Read] datazone:GetEnvironmentAction.

---

##### `actionGetEnvironmentActionLink`<sup>Required</sup> <a name="actionGetEnvironmentActionLink" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetEnvironmentActionLink"></a>

```typescript
public readonly actionGetEnvironmentActionLink: string;
```

- *Type:* string

[Read] datazone:GetEnvironmentActionLink.

---

##### `actionGetEnvironmentBlueprint`<sup>Required</sup> <a name="actionGetEnvironmentBlueprint" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetEnvironmentBlueprint"></a>

```typescript
public readonly actionGetEnvironmentBlueprint: string;
```

- *Type:* string

[Read] datazone:GetEnvironmentBlueprint.

---

##### `actionGetEnvironmentBlueprintConfiguration`<sup>Required</sup> <a name="actionGetEnvironmentBlueprintConfiguration" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetEnvironmentBlueprintConfiguration"></a>

```typescript
public readonly actionGetEnvironmentBlueprintConfiguration: string;
```

- *Type:* string

[Read] datazone:GetEnvironmentBlueprintConfiguration.

---

##### `actionGetEnvironmentCredentials`<sup>Required</sup> <a name="actionGetEnvironmentCredentials" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetEnvironmentCredentials"></a>

```typescript
public readonly actionGetEnvironmentCredentials: string;
```

- *Type:* string

[Read] datazone:GetEnvironmentCredentials.

---

##### `actionGetEnvironmentProfile`<sup>Required</sup> <a name="actionGetEnvironmentProfile" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetEnvironmentProfile"></a>

```typescript
public readonly actionGetEnvironmentProfile: string;
```

- *Type:* string

[Read] datazone:GetEnvironmentProfile.

---

##### `actionGetFormType`<sup>Required</sup> <a name="actionGetFormType" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetFormType"></a>

```typescript
public readonly actionGetFormType: string;
```

- *Type:* string

[Read] datazone:GetFormType.

---

##### `actionGetGlossary`<sup>Required</sup> <a name="actionGetGlossary" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetGlossary"></a>

```typescript
public readonly actionGetGlossary: string;
```

- *Type:* string

[Read] datazone:GetGlossary.

---

##### `actionGetGlossaryTerm`<sup>Required</sup> <a name="actionGetGlossaryTerm" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetGlossaryTerm"></a>

```typescript
public readonly actionGetGlossaryTerm: string;
```

- *Type:* string

[Read] datazone:GetGlossaryTerm.

---

##### `actionGetGroupProfile`<sup>Required</sup> <a name="actionGetGroupProfile" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetGroupProfile"></a>

```typescript
public readonly actionGetGroupProfile: string;
```

- *Type:* string

[Read] datazone:GetGroupProfile.

---

##### `actionGetIamPortalLoginUrl`<sup>Required</sup> <a name="actionGetIamPortalLoginUrl" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetIamPortalLoginUrl"></a>

```typescript
public readonly actionGetIamPortalLoginUrl: string;
```

- *Type:* string

[PermissionManagement] datazone:GetIamPortalLoginUrl.

---

##### `actionGetJobRun`<sup>Required</sup> <a name="actionGetJobRun" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetJobRun"></a>

```typescript
public readonly actionGetJobRun: string;
```

- *Type:* string

[Read] datazone:GetJobRun.

---

##### `actionGetLineageEvent`<sup>Required</sup> <a name="actionGetLineageEvent" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetLineageEvent"></a>

```typescript
public readonly actionGetLineageEvent: string;
```

- *Type:* string

[Read] datazone:GetLineageEvent.

---

##### `actionGetLineageNode`<sup>Required</sup> <a name="actionGetLineageNode" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetLineageNode"></a>

```typescript
public readonly actionGetLineageNode: string;
```

- *Type:* string

[Read] datazone:GetLineageNode.

---

##### `actionGetListing`<sup>Required</sup> <a name="actionGetListing" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetListing"></a>

```typescript
public readonly actionGetListing: string;
```

- *Type:* string

[Read] datazone:GetListing.

---

##### `actionGetMetadataGenerationRun`<sup>Required</sup> <a name="actionGetMetadataGenerationRun" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetMetadataGenerationRun"></a>

```typescript
public readonly actionGetMetadataGenerationRun: string;
```

- *Type:* string

[Read] datazone:GetMetadataGenerationRun.

---

##### `actionGetNotebook`<sup>Required</sup> <a name="actionGetNotebook" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetNotebook"></a>

```typescript
public readonly actionGetNotebook: string;
```

- *Type:* string

[Read] datazone:GetNotebook.

---

##### `actionGetNotebookCompute`<sup>Required</sup> <a name="actionGetNotebookCompute" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetNotebookCompute"></a>

```typescript
public readonly actionGetNotebookCompute: string;
```

- *Type:* string

[Read] datazone:GetNotebookCompute.

---

##### `actionGetNotebookExport`<sup>Required</sup> <a name="actionGetNotebookExport" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetNotebookExport"></a>

```typescript
public readonly actionGetNotebookExport: string;
```

- *Type:* string

[Read] datazone:GetNotebookExport.

---

##### `actionGetNotebookRun`<sup>Required</sup> <a name="actionGetNotebookRun" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetNotebookRun"></a>

```typescript
public readonly actionGetNotebookRun: string;
```

- *Type:* string

[Read] datazone:GetNotebookRun.

---

##### `actionGetProject`<sup>Required</sup> <a name="actionGetProject" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetProject"></a>

```typescript
public readonly actionGetProject: string;
```

- *Type:* string

[Read] datazone:GetProject.

---

##### `actionGetProjectProfile`<sup>Required</sup> <a name="actionGetProjectProfile" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetProjectProfile"></a>

```typescript
public readonly actionGetProjectProfile: string;
```

- *Type:* string

[Read] datazone:GetProjectProfile.

---

##### `actionGetRule`<sup>Required</sup> <a name="actionGetRule" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetRule"></a>

```typescript
public readonly actionGetRule: string;
```

- *Type:* string

[Read] datazone:GetRule.

---

##### `actionGetSubscription`<sup>Required</sup> <a name="actionGetSubscription" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetSubscription"></a>

```typescript
public readonly actionGetSubscription: string;
```

- *Type:* string

[Read] datazone:GetSubscription.

---

##### `actionGetSubscriptionEligibility`<sup>Required</sup> <a name="actionGetSubscriptionEligibility" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetSubscriptionEligibility"></a>

```typescript
public readonly actionGetSubscriptionEligibility: string;
```

- *Type:* string

[Read] datazone:GetSubscriptionEligibility.

---

##### `actionGetSubscriptionGrant`<sup>Required</sup> <a name="actionGetSubscriptionGrant" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetSubscriptionGrant"></a>

```typescript
public readonly actionGetSubscriptionGrant: string;
```

- *Type:* string

[Read] datazone:GetSubscriptionGrant.

---

##### `actionGetSubscriptionRequestDetails`<sup>Required</sup> <a name="actionGetSubscriptionRequestDetails" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetSubscriptionRequestDetails"></a>

```typescript
public readonly actionGetSubscriptionRequestDetails: string;
```

- *Type:* string

[Read] datazone:GetSubscriptionRequestDetails.

---

##### `actionGetSubscriptionTarget`<sup>Required</sup> <a name="actionGetSubscriptionTarget" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetSubscriptionTarget"></a>

```typescript
public readonly actionGetSubscriptionTarget: string;
```

- *Type:* string

[Read] datazone:GetSubscriptionTarget.

---

##### `actionGetTimeSeriesDataPoint`<sup>Required</sup> <a name="actionGetTimeSeriesDataPoint" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetTimeSeriesDataPoint"></a>

```typescript
public readonly actionGetTimeSeriesDataPoint: string;
```

- *Type:* string

[Read] datazone:GetTimeSeriesDataPoint.

---

##### `actionGetUpdateEligibility`<sup>Required</sup> <a name="actionGetUpdateEligibility" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetUpdateEligibility"></a>

```typescript
public readonly actionGetUpdateEligibility: string;
```

- *Type:* string

[Read] datazone:GetUpdateEligibility.

---

##### `actionGetUserProfile`<sup>Required</sup> <a name="actionGetUserProfile" id="@cdk_utils/iam.datazone.DatazoneActions.property.actionGetUserProfile"></a>

```typescript
public readonly actionGetUserProfile: string;
```

- *Type:* string

[Read] datazone:GetUserProfile.

---

##### `AddEntityOwner`<sup>Required</sup> <a name="AddEntityOwner" id="@cdk_utils/iam.datazone.DatazoneActions.property.AddEntityOwner"></a>

```typescript
public readonly AddEntityOwner: string;
```

- *Type:* string

[Write] datazone:AddEntityOwner.

---

##### `AddPolicyGrant`<sup>Required</sup> <a name="AddPolicyGrant" id="@cdk_utils/iam.datazone.DatazoneActions.property.AddPolicyGrant"></a>

```typescript
public readonly AddPolicyGrant: string;
```

- *Type:* string

[PermissionManagement] datazone:AddPolicyGrant.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.datazone.DatazoneActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.datazone.DatazoneActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.datazone.DatazoneActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.datazone.DatazoneActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.datazone.DatazoneActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateEnvironmentRole`<sup>Required</sup> <a name="AssociateEnvironmentRole" id="@cdk_utils/iam.datazone.DatazoneActions.property.AssociateEnvironmentRole"></a>

```typescript
public readonly AssociateEnvironmentRole: string;
```

- *Type:* string

[Write] datazone:AssociateEnvironmentRole.

---

##### `AssociateGovernedTerms`<sup>Required</sup> <a name="AssociateGovernedTerms" id="@cdk_utils/iam.datazone.DatazoneActions.property.AssociateGovernedTerms"></a>

```typescript
public readonly AssociateGovernedTerms: string;
```

- *Type:* string

[Write] datazone:AssociateGovernedTerms.

---

##### `BatchDeleteLinkedTypes`<sup>Required</sup> <a name="BatchDeleteLinkedTypes" id="@cdk_utils/iam.datazone.DatazoneActions.property.BatchDeleteLinkedTypes"></a>

```typescript
public readonly BatchDeleteLinkedTypes: string;
```

- *Type:* string

[Write] datazone:BatchDeleteLinkedTypes.

---

##### `BatchGetAttributesMetadata`<sup>Required</sup> <a name="BatchGetAttributesMetadata" id="@cdk_utils/iam.datazone.DatazoneActions.property.BatchGetAttributesMetadata"></a>

```typescript
public readonly BatchGetAttributesMetadata: string;
```

- *Type:* string

[Read] datazone:BatchGetAttributesMetadata.

---

##### `BatchGetCell`<sup>Required</sup> <a name="BatchGetCell" id="@cdk_utils/iam.datazone.DatazoneActions.property.BatchGetCell"></a>

```typescript
public readonly BatchGetCell: string;
```

- *Type:* string

[Read] datazone:BatchGetCell.

---

##### `BatchGetCellRun`<sup>Required</sup> <a name="BatchGetCellRun" id="@cdk_utils/iam.datazone.DatazoneActions.property.BatchGetCellRun"></a>

```typescript
public readonly BatchGetCellRun: string;
```

- *Type:* string

[Read] datazone:BatchGetCellRun.

---

##### `BatchPutAttributesMetadata`<sup>Required</sup> <a name="BatchPutAttributesMetadata" id="@cdk_utils/iam.datazone.DatazoneActions.property.BatchPutAttributesMetadata"></a>

```typescript
public readonly BatchPutAttributesMetadata: string;
```

- *Type:* string

[Write] datazone:BatchPutAttributesMetadata.

---

##### `BatchPutLinkedTypes`<sup>Required</sup> <a name="BatchPutLinkedTypes" id="@cdk_utils/iam.datazone.DatazoneActions.property.BatchPutLinkedTypes"></a>

```typescript
public readonly BatchPutLinkedTypes: string;
```

- *Type:* string

[Write] datazone:BatchPutLinkedTypes.

---

##### `BatchUpdateNotifications`<sup>Required</sup> <a name="BatchUpdateNotifications" id="@cdk_utils/iam.datazone.DatazoneActions.property.BatchUpdateNotifications"></a>

```typescript
public readonly BatchUpdateNotifications: string;
```

- *Type:* string

[Write] datazone:BatchUpdateNotifications.

---

##### `CancelMessage`<sup>Required</sup> <a name="CancelMessage" id="@cdk_utils/iam.datazone.DatazoneActions.property.CancelMessage"></a>

```typescript
public readonly CancelMessage: string;
```

- *Type:* string

[Write] datazone:CancelMessage.

---

##### `CancelMetadataGenerationRun`<sup>Required</sup> <a name="CancelMetadataGenerationRun" id="@cdk_utils/iam.datazone.DatazoneActions.property.CancelMetadataGenerationRun"></a>

```typescript
public readonly CancelMetadataGenerationRun: string;
```

- *Type:* string

[Write] datazone:CancelMetadataGenerationRun.

---

##### `CancelSubscription`<sup>Required</sup> <a name="CancelSubscription" id="@cdk_utils/iam.datazone.DatazoneActions.property.CancelSubscription"></a>

```typescript
public readonly CancelSubscription: string;
```

- *Type:* string

[Write] datazone:CancelSubscription.

---

##### `CreateAccountPool`<sup>Required</sup> <a name="CreateAccountPool" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateAccountPool"></a>

```typescript
public readonly CreateAccountPool: string;
```

- *Type:* string

[Write] datazone:CreateAccountPool.

---

##### `CreateAsset`<sup>Required</sup> <a name="CreateAsset" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateAsset"></a>

```typescript
public readonly CreateAsset: string;
```

- *Type:* string

[Write] datazone:CreateAsset.

---

##### `CreateAssetFilter`<sup>Required</sup> <a name="CreateAssetFilter" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateAssetFilter"></a>

```typescript
public readonly CreateAssetFilter: string;
```

- *Type:* string

[Write] datazone:CreateAssetFilter.

---

##### `CreateAssetRevision`<sup>Required</sup> <a name="CreateAssetRevision" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateAssetRevision"></a>

```typescript
public readonly CreateAssetRevision: string;
```

- *Type:* string

[Write] datazone:CreateAssetRevision.

---

##### `CreateAssetType`<sup>Required</sup> <a name="CreateAssetType" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateAssetType"></a>

```typescript
public readonly CreateAssetType: string;
```

- *Type:* string

[Write] datazone:CreateAssetType.

---

##### `CreateCell`<sup>Required</sup> <a name="CreateCell" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateCell"></a>

```typescript
public readonly CreateCell: string;
```

- *Type:* string

[Write] datazone:CreateCell.

---

##### `CreateCellRun`<sup>Required</sup> <a name="CreateCellRun" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateCellRun"></a>

```typescript
public readonly CreateCellRun: string;
```

- *Type:* string

[Write] datazone:CreateCellRun.

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string;
```

- *Type:* string

[Write] datazone:CreateConnection.

---

##### `CreateDataProduct`<sup>Required</sup> <a name="CreateDataProduct" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateDataProduct"></a>

```typescript
public readonly CreateDataProduct: string;
```

- *Type:* string

[Write] datazone:CreateDataProduct.

---

##### `CreateDataProductRevision`<sup>Required</sup> <a name="CreateDataProductRevision" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateDataProductRevision"></a>

```typescript
public readonly CreateDataProductRevision: string;
```

- *Type:* string

[Write] datazone:CreateDataProductRevision.

---

##### `CreateDataSource`<sup>Required</sup> <a name="CreateDataSource" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateDataSource"></a>

```typescript
public readonly CreateDataSource: string;
```

- *Type:* string

[Write] datazone:CreateDataSource.

---

##### `CreateDesignation`<sup>Required</sup> <a name="CreateDesignation" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateDesignation"></a>

```typescript
public readonly CreateDesignation: string;
```

- *Type:* string

[Write] datazone:CreateDesignation.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string;
```

- *Type:* string

[Write] datazone:CreateDomain.

---

##### `CreateDomainUnit`<sup>Required</sup> <a name="CreateDomainUnit" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateDomainUnit"></a>

```typescript
public readonly CreateDomainUnit: string;
```

- *Type:* string

[Write] datazone:CreateDomainUnit.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string;
```

- *Type:* string

[Write] datazone:CreateEnvironment.

---

##### `CreateEnvironmentAction`<sup>Required</sup> <a name="CreateEnvironmentAction" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateEnvironmentAction"></a>

```typescript
public readonly CreateEnvironmentAction: string;
```

- *Type:* string

[Write] datazone:CreateEnvironmentAction.

---

##### `CreateEnvironmentBlueprint`<sup>Required</sup> <a name="CreateEnvironmentBlueprint" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateEnvironmentBlueprint"></a>

```typescript
public readonly CreateEnvironmentBlueprint: string;
```

- *Type:* string

[Write] datazone:CreateEnvironmentBlueprint.

---

##### `CreateEnvironmentProfile`<sup>Required</sup> <a name="CreateEnvironmentProfile" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateEnvironmentProfile"></a>

```typescript
public readonly CreateEnvironmentProfile: string;
```

- *Type:* string

[Write] datazone:CreateEnvironmentProfile.

---

##### `CreateFormType`<sup>Required</sup> <a name="CreateFormType" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateFormType"></a>

```typescript
public readonly CreateFormType: string;
```

- *Type:* string

[Write] datazone:CreateFormType.

---

##### `CreateGlossary`<sup>Required</sup> <a name="CreateGlossary" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateGlossary"></a>

```typescript
public readonly CreateGlossary: string;
```

- *Type:* string

[Write] datazone:CreateGlossary.

---

##### `CreateGlossaryTerm`<sup>Required</sup> <a name="CreateGlossaryTerm" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateGlossaryTerm"></a>

```typescript
public readonly CreateGlossaryTerm: string;
```

- *Type:* string

[Write] datazone:CreateGlossaryTerm.

---

##### `CreateGroupProfile`<sup>Required</sup> <a name="CreateGroupProfile" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateGroupProfile"></a>

```typescript
public readonly CreateGroupProfile: string;
```

- *Type:* string

[Write] datazone:CreateGroupProfile.

---

##### `CreateListingChangeSet`<sup>Required</sup> <a name="CreateListingChangeSet" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateListingChangeSet"></a>

```typescript
public readonly CreateListingChangeSet: string;
```

- *Type:* string

[Write] datazone:CreateListingChangeSet.

---

##### `CreateNotebook`<sup>Required</sup> <a name="CreateNotebook" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateNotebook"></a>

```typescript
public readonly CreateNotebook: string;
```

- *Type:* string

[Write] datazone:CreateNotebook.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateProject"></a>

```typescript
public readonly CreateProject: string;
```

- *Type:* string

[Write] datazone:CreateProject.

---

##### `CreateProjectMembership`<sup>Required</sup> <a name="CreateProjectMembership" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateProjectMembership"></a>

```typescript
public readonly CreateProjectMembership: string;
```

- *Type:* string

[Write] datazone:CreateProjectMembership.

---

##### `CreateProjectProfile`<sup>Required</sup> <a name="CreateProjectProfile" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateProjectProfile"></a>

```typescript
public readonly CreateProjectProfile: string;
```

- *Type:* string

[Write] datazone:CreateProjectProfile.

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateRule"></a>

```typescript
public readonly CreateRule: string;
```

- *Type:* string

[Write] datazone:CreateRule.

---

##### `CreateSubscriptionGrant`<sup>Required</sup> <a name="CreateSubscriptionGrant" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateSubscriptionGrant"></a>

```typescript
public readonly CreateSubscriptionGrant: string;
```

- *Type:* string

[Write] datazone:CreateSubscriptionGrant.

---

##### `CreateSubscriptionRequest`<sup>Required</sup> <a name="CreateSubscriptionRequest" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateSubscriptionRequest"></a>

```typescript
public readonly CreateSubscriptionRequest: string;
```

- *Type:* string

[Write] datazone:CreateSubscriptionRequest.

---

##### `CreateSubscriptionTarget`<sup>Required</sup> <a name="CreateSubscriptionTarget" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateSubscriptionTarget"></a>

```typescript
public readonly CreateSubscriptionTarget: string;
```

- *Type:* string

[Write] datazone:CreateSubscriptionTarget.

---

##### `CreateUserProfile`<sup>Required</sup> <a name="CreateUserProfile" id="@cdk_utils/iam.datazone.DatazoneActions.property.CreateUserProfile"></a>

```typescript
public readonly CreateUserProfile: string;
```

- *Type:* string

[Write] datazone:CreateUserProfile.

---

##### `DeleteAccountPool`<sup>Required</sup> <a name="DeleteAccountPool" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteAccountPool"></a>

```typescript
public readonly DeleteAccountPool: string;
```

- *Type:* string

[Write] datazone:DeleteAccountPool.

---

##### `DeleteAsset`<sup>Required</sup> <a name="DeleteAsset" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteAsset"></a>

```typescript
public readonly DeleteAsset: string;
```

- *Type:* string

[Write] datazone:DeleteAsset.

---

##### `DeleteAssetFilter`<sup>Required</sup> <a name="DeleteAssetFilter" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteAssetFilter"></a>

```typescript
public readonly DeleteAssetFilter: string;
```

- *Type:* string

[Write] datazone:DeleteAssetFilter.

---

##### `DeleteAssetType`<sup>Required</sup> <a name="DeleteAssetType" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteAssetType"></a>

```typescript
public readonly DeleteAssetType: string;
```

- *Type:* string

[Write] datazone:DeleteAssetType.

---

##### `DeleteCell`<sup>Required</sup> <a name="DeleteCell" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteCell"></a>

```typescript
public readonly DeleteCell: string;
```

- *Type:* string

[Write] datazone:DeleteCell.

---

##### `DeleteCellRun`<sup>Required</sup> <a name="DeleteCellRun" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteCellRun"></a>

```typescript
public readonly DeleteCellRun: string;
```

- *Type:* string

[Write] datazone:DeleteCellRun.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string;
```

- *Type:* string

[Write] datazone:DeleteConnection.

---

##### `DeleteDataExportConfiguration`<sup>Required</sup> <a name="DeleteDataExportConfiguration" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteDataExportConfiguration"></a>

```typescript
public readonly DeleteDataExportConfiguration: string;
```

- *Type:* string

[Write] datazone:DeleteDataExportConfiguration.

---

##### `DeleteDataProduct`<sup>Required</sup> <a name="DeleteDataProduct" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteDataProduct"></a>

```typescript
public readonly DeleteDataProduct: string;
```

- *Type:* string

[Write] datazone:DeleteDataProduct.

---

##### `DeleteDataSource`<sup>Required</sup> <a name="DeleteDataSource" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteDataSource"></a>

```typescript
public readonly DeleteDataSource: string;
```

- *Type:* string

[Write] datazone:DeleteDataSource.

---

##### `DeleteDesignation`<sup>Required</sup> <a name="DeleteDesignation" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteDesignation"></a>

```typescript
public readonly DeleteDesignation: string;
```

- *Type:* string

[Write] datazone:DeleteDesignation.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string;
```

- *Type:* string

[Write] datazone:DeleteDomain.

---

##### `DeleteDomainSharingPolicy`<sup>Required</sup> <a name="DeleteDomainSharingPolicy" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteDomainSharingPolicy"></a>

```typescript
public readonly DeleteDomainSharingPolicy: string;
```

- *Type:* string

[PermissionManagement] datazone:DeleteDomainSharingPolicy.

---

##### `DeleteDomainUnit`<sup>Required</sup> <a name="DeleteDomainUnit" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteDomainUnit"></a>

```typescript
public readonly DeleteDomainUnit: string;
```

- *Type:* string

[Write] datazone:DeleteDomainUnit.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string;
```

- *Type:* string

[Write] datazone:DeleteEnvironment.

---

##### `DeleteEnvironmentAction`<sup>Required</sup> <a name="DeleteEnvironmentAction" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteEnvironmentAction"></a>

```typescript
public readonly DeleteEnvironmentAction: string;
```

- *Type:* string

[Write] datazone:DeleteEnvironmentAction.

---

##### `DeleteEnvironmentBlueprint`<sup>Required</sup> <a name="DeleteEnvironmentBlueprint" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteEnvironmentBlueprint"></a>

```typescript
public readonly DeleteEnvironmentBlueprint: string;
```

- *Type:* string

[Write] datazone:DeleteEnvironmentBlueprint.

---

##### `DeleteEnvironmentBlueprintConfiguration`<sup>Required</sup> <a name="DeleteEnvironmentBlueprintConfiguration" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteEnvironmentBlueprintConfiguration"></a>

```typescript
public readonly DeleteEnvironmentBlueprintConfiguration: string;
```

- *Type:* string

[Write] datazone:DeleteEnvironmentBlueprintConfiguration.

---

##### `DeleteEnvironmentProfile`<sup>Required</sup> <a name="DeleteEnvironmentProfile" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteEnvironmentProfile"></a>

```typescript
public readonly DeleteEnvironmentProfile: string;
```

- *Type:* string

[Write] datazone:DeleteEnvironmentProfile.

---

##### `DeleteFormType`<sup>Required</sup> <a name="DeleteFormType" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteFormType"></a>

```typescript
public readonly DeleteFormType: string;
```

- *Type:* string

[Write] datazone:DeleteFormType.

---

##### `DeleteGlossary`<sup>Required</sup> <a name="DeleteGlossary" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteGlossary"></a>

```typescript
public readonly DeleteGlossary: string;
```

- *Type:* string

[Write] datazone:DeleteGlossary.

---

##### `DeleteGlossaryTerm`<sup>Required</sup> <a name="DeleteGlossaryTerm" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteGlossaryTerm"></a>

```typescript
public readonly DeleteGlossaryTerm: string;
```

- *Type:* string

[Write] datazone:DeleteGlossaryTerm.

---

##### `DeleteLineageEvent`<sup>Required</sup> <a name="DeleteLineageEvent" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteLineageEvent"></a>

```typescript
public readonly DeleteLineageEvent: string;
```

- *Type:* string

[Write] datazone:DeleteLineageEvent.

---

##### `DeleteListing`<sup>Required</sup> <a name="DeleteListing" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteListing"></a>

```typescript
public readonly DeleteListing: string;
```

- *Type:* string

[Write] datazone:DeleteListing.

---

##### `DeleteNotebook`<sup>Required</sup> <a name="DeleteNotebook" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteNotebook"></a>

```typescript
public readonly DeleteNotebook: string;
```

- *Type:* string

[Write] datazone:DeleteNotebook.

---

##### `DeleteProject`<sup>Required</sup> <a name="DeleteProject" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteProject"></a>

```typescript
public readonly DeleteProject: string;
```

- *Type:* string

[Write] datazone:DeleteProject.

---

##### `DeleteProjectMembership`<sup>Required</sup> <a name="DeleteProjectMembership" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteProjectMembership"></a>

```typescript
public readonly DeleteProjectMembership: string;
```

- *Type:* string

[Write] datazone:DeleteProjectMembership.

---

##### `DeleteProjectProfile`<sup>Required</sup> <a name="DeleteProjectProfile" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteProjectProfile"></a>

```typescript
public readonly DeleteProjectProfile: string;
```

- *Type:* string

[Write] datazone:DeleteProjectProfile.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string;
```

- *Type:* string

[Write] datazone:DeleteRule.

---

##### `DeleteSubscriptionGrant`<sup>Required</sup> <a name="DeleteSubscriptionGrant" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteSubscriptionGrant"></a>

```typescript
public readonly DeleteSubscriptionGrant: string;
```

- *Type:* string

[Write] datazone:DeleteSubscriptionGrant.

---

##### `DeleteSubscriptionRequest`<sup>Required</sup> <a name="DeleteSubscriptionRequest" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteSubscriptionRequest"></a>

```typescript
public readonly DeleteSubscriptionRequest: string;
```

- *Type:* string

[Write] datazone:DeleteSubscriptionRequest.

---

##### `DeleteSubscriptionTarget`<sup>Required</sup> <a name="DeleteSubscriptionTarget" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteSubscriptionTarget"></a>

```typescript
public readonly DeleteSubscriptionTarget: string;
```

- *Type:* string

[Write] datazone:DeleteSubscriptionTarget.

---

##### `DeleteTimeSeriesDataPoints`<sup>Required</sup> <a name="DeleteTimeSeriesDataPoints" id="@cdk_utils/iam.datazone.DatazoneActions.property.DeleteTimeSeriesDataPoints"></a>

```typescript
public readonly DeleteTimeSeriesDataPoints: string;
```

- *Type:* string

[Write] datazone:DeleteTimeSeriesDataPoints.

---

##### `DisassociateEnvironmentRole`<sup>Required</sup> <a name="DisassociateEnvironmentRole" id="@cdk_utils/iam.datazone.DatazoneActions.property.DisassociateEnvironmentRole"></a>

```typescript
public readonly DisassociateEnvironmentRole: string;
```

- *Type:* string

[Write] datazone:DisassociateEnvironmentRole.

---

##### `DisassociateGovernedTerms`<sup>Required</sup> <a name="DisassociateGovernedTerms" id="@cdk_utils/iam.datazone.DatazoneActions.property.DisassociateGovernedTerms"></a>

```typescript
public readonly DisassociateGovernedTerms: string;
```

- *Type:* string

[Write] datazone:DisassociateGovernedTerms.

---

##### `GenerateCode`<sup>Required</sup> <a name="GenerateCode" id="@cdk_utils/iam.datazone.DatazoneActions.property.GenerateCode"></a>

```typescript
public readonly GenerateCode: string;
```

- *Type:* string

[Write] datazone:GenerateCode.

---

##### `ListAccountEnvironments`<sup>Required</sup> <a name="ListAccountEnvironments" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListAccountEnvironments"></a>

```typescript
public readonly ListAccountEnvironments: string;
```

- *Type:* string

[List] datazone:ListAccountEnvironments.

---

##### `ListAccountPools`<sup>Required</sup> <a name="ListAccountPools" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListAccountPools"></a>

```typescript
public readonly ListAccountPools: string;
```

- *Type:* string

[List] datazone:ListAccountPools.

---

##### `ListAccountsInAccountPool`<sup>Required</sup> <a name="ListAccountsInAccountPool" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListAccountsInAccountPool"></a>

```typescript
public readonly ListAccountsInAccountPool: string;
```

- *Type:* string

[List] datazone:ListAccountsInAccountPool.

---

##### `ListAssetFilters`<sup>Required</sup> <a name="ListAssetFilters" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListAssetFilters"></a>

```typescript
public readonly ListAssetFilters: string;
```

- *Type:* string

[List] datazone:ListAssetFilters.

---

##### `ListAssetRevisions`<sup>Required</sup> <a name="ListAssetRevisions" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListAssetRevisions"></a>

```typescript
public readonly ListAssetRevisions: string;
```

- *Type:* string

[List] datazone:ListAssetRevisions.

---

##### `ListCellRuns`<sup>Required</sup> <a name="ListCellRuns" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListCellRuns"></a>

```typescript
public readonly ListCellRuns: string;
```

- *Type:* string

[List] datazone:ListCellRuns.

---

##### `ListConnections`<sup>Required</sup> <a name="ListConnections" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListConnections"></a>

```typescript
public readonly ListConnections: string;
```

- *Type:* string

[List] datazone:ListConnections.

---

##### `ListConversations`<sup>Required</sup> <a name="ListConversations" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListConversations"></a>

```typescript
public readonly ListConversations: string;
```

- *Type:* string

[List] datazone:ListConversations.

---

##### `ListDataProductRevisions`<sup>Required</sup> <a name="ListDataProductRevisions" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListDataProductRevisions"></a>

```typescript
public readonly ListDataProductRevisions: string;
```

- *Type:* string

[List] datazone:ListDataProductRevisions.

---

##### `ListDataSourceRunActivities`<sup>Required</sup> <a name="ListDataSourceRunActivities" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListDataSourceRunActivities"></a>

```typescript
public readonly ListDataSourceRunActivities: string;
```

- *Type:* string

[List] datazone:ListDataSourceRunActivities.

---

##### `ListDataSourceRuns`<sup>Required</sup> <a name="ListDataSourceRuns" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListDataSourceRuns"></a>

```typescript
public readonly ListDataSourceRuns: string;
```

- *Type:* string

[List] datazone:ListDataSourceRuns.

---

##### `ListDataSources`<sup>Required</sup> <a name="ListDataSources" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListDataSources"></a>

```typescript
public readonly ListDataSources: string;
```

- *Type:* string

[List] datazone:ListDataSources.

---

##### `ListDesignations`<sup>Required</sup> <a name="ListDesignations" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListDesignations"></a>

```typescript
public readonly ListDesignations: string;
```

- *Type:* string

[List] datazone:ListDesignations.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListDomains"></a>

```typescript
public readonly ListDomains: string;
```

- *Type:* string

[List] datazone:ListDomains.

---

##### `ListDomainUnitsForParent`<sup>Required</sup> <a name="ListDomainUnitsForParent" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListDomainUnitsForParent"></a>

```typescript
public readonly ListDomainUnitsForParent: string;
```

- *Type:* string

[List] datazone:ListDomainUnitsForParent.

---

##### `ListEntityOwners`<sup>Required</sup> <a name="ListEntityOwners" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListEntityOwners"></a>

```typescript
public readonly ListEntityOwners: string;
```

- *Type:* string

[List] datazone:ListEntityOwners.

---

##### `ListEnvironmentActions`<sup>Required</sup> <a name="ListEnvironmentActions" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListEnvironmentActions"></a>

```typescript
public readonly ListEnvironmentActions: string;
```

- *Type:* string

[List] datazone:ListEnvironmentActions.

---

##### `ListEnvironmentBlueprintConfigurations`<sup>Required</sup> <a name="ListEnvironmentBlueprintConfigurations" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListEnvironmentBlueprintConfigurations"></a>

```typescript
public readonly ListEnvironmentBlueprintConfigurations: string;
```

- *Type:* string

[List] datazone:ListEnvironmentBlueprintConfigurations.

---

##### `ListEnvironmentBlueprintConfigurationSummaries`<sup>Required</sup> <a name="ListEnvironmentBlueprintConfigurationSummaries" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListEnvironmentBlueprintConfigurationSummaries"></a>

```typescript
public readonly ListEnvironmentBlueprintConfigurationSummaries: string;
```

- *Type:* string

[List] datazone:ListEnvironmentBlueprintConfigurationSummaries.

---

##### `ListEnvironmentBlueprints`<sup>Required</sup> <a name="ListEnvironmentBlueprints" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListEnvironmentBlueprints"></a>

```typescript
public readonly ListEnvironmentBlueprints: string;
```

- *Type:* string

[List] datazone:ListEnvironmentBlueprints.

---

##### `ListEnvironmentProfiles`<sup>Required</sup> <a name="ListEnvironmentProfiles" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListEnvironmentProfiles"></a>

```typescript
public readonly ListEnvironmentProfiles: string;
```

- *Type:* string

[List] datazone:ListEnvironmentProfiles.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string;
```

- *Type:* string

[List] datazone:ListEnvironments.

---

##### `ListGroupsForUser`<sup>Required</sup> <a name="ListGroupsForUser" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListGroupsForUser"></a>

```typescript
public readonly ListGroupsForUser: string;
```

- *Type:* string

[List] datazone:ListGroupsForUser.

---

##### `ListJobRuns`<sup>Required</sup> <a name="ListJobRuns" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListJobRuns"></a>

```typescript
public readonly ListJobRuns: string;
```

- *Type:* string

[List] datazone:ListJobRuns.

---

##### `ListLineageEvents`<sup>Required</sup> <a name="ListLineageEvents" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListLineageEvents"></a>

```typescript
public readonly ListLineageEvents: string;
```

- *Type:* string

[List] datazone:ListLineageEvents.

---

##### `ListLineageNodeHistory`<sup>Required</sup> <a name="ListLineageNodeHistory" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListLineageNodeHistory"></a>

```typescript
public readonly ListLineageNodeHistory: string;
```

- *Type:* string

[List] datazone:ListLineageNodeHistory.

---

##### `ListLinkedTypes`<sup>Required</sup> <a name="ListLinkedTypes" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListLinkedTypes"></a>

```typescript
public readonly ListLinkedTypes: string;
```

- *Type:* string

[List] datazone:ListLinkedTypes.

---

##### `ListMetadataGenerationRuns`<sup>Required</sup> <a name="ListMetadataGenerationRuns" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListMetadataGenerationRuns"></a>

```typescript
public readonly ListMetadataGenerationRuns: string;
```

- *Type:* string

[List] datazone:ListMetadataGenerationRuns.

---

##### `ListNotebookRuns`<sup>Required</sup> <a name="ListNotebookRuns" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListNotebookRuns"></a>

```typescript
public readonly ListNotebookRuns: string;
```

- *Type:* string

[List] datazone:ListNotebookRuns.

---

##### `ListNotebooks`<sup>Required</sup> <a name="ListNotebooks" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListNotebooks"></a>

```typescript
public readonly ListNotebooks: string;
```

- *Type:* string

[List] datazone:ListNotebooks.

---

##### `ListNotifications`<sup>Required</sup> <a name="ListNotifications" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListNotifications"></a>

```typescript
public readonly ListNotifications: string;
```

- *Type:* string

[List] datazone:ListNotifications.

---

##### `ListPolicyGrants`<sup>Required</sup> <a name="ListPolicyGrants" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListPolicyGrants"></a>

```typescript
public readonly ListPolicyGrants: string;
```

- *Type:* string

[List] datazone:ListPolicyGrants.

---

##### `ListProjectMemberships`<sup>Required</sup> <a name="ListProjectMemberships" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListProjectMemberships"></a>

```typescript
public readonly ListProjectMemberships: string;
```

- *Type:* string

[List] datazone:ListProjectMemberships.

---

##### `ListProjectProfiles`<sup>Required</sup> <a name="ListProjectProfiles" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListProjectProfiles"></a>

```typescript
public readonly ListProjectProfiles: string;
```

- *Type:* string

[List] datazone:ListProjectProfiles.

---

##### `ListProjects`<sup>Required</sup> <a name="ListProjects" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListProjects"></a>

```typescript
public readonly ListProjects: string;
```

- *Type:* string

[List] datazone:ListProjects.

---

##### `ListRules`<sup>Required</sup> <a name="ListRules" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListRules"></a>

```typescript
public readonly ListRules: string;
```

- *Type:* string

[List] datazone:ListRules.

---

##### `ListSubscriptionGrants`<sup>Required</sup> <a name="ListSubscriptionGrants" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListSubscriptionGrants"></a>

```typescript
public readonly ListSubscriptionGrants: string;
```

- *Type:* string

[List] datazone:ListSubscriptionGrants.

---

##### `ListSubscriptionRequests`<sup>Required</sup> <a name="ListSubscriptionRequests" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListSubscriptionRequests"></a>

```typescript
public readonly ListSubscriptionRequests: string;
```

- *Type:* string

[List] datazone:ListSubscriptionRequests.

---

##### `ListSubscriptions`<sup>Required</sup> <a name="ListSubscriptions" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListSubscriptions"></a>

```typescript
public readonly ListSubscriptions: string;
```

- *Type:* string

[List] datazone:ListSubscriptions.

---

##### `ListSubscriptionTargets`<sup>Required</sup> <a name="ListSubscriptionTargets" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListSubscriptionTargets"></a>

```typescript
public readonly ListSubscriptionTargets: string;
```

- *Type:* string

[List] datazone:ListSubscriptionTargets.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] datazone:ListTagsForResource.

---

##### `ListTimeSeriesDataPoints`<sup>Required</sup> <a name="ListTimeSeriesDataPoints" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListTimeSeriesDataPoints"></a>

```typescript
public readonly ListTimeSeriesDataPoints: string;
```

- *Type:* string

[List] datazone:ListTimeSeriesDataPoints.

---

##### `ListWarehouseMetadata`<sup>Required</sup> <a name="ListWarehouseMetadata" id="@cdk_utils/iam.datazone.DatazoneActions.property.ListWarehouseMetadata"></a>

```typescript
public readonly ListWarehouseMetadata: string;
```

- *Type:* string

[List] datazone:ListWarehouseMetadata.

---

##### `PostLineageEvent`<sup>Required</sup> <a name="PostLineageEvent" id="@cdk_utils/iam.datazone.DatazoneActions.property.PostLineageEvent"></a>

```typescript
public readonly PostLineageEvent: string;
```

- *Type:* string

[Write] datazone:PostLineageEvent.

---

##### `PostTimeSeriesDataPoints`<sup>Required</sup> <a name="PostTimeSeriesDataPoints" id="@cdk_utils/iam.datazone.DatazoneActions.property.PostTimeSeriesDataPoints"></a>

```typescript
public readonly PostTimeSeriesDataPoints: string;
```

- *Type:* string

[Write] datazone:PostTimeSeriesDataPoints.

---

##### `ProvisionDomain`<sup>Required</sup> <a name="ProvisionDomain" id="@cdk_utils/iam.datazone.DatazoneActions.property.ProvisionDomain"></a>

```typescript
public readonly ProvisionDomain: string;
```

- *Type:* string

[Write] datazone:ProvisionDomain.

---

##### `PutCellRunResult`<sup>Required</sup> <a name="PutCellRunResult" id="@cdk_utils/iam.datazone.DatazoneActions.property.PutCellRunResult"></a>

```typescript
public readonly PutCellRunResult: string;
```

- *Type:* string

[Write] datazone:PutCellRunResult.

---

##### `PutDataExportConfiguration`<sup>Required</sup> <a name="PutDataExportConfiguration" id="@cdk_utils/iam.datazone.DatazoneActions.property.PutDataExportConfiguration"></a>

```typescript
public readonly PutDataExportConfiguration: string;
```

- *Type:* string

[Write] datazone:PutDataExportConfiguration.

---

##### `PutDomainSharingPolicy`<sup>Required</sup> <a name="PutDomainSharingPolicy" id="@cdk_utils/iam.datazone.DatazoneActions.property.PutDomainSharingPolicy"></a>

```typescript
public readonly PutDomainSharingPolicy: string;
```

- *Type:* string

[PermissionManagement] datazone:PutDomainSharingPolicy.

---

##### `PutEnvironmentBlueprintConfiguration`<sup>Required</sup> <a name="PutEnvironmentBlueprintConfiguration" id="@cdk_utils/iam.datazone.DatazoneActions.property.PutEnvironmentBlueprintConfiguration"></a>

```typescript
public readonly PutEnvironmentBlueprintConfiguration: string;
```

- *Type:* string

[Write] datazone:PutEnvironmentBlueprintConfiguration.

---

##### `QueryGraph`<sup>Required</sup> <a name="QueryGraph" id="@cdk_utils/iam.datazone.DatazoneActions.property.QueryGraph"></a>

```typescript
public readonly QueryGraph: string;
```

- *Type:* string

[List] datazone:QueryGraph.

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdk_utils/iam.datazone.DatazoneActions.property.RefreshToken"></a>

```typescript
public readonly RefreshToken: string;
```

- *Type:* string

[Write] datazone:RefreshToken.

---

##### `RejectPredictions`<sup>Required</sup> <a name="RejectPredictions" id="@cdk_utils/iam.datazone.DatazoneActions.property.RejectPredictions"></a>

```typescript
public readonly RejectPredictions: string;
```

- *Type:* string

[Write] datazone:RejectPredictions.

---

##### `RejectSubscriptionRequest`<sup>Required</sup> <a name="RejectSubscriptionRequest" id="@cdk_utils/iam.datazone.DatazoneActions.property.RejectSubscriptionRequest"></a>

```typescript
public readonly RejectSubscriptionRequest: string;
```

- *Type:* string

[Write] datazone:RejectSubscriptionRequest.

---

##### `RemoveEntityOwner`<sup>Required</sup> <a name="RemoveEntityOwner" id="@cdk_utils/iam.datazone.DatazoneActions.property.RemoveEntityOwner"></a>

```typescript
public readonly RemoveEntityOwner: string;
```

- *Type:* string

[Write] datazone:RemoveEntityOwner.

---

##### `RemovePolicyGrant`<sup>Required</sup> <a name="RemovePolicyGrant" id="@cdk_utils/iam.datazone.DatazoneActions.property.RemovePolicyGrant"></a>

```typescript
public readonly RemovePolicyGrant: string;
```

- *Type:* string

[PermissionManagement] datazone:RemovePolicyGrant.

---

##### `RevokeSubscription`<sup>Required</sup> <a name="RevokeSubscription" id="@cdk_utils/iam.datazone.DatazoneActions.property.RevokeSubscription"></a>

```typescript
public readonly RevokeSubscription: string;
```

- *Type:* string

[PermissionManagement] datazone:RevokeSubscription.

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdk_utils/iam.datazone.DatazoneActions.property.Search"></a>

```typescript
public readonly Search: string;
```

- *Type:* string

[List] datazone:Search.

---

##### `SearchGroupProfiles`<sup>Required</sup> <a name="SearchGroupProfiles" id="@cdk_utils/iam.datazone.DatazoneActions.property.SearchGroupProfiles"></a>

```typescript
public readonly SearchGroupProfiles: string;
```

- *Type:* string

[List] datazone:SearchGroupProfiles.

---

##### `SearchListings`<sup>Required</sup> <a name="SearchListings" id="@cdk_utils/iam.datazone.DatazoneActions.property.SearchListings"></a>

```typescript
public readonly SearchListings: string;
```

- *Type:* string

[List] datazone:SearchListings.

---

##### `SearchRules`<sup>Required</sup> <a name="SearchRules" id="@cdk_utils/iam.datazone.DatazoneActions.property.SearchRules"></a>

```typescript
public readonly SearchRules: string;
```

- *Type:* string

[List] datazone:SearchRules.

---

##### `SearchTypes`<sup>Required</sup> <a name="SearchTypes" id="@cdk_utils/iam.datazone.DatazoneActions.property.SearchTypes"></a>

```typescript
public readonly SearchTypes: string;
```

- *Type:* string

[List] datazone:SearchTypes.

---

##### `SearchUserProfiles`<sup>Required</sup> <a name="SearchUserProfiles" id="@cdk_utils/iam.datazone.DatazoneActions.property.SearchUserProfiles"></a>

```typescript
public readonly SearchUserProfiles: string;
```

- *Type:* string

[List] datazone:SearchUserProfiles.

---

##### `SendMessage`<sup>Required</sup> <a name="SendMessage" id="@cdk_utils/iam.datazone.DatazoneActions.property.SendMessage"></a>

```typescript
public readonly SendMessage: string;
```

- *Type:* string

[Write] datazone:SendMessage.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.datazone.DatazoneActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SsoLogin`<sup>Required</sup> <a name="SsoLogin" id="@cdk_utils/iam.datazone.DatazoneActions.property.SsoLogin"></a>

```typescript
public readonly SsoLogin: string;
```

- *Type:* string

[Write] datazone:SsoLogin.

---

##### `SsoLogout`<sup>Required</sup> <a name="SsoLogout" id="@cdk_utils/iam.datazone.DatazoneActions.property.SsoLogout"></a>

```typescript
public readonly SsoLogout: string;
```

- *Type:* string

[Write] datazone:SsoLogout.

---

##### `StartAccountBootstrapAction`<sup>Required</sup> <a name="StartAccountBootstrapAction" id="@cdk_utils/iam.datazone.DatazoneActions.property.StartAccountBootstrapAction"></a>

```typescript
public readonly StartAccountBootstrapAction: string;
```

- *Type:* string

[Write] datazone:StartAccountBootstrapAction.

---

##### `StartCompute`<sup>Required</sup> <a name="StartCompute" id="@cdk_utils/iam.datazone.DatazoneActions.property.StartCompute"></a>

```typescript
public readonly StartCompute: string;
```

- *Type:* string

[Write] datazone:StartCompute.

---

##### `StartConversation`<sup>Required</sup> <a name="StartConversation" id="@cdk_utils/iam.datazone.DatazoneActions.property.StartConversation"></a>

```typescript
public readonly StartConversation: string;
```

- *Type:* string

[Write] datazone:StartConversation.

---

##### `StartDataSourceRun`<sup>Required</sup> <a name="StartDataSourceRun" id="@cdk_utils/iam.datazone.DatazoneActions.property.StartDataSourceRun"></a>

```typescript
public readonly StartDataSourceRun: string;
```

- *Type:* string

[Write] datazone:StartDataSourceRun.

---

##### `StartMetadataGenerationRun`<sup>Required</sup> <a name="StartMetadataGenerationRun" id="@cdk_utils/iam.datazone.DatazoneActions.property.StartMetadataGenerationRun"></a>

```typescript
public readonly StartMetadataGenerationRun: string;
```

- *Type:* string

[Write] datazone:StartMetadataGenerationRun.

---

##### `StartNotebookCompute`<sup>Required</sup> <a name="StartNotebookCompute" id="@cdk_utils/iam.datazone.DatazoneActions.property.StartNotebookCompute"></a>

```typescript
public readonly StartNotebookCompute: string;
```

- *Type:* string

[Write] datazone:StartNotebookCompute.

---

##### `StartNotebookExport`<sup>Required</sup> <a name="StartNotebookExport" id="@cdk_utils/iam.datazone.DatazoneActions.property.StartNotebookExport"></a>

```typescript
public readonly StartNotebookExport: string;
```

- *Type:* string

[Write] datazone:StartNotebookExport.

---

##### `StartNotebookImport`<sup>Required</sup> <a name="StartNotebookImport" id="@cdk_utils/iam.datazone.DatazoneActions.property.StartNotebookImport"></a>

```typescript
public readonly StartNotebookImport: string;
```

- *Type:* string

[Write] datazone:StartNotebookImport.

---

##### `StartNotebookRun`<sup>Required</sup> <a name="StartNotebookRun" id="@cdk_utils/iam.datazone.DatazoneActions.property.StartNotebookRun"></a>

```typescript
public readonly StartNotebookRun: string;
```

- *Type:* string

[Write] datazone:StartNotebookRun.

---

##### `StartNotebookSync`<sup>Required</sup> <a name="StartNotebookSync" id="@cdk_utils/iam.datazone.DatazoneActions.property.StartNotebookSync"></a>

```typescript
public readonly StartNotebookSync: string;
```

- *Type:* string

[Write] datazone:StartNotebookSync.

---

##### `StopCompute`<sup>Required</sup> <a name="StopCompute" id="@cdk_utils/iam.datazone.DatazoneActions.property.StopCompute"></a>

```typescript
public readonly StopCompute: string;
```

- *Type:* string

[Write] datazone:StopCompute.

---

##### `StopMetadataGenerationRun`<sup>Required</sup> <a name="StopMetadataGenerationRun" id="@cdk_utils/iam.datazone.DatazoneActions.property.StopMetadataGenerationRun"></a>

```typescript
public readonly StopMetadataGenerationRun: string;
```

- *Type:* string

[Write] datazone:StopMetadataGenerationRun.

---

##### `StopNotebookCompute`<sup>Required</sup> <a name="StopNotebookCompute" id="@cdk_utils/iam.datazone.DatazoneActions.property.StopNotebookCompute"></a>

```typescript
public readonly StopNotebookCompute: string;
```

- *Type:* string

[Write] datazone:StopNotebookCompute.

---

##### `StopNotebookRun`<sup>Required</sup> <a name="StopNotebookRun" id="@cdk_utils/iam.datazone.DatazoneActions.property.StopNotebookRun"></a>

```typescript
public readonly StopNotebookRun: string;
```

- *Type:* string

[Write] datazone:StopNotebookRun.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.datazone.DatazoneActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] datazone:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.datazone.DatazoneActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] datazone:UntagResource.

---

##### `UpdateAccountPool`<sup>Required</sup> <a name="UpdateAccountPool" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateAccountPool"></a>

```typescript
public readonly UpdateAccountPool: string;
```

- *Type:* string

[Write] datazone:UpdateAccountPool.

---

##### `UpdateAssetFilter`<sup>Required</sup> <a name="UpdateAssetFilter" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateAssetFilter"></a>

```typescript
public readonly UpdateAssetFilter: string;
```

- *Type:* string

[Write] datazone:UpdateAssetFilter.

---

##### `UpdateCell`<sup>Required</sup> <a name="UpdateCell" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateCell"></a>

```typescript
public readonly UpdateCell: string;
```

- *Type:* string

[Write] datazone:UpdateCell.

---

##### `UpdateCellRun`<sup>Required</sup> <a name="UpdateCellRun" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateCellRun"></a>

```typescript
public readonly UpdateCellRun: string;
```

- *Type:* string

[Write] datazone:UpdateCellRun.

---

##### `UpdateConnection`<sup>Required</sup> <a name="UpdateConnection" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateConnection"></a>

```typescript
public readonly UpdateConnection: string;
```

- *Type:* string

[Write] datazone:UpdateConnection.

---

##### `UpdateDataSource`<sup>Required</sup> <a name="UpdateDataSource" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateDataSource"></a>

```typescript
public readonly UpdateDataSource: string;
```

- *Type:* string

[Write] datazone:UpdateDataSource.

---

##### `UpdateDataSourceRunActivities`<sup>Required</sup> <a name="UpdateDataSourceRunActivities" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateDataSourceRunActivities"></a>

```typescript
public readonly UpdateDataSourceRunActivities: string;
```

- *Type:* string

[Write] datazone:UpdateDataSourceRunActivities.

---

##### `UpdateDesignation`<sup>Required</sup> <a name="UpdateDesignation" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateDesignation"></a>

```typescript
public readonly UpdateDesignation: string;
```

- *Type:* string

[Write] datazone:UpdateDesignation.

---

##### `UpdateDomain`<sup>Required</sup> <a name="UpdateDomain" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateDomain"></a>

```typescript
public readonly UpdateDomain: string;
```

- *Type:* string

[Write] datazone:UpdateDomain.

---

##### `UpdateDomainUnit`<sup>Required</sup> <a name="UpdateDomainUnit" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateDomainUnit"></a>

```typescript
public readonly UpdateDomainUnit: string;
```

- *Type:* string

[Write] datazone:UpdateDomainUnit.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string;
```

- *Type:* string

[Write] datazone:UpdateEnvironment.

---

##### `UpdateEnvironmentAction`<sup>Required</sup> <a name="UpdateEnvironmentAction" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateEnvironmentAction"></a>

```typescript
public readonly UpdateEnvironmentAction: string;
```

- *Type:* string

[Write] datazone:UpdateEnvironmentAction.

---

##### `UpdateEnvironmentBlueprint`<sup>Required</sup> <a name="UpdateEnvironmentBlueprint" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateEnvironmentBlueprint"></a>

```typescript
public readonly UpdateEnvironmentBlueprint: string;
```

- *Type:* string

[Write] datazone:UpdateEnvironmentBlueprint.

---

##### `UpdateEnvironmentConfiguration`<sup>Required</sup> <a name="UpdateEnvironmentConfiguration" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateEnvironmentConfiguration"></a>

```typescript
public readonly UpdateEnvironmentConfiguration: string;
```

- *Type:* string

[Write] datazone:UpdateEnvironmentConfiguration.

---

##### `UpdateEnvironmentDeploymentStatus`<sup>Required</sup> <a name="UpdateEnvironmentDeploymentStatus" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateEnvironmentDeploymentStatus"></a>

```typescript
public readonly UpdateEnvironmentDeploymentStatus: string;
```

- *Type:* string

[Write] datazone:UpdateEnvironmentDeploymentStatus.

---

##### `UpdateEnvironmentProfile`<sup>Required</sup> <a name="UpdateEnvironmentProfile" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateEnvironmentProfile"></a>

```typescript
public readonly UpdateEnvironmentProfile: string;
```

- *Type:* string

[Write] datazone:UpdateEnvironmentProfile.

---

##### `UpdateGlossary`<sup>Required</sup> <a name="UpdateGlossary" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateGlossary"></a>

```typescript
public readonly UpdateGlossary: string;
```

- *Type:* string

[Write] datazone:UpdateGlossary.

---

##### `UpdateGlossaryTerm`<sup>Required</sup> <a name="UpdateGlossaryTerm" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateGlossaryTerm"></a>

```typescript
public readonly UpdateGlossaryTerm: string;
```

- *Type:* string

[Write] datazone:UpdateGlossaryTerm.

---

##### `UpdateGroupProfile`<sup>Required</sup> <a name="UpdateGroupProfile" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateGroupProfile"></a>

```typescript
public readonly UpdateGroupProfile: string;
```

- *Type:* string

[Write] datazone:UpdateGroupProfile.

---

##### `UpdateNotebook`<sup>Required</sup> <a name="UpdateNotebook" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateNotebook"></a>

```typescript
public readonly UpdateNotebook: string;
```

- *Type:* string

[Write] datazone:UpdateNotebook.

---

##### `UpdateProject`<sup>Required</sup> <a name="UpdateProject" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateProject"></a>

```typescript
public readonly UpdateProject: string;
```

- *Type:* string

[Write] datazone:UpdateProject.

---

##### `UpdateProjectProfile`<sup>Required</sup> <a name="UpdateProjectProfile" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateProjectProfile"></a>

```typescript
public readonly UpdateProjectProfile: string;
```

- *Type:* string

[Write] datazone:UpdateProjectProfile.

---

##### `UpdateRule`<sup>Required</sup> <a name="UpdateRule" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateRule"></a>

```typescript
public readonly UpdateRule: string;
```

- *Type:* string

[Write] datazone:UpdateRule.

---

##### `UpdateSubscriptionGrantStatus`<sup>Required</sup> <a name="UpdateSubscriptionGrantStatus" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateSubscriptionGrantStatus"></a>

```typescript
public readonly UpdateSubscriptionGrantStatus: string;
```

- *Type:* string

[Write] datazone:UpdateSubscriptionGrantStatus.

---

##### `UpdateSubscriptionRequest`<sup>Required</sup> <a name="UpdateSubscriptionRequest" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateSubscriptionRequest"></a>

```typescript
public readonly UpdateSubscriptionRequest: string;
```

- *Type:* string

[Write] datazone:UpdateSubscriptionRequest.

---

##### `UpdateSubscriptionTarget`<sup>Required</sup> <a name="UpdateSubscriptionTarget" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateSubscriptionTarget"></a>

```typescript
public readonly UpdateSubscriptionTarget: string;
```

- *Type:* string

[Write] datazone:UpdateSubscriptionTarget.

---

##### `UpdateUserProfile`<sup>Required</sup> <a name="UpdateUserProfile" id="@cdk_utils/iam.datazone.DatazoneActions.property.UpdateUserProfile"></a>

```typescript
public readonly UpdateUserProfile: string;
```

- *Type:* string

[Write] datazone:UpdateUserProfile.

---

##### `ValidatePassRole`<sup>Required</sup> <a name="ValidatePassRole" id="@cdk_utils/iam.datazone.DatazoneActions.property.ValidatePassRole"></a>

```typescript
public readonly ValidatePassRole: string;
```

- *Type:* string

[Write] datazone:ValidatePassRole.

---

##### `ValidatePolicy`<sup>Required</sup> <a name="ValidatePolicy" id="@cdk_utils/iam.datazone.DatazoneActions.property.ValidatePolicy"></a>

```typescript
public readonly ValidatePolicy: string;
```

- *Type:* string

[Read] datazone:ValidatePolicy.

---

### DatazoneConditions <a name="DatazoneConditions" id="@cdk_utils/iam.datazone.DatazoneConditions"></a>

Condition key constants and builders for datazone.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.datazone.DatazoneConditions.Initializer"></a>

```typescript
import { datazone } from '@cdk_utils/iam'

new datazone.DatazoneConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneConditions.domainId">domainId</a></code> | Generates a condition block for `datazone:domainId`. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneConditions.projectId">projectId</a></code> | Generates a condition block for `datazone:projectId`. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneConditions.userId">userId</a></code> | Generates a condition block for `datazone:userId`. |

---

##### `domainId` <a name="domainId" id="@cdk_utils/iam.datazone.DatazoneConditions.domainId"></a>

```typescript
import { datazone } from '@cdk_utils/iam'

datazone.DatazoneConditions.domainId(value: string)
```

Generates a condition block for `datazone:domainId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.datazone.DatazoneConditions.domainId.parameter.value"></a>

- *Type:* string

---

##### `projectId` <a name="projectId" id="@cdk_utils/iam.datazone.DatazoneConditions.projectId"></a>

```typescript
import { datazone } from '@cdk_utils/iam'

datazone.DatazoneConditions.projectId(value: string)
```

Generates a condition block for `datazone:projectId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.datazone.DatazoneConditions.projectId.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.datazone.DatazoneConditions.requestTag"></a>

```typescript
import { datazone } from '@cdk_utils/iam'

datazone.DatazoneConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.datazone.DatazoneConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.datazone.DatazoneConditions.resourceTag"></a>

```typescript
import { datazone } from '@cdk_utils/iam'

datazone.DatazoneConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.datazone.DatazoneConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.datazone.DatazoneConditions.tagKeys"></a>

```typescript
import { datazone } from '@cdk_utils/iam'

datazone.DatazoneConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.datazone.DatazoneConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `userId` <a name="userId" id="@cdk_utils/iam.datazone.DatazoneConditions.userId"></a>

```typescript
import { datazone } from '@cdk_utils/iam'

datazone.DatazoneConditions.userId(value: string)
```

Generates a condition block for `datazone:userId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.datazone.DatazoneConditions.userId.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneConditions.property.CreateDomainConditionKeys">CreateDomainConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDomain action. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneConditions.property.DOMAIN_ID">DOMAIN_ID</a></code> | <code>string</code> | Condition key: datazone:domainId (String). |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneConditions.property.PROJECT_ID">PROJECT_ID</a></code> | <code>string</code> | Condition key: datazone:projectId (String). |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneConditions.property.USER_ID">USER_ID</a></code> | <code>string</code> | Condition key: datazone:userId (String). |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.datazone.DatazoneConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.datazone.DatazoneConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.datazone.DatazoneConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDomainConditionKeys`<sup>Required</sup> <a name="CreateDomainConditionKeys" id="@cdk_utils/iam.datazone.DatazoneConditions.property.CreateDomainConditionKeys"></a>

```typescript
public readonly CreateDomainConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDomain action.

---

##### `DOMAIN_ID`<sup>Required</sup> <a name="DOMAIN_ID" id="@cdk_utils/iam.datazone.DatazoneConditions.property.DOMAIN_ID"></a>

```typescript
public readonly DOMAIN_ID: string;
```

- *Type:* string

Condition key: datazone:domainId (String).

---

##### `PROJECT_ID`<sup>Required</sup> <a name="PROJECT_ID" id="@cdk_utils/iam.datazone.DatazoneConditions.property.PROJECT_ID"></a>

```typescript
public readonly PROJECT_ID: string;
```

- *Type:* string

Condition key: datazone:projectId (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.datazone.DatazoneConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.datazone.DatazoneConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `USER_ID`<sup>Required</sup> <a name="USER_ID" id="@cdk_utils/iam.datazone.DatazoneConditions.property.USER_ID"></a>

```typescript
public readonly USER_ID: string;
```

- *Type:* string

Condition key: datazone:userId (String).

---

### DatazoneOperations <a name="DatazoneOperations" id="@cdk_utils/iam.datazone.DatazoneOperations"></a>

API operation to required IAM actions mapping for datazone.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.datazone.DatazoneOperations.Initializer"></a>

```typescript
import { datazone } from '@cdk_utils/iam'

new datazone.DatazoneOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.AcceptPredictions">AcceptPredictions</a></code> | <code>string[]</code> | IAM actions required for the AcceptPredictions API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.AcceptSubscriptionRequest">AcceptSubscriptionRequest</a></code> | <code>string[]</code> | IAM actions required for the AcceptSubscriptionRequest API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.AddEntityOwner">AddEntityOwner</a></code> | <code>string[]</code> | IAM actions required for the AddEntityOwner API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.AddPolicyGrant">AddPolicyGrant</a></code> | <code>string[]</code> | IAM actions required for the AddPolicyGrant API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.AssociateEnvironmentRole">AssociateEnvironmentRole</a></code> | <code>string[]</code> | IAM actions required for the AssociateEnvironmentRole API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.AssociateGovernedTerms">AssociateGovernedTerms</a></code> | <code>string[]</code> | IAM actions required for the AssociateGovernedTerms API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.BatchGetAttributesMetadata">BatchGetAttributesMetadata</a></code> | <code>string[]</code> | IAM actions required for the BatchGetAttributesMetadata API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.BatchPutAttributesMetadata">BatchPutAttributesMetadata</a></code> | <code>string[]</code> | IAM actions required for the BatchPutAttributesMetadata API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CancelMetadataGenerationRun">CancelMetadataGenerationRun</a></code> | <code>string[]</code> | IAM actions required for the CancelMetadataGenerationRun API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CancelSubscription">CancelSubscription</a></code> | <code>string[]</code> | IAM actions required for the CancelSubscription API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateAccountPool">CreateAccountPool</a></code> | <code>string[]</code> | IAM actions required for the CreateAccountPool API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateAsset">CreateAsset</a></code> | <code>string[]</code> | IAM actions required for the CreateAsset API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateAssetFilter">CreateAssetFilter</a></code> | <code>string[]</code> | IAM actions required for the CreateAssetFilter API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateAssetRevision">CreateAssetRevision</a></code> | <code>string[]</code> | IAM actions required for the CreateAssetRevision API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateAssetType">CreateAssetType</a></code> | <code>string[]</code> | IAM actions required for the CreateAssetType API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateConnection">CreateConnection</a></code> | <code>string[]</code> | IAM actions required for the CreateConnection API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateDataProduct">CreateDataProduct</a></code> | <code>string[]</code> | IAM actions required for the CreateDataProduct API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateDataProductRevision">CreateDataProductRevision</a></code> | <code>string[]</code> | IAM actions required for the CreateDataProductRevision API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateDataSource">CreateDataSource</a></code> | <code>string[]</code> | IAM actions required for the CreateDataSource API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateDomain">CreateDomain</a></code> | <code>string[]</code> | IAM actions required for the CreateDomain API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateDomainUnit">CreateDomainUnit</a></code> | <code>string[]</code> | IAM actions required for the CreateDomainUnit API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironment API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateEnvironmentAction">CreateEnvironmentAction</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironmentAction API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateEnvironmentBlueprint">CreateEnvironmentBlueprint</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironmentBlueprint API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateEnvironmentProfile">CreateEnvironmentProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironmentProfile API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateFormType">CreateFormType</a></code> | <code>string[]</code> | IAM actions required for the CreateFormType API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateGlossary">CreateGlossary</a></code> | <code>string[]</code> | IAM actions required for the CreateGlossary API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateGlossaryTerm">CreateGlossaryTerm</a></code> | <code>string[]</code> | IAM actions required for the CreateGlossaryTerm API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateGroupProfile">CreateGroupProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateGroupProfile API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateListingChangeSet">CreateListingChangeSet</a></code> | <code>string[]</code> | IAM actions required for the CreateListingChangeSet API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateNotebook">CreateNotebook</a></code> | <code>string[]</code> | IAM actions required for the CreateNotebook API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateProject">CreateProject</a></code> | <code>string[]</code> | IAM actions required for the CreateProject API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateProjectMembership">CreateProjectMembership</a></code> | <code>string[]</code> | IAM actions required for the CreateProjectMembership API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateProjectProfile">CreateProjectProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateProjectProfile API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateRule">CreateRule</a></code> | <code>string[]</code> | IAM actions required for the CreateRule API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateSubscriptionGrant">CreateSubscriptionGrant</a></code> | <code>string[]</code> | IAM actions required for the CreateSubscriptionGrant API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateSubscriptionRequest">CreateSubscriptionRequest</a></code> | <code>string[]</code> | IAM actions required for the CreateSubscriptionRequest API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateSubscriptionTarget">CreateSubscriptionTarget</a></code> | <code>string[]</code> | IAM actions required for the CreateSubscriptionTarget API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.CreateUserProfile">CreateUserProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateUserProfile API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteAccountPool">DeleteAccountPool</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccountPool API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteAsset">DeleteAsset</a></code> | <code>string[]</code> | IAM actions required for the DeleteAsset API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteAssetFilter">DeleteAssetFilter</a></code> | <code>string[]</code> | IAM actions required for the DeleteAssetFilter API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteAssetType">DeleteAssetType</a></code> | <code>string[]</code> | IAM actions required for the DeleteAssetType API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteConnection">DeleteConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnection API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteDataExportConfiguration">DeleteDataExportConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataExportConfiguration API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteDataProduct">DeleteDataProduct</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataProduct API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteDataSource">DeleteDataSource</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataSource API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteDomain">DeleteDomain</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomain API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteDomainUnit">DeleteDomainUnit</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomainUnit API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironment API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteEnvironmentAction">DeleteEnvironmentAction</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironmentAction API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteEnvironmentBlueprint">DeleteEnvironmentBlueprint</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironmentBlueprint API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteEnvironmentBlueprintConfiguration">DeleteEnvironmentBlueprintConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironmentBlueprintConfiguration API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteEnvironmentProfile">DeleteEnvironmentProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironmentProfile API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteFormType">DeleteFormType</a></code> | <code>string[]</code> | IAM actions required for the DeleteFormType API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteGlossary">DeleteGlossary</a></code> | <code>string[]</code> | IAM actions required for the DeleteGlossary API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteGlossaryTerm">DeleteGlossaryTerm</a></code> | <code>string[]</code> | IAM actions required for the DeleteGlossaryTerm API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteLineageEvent">DeleteLineageEvent</a></code> | <code>string[]</code> | IAM actions required for the DeleteLineageEvent API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteListing">DeleteListing</a></code> | <code>string[]</code> | IAM actions required for the DeleteListing API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteNotebook">DeleteNotebook</a></code> | <code>string[]</code> | IAM actions required for the DeleteNotebook API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteProject">DeleteProject</a></code> | <code>string[]</code> | IAM actions required for the DeleteProject API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteProjectMembership">DeleteProjectMembership</a></code> | <code>string[]</code> | IAM actions required for the DeleteProjectMembership API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteProjectProfile">DeleteProjectProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteProjectProfile API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteRule">DeleteRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteRule API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteSubscriptionGrant">DeleteSubscriptionGrant</a></code> | <code>string[]</code> | IAM actions required for the DeleteSubscriptionGrant API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteSubscriptionRequest">DeleteSubscriptionRequest</a></code> | <code>string[]</code> | IAM actions required for the DeleteSubscriptionRequest API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteSubscriptionTarget">DeleteSubscriptionTarget</a></code> | <code>string[]</code> | IAM actions required for the DeleteSubscriptionTarget API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteTimeSeriesDataPoints">DeleteTimeSeriesDataPoints</a></code> | <code>string[]</code> | IAM actions required for the DeleteTimeSeriesDataPoints API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DisassociateEnvironmentRole">DisassociateEnvironmentRole</a></code> | <code>string[]</code> | IAM actions required for the DisassociateEnvironmentRole API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.DisassociateGovernedTerms">DisassociateGovernedTerms</a></code> | <code>string[]</code> | IAM actions required for the DisassociateGovernedTerms API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListAccountPools">ListAccountPools</a></code> | <code>string[]</code> | IAM actions required for the ListAccountPools API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListAccountsInAccountPool">ListAccountsInAccountPool</a></code> | <code>string[]</code> | IAM actions required for the ListAccountsInAccountPool API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListAssetFilters">ListAssetFilters</a></code> | <code>string[]</code> | IAM actions required for the ListAssetFilters API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListAssetRevisions">ListAssetRevisions</a></code> | <code>string[]</code> | IAM actions required for the ListAssetRevisions API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListConnections">ListConnections</a></code> | <code>string[]</code> | IAM actions required for the ListConnections API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListDataProductRevisions">ListDataProductRevisions</a></code> | <code>string[]</code> | IAM actions required for the ListDataProductRevisions API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListDataSourceRunActivities">ListDataSourceRunActivities</a></code> | <code>string[]</code> | IAM actions required for the ListDataSourceRunActivities API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListDataSourceRuns">ListDataSourceRuns</a></code> | <code>string[]</code> | IAM actions required for the ListDataSourceRuns API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListDataSources">ListDataSources</a></code> | <code>string[]</code> | IAM actions required for the ListDataSources API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListDomains">ListDomains</a></code> | <code>string[]</code> | IAM actions required for the ListDomains API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListDomainUnitsForParent">ListDomainUnitsForParent</a></code> | <code>string[]</code> | IAM actions required for the ListDomainUnitsForParent API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListEntityOwners">ListEntityOwners</a></code> | <code>string[]</code> | IAM actions required for the ListEntityOwners API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListEnvironmentActions">ListEnvironmentActions</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironmentActions API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListEnvironmentBlueprintConfigurations">ListEnvironmentBlueprintConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironmentBlueprintConfigurations API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListEnvironmentBlueprints">ListEnvironmentBlueprints</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironmentBlueprints API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListEnvironmentProfiles">ListEnvironmentProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironmentProfiles API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListEnvironments">ListEnvironments</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironments API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListJobRuns">ListJobRuns</a></code> | <code>string[]</code> | IAM actions required for the ListJobRuns API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListLineageEvents">ListLineageEvents</a></code> | <code>string[]</code> | IAM actions required for the ListLineageEvents API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListLineageNodeHistory">ListLineageNodeHistory</a></code> | <code>string[]</code> | IAM actions required for the ListLineageNodeHistory API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListMetadataGenerationRuns">ListMetadataGenerationRuns</a></code> | <code>string[]</code> | IAM actions required for the ListMetadataGenerationRuns API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListNotebookRuns">ListNotebookRuns</a></code> | <code>string[]</code> | IAM actions required for the ListNotebookRuns API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListNotebooks">ListNotebooks</a></code> | <code>string[]</code> | IAM actions required for the ListNotebooks API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListNotifications">ListNotifications</a></code> | <code>string[]</code> | IAM actions required for the ListNotifications API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListPolicyGrants">ListPolicyGrants</a></code> | <code>string[]</code> | IAM actions required for the ListPolicyGrants API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListProjectMemberships">ListProjectMemberships</a></code> | <code>string[]</code> | IAM actions required for the ListProjectMemberships API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListProjectProfiles">ListProjectProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListProjectProfiles API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListProjects">ListProjects</a></code> | <code>string[]</code> | IAM actions required for the ListProjects API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListRules">ListRules</a></code> | <code>string[]</code> | IAM actions required for the ListRules API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListSubscriptionGrants">ListSubscriptionGrants</a></code> | <code>string[]</code> | IAM actions required for the ListSubscriptionGrants API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListSubscriptionRequests">ListSubscriptionRequests</a></code> | <code>string[]</code> | IAM actions required for the ListSubscriptionRequests API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListSubscriptions">ListSubscriptions</a></code> | <code>string[]</code> | IAM actions required for the ListSubscriptions API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListSubscriptionTargets">ListSubscriptionTargets</a></code> | <code>string[]</code> | IAM actions required for the ListSubscriptionTargets API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.ListTimeSeriesDataPoints">ListTimeSeriesDataPoints</a></code> | <code>string[]</code> | IAM actions required for the ListTimeSeriesDataPoints API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetAccountPool">opGetAccountPool</a></code> | <code>string[]</code> | IAM actions required for the GetAccountPool API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetAsset">opGetAsset</a></code> | <code>string[]</code> | IAM actions required for the GetAsset API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetAssetFilter">opGetAssetFilter</a></code> | <code>string[]</code> | IAM actions required for the GetAssetFilter API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetAssetType">opGetAssetType</a></code> | <code>string[]</code> | IAM actions required for the GetAssetType API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetConnection">opGetConnection</a></code> | <code>string[]</code> | IAM actions required for the GetConnection API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetDataExportConfiguration">opGetDataExportConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetDataExportConfiguration API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetDataProduct">opGetDataProduct</a></code> | <code>string[]</code> | IAM actions required for the GetDataProduct API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetDataSource">opGetDataSource</a></code> | <code>string[]</code> | IAM actions required for the GetDataSource API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetDataSourceRun">opGetDataSourceRun</a></code> | <code>string[]</code> | IAM actions required for the GetDataSourceRun API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetDomain">opGetDomain</a></code> | <code>string[]</code> | IAM actions required for the GetDomain API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetDomainUnit">opGetDomainUnit</a></code> | <code>string[]</code> | IAM actions required for the GetDomainUnit API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetEnvironment">opGetEnvironment</a></code> | <code>string[]</code> | IAM actions required for the GetEnvironment API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetEnvironmentAction">opGetEnvironmentAction</a></code> | <code>string[]</code> | IAM actions required for the GetEnvironmentAction API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetEnvironmentBlueprint">opGetEnvironmentBlueprint</a></code> | <code>string[]</code> | IAM actions required for the GetEnvironmentBlueprint API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetEnvironmentBlueprintConfiguration">opGetEnvironmentBlueprintConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetEnvironmentBlueprintConfiguration API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetEnvironmentCredentials">opGetEnvironmentCredentials</a></code> | <code>string[]</code> | IAM actions required for the GetEnvironmentCredentials API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetEnvironmentProfile">opGetEnvironmentProfile</a></code> | <code>string[]</code> | IAM actions required for the GetEnvironmentProfile API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetFormType">opGetFormType</a></code> | <code>string[]</code> | IAM actions required for the GetFormType API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetGlossary">opGetGlossary</a></code> | <code>string[]</code> | IAM actions required for the GetGlossary API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetGlossaryTerm">opGetGlossaryTerm</a></code> | <code>string[]</code> | IAM actions required for the GetGlossaryTerm API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetGroupProfile">opGetGroupProfile</a></code> | <code>string[]</code> | IAM actions required for the GetGroupProfile API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetIamPortalLoginUrl">opGetIamPortalLoginUrl</a></code> | <code>string[]</code> | IAM actions required for the GetIamPortalLoginUrl API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetJobRun">opGetJobRun</a></code> | <code>string[]</code> | IAM actions required for the GetJobRun API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetLineageEvent">opGetLineageEvent</a></code> | <code>string[]</code> | IAM actions required for the GetLineageEvent API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetLineageNode">opGetLineageNode</a></code> | <code>string[]</code> | IAM actions required for the GetLineageNode API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetListing">opGetListing</a></code> | <code>string[]</code> | IAM actions required for the GetListing API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetMetadataGenerationRun">opGetMetadataGenerationRun</a></code> | <code>string[]</code> | IAM actions required for the GetMetadataGenerationRun API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetNotebook">opGetNotebook</a></code> | <code>string[]</code> | IAM actions required for the GetNotebook API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetNotebookExport">opGetNotebookExport</a></code> | <code>string[]</code> | IAM actions required for the GetNotebookExport API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetNotebookRun">opGetNotebookRun</a></code> | <code>string[]</code> | IAM actions required for the GetNotebookRun API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetProject">opGetProject</a></code> | <code>string[]</code> | IAM actions required for the GetProject API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetProjectProfile">opGetProjectProfile</a></code> | <code>string[]</code> | IAM actions required for the GetProjectProfile API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetRule">opGetRule</a></code> | <code>string[]</code> | IAM actions required for the GetRule API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetSubscription">opGetSubscription</a></code> | <code>string[]</code> | IAM actions required for the GetSubscription API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetSubscriptionGrant">opGetSubscriptionGrant</a></code> | <code>string[]</code> | IAM actions required for the GetSubscriptionGrant API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetSubscriptionRequestDetails">opGetSubscriptionRequestDetails</a></code> | <code>string[]</code> | IAM actions required for the GetSubscriptionRequestDetails API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetSubscriptionTarget">opGetSubscriptionTarget</a></code> | <code>string[]</code> | IAM actions required for the GetSubscriptionTarget API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetTimeSeriesDataPoint">opGetTimeSeriesDataPoint</a></code> | <code>string[]</code> | IAM actions required for the GetTimeSeriesDataPoint API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.opGetUserProfile">opGetUserProfile</a></code> | <code>string[]</code> | IAM actions required for the GetUserProfile API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.PostLineageEvent">PostLineageEvent</a></code> | <code>string[]</code> | IAM actions required for the PostLineageEvent API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.PostTimeSeriesDataPoints">PostTimeSeriesDataPoints</a></code> | <code>string[]</code> | IAM actions required for the PostTimeSeriesDataPoints API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.PutDataExportConfiguration">PutDataExportConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutDataExportConfiguration API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.PutEnvironmentBlueprintConfiguration">PutEnvironmentBlueprintConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutEnvironmentBlueprintConfiguration API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.QueryGraph">QueryGraph</a></code> | <code>string[]</code> | IAM actions required for the QueryGraph API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.RejectPredictions">RejectPredictions</a></code> | <code>string[]</code> | IAM actions required for the RejectPredictions API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.RejectSubscriptionRequest">RejectSubscriptionRequest</a></code> | <code>string[]</code> | IAM actions required for the RejectSubscriptionRequest API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.RemoveEntityOwner">RemoveEntityOwner</a></code> | <code>string[]</code> | IAM actions required for the RemoveEntityOwner API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.RemovePolicyGrant">RemovePolicyGrant</a></code> | <code>string[]</code> | IAM actions required for the RemovePolicyGrant API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.RevokeSubscription">RevokeSubscription</a></code> | <code>string[]</code> | IAM actions required for the RevokeSubscription API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.Search">Search</a></code> | <code>string[]</code> | IAM actions required for the Search API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.SearchGroupProfiles">SearchGroupProfiles</a></code> | <code>string[]</code> | IAM actions required for the SearchGroupProfiles API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.SearchListings">SearchListings</a></code> | <code>string[]</code> | IAM actions required for the SearchListings API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.SearchTypes">SearchTypes</a></code> | <code>string[]</code> | IAM actions required for the SearchTypes API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.SearchUserProfiles">SearchUserProfiles</a></code> | <code>string[]</code> | IAM actions required for the SearchUserProfiles API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.StartDataSourceRun">StartDataSourceRun</a></code> | <code>string[]</code> | IAM actions required for the StartDataSourceRun API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.StartMetadataGenerationRun">StartMetadataGenerationRun</a></code> | <code>string[]</code> | IAM actions required for the StartMetadataGenerationRun API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.StartNotebookExport">StartNotebookExport</a></code> | <code>string[]</code> | IAM actions required for the StartNotebookExport API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.StartNotebookImport">StartNotebookImport</a></code> | <code>string[]</code> | IAM actions required for the StartNotebookImport API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.StartNotebookRun">StartNotebookRun</a></code> | <code>string[]</code> | IAM actions required for the StartNotebookRun API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.StartNotebookSync">StartNotebookSync</a></code> | <code>string[]</code> | IAM actions required for the StartNotebookSync API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.StopNotebookRun">StopNotebookRun</a></code> | <code>string[]</code> | IAM actions required for the StopNotebookRun API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateAccountPool">UpdateAccountPool</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccountPool API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateAssetFilter">UpdateAssetFilter</a></code> | <code>string[]</code> | IAM actions required for the UpdateAssetFilter API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateConnection">UpdateConnection</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnection API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateDataSource">UpdateDataSource</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataSource API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateDomain">UpdateDomain</a></code> | <code>string[]</code> | IAM actions required for the UpdateDomain API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateDomainUnit">UpdateDomainUnit</a></code> | <code>string[]</code> | IAM actions required for the UpdateDomainUnit API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnvironment API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateEnvironmentAction">UpdateEnvironmentAction</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnvironmentAction API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateEnvironmentBlueprint">UpdateEnvironmentBlueprint</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnvironmentBlueprint API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateEnvironmentProfile">UpdateEnvironmentProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnvironmentProfile API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateGlossary">UpdateGlossary</a></code> | <code>string[]</code> | IAM actions required for the UpdateGlossary API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateGlossaryTerm">UpdateGlossaryTerm</a></code> | <code>string[]</code> | IAM actions required for the UpdateGlossaryTerm API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateGroupProfile">UpdateGroupProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateGroupProfile API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateNotebook">UpdateNotebook</a></code> | <code>string[]</code> | IAM actions required for the UpdateNotebook API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateProject">UpdateProject</a></code> | <code>string[]</code> | IAM actions required for the UpdateProject API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateProjectProfile">UpdateProjectProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateProjectProfile API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateRootDomainUnitOwner">UpdateRootDomainUnitOwner</a></code> | <code>string[]</code> | IAM actions required for the UpdateRootDomainUnitOwner API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateRule">UpdateRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateRule API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateSubscriptionGrantStatus">UpdateSubscriptionGrantStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateSubscriptionGrantStatus API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateSubscriptionRequest">UpdateSubscriptionRequest</a></code> | <code>string[]</code> | IAM actions required for the UpdateSubscriptionRequest API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateSubscriptionTarget">UpdateSubscriptionTarget</a></code> | <code>string[]</code> | IAM actions required for the UpdateSubscriptionTarget API call. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateUserProfile">UpdateUserProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserProfile API call. |

---

##### `AcceptPredictions`<sup>Required</sup> <a name="AcceptPredictions" id="@cdk_utils/iam.datazone.DatazoneOperations.property.AcceptPredictions"></a>

```typescript
public readonly AcceptPredictions: string[];
```

- *Type:* string[]

IAM actions required for the AcceptPredictions API call.

---

##### `AcceptSubscriptionRequest`<sup>Required</sup> <a name="AcceptSubscriptionRequest" id="@cdk_utils/iam.datazone.DatazoneOperations.property.AcceptSubscriptionRequest"></a>

```typescript
public readonly AcceptSubscriptionRequest: string[];
```

- *Type:* string[]

IAM actions required for the AcceptSubscriptionRequest API call.

---

##### `AddEntityOwner`<sup>Required</sup> <a name="AddEntityOwner" id="@cdk_utils/iam.datazone.DatazoneOperations.property.AddEntityOwner"></a>

```typescript
public readonly AddEntityOwner: string[];
```

- *Type:* string[]

IAM actions required for the AddEntityOwner API call.

---

##### `AddPolicyGrant`<sup>Required</sup> <a name="AddPolicyGrant" id="@cdk_utils/iam.datazone.DatazoneOperations.property.AddPolicyGrant"></a>

```typescript
public readonly AddPolicyGrant: string[];
```

- *Type:* string[]

IAM actions required for the AddPolicyGrant API call.

---

##### `AssociateEnvironmentRole`<sup>Required</sup> <a name="AssociateEnvironmentRole" id="@cdk_utils/iam.datazone.DatazoneOperations.property.AssociateEnvironmentRole"></a>

```typescript
public readonly AssociateEnvironmentRole: string[];
```

- *Type:* string[]

IAM actions required for the AssociateEnvironmentRole API call.

---

##### `AssociateGovernedTerms`<sup>Required</sup> <a name="AssociateGovernedTerms" id="@cdk_utils/iam.datazone.DatazoneOperations.property.AssociateGovernedTerms"></a>

```typescript
public readonly AssociateGovernedTerms: string[];
```

- *Type:* string[]

IAM actions required for the AssociateGovernedTerms API call.

---

##### `BatchGetAttributesMetadata`<sup>Required</sup> <a name="BatchGetAttributesMetadata" id="@cdk_utils/iam.datazone.DatazoneOperations.property.BatchGetAttributesMetadata"></a>

```typescript
public readonly BatchGetAttributesMetadata: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetAttributesMetadata API call.

---

##### `BatchPutAttributesMetadata`<sup>Required</sup> <a name="BatchPutAttributesMetadata" id="@cdk_utils/iam.datazone.DatazoneOperations.property.BatchPutAttributesMetadata"></a>

```typescript
public readonly BatchPutAttributesMetadata: string[];
```

- *Type:* string[]

IAM actions required for the BatchPutAttributesMetadata API call.

---

##### `CancelMetadataGenerationRun`<sup>Required</sup> <a name="CancelMetadataGenerationRun" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CancelMetadataGenerationRun"></a>

```typescript
public readonly CancelMetadataGenerationRun: string[];
```

- *Type:* string[]

IAM actions required for the CancelMetadataGenerationRun API call.

---

##### `CancelSubscription`<sup>Required</sup> <a name="CancelSubscription" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CancelSubscription"></a>

```typescript
public readonly CancelSubscription: string[];
```

- *Type:* string[]

IAM actions required for the CancelSubscription API call.

---

##### `CreateAccountPool`<sup>Required</sup> <a name="CreateAccountPool" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateAccountPool"></a>

```typescript
public readonly CreateAccountPool: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccountPool API call.

---

##### `CreateAsset`<sup>Required</sup> <a name="CreateAsset" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateAsset"></a>

```typescript
public readonly CreateAsset: string[];
```

- *Type:* string[]

IAM actions required for the CreateAsset API call.

---

##### `CreateAssetFilter`<sup>Required</sup> <a name="CreateAssetFilter" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateAssetFilter"></a>

```typescript
public readonly CreateAssetFilter: string[];
```

- *Type:* string[]

IAM actions required for the CreateAssetFilter API call.

---

##### `CreateAssetRevision`<sup>Required</sup> <a name="CreateAssetRevision" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateAssetRevision"></a>

```typescript
public readonly CreateAssetRevision: string[];
```

- *Type:* string[]

IAM actions required for the CreateAssetRevision API call.

---

##### `CreateAssetType`<sup>Required</sup> <a name="CreateAssetType" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateAssetType"></a>

```typescript
public readonly CreateAssetType: string[];
```

- *Type:* string[]

IAM actions required for the CreateAssetType API call.

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnection API call.

---

##### `CreateDataProduct`<sup>Required</sup> <a name="CreateDataProduct" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateDataProduct"></a>

```typescript
public readonly CreateDataProduct: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataProduct API call.

---

##### `CreateDataProductRevision`<sup>Required</sup> <a name="CreateDataProductRevision" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateDataProductRevision"></a>

```typescript
public readonly CreateDataProductRevision: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataProductRevision API call.

---

##### `CreateDataSource`<sup>Required</sup> <a name="CreateDataSource" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateDataSource"></a>

```typescript
public readonly CreateDataSource: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataSource API call.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string[];
```

- *Type:* string[]

IAM actions required for the CreateDomain API call.

---

##### `CreateDomainUnit`<sup>Required</sup> <a name="CreateDomainUnit" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateDomainUnit"></a>

```typescript
public readonly CreateDomainUnit: string[];
```

- *Type:* string[]

IAM actions required for the CreateDomainUnit API call.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironment API call.

---

##### `CreateEnvironmentAction`<sup>Required</sup> <a name="CreateEnvironmentAction" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateEnvironmentAction"></a>

```typescript
public readonly CreateEnvironmentAction: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironmentAction API call.

---

##### `CreateEnvironmentBlueprint`<sup>Required</sup> <a name="CreateEnvironmentBlueprint" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateEnvironmentBlueprint"></a>

```typescript
public readonly CreateEnvironmentBlueprint: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironmentBlueprint API call.

---

##### `CreateEnvironmentProfile`<sup>Required</sup> <a name="CreateEnvironmentProfile" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateEnvironmentProfile"></a>

```typescript
public readonly CreateEnvironmentProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironmentProfile API call.

---

##### `CreateFormType`<sup>Required</sup> <a name="CreateFormType" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateFormType"></a>

```typescript
public readonly CreateFormType: string[];
```

- *Type:* string[]

IAM actions required for the CreateFormType API call.

---

##### `CreateGlossary`<sup>Required</sup> <a name="CreateGlossary" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateGlossary"></a>

```typescript
public readonly CreateGlossary: string[];
```

- *Type:* string[]

IAM actions required for the CreateGlossary API call.

---

##### `CreateGlossaryTerm`<sup>Required</sup> <a name="CreateGlossaryTerm" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateGlossaryTerm"></a>

```typescript
public readonly CreateGlossaryTerm: string[];
```

- *Type:* string[]

IAM actions required for the CreateGlossaryTerm API call.

---

##### `CreateGroupProfile`<sup>Required</sup> <a name="CreateGroupProfile" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateGroupProfile"></a>

```typescript
public readonly CreateGroupProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateGroupProfile API call.

---

##### `CreateListingChangeSet`<sup>Required</sup> <a name="CreateListingChangeSet" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateListingChangeSet"></a>

```typescript
public readonly CreateListingChangeSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateListingChangeSet API call.

---

##### `CreateNotebook`<sup>Required</sup> <a name="CreateNotebook" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateNotebook"></a>

```typescript
public readonly CreateNotebook: string[];
```

- *Type:* string[]

IAM actions required for the CreateNotebook API call.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateProject"></a>

```typescript
public readonly CreateProject: string[];
```

- *Type:* string[]

IAM actions required for the CreateProject API call.

---

##### `CreateProjectMembership`<sup>Required</sup> <a name="CreateProjectMembership" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateProjectMembership"></a>

```typescript
public readonly CreateProjectMembership: string[];
```

- *Type:* string[]

IAM actions required for the CreateProjectMembership API call.

---

##### `CreateProjectProfile`<sup>Required</sup> <a name="CreateProjectProfile" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateProjectProfile"></a>

```typescript
public readonly CreateProjectProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateProjectProfile API call.

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateRule"></a>

```typescript
public readonly CreateRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateRule API call.

---

##### `CreateSubscriptionGrant`<sup>Required</sup> <a name="CreateSubscriptionGrant" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateSubscriptionGrant"></a>

```typescript
public readonly CreateSubscriptionGrant: string[];
```

- *Type:* string[]

IAM actions required for the CreateSubscriptionGrant API call.

---

##### `CreateSubscriptionRequest`<sup>Required</sup> <a name="CreateSubscriptionRequest" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateSubscriptionRequest"></a>

```typescript
public readonly CreateSubscriptionRequest: string[];
```

- *Type:* string[]

IAM actions required for the CreateSubscriptionRequest API call.

---

##### `CreateSubscriptionTarget`<sup>Required</sup> <a name="CreateSubscriptionTarget" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateSubscriptionTarget"></a>

```typescript
public readonly CreateSubscriptionTarget: string[];
```

- *Type:* string[]

IAM actions required for the CreateSubscriptionTarget API call.

---

##### `CreateUserProfile`<sup>Required</sup> <a name="CreateUserProfile" id="@cdk_utils/iam.datazone.DatazoneOperations.property.CreateUserProfile"></a>

```typescript
public readonly CreateUserProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateUserProfile API call.

---

##### `DeleteAccountPool`<sup>Required</sup> <a name="DeleteAccountPool" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteAccountPool"></a>

```typescript
public readonly DeleteAccountPool: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccountPool API call.

---

##### `DeleteAsset`<sup>Required</sup> <a name="DeleteAsset" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteAsset"></a>

```typescript
public readonly DeleteAsset: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAsset API call.

---

##### `DeleteAssetFilter`<sup>Required</sup> <a name="DeleteAssetFilter" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteAssetFilter"></a>

```typescript
public readonly DeleteAssetFilter: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAssetFilter API call.

---

##### `DeleteAssetType`<sup>Required</sup> <a name="DeleteAssetType" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteAssetType"></a>

```typescript
public readonly DeleteAssetType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAssetType API call.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnection API call.

---

##### `DeleteDataExportConfiguration`<sup>Required</sup> <a name="DeleteDataExportConfiguration" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteDataExportConfiguration"></a>

```typescript
public readonly DeleteDataExportConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataExportConfiguration API call.

---

##### `DeleteDataProduct`<sup>Required</sup> <a name="DeleteDataProduct" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteDataProduct"></a>

```typescript
public readonly DeleteDataProduct: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataProduct API call.

---

##### `DeleteDataSource`<sup>Required</sup> <a name="DeleteDataSource" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteDataSource"></a>

```typescript
public readonly DeleteDataSource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataSource API call.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomain API call.

---

##### `DeleteDomainUnit`<sup>Required</sup> <a name="DeleteDomainUnit" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteDomainUnit"></a>

```typescript
public readonly DeleteDomainUnit: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomainUnit API call.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironment API call.

---

##### `DeleteEnvironmentAction`<sup>Required</sup> <a name="DeleteEnvironmentAction" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteEnvironmentAction"></a>

```typescript
public readonly DeleteEnvironmentAction: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironmentAction API call.

---

##### `DeleteEnvironmentBlueprint`<sup>Required</sup> <a name="DeleteEnvironmentBlueprint" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteEnvironmentBlueprint"></a>

```typescript
public readonly DeleteEnvironmentBlueprint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironmentBlueprint API call.

---

##### `DeleteEnvironmentBlueprintConfiguration`<sup>Required</sup> <a name="DeleteEnvironmentBlueprintConfiguration" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteEnvironmentBlueprintConfiguration"></a>

```typescript
public readonly DeleteEnvironmentBlueprintConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironmentBlueprintConfiguration API call.

---

##### `DeleteEnvironmentProfile`<sup>Required</sup> <a name="DeleteEnvironmentProfile" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteEnvironmentProfile"></a>

```typescript
public readonly DeleteEnvironmentProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironmentProfile API call.

---

##### `DeleteFormType`<sup>Required</sup> <a name="DeleteFormType" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteFormType"></a>

```typescript
public readonly DeleteFormType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFormType API call.

---

##### `DeleteGlossary`<sup>Required</sup> <a name="DeleteGlossary" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteGlossary"></a>

```typescript
public readonly DeleteGlossary: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGlossary API call.

---

##### `DeleteGlossaryTerm`<sup>Required</sup> <a name="DeleteGlossaryTerm" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteGlossaryTerm"></a>

```typescript
public readonly DeleteGlossaryTerm: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGlossaryTerm API call.

---

##### `DeleteLineageEvent`<sup>Required</sup> <a name="DeleteLineageEvent" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteLineageEvent"></a>

```typescript
public readonly DeleteLineageEvent: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLineageEvent API call.

---

##### `DeleteListing`<sup>Required</sup> <a name="DeleteListing" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteListing"></a>

```typescript
public readonly DeleteListing: string[];
```

- *Type:* string[]

IAM actions required for the DeleteListing API call.

---

##### `DeleteNotebook`<sup>Required</sup> <a name="DeleteNotebook" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteNotebook"></a>

```typescript
public readonly DeleteNotebook: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNotebook API call.

---

##### `DeleteProject`<sup>Required</sup> <a name="DeleteProject" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteProject"></a>

```typescript
public readonly DeleteProject: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProject API call.

---

##### `DeleteProjectMembership`<sup>Required</sup> <a name="DeleteProjectMembership" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteProjectMembership"></a>

```typescript
public readonly DeleteProjectMembership: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProjectMembership API call.

---

##### `DeleteProjectProfile`<sup>Required</sup> <a name="DeleteProjectProfile" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteProjectProfile"></a>

```typescript
public readonly DeleteProjectProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProjectProfile API call.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRule API call.

---

##### `DeleteSubscriptionGrant`<sup>Required</sup> <a name="DeleteSubscriptionGrant" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteSubscriptionGrant"></a>

```typescript
public readonly DeleteSubscriptionGrant: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSubscriptionGrant API call.

---

##### `DeleteSubscriptionRequest`<sup>Required</sup> <a name="DeleteSubscriptionRequest" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteSubscriptionRequest"></a>

```typescript
public readonly DeleteSubscriptionRequest: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSubscriptionRequest API call.

---

##### `DeleteSubscriptionTarget`<sup>Required</sup> <a name="DeleteSubscriptionTarget" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteSubscriptionTarget"></a>

```typescript
public readonly DeleteSubscriptionTarget: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSubscriptionTarget API call.

---

##### `DeleteTimeSeriesDataPoints`<sup>Required</sup> <a name="DeleteTimeSeriesDataPoints" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DeleteTimeSeriesDataPoints"></a>

```typescript
public readonly DeleteTimeSeriesDataPoints: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTimeSeriesDataPoints API call.

---

##### `DisassociateEnvironmentRole`<sup>Required</sup> <a name="DisassociateEnvironmentRole" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DisassociateEnvironmentRole"></a>

```typescript
public readonly DisassociateEnvironmentRole: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateEnvironmentRole API call.

---

##### `DisassociateGovernedTerms`<sup>Required</sup> <a name="DisassociateGovernedTerms" id="@cdk_utils/iam.datazone.DatazoneOperations.property.DisassociateGovernedTerms"></a>

```typescript
public readonly DisassociateGovernedTerms: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateGovernedTerms API call.

---

##### `ListAccountPools`<sup>Required</sup> <a name="ListAccountPools" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListAccountPools"></a>

```typescript
public readonly ListAccountPools: string[];
```

- *Type:* string[]

IAM actions required for the ListAccountPools API call.

---

##### `ListAccountsInAccountPool`<sup>Required</sup> <a name="ListAccountsInAccountPool" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListAccountsInAccountPool"></a>

```typescript
public readonly ListAccountsInAccountPool: string[];
```

- *Type:* string[]

IAM actions required for the ListAccountsInAccountPool API call.

---

##### `ListAssetFilters`<sup>Required</sup> <a name="ListAssetFilters" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListAssetFilters"></a>

```typescript
public readonly ListAssetFilters: string[];
```

- *Type:* string[]

IAM actions required for the ListAssetFilters API call.

---

##### `ListAssetRevisions`<sup>Required</sup> <a name="ListAssetRevisions" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListAssetRevisions"></a>

```typescript
public readonly ListAssetRevisions: string[];
```

- *Type:* string[]

IAM actions required for the ListAssetRevisions API call.

---

##### `ListConnections`<sup>Required</sup> <a name="ListConnections" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListConnections"></a>

```typescript
public readonly ListConnections: string[];
```

- *Type:* string[]

IAM actions required for the ListConnections API call.

---

##### `ListDataProductRevisions`<sup>Required</sup> <a name="ListDataProductRevisions" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListDataProductRevisions"></a>

```typescript
public readonly ListDataProductRevisions: string[];
```

- *Type:* string[]

IAM actions required for the ListDataProductRevisions API call.

---

##### `ListDataSourceRunActivities`<sup>Required</sup> <a name="ListDataSourceRunActivities" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListDataSourceRunActivities"></a>

```typescript
public readonly ListDataSourceRunActivities: string[];
```

- *Type:* string[]

IAM actions required for the ListDataSourceRunActivities API call.

---

##### `ListDataSourceRuns`<sup>Required</sup> <a name="ListDataSourceRuns" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListDataSourceRuns"></a>

```typescript
public readonly ListDataSourceRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListDataSourceRuns API call.

---

##### `ListDataSources`<sup>Required</sup> <a name="ListDataSources" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListDataSources"></a>

```typescript
public readonly ListDataSources: string[];
```

- *Type:* string[]

IAM actions required for the ListDataSources API call.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListDomains"></a>

```typescript
public readonly ListDomains: string[];
```

- *Type:* string[]

IAM actions required for the ListDomains API call.

---

##### `ListDomainUnitsForParent`<sup>Required</sup> <a name="ListDomainUnitsForParent" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListDomainUnitsForParent"></a>

```typescript
public readonly ListDomainUnitsForParent: string[];
```

- *Type:* string[]

IAM actions required for the ListDomainUnitsForParent API call.

---

##### `ListEntityOwners`<sup>Required</sup> <a name="ListEntityOwners" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListEntityOwners"></a>

```typescript
public readonly ListEntityOwners: string[];
```

- *Type:* string[]

IAM actions required for the ListEntityOwners API call.

---

##### `ListEnvironmentActions`<sup>Required</sup> <a name="ListEnvironmentActions" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListEnvironmentActions"></a>

```typescript
public readonly ListEnvironmentActions: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironmentActions API call.

---

##### `ListEnvironmentBlueprintConfigurations`<sup>Required</sup> <a name="ListEnvironmentBlueprintConfigurations" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListEnvironmentBlueprintConfigurations"></a>

```typescript
public readonly ListEnvironmentBlueprintConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironmentBlueprintConfigurations API call.

---

##### `ListEnvironmentBlueprints`<sup>Required</sup> <a name="ListEnvironmentBlueprints" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListEnvironmentBlueprints"></a>

```typescript
public readonly ListEnvironmentBlueprints: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironmentBlueprints API call.

---

##### `ListEnvironmentProfiles`<sup>Required</sup> <a name="ListEnvironmentProfiles" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListEnvironmentProfiles"></a>

```typescript
public readonly ListEnvironmentProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironmentProfiles API call.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironments API call.

---

##### `ListJobRuns`<sup>Required</sup> <a name="ListJobRuns" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListJobRuns"></a>

```typescript
public readonly ListJobRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListJobRuns API call.

---

##### `ListLineageEvents`<sup>Required</sup> <a name="ListLineageEvents" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListLineageEvents"></a>

```typescript
public readonly ListLineageEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListLineageEvents API call.

---

##### `ListLineageNodeHistory`<sup>Required</sup> <a name="ListLineageNodeHistory" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListLineageNodeHistory"></a>

```typescript
public readonly ListLineageNodeHistory: string[];
```

- *Type:* string[]

IAM actions required for the ListLineageNodeHistory API call.

---

##### `ListMetadataGenerationRuns`<sup>Required</sup> <a name="ListMetadataGenerationRuns" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListMetadataGenerationRuns"></a>

```typescript
public readonly ListMetadataGenerationRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListMetadataGenerationRuns API call.

---

##### `ListNotebookRuns`<sup>Required</sup> <a name="ListNotebookRuns" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListNotebookRuns"></a>

```typescript
public readonly ListNotebookRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListNotebookRuns API call.

---

##### `ListNotebooks`<sup>Required</sup> <a name="ListNotebooks" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListNotebooks"></a>

```typescript
public readonly ListNotebooks: string[];
```

- *Type:* string[]

IAM actions required for the ListNotebooks API call.

---

##### `ListNotifications`<sup>Required</sup> <a name="ListNotifications" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListNotifications"></a>

```typescript
public readonly ListNotifications: string[];
```

- *Type:* string[]

IAM actions required for the ListNotifications API call.

---

##### `ListPolicyGrants`<sup>Required</sup> <a name="ListPolicyGrants" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListPolicyGrants"></a>

```typescript
public readonly ListPolicyGrants: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicyGrants API call.

---

##### `ListProjectMemberships`<sup>Required</sup> <a name="ListProjectMemberships" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListProjectMemberships"></a>

```typescript
public readonly ListProjectMemberships: string[];
```

- *Type:* string[]

IAM actions required for the ListProjectMemberships API call.

---

##### `ListProjectProfiles`<sup>Required</sup> <a name="ListProjectProfiles" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListProjectProfiles"></a>

```typescript
public readonly ListProjectProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListProjectProfiles API call.

---

##### `ListProjects`<sup>Required</sup> <a name="ListProjects" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListProjects"></a>

```typescript
public readonly ListProjects: string[];
```

- *Type:* string[]

IAM actions required for the ListProjects API call.

---

##### `ListRules`<sup>Required</sup> <a name="ListRules" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListRules"></a>

```typescript
public readonly ListRules: string[];
```

- *Type:* string[]

IAM actions required for the ListRules API call.

---

##### `ListSubscriptionGrants`<sup>Required</sup> <a name="ListSubscriptionGrants" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListSubscriptionGrants"></a>

```typescript
public readonly ListSubscriptionGrants: string[];
```

- *Type:* string[]

IAM actions required for the ListSubscriptionGrants API call.

---

##### `ListSubscriptionRequests`<sup>Required</sup> <a name="ListSubscriptionRequests" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListSubscriptionRequests"></a>

```typescript
public readonly ListSubscriptionRequests: string[];
```

- *Type:* string[]

IAM actions required for the ListSubscriptionRequests API call.

---

##### `ListSubscriptions`<sup>Required</sup> <a name="ListSubscriptions" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListSubscriptions"></a>

```typescript
public readonly ListSubscriptions: string[];
```

- *Type:* string[]

IAM actions required for the ListSubscriptions API call.

---

##### `ListSubscriptionTargets`<sup>Required</sup> <a name="ListSubscriptionTargets" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListSubscriptionTargets"></a>

```typescript
public readonly ListSubscriptionTargets: string[];
```

- *Type:* string[]

IAM actions required for the ListSubscriptionTargets API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTimeSeriesDataPoints`<sup>Required</sup> <a name="ListTimeSeriesDataPoints" id="@cdk_utils/iam.datazone.DatazoneOperations.property.ListTimeSeriesDataPoints"></a>

```typescript
public readonly ListTimeSeriesDataPoints: string[];
```

- *Type:* string[]

IAM actions required for the ListTimeSeriesDataPoints API call.

---

##### `opGetAccountPool`<sup>Required</sup> <a name="opGetAccountPool" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetAccountPool"></a>

```typescript
public readonly opGetAccountPool: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountPool API call.

---

##### `opGetAsset`<sup>Required</sup> <a name="opGetAsset" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetAsset"></a>

```typescript
public readonly opGetAsset: string[];
```

- *Type:* string[]

IAM actions required for the GetAsset API call.

---

##### `opGetAssetFilter`<sup>Required</sup> <a name="opGetAssetFilter" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetAssetFilter"></a>

```typescript
public readonly opGetAssetFilter: string[];
```

- *Type:* string[]

IAM actions required for the GetAssetFilter API call.

---

##### `opGetAssetType`<sup>Required</sup> <a name="opGetAssetType" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetAssetType"></a>

```typescript
public readonly opGetAssetType: string[];
```

- *Type:* string[]

IAM actions required for the GetAssetType API call.

---

##### `opGetConnection`<sup>Required</sup> <a name="opGetConnection" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetConnection"></a>

```typescript
public readonly opGetConnection: string[];
```

- *Type:* string[]

IAM actions required for the GetConnection API call.

---

##### `opGetDataExportConfiguration`<sup>Required</sup> <a name="opGetDataExportConfiguration" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetDataExportConfiguration"></a>

```typescript
public readonly opGetDataExportConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetDataExportConfiguration API call.

---

##### `opGetDataProduct`<sup>Required</sup> <a name="opGetDataProduct" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetDataProduct"></a>

```typescript
public readonly opGetDataProduct: string[];
```

- *Type:* string[]

IAM actions required for the GetDataProduct API call.

---

##### `opGetDataSource`<sup>Required</sup> <a name="opGetDataSource" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetDataSource"></a>

```typescript
public readonly opGetDataSource: string[];
```

- *Type:* string[]

IAM actions required for the GetDataSource API call.

---

##### `opGetDataSourceRun`<sup>Required</sup> <a name="opGetDataSourceRun" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetDataSourceRun"></a>

```typescript
public readonly opGetDataSourceRun: string[];
```

- *Type:* string[]

IAM actions required for the GetDataSourceRun API call.

---

##### `opGetDomain`<sup>Required</sup> <a name="opGetDomain" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetDomain"></a>

```typescript
public readonly opGetDomain: string[];
```

- *Type:* string[]

IAM actions required for the GetDomain API call.

---

##### `opGetDomainUnit`<sup>Required</sup> <a name="opGetDomainUnit" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetDomainUnit"></a>

```typescript
public readonly opGetDomainUnit: string[];
```

- *Type:* string[]

IAM actions required for the GetDomainUnit API call.

---

##### `opGetEnvironment`<sup>Required</sup> <a name="opGetEnvironment" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetEnvironment"></a>

```typescript
public readonly opGetEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the GetEnvironment API call.

---

##### `opGetEnvironmentAction`<sup>Required</sup> <a name="opGetEnvironmentAction" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetEnvironmentAction"></a>

```typescript
public readonly opGetEnvironmentAction: string[];
```

- *Type:* string[]

IAM actions required for the GetEnvironmentAction API call.

---

##### `opGetEnvironmentBlueprint`<sup>Required</sup> <a name="opGetEnvironmentBlueprint" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetEnvironmentBlueprint"></a>

```typescript
public readonly opGetEnvironmentBlueprint: string[];
```

- *Type:* string[]

IAM actions required for the GetEnvironmentBlueprint API call.

---

##### `opGetEnvironmentBlueprintConfiguration`<sup>Required</sup> <a name="opGetEnvironmentBlueprintConfiguration" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetEnvironmentBlueprintConfiguration"></a>

```typescript
public readonly opGetEnvironmentBlueprintConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetEnvironmentBlueprintConfiguration API call.

---

##### `opGetEnvironmentCredentials`<sup>Required</sup> <a name="opGetEnvironmentCredentials" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetEnvironmentCredentials"></a>

```typescript
public readonly opGetEnvironmentCredentials: string[];
```

- *Type:* string[]

IAM actions required for the GetEnvironmentCredentials API call.

---

##### `opGetEnvironmentProfile`<sup>Required</sup> <a name="opGetEnvironmentProfile" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetEnvironmentProfile"></a>

```typescript
public readonly opGetEnvironmentProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetEnvironmentProfile API call.

---

##### `opGetFormType`<sup>Required</sup> <a name="opGetFormType" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetFormType"></a>

```typescript
public readonly opGetFormType: string[];
```

- *Type:* string[]

IAM actions required for the GetFormType API call.

---

##### `opGetGlossary`<sup>Required</sup> <a name="opGetGlossary" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetGlossary"></a>

```typescript
public readonly opGetGlossary: string[];
```

- *Type:* string[]

IAM actions required for the GetGlossary API call.

---

##### `opGetGlossaryTerm`<sup>Required</sup> <a name="opGetGlossaryTerm" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetGlossaryTerm"></a>

```typescript
public readonly opGetGlossaryTerm: string[];
```

- *Type:* string[]

IAM actions required for the GetGlossaryTerm API call.

---

##### `opGetGroupProfile`<sup>Required</sup> <a name="opGetGroupProfile" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetGroupProfile"></a>

```typescript
public readonly opGetGroupProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetGroupProfile API call.

---

##### `opGetIamPortalLoginUrl`<sup>Required</sup> <a name="opGetIamPortalLoginUrl" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetIamPortalLoginUrl"></a>

```typescript
public readonly opGetIamPortalLoginUrl: string[];
```

- *Type:* string[]

IAM actions required for the GetIamPortalLoginUrl API call.

---

##### `opGetJobRun`<sup>Required</sup> <a name="opGetJobRun" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetJobRun"></a>

```typescript
public readonly opGetJobRun: string[];
```

- *Type:* string[]

IAM actions required for the GetJobRun API call.

---

##### `opGetLineageEvent`<sup>Required</sup> <a name="opGetLineageEvent" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetLineageEvent"></a>

```typescript
public readonly opGetLineageEvent: string[];
```

- *Type:* string[]

IAM actions required for the GetLineageEvent API call.

---

##### `opGetLineageNode`<sup>Required</sup> <a name="opGetLineageNode" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetLineageNode"></a>

```typescript
public readonly opGetLineageNode: string[];
```

- *Type:* string[]

IAM actions required for the GetLineageNode API call.

---

##### `opGetListing`<sup>Required</sup> <a name="opGetListing" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetListing"></a>

```typescript
public readonly opGetListing: string[];
```

- *Type:* string[]

IAM actions required for the GetListing API call.

---

##### `opGetMetadataGenerationRun`<sup>Required</sup> <a name="opGetMetadataGenerationRun" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetMetadataGenerationRun"></a>

```typescript
public readonly opGetMetadataGenerationRun: string[];
```

- *Type:* string[]

IAM actions required for the GetMetadataGenerationRun API call.

---

##### `opGetNotebook`<sup>Required</sup> <a name="opGetNotebook" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetNotebook"></a>

```typescript
public readonly opGetNotebook: string[];
```

- *Type:* string[]

IAM actions required for the GetNotebook API call.

---

##### `opGetNotebookExport`<sup>Required</sup> <a name="opGetNotebookExport" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetNotebookExport"></a>

```typescript
public readonly opGetNotebookExport: string[];
```

- *Type:* string[]

IAM actions required for the GetNotebookExport API call.

---

##### `opGetNotebookRun`<sup>Required</sup> <a name="opGetNotebookRun" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetNotebookRun"></a>

```typescript
public readonly opGetNotebookRun: string[];
```

- *Type:* string[]

IAM actions required for the GetNotebookRun API call.

---

##### `opGetProject`<sup>Required</sup> <a name="opGetProject" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetProject"></a>

```typescript
public readonly opGetProject: string[];
```

- *Type:* string[]

IAM actions required for the GetProject API call.

---

##### `opGetProjectProfile`<sup>Required</sup> <a name="opGetProjectProfile" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetProjectProfile"></a>

```typescript
public readonly opGetProjectProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetProjectProfile API call.

---

##### `opGetRule`<sup>Required</sup> <a name="opGetRule" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetRule"></a>

```typescript
public readonly opGetRule: string[];
```

- *Type:* string[]

IAM actions required for the GetRule API call.

---

##### `opGetSubscription`<sup>Required</sup> <a name="opGetSubscription" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetSubscription"></a>

```typescript
public readonly opGetSubscription: string[];
```

- *Type:* string[]

IAM actions required for the GetSubscription API call.

---

##### `opGetSubscriptionGrant`<sup>Required</sup> <a name="opGetSubscriptionGrant" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetSubscriptionGrant"></a>

```typescript
public readonly opGetSubscriptionGrant: string[];
```

- *Type:* string[]

IAM actions required for the GetSubscriptionGrant API call.

---

##### `opGetSubscriptionRequestDetails`<sup>Required</sup> <a name="opGetSubscriptionRequestDetails" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetSubscriptionRequestDetails"></a>

```typescript
public readonly opGetSubscriptionRequestDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetSubscriptionRequestDetails API call.

---

##### `opGetSubscriptionTarget`<sup>Required</sup> <a name="opGetSubscriptionTarget" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetSubscriptionTarget"></a>

```typescript
public readonly opGetSubscriptionTarget: string[];
```

- *Type:* string[]

IAM actions required for the GetSubscriptionTarget API call.

---

##### `opGetTimeSeriesDataPoint`<sup>Required</sup> <a name="opGetTimeSeriesDataPoint" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetTimeSeriesDataPoint"></a>

```typescript
public readonly opGetTimeSeriesDataPoint: string[];
```

- *Type:* string[]

IAM actions required for the GetTimeSeriesDataPoint API call.

---

##### `opGetUserProfile`<sup>Required</sup> <a name="opGetUserProfile" id="@cdk_utils/iam.datazone.DatazoneOperations.property.opGetUserProfile"></a>

```typescript
public readonly opGetUserProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetUserProfile API call.

---

##### `PostLineageEvent`<sup>Required</sup> <a name="PostLineageEvent" id="@cdk_utils/iam.datazone.DatazoneOperations.property.PostLineageEvent"></a>

```typescript
public readonly PostLineageEvent: string[];
```

- *Type:* string[]

IAM actions required for the PostLineageEvent API call.

---

##### `PostTimeSeriesDataPoints`<sup>Required</sup> <a name="PostTimeSeriesDataPoints" id="@cdk_utils/iam.datazone.DatazoneOperations.property.PostTimeSeriesDataPoints"></a>

```typescript
public readonly PostTimeSeriesDataPoints: string[];
```

- *Type:* string[]

IAM actions required for the PostTimeSeriesDataPoints API call.

---

##### `PutDataExportConfiguration`<sup>Required</sup> <a name="PutDataExportConfiguration" id="@cdk_utils/iam.datazone.DatazoneOperations.property.PutDataExportConfiguration"></a>

```typescript
public readonly PutDataExportConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutDataExportConfiguration API call.

---

##### `PutEnvironmentBlueprintConfiguration`<sup>Required</sup> <a name="PutEnvironmentBlueprintConfiguration" id="@cdk_utils/iam.datazone.DatazoneOperations.property.PutEnvironmentBlueprintConfiguration"></a>

```typescript
public readonly PutEnvironmentBlueprintConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutEnvironmentBlueprintConfiguration API call.

---

##### `QueryGraph`<sup>Required</sup> <a name="QueryGraph" id="@cdk_utils/iam.datazone.DatazoneOperations.property.QueryGraph"></a>

```typescript
public readonly QueryGraph: string[];
```

- *Type:* string[]

IAM actions required for the QueryGraph API call.

---

##### `RejectPredictions`<sup>Required</sup> <a name="RejectPredictions" id="@cdk_utils/iam.datazone.DatazoneOperations.property.RejectPredictions"></a>

```typescript
public readonly RejectPredictions: string[];
```

- *Type:* string[]

IAM actions required for the RejectPredictions API call.

---

##### `RejectSubscriptionRequest`<sup>Required</sup> <a name="RejectSubscriptionRequest" id="@cdk_utils/iam.datazone.DatazoneOperations.property.RejectSubscriptionRequest"></a>

```typescript
public readonly RejectSubscriptionRequest: string[];
```

- *Type:* string[]

IAM actions required for the RejectSubscriptionRequest API call.

---

##### `RemoveEntityOwner`<sup>Required</sup> <a name="RemoveEntityOwner" id="@cdk_utils/iam.datazone.DatazoneOperations.property.RemoveEntityOwner"></a>

```typescript
public readonly RemoveEntityOwner: string[];
```

- *Type:* string[]

IAM actions required for the RemoveEntityOwner API call.

---

##### `RemovePolicyGrant`<sup>Required</sup> <a name="RemovePolicyGrant" id="@cdk_utils/iam.datazone.DatazoneOperations.property.RemovePolicyGrant"></a>

```typescript
public readonly RemovePolicyGrant: string[];
```

- *Type:* string[]

IAM actions required for the RemovePolicyGrant API call.

---

##### `RevokeSubscription`<sup>Required</sup> <a name="RevokeSubscription" id="@cdk_utils/iam.datazone.DatazoneOperations.property.RevokeSubscription"></a>

```typescript
public readonly RevokeSubscription: string[];
```

- *Type:* string[]

IAM actions required for the RevokeSubscription API call.

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdk_utils/iam.datazone.DatazoneOperations.property.Search"></a>

```typescript
public readonly Search: string[];
```

- *Type:* string[]

IAM actions required for the Search API call.

---

##### `SearchGroupProfiles`<sup>Required</sup> <a name="SearchGroupProfiles" id="@cdk_utils/iam.datazone.DatazoneOperations.property.SearchGroupProfiles"></a>

```typescript
public readonly SearchGroupProfiles: string[];
```

- *Type:* string[]

IAM actions required for the SearchGroupProfiles API call.

---

##### `SearchListings`<sup>Required</sup> <a name="SearchListings" id="@cdk_utils/iam.datazone.DatazoneOperations.property.SearchListings"></a>

```typescript
public readonly SearchListings: string[];
```

- *Type:* string[]

IAM actions required for the SearchListings API call.

---

##### `SearchTypes`<sup>Required</sup> <a name="SearchTypes" id="@cdk_utils/iam.datazone.DatazoneOperations.property.SearchTypes"></a>

```typescript
public readonly SearchTypes: string[];
```

- *Type:* string[]

IAM actions required for the SearchTypes API call.

---

##### `SearchUserProfiles`<sup>Required</sup> <a name="SearchUserProfiles" id="@cdk_utils/iam.datazone.DatazoneOperations.property.SearchUserProfiles"></a>

```typescript
public readonly SearchUserProfiles: string[];
```

- *Type:* string[]

IAM actions required for the SearchUserProfiles API call.

---

##### `StartDataSourceRun`<sup>Required</sup> <a name="StartDataSourceRun" id="@cdk_utils/iam.datazone.DatazoneOperations.property.StartDataSourceRun"></a>

```typescript
public readonly StartDataSourceRun: string[];
```

- *Type:* string[]

IAM actions required for the StartDataSourceRun API call.

---

##### `StartMetadataGenerationRun`<sup>Required</sup> <a name="StartMetadataGenerationRun" id="@cdk_utils/iam.datazone.DatazoneOperations.property.StartMetadataGenerationRun"></a>

```typescript
public readonly StartMetadataGenerationRun: string[];
```

- *Type:* string[]

IAM actions required for the StartMetadataGenerationRun API call.

---

##### `StartNotebookExport`<sup>Required</sup> <a name="StartNotebookExport" id="@cdk_utils/iam.datazone.DatazoneOperations.property.StartNotebookExport"></a>

```typescript
public readonly StartNotebookExport: string[];
```

- *Type:* string[]

IAM actions required for the StartNotebookExport API call.

---

##### `StartNotebookImport`<sup>Required</sup> <a name="StartNotebookImport" id="@cdk_utils/iam.datazone.DatazoneOperations.property.StartNotebookImport"></a>

```typescript
public readonly StartNotebookImport: string[];
```

- *Type:* string[]

IAM actions required for the StartNotebookImport API call.

---

##### `StartNotebookRun`<sup>Required</sup> <a name="StartNotebookRun" id="@cdk_utils/iam.datazone.DatazoneOperations.property.StartNotebookRun"></a>

```typescript
public readonly StartNotebookRun: string[];
```

- *Type:* string[]

IAM actions required for the StartNotebookRun API call.

---

##### `StartNotebookSync`<sup>Required</sup> <a name="StartNotebookSync" id="@cdk_utils/iam.datazone.DatazoneOperations.property.StartNotebookSync"></a>

```typescript
public readonly StartNotebookSync: string[];
```

- *Type:* string[]

IAM actions required for the StartNotebookSync API call.

---

##### `StopNotebookRun`<sup>Required</sup> <a name="StopNotebookRun" id="@cdk_utils/iam.datazone.DatazoneOperations.property.StopNotebookRun"></a>

```typescript
public readonly StopNotebookRun: string[];
```

- *Type:* string[]

IAM actions required for the StopNotebookRun API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.datazone.DatazoneOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccountPool`<sup>Required</sup> <a name="UpdateAccountPool" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateAccountPool"></a>

```typescript
public readonly UpdateAccountPool: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccountPool API call.

---

##### `UpdateAssetFilter`<sup>Required</sup> <a name="UpdateAssetFilter" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateAssetFilter"></a>

```typescript
public readonly UpdateAssetFilter: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAssetFilter API call.

---

##### `UpdateConnection`<sup>Required</sup> <a name="UpdateConnection" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateConnection"></a>

```typescript
public readonly UpdateConnection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnection API call.

---

##### `UpdateDataSource`<sup>Required</sup> <a name="UpdateDataSource" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateDataSource"></a>

```typescript
public readonly UpdateDataSource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataSource API call.

---

##### `UpdateDomain`<sup>Required</sup> <a name="UpdateDomain" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateDomain"></a>

```typescript
public readonly UpdateDomain: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDomain API call.

---

##### `UpdateDomainUnit`<sup>Required</sup> <a name="UpdateDomainUnit" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateDomainUnit"></a>

```typescript
public readonly UpdateDomainUnit: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDomainUnit API call.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnvironment API call.

---

##### `UpdateEnvironmentAction`<sup>Required</sup> <a name="UpdateEnvironmentAction" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateEnvironmentAction"></a>

```typescript
public readonly UpdateEnvironmentAction: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnvironmentAction API call.

---

##### `UpdateEnvironmentBlueprint`<sup>Required</sup> <a name="UpdateEnvironmentBlueprint" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateEnvironmentBlueprint"></a>

```typescript
public readonly UpdateEnvironmentBlueprint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnvironmentBlueprint API call.

---

##### `UpdateEnvironmentProfile`<sup>Required</sup> <a name="UpdateEnvironmentProfile" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateEnvironmentProfile"></a>

```typescript
public readonly UpdateEnvironmentProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnvironmentProfile API call.

---

##### `UpdateGlossary`<sup>Required</sup> <a name="UpdateGlossary" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateGlossary"></a>

```typescript
public readonly UpdateGlossary: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGlossary API call.

---

##### `UpdateGlossaryTerm`<sup>Required</sup> <a name="UpdateGlossaryTerm" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateGlossaryTerm"></a>

```typescript
public readonly UpdateGlossaryTerm: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGlossaryTerm API call.

---

##### `UpdateGroupProfile`<sup>Required</sup> <a name="UpdateGroupProfile" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateGroupProfile"></a>

```typescript
public readonly UpdateGroupProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGroupProfile API call.

---

##### `UpdateNotebook`<sup>Required</sup> <a name="UpdateNotebook" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateNotebook"></a>

```typescript
public readonly UpdateNotebook: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNotebook API call.

---

##### `UpdateProject`<sup>Required</sup> <a name="UpdateProject" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateProject"></a>

```typescript
public readonly UpdateProject: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProject API call.

---

##### `UpdateProjectProfile`<sup>Required</sup> <a name="UpdateProjectProfile" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateProjectProfile"></a>

```typescript
public readonly UpdateProjectProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProjectProfile API call.

---

##### `UpdateRootDomainUnitOwner`<sup>Required</sup> <a name="UpdateRootDomainUnitOwner" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateRootDomainUnitOwner"></a>

```typescript
public readonly UpdateRootDomainUnitOwner: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRootDomainUnitOwner API call.

---

##### `UpdateRule`<sup>Required</sup> <a name="UpdateRule" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateRule"></a>

```typescript
public readonly UpdateRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRule API call.

---

##### `UpdateSubscriptionGrantStatus`<sup>Required</sup> <a name="UpdateSubscriptionGrantStatus" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateSubscriptionGrantStatus"></a>

```typescript
public readonly UpdateSubscriptionGrantStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSubscriptionGrantStatus API call.

---

##### `UpdateSubscriptionRequest`<sup>Required</sup> <a name="UpdateSubscriptionRequest" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateSubscriptionRequest"></a>

```typescript
public readonly UpdateSubscriptionRequest: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSubscriptionRequest API call.

---

##### `UpdateSubscriptionTarget`<sup>Required</sup> <a name="UpdateSubscriptionTarget" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateSubscriptionTarget"></a>

```typescript
public readonly UpdateSubscriptionTarget: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSubscriptionTarget API call.

---

##### `UpdateUserProfile`<sup>Required</sup> <a name="UpdateUserProfile" id="@cdk_utils/iam.datazone.DatazoneOperations.property.UpdateUserProfile"></a>

```typescript
public readonly UpdateUserProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserProfile API call.

---

### DatazoneResources <a name="DatazoneResources" id="@cdk_utils/iam.datazone.DatazoneResources"></a>

ARN builders, validators, and parsers for datazone resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.datazone.DatazoneResources.Initializer"></a>

```typescript
import { datazone } from '@cdk_utils/iam'

new datazone.DatazoneResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneResources.domain">domain</a></code> | Builds an ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneResources.isValidDomainArn">isValidDomainArn</a></code> | Validates whether a string is a valid ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.datazone.DatazoneResources.parseDomainArn">parseDomainArn</a></code> | Parses a domain ARN into its components. |

---

##### `domain` <a name="domain" id="@cdk_utils/iam.datazone.DatazoneResources.domain"></a>

```typescript
import { datazone } from '@cdk_utils/iam'

datazone.DatazoneResources.domain(props: DatazoneDomainArnProps)
```

Builds an ARN for the domain resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.datazone.DatazoneResources.domain.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.datazone.DatazoneDomainArnProps">DatazoneDomainArnProps</a>

---

##### `isValidDomainArn` <a name="isValidDomainArn" id="@cdk_utils/iam.datazone.DatazoneResources.isValidDomainArn"></a>

```typescript
import { datazone } from '@cdk_utils/iam'

datazone.DatazoneResources.isValidDomainArn(arn: string)
```

Validates whether a string is a valid ARN for the domain resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.datazone.DatazoneResources.isValidDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainArn` <a name="parseDomainArn" id="@cdk_utils/iam.datazone.DatazoneResources.parseDomainArn"></a>

```typescript
import { datazone } from '@cdk_utils/iam'

datazone.DatazoneResources.parseDomainArn(arn: string)
```

Parses a domain ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.datazone.DatazoneResources.parseDomainArn.parameter.arn"></a>

- *Type:* string

---




