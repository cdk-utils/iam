# `workmail` Submodule <a name="`workmail` Submodule" id="@cdk_utils/iam.workmail"></a>


## Structs <a name="Structs" id="Structs"></a>

### WorkMailOrganizationArnComponents <a name="WorkMailOrganizationArnComponents" id="@cdk_utils/iam.workmail.WorkMailOrganizationArnComponents"></a>

Parsed components of a organization ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workmail.WorkMailOrganizationArnComponents.Initializer"></a>

```typescript
import { workmail } from '@cdk_utils/iam'

const workMailOrganizationArnComponents: workmail.WorkMailOrganizationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOrganizationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOrganizationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOrganizationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOrganizationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workmail.WorkMailOrganizationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workmail.WorkMailOrganizationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workmail.WorkMailOrganizationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.workmail.WorkMailOrganizationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### WorkMailOrganizationArnProps <a name="WorkMailOrganizationArnProps" id="@cdk_utils/iam.workmail.WorkMailOrganizationArnProps"></a>

Properties for building a organization ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workmail.WorkMailOrganizationArnProps.Initializer"></a>

```typescript
import { workmail } from '@cdk_utils/iam'

const workMailOrganizationArnProps: workmail.WorkMailOrganizationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOrganizationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOrganizationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOrganizationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOrganizationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.workmail.WorkMailOrganizationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workmail.WorkMailOrganizationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workmail.WorkMailOrganizationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workmail.WorkMailOrganizationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### WorkMailActions <a name="WorkMailActions" id="@cdk_utils/iam.workmail.WorkMailActions"></a>

IAM action constants for the workmail service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workmail.WorkMailActions.Initializer"></a>

