# `mq` Submodule <a name="`mq` Submodule" id="@cdk_utils/iam.mq"></a>


## Structs <a name="Structs" id="Structs"></a>

### MqBrokersArnComponents <a name="MqBrokersArnComponents" id="@cdk_utils/iam.mq.MqBrokersArnComponents"></a>

Parsed components of a brokers ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mq.MqBrokersArnComponents.Initializer"></a>

```typescript
import { mq } from '@cdk_utils/iam'

const mqBrokersArnComponents: mq.MqBrokersArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mq.MqBrokersArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mq.MqBrokersArnComponents.property.brokerId">brokerId</a></code> | <code>string</code> | The BrokerId component. |
| <code><a href="#@cdk_utils/iam.mq.MqBrokersArnComponents.property.brokerName">brokerName</a></code> | <code>string</code> | The BrokerName component. |
| <code><a href="#@cdk_utils/iam.mq.MqBrokersArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mq.MqBrokersArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mq.MqBrokersArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `brokerId`<sup>Required</sup> <a name="brokerId" id="@cdk_utils/iam.mq.MqBrokersArnComponents.property.brokerId"></a>

```typescript
public readonly brokerId: string;
```

- *Type:* string

The BrokerId component.

---

##### `brokerName`<sup>Required</sup> <a name="brokerName" id="@cdk_utils/iam.mq.MqBrokersArnComponents.property.brokerName"></a>

```typescript
public readonly brokerName: string;
```

- *Type:* string

The BrokerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mq.MqBrokersArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mq.MqBrokersArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MqBrokersArnProps <a name="MqBrokersArnProps" id="@cdk_utils/iam.mq.MqBrokersArnProps"></a>

Properties for building a brokers ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mq.MqBrokersArnProps.Initializer"></a>

```typescript
import { mq } from '@cdk_utils/iam'

const mqBrokersArnProps: mq.MqBrokersArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mq.MqBrokersArnProps.property.brokerId">brokerId</a></code> | <code>string</code> | The BrokerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mq.MqBrokersArnProps.property.brokerName">brokerName</a></code> | <code>string</code> | The BrokerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mq.MqBrokersArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mq.MqBrokersArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mq.MqBrokersArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `brokerId`<sup>Required</sup> <a name="brokerId" id="@cdk_utils/iam.mq.MqBrokersArnProps.property.brokerId"></a>

```typescript
public readonly brokerId: string;
```

- *Type:* string

The BrokerId component of the ARN.

---

##### `brokerName`<sup>Required</sup> <a name="brokerName" id="@cdk_utils/iam.mq.MqBrokersArnProps.property.brokerName"></a>

```typescript
public readonly brokerName: string;
```

- *Type:* string

The BrokerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mq.MqBrokersArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mq.MqBrokersArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mq.MqBrokersArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MqConfigurationsArnComponents <a name="MqConfigurationsArnComponents" id="@cdk_utils/iam.mq.MqConfigurationsArnComponents"></a>

Parsed components of a configurations ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mq.MqConfigurationsArnComponents.Initializer"></a>

```typescript
import { mq } from '@cdk_utils/iam'

const mqConfigurationsArnComponents: mq.MqConfigurationsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mq.MqConfigurationsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mq.MqConfigurationsArnComponents.property.configurationId">configurationId</a></code> | <code>string</code> | The ConfigurationId component. |
| <code><a href="#@cdk_utils/iam.mq.MqConfigurationsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mq.MqConfigurationsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mq.MqConfigurationsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="@cdk_utils/iam.mq.MqConfigurationsArnComponents.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

The ConfigurationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mq.MqConfigurationsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mq.MqConfigurationsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MqConfigurationsArnProps <a name="MqConfigurationsArnProps" id="@cdk_utils/iam.mq.MqConfigurationsArnProps"></a>

Properties for building a configurations ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mq.MqConfigurationsArnProps.Initializer"></a>

```typescript
import { mq } from '@cdk_utils/iam'

const mqConfigurationsArnProps: mq.MqConfigurationsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mq.MqConfigurationsArnProps.property.configurationId">configurationId</a></code> | <code>string</code> | The ConfigurationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mq.MqConfigurationsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mq.MqConfigurationsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mq.MqConfigurationsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="@cdk_utils/iam.mq.MqConfigurationsArnProps.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

The ConfigurationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mq.MqConfigurationsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mq.MqConfigurationsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mq.MqConfigurationsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### MqActions <a name="MqActions" id="@cdk_utils/iam.mq.MqActions"></a>

