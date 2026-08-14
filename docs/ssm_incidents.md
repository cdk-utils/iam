# `ssm_incidents` Submodule <a name="`ssm_incidents` Submodule" id="@cdk_utils/iam.ssm_incidents"></a>


## Structs <a name="Structs" id="Structs"></a>

### SSMIncidentsIncidentRecordArnComponents <a name="SSMIncidentsIncidentRecordArnComponents" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnComponents"></a>

Parsed components of a incident-record ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnComponents.Initializer"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

const sSMIncidentsIncidentRecordArnComponents: ssm_incidents.SSMIncidentsIncidentRecordArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnComponents.property.incidentRecord">incidentRecord</a></code> | <code>string</code> | The IncidentRecord component. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnComponents.property.responsePlan">responsePlan</a></code> | <code>string</code> | The ResponsePlan component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `incidentRecord`<sup>Required</sup> <a name="incidentRecord" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnComponents.property.incidentRecord"></a>

```typescript
public readonly incidentRecord: string;
```

- *Type:* string

The IncidentRecord component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `responsePlan`<sup>Required</sup> <a name="responsePlan" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnComponents.property.responsePlan"></a>

```typescript
public readonly responsePlan: string;
```

- *Type:* string

The ResponsePlan component.

---

### SSMIncidentsIncidentRecordArnProps <a name="SSMIncidentsIncidentRecordArnProps" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnProps"></a>

Properties for building a incident-record ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnProps.Initializer"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

const sSMIncidentsIncidentRecordArnProps: ssm_incidents.SSMIncidentsIncidentRecordArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnProps.property.incidentRecord">incidentRecord</a></code> | <code>string</code> | The IncidentRecord component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnProps.property.responsePlan">responsePlan</a></code> | <code>string</code> | The ResponsePlan component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `incidentRecord`<sup>Required</sup> <a name="incidentRecord" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnProps.property.incidentRecord"></a>

```typescript
public readonly incidentRecord: string;
```

- *Type:* string

The IncidentRecord component of the ARN.

---

##### `responsePlan`<sup>Required</sup> <a name="responsePlan" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnProps.property.responsePlan"></a>

```typescript
public readonly responsePlan: string;
```

- *Type:* string

The ResponsePlan component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### SSMIncidentsReplicationSetArnComponents <a name="SSMIncidentsReplicationSetArnComponents" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsReplicationSetArnComponents"></a>

Parsed components of a replication-set ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsReplicationSetArnComponents.Initializer"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

const sSMIncidentsReplicationSetArnComponents: ssm_incidents.SSMIncidentsReplicationSetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsReplicationSetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsReplicationSetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsReplicationSetArnComponents.property.replicationSet">replicationSet</a></code> | <code>string</code> | The ReplicationSet component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsReplicationSetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsReplicationSetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `replicationSet`<sup>Required</sup> <a name="replicationSet" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsReplicationSetArnComponents.property.replicationSet"></a>

```typescript
public readonly replicationSet: string;
```

- *Type:* string

The ReplicationSet component.

---

### SSMIncidentsReplicationSetArnProps <a name="SSMIncidentsReplicationSetArnProps" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsReplicationSetArnProps"></a>

Properties for building a replication-set ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsReplicationSetArnProps.Initializer"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

const sSMIncidentsReplicationSetArnProps: ssm_incidents.SSMIncidentsReplicationSetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsReplicationSetArnProps.property.replicationSet">replicationSet</a></code> | <code>string</code> | The ReplicationSet component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsReplicationSetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsReplicationSetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `replicationSet`<sup>Required</sup> <a name="replicationSet" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsReplicationSetArnProps.property.replicationSet"></a>

```typescript
public readonly replicationSet: string;
```

- *Type:* string

The ReplicationSet component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsReplicationSetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsReplicationSetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### SSMIncidentsResponsePlanArnComponents <a name="SSMIncidentsResponsePlanArnComponents" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResponsePlanArnComponents"></a>

Parsed components of a response-plan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResponsePlanArnComponents.Initializer"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