```typescript
import { workmail } from '@cdk_utils/iam'

new workmail.WorkMailActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.actionGetAccessControlEffect">actionGetAccessControlEffect</a></code> | <code>string</code> | [Read] workmail:GetAccessControlEffect. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.actionGetDefaultRetentionPolicy">actionGetDefaultRetentionPolicy</a></code> | <code>string</code> | [Read] workmail:GetDefaultRetentionPolicy. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.actionGetImpersonationRole">actionGetImpersonationRole</a></code> | <code>string</code> | [Read] workmail:GetImpersonationRole. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.actionGetImpersonationRoleEffect">actionGetImpersonationRoleEffect</a></code> | <code>string</code> | [Read] workmail:GetImpersonationRoleEffect. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.actionGetJournalingRules">actionGetJournalingRules</a></code> | <code>string</code> | [Read] workmail:GetJournalingRules. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.actionGetMailboxDetails">actionGetMailboxDetails</a></code> | <code>string</code> | [Read] workmail:GetMailboxDetails. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.actionGetMailDomain">actionGetMailDomain</a></code> | <code>string</code> | [Read] workmail:GetMailDomain. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.actionGetMailDomainDetails">actionGetMailDomainDetails</a></code> | <code>string</code> | [Read] workmail:GetMailDomainDetails. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.actionGetMobileDeviceAccessEffect">actionGetMobileDeviceAccessEffect</a></code> | <code>string</code> | [Read] workmail:GetMobileDeviceAccessEffect. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.actionGetMobileDeviceAccessOverride">actionGetMobileDeviceAccessOverride</a></code> | <code>string</code> | [Read] workmail:GetMobileDeviceAccessOverride. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.actionGetMobileDeviceDetails">actionGetMobileDeviceDetails</a></code> | <code>string</code> | [Read] workmail:GetMobileDeviceDetails. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.actionGetMobileDevicesForUser">actionGetMobileDevicesForUser</a></code> | <code>string</code> | [Read] workmail:GetMobileDevicesForUser. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.actionGetMobilePolicyDetails">actionGetMobilePolicyDetails</a></code> | <code>string</code> | [Read] workmail:GetMobilePolicyDetails. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.actionGetPersonalAccessTokenMetadata">actionGetPersonalAccessTokenMetadata</a></code> | <code>string</code> | [Read] workmail:GetPersonalAccessTokenMetadata. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.actionSetDefaultMailDomain">actionSetDefaultMailDomain</a></code> | <code>string</code> | [Write] workmail:SetDefaultMailDomain. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.actionSetJournalingRules">actionSetJournalingRules</a></code> | <code>string</code> | [Write] workmail:SetJournalingRules. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.actionSetMobilePolicyDetails">actionSetMobilePolicyDetails</a></code> | <code>string</code> | [Write] workmail:SetMobilePolicyDetails. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.AllowVendedLogDeliveryForResource">AllowVendedLogDeliveryForResource</a></code> | <code>string</code> | [Write] workmail:AllowVendedLogDeliveryForResource. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.AssociateDelegateToResource">AssociateDelegateToResource</a></code> | <code>string</code> | [Write] workmail:AssociateDelegateToResource. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.AssociateMemberToGroup">AssociateMemberToGroup</a></code> | <code>string</code> | [Write] workmail:AssociateMemberToGroup. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.AssumeImpersonationRole">AssumeImpersonationRole</a></code> | <code>string</code> | [Write] workmail:AssumeImpersonationRole. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.CancelMailboxExportJob">CancelMailboxExportJob</a></code> | <code>string</code> | [Write] workmail:CancelMailboxExportJob. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.CreateAlias">CreateAlias</a></code> | <code>string</code> | [Write] workmail:CreateAlias. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.CreateAvailabilityConfiguration">CreateAvailabilityConfiguration</a></code> | <code>string</code> | [Write] workmail:CreateAvailabilityConfiguration. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.CreateGroup">CreateGroup</a></code> | <code>string</code> | [Write] workmail:CreateGroup. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.CreateIdentityCenterApplication">CreateIdentityCenterApplication</a></code> | <code>string</code> | [Write] workmail:CreateIdentityCenterApplication. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.CreateImpersonationRole">CreateImpersonationRole</a></code> | <code>string</code> | [Write] workmail:CreateImpersonationRole. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.CreateInboundMailFlowRule">CreateInboundMailFlowRule</a></code> | <code>string</code> | [Write] workmail:CreateInboundMailFlowRule. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.CreateMailDomain">CreateMailDomain</a></code> | <code>string</code> | [Write] workmail:CreateMailDomain. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.CreateMobileDeviceAccessRule">CreateMobileDeviceAccessRule</a></code> | <code>string</code> | [Write] workmail:CreateMobileDeviceAccessRule. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.CreateOrganization">CreateOrganization</a></code> | <code>string</code> | [Write] workmail:CreateOrganization. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.CreateOutboundMailFlowRule">CreateOutboundMailFlowRule</a></code> | <code>string</code> | [Write] workmail:CreateOutboundMailFlowRule. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.CreateResource">CreateResource</a></code> | <code>string</code> | [Write] workmail:CreateResource. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.CreateSmtpGateway">CreateSmtpGateway</a></code> | <code>string</code> | [Write] workmail:CreateSmtpGateway. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.CreateUser">CreateUser</a></code> | <code>string</code> | [Write] workmail:CreateUser. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteAccessControlRule">DeleteAccessControlRule</a></code> | <code>string</code> | [Write] workmail:DeleteAccessControlRule. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteAlias">DeleteAlias</a></code> | <code>string</code> | [Write] workmail:DeleteAlias. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteAvailabilityConfiguration">DeleteAvailabilityConfiguration</a></code> | <code>string</code> | [Write] workmail:DeleteAvailabilityConfiguration. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteEmailMonitoringConfiguration">DeleteEmailMonitoringConfiguration</a></code> | <code>string</code> | [Write] workmail:DeleteEmailMonitoringConfiguration. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteGroup">DeleteGroup</a></code> | <code>string</code> | [Write] workmail:DeleteGroup. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteIdentityCenterApplication">DeleteIdentityCenterApplication</a></code> | <code>string</code> | [Write] workmail:DeleteIdentityCenterApplication. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteIdentityProviderConfiguration">DeleteIdentityProviderConfiguration</a></code> | <code>string</code> | [Write] workmail:DeleteIdentityProviderConfiguration. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteImpersonationRole">DeleteImpersonationRole</a></code> | <code>string</code> | [Write] workmail:DeleteImpersonationRole. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteInboundMailFlowRule">DeleteInboundMailFlowRule</a></code> | <code>string</code> | [Write] workmail:DeleteInboundMailFlowRule. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteMailboxPermissions">DeleteMailboxPermissions</a></code> | <code>string</code> | [Write] workmail:DeleteMailboxPermissions. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteMailDomain">DeleteMailDomain</a></code> | <code>string</code> | [Write] workmail:DeleteMailDomain. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteMobileDevice">DeleteMobileDevice</a></code> | <code>string</code> | [Write] workmail:DeleteMobileDevice. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteMobileDeviceAccessOverride">DeleteMobileDeviceAccessOverride</a></code> | <code>string</code> | [Write] workmail:DeleteMobileDeviceAccessOverride. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteMobileDeviceAccessRule">DeleteMobileDeviceAccessRule</a></code> | <code>string</code> | [Write] workmail:DeleteMobileDeviceAccessRule. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteOrganization">DeleteOrganization</a></code> | <code>string</code> | [Write] workmail:DeleteOrganization. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteOutboundMailFlowRule">DeleteOutboundMailFlowRule</a></code> | <code>string</code> | [Write] workmail:DeleteOutboundMailFlowRule. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeletePersonalAccessToken">DeletePersonalAccessToken</a></code> | <code>string</code> | [Write] workmail:DeletePersonalAccessToken. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteResource">DeleteResource</a></code> | <code>string</code> | [Write] workmail:DeleteResource. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteRetentionPolicy">DeleteRetentionPolicy</a></code> | <code>string</code> | [Write] workmail:DeleteRetentionPolicy. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteSmtpGateway">DeleteSmtpGateway</a></code> | <code>string</code> | [Write] workmail:DeleteSmtpGateway. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeleteUser">DeleteUser</a></code> | <code>string</code> | [Write] workmail:DeleteUser. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeliverToMailbox">DeliverToMailbox</a></code> | <code>string</code> | [Write] workmail:DeliverToMailbox. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeregisterFromWorkMail">DeregisterFromWorkMail</a></code> | <code>string</code> | [Write] workmail:DeregisterFromWorkMail. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DeregisterMailDomain">DeregisterMailDomain</a></code> | <code>string</code> | [Write] workmail:DeregisterMailDomain. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DescribeEmailMonitoringConfiguration">DescribeEmailMonitoringConfiguration</a></code> | <code>string</code> | [Read] workmail:DescribeEmailMonitoringConfiguration. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DescribeEntity">DescribeEntity</a></code> | <code>string</code> | [Read] workmail:DescribeEntity. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DescribeGroup">DescribeGroup</a></code> | <code>string</code> | [List] workmail:DescribeGroup. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DescribeIdentityProviderConfiguration">DescribeIdentityProviderConfiguration</a></code> | <code>string</code> | [Read] workmail:DescribeIdentityProviderConfiguration. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DescribeInboundDmarcSettings">DescribeInboundDmarcSettings</a></code> | <code>string</code> | [Read] workmail:DescribeInboundDmarcSettings. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DescribeInboundMailFlowRule">DescribeInboundMailFlowRule</a></code> | <code>string</code> | [Read] workmail:DescribeInboundMailFlowRule. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DescribeMailboxExportJob">DescribeMailboxExportJob</a></code> | <code>string</code> | [Read] workmail:DescribeMailboxExportJob. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DescribeMailDomains">DescribeMailDomains</a></code> | <code>string</code> | [List] workmail:DescribeMailDomains. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DescribeOrganization">DescribeOrganization</a></code> | <code>string</code> | [List] workmail:DescribeOrganization. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DescribeOutboundMailFlowRule">DescribeOutboundMailFlowRule</a></code> | <code>string</code> | [Read] workmail:DescribeOutboundMailFlowRule. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DescribeResource">DescribeResource</a></code> | <code>string</code> | [List] workmail:DescribeResource. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DescribeSmtpGateway">DescribeSmtpGateway</a></code> | <code>string</code> | [Read] workmail:DescribeSmtpGateway. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DescribeUser">DescribeUser</a></code> | <code>string</code> | [List] workmail:DescribeUser. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DisassociateDelegateFromResource">DisassociateDelegateFromResource</a></code> | <code>string</code> | [Write] workmail:DisassociateDelegateFromResource. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.DisassociateMemberFromGroup">DisassociateMemberFromGroup</a></code> | <code>string</code> | [Write] workmail:DisassociateMemberFromGroup. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.EnableMailDomain">EnableMailDomain</a></code> | <code>string</code> | [Write] workmail:EnableMailDomain. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListAccessControlRules">ListAccessControlRules</a></code> | <code>string</code> | [Read] workmail:ListAccessControlRules. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListAliases">ListAliases</a></code> | <code>string</code> | [List] workmail:ListAliases. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListAvailabilityConfigurations">ListAvailabilityConfigurations</a></code> | <code>string</code> | [Read] workmail:ListAvailabilityConfigurations. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListGroupMembers">ListGroupMembers</a></code> | <code>string</code> | [List] workmail:ListGroupMembers. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListGroups">ListGroups</a></code> | <code>string</code> | [List] workmail:ListGroups. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListGroupsForEntity">ListGroupsForEntity</a></code> | <code>string</code> | [List] workmail:ListGroupsForEntity. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListImpersonationRoles">ListImpersonationRoles</a></code> | <code>string</code> | [List] workmail:ListImpersonationRoles. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListInboundMailFlowRules">ListInboundMailFlowRules</a></code> | <code>string</code> | [List] workmail:ListInboundMailFlowRules. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListMailboxExportJobs">ListMailboxExportJobs</a></code> | <code>string</code> | [List] workmail:ListMailboxExportJobs. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListMailboxPermissions">ListMailboxPermissions</a></code> | <code>string</code> | [List] workmail:ListMailboxPermissions. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListMailDomains">ListMailDomains</a></code> | <code>string</code> | [List] workmail:ListMailDomains. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListMobileDeviceAccessOverrides">ListMobileDeviceAccessOverrides</a></code> | <code>string</code> | [Read] workmail:ListMobileDeviceAccessOverrides. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListMobileDeviceAccessRules">ListMobileDeviceAccessRules</a></code> | <code>string</code> | [Read] workmail:ListMobileDeviceAccessRules. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListOrganizations">ListOrganizations</a></code> | <code>string</code> | [List] workmail:ListOrganizations. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListOutboundMailFlowRules">ListOutboundMailFlowRules</a></code> | <code>string</code> | [List] workmail:ListOutboundMailFlowRules. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListPersonalAccessTokens">ListPersonalAccessTokens</a></code> | <code>string</code> | [List] workmail:ListPersonalAccessTokens. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListResourceDelegates">ListResourceDelegates</a></code> | <code>string</code> | [List] workmail:ListResourceDelegates. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListResources">ListResources</a></code> | <code>string</code> | [List] workmail:ListResources. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListSmtpGateways">ListSmtpGateways</a></code> | <code>string</code> | [List] workmail:ListSmtpGateways. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] workmail:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ListUsers">ListUsers</a></code> | <code>string</code> | [List] workmail:ListUsers. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.PutAccessControlRule">PutAccessControlRule</a></code> | <code>string</code> | [Write] workmail:PutAccessControlRule. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.PutEmailMonitoringConfiguration">PutEmailMonitoringConfiguration</a></code> | <code>string</code> | [Write] workmail:PutEmailMonitoringConfiguration. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.PutIdentityProviderConfiguration">PutIdentityProviderConfiguration</a></code> | <code>string</code> | [Write] workmail:PutIdentityProviderConfiguration. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.PutInboundDmarcSettings">PutInboundDmarcSettings</a></code> | <code>string</code> | [Write] workmail:PutInboundDmarcSettings. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.PutMailboxPermissions">PutMailboxPermissions</a></code> | <code>string</code> | [Write] workmail:PutMailboxPermissions. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.PutMobileDeviceAccessOverride">PutMobileDeviceAccessOverride</a></code> | <code>string</code> | [Write] workmail:PutMobileDeviceAccessOverride. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.PutRetentionPolicy">PutRetentionPolicy</a></code> | <code>string</code> | [Write] workmail:PutRetentionPolicy. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.RegisterMailDomain">RegisterMailDomain</a></code> | <code>string</code> | [Write] workmail:RegisterMailDomain. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.RegisterToWorkMail">RegisterToWorkMail</a></code> | <code>string</code> | [Write] workmail:RegisterToWorkMail. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.ResetPassword">ResetPassword</a></code> | <code>string</code> | [Write] workmail:ResetPassword. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.SearchMembers">SearchMembers</a></code> | <code>string</code> | [Read] workmail:SearchMembers. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.StartMailboxExportJob">StartMailboxExportJob</a></code> | <code>string</code> | [Write] workmail:StartMailboxExportJob. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] workmail:TagResource. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.TestAvailabilityConfiguration">TestAvailabilityConfiguration</a></code> | <code>string</code> | [Read] workmail:TestAvailabilityConfiguration. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.TestInboundMailFlowRules">TestInboundMailFlowRules</a></code> | <code>string</code> | [Write] workmail:TestInboundMailFlowRules. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.TestOutboundMailFlowRules">TestOutboundMailFlowRules</a></code> | <code>string</code> | [Write] workmail:TestOutboundMailFlowRules. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] workmail:UntagResource. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.UpdateAvailabilityConfiguration">UpdateAvailabilityConfiguration</a></code> | <code>string</code> | [Write] workmail:UpdateAvailabilityConfiguration. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.UpdateDefaultMailDomain">UpdateDefaultMailDomain</a></code> | <code>string</code> | [Write] workmail:UpdateDefaultMailDomain. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.UpdateGroup">UpdateGroup</a></code> | <code>string</code> | [Write] workmail:UpdateGroup. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.UpdateImpersonationRole">UpdateImpersonationRole</a></code> | <code>string</code> | [Write] workmail:UpdateImpersonationRole. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.UpdateInboundMailFlowRule">UpdateInboundMailFlowRule</a></code> | <code>string</code> | [Write] workmail:UpdateInboundMailFlowRule. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.UpdateMailboxQuota">UpdateMailboxQuota</a></code> | <code>string</code> | [Write] workmail:UpdateMailboxQuota. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.UpdateMobileDeviceAccessRule">UpdateMobileDeviceAccessRule</a></code> | <code>string</code> | [Write] workmail:UpdateMobileDeviceAccessRule. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.UpdateOutboundMailFlowRule">UpdateOutboundMailFlowRule</a></code> | <code>string</code> | [Write] workmail:UpdateOutboundMailFlowRule. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.UpdatePrimaryEmailAddress">UpdatePrimaryEmailAddress</a></code> | <code>string</code> | [Write] workmail:UpdatePrimaryEmailAddress. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.UpdateResource">UpdateResource</a></code> | <code>string</code> | [Write] workmail:UpdateResource. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.UpdateSmtpGateway">UpdateSmtpGateway</a></code> | <code>string</code> | [Write] workmail:UpdateSmtpGateway. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.UpdateUser">UpdateUser</a></code> | <code>string</code> | [Write] workmail:UpdateUser. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailActions.property.WipeMobileDevice">WipeMobileDevice</a></code> | <code>string</code> | [Write] workmail:WipeMobileDevice. |

---

##### `actionGetAccessControlEffect`<sup>Required</sup> <a name="actionGetAccessControlEffect" id="@cdk_utils/iam.workmail.WorkMailActions.property.actionGetAccessControlEffect"></a>

```typescript
public readonly actionGetAccessControlEffect: string;
```

- *Type:* string

[Read] workmail:GetAccessControlEffect.

---

##### `actionGetDefaultRetentionPolicy`<sup>Required</sup> <a name="actionGetDefaultRetentionPolicy" id="@cdk_utils/iam.workmail.WorkMailActions.property.actionGetDefaultRetentionPolicy"></a>

```typescript
public readonly actionGetDefaultRetentionPolicy: string;
```

- *Type:* string

[Read] workmail:GetDefaultRetentionPolicy.

---

##### `actionGetImpersonationRole`<sup>Required</sup> <a name="actionGetImpersonationRole" id="@cdk_utils/iam.workmail.WorkMailActions.property.actionGetImpersonationRole"></a>

```typescript
public readonly actionGetImpersonationRole: string;
```

- *Type:* string

[Read] workmail:GetImpersonationRole.

---

##### `actionGetImpersonationRoleEffect`<sup>Required</sup> <a name="actionGetImpersonationRoleEffect" id="@cdk_utils/iam.workmail.WorkMailActions.property.actionGetImpersonationRoleEffect"></a>

```typescript
public readonly actionGetImpersonationRoleEffect: string;
```

- *Type:* string

[Read] workmail:GetImpersonationRoleEffect.

---

##### `actionGetJournalingRules`<sup>Required</sup> <a name="actionGetJournalingRules" id="@cdk_utils/iam.workmail.WorkMailActions.property.actionGetJournalingRules"></a>

```typescript
public readonly actionGetJournalingRules: string;
```

- *Type:* string

[Read] workmail:GetJournalingRules.

---

##### `actionGetMailboxDetails`<sup>Required</sup> <a name="actionGetMailboxDetails" id="@cdk_utils/iam.workmail.WorkMailActions.property.actionGetMailboxDetails"></a>

```typescript
public readonly actionGetMailboxDetails: string;
```

- *Type:* string

[Read] workmail:GetMailboxDetails.

---

##### `actionGetMailDomain`<sup>Required</sup> <a name="actionGetMailDomain" id="@cdk_utils/iam.workmail.WorkMailActions.property.actionGetMailDomain"></a>

```typescript
public readonly actionGetMailDomain: string;
```

- *Type:* string

[Read] workmail:GetMailDomain.

---

##### `actionGetMailDomainDetails`<sup>Required</sup> <a name="actionGetMailDomainDetails" id="@cdk_utils/iam.workmail.WorkMailActions.property.actionGetMailDomainDetails"></a>

```typescript
public readonly actionGetMailDomainDetails: string;
```

- *Type:* string

[Read] workmail:GetMailDomainDetails.

---

##### `actionGetMobileDeviceAccessEffect`<sup>Required</sup> <a name="actionGetMobileDeviceAccessEffect" id="@cdk_utils/iam.workmail.WorkMailActions.property.actionGetMobileDeviceAccessEffect"></a>

```typescript
public readonly actionGetMobileDeviceAccessEffect: string;
```

- *Type:* string

[Read] workmail:GetMobileDeviceAccessEffect.

---

##### `actionGetMobileDeviceAccessOverride`<sup>Required</sup> <a name="actionGetMobileDeviceAccessOverride" id="@cdk_utils/iam.workmail.WorkMailActions.property.actionGetMobileDeviceAccessOverride"></a>

```typescript
public readonly actionGetMobileDeviceAccessOverride: string;
```

- *Type:* string

[Read] workmail:GetMobileDeviceAccessOverride.

---

##### `actionGetMobileDeviceDetails`<sup>Required</sup> <a name="actionGetMobileDeviceDetails" id="@cdk_utils/iam.workmail.WorkMailActions.property.actionGetMobileDeviceDetails"></a>

```typescript
public readonly actionGetMobileDeviceDetails: string;
```

- *Type:* string

[Read] workmail:GetMobileDeviceDetails.

---

##### `actionGetMobileDevicesForUser`<sup>Required</sup> <a name="actionGetMobileDevicesForUser" id="@cdk_utils/iam.workmail.WorkMailActions.property.actionGetMobileDevicesForUser"></a>

```typescript
public readonly actionGetMobileDevicesForUser: string;
```

- *Type:* string

[Read] workmail:GetMobileDevicesForUser.

---

##### `actionGetMobilePolicyDetails`<sup>Required</sup> <a name="actionGetMobilePolicyDetails" id="@cdk_utils/iam.workmail.WorkMailActions.property.actionGetMobilePolicyDetails"></a>

```typescript
public readonly actionGetMobilePolicyDetails: string;
```

- *Type:* string

[Read] workmail:GetMobilePolicyDetails.

---

##### `actionGetPersonalAccessTokenMetadata`<sup>Required</sup> <a name="actionGetPersonalAccessTokenMetadata" id="@cdk_utils/iam.workmail.WorkMailActions.property.actionGetPersonalAccessTokenMetadata"></a>

```typescript
public readonly actionGetPersonalAccessTokenMetadata: string;
```

- *Type:* string

[Read] workmail:GetPersonalAccessTokenMetadata.

---

##### `actionSetDefaultMailDomain`<sup>Required</sup> <a name="actionSetDefaultMailDomain" id="@cdk_utils/iam.workmail.WorkMailActions.property.actionSetDefaultMailDomain"></a>

```typescript
public readonly actionSetDefaultMailDomain: string;
```

- *Type:* string

[Write] workmail:SetDefaultMailDomain.

---

##### `actionSetJournalingRules`<sup>Required</sup> <a name="actionSetJournalingRules" id="@cdk_utils/iam.workmail.WorkMailActions.property.actionSetJournalingRules"></a>

```typescript
public readonly actionSetJournalingRules: string;
```

- *Type:* string

[Write] workmail:SetJournalingRules.

---

##### `actionSetMobilePolicyDetails`<sup>Required</sup> <a name="actionSetMobilePolicyDetails" id="@cdk_utils/iam.workmail.WorkMailActions.property.actionSetMobilePolicyDetails"></a>

```typescript
public readonly actionSetMobilePolicyDetails: string;
```

- *Type:* string

[Write] workmail:SetMobilePolicyDetails.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.workmail.WorkMailActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowVendedLogDeliveryForResource`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResource" id="@cdk_utils/iam.workmail.WorkMailActions.property.AllowVendedLogDeliveryForResource"></a>