IAM action constants for the mq service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mq.MqActions.Initializer"></a>

```typescript
import { mq } from '@cdk_utils/iam'

new mq.MqActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.CreateBroker">CreateBroker</a></code> | <code>string</code> | [Write] mq:CreateBroker. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.CreateConfiguration">CreateConfiguration</a></code> | <code>string</code> | [Write] mq:CreateConfiguration. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.CreateReplicaBroker">CreateReplicaBroker</a></code> | <code>string</code> | [Write] mq:CreateReplicaBroker. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.CreateTags">CreateTags</a></code> | <code>string</code> | [Tagging] mq:CreateTags. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.CreateUser">CreateUser</a></code> | <code>string</code> | [Write] mq:CreateUser. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.DeleteBroker">DeleteBroker</a></code> | <code>string</code> | [Write] mq:DeleteBroker. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.DeleteConfiguration">DeleteConfiguration</a></code> | <code>string</code> | [Write] mq:DeleteConfiguration. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.DeleteTags">DeleteTags</a></code> | <code>string</code> | [Tagging] mq:DeleteTags. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.DeleteUser">DeleteUser</a></code> | <code>string</code> | [Write] mq:DeleteUser. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.DescribeBroker">DescribeBroker</a></code> | <code>string</code> | [Read] mq:DescribeBroker. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.DescribeBrokerEngineTypes">DescribeBrokerEngineTypes</a></code> | <code>string</code> | [Read] mq:DescribeBrokerEngineTypes. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.DescribeBrokerInstanceOptions">DescribeBrokerInstanceOptions</a></code> | <code>string</code> | [Read] mq:DescribeBrokerInstanceOptions. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.DescribeConfiguration">DescribeConfiguration</a></code> | <code>string</code> | [Read] mq:DescribeConfiguration. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.DescribeConfigurationRevision">DescribeConfigurationRevision</a></code> | <code>string</code> | [Read] mq:DescribeConfigurationRevision. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.DescribeSharedResources">DescribeSharedResources</a></code> | <code>string</code> | [Read] mq:DescribeSharedResources. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.DescribeUser">DescribeUser</a></code> | <code>string</code> | [Read] mq:DescribeUser. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.ListBrokers">ListBrokers</a></code> | <code>string</code> | [List] mq:ListBrokers. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.ListConfigurationRevisions">ListConfigurationRevisions</a></code> | <code>string</code> | [List] mq:ListConfigurationRevisions. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.ListConfigurations">ListConfigurations</a></code> | <code>string</code> | [List] mq:ListConfigurations. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.ListTags">ListTags</a></code> | <code>string</code> | [List] mq:ListTags. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.ListUsers">ListUsers</a></code> | <code>string</code> | [List] mq:ListUsers. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.Promote">Promote</a></code> | <code>string</code> | [Write] mq:Promote. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.RebootBroker">RebootBroker</a></code> | <code>string</code> | [Write] mq:RebootBroker. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.UpdateBroker">UpdateBroker</a></code> | <code>string</code> | [Write] mq:UpdateBroker. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.UpdateBrokerAccessConfiguration">UpdateBrokerAccessConfiguration</a></code> | <code>string</code> | [Write] mq:UpdateBrokerAccessConfiguration. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.UpdateConfiguration">UpdateConfiguration</a></code> | <code>string</code> | [Write] mq:UpdateConfiguration. |
| <code><a href="#@cdk_utils/iam.mq.MqActions.property.UpdateUser">UpdateUser</a></code> | <code>string</code> | [Write] mq:UpdateUser. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.mq.MqActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.mq.MqActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.mq.MqActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.mq.MqActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.mq.MqActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateBroker`<sup>Required</sup> <a name="CreateBroker" id="@cdk_utils/iam.mq.MqActions.property.CreateBroker"></a>

```typescript
public readonly CreateBroker: string;
```

- *Type:* string

[Write] mq:CreateBroker.

---

##### `CreateConfiguration`<sup>Required</sup> <a name="CreateConfiguration" id="@cdk_utils/iam.mq.MqActions.property.CreateConfiguration"></a>

```typescript
public readonly CreateConfiguration: string;
```

- *Type:* string

[Write] mq:CreateConfiguration.

---

##### `CreateReplicaBroker`<sup>Required</sup> <a name="CreateReplicaBroker" id="@cdk_utils/iam.mq.MqActions.property.CreateReplicaBroker"></a>

