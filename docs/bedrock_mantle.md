# `bedrock_mantle` Submodule <a name="`bedrock_mantle` Submodule" id="@cdk_utils/iam.bedrock_mantle"></a>


## Structs <a name="Structs" id="Structs"></a>

### BedrockMantleCustomizedModelArnComponents <a name="BedrockMantleCustomizedModelArnComponents" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnComponents"></a>

Parsed components of a customized-model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnComponents.Initializer"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

const bedrockMantleCustomizedModelArnComponents: bedrock_mantle.BedrockMantleCustomizedModelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockMantleCustomizedModelArnProps <a name="BedrockMantleCustomizedModelArnProps" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnProps"></a>

Properties for building a customized-model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnProps.Initializer"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

const bedrockMantleCustomizedModelArnProps: bedrock_mantle.BedrockMantleCustomizedModelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockMantleProjectArnComponents <a name="BedrockMantleProjectArnComponents" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnComponents"></a>

Parsed components of a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnComponents.Initializer"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

const bedrockMantleProjectArnComponents: bedrock_mantle.BedrockMantleProjectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockMantleProjectArnProps <a name="BedrockMantleProjectArnProps" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnProps"></a>

Properties for building a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnProps.Initializer"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

const bedrockMantleProjectArnProps: bedrock_mantle.BedrockMantleProjectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BedrockMantleReservationArnComponents <a name="BedrockMantleReservationArnComponents" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnComponents"></a>

Parsed components of a reservation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnComponents.Initializer"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

const bedrockMantleReservationArnComponents: bedrock_mantle.BedrockMantleReservationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BedrockMantleReservationArnProps <a name="BedrockMantleReservationArnProps" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnProps"></a>

Properties for building a reservation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnProps.Initializer"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

const bedrockMantleReservationArnProps: bedrock_mantle.BedrockMantleReservationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockMantleActions <a name="BedrockMantleActions" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions"></a>

IAM action constants for the bedrock-mantle service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.Initializer"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