```typescript
public readonly AllowVendedLogDeliveryForResource: string;
```

- *Type:* string

[Write] workmail:AllowVendedLogDeliveryForResource.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.workmail.WorkMailActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.workmail.WorkMailActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.workmail.WorkMailActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.workmail.WorkMailActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateDelegateToResource`<sup>Required</sup> <a name="AssociateDelegateToResource" id="@cdk_utils/iam.workmail.WorkMailActions.property.AssociateDelegateToResource"></a>

```typescript
public readonly AssociateDelegateToResource: string;
```

- *Type:* string

[Write] workmail:AssociateDelegateToResource.

---

##### `AssociateMemberToGroup`<sup>Required</sup> <a name="AssociateMemberToGroup" id="@cdk_utils/iam.workmail.WorkMailActions.property.AssociateMemberToGroup"></a>

```typescript
public readonly AssociateMemberToGroup: string;
```

- *Type:* string

[Write] workmail:AssociateMemberToGroup.

---

##### `AssumeImpersonationRole`<sup>Required</sup> <a name="AssumeImpersonationRole" id="@cdk_utils/iam.workmail.WorkMailActions.property.AssumeImpersonationRole"></a>

```typescript
public readonly AssumeImpersonationRole: string;
```

- *Type:* string

[Write] workmail:AssumeImpersonationRole.

---

##### `CancelMailboxExportJob`<sup>Required</sup> <a name="CancelMailboxExportJob" id="@cdk_utils/iam.workmail.WorkMailActions.property.CancelMailboxExportJob"></a>

```typescript
public readonly CancelMailboxExportJob: string;
```

- *Type:* string

[Write] workmail:CancelMailboxExportJob.

---

##### `CreateAlias`<sup>Required</sup> <a name="CreateAlias" id="@cdk_utils/iam.workmail.WorkMailActions.property.CreateAlias"></a>

```typescript
public readonly CreateAlias: string;
```

- *Type:* string

[Write] workmail:CreateAlias.

---

##### `CreateAvailabilityConfiguration`<sup>Required</sup> <a name="CreateAvailabilityConfiguration" id="@cdk_utils/iam.workmail.WorkMailActions.property.CreateAvailabilityConfiguration"></a>

```typescript
public readonly CreateAvailabilityConfiguration: string;
```

- *Type:* string

[Write] workmail:CreateAvailabilityConfiguration.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.workmail.WorkMailActions.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string;
```

- *Type:* string

[Write] workmail:CreateGroup.

---

##### `CreateIdentityCenterApplication`<sup>Required</sup> <a name="CreateIdentityCenterApplication" id="@cdk_utils/iam.workmail.WorkMailActions.property.CreateIdentityCenterApplication"></a>

```typescript
public readonly CreateIdentityCenterApplication: string;
```

- *Type:* string

[Write] workmail:CreateIdentityCenterApplication.

---

##### `CreateImpersonationRole`<sup>Required</sup> <a name="CreateImpersonationRole" id="@cdk_utils/iam.workmail.WorkMailActions.property.CreateImpersonationRole"></a>

```typescript
public readonly CreateImpersonationRole: string;
```

- *Type:* string

[Write] workmail:CreateImpersonationRole.

---

##### `CreateInboundMailFlowRule`<sup>Required</sup> <a name="CreateInboundMailFlowRule" id="@cdk_utils/iam.workmail.WorkMailActions.property.CreateInboundMailFlowRule"></a>

```typescript
public readonly CreateInboundMailFlowRule: string;
```

- *Type:* string

[Write] workmail:CreateInboundMailFlowRule.

---

##### `CreateMailDomain`<sup>Required</sup> <a name="CreateMailDomain" id="@cdk_utils/iam.workmail.WorkMailActions.property.CreateMailDomain"></a>

```typescript
public readonly CreateMailDomain: string;
```

- *Type:* string

[Write] workmail:CreateMailDomain.

---

##### `CreateMobileDeviceAccessRule`<sup>Required</sup> <a name="CreateMobileDeviceAccessRule" id="@cdk_utils/iam.workmail.WorkMailActions.property.CreateMobileDeviceAccessRule"></a>

```typescript
public readonly CreateMobileDeviceAccessRule: string;
```

- *Type:* string

[Write] workmail:CreateMobileDeviceAccessRule.

---

##### `CreateOrganization`<sup>Required</sup> <a name="CreateOrganization" id="@cdk_utils/iam.workmail.WorkMailActions.property.CreateOrganization"></a>

```typescript
public readonly CreateOrganization: string;
```

- *Type:* string

[Write] workmail:CreateOrganization.

---

##### `CreateOutboundMailFlowRule`<sup>Required</sup> <a name="CreateOutboundMailFlowRule" id="@cdk_utils/iam.workmail.WorkMailActions.property.CreateOutboundMailFlowRule"></a>

```typescript
public readonly CreateOutboundMailFlowRule: string;
```

- *Type:* string

[Write] workmail:CreateOutboundMailFlowRule.

---

##### `CreateResource`<sup>Required</sup> <a name="CreateResource" id="@cdk_utils/iam.workmail.WorkMailActions.property.CreateResource"></a>

```typescript
public readonly CreateResource: string;
```

- *Type:* string

[Write] workmail:CreateResource.

---

##### `CreateSmtpGateway`<sup>Required</sup> <a name="CreateSmtpGateway" id="@cdk_utils/iam.workmail.WorkMailActions.property.CreateSmtpGateway"></a>

```typescript
public readonly CreateSmtpGateway: string;
```

- *Type:* string

[Write] workmail:CreateSmtpGateway.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.workmail.WorkMailActions.property.CreateUser"></a>

```typescript
public readonly CreateUser: string;
```

- *Type:* string

[Write] workmail:CreateUser.

---

##### `DeleteAccessControlRule`<sup>Required</sup> <a name="DeleteAccessControlRule" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteAccessControlRule"></a>

```typescript
public readonly DeleteAccessControlRule: string;
```

- *Type:* string

[Write] workmail:DeleteAccessControlRule.

---

##### `DeleteAlias`<sup>Required</sup> <a name="DeleteAlias" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteAlias"></a>

```typescript
public readonly DeleteAlias: string;
```

- *Type:* string

[Write] workmail:DeleteAlias.

---

##### `DeleteAvailabilityConfiguration`<sup>Required</sup> <a name="DeleteAvailabilityConfiguration" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteAvailabilityConfiguration"></a>

```typescript
public readonly DeleteAvailabilityConfiguration: string;
```

- *Type:* string

[Write] workmail:DeleteAvailabilityConfiguration.

---

##### `DeleteEmailMonitoringConfiguration`<sup>Required</sup> <a name="DeleteEmailMonitoringConfiguration" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteEmailMonitoringConfiguration"></a>

```typescript
public readonly DeleteEmailMonitoringConfiguration: string;
```

- *Type:* string

[Write] workmail:DeleteEmailMonitoringConfiguration.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string;
```

- *Type:* string

[Write] workmail:DeleteGroup.

---

##### `DeleteIdentityCenterApplication`<sup>Required</sup> <a name="DeleteIdentityCenterApplication" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteIdentityCenterApplication"></a>

```typescript
public readonly DeleteIdentityCenterApplication: string;
```

- *Type:* string

[Write] workmail:DeleteIdentityCenterApplication.

---

##### `DeleteIdentityProviderConfiguration`<sup>Required</sup> <a name="DeleteIdentityProviderConfiguration" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteIdentityProviderConfiguration"></a>

```typescript
public readonly DeleteIdentityProviderConfiguration: string;
```

- *Type:* string

[Write] workmail:DeleteIdentityProviderConfiguration.

---

##### `DeleteImpersonationRole`<sup>Required</sup> <a name="DeleteImpersonationRole" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteImpersonationRole"></a>

```typescript
public readonly DeleteImpersonationRole: string;
```

- *Type:* string

[Write] workmail:DeleteImpersonationRole.

---

##### `DeleteInboundMailFlowRule`<sup>Required</sup> <a name="DeleteInboundMailFlowRule" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteInboundMailFlowRule"></a>

```typescript
public readonly DeleteInboundMailFlowRule: string;
```

- *Type:* string

[Write] workmail:DeleteInboundMailFlowRule.

---

##### `DeleteMailboxPermissions`<sup>Required</sup> <a name="DeleteMailboxPermissions" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteMailboxPermissions"></a>

```typescript
public readonly DeleteMailboxPermissions: string;
```

- *Type:* string

[Write] workmail:DeleteMailboxPermissions.

---

##### `DeleteMailDomain`<sup>Required</sup> <a name="DeleteMailDomain" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteMailDomain"></a>

```typescript
public readonly DeleteMailDomain: string;
```

- *Type:* string

[Write] workmail:DeleteMailDomain.

---

##### `DeleteMobileDevice`<sup>Required</sup> <a name="DeleteMobileDevice" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteMobileDevice"></a>

```typescript
public readonly DeleteMobileDevice: string;
```

- *Type:* string

[Write] workmail:DeleteMobileDevice.

---

##### `DeleteMobileDeviceAccessOverride`<sup>Required</sup> <a name="DeleteMobileDeviceAccessOverride" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteMobileDeviceAccessOverride"></a>

```typescript
public readonly DeleteMobileDeviceAccessOverride: string;
```

- *Type:* string

[Write] workmail:DeleteMobileDeviceAccessOverride.

---

##### `DeleteMobileDeviceAccessRule`<sup>Required</sup> <a name="DeleteMobileDeviceAccessRule" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteMobileDeviceAccessRule"></a>

```typescript
public readonly DeleteMobileDeviceAccessRule: string;
```

- *Type:* string

[Write] workmail:DeleteMobileDeviceAccessRule.

---

##### `DeleteOrganization`<sup>Required</sup> <a name="DeleteOrganization" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteOrganization"></a>

```typescript
public readonly DeleteOrganization: string;
```

- *Type:* string

[Write] workmail:DeleteOrganization.

---

##### `DeleteOutboundMailFlowRule`<sup>Required</sup> <a name="DeleteOutboundMailFlowRule" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteOutboundMailFlowRule"></a>

```typescript
public readonly DeleteOutboundMailFlowRule: string;
```

- *Type:* string

[Write] workmail:DeleteOutboundMailFlowRule.

---

##### `DeletePersonalAccessToken`<sup>Required</sup> <a name="DeletePersonalAccessToken" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeletePersonalAccessToken"></a>

```typescript
public readonly DeletePersonalAccessToken: string;
```

- *Type:* string

[Write] workmail:DeletePersonalAccessToken.

---

##### `DeleteResource`<sup>Required</sup> <a name="DeleteResource" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteResource"></a>

```typescript
public readonly DeleteResource: string;
```

- *Type:* string

[Write] workmail:DeleteResource.

---

##### `DeleteRetentionPolicy`<sup>Required</sup> <a name="DeleteRetentionPolicy" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteRetentionPolicy"></a>

```typescript
public readonly DeleteRetentionPolicy: string;
```

- *Type:* string

[Write] workmail:DeleteRetentionPolicy.

---

##### `DeleteSmtpGateway`<sup>Required</sup> <a name="DeleteSmtpGateway" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteSmtpGateway"></a>

```typescript
public readonly DeleteSmtpGateway: string;
```

- *Type:* string

[Write] workmail:DeleteSmtpGateway.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string;
```

- *Type:* string

[Write] workmail:DeleteUser.

---

##### `DeliverToMailbox`<sup>Required</sup> <a name="DeliverToMailbox" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeliverToMailbox"></a>

```typescript
public readonly DeliverToMailbox: string;
```

- *Type:* string

[Write] workmail:DeliverToMailbox.

---

##### `DeregisterFromWorkMail`<sup>Required</sup> <a name="DeregisterFromWorkMail" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeregisterFromWorkMail"></a>

```typescript
public readonly DeregisterFromWorkMail: string;
```

