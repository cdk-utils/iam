# `opsworks` Submodule <a name="`opsworks` Submodule" id="@cdk_utils/iam.opsworks"></a>


## Structs <a name="Structs" id="Structs"></a>

### OpsworksStackArnComponents <a name="OpsworksStackArnComponents" id="@cdk_utils/iam.opsworks.OpsworksStackArnComponents"></a>

Parsed components of a stack ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.opsworks.OpsworksStackArnComponents.Initializer"></a>

```typescript
import { opsworks } from '@cdk_utils/iam'

const opsworksStackArnComponents: opsworks.OpsworksStackArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksStackArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksStackArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksStackArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksStackArnComponents.property.stackId">stackId</a></code> | <code>string</code> | The StackId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.opsworks.OpsworksStackArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.opsworks.OpsworksStackArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.opsworks.OpsworksStackArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdk_utils/iam.opsworks.OpsworksStackArnComponents.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The StackId component.

---

### OpsworksStackArnProps <a name="OpsworksStackArnProps" id="@cdk_utils/iam.opsworks.OpsworksStackArnProps"></a>

Properties for building a stack ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.opsworks.OpsworksStackArnProps.Initializer"></a>

```typescript
import { opsworks } from '@cdk_utils/iam'

const opsworksStackArnProps: opsworks.OpsworksStackArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksStackArnProps.property.stackId">stackId</a></code> | <code>string</code> | The StackId component of the ARN. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksStackArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksStackArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksStackArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdk_utils/iam.opsworks.OpsworksStackArnProps.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The StackId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.opsworks.OpsworksStackArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.opsworks.OpsworksStackArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.opsworks.OpsworksStackArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksActions <a name="OpsworksActions" id="@cdk_utils/iam.opsworks.OpsworksActions"></a>

IAM action constants for the opsworks service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.opsworks.OpsworksActions.Initializer"></a>

