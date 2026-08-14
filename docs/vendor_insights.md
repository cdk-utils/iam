# `vendor_insights` Submodule <a name="`vendor_insights` Submodule" id="@cdk_utils/iam.vendor_insights"></a>


## Structs <a name="Structs" id="Structs"></a>

### VendorInsightsDataSourceArnComponents <a name="VendorInsightsDataSourceArnComponents" id="@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnComponents"></a>

Parsed components of a DataSource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnComponents.Initializer"></a>

```typescript
import { vendor_insights } from '@cdk_utils/iam'

const vendorInsightsDataSourceArnComponents: vendor_insights.VendorInsightsDataSourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### VendorInsightsDataSourceArnProps <a name="VendorInsightsDataSourceArnProps" id="@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnProps"></a>

Properties for building a DataSource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnProps.Initializer"></a>

```typescript
import { vendor_insights } from '@cdk_utils/iam'

const vendorInsightsDataSourceArnProps: vendor_insights.VendorInsightsDataSourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### VendorInsightsSecurityProfileArnComponents <a name="VendorInsightsSecurityProfileArnComponents" id="@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnComponents"></a>

Parsed components of a SecurityProfile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnComponents.Initializer"></a>

```typescript
import { vendor_insights } from '@cdk_utils/iam'

const vendorInsightsSecurityProfileArnComponents: vendor_insights.VendorInsightsSecurityProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### VendorInsightsSecurityProfileArnProps <a name="VendorInsightsSecurityProfileArnProps" id="@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnProps"></a>

Properties for building a SecurityProfile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnProps.Initializer"></a>

```typescript
import { vendor_insights } from '@cdk_utils/iam'

const vendorInsightsSecurityProfileArnProps: vendor_insights.VendorInsightsSecurityProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### VendorInsightsActions <a name="VendorInsightsActions" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions"></a>

IAM action constants for the vendor-insights service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.Initializer"></a>