new bedrock_mantle.BedrockMantleActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.actionGetAccountDataRetention">actionGetAccountDataRetention</a></code> | <code>string</code> | [Read] bedrock-mantle:GetAccountDataRetention. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.actionGetCustomizedModel">actionGetCustomizedModel</a></code> | <code>string</code> | [Read] bedrock-mantle:GetCustomizedModel. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.actionGetFile">actionGetFile</a></code> | <code>string</code> | [Read] bedrock-mantle:GetFile. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.actionGetFineTuningJob">actionGetFineTuningJob</a></code> | <code>string</code> | [Read] bedrock-mantle:GetFineTuningJob. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.actionGetInference">actionGetInference</a></code> | <code>string</code> | [Read] bedrock-mantle:GetInference. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.actionGetModel">actionGetModel</a></code> | <code>string</code> | [Read] bedrock-mantle:GetModel. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.actionGetProject">actionGetProject</a></code> | <code>string</code> | [Read] bedrock-mantle:GetProject. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.actionGetReservation">actionGetReservation</a></code> | <code>string</code> | [Read] bedrock-mantle:GetReservation. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.ArchiveProject">ArchiveProject</a></code> | <code>string</code> | [Write] bedrock-mantle:ArchiveProject. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.AssociateCustomizedModel">AssociateCustomizedModel</a></code> | <code>string</code> | [Write] bedrock-mantle:AssociateCustomizedModel. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.CallWithBearerToken">CallWithBearerToken</a></code> | <code>string</code> | [List] bedrock-mantle:CallWithBearerToken. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.CancelFineTuningJob">CancelFineTuningJob</a></code> | <code>string</code> | [Write] bedrock-mantle:CancelFineTuningJob. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.CancelInference">CancelInference</a></code> | <code>string</code> | [Write] bedrock-mantle:CancelInference. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.CreateCustomizedModel">CreateCustomizedModel</a></code> | <code>string</code> | [Write] bedrock-mantle:CreateCustomizedModel. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.CreateFile">CreateFile</a></code> | <code>string</code> | [Write] bedrock-mantle:CreateFile. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.CreateFineTuningJob">CreateFineTuningJob</a></code> | <code>string</code> | [Write] bedrock-mantle:CreateFineTuningJob. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.CreateInference">CreateInference</a></code> | <code>string</code> | [Write] bedrock-mantle:CreateInference. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.CreateProject">CreateProject</a></code> | <code>string</code> | [Write] bedrock-mantle:CreateProject. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.CreateReservation">CreateReservation</a></code> | <code>string</code> | [Write] bedrock-mantle:CreateReservation. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.DeleteCustomizedModel">DeleteCustomizedModel</a></code> | <code>string</code> | [Write] bedrock-mantle:DeleteCustomizedModel. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.DeleteFile">DeleteFile</a></code> | <code>string</code> | [Write] bedrock-mantle:DeleteFile. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.DeleteInference">DeleteInference</a></code> | <code>string</code> | [Write] bedrock-mantle:DeleteInference. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.DeleteReservation">DeleteReservation</a></code> | <code>string</code> | [Write] bedrock-mantle:DeleteReservation. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.DisassociateCustomizedModel">DisassociateCustomizedModel</a></code> | <code>string</code> | [Write] bedrock-mantle:DisassociateCustomizedModel. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.ListCustomizedModelAssociations">ListCustomizedModelAssociations</a></code> | <code>string</code> | [List] bedrock-mantle:ListCustomizedModelAssociations. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.ListCustomizedModels">ListCustomizedModels</a></code> | <code>string</code> | [List] bedrock-mantle:ListCustomizedModels. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.ListFiles">ListFiles</a></code> | <code>string</code> | [List] bedrock-mantle:ListFiles. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.ListFineTuningJobs">ListFineTuningJobs</a></code> | <code>string</code> | [List] bedrock-mantle:ListFineTuningJobs. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.ListModels">ListModels</a></code> | <code>string</code> | [List] bedrock-mantle:ListModels. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.ListProjects">ListProjects</a></code> | <code>string</code> | [List] bedrock-mantle:ListProjects. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.ListReservations">ListReservations</a></code> | <code>string</code> | [List] bedrock-mantle:ListReservations. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] bedrock-mantle:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.PutAccountDataRetention">PutAccountDataRetention</a></code> | <code>string</code> | [Write] bedrock-mantle:PutAccountDataRetention. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] bedrock-mantle:TagResource. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] bedrock-mantle:UntagResource. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.UpdateProject">UpdateProject</a></code> | <code>string</code> | [Write] bedrock-mantle:UpdateProject. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.UpdateReservation">UpdateReservation</a></code> | <code>string</code> | [Write] bedrock-mantle:UpdateReservation. |

---

##### `actionGetAccountDataRetention`<sup>Required</sup> <a name="actionGetAccountDataRetention" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.actionGetAccountDataRetention"></a>

```typescript
public readonly actionGetAccountDataRetention: string;
```

- *Type:* string

[Read] bedrock-mantle:GetAccountDataRetention.

---

##### `actionGetCustomizedModel`<sup>Required</sup> <a name="actionGetCustomizedModel" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.actionGetCustomizedModel"></a>

```typescript
public readonly actionGetCustomizedModel: string;
```

- *Type:* string

[Read] bedrock-mantle:GetCustomizedModel.

---

##### `actionGetFile`<sup>Required</sup> <a name="actionGetFile" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.actionGetFile"></a>

```typescript
public readonly actionGetFile: string;
```

- *Type:* string

[Read] bedrock-mantle:GetFile.

---

##### `actionGetFineTuningJob`<sup>Required</sup> <a name="actionGetFineTuningJob" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.actionGetFineTuningJob"></a>

```typescript
public readonly actionGetFineTuningJob: string;
```

- *Type:* string

[Read] bedrock-mantle:GetFineTuningJob.

---

##### `actionGetInference`<sup>Required</sup> <a name="actionGetInference" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.actionGetInference"></a>

