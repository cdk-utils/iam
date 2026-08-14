# `securitylake` Submodule <a name="`securitylake` Submodule" id="@cdk_utils/iam.securitylake"></a>


## Structs <a name="Structs" id="Structs"></a>

### SecurityLakeDataLakeArnComponents <a name="SecurityLakeDataLakeArnComponents" id="@cdk_utils/iam.securitylake.SecurityLakeDataLakeArnComponents"></a>

Parsed components of a data-lake ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securitylake.SecurityLakeDataLakeArnComponents.Initializer"></a>

```typescript
import { securitylake } from '@cdk_utils/iam'

const securityLakeDataLakeArnComponents: securitylake.SecurityLakeDataLakeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeDataLakeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeDataLakeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeDataLakeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.securitylake.SecurityLakeDataLakeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.securitylake.SecurityLakeDataLakeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.securitylake.SecurityLakeDataLakeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SecurityLakeDataLakeArnProps <a name="SecurityLakeDataLakeArnProps" id="@cdk_utils/iam.securitylake.SecurityLakeDataLakeArnProps"></a>

Properties for building a data-lake ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securitylake.SecurityLakeDataLakeArnProps.Initializer"></a>

```typescript
import { securitylake } from '@cdk_utils/iam'

const securityLakeDataLakeArnProps: securitylake.SecurityLakeDataLakeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeDataLakeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeDataLakeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeDataLakeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.securitylake.SecurityLakeDataLakeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.securitylake.SecurityLakeDataLakeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.securitylake.SecurityLakeDataLakeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SecurityLakeSubscriberArnComponents <a name="SecurityLakeSubscriberArnComponents" id="@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnComponents"></a>

Parsed components of a subscriber ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnComponents.Initializer"></a>

```typescript
import { securitylake } from '@cdk_utils/iam'

const securityLakeSubscriberArnComponents: securitylake.SecurityLakeSubscriberArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnComponents.property.subscriberId">subscriberId</a></code> | <code>string</code> | The SubscriberId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `subscriberId`<sup>Required</sup> <a name="subscriberId" id="@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnComponents.property.subscriberId"></a>

```typescript
public readonly subscriberId: string;
```

- *Type:* string

The SubscriberId component.

---

### SecurityLakeSubscriberArnProps <a name="SecurityLakeSubscriberArnProps" id="@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnProps"></a>

Properties for building a subscriber ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnProps.Initializer"></a>

```typescript
import { securitylake } from '@cdk_utils/iam'

const securityLakeSubscriberArnProps: securitylake.SecurityLakeSubscriberArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnProps.property.subscriberId">subscriberId</a></code> | <code>string</code> | The SubscriberId component of the ARN. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `subscriberId`<sup>Required</sup> <a name="subscriberId" id="@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnProps.property.subscriberId"></a>

```typescript
public readonly subscriberId: string;
```

- *Type:* string

The SubscriberId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityLakeActions <a name="SecurityLakeActions" id="@cdk_utils/iam.securitylake.SecurityLakeActions"></a>

IAM action constants for the securitylake service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.securitylake.SecurityLakeActions.Initializer"></a>

