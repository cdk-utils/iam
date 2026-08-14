# `worklink` Submodule <a name="`worklink` Submodule" id="@cdk_utils/iam.worklink"></a>


## Structs <a name="Structs" id="Structs"></a>

### WorklinkFleetArnComponents <a name="WorklinkFleetArnComponents" id="@cdk_utils/iam.worklink.WorklinkFleetArnComponents"></a>

Parsed components of a fleet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.worklink.WorklinkFleetArnComponents.Initializer"></a>

```typescript
import { worklink } from '@cdk_utils/iam'

const worklinkFleetArnComponents: worklink.WorklinkFleetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkFleetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkFleetArnComponents.property.fleetName">fleetName</a></code> | <code>string</code> | The FleetName component. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkFleetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.worklink.WorklinkFleetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fleetName`<sup>Required</sup> <a name="fleetName" id="@cdk_utils/iam.worklink.WorklinkFleetArnComponents.property.fleetName"></a>

```typescript
public readonly fleetName: string;
```

- *Type:* string

The FleetName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.worklink.WorklinkFleetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### WorklinkFleetArnProps <a name="WorklinkFleetArnProps" id="@cdk_utils/iam.worklink.WorklinkFleetArnProps"></a>

Properties for building a fleet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.worklink.WorklinkFleetArnProps.Initializer"></a>

```typescript
import { worklink } from '@cdk_utils/iam'

const worklinkFleetArnProps: worklink.WorklinkFleetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkFleetArnProps.property.fleetName">fleetName</a></code> | <code>string</code> | The FleetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkFleetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkFleetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `fleetName`<sup>Required</sup> <a name="fleetName" id="@cdk_utils/iam.worklink.WorklinkFleetArnProps.property.fleetName"></a>

```typescript
public readonly fleetName: string;
```

- *Type:* string

The FleetName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.worklink.WorklinkFleetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.worklink.WorklinkFleetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### WorklinkActions <a name="WorklinkActions" id="@cdk_utils/iam.worklink.WorklinkActions"></a>

IAM action constants for the worklink service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.worklink.WorklinkActions.Initializer"></a>

```typescript
import { worklink } from '@cdk_utils/iam'

