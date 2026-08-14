# `sms` Submodule <a name="`sms` Submodule" id="@cdk_utils/iam.sms"></a>



## Classes <a name="Classes" id="Classes"></a>

### SMSActions <a name="SMSActions" id="@cdk_utils/iam.sms.SMSActions"></a>

IAM action constants for the sms service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sms.SMSActions.Initializer"></a>

```typescript
import { sms } from '@cdk_utils/iam'

new sms.SMSActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.actionGetApp">actionGetApp</a></code> | <code>string</code> | [Read] sms:GetApp. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.actionGetAppLaunchConfiguration">actionGetAppLaunchConfiguration</a></code> | <code>string</code> | [Read] sms:GetAppLaunchConfiguration. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.actionGetAppReplicationConfiguration">actionGetAppReplicationConfiguration</a></code> | <code>string</code> | [Read] sms:GetAppReplicationConfiguration. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.actionGetAppValidationConfiguration">actionGetAppValidationConfiguration</a></code> | <code>string</code> | [Read] sms:GetAppValidationConfiguration. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.actionGetAppValidationOutput">actionGetAppValidationOutput</a></code> | <code>string</code> | [Read] sms:GetAppValidationOutput. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.actionGetConnectors">actionGetConnectors</a></code> | <code>string</code> | [Read] sms:GetConnectors. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.actionGetMessages">actionGetMessages</a></code> | <code>string</code> | [Read] sms:GetMessages. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.actionGetReplicationJobs">actionGetReplicationJobs</a></code> | <code>string</code> | [Read] sms:GetReplicationJobs. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.actionGetReplicationRuns">actionGetReplicationRuns</a></code> | <code>string</code> | [Read] sms:GetReplicationRuns. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.actionGetServers">actionGetServers</a></code> | <code>string</code> | [Read] sms:GetServers. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.CreateApp">CreateApp</a></code> | <code>string</code> | [Write] sms:CreateApp. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.CreateReplicationJob">CreateReplicationJob</a></code> | <code>string</code> | [Write] sms:CreateReplicationJob. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.DeleteApp">DeleteApp</a></code> | <code>string</code> | [Write] sms:DeleteApp. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.DeleteAppLaunchConfiguration">DeleteAppLaunchConfiguration</a></code> | <code>string</code> | [Write] sms:DeleteAppLaunchConfiguration. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.DeleteAppReplicationConfiguration">DeleteAppReplicationConfiguration</a></code> | <code>string</code> | [Write] sms:DeleteAppReplicationConfiguration. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.DeleteAppValidationConfiguration">DeleteAppValidationConfiguration</a></code> | <code>string</code> | [Write] sms:DeleteAppValidationConfiguration. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.DeleteReplicationJob">DeleteReplicationJob</a></code> | <code>string</code> | [Write] sms:DeleteReplicationJob. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.DeleteServerCatalog">DeleteServerCatalog</a></code> | <code>string</code> | [Write] sms:DeleteServerCatalog. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.DisassociateConnector">DisassociateConnector</a></code> | <code>string</code> | [Write] sms:DisassociateConnector. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.GenerateChangeSet">GenerateChangeSet</a></code> | <code>string</code> | [Write] sms:GenerateChangeSet. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.GenerateTemplate">GenerateTemplate</a></code> | <code>string</code> | [Write] sms:GenerateTemplate. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.ImportAppCatalog">ImportAppCatalog</a></code> | <code>string</code> | [Write] sms:ImportAppCatalog. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.ImportServerCatalog">ImportServerCatalog</a></code> | <code>string</code> | [Write] sms:ImportServerCatalog. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.LaunchApp">LaunchApp</a></code> | <code>string</code> | [Write] sms:LaunchApp. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.ListApps">ListApps</a></code> | <code>string</code> | [List] sms:ListApps. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.NotifyAppValidationOutput">NotifyAppValidationOutput</a></code> | <code>string</code> | [Write] sms:NotifyAppValidationOutput. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.PutAppLaunchConfiguration">PutAppLaunchConfiguration</a></code> | <code>string</code> | [Write] sms:PutAppLaunchConfiguration. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.PutAppReplicationConfiguration">PutAppReplicationConfiguration</a></code> | <code>string</code> | [Write] sms:PutAppReplicationConfiguration. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.PutAppValidationConfiguration">PutAppValidationConfiguration</a></code> | <code>string</code> | [Write] sms:PutAppValidationConfiguration. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.SendMessage">SendMessage</a></code> | <code>string</code> | [Write] sms:SendMessage. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.StartAppReplication">StartAppReplication</a></code> | <code>string</code> | [Write] sms:StartAppReplication. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.StartOnDemandAppReplication">StartOnDemandAppReplication</a></code> | <code>string</code> | [Write] sms:StartOnDemandAppReplication. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.StartOnDemandReplicationRun">StartOnDemandReplicationRun</a></code> | <code>string</code> | [Write] sms:StartOnDemandReplicationRun. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.StopAppReplication">StopAppReplication</a></code> | <code>string</code> | [Write] sms:StopAppReplication. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.TerminateApp">TerminateApp</a></code> | <code>string</code> | [Write] sms:TerminateApp. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.UpdateApp">UpdateApp</a></code> | <code>string</code> | [Write] sms:UpdateApp. |
| <code><a href="#@cdk_utils/iam.sms.SMSActions.property.UpdateReplicationJob">UpdateReplicationJob</a></code> | <code>string</code> | [Write] sms:UpdateReplicationJob. |

---

##### `actionGetApp`<sup>Required</sup> <a name="actionGetApp" id="@cdk_utils/iam.sms.SMSActions.property.actionGetApp"></a>

```typescript
public readonly actionGetApp: string;
```

- *Type:* string

[Read] sms:GetApp.

---

##### `actionGetAppLaunchConfiguration`<sup>Required</sup> <a name="actionGetAppLaunchConfiguration" id="@cdk_utils/iam.sms.SMSActions.property.actionGetAppLaunchConfiguration"></a>

```typescript
public readonly actionGetAppLaunchConfiguration: string;
```

- *Type:* string

[Read] sms:GetAppLaunchConfiguration.

---

##### `actionGetAppReplicationConfiguration`<sup>Required</sup> <a name="actionGetAppReplicationConfiguration" id="@cdk_utils/iam.sms.SMSActions.property.actionGetAppReplicationConfiguration"></a>

```typescript
public readonly actionGetAppReplicationConfiguration: string;
```

- *Type:* string

[Read] sms:GetAppReplicationConfiguration.

---

##### `actionGetAppValidationConfiguration`<sup>Required</sup> <a name="actionGetAppValidationConfiguration" id="@cdk_utils/iam.sms.SMSActions.property.actionGetAppValidationConfiguration"></a>

```typescript
public readonly actionGetAppValidationConfiguration: string;
```

- *Type:* string

[Read] sms:GetAppValidationConfiguration.

---

##### `actionGetAppValidationOutput`<sup>Required</sup> <a name="actionGetAppValidationOutput" id="@cdk_utils/iam.sms.SMSActions.property.actionGetAppValidationOutput"></a>

```typescript
public readonly actionGetAppValidationOutput: string;
```

- *Type:* string

[Read] sms:GetAppValidationOutput.

---

##### `actionGetConnectors`<sup>Required</sup> <a name="actionGetConnectors" id="@cdk_utils/iam.sms.SMSActions.property.actionGetConnectors"></a>

```typescript
public readonly actionGetConnectors: string;
```

- *Type:* string

[Read] sms:GetConnectors.

---

##### `actionGetMessages`<sup>Required</sup> <a name="actionGetMessages" id="@cdk_utils/iam.sms.SMSActions.property.actionGetMessages"></a>

```typescript
public readonly actionGetMessages: string;
```

- *Type:* string

[Read] sms:GetMessages.

---

##### `actionGetReplicationJobs`<sup>Required</sup> <a name="actionGetReplicationJobs" id="@cdk_utils/iam.sms.SMSActions.property.actionGetReplicationJobs"></a>

```typescript
public readonly actionGetReplicationJobs: string;
```

- *Type:* string

[Read] sms:GetReplicationJobs.

---

##### `actionGetReplicationRuns`<sup>Required</sup> <a name="actionGetReplicationRuns" id="@cdk_utils/iam.sms.SMSActions.property.actionGetReplicationRuns"></a>

```typescript
public readonly actionGetReplicationRuns: string;
```

- *Type:* string

[Read] sms:GetReplicationRuns.

---

##### `actionGetServers`<sup>Required</sup> <a name="actionGetServers" id="@cdk_utils/iam.sms.SMSActions.property.actionGetServers"></a>

```typescript
public readonly actionGetServers: string;
```

- *Type:* string

[Read] sms:GetServers.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.sms.SMSActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.sms.SMSActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.sms.SMSActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.sms.SMSActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.sms.SMSActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateApp`<sup>Required</sup> <a name="CreateApp" id="@cdk_utils/iam.sms.SMSActions.property.CreateApp"></a>

