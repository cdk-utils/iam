# `iotdeviceadvisor` Submodule <a name="`iotdeviceadvisor` Submodule" id="@cdk_utils/iam.iotdeviceadvisor"></a>


## Structs <a name="Structs" id="Structs"></a>

### IotdeviceadvisorSuitedefinitionArnComponents <a name="IotdeviceadvisorSuitedefinitionArnComponents" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnComponents"></a>

Parsed components of a Suitedefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnComponents.Initializer"></a>

```typescript
import { iotdeviceadvisor } from '@cdk_utils/iam'

const iotdeviceadvisorSuitedefinitionArnComponents: iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnComponents.property.suiteDefinitionId">suiteDefinitionId</a></code> | <code>string</code> | The SuiteDefinitionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `suiteDefinitionId`<sup>Required</sup> <a name="suiteDefinitionId" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnComponents.property.suiteDefinitionId"></a>

```typescript
public readonly suiteDefinitionId: string;
```

- *Type:* string

The SuiteDefinitionId component.

---

### IotdeviceadvisorSuitedefinitionArnProps <a name="IotdeviceadvisorSuitedefinitionArnProps" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnProps"></a>

Properties for building a Suitedefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnProps.Initializer"></a>

```typescript
import { iotdeviceadvisor } from '@cdk_utils/iam'

const iotdeviceadvisorSuitedefinitionArnProps: iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnProps.property.suiteDefinitionId">suiteDefinitionId</a></code> | <code>string</code> | The SuiteDefinitionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `suiteDefinitionId`<sup>Required</sup> <a name="suiteDefinitionId" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnProps.property.suiteDefinitionId"></a>

```typescript
public readonly suiteDefinitionId: string;
```

- *Type:* string

The SuiteDefinitionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotdeviceadvisorSuiterunArnComponents <a name="IotdeviceadvisorSuiterunArnComponents" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnComponents"></a>

Parsed components of a Suiterun ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnComponents.Initializer"></a>

```typescript
import { iotdeviceadvisor } from '@cdk_utils/iam'

const iotdeviceadvisorSuiterunArnComponents: iotdeviceadvisor.IotdeviceadvisorSuiterunArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnComponents.property.suiteDefinitionId">suiteDefinitionId</a></code> | <code>string</code> | The SuiteDefinitionId component. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnComponents.property.suiteRunId">suiteRunId</a></code> | <code>string</code> | The SuiteRunId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `suiteDefinitionId`<sup>Required</sup> <a name="suiteDefinitionId" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnComponents.property.suiteDefinitionId"></a>

```typescript
public readonly suiteDefinitionId: string;
```

- *Type:* string

The SuiteDefinitionId component.

---

##### `suiteRunId`<sup>Required</sup> <a name="suiteRunId" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnComponents.property.suiteRunId"></a>

```typescript
public readonly suiteRunId: string;
```

- *Type:* string

The SuiteRunId component.

---

### IotdeviceadvisorSuiterunArnProps <a name="IotdeviceadvisorSuiterunArnProps" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnProps"></a>

Properties for building a Suiterun ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnProps.Initializer"></a>

```typescript
import { iotdeviceadvisor } from '@cdk_utils/iam'

const iotdeviceadvisorSuiterunArnProps: iotdeviceadvisor.IotdeviceadvisorSuiterunArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnProps.property.suiteDefinitionId">suiteDefinitionId</a></code> | <code>string</code> | The SuiteDefinitionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnProps.property.suiteRunId">suiteRunId</a></code> | <code>string</code> | The SuiteRunId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `suiteDefinitionId`<sup>Required</sup> <a name="suiteDefinitionId" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnProps.property.suiteDefinitionId"></a>

```typescript
public readonly suiteDefinitionId: string;
```

- *Type:* string

The SuiteDefinitionId component of the ARN.

---

##### `suiteRunId`<sup>Required</sup> <a name="suiteRunId" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnProps.property.suiteRunId"></a>