new worklink.WorklinkActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.AssociateDomain">AssociateDomain</a></code> | <code>string</code> | [Write] worklink:AssociateDomain. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.AssociateWebsiteAuthorizationProvider">AssociateWebsiteAuthorizationProvider</a></code> | <code>string</code> | [Write] worklink:AssociateWebsiteAuthorizationProvider. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.AssociateWebsiteCertificateAuthority">AssociateWebsiteCertificateAuthority</a></code> | <code>string</code> | [Write] worklink:AssociateWebsiteCertificateAuthority. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.CreateFleet">CreateFleet</a></code> | <code>string</code> | [Write] worklink:CreateFleet. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.DeleteFleet">DeleteFleet</a></code> | <code>string</code> | [Write] worklink:DeleteFleet. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.DescribeAuditStreamConfiguration">DescribeAuditStreamConfiguration</a></code> | <code>string</code> | [Read] worklink:DescribeAuditStreamConfiguration. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.DescribeCompanyNetworkConfiguration">DescribeCompanyNetworkConfiguration</a></code> | <code>string</code> | [Read] worklink:DescribeCompanyNetworkConfiguration. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.DescribeDevice">DescribeDevice</a></code> | <code>string</code> | [Read] worklink:DescribeDevice. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.DescribeDevicePolicyConfiguration">DescribeDevicePolicyConfiguration</a></code> | <code>string</code> | [Read] worklink:DescribeDevicePolicyConfiguration. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.DescribeDomain">DescribeDomain</a></code> | <code>string</code> | [Read] worklink:DescribeDomain. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.DescribeFleetMetadata">DescribeFleetMetadata</a></code> | <code>string</code> | [Read] worklink:DescribeFleetMetadata. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.DescribeIdentityProviderConfiguration">DescribeIdentityProviderConfiguration</a></code> | <code>string</code> | [Read] worklink:DescribeIdentityProviderConfiguration. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.DescribeWebsiteCertificateAuthority">DescribeWebsiteCertificateAuthority</a></code> | <code>string</code> | [Read] worklink:DescribeWebsiteCertificateAuthority. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.DisassociateDomain">DisassociateDomain</a></code> | <code>string</code> | [Write] worklink:DisassociateDomain. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.DisassociateWebsiteAuthorizationProvider">DisassociateWebsiteAuthorizationProvider</a></code> | <code>string</code> | [Write] worklink:DisassociateWebsiteAuthorizationProvider. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.DisassociateWebsiteCertificateAuthority">DisassociateWebsiteCertificateAuthority</a></code> | <code>string</code> | [Write] worklink:DisassociateWebsiteCertificateAuthority. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.ListDevices">ListDevices</a></code> | <code>string</code> | [List] worklink:ListDevices. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.ListDomains">ListDomains</a></code> | <code>string</code> | [List] worklink:ListDomains. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.ListFleets">ListFleets</a></code> | <code>string</code> | [List] worklink:ListFleets. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] worklink:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.ListWebsiteAuthorizationProviders">ListWebsiteAuthorizationProviders</a></code> | <code>string</code> | [List] worklink:ListWebsiteAuthorizationProviders. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.ListWebsiteCertificateAuthorities">ListWebsiteCertificateAuthorities</a></code> | <code>string</code> | [List] worklink:ListWebsiteCertificateAuthorities. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.RestoreDomainAccess">RestoreDomainAccess</a></code> | <code>string</code> | [Write] worklink:RestoreDomainAccess. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.RevokeDomainAccess">RevokeDomainAccess</a></code> | <code>string</code> | [Write] worklink:RevokeDomainAccess. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.SearchEntity">SearchEntity</a></code> | <code>string</code> | [List] worklink:SearchEntity. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.SignOutUser">SignOutUser</a></code> | <code>string</code> | [Write] worklink:SignOutUser. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] worklink:TagResource. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] worklink:UntagResource. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.UpdateAuditStreamConfiguration">UpdateAuditStreamConfiguration</a></code> | <code>string</code> | [Write] worklink:UpdateAuditStreamConfiguration. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.UpdateCompanyNetworkConfiguration">UpdateCompanyNetworkConfiguration</a></code> | <code>string</code> | [Write] worklink:UpdateCompanyNetworkConfiguration. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.UpdateDevicePolicyConfiguration">UpdateDevicePolicyConfiguration</a></code> | <code>string</code> | [Write] worklink:UpdateDevicePolicyConfiguration. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.UpdateDomainMetadata">UpdateDomainMetadata</a></code> | <code>string</code> | [Write] worklink:UpdateDomainMetadata. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.UpdateFleetMetadata">UpdateFleetMetadata</a></code> | <code>string</code> | [Write] worklink:UpdateFleetMetadata. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkActions.property.UpdateIdentityProviderConfiguration">UpdateIdentityProviderConfiguration</a></code> | <code>string</code> | [Write] worklink:UpdateIdentityProviderConfiguration. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.worklink.WorklinkActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.worklink.WorklinkActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.worklink.WorklinkActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.worklink.WorklinkActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.worklink.WorklinkActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateDomain`<sup>Required</sup> <a name="AssociateDomain" id="@cdk_utils/iam.worklink.WorklinkActions.property.AssociateDomain"></a>

```typescript
public readonly AssociateDomain: string;
```

- *Type:* string

[Write] worklink:AssociateDomain.

---

##### `AssociateWebsiteAuthorizationProvider`<sup>Required</sup> <a name="AssociateWebsiteAuthorizationProvider" id="@cdk_utils/iam.worklink.WorklinkActions.property.AssociateWebsiteAuthorizationProvider"></a>

```typescript
public readonly AssociateWebsiteAuthorizationProvider: string;
```

- *Type:* string

[Write] worklink:AssociateWebsiteAuthorizationProvider.

---

##### `AssociateWebsiteCertificateAuthority`<sup>Required</sup> <a name="AssociateWebsiteCertificateAuthority" id="@cdk_utils/iam.worklink.WorklinkActions.property.AssociateWebsiteCertificateAuthority"></a>

```typescript
public readonly AssociateWebsiteCertificateAuthority: string;
```

- *Type:* string

[Write] worklink:AssociateWebsiteCertificateAuthority.

---

##### `CreateFleet`<sup>Required</sup> <a name="CreateFleet" id="@cdk_utils/iam.worklink.WorklinkActions.property.CreateFleet"></a>

```typescript
public readonly CreateFleet: string;
```

- *Type:* string

[Write] worklink:CreateFleet.

---

##### `DeleteFleet`<sup>Required</sup> <a name="DeleteFleet" id="@cdk_utils/iam.worklink.WorklinkActions.property.DeleteFleet"></a>

```typescript
public readonly DeleteFleet: string;
```

- *Type:* string

[Write] worklink:DeleteFleet.

---

