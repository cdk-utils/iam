# `healthlake` Submodule <a name="`healthlake` Submodule" id="@cdk_utils/iam.healthlake"></a>


## Structs <a name="Structs" id="Structs"></a>

### HealthLakeDatastoreArnComponents <a name="HealthLakeDatastoreArnComponents" id="@cdk_utils/iam.healthlake.HealthLakeDatastoreArnComponents"></a>

Parsed components of a datastore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.healthlake.HealthLakeDatastoreArnComponents.Initializer"></a>

```typescript
import { healthlake } from '@cdk_utils/iam'

const healthLakeDatastoreArnComponents: healthlake.HealthLakeDatastoreArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeDatastoreArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeDatastoreArnComponents.property.datastoreId">datastoreId</a></code> | <code>string</code> | The DatastoreId component. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeDatastoreArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeDatastoreArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.healthlake.HealthLakeDatastoreArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `datastoreId`<sup>Required</sup> <a name="datastoreId" id="@cdk_utils/iam.healthlake.HealthLakeDatastoreArnComponents.property.datastoreId"></a>

```typescript
public readonly datastoreId: string;
```

- *Type:* string

The DatastoreId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.healthlake.HealthLakeDatastoreArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.healthlake.HealthLakeDatastoreArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### HealthLakeDatastoreArnProps <a name="HealthLakeDatastoreArnProps" id="@cdk_utils/iam.healthlake.HealthLakeDatastoreArnProps"></a>

Properties for building a datastore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.healthlake.HealthLakeDatastoreArnProps.Initializer"></a>

```typescript
import { healthlake } from '@cdk_utils/iam'

const healthLakeDatastoreArnProps: healthlake.HealthLakeDatastoreArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeDatastoreArnProps.property.datastoreId">datastoreId</a></code> | <code>string</code> | The DatastoreId component of the ARN. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeDatastoreArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeDatastoreArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeDatastoreArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `datastoreId`<sup>Required</sup> <a name="datastoreId" id="@cdk_utils/iam.healthlake.HealthLakeDatastoreArnProps.property.datastoreId"></a>

```typescript
public readonly datastoreId: string;
```

- *Type:* string

The DatastoreId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.healthlake.HealthLakeDatastoreArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.healthlake.HealthLakeDatastoreArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.healthlake.HealthLakeDatastoreArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### HealthLakeDataTransformationProfileArnComponents <a name="HealthLakeDataTransformationProfileArnComponents" id="@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnComponents"></a>

Parsed components of a dataTransformationProfile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnComponents.Initializer"></a>

```typescript
import { healthlake } from '@cdk_utils/iam'

const healthLakeDataTransformationProfileArnComponents: healthlake.HealthLakeDataTransformationProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnComponents.property.profileId">profileId</a></code> | <code>string</code> | The ProfileId component. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnComponents.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

The ProfileId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### HealthLakeDataTransformationProfileArnProps <a name="HealthLakeDataTransformationProfileArnProps" id="@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnProps"></a>

Properties for building a dataTransformationProfile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnProps.Initializer"></a>

```typescript
import { healthlake } from '@cdk_utils/iam'

const healthLakeDataTransformationProfileArnProps: healthlake.HealthLakeDataTransformationProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnProps.property.profileId">profileId</a></code> | <code>string</code> | The ProfileId component of the ARN. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnProps.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

The ProfileId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### HealthLakeActions <a name="HealthLakeActions" id="@cdk_utils/iam.healthlake.HealthLakeActions"></a>

IAM action constants for the healthlake service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.healthlake.HealthLakeActions.Initializer"></a>

