# `cloudsearch` Submodule <a name="`cloudsearch` Submodule" id="@cdk_utils/iam.cloudsearch"></a>


## Structs <a name="Structs" id="Structs"></a>

### CloudSearchDomainArnComponents <a name="CloudSearchDomainArnComponents" id="@cdk_utils/iam.cloudsearch.CloudSearchDomainArnComponents"></a>

Parsed components of a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudsearch.CloudSearchDomainArnComponents.Initializer"></a>

```typescript
import { cloudsearch } from '@cdk_utils/iam'

const cloudSearchDomainArnComponents: cloudsearch.CloudSearchDomainArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchDomainArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchDomainArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchDomainArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchDomainArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudsearch.CloudSearchDomainArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.cloudsearch.CloudSearchDomainArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudsearch.CloudSearchDomainArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudsearch.CloudSearchDomainArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudSearchDomainArnProps <a name="CloudSearchDomainArnProps" id="@cdk_utils/iam.cloudsearch.CloudSearchDomainArnProps"></a>

Properties for building a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudsearch.CloudSearchDomainArnProps.Initializer"></a>

```typescript
import { cloudsearch } from '@cdk_utils/iam'

const cloudSearchDomainArnProps: cloudsearch.CloudSearchDomainArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchDomainArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchDomainArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchDomainArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchDomainArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.cloudsearch.CloudSearchDomainArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudsearch.CloudSearchDomainArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudsearch.CloudSearchDomainArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudsearch.CloudSearchDomainArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CloudSearchActions <a name="CloudSearchActions" id="@cdk_utils/iam.cloudsearch.CloudSearchActions"></a>

IAM action constants for the cloudsearch service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.Initializer"></a>

