# `ds` Submodule <a name="`ds` Submodule" id="@cdk_utils/iam.ds"></a>


## Structs <a name="Structs" id="Structs"></a>

### DsDirectoryArnComponents <a name="DsDirectoryArnComponents" id="@cdk_utils/iam.ds.DsDirectoryArnComponents"></a>

Parsed components of a directory ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ds.DsDirectoryArnComponents.Initializer"></a>

```typescript
import { ds } from '@cdk_utils/iam'

const dsDirectoryArnComponents: ds.DsDirectoryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ds.DsDirectoryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ds.DsDirectoryArnComponents.property.directoryId">directoryId</a></code> | <code>string</code> | The DirectoryId component. |
| <code><a href="#@cdk_utils/iam.ds.DsDirectoryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ds.DsDirectoryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ds.DsDirectoryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdk_utils/iam.ds.DsDirectoryArnComponents.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

The DirectoryId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ds.DsDirectoryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ds.DsDirectoryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DsDirectoryArnProps <a name="DsDirectoryArnProps" id="@cdk_utils/iam.ds.DsDirectoryArnProps"></a>

Properties for building a directory ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ds.DsDirectoryArnProps.Initializer"></a>

```typescript
import { ds } from '@cdk_utils/iam'

const dsDirectoryArnProps: ds.DsDirectoryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ds.DsDirectoryArnProps.property.directoryId">directoryId</a></code> | <code>string</code> | The DirectoryId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ds.DsDirectoryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ds.DsDirectoryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ds.DsDirectoryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdk_utils/iam.ds.DsDirectoryArnProps.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

The DirectoryId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ds.DsDirectoryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ds.DsDirectoryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ds.DsDirectoryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### DsActions <a name="DsActions" id="@cdk_utils/iam.ds.DsActions"></a>

IAM action constants for the ds service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ds.DsActions.Initializer"></a>

```typescript
import { ds } from '@cdk_utils/iam'

new ds.DsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.AcceptSharedDirectory">AcceptSharedDirectory</a></code> | <code>string</code> | [Write] ds:AcceptSharedDirectory. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.AccessDSData">AccessDSData</a></code> | <code>string</code> | [PermissionManagement] ds:AccessDSData. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.actionGetAuthorizedApplicationDetails">actionGetAuthorizedApplicationDetails</a></code> | <code>string</code> | [Read] ds:GetAuthorizedApplicationDetails. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.actionGetDirectoryLimits">actionGetDirectoryLimits</a></code> | <code>string</code> | [Read] ds:GetDirectoryLimits. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.actionGetSnapshotLimits">actionGetSnapshotLimits</a></code> | <code>string</code> | [Read] ds:GetSnapshotLimits. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.AddIpRoutes">AddIpRoutes</a></code> | <code>string</code> | [Write] ds:AddIpRoutes. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.AddRegion">AddRegion</a></code> | <code>string</code> | [Write] ds:AddRegion. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.AddTagsToResource">AddTagsToResource</a></code> | <code>string</code> | [Tagging] ds:AddTagsToResource. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.AuthorizeApplication">AuthorizeApplication</a></code> | <code>string</code> | [Write] ds:AuthorizeApplication. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.CancelSchemaExtension">CancelSchemaExtension</a></code> | <code>string</code> | [Write] ds:CancelSchemaExtension. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.CheckAlias">CheckAlias</a></code> | <code>string</code> | [Read] ds:CheckAlias. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.ConnectDirectory">ConnectDirectory</a></code> | <code>string</code> | [Write] ds:ConnectDirectory. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.CreateAlias">CreateAlias</a></code> | <code>string</code> | [Write] ds:CreateAlias. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.CreateComputer">CreateComputer</a></code> | <code>string</code> | [Write] ds:CreateComputer. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.CreateConditionalForwarder">CreateConditionalForwarder</a></code> | <code>string</code> | [Write] ds:CreateConditionalForwarder. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.CreateDirectory">CreateDirectory</a></code> | <code>string</code> | [Write] ds:CreateDirectory. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.CreateHybridAD">CreateHybridAD</a></code> | <code>string</code> | [Write] ds:CreateHybridAD. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.CreateIdentityPoolDirectory">CreateIdentityPoolDirectory</a></code> | <code>string</code> | [Write] ds:CreateIdentityPoolDirectory. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.CreateLogSubscription">CreateLogSubscription</a></code> | <code>string</code> | [Write] ds:CreateLogSubscription. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.CreateMicrosoftAD">CreateMicrosoftAD</a></code> | <code>string</code> | [Write] ds:CreateMicrosoftAD. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.CreateSnapshot">CreateSnapshot</a></code> | <code>string</code> | [Write] ds:CreateSnapshot. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.CreateTrust">CreateTrust</a></code> | <code>string</code> | [Write] ds:CreateTrust. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DeleteADAssessment">DeleteADAssessment</a></code> | <code>string</code> | [Write] ds:DeleteADAssessment. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DeleteConditionalForwarder">DeleteConditionalForwarder</a></code> | <code>string</code> | [Write] ds:DeleteConditionalForwarder. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DeleteDirectory">DeleteDirectory</a></code> | <code>string</code> | [Write] ds:DeleteDirectory. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DeleteLogSubscription">DeleteLogSubscription</a></code> | <code>string</code> | [Write] ds:DeleteLogSubscription. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DeleteSnapshot">DeleteSnapshot</a></code> | <code>string</code> | [Write] ds:DeleteSnapshot. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DeleteTrust">DeleteTrust</a></code> | <code>string</code> | [Write] ds:DeleteTrust. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DeregisterCertificate">DeregisterCertificate</a></code> | <code>string</code> | [Write] ds:DeregisterCertificate. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DeregisterEventTopic">DeregisterEventTopic</a></code> | <code>string</code> | [Write] ds:DeregisterEventTopic. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DescribeADAssessment">DescribeADAssessment</a></code> | <code>string</code> | [Read] ds:DescribeADAssessment. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DescribeCAEnrollmentPolicy">DescribeCAEnrollmentPolicy</a></code> | <code>string</code> | [Read] ds:DescribeCAEnrollmentPolicy. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DescribeCertificate">DescribeCertificate</a></code> | <code>string</code> | [Read] ds:DescribeCertificate. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DescribeClientAuthenticationSettings">DescribeClientAuthenticationSettings</a></code> | <code>string</code> | [Read] ds:DescribeClientAuthenticationSettings. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DescribeConditionalForwarders">DescribeConditionalForwarders</a></code> | <code>string</code> | [Read] ds:DescribeConditionalForwarders. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DescribeDirectories">DescribeDirectories</a></code> | <code>string</code> | [List] ds:DescribeDirectories. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DescribeDirectoryDataAccess">DescribeDirectoryDataAccess</a></code> | <code>string</code> | [Read] ds:DescribeDirectoryDataAccess. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DescribeDomainControllers">DescribeDomainControllers</a></code> | <code>string</code> | [Read] ds:DescribeDomainControllers. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DescribeEventTopics">DescribeEventTopics</a></code> | <code>string</code> | [Read] ds:DescribeEventTopics. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DescribeHybridADUpdate">DescribeHybridADUpdate</a></code> | <code>string</code> | [Read] ds:DescribeHybridADUpdate. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DescribeLDAPSSettings">DescribeLDAPSSettings</a></code> | <code>string</code> | [Read] ds:DescribeLDAPSSettings. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DescribeRegions">DescribeRegions</a></code> | <code>string</code> | [Read] ds:DescribeRegions. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DescribeSettings">DescribeSettings</a></code> | <code>string</code> | [Read] ds:DescribeSettings. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DescribeSharedDirectories">DescribeSharedDirectories</a></code> | <code>string</code> | [Read] ds:DescribeSharedDirectories. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DescribeSnapshots">DescribeSnapshots</a></code> | <code>string</code> | [Read] ds:DescribeSnapshots. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DescribeTrusts">DescribeTrusts</a></code> | <code>string</code> | [Read] ds:DescribeTrusts. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DescribeUpdateDirectory">DescribeUpdateDirectory</a></code> | <code>string</code> | [Read] ds:DescribeUpdateDirectory. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DisableCAEnrollmentPolicy">DisableCAEnrollmentPolicy</a></code> | <code>string</code> | [Write] ds:DisableCAEnrollmentPolicy. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DisableClientAuthentication">DisableClientAuthentication</a></code> | <code>string</code> | [Write] ds:DisableClientAuthentication. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DisableDirectoryDataAccess">DisableDirectoryDataAccess</a></code> | <code>string</code> | [Write] ds:DisableDirectoryDataAccess. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DisableLDAPS">DisableLDAPS</a></code> | <code>string</code> | [Write] ds:DisableLDAPS. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DisableRadius">DisableRadius</a></code> | <code>string</code> | [Write] ds:DisableRadius. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DisableRoleAccess">DisableRoleAccess</a></code> | <code>string</code> | [Write] ds:DisableRoleAccess. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.DisableSso">DisableSso</a></code> | <code>string</code> | [Write] ds:DisableSso. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.EnableCAEnrollmentPolicy">EnableCAEnrollmentPolicy</a></code> | <code>string</code> | [Write] ds:EnableCAEnrollmentPolicy. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.EnableClientAuthentication">EnableClientAuthentication</a></code> | <code>string</code> | [Write] ds:EnableClientAuthentication. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.EnableDirectoryDataAccess">EnableDirectoryDataAccess</a></code> | <code>string</code> | [Write] ds:EnableDirectoryDataAccess. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.EnableLDAPS">EnableLDAPS</a></code> | <code>string</code> | [Write] ds:EnableLDAPS. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.EnableRadius">EnableRadius</a></code> | <code>string</code> | [Write] ds:EnableRadius. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.EnableRoleAccess">EnableRoleAccess</a></code> | <code>string</code> | [Write] ds:EnableRoleAccess. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.EnableSso">EnableSso</a></code> | <code>string</code> | [Write] ds:EnableSso. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.ListADAssessments">ListADAssessments</a></code> | <code>string</code> | [List] ds:ListADAssessments. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.ListAuthorizedApplications">ListAuthorizedApplications</a></code> | <code>string</code> | [Read] ds:ListAuthorizedApplications. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.ListCertificates">ListCertificates</a></code> | <code>string</code> | [List] ds:ListCertificates. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.ListIpRoutes">ListIpRoutes</a></code> | <code>string</code> | [Read] ds:ListIpRoutes. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.ListLogSubscriptions">ListLogSubscriptions</a></code> | <code>string</code> | [Read] ds:ListLogSubscriptions. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.ListSchemaExtensions">ListSchemaExtensions</a></code> | <code>string</code> | [List] ds:ListSchemaExtensions. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] ds:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.RegisterCertificate">RegisterCertificate</a></code> | <code>string</code> | [Write] ds:RegisterCertificate. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.RegisterEventTopic">RegisterEventTopic</a></code> | <code>string</code> | [Write] ds:RegisterEventTopic. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.RejectSharedDirectory">RejectSharedDirectory</a></code> | <code>string</code> | [Write] ds:RejectSharedDirectory. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.RemoveIpRoutes">RemoveIpRoutes</a></code> | <code>string</code> | [Write] ds:RemoveIpRoutes. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.RemoveRegion">RemoveRegion</a></code> | <code>string</code> | [Write] ds:RemoveRegion. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.RemoveTagsFromResource">RemoveTagsFromResource</a></code> | <code>string</code> | [Tagging] ds:RemoveTagsFromResource. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.ResetUserPassword">ResetUserPassword</a></code> | <code>string</code> | [Write] ds:ResetUserPassword. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.RestoreFromSnapshot">RestoreFromSnapshot</a></code> | <code>string</code> | [Write] ds:RestoreFromSnapshot. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.ShareDirectory">ShareDirectory</a></code> | <code>string</code> | [Write] ds:ShareDirectory. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.StartADAssessment">StartADAssessment</a></code> | <code>string</code> | [Write] ds:StartADAssessment. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.StartSchemaExtension">StartSchemaExtension</a></code> | <code>string</code> | [Write] ds:StartSchemaExtension. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.UnauthorizeApplication">UnauthorizeApplication</a></code> | <code>string</code> | [Write] ds:UnauthorizeApplication. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.UnshareDirectory">UnshareDirectory</a></code> | <code>string</code> | [Write] ds:UnshareDirectory. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.UpdateAuthorizedApplication">UpdateAuthorizedApplication</a></code> | <code>string</code> | [Write] ds:UpdateAuthorizedApplication. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.UpdateConditionalForwarder">UpdateConditionalForwarder</a></code> | <code>string</code> | [Write] ds:UpdateConditionalForwarder. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.UpdateDirectory">UpdateDirectory</a></code> | <code>string</code> | [Write] ds:UpdateDirectory. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.UpdateDirectorySetup">UpdateDirectorySetup</a></code> | <code>string</code> | [Write] ds:UpdateDirectorySetup. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.UpdateHybridAD">UpdateHybridAD</a></code> | <code>string</code> | [Write] ds:UpdateHybridAD. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.UpdateNumberOfDomainControllers">UpdateNumberOfDomainControllers</a></code> | <code>string</code> | [Write] ds:UpdateNumberOfDomainControllers. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.UpdateRadius">UpdateRadius</a></code> | <code>string</code> | [Write] ds:UpdateRadius. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.UpdateSettings">UpdateSettings</a></code> | <code>string</code> | [Write] ds:UpdateSettings. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.UpdateTrust">UpdateTrust</a></code> | <code>string</code> | [Write] ds:UpdateTrust. |
| <code><a href="#@cdk_utils/iam.ds.DsActions.property.VerifyTrust">VerifyTrust</a></code> | <code>string</code> | [Read] ds:VerifyTrust. |

---

##### `AcceptSharedDirectory`<sup>Required</sup> <a name="AcceptSharedDirectory" id="@cdk_utils/iam.ds.DsActions.property.AcceptSharedDirectory"></a>

```typescript
public readonly AcceptSharedDirectory: string;
```

- *Type:* string

[Write] ds:AcceptSharedDirectory.

---

##### `AccessDSData`<sup>Required</sup> <a name="AccessDSData" id="@cdk_utils/iam.ds.DsActions.property.AccessDSData"></a>

```typescript
public readonly AccessDSData: string;
```

- *Type:* string

[PermissionManagement] ds:AccessDSData.

---

##### `actionGetAuthorizedApplicationDetails`<sup>Required</sup> <a name="actionGetAuthorizedApplicationDetails" id="@cdk_utils/iam.ds.DsActions.property.actionGetAuthorizedApplicationDetails"></a>

```typescript
public readonly actionGetAuthorizedApplicationDetails: string;
```

- *Type:* string

[Read] ds:GetAuthorizedApplicationDetails.

---

##### `actionGetDirectoryLimits`<sup>Required</sup> <a name="actionGetDirectoryLimits" id="@cdk_utils/iam.ds.DsActions.property.actionGetDirectoryLimits"></a>

```typescript
public readonly actionGetDirectoryLimits: string;
```

- *Type:* string

[Read] ds:GetDirectoryLimits.

---

##### `actionGetSnapshotLimits`<sup>Required</sup> <a name="actionGetSnapshotLimits" id="@cdk_utils/iam.ds.DsActions.property.actionGetSnapshotLimits"></a>

```typescript
public readonly actionGetSnapshotLimits: string;
```

- *Type:* string

[Read] ds:GetSnapshotLimits.

---

##### `AddIpRoutes`<sup>Required</sup> <a name="AddIpRoutes" id="@cdk_utils/iam.ds.DsActions.property.AddIpRoutes"></a>

```typescript
public readonly AddIpRoutes: string;
```

- *Type:* string

[Write] ds:AddIpRoutes.

---

##### `AddRegion`<sup>Required</sup> <a name="AddRegion" id="@cdk_utils/iam.ds.DsActions.property.AddRegion"></a>

```typescript
public readonly AddRegion: string;
```

- *Type:* string

[Write] ds:AddRegion.

---

##### `AddTagsToResource`<sup>Required</sup> <a name="AddTagsToResource" id="@cdk_utils/iam.ds.DsActions.property.AddTagsToResource"></a>

```typescript
public readonly AddTagsToResource: string;
```

- *Type:* string

[Tagging] ds:AddTagsToResource.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ds.DsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ds.DsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ds.DsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ds.DsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ds.DsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AuthorizeApplication`<sup>Required</sup> <a name="AuthorizeApplication" id="@cdk_utils/iam.ds.DsActions.property.AuthorizeApplication"></a>