```typescript
import { securitylake } from '@cdk_utils/iam'

new securitylake.SecurityLakeActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.actionGetDataLakeExceptionSubscription">actionGetDataLakeExceptionSubscription</a></code> | <code>string</code> | [Read] securitylake:GetDataLakeExceptionSubscription. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.actionGetDataLakeOrganizationConfiguration">actionGetDataLakeOrganizationConfiguration</a></code> | <code>string</code> | [Read] securitylake:GetDataLakeOrganizationConfiguration. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.actionGetDataLakeSources">actionGetDataLakeSources</a></code> | <code>string</code> | [Read] securitylake:GetDataLakeSources. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.actionGetSubscriber">actionGetSubscriber</a></code> | <code>string</code> | [Read] securitylake:GetSubscriber. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.CreateAwsLogSource">CreateAwsLogSource</a></code> | <code>string</code> | [Write] securitylake:CreateAwsLogSource. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.CreateCustomLogSource">CreateCustomLogSource</a></code> | <code>string</code> | [Write] securitylake:CreateCustomLogSource. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.CreateDataLake">CreateDataLake</a></code> | <code>string</code> | [Write] securitylake:CreateDataLake. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.CreateDataLakeExceptionSubscription">CreateDataLakeExceptionSubscription</a></code> | <code>string</code> | [Write] securitylake:CreateDataLakeExceptionSubscription. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.CreateDataLakeOrganizationConfiguration">CreateDataLakeOrganizationConfiguration</a></code> | <code>string</code> | [Write] securitylake:CreateDataLakeOrganizationConfiguration. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.CreateSubscriber">CreateSubscriber</a></code> | <code>string</code> | [Write] securitylake:CreateSubscriber. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.CreateSubscriberNotification">CreateSubscriberNotification</a></code> | <code>string</code> | [Write] securitylake:CreateSubscriberNotification. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.DeleteAwsLogSource">DeleteAwsLogSource</a></code> | <code>string</code> | [Write] securitylake:DeleteAwsLogSource. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.DeleteCustomLogSource">DeleteCustomLogSource</a></code> | <code>string</code> | [Write] securitylake:DeleteCustomLogSource. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.DeleteDataLake">DeleteDataLake</a></code> | <code>string</code> | [Write] securitylake:DeleteDataLake. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.DeleteDataLakeExceptionSubscription">DeleteDataLakeExceptionSubscription</a></code> | <code>string</code> | [Write] securitylake:DeleteDataLakeExceptionSubscription. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.DeleteDataLakeOrganizationConfiguration">DeleteDataLakeOrganizationConfiguration</a></code> | <code>string</code> | [Write] securitylake:DeleteDataLakeOrganizationConfiguration. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.DeleteSubscriber">DeleteSubscriber</a></code> | <code>string</code> | [Write] securitylake:DeleteSubscriber. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.DeleteSubscriberNotification">DeleteSubscriberNotification</a></code> | <code>string</code> | [Write] securitylake:DeleteSubscriberNotification. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.DeregisterDataLakeDelegatedAdministrator">DeregisterDataLakeDelegatedAdministrator</a></code> | <code>string</code> | [Write] securitylake:DeregisterDataLakeDelegatedAdministrator. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.ListDataLakeExceptions">ListDataLakeExceptions</a></code> | <code>string</code> | [List] securitylake:ListDataLakeExceptions. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.ListDataLakes">ListDataLakes</a></code> | <code>string</code> | [List] securitylake:ListDataLakes. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.ListLogSources">ListLogSources</a></code> | <code>string</code> | [List] securitylake:ListLogSources. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.ListSubscribers">ListSubscribers</a></code> | <code>string</code> | [List] securitylake:ListSubscribers. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] securitylake:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.RegisterDataLakeDelegatedAdministrator">RegisterDataLakeDelegatedAdministrator</a></code> | <code>string</code> | [Write] securitylake:RegisterDataLakeDelegatedAdministrator. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] securitylake:TagResource. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] securitylake:UntagResource. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.UpdateDataLake">UpdateDataLake</a></code> | <code>string</code> | [Write] securitylake:UpdateDataLake. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.UpdateDataLakeExceptionSubscription">UpdateDataLakeExceptionSubscription</a></code> | <code>string</code> | [Write] securitylake:UpdateDataLakeExceptionSubscription. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.UpdateSubscriber">UpdateSubscriber</a></code> | <code>string</code> | [Write] securitylake:UpdateSubscriber. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeActions.property.UpdateSubscriberNotification">UpdateSubscriberNotification</a></code> | <code>string</code> | [Write] securitylake:UpdateSubscriberNotification. |

---

##### `actionGetDataLakeExceptionSubscription`<sup>Required</sup> <a name="actionGetDataLakeExceptionSubscription" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.actionGetDataLakeExceptionSubscription"></a>

```typescript
public readonly actionGetDataLakeExceptionSubscription: string;
```

- *Type:* string

[Read] securitylake:GetDataLakeExceptionSubscription.

---

##### `actionGetDataLakeOrganizationConfiguration`<sup>Required</sup> <a name="actionGetDataLakeOrganizationConfiguration" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.actionGetDataLakeOrganizationConfiguration"></a>

```typescript
public readonly actionGetDataLakeOrganizationConfiguration: string;
```

- *Type:* string

[Read] securitylake:GetDataLakeOrganizationConfiguration.

---

##### `actionGetDataLakeSources`<sup>Required</sup> <a name="actionGetDataLakeSources" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.actionGetDataLakeSources"></a>

```typescript
public readonly actionGetDataLakeSources: string;
```

- *Type:* string

[Read] securitylake:GetDataLakeSources.

---

##### `actionGetSubscriber`<sup>Required</sup> <a name="actionGetSubscriber" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.actionGetSubscriber"></a>

```typescript
public readonly actionGetSubscriber: string;
```

- *Type:* string

[Read] securitylake:GetSubscriber.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateAwsLogSource`<sup>Required</sup> <a name="CreateAwsLogSource" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.CreateAwsLogSource"></a>