```typescript
import { cloudsearch } from '@cdk_utils/iam'

new cloudsearch.CloudSearchActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.AddTags">AddTags</a></code> | <code>string</code> | [Tagging] cloudsearch:AddTags. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.BuildSuggesters">BuildSuggesters</a></code> | <code>string</code> | [Write] cloudsearch:BuildSuggesters. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.CreateDomain">CreateDomain</a></code> | <code>string</code> | [Write] cloudsearch:CreateDomain. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DefineAnalysisScheme">DefineAnalysisScheme</a></code> | <code>string</code> | [Write] cloudsearch:DefineAnalysisScheme. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DefineExpression">DefineExpression</a></code> | <code>string</code> | [Write] cloudsearch:DefineExpression. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DefineIndexField">DefineIndexField</a></code> | <code>string</code> | [Write] cloudsearch:DefineIndexField. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DefineSuggester">DefineSuggester</a></code> | <code>string</code> | [Write] cloudsearch:DefineSuggester. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DeleteAnalysisScheme">DeleteAnalysisScheme</a></code> | <code>string</code> | [Write] cloudsearch:DeleteAnalysisScheme. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DeleteDomain">DeleteDomain</a></code> | <code>string</code> | [Write] cloudsearch:DeleteDomain. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DeleteExpression">DeleteExpression</a></code> | <code>string</code> | [Write] cloudsearch:DeleteExpression. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DeleteIndexField">DeleteIndexField</a></code> | <code>string</code> | [Write] cloudsearch:DeleteIndexField. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DeleteSuggester">DeleteSuggester</a></code> | <code>string</code> | [Write] cloudsearch:DeleteSuggester. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DescribeAnalysisSchemes">DescribeAnalysisSchemes</a></code> | <code>string</code> | [Read] cloudsearch:DescribeAnalysisSchemes. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DescribeAvailabilityOptions">DescribeAvailabilityOptions</a></code> | <code>string</code> | [Read] cloudsearch:DescribeAvailabilityOptions. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DescribeDomainEndpointOptions">DescribeDomainEndpointOptions</a></code> | <code>string</code> | [Read] cloudsearch:DescribeDomainEndpointOptions. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DescribeDomains">DescribeDomains</a></code> | <code>string</code> | [List] cloudsearch:DescribeDomains. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DescribeExpressions">DescribeExpressions</a></code> | <code>string</code> | [Read] cloudsearch:DescribeExpressions. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DescribeIndexFields">DescribeIndexFields</a></code> | <code>string</code> | [Read] cloudsearch:DescribeIndexFields. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DescribeScalingParameters">DescribeScalingParameters</a></code> | <code>string</code> | [Read] cloudsearch:DescribeScalingParameters. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DescribeServiceAccessPolicies">DescribeServiceAccessPolicies</a></code> | <code>string</code> | [Read] cloudsearch:DescribeServiceAccessPolicies. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DescribeSuggesters">DescribeSuggesters</a></code> | <code>string</code> | [Read] cloudsearch:DescribeSuggesters. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.document">document</a></code> | <code>string</code> | [Write] cloudsearch:document. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.IndexDocuments">IndexDocuments</a></code> | <code>string</code> | [Write] cloudsearch:IndexDocuments. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.ListDomainNames">ListDomainNames</a></code> | <code>string</code> | [List] cloudsearch:ListDomainNames. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.ListTags">ListTags</a></code> | <code>string</code> | [Read] cloudsearch:ListTags. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.RemoveTags">RemoveTags</a></code> | <code>string</code> | [Tagging] cloudsearch:RemoveTags. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.search">search</a></code> | <code>string</code> | [Read] cloudsearch:search. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.suggest">suggest</a></code> | <code>string</code> | [Read] cloudsearch:suggest. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.UpdateAvailabilityOptions">UpdateAvailabilityOptions</a></code> | <code>string</code> | [Write] cloudsearch:UpdateAvailabilityOptions. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.UpdateDomainEndpointOptions">UpdateDomainEndpointOptions</a></code> | <code>string</code> | [Write] cloudsearch:UpdateDomainEndpointOptions. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.UpdateScalingParameters">UpdateScalingParameters</a></code> | <code>string</code> | [Write] cloudsearch:UpdateScalingParameters. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchActions.property.UpdateServiceAccessPolicies">UpdateServiceAccessPolicies</a></code> | <code>string</code> | [PermissionManagement] cloudsearch:UpdateServiceAccessPolicies. |

---

##### `AddTags`<sup>Required</sup> <a name="AddTags" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.AddTags"></a>

```typescript
public readonly AddTags: string;
```

- *Type:* string

[Tagging] cloudsearch:AddTags.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BuildSuggesters`<sup>Required</sup> <a name="BuildSuggesters" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.BuildSuggesters"></a>

```typescript
public readonly BuildSuggesters: string;
```

- *Type:* string

[Write] cloudsearch:BuildSuggesters.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string;
```

- *Type:* string

[Write] cloudsearch:CreateDomain.

---

##### `DefineAnalysisScheme`<sup>Required</sup> <a name="DefineAnalysisScheme" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DefineAnalysisScheme"></a>

```typescript
public readonly DefineAnalysisScheme: string;
```

- *Type:* string

[Write] cloudsearch:DefineAnalysisScheme.

---

##### `DefineExpression`<sup>Required</sup> <a name="DefineExpression" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DefineExpression"></a>

```typescript
public readonly DefineExpression: string;
```

- *Type:* string

[Write] cloudsearch:DefineExpression.

---

##### `DefineIndexField`<sup>Required</sup> <a name="DefineIndexField" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DefineIndexField"></a>

```typescript
public readonly DefineIndexField: string;
```

- *Type:* string

[Write] cloudsearch:DefineIndexField.

---

##### `DefineSuggester`<sup>Required</sup> <a name="DefineSuggester" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DefineSuggester"></a>

```typescript
public readonly DefineSuggester: string;
```

- *Type:* string

[Write] cloudsearch:DefineSuggester.

---

##### `DeleteAnalysisScheme`<sup>Required</sup> <a name="DeleteAnalysisScheme" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DeleteAnalysisScheme"></a>

```typescript
public readonly DeleteAnalysisScheme: string;
```

- *Type:* string

[Write] cloudsearch:DeleteAnalysisScheme.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string;
```