```typescript
public readonly AuthorizeApplication: string;
```

- *Type:* string

[Write] ds:AuthorizeApplication.

---

##### `CancelSchemaExtension`<sup>Required</sup> <a name="CancelSchemaExtension" id="@cdk_utils/iam.ds.DsActions.property.CancelSchemaExtension"></a>

```typescript
public readonly CancelSchemaExtension: string;
```

- *Type:* string

[Write] ds:CancelSchemaExtension.

---

##### `CheckAlias`<sup>Required</sup> <a name="CheckAlias" id="@cdk_utils/iam.ds.DsActions.property.CheckAlias"></a>

```typescript
public readonly CheckAlias: string;
```

- *Type:* string

[Read] ds:CheckAlias.

---

##### `ConnectDirectory`<sup>Required</sup> <a name="ConnectDirectory" id="@cdk_utils/iam.ds.DsActions.property.ConnectDirectory"></a>

```typescript
public readonly ConnectDirectory: string;
```

- *Type:* string

[Write] ds:ConnectDirectory.

---

##### `CreateAlias`<sup>Required</sup> <a name="CreateAlias" id="@cdk_utils/iam.ds.DsActions.property.CreateAlias"></a>

```typescript
public readonly CreateAlias: string;
```

- *Type:* string

[Write] ds:CreateAlias.

---

##### `CreateComputer`<sup>Required</sup> <a name="CreateComputer" id="@cdk_utils/iam.ds.DsActions.property.CreateComputer"></a>

```typescript
public readonly CreateComputer: string;
```

- *Type:* string

[Write] ds:CreateComputer.

---

##### `CreateConditionalForwarder`<sup>Required</sup> <a name="CreateConditionalForwarder" id="@cdk_utils/iam.ds.DsActions.property.CreateConditionalForwarder"></a>

```typescript
public readonly CreateConditionalForwarder: string;
```

- *Type:* string

[Write] ds:CreateConditionalForwarder.

---

##### `CreateDirectory`<sup>Required</sup> <a name="CreateDirectory" id="@cdk_utils/iam.ds.DsActions.property.CreateDirectory"></a>

```typescript
public readonly CreateDirectory: string;
```

- *Type:* string

[Write] ds:CreateDirectory.

---

##### `CreateHybridAD`<sup>Required</sup> <a name="CreateHybridAD" id="@cdk_utils/iam.ds.DsActions.property.CreateHybridAD"></a>

```typescript
public readonly CreateHybridAD: string;
```

- *Type:* string

[Write] ds:CreateHybridAD.

---

##### `CreateIdentityPoolDirectory`<sup>Required</sup> <a name="CreateIdentityPoolDirectory" id="@cdk_utils/iam.ds.DsActions.property.CreateIdentityPoolDirectory"></a>

```typescript
public readonly CreateIdentityPoolDirectory: string;
```

- *Type:* string

[Write] ds:CreateIdentityPoolDirectory.

---

##### `CreateLogSubscription`<sup>Required</sup> <a name="CreateLogSubscription" id="@cdk_utils/iam.ds.DsActions.property.CreateLogSubscription"></a>

```typescript
public readonly CreateLogSubscription: string;
```

- *Type:* string

[Write] ds:CreateLogSubscription.

---

##### `CreateMicrosoftAD`<sup>Required</sup> <a name="CreateMicrosoftAD" id="@cdk_utils/iam.ds.DsActions.property.CreateMicrosoftAD"></a>

```typescript
public readonly CreateMicrosoftAD: string;
```

- *Type:* string

[Write] ds:CreateMicrosoftAD.

---

##### `CreateSnapshot`<sup>Required</sup> <a name="CreateSnapshot" id="@cdk_utils/iam.ds.DsActions.property.CreateSnapshot"></a>

```typescript
public readonly CreateSnapshot: string;
```

- *Type:* string

[Write] ds:CreateSnapshot.

---

##### `CreateTrust`<sup>Required</sup> <a name="CreateTrust" id="@cdk_utils/iam.ds.DsActions.property.CreateTrust"></a>

```typescript
public readonly CreateTrust: string;
```

- *Type:* string

[Write] ds:CreateTrust.

---

##### `DeleteADAssessment`<sup>Required</sup> <a name="DeleteADAssessment" id="@cdk_utils/iam.ds.DsActions.property.DeleteADAssessment"></a>