```typescript
import { opsworks } from '@cdk_utils/iam'

new opsworks.OpsworksActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.actionGetHostnameSuggestion">actionGetHostnameSuggestion</a></code> | <code>string</code> | [Read] opsworks:GetHostnameSuggestion. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.actionSetLoadBasedAutoScaling">actionSetLoadBasedAutoScaling</a></code> | <code>string</code> | [Write] opsworks:SetLoadBasedAutoScaling. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.actionSetPermission">actionSetPermission</a></code> | <code>string</code> | [PermissionManagement] opsworks:SetPermission. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.actionSetTimeBasedAutoScaling">actionSetTimeBasedAutoScaling</a></code> | <code>string</code> | [Write] opsworks:SetTimeBasedAutoScaling. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.AssignInstance">AssignInstance</a></code> | <code>string</code> | [Write] opsworks:AssignInstance. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.AssignVolume">AssignVolume</a></code> | <code>string</code> | [Write] opsworks:AssignVolume. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.AssociateElasticIp">AssociateElasticIp</a></code> | <code>string</code> | [Write] opsworks:AssociateElasticIp. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.AttachElasticLoadBalancer">AttachElasticLoadBalancer</a></code> | <code>string</code> | [Write] opsworks:AttachElasticLoadBalancer. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.CloneStack">CloneStack</a></code> | <code>string</code> | [Write] opsworks:CloneStack. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.CreateApp">CreateApp</a></code> | <code>string</code> | [Write] opsworks:CreateApp. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.CreateDeployment">CreateDeployment</a></code> | <code>string</code> | [Write] opsworks:CreateDeployment. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.CreateInstance">CreateInstance</a></code> | <code>string</code> | [Write] opsworks:CreateInstance. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.CreateLayer">CreateLayer</a></code> | <code>string</code> | [Write] opsworks:CreateLayer. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.CreateStack">CreateStack</a></code> | <code>string</code> | [Write] opsworks:CreateStack. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.CreateUserProfile">CreateUserProfile</a></code> | <code>string</code> | [Write] opsworks:CreateUserProfile. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DeleteApp">DeleteApp</a></code> | <code>string</code> | [Write] opsworks:DeleteApp. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DeleteInstance">DeleteInstance</a></code> | <code>string</code> | [Write] opsworks:DeleteInstance. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DeleteLayer">DeleteLayer</a></code> | <code>string</code> | [Write] opsworks:DeleteLayer. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DeleteStack">DeleteStack</a></code> | <code>string</code> | [Write] opsworks:DeleteStack. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DeleteUserProfile">DeleteUserProfile</a></code> | <code>string</code> | [Write] opsworks:DeleteUserProfile. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DeregisterEcsCluster">DeregisterEcsCluster</a></code> | <code>string</code> | [Write] opsworks:DeregisterEcsCluster. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DeregisterElasticIp">DeregisterElasticIp</a></code> | <code>string</code> | [Write] opsworks:DeregisterElasticIp. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DeregisterInstance">DeregisterInstance</a></code> | <code>string</code> | [Write] opsworks:DeregisterInstance. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DeregisterRdsDbInstance">DeregisterRdsDbInstance</a></code> | <code>string</code> | [Write] opsworks:DeregisterRdsDbInstance. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DeregisterVolume">DeregisterVolume</a></code> | <code>string</code> | [Write] opsworks:DeregisterVolume. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeAgentVersions">DescribeAgentVersions</a></code> | <code>string</code> | [List] opsworks:DescribeAgentVersions. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeApps">DescribeApps</a></code> | <code>string</code> | [List] opsworks:DescribeApps. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeCommands">DescribeCommands</a></code> | <code>string</code> | [List] opsworks:DescribeCommands. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeDeployments">DescribeDeployments</a></code> | <code>string</code> | [List] opsworks:DescribeDeployments. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeEcsClusters">DescribeEcsClusters</a></code> | <code>string</code> | [List] opsworks:DescribeEcsClusters. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeElasticIps">DescribeElasticIps</a></code> | <code>string</code> | [List] opsworks:DescribeElasticIps. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeElasticLoadBalancers">DescribeElasticLoadBalancers</a></code> | <code>string</code> | [List] opsworks:DescribeElasticLoadBalancers. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeInstances">DescribeInstances</a></code> | <code>string</code> | [List] opsworks:DescribeInstances. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeLayers">DescribeLayers</a></code> | <code>string</code> | [List] opsworks:DescribeLayers. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeLoadBasedAutoScaling">DescribeLoadBasedAutoScaling</a></code> | <code>string</code> | [List] opsworks:DescribeLoadBasedAutoScaling. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeMyUserProfile">DescribeMyUserProfile</a></code> | <code>string</code> | [List] opsworks:DescribeMyUserProfile. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeOperatingSystems">DescribeOperatingSystems</a></code> | <code>string</code> | [List] opsworks:DescribeOperatingSystems. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribePermissions">DescribePermissions</a></code> | <code>string</code> | [List] opsworks:DescribePermissions. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeRaidArrays">DescribeRaidArrays</a></code> | <code>string</code> | [List] opsworks:DescribeRaidArrays. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeRdsDbInstances">DescribeRdsDbInstances</a></code> | <code>string</code> | [List] opsworks:DescribeRdsDbInstances. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeServiceErrors">DescribeServiceErrors</a></code> | <code>string</code> | [List] opsworks:DescribeServiceErrors. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeStackProvisioningParameters">DescribeStackProvisioningParameters</a></code> | <code>string</code> | [List] opsworks:DescribeStackProvisioningParameters. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeStacks">DescribeStacks</a></code> | <code>string</code> | [List] opsworks:DescribeStacks. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeStackSummary">DescribeStackSummary</a></code> | <code>string</code> | [List] opsworks:DescribeStackSummary. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeTimeBasedAutoScaling">DescribeTimeBasedAutoScaling</a></code> | <code>string</code> | [List] opsworks:DescribeTimeBasedAutoScaling. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeUserProfiles">DescribeUserProfiles</a></code> | <code>string</code> | [List] opsworks:DescribeUserProfiles. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeVolumes">DescribeVolumes</a></code> | <code>string</code> | [List] opsworks:DescribeVolumes. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DetachElasticLoadBalancer">DetachElasticLoadBalancer</a></code> | <code>string</code> | [Write] opsworks:DetachElasticLoadBalancer. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.DisassociateElasticIp">DisassociateElasticIp</a></code> | <code>string</code> | [Write] opsworks:DisassociateElasticIp. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.GrantAccess">GrantAccess</a></code> | <code>string</code> | [Write] opsworks:GrantAccess. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.ListTags">ListTags</a></code> | <code>string</code> | [List] opsworks:ListTags. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.RebootInstance">RebootInstance</a></code> | <code>string</code> | [Write] opsworks:RebootInstance. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.RegisterEcsCluster">RegisterEcsCluster</a></code> | <code>string</code> | [Write] opsworks:RegisterEcsCluster. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.RegisterElasticIp">RegisterElasticIp</a></code> | <code>string</code> | [Write] opsworks:RegisterElasticIp. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.RegisterInstance">RegisterInstance</a></code> | <code>string</code> | [Write] opsworks:RegisterInstance. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.RegisterRdsDbInstance">RegisterRdsDbInstance</a></code> | <code>string</code> | [Write] opsworks:RegisterRdsDbInstance. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.RegisterVolume">RegisterVolume</a></code> | <code>string</code> | [Write] opsworks:RegisterVolume. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.StartInstance">StartInstance</a></code> | <code>string</code> | [Write] opsworks:StartInstance. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.StartStack">StartStack</a></code> | <code>string</code> | [Write] opsworks:StartStack. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.StopInstance">StopInstance</a></code> | <code>string</code> | [Write] opsworks:StopInstance. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.StopStack">StopStack</a></code> | <code>string</code> | [Write] opsworks:StopStack. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] opsworks:TagResource. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.UnassignInstance">UnassignInstance</a></code> | <code>string</code> | [Write] opsworks:UnassignInstance. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.UnassignVolume">UnassignVolume</a></code> | <code>string</code> | [Write] opsworks:UnassignVolume. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] opsworks:UntagResource. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.UpdateApp">UpdateApp</a></code> | <code>string</code> | [Write] opsworks:UpdateApp. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.UpdateElasticIp">UpdateElasticIp</a></code> | <code>string</code> | [Write] opsworks:UpdateElasticIp. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.UpdateInstance">UpdateInstance</a></code> | <code>string</code> | [Write] opsworks:UpdateInstance. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.UpdateLayer">UpdateLayer</a></code> | <code>string</code> | [Write] opsworks:UpdateLayer. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.UpdateMyUserProfile">UpdateMyUserProfile</a></code> | <code>string</code> | [Write] opsworks:UpdateMyUserProfile. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.UpdateRdsDbInstance">UpdateRdsDbInstance</a></code> | <code>string</code> | [Write] opsworks:UpdateRdsDbInstance. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.UpdateStack">UpdateStack</a></code> | <code>string</code> | [Write] opsworks:UpdateStack. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.UpdateUserProfile">UpdateUserProfile</a></code> | <code>string</code> | [PermissionManagement] opsworks:UpdateUserProfile. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksActions.property.UpdateVolume">UpdateVolume</a></code> | <code>string</code> | [Write] opsworks:UpdateVolume. |

---

##### `actionGetHostnameSuggestion`<sup>Required</sup> <a name="actionGetHostnameSuggestion" id="@cdk_utils/iam.opsworks.OpsworksActions.property.actionGetHostnameSuggestion"></a>

```typescript
public readonly actionGetHostnameSuggestion: string;
```

- *Type:* string

[Read] opsworks:GetHostnameSuggestion.

---

##### `actionSetLoadBasedAutoScaling`<sup>Required</sup> <a name="actionSetLoadBasedAutoScaling" id="@cdk_utils/iam.opsworks.OpsworksActions.property.actionSetLoadBasedAutoScaling"></a>

```typescript
public readonly actionSetLoadBasedAutoScaling: string;
```

- *Type:* string

[Write] opsworks:SetLoadBasedAutoScaling.

---

##### `actionSetPermission`<sup>Required</sup> <a name="actionSetPermission" id="@cdk_utils/iam.opsworks.OpsworksActions.property.actionSetPermission"></a>

```typescript
public readonly actionSetPermission: string;
```

- *Type:* string

[PermissionManagement] opsworks:SetPermission.

---

##### `actionSetTimeBasedAutoScaling`<sup>Required</sup> <a name="actionSetTimeBasedAutoScaling" id="@cdk_utils/iam.opsworks.OpsworksActions.property.actionSetTimeBasedAutoScaling"></a>

```typescript
public readonly actionSetTimeBasedAutoScaling: string;
```

- *Type:* string

[Write] opsworks:SetTimeBasedAutoScaling.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.opsworks.OpsworksActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.opsworks.OpsworksActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.opsworks.OpsworksActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.opsworks.OpsworksActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.opsworks.OpsworksActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssignInstance`<sup>Required</sup> <a name="AssignInstance" id="@cdk_utils/iam.opsworks.OpsworksActions.property.AssignInstance"></a>