```typescript
public readonly CreateApp: string;
```

- *Type:* string

[Write] sms:CreateApp.

---

##### `CreateReplicationJob`<sup>Required</sup> <a name="CreateReplicationJob" id="@cdk_utils/iam.sms.SMSActions.property.CreateReplicationJob"></a>

```typescript
public readonly CreateReplicationJob: string;
```

- *Type:* string

[Write] sms:CreateReplicationJob.

---

##### `DeleteApp`<sup>Required</sup> <a name="DeleteApp" id="@cdk_utils/iam.sms.SMSActions.property.DeleteApp"></a>

```typescript
public readonly DeleteApp: string;
```

- *Type:* string

[Write] sms:DeleteApp.

---

##### `DeleteAppLaunchConfiguration`<sup>Required</sup> <a name="DeleteAppLaunchConfiguration" id="@cdk_utils/iam.sms.SMSActions.property.DeleteAppLaunchConfiguration"></a>

```typescript
public readonly DeleteAppLaunchConfiguration: string;
```

- *Type:* string

[Write] sms:DeleteAppLaunchConfiguration.

---

##### `DeleteAppReplicationConfiguration`<sup>Required</sup> <a name="DeleteAppReplicationConfiguration" id="@cdk_utils/iam.sms.SMSActions.property.DeleteAppReplicationConfiguration"></a>