- *Type:* string

[Write] cloudsearch:DeleteDomain.

---

##### `DeleteExpression`<sup>Required</sup> <a name="DeleteExpression" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DeleteExpression"></a>

```typescript
public readonly DeleteExpression: string;
```

- *Type:* string

[Write] cloudsearch:DeleteExpression.

---

##### `DeleteIndexField`<sup>Required</sup> <a name="DeleteIndexField" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DeleteIndexField"></a>

```typescript
public readonly DeleteIndexField: string;
```

- *Type:* string

[Write] cloudsearch:DeleteIndexField.

---

##### `DeleteSuggester`<sup>Required</sup> <a name="DeleteSuggester" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DeleteSuggester"></a>

```typescript
public readonly DeleteSuggester: string;
```

- *Type:* string

[Write] cloudsearch:DeleteSuggester.

---

##### `DescribeAnalysisSchemes`<sup>Required</sup> <a name="DescribeAnalysisSchemes" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DescribeAnalysisSchemes"></a>

```typescript
public readonly DescribeAnalysisSchemes: string;
```

- *Type:* string

[Read] cloudsearch:DescribeAnalysisSchemes.

---

##### `DescribeAvailabilityOptions`<sup>Required</sup> <a name="DescribeAvailabilityOptions" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DescribeAvailabilityOptions"></a>

```typescript
public readonly DescribeAvailabilityOptions: string;
```

- *Type:* string

[Read] cloudsearch:DescribeAvailabilityOptions.

---

##### `DescribeDomainEndpointOptions`<sup>Required</sup> <a name="DescribeDomainEndpointOptions" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DescribeDomainEndpointOptions"></a>

```typescript
public readonly DescribeDomainEndpointOptions: string;
```

- *Type:* string

[Read] cloudsearch:DescribeDomainEndpointOptions.

---

##### `DescribeDomains`<sup>Required</sup> <a name="DescribeDomains" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DescribeDomains"></a>

```typescript
public readonly DescribeDomains: string;
```

- *Type:* string

[List] cloudsearch:DescribeDomains.

---

##### `DescribeExpressions`<sup>Required</sup> <a name="DescribeExpressions" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DescribeExpressions"></a>

```typescript
public readonly DescribeExpressions: string;
```

- *Type:* string

[Read] cloudsearch:DescribeExpressions.

---

##### `DescribeIndexFields`<sup>Required</sup> <a name="DescribeIndexFields" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DescribeIndexFields"></a>

```typescript
public readonly DescribeIndexFields: string;
```

- *Type:* string

[Read] cloudsearch:DescribeIndexFields.

---

##### `DescribeScalingParameters`<sup>Required</sup> <a name="DescribeScalingParameters" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DescribeScalingParameters"></a>

```typescript
public readonly DescribeScalingParameters: string;
```

- *Type:* string

[Read] cloudsearch:DescribeScalingParameters.

---

##### `DescribeServiceAccessPolicies`<sup>Required</sup> <a name="DescribeServiceAccessPolicies" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DescribeServiceAccessPolicies"></a>

```typescript
public readonly DescribeServiceAccessPolicies: string;
```

- *Type:* string

[Read] cloudsearch:DescribeServiceAccessPolicies.

---

##### `DescribeSuggesters`<sup>Required</sup> <a name="DescribeSuggesters" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.DescribeSuggesters"></a>

```typescript
public readonly DescribeSuggesters: string;
```

- *Type:* string

[Read] cloudsearch:DescribeSuggesters.

---

##### `document`<sup>Required</sup> <a name="document" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.document"></a>

```typescript
public readonly document: string;
```