```typescript
public readonly AssignInstance: string;
```

- *Type:* string

[Write] opsworks:AssignInstance.

---

##### `AssignVolume`<sup>Required</sup> <a name="AssignVolume" id="@cdk_utils/iam.opsworks.OpsworksActions.property.AssignVolume"></a>

```typescript
public readonly AssignVolume: string;
```

- *Type:* string

[Write] opsworks:AssignVolume.

---

##### `AssociateElasticIp`<sup>Required</sup> <a name="AssociateElasticIp" id="@cdk_utils/iam.opsworks.OpsworksActions.property.AssociateElasticIp"></a>

```typescript
public readonly AssociateElasticIp: string;
```

- *Type:* string

[Write] opsworks:AssociateElasticIp.

---

##### `AttachElasticLoadBalancer`<sup>Required</sup> <a name="AttachElasticLoadBalancer" id="@cdk_utils/iam.opsworks.OpsworksActions.property.AttachElasticLoadBalancer"></a>

```typescript
public readonly AttachElasticLoadBalancer: string;
```

- *Type:* string

[Write] opsworks:AttachElasticLoadBalancer.

---

##### `CloneStack`<sup>Required</sup> <a name="CloneStack" id="@cdk_utils/iam.opsworks.OpsworksActions.property.CloneStack"></a>