```typescript
public readonly DeleteADAssessment: string;
```

- *Type:* string

[Write] ds:DeleteADAssessment.

---

##### `DeleteConditionalForwarder`<sup>Required</sup> <a name="DeleteConditionalForwarder" id="@cdk_utils/iam.ds.DsActions.property.DeleteConditionalForwarder"></a>

```typescript
public readonly DeleteConditionalForwarder: string;
```

- *Type:* string

[Write] ds:DeleteConditionalForwarder.

---

##### `DeleteDirectory`<sup>Required</sup> <a name="DeleteDirectory" id="@cdk_utils/iam.ds.DsActions.property.DeleteDirectory"></a>

```typescript
public readonly DeleteDirectory: string;
```

- *Type:* string

[Write] ds:DeleteDirectory.

---

##### `DeleteLogSubscription`<sup>Required</sup> <a name="DeleteLogSubscription" id="@cdk_utils/iam.ds.DsActions.property.DeleteLogSubscription"></a>

```typescript
public readonly DeleteLogSubscription: string;
```

- *Type:* string

[Write] ds:DeleteLogSubscription.

---

##### `DeleteSnapshot`<sup>Required</sup> <a name="DeleteSnapshot" id="@cdk_utils/iam.ds.DsActions.property.DeleteSnapshot"></a>

```typescript
public readonly DeleteSnapshot: string;
```

- *Type:* string

[Write] ds:DeleteSnapshot.

---

##### `DeleteTrust`<sup>Required</sup> <a name="DeleteTrust" id="@cdk_utils/iam.ds.DsActions.property.DeleteTrust"></a>

```typescript
public readonly DeleteTrust: string;
```

- *Type:* string

[Write] ds:DeleteTrust.

---

##### `DeregisterCertificate`<sup>Required</sup> <a name="DeregisterCertificate" id="@cdk_utils/iam.ds.DsActions.property.DeregisterCertificate"></a>

```typescript
public readonly DeregisterCertificate: string;
```

- *Type:* string

[Write] ds:DeregisterCertificate.

---

##### `DeregisterEventTopic`<sup>Required</sup> <a name="DeregisterEventTopic" id="@cdk_utils/iam.ds.DsActions.property.DeregisterEventTopic"></a>

```typescript
public readonly DeregisterEventTopic: string;
```

- *Type:* string

[Write] ds:DeregisterEventTopic.

---

##### `DescribeADAssessment`<sup>Required</sup> <a name="DescribeADAssessment" id="@cdk_utils/iam.ds.DsActions.property.DescribeADAssessment"></a>

```typescript
public readonly DescribeADAssessment: string;
```

- *Type:* string

[Read] ds:DescribeADAssessment.

---

##### `DescribeCAEnrollmentPolicy`<sup>Required</sup> <a name="DescribeCAEnrollmentPolicy" id="@cdk_utils/iam.ds.DsActions.property.DescribeCAEnrollmentPolicy"></a>

```typescript
public readonly DescribeCAEnrollmentPolicy: string;
```

- *Type:* string

[Read] ds:DescribeCAEnrollmentPolicy.

---

##### `DescribeCertificate`<sup>Required</sup> <a name="DescribeCertificate" id="@cdk_utils/iam.ds.DsActions.property.DescribeCertificate"></a>

```typescript
public readonly DescribeCertificate: string;
```

- *Type:* string

[Read] ds:DescribeCertificate.

---

##### `DescribeClientAuthenticationSettings`<sup>Required</sup> <a name="DescribeClientAuthenticationSettings" id="@cdk_utils/iam.ds.DsActions.property.DescribeClientAuthenticationSettings"></a>

```typescript
public readonly DescribeClientAuthenticationSettings: string;
```

- *Type:* string

[Read] ds:DescribeClientAuthenticationSettings.

---

##### `DescribeConditionalForwarders`<sup>Required</sup> <a name="DescribeConditionalForwarders" id="@cdk_utils/iam.ds.DsActions.property.DescribeConditionalForwarders"></a>

```typescript
public readonly DescribeConditionalForwarders: string;
```

- *Type:* string

[Read] ds:DescribeConditionalForwarders.

---

##### `DescribeDirectories`<sup>Required</sup> <a name="DescribeDirectories" id="@cdk_utils/iam.ds.DsActions.property.DescribeDirectories"></a>

```typescript
public readonly DescribeDirectories: string;
```

- *Type:* string

[List] ds:DescribeDirectories.

---

##### `DescribeDirectoryDataAccess`<sup>Required</sup> <a name="DescribeDirectoryDataAccess" id="@cdk_utils/iam.ds.DsActions.property.DescribeDirectoryDataAccess"></a>

```typescript
public readonly DescribeDirectoryDataAccess: string;
```

- *Type:* string

[Read] ds:DescribeDirectoryDataAccess.

---

##### `DescribeDomainControllers`<sup>Required</sup> <a name="DescribeDomainControllers" id="@cdk_utils/iam.ds.DsActions.property.DescribeDomainControllers"></a>

```typescript
public readonly DescribeDomainControllers: string;
```

- *Type:* string

[Read] ds:DescribeDomainControllers.

---

##### `DescribeEventTopics`<sup>Required</sup> <a name="DescribeEventTopics" id="@cdk_utils/iam.ds.DsActions.property.DescribeEventTopics"></a>

```typescript
public readonly DescribeEventTopics: string;
```

- *Type:* string

[Read] ds:DescribeEventTopics.

---

##### `DescribeHybridADUpdate`<sup>Required</sup> <a name="DescribeHybridADUpdate" id="@cdk_utils/iam.ds.DsActions.property.DescribeHybridADUpdate"></a>

```typescript
public readonly DescribeHybridADUpdate: string;
```

- *Type:* string

[Read] ds:DescribeHybridADUpdate.

---

##### `DescribeLDAPSSettings`<sup>Required</sup> <a name="DescribeLDAPSSettings" id="@cdk_utils/iam.ds.DsActions.property.DescribeLDAPSSettings"></a>

```typescript
public readonly DescribeLDAPSSettings: string;
```

- *Type:* string

[Read] ds:DescribeLDAPSSettings.

---

##### `DescribeRegions`<sup>Required</sup> <a name="DescribeRegions" id="@cdk_utils/iam.ds.DsActions.property.DescribeRegions"></a>

```typescript
public readonly DescribeRegions: string;
```

- *Type:* string

[Read] ds:DescribeRegions.

---

##### `DescribeSettings`<sup>Required</sup> <a name="DescribeSettings" id="@cdk_utils/iam.ds.DsActions.property.DescribeSettings"></a>

```typescript
public readonly DescribeSettings: string;
```

- *Type:* string

[Read] ds:DescribeSettings.

---

##### `DescribeSharedDirectories`<sup>Required</sup> <a name="DescribeSharedDirectories" id="@cdk_utils/iam.ds.DsActions.property.DescribeSharedDirectories"></a>

```typescript
public readonly DescribeSharedDirectories: string;
```

- *Type:* string

[Read] ds:DescribeSharedDirectories.

---

##### `DescribeSnapshots`<sup>Required</sup> <a name="DescribeSnapshots" id="@cdk_utils/iam.ds.DsActions.property.DescribeSnapshots"></a>

```typescript
public readonly DescribeSnapshots: string;
```

- *Type:* string

[Read] ds:DescribeSnapshots.

---

##### `DescribeTrusts`<sup>Required</sup> <a name="DescribeTrusts" id="@cdk_utils/iam.ds.DsActions.property.DescribeTrusts"></a>

```typescript
public readonly DescribeTrusts: string;
```

- *Type:* string

[Read] ds:DescribeTrusts.

---

##### `DescribeUpdateDirectory`<sup>Required</sup> <a name="DescribeUpdateDirectory" id="@cdk_utils/iam.ds.DsActions.property.DescribeUpdateDirectory"></a>

```typescript
public readonly DescribeUpdateDirectory: string;
```

- *Type:* string

[Read] ds:DescribeUpdateDirectory.

---

##### `DisableCAEnrollmentPolicy`<sup>Required</sup> <a name="DisableCAEnrollmentPolicy" id="@cdk_utils/iam.ds.DsActions.property.DisableCAEnrollmentPolicy"></a>

```typescript
public readonly DisableCAEnrollmentPolicy: string;
```

- *Type:* string

[Write] ds:DisableCAEnrollmentPolicy.

---

##### `DisableClientAuthentication`<sup>Required</sup> <a name="DisableClientAuthentication" id="@cdk_utils/iam.ds.DsActions.property.DisableClientAuthentication"></a>

```typescript
public readonly DisableClientAuthentication: string;
```

- *Type:* string

[Write] ds:DisableClientAuthentication.

---

##### `DisableDirectoryDataAccess`<sup>Required</sup> <a name="DisableDirectoryDataAccess" id="@cdk_utils/iam.ds.DsActions.property.DisableDirectoryDataAccess"></a>

```typescript
public readonly DisableDirectoryDataAccess: string;
```

- *Type:* string

[Write] ds:DisableDirectoryDataAccess.

---

##### `DisableLDAPS`<sup>Required</sup> <a name="DisableLDAPS" id="@cdk_utils/iam.ds.DsActions.property.DisableLDAPS"></a>

```typescript
public readonly DisableLDAPS: string;
```

- *Type:* string

[Write] ds:DisableLDAPS.

---

##### `DisableRadius`<sup>Required</sup> <a name="DisableRadius" id="@cdk_utils/iam.ds.DsActions.property.DisableRadius"></a>

```typescript
public readonly DisableRadius: string;
```

- *Type:* string

[Write] ds:DisableRadius.

---

##### `DisableRoleAccess`<sup>Required</sup> <a name="DisableRoleAccess" id="@cdk_utils/iam.ds.DsActions.property.DisableRoleAccess"></a>

```typescript
public readonly DisableRoleAccess: string;
```

- *Type:* string

[Write] ds:DisableRoleAccess.

---

##### `DisableSso`<sup>Required</sup> <a name="DisableSso" id="@cdk_utils/iam.ds.DsActions.property.DisableSso"></a>

```typescript
public readonly DisableSso: string;
```

- *Type:* string

[Write] ds:DisableSso.

---

##### `EnableCAEnrollmentPolicy`<sup>Required</sup> <a name="EnableCAEnrollmentPolicy" id="@cdk_utils/iam.ds.DsActions.property.EnableCAEnrollmentPolicy"></a>

```typescript
public readonly EnableCAEnrollmentPolicy: string;
```