const sSMIncidentsResponsePlanArnComponents: ssm_incidents.SSMIncidentsResponsePlanArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsResponsePlanArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsResponsePlanArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsResponsePlanArnComponents.property.responsePlan">responsePlan</a></code> | <code>string</code> | The ResponsePlan component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResponsePlanArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResponsePlanArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `responsePlan`<sup>Required</sup> <a name="responsePlan" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResponsePlanArnComponents.property.responsePlan"></a>

```typescript
public readonly responsePlan: string;
```

- *Type:* string

The ResponsePlan component.

---

### SSMIncidentsResponsePlanArnProps <a name="SSMIncidentsResponsePlanArnProps" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResponsePlanArnProps"></a>

Properties for building a response-plan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResponsePlanArnProps.Initializer"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

const sSMIncidentsResponsePlanArnProps: ssm_incidents.SSMIncidentsResponsePlanArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsResponsePlanArnProps.property.responsePlan">responsePlan</a></code> | <code>string</code> | The ResponsePlan component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsResponsePlanArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsResponsePlanArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `responsePlan`<sup>Required</sup> <a name="responsePlan" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResponsePlanArnProps.property.responsePlan"></a>

```typescript
public readonly responsePlan: string;
```

- *Type:* string

The ResponsePlan component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResponsePlanArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResponsePlanArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### SSMIncidentsActions <a name="SSMIncidentsActions" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions"></a>

IAM action constants for the ssm-incidents service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.Initializer"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

new ssm_incidents.SSMIncidentsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.actionGetIncidentRecord">actionGetIncidentRecord</a></code> | <code>string</code> | [Read] ssm-incidents:GetIncidentRecord. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.actionGetReplicationSet">actionGetReplicationSet</a></code> | <code>string</code> | [Read] ssm-incidents:GetReplicationSet. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.actionGetResourcePolicies">actionGetResourcePolicies</a></code> | <code>string</code> | [Read] ssm-incidents:GetResourcePolicies. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.actionGetResponsePlan">actionGetResponsePlan</a></code> | <code>string</code> | [Read] ssm-incidents:GetResponsePlan. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.actionGetTimelineEvent">actionGetTimelineEvent</a></code> | <code>string</code> | [Read] ssm-incidents:GetTimelineEvent. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.BatchGetIncidentFindings">BatchGetIncidentFindings</a></code> | <code>string</code> | [Read] ssm-incidents:BatchGetIncidentFindings. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.CreateReplicationSet">CreateReplicationSet</a></code> | <code>string</code> | [Write] ssm-incidents:CreateReplicationSet. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.CreateResponsePlan">CreateResponsePlan</a></code> | <code>string</code> | [Write] ssm-incidents:CreateResponsePlan. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.CreateTimelineEvent">CreateTimelineEvent</a></code> | <code>string</code> | [Write] ssm-incidents:CreateTimelineEvent. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.DeleteIncidentRecord">DeleteIncidentRecord</a></code> | <code>string</code> | [Write] ssm-incidents:DeleteIncidentRecord. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.DeleteReplicationSet">DeleteReplicationSet</a></code> | <code>string</code> | [Write] ssm-incidents:DeleteReplicationSet. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] ssm-incidents:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.DeleteResponsePlan">DeleteResponsePlan</a></code> | <code>string</code> | [Write] ssm-incidents:DeleteResponsePlan. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.DeleteTimelineEvent">DeleteTimelineEvent</a></code> | <code>string</code> | [Write] ssm-incidents:DeleteTimelineEvent. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.ListIncidentFindings">ListIncidentFindings</a></code> | <code>string</code> | [List] ssm-incidents:ListIncidentFindings. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.ListIncidentRecords">ListIncidentRecords</a></code> | <code>string</code> | [List] ssm-incidents:ListIncidentRecords. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.ListRelatedItems">ListRelatedItems</a></code> | <code>string</code> | [List] ssm-incidents:ListRelatedItems. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.ListReplicationSets">ListReplicationSets</a></code> | <code>string</code> | [List] ssm-incidents:ListReplicationSets. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.ListResponsePlans">ListResponsePlans</a></code> | <code>string</code> | [List] ssm-incidents:ListResponsePlans. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] ssm-incidents:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.ListTimelineEvents">ListTimelineEvents</a></code> | <code>string</code> | [List] ssm-incidents:ListTimelineEvents. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] ssm-incidents:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.StartIncident">StartIncident</a></code> | <code>string</code> | [Write] ssm-incidents:StartIncident. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] ssm-incidents:TagResource. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] ssm-incidents:UntagResource. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.UpdateDeletionProtection">UpdateDeletionProtection</a></code> | <code>string</code> | [Write] ssm-incidents:UpdateDeletionProtection. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.UpdateIncidentRecord">UpdateIncidentRecord</a></code> | <code>string</code> | [Write] ssm-incidents:UpdateIncidentRecord. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.UpdateRelatedItems">UpdateRelatedItems</a></code> | <code>string</code> | [Write] ssm-incidents:UpdateRelatedItems. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.UpdateReplicationSet">UpdateReplicationSet</a></code> | <code>string</code> | [Write] ssm-incidents:UpdateReplicationSet. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.UpdateResponsePlan">UpdateResponsePlan</a></code> | <code>string</code> | [Write] ssm-incidents:UpdateResponsePlan. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.UpdateTimelineEvent">UpdateTimelineEvent</a></code> | <code>string</code> | [Write] ssm-incidents:UpdateTimelineEvent. |