```typescript
public readonly CloneStack: string;
```

- *Type:* string

[Write] opsworks:CloneStack.

---

##### `CreateApp`<sup>Required</sup> <a name="CreateApp" id="@cdk_utils/iam.opsworks.OpsworksActions.property.CreateApp"></a>

```typescript
public readonly CreateApp: string;
```

- *Type:* string

[Write] opsworks:CreateApp.

---

##### `CreateDeployment`<sup>Required</sup> <a name="CreateDeployment" id="@cdk_utils/iam.opsworks.OpsworksActions.property.CreateDeployment"></a>

```typescript
public readonly CreateDeployment: string;
```

- *Type:* string

[Write] opsworks:CreateDeployment.

---

##### `CreateInstance`<sup>Required</sup> <a name="CreateInstance" id="@cdk_utils/iam.opsworks.OpsworksActions.property.CreateInstance"></a>

```typescript
public readonly CreateInstance: string;
```

- *Type:* string

[Write] opsworks:CreateInstance.

---

##### `CreateLayer`<sup>Required</sup> <a name="CreateLayer" id="@cdk_utils/iam.opsworks.OpsworksActions.property.CreateLayer"></a>

```typescript
public readonly CreateLayer: string;
```

- *Type:* string

[Write] opsworks:CreateLayer.

---

##### `CreateStack`<sup>Required</sup> <a name="CreateStack" id="@cdk_utils/iam.opsworks.OpsworksActions.property.CreateStack"></a>

```typescript
public readonly CreateStack: string;
```

- *Type:* string

[Write] opsworks:CreateStack.

---

##### `CreateUserProfile`<sup>Required</sup> <a name="CreateUserProfile" id="@cdk_utils/iam.opsworks.OpsworksActions.property.CreateUserProfile"></a>

```typescript
public readonly CreateUserProfile: string;
```

- *Type:* string

[Write] opsworks:CreateUserProfile.

---

##### `DeleteApp`<sup>Required</sup> <a name="DeleteApp" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DeleteApp"></a>

```typescript
public readonly DeleteApp: string;
```

- *Type:* string

[Write] opsworks:DeleteApp.

---

##### `DeleteInstance`<sup>Required</sup> <a name="DeleteInstance" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DeleteInstance"></a>

```typescript
public readonly DeleteInstance: string;
```

- *Type:* string

[Write] opsworks:DeleteInstance.

---

##### `DeleteLayer`<sup>Required</sup> <a name="DeleteLayer" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DeleteLayer"></a>

```typescript
public readonly DeleteLayer: string;
```

- *Type:* string

[Write] opsworks:DeleteLayer.

---

##### `DeleteStack`<sup>Required</sup> <a name="DeleteStack" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DeleteStack"></a>

```typescript
public readonly DeleteStack: string;
```

- *Type:* string

[Write] opsworks:DeleteStack.

---