- *Type:* string

[Write] workmail:DeregisterFromWorkMail.

---

##### `DeregisterMailDomain`<sup>Required</sup> <a name="DeregisterMailDomain" id="@cdk_utils/iam.workmail.WorkMailActions.property.DeregisterMailDomain"></a>

```typescript
public readonly DeregisterMailDomain: string;
```

- *Type:* string

[Write] workmail:DeregisterMailDomain.

---

##### `DescribeEmailMonitoringConfiguration`<sup>Required</sup> <a name="DescribeEmailMonitoringConfiguration" id="@cdk_utils/iam.workmail.WorkMailActions.property.DescribeEmailMonitoringConfiguration"></a>

```typescript
public readonly DescribeEmailMonitoringConfiguration: string;
```

- *Type:* string

[Read] workmail:DescribeEmailMonitoringConfiguration.

---

##### `DescribeEntity`<sup>Required</sup> <a name="DescribeEntity" id="@cdk_utils/iam.workmail.WorkMailActions.property.DescribeEntity"></a>

```typescript
public readonly DescribeEntity: string;
```

- *Type:* string

[Read] workmail:DescribeEntity.

---

##### `DescribeGroup`<sup>Required</sup> <a name="DescribeGroup" id="@cdk_utils/iam.workmail.WorkMailActions.property.DescribeGroup"></a>

```typescript
public readonly DescribeGroup: string;
```

- *Type:* string

[List] workmail:DescribeGroup.

---

##### `DescribeIdentityProviderConfiguration`<sup>Required</sup> <a name="DescribeIdentityProviderConfiguration" id="@cdk_utils/iam.workmail.WorkMailActions.property.DescribeIdentityProviderConfiguration"></a>

```typescript
public readonly DescribeIdentityProviderConfiguration: string;
```

- *Type:* string

[Read] workmail:DescribeIdentityProviderConfiguration.

---

##### `DescribeInboundDmarcSettings`<sup>Required</sup> <a name="DescribeInboundDmarcSettings" id="@cdk_utils/iam.workmail.WorkMailActions.property.DescribeInboundDmarcSettings"></a>

```typescript
public readonly DescribeInboundDmarcSettings: string;
```

- *Type:* string

[Read] workmail:DescribeInboundDmarcSettings.

---

##### `DescribeInboundMailFlowRule`<sup>Required</sup> <a name="DescribeInboundMailFlowRule" id="@cdk_utils/iam.workmail.WorkMailActions.property.DescribeInboundMailFlowRule"></a>

```typescript
public readonly DescribeInboundMailFlowRule: string;
```

- *Type:* string

[Read] workmail:DescribeInboundMailFlowRule.

---

##### `DescribeMailboxExportJob`<sup>Required</sup> <a name="DescribeMailboxExportJob" id="@cdk_utils/iam.workmail.WorkMailActions.property.DescribeMailboxExportJob"></a>

```typescript
public readonly DescribeMailboxExportJob: string;
```

- *Type:* string

[Read] workmail:DescribeMailboxExportJob.

---

##### `DescribeMailDomains`<sup>Required</sup> <a name="DescribeMailDomains" id="@cdk_utils/iam.workmail.WorkMailActions.property.DescribeMailDomains"></a>

```typescript
public readonly DescribeMailDomains: string;
```

- *Type:* string

[List] workmail:DescribeMailDomains.

---

##### `DescribeOrganization`<sup>Required</sup> <a name="DescribeOrganization" id="@cdk_utils/iam.workmail.WorkMailActions.property.DescribeOrganization"></a>

```typescript
public readonly DescribeOrganization: string;
```

- *Type:* string

[List] workmail:DescribeOrganization.

---

##### `DescribeOutboundMailFlowRule`<sup>Required</sup> <a name="DescribeOutboundMailFlowRule" id="@cdk_utils/iam.workmail.WorkMailActions.property.DescribeOutboundMailFlowRule"></a>

```typescript
public readonly DescribeOutboundMailFlowRule: string;
```

- *Type:* string

[Read] workmail:DescribeOutboundMailFlowRule.

---

##### `DescribeResource`<sup>Required</sup> <a name="DescribeResource" id="@cdk_utils/iam.workmail.WorkMailActions.property.DescribeResource"></a>

```typescript
public readonly DescribeResource: string;
```

- *Type:* string

[List] workmail:DescribeResource.

---

##### `DescribeSmtpGateway`<sup>Required</sup> <a name="DescribeSmtpGateway" id="@cdk_utils/iam.workmail.WorkMailActions.property.DescribeSmtpGateway"></a>

```typescript
public readonly DescribeSmtpGateway: string;
```

- *Type:* string

[Read] workmail:DescribeSmtpGateway.

---

##### `DescribeUser`<sup>Required</sup> <a name="DescribeUser" id="@cdk_utils/iam.workmail.WorkMailActions.property.DescribeUser"></a>

```typescript
public readonly DescribeUser: string;
```

- *Type:* string

[List] workmail:DescribeUser.

---

##### `DisassociateDelegateFromResource`<sup>Required</sup> <a name="DisassociateDelegateFromResource" id="@cdk_utils/iam.workmail.WorkMailActions.property.DisassociateDelegateFromResource"></a>

```typescript
public readonly DisassociateDelegateFromResource: string;
```

- *Type:* string

[Write] workmail:DisassociateDelegateFromResource.

---

##### `DisassociateMemberFromGroup`<sup>Required</sup> <a name="DisassociateMemberFromGroup" id="@cdk_utils/iam.workmail.WorkMailActions.property.DisassociateMemberFromGroup"></a>

```typescript
public readonly DisassociateMemberFromGroup: string;
```

- *Type:* string

[Write] workmail:DisassociateMemberFromGroup.

---

##### `EnableMailDomain`<sup>Required</sup> <a name="EnableMailDomain" id="@cdk_utils/iam.workmail.WorkMailActions.property.EnableMailDomain"></a>

```typescript
public readonly EnableMailDomain: string;
```

- *Type:* string

[Write] workmail:EnableMailDomain.

---

##### `ListAccessControlRules`<sup>Required</sup> <a name="ListAccessControlRules" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListAccessControlRules"></a>

```typescript
public readonly ListAccessControlRules: string;
```

- *Type:* string

[Read] workmail:ListAccessControlRules.

---

##### `ListAliases`<sup>Required</sup> <a name="ListAliases" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListAliases"></a>

```typescript
public readonly ListAliases: string;
```

- *Type:* string

[List] workmail:ListAliases.

---

##### `ListAvailabilityConfigurations`<sup>Required</sup> <a name="ListAvailabilityConfigurations" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListAvailabilityConfigurations"></a>

```typescript
public readonly ListAvailabilityConfigurations: string;
```

- *Type:* string

[Read] workmail:ListAvailabilityConfigurations.

---

##### `ListGroupMembers`<sup>Required</sup> <a name="ListGroupMembers" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListGroupMembers"></a>

```typescript
public readonly ListGroupMembers: string;
```

- *Type:* string

[List] workmail:ListGroupMembers.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListGroups"></a>

```typescript
public readonly ListGroups: string;
```

- *Type:* string

[List] workmail:ListGroups.

---

##### `ListGroupsForEntity`<sup>Required</sup> <a name="ListGroupsForEntity" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListGroupsForEntity"></a>

```typescript
public readonly ListGroupsForEntity: string;
```

- *Type:* string

[List] workmail:ListGroupsForEntity.

---

##### `ListImpersonationRoles`<sup>Required</sup> <a name="ListImpersonationRoles" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListImpersonationRoles"></a>

```typescript
public readonly ListImpersonationRoles: string;
```

- *Type:* string

[List] workmail:ListImpersonationRoles.

---

##### `ListInboundMailFlowRules`<sup>Required</sup> <a name="ListInboundMailFlowRules" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListInboundMailFlowRules"></a>

```typescript
public readonly ListInboundMailFlowRules: string;
```

- *Type:* string

[List] workmail:ListInboundMailFlowRules.

---

##### `ListMailboxExportJobs`<sup>Required</sup> <a name="ListMailboxExportJobs" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListMailboxExportJobs"></a>

```typescript
public readonly ListMailboxExportJobs: string;
```

- *Type:* string

[List] workmail:ListMailboxExportJobs.

---

##### `ListMailboxPermissions`<sup>Required</sup> <a name="ListMailboxPermissions" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListMailboxPermissions"></a>

```typescript
public readonly ListMailboxPermissions: string;
```

- *Type:* string

[List] workmail:ListMailboxPermissions.

---

##### `ListMailDomains`<sup>Required</sup> <a name="ListMailDomains" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListMailDomains"></a>

```typescript
public readonly ListMailDomains: string;
```

- *Type:* string

[List] workmail:ListMailDomains.

---

##### `ListMobileDeviceAccessOverrides`<sup>Required</sup> <a name="ListMobileDeviceAccessOverrides" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListMobileDeviceAccessOverrides"></a>

```typescript
public readonly ListMobileDeviceAccessOverrides: string;
```

- *Type:* string

[Read] workmail:ListMobileDeviceAccessOverrides.

---

##### `ListMobileDeviceAccessRules`<sup>Required</sup> <a name="ListMobileDeviceAccessRules" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListMobileDeviceAccessRules"></a>

```typescript
public readonly ListMobileDeviceAccessRules: string;
```

- *Type:* string

[Read] workmail:ListMobileDeviceAccessRules.

---

##### `ListOrganizations`<sup>Required</sup> <a name="ListOrganizations" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListOrganizations"></a>

```typescript
public readonly ListOrganizations: string;
```

- *Type:* string

[List] workmail:ListOrganizations.

---

##### `ListOutboundMailFlowRules`<sup>Required</sup> <a name="ListOutboundMailFlowRules" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListOutboundMailFlowRules"></a>

```typescript
public readonly ListOutboundMailFlowRules: string;
```

- *Type:* string

[List] workmail:ListOutboundMailFlowRules.

---

##### `ListPersonalAccessTokens`<sup>Required</sup> <a name="ListPersonalAccessTokens" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListPersonalAccessTokens"></a>

```typescript
public readonly ListPersonalAccessTokens: string;
```

- *Type:* string

[List] workmail:ListPersonalAccessTokens.

---

##### `ListResourceDelegates`<sup>Required</sup> <a name="ListResourceDelegates" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListResourceDelegates"></a>

```typescript
public readonly ListResourceDelegates: string;
```

- *Type:* string

[List] workmail:ListResourceDelegates.

---

##### `ListResources`<sup>Required</sup> <a name="ListResources" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListResources"></a>

```typescript
public readonly ListResources: string;
```

- *Type:* string

[List] workmail:ListResources.

---

##### `ListSmtpGateways`<sup>Required</sup> <a name="ListSmtpGateways" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListSmtpGateways"></a>

```typescript
public readonly ListSmtpGateways: string;
```

- *Type:* string

[List] workmail:ListSmtpGateways.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] workmail:ListTagsForResource.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.workmail.WorkMailActions.property.ListUsers"></a>

```typescript
public readonly ListUsers: string;
```

- *Type:* string

[List] workmail:ListUsers.

---

##### `PutAccessControlRule`<sup>Required</sup> <a name="PutAccessControlRule" id="@cdk_utils/iam.workmail.WorkMailActions.property.PutAccessControlRule"></a>

```typescript
public readonly PutAccessControlRule: string;
```

- *Type:* string

[Write] workmail:PutAccessControlRule.

---

##### `PutEmailMonitoringConfiguration`<sup>Required</sup> <a name="PutEmailMonitoringConfiguration" id="@cdk_utils/iam.workmail.WorkMailActions.property.PutEmailMonitoringConfiguration"></a>

```typescript
public readonly PutEmailMonitoringConfiguration: string;
```

- *Type:* string

[Write] workmail:PutEmailMonitoringConfiguration.

---

##### `PutIdentityProviderConfiguration`<sup>Required</sup> <a name="PutIdentityProviderConfiguration" id="@cdk_utils/iam.workmail.WorkMailActions.property.PutIdentityProviderConfiguration"></a>

```typescript
public readonly PutIdentityProviderConfiguration: string;
```

- *Type:* string

[Write] workmail:PutIdentityProviderConfiguration.

---

##### `PutInboundDmarcSettings`<sup>Required</sup> <a name="PutInboundDmarcSettings" id="@cdk_utils/iam.workmail.WorkMailActions.property.PutInboundDmarcSettings"></a>

```typescript
public readonly PutInboundDmarcSettings: string;
```

- *Type:* string

[Write] workmail:PutInboundDmarcSettings.