```typescript
import { healthlake } from '@cdk_utils/iam'

new healthlake.HealthLakeActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.actionGetCapabilities">actionGetCapabilities</a></code> | <code>string</code> | [Read] healthlake:GetCapabilities. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.actionGetDataTransformationProfile">actionGetDataTransformationProfile</a></code> | <code>string</code> | [Read] healthlake:GetDataTransformationProfile. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.actionGetExportedFile">actionGetExportedFile</a></code> | <code>string</code> | [Read] healthlake:GetExportedFile. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.actionGetHistoryByResourceId">actionGetHistoryByResourceId</a></code> | <code>string</code> | [Read] healthlake:GetHistoryByResourceId. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.CancelFHIRExportJobWithDelete">CancelFHIRExportJobWithDelete</a></code> | <code>string</code> | [Write] healthlake:CancelFHIRExportJobWithDelete. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.ConfirmAttributionList">ConfirmAttributionList</a></code> | <code>string</code> | [Write] healthlake:ConfirmAttributionList. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.CreateDataTransformationProfile">CreateDataTransformationProfile</a></code> | <code>string</code> | [Write] healthlake:CreateDataTransformationProfile. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.CreateFHIRDatastore">CreateFHIRDatastore</a></code> | <code>string</code> | [Write] healthlake:CreateFHIRDatastore. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.CreateResource">CreateResource</a></code> | <code>string</code> | [Write] healthlake:CreateResource. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.DeleteDataTransformationProfile">DeleteDataTransformationProfile</a></code> | <code>string</code> | [Write] healthlake:DeleteDataTransformationProfile. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.DeleteFHIRDatastore">DeleteFHIRDatastore</a></code> | <code>string</code> | [Write] healthlake:DeleteFHIRDatastore. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.DeleteResource">DeleteResource</a></code> | <code>string</code> | [Write] healthlake:DeleteResource. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.DescribeDataTransformationJob">DescribeDataTransformationJob</a></code> | <code>string</code> | [Read] healthlake:DescribeDataTransformationJob. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.DescribeFHIRBulkDeleteJob">DescribeFHIRBulkDeleteJob</a></code> | <code>string</code> | [Read] healthlake:DescribeFHIRBulkDeleteJob. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.DescribeFHIRBulkMemberMatchJob">DescribeFHIRBulkMemberMatchJob</a></code> | <code>string</code> | [Read] healthlake:DescribeFHIRBulkMemberMatchJob. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.DescribeFHIRDatastore">DescribeFHIRDatastore</a></code> | <code>string</code> | [Read] healthlake:DescribeFHIRDatastore. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.DescribeFHIRExportJob">DescribeFHIRExportJob</a></code> | <code>string</code> | [Read] healthlake:DescribeFHIRExportJob. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.DescribeFHIRExportJobWithGet">DescribeFHIRExportJobWithGet</a></code> | <code>string</code> | [Read] healthlake:DescribeFHIRExportJobWithGet. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.DescribeFHIRImportJob">DescribeFHIRImportJob</a></code> | <code>string</code> | [Read] healthlake:DescribeFHIRImportJob. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.ExpandValueSetWithGet">ExpandValueSetWithGet</a></code> | <code>string</code> | [Read] healthlake:ExpandValueSetWithGet. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.ExpandValueSetWithPost">ExpandValueSetWithPost</a></code> | <code>string</code> | [Read] healthlake:ExpandValueSetWithPost. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.GenerateDocumentWithGet">GenerateDocumentWithGet</a></code> | <code>string</code> | [Write] healthlake:GenerateDocumentWithGet. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.GenerateDocumentWithPost">GenerateDocumentWithPost</a></code> | <code>string</code> | [Write] healthlake:GenerateDocumentWithPost. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.InquirePreAuthClaim">InquirePreAuthClaim</a></code> | <code>string</code> | [Read] healthlake:InquirePreAuthClaim. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.ListDataTransformationJobs">ListDataTransformationJobs</a></code> | <code>string</code> | [List] healthlake:ListDataTransformationJobs. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.ListDataTransformationProfiles">ListDataTransformationProfiles</a></code> | <code>string</code> | [List] healthlake:ListDataTransformationProfiles. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.ListDataTransformationProfileVersions">ListDataTransformationProfileVersions</a></code> | <code>string</code> | [List] healthlake:ListDataTransformationProfileVersions. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.ListFHIRDatastores">ListFHIRDatastores</a></code> | <code>string</code> | [List] healthlake:ListFHIRDatastores. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.ListFHIRExportJobs">ListFHIRExportJobs</a></code> | <code>string</code> | [List] healthlake:ListFHIRExportJobs. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.ListFHIRImportJobs">ListFHIRImportJobs</a></code> | <code>string</code> | [List] healthlake:ListFHIRImportJobs. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] healthlake:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.LookupCodeSystemWithGet">LookupCodeSystemWithGet</a></code> | <code>string</code> | [Read] healthlake:LookupCodeSystemWithGet. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.LookupCodeSystemWithPost">LookupCodeSystemWithPost</a></code> | <code>string</code> | [Read] healthlake:LookupCodeSystemWithPost. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.MemberAdd">MemberAdd</a></code> | <code>string</code> | [Write] healthlake:MemberAdd. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.MemberMatch">MemberMatch</a></code> | <code>string</code> | [Write] healthlake:MemberMatch. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.MemberRemove">MemberRemove</a></code> | <code>string</code> | [Write] healthlake:MemberRemove. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.PatchResource">PatchResource</a></code> | <code>string</code> | [Write] healthlake:PatchResource. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.ProcessBundle">ProcessBundle</a></code> | <code>string</code> | [Write] healthlake:ProcessBundle. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.PublishDataTransformationProfile">PublishDataTransformationProfile</a></code> | <code>string</code> | [Write] healthlake:PublishDataTransformationProfile. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.QuestionnairePackage">QuestionnairePackage</a></code> | <code>string</code> | [Read] healthlake:QuestionnairePackage. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.ReadResource">ReadResource</a></code> | <code>string</code> | [Read] healthlake:ReadResource. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.RetrieveAttributionStatus">RetrieveAttributionStatus</a></code> | <code>string</code> | [Write] healthlake:RetrieveAttributionStatus. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.SearchEverything">SearchEverything</a></code> | <code>string</code> | [Read] healthlake:SearchEverything. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.SearchWithGet">SearchWithGet</a></code> | <code>string</code> | [Read] healthlake:SearchWithGet. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.SearchWithPost">SearchWithPost</a></code> | <code>string</code> | [Read] healthlake:SearchWithPost. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.StartDataTransformationJob">StartDataTransformationJob</a></code> | <code>string</code> | [Write] healthlake:StartDataTransformationJob. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.StartFHIRBulkDeleteJob">StartFHIRBulkDeleteJob</a></code> | <code>string</code> | [Write] healthlake:StartFHIRBulkDeleteJob. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.StartFHIRBulkMemberMatchJob">StartFHIRBulkMemberMatchJob</a></code> | <code>string</code> | [Write] healthlake:StartFHIRBulkMemberMatchJob. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.StartFHIRExportJob">StartFHIRExportJob</a></code> | <code>string</code> | [Write] healthlake:StartFHIRExportJob. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.StartFHIRExportJobWithGet">StartFHIRExportJobWithGet</a></code> | <code>string</code> | [Write] healthlake:StartFHIRExportJobWithGet. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.StartFHIRExportJobWithPost">StartFHIRExportJobWithPost</a></code> | <code>string</code> | [Write] healthlake:StartFHIRExportJobWithPost. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.StartFHIRImportJob">StartFHIRImportJob</a></code> | <code>string</code> | [Write] healthlake:StartFHIRImportJob. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.SubmitPreAuthClaim">SubmitPreAuthClaim</a></code> | <code>string</code> | [Write] healthlake:SubmitPreAuthClaim. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] healthlake:TagResource. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.TransformData">TransformData</a></code> | <code>string</code> | [Write] healthlake:TransformData. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] healthlake:UntagResource. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.UpdateDataTransformationProfile">UpdateDataTransformationProfile</a></code> | <code>string</code> | [Write] healthlake:UpdateDataTransformationProfile. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.UpdateFHIRDatastore">UpdateFHIRDatastore</a></code> | <code>string</code> | [Write] healthlake:UpdateFHIRDatastore. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.UpdateProfileWithAgent">UpdateProfileWithAgent</a></code> | <code>string</code> | [Write] healthlake:UpdateProfileWithAgent. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.UpdateResource">UpdateResource</a></code> | <code>string</code> | [Write] healthlake:UpdateResource. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.ValidateResource">ValidateResource</a></code> | <code>string</code> | [Read] healthlake:ValidateResource. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.ValidateSource">ValidateSource</a></code> | <code>string</code> | [Read] healthlake:ValidateSource. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeActions.property.VersionReadResource">VersionReadResource</a></code> | <code>string</code> | [Read] healthlake:VersionReadResource. |

---

##### `actionGetCapabilities`<sup>Required</sup> <a name="actionGetCapabilities" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.actionGetCapabilities"></a>

```typescript
public readonly actionGetCapabilities: string;
```

- *Type:* string

[Read] healthlake:GetCapabilities.

---

##### `actionGetDataTransformationProfile`<sup>Required</sup> <a name="actionGetDataTransformationProfile" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.actionGetDataTransformationProfile"></a>

```typescript
public readonly actionGetDataTransformationProfile: string;
```

- *Type:* string

[Read] healthlake:GetDataTransformationProfile.

---

##### `actionGetExportedFile`<sup>Required</sup> <a name="actionGetExportedFile" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.actionGetExportedFile"></a>

```typescript
public readonly actionGetExportedFile: string;
```

- *Type:* string

[Read] healthlake:GetExportedFile.

---

##### `actionGetHistoryByResourceId`<sup>Required</sup> <a name="actionGetHistoryByResourceId" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.actionGetHistoryByResourceId"></a>

```typescript
public readonly actionGetHistoryByResourceId: string;
```

- *Type:* string

[Read] healthlake:GetHistoryByResourceId.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelFHIRExportJobWithDelete`<sup>Required</sup> <a name="CancelFHIRExportJobWithDelete" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.CancelFHIRExportJobWithDelete"></a>