- *Type:* string

[Write] ds:EnableCAEnrollmentPolicy.

---

##### `EnableClientAuthentication`<sup>Required</sup> <a name="EnableClientAuthentication" id="@cdk_utils/iam.ds.DsActions.property.EnableClientAuthentication"></a>

```typescript
public readonly EnableClientAuthentication: string;
```

- *Type:* string

[Write] ds:EnableClientAuthentication.

---

##### `EnableDirectoryDataAccess`<sup>Required</sup> <a name="EnableDirectoryDataAccess" id="@cdk_utils/iam.ds.DsActions.property.EnableDirectoryDataAccess"></a>

```typescript
public readonly EnableDirectoryDataAccess: string;
```

- *Type:* string

[Write] ds:EnableDirectoryDataAccess.

---

##### `EnableLDAPS`<sup>Required</sup> <a name="EnableLDAPS" id="@cdk_utils/iam.ds.DsActions.property.EnableLDAPS"></a>

```typescript
public readonly EnableLDAPS: string;
```

- *Type:* string

[Write] ds:EnableLDAPS.

---

##### `EnableRadius`<sup>Required</sup> <a name="EnableRadius" id="@cdk_utils/iam.ds.DsActions.property.EnableRadius"></a>

```typescript
public readonly EnableRadius: string;
```

- *Type:* string

[Write] ds:EnableRadius.

---

##### `EnableRoleAccess`<sup>Required</sup> <a name="EnableRoleAccess" id="@cdk_utils/iam.ds.DsActions.property.EnableRoleAccess"></a>

```typescript
public readonly EnableRoleAccess: string;
```

- *Type:* string

[Write] ds:EnableRoleAccess.

---

##### `EnableSso`<sup>Required</sup> <a name="EnableSso" id="@cdk_utils/iam.ds.DsActions.property.EnableSso"></a>

```typescript
public readonly EnableSso: string;
```

- *Type:* string

[Write] ds:EnableSso.

---

##### `ListADAssessments`<sup>Required</sup> <a name="ListADAssessments" id="@cdk_utils/iam.ds.DsActions.property.ListADAssessments"></a>

```typescript
public readonly ListADAssessments: string;
```

- *Type:* string

[List] ds:ListADAssessments.

---

##### `ListAuthorizedApplications`<sup>Required</sup> <a name="ListAuthorizedApplications" id="@cdk_utils/iam.ds.DsActions.property.ListAuthorizedApplications"></a>

```typescript
public readonly ListAuthorizedApplications: string;
```

- *Type:* string

[Read] ds:ListAuthorizedApplications.

---

##### `ListCertificates`<sup>Required</sup> <a name="ListCertificates" id="@cdk_utils/iam.ds.DsActions.property.ListCertificates"></a>

```typescript
public readonly ListCertificates: string;
```

- *Type:* string

[List] ds:ListCertificates.

---

##### `ListIpRoutes`<sup>Required</sup> <a name="ListIpRoutes" id="@cdk_utils/iam.ds.DsActions.property.ListIpRoutes"></a>

```typescript
public readonly ListIpRoutes: string;
```

- *Type:* string

[Read] ds:ListIpRoutes.

---

##### `ListLogSubscriptions`<sup>Required</sup> <a name="ListLogSubscriptions" id="@cdk_utils/iam.ds.DsActions.property.ListLogSubscriptions"></a>

```typescript
public readonly ListLogSubscriptions: string;
```

- *Type:* string

[Read] ds:ListLogSubscriptions.

---

##### `ListSchemaExtensions`<sup>Required</sup> <a name="ListSchemaExtensions" id="@cdk_utils/iam.ds.DsActions.property.ListSchemaExtensions"></a>

```typescript
public readonly ListSchemaExtensions: string;
```

- *Type:* string

[List] ds:ListSchemaExtensions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ds.DsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] ds:ListTagsForResource.

---

##### `RegisterCertificate`<sup>Required</sup> <a name="RegisterCertificate" id="@cdk_utils/iam.ds.DsActions.property.RegisterCertificate"></a>

```typescript
public readonly RegisterCertificate: string;
```

- *Type:* string

[Write] ds:RegisterCertificate.

---

##### `RegisterEventTopic`<sup>Required</sup> <a name="RegisterEventTopic" id="@cdk_utils/iam.ds.DsActions.property.RegisterEventTopic"></a>

```typescript
public readonly RegisterEventTopic: string;
```

- *Type:* string

[Write] ds:RegisterEventTopic.

---

##### `RejectSharedDirectory`<sup>Required</sup> <a name="RejectSharedDirectory" id="@cdk_utils/iam.ds.DsActions.property.RejectSharedDirectory"></a>

```typescript
public readonly RejectSharedDirectory: string;
```

- *Type:* string

[Write] ds:RejectSharedDirectory.

---

##### `RemoveIpRoutes`<sup>Required</sup> <a name="RemoveIpRoutes" id="@cdk_utils/iam.ds.DsActions.property.RemoveIpRoutes"></a>

```typescript
public readonly RemoveIpRoutes: string;
```

- *Type:* string

[Write] ds:RemoveIpRoutes.

---

##### `RemoveRegion`<sup>Required</sup> <a name="RemoveRegion" id="@cdk_utils/iam.ds.DsActions.property.RemoveRegion"></a>

```typescript
public readonly RemoveRegion: string;
```

- *Type:* string

[Write] ds:RemoveRegion.

---

##### `RemoveTagsFromResource`<sup>Required</sup> <a name="RemoveTagsFromResource" id="@cdk_utils/iam.ds.DsActions.property.RemoveTagsFromResource"></a>

```typescript
public readonly RemoveTagsFromResource: string;
```

- *Type:* string

[Tagging] ds:RemoveTagsFromResource.

---

##### `ResetUserPassword`<sup>Required</sup> <a name="ResetUserPassword" id="@cdk_utils/iam.ds.DsActions.property.ResetUserPassword"></a>

```typescript
public readonly ResetUserPassword: string;
```

- *Type:* string

[Write] ds:ResetUserPassword.

---

##### `RestoreFromSnapshot`<sup>Required</sup> <a name="RestoreFromSnapshot" id="@cdk_utils/iam.ds.DsActions.property.RestoreFromSnapshot"></a>

```typescript
public readonly RestoreFromSnapshot: string;
```

- *Type:* string

[Write] ds:RestoreFromSnapshot.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ds.DsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `ShareDirectory`<sup>Required</sup> <a name="ShareDirectory" id="@cdk_utils/iam.ds.DsActions.property.ShareDirectory"></a>

```typescript
public readonly ShareDirectory: string;
```

- *Type:* string

[Write] ds:ShareDirectory.

---

##### `StartADAssessment`<sup>Required</sup> <a name="StartADAssessment" id="@cdk_utils/iam.ds.DsActions.property.StartADAssessment"></a>

```typescript
public readonly StartADAssessment: string;
```

- *Type:* string

[Write] ds:StartADAssessment.

---

##### `StartSchemaExtension`<sup>Required</sup> <a name="StartSchemaExtension" id="@cdk_utils/iam.ds.DsActions.property.StartSchemaExtension"></a>

```typescript
public readonly StartSchemaExtension: string;
```

- *Type:* string

[Write] ds:StartSchemaExtension.

---

##### `UnauthorizeApplication`<sup>Required</sup> <a name="UnauthorizeApplication" id="@cdk_utils/iam.ds.DsActions.property.UnauthorizeApplication"></a>

```typescript
public readonly UnauthorizeApplication: string;
```

- *Type:* string

[Write] ds:UnauthorizeApplication.

---

##### `UnshareDirectory`<sup>Required</sup> <a name="UnshareDirectory" id="@cdk_utils/iam.ds.DsActions.property.UnshareDirectory"></a>

```typescript
public readonly UnshareDirectory: string;
```

- *Type:* string

[Write] ds:UnshareDirectory.

---

##### `UpdateAuthorizedApplication`<sup>Required</sup> <a name="UpdateAuthorizedApplication" id="@cdk_utils/iam.ds.DsActions.property.UpdateAuthorizedApplication"></a>

```typescript
public readonly UpdateAuthorizedApplication: string;
```

- *Type:* string

[Write] ds:UpdateAuthorizedApplication.

---

##### `UpdateConditionalForwarder`<sup>Required</sup> <a name="UpdateConditionalForwarder" id="@cdk_utils/iam.ds.DsActions.property.UpdateConditionalForwarder"></a>

```typescript
public readonly UpdateConditionalForwarder: string;
```

- *Type:* string

[Write] ds:UpdateConditionalForwarder.

---

##### `UpdateDirectory`<sup>Required</sup> <a name="UpdateDirectory" id="@cdk_utils/iam.ds.DsActions.property.UpdateDirectory"></a>

```typescript
public readonly UpdateDirectory: string;
```

- *Type:* string

[Write] ds:UpdateDirectory.

---

##### `UpdateDirectorySetup`<sup>Required</sup> <a name="UpdateDirectorySetup" id="@cdk_utils/iam.ds.DsActions.property.UpdateDirectorySetup"></a>

```typescript
public readonly UpdateDirectorySetup: string;
```

- *Type:* string

[Write] ds:UpdateDirectorySetup.

---

##### `UpdateHybridAD`<sup>Required</sup> <a name="UpdateHybridAD" id="@cdk_utils/iam.ds.DsActions.property.UpdateHybridAD"></a>

```typescript
public readonly UpdateHybridAD: string;
```

- *Type:* string

[Write] ds:UpdateHybridAD.

---

##### `UpdateNumberOfDomainControllers`<sup>Required</sup> <a name="UpdateNumberOfDomainControllers" id="@cdk_utils/iam.ds.DsActions.property.UpdateNumberOfDomainControllers"></a>

```typescript
public readonly UpdateNumberOfDomainControllers: string;
```

- *Type:* string

[Write] ds:UpdateNumberOfDomainControllers.

---

##### `UpdateRadius`<sup>Required</sup> <a name="UpdateRadius" id="@cdk_utils/iam.ds.DsActions.property.UpdateRadius"></a>

```typescript
public readonly UpdateRadius: string;
```

- *Type:* string

[Write] ds:UpdateRadius.

---

##### `UpdateSettings`<sup>Required</sup> <a name="UpdateSettings" id="@cdk_utils/iam.ds.DsActions.property.UpdateSettings"></a>

```typescript
public readonly UpdateSettings: string;
```