---

##### `PutMailboxPermissions`<sup>Required</sup> <a name="PutMailboxPermissions" id="@cdk_utils/iam.workmail.WorkMailActions.property.PutMailboxPermissions"></a>

```typescript
public readonly PutMailboxPermissions: string;
```

- *Type:* string

[Write] workmail:PutMailboxPermissions.

---

##### `PutMobileDeviceAccessOverride`<sup>Required</sup> <a name="PutMobileDeviceAccessOverride" id="@cdk_utils/iam.workmail.WorkMailActions.property.PutMobileDeviceAccessOverride"></a>

```typescript
public readonly PutMobileDeviceAccessOverride: string;
```

- *Type:* string

[Write] workmail:PutMobileDeviceAccessOverride.

---

##### `PutRetentionPolicy`<sup>Required</sup> <a name="PutRetentionPolicy" id="@cdk_utils/iam.workmail.WorkMailActions.property.PutRetentionPolicy"></a>

```typescript
public readonly PutRetentionPolicy: string;
```

- *Type:* string

[Write] workmail:PutRetentionPolicy.

---

##### `RegisterMailDomain`<sup>Required</sup> <a name="RegisterMailDomain" id="@cdk_utils/iam.workmail.WorkMailActions.property.RegisterMailDomain"></a>

```typescript
public readonly RegisterMailDomain: string;
```

- *Type:* string

[Write] workmail:RegisterMailDomain.

---

##### `RegisterToWorkMail`<sup>Required</sup> <a name="RegisterToWorkMail" id="@cdk_utils/iam.workmail.WorkMailActions.property.RegisterToWorkMail"></a>

```typescript
public readonly RegisterToWorkMail: string;
```

- *Type:* string

[Write] workmail:RegisterToWorkMail.

---

##### `ResetPassword`<sup>Required</sup> <a name="ResetPassword" id="@cdk_utils/iam.workmail.WorkMailActions.property.ResetPassword"></a>

```typescript
public readonly ResetPassword: string;
```

- *Type:* string

[Write] workmail:ResetPassword.

---

##### `SearchMembers`<sup>Required</sup> <a name="SearchMembers" id="@cdk_utils/iam.workmail.WorkMailActions.property.SearchMembers"></a>

```typescript
public readonly SearchMembers: string;
```

- *Type:* string

[Read] workmail:SearchMembers.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.workmail.WorkMailActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartMailboxExportJob`<sup>Required</sup> <a name="StartMailboxExportJob" id="@cdk_utils/iam.workmail.WorkMailActions.property.StartMailboxExportJob"></a>

```typescript
public readonly StartMailboxExportJob: string;
```

- *Type:* string

[Write] workmail:StartMailboxExportJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.workmail.WorkMailActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] workmail:TagResource.

---

##### `TestAvailabilityConfiguration`<sup>Required</sup> <a name="TestAvailabilityConfiguration" id="@cdk_utils/iam.workmail.WorkMailActions.property.TestAvailabilityConfiguration"></a>

```typescript
public readonly TestAvailabilityConfiguration: string;
```

- *Type:* string

[Read] workmail:TestAvailabilityConfiguration.

---

##### `TestInboundMailFlowRules`<sup>Required</sup> <a name="TestInboundMailFlowRules" id="@cdk_utils/iam.workmail.WorkMailActions.property.TestInboundMailFlowRules"></a>

```typescript
public readonly TestInboundMailFlowRules: string;
```

- *Type:* string

[Write] workmail:TestInboundMailFlowRules.

---

##### `TestOutboundMailFlowRules`<sup>Required</sup> <a name="TestOutboundMailFlowRules" id="@cdk_utils/iam.workmail.WorkMailActions.property.TestOutboundMailFlowRules"></a>

```typescript
public readonly TestOutboundMailFlowRules: string;
```

- *Type:* string

[Write] workmail:TestOutboundMailFlowRules.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.workmail.WorkMailActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] workmail:UntagResource.

---

##### `UpdateAvailabilityConfiguration`<sup>Required</sup> <a name="UpdateAvailabilityConfiguration" id="@cdk_utils/iam.workmail.WorkMailActions.property.UpdateAvailabilityConfiguration"></a>

```typescript
public readonly UpdateAvailabilityConfiguration: string;
```

- *Type:* string

[Write] workmail:UpdateAvailabilityConfiguration.

---

##### `UpdateDefaultMailDomain`<sup>Required</sup> <a name="UpdateDefaultMailDomain" id="@cdk_utils/iam.workmail.WorkMailActions.property.UpdateDefaultMailDomain"></a>

```typescript
public readonly UpdateDefaultMailDomain: string;
```

- *Type:* string

[Write] workmail:UpdateDefaultMailDomain.

---

##### `UpdateGroup`<sup>Required</sup> <a name="UpdateGroup" id="@cdk_utils/iam.workmail.WorkMailActions.property.UpdateGroup"></a>

```typescript
public readonly UpdateGroup: string;
```

- *Type:* string

[Write] workmail:UpdateGroup.

---

##### `UpdateImpersonationRole`<sup>Required</sup> <a name="UpdateImpersonationRole" id="@cdk_utils/iam.workmail.WorkMailActions.property.UpdateImpersonationRole"></a>

```typescript
public readonly UpdateImpersonationRole: string;
```

- *Type:* string

[Write] workmail:UpdateImpersonationRole.

---

##### `UpdateInboundMailFlowRule`<sup>Required</sup> <a name="UpdateInboundMailFlowRule" id="@cdk_utils/iam.workmail.WorkMailActions.property.UpdateInboundMailFlowRule"></a>

```typescript
public readonly UpdateInboundMailFlowRule: string;
```

- *Type:* string

[Write] workmail:UpdateInboundMailFlowRule.

---

##### `UpdateMailboxQuota`<sup>Required</sup> <a name="UpdateMailboxQuota" id="@cdk_utils/iam.workmail.WorkMailActions.property.UpdateMailboxQuota"></a>

```typescript
public readonly UpdateMailboxQuota: string;
```

- *Type:* string

[Write] workmail:UpdateMailboxQuota.

---

##### `UpdateMobileDeviceAccessRule`<sup>Required</sup> <a name="UpdateMobileDeviceAccessRule" id="@cdk_utils/iam.workmail.WorkMailActions.property.UpdateMobileDeviceAccessRule"></a>

```typescript
public readonly UpdateMobileDeviceAccessRule: string;
```

- *Type:* string

[Write] workmail:UpdateMobileDeviceAccessRule.

---

##### `UpdateOutboundMailFlowRule`<sup>Required</sup> <a name="UpdateOutboundMailFlowRule" id="@cdk_utils/iam.workmail.WorkMailActions.property.UpdateOutboundMailFlowRule"></a>

```typescript
public readonly UpdateOutboundMailFlowRule: string;
```

- *Type:* string

[Write] workmail:UpdateOutboundMailFlowRule.

---

##### `UpdatePrimaryEmailAddress`<sup>Required</sup> <a name="UpdatePrimaryEmailAddress" id="@cdk_utils/iam.workmail.WorkMailActions.property.UpdatePrimaryEmailAddress"></a>

```typescript
public readonly UpdatePrimaryEmailAddress: string;
```

- *Type:* string

[Write] workmail:UpdatePrimaryEmailAddress.

---

##### `UpdateResource`<sup>Required</sup> <a name="UpdateResource" id="@cdk_utils/iam.workmail.WorkMailActions.property.UpdateResource"></a>

```typescript
public readonly UpdateResource: string;
```

- *Type:* string

[Write] workmail:UpdateResource.

---

##### `UpdateSmtpGateway`<sup>Required</sup> <a name="UpdateSmtpGateway" id="@cdk_utils/iam.workmail.WorkMailActions.property.UpdateSmtpGateway"></a>

```typescript
public readonly UpdateSmtpGateway: string;
```

- *Type:* string

[Write] workmail:UpdateSmtpGateway.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.workmail.WorkMailActions.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string;
```

- *Type:* string

[Write] workmail:UpdateUser.

---

##### `WipeMobileDevice`<sup>Required</sup> <a name="WipeMobileDevice" id="@cdk_utils/iam.workmail.WorkMailActions.property.WipeMobileDevice"></a>

```typescript
public readonly WipeMobileDevice: string;
```

- *Type:* string

[Write] workmail:WipeMobileDevice.

---

### WorkMailConditions <a name="WorkMailConditions" id="@cdk_utils/iam.workmail.WorkMailConditions"></a>

Condition key constants and builders for workmail.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workmail.WorkMailConditions.Initializer"></a>

```typescript
import { workmail } from '@cdk_utils/iam'

new workmail.WorkMailConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailConditions.impersonationRoleId">impersonationRoleId</a></code> | Generates a condition block for `workmail:ImpersonationRoleId`. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `impersonationRoleId` <a name="impersonationRoleId" id="@cdk_utils/iam.workmail.WorkMailConditions.impersonationRoleId"></a>

```typescript
import { workmail } from '@cdk_utils/iam'

workmail.WorkMailConditions.impersonationRoleId(value: string)
```

Generates a condition block for `workmail:ImpersonationRoleId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.workmail.WorkMailConditions.impersonationRoleId.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.workmail.WorkMailConditions.requestTag"></a>

```typescript
import { workmail } from '@cdk_utils/iam'

workmail.WorkMailConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.workmail.WorkMailConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.workmail.WorkMailConditions.resourceTag"></a>

```typescript
import { workmail } from '@cdk_utils/iam'

workmail.WorkMailConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.workmail.WorkMailConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.workmail.WorkMailConditions.tagKeys"></a>

```typescript
import { workmail } from '@cdk_utils/iam'

workmail.WorkMailConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.workmail.WorkMailConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailConditions.property.AssumeImpersonationRoleConditionKeys">AssumeImpersonationRoleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssumeImpersonationRole action. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailConditions.property.IMPERSONATION_ROLE_ID">IMPERSONATION_ROLE_ID</a></code> | <code>string</code> | Condition key: workmail:ImpersonationRoleId (String). |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AssumeImpersonationRoleConditionKeys`<sup>Required</sup> <a name="AssumeImpersonationRoleConditionKeys" id="@cdk_utils/iam.workmail.WorkMailConditions.property.AssumeImpersonationRoleConditionKeys"></a>

```typescript
public readonly AssumeImpersonationRoleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssumeImpersonationRole action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.workmail.WorkMailConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.workmail.WorkMailConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.workmail.WorkMailConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `IMPERSONATION_ROLE_ID`<sup>Required</sup> <a name="IMPERSONATION_ROLE_ID" id="@cdk_utils/iam.workmail.WorkMailConditions.property.IMPERSONATION_ROLE_ID"></a>

```typescript
public readonly IMPERSONATION_ROLE_ID: string;
```

- *Type:* string

Condition key: workmail:ImpersonationRoleId (String).

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.workmail.WorkMailConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.workmail.WorkMailConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.workmail.WorkMailConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### WorkMailOperations <a name="WorkMailOperations" id="@cdk_utils/iam.workmail.WorkMailOperations"></a>

API operation to required IAM actions mapping for workmail.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workmail.WorkMailOperations.Initializer"></a>

```typescript
import { workmail } from '@cdk_utils/iam'