- *Type:* string

[Write] cloudsearch:document.

---

##### `IndexDocuments`<sup>Required</sup> <a name="IndexDocuments" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.IndexDocuments"></a>

```typescript
public readonly IndexDocuments: string;
```

- *Type:* string

[Write] cloudsearch:IndexDocuments.

---

##### `ListDomainNames`<sup>Required</sup> <a name="ListDomainNames" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.ListDomainNames"></a>

```typescript
public readonly ListDomainNames: string;
```

- *Type:* string

[List] cloudsearch:ListDomainNames.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.ListTags"></a>

```typescript
public readonly ListTags: string;
```

- *Type:* string

[Read] cloudsearch:ListTags.

---

##### `RemoveTags`<sup>Required</sup> <a name="RemoveTags" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.RemoveTags"></a>

```typescript
public readonly RemoveTags: string;
```

- *Type:* string

[Tagging] cloudsearch:RemoveTags.

---

##### `search`<sup>Required</sup> <a name="search" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

[Read] cloudsearch:search.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `suggest`<sup>Required</sup> <a name="suggest" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.suggest"></a>

```typescript
public readonly suggest: string;
```

- *Type:* string

[Read] cloudsearch:suggest.

---

##### `UpdateAvailabilityOptions`<sup>Required</sup> <a name="UpdateAvailabilityOptions" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.UpdateAvailabilityOptions"></a>

```typescript
public readonly UpdateAvailabilityOptions: string;
```

- *Type:* string

[Write] cloudsearch:UpdateAvailabilityOptions.

---

##### `UpdateDomainEndpointOptions`<sup>Required</sup> <a name="UpdateDomainEndpointOptions" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.UpdateDomainEndpointOptions"></a>

```typescript
public readonly UpdateDomainEndpointOptions: string;
```

- *Type:* string

[Write] cloudsearch:UpdateDomainEndpointOptions.

---

##### `UpdateScalingParameters`<sup>Required</sup> <a name="UpdateScalingParameters" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.UpdateScalingParameters"></a>

```typescript
public readonly UpdateScalingParameters: string;
```

- *Type:* string

[Write] cloudsearch:UpdateScalingParameters.

---

##### `UpdateServiceAccessPolicies`<sup>Required</sup> <a name="UpdateServiceAccessPolicies" id="@cdk_utils/iam.cloudsearch.CloudSearchActions.property.UpdateServiceAccessPolicies"></a>

```typescript
public readonly UpdateServiceAccessPolicies: string;
```

- *Type:* string

[PermissionManagement] cloudsearch:UpdateServiceAccessPolicies.

---

### CloudSearchOperations <a name="CloudSearchOperations" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations"></a>

API operation to required IAM actions mapping for cloudsearch.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.Initializer"></a>