```typescript
public readonly CreateReplicaBroker: string;
```

- *Type:* string

[Write] mq:CreateReplicaBroker.

---

##### `CreateTags`<sup>Required</sup> <a name="CreateTags" id="@cdk_utils/iam.mq.MqActions.property.CreateTags"></a>

```typescript
public readonly CreateTags: string;
```

- *Type:* string

[Tagging] mq:CreateTags.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.mq.MqActions.property.CreateUser"></a>

```typescript
public readonly CreateUser: string;
```

- *Type:* string

[Write] mq:CreateUser.

---

##### `DeleteBroker`<sup>Required</sup> <a name="DeleteBroker" id="@cdk_utils/iam.mq.MqActions.property.DeleteBroker"></a>

```typescript
public readonly DeleteBroker: string;
```

- *Type:* string

[Write] mq:DeleteBroker.

---

##### `DeleteConfiguration`<sup>Required</sup> <a name="DeleteConfiguration" id="@cdk_utils/iam.mq.MqActions.property.DeleteConfiguration"></a>

```typescript
public readonly DeleteConfiguration: string;
```

- *Type:* string

[Write] mq:DeleteConfiguration.

---

##### `DeleteTags`<sup>Required</sup> <a name="DeleteTags" id="@cdk_utils/iam.mq.MqActions.property.DeleteTags"></a>

```typescript
public readonly DeleteTags: string;
```

- *Type:* string

[Tagging] mq:DeleteTags.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.mq.MqActions.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string;
```

- *Type:* string

[Write] mq:DeleteUser.

---

##### `DescribeBroker`<sup>Required</sup> <a name="DescribeBroker" id="@cdk_utils/iam.mq.MqActions.property.DescribeBroker"></a>

```typescript
public readonly DescribeBroker: string;
```

- *Type:* string

[Read] mq:DescribeBroker.

---

##### `DescribeBrokerEngineTypes`<sup>Required</sup> <a name="DescribeBrokerEngineTypes" id="@cdk_utils/iam.mq.MqActions.property.DescribeBrokerEngineTypes"></a>

```typescript
public readonly DescribeBrokerEngineTypes: string;
```

- *Type:* string

[Read] mq:DescribeBrokerEngineTypes.

---

##### `DescribeBrokerInstanceOptions`<sup>Required</sup> <a name="DescribeBrokerInstanceOptions" id="@cdk_utils/iam.mq.MqActions.property.DescribeBrokerInstanceOptions"></a>

```typescript
public readonly DescribeBrokerInstanceOptions: string;
```

- *Type:* string

[Read] mq:DescribeBrokerInstanceOptions.

---

##### `DescribeConfiguration`<sup>Required</sup> <a name="DescribeConfiguration" id="@cdk_utils/iam.mq.MqActions.property.DescribeConfiguration"></a>

```typescript
public readonly DescribeConfiguration: string;
```

- *Type:* string

[Read] mq:DescribeConfiguration.

---

##### `DescribeConfigurationRevision`<sup>Required</sup> <a name="DescribeConfigurationRevision" id="@cdk_utils/iam.mq.MqActions.property.DescribeConfigurationRevision"></a>

```typescript
public readonly DescribeConfigurationRevision: string;
```

- *Type:* string

[Read] mq:DescribeConfigurationRevision.

---

##### `DescribeSharedResources`<sup>Required</sup> <a name="DescribeSharedResources" id="@cdk_utils/iam.mq.MqActions.property.DescribeSharedResources"></a>

```typescript
public readonly DescribeSharedResources: string;
```

- *Type:* string

[Read] mq:DescribeSharedResources.

---

##### `DescribeUser`<sup>Required</sup> <a name="DescribeUser" id="@cdk_utils/iam.mq.MqActions.property.DescribeUser"></a>

```typescript
public readonly DescribeUser: string;
```

- *Type:* string

[Read] mq:DescribeUser.

---

##### `ListBrokers`<sup>Required</sup> <a name="ListBrokers" id="@cdk_utils/iam.mq.MqActions.property.ListBrokers"></a>

```typescript
public readonly ListBrokers: string;
```

- *Type:* string

[List] mq:ListBrokers.

---

##### `ListConfigurationRevisions`<sup>Required</sup> <a name="ListConfigurationRevisions" id="@cdk_utils/iam.mq.MqActions.property.ListConfigurationRevisions"></a>

```typescript
public readonly ListConfigurationRevisions: string;
```

- *Type:* string

[List] mq:ListConfigurationRevisions.

---

##### `ListConfigurations`<sup>Required</sup> <a name="ListConfigurations" id="@cdk_utils/iam.mq.MqActions.property.ListConfigurations"></a>

```typescript
public readonly ListConfigurations: string;
```

- *Type:* string

[List] mq:ListConfigurations.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.mq.MqActions.property.ListTags"></a>

```typescript
public readonly ListTags: string;
```

- *Type:* string

[List] mq:ListTags.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.mq.MqActions.property.ListUsers"></a>

```typescript
public readonly ListUsers: string;
```

- *Type:* string

[List] mq:ListUsers.

---

##### `Promote`<sup>Required</sup> <a name="Promote" id="@cdk_utils/iam.mq.MqActions.property.Promote"></a>

```typescript
public readonly Promote: string;
```

- *Type:* string

[Write] mq:Promote.

---

##### `RebootBroker`<sup>Required</sup> <a name="RebootBroker" id="@cdk_utils/iam.mq.MqActions.property.RebootBroker"></a>

```typescript
public readonly RebootBroker: string;
```

- *Type:* string

[Write] mq:RebootBroker.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.mq.MqActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateBroker`<sup>Required</sup> <a name="UpdateBroker" id="@cdk_utils/iam.mq.MqActions.property.UpdateBroker"></a>