```typescript
public readonly suiteRunId: string;
```

- *Type:* string

The SuiteRunId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### IotdeviceadvisorActions <a name="IotdeviceadvisorActions" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions"></a>

IAM action constants for the iotdeviceadvisor service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.Initializer"></a>

```typescript
import { iotdeviceadvisor } from '@cdk_utils/iam'

new iotdeviceadvisor.IotdeviceadvisorActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.actionGetEndpoint">actionGetEndpoint</a></code> | <code>string</code> | [Read] iotdeviceadvisor:GetEndpoint. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.actionGetSuiteDefinition">actionGetSuiteDefinition</a></code> | <code>string</code> | [Read] iotdeviceadvisor:GetSuiteDefinition. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.actionGetSuiteRun">actionGetSuiteRun</a></code> | <code>string</code> | [Read] iotdeviceadvisor:GetSuiteRun. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.actionGetSuiteRunReport">actionGetSuiteRunReport</a></code> | <code>string</code> | [Read] iotdeviceadvisor:GetSuiteRunReport. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.CreateSuiteDefinition">CreateSuiteDefinition</a></code> | <code>string</code> | [Write] iotdeviceadvisor:CreateSuiteDefinition. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.DeleteSuiteDefinition">DeleteSuiteDefinition</a></code> | <code>string</code> | [Write] iotdeviceadvisor:DeleteSuiteDefinition. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.ListSuiteDefinitions">ListSuiteDefinitions</a></code> | <code>string</code> | [List] iotdeviceadvisor:ListSuiteDefinitions. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.ListSuiteRuns">ListSuiteRuns</a></code> | <code>string</code> | [List] iotdeviceadvisor:ListSuiteRuns. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] iotdeviceadvisor:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.StartSuiteRun">StartSuiteRun</a></code> | <code>string</code> | [Write] iotdeviceadvisor:StartSuiteRun. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.StopSuiteRun">StopSuiteRun</a></code> | <code>string</code> | [Write] iotdeviceadvisor:StopSuiteRun. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] iotdeviceadvisor:TagResource. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] iotdeviceadvisor:UntagResource. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.UpdateSuiteDefinition">UpdateSuiteDefinition</a></code> | <code>string</code> | [Write] iotdeviceadvisor:UpdateSuiteDefinition. |

---

##### `actionGetEndpoint`<sup>Required</sup> <a name="actionGetEndpoint" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.actionGetEndpoint"></a>

```typescript
public readonly actionGetEndpoint: string;
```

- *Type:* string

[Read] iotdeviceadvisor:GetEndpoint.

---

##### `actionGetSuiteDefinition`<sup>Required</sup> <a name="actionGetSuiteDefinition" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.actionGetSuiteDefinition"></a>

```typescript
public readonly actionGetSuiteDefinition: string;
```

- *Type:* string

[Read] iotdeviceadvisor:GetSuiteDefinition.

---

##### `actionGetSuiteRun`<sup>Required</sup> <a name="actionGetSuiteRun" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.actionGetSuiteRun"></a>

```typescript
public readonly actionGetSuiteRun: string;
```

- *Type:* string

[Read] iotdeviceadvisor:GetSuiteRun.

---

##### `actionGetSuiteRunReport`<sup>Required</sup> <a name="actionGetSuiteRunReport" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.actionGetSuiteRunReport"></a>

```typescript
public readonly actionGetSuiteRunReport: string;
```

- *Type:* string

[Read] iotdeviceadvisor:GetSuiteRunReport.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateSuiteDefinition`<sup>Required</sup> <a name="CreateSuiteDefinition" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.CreateSuiteDefinition"></a>

```typescript
public readonly CreateSuiteDefinition: string;
```

- *Type:* string

[Write] iotdeviceadvisor:CreateSuiteDefinition.

---