```typescript
public readonly CancelFHIRExportJobWithDelete: string;
```

- *Type:* string

[Write] healthlake:CancelFHIRExportJobWithDelete.

---

##### `ConfirmAttributionList`<sup>Required</sup> <a name="ConfirmAttributionList" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.ConfirmAttributionList"></a>

```typescript
public readonly ConfirmAttributionList: string;
```

- *Type:* string

[Write] healthlake:ConfirmAttributionList.

---

##### `CreateDataTransformationProfile`<sup>Required</sup> <a name="CreateDataTransformationProfile" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.CreateDataTransformationProfile"></a>

```typescript
public readonly CreateDataTransformationProfile: string;
```

- *Type:* string

[Write] healthlake:CreateDataTransformationProfile.

---

##### `CreateFHIRDatastore`<sup>Required</sup> <a name="CreateFHIRDatastore" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.CreateFHIRDatastore"></a>

```typescript
public readonly CreateFHIRDatastore: string;
```

- *Type:* string

[Write] healthlake:CreateFHIRDatastore.

---

##### `CreateResource`<sup>Required</sup> <a name="CreateResource" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.CreateResource"></a>

```typescript
public readonly CreateResource: string;
```

- *Type:* string

[Write] healthlake:CreateResource.

---

##### `DeleteDataTransformationProfile`<sup>Required</sup> <a name="DeleteDataTransformationProfile" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.DeleteDataTransformationProfile"></a>

```typescript
public readonly DeleteDataTransformationProfile: string;
```

- *Type:* string

[Write] healthlake:DeleteDataTransformationProfile.

---

##### `DeleteFHIRDatastore`<sup>Required</sup> <a name="DeleteFHIRDatastore" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.DeleteFHIRDatastore"></a>

```typescript
public readonly DeleteFHIRDatastore: string;
```

- *Type:* string

[Write] healthlake:DeleteFHIRDatastore.

---

##### `DeleteResource`<sup>Required</sup> <a name="DeleteResource" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.DeleteResource"></a>

```typescript
public readonly DeleteResource: string;
```

- *Type:* string

[Write] healthlake:DeleteResource.

---

##### `DescribeDataTransformationJob`<sup>Required</sup> <a name="DescribeDataTransformationJob" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.DescribeDataTransformationJob"></a>

```typescript
public readonly DescribeDataTransformationJob: string;
```

- *Type:* string

[Read] healthlake:DescribeDataTransformationJob.

---

##### `DescribeFHIRBulkDeleteJob`<sup>Required</sup> <a name="DescribeFHIRBulkDeleteJob" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.DescribeFHIRBulkDeleteJob"></a>

```typescript
public readonly DescribeFHIRBulkDeleteJob: string;
```

- *Type:* string

[Read] healthlake:DescribeFHIRBulkDeleteJob.

---

##### `DescribeFHIRBulkMemberMatchJob`<sup>Required</sup> <a name="DescribeFHIRBulkMemberMatchJob" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.DescribeFHIRBulkMemberMatchJob"></a>