new workmail.WorkMailOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.AssociateDelegateToResource">AssociateDelegateToResource</a></code> | <code>string[]</code> | IAM actions required for the AssociateDelegateToResource API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.AssociateMemberToGroup">AssociateMemberToGroup</a></code> | <code>string[]</code> | IAM actions required for the AssociateMemberToGroup API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.AssumeImpersonationRole">AssumeImpersonationRole</a></code> | <code>string[]</code> | IAM actions required for the AssumeImpersonationRole API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.CancelMailboxExportJob">CancelMailboxExportJob</a></code> | <code>string[]</code> | IAM actions required for the CancelMailboxExportJob API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.CreateAlias">CreateAlias</a></code> | <code>string[]</code> | IAM actions required for the CreateAlias API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.CreateAvailabilityConfiguration">CreateAvailabilityConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateAvailabilityConfiguration API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.CreateGroup">CreateGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateGroup API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.CreateIdentityCenterApplication">CreateIdentityCenterApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateIdentityCenterApplication API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.CreateImpersonationRole">CreateImpersonationRole</a></code> | <code>string[]</code> | IAM actions required for the CreateImpersonationRole API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.CreateMobileDeviceAccessRule">CreateMobileDeviceAccessRule</a></code> | <code>string[]</code> | IAM actions required for the CreateMobileDeviceAccessRule API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.CreateOrganization">CreateOrganization</a></code> | <code>string[]</code> | IAM actions required for the CreateOrganization API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.CreateResource">CreateResource</a></code> | <code>string[]</code> | IAM actions required for the CreateResource API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.CreateUser">CreateUser</a></code> | <code>string[]</code> | IAM actions required for the CreateUser API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteAccessControlRule">DeleteAccessControlRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccessControlRule API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteAlias">DeleteAlias</a></code> | <code>string[]</code> | IAM actions required for the DeleteAlias API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteAvailabilityConfiguration">DeleteAvailabilityConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteAvailabilityConfiguration API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteEmailMonitoringConfiguration">DeleteEmailMonitoringConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteEmailMonitoringConfiguration API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteGroup">DeleteGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteGroup API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteIdentityCenterApplication">DeleteIdentityCenterApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteIdentityCenterApplication API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteIdentityProviderConfiguration">DeleteIdentityProviderConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteIdentityProviderConfiguration API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteImpersonationRole">DeleteImpersonationRole</a></code> | <code>string[]</code> | IAM actions required for the DeleteImpersonationRole API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteMailboxPermissions">DeleteMailboxPermissions</a></code> | <code>string[]</code> | IAM actions required for the DeleteMailboxPermissions API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteMobileDeviceAccessOverride">DeleteMobileDeviceAccessOverride</a></code> | <code>string[]</code> | IAM actions required for the DeleteMobileDeviceAccessOverride API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteMobileDeviceAccessRule">DeleteMobileDeviceAccessRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteMobileDeviceAccessRule API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteOrganization">DeleteOrganization</a></code> | <code>string[]</code> | IAM actions required for the DeleteOrganization API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DeletePersonalAccessToken">DeletePersonalAccessToken</a></code> | <code>string[]</code> | IAM actions required for the DeletePersonalAccessToken API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteResource">DeleteResource</a></code> | <code>string[]</code> | IAM actions required for the DeleteResource API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteRetentionPolicy">DeleteRetentionPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteRetentionPolicy API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteUser">DeleteUser</a></code> | <code>string[]</code> | IAM actions required for the DeleteUser API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DeregisterFromWorkMail">DeregisterFromWorkMail</a></code> | <code>string[]</code> | IAM actions required for the DeregisterFromWorkMail API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DeregisterMailDomain">DeregisterMailDomain</a></code> | <code>string[]</code> | IAM actions required for the DeregisterMailDomain API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DescribeEmailMonitoringConfiguration">DescribeEmailMonitoringConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeEmailMonitoringConfiguration API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DescribeEntity">DescribeEntity</a></code> | <code>string[]</code> | IAM actions required for the DescribeEntity API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DescribeGroup">DescribeGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeGroup API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DescribeIdentityProviderConfiguration">DescribeIdentityProviderConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeIdentityProviderConfiguration API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DescribeInboundDmarcSettings">DescribeInboundDmarcSettings</a></code> | <code>string[]</code> | IAM actions required for the DescribeInboundDmarcSettings API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DescribeMailboxExportJob">DescribeMailboxExportJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeMailboxExportJob API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DescribeOrganization">DescribeOrganization</a></code> | <code>string[]</code> | IAM actions required for the DescribeOrganization API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DescribeResource">DescribeResource</a></code> | <code>string[]</code> | IAM actions required for the DescribeResource API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DescribeUser">DescribeUser</a></code> | <code>string[]</code> | IAM actions required for the DescribeUser API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DisassociateDelegateFromResource">DisassociateDelegateFromResource</a></code> | <code>string[]</code> | IAM actions required for the DisassociateDelegateFromResource API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.DisassociateMemberFromGroup">DisassociateMemberFromGroup</a></code> | <code>string[]</code> | IAM actions required for the DisassociateMemberFromGroup API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.ListAccessControlRules">ListAccessControlRules</a></code> | <code>string[]</code> | IAM actions required for the ListAccessControlRules API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.ListAliases">ListAliases</a></code> | <code>string[]</code> | IAM actions required for the ListAliases API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.ListAvailabilityConfigurations">ListAvailabilityConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListAvailabilityConfigurations API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.ListGroupMembers">ListGroupMembers</a></code> | <code>string[]</code> | IAM actions required for the ListGroupMembers API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.ListGroups">ListGroups</a></code> | <code>string[]</code> | IAM actions required for the ListGroups API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.ListGroupsForEntity">ListGroupsForEntity</a></code> | <code>string[]</code> | IAM actions required for the ListGroupsForEntity API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.ListImpersonationRoles">ListImpersonationRoles</a></code> | <code>string[]</code> | IAM actions required for the ListImpersonationRoles API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.ListMailboxExportJobs">ListMailboxExportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListMailboxExportJobs API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.ListMailboxPermissions">ListMailboxPermissions</a></code> | <code>string[]</code> | IAM actions required for the ListMailboxPermissions API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.ListMailDomains">ListMailDomains</a></code> | <code>string[]</code> | IAM actions required for the ListMailDomains API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.ListMobileDeviceAccessOverrides">ListMobileDeviceAccessOverrides</a></code> | <code>string[]</code> | IAM actions required for the ListMobileDeviceAccessOverrides API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.ListMobileDeviceAccessRules">ListMobileDeviceAccessRules</a></code> | <code>string[]</code> | IAM actions required for the ListMobileDeviceAccessRules API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.ListOrganizations">ListOrganizations</a></code> | <code>string[]</code> | IAM actions required for the ListOrganizations API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.ListPersonalAccessTokens">ListPersonalAccessTokens</a></code> | <code>string[]</code> | IAM actions required for the ListPersonalAccessTokens API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.ListResourceDelegates">ListResourceDelegates</a></code> | <code>string[]</code> | IAM actions required for the ListResourceDelegates API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.ListResources">ListResources</a></code> | <code>string[]</code> | IAM actions required for the ListResources API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.ListUsers">ListUsers</a></code> | <code>string[]</code> | IAM actions required for the ListUsers API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.opGetAccessControlEffect">opGetAccessControlEffect</a></code> | <code>string[]</code> | IAM actions required for the GetAccessControlEffect API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.opGetDefaultRetentionPolicy">opGetDefaultRetentionPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetDefaultRetentionPolicy API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.opGetImpersonationRole">opGetImpersonationRole</a></code> | <code>string[]</code> | IAM actions required for the GetImpersonationRole API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.opGetImpersonationRoleEffect">opGetImpersonationRoleEffect</a></code> | <code>string[]</code> | IAM actions required for the GetImpersonationRoleEffect API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.opGetMailboxDetails">opGetMailboxDetails</a></code> | <code>string[]</code> | IAM actions required for the GetMailboxDetails API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.opGetMailDomain">opGetMailDomain</a></code> | <code>string[]</code> | IAM actions required for the GetMailDomain API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.opGetMobileDeviceAccessEffect">opGetMobileDeviceAccessEffect</a></code> | <code>string[]</code> | IAM actions required for the GetMobileDeviceAccessEffect API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.opGetMobileDeviceAccessOverride">opGetMobileDeviceAccessOverride</a></code> | <code>string[]</code> | IAM actions required for the GetMobileDeviceAccessOverride API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.opGetPersonalAccessTokenMetadata">opGetPersonalAccessTokenMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetPersonalAccessTokenMetadata API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.PutAccessControlRule">PutAccessControlRule</a></code> | <code>string[]</code> | IAM actions required for the PutAccessControlRule API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.PutEmailMonitoringConfiguration">PutEmailMonitoringConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutEmailMonitoringConfiguration API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.PutIdentityProviderConfiguration">PutIdentityProviderConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutIdentityProviderConfiguration API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.PutInboundDmarcSettings">PutInboundDmarcSettings</a></code> | <code>string[]</code> | IAM actions required for the PutInboundDmarcSettings API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.PutMailboxPermissions">PutMailboxPermissions</a></code> | <code>string[]</code> | IAM actions required for the PutMailboxPermissions API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.PutMobileDeviceAccessOverride">PutMobileDeviceAccessOverride</a></code> | <code>string[]</code> | IAM actions required for the PutMobileDeviceAccessOverride API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.PutRetentionPolicy">PutRetentionPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutRetentionPolicy API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.RegisterMailDomain">RegisterMailDomain</a></code> | <code>string[]</code> | IAM actions required for the RegisterMailDomain API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.RegisterToWorkMail">RegisterToWorkMail</a></code> | <code>string[]</code> | IAM actions required for the RegisterToWorkMail API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.ResetPassword">ResetPassword</a></code> | <code>string[]</code> | IAM actions required for the ResetPassword API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.StartMailboxExportJob">StartMailboxExportJob</a></code> | <code>string[]</code> | IAM actions required for the StartMailboxExportJob API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.TestAvailabilityConfiguration">TestAvailabilityConfiguration</a></code> | <code>string[]</code> | IAM actions required for the TestAvailabilityConfiguration API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.UpdateAvailabilityConfiguration">UpdateAvailabilityConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateAvailabilityConfiguration API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.UpdateDefaultMailDomain">UpdateDefaultMailDomain</a></code> | <code>string[]</code> | IAM actions required for the UpdateDefaultMailDomain API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.UpdateGroup">UpdateGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateGroup API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.UpdateImpersonationRole">UpdateImpersonationRole</a></code> | <code>string[]</code> | IAM actions required for the UpdateImpersonationRole API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.UpdateMailboxQuota">UpdateMailboxQuota</a></code> | <code>string[]</code> | IAM actions required for the UpdateMailboxQuota API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.UpdateMobileDeviceAccessRule">UpdateMobileDeviceAccessRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateMobileDeviceAccessRule API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.UpdatePrimaryEmailAddress">UpdatePrimaryEmailAddress</a></code> | <code>string[]</code> | IAM actions required for the UpdatePrimaryEmailAddress API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.UpdateResource">UpdateResource</a></code> | <code>string[]</code> | IAM actions required for the UpdateResource API call. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailOperations.property.UpdateUser">UpdateUser</a></code> | <code>string[]</code> | IAM actions required for the UpdateUser API call. |

---

##### `AssociateDelegateToResource`<sup>Required</sup> <a name="AssociateDelegateToResource" id="@cdk_utils/iam.workmail.WorkMailOperations.property.AssociateDelegateToResource"></a>

```typescript
public readonly AssociateDelegateToResource: string[];
```

- *Type:* string[]

IAM actions required for the AssociateDelegateToResource API call.

---

##### `AssociateMemberToGroup`<sup>Required</sup> <a name="AssociateMemberToGroup" id="@cdk_utils/iam.workmail.WorkMailOperations.property.AssociateMemberToGroup"></a>

```typescript
public readonly AssociateMemberToGroup: string[];
```

- *Type:* string[]

IAM actions required for the AssociateMemberToGroup API call.

---

##### `AssumeImpersonationRole`<sup>Required</sup> <a name="AssumeImpersonationRole" id="@cdk_utils/iam.workmail.WorkMailOperations.property.AssumeImpersonationRole"></a>

```typescript
public readonly AssumeImpersonationRole: string[];
```

- *Type:* string[]

IAM actions required for the AssumeImpersonationRole API call.

---

##### `CancelMailboxExportJob`<sup>Required</sup> <a name="CancelMailboxExportJob" id="@cdk_utils/iam.workmail.WorkMailOperations.property.CancelMailboxExportJob"></a>

```typescript
public readonly CancelMailboxExportJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelMailboxExportJob API call.

---

##### `CreateAlias`<sup>Required</sup> <a name="CreateAlias" id="@cdk_utils/iam.workmail.WorkMailOperations.property.CreateAlias"></a>

```typescript
public readonly CreateAlias: string[];
```

- *Type:* string[]

IAM actions required for the CreateAlias API call.

---

##### `CreateAvailabilityConfiguration`<sup>Required</sup> <a name="CreateAvailabilityConfiguration" id="@cdk_utils/iam.workmail.WorkMailOperations.property.CreateAvailabilityConfiguration"></a>

```typescript
public readonly CreateAvailabilityConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateAvailabilityConfiguration API call.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.workmail.WorkMailOperations.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateGroup API call.

---

##### `CreateIdentityCenterApplication`<sup>Required</sup> <a name="CreateIdentityCenterApplication" id="@cdk_utils/iam.workmail.WorkMailOperations.property.CreateIdentityCenterApplication"></a>