```typescript
public readonly CreateAwsLogSource: string;
```

- *Type:* string

[Write] securitylake:CreateAwsLogSource.

---

##### `CreateCustomLogSource`<sup>Required</sup> <a name="CreateCustomLogSource" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.CreateCustomLogSource"></a>

```typescript
public readonly CreateCustomLogSource: string;
```

- *Type:* string

[Write] securitylake:CreateCustomLogSource.

---

##### `CreateDataLake`<sup>Required</sup> <a name="CreateDataLake" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.CreateDataLake"></a>

```typescript
public readonly CreateDataLake: string;
```

- *Type:* string

[Write] securitylake:CreateDataLake.

---

##### `CreateDataLakeExceptionSubscription`<sup>Required</sup> <a name="CreateDataLakeExceptionSubscription" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.CreateDataLakeExceptionSubscription"></a>

```typescript
public readonly CreateDataLakeExceptionSubscription: string;
```

- *Type:* string

[Write] securitylake:CreateDataLakeExceptionSubscription.

---

##### `CreateDataLakeOrganizationConfiguration`<sup>Required</sup> <a name="CreateDataLakeOrganizationConfiguration" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.CreateDataLakeOrganizationConfiguration"></a>

```typescript
public readonly CreateDataLakeOrganizationConfiguration: string;
```

- *Type:* string

[Write] securitylake:CreateDataLakeOrganizationConfiguration.

---

##### `CreateSubscriber`<sup>Required</sup> <a name="CreateSubscriber" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.CreateSubscriber"></a>

```typescript
public readonly CreateSubscriber: string;
```

- *Type:* string

[Write] securitylake:CreateSubscriber.

---

##### `CreateSubscriberNotification`<sup>Required</sup> <a name="CreateSubscriberNotification" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.CreateSubscriberNotification"></a>

```typescript
public readonly CreateSubscriberNotification: string;
```

- *Type:* string

[Write] securitylake:CreateSubscriberNotification.

---

##### `DeleteAwsLogSource`<sup>Required</sup> <a name="DeleteAwsLogSource" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.DeleteAwsLogSource"></a>

```typescript
public readonly DeleteAwsLogSource: string;
```

- *Type:* string

[Write] securitylake:DeleteAwsLogSource.

---

##### `DeleteCustomLogSource`<sup>Required</sup> <a name="DeleteCustomLogSource" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.DeleteCustomLogSource"></a>

```typescript
public readonly DeleteCustomLogSource: string;
```

- *Type:* string

[Write] securitylake:DeleteCustomLogSource.

---

##### `DeleteDataLake`<sup>Required</sup> <a name="DeleteDataLake" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.DeleteDataLake"></a>

```typescript
public readonly DeleteDataLake: string;
```

- *Type:* string

[Write] securitylake:DeleteDataLake.

---

##### `DeleteDataLakeExceptionSubscription`<sup>Required</sup> <a name="DeleteDataLakeExceptionSubscription" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.DeleteDataLakeExceptionSubscription"></a>

```typescript
public readonly DeleteDataLakeExceptionSubscription: string;
```

- *Type:* string

[Write] securitylake:DeleteDataLakeExceptionSubscription.

---

##### `DeleteDataLakeOrganizationConfiguration`<sup>Required</sup> <a name="DeleteDataLakeOrganizationConfiguration" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.DeleteDataLakeOrganizationConfiguration"></a>

```typescript
public readonly DeleteDataLakeOrganizationConfiguration: string;
```

- *Type:* string

[Write] securitylake:DeleteDataLakeOrganizationConfiguration.

---

##### `DeleteSubscriber`<sup>Required</sup> <a name="DeleteSubscriber" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.DeleteSubscriber"></a>