```typescript
public readonly UpdateBroker: string;
```

- *Type:* string

[Write] mq:UpdateBroker.

---

##### `UpdateBrokerAccessConfiguration`<sup>Required</sup> <a name="UpdateBrokerAccessConfiguration" id="@cdk_utils/iam.mq.MqActions.property.UpdateBrokerAccessConfiguration"></a>

```typescript
public readonly UpdateBrokerAccessConfiguration: string;
```

- *Type:* string

[Write] mq:UpdateBrokerAccessConfiguration.

---

##### `UpdateConfiguration`<sup>Required</sup> <a name="UpdateConfiguration" id="@cdk_utils/iam.mq.MqActions.property.UpdateConfiguration"></a>

```typescript
public readonly UpdateConfiguration: string;
```

- *Type:* string

[Write] mq:UpdateConfiguration.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.mq.MqActions.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string;
```

- *Type:* string

[Write] mq:UpdateUser.

---

### MqConditions <a name="MqConditions" id="@cdk_utils/iam.mq.MqConditions"></a>

Condition key constants and builders for mq.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mq.MqConditions.Initializer"></a>

```typescript
import { mq } from '@cdk_utils/iam'

new mq.MqConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mq.MqConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mq.MqConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mq.MqConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.mq.MqConditions.requestTag"></a>

```typescript
import { mq } from '@cdk_utils/iam'

mq.MqConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mq.MqConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.mq.MqConditions.resourceTag"></a>

```typescript
import { mq } from '@cdk_utils/iam'

mq.MqConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mq.MqConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.mq.MqConditions.tagKeys"></a>

```typescript
import { mq } from '@cdk_utils/iam'

mq.MqConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.mq.MqConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mq.MqConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mq.MqConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mq.MqConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.mq.MqConditions.property.CreateBrokerConditionKeys">CreateBrokerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBroker action. |
| <code><a href="#@cdk_utils/iam.mq.MqConditions.property.CreateConfigurationConditionKeys">CreateConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConfiguration action. |
| <code><a href="#@cdk_utils/iam.mq.MqConditions.property.CreateTagsConditionKeys">CreateTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTags action. |
| <code><a href="#@cdk_utils/iam.mq.MqConditions.property.DeleteTagsConditionKeys">DeleteTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTags action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.mq.MqConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.mq.MqConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.mq.MqConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateBrokerConditionKeys`<sup>Required</sup> <a name="CreateBrokerConditionKeys" id="@cdk_utils/iam.mq.MqConditions.property.CreateBrokerConditionKeys"></a>

```typescript
public readonly CreateBrokerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBroker action.

---

##### `CreateConfigurationConditionKeys`<sup>Required</sup> <a name="CreateConfigurationConditionKeys" id="@cdk_utils/iam.mq.MqConditions.property.CreateConfigurationConditionKeys"></a>

```typescript
public readonly CreateConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConfiguration action.