```typescript
public readonly actionGetInference: string;
```

- *Type:* string

[Read] bedrock-mantle:GetInference.

---

##### `actionGetModel`<sup>Required</sup> <a name="actionGetModel" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.actionGetModel"></a>

```typescript
public readonly actionGetModel: string;
```

- *Type:* string

[Read] bedrock-mantle:GetModel.

---

##### `actionGetProject`<sup>Required</sup> <a name="actionGetProject" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.actionGetProject"></a>

```typescript
public readonly actionGetProject: string;
```

- *Type:* string

[Read] bedrock-mantle:GetProject.

---

##### `actionGetReservation`<sup>Required</sup> <a name="actionGetReservation" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.actionGetReservation"></a>

```typescript
public readonly actionGetReservation: string;
```

- *Type:* string

[Read] bedrock-mantle:GetReservation.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ArchiveProject`<sup>Required</sup> <a name="ArchiveProject" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.ArchiveProject"></a>

```typescript
public readonly ArchiveProject: string;
```

- *Type:* string

[Write] bedrock-mantle:ArchiveProject.

---

##### `AssociateCustomizedModel`<sup>Required</sup> <a name="AssociateCustomizedModel" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.AssociateCustomizedModel"></a>

```typescript
public readonly AssociateCustomizedModel: string;
```

- *Type:* string

[Write] bedrock-mantle:AssociateCustomizedModel.

---

##### `CallWithBearerToken`<sup>Required</sup> <a name="CallWithBearerToken" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.CallWithBearerToken"></a>

```typescript
public readonly CallWithBearerToken: string;
```

- *Type:* string

[List] bedrock-mantle:CallWithBearerToken.

---

##### `CancelFineTuningJob`<sup>Required</sup> <a name="CancelFineTuningJob" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.CancelFineTuningJob"></a>

```typescript
public readonly CancelFineTuningJob: string;
```

- *Type:* string

[Write] bedrock-mantle:CancelFineTuningJob.

---

##### `CancelInference`<sup>Required</sup> <a name="CancelInference" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.CancelInference"></a>

```typescript
public readonly CancelInference: string;
```

- *Type:* string

[Write] bedrock-mantle:CancelInference.

---

##### `CreateCustomizedModel`<sup>Required</sup> <a name="CreateCustomizedModel" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.CreateCustomizedModel"></a>

```typescript
public readonly CreateCustomizedModel: string;
```

- *Type:* string

[Write] bedrock-mantle:CreateCustomizedModel.

---

##### `CreateFile`<sup>Required</sup> <a name="CreateFile" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.CreateFile"></a>

```typescript
public readonly CreateFile: string;
```

- *Type:* string

[Write] bedrock-mantle:CreateFile.

---

##### `CreateFineTuningJob`<sup>Required</sup> <a name="CreateFineTuningJob" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.CreateFineTuningJob"></a>

```typescript
public readonly CreateFineTuningJob: string;
```

- *Type:* string

[Write] bedrock-mantle:CreateFineTuningJob.

---

##### `CreateInference`<sup>Required</sup> <a name="CreateInference" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.CreateInference"></a>

```typescript
public readonly CreateInference: string;
```

- *Type:* string

[Write] bedrock-mantle:CreateInference.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.CreateProject"></a>

```typescript
public readonly CreateProject: string;
```

- *Type:* string

[Write] bedrock-mantle:CreateProject.

---

##### `CreateReservation`<sup>Required</sup> <a name="CreateReservation" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.CreateReservation"></a>

```typescript
public readonly CreateReservation: string;
```

- *Type:* string

[Write] bedrock-mantle:CreateReservation.

---

##### `DeleteCustomizedModel`<sup>Required</sup> <a name="DeleteCustomizedModel" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.DeleteCustomizedModel"></a>

```typescript
public readonly DeleteCustomizedModel: string;
```

- *Type:* string

[Write] bedrock-mantle:DeleteCustomizedModel.

---

##### `DeleteFile`<sup>Required</sup> <a name="DeleteFile" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.DeleteFile"></a>

```typescript
public readonly DeleteFile: string;
```

- *Type:* string

[Write] bedrock-mantle:DeleteFile.

---

##### `DeleteInference`<sup>Required</sup> <a name="DeleteInference" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.DeleteInference"></a>

```typescript
public readonly DeleteInference: string;
```

- *Type:* string

[Write] bedrock-mantle:DeleteInference.

---

##### `DeleteReservation`<sup>Required</sup> <a name="DeleteReservation" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.DeleteReservation"></a>

```typescript
public readonly DeleteReservation: string;
```

- *Type:* string

[Write] bedrock-mantle:DeleteReservation.

---

##### `DisassociateCustomizedModel`<sup>Required</sup> <a name="DisassociateCustomizedModel" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.DisassociateCustomizedModel"></a>

```typescript
public readonly DisassociateCustomizedModel: string;
```

- *Type:* string

[Write] bedrock-mantle:DisassociateCustomizedModel.

---

##### `ListCustomizedModelAssociations`<sup>Required</sup> <a name="ListCustomizedModelAssociations" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.ListCustomizedModelAssociations"></a>

```typescript
public readonly ListCustomizedModelAssociations: string;
```

- *Type:* string

[List] bedrock-mantle:ListCustomizedModelAssociations.

---

##### `ListCustomizedModels`<sup>Required</sup> <a name="ListCustomizedModels" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.ListCustomizedModels"></a>

```typescript
public readonly ListCustomizedModels: string;
```

- *Type:* string

[List] bedrock-mantle:ListCustomizedModels.

---

##### `ListFiles`<sup>Required</sup> <a name="ListFiles" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.ListFiles"></a>

```typescript
public readonly ListFiles: string;
```

- *Type:* string

[List] bedrock-mantle:ListFiles.

---

##### `ListFineTuningJobs`<sup>Required</sup> <a name="ListFineTuningJobs" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.ListFineTuningJobs"></a>

```typescript
public readonly ListFineTuningJobs: string;
```

- *Type:* string

[List] bedrock-mantle:ListFineTuningJobs.

---

##### `ListModels`<sup>Required</sup> <a name="ListModels" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.ListModels"></a>

```typescript
public readonly ListModels: string;
```

- *Type:* string

[List] bedrock-mantle:ListModels.

---

##### `ListProjects`<sup>Required</sup> <a name="ListProjects" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.ListProjects"></a>

```typescript
public readonly ListProjects: string;
```

- *Type:* string

[List] bedrock-mantle:ListProjects.

---

##### `ListReservations`<sup>Required</sup> <a name="ListReservations" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.ListReservations"></a>

```typescript
public readonly ListReservations: string;
```

- *Type:* string

[List] bedrock-mantle:ListReservations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] bedrock-mantle:ListTagsForResource.

---

##### `PutAccountDataRetention`<sup>Required</sup> <a name="PutAccountDataRetention" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.PutAccountDataRetention"></a>

```typescript
public readonly PutAccountDataRetention: string;
```

- *Type:* string

[Write] bedrock-mantle:PutAccountDataRetention.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] bedrock-mantle:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] bedrock-mantle:UntagResource.

---

##### `UpdateProject`<sup>Required</sup> <a name="UpdateProject" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.UpdateProject"></a>

```typescript
public readonly UpdateProject: string;
```

- *Type:* string

[Write] bedrock-mantle:UpdateProject.

---

##### `UpdateReservation`<sup>Required</sup> <a name="UpdateReservation" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleActions.property.UpdateReservation"></a>

```typescript
public readonly UpdateReservation: string;
```

- *Type:* string

[Write] bedrock-mantle:UpdateReservation.

---

### BedrockMantleConditions <a name="BedrockMantleConditions" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions"></a>

Condition key constants and builders for bedrock-mantle.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.Initializer"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

new bedrock_mantle.BedrockMantleConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.bearerTokenType">bearerTokenType</a></code> | Generates a condition block for `bedrock-mantle:BearerTokenType`. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.customizedModelARN">customizedModelARN</a></code> | Generates a condition block for `bedrock-mantle:CustomizedModelArn`. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.dataRetentionMode">dataRetentionMode</a></code> | Generates a condition block for `bedrock-mantle:DataRetentionMode`. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.files">files</a></code> | Generates a condition block for `bedrock-mantle:Files`. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.fineTuningJob">fineTuningJob</a></code> | Generates a condition block for `bedrock-mantle:FineTuningJob`. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.model">model</a></code> | Generates a condition block for `bedrock-mantle:Model`. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.projectARN">projectARN</a></code> | Generates a condition block for `bedrock-mantle:ProjectArn`. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.reservationARN">reservationARN</a></code> | Generates a condition block for `bedrock-mantle:ReservationArn`. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.serviceTier">serviceTier</a></code> | Generates a condition block for `bedrock-mantle:ServiceTier`. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `bearerTokenType` <a name="bearerTokenType" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.bearerTokenType"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleConditions.bearerTokenType(value: string)
```