```typescript
public readonly DeleteSubscriber: string;
```

- *Type:* string

[Write] securitylake:DeleteSubscriber.

---

##### `DeleteSubscriberNotification`<sup>Required</sup> <a name="DeleteSubscriberNotification" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.DeleteSubscriberNotification"></a>

```typescript
public readonly DeleteSubscriberNotification: string;
```

- *Type:* string

[Write] securitylake:DeleteSubscriberNotification.

---

##### `DeregisterDataLakeDelegatedAdministrator`<sup>Required</sup> <a name="DeregisterDataLakeDelegatedAdministrator" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.DeregisterDataLakeDelegatedAdministrator"></a>

```typescript
public readonly DeregisterDataLakeDelegatedAdministrator: string;
```

- *Type:* string

[Write] securitylake:DeregisterDataLakeDelegatedAdministrator.

---

##### `ListDataLakeExceptions`<sup>Required</sup> <a name="ListDataLakeExceptions" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.ListDataLakeExceptions"></a>

```typescript
public readonly ListDataLakeExceptions: string;
```

- *Type:* string

[List] securitylake:ListDataLakeExceptions.

---

##### `ListDataLakes`<sup>Required</sup> <a name="ListDataLakes" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.ListDataLakes"></a>

```typescript
public readonly ListDataLakes: string;
```

- *Type:* string

[List] securitylake:ListDataLakes.

---

##### `ListLogSources`<sup>Required</sup> <a name="ListLogSources" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.ListLogSources"></a>

```typescript
public readonly ListLogSources: string;
```

- *Type:* string

[List] securitylake:ListLogSources.

---

##### `ListSubscribers`<sup>Required</sup> <a name="ListSubscribers" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.ListSubscribers"></a>

```typescript
public readonly ListSubscribers: string;
```

- *Type:* string

[List] securitylake:ListSubscribers.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] securitylake:ListTagsForResource.

---

##### `RegisterDataLakeDelegatedAdministrator`<sup>Required</sup> <a name="RegisterDataLakeDelegatedAdministrator" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.RegisterDataLakeDelegatedAdministrator"></a>

```typescript
public readonly RegisterDataLakeDelegatedAdministrator: string;
```

- *Type:* string

[Write] securitylake:RegisterDataLakeDelegatedAdministrator.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] securitylake:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] securitylake:UntagResource.

---

##### `UpdateDataLake`<sup>Required</sup> <a name="UpdateDataLake" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.UpdateDataLake"></a>

```typescript
public readonly UpdateDataLake: string;
```

- *Type:* string

[Write] securitylake:UpdateDataLake.

---

##### `UpdateDataLakeExceptionSubscription`<sup>Required</sup> <a name="UpdateDataLakeExceptionSubscription" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.UpdateDataLakeExceptionSubscription"></a>

```typescript
public readonly UpdateDataLakeExceptionSubscription: string;
```

- *Type:* string

[Write] securitylake:UpdateDataLakeExceptionSubscription.

---

##### `UpdateSubscriber`<sup>Required</sup> <a name="UpdateSubscriber" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.UpdateSubscriber"></a>

```typescript
public readonly UpdateSubscriber: string;
```

- *Type:* string

[Write] securitylake:UpdateSubscriber.

---

##### `UpdateSubscriberNotification`<sup>Required</sup> <a name="UpdateSubscriberNotification" id="@cdk_utils/iam.securitylake.SecurityLakeActions.property.UpdateSubscriberNotification"></a>

```typescript
public readonly UpdateSubscriberNotification: string;
```

- *Type:* string

[Write] securitylake:UpdateSubscriberNotification.

---

### SecurityLakeConditions <a name="SecurityLakeConditions" id="@cdk_utils/iam.securitylake.SecurityLakeConditions"></a>

Condition key constants and builders for securitylake.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.securitylake.SecurityLakeConditions.Initializer"></a>

```typescript
import { securitylake } from '@cdk_utils/iam'

new securitylake.SecurityLakeConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.securitylake.SecurityLakeConditions.requestTag"></a>

```typescript
import { securitylake } from '@cdk_utils/iam'

securitylake.SecurityLakeConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.securitylake.SecurityLakeConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.securitylake.SecurityLakeConditions.resourceTag"></a>