---

##### `CreateTagsConditionKeys`<sup>Required</sup> <a name="CreateTagsConditionKeys" id="@cdk_utils/iam.mq.MqConditions.property.CreateTagsConditionKeys"></a>

```typescript
public readonly CreateTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTags action.

---

##### `DeleteTagsConditionKeys`<sup>Required</sup> <a name="DeleteTagsConditionKeys" id="@cdk_utils/iam.mq.MqConditions.property.DeleteTagsConditionKeys"></a>

```typescript
public readonly DeleteTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTags action.

---

### MqOperations <a name="MqOperations" id="@cdk_utils/iam.mq.MqOperations"></a>

API operation to required IAM actions mapping for mq.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mq.MqOperations.Initializer"></a>

```typescript
import { mq } from '@cdk_utils/iam'

new mq.MqOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.CreateBroker">CreateBroker</a></code> | <code>string[]</code> | IAM actions required for the CreateBroker API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.CreateConfiguration">CreateConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateConfiguration API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.CreateTags">CreateTags</a></code> | <code>string[]</code> | IAM actions required for the CreateTags API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.CreateUser">CreateUser</a></code> | <code>string[]</code> | IAM actions required for the CreateUser API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.DeleteBroker">DeleteBroker</a></code> | <code>string[]</code> | IAM actions required for the DeleteBroker API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.DeleteConfiguration">DeleteConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfiguration API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.DeleteTags">DeleteTags</a></code> | <code>string[]</code> | IAM actions required for the DeleteTags API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.DeleteUser">DeleteUser</a></code> | <code>string[]</code> | IAM actions required for the DeleteUser API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.DescribeBroker">DescribeBroker</a></code> | <code>string[]</code> | IAM actions required for the DescribeBroker API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.DescribeBrokerEngineTypes">DescribeBrokerEngineTypes</a></code> | <code>string[]</code> | IAM actions required for the DescribeBrokerEngineTypes API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.DescribeBrokerInstanceOptions">DescribeBrokerInstanceOptions</a></code> | <code>string[]</code> | IAM actions required for the DescribeBrokerInstanceOptions API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.DescribeConfiguration">DescribeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeConfiguration API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.DescribeConfigurationRevision">DescribeConfigurationRevision</a></code> | <code>string[]</code> | IAM actions required for the DescribeConfigurationRevision API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.DescribeSharedResources">DescribeSharedResources</a></code> | <code>string[]</code> | IAM actions required for the DescribeSharedResources API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.DescribeUser">DescribeUser</a></code> | <code>string[]</code> | IAM actions required for the DescribeUser API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.ListBrokers">ListBrokers</a></code> | <code>string[]</code> | IAM actions required for the ListBrokers API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.ListConfigurationRevisions">ListConfigurationRevisions</a></code> | <code>string[]</code> | IAM actions required for the ListConfigurationRevisions API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.ListConfigurations">ListConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListConfigurations API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.ListTags">ListTags</a></code> | <code>string[]</code> | IAM actions required for the ListTags API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.ListUsers">ListUsers</a></code> | <code>string[]</code> | IAM actions required for the ListUsers API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.Promote">Promote</a></code> | <code>string[]</code> | IAM actions required for the Promote API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.RebootBroker">RebootBroker</a></code> | <code>string[]</code> | IAM actions required for the RebootBroker API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.UpdateBroker">UpdateBroker</a></code> | <code>string[]</code> | IAM actions required for the UpdateBroker API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.UpdateConfiguration">UpdateConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfiguration API call. |
| <code><a href="#@cdk_utils/iam.mq.MqOperations.property.UpdateUser">UpdateUser</a></code> | <code>string[]</code> | IAM actions required for the UpdateUser API call. |

---

##### `CreateBroker`<sup>Required</sup> <a name="CreateBroker" id="@cdk_utils/iam.mq.MqOperations.property.CreateBroker"></a>

```typescript
public readonly CreateBroker: string[];
```

- *Type:* string[]

IAM actions required for the CreateBroker API call.

---

##### `CreateConfiguration`<sup>Required</sup> <a name="CreateConfiguration" id="@cdk_utils/iam.mq.MqOperations.property.CreateConfiguration"></a>

```typescript
public readonly CreateConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateConfiguration API call.

---

##### `CreateTags`<sup>Required</sup> <a name="CreateTags" id="@cdk_utils/iam.mq.MqOperations.property.CreateTags"></a>