```typescript
public readonly CreateIdentityCenterApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateIdentityCenterApplication API call.

---

##### `CreateImpersonationRole`<sup>Required</sup> <a name="CreateImpersonationRole" id="@cdk_utils/iam.workmail.WorkMailOperations.property.CreateImpersonationRole"></a>

```typescript
public readonly CreateImpersonationRole: string[];
```

- *Type:* string[]

IAM actions required for the CreateImpersonationRole API call.

---

##### `CreateMobileDeviceAccessRule`<sup>Required</sup> <a name="CreateMobileDeviceAccessRule" id="@cdk_utils/iam.workmail.WorkMailOperations.property.CreateMobileDeviceAccessRule"></a>

```typescript
public readonly CreateMobileDeviceAccessRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateMobileDeviceAccessRule API call.

---

##### `CreateOrganization`<sup>Required</sup> <a name="CreateOrganization" id="@cdk_utils/iam.workmail.WorkMailOperations.property.CreateOrganization"></a>

```typescript
public readonly CreateOrganization: string[];
```

- *Type:* string[]

IAM actions required for the CreateOrganization API call.

---

##### `CreateResource`<sup>Required</sup> <a name="CreateResource" id="@cdk_utils/iam.workmail.WorkMailOperations.property.CreateResource"></a>

```typescript
public readonly CreateResource: string[];
```

- *Type:* string[]

IAM actions required for the CreateResource API call.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.workmail.WorkMailOperations.property.CreateUser"></a>

```typescript
public readonly CreateUser: string[];
```

- *Type:* string[]

IAM actions required for the CreateUser API call.

---

##### `DeleteAccessControlRule`<sup>Required</sup> <a name="DeleteAccessControlRule" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteAccessControlRule"></a>

```typescript
public readonly DeleteAccessControlRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccessControlRule API call.

---

##### `DeleteAlias`<sup>Required</sup> <a name="DeleteAlias" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteAlias"></a>

```typescript
public readonly DeleteAlias: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAlias API call.

---

##### `DeleteAvailabilityConfiguration`<sup>Required</sup> <a name="DeleteAvailabilityConfiguration" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteAvailabilityConfiguration"></a>

```typescript
public readonly DeleteAvailabilityConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAvailabilityConfiguration API call.

---

##### `DeleteEmailMonitoringConfiguration`<sup>Required</sup> <a name="DeleteEmailMonitoringConfiguration" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteEmailMonitoringConfiguration"></a>

```typescript
public readonly DeleteEmailMonitoringConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEmailMonitoringConfiguration API call.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGroup API call.

---

##### `DeleteIdentityCenterApplication`<sup>Required</sup> <a name="DeleteIdentityCenterApplication" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteIdentityCenterApplication"></a>

```typescript
public readonly DeleteIdentityCenterApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIdentityCenterApplication API call.

---

##### `DeleteIdentityProviderConfiguration`<sup>Required</sup> <a name="DeleteIdentityProviderConfiguration" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteIdentityProviderConfiguration"></a>

```typescript
public readonly DeleteIdentityProviderConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIdentityProviderConfiguration API call.

---

##### `DeleteImpersonationRole`<sup>Required</sup> <a name="DeleteImpersonationRole" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteImpersonationRole"></a>

```typescript
public readonly DeleteImpersonationRole: string[];
```

- *Type:* string[]

IAM actions required for the DeleteImpersonationRole API call.

---

##### `DeleteMailboxPermissions`<sup>Required</sup> <a name="DeleteMailboxPermissions" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteMailboxPermissions"></a>

```typescript
public readonly DeleteMailboxPermissions: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMailboxPermissions API call.

---

##### `DeleteMobileDeviceAccessOverride`<sup>Required</sup> <a name="DeleteMobileDeviceAccessOverride" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteMobileDeviceAccessOverride"></a>

```typescript
public readonly DeleteMobileDeviceAccessOverride: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMobileDeviceAccessOverride API call.

---

##### `DeleteMobileDeviceAccessRule`<sup>Required</sup> <a name="DeleteMobileDeviceAccessRule" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteMobileDeviceAccessRule"></a>

```typescript
public readonly DeleteMobileDeviceAccessRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMobileDeviceAccessRule API call.

---

##### `DeleteOrganization`<sup>Required</sup> <a name="DeleteOrganization" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteOrganization"></a>

```typescript
public readonly DeleteOrganization: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOrganization API call.

---

##### `DeletePersonalAccessToken`<sup>Required</sup> <a name="DeletePersonalAccessToken" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DeletePersonalAccessToken"></a>

```typescript
public readonly DeletePersonalAccessToken: string[];
```

- *Type:* string[]

IAM actions required for the DeletePersonalAccessToken API call.

---

##### `DeleteResource`<sup>Required</sup> <a name="DeleteResource" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteResource"></a>

```typescript
public readonly DeleteResource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResource API call.

---

##### `DeleteRetentionPolicy`<sup>Required</sup> <a name="DeleteRetentionPolicy" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteRetentionPolicy"></a>

```typescript
public readonly DeleteRetentionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRetentionPolicy API call.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUser API call.

---

##### `DeregisterFromWorkMail`<sup>Required</sup> <a name="DeregisterFromWorkMail" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DeregisterFromWorkMail"></a>

```typescript
public readonly DeregisterFromWorkMail: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterFromWorkMail API call.

---

##### `DeregisterMailDomain`<sup>Required</sup> <a name="DeregisterMailDomain" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DeregisterMailDomain"></a>

```typescript
public readonly DeregisterMailDomain: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterMailDomain API call.

---

##### `DescribeEmailMonitoringConfiguration`<sup>Required</sup> <a name="DescribeEmailMonitoringConfiguration" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DescribeEmailMonitoringConfiguration"></a>

```typescript
public readonly DescribeEmailMonitoringConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEmailMonitoringConfiguration API call.

---

##### `DescribeEntity`<sup>Required</sup> <a name="DescribeEntity" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DescribeEntity"></a>

```typescript
public readonly DescribeEntity: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEntity API call.

---

##### `DescribeGroup`<sup>Required</sup> <a name="DescribeGroup" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DescribeGroup"></a>

```typescript
public readonly DescribeGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGroup API call.

---

##### `DescribeIdentityProviderConfiguration`<sup>Required</sup> <a name="DescribeIdentityProviderConfiguration" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DescribeIdentityProviderConfiguration"></a>

```typescript
public readonly DescribeIdentityProviderConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeIdentityProviderConfiguration API call.

---

##### `DescribeInboundDmarcSettings`<sup>Required</sup> <a name="DescribeInboundDmarcSettings" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DescribeInboundDmarcSettings"></a>

```typescript
public readonly DescribeInboundDmarcSettings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInboundDmarcSettings API call.

---

##### `DescribeMailboxExportJob`<sup>Required</sup> <a name="DescribeMailboxExportJob" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DescribeMailboxExportJob"></a>

```typescript
public readonly DescribeMailboxExportJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMailboxExportJob API call.

---

##### `DescribeOrganization`<sup>Required</sup> <a name="DescribeOrganization" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DescribeOrganization"></a>

```typescript
public readonly DescribeOrganization: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOrganization API call.

---

##### `DescribeResource`<sup>Required</sup> <a name="DescribeResource" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DescribeResource"></a>

```typescript
public readonly DescribeResource: string[];
```

- *Type:* string[]

IAM actions required for the DescribeResource API call.

---

##### `DescribeUser`<sup>Required</sup> <a name="DescribeUser" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DescribeUser"></a>

```typescript
public readonly DescribeUser: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUser API call.

---

##### `DisassociateDelegateFromResource`<sup>Required</sup> <a name="DisassociateDelegateFromResource" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DisassociateDelegateFromResource"></a>

```typescript
public readonly DisassociateDelegateFromResource: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateDelegateFromResource API call.

---

##### `DisassociateMemberFromGroup`<sup>Required</sup> <a name="DisassociateMemberFromGroup" id="@cdk_utils/iam.workmail.WorkMailOperations.property.DisassociateMemberFromGroup"></a>

```typescript
public readonly DisassociateMemberFromGroup: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateMemberFromGroup API call.

---

##### `ListAccessControlRules`<sup>Required</sup> <a name="ListAccessControlRules" id="@cdk_utils/iam.workmail.WorkMailOperations.property.ListAccessControlRules"></a>

```typescript
public readonly ListAccessControlRules: string[];
```

- *Type:* string[]

IAM actions required for the ListAccessControlRules API call.

---

##### `ListAliases`<sup>Required</sup> <a name="ListAliases" id="@cdk_utils/iam.workmail.WorkMailOperations.property.ListAliases"></a>

```typescript
public readonly ListAliases: string[];
```

- *Type:* string[]

IAM actions required for the ListAliases API call.

---

##### `ListAvailabilityConfigurations`<sup>Required</sup> <a name="ListAvailabilityConfigurations" id="@cdk_utils/iam.workmail.WorkMailOperations.property.ListAvailabilityConfigurations"></a>

```typescript
public readonly ListAvailabilityConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListAvailabilityConfigurations API call.

---

##### `ListGroupMembers`<sup>Required</sup> <a name="ListGroupMembers" id="@cdk_utils/iam.workmail.WorkMailOperations.property.ListGroupMembers"></a>

```typescript
public readonly ListGroupMembers: string[];
```

- *Type:* string[]

IAM actions required for the ListGroupMembers API call.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.workmail.WorkMailOperations.property.ListGroups"></a>

```typescript
public readonly ListGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListGroups API call.

---

##### `ListGroupsForEntity`<sup>Required</sup> <a name="ListGroupsForEntity" id="@cdk_utils/iam.workmail.WorkMailOperations.property.ListGroupsForEntity"></a>

```typescript
public readonly ListGroupsForEntity: string[];
```

- *Type:* string[]

IAM actions required for the ListGroupsForEntity API call.

---

##### `ListImpersonationRoles`<sup>Required</sup> <a name="ListImpersonationRoles" id="@cdk_utils/iam.workmail.WorkMailOperations.property.ListImpersonationRoles"></a>

```typescript
public readonly ListImpersonationRoles: string[];
```

- *Type:* string[]

IAM actions required for the ListImpersonationRoles API call.

---

##### `ListMailboxExportJobs`<sup>Required</sup> <a name="ListMailboxExportJobs" id="@cdk_utils/iam.workmail.WorkMailOperations.property.ListMailboxExportJobs"></a>

```typescript
public readonly ListMailboxExportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListMailboxExportJobs API call.

---

##### `ListMailboxPermissions`<sup>Required</sup> <a name="ListMailboxPermissions" id="@cdk_utils/iam.workmail.WorkMailOperations.property.ListMailboxPermissions"></a>

```typescript
public readonly ListMailboxPermissions: string[];
```

- *Type:* string[]

IAM actions required for the ListMailboxPermissions API call.

---

##### `ListMailDomains`<sup>Required</sup> <a name="ListMailDomains" id="@cdk_utils/iam.workmail.WorkMailOperations.property.ListMailDomains"></a>

```typescript
public readonly ListMailDomains: string[];
```

- *Type:* string[]

IAM actions required for the ListMailDomains API call.

---

##### `ListMobileDeviceAccessOverrides`<sup>Required</sup> <a name="ListMobileDeviceAccessOverrides" id="@cdk_utils/iam.workmail.WorkMailOperations.property.ListMobileDeviceAccessOverrides"></a>

```typescript
public readonly ListMobileDeviceAccessOverrides: string[];
```

- *Type:* string[]

IAM actions required for the ListMobileDeviceAccessOverrides API call.

---

##### `ListMobileDeviceAccessRules`<sup>Required</sup> <a name="ListMobileDeviceAccessRules" id="@cdk_utils/iam.workmail.WorkMailOperations.property.ListMobileDeviceAccessRules"></a>

```typescript
public readonly ListMobileDeviceAccessRules: string[];
```

- *Type:* string[]

IAM actions required for the ListMobileDeviceAccessRules API call.

---

##### `ListOrganizations`<sup>Required</sup> <a name="ListOrganizations" id="@cdk_utils/iam.workmail.WorkMailOperations.property.ListOrganizations"></a>

```typescript
public readonly ListOrganizations: string[];
```

- *Type:* string[]

IAM actions required for the ListOrganizations API call.

---

##### `ListPersonalAccessTokens`<sup>Required</sup> <a name="ListPersonalAccessTokens" id="@cdk_utils/iam.workmail.WorkMailOperations.property.ListPersonalAccessTokens"></a>

```typescript
public readonly ListPersonalAccessTokens: string[];
```

- *Type:* string[]

IAM actions required for the ListPersonalAccessTokens API call.

---

##### `ListResourceDelegates`<sup>Required</sup> <a name="ListResourceDelegates" id="@cdk_utils/iam.workmail.WorkMailOperations.property.ListResourceDelegates"></a>

```typescript
public readonly ListResourceDelegates: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceDelegates API call.