```typescript
public readonly DeleteAppReplicationConfiguration: string;
```

- *Type:* string

[Write] sms:DeleteAppReplicationConfiguration.

---

##### `DeleteAppValidationConfiguration`<sup>Required</sup> <a name="DeleteAppValidationConfiguration" id="@cdk_utils/iam.sms.SMSActions.property.DeleteAppValidationConfiguration"></a>

```typescript
public readonly DeleteAppValidationConfiguration: string;
```

- *Type:* string

[Write] sms:DeleteAppValidationConfiguration.

---

##### `DeleteReplicationJob`<sup>Required</sup> <a name="DeleteReplicationJob" id="@cdk_utils/iam.sms.SMSActions.property.DeleteReplicationJob"></a>

```typescript
public readonly DeleteReplicationJob: string;
```

- *Type:* string

[Write] sms:DeleteReplicationJob.

---

##### `DeleteServerCatalog`<sup>Required</sup> <a name="DeleteServerCatalog" id="@cdk_utils/iam.sms.SMSActions.property.DeleteServerCatalog"></a>

```typescript
public readonly DeleteServerCatalog: string;
```

- *Type:* string

[Write] sms:DeleteServerCatalog.

---

##### `DisassociateConnector`<sup>Required</sup> <a name="DisassociateConnector" id="@cdk_utils/iam.sms.SMSActions.property.DisassociateConnector"></a>

```typescript
public readonly DisassociateConnector: string;
```

- *Type:* string

[Write] sms:DisassociateConnector.

---

##### `GenerateChangeSet`<sup>Required</sup> <a name="GenerateChangeSet" id="@cdk_utils/iam.sms.SMSActions.property.GenerateChangeSet"></a>

```typescript
public readonly GenerateChangeSet: string;
```

- *Type:* string

[Write] sms:GenerateChangeSet.

---

##### `GenerateTemplate`<sup>Required</sup> <a name="GenerateTemplate" id="@cdk_utils/iam.sms.SMSActions.property.GenerateTemplate"></a>

```typescript
public readonly GenerateTemplate: string;
```

- *Type:* string

[Write] sms:GenerateTemplate.

---

##### `ImportAppCatalog`<sup>Required</sup> <a name="ImportAppCatalog" id="@cdk_utils/iam.sms.SMSActions.property.ImportAppCatalog"></a>

```typescript
public readonly ImportAppCatalog: string;
```

- *Type:* string

[Write] sms:ImportAppCatalog.

---

##### `ImportServerCatalog`<sup>Required</sup> <a name="ImportServerCatalog" id="@cdk_utils/iam.sms.SMSActions.property.ImportServerCatalog"></a>

```typescript
public readonly ImportServerCatalog: string;
```

- *Type:* string

[Write] sms:ImportServerCatalog.

---