##### `DeleteUserProfile`<sup>Required</sup> <a name="DeleteUserProfile" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DeleteUserProfile"></a>

```typescript
public readonly DeleteUserProfile: string;
```

- *Type:* string

[Write] opsworks:DeleteUserProfile.

---

##### `DeregisterEcsCluster`<sup>Required</sup> <a name="DeregisterEcsCluster" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DeregisterEcsCluster"></a>

```typescript
public readonly DeregisterEcsCluster: string;
```

- *Type:* string

[Write] opsworks:DeregisterEcsCluster.

---

##### `DeregisterElasticIp`<sup>Required</sup> <a name="DeregisterElasticIp" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DeregisterElasticIp"></a>

```typescript
public readonly DeregisterElasticIp: string;
```

- *Type:* string

[Write] opsworks:DeregisterElasticIp.

---

##### `DeregisterInstance`<sup>Required</sup> <a name="DeregisterInstance" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DeregisterInstance"></a>

```typescript
public readonly DeregisterInstance: string;
```

- *Type:* string

[Write] opsworks:DeregisterInstance.

---

##### `DeregisterRdsDbInstance`<sup>Required</sup> <a name="DeregisterRdsDbInstance" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DeregisterRdsDbInstance"></a>

```typescript
public readonly DeregisterRdsDbInstance: string;
```

- *Type:* string

[Write] opsworks:DeregisterRdsDbInstance.

---

##### `DeregisterVolume`<sup>Required</sup> <a name="DeregisterVolume" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DeregisterVolume"></a>

```typescript
public readonly DeregisterVolume: string;
```

- *Type:* string

[Write] opsworks:DeregisterVolume.

---

##### `DescribeAgentVersions`<sup>Required</sup> <a name="DescribeAgentVersions" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeAgentVersions"></a>

```typescript
public readonly DescribeAgentVersions: string;
```

- *Type:* string

[List] opsworks:DescribeAgentVersions.

---

##### `DescribeApps`<sup>Required</sup> <a name="DescribeApps" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeApps"></a>

```typescript
public readonly DescribeApps: string;
```

- *Type:* string

[List] opsworks:DescribeApps.

---

##### `DescribeCommands`<sup>Required</sup> <a name="DescribeCommands" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeCommands"></a>

```typescript
public readonly DescribeCommands: string;
```

- *Type:* string

[List] opsworks:DescribeCommands.

---

##### `DescribeDeployments`<sup>Required</sup> <a name="DescribeDeployments" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeDeployments"></a>

```typescript
public readonly DescribeDeployments: string;
```

- *Type:* string

[List] opsworks:DescribeDeployments.

---

##### `DescribeEcsClusters`<sup>Required</sup> <a name="DescribeEcsClusters" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeEcsClusters"></a>

```typescript
public readonly DescribeEcsClusters: string;
```

- *Type:* string

[List] opsworks:DescribeEcsClusters.

---

##### `DescribeElasticIps`<sup>Required</sup> <a name="DescribeElasticIps" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeElasticIps"></a>

```typescript
public readonly DescribeElasticIps: string;
```

- *Type:* string

[List] opsworks:DescribeElasticIps.

---

##### `DescribeElasticLoadBalancers`<sup>Required</sup> <a name="DescribeElasticLoadBalancers" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeElasticLoadBalancers"></a>

```typescript
public readonly DescribeElasticLoadBalancers: string;
```

- *Type:* string

[List] opsworks:DescribeElasticLoadBalancers.

---

##### `DescribeInstances`<sup>Required</sup> <a name="DescribeInstances" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeInstances"></a>

```typescript
public readonly DescribeInstances: string;
```

- *Type:* string

[List] opsworks:DescribeInstances.

---

##### `DescribeLayers`<sup>Required</sup> <a name="DescribeLayers" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeLayers"></a>

```typescript
public readonly DescribeLayers: string;
```

- *Type:* string

[List] opsworks:DescribeLayers.

---

##### `DescribeLoadBasedAutoScaling`<sup>Required</sup> <a name="DescribeLoadBasedAutoScaling" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeLoadBasedAutoScaling"></a>

```typescript
public readonly DescribeLoadBasedAutoScaling: string;
```

- *Type:* string

[List] opsworks:DescribeLoadBasedAutoScaling.

---

##### `DescribeMyUserProfile`<sup>Required</sup> <a name="DescribeMyUserProfile" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeMyUserProfile"></a>