##### `DescribeAuditStreamConfiguration`<sup>Required</sup> <a name="DescribeAuditStreamConfiguration" id="@cdk_utils/iam.worklink.WorklinkActions.property.DescribeAuditStreamConfiguration"></a>

```typescript
public readonly DescribeAuditStreamConfiguration: string;
```

- *Type:* string

[Read] worklink:DescribeAuditStreamConfiguration.

---

##### `DescribeCompanyNetworkConfiguration`<sup>Required</sup> <a name="DescribeCompanyNetworkConfiguration" id="@cdk_utils/iam.worklink.WorklinkActions.property.DescribeCompanyNetworkConfiguration"></a>

```typescript
public readonly DescribeCompanyNetworkConfiguration: string;
```

- *Type:* string

[Read] worklink:DescribeCompanyNetworkConfiguration.

---

##### `DescribeDevice`<sup>Required</sup> <a name="DescribeDevice" id="@cdk_utils/iam.worklink.WorklinkActions.property.DescribeDevice"></a>

```typescript
public readonly DescribeDevice: string;
```

- *Type:* string

[Read] worklink:DescribeDevice.

---

##### `DescribeDevicePolicyConfiguration`<sup>Required</sup> <a name="DescribeDevicePolicyConfiguration" id="@cdk_utils/iam.worklink.WorklinkActions.property.DescribeDevicePolicyConfiguration"></a>

```typescript
public readonly DescribeDevicePolicyConfiguration: string;
```

- *Type:* string

[Read] worklink:DescribeDevicePolicyConfiguration.

---

##### `DescribeDomain`<sup>Required</sup> <a name="DescribeDomain" id="@cdk_utils/iam.worklink.WorklinkActions.property.DescribeDomain"></a>

```typescript
public readonly DescribeDomain: string;
```

- *Type:* string

[Read] worklink:DescribeDomain.

---

##### `DescribeFleetMetadata`<sup>Required</sup> <a name="DescribeFleetMetadata" id="@cdk_utils/iam.worklink.WorklinkActions.property.DescribeFleetMetadata"></a>

```typescript
public readonly DescribeFleetMetadata: string;
```

- *Type:* string

[Read] worklink:DescribeFleetMetadata.

---

##### `DescribeIdentityProviderConfiguration`<sup>Required</sup> <a name="DescribeIdentityProviderConfiguration" id="@cdk_utils/iam.worklink.WorklinkActions.property.DescribeIdentityProviderConfiguration"></a>

```typescript
public readonly DescribeIdentityProviderConfiguration: string;
```

- *Type:* string

[Read] worklink:DescribeIdentityProviderConfiguration.

---

##### `DescribeWebsiteCertificateAuthority`<sup>Required</sup> <a name="DescribeWebsiteCertificateAuthority" id="@cdk_utils/iam.worklink.WorklinkActions.property.DescribeWebsiteCertificateAuthority"></a>

```typescript
public readonly DescribeWebsiteCertificateAuthority: string;
```

- *Type:* string

[Read] worklink:DescribeWebsiteCertificateAuthority.

---

##### `DisassociateDomain`<sup>Required</sup> <a name="DisassociateDomain" id="@cdk_utils/iam.worklink.WorklinkActions.property.DisassociateDomain"></a>

```typescript
public readonly DisassociateDomain: string;
```

- *Type:* string

[Write] worklink:DisassociateDomain.

---

##### `DisassociateWebsiteAuthorizationProvider`<sup>Required</sup> <a name="DisassociateWebsiteAuthorizationProvider" id="@cdk_utils/iam.worklink.WorklinkActions.property.DisassociateWebsiteAuthorizationProvider"></a>

```typescript
public readonly DisassociateWebsiteAuthorizationProvider: string;
```

- *Type:* string

[Write] worklink:DisassociateWebsiteAuthorizationProvider.

---

##### `DisassociateWebsiteCertificateAuthority`<sup>Required</sup> <a name="DisassociateWebsiteCertificateAuthority" id="@cdk_utils/iam.worklink.WorklinkActions.property.DisassociateWebsiteCertificateAuthority"></a>

```typescript
public readonly DisassociateWebsiteCertificateAuthority: string;
```

- *Type:* string

[Write] worklink:DisassociateWebsiteCertificateAuthority.

---

##### `ListDevices`<sup>Required</sup> <a name="ListDevices" id="@cdk_utils/iam.worklink.WorklinkActions.property.ListDevices"></a>

```typescript
public readonly ListDevices: string;
```

- *Type:* string

[List] worklink:ListDevices.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.worklink.WorklinkActions.property.ListDomains"></a>

```typescript
public readonly ListDomains: string;
```

- *Type:* string