```typescript
public readonly CreateTags: string[];
```

- *Type:* string[]

IAM actions required for the CreateTags API call.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.mq.MqOperations.property.CreateUser"></a>

```typescript
public readonly CreateUser: string[];
```

- *Type:* string[]

IAM actions required for the CreateUser API call.

---

##### `DeleteBroker`<sup>Required</sup> <a name="DeleteBroker" id="@cdk_utils/iam.mq.MqOperations.property.DeleteBroker"></a>

```typescript
public readonly DeleteBroker: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBroker API call.

---

##### `DeleteConfiguration`<sup>Required</sup> <a name="DeleteConfiguration" id="@cdk_utils/iam.mq.MqOperations.property.DeleteConfiguration"></a>

```typescript
public readonly DeleteConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfiguration API call.

---

##### `DeleteTags`<sup>Required</sup> <a name="DeleteTags" id="@cdk_utils/iam.mq.MqOperations.property.DeleteTags"></a>

```typescript
public readonly DeleteTags: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTags API call.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.mq.MqOperations.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUser API call.

---

##### `DescribeBroker`<sup>Required</sup> <a name="DescribeBroker" id="@cdk_utils/iam.mq.MqOperations.property.DescribeBroker"></a>

```typescript
public readonly DescribeBroker: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBroker API call.

---

##### `DescribeBrokerEngineTypes`<sup>Required</sup> <a name="DescribeBrokerEngineTypes" id="@cdk_utils/iam.mq.MqOperations.property.DescribeBrokerEngineTypes"></a>

```typescript
public readonly DescribeBrokerEngineTypes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBrokerEngineTypes API call.

---

##### `DescribeBrokerInstanceOptions`<sup>Required</sup> <a name="DescribeBrokerInstanceOptions" id="@cdk_utils/iam.mq.MqOperations.property.DescribeBrokerInstanceOptions"></a>

```typescript
public readonly DescribeBrokerInstanceOptions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBrokerInstanceOptions API call.

---

##### `DescribeConfiguration`<sup>Required</sup> <a name="DescribeConfiguration" id="@cdk_utils/iam.mq.MqOperations.property.DescribeConfiguration"></a>

```typescript
public readonly DescribeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConfiguration API call.

---

##### `DescribeConfigurationRevision`<sup>Required</sup> <a name="DescribeConfigurationRevision" id="@cdk_utils/iam.mq.MqOperations.property.DescribeConfigurationRevision"></a>

```typescript
public readonly DescribeConfigurationRevision: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConfigurationRevision API call.

---

##### `DescribeSharedResources`<sup>Required</sup> <a name="DescribeSharedResources" id="@cdk_utils/iam.mq.MqOperations.property.DescribeSharedResources"></a>

```typescript
public readonly DescribeSharedResources: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSharedResources API call.

---

##### `DescribeUser`<sup>Required</sup> <a name="DescribeUser" id="@cdk_utils/iam.mq.MqOperations.property.DescribeUser"></a>

```typescript
public readonly DescribeUser: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUser API call.

---

##### `ListBrokers`<sup>Required</sup> <a name="ListBrokers" id="@cdk_utils/iam.mq.MqOperations.property.ListBrokers"></a>

```typescript
public readonly ListBrokers: string[];
```

- *Type:* string[]

IAM actions required for the ListBrokers API call.

---

##### `ListConfigurationRevisions`<sup>Required</sup> <a name="ListConfigurationRevisions" id="@cdk_utils/iam.mq.MqOperations.property.ListConfigurationRevisions"></a>

```typescript
public readonly ListConfigurationRevisions: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigurationRevisions API call.

---

##### `ListConfigurations`<sup>Required</sup> <a name="ListConfigurations" id="@cdk_utils/iam.mq.MqOperations.property.ListConfigurations"></a>

```typescript
public readonly ListConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigurations API call.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.mq.MqOperations.property.ListTags"></a>

```typescript
public readonly ListTags: string[];
```

- *Type:* string[]

IAM actions required for the ListTags API call.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.mq.MqOperations.property.ListUsers"></a>

```typescript
public readonly ListUsers: string[];
```

- *Type:* string[]

IAM actions required for the ListUsers API call.

---

##### `Promote`<sup>Required</sup> <a name="Promote" id="@cdk_utils/iam.mq.MqOperations.property.Promote"></a>

```typescript
public readonly Promote: string[];
```