---

##### `actionGetIncidentRecord`<sup>Required</sup> <a name="actionGetIncidentRecord" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.actionGetIncidentRecord"></a>

```typescript
public readonly actionGetIncidentRecord: string;
```

- *Type:* string

[Read] ssm-incidents:GetIncidentRecord.

---

##### `actionGetReplicationSet`<sup>Required</sup> <a name="actionGetReplicationSet" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.actionGetReplicationSet"></a>

```typescript
public readonly actionGetReplicationSet: string;
```

- *Type:* string

[Read] ssm-incidents:GetReplicationSet.

---

##### `actionGetResourcePolicies`<sup>Required</sup> <a name="actionGetResourcePolicies" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.actionGetResourcePolicies"></a>

```typescript
public readonly actionGetResourcePolicies: string;
```

- *Type:* string

[Read] ssm-incidents:GetResourcePolicies.

---

##### `actionGetResponsePlan`<sup>Required</sup> <a name="actionGetResponsePlan" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.actionGetResponsePlan"></a>

```typescript
public readonly actionGetResponsePlan: string;
```

- *Type:* string

[Read] ssm-incidents:GetResponsePlan.

---

##### `actionGetTimelineEvent`<sup>Required</sup> <a name="actionGetTimelineEvent" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.actionGetTimelineEvent"></a>

```typescript
public readonly actionGetTimelineEvent: string;
```

- *Type:* string