```typescript
public readonly DescribeMyUserProfile: string;
```

- *Type:* string

[List] opsworks:DescribeMyUserProfile.

---

##### `DescribeOperatingSystems`<sup>Required</sup> <a name="DescribeOperatingSystems" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeOperatingSystems"></a>

```typescript
public readonly DescribeOperatingSystems: string;
```

- *Type:* string

[List] opsworks:DescribeOperatingSystems.

---

##### `DescribePermissions`<sup>Required</sup> <a name="DescribePermissions" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribePermissions"></a>

```typescript
public readonly DescribePermissions: string;
```

- *Type:* string

[List] opsworks:DescribePermissions.

---

##### `DescribeRaidArrays`<sup>Required</sup> <a name="DescribeRaidArrays" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeRaidArrays"></a>

```typescript
public readonly DescribeRaidArrays: string;
```

- *Type:* string

[List] opsworks:DescribeRaidArrays.

---

##### `DescribeRdsDbInstances`<sup>Required</sup> <a name="DescribeRdsDbInstances" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeRdsDbInstances"></a>

```typescript
public readonly DescribeRdsDbInstances: string;
```

- *Type:* string

[List] opsworks:DescribeRdsDbInstances.

---

##### `DescribeServiceErrors`<sup>Required</sup> <a name="DescribeServiceErrors" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeServiceErrors"></a>

```typescript
public readonly DescribeServiceErrors: string;
```

- *Type:* string

[List] opsworks:DescribeServiceErrors.

---

##### `DescribeStackProvisioningParameters`<sup>Required</sup> <a name="DescribeStackProvisioningParameters" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeStackProvisioningParameters"></a>

```typescript
public readonly DescribeStackProvisioningParameters: string;
```

- *Type:* string

[List] opsworks:DescribeStackProvisioningParameters.

---

##### `DescribeStacks`<sup>Required</sup> <a name="DescribeStacks" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeStacks"></a>

```typescript
public readonly DescribeStacks: string;
```

- *Type:* string

[List] opsworks:DescribeStacks.

---

##### `DescribeStackSummary`<sup>Required</sup> <a name="DescribeStackSummary" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeStackSummary"></a>

```typescript
public readonly DescribeStackSummary: string;
```

- *Type:* string

[List] opsworks:DescribeStackSummary.

---

##### `DescribeTimeBasedAutoScaling`<sup>Required</sup> <a name="DescribeTimeBasedAutoScaling" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeTimeBasedAutoScaling"></a>

```typescript
public readonly DescribeTimeBasedAutoScaling: string;
```

- *Type:* string

[List] opsworks:DescribeTimeBasedAutoScaling.

---

##### `DescribeUserProfiles`<sup>Required</sup> <a name="DescribeUserProfiles" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeUserProfiles"></a>

```typescript
public readonly DescribeUserProfiles: string;
```

- *Type:* string

[List] opsworks:DescribeUserProfiles.

---

##### `DescribeVolumes`<sup>Required</sup> <a name="DescribeVolumes" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DescribeVolumes"></a>

```typescript
public readonly DescribeVolumes: string;
```

- *Type:* string

[List] opsworks:DescribeVolumes.

---

##### `DetachElasticLoadBalancer`<sup>Required</sup> <a name="DetachElasticLoadBalancer" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DetachElasticLoadBalancer"></a>

```typescript
public readonly DetachElasticLoadBalancer: string;
```

- *Type:* string

[Write] opsworks:DetachElasticLoadBalancer.

---

##### `DisassociateElasticIp`<sup>Required</sup> <a name="DisassociateElasticIp" id="@cdk_utils/iam.opsworks.OpsworksActions.property.DisassociateElasticIp"></a>

```typescript
public readonly DisassociateElasticIp: string;
```

- *Type:* string

[Write] opsworks:DisassociateElasticIp.

---

##### `GrantAccess`<sup>Required</sup> <a name="GrantAccess" id="@cdk_utils/iam.opsworks.OpsworksActions.property.GrantAccess"></a>

```typescript
public readonly GrantAccess: string;
```

- *Type:* string

[Write] opsworks:GrantAccess.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.opsworks.OpsworksActions.property.ListTags"></a>

```typescript
public readonly ListTags: string;
```

- *Type:* string

[List] opsworks:ListTags.

---