---

##### `ListResources`<sup>Required</sup> <a name="ListResources" id="@cdk_utils/iam.workmail.WorkMailOperations.property.ListResources"></a>

```typescript
public readonly ListResources: string[];
```

- *Type:* string[]

IAM actions required for the ListResources API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.workmail.WorkMailOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.workmail.WorkMailOperations.property.ListUsers"></a>

```typescript
public readonly ListUsers: string[];
```

- *Type:* string[]

IAM actions required for the ListUsers API call.

---

##### `opGetAccessControlEffect`<sup>Required</sup> <a name="opGetAccessControlEffect" id="@cdk_utils/iam.workmail.WorkMailOperations.property.opGetAccessControlEffect"></a>

```typescript
public readonly opGetAccessControlEffect: string[];
```

- *Type:* string[]

IAM actions required for the GetAccessControlEffect API call.

---

##### `opGetDefaultRetentionPolicy`<sup>Required</sup> <a name="opGetDefaultRetentionPolicy" id="@cdk_utils/iam.workmail.WorkMailOperations.property.opGetDefaultRetentionPolicy"></a>

```typescript
public readonly opGetDefaultRetentionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetDefaultRetentionPolicy API call.

---

##### `opGetImpersonationRole`<sup>Required</sup> <a name="opGetImpersonationRole" id="@cdk_utils/iam.workmail.WorkMailOperations.property.opGetImpersonationRole"></a>

```typescript
public readonly opGetImpersonationRole: string[];
```

- *Type:* string[]

IAM actions required for the GetImpersonationRole API call.

---

##### `opGetImpersonationRoleEffect`<sup>Required</sup> <a name="opGetImpersonationRoleEffect" id="@cdk_utils/iam.workmail.WorkMailOperations.property.opGetImpersonationRoleEffect"></a>

```typescript
public readonly opGetImpersonationRoleEffect: string[];
```

- *Type:* string[]

IAM actions required for the GetImpersonationRoleEffect API call.

---

##### `opGetMailboxDetails`<sup>Required</sup> <a name="opGetMailboxDetails" id="@cdk_utils/iam.workmail.WorkMailOperations.property.opGetMailboxDetails"></a>

```typescript
public readonly opGetMailboxDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetMailboxDetails API call.

---

##### `opGetMailDomain`<sup>Required</sup> <a name="opGetMailDomain" id="@cdk_utils/iam.workmail.WorkMailOperations.property.opGetMailDomain"></a>

```typescript
public readonly opGetMailDomain: string[];
```

- *Type:* string[]

IAM actions required for the GetMailDomain API call.

---

##### `opGetMobileDeviceAccessEffect`<sup>Required</sup> <a name="opGetMobileDeviceAccessEffect" id="@cdk_utils/iam.workmail.WorkMailOperations.property.opGetMobileDeviceAccessEffect"></a>

```typescript
public readonly opGetMobileDeviceAccessEffect: string[];
```

- *Type:* string[]

IAM actions required for the GetMobileDeviceAccessEffect API call.

---

##### `opGetMobileDeviceAccessOverride`<sup>Required</sup> <a name="opGetMobileDeviceAccessOverride" id="@cdk_utils/iam.workmail.WorkMailOperations.property.opGetMobileDeviceAccessOverride"></a>

```typescript
public readonly opGetMobileDeviceAccessOverride: string[];
```

- *Type:* string[]

IAM actions required for the GetMobileDeviceAccessOverride API call.

---

##### `opGetPersonalAccessTokenMetadata`<sup>Required</sup> <a name="opGetPersonalAccessTokenMetadata" id="@cdk_utils/iam.workmail.WorkMailOperations.property.opGetPersonalAccessTokenMetadata"></a>

```typescript
public readonly opGetPersonalAccessTokenMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetPersonalAccessTokenMetadata API call.

---

##### `PutAccessControlRule`<sup>Required</sup> <a name="PutAccessControlRule" id="@cdk_utils/iam.workmail.WorkMailOperations.property.PutAccessControlRule"></a>

```typescript
public readonly PutAccessControlRule: string[];
```

- *Type:* string[]

IAM actions required for the PutAccessControlRule API call.

---

##### `PutEmailMonitoringConfiguration`<sup>Required</sup> <a name="PutEmailMonitoringConfiguration" id="@cdk_utils/iam.workmail.WorkMailOperations.property.PutEmailMonitoringConfiguration"></a>

```typescript
public readonly PutEmailMonitoringConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutEmailMonitoringConfiguration API call.

---

##### `PutIdentityProviderConfiguration`<sup>Required</sup> <a name="PutIdentityProviderConfiguration" id="@cdk_utils/iam.workmail.WorkMailOperations.property.PutIdentityProviderConfiguration"></a>

```typescript
public readonly PutIdentityProviderConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutIdentityProviderConfiguration API call.

---

##### `PutInboundDmarcSettings`<sup>Required</sup> <a name="PutInboundDmarcSettings" id="@cdk_utils/iam.workmail.WorkMailOperations.property.PutInboundDmarcSettings"></a>

```typescript
public readonly PutInboundDmarcSettings: string[];
```

- *Type:* string[]

IAM actions required for the PutInboundDmarcSettings API call.

---

##### `PutMailboxPermissions`<sup>Required</sup> <a name="PutMailboxPermissions" id="@cdk_utils/iam.workmail.WorkMailOperations.property.PutMailboxPermissions"></a>

```typescript
public readonly PutMailboxPermissions: string[];
```

- *Type:* string[]

IAM actions required for the PutMailboxPermissions API call.

---

##### `PutMobileDeviceAccessOverride`<sup>Required</sup> <a name="PutMobileDeviceAccessOverride" id="@cdk_utils/iam.workmail.WorkMailOperations.property.PutMobileDeviceAccessOverride"></a>

```typescript
public readonly PutMobileDeviceAccessOverride: string[];
```

- *Type:* string[]

IAM actions required for the PutMobileDeviceAccessOverride API call.

---

##### `PutRetentionPolicy`<sup>Required</sup> <a name="PutRetentionPolicy" id="@cdk_utils/iam.workmail.WorkMailOperations.property.PutRetentionPolicy"></a>

```typescript
public readonly PutRetentionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutRetentionPolicy API call.

---

##### `RegisterMailDomain`<sup>Required</sup> <a name="RegisterMailDomain" id="@cdk_utils/iam.workmail.WorkMailOperations.property.RegisterMailDomain"></a>

```typescript
public readonly RegisterMailDomain: string[];
```

- *Type:* string[]

IAM actions required for the RegisterMailDomain API call.

---

##### `RegisterToWorkMail`<sup>Required</sup> <a name="RegisterToWorkMail" id="@cdk_utils/iam.workmail.WorkMailOperations.property.RegisterToWorkMail"></a>

```typescript
public readonly RegisterToWorkMail: string[];
```

- *Type:* string[]

IAM actions required for the RegisterToWorkMail API call.

---

##### `ResetPassword`<sup>Required</sup> <a name="ResetPassword" id="@cdk_utils/iam.workmail.WorkMailOperations.property.ResetPassword"></a>

```typescript
public readonly ResetPassword: string[];
```

- *Type:* string[]

IAM actions required for the ResetPassword API call.

---

##### `StartMailboxExportJob`<sup>Required</sup> <a name="StartMailboxExportJob" id="@cdk_utils/iam.workmail.WorkMailOperations.property.StartMailboxExportJob"></a>

```typescript
public readonly StartMailboxExportJob: string[];
```

- *Type:* string[]

IAM actions required for the StartMailboxExportJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.workmail.WorkMailOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TestAvailabilityConfiguration`<sup>Required</sup> <a name="TestAvailabilityConfiguration" id="@cdk_utils/iam.workmail.WorkMailOperations.property.TestAvailabilityConfiguration"></a>

```typescript
public readonly TestAvailabilityConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the TestAvailabilityConfiguration API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.workmail.WorkMailOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAvailabilityConfiguration`<sup>Required</sup> <a name="UpdateAvailabilityConfiguration" id="@cdk_utils/iam.workmail.WorkMailOperations.property.UpdateAvailabilityConfiguration"></a>

```typescript
public readonly UpdateAvailabilityConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAvailabilityConfiguration API call.

---

##### `UpdateDefaultMailDomain`<sup>Required</sup> <a name="UpdateDefaultMailDomain" id="@cdk_utils/iam.workmail.WorkMailOperations.property.UpdateDefaultMailDomain"></a>

```typescript
public readonly UpdateDefaultMailDomain: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDefaultMailDomain API call.

---

##### `UpdateGroup`<sup>Required</sup> <a name="UpdateGroup" id="@cdk_utils/iam.workmail.WorkMailOperations.property.UpdateGroup"></a>

```typescript
public readonly UpdateGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGroup API call.

---

##### `UpdateImpersonationRole`<sup>Required</sup> <a name="UpdateImpersonationRole" id="@cdk_utils/iam.workmail.WorkMailOperations.property.UpdateImpersonationRole"></a>

```typescript
public readonly UpdateImpersonationRole: string[];
```

- *Type:* string[]

IAM actions required for the UpdateImpersonationRole API call.

---

##### `UpdateMailboxQuota`<sup>Required</sup> <a name="UpdateMailboxQuota" id="@cdk_utils/iam.workmail.WorkMailOperations.property.UpdateMailboxQuota"></a>

```typescript
public readonly UpdateMailboxQuota: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMailboxQuota API call.

---

##### `UpdateMobileDeviceAccessRule`<sup>Required</sup> <a name="UpdateMobileDeviceAccessRule" id="@cdk_utils/iam.workmail.WorkMailOperations.property.UpdateMobileDeviceAccessRule"></a>

```typescript
public readonly UpdateMobileDeviceAccessRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMobileDeviceAccessRule API call.

---

##### `UpdatePrimaryEmailAddress`<sup>Required</sup> <a name="UpdatePrimaryEmailAddress" id="@cdk_utils/iam.workmail.WorkMailOperations.property.UpdatePrimaryEmailAddress"></a>

```typescript
public readonly UpdatePrimaryEmailAddress: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePrimaryEmailAddress API call.

---

##### `UpdateResource`<sup>Required</sup> <a name="UpdateResource" id="@cdk_utils/iam.workmail.WorkMailOperations.property.UpdateResource"></a>

```typescript
public readonly UpdateResource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResource API call.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.workmail.WorkMailOperations.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUser API call.

---

### WorkMailResources <a name="WorkMailResources" id="@cdk_utils/iam.workmail.WorkMailResources"></a>

ARN builders, validators, and parsers for workmail resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workmail.WorkMailResources.Initializer"></a>

```typescript
import { workmail } from '@cdk_utils/iam'

new workmail.WorkMailResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailResources.isValidOrganizationArn">isValidOrganizationArn</a></code> | Validates whether a string is a valid ARN for the organization resource. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailResources.organization">organization</a></code> | Builds an ARN for the organization resource. |
| <code><a href="#@cdk_utils/iam.workmail.WorkMailResources.parseOrganizationArn">parseOrganizationArn</a></code> | Parses a organization ARN into its components. |

---

##### `isValidOrganizationArn` <a name="isValidOrganizationArn" id="@cdk_utils/iam.workmail.WorkMailResources.isValidOrganizationArn"></a>

```typescript
import { workmail } from '@cdk_utils/iam'

workmail.WorkMailResources.isValidOrganizationArn(arn: string)
```

Validates whether a string is a valid ARN for the organization resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workmail.WorkMailResources.isValidOrganizationArn.parameter.arn"></a>

- *Type:* string

---

##### `organization` <a name="organization" id="@cdk_utils/iam.workmail.WorkMailResources.organization"></a>

```typescript
import { workmail } from '@cdk_utils/iam'

workmail.WorkMailResources.organization(props: WorkMailOrganizationArnProps)
```

Builds an ARN for the organization resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workmail.WorkMailResources.organization.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workmail.WorkMailOrganizationArnProps">WorkMailOrganizationArnProps</a>

---

##### `parseOrganizationArn` <a name="parseOrganizationArn" id="@cdk_utils/iam.workmail.WorkMailResources.parseOrganizationArn"></a>

```typescript
import { workmail } from '@cdk_utils/iam'

workmail.WorkMailResources.parseOrganizationArn(arn: string)
```

Parses a organization ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workmail.WorkMailResources.parseOrganizationArn.parameter.arn"></a>

- *Type:* string

---