[Read] ssm-incidents:GetTimelineEvent.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGetIncidentFindings`<sup>Required</sup> <a name="BatchGetIncidentFindings" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.BatchGetIncidentFindings"></a>

```typescript
public readonly BatchGetIncidentFindings: string;
```

- *Type:* string

[Read] ssm-incidents:BatchGetIncidentFindings.

---

##### `CreateReplicationSet`<sup>Required</sup> <a name="CreateReplicationSet" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.CreateReplicationSet"></a>

```typescript
public readonly CreateReplicationSet: string;
```

- *Type:* string

[Write] ssm-incidents:CreateReplicationSet.

---

##### `CreateResponsePlan`<sup>Required</sup> <a name="CreateResponsePlan" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.CreateResponsePlan"></a>

```typescript
public readonly CreateResponsePlan: string;
```

- *Type:* string

[Write] ssm-incidents:CreateResponsePlan.

---

##### `CreateTimelineEvent`<sup>Required</sup> <a name="CreateTimelineEvent" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.CreateTimelineEvent"></a>

```typescript
public readonly CreateTimelineEvent: string;
```

- *Type:* string

[Write] ssm-incidents:CreateTimelineEvent.

---

##### `DeleteIncidentRecord`<sup>Required</sup> <a name="DeleteIncidentRecord" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.DeleteIncidentRecord"></a>

```typescript
public readonly DeleteIncidentRecord: string;
```

- *Type:* string

[Write] ssm-incidents:DeleteIncidentRecord.

---

##### `DeleteReplicationSet`<sup>Required</sup> <a name="DeleteReplicationSet" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.DeleteReplicationSet"></a>

```typescript
public readonly DeleteReplicationSet: string;
```

- *Type:* string

[Write] ssm-incidents:DeleteReplicationSet.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] ssm-incidents:DeleteResourcePolicy.

---

##### `DeleteResponsePlan`<sup>Required</sup> <a name="DeleteResponsePlan" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.DeleteResponsePlan"></a>

```typescript
public readonly DeleteResponsePlan: string;
```

- *Type:* string

[Write] ssm-incidents:DeleteResponsePlan.

---

##### `DeleteTimelineEvent`<sup>Required</sup> <a name="DeleteTimelineEvent" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.DeleteTimelineEvent"></a>

```typescript
public readonly DeleteTimelineEvent: string;
```

- *Type:* string

[Write] ssm-incidents:DeleteTimelineEvent.

---

##### `ListIncidentFindings`<sup>Required</sup> <a name="ListIncidentFindings" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.ListIncidentFindings"></a>

```typescript
public readonly ListIncidentFindings: string;
```

- *Type:* string

[List] ssm-incidents:ListIncidentFindings.

---

##### `ListIncidentRecords`<sup>Required</sup> <a name="ListIncidentRecords" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.ListIncidentRecords"></a>

```typescript
public readonly ListIncidentRecords: string;
```

- *Type:* string

[List] ssm-incidents:ListIncidentRecords.

---

##### `ListRelatedItems`<sup>Required</sup> <a name="ListRelatedItems" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.ListRelatedItems"></a>

```typescript
public readonly ListRelatedItems: string;
```

- *Type:* string

[List] ssm-incidents:ListRelatedItems.

---

##### `ListReplicationSets`<sup>Required</sup> <a name="ListReplicationSets" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.ListReplicationSets"></a>

```typescript
public readonly ListReplicationSets: string;
```

- *Type:* string

[List] ssm-incidents:ListReplicationSets.

---

##### `ListResponsePlans`<sup>Required</sup> <a name="ListResponsePlans" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.ListResponsePlans"></a>

```typescript
public readonly ListResponsePlans: string;
```

- *Type:* string

[List] ssm-incidents:ListResponsePlans.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] ssm-incidents:ListTagsForResource.

---

##### `ListTimelineEvents`<sup>Required</sup> <a name="ListTimelineEvents" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.ListTimelineEvents"></a>

```typescript
public readonly ListTimelineEvents: string;
```

- *Type:* string

[List] ssm-incidents:ListTimelineEvents.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] ssm-incidents:PutResourcePolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartIncident`<sup>Required</sup> <a name="StartIncident" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.StartIncident"></a>

```typescript
public readonly StartIncident: string;
```

- *Type:* string

[Write] ssm-incidents:StartIncident.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] ssm-incidents:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] ssm-incidents:UntagResource.

---

##### `UpdateDeletionProtection`<sup>Required</sup> <a name="UpdateDeletionProtection" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.UpdateDeletionProtection"></a>

```typescript
public readonly UpdateDeletionProtection: string;
```

- *Type:* string

[Write] ssm-incidents:UpdateDeletionProtection.

---

##### `UpdateIncidentRecord`<sup>Required</sup> <a name="UpdateIncidentRecord" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.UpdateIncidentRecord"></a>

```typescript
public readonly UpdateIncidentRecord: string;
```

- *Type:* string

[Write] ssm-incidents:UpdateIncidentRecord.

---

##### `UpdateRelatedItems`<sup>Required</sup> <a name="UpdateRelatedItems" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.UpdateRelatedItems"></a>

```typescript
public readonly UpdateRelatedItems: string;
```

- *Type:* string

[Write] ssm-incidents:UpdateRelatedItems.

---

##### `UpdateReplicationSet`<sup>Required</sup> <a name="UpdateReplicationSet" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.UpdateReplicationSet"></a>