Generates a condition block for `bedrock-mantle:BearerTokenType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.bearerTokenType.parameter.value"></a>

- *Type:* string

---

##### `customizedModelARN` <a name="customizedModelARN" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.customizedModelARN"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleConditions.customizedModelARN(value: string)
```

Generates a condition block for `bedrock-mantle:CustomizedModelArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.customizedModelARN.parameter.value"></a>

- *Type:* string

---

##### `dataRetentionMode` <a name="dataRetentionMode" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.dataRetentionMode"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleConditions.dataRetentionMode(value: string)
```

Generates a condition block for `bedrock-mantle:DataRetentionMode`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.dataRetentionMode.parameter.value"></a>

- *Type:* string

---

##### `files` <a name="files" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.files"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleConditions.files(values: string[])
```

Generates a condition block for `bedrock-mantle:Files`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.files.parameter.values"></a>

- *Type:* string[]

---

##### `fineTuningJob` <a name="fineTuningJob" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.fineTuningJob"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleConditions.fineTuningJob(value: string)
```

Generates a condition block for `bedrock-mantle:FineTuningJob`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.fineTuningJob.parameter.value"></a>

- *Type:* string

---

##### `model` <a name="model" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.model"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleConditions.model(value: string)
```

Generates a condition block for `bedrock-mantle:Model`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.model.parameter.value"></a>

- *Type:* string

---

##### `projectARN` <a name="projectARN" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.projectARN"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleConditions.projectARN(value: string)
```