[List] worklink:ListDomains.

---

##### `ListFleets`<sup>Required</sup> <a name="ListFleets" id="@cdk_utils/iam.worklink.WorklinkActions.property.ListFleets"></a>

```typescript
public readonly ListFleets: string;
```

- *Type:* string

[List] worklink:ListFleets.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.worklink.WorklinkActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] worklink:ListTagsForResource.

---

##### `ListWebsiteAuthorizationProviders`<sup>Required</sup> <a name="ListWebsiteAuthorizationProviders" id="@cdk_utils/iam.worklink.WorklinkActions.property.ListWebsiteAuthorizationProviders"></a>

```typescript
public readonly ListWebsiteAuthorizationProviders: string;
```

- *Type:* string

[List] worklink:ListWebsiteAuthorizationProviders.

---

##### `ListWebsiteCertificateAuthorities`<sup>Required</sup> <a name="ListWebsiteCertificateAuthorities" id="@cdk_utils/iam.worklink.WorklinkActions.property.ListWebsiteCertificateAuthorities"></a>

```typescript
public readonly ListWebsiteCertificateAuthorities: string;
```

- *Type:* string

[List] worklink:ListWebsiteCertificateAuthorities.

---

##### `RestoreDomainAccess`<sup>Required</sup> <a name="RestoreDomainAccess" id="@cdk_utils/iam.worklink.WorklinkActions.property.RestoreDomainAccess"></a>

```typescript
public readonly RestoreDomainAccess: string;
```

- *Type:* string

[Write] worklink:RestoreDomainAccess.

---

##### `RevokeDomainAccess`<sup>Required</sup> <a name="RevokeDomainAccess" id="@cdk_utils/iam.worklink.WorklinkActions.property.RevokeDomainAccess"></a>

```typescript
public readonly RevokeDomainAccess: string;
```

- *Type:* string

[Write] worklink:RevokeDomainAccess.

---

##### `SearchEntity`<sup>Required</sup> <a name="SearchEntity" id="@cdk_utils/iam.worklink.WorklinkActions.property.SearchEntity"></a>

```typescript
public readonly SearchEntity: string;
```

- *Type:* string

[List] worklink:SearchEntity.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.worklink.WorklinkActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SignOutUser`<sup>Required</sup> <a name="SignOutUser" id="@cdk_utils/iam.worklink.WorklinkActions.property.SignOutUser"></a>

```typescript
public readonly SignOutUser: string;
```

- *Type:* string

[Write] worklink:SignOutUser.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.worklink.WorklinkActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] worklink:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.worklink.WorklinkActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] worklink:UntagResource.

---

##### `UpdateAuditStreamConfiguration`<sup>Required</sup> <a name="UpdateAuditStreamConfiguration" id="@cdk_utils/iam.worklink.WorklinkActions.property.UpdateAuditStreamConfiguration"></a>

```typescript
public readonly UpdateAuditStreamConfiguration: string;
```

- *Type:* string

[Write] worklink:UpdateAuditStreamConfiguration.

---

##### `UpdateCompanyNetworkConfiguration`<sup>Required</sup> <a name="UpdateCompanyNetworkConfiguration" id="@cdk_utils/iam.worklink.WorklinkActions.property.UpdateCompanyNetworkConfiguration"></a>

```typescript
public readonly UpdateCompanyNetworkConfiguration: string;
```

- *Type:* string

[Write] worklink:UpdateCompanyNetworkConfiguration.

---

##### `UpdateDevicePolicyConfiguration`<sup>Required</sup> <a name="UpdateDevicePolicyConfiguration" id="@cdk_utils/iam.worklink.WorklinkActions.property.UpdateDevicePolicyConfiguration"></a>

```typescript
public readonly UpdateDevicePolicyConfiguration: string;
```

- *Type:* string

[Write] worklink:UpdateDevicePolicyConfiguration.

---

##### `UpdateDomainMetadata`<sup>Required</sup> <a name="UpdateDomainMetadata" id="@cdk_utils/iam.worklink.WorklinkActions.property.UpdateDomainMetadata"></a>

```typescript
public readonly UpdateDomainMetadata: string;
```

- *Type:* string

[Write] worklink:UpdateDomainMetadata.

---

##### `UpdateFleetMetadata`<sup>Required</sup> <a name="UpdateFleetMetadata" id="@cdk_utils/iam.worklink.WorklinkActions.property.UpdateFleetMetadata"></a>

```typescript
public readonly UpdateFleetMetadata: string;
```

- *Type:* string

[Write] worklink:UpdateFleetMetadata.

---

##### `UpdateIdentityProviderConfiguration`<sup>Required</sup> <a name="UpdateIdentityProviderConfiguration" id="@cdk_utils/iam.worklink.WorklinkActions.property.UpdateIdentityProviderConfiguration"></a>

```typescript
public readonly UpdateIdentityProviderConfiguration: string;
```

- *Type:* string

[Write] worklink:UpdateIdentityProviderConfiguration.

---

### WorklinkConditions <a name="WorklinkConditions" id="@cdk_utils/iam.worklink.WorklinkConditions"></a>

Condition key constants and builders for worklink.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.worklink.WorklinkConditions.Initializer"></a>

```typescript
import { worklink } from '@cdk_utils/iam'