##### `DeleteSuiteDefinition`<sup>Required</sup> <a name="DeleteSuiteDefinition" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.DeleteSuiteDefinition"></a>

```typescript
public readonly DeleteSuiteDefinition: string;
```

- *Type:* string

[Write] iotdeviceadvisor:DeleteSuiteDefinition.

---

##### `ListSuiteDefinitions`<sup>Required</sup> <a name="ListSuiteDefinitions" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.ListSuiteDefinitions"></a>

```typescript
public readonly ListSuiteDefinitions: string;
```

- *Type:* string

[List] iotdeviceadvisor:ListSuiteDefinitions.

---

##### `ListSuiteRuns`<sup>Required</sup> <a name="ListSuiteRuns" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.ListSuiteRuns"></a>

```typescript
public readonly ListSuiteRuns: string;
```

- *Type:* string

[List] iotdeviceadvisor:ListSuiteRuns.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] iotdeviceadvisor:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartSuiteRun`<sup>Required</sup> <a name="StartSuiteRun" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.StartSuiteRun"></a>

```typescript
public readonly StartSuiteRun: string;
```

- *Type:* string

[Write] iotdeviceadvisor:StartSuiteRun.

---

##### `StopSuiteRun`<sup>Required</sup> <a name="StopSuiteRun" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.StopSuiteRun"></a>

```typescript
public readonly StopSuiteRun: string;
```

- *Type:* string

[Write] iotdeviceadvisor:StopSuiteRun.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] iotdeviceadvisor:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] iotdeviceadvisor:UntagResource.

---

##### `UpdateSuiteDefinition`<sup>Required</sup> <a name="UpdateSuiteDefinition" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorActions.property.UpdateSuiteDefinition"></a>

```typescript
public readonly UpdateSuiteDefinition: string;
```

- *Type:* string

[Write] iotdeviceadvisor:UpdateSuiteDefinition.

---

### IotdeviceadvisorConditions <a name="IotdeviceadvisorConditions" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions"></a>

Condition key constants and builders for iotdeviceadvisor.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.Initializer"></a>

```typescript
import { iotdeviceadvisor } from '@cdk_utils/iam'

new iotdeviceadvisor.IotdeviceadvisorConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.requestTag"></a>

```typescript
import { iotdeviceadvisor } from '@cdk_utils/iam'

iotdeviceadvisor.IotdeviceadvisorConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.resourceTag"></a>

```typescript
import { iotdeviceadvisor } from '@cdk_utils/iam'

iotdeviceadvisor.IotdeviceadvisorConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.tagKeys"></a>

```typescript
import { iotdeviceadvisor } from '@cdk_utils/iam'

iotdeviceadvisor.IotdeviceadvisorConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.property.CreateSuiteDefinitionConditionKeys">CreateSuiteDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSuiteDefinition action. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.property.StartSuiteRunConditionKeys">StartSuiteRunConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartSuiteRun action. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateSuiteDefinitionConditionKeys`<sup>Required</sup> <a name="CreateSuiteDefinitionConditionKeys" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.property.CreateSuiteDefinitionConditionKeys"></a>

```typescript
public readonly CreateSuiteDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSuiteDefinition action.

---

##### `StartSuiteRunConditionKeys`<sup>Required</sup> <a name="StartSuiteRunConditionKeys" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.property.StartSuiteRunConditionKeys"></a>

```typescript
public readonly StartSuiteRunConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartSuiteRun action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### IotdeviceadvisorOperations <a name="IotdeviceadvisorOperations" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations"></a>

API operation to required IAM actions mapping for iotdeviceadvisor.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.Initializer"></a>