##### `RebootInstance`<sup>Required</sup> <a name="RebootInstance" id="@cdk_utils/iam.opsworks.OpsworksActions.property.RebootInstance"></a>

```typescript
public readonly RebootInstance: string;
```

- *Type:* string

[Write] opsworks:RebootInstance.

---

##### `RegisterEcsCluster`<sup>Required</sup> <a name="RegisterEcsCluster" id="@cdk_utils/iam.opsworks.OpsworksActions.property.RegisterEcsCluster"></a>

```typescript
public readonly RegisterEcsCluster: string;
```

- *Type:* string

[Write] opsworks:RegisterEcsCluster.

---

##### `RegisterElasticIp`<sup>Required</sup> <a name="RegisterElasticIp" id="@cdk_utils/iam.opsworks.OpsworksActions.property.RegisterElasticIp"></a>

```typescript
public readonly RegisterElasticIp: string;
```

- *Type:* string

[Write] opsworks:RegisterElasticIp.

---

##### `RegisterInstance`<sup>Required</sup> <a name="RegisterInstance" id="@cdk_utils/iam.opsworks.OpsworksActions.property.RegisterInstance"></a>

```typescript
public readonly RegisterInstance: string;
```

- *Type:* string

[Write] opsworks:RegisterInstance.

---

##### `RegisterRdsDbInstance`<sup>Required</sup> <a name="RegisterRdsDbInstance" id="@cdk_utils/iam.opsworks.OpsworksActions.property.RegisterRdsDbInstance"></a>

```typescript
public readonly RegisterRdsDbInstance: string;
```

- *Type:* string

[Write] opsworks:RegisterRdsDbInstance.

---

##### `RegisterVolume`<sup>Required</sup> <a name="RegisterVolume" id="@cdk_utils/iam.opsworks.OpsworksActions.property.RegisterVolume"></a>

```typescript
public readonly RegisterVolume: string;
```

- *Type:* string