```typescript
import { securitylake } from '@cdk_utils/iam'

securitylake.SecurityLakeConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.securitylake.SecurityLakeConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.securitylake.SecurityLakeConditions.tagKeys"></a>

```typescript
import { securitylake } from '@cdk_utils/iam'

securitylake.SecurityLakeConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.securitylake.SecurityLakeConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeConditions.property.CreateDataLakeConditionKeys">CreateDataLakeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataLake action. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeConditions.property.CreateSubscriberConditionKeys">CreateSubscriberConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSubscriber action. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.securitylake.SecurityLakeConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.securitylake.SecurityLakeConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.securitylake.SecurityLakeConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDataLakeConditionKeys`<sup>Required</sup> <a name="CreateDataLakeConditionKeys" id="@cdk_utils/iam.securitylake.SecurityLakeConditions.property.CreateDataLakeConditionKeys"></a>

```typescript
public readonly CreateDataLakeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataLake action.

---

##### `CreateSubscriberConditionKeys`<sup>Required</sup> <a name="CreateSubscriberConditionKeys" id="@cdk_utils/iam.securitylake.SecurityLakeConditions.property.CreateSubscriberConditionKeys"></a>

```typescript
public readonly CreateSubscriberConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSubscriber action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.securitylake.SecurityLakeConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.securitylake.SecurityLakeConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### SecurityLakeOperations <a name="SecurityLakeOperations" id="@cdk_utils/iam.securitylake.SecurityLakeOperations"></a>

API operation to required IAM actions mapping for securitylake.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.Initializer"></a>

```typescript
import { securitylake } from '@cdk_utils/iam'

new securitylake.SecurityLakeOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.CreateAwsLogSource">CreateAwsLogSource</a></code> | <code>string[]</code> | IAM actions required for the CreateAwsLogSource API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.CreateCustomLogSource">CreateCustomLogSource</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomLogSource API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.CreateDataLake">CreateDataLake</a></code> | <code>string[]</code> | IAM actions required for the CreateDataLake API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.CreateDataLakeExceptionSubscription">CreateDataLakeExceptionSubscription</a></code> | <code>string[]</code> | IAM actions required for the CreateDataLakeExceptionSubscription API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.CreateDataLakeOrganizationConfiguration">CreateDataLakeOrganizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateDataLakeOrganizationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.CreateSubscriber">CreateSubscriber</a></code> | <code>string[]</code> | IAM actions required for the CreateSubscriber API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.CreateSubscriberNotification">CreateSubscriberNotification</a></code> | <code>string[]</code> | IAM actions required for the CreateSubscriberNotification API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.DeleteAwsLogSource">DeleteAwsLogSource</a></code> | <code>string[]</code> | IAM actions required for the DeleteAwsLogSource API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.DeleteCustomLogSource">DeleteCustomLogSource</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomLogSource API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.DeleteDataLake">DeleteDataLake</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataLake API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.DeleteDataLakeExceptionSubscription">DeleteDataLakeExceptionSubscription</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataLakeExceptionSubscription API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.DeleteDataLakeOrganizationConfiguration">DeleteDataLakeOrganizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataLakeOrganizationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.DeleteSubscriber">DeleteSubscriber</a></code> | <code>string[]</code> | IAM actions required for the DeleteSubscriber API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.DeleteSubscriberNotification">DeleteSubscriberNotification</a></code> | <code>string[]</code> | IAM actions required for the DeleteSubscriberNotification API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.DeregisterDataLakeDelegatedAdministrator">DeregisterDataLakeDelegatedAdministrator</a></code> | <code>string[]</code> | IAM actions required for the DeregisterDataLakeDelegatedAdministrator API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.ListDataLakeExceptions">ListDataLakeExceptions</a></code> | <code>string[]</code> | IAM actions required for the ListDataLakeExceptions API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.ListDataLakes">ListDataLakes</a></code> | <code>string[]</code> | IAM actions required for the ListDataLakes API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.ListLogSources">ListLogSources</a></code> | <code>string[]</code> | IAM actions required for the ListLogSources API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.ListSubscribers">ListSubscribers</a></code> | <code>string[]</code> | IAM actions required for the ListSubscribers API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.opGetDataLakeExceptionSubscription">opGetDataLakeExceptionSubscription</a></code> | <code>string[]</code> | IAM actions required for the GetDataLakeExceptionSubscription API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.opGetDataLakeOrganizationConfiguration">opGetDataLakeOrganizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetDataLakeOrganizationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.opGetDataLakeSources">opGetDataLakeSources</a></code> | <code>string[]</code> | IAM actions required for the GetDataLakeSources API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.opGetSubscriber">opGetSubscriber</a></code> | <code>string[]</code> | IAM actions required for the GetSubscriber API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.RegisterDataLakeDelegatedAdministrator">RegisterDataLakeDelegatedAdministrator</a></code> | <code>string[]</code> | IAM actions required for the RegisterDataLakeDelegatedAdministrator API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.UpdateDataLake">UpdateDataLake</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataLake API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.UpdateDataLakeExceptionSubscription">UpdateDataLakeExceptionSubscription</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataLakeExceptionSubscription API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.UpdateSubscriber">UpdateSubscriber</a></code> | <code>string[]</code> | IAM actions required for the UpdateSubscriber API call. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeOperations.property.UpdateSubscriberNotification">UpdateSubscriberNotification</a></code> | <code>string[]</code> | IAM actions required for the UpdateSubscriberNotification API call. |