```typescript
import { vendor_insights } from '@cdk_utils/iam'

new vendor_insights.VendorInsightsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.actionGetDataSource">actionGetDataSource</a></code> | <code>string</code> | [Read] vendor-insights:GetDataSource. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.actionGetEntitledSecurityProfileSnapshot">actionGetEntitledSecurityProfileSnapshot</a></code> | <code>string</code> | [Read] vendor-insights:GetEntitledSecurityProfileSnapshot. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.actionGetProfileAccessTerms">actionGetProfileAccessTerms</a></code> | <code>string</code> | [Read] vendor-insights:GetProfileAccessTerms. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.actionGetSecurityProfile">actionGetSecurityProfile</a></code> | <code>string</code> | [Read] vendor-insights:GetSecurityProfile. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.actionGetSecurityProfileSnapshot">actionGetSecurityProfileSnapshot</a></code> | <code>string</code> | [Read] vendor-insights:GetSecurityProfileSnapshot. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.ActivateSecurityProfile">ActivateSecurityProfile</a></code> | <code>string</code> | [Write] vendor-insights:ActivateSecurityProfile. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.AssociateDataSource">AssociateDataSource</a></code> | <code>string</code> | [Write] vendor-insights:AssociateDataSource. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.CreateDataSource">CreateDataSource</a></code> | <code>string</code> | [Write] vendor-insights:CreateDataSource. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.CreateSecurityProfile">CreateSecurityProfile</a></code> | <code>string</code> | [Write] vendor-insights:CreateSecurityProfile. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.DeactivateSecurityProfile">DeactivateSecurityProfile</a></code> | <code>string</code> | [Write] vendor-insights:DeactivateSecurityProfile. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.DeleteDataSource">DeleteDataSource</a></code> | <code>string</code> | [Write] vendor-insights:DeleteDataSource. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.DisassociateDataSource">DisassociateDataSource</a></code> | <code>string</code> | [Write] vendor-insights:DisassociateDataSource. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.ListDataSources">ListDataSources</a></code> | <code>string</code> | [List] vendor-insights:ListDataSources. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.ListEntitledSecurityProfiles">ListEntitledSecurityProfiles</a></code> | <code>string</code> | [List] vendor-insights:ListEntitledSecurityProfiles. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.ListEntitledSecurityProfileSnapshots">ListEntitledSecurityProfileSnapshots</a></code> | <code>string</code> | [List] vendor-insights:ListEntitledSecurityProfileSnapshots. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.ListSecurityProfiles">ListSecurityProfiles</a></code> | <code>string</code> | [List] vendor-insights:ListSecurityProfiles. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.ListSecurityProfileSnapshots">ListSecurityProfileSnapshots</a></code> | <code>string</code> | [List] vendor-insights:ListSecurityProfileSnapshots. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] vendor-insights:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] vendor-insights:TagResource. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] vendor-insights:UntagResource. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.UpdateDataSource">UpdateDataSource</a></code> | <code>string</code> | [Write] vendor-insights:UpdateDataSource. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.UpdateSecurityProfile">UpdateSecurityProfile</a></code> | <code>string</code> | [Write] vendor-insights:UpdateSecurityProfile. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.UpdateSecurityProfileSnapshotCreationConfiguration">UpdateSecurityProfileSnapshotCreationConfiguration</a></code> | <code>string</code> | [Write] vendor-insights:UpdateSecurityProfileSnapshotCreationConfiguration. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.UpdateSecurityProfileSnapshotReleaseConfiguration">UpdateSecurityProfileSnapshotReleaseConfiguration</a></code> | <code>string</code> | [Write] vendor-insights:UpdateSecurityProfileSnapshotReleaseConfiguration. |

---

##### `actionGetDataSource`<sup>Required</sup> <a name="actionGetDataSource" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.actionGetDataSource"></a>

```typescript
public readonly actionGetDataSource: string;
```

- *Type:* string

[Read] vendor-insights:GetDataSource.

---

##### `actionGetEntitledSecurityProfileSnapshot`<sup>Required</sup> <a name="actionGetEntitledSecurityProfileSnapshot" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.actionGetEntitledSecurityProfileSnapshot"></a>

```typescript
public readonly actionGetEntitledSecurityProfileSnapshot: string;
```

- *Type:* string

[Read] vendor-insights:GetEntitledSecurityProfileSnapshot.

---

##### `actionGetProfileAccessTerms`<sup>Required</sup> <a name="actionGetProfileAccessTerms" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.actionGetProfileAccessTerms"></a>

```typescript
public readonly actionGetProfileAccessTerms: string;
```

- *Type:* string

[Read] vendor-insights:GetProfileAccessTerms.

---

##### `actionGetSecurityProfile`<sup>Required</sup> <a name="actionGetSecurityProfile" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.actionGetSecurityProfile"></a>

```typescript
public readonly actionGetSecurityProfile: string;
```

- *Type:* string

[Read] vendor-insights:GetSecurityProfile.

---

##### `actionGetSecurityProfileSnapshot`<sup>Required</sup> <a name="actionGetSecurityProfileSnapshot" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.actionGetSecurityProfileSnapshot"></a>

```typescript
public readonly actionGetSecurityProfileSnapshot: string;
```

- *Type:* string

[Read] vendor-insights:GetSecurityProfileSnapshot.

---

##### `ActivateSecurityProfile`<sup>Required</sup> <a name="ActivateSecurityProfile" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.ActivateSecurityProfile"></a>

```typescript
public readonly ActivateSecurityProfile: string;
```

- *Type:* string

[Write] vendor-insights:ActivateSecurityProfile.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateDataSource`<sup>Required</sup> <a name="AssociateDataSource" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.AssociateDataSource"></a>

```typescript
public readonly AssociateDataSource: string;
```

- *Type:* string

[Write] vendor-insights:AssociateDataSource.

---

##### `CreateDataSource`<sup>Required</sup> <a name="CreateDataSource" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.CreateDataSource"></a>

```typescript
public readonly CreateDataSource: string;
```

- *Type:* string

[Write] vendor-insights:CreateDataSource.

---

##### `CreateSecurityProfile`<sup>Required</sup> <a name="CreateSecurityProfile" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.CreateSecurityProfile"></a>

```typescript
public readonly CreateSecurityProfile: string;
```

- *Type:* string

[Write] vendor-insights:CreateSecurityProfile.

---

##### `DeactivateSecurityProfile`<sup>Required</sup> <a name="DeactivateSecurityProfile" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.DeactivateSecurityProfile"></a>

```typescript
public readonly DeactivateSecurityProfile: string;
```

- *Type:* string

[Write] vendor-insights:DeactivateSecurityProfile.

---

##### `DeleteDataSource`<sup>Required</sup> <a name="DeleteDataSource" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.DeleteDataSource"></a>

```typescript
public readonly DeleteDataSource: string;
```

- *Type:* string

[Write] vendor-insights:DeleteDataSource.

---

##### `DisassociateDataSource`<sup>Required</sup> <a name="DisassociateDataSource" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.DisassociateDataSource"></a>

```typescript
public readonly DisassociateDataSource: string;
```

- *Type:* string

[Write] vendor-insights:DisassociateDataSource.

---

##### `ListDataSources`<sup>Required</sup> <a name="ListDataSources" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.ListDataSources"></a>