```typescript
public readonly DescribeFHIRBulkMemberMatchJob: string;
```

- *Type:* string

[Read] healthlake:DescribeFHIRBulkMemberMatchJob.

---

##### `DescribeFHIRDatastore`<sup>Required</sup> <a name="DescribeFHIRDatastore" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.DescribeFHIRDatastore"></a>

```typescript
public readonly DescribeFHIRDatastore: string;
```

- *Type:* string

[Read] healthlake:DescribeFHIRDatastore.

---

##### `DescribeFHIRExportJob`<sup>Required</sup> <a name="DescribeFHIRExportJob" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.DescribeFHIRExportJob"></a>

```typescript
public readonly DescribeFHIRExportJob: string;
```

- *Type:* string

[Read] healthlake:DescribeFHIRExportJob.

---

##### `DescribeFHIRExportJobWithGet`<sup>Required</sup> <a name="DescribeFHIRExportJobWithGet" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.DescribeFHIRExportJobWithGet"></a>

```typescript
public readonly DescribeFHIRExportJobWithGet: string;
```

- *Type:* string

[Read] healthlake:DescribeFHIRExportJobWithGet.

---

##### `DescribeFHIRImportJob`<sup>Required</sup> <a name="DescribeFHIRImportJob" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.DescribeFHIRImportJob"></a>

```typescript
public readonly DescribeFHIRImportJob: string;
```

- *Type:* string

[Read] healthlake:DescribeFHIRImportJob.

---

##### `ExpandValueSetWithGet`<sup>Required</sup> <a name="ExpandValueSetWithGet" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.ExpandValueSetWithGet"></a>

```typescript
public readonly ExpandValueSetWithGet: string;
```

- *Type:* string

[Read] healthlake:ExpandValueSetWithGet.

---

##### `ExpandValueSetWithPost`<sup>Required</sup> <a name="ExpandValueSetWithPost" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.ExpandValueSetWithPost"></a>

```typescript
public readonly ExpandValueSetWithPost: string;
```

- *Type:* string

[Read] healthlake:ExpandValueSetWithPost.

---

##### `GenerateDocumentWithGet`<sup>Required</sup> <a name="GenerateDocumentWithGet" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.GenerateDocumentWithGet"></a>

```typescript
public readonly GenerateDocumentWithGet: string;
```

- *Type:* string

[Write] healthlake:GenerateDocumentWithGet.

---

##### `GenerateDocumentWithPost`<sup>Required</sup> <a name="GenerateDocumentWithPost" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.GenerateDocumentWithPost"></a>

```typescript
public readonly GenerateDocumentWithPost: string;
```

- *Type:* string

[Write] healthlake:GenerateDocumentWithPost.

---

##### `InquirePreAuthClaim`<sup>Required</sup> <a name="InquirePreAuthClaim" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.InquirePreAuthClaim"></a>

```typescript
public readonly InquirePreAuthClaim: string;
```

- *Type:* string

[Read] healthlake:InquirePreAuthClaim.

---

##### `ListDataTransformationJobs`<sup>Required</sup> <a name="ListDataTransformationJobs" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.ListDataTransformationJobs"></a>

```typescript
public readonly ListDataTransformationJobs: string;
```

- *Type:* string

[List] healthlake:ListDataTransformationJobs.

---

##### `ListDataTransformationProfiles`<sup>Required</sup> <a name="ListDataTransformationProfiles" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.ListDataTransformationProfiles"></a>

```typescript
public readonly ListDataTransformationProfiles: string;
```

- *Type:* string

[List] healthlake:ListDataTransformationProfiles.

---

##### `ListDataTransformationProfileVersions`<sup>Required</sup> <a name="ListDataTransformationProfileVersions" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.ListDataTransformationProfileVersions"></a>

```typescript
public readonly ListDataTransformationProfileVersions: string;
```

- *Type:* string

[List] healthlake:ListDataTransformationProfileVersions.

---

##### `ListFHIRDatastores`<sup>Required</sup> <a name="ListFHIRDatastores" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.ListFHIRDatastores"></a>

```typescript
public readonly ListFHIRDatastores: string;
```

- *Type:* string

[List] healthlake:ListFHIRDatastores.

---

##### `ListFHIRExportJobs`<sup>Required</sup> <a name="ListFHIRExportJobs" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.ListFHIRExportJobs"></a>

```typescript
public readonly ListFHIRExportJobs: string;
```

- *Type:* string

[List] healthlake:ListFHIRExportJobs.

---

##### `ListFHIRImportJobs`<sup>Required</sup> <a name="ListFHIRImportJobs" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.ListFHIRImportJobs"></a>

```typescript
public readonly ListFHIRImportJobs: string;
```

- *Type:* string

[List] healthlake:ListFHIRImportJobs.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] healthlake:ListTagsForResource.

---

##### `LookupCodeSystemWithGet`<sup>Required</sup> <a name="LookupCodeSystemWithGet" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.LookupCodeSystemWithGet"></a>

```typescript
public readonly LookupCodeSystemWithGet: string;
```

- *Type:* string

[Read] healthlake:LookupCodeSystemWithGet.

---

##### `LookupCodeSystemWithPost`<sup>Required</sup> <a name="LookupCodeSystemWithPost" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.LookupCodeSystemWithPost"></a>

```typescript
public readonly LookupCodeSystemWithPost: string;
```

- *Type:* string

[Read] healthlake:LookupCodeSystemWithPost.

---

##### `MemberAdd`<sup>Required</sup> <a name="MemberAdd" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.MemberAdd"></a>

```typescript
public readonly MemberAdd: string;
```

- *Type:* string