---

##### `CreateAwsLogSource`<sup>Required</sup> <a name="CreateAwsLogSource" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.CreateAwsLogSource"></a>

```typescript
public readonly CreateAwsLogSource: string[];
```

- *Type:* string[]

IAM actions required for the CreateAwsLogSource API call.

---

##### `CreateCustomLogSource`<sup>Required</sup> <a name="CreateCustomLogSource" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.CreateCustomLogSource"></a>

```typescript
public readonly CreateCustomLogSource: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomLogSource API call.

---

##### `CreateDataLake`<sup>Required</sup> <a name="CreateDataLake" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.CreateDataLake"></a>

```typescript
public readonly CreateDataLake: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataLake API call.

---

##### `CreateDataLakeExceptionSubscription`<sup>Required</sup> <a name="CreateDataLakeExceptionSubscription" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.CreateDataLakeExceptionSubscription"></a>

```typescript
public readonly CreateDataLakeExceptionSubscription: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataLakeExceptionSubscription API call.

---

##### `CreateDataLakeOrganizationConfiguration`<sup>Required</sup> <a name="CreateDataLakeOrganizationConfiguration" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.CreateDataLakeOrganizationConfiguration"></a>

```typescript
public readonly CreateDataLakeOrganizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataLakeOrganizationConfiguration API call.

---

##### `CreateSubscriber`<sup>Required</sup> <a name="CreateSubscriber" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.CreateSubscriber"></a>

```typescript
public readonly CreateSubscriber: string[];
```

- *Type:* string[]

IAM actions required for the CreateSubscriber API call.

---

##### `CreateSubscriberNotification`<sup>Required</sup> <a name="CreateSubscriberNotification" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.CreateSubscriberNotification"></a>

```typescript
public readonly CreateSubscriberNotification: string[];
```

- *Type:* string[]

IAM actions required for the CreateSubscriberNotification API call.

---

##### `DeleteAwsLogSource`<sup>Required</sup> <a name="DeleteAwsLogSource" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.DeleteAwsLogSource"></a>

```typescript
public readonly DeleteAwsLogSource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAwsLogSource API call.

---

##### `DeleteCustomLogSource`<sup>Required</sup> <a name="DeleteCustomLogSource" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.DeleteCustomLogSource"></a>

```typescript
public readonly DeleteCustomLogSource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomLogSource API call.

---

##### `DeleteDataLake`<sup>Required</sup> <a name="DeleteDataLake" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.DeleteDataLake"></a>

```typescript
public readonly DeleteDataLake: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataLake API call.

---

##### `DeleteDataLakeExceptionSubscription`<sup>Required</sup> <a name="DeleteDataLakeExceptionSubscription" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.DeleteDataLakeExceptionSubscription"></a>

```typescript
public readonly DeleteDataLakeExceptionSubscription: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataLakeExceptionSubscription API call.

---

##### `DeleteDataLakeOrganizationConfiguration`<sup>Required</sup> <a name="DeleteDataLakeOrganizationConfiguration" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.DeleteDataLakeOrganizationConfiguration"></a>