```typescript
public readonly UpdateReplicationSet: string;
```

- *Type:* string

[Write] ssm-incidents:UpdateReplicationSet.

---

##### `UpdateResponsePlan`<sup>Required</sup> <a name="UpdateResponsePlan" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.UpdateResponsePlan"></a>

```typescript
public readonly UpdateResponsePlan: string;
```

- *Type:* string

[Write] ssm-incidents:UpdateResponsePlan.

---

##### `UpdateTimelineEvent`<sup>Required</sup> <a name="UpdateTimelineEvent" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsActions.property.UpdateTimelineEvent"></a>

```typescript
public readonly UpdateTimelineEvent: string;
```

- *Type:* string

[Write] ssm-incidents:UpdateTimelineEvent.

---

### SSMIncidentsConditions <a name="SSMIncidentsConditions" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions"></a>

Condition key constants and builders for ssm-incidents.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.Initializer"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

new ssm_incidents.SSMIncidentsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.requestTag"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

ssm_incidents.SSMIncidentsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.resourceTag"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

ssm_incidents.SSMIncidentsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.tagKeys"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

ssm_incidents.SSMIncidentsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.property.CreateReplicationSetConditionKeys">CreateReplicationSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateReplicationSet action. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.property.CreateResponsePlanConditionKeys">CreateResponsePlanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateResponsePlan action. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.property.UpdateResponsePlanConditionKeys">UpdateResponsePlanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateResponsePlan action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateReplicationSetConditionKeys`<sup>Required</sup> <a name="CreateReplicationSetConditionKeys" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.property.CreateReplicationSetConditionKeys"></a>

```typescript
public readonly CreateReplicationSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateReplicationSet action.

---

##### `CreateResponsePlanConditionKeys`<sup>Required</sup> <a name="CreateResponsePlanConditionKeys" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.property.CreateResponsePlanConditionKeys"></a>

```typescript
public readonly CreateResponsePlanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateResponsePlan action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateResponsePlanConditionKeys`<sup>Required</sup> <a name="UpdateResponsePlanConditionKeys" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsConditions.property.UpdateResponsePlanConditionKeys"></a>

```typescript
public readonly UpdateResponsePlanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateResponsePlan action.

---

### SSMIncidentsOperations <a name="SSMIncidentsOperations" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations"></a>

API operation to required IAM actions mapping for ssm-incidents.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.Initializer"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