- *Type:* string

[Write] ds:UpdateSettings.

---

##### `UpdateTrust`<sup>Required</sup> <a name="UpdateTrust" id="@cdk_utils/iam.ds.DsActions.property.UpdateTrust"></a>

```typescript
public readonly UpdateTrust: string;
```

- *Type:* string

[Write] ds:UpdateTrust.

---

##### `VerifyTrust`<sup>Required</sup> <a name="VerifyTrust" id="@cdk_utils/iam.ds.DsActions.property.VerifyTrust"></a>

```typescript
public readonly VerifyTrust: string;
```

- *Type:* string

[Read] ds:VerifyTrust.

---

### DsConditions <a name="DsConditions" id="@cdk_utils/iam.ds.DsConditions"></a>

Condition key constants and builders for ds.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ds.DsConditions.Initializer"></a>

```typescript
import { ds } from '@cdk_utils/iam'

new ds.DsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ds.DsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ds.DsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ds.DsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.ds.DsConditions.requestTag"></a>

```typescript
import { ds } from '@cdk_utils/iam'

ds.DsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ds.DsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.ds.DsConditions.resourceTag"></a>

```typescript
import { ds } from '@cdk_utils/iam'

ds.DsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ds.DsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.ds.DsConditions.tagKeys"></a>

```typescript
import { ds } from '@cdk_utils/iam'

ds.DsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ds.DsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ds.DsConditions.property.AddTagsToResourceConditionKeys">AddTagsToResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddTagsToResource action. |
| <code><a href="#@cdk_utils/iam.ds.DsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ds.DsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ds.DsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ds.DsConditions.property.ConnectDirectoryConditionKeys">ConnectDirectoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ConnectDirectory action. |
| <code><a href="#@cdk_utils/iam.ds.DsConditions.property.CreateDirectoryConditionKeys">CreateDirectoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDirectory action. |
| <code><a href="#@cdk_utils/iam.ds.DsConditions.property.CreateHybridADConditionKeys">CreateHybridADConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateHybridAD action. |
| <code><a href="#@cdk_utils/iam.ds.DsConditions.property.CreateIdentityPoolDirectoryConditionKeys">CreateIdentityPoolDirectoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIdentityPoolDirectory action. |
| <code><a href="#@cdk_utils/iam.ds.DsConditions.property.CreateMicrosoftADConditionKeys">CreateMicrosoftADConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMicrosoftAD action. |
| <code><a href="#@cdk_utils/iam.ds.DsConditions.property.RemoveTagsFromResourceConditionKeys">RemoveTagsFromResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoveTagsFromResource action. |

---

##### `AddTagsToResourceConditionKeys`<sup>Required</sup> <a name="AddTagsToResourceConditionKeys" id="@cdk_utils/iam.ds.DsConditions.property.AddTagsToResourceConditionKeys"></a>

```typescript
public readonly AddTagsToResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddTagsToResource action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.ds.DsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.ds.DsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.ds.DsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `ConnectDirectoryConditionKeys`<sup>Required</sup> <a name="ConnectDirectoryConditionKeys" id="@cdk_utils/iam.ds.DsConditions.property.ConnectDirectoryConditionKeys"></a>

```typescript
public readonly ConnectDirectoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ConnectDirectory action.

---

##### `CreateDirectoryConditionKeys`<sup>Required</sup> <a name="CreateDirectoryConditionKeys" id="@cdk_utils/iam.ds.DsConditions.property.CreateDirectoryConditionKeys"></a>

```typescript
public readonly CreateDirectoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDirectory action.

---

##### `CreateHybridADConditionKeys`<sup>Required</sup> <a name="CreateHybridADConditionKeys" id="@cdk_utils/iam.ds.DsConditions.property.CreateHybridADConditionKeys"></a>

```typescript
public readonly CreateHybridADConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateHybridAD action.

---

##### `CreateIdentityPoolDirectoryConditionKeys`<sup>Required</sup> <a name="CreateIdentityPoolDirectoryConditionKeys" id="@cdk_utils/iam.ds.DsConditions.property.CreateIdentityPoolDirectoryConditionKeys"></a>

```typescript
public readonly CreateIdentityPoolDirectoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIdentityPoolDirectory action.

---

##### `CreateMicrosoftADConditionKeys`<sup>Required</sup> <a name="CreateMicrosoftADConditionKeys" id="@cdk_utils/iam.ds.DsConditions.property.CreateMicrosoftADConditionKeys"></a>

```typescript
public readonly CreateMicrosoftADConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMicrosoftAD action.

---

##### `RemoveTagsFromResourceConditionKeys`<sup>Required</sup> <a name="RemoveTagsFromResourceConditionKeys" id="@cdk_utils/iam.ds.DsConditions.property.RemoveTagsFromResourceConditionKeys"></a>

```typescript
public readonly RemoveTagsFromResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoveTagsFromResource action.

---

### DsOperations <a name="DsOperations" id="@cdk_utils/iam.ds.DsOperations"></a>

API operation to required IAM actions mapping for ds.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ds.DsOperations.Initializer"></a>

```typescript
import { ds } from '@cdk_utils/iam'