```typescript
import { cloudsearch } from '@cdk_utils/iam'

new cloudsearch.CloudSearchOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.BuildSuggesters">BuildSuggesters</a></code> | <code>string[]</code> | IAM actions required for the BuildSuggesters API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.CreateDomain">CreateDomain</a></code> | <code>string[]</code> | IAM actions required for the CreateDomain API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DefineAnalysisScheme">DefineAnalysisScheme</a></code> | <code>string[]</code> | IAM actions required for the DefineAnalysisScheme API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DefineExpression">DefineExpression</a></code> | <code>string[]</code> | IAM actions required for the DefineExpression API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DefineIndexField">DefineIndexField</a></code> | <code>string[]</code> | IAM actions required for the DefineIndexField API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DefineRankExpression">DefineRankExpression</a></code> | <code>string[]</code> | IAM actions required for the DefineRankExpression API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DefineSuggester">DefineSuggester</a></code> | <code>string[]</code> | IAM actions required for the DefineSuggester API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DeleteAnalysisScheme">DeleteAnalysisScheme</a></code> | <code>string[]</code> | IAM actions required for the DeleteAnalysisScheme API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DeleteDomain">DeleteDomain</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomain API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DeleteExpression">DeleteExpression</a></code> | <code>string[]</code> | IAM actions required for the DeleteExpression API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DeleteIndexField">DeleteIndexField</a></code> | <code>string[]</code> | IAM actions required for the DeleteIndexField API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DeleteRankExpression">DeleteRankExpression</a></code> | <code>string[]</code> | IAM actions required for the DeleteRankExpression API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DeleteSuggester">DeleteSuggester</a></code> | <code>string[]</code> | IAM actions required for the DeleteSuggester API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeAnalysisSchemes">DescribeAnalysisSchemes</a></code> | <code>string[]</code> | IAM actions required for the DescribeAnalysisSchemes API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeAvailabilityOptions">DescribeAvailabilityOptions</a></code> | <code>string[]</code> | IAM actions required for the DescribeAvailabilityOptions API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeDefaultSearchField">DescribeDefaultSearchField</a></code> | <code>string[]</code> | IAM actions required for the DescribeDefaultSearchField API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeDomainEndpointOptions">DescribeDomainEndpointOptions</a></code> | <code>string[]</code> | IAM actions required for the DescribeDomainEndpointOptions API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeDomains">DescribeDomains</a></code> | <code>string[]</code> | IAM actions required for the DescribeDomains API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeExpressions">DescribeExpressions</a></code> | <code>string[]</code> | IAM actions required for the DescribeExpressions API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeIndexFields">DescribeIndexFields</a></code> | <code>string[]</code> | IAM actions required for the DescribeIndexFields API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeRankExpressions">DescribeRankExpressions</a></code> | <code>string[]</code> | IAM actions required for the DescribeRankExpressions API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeScalingParameters">DescribeScalingParameters</a></code> | <code>string[]</code> | IAM actions required for the DescribeScalingParameters API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeServiceAccessPolicies">DescribeServiceAccessPolicies</a></code> | <code>string[]</code> | IAM actions required for the DescribeServiceAccessPolicies API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeStemmingOptions">DescribeStemmingOptions</a></code> | <code>string[]</code> | IAM actions required for the DescribeStemmingOptions API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeStopwordOptions">DescribeStopwordOptions</a></code> | <code>string[]</code> | IAM actions required for the DescribeStopwordOptions API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeSuggesters">DescribeSuggesters</a></code> | <code>string[]</code> | IAM actions required for the DescribeSuggesters API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeSynonymOptions">DescribeSynonymOptions</a></code> | <code>string[]</code> | IAM actions required for the DescribeSynonymOptions API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.IndexDocuments">IndexDocuments</a></code> | <code>string[]</code> | IAM actions required for the IndexDocuments API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.ListDomainNames">ListDomainNames</a></code> | <code>string[]</code> | IAM actions required for the ListDomainNames API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.Search">Search</a></code> | <code>string[]</code> | IAM actions required for the Search API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.Suggest">Suggest</a></code> | <code>string[]</code> | IAM actions required for the Suggest API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.UpdateAvailabilityOptions">UpdateAvailabilityOptions</a></code> | <code>string[]</code> | IAM actions required for the UpdateAvailabilityOptions API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.UpdateDefaultSearchField">UpdateDefaultSearchField</a></code> | <code>string[]</code> | IAM actions required for the UpdateDefaultSearchField API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.UpdateDomainEndpointOptions">UpdateDomainEndpointOptions</a></code> | <code>string[]</code> | IAM actions required for the UpdateDomainEndpointOptions API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.UpdateScalingParameters">UpdateScalingParameters</a></code> | <code>string[]</code> | IAM actions required for the UpdateScalingParameters API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.UpdateServiceAccessPolicies">UpdateServiceAccessPolicies</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceAccessPolicies API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.UpdateStemmingOptions">UpdateStemmingOptions</a></code> | <code>string[]</code> | IAM actions required for the UpdateStemmingOptions API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.UpdateStopwordOptions">UpdateStopwordOptions</a></code> | <code>string[]</code> | IAM actions required for the UpdateStopwordOptions API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.UpdateSynonymOptions">UpdateSynonymOptions</a></code> | <code>string[]</code> | IAM actions required for the UpdateSynonymOptions API call. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.UploadDocuments">UploadDocuments</a></code> | <code>string[]</code> | IAM actions required for the UploadDocuments API call. |

---

##### `BuildSuggesters`<sup>Required</sup> <a name="BuildSuggesters" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.BuildSuggesters"></a>

```typescript
public readonly BuildSuggesters: string[];
```

- *Type:* string[]

IAM actions required for the BuildSuggesters API call.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string[];
```