[Write] healthlake:MemberAdd.

---

##### `MemberMatch`<sup>Required</sup> <a name="MemberMatch" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.MemberMatch"></a>

```typescript
public readonly MemberMatch: string;
```

- *Type:* string

[Write] healthlake:MemberMatch.

---

##### `MemberRemove`<sup>Required</sup> <a name="MemberRemove" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.MemberRemove"></a>

```typescript
public readonly MemberRemove: string;
```

- *Type:* string

[Write] healthlake:MemberRemove.

---

##### `PatchResource`<sup>Required</sup> <a name="PatchResource" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.PatchResource"></a>

```typescript
public readonly PatchResource: string;
```

- *Type:* string

[Write] healthlake:PatchResource.

---

##### `ProcessBundle`<sup>Required</sup> <a name="ProcessBundle" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.ProcessBundle"></a>

```typescript
public readonly ProcessBundle: string;
```

- *Type:* string

[Write] healthlake:ProcessBundle.

---

##### `PublishDataTransformationProfile`<sup>Required</sup> <a name="PublishDataTransformationProfile" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.PublishDataTransformationProfile"></a>

```typescript
public readonly PublishDataTransformationProfile: string;
```

- *Type:* string

[Write] healthlake:PublishDataTransformationProfile.

---

##### `QuestionnairePackage`<sup>Required</sup> <a name="QuestionnairePackage" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.QuestionnairePackage"></a>

```typescript
public readonly QuestionnairePackage: string;
```

- *Type:* string

[Read] healthlake:QuestionnairePackage.

---

##### `ReadResource`<sup>Required</sup> <a name="ReadResource" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.ReadResource"></a>

```typescript
public readonly ReadResource: string;
```

- *Type:* string

[Read] healthlake:ReadResource.

---

##### `RetrieveAttributionStatus`<sup>Required</sup> <a name="RetrieveAttributionStatus" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.RetrieveAttributionStatus"></a>

```typescript
public readonly RetrieveAttributionStatus: string;
```

- *Type:* string

[Write] healthlake:RetrieveAttributionStatus.

---

##### `SearchEverything`<sup>Required</sup> <a name="SearchEverything" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.SearchEverything"></a>

```typescript
public readonly SearchEverything: string;
```

- *Type:* string

[Read] healthlake:SearchEverything.

---

##### `SearchWithGet`<sup>Required</sup> <a name="SearchWithGet" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.SearchWithGet"></a>

```typescript
public readonly SearchWithGet: string;
```

- *Type:* string

[Read] healthlake:SearchWithGet.

---

##### `SearchWithPost`<sup>Required</sup> <a name="SearchWithPost" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.SearchWithPost"></a>

```typescript
public readonly SearchWithPost: string;
```

- *Type:* string

[Read] healthlake:SearchWithPost.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDataTransformationJob`<sup>Required</sup> <a name="StartDataTransformationJob" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.StartDataTransformationJob"></a>

```typescript
public readonly StartDataTransformationJob: string;
```

- *Type:* string

[Write] healthlake:StartDataTransformationJob.

---

##### `StartFHIRBulkDeleteJob`<sup>Required</sup> <a name="StartFHIRBulkDeleteJob" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.StartFHIRBulkDeleteJob"></a>

```typescript
public readonly StartFHIRBulkDeleteJob: string;
```

- *Type:* string

[Write] healthlake:StartFHIRBulkDeleteJob.

---

##### `StartFHIRBulkMemberMatchJob`<sup>Required</sup> <a name="StartFHIRBulkMemberMatchJob" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.StartFHIRBulkMemberMatchJob"></a>

```typescript
public readonly StartFHIRBulkMemberMatchJob: string;
```

- *Type:* string

[Write] healthlake:StartFHIRBulkMemberMatchJob.

---

##### `StartFHIRExportJob`<sup>Required</sup> <a name="StartFHIRExportJob" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.StartFHIRExportJob"></a>

```typescript
public readonly StartFHIRExportJob: string;
```

- *Type:* string

[Write] healthlake:StartFHIRExportJob.

---

##### `StartFHIRExportJobWithGet`<sup>Required</sup> <a name="StartFHIRExportJobWithGet" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.StartFHIRExportJobWithGet"></a>

```typescript
public readonly StartFHIRExportJobWithGet: string;
```

- *Type:* string

[Write] healthlake:StartFHIRExportJobWithGet.

---

##### `StartFHIRExportJobWithPost`<sup>Required</sup> <a name="StartFHIRExportJobWithPost" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.StartFHIRExportJobWithPost"></a>

```typescript
public readonly StartFHIRExportJobWithPost: string;
```

- *Type:* string

[Write] healthlake:StartFHIRExportJobWithPost.

---

##### `StartFHIRImportJob`<sup>Required</sup> <a name="StartFHIRImportJob" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.StartFHIRImportJob"></a>

```typescript
public readonly StartFHIRImportJob: string;
```

- *Type:* string

[Write] healthlake:StartFHIRImportJob.

---

##### `SubmitPreAuthClaim`<sup>Required</sup> <a name="SubmitPreAuthClaim" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.SubmitPreAuthClaim"></a>

```typescript
public readonly SubmitPreAuthClaim: string;
```

- *Type:* string

[Write] healthlake:SubmitPreAuthClaim.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] healthlake:TagResource.

---

##### `TransformData`<sup>Required</sup> <a name="TransformData" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.TransformData"></a>

```typescript
public readonly TransformData: string;
```

- *Type:* string

[Write] healthlake:TransformData.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] healthlake:UntagResource.

---

##### `UpdateDataTransformationProfile`<sup>Required</sup> <a name="UpdateDataTransformationProfile" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.UpdateDataTransformationProfile"></a>

```typescript
public readonly UpdateDataTransformationProfile: string;
```

- *Type:* string

[Write] healthlake:UpdateDataTransformationProfile.

---

##### `UpdateFHIRDatastore`<sup>Required</sup> <a name="UpdateFHIRDatastore" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.UpdateFHIRDatastore"></a>

```typescript
public readonly UpdateFHIRDatastore: string;
```

- *Type:* string

[Write] healthlake:UpdateFHIRDatastore.

---

##### `UpdateProfileWithAgent`<sup>Required</sup> <a name="UpdateProfileWithAgent" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.UpdateProfileWithAgent"></a>

```typescript
public readonly UpdateProfileWithAgent: string;
```

- *Type:* string

[Write] healthlake:UpdateProfileWithAgent.

---

##### `UpdateResource`<sup>Required</sup> <a name="UpdateResource" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.UpdateResource"></a>

```typescript
public readonly UpdateResource: string;
```

- *Type:* string

[Write] healthlake:UpdateResource.

---

##### `ValidateResource`<sup>Required</sup> <a name="ValidateResource" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.ValidateResource"></a>

```typescript
public readonly ValidateResource: string;
```

- *Type:* string

[Read] healthlake:ValidateResource.

---

##### `ValidateSource`<sup>Required</sup> <a name="ValidateSource" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.ValidateSource"></a>

```typescript
public readonly ValidateSource: string;
```

- *Type:* string

[Read] healthlake:ValidateSource.

---

##### `VersionReadResource`<sup>Required</sup> <a name="VersionReadResource" id="@cdk_utils/iam.healthlake.HealthLakeActions.property.VersionReadResource"></a>

```typescript
public readonly VersionReadResource: string;
```

- *Type:* string

[Read] healthlake:VersionReadResource.

---

### HealthLakeConditions <a name="HealthLakeConditions" id="@cdk_utils/iam.healthlake.HealthLakeConditions"></a>

Condition key constants and builders for healthlake.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.healthlake.HealthLakeConditions.Initializer"></a>

```typescript
import { healthlake } from '@cdk_utils/iam'