new ds.DsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.AcceptSharedDirectory">AcceptSharedDirectory</a></code> | <code>string[]</code> | IAM actions required for the AcceptSharedDirectory API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.AddIpRoutes">AddIpRoutes</a></code> | <code>string[]</code> | IAM actions required for the AddIpRoutes API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.AddRegion">AddRegion</a></code> | <code>string[]</code> | IAM actions required for the AddRegion API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.AddTagsToResource">AddTagsToResource</a></code> | <code>string[]</code> | IAM actions required for the AddTagsToResource API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.CancelSchemaExtension">CancelSchemaExtension</a></code> | <code>string[]</code> | IAM actions required for the CancelSchemaExtension API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.ConnectDirectory">ConnectDirectory</a></code> | <code>string[]</code> | IAM actions required for the ConnectDirectory API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.CreateAlias">CreateAlias</a></code> | <code>string[]</code> | IAM actions required for the CreateAlias API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.CreateComputer">CreateComputer</a></code> | <code>string[]</code> | IAM actions required for the CreateComputer API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.CreateConditionalForwarder">CreateConditionalForwarder</a></code> | <code>string[]</code> | IAM actions required for the CreateConditionalForwarder API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.CreateDirectory">CreateDirectory</a></code> | <code>string[]</code> | IAM actions required for the CreateDirectory API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.CreateHybridAD">CreateHybridAD</a></code> | <code>string[]</code> | IAM actions required for the CreateHybridAD API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.CreateLogSubscription">CreateLogSubscription</a></code> | <code>string[]</code> | IAM actions required for the CreateLogSubscription API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.CreateMicrosoftAD">CreateMicrosoftAD</a></code> | <code>string[]</code> | IAM actions required for the CreateMicrosoftAD API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.CreateSnapshot">CreateSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateSnapshot API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.CreateTrust">CreateTrust</a></code> | <code>string[]</code> | IAM actions required for the CreateTrust API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DeleteADAssessment">DeleteADAssessment</a></code> | <code>string[]</code> | IAM actions required for the DeleteADAssessment API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DeleteConditionalForwarder">DeleteConditionalForwarder</a></code> | <code>string[]</code> | IAM actions required for the DeleteConditionalForwarder API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DeleteDirectory">DeleteDirectory</a></code> | <code>string[]</code> | IAM actions required for the DeleteDirectory API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DeleteLogSubscription">DeleteLogSubscription</a></code> | <code>string[]</code> | IAM actions required for the DeleteLogSubscription API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DeleteSnapshot">DeleteSnapshot</a></code> | <code>string[]</code> | IAM actions required for the DeleteSnapshot API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DeleteTrust">DeleteTrust</a></code> | <code>string[]</code> | IAM actions required for the DeleteTrust API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DeregisterCertificate">DeregisterCertificate</a></code> | <code>string[]</code> | IAM actions required for the DeregisterCertificate API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DeregisterEventTopic">DeregisterEventTopic</a></code> | <code>string[]</code> | IAM actions required for the DeregisterEventTopic API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DescribeADAssessment">DescribeADAssessment</a></code> | <code>string[]</code> | IAM actions required for the DescribeADAssessment API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DescribeCAEnrollmentPolicy">DescribeCAEnrollmentPolicy</a></code> | <code>string[]</code> | IAM actions required for the DescribeCAEnrollmentPolicy API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DescribeCertificate">DescribeCertificate</a></code> | <code>string[]</code> | IAM actions required for the DescribeCertificate API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DescribeClientAuthenticationSettings">DescribeClientAuthenticationSettings</a></code> | <code>string[]</code> | IAM actions required for the DescribeClientAuthenticationSettings API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DescribeConditionalForwarders">DescribeConditionalForwarders</a></code> | <code>string[]</code> | IAM actions required for the DescribeConditionalForwarders API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DescribeDirectories">DescribeDirectories</a></code> | <code>string[]</code> | IAM actions required for the DescribeDirectories API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DescribeDirectoryDataAccess">DescribeDirectoryDataAccess</a></code> | <code>string[]</code> | IAM actions required for the DescribeDirectoryDataAccess API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DescribeDomainControllers">DescribeDomainControllers</a></code> | <code>string[]</code> | IAM actions required for the DescribeDomainControllers API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DescribeEventTopics">DescribeEventTopics</a></code> | <code>string[]</code> | IAM actions required for the DescribeEventTopics API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DescribeHybridADUpdate">DescribeHybridADUpdate</a></code> | <code>string[]</code> | IAM actions required for the DescribeHybridADUpdate API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DescribeLDAPSSettings">DescribeLDAPSSettings</a></code> | <code>string[]</code> | IAM actions required for the DescribeLDAPSSettings API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DescribeRegions">DescribeRegions</a></code> | <code>string[]</code> | IAM actions required for the DescribeRegions API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DescribeSettings">DescribeSettings</a></code> | <code>string[]</code> | IAM actions required for the DescribeSettings API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DescribeSharedDirectories">DescribeSharedDirectories</a></code> | <code>string[]</code> | IAM actions required for the DescribeSharedDirectories API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DescribeSnapshots">DescribeSnapshots</a></code> | <code>string[]</code> | IAM actions required for the DescribeSnapshots API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DescribeTrusts">DescribeTrusts</a></code> | <code>string[]</code> | IAM actions required for the DescribeTrusts API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DescribeUpdateDirectory">DescribeUpdateDirectory</a></code> | <code>string[]</code> | IAM actions required for the DescribeUpdateDirectory API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DisableCAEnrollmentPolicy">DisableCAEnrollmentPolicy</a></code> | <code>string[]</code> | IAM actions required for the DisableCAEnrollmentPolicy API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DisableClientAuthentication">DisableClientAuthentication</a></code> | <code>string[]</code> | IAM actions required for the DisableClientAuthentication API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DisableDirectoryDataAccess">DisableDirectoryDataAccess</a></code> | <code>string[]</code> | IAM actions required for the DisableDirectoryDataAccess API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DisableLDAPS">DisableLDAPS</a></code> | <code>string[]</code> | IAM actions required for the DisableLDAPS API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DisableRadius">DisableRadius</a></code> | <code>string[]</code> | IAM actions required for the DisableRadius API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.DisableSso">DisableSso</a></code> | <code>string[]</code> | IAM actions required for the DisableSso API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.EnableCAEnrollmentPolicy">EnableCAEnrollmentPolicy</a></code> | <code>string[]</code> | IAM actions required for the EnableCAEnrollmentPolicy API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.EnableClientAuthentication">EnableClientAuthentication</a></code> | <code>string[]</code> | IAM actions required for the EnableClientAuthentication API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.EnableDirectoryDataAccess">EnableDirectoryDataAccess</a></code> | <code>string[]</code> | IAM actions required for the EnableDirectoryDataAccess API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.EnableLDAPS">EnableLDAPS</a></code> | <code>string[]</code> | IAM actions required for the EnableLDAPS API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.EnableRadius">EnableRadius</a></code> | <code>string[]</code> | IAM actions required for the EnableRadius API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.EnableSso">EnableSso</a></code> | <code>string[]</code> | IAM actions required for the EnableSso API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.ListADAssessments">ListADAssessments</a></code> | <code>string[]</code> | IAM actions required for the ListADAssessments API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.ListCertificates">ListCertificates</a></code> | <code>string[]</code> | IAM actions required for the ListCertificates API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.ListIpRoutes">ListIpRoutes</a></code> | <code>string[]</code> | IAM actions required for the ListIpRoutes API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.ListLogSubscriptions">ListLogSubscriptions</a></code> | <code>string[]</code> | IAM actions required for the ListLogSubscriptions API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.ListSchemaExtensions">ListSchemaExtensions</a></code> | <code>string[]</code> | IAM actions required for the ListSchemaExtensions API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.opGetDirectoryLimits">opGetDirectoryLimits</a></code> | <code>string[]</code> | IAM actions required for the GetDirectoryLimits API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.opGetSnapshotLimits">opGetSnapshotLimits</a></code> | <code>string[]</code> | IAM actions required for the GetSnapshotLimits API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.RegisterCertificate">RegisterCertificate</a></code> | <code>string[]</code> | IAM actions required for the RegisterCertificate API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.RegisterEventTopic">RegisterEventTopic</a></code> | <code>string[]</code> | IAM actions required for the RegisterEventTopic API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.RejectSharedDirectory">RejectSharedDirectory</a></code> | <code>string[]</code> | IAM actions required for the RejectSharedDirectory API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.RemoveIpRoutes">RemoveIpRoutes</a></code> | <code>string[]</code> | IAM actions required for the RemoveIpRoutes API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.RemoveRegion">RemoveRegion</a></code> | <code>string[]</code> | IAM actions required for the RemoveRegion API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.RemoveTagsFromResource">RemoveTagsFromResource</a></code> | <code>string[]</code> | IAM actions required for the RemoveTagsFromResource API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.ResetUserPassword">ResetUserPassword</a></code> | <code>string[]</code> | IAM actions required for the ResetUserPassword API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.RestoreFromSnapshot">RestoreFromSnapshot</a></code> | <code>string[]</code> | IAM actions required for the RestoreFromSnapshot API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.ShareDirectory">ShareDirectory</a></code> | <code>string[]</code> | IAM actions required for the ShareDirectory API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.StartADAssessment">StartADAssessment</a></code> | <code>string[]</code> | IAM actions required for the StartADAssessment API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.StartSchemaExtension">StartSchemaExtension</a></code> | <code>string[]</code> | IAM actions required for the StartSchemaExtension API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.UnshareDirectory">UnshareDirectory</a></code> | <code>string[]</code> | IAM actions required for the UnshareDirectory API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.UpdateConditionalForwarder">UpdateConditionalForwarder</a></code> | <code>string[]</code> | IAM actions required for the UpdateConditionalForwarder API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.UpdateDirectorySetup">UpdateDirectorySetup</a></code> | <code>string[]</code> | IAM actions required for the UpdateDirectorySetup API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.UpdateHybridAD">UpdateHybridAD</a></code> | <code>string[]</code> | IAM actions required for the UpdateHybridAD API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.UpdateNumberOfDomainControllers">UpdateNumberOfDomainControllers</a></code> | <code>string[]</code> | IAM actions required for the UpdateNumberOfDomainControllers API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.UpdateRadius">UpdateRadius</a></code> | <code>string[]</code> | IAM actions required for the UpdateRadius API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.UpdateSettings">UpdateSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateSettings API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.UpdateTrust">UpdateTrust</a></code> | <code>string[]</code> | IAM actions required for the UpdateTrust API call. |
| <code><a href="#@cdk_utils/iam.ds.DsOperations.property.VerifyTrust">VerifyTrust</a></code> | <code>string[]</code> | IAM actions required for the VerifyTrust API call. |

---

##### `AcceptSharedDirectory`<sup>Required</sup> <a name="AcceptSharedDirectory" id="@cdk_utils/iam.ds.DsOperations.property.AcceptSharedDirectory"></a>

```typescript
public readonly AcceptSharedDirectory: string[];
```

- *Type:* string[]

IAM actions required for the AcceptSharedDirectory API call.

---

##### `AddIpRoutes`<sup>Required</sup> <a name="AddIpRoutes" id="@cdk_utils/iam.ds.DsOperations.property.AddIpRoutes"></a>

```typescript
public readonly AddIpRoutes: string[];
```

- *Type:* string[]

IAM actions required for the AddIpRoutes API call.

---

##### `AddRegion`<sup>Required</sup> <a name="AddRegion" id="@cdk_utils/iam.ds.DsOperations.property.AddRegion"></a>

```typescript
public readonly AddRegion: string[];
```

- *Type:* string[]

IAM actions required for the AddRegion API call.

---

##### `AddTagsToResource`<sup>Required</sup> <a name="AddTagsToResource" id="@cdk_utils/iam.ds.DsOperations.property.AddTagsToResource"></a>

```typescript
public readonly AddTagsToResource: string[];
```

- *Type:* string[]

IAM actions required for the AddTagsToResource API call.

---

##### `CancelSchemaExtension`<sup>Required</sup> <a name="CancelSchemaExtension" id="@cdk_utils/iam.ds.DsOperations.property.CancelSchemaExtension"></a>

```typescript
public readonly CancelSchemaExtension: string[];
```

- *Type:* string[]

IAM actions required for the CancelSchemaExtension API call.

---

##### `ConnectDirectory`<sup>Required</sup> <a name="ConnectDirectory" id="@cdk_utils/iam.ds.DsOperations.property.ConnectDirectory"></a>

```typescript
public readonly ConnectDirectory: string[];
```

- *Type:* string[]

IAM actions required for the ConnectDirectory API call.

---

##### `CreateAlias`<sup>Required</sup> <a name="CreateAlias" id="@cdk_utils/iam.ds.DsOperations.property.CreateAlias"></a>

```typescript
public readonly CreateAlias: string[];
```

- *Type:* string[]

IAM actions required for the CreateAlias API call.

---

##### `CreateComputer`<sup>Required</sup> <a name="CreateComputer" id="@cdk_utils/iam.ds.DsOperations.property.CreateComputer"></a>

```typescript
public readonly CreateComputer: string[];
```

- *Type:* string[]

IAM actions required for the CreateComputer API call.

---

##### `CreateConditionalForwarder`<sup>Required</sup> <a name="CreateConditionalForwarder" id="@cdk_utils/iam.ds.DsOperations.property.CreateConditionalForwarder"></a>

```typescript
public readonly CreateConditionalForwarder: string[];
```

- *Type:* string[]

IAM actions required for the CreateConditionalForwarder API call.

---

##### `CreateDirectory`<sup>Required</sup> <a name="CreateDirectory" id="@cdk_utils/iam.ds.DsOperations.property.CreateDirectory"></a>

```typescript
public readonly CreateDirectory: string[];
```

- *Type:* string[]

IAM actions required for the CreateDirectory API call.

---

##### `CreateHybridAD`<sup>Required</sup> <a name="CreateHybridAD" id="@cdk_utils/iam.ds.DsOperations.property.CreateHybridAD"></a>

```typescript
public readonly CreateHybridAD: string[];
```

- *Type:* string[]

IAM actions required for the CreateHybridAD API call.

---

##### `CreateLogSubscription`<sup>Required</sup> <a name="CreateLogSubscription" id="@cdk_utils/iam.ds.DsOperations.property.CreateLogSubscription"></a>

```typescript
public readonly CreateLogSubscription: string[];
```

- *Type:* string[]

IAM actions required for the CreateLogSubscription API call.

---

##### `CreateMicrosoftAD`<sup>Required</sup> <a name="CreateMicrosoftAD" id="@cdk_utils/iam.ds.DsOperations.property.CreateMicrosoftAD"></a>

```typescript
public readonly CreateMicrosoftAD: string[];
```

- *Type:* string[]

IAM actions required for the CreateMicrosoftAD API call.

---

##### `CreateSnapshot`<sup>Required</sup> <a name="CreateSnapshot" id="@cdk_utils/iam.ds.DsOperations.property.CreateSnapshot"></a>

```typescript
public readonly CreateSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateSnapshot API call.

---

##### `CreateTrust`<sup>Required</sup> <a name="CreateTrust" id="@cdk_utils/iam.ds.DsOperations.property.CreateTrust"></a>

```typescript
public readonly CreateTrust: string[];
```

- *Type:* string[]

IAM actions required for the CreateTrust API call.

---

##### `DeleteADAssessment`<sup>Required</sup> <a name="DeleteADAssessment" id="@cdk_utils/iam.ds.DsOperations.property.DeleteADAssessment"></a>

```typescript
public readonly DeleteADAssessment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteADAssessment API call.