```typescript
public readonly DeleteDataLakeOrganizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataLakeOrganizationConfiguration API call.

---

##### `DeleteSubscriber`<sup>Required</sup> <a name="DeleteSubscriber" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.DeleteSubscriber"></a>

```typescript
public readonly DeleteSubscriber: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSubscriber API call.

---

##### `DeleteSubscriberNotification`<sup>Required</sup> <a name="DeleteSubscriberNotification" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.DeleteSubscriberNotification"></a>

```typescript
public readonly DeleteSubscriberNotification: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSubscriberNotification API call.

---

##### `DeregisterDataLakeDelegatedAdministrator`<sup>Required</sup> <a name="DeregisterDataLakeDelegatedAdministrator" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.DeregisterDataLakeDelegatedAdministrator"></a>

```typescript
public readonly DeregisterDataLakeDelegatedAdministrator: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterDataLakeDelegatedAdministrator API call.

---

##### `ListDataLakeExceptions`<sup>Required</sup> <a name="ListDataLakeExceptions" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.ListDataLakeExceptions"></a>

```typescript
public readonly ListDataLakeExceptions: string[];
```

- *Type:* string[]

IAM actions required for the ListDataLakeExceptions API call.

---

##### `ListDataLakes`<sup>Required</sup> <a name="ListDataLakes" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.ListDataLakes"></a>

```typescript
public readonly ListDataLakes: string[];
```

- *Type:* string[]

IAM actions required for the ListDataLakes API call.

---

##### `ListLogSources`<sup>Required</sup> <a name="ListLogSources" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.ListLogSources"></a>

```typescript
public readonly ListLogSources: string[];
```

- *Type:* string[]

IAM actions required for the ListLogSources API call.

---

##### `ListSubscribers`<sup>Required</sup> <a name="ListSubscribers" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.ListSubscribers"></a>

```typescript
public readonly ListSubscribers: string[];
```

- *Type:* string[]

IAM actions required for the ListSubscribers API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetDataLakeExceptionSubscription`<sup>Required</sup> <a name="opGetDataLakeExceptionSubscription" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.opGetDataLakeExceptionSubscription"></a>

```typescript
public readonly opGetDataLakeExceptionSubscription: string[];
```

- *Type:* string[]

IAM actions required for the GetDataLakeExceptionSubscription API call.

---

##### `opGetDataLakeOrganizationConfiguration`<sup>Required</sup> <a name="opGetDataLakeOrganizationConfiguration" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.opGetDataLakeOrganizationConfiguration"></a>

```typescript
public readonly opGetDataLakeOrganizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetDataLakeOrganizationConfiguration API call.

---

##### `opGetDataLakeSources`<sup>Required</sup> <a name="opGetDataLakeSources" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.opGetDataLakeSources"></a>

```typescript
public readonly opGetDataLakeSources: string[];
```

- *Type:* string[]

IAM actions required for the GetDataLakeSources API call.

---

##### `opGetSubscriber`<sup>Required</sup> <a name="opGetSubscriber" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.opGetSubscriber"></a>

```typescript
public readonly opGetSubscriber: string[];
```

- *Type:* string[]

IAM actions required for the GetSubscriber API call.

---

##### `RegisterDataLakeDelegatedAdministrator`<sup>Required</sup> <a name="RegisterDataLakeDelegatedAdministrator" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.RegisterDataLakeDelegatedAdministrator"></a>

```typescript
public readonly RegisterDataLakeDelegatedAdministrator: string[];
```

- *Type:* string[]

IAM actions required for the RegisterDataLakeDelegatedAdministrator API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDataLake`<sup>Required</sup> <a name="UpdateDataLake" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.UpdateDataLake"></a>

```typescript
public readonly UpdateDataLake: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataLake API call.

---

##### `UpdateDataLakeExceptionSubscription`<sup>Required</sup> <a name="UpdateDataLakeExceptionSubscription" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.UpdateDataLakeExceptionSubscription"></a>

```typescript
public readonly UpdateDataLakeExceptionSubscription: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataLakeExceptionSubscription API call.

---

##### `UpdateSubscriber`<sup>Required</sup> <a name="UpdateSubscriber" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.UpdateSubscriber"></a>

```typescript
public readonly UpdateSubscriber: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSubscriber API call.