new healthlake.HealthLakeConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.healthlake.HealthLakeConditions.requestTag"></a>

```typescript
import { healthlake } from '@cdk_utils/iam'

healthlake.HealthLakeConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.healthlake.HealthLakeConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.healthlake.HealthLakeConditions.resourceTag"></a>

```typescript
import { healthlake } from '@cdk_utils/iam'

healthlake.HealthLakeConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.healthlake.HealthLakeConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.healthlake.HealthLakeConditions.tagKeys"></a>

```typescript
import { healthlake } from '@cdk_utils/iam'

healthlake.HealthLakeConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.healthlake.HealthLakeConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeConditions.property.CreateDataTransformationProfileConditionKeys">CreateDataTransformationProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataTransformationProfile action. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeConditions.property.CreateFHIRDatastoreConditionKeys">CreateFHIRDatastoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFHIRDatastore action. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.healthlake.HealthLakeConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.healthlake.HealthLakeConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.healthlake.HealthLakeConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDataTransformationProfileConditionKeys`<sup>Required</sup> <a name="CreateDataTransformationProfileConditionKeys" id="@cdk_utils/iam.healthlake.HealthLakeConditions.property.CreateDataTransformationProfileConditionKeys"></a>

```typescript
public readonly CreateDataTransformationProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataTransformationProfile action.

---

##### `CreateFHIRDatastoreConditionKeys`<sup>Required</sup> <a name="CreateFHIRDatastoreConditionKeys" id="@cdk_utils/iam.healthlake.HealthLakeConditions.property.CreateFHIRDatastoreConditionKeys"></a>

```typescript
public readonly CreateFHIRDatastoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFHIRDatastore action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.healthlake.HealthLakeConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.healthlake.HealthLakeConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### HealthLakeOperations <a name="HealthLakeOperations" id="@cdk_utils/iam.healthlake.HealthLakeOperations"></a>

API operation to required IAM actions mapping for healthlake.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.healthlake.HealthLakeOperations.Initializer"></a>