---

##### `DeleteConditionalForwarder`<sup>Required</sup> <a name="DeleteConditionalForwarder" id="@cdk_utils/iam.ds.DsOperations.property.DeleteConditionalForwarder"></a>

```typescript
public readonly DeleteConditionalForwarder: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConditionalForwarder API call.

---

##### `DeleteDirectory`<sup>Required</sup> <a name="DeleteDirectory" id="@cdk_utils/iam.ds.DsOperations.property.DeleteDirectory"></a>

```typescript
public readonly DeleteDirectory: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDirectory API call.

---

##### `DeleteLogSubscription`<sup>Required</sup> <a name="DeleteLogSubscription" id="@cdk_utils/iam.ds.DsOperations.property.DeleteLogSubscription"></a>

```typescript
public readonly DeleteLogSubscription: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLogSubscription API call.

---

##### `DeleteSnapshot`<sup>Required</sup> <a name="DeleteSnapshot" id="@cdk_utils/iam.ds.DsOperations.property.DeleteSnapshot"></a>

```typescript
public readonly DeleteSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSnapshot API call.

---

##### `DeleteTrust`<sup>Required</sup> <a name="DeleteTrust" id="@cdk_utils/iam.ds.DsOperations.property.DeleteTrust"></a>

```typescript
public readonly DeleteTrust: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTrust API call.

---

##### `DeregisterCertificate`<sup>Required</sup> <a name="DeregisterCertificate" id="@cdk_utils/iam.ds.DsOperations.property.DeregisterCertificate"></a>

```typescript
public readonly DeregisterCertificate: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterCertificate API call.

---

##### `DeregisterEventTopic`<sup>Required</sup> <a name="DeregisterEventTopic" id="@cdk_utils/iam.ds.DsOperations.property.DeregisterEventTopic"></a>

```typescript
public readonly DeregisterEventTopic: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterEventTopic API call.

---

##### `DescribeADAssessment`<sup>Required</sup> <a name="DescribeADAssessment" id="@cdk_utils/iam.ds.DsOperations.property.DescribeADAssessment"></a>

```typescript
public readonly DescribeADAssessment: string[];
```

- *Type:* string[]

IAM actions required for the DescribeADAssessment API call.

---

##### `DescribeCAEnrollmentPolicy`<sup>Required</sup> <a name="DescribeCAEnrollmentPolicy" id="@cdk_utils/iam.ds.DsOperations.property.DescribeCAEnrollmentPolicy"></a>

```typescript
public readonly DescribeCAEnrollmentPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCAEnrollmentPolicy API call.

---

##### `DescribeCertificate`<sup>Required</sup> <a name="DescribeCertificate" id="@cdk_utils/iam.ds.DsOperations.property.DescribeCertificate"></a>

```typescript
public readonly DescribeCertificate: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCertificate API call.

---

##### `DescribeClientAuthenticationSettings`<sup>Required</sup> <a name="DescribeClientAuthenticationSettings" id="@cdk_utils/iam.ds.DsOperations.property.DescribeClientAuthenticationSettings"></a>

```typescript
public readonly DescribeClientAuthenticationSettings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClientAuthenticationSettings API call.

---

##### `DescribeConditionalForwarders`<sup>Required</sup> <a name="DescribeConditionalForwarders" id="@cdk_utils/iam.ds.DsOperations.property.DescribeConditionalForwarders"></a>

```typescript
public readonly DescribeConditionalForwarders: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConditionalForwarders API call.

---

##### `DescribeDirectories`<sup>Required</sup> <a name="DescribeDirectories" id="@cdk_utils/iam.ds.DsOperations.property.DescribeDirectories"></a>

```typescript
public readonly DescribeDirectories: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDirectories API call.

---

##### `DescribeDirectoryDataAccess`<sup>Required</sup> <a name="DescribeDirectoryDataAccess" id="@cdk_utils/iam.ds.DsOperations.property.DescribeDirectoryDataAccess"></a>

```typescript
public readonly DescribeDirectoryDataAccess: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDirectoryDataAccess API call.

---

##### `DescribeDomainControllers`<sup>Required</sup> <a name="DescribeDomainControllers" id="@cdk_utils/iam.ds.DsOperations.property.DescribeDomainControllers"></a>

```typescript
public readonly DescribeDomainControllers: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDomainControllers API call.

---

##### `DescribeEventTopics`<sup>Required</sup> <a name="DescribeEventTopics" id="@cdk_utils/iam.ds.DsOperations.property.DescribeEventTopics"></a>

```typescript
public readonly DescribeEventTopics: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEventTopics API call.

---

##### `DescribeHybridADUpdate`<sup>Required</sup> <a name="DescribeHybridADUpdate" id="@cdk_utils/iam.ds.DsOperations.property.DescribeHybridADUpdate"></a>

```typescript
public readonly DescribeHybridADUpdate: string[];
```

- *Type:* string[]

IAM actions required for the DescribeHybridADUpdate API call.

---

##### `DescribeLDAPSSettings`<sup>Required</sup> <a name="DescribeLDAPSSettings" id="@cdk_utils/iam.ds.DsOperations.property.DescribeLDAPSSettings"></a>

```typescript
public readonly DescribeLDAPSSettings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLDAPSSettings API call.

---

##### `DescribeRegions`<sup>Required</sup> <a name="DescribeRegions" id="@cdk_utils/iam.ds.DsOperations.property.DescribeRegions"></a>

```typescript
public readonly DescribeRegions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRegions API call.

---

##### `DescribeSettings`<sup>Required</sup> <a name="DescribeSettings" id="@cdk_utils/iam.ds.DsOperations.property.DescribeSettings"></a>

```typescript
public readonly DescribeSettings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSettings API call.

---

##### `DescribeSharedDirectories`<sup>Required</sup> <a name="DescribeSharedDirectories" id="@cdk_utils/iam.ds.DsOperations.property.DescribeSharedDirectories"></a>

```typescript
public readonly DescribeSharedDirectories: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSharedDirectories API call.

---

##### `DescribeSnapshots`<sup>Required</sup> <a name="DescribeSnapshots" id="@cdk_utils/iam.ds.DsOperations.property.DescribeSnapshots"></a>

```typescript
public readonly DescribeSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSnapshots API call.

---

##### `DescribeTrusts`<sup>Required</sup> <a name="DescribeTrusts" id="@cdk_utils/iam.ds.DsOperations.property.DescribeTrusts"></a>

```typescript
public readonly DescribeTrusts: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTrusts API call.

---

##### `DescribeUpdateDirectory`<sup>Required</sup> <a name="DescribeUpdateDirectory" id="@cdk_utils/iam.ds.DsOperations.property.DescribeUpdateDirectory"></a>

```typescript
public readonly DescribeUpdateDirectory: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUpdateDirectory API call.

---

##### `DisableCAEnrollmentPolicy`<sup>Required</sup> <a name="DisableCAEnrollmentPolicy" id="@cdk_utils/iam.ds.DsOperations.property.DisableCAEnrollmentPolicy"></a>

```typescript
public readonly DisableCAEnrollmentPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DisableCAEnrollmentPolicy API call.

---

##### `DisableClientAuthentication`<sup>Required</sup> <a name="DisableClientAuthentication" id="@cdk_utils/iam.ds.DsOperations.property.DisableClientAuthentication"></a>

```typescript
public readonly DisableClientAuthentication: string[];
```

- *Type:* string[]

IAM actions required for the DisableClientAuthentication API call.

---

##### `DisableDirectoryDataAccess`<sup>Required</sup> <a name="DisableDirectoryDataAccess" id="@cdk_utils/iam.ds.DsOperations.property.DisableDirectoryDataAccess"></a>

```typescript
public readonly DisableDirectoryDataAccess: string[];
```

- *Type:* string[]

IAM actions required for the DisableDirectoryDataAccess API call.

---

##### `DisableLDAPS`<sup>Required</sup> <a name="DisableLDAPS" id="@cdk_utils/iam.ds.DsOperations.property.DisableLDAPS"></a>

```typescript
public readonly DisableLDAPS: string[];
```

- *Type:* string[]

IAM actions required for the DisableLDAPS API call.

---

##### `DisableRadius`<sup>Required</sup> <a name="DisableRadius" id="@cdk_utils/iam.ds.DsOperations.property.DisableRadius"></a>

```typescript
public readonly DisableRadius: string[];
```

- *Type:* string[]

IAM actions required for the DisableRadius API call.

---

##### `DisableSso`<sup>Required</sup> <a name="DisableSso" id="@cdk_utils/iam.ds.DsOperations.property.DisableSso"></a>

```typescript
public readonly DisableSso: string[];
```

- *Type:* string[]

IAM actions required for the DisableSso API call.

---

##### `EnableCAEnrollmentPolicy`<sup>Required</sup> <a name="EnableCAEnrollmentPolicy" id="@cdk_utils/iam.ds.DsOperations.property.EnableCAEnrollmentPolicy"></a>

```typescript
public readonly EnableCAEnrollmentPolicy: string[];
```

- *Type:* string[]

IAM actions required for the EnableCAEnrollmentPolicy API call.

---

##### `EnableClientAuthentication`<sup>Required</sup> <a name="EnableClientAuthentication" id="@cdk_utils/iam.ds.DsOperations.property.EnableClientAuthentication"></a>

```typescript
public readonly EnableClientAuthentication: string[];
```

- *Type:* string[]

IAM actions required for the EnableClientAuthentication API call.

---

##### `EnableDirectoryDataAccess`<sup>Required</sup> <a name="EnableDirectoryDataAccess" id="@cdk_utils/iam.ds.DsOperations.property.EnableDirectoryDataAccess"></a>

```typescript
public readonly EnableDirectoryDataAccess: string[];
```

- *Type:* string[]

IAM actions required for the EnableDirectoryDataAccess API call.

---

##### `EnableLDAPS`<sup>Required</sup> <a name="EnableLDAPS" id="@cdk_utils/iam.ds.DsOperations.property.EnableLDAPS"></a>

```typescript
public readonly EnableLDAPS: string[];
```

- *Type:* string[]

IAM actions required for the EnableLDAPS API call.

---

##### `EnableRadius`<sup>Required</sup> <a name="EnableRadius" id="@cdk_utils/iam.ds.DsOperations.property.EnableRadius"></a>

```typescript
public readonly EnableRadius: string[];
```

- *Type:* string[]

IAM actions required for the EnableRadius API call.

---

##### `EnableSso`<sup>Required</sup> <a name="EnableSso" id="@cdk_utils/iam.ds.DsOperations.property.EnableSso"></a>

```typescript
public readonly EnableSso: string[];
```

- *Type:* string[]

IAM actions required for the EnableSso API call.

---

##### `ListADAssessments`<sup>Required</sup> <a name="ListADAssessments" id="@cdk_utils/iam.ds.DsOperations.property.ListADAssessments"></a>

```typescript
public readonly ListADAssessments: string[];
```

- *Type:* string[]

IAM actions required for the ListADAssessments API call.

---

##### `ListCertificates`<sup>Required</sup> <a name="ListCertificates" id="@cdk_utils/iam.ds.DsOperations.property.ListCertificates"></a>

```typescript
public readonly ListCertificates: string[];
```

- *Type:* string[]

IAM actions required for the ListCertificates API call.

---

##### `ListIpRoutes`<sup>Required</sup> <a name="ListIpRoutes" id="@cdk_utils/iam.ds.DsOperations.property.ListIpRoutes"></a>

```typescript
public readonly ListIpRoutes: string[];
```

- *Type:* string[]

IAM actions required for the ListIpRoutes API call.

---

##### `ListLogSubscriptions`<sup>Required</sup> <a name="ListLogSubscriptions" id="@cdk_utils/iam.ds.DsOperations.property.ListLogSubscriptions"></a>

```typescript
public readonly ListLogSubscriptions: string[];
```

- *Type:* string[]

IAM actions required for the ListLogSubscriptions API call.

---

##### `ListSchemaExtensions`<sup>Required</sup> <a name="ListSchemaExtensions" id="@cdk_utils/iam.ds.DsOperations.property.ListSchemaExtensions"></a>

```typescript
public readonly ListSchemaExtensions: string[];
```

- *Type:* string[]

IAM actions required for the ListSchemaExtensions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ds.DsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetDirectoryLimits`<sup>Required</sup> <a name="opGetDirectoryLimits" id="@cdk_utils/iam.ds.DsOperations.property.opGetDirectoryLimits"></a>