##### `LaunchApp`<sup>Required</sup> <a name="LaunchApp" id="@cdk_utils/iam.sms.SMSActions.property.LaunchApp"></a>

```typescript
public readonly LaunchApp: string;
```

- *Type:* string

[Write] sms:LaunchApp.

---

##### `ListApps`<sup>Required</sup> <a name="ListApps" id="@cdk_utils/iam.sms.SMSActions.property.ListApps"></a>

```typescript
public readonly ListApps: string;
```

- *Type:* string

[List] sms:ListApps.

---

##### `NotifyAppValidationOutput`<sup>Required</sup> <a name="NotifyAppValidationOutput" id="@cdk_utils/iam.sms.SMSActions.property.NotifyAppValidationOutput"></a>

```typescript
public readonly NotifyAppValidationOutput: string;
```

- *Type:* string

[Write] sms:NotifyAppValidationOutput.

---

##### `PutAppLaunchConfiguration`<sup>Required</sup> <a name="PutAppLaunchConfiguration" id="@cdk_utils/iam.sms.SMSActions.property.PutAppLaunchConfiguration"></a>

```typescript
public readonly PutAppLaunchConfiguration: string;
```

- *Type:* string

[Write] sms:PutAppLaunchConfiguration.

---

##### `PutAppReplicationConfiguration`<sup>Required</sup> <a name="PutAppReplicationConfiguration" id="@cdk_utils/iam.sms.SMSActions.property.PutAppReplicationConfiguration"></a>

```typescript
public readonly PutAppReplicationConfiguration: string;
```

- *Type:* string

[Write] sms:PutAppReplicationConfiguration.

---

##### `PutAppValidationConfiguration`<sup>Required</sup> <a name="PutAppValidationConfiguration" id="@cdk_utils/iam.sms.SMSActions.property.PutAppValidationConfiguration"></a>

```typescript
public readonly PutAppValidationConfiguration: string;
```

- *Type:* string

[Write] sms:PutAppValidationConfiguration.

---

##### `SendMessage`<sup>Required</sup> <a name="SendMessage" id="@cdk_utils/iam.sms.SMSActions.property.SendMessage"></a>

```typescript
public readonly SendMessage: string;
```

- *Type:* string

[Write] sms:SendMessage.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.sms.SMSActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAppReplication`<sup>Required</sup> <a name="StartAppReplication" id="@cdk_utils/iam.sms.SMSActions.property.StartAppReplication"></a>

```typescript
public readonly StartAppReplication: string;
```

- *Type:* string

[Write] sms:StartAppReplication.

---

##### `StartOnDemandAppReplication`<sup>Required</sup> <a name="StartOnDemandAppReplication" id="@cdk_utils/iam.sms.SMSActions.property.StartOnDemandAppReplication"></a>

```typescript
public readonly StartOnDemandAppReplication: string;
```

- *Type:* string

[Write] sms:StartOnDemandAppReplication.

---

##### `StartOnDemandReplicationRun`<sup>Required</sup> <a name="StartOnDemandReplicationRun" id="@cdk_utils/iam.sms.SMSActions.property.StartOnDemandReplicationRun"></a>

```typescript
public readonly StartOnDemandReplicationRun: string;
```

- *Type:* string

[Write] sms:StartOnDemandReplicationRun.

---

##### `StopAppReplication`<sup>Required</sup> <a name="StopAppReplication" id="@cdk_utils/iam.sms.SMSActions.property.StopAppReplication"></a>

```typescript
public readonly StopAppReplication: string;
```

- *Type:* string

[Write] sms:StopAppReplication.

---

##### `TerminateApp`<sup>Required</sup> <a name="TerminateApp" id="@cdk_utils/iam.sms.SMSActions.property.TerminateApp"></a>

```typescript
public readonly TerminateApp: string;
```

- *Type:* string

[Write] sms:TerminateApp.

---

##### `UpdateApp`<sup>Required</sup> <a name="UpdateApp" id="@cdk_utils/iam.sms.SMSActions.property.UpdateApp"></a>

```typescript
public readonly UpdateApp: string;
```

- *Type:* string

[Write] sms:UpdateApp.

---

##### `UpdateReplicationJob`<sup>Required</sup> <a name="UpdateReplicationJob" id="@cdk_utils/iam.sms.SMSActions.property.UpdateReplicationJob"></a>

```typescript
public readonly UpdateReplicationJob: string;
```

- *Type:* string

[Write] sms:UpdateReplicationJob.

---