```typescript
import { healthlake } from '@cdk_utils/iam'

new healthlake.HealthLakeOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.CreateDataTransformationProfile">CreateDataTransformationProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateDataTransformationProfile API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.CreateFHIRDatastore">CreateFHIRDatastore</a></code> | <code>string[]</code> | IAM actions required for the CreateFHIRDatastore API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.DeleteDataTransformationProfile">DeleteDataTransformationProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataTransformationProfile API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.DeleteFHIRDatastore">DeleteFHIRDatastore</a></code> | <code>string[]</code> | IAM actions required for the DeleteFHIRDatastore API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.DescribeDataTransformationJob">DescribeDataTransformationJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataTransformationJob API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.DescribeFHIRDatastore">DescribeFHIRDatastore</a></code> | <code>string[]</code> | IAM actions required for the DescribeFHIRDatastore API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.DescribeFHIRExportJob">DescribeFHIRExportJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeFHIRExportJob API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.DescribeFHIRImportJob">DescribeFHIRImportJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeFHIRImportJob API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.ListDataTransformationJobs">ListDataTransformationJobs</a></code> | <code>string[]</code> | IAM actions required for the ListDataTransformationJobs API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.ListDataTransformationProfiles">ListDataTransformationProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListDataTransformationProfiles API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.ListDataTransformationProfileVersions">ListDataTransformationProfileVersions</a></code> | <code>string[]</code> | IAM actions required for the ListDataTransformationProfileVersions API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.ListFHIRDatastores">ListFHIRDatastores</a></code> | <code>string[]</code> | IAM actions required for the ListFHIRDatastores API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.ListFHIRExportJobs">ListFHIRExportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListFHIRExportJobs API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.ListFHIRImportJobs">ListFHIRImportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListFHIRImportJobs API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.opGetDataTransformationProfile">opGetDataTransformationProfile</a></code> | <code>string[]</code> | IAM actions required for the GetDataTransformationProfile API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.PublishDataTransformationProfile">PublishDataTransformationProfile</a></code> | <code>string[]</code> | IAM actions required for the PublishDataTransformationProfile API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.StartDataTransformationJob">StartDataTransformationJob</a></code> | <code>string[]</code> | IAM actions required for the StartDataTransformationJob API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.StartFHIRExportJob">StartFHIRExportJob</a></code> | <code>string[]</code> | IAM actions required for the StartFHIRExportJob API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.StartFHIRImportJob">StartFHIRImportJob</a></code> | <code>string[]</code> | IAM actions required for the StartFHIRImportJob API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.UpdateDataTransformationProfile">UpdateDataTransformationProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataTransformationProfile API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.UpdateFHIRDatastore">UpdateFHIRDatastore</a></code> | <code>string[]</code> | IAM actions required for the UpdateFHIRDatastore API call. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeOperations.property.UpdateProfileWithAgent">UpdateProfileWithAgent</a></code> | <code>string[]</code> | IAM actions required for the UpdateProfileWithAgent API call. |

---

##### `CreateDataTransformationProfile`<sup>Required</sup> <a name="CreateDataTransformationProfile" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.CreateDataTransformationProfile"></a>

```typescript
public readonly CreateDataTransformationProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataTransformationProfile API call.

---

##### `CreateFHIRDatastore`<sup>Required</sup> <a name="CreateFHIRDatastore" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.CreateFHIRDatastore"></a>

```typescript
public readonly CreateFHIRDatastore: string[];
```

- *Type:* string[]

IAM actions required for the CreateFHIRDatastore API call.

---

##### `DeleteDataTransformationProfile`<sup>Required</sup> <a name="DeleteDataTransformationProfile" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.DeleteDataTransformationProfile"></a>

```typescript
public readonly DeleteDataTransformationProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataTransformationProfile API call.

---

##### `DeleteFHIRDatastore`<sup>Required</sup> <a name="DeleteFHIRDatastore" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.DeleteFHIRDatastore"></a>

```typescript
public readonly DeleteFHIRDatastore: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFHIRDatastore API call.

---

##### `DescribeDataTransformationJob`<sup>Required</sup> <a name="DescribeDataTransformationJob" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.DescribeDataTransformationJob"></a>

```typescript
public readonly DescribeDataTransformationJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataTransformationJob API call.

---

##### `DescribeFHIRDatastore`<sup>Required</sup> <a name="DescribeFHIRDatastore" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.DescribeFHIRDatastore"></a>

```typescript
public readonly DescribeFHIRDatastore: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFHIRDatastore API call.

---

##### `DescribeFHIRExportJob`<sup>Required</sup> <a name="DescribeFHIRExportJob" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.DescribeFHIRExportJob"></a>

```typescript
public readonly DescribeFHIRExportJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFHIRExportJob API call.

---

##### `DescribeFHIRImportJob`<sup>Required</sup> <a name="DescribeFHIRImportJob" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.DescribeFHIRImportJob"></a>

```typescript
public readonly DescribeFHIRImportJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFHIRImportJob API call.

---

##### `ListDataTransformationJobs`<sup>Required</sup> <a name="ListDataTransformationJobs" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.ListDataTransformationJobs"></a>

```typescript
public readonly ListDataTransformationJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListDataTransformationJobs API call.

---

##### `ListDataTransformationProfiles`<sup>Required</sup> <a name="ListDataTransformationProfiles" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.ListDataTransformationProfiles"></a>

```typescript
public readonly ListDataTransformationProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListDataTransformationProfiles API call.

---

##### `ListDataTransformationProfileVersions`<sup>Required</sup> <a name="ListDataTransformationProfileVersions" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.ListDataTransformationProfileVersions"></a>

```typescript
public readonly ListDataTransformationProfileVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListDataTransformationProfileVersions API call.

---

##### `ListFHIRDatastores`<sup>Required</sup> <a name="ListFHIRDatastores" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.ListFHIRDatastores"></a>

```typescript
public readonly ListFHIRDatastores: string[];
```

- *Type:* string[]

IAM actions required for the ListFHIRDatastores API call.

---

##### `ListFHIRExportJobs`<sup>Required</sup> <a name="ListFHIRExportJobs" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.ListFHIRExportJobs"></a>

```typescript
public readonly ListFHIRExportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListFHIRExportJobs API call.

---

##### `ListFHIRImportJobs`<sup>Required</sup> <a name="ListFHIRImportJobs" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.ListFHIRImportJobs"></a>

```typescript
public readonly ListFHIRImportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListFHIRImportJobs API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetDataTransformationProfile`<sup>Required</sup> <a name="opGetDataTransformationProfile" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.opGetDataTransformationProfile"></a>