---

##### `UpdateSubscriberNotification`<sup>Required</sup> <a name="UpdateSubscriberNotification" id="@cdk_utils/iam.securitylake.SecurityLakeOperations.property.UpdateSubscriberNotification"></a>

```typescript
public readonly UpdateSubscriberNotification: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSubscriberNotification API call.

---

### SecurityLakeResources <a name="SecurityLakeResources" id="@cdk_utils/iam.securitylake.SecurityLakeResources"></a>

ARN builders, validators, and parsers for securitylake resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.securitylake.SecurityLakeResources.Initializer"></a>

```typescript
import { securitylake } from '@cdk_utils/iam'

new securitylake.SecurityLakeResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeResources.dataLake">dataLake</a></code> | Builds an ARN for the data-lake resource. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeResources.isValidDataLakeArn">isValidDataLakeArn</a></code> | Validates whether a string is a valid ARN for the data-lake resource. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeResources.isValidSubscriberArn">isValidSubscriberArn</a></code> | Validates whether a string is a valid ARN for the subscriber resource. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeResources.parseDataLakeArn">parseDataLakeArn</a></code> | Parses a data-lake ARN into its components. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeResources.parseSubscriberArn">parseSubscriberArn</a></code> | Parses a subscriber ARN into its components. |
| <code><a href="#@cdk_utils/iam.securitylake.SecurityLakeResources.subscriber">subscriber</a></code> | Builds an ARN for the subscriber resource. |

---

##### `dataLake` <a name="dataLake" id="@cdk_utils/iam.securitylake.SecurityLakeResources.dataLake"></a>

```typescript
import { securitylake } from '@cdk_utils/iam'

securitylake.SecurityLakeResources.dataLake(props: SecurityLakeDataLakeArnProps)
```

Builds an ARN for the data-lake resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.securitylake.SecurityLakeResources.dataLake.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.securitylake.SecurityLakeDataLakeArnProps">SecurityLakeDataLakeArnProps</a>

---

##### `isValidDataLakeArn` <a name="isValidDataLakeArn" id="@cdk_utils/iam.securitylake.SecurityLakeResources.isValidDataLakeArn"></a>

```typescript
import { securitylake } from '@cdk_utils/iam'

securitylake.SecurityLakeResources.isValidDataLakeArn(arn: string)
```

Validates whether a string is a valid ARN for the data-lake resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securitylake.SecurityLakeResources.isValidDataLakeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSubscriberArn` <a name="isValidSubscriberArn" id="@cdk_utils/iam.securitylake.SecurityLakeResources.isValidSubscriberArn"></a>

```typescript
import { securitylake } from '@cdk_utils/iam'

securitylake.SecurityLakeResources.isValidSubscriberArn(arn: string)
```

Validates whether a string is a valid ARN for the subscriber resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securitylake.SecurityLakeResources.isValidSubscriberArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataLakeArn` <a name="parseDataLakeArn" id="@cdk_utils/iam.securitylake.SecurityLakeResources.parseDataLakeArn"></a>

```typescript
import { securitylake } from '@cdk_utils/iam'

securitylake.SecurityLakeResources.parseDataLakeArn(arn: string)
```

Parses a data-lake ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securitylake.SecurityLakeResources.parseDataLakeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSubscriberArn` <a name="parseSubscriberArn" id="@cdk_utils/iam.securitylake.SecurityLakeResources.parseSubscriberArn"></a>

```typescript
import { securitylake } from '@cdk_utils/iam'

securitylake.SecurityLakeResources.parseSubscriberArn(arn: string)
```

Parses a subscriber ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securitylake.SecurityLakeResources.parseSubscriberArn.parameter.arn"></a>

- *Type:* string

---

##### `subscriber` <a name="subscriber" id="@cdk_utils/iam.securitylake.SecurityLakeResources.subscriber"></a>

```typescript
import { securitylake } from '@cdk_utils/iam'

securitylake.SecurityLakeResources.subscriber(props: SecurityLakeSubscriberArnProps)
```

Builds an ARN for the subscriber resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.securitylake.SecurityLakeResources.subscriber.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.securitylake.SecurityLakeSubscriberArnProps">SecurityLakeSubscriberArnProps</a>

---