```typescript
public readonly opGetDirectoryLimits: string[];
```

- *Type:* string[]

IAM actions required for the GetDirectoryLimits API call.

---

##### `opGetSnapshotLimits`<sup>Required</sup> <a name="opGetSnapshotLimits" id="@cdk_utils/iam.ds.DsOperations.property.opGetSnapshotLimits"></a>

```typescript
public readonly opGetSnapshotLimits: string[];
```

- *Type:* string[]

IAM actions required for the GetSnapshotLimits API call.

---

##### `RegisterCertificate`<sup>Required</sup> <a name="RegisterCertificate" id="@cdk_utils/iam.ds.DsOperations.property.RegisterCertificate"></a>

```typescript
public readonly RegisterCertificate: string[];
```

- *Type:* string[]

IAM actions required for the RegisterCertificate API call.

---

##### `RegisterEventTopic`<sup>Required</sup> <a name="RegisterEventTopic" id="@cdk_utils/iam.ds.DsOperations.property.RegisterEventTopic"></a>

```typescript
public readonly RegisterEventTopic: string[];
```

- *Type:* string[]

IAM actions required for the RegisterEventTopic API call.

---

##### `RejectSharedDirectory`<sup>Required</sup> <a name="RejectSharedDirectory" id="@cdk_utils/iam.ds.DsOperations.property.RejectSharedDirectory"></a>

```typescript
public readonly RejectSharedDirectory: string[];
```

- *Type:* string[]

IAM actions required for the RejectSharedDirectory API call.

---

##### `RemoveIpRoutes`<sup>Required</sup> <a name="RemoveIpRoutes" id="@cdk_utils/iam.ds.DsOperations.property.RemoveIpRoutes"></a>

```typescript
public readonly RemoveIpRoutes: string[];
```

- *Type:* string[]

IAM actions required for the RemoveIpRoutes API call.

---

##### `RemoveRegion`<sup>Required</sup> <a name="RemoveRegion" id="@cdk_utils/iam.ds.DsOperations.property.RemoveRegion"></a>

```typescript
public readonly RemoveRegion: string[];
```

- *Type:* string[]

IAM actions required for the RemoveRegion API call.

---

##### `RemoveTagsFromResource`<sup>Required</sup> <a name="RemoveTagsFromResource" id="@cdk_utils/iam.ds.DsOperations.property.RemoveTagsFromResource"></a>

```typescript
public readonly RemoveTagsFromResource: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTagsFromResource API call.

---

##### `ResetUserPassword`<sup>Required</sup> <a name="ResetUserPassword" id="@cdk_utils/iam.ds.DsOperations.property.ResetUserPassword"></a>

```typescript
public readonly ResetUserPassword: string[];
```

- *Type:* string[]

IAM actions required for the ResetUserPassword API call.

---

##### `RestoreFromSnapshot`<sup>Required</sup> <a name="RestoreFromSnapshot" id="@cdk_utils/iam.ds.DsOperations.property.RestoreFromSnapshot"></a>

```typescript
public readonly RestoreFromSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the RestoreFromSnapshot API call.

---

##### `ShareDirectory`<sup>Required</sup> <a name="ShareDirectory" id="@cdk_utils/iam.ds.DsOperations.property.ShareDirectory"></a>

```typescript
public readonly ShareDirectory: string[];
```

- *Type:* string[]

IAM actions required for the ShareDirectory API call.

---

##### `StartADAssessment`<sup>Required</sup> <a name="StartADAssessment" id="@cdk_utils/iam.ds.DsOperations.property.StartADAssessment"></a>

```typescript
public readonly StartADAssessment: string[];
```

- *Type:* string[]

IAM actions required for the StartADAssessment API call.

---

##### `StartSchemaExtension`<sup>Required</sup> <a name="StartSchemaExtension" id="@cdk_utils/iam.ds.DsOperations.property.StartSchemaExtension"></a>

```typescript
public readonly StartSchemaExtension: string[];
```

- *Type:* string[]

IAM actions required for the StartSchemaExtension API call.

---

##### `UnshareDirectory`<sup>Required</sup> <a name="UnshareDirectory" id="@cdk_utils/iam.ds.DsOperations.property.UnshareDirectory"></a>

```typescript
public readonly UnshareDirectory: string[];
```

- *Type:* string[]

IAM actions required for the UnshareDirectory API call.

---

##### `UpdateConditionalForwarder`<sup>Required</sup> <a name="UpdateConditionalForwarder" id="@cdk_utils/iam.ds.DsOperations.property.UpdateConditionalForwarder"></a>

```typescript
public readonly UpdateConditionalForwarder: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConditionalForwarder API call.

---

##### `UpdateDirectorySetup`<sup>Required</sup> <a name="UpdateDirectorySetup" id="@cdk_utils/iam.ds.DsOperations.property.UpdateDirectorySetup"></a>

```typescript
public readonly UpdateDirectorySetup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDirectorySetup API call.

---

##### `UpdateHybridAD`<sup>Required</sup> <a name="UpdateHybridAD" id="@cdk_utils/iam.ds.DsOperations.property.UpdateHybridAD"></a>

```typescript
public readonly UpdateHybridAD: string[];
```

- *Type:* string[]

IAM actions required for the UpdateHybridAD API call.

---

##### `UpdateNumberOfDomainControllers`<sup>Required</sup> <a name="UpdateNumberOfDomainControllers" id="@cdk_utils/iam.ds.DsOperations.property.UpdateNumberOfDomainControllers"></a>

```typescript
public readonly UpdateNumberOfDomainControllers: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNumberOfDomainControllers API call.

---

##### `UpdateRadius`<sup>Required</sup> <a name="UpdateRadius" id="@cdk_utils/iam.ds.DsOperations.property.UpdateRadius"></a>

```typescript
public readonly UpdateRadius: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRadius API call.

---

##### `UpdateSettings`<sup>Required</sup> <a name="UpdateSettings" id="@cdk_utils/iam.ds.DsOperations.property.UpdateSettings"></a>

```typescript
public readonly UpdateSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSettings API call.

---

##### `UpdateTrust`<sup>Required</sup> <a name="UpdateTrust" id="@cdk_utils/iam.ds.DsOperations.property.UpdateTrust"></a>

```typescript
public readonly UpdateTrust: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTrust API call.

---

##### `VerifyTrust`<sup>Required</sup> <a name="VerifyTrust" id="@cdk_utils/iam.ds.DsOperations.property.VerifyTrust"></a>

```typescript
public readonly VerifyTrust: string[];
```

- *Type:* string[]

IAM actions required for the VerifyTrust API call.

---

### DsResources <a name="DsResources" id="@cdk_utils/iam.ds.DsResources"></a>

ARN builders, validators, and parsers for ds resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ds.DsResources.Initializer"></a>

```typescript
import { ds } from '@cdk_utils/iam'

new ds.DsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ds.DsResources.directory">directory</a></code> | Builds an ARN for the directory resource. |
| <code><a href="#@cdk_utils/iam.ds.DsResources.isValidDirectoryArn">isValidDirectoryArn</a></code> | Validates whether a string is a valid ARN for the directory resource. |
| <code><a href="#@cdk_utils/iam.ds.DsResources.parseDirectoryArn">parseDirectoryArn</a></code> | Parses a directory ARN into its components. |

---

##### `directory` <a name="directory" id="@cdk_utils/iam.ds.DsResources.directory"></a>

```typescript
import { ds } from '@cdk_utils/iam'

ds.DsResources.directory(props: DsDirectoryArnProps)
```

Builds an ARN for the directory resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ds.DsResources.directory.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ds.DsDirectoryArnProps">DsDirectoryArnProps</a>

---

##### `isValidDirectoryArn` <a name="isValidDirectoryArn" id="@cdk_utils/iam.ds.DsResources.isValidDirectoryArn"></a>

```typescript
import { ds } from '@cdk_utils/iam'

ds.DsResources.isValidDirectoryArn(arn: string)
```

Validates whether a string is a valid ARN for the directory resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ds.DsResources.isValidDirectoryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDirectoryArn` <a name="parseDirectoryArn" id="@cdk_utils/iam.ds.DsResources.parseDirectoryArn"></a>

```typescript
import { ds } from '@cdk_utils/iam'

ds.DsResources.parseDirectoryArn(arn: string)
```

Parses a directory ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ds.DsResources.parseDirectoryArn.parameter.arn"></a>

- *Type:* string

---