new ssm_incidents.SSMIncidentsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.BatchGetIncidentFindings">BatchGetIncidentFindings</a></code> | <code>string[]</code> | IAM actions required for the BatchGetIncidentFindings API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.CreateReplicationSet">CreateReplicationSet</a></code> | <code>string[]</code> | IAM actions required for the CreateReplicationSet API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.CreateResponsePlan">CreateResponsePlan</a></code> | <code>string[]</code> | IAM actions required for the CreateResponsePlan API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.CreateTimelineEvent">CreateTimelineEvent</a></code> | <code>string[]</code> | IAM actions required for the CreateTimelineEvent API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.DeleteIncidentRecord">DeleteIncidentRecord</a></code> | <code>string[]</code> | IAM actions required for the DeleteIncidentRecord API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.DeleteReplicationSet">DeleteReplicationSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteReplicationSet API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.DeleteResponsePlan">DeleteResponsePlan</a></code> | <code>string[]</code> | IAM actions required for the DeleteResponsePlan API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.DeleteTimelineEvent">DeleteTimelineEvent</a></code> | <code>string[]</code> | IAM actions required for the DeleteTimelineEvent API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.ListIncidentFindings">ListIncidentFindings</a></code> | <code>string[]</code> | IAM actions required for the ListIncidentFindings API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.ListIncidentRecords">ListIncidentRecords</a></code> | <code>string[]</code> | IAM actions required for the ListIncidentRecords API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.ListRelatedItems">ListRelatedItems</a></code> | <code>string[]</code> | IAM actions required for the ListRelatedItems API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.ListReplicationSets">ListReplicationSets</a></code> | <code>string[]</code> | IAM actions required for the ListReplicationSets API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.ListResponsePlans">ListResponsePlans</a></code> | <code>string[]</code> | IAM actions required for the ListResponsePlans API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.ListTimelineEvents">ListTimelineEvents</a></code> | <code>string[]</code> | IAM actions required for the ListTimelineEvents API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.opGetIncidentRecord">opGetIncidentRecord</a></code> | <code>string[]</code> | IAM actions required for the GetIncidentRecord API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.opGetReplicationSet">opGetReplicationSet</a></code> | <code>string[]</code> | IAM actions required for the GetReplicationSet API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.opGetResourcePolicies">opGetResourcePolicies</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicies API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.opGetResponsePlan">opGetResponsePlan</a></code> | <code>string[]</code> | IAM actions required for the GetResponsePlan API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.opGetTimelineEvent">opGetTimelineEvent</a></code> | <code>string[]</code> | IAM actions required for the GetTimelineEvent API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.StartIncident">StartIncident</a></code> | <code>string[]</code> | IAM actions required for the StartIncident API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.UpdateDeletionProtection">UpdateDeletionProtection</a></code> | <code>string[]</code> | IAM actions required for the UpdateDeletionProtection API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.UpdateIncidentRecord">UpdateIncidentRecord</a></code> | <code>string[]</code> | IAM actions required for the UpdateIncidentRecord API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.UpdateRelatedItems">UpdateRelatedItems</a></code> | <code>string[]</code> | IAM actions required for the UpdateRelatedItems API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.UpdateReplicationSet">UpdateReplicationSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateReplicationSet API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.UpdateResponsePlan">UpdateResponsePlan</a></code> | <code>string[]</code> | IAM actions required for the UpdateResponsePlan API call. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.UpdateTimelineEvent">UpdateTimelineEvent</a></code> | <code>string[]</code> | IAM actions required for the UpdateTimelineEvent API call. |

---

##### `BatchGetIncidentFindings`<sup>Required</sup> <a name="BatchGetIncidentFindings" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.BatchGetIncidentFindings"></a>

```typescript
public readonly BatchGetIncidentFindings: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetIncidentFindings API call.

---

##### `CreateReplicationSet`<sup>Required</sup> <a name="CreateReplicationSet" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.CreateReplicationSet"></a>

```typescript
public readonly CreateReplicationSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateReplicationSet API call.

---

##### `CreateResponsePlan`<sup>Required</sup> <a name="CreateResponsePlan" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.CreateResponsePlan"></a>

```typescript
public readonly CreateResponsePlan: string[];
```

- *Type:* string[]

IAM actions required for the CreateResponsePlan API call.

---

##### `CreateTimelineEvent`<sup>Required</sup> <a name="CreateTimelineEvent" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.CreateTimelineEvent"></a>

```typescript
public readonly CreateTimelineEvent: string[];
```

- *Type:* string[]

IAM actions required for the CreateTimelineEvent API call.

---

##### `DeleteIncidentRecord`<sup>Required</sup> <a name="DeleteIncidentRecord" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.DeleteIncidentRecord"></a>

```typescript
public readonly DeleteIncidentRecord: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIncidentRecord API call.

---

##### `DeleteReplicationSet`<sup>Required</sup> <a name="DeleteReplicationSet" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.DeleteReplicationSet"></a>

```typescript
public readonly DeleteReplicationSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReplicationSet API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteResponsePlan`<sup>Required</sup> <a name="DeleteResponsePlan" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.DeleteResponsePlan"></a>

```typescript
public readonly DeleteResponsePlan: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResponsePlan API call.

---

##### `DeleteTimelineEvent`<sup>Required</sup> <a name="DeleteTimelineEvent" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.DeleteTimelineEvent"></a>