new worklink.WorklinkConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.worklink.WorklinkConditions.requestTag"></a>

```typescript
import { worklink } from '@cdk_utils/iam'

worklink.WorklinkConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.worklink.WorklinkConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.worklink.WorklinkConditions.resourceTag"></a>

```typescript
import { worklink } from '@cdk_utils/iam'

worklink.WorklinkConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.worklink.WorklinkConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.worklink.WorklinkConditions.tagKeys"></a>

```typescript
import { worklink } from '@cdk_utils/iam'

worklink.WorklinkConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.worklink.WorklinkConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkConditions.property.CreateFleetConditionKeys">CreateFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFleet action. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkConditions.property.DeleteFleetConditionKeys">DeleteFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteFleet action. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkConditions.property.DescribeFleetMetadataConditionKeys">DescribeFleetMetadataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeFleetMetadata action. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.worklink.WorklinkConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.worklink.WorklinkConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.worklink.WorklinkConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateFleetConditionKeys`<sup>Required</sup> <a name="CreateFleetConditionKeys" id="@cdk_utils/iam.worklink.WorklinkConditions.property.CreateFleetConditionKeys"></a>

```typescript
public readonly CreateFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFleet action.

---

##### `DeleteFleetConditionKeys`<sup>Required</sup> <a name="DeleteFleetConditionKeys" id="@cdk_utils/iam.worklink.WorklinkConditions.property.DeleteFleetConditionKeys"></a>

```typescript
public readonly DeleteFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteFleet action.

---

##### `DescribeFleetMetadataConditionKeys`<sup>Required</sup> <a name="DescribeFleetMetadataConditionKeys" id="@cdk_utils/iam.worklink.WorklinkConditions.property.DescribeFleetMetadataConditionKeys"></a>

```typescript
public readonly DescribeFleetMetadataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeFleetMetadata action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.worklink.WorklinkConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.worklink.WorklinkConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### WorklinkResources <a name="WorklinkResources" id="@cdk_utils/iam.worklink.WorklinkResources"></a>

ARN builders, validators, and parsers for worklink resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.worklink.WorklinkResources.Initializer"></a>

```typescript
import { worklink } from '@cdk_utils/iam'

new worklink.WorklinkResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkResources.fleet">fleet</a></code> | Builds an ARN for the fleet resource. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkResources.isValidFleetArn">isValidFleetArn</a></code> | Validates whether a string is a valid ARN for the fleet resource. |
| <code><a href="#@cdk_utils/iam.worklink.WorklinkResources.parseFleetArn">parseFleetArn</a></code> | Parses a fleet ARN into its components. |

---

##### `fleet` <a name="fleet" id="@cdk_utils/iam.worklink.WorklinkResources.fleet"></a>

```typescript
import { worklink } from '@cdk_utils/iam'

worklink.WorklinkResources.fleet(props: WorklinkFleetArnProps)
```

Builds an ARN for the fleet resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.worklink.WorklinkResources.fleet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.worklink.WorklinkFleetArnProps">WorklinkFleetArnProps</a>

---

##### `isValidFleetArn` <a name="isValidFleetArn" id="@cdk_utils/iam.worklink.WorklinkResources.isValidFleetArn"></a>

```typescript
import { worklink } from '@cdk_utils/iam'

worklink.WorklinkResources.isValidFleetArn(arn: string)
```

Validates whether a string is a valid ARN for the fleet resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.worklink.WorklinkResources.isValidFleetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFleetArn` <a name="parseFleetArn" id="@cdk_utils/iam.worklink.WorklinkResources.parseFleetArn"></a>

```typescript
import { worklink } from '@cdk_utils/iam'

worklink.WorklinkResources.parseFleetArn(arn: string)
```

Parses a fleet ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.worklink.WorklinkResources.parseFleetArn.parameter.arn"></a>

- *Type:* string

---