```typescript
public readonly ListDataSources: string;
```

- *Type:* string

[List] vendor-insights:ListDataSources.

---

##### `ListEntitledSecurityProfiles`<sup>Required</sup> <a name="ListEntitledSecurityProfiles" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.ListEntitledSecurityProfiles"></a>

```typescript
public readonly ListEntitledSecurityProfiles: string;
```

- *Type:* string

[List] vendor-insights:ListEntitledSecurityProfiles.

---

##### `ListEntitledSecurityProfileSnapshots`<sup>Required</sup> <a name="ListEntitledSecurityProfileSnapshots" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.ListEntitledSecurityProfileSnapshots"></a>

```typescript
public readonly ListEntitledSecurityProfileSnapshots: string;
```

- *Type:* string

[List] vendor-insights:ListEntitledSecurityProfileSnapshots.

---

##### `ListSecurityProfiles`<sup>Required</sup> <a name="ListSecurityProfiles" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.ListSecurityProfiles"></a>

```typescript
public readonly ListSecurityProfiles: string;
```

- *Type:* string

[List] vendor-insights:ListSecurityProfiles.

---

##### `ListSecurityProfileSnapshots`<sup>Required</sup> <a name="ListSecurityProfileSnapshots" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.ListSecurityProfileSnapshots"></a>

```typescript
public readonly ListSecurityProfileSnapshots: string;
```

- *Type:* string

[List] vendor-insights:ListSecurityProfileSnapshots.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] vendor-insights:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] vendor-insights:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] vendor-insights:UntagResource.

---

##### `UpdateDataSource`<sup>Required</sup> <a name="UpdateDataSource" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.UpdateDataSource"></a>

```typescript
public readonly UpdateDataSource: string;
```

- *Type:* string

[Write] vendor-insights:UpdateDataSource.

---

##### `UpdateSecurityProfile`<sup>Required</sup> <a name="UpdateSecurityProfile" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.UpdateSecurityProfile"></a>

```typescript
public readonly UpdateSecurityProfile: string;
```

- *Type:* string

[Write] vendor-insights:UpdateSecurityProfile.

---

##### `UpdateSecurityProfileSnapshotCreationConfiguration`<sup>Required</sup> <a name="UpdateSecurityProfileSnapshotCreationConfiguration" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.UpdateSecurityProfileSnapshotCreationConfiguration"></a>

```typescript
public readonly UpdateSecurityProfileSnapshotCreationConfiguration: string;
```

- *Type:* string

[Write] vendor-insights:UpdateSecurityProfileSnapshotCreationConfiguration.

---

##### `UpdateSecurityProfileSnapshotReleaseConfiguration`<sup>Required</sup> <a name="UpdateSecurityProfileSnapshotReleaseConfiguration" id="@cdk_utils/iam.vendor_insights.VendorInsightsActions.property.UpdateSecurityProfileSnapshotReleaseConfiguration"></a>

```typescript
public readonly UpdateSecurityProfileSnapshotReleaseConfiguration: string;
```

- *Type:* string

[Write] vendor-insights:UpdateSecurityProfileSnapshotReleaseConfiguration.

---

### VendorInsightsConditions <a name="VendorInsightsConditions" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions"></a>

Condition key constants and builders for vendor-insights.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.Initializer"></a>

```typescript
import { vendor_insights } from '@cdk_utils/iam'

new vendor_insights.VendorInsightsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.requestTag"></a>

```typescript
import { vendor_insights } from '@cdk_utils/iam'

vendor_insights.VendorInsightsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.resourceTag"></a>

```typescript
import { vendor_insights } from '@cdk_utils/iam'

vendor_insights.VendorInsightsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.tagKeys"></a>

```typescript
import { vendor_insights } from '@cdk_utils/iam'