```typescript
public readonly DeleteTimelineEvent: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTimelineEvent API call.

---

##### `ListIncidentFindings`<sup>Required</sup> <a name="ListIncidentFindings" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.ListIncidentFindings"></a>

```typescript
public readonly ListIncidentFindings: string[];
```

- *Type:* string[]

IAM actions required for the ListIncidentFindings API call.

---

##### `ListIncidentRecords`<sup>Required</sup> <a name="ListIncidentRecords" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.ListIncidentRecords"></a>

```typescript
public readonly ListIncidentRecords: string[];
```

- *Type:* string[]

IAM actions required for the ListIncidentRecords API call.

---

##### `ListRelatedItems`<sup>Required</sup> <a name="ListRelatedItems" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.ListRelatedItems"></a>

```typescript
public readonly ListRelatedItems: string[];
```

- *Type:* string[]

IAM actions required for the ListRelatedItems API call.

---

##### `ListReplicationSets`<sup>Required</sup> <a name="ListReplicationSets" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.ListReplicationSets"></a>

```typescript
public readonly ListReplicationSets: string[];
```

- *Type:* string[]

IAM actions required for the ListReplicationSets API call.

---

##### `ListResponsePlans`<sup>Required</sup> <a name="ListResponsePlans" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.ListResponsePlans"></a>

```typescript
public readonly ListResponsePlans: string[];
```

- *Type:* string[]

IAM actions required for the ListResponsePlans API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTimelineEvents`<sup>Required</sup> <a name="ListTimelineEvents" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.ListTimelineEvents"></a>

```typescript
public readonly ListTimelineEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListTimelineEvents API call.

---

##### `opGetIncidentRecord`<sup>Required</sup> <a name="opGetIncidentRecord" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.opGetIncidentRecord"></a>

```typescript
public readonly opGetIncidentRecord: string[];
```

- *Type:* string[]

IAM actions required for the GetIncidentRecord API call.

---

##### `opGetReplicationSet`<sup>Required</sup> <a name="opGetReplicationSet" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.opGetReplicationSet"></a>

```typescript
public readonly opGetReplicationSet: string[];
```

- *Type:* string[]

IAM actions required for the GetReplicationSet API call.

---

##### `opGetResourcePolicies`<sup>Required</sup> <a name="opGetResourcePolicies" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.opGetResourcePolicies"></a>

```typescript
public readonly opGetResourcePolicies: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicies API call.

---

##### `opGetResponsePlan`<sup>Required</sup> <a name="opGetResponsePlan" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.opGetResponsePlan"></a>

```typescript
public readonly opGetResponsePlan: string[];
```

- *Type:* string[]

IAM actions required for the GetResponsePlan API call.

---

##### `opGetTimelineEvent`<sup>Required</sup> <a name="opGetTimelineEvent" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.opGetTimelineEvent"></a>

```typescript
public readonly opGetTimelineEvent: string[];
```

- *Type:* string[]

IAM actions required for the GetTimelineEvent API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `StartIncident`<sup>Required</sup> <a name="StartIncident" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.StartIncident"></a>

```typescript
public readonly StartIncident: string[];
```

- *Type:* string[]

IAM actions required for the StartIncident API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDeletionProtection`<sup>Required</sup> <a name="UpdateDeletionProtection" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.UpdateDeletionProtection"></a>

```typescript
public readonly UpdateDeletionProtection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDeletionProtection API call.

---

##### `UpdateIncidentRecord`<sup>Required</sup> <a name="UpdateIncidentRecord" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.UpdateIncidentRecord"></a>

```typescript
public readonly UpdateIncidentRecord: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIncidentRecord API call.

---

##### `UpdateRelatedItems`<sup>Required</sup> <a name="UpdateRelatedItems" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.UpdateRelatedItems"></a>

```typescript
public readonly UpdateRelatedItems: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRelatedItems API call.

---

##### `UpdateReplicationSet`<sup>Required</sup> <a name="UpdateReplicationSet" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.UpdateReplicationSet"></a>

```typescript
public readonly UpdateReplicationSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateReplicationSet API call.

---

##### `UpdateResponsePlan`<sup>Required</sup> <a name="UpdateResponsePlan" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.UpdateResponsePlan"></a>

```typescript
public readonly UpdateResponsePlan: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResponsePlan API call.

---

##### `UpdateTimelineEvent`<sup>Required</sup> <a name="UpdateTimelineEvent" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsOperations.property.UpdateTimelineEvent"></a>