[Write] opsworks:RegisterVolume.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.opsworks.OpsworksActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartInstance`<sup>Required</sup> <a name="StartInstance" id="@cdk_utils/iam.opsworks.OpsworksActions.property.StartInstance"></a>

```typescript
public readonly StartInstance: string;
```

- *Type:* string

[Write] opsworks:StartInstance.

---

##### `StartStack`<sup>Required</sup> <a name="StartStack" id="@cdk_utils/iam.opsworks.OpsworksActions.property.StartStack"></a>

```typescript
public readonly StartStack: string;
```

- *Type:* string

[Write] opsworks:StartStack.

---

##### `StopInstance`<sup>Required</sup> <a name="StopInstance" id="@cdk_utils/iam.opsworks.OpsworksActions.property.StopInstance"></a>

```typescript
public readonly StopInstance: string;
```

- *Type:* string

[Write] opsworks:StopInstance.

---

##### `StopStack`<sup>Required</sup> <a name="StopStack" id="@cdk_utils/iam.opsworks.OpsworksActions.property.StopStack"></a>

```typescript
public readonly StopStack: string;
```

- *Type:* string

[Write] opsworks:StopStack.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.opsworks.OpsworksActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] opsworks:TagResource.

---

##### `UnassignInstance`<sup>Required</sup> <a name="UnassignInstance" id="@cdk_utils/iam.opsworks.OpsworksActions.property.UnassignInstance"></a>

```typescript
public readonly UnassignInstance: string;
```

- *Type:* string

[Write] opsworks:UnassignInstance.

---

##### `UnassignVolume`<sup>Required</sup> <a name="UnassignVolume" id="@cdk_utils/iam.opsworks.OpsworksActions.property.UnassignVolume"></a>

```typescript
public readonly UnassignVolume: string;
```

- *Type:* string

[Write] opsworks:UnassignVolume.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.opsworks.OpsworksActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] opsworks:UntagResource.

---

##### `UpdateApp`<sup>Required</sup> <a name="UpdateApp" id="@cdk_utils/iam.opsworks.OpsworksActions.property.UpdateApp"></a>

```typescript
public readonly UpdateApp: string;
```

- *Type:* string

[Write] opsworks:UpdateApp.

---

##### `UpdateElasticIp`<sup>Required</sup> <a name="UpdateElasticIp" id="@cdk_utils/iam.opsworks.OpsworksActions.property.UpdateElasticIp"></a>

```typescript
public readonly UpdateElasticIp: string;
```

- *Type:* string

[Write] opsworks:UpdateElasticIp.

---

##### `UpdateInstance`<sup>Required</sup> <a name="UpdateInstance" id="@cdk_utils/iam.opsworks.OpsworksActions.property.UpdateInstance"></a>

```typescript
public readonly UpdateInstance: string;
```

- *Type:* string

[Write] opsworks:UpdateInstance.

---

##### `UpdateLayer`<sup>Required</sup> <a name="UpdateLayer" id="@cdk_utils/iam.opsworks.OpsworksActions.property.UpdateLayer"></a>

```typescript
public readonly UpdateLayer: string;
```

- *Type:* string

[Write] opsworks:UpdateLayer.

---

##### `UpdateMyUserProfile`<sup>Required</sup> <a name="UpdateMyUserProfile" id="@cdk_utils/iam.opsworks.OpsworksActions.property.UpdateMyUserProfile"></a>

```typescript
public readonly UpdateMyUserProfile: string;
```

- *Type:* string

[Write] opsworks:UpdateMyUserProfile.

---

##### `UpdateRdsDbInstance`<sup>Required</sup> <a name="UpdateRdsDbInstance" id="@cdk_utils/iam.opsworks.OpsworksActions.property.UpdateRdsDbInstance"></a>

```typescript
public readonly UpdateRdsDbInstance: string;
```

- *Type:* string

[Write] opsworks:UpdateRdsDbInstance.

---

##### `UpdateStack`<sup>Required</sup> <a name="UpdateStack" id="@cdk_utils/iam.opsworks.OpsworksActions.property.UpdateStack"></a>

```typescript
public readonly UpdateStack: string;
```

- *Type:* string

[Write] opsworks:UpdateStack.

---

##### `UpdateUserProfile`<sup>Required</sup> <a name="UpdateUserProfile" id="@cdk_utils/iam.opsworks.OpsworksActions.property.UpdateUserProfile"></a>

```typescript
public readonly UpdateUserProfile: string;
```

- *Type:* string

[PermissionManagement] opsworks:UpdateUserProfile.

---

##### `UpdateVolume`<sup>Required</sup> <a name="UpdateVolume" id="@cdk_utils/iam.opsworks.OpsworksActions.property.UpdateVolume"></a>

```typescript
public readonly UpdateVolume: string;
```

- *Type:* string

[Write] opsworks:UpdateVolume.

---

### OpsworksResources <a name="OpsworksResources" id="@cdk_utils/iam.opsworks.OpsworksResources"></a>

ARN builders, validators, and parsers for opsworks resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.opsworks.OpsworksResources.Initializer"></a>

```typescript
import { opsworks } from '@cdk_utils/iam'

new opsworks.OpsworksResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksResources.isValidStackArn">isValidStackArn</a></code> | Validates whether a string is a valid ARN for the stack resource. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksResources.parseStackArn">parseStackArn</a></code> | Parses a stack ARN into its components. |
| <code><a href="#@cdk_utils/iam.opsworks.OpsworksResources.stack">stack</a></code> | Builds an ARN for the stack resource. |

---

##### `isValidStackArn` <a name="isValidStackArn" id="@cdk_utils/iam.opsworks.OpsworksResources.isValidStackArn"></a>

```typescript
import { opsworks } from '@cdk_utils/iam'

opsworks.OpsworksResources.isValidStackArn(arn: string)
```

Validates whether a string is a valid ARN for the stack resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.opsworks.OpsworksResources.isValidStackArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStackArn` <a name="parseStackArn" id="@cdk_utils/iam.opsworks.OpsworksResources.parseStackArn"></a>

```typescript
import { opsworks } from '@cdk_utils/iam'

opsworks.OpsworksResources.parseStackArn(arn: string)
```

Parses a stack ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.opsworks.OpsworksResources.parseStackArn.parameter.arn"></a>

- *Type:* string

---

##### `stack` <a name="stack" id="@cdk_utils/iam.opsworks.OpsworksResources.stack"></a>

```typescript
import { opsworks } from '@cdk_utils/iam'

opsworks.OpsworksResources.stack(props: OpsworksStackArnProps)
```

Builds an ARN for the stack resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.opsworks.OpsworksResources.stack.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.opsworks.OpsworksStackArnProps">OpsworksStackArnProps</a>

---