```typescript
public readonly opGetDataTransformationProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetDataTransformationProfile API call.

---

##### `PublishDataTransformationProfile`<sup>Required</sup> <a name="PublishDataTransformationProfile" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.PublishDataTransformationProfile"></a>

```typescript
public readonly PublishDataTransformationProfile: string[];
```

- *Type:* string[]

IAM actions required for the PublishDataTransformationProfile API call.

---

##### `StartDataTransformationJob`<sup>Required</sup> <a name="StartDataTransformationJob" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.StartDataTransformationJob"></a>

```typescript
public readonly StartDataTransformationJob: string[];
```

- *Type:* string[]

IAM actions required for the StartDataTransformationJob API call.

---

##### `StartFHIRExportJob`<sup>Required</sup> <a name="StartFHIRExportJob" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.StartFHIRExportJob"></a>

```typescript
public readonly StartFHIRExportJob: string[];
```

- *Type:* string[]

IAM actions required for the StartFHIRExportJob API call.

---

##### `StartFHIRImportJob`<sup>Required</sup> <a name="StartFHIRImportJob" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.StartFHIRImportJob"></a>

```typescript
public readonly StartFHIRImportJob: string[];
```

- *Type:* string[]

IAM actions required for the StartFHIRImportJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDataTransformationProfile`<sup>Required</sup> <a name="UpdateDataTransformationProfile" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.UpdateDataTransformationProfile"></a>

```typescript
public readonly UpdateDataTransformationProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataTransformationProfile API call.

---

##### `UpdateFHIRDatastore`<sup>Required</sup> <a name="UpdateFHIRDatastore" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.UpdateFHIRDatastore"></a>

```typescript
public readonly UpdateFHIRDatastore: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFHIRDatastore API call.

---

##### `UpdateProfileWithAgent`<sup>Required</sup> <a name="UpdateProfileWithAgent" id="@cdk_utils/iam.healthlake.HealthLakeOperations.property.UpdateProfileWithAgent"></a>

```typescript
public readonly UpdateProfileWithAgent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProfileWithAgent API call.

---

### HealthLakeResources <a name="HealthLakeResources" id="@cdk_utils/iam.healthlake.HealthLakeResources"></a>

ARN builders, validators, and parsers for healthlake resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.healthlake.HealthLakeResources.Initializer"></a>

```typescript
import { healthlake } from '@cdk_utils/iam'

new healthlake.HealthLakeResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeResources.datastore">datastore</a></code> | Builds an ARN for the datastore resource. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeResources.dataTransformationProfile">dataTransformationProfile</a></code> | Builds an ARN for the dataTransformationProfile resource. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeResources.isValidDatastoreArn">isValidDatastoreArn</a></code> | Validates whether a string is a valid ARN for the datastore resource. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeResources.isValidDataTransformationProfileArn">isValidDataTransformationProfileArn</a></code> | Validates whether a string is a valid ARN for the dataTransformationProfile resource. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeResources.parseDatastoreArn">parseDatastoreArn</a></code> | Parses a datastore ARN into its components. |
| <code><a href="#@cdk_utils/iam.healthlake.HealthLakeResources.parseDataTransformationProfileArn">parseDataTransformationProfileArn</a></code> | Parses a dataTransformationProfile ARN into its components. |

---

##### `datastore` <a name="datastore" id="@cdk_utils/iam.healthlake.HealthLakeResources.datastore"></a>

```typescript
import { healthlake } from '@cdk_utils/iam'

healthlake.HealthLakeResources.datastore(props: HealthLakeDatastoreArnProps)
```

Builds an ARN for the datastore resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.healthlake.HealthLakeResources.datastore.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.healthlake.HealthLakeDatastoreArnProps">HealthLakeDatastoreArnProps</a>

---

##### `dataTransformationProfile` <a name="dataTransformationProfile" id="@cdk_utils/iam.healthlake.HealthLakeResources.dataTransformationProfile"></a>

```typescript
import { healthlake } from '@cdk_utils/iam'

healthlake.HealthLakeResources.dataTransformationProfile(props: HealthLakeDataTransformationProfileArnProps)
```

Builds an ARN for the dataTransformationProfile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.healthlake.HealthLakeResources.dataTransformationProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.healthlake.HealthLakeDataTransformationProfileArnProps">HealthLakeDataTransformationProfileArnProps</a>

---

##### `isValidDatastoreArn` <a name="isValidDatastoreArn" id="@cdk_utils/iam.healthlake.HealthLakeResources.isValidDatastoreArn"></a>

```typescript
import { healthlake } from '@cdk_utils/iam'

healthlake.HealthLakeResources.isValidDatastoreArn(arn: string)
```

Validates whether a string is a valid ARN for the datastore resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.healthlake.HealthLakeResources.isValidDatastoreArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataTransformationProfileArn` <a name="isValidDataTransformationProfileArn" id="@cdk_utils/iam.healthlake.HealthLakeResources.isValidDataTransformationProfileArn"></a>

```typescript
import { healthlake } from '@cdk_utils/iam'

healthlake.HealthLakeResources.isValidDataTransformationProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the dataTransformationProfile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.healthlake.HealthLakeResources.isValidDataTransformationProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatastoreArn` <a name="parseDatastoreArn" id="@cdk_utils/iam.healthlake.HealthLakeResources.parseDatastoreArn"></a>

```typescript
import { healthlake } from '@cdk_utils/iam'

healthlake.HealthLakeResources.parseDatastoreArn(arn: string)
```

Parses a datastore ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.healthlake.HealthLakeResources.parseDatastoreArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataTransformationProfileArn` <a name="parseDataTransformationProfileArn" id="@cdk_utils/iam.healthlake.HealthLakeResources.parseDataTransformationProfileArn"></a>

```typescript
import { healthlake } from '@cdk_utils/iam'

healthlake.HealthLakeResources.parseDataTransformationProfileArn(arn: string)
```

Parses a dataTransformationProfile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.healthlake.HealthLakeResources.parseDataTransformationProfileArn.parameter.arn"></a>

- *Type:* string

---