```typescript
public readonly UpdateTimelineEvent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTimelineEvent API call.

---

### SSMIncidentsResources <a name="SSMIncidentsResources" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources"></a>

ARN builders, validators, and parsers for ssm-incidents resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.Initializer"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

new ssm_incidents.SSMIncidentsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.incidentRecord">incidentRecord</a></code> | Builds an ARN for the incident-record resource. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.isValidIncidentRecordArn">isValidIncidentRecordArn</a></code> | Validates whether a string is a valid ARN for the incident-record resource. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.isValidReplicationSetArn">isValidReplicationSetArn</a></code> | Validates whether a string is a valid ARN for the replication-set resource. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.isValidResponsePlanArn">isValidResponsePlanArn</a></code> | Validates whether a string is a valid ARN for the response-plan resource. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.parseIncidentRecordArn">parseIncidentRecordArn</a></code> | Parses a incident-record ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.parseReplicationSetArn">parseReplicationSetArn</a></code> | Parses a replication-set ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.parseResponsePlanArn">parseResponsePlanArn</a></code> | Parses a response-plan ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.replicationSet">replicationSet</a></code> | Builds an ARN for the replication-set resource. |
| <code><a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.responsePlan">responsePlan</a></code> | Builds an ARN for the response-plan resource. |

---

##### `incidentRecord` <a name="incidentRecord" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.incidentRecord"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

ssm_incidents.SSMIncidentsResources.incidentRecord(props: SSMIncidentsIncidentRecordArnProps)
```

Builds an ARN for the incident-record resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.incidentRecord.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsIncidentRecordArnProps">SSMIncidentsIncidentRecordArnProps</a>

---

##### `isValidIncidentRecordArn` <a name="isValidIncidentRecordArn" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.isValidIncidentRecordArn"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

ssm_incidents.SSMIncidentsResources.isValidIncidentRecordArn(arn: string)
```

Validates whether a string is a valid ARN for the incident-record resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.isValidIncidentRecordArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReplicationSetArn` <a name="isValidReplicationSetArn" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.isValidReplicationSetArn"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

ssm_incidents.SSMIncidentsResources.isValidReplicationSetArn(arn: string)
```

Validates whether a string is a valid ARN for the replication-set resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.isValidReplicationSetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResponsePlanArn` <a name="isValidResponsePlanArn" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.isValidResponsePlanArn"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

ssm_incidents.SSMIncidentsResources.isValidResponsePlanArn(arn: string)
```

Validates whether a string is a valid ARN for the response-plan resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.isValidResponsePlanArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIncidentRecordArn` <a name="parseIncidentRecordArn" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.parseIncidentRecordArn"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

ssm_incidents.SSMIncidentsResources.parseIncidentRecordArn(arn: string)
```

Parses a incident-record ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.parseIncidentRecordArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReplicationSetArn` <a name="parseReplicationSetArn" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.parseReplicationSetArn"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

ssm_incidents.SSMIncidentsResources.parseReplicationSetArn(arn: string)
```

Parses a replication-set ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.parseReplicationSetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResponsePlanArn` <a name="parseResponsePlanArn" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.parseResponsePlanArn"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

ssm_incidents.SSMIncidentsResources.parseResponsePlanArn(arn: string)
```

Parses a response-plan ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.parseResponsePlanArn.parameter.arn"></a>

- *Type:* string

---

##### `replicationSet` <a name="replicationSet" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.replicationSet"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

ssm_incidents.SSMIncidentsResources.replicationSet(props: SSMIncidentsReplicationSetArnProps)
```

Builds an ARN for the replication-set resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.replicationSet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsReplicationSetArnProps">SSMIncidentsReplicationSetArnProps</a>

---

##### `responsePlan` <a name="responsePlan" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.responsePlan"></a>

```typescript
import { ssm_incidents } from '@cdk_utils/iam'

ssm_incidents.SSMIncidentsResources.responsePlan(props: SSMIncidentsResponsePlanArnProps)
```

Builds an ARN for the response-plan resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm_incidents.SSMIncidentsResources.responsePlan.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm_incidents.SSMIncidentsResponsePlanArnProps">SSMIncidentsResponsePlanArnProps</a>

---