```typescript
import { iotdeviceadvisor } from '@cdk_utils/iam'

new iotdeviceadvisor.IotdeviceadvisorOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.CreateSuiteDefinition">CreateSuiteDefinition</a></code> | <code>string[]</code> | IAM actions required for the CreateSuiteDefinition API call. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.DeleteSuiteDefinition">DeleteSuiteDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteSuiteDefinition API call. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.ListSuiteDefinitions">ListSuiteDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListSuiteDefinitions API call. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.ListSuiteRuns">ListSuiteRuns</a></code> | <code>string[]</code> | IAM actions required for the ListSuiteRuns API call. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.opGetEndpoint">opGetEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetEndpoint API call. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.opGetSuiteDefinition">opGetSuiteDefinition</a></code> | <code>string[]</code> | IAM actions required for the GetSuiteDefinition API call. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.opGetSuiteRun">opGetSuiteRun</a></code> | <code>string[]</code> | IAM actions required for the GetSuiteRun API call. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.opGetSuiteRunReport">opGetSuiteRunReport</a></code> | <code>string[]</code> | IAM actions required for the GetSuiteRunReport API call. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.StartSuiteRun">StartSuiteRun</a></code> | <code>string[]</code> | IAM actions required for the StartSuiteRun API call. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.StopSuiteRun">StopSuiteRun</a></code> | <code>string[]</code> | IAM actions required for the StopSuiteRun API call. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.UpdateSuiteDefinition">UpdateSuiteDefinition</a></code> | <code>string[]</code> | IAM actions required for the UpdateSuiteDefinition API call. |

---

##### `CreateSuiteDefinition`<sup>Required</sup> <a name="CreateSuiteDefinition" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.CreateSuiteDefinition"></a>

```typescript
public readonly CreateSuiteDefinition: string[];
```

- *Type:* string[]

IAM actions required for the CreateSuiteDefinition API call.

---

##### `DeleteSuiteDefinition`<sup>Required</sup> <a name="DeleteSuiteDefinition" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.DeleteSuiteDefinition"></a>

```typescript
public readonly DeleteSuiteDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSuiteDefinition API call.

---

##### `ListSuiteDefinitions`<sup>Required</sup> <a name="ListSuiteDefinitions" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.ListSuiteDefinitions"></a>

```typescript
public readonly ListSuiteDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListSuiteDefinitions API call.

---

##### `ListSuiteRuns`<sup>Required</sup> <a name="ListSuiteRuns" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.ListSuiteRuns"></a>

```typescript
public readonly ListSuiteRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListSuiteRuns API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetEndpoint`<sup>Required</sup> <a name="opGetEndpoint" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.opGetEndpoint"></a>

```typescript
public readonly opGetEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetEndpoint API call.

---

##### `opGetSuiteDefinition`<sup>Required</sup> <a name="opGetSuiteDefinition" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.opGetSuiteDefinition"></a>

```typescript
public readonly opGetSuiteDefinition: string[];
```

- *Type:* string[]

IAM actions required for the GetSuiteDefinition API call.

---

##### `opGetSuiteRun`<sup>Required</sup> <a name="opGetSuiteRun" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.opGetSuiteRun"></a>

```typescript
public readonly opGetSuiteRun: string[];
```

- *Type:* string[]

IAM actions required for the GetSuiteRun API call.

---

##### `opGetSuiteRunReport`<sup>Required</sup> <a name="opGetSuiteRunReport" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.opGetSuiteRunReport"></a>

```typescript
public readonly opGetSuiteRunReport: string[];
```

- *Type:* string[]

IAM actions required for the GetSuiteRunReport API call.

---

##### `StartSuiteRun`<sup>Required</sup> <a name="StartSuiteRun" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.StartSuiteRun"></a>

```typescript
public readonly StartSuiteRun: string[];
```

- *Type:* string[]

IAM actions required for the StartSuiteRun API call.

---

##### `StopSuiteRun`<sup>Required</sup> <a name="StopSuiteRun" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.StopSuiteRun"></a>

```typescript
public readonly StopSuiteRun: string[];
```

- *Type:* string[]