- *Type:* string[]

IAM actions required for the CreateDomain API call.

---

##### `DefineAnalysisScheme`<sup>Required</sup> <a name="DefineAnalysisScheme" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DefineAnalysisScheme"></a>

```typescript
public readonly DefineAnalysisScheme: string[];
```

- *Type:* string[]

IAM actions required for the DefineAnalysisScheme API call.

---

##### `DefineExpression`<sup>Required</sup> <a name="DefineExpression" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DefineExpression"></a>

```typescript
public readonly DefineExpression: string[];
```

- *Type:* string[]

IAM actions required for the DefineExpression API call.

---

##### `DefineIndexField`<sup>Required</sup> <a name="DefineIndexField" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DefineIndexField"></a>

```typescript
public readonly DefineIndexField: string[];
```

- *Type:* string[]

IAM actions required for the DefineIndexField API call.

---

##### `DefineRankExpression`<sup>Required</sup> <a name="DefineRankExpression" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DefineRankExpression"></a>

```typescript
public readonly DefineRankExpression: string[];
```

- *Type:* string[]

IAM actions required for the DefineRankExpression API call.

---

##### `DefineSuggester`<sup>Required</sup> <a name="DefineSuggester" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DefineSuggester"></a>

```typescript
public readonly DefineSuggester: string[];
```

- *Type:* string[]

IAM actions required for the DefineSuggester API call.

---

##### `DeleteAnalysisScheme`<sup>Required</sup> <a name="DeleteAnalysisScheme" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DeleteAnalysisScheme"></a>

```typescript
public readonly DeleteAnalysisScheme: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAnalysisScheme API call.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomain API call.

---

##### `DeleteExpression`<sup>Required</sup> <a name="DeleteExpression" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DeleteExpression"></a>

```typescript
public readonly DeleteExpression: string[];
```

- *Type:* string[]

IAM actions required for the DeleteExpression API call.

---

##### `DeleteIndexField`<sup>Required</sup> <a name="DeleteIndexField" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DeleteIndexField"></a>

```typescript
public readonly DeleteIndexField: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIndexField API call.

---

##### `DeleteRankExpression`<sup>Required</sup> <a name="DeleteRankExpression" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DeleteRankExpression"></a>

```typescript
public readonly DeleteRankExpression: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRankExpression API call.

---

##### `DeleteSuggester`<sup>Required</sup> <a name="DeleteSuggester" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DeleteSuggester"></a>

```typescript
public readonly DeleteSuggester: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSuggester API call.

---

##### `DescribeAnalysisSchemes`<sup>Required</sup> <a name="DescribeAnalysisSchemes" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeAnalysisSchemes"></a>

```typescript
public readonly DescribeAnalysisSchemes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAnalysisSchemes API call.

---

##### `DescribeAvailabilityOptions`<sup>Required</sup> <a name="DescribeAvailabilityOptions" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeAvailabilityOptions"></a>

```typescript
public readonly DescribeAvailabilityOptions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAvailabilityOptions API call.

---

##### `DescribeDefaultSearchField`<sup>Required</sup> <a name="DescribeDefaultSearchField" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeDefaultSearchField"></a>