- *Type:* string[]

IAM actions required for the Promote API call.

---

##### `RebootBroker`<sup>Required</sup> <a name="RebootBroker" id="@cdk_utils/iam.mq.MqOperations.property.RebootBroker"></a>

```typescript
public readonly RebootBroker: string[];
```

- *Type:* string[]

IAM actions required for the RebootBroker API call.

---

##### `UpdateBroker`<sup>Required</sup> <a name="UpdateBroker" id="@cdk_utils/iam.mq.MqOperations.property.UpdateBroker"></a>

```typescript
public readonly UpdateBroker: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBroker API call.

---

##### `UpdateConfiguration`<sup>Required</sup> <a name="UpdateConfiguration" id="@cdk_utils/iam.mq.MqOperations.property.UpdateConfiguration"></a>

```typescript
public readonly UpdateConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfiguration API call.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.mq.MqOperations.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUser API call.

---

### MqResources <a name="MqResources" id="@cdk_utils/iam.mq.MqResources"></a>

ARN builders, validators, and parsers for mq resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mq.MqResources.Initializer"></a>

```typescript
import { mq } from '@cdk_utils/iam'

new mq.MqResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mq.MqResources.brokers">brokers</a></code> | Builds an ARN for the brokers resource. |
| <code><a href="#@cdk_utils/iam.mq.MqResources.configurations">configurations</a></code> | Builds an ARN for the configurations resource. |
| <code><a href="#@cdk_utils/iam.mq.MqResources.isValidBrokersArn">isValidBrokersArn</a></code> | Validates whether a string is a valid ARN for the brokers resource. |
| <code><a href="#@cdk_utils/iam.mq.MqResources.isValidConfigurationsArn">isValidConfigurationsArn</a></code> | Validates whether a string is a valid ARN for the configurations resource. |
| <code><a href="#@cdk_utils/iam.mq.MqResources.parseBrokersArn">parseBrokersArn</a></code> | Parses a brokers ARN into its components. |
| <code><a href="#@cdk_utils/iam.mq.MqResources.parseConfigurationsArn">parseConfigurationsArn</a></code> | Parses a configurations ARN into its components. |

---

##### `brokers` <a name="brokers" id="@cdk_utils/iam.mq.MqResources.brokers"></a>

```typescript
import { mq } from '@cdk_utils/iam'

mq.MqResources.brokers(props: MqBrokersArnProps)
```

Builds an ARN for the brokers resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mq.MqResources.brokers.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mq.MqBrokersArnProps">MqBrokersArnProps</a>

---

##### `configurations` <a name="configurations" id="@cdk_utils/iam.mq.MqResources.configurations"></a>

```typescript
import { mq } from '@cdk_utils/iam'

mq.MqResources.configurations(props: MqConfigurationsArnProps)
```

Builds an ARN for the configurations resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mq.MqResources.configurations.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mq.MqConfigurationsArnProps">MqConfigurationsArnProps</a>

---

##### `isValidBrokersArn` <a name="isValidBrokersArn" id="@cdk_utils/iam.mq.MqResources.isValidBrokersArn"></a>

```typescript
import { mq } from '@cdk_utils/iam'

mq.MqResources.isValidBrokersArn(arn: string)
```

Validates whether a string is a valid ARN for the brokers resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mq.MqResources.isValidBrokersArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConfigurationsArn` <a name="isValidConfigurationsArn" id="@cdk_utils/iam.mq.MqResources.isValidConfigurationsArn"></a>

```typescript
import { mq } from '@cdk_utils/iam'

mq.MqResources.isValidConfigurationsArn(arn: string)
```

Validates whether a string is a valid ARN for the configurations resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mq.MqResources.isValidConfigurationsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBrokersArn` <a name="parseBrokersArn" id="@cdk_utils/iam.mq.MqResources.parseBrokersArn"></a>

```typescript
import { mq } from '@cdk_utils/iam'

mq.MqResources.parseBrokersArn(arn: string)
```

Parses a brokers ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mq.MqResources.parseBrokersArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfigurationsArn` <a name="parseConfigurationsArn" id="@cdk_utils/iam.mq.MqResources.parseConfigurationsArn"></a>

```typescript
import { mq } from '@cdk_utils/iam'

mq.MqResources.parseConfigurationsArn(arn: string)
```

Parses a configurations ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mq.MqResources.parseConfigurationsArn.parameter.arn"></a>

- *Type:* string

---