IAM actions required for the StopSuiteRun API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateSuiteDefinition`<sup>Required</sup> <a name="UpdateSuiteDefinition" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorOperations.property.UpdateSuiteDefinition"></a>

```typescript
public readonly UpdateSuiteDefinition: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSuiteDefinition API call.

---

### IotdeviceadvisorResources <a name="IotdeviceadvisorResources" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources"></a>

ARN builders, validators, and parsers for iotdeviceadvisor resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources.Initializer"></a>

```typescript
import { iotdeviceadvisor } from '@cdk_utils/iam'

new iotdeviceadvisor.IotdeviceadvisorResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources.isValidSuitedefinitionArn">isValidSuitedefinitionArn</a></code> | Validates whether a string is a valid ARN for the Suitedefinition resource. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources.isValidSuiterunArn">isValidSuiterunArn</a></code> | Validates whether a string is a valid ARN for the Suiterun resource. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources.parseSuitedefinitionArn">parseSuitedefinitionArn</a></code> | Parses a Suitedefinition ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources.parseSuiterunArn">parseSuiterunArn</a></code> | Parses a Suiterun ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources.suitedefinition">suitedefinition</a></code> | Builds an ARN for the Suitedefinition resource. |
| <code><a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources.suiterun">suiterun</a></code> | Builds an ARN for the Suiterun resource. |

---

##### `isValidSuitedefinitionArn` <a name="isValidSuitedefinitionArn" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources.isValidSuitedefinitionArn"></a>

```typescript
import { iotdeviceadvisor } from '@cdk_utils/iam'

iotdeviceadvisor.IotdeviceadvisorResources.isValidSuitedefinitionArn(arn: string)
```

Validates whether a string is a valid ARN for the Suitedefinition resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources.isValidSuitedefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSuiterunArn` <a name="isValidSuiterunArn" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources.isValidSuiterunArn"></a>

```typescript
import { iotdeviceadvisor } from '@cdk_utils/iam'

iotdeviceadvisor.IotdeviceadvisorResources.isValidSuiterunArn(arn: string)
```

Validates whether a string is a valid ARN for the Suiterun resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources.isValidSuiterunArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSuitedefinitionArn` <a name="parseSuitedefinitionArn" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources.parseSuitedefinitionArn"></a>

```typescript
import { iotdeviceadvisor } from '@cdk_utils/iam'

iotdeviceadvisor.IotdeviceadvisorResources.parseSuitedefinitionArn(arn: string)
```

Parses a Suitedefinition ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources.parseSuitedefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSuiterunArn` <a name="parseSuiterunArn" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources.parseSuiterunArn"></a>

```typescript
import { iotdeviceadvisor } from '@cdk_utils/iam'

iotdeviceadvisor.IotdeviceadvisorResources.parseSuiterunArn(arn: string)
```

Parses a Suiterun ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources.parseSuiterunArn.parameter.arn"></a>

- *Type:* string

---

##### `suitedefinition` <a name="suitedefinition" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources.suitedefinition"></a>

```typescript
import { iotdeviceadvisor } from '@cdk_utils/iam'

iotdeviceadvisor.IotdeviceadvisorResources.suitedefinition(props: IotdeviceadvisorSuitedefinitionArnProps)
```

Builds an ARN for the Suitedefinition resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources.suitedefinition.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuitedefinitionArnProps">IotdeviceadvisorSuitedefinitionArnProps</a>

---

##### `suiterun` <a name="suiterun" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources.suiterun"></a>

```typescript
import { iotdeviceadvisor } from '@cdk_utils/iam'

iotdeviceadvisor.IotdeviceadvisorResources.suiterun(props: IotdeviceadvisorSuiterunArnProps)
```

Builds an ARN for the Suiterun resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorResources.suiterun.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotdeviceadvisor.IotdeviceadvisorSuiterunArnProps">IotdeviceadvisorSuiterunArnProps</a>

---