Generates a condition block for `bedrock-mantle:ProjectArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.projectARN.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.requestTag"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `reservationARN` <a name="reservationARN" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.reservationARN"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleConditions.reservationARN(value: string)
```

Generates a condition block for `bedrock-mantle:ReservationArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.reservationARN.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.resourceTag"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `serviceTier` <a name="serviceTier" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.serviceTier"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleConditions.serviceTier(value: string)
```

Generates a condition block for `bedrock-mantle:ServiceTier`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.serviceTier.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.tagKeys"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.actionGetFileConditionKeys">actionGetFileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetFile action. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.actionGetFineTuningJobConditionKeys">actionGetFineTuningJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetFineTuningJob action. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.AssociateCustomizedModelConditionKeys">AssociateCustomizedModelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateCustomizedModel action. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.BEARER_TOKEN_TYPE">BEARER_TOKEN_TYPE</a></code> | <code>string</code> | Condition key: bedrock-mantle:BearerTokenType (String). |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.CallWithBearerTokenConditionKeys">CallWithBearerTokenConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CallWithBearerToken action. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.CancelFineTuningJobConditionKeys">CancelFineTuningJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelFineTuningJob action. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.CreateCustomizedModelConditionKeys">CreateCustomizedModelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCustomizedModel action. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.CreateFineTuningJobConditionKeys">CreateFineTuningJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFineTuningJob action. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.CreateInferenceConditionKeys">CreateInferenceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInference action. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.CreateProjectConditionKeys">CreateProjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProject action. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.CreateReservationConditionKeys">CreateReservationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateReservation action. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.CUSTOMIZED_MODEL_ARN">CUSTOMIZED_MODEL_ARN</a></code> | <code>string</code> | Condition key: bedrock-mantle:CustomizedModelArn (String). |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.DATA_RETENTION_MODE">DATA_RETENTION_MODE</a></code> | <code>string</code> | Condition key: bedrock-mantle:DataRetentionMode (String). |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.DeleteFileConditionKeys">DeleteFileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteFile action. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.DeleteReservationConditionKeys">DeleteReservationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteReservation action. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.DisassociateCustomizedModelConditionKeys">DisassociateCustomizedModelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateCustomizedModel action. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.FILES">FILES</a></code> | <code>string</code> | Condition key: bedrock-mantle:Files (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.FINE_TUNING_JOB">FINE_TUNING_JOB</a></code> | <code>string</code> | Condition key: bedrock-mantle:FineTuningJob (String). |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.MODEL">MODEL</a></code> | <code>string</code> | Condition key: bedrock-mantle:Model (String). |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.PROJECT_ARN">PROJECT_ARN</a></code> | <code>string</code> | Condition key: bedrock-mantle:ProjectArn (String). |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.PutAccountDataRetentionConditionKeys">PutAccountDataRetentionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAccountDataRetention action. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.RESERVATION_ARN">RESERVATION_ARN</a></code> | <code>string</code> | Condition key: bedrock-mantle:ReservationArn (String). |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.SERVICE_TIER">SERVICE_TIER</a></code> | <code>string</code> | Condition key: bedrock-mantle:ServiceTier (String). |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.UpdateProjectConditionKeys">UpdateProjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateProject action. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.UpdateReservationConditionKeys">UpdateReservationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateReservation action. |

---

##### `actionGetFileConditionKeys`<sup>Required</sup> <a name="actionGetFileConditionKeys" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.actionGetFileConditionKeys"></a>

```typescript
public readonly actionGetFileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetFile action.

---

##### `actionGetFineTuningJobConditionKeys`<sup>Required</sup> <a name="actionGetFineTuningJobConditionKeys" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.actionGetFineTuningJobConditionKeys"></a>

```typescript
public readonly actionGetFineTuningJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetFineTuningJob action.

---

##### `AssociateCustomizedModelConditionKeys`<sup>Required</sup> <a name="AssociateCustomizedModelConditionKeys" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.AssociateCustomizedModelConditionKeys"></a>

```typescript
public readonly AssociateCustomizedModelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateCustomizedModel action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BEARER_TOKEN_TYPE`<sup>Required</sup> <a name="BEARER_TOKEN_TYPE" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.BEARER_TOKEN_TYPE"></a>

```typescript
public readonly BEARER_TOKEN_TYPE: string;
```

- *Type:* string

Condition key: bedrock-mantle:BearerTokenType (String).

---

##### `CallWithBearerTokenConditionKeys`<sup>Required</sup> <a name="CallWithBearerTokenConditionKeys" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.CallWithBearerTokenConditionKeys"></a>

```typescript
public readonly CallWithBearerTokenConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CallWithBearerToken action.

---

##### `CancelFineTuningJobConditionKeys`<sup>Required</sup> <a name="CancelFineTuningJobConditionKeys" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.CancelFineTuningJobConditionKeys"></a>

```typescript
public readonly CancelFineTuningJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelFineTuningJob action.

---

##### `CreateCustomizedModelConditionKeys`<sup>Required</sup> <a name="CreateCustomizedModelConditionKeys" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.CreateCustomizedModelConditionKeys"></a>

```typescript
public readonly CreateCustomizedModelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCustomizedModel action.

---

##### `CreateFineTuningJobConditionKeys`<sup>Required</sup> <a name="CreateFineTuningJobConditionKeys" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.CreateFineTuningJobConditionKeys"></a>

```typescript
public readonly CreateFineTuningJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFineTuningJob action.

---

##### `CreateInferenceConditionKeys`<sup>Required</sup> <a name="CreateInferenceConditionKeys" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.CreateInferenceConditionKeys"></a>

```typescript
public readonly CreateInferenceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInference action.

---

##### `CreateProjectConditionKeys`<sup>Required</sup> <a name="CreateProjectConditionKeys" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.CreateProjectConditionKeys"></a>

```typescript
public readonly CreateProjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProject action.

---

##### `CreateReservationConditionKeys`<sup>Required</sup> <a name="CreateReservationConditionKeys" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.CreateReservationConditionKeys"></a>

```typescript
public readonly CreateReservationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateReservation action.

---

##### `CUSTOMIZED_MODEL_ARN`<sup>Required</sup> <a name="CUSTOMIZED_MODEL_ARN" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.CUSTOMIZED_MODEL_ARN"></a>

```typescript
public readonly CUSTOMIZED_MODEL_ARN: string;
```

- *Type:* string

Condition key: bedrock-mantle:CustomizedModelArn (String).

---

##### `DATA_RETENTION_MODE`<sup>Required</sup> <a name="DATA_RETENTION_MODE" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.DATA_RETENTION_MODE"></a>

```typescript
public readonly DATA_RETENTION_MODE: string;
```

- *Type:* string

Condition key: bedrock-mantle:DataRetentionMode (String).

---

##### `DeleteFileConditionKeys`<sup>Required</sup> <a name="DeleteFileConditionKeys" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.DeleteFileConditionKeys"></a>

```typescript
public readonly DeleteFileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteFile action.

---

##### `DeleteReservationConditionKeys`<sup>Required</sup> <a name="DeleteReservationConditionKeys" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.DeleteReservationConditionKeys"></a>

```typescript
public readonly DeleteReservationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteReservation action.

---

##### `DisassociateCustomizedModelConditionKeys`<sup>Required</sup> <a name="DisassociateCustomizedModelConditionKeys" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.DisassociateCustomizedModelConditionKeys"></a>

```typescript
public readonly DisassociateCustomizedModelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateCustomizedModel action.

---

##### `FILES`<sup>Required</sup> <a name="FILES" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.FILES"></a>

```typescript
public readonly FILES: string;
```

- *Type:* string

Condition key: bedrock-mantle:Files (ArrayOfString).

---

##### `FINE_TUNING_JOB`<sup>Required</sup> <a name="FINE_TUNING_JOB" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.FINE_TUNING_JOB"></a>

```typescript
public readonly FINE_TUNING_JOB: string;
```

- *Type:* string

Condition key: bedrock-mantle:FineTuningJob (String).

---

##### `MODEL`<sup>Required</sup> <a name="MODEL" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.MODEL"></a>

```typescript
public readonly MODEL: string;
```

- *Type:* string

Condition key: bedrock-mantle:Model (String).

---

##### `PROJECT_ARN`<sup>Required</sup> <a name="PROJECT_ARN" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.PROJECT_ARN"></a>

```typescript
public readonly PROJECT_ARN: string;
```

- *Type:* string

Condition key: bedrock-mantle:ProjectArn (String).

---

##### `PutAccountDataRetentionConditionKeys`<sup>Required</sup> <a name="PutAccountDataRetentionConditionKeys" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.PutAccountDataRetentionConditionKeys"></a>

```typescript
public readonly PutAccountDataRetentionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAccountDataRetention action.

---

##### `RESERVATION_ARN`<sup>Required</sup> <a name="RESERVATION_ARN" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.RESERVATION_ARN"></a>

```typescript
public readonly RESERVATION_ARN: string;
```

- *Type:* string

Condition key: bedrock-mantle:ReservationArn (String).

---

##### `SERVICE_TIER`<sup>Required</sup> <a name="SERVICE_TIER" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.SERVICE_TIER"></a>

```typescript
public readonly SERVICE_TIER: string;
```

- *Type:* string

Condition key: bedrock-mantle:ServiceTier (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateProjectConditionKeys`<sup>Required</sup> <a name="UpdateProjectConditionKeys" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.UpdateProjectConditionKeys"></a>

```typescript
public readonly UpdateProjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateProject action.

---

##### `UpdateReservationConditionKeys`<sup>Required</sup> <a name="UpdateReservationConditionKeys" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleConditions.property.UpdateReservationConditionKeys"></a>

```typescript
public readonly UpdateReservationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateReservation action.

---

### BedrockMantleResources <a name="BedrockMantleResources" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources"></a>

ARN builders, validators, and parsers for bedrock-mantle resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.Initializer"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

new bedrock_mantle.BedrockMantleResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.customizedModel">customizedModel</a></code> | Builds an ARN for the customized-model resource. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.isValidCustomizedModelArn">isValidCustomizedModelArn</a></code> | Validates whether a string is a valid ARN for the customized-model resource. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.isValidProjectArn">isValidProjectArn</a></code> | Validates whether a string is a valid ARN for the project resource. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.isValidReservationArn">isValidReservationArn</a></code> | Validates whether a string is a valid ARN for the reservation resource. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.parseCustomizedModelArn">parseCustomizedModelArn</a></code> | Parses a customized-model ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.parseProjectArn">parseProjectArn</a></code> | Parses a project ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.parseReservationArn">parseReservationArn</a></code> | Parses a reservation ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.project">project</a></code> | Builds an ARN for the project resource. |
| <code><a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.reservation">reservation</a></code> | Builds an ARN for the reservation resource. |

---

##### `customizedModel` <a name="customizedModel" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.customizedModel"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleResources.customizedModel(props: BedrockMantleCustomizedModelArnProps)
```

Builds an ARN for the customized-model resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.customizedModel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleCustomizedModelArnProps">BedrockMantleCustomizedModelArnProps</a>

---

##### `isValidCustomizedModelArn` <a name="isValidCustomizedModelArn" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.isValidCustomizedModelArn"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleResources.isValidCustomizedModelArn(arn: string)
```

Validates whether a string is a valid ARN for the customized-model resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.isValidCustomizedModelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProjectArn` <a name="isValidProjectArn" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.isValidProjectArn"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleResources.isValidProjectArn(arn: string)
```

Validates whether a string is a valid ARN for the project resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.isValidProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReservationArn` <a name="isValidReservationArn" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.isValidReservationArn"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleResources.isValidReservationArn(arn: string)
```

Validates whether a string is a valid ARN for the reservation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.isValidReservationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCustomizedModelArn` <a name="parseCustomizedModelArn" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.parseCustomizedModelArn"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleResources.parseCustomizedModelArn(arn: string)
```

Parses a customized-model ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.parseCustomizedModelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProjectArn` <a name="parseProjectArn" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.parseProjectArn"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleResources.parseProjectArn(arn: string)
```

Parses a project ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.parseProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReservationArn` <a name="parseReservationArn" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.parseReservationArn"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleResources.parseReservationArn(arn: string)
```

Parses a reservation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.parseReservationArn.parameter.arn"></a>

- *Type:* string

---

##### `project` <a name="project" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.project"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleResources.project(props: BedrockMantleProjectArnProps)
```

Builds an ARN for the project resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.project.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleProjectArnProps">BedrockMantleProjectArnProps</a>

---

##### `reservation` <a name="reservation" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.reservation"></a>

```typescript
import { bedrock_mantle } from '@cdk_utils/iam'

bedrock_mantle.BedrockMantleResources.reservation(props: BedrockMantleReservationArnProps)
```

Builds an ARN for the reservation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_mantle.BedrockMantleResources.reservation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_mantle.BedrockMantleReservationArnProps">BedrockMantleReservationArnProps</a>

---