```typescript
public readonly DescribeDefaultSearchField: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDefaultSearchField API call.

---

##### `DescribeDomainEndpointOptions`<sup>Required</sup> <a name="DescribeDomainEndpointOptions" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeDomainEndpointOptions"></a>

```typescript
public readonly DescribeDomainEndpointOptions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDomainEndpointOptions API call.

---

##### `DescribeDomains`<sup>Required</sup> <a name="DescribeDomains" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeDomains"></a>

```typescript
public readonly DescribeDomains: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDomains API call.

---

##### `DescribeExpressions`<sup>Required</sup> <a name="DescribeExpressions" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeExpressions"></a>

```typescript
public readonly DescribeExpressions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeExpressions API call.

---

##### `DescribeIndexFields`<sup>Required</sup> <a name="DescribeIndexFields" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeIndexFields"></a>

```typescript
public readonly DescribeIndexFields: string[];
```

- *Type:* string[]

IAM actions required for the DescribeIndexFields API call.

---

##### `DescribeRankExpressions`<sup>Required</sup> <a name="DescribeRankExpressions" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeRankExpressions"></a>

```typescript
public readonly DescribeRankExpressions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRankExpressions API call.

---

##### `DescribeScalingParameters`<sup>Required</sup> <a name="DescribeScalingParameters" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeScalingParameters"></a>

```typescript
public readonly DescribeScalingParameters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeScalingParameters API call.

---

##### `DescribeServiceAccessPolicies`<sup>Required</sup> <a name="DescribeServiceAccessPolicies" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeServiceAccessPolicies"></a>

```typescript
public readonly DescribeServiceAccessPolicies: string[];
```

- *Type:* string[]

IAM actions required for the DescribeServiceAccessPolicies API call.

---

##### `DescribeStemmingOptions`<sup>Required</sup> <a name="DescribeStemmingOptions" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeStemmingOptions"></a>

```typescript
public readonly DescribeStemmingOptions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStemmingOptions API call.

---

##### `DescribeStopwordOptions`<sup>Required</sup> <a name="DescribeStopwordOptions" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeStopwordOptions"></a>

```typescript
public readonly DescribeStopwordOptions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStopwordOptions API call.

---

##### `DescribeSuggesters`<sup>Required</sup> <a name="DescribeSuggesters" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeSuggesters"></a>

```typescript
public readonly DescribeSuggesters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSuggesters API call.

---

##### `DescribeSynonymOptions`<sup>Required</sup> <a name="DescribeSynonymOptions" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.DescribeSynonymOptions"></a>

```typescript
public readonly DescribeSynonymOptions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSynonymOptions API call.

---

##### `IndexDocuments`<sup>Required</sup> <a name="IndexDocuments" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.IndexDocuments"></a>

```typescript
public readonly IndexDocuments: string[];
```

- *Type:* string[]

IAM actions required for the IndexDocuments API call.

---

##### `ListDomainNames`<sup>Required</sup> <a name="ListDomainNames" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.ListDomainNames"></a>

```typescript
public readonly ListDomainNames: string[];
```

- *Type:* string[]

IAM actions required for the ListDomainNames API call.

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.Search"></a>

```typescript
public readonly Search: string[];
```

- *Type:* string[]

IAM actions required for the Search API call.

---

##### `Suggest`<sup>Required</sup> <a name="Suggest" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.Suggest"></a>

```typescript
public readonly Suggest: string[];
```

- *Type:* string[]

IAM actions required for the Suggest API call.

---

##### `UpdateAvailabilityOptions`<sup>Required</sup> <a name="UpdateAvailabilityOptions" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.UpdateAvailabilityOptions"></a>

```typescript
public readonly UpdateAvailabilityOptions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAvailabilityOptions API call.

---

##### `UpdateDefaultSearchField`<sup>Required</sup> <a name="UpdateDefaultSearchField" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.UpdateDefaultSearchField"></a>

```typescript
public readonly UpdateDefaultSearchField: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDefaultSearchField API call.