vendor_insights.VendorInsightsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.actionGetDataSourceConditionKeys">actionGetDataSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDataSource action. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.actionGetSecurityProfileConditionKeys">actionGetSecurityProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSecurityProfile action. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.actionGetSecurityProfileSnapshotConditionKeys">actionGetSecurityProfileSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSecurityProfileSnapshot action. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.ActivateSecurityProfileConditionKeys">ActivateSecurityProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ActivateSecurityProfile action. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.AssociateDataSourceConditionKeys">AssociateDataSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateDataSource action. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.CreateDataSourceConditionKeys">CreateDataSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataSource action. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.CreateSecurityProfileConditionKeys">CreateSecurityProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSecurityProfile action. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.DeactivateSecurityProfileConditionKeys">DeactivateSecurityProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeactivateSecurityProfile action. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.DeleteDataSourceConditionKeys">DeleteDataSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteDataSource action. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.DisassociateDataSourceConditionKeys">DisassociateDataSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateDataSource action. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.ListSecurityProfileSnapshotsConditionKeys">ListSecurityProfileSnapshotsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSecurityProfileSnapshots action. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.UpdateDataSourceConditionKeys">UpdateDataSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDataSource action. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.UpdateSecurityProfileConditionKeys">UpdateSecurityProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSecurityProfile action. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.UpdateSecurityProfileSnapshotCreationConfigurationConditionKeys">UpdateSecurityProfileSnapshotCreationConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSecurityProfileSnapshotCreationConfiguration action. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.UpdateSecurityProfileSnapshotReleaseConfigurationConditionKeys">UpdateSecurityProfileSnapshotReleaseConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSecurityProfileSnapshotReleaseConfiguration action. |

---

##### `actionGetDataSourceConditionKeys`<sup>Required</sup> <a name="actionGetDataSourceConditionKeys" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.actionGetDataSourceConditionKeys"></a>

```typescript
public readonly actionGetDataSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDataSource action.

---

##### `actionGetSecurityProfileConditionKeys`<sup>Required</sup> <a name="actionGetSecurityProfileConditionKeys" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.actionGetSecurityProfileConditionKeys"></a>

```typescript
public readonly actionGetSecurityProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSecurityProfile action.

---

##### `actionGetSecurityProfileSnapshotConditionKeys`<sup>Required</sup> <a name="actionGetSecurityProfileSnapshotConditionKeys" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.actionGetSecurityProfileSnapshotConditionKeys"></a>

```typescript
public readonly actionGetSecurityProfileSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSecurityProfileSnapshot action.

---

##### `ActivateSecurityProfileConditionKeys`<sup>Required</sup> <a name="ActivateSecurityProfileConditionKeys" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.ActivateSecurityProfileConditionKeys"></a>

```typescript
public readonly ActivateSecurityProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ActivateSecurityProfile action.

---

##### `AssociateDataSourceConditionKeys`<sup>Required</sup> <a name="AssociateDataSourceConditionKeys" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.AssociateDataSourceConditionKeys"></a>

```typescript
public readonly AssociateDataSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateDataSource action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDataSourceConditionKeys`<sup>Required</sup> <a name="CreateDataSourceConditionKeys" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.CreateDataSourceConditionKeys"></a>

```typescript
public readonly CreateDataSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataSource action.

---

##### `CreateSecurityProfileConditionKeys`<sup>Required</sup> <a name="CreateSecurityProfileConditionKeys" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.CreateSecurityProfileConditionKeys"></a>

```typescript
public readonly CreateSecurityProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSecurityProfile action.

---

##### `DeactivateSecurityProfileConditionKeys`<sup>Required</sup> <a name="DeactivateSecurityProfileConditionKeys" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.DeactivateSecurityProfileConditionKeys"></a>

```typescript
public readonly DeactivateSecurityProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeactivateSecurityProfile action.

---

##### `DeleteDataSourceConditionKeys`<sup>Required</sup> <a name="DeleteDataSourceConditionKeys" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.DeleteDataSourceConditionKeys"></a>

```typescript
public readonly DeleteDataSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteDataSource action.

---

##### `DisassociateDataSourceConditionKeys`<sup>Required</sup> <a name="DisassociateDataSourceConditionKeys" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.DisassociateDataSourceConditionKeys"></a>

```typescript
public readonly DisassociateDataSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateDataSource action.

---

##### `ListSecurityProfileSnapshotsConditionKeys`<sup>Required</sup> <a name="ListSecurityProfileSnapshotsConditionKeys" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.ListSecurityProfileSnapshotsConditionKeys"></a>

```typescript
public readonly ListSecurityProfileSnapshotsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSecurityProfileSnapshots action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateDataSourceConditionKeys`<sup>Required</sup> <a name="UpdateDataSourceConditionKeys" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.UpdateDataSourceConditionKeys"></a>

```typescript
public readonly UpdateDataSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDataSource action.

---

##### `UpdateSecurityProfileConditionKeys`<sup>Required</sup> <a name="UpdateSecurityProfileConditionKeys" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.UpdateSecurityProfileConditionKeys"></a>

```typescript
public readonly UpdateSecurityProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSecurityProfile action.

---

##### `UpdateSecurityProfileSnapshotCreationConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateSecurityProfileSnapshotCreationConfigurationConditionKeys" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.UpdateSecurityProfileSnapshotCreationConfigurationConditionKeys"></a>