---

##### `UpdateDomainEndpointOptions`<sup>Required</sup> <a name="UpdateDomainEndpointOptions" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.UpdateDomainEndpointOptions"></a>

```typescript
public readonly UpdateDomainEndpointOptions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDomainEndpointOptions API call.

---

##### `UpdateScalingParameters`<sup>Required</sup> <a name="UpdateScalingParameters" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.UpdateScalingParameters"></a>

```typescript
public readonly UpdateScalingParameters: string[];
```

- *Type:* string[]

IAM actions required for the UpdateScalingParameters API call.

---

##### `UpdateServiceAccessPolicies`<sup>Required</sup> <a name="UpdateServiceAccessPolicies" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.UpdateServiceAccessPolicies"></a>

```typescript
public readonly UpdateServiceAccessPolicies: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceAccessPolicies API call.

---

##### `UpdateStemmingOptions`<sup>Required</sup> <a name="UpdateStemmingOptions" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.UpdateStemmingOptions"></a>

```typescript
public readonly UpdateStemmingOptions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStemmingOptions API call.

---

##### `UpdateStopwordOptions`<sup>Required</sup> <a name="UpdateStopwordOptions" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.UpdateStopwordOptions"></a>

```typescript
public readonly UpdateStopwordOptions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStopwordOptions API call.

---

##### `UpdateSynonymOptions`<sup>Required</sup> <a name="UpdateSynonymOptions" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.UpdateSynonymOptions"></a>

```typescript
public readonly UpdateSynonymOptions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSynonymOptions API call.

---

##### `UploadDocuments`<sup>Required</sup> <a name="UploadDocuments" id="@cdk_utils/iam.cloudsearch.CloudSearchOperations.property.UploadDocuments"></a>

```typescript
public readonly UploadDocuments: string[];
```

- *Type:* string[]

IAM actions required for the UploadDocuments API call.

---

### CloudSearchResources <a name="CloudSearchResources" id="@cdk_utils/iam.cloudsearch.CloudSearchResources"></a>

ARN builders, validators, and parsers for cloudsearch resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudsearch.CloudSearchResources.Initializer"></a>

```typescript
import { cloudsearch } from '@cdk_utils/iam'

new cloudsearch.CloudSearchResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchResources.domain">domain</a></code> | Builds an ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchResources.isValidDomainArn">isValidDomainArn</a></code> | Validates whether a string is a valid ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.cloudsearch.CloudSearchResources.parseDomainArn">parseDomainArn</a></code> | Parses a domain ARN into its components. |

---

##### `domain` <a name="domain" id="@cdk_utils/iam.cloudsearch.CloudSearchResources.domain"></a>

```typescript
import { cloudsearch } from '@cdk_utils/iam'

cloudsearch.CloudSearchResources.domain(props: CloudSearchDomainArnProps)
```

Builds an ARN for the domain resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudsearch.CloudSearchResources.domain.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudsearch.CloudSearchDomainArnProps">CloudSearchDomainArnProps</a>

---

##### `isValidDomainArn` <a name="isValidDomainArn" id="@cdk_utils/iam.cloudsearch.CloudSearchResources.isValidDomainArn"></a>

```typescript
import { cloudsearch } from '@cdk_utils/iam'

cloudsearch.CloudSearchResources.isValidDomainArn(arn: string)
```

Validates whether a string is a valid ARN for the domain resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudsearch.CloudSearchResources.isValidDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainArn` <a name="parseDomainArn" id="@cdk_utils/iam.cloudsearch.CloudSearchResources.parseDomainArn"></a>

```typescript
import { cloudsearch } from '@cdk_utils/iam'

cloudsearch.CloudSearchResources.parseDomainArn(arn: string)
```

Parses a domain ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudsearch.CloudSearchResources.parseDomainArn.parameter.arn"></a>

- *Type:* string

---