```typescript
public readonly UpdateSecurityProfileSnapshotCreationConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSecurityProfileSnapshotCreationConfiguration action.

---

##### `UpdateSecurityProfileSnapshotReleaseConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateSecurityProfileSnapshotReleaseConfigurationConditionKeys" id="@cdk_utils/iam.vendor_insights.VendorInsightsConditions.property.UpdateSecurityProfileSnapshotReleaseConfigurationConditionKeys"></a>

```typescript
public readonly UpdateSecurityProfileSnapshotReleaseConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSecurityProfileSnapshotReleaseConfiguration action.

---

### VendorInsightsResources <a name="VendorInsightsResources" id="@cdk_utils/iam.vendor_insights.VendorInsightsResources"></a>

ARN builders, validators, and parsers for vendor-insights resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.vendor_insights.VendorInsightsResources.Initializer"></a>

```typescript
import { vendor_insights } from '@cdk_utils/iam'

new vendor_insights.VendorInsightsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsResources.dataSource">dataSource</a></code> | Builds an ARN for the DataSource resource. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsResources.isValidDataSourceArn">isValidDataSourceArn</a></code> | Validates whether a string is a valid ARN for the DataSource resource. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsResources.isValidSecurityProfileArn">isValidSecurityProfileArn</a></code> | Validates whether a string is a valid ARN for the SecurityProfile resource. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsResources.parseDataSourceArn">parseDataSourceArn</a></code> | Parses a DataSource ARN into its components. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsResources.parseSecurityProfileArn">parseSecurityProfileArn</a></code> | Parses a SecurityProfile ARN into its components. |
| <code><a href="#@cdk_utils/iam.vendor_insights.VendorInsightsResources.securityProfile">securityProfile</a></code> | Builds an ARN for the SecurityProfile resource. |

---

##### `dataSource` <a name="dataSource" id="@cdk_utils/iam.vendor_insights.VendorInsightsResources.dataSource"></a>

```typescript
import { vendor_insights } from '@cdk_utils/iam'

vendor_insights.VendorInsightsResources.dataSource(props: VendorInsightsDataSourceArnProps)
```

Builds an ARN for the DataSource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.vendor_insights.VendorInsightsResources.dataSource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.vendor_insights.VendorInsightsDataSourceArnProps">VendorInsightsDataSourceArnProps</a>

---

##### `isValidDataSourceArn` <a name="isValidDataSourceArn" id="@cdk_utils/iam.vendor_insights.VendorInsightsResources.isValidDataSourceArn"></a>

```typescript
import { vendor_insights } from '@cdk_utils/iam'

vendor_insights.VendorInsightsResources.isValidDataSourceArn(arn: string)
```

Validates whether a string is a valid ARN for the DataSource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vendor_insights.VendorInsightsResources.isValidDataSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSecurityProfileArn` <a name="isValidSecurityProfileArn" id="@cdk_utils/iam.vendor_insights.VendorInsightsResources.isValidSecurityProfileArn"></a>

```typescript
import { vendor_insights } from '@cdk_utils/iam'

vendor_insights.VendorInsightsResources.isValidSecurityProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the SecurityProfile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vendor_insights.VendorInsightsResources.isValidSecurityProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataSourceArn` <a name="parseDataSourceArn" id="@cdk_utils/iam.vendor_insights.VendorInsightsResources.parseDataSourceArn"></a>

```typescript
import { vendor_insights } from '@cdk_utils/iam'

vendor_insights.VendorInsightsResources.parseDataSourceArn(arn: string)
```

Parses a DataSource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vendor_insights.VendorInsightsResources.parseDataSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSecurityProfileArn` <a name="parseSecurityProfileArn" id="@cdk_utils/iam.vendor_insights.VendorInsightsResources.parseSecurityProfileArn"></a>

```typescript
import { vendor_insights } from '@cdk_utils/iam'

vendor_insights.VendorInsightsResources.parseSecurityProfileArn(arn: string)
```

Parses a SecurityProfile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vendor_insights.VendorInsightsResources.parseSecurityProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `securityProfile` <a name="securityProfile" id="@cdk_utils/iam.vendor_insights.VendorInsightsResources.securityProfile"></a>

```typescript
import { vendor_insights } from '@cdk_utils/iam'

vendor_insights.VendorInsightsResources.securityProfile(props: VendorInsightsSecurityProfileArnProps)
```

Builds an ARN for the SecurityProfile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.vendor_insights.VendorInsightsResources.securityProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.vendor_insights.VendorInsightsSecurityProfileArnProps">VendorInsightsSecurityProfileArnProps</a>

---




