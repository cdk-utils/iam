# `ssm_sap` Submodule <a name="`ssm_sap` Submodule" id="@cdk_utils/iam.ssm_sap"></a>


## Structs <a name="Structs" id="Structs"></a>

### SSMSapApplicationArnComponents <a name="SSMSapApplicationArnComponents" id="@cdk_utils/iam.ssm_sap.SSMSapApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_sap.SSMSapApplicationArnComponents.Initializer"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

const sSMSapApplicationArnComponents: ssm_sap.SSMSapApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapApplicationArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapApplicationArnComponents.property.applicationType">applicationType</a></code> | <code>string</code> | The ApplicationType component. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm_sap.SSMSapApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.ssm_sap.SSMSapApplicationArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdk_utils/iam.ssm_sap.SSMSapApplicationArnComponents.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

The ApplicationType component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm_sap.SSMSapApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm_sap.SSMSapApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSMSapApplicationArnProps <a name="SSMSapApplicationArnProps" id="@cdk_utils/iam.ssm_sap.SSMSapApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_sap.SSMSapApplicationArnProps.Initializer"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

const sSMSapApplicationArnProps: ssm_sap.SSMSapApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapApplicationArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapApplicationArnProps.property.applicationType">applicationType</a></code> | <code>string</code> | The ApplicationType component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.ssm_sap.SSMSapApplicationArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdk_utils/iam.ssm_sap.SSMSapApplicationArnProps.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

The ApplicationType component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm_sap.SSMSapApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm_sap.SSMSapApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm_sap.SSMSapApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMSapComponentArnComponents <a name="SSMSapComponentArnComponents" id="@cdk_utils/iam.ssm_sap.SSMSapComponentArnComponents"></a>

Parsed components of a component ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_sap.SSMSapComponentArnComponents.Initializer"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

const sSMSapComponentArnComponents: ssm_sap.SSMSapComponentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapComponentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapComponentArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapComponentArnComponents.property.applicationType">applicationType</a></code> | <code>string</code> | The ApplicationType component. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapComponentArnComponents.property.componentId">componentId</a></code> | <code>string</code> | The ComponentId component. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapComponentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapComponentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm_sap.SSMSapComponentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.ssm_sap.SSMSapComponentArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdk_utils/iam.ssm_sap.SSMSapComponentArnComponents.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

The ApplicationType component.

---

##### `componentId`<sup>Required</sup> <a name="componentId" id="@cdk_utils/iam.ssm_sap.SSMSapComponentArnComponents.property.componentId"></a>

```typescript
public readonly componentId: string;
```

- *Type:* string

The ComponentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm_sap.SSMSapComponentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm_sap.SSMSapComponentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSMSapComponentArnProps <a name="SSMSapComponentArnProps" id="@cdk_utils/iam.ssm_sap.SSMSapComponentArnProps"></a>

Properties for building a component ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_sap.SSMSapComponentArnProps.Initializer"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

const sSMSapComponentArnProps: ssm_sap.SSMSapComponentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapComponentArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapComponentArnProps.property.applicationType">applicationType</a></code> | <code>string</code> | The ApplicationType component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapComponentArnProps.property.componentId">componentId</a></code> | <code>string</code> | The ComponentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapComponentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapComponentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapComponentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.ssm_sap.SSMSapComponentArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdk_utils/iam.ssm_sap.SSMSapComponentArnProps.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

The ApplicationType component of the ARN.

---

##### `componentId`<sup>Required</sup> <a name="componentId" id="@cdk_utils/iam.ssm_sap.SSMSapComponentArnProps.property.componentId"></a>

```typescript
public readonly componentId: string;
```

- *Type:* string

The ComponentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm_sap.SSMSapComponentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm_sap.SSMSapComponentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm_sap.SSMSapComponentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMSapDatabaseArnComponents <a name="SSMSapDatabaseArnComponents" id="@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnComponents"></a>

Parsed components of a database ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnComponents.Initializer"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

const sSMSapDatabaseArnComponents: ssm_sap.SSMSapDatabaseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnComponents.property.applicationType">applicationType</a></code> | <code>string</code> | The ApplicationType component. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnComponents.property.databaseId">databaseId</a></code> | <code>string</code> | The DatabaseId component. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnComponents.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

The ApplicationType component.

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnComponents.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

The DatabaseId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSMSapDatabaseArnProps <a name="SSMSapDatabaseArnProps" id="@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnProps"></a>

Properties for building a database ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnProps.Initializer"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

const sSMSapDatabaseArnProps: ssm_sap.SSMSapDatabaseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnProps.property.applicationType">applicationType</a></code> | <code>string</code> | The ApplicationType component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnProps.property.databaseId">databaseId</a></code> | <code>string</code> | The DatabaseId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnProps.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

The ApplicationType component of the ARN.

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnProps.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

The DatabaseId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SSMSapActions <a name="SSMSapActions" id="@cdk_utils/iam.ssm_sap.SSMSapActions"></a>

IAM action constants for the ssm-sap service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm_sap.SSMSapActions.Initializer"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

new ssm_sap.SSMSapActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.actionGetApplication">actionGetApplication</a></code> | <code>string</code> | [Read] ssm-sap:GetApplication. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.actionGetComponent">actionGetComponent</a></code> | <code>string</code> | [Read] ssm-sap:GetComponent. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.actionGetConfigurationCheckOperation">actionGetConfigurationCheckOperation</a></code> | <code>string</code> | [Read] ssm-sap:GetConfigurationCheckOperation. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.actionGetDatabase">actionGetDatabase</a></code> | <code>string</code> | [Read] ssm-sap:GetDatabase. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.actionGetOperation">actionGetOperation</a></code> | <code>string</code> | [Read] ssm-sap:GetOperation. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.actionGetResourcePermission">actionGetResourcePermission</a></code> | <code>string</code> | [PermissionManagement] ssm-sap:GetResourcePermission. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.BackupDatabase">BackupDatabase</a></code> | <code>string</code> | [Write] ssm-sap:BackupDatabase. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.DeleteResourcePermission">DeleteResourcePermission</a></code> | <code>string</code> | [PermissionManagement] ssm-sap:DeleteResourcePermission. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.DeregisterApplication">DeregisterApplication</a></code> | <code>string</code> | [Write] ssm-sap:DeregisterApplication. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListApplications">ListApplications</a></code> | <code>string</code> | [List] ssm-sap:ListApplications. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListComponents">ListComponents</a></code> | <code>string</code> | [List] ssm-sap:ListComponents. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListConfigurationCheckDefinitions">ListConfigurationCheckDefinitions</a></code> | <code>string</code> | [List] ssm-sap:ListConfigurationCheckDefinitions. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListConfigurationCheckOperations">ListConfigurationCheckOperations</a></code> | <code>string</code> | [List] ssm-sap:ListConfigurationCheckOperations. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListDatabases">ListDatabases</a></code> | <code>string</code> | [List] ssm-sap:ListDatabases. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListOperationEvents">ListOperationEvents</a></code> | <code>string</code> | [List] ssm-sap:ListOperationEvents. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListOperations">ListOperations</a></code> | <code>string</code> | [List] ssm-sap:ListOperations. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListSubCheckResults">ListSubCheckResults</a></code> | <code>string</code> | [List] ssm-sap:ListSubCheckResults. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListSubCheckRuleResults">ListSubCheckRuleResults</a></code> | <code>string</code> | [List] ssm-sap:ListSubCheckRuleResults. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] ssm-sap:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.PutResourcePermission">PutResourcePermission</a></code> | <code>string</code> | [PermissionManagement] ssm-sap:PutResourcePermission. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.RegisterApplication">RegisterApplication</a></code> | <code>string</code> | [Write] ssm-sap:RegisterApplication. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.RestoreDatabase">RestoreDatabase</a></code> | <code>string</code> | [Write] ssm-sap:RestoreDatabase. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.StartApplication">StartApplication</a></code> | <code>string</code> | [Write] ssm-sap:StartApplication. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.StartApplicationRefresh">StartApplicationRefresh</a></code> | <code>string</code> | [Write] ssm-sap:StartApplicationRefresh. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.StartConfigurationChecks">StartConfigurationChecks</a></code> | <code>string</code> | [Write] ssm-sap:StartConfigurationChecks. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.StopApplication">StopApplication</a></code> | <code>string</code> | [Write] ssm-sap:StopApplication. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] ssm-sap:TagResource. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] ssm-sap:UntagResource. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.UpdateApplicationSettings">UpdateApplicationSettings</a></code> | <code>string</code> | [Write] ssm-sap:UpdateApplicationSettings. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapActions.property.UpdateHANABackupSettings">UpdateHANABackupSettings</a></code> | <code>string</code> | [Write] ssm-sap:UpdateHANABackupSettings. |

---

##### `actionGetApplication`<sup>Required</sup> <a name="actionGetApplication" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.actionGetApplication"></a>

```typescript
public readonly actionGetApplication: string;
```

- *Type:* string

[Read] ssm-sap:GetApplication.

---

##### `actionGetComponent`<sup>Required</sup> <a name="actionGetComponent" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.actionGetComponent"></a>

```typescript
public readonly actionGetComponent: string;
```

- *Type:* string

[Read] ssm-sap:GetComponent.

---

##### `actionGetConfigurationCheckOperation`<sup>Required</sup> <a name="actionGetConfigurationCheckOperation" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.actionGetConfigurationCheckOperation"></a>

```typescript
public readonly actionGetConfigurationCheckOperation: string;
```

- *Type:* string

[Read] ssm-sap:GetConfigurationCheckOperation.

---

##### `actionGetDatabase`<sup>Required</sup> <a name="actionGetDatabase" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.actionGetDatabase"></a>

```typescript
public readonly actionGetDatabase: string;
```

- *Type:* string

[Read] ssm-sap:GetDatabase.

---

##### `actionGetOperation`<sup>Required</sup> <a name="actionGetOperation" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.actionGetOperation"></a>

```typescript
public readonly actionGetOperation: string;
```

- *Type:* string

[Read] ssm-sap:GetOperation.

---

##### `actionGetResourcePermission`<sup>Required</sup> <a name="actionGetResourcePermission" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.actionGetResourcePermission"></a>

```typescript
public readonly actionGetResourcePermission: string;
```

- *Type:* string

[PermissionManagement] ssm-sap:GetResourcePermission.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BackupDatabase`<sup>Required</sup> <a name="BackupDatabase" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.BackupDatabase"></a>

```typescript
public readonly BackupDatabase: string;
```

- *Type:* string

[Write] ssm-sap:BackupDatabase.

---

##### `DeleteResourcePermission`<sup>Required</sup> <a name="DeleteResourcePermission" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.DeleteResourcePermission"></a>

```typescript
public readonly DeleteResourcePermission: string;
```

- *Type:* string

[PermissionManagement] ssm-sap:DeleteResourcePermission.

---

##### `DeregisterApplication`<sup>Required</sup> <a name="DeregisterApplication" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.DeregisterApplication"></a>

```typescript
public readonly DeregisterApplication: string;
```

- *Type:* string

[Write] ssm-sap:DeregisterApplication.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListApplications"></a>

```typescript
public readonly ListApplications: string;
```

- *Type:* string

[List] ssm-sap:ListApplications.

---

##### `ListComponents`<sup>Required</sup> <a name="ListComponents" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListComponents"></a>

```typescript
public readonly ListComponents: string;
```

- *Type:* string

[List] ssm-sap:ListComponents.

---

##### `ListConfigurationCheckDefinitions`<sup>Required</sup> <a name="ListConfigurationCheckDefinitions" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListConfigurationCheckDefinitions"></a>

```typescript
public readonly ListConfigurationCheckDefinitions: string;
```

- *Type:* string

[List] ssm-sap:ListConfigurationCheckDefinitions.

---

##### `ListConfigurationCheckOperations`<sup>Required</sup> <a name="ListConfigurationCheckOperations" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListConfigurationCheckOperations"></a>

```typescript
public readonly ListConfigurationCheckOperations: string;
```

- *Type:* string

[List] ssm-sap:ListConfigurationCheckOperations.

---

##### `ListDatabases`<sup>Required</sup> <a name="ListDatabases" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListDatabases"></a>

```typescript
public readonly ListDatabases: string;
```

- *Type:* string

[List] ssm-sap:ListDatabases.

---

##### `ListOperationEvents`<sup>Required</sup> <a name="ListOperationEvents" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListOperationEvents"></a>

```typescript
public readonly ListOperationEvents: string;
```

- *Type:* string

[List] ssm-sap:ListOperationEvents.

---

##### `ListOperations`<sup>Required</sup> <a name="ListOperations" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListOperations"></a>

```typescript
public readonly ListOperations: string;
```

- *Type:* string

[List] ssm-sap:ListOperations.

---

##### `ListSubCheckResults`<sup>Required</sup> <a name="ListSubCheckResults" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListSubCheckResults"></a>

```typescript
public readonly ListSubCheckResults: string;
```

- *Type:* string

[List] ssm-sap:ListSubCheckResults.

---

##### `ListSubCheckRuleResults`<sup>Required</sup> <a name="ListSubCheckRuleResults" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListSubCheckRuleResults"></a>

```typescript
public readonly ListSubCheckRuleResults: string;
```

- *Type:* string

[List] ssm-sap:ListSubCheckRuleResults.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] ssm-sap:ListTagsForResource.

---

##### `PutResourcePermission`<sup>Required</sup> <a name="PutResourcePermission" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.PutResourcePermission"></a>

```typescript
public readonly PutResourcePermission: string;
```

- *Type:* string

[PermissionManagement] ssm-sap:PutResourcePermission.

---

##### `RegisterApplication`<sup>Required</sup> <a name="RegisterApplication" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.RegisterApplication"></a>

```typescript
public readonly RegisterApplication: string;
```

- *Type:* string

[Write] ssm-sap:RegisterApplication.

---

##### `RestoreDatabase`<sup>Required</sup> <a name="RestoreDatabase" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.RestoreDatabase"></a>

```typescript
public readonly RestoreDatabase: string;
```

- *Type:* string

[Write] ssm-sap:RestoreDatabase.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartApplication`<sup>Required</sup> <a name="StartApplication" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.StartApplication"></a>

```typescript
public readonly StartApplication: string;
```

- *Type:* string

[Write] ssm-sap:StartApplication.

---

##### `StartApplicationRefresh`<sup>Required</sup> <a name="StartApplicationRefresh" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.StartApplicationRefresh"></a>

```typescript
public readonly StartApplicationRefresh: string;
```

- *Type:* string

[Write] ssm-sap:StartApplicationRefresh.

---

##### `StartConfigurationChecks`<sup>Required</sup> <a name="StartConfigurationChecks" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.StartConfigurationChecks"></a>

```typescript
public readonly StartConfigurationChecks: string;
```

- *Type:* string

[Write] ssm-sap:StartConfigurationChecks.

---

##### `StopApplication`<sup>Required</sup> <a name="StopApplication" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.StopApplication"></a>

```typescript
public readonly StopApplication: string;
```

- *Type:* string

[Write] ssm-sap:StopApplication.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] ssm-sap:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] ssm-sap:UntagResource.

---

##### `UpdateApplicationSettings`<sup>Required</sup> <a name="UpdateApplicationSettings" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.UpdateApplicationSettings"></a>

```typescript
public readonly UpdateApplicationSettings: string;
```

- *Type:* string

[Write] ssm-sap:UpdateApplicationSettings.

---

##### `UpdateHANABackupSettings`<sup>Required</sup> <a name="UpdateHANABackupSettings" id="@cdk_utils/iam.ssm_sap.SSMSapActions.property.UpdateHANABackupSettings"></a>

```typescript
public readonly UpdateHANABackupSettings: string;
```

- *Type:* string

[Write] ssm-sap:UpdateHANABackupSettings.

---

### SSMSapConditions <a name="SSMSapConditions" id="@cdk_utils/iam.ssm_sap.SSMSapConditions"></a>

Condition key constants and builders for ssm-sap.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm_sap.SSMSapConditions.Initializer"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

new ssm_sap.SSMSapConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.ssm_sap.SSMSapConditions.requestTag"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

ssm_sap.SSMSapConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm_sap.SSMSapConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.ssm_sap.SSMSapConditions.resourceTag"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

ssm_sap.SSMSapConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm_sap.SSMSapConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.ssm_sap.SSMSapConditions.tagKeys"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

ssm_sap.SSMSapConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ssm_sap.SSMSapConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapConditions.property.RegisterApplicationConditionKeys">RegisterApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterApplication action. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.ssm_sap.SSMSapConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.ssm_sap.SSMSapConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.ssm_sap.SSMSapConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `RegisterApplicationConditionKeys`<sup>Required</sup> <a name="RegisterApplicationConditionKeys" id="@cdk_utils/iam.ssm_sap.SSMSapConditions.property.RegisterApplicationConditionKeys"></a>

```typescript
public readonly RegisterApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterApplication action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.ssm_sap.SSMSapConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.ssm_sap.SSMSapConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### SSMSapOperations <a name="SSMSapOperations" id="@cdk_utils/iam.ssm_sap.SSMSapOperations"></a>

API operation to required IAM actions mapping for ssm-sap.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.Initializer"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

new ssm_sap.SSMSapOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.DeleteResourcePermission">DeleteResourcePermission</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePermission API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.DeregisterApplication">DeregisterApplication</a></code> | <code>string[]</code> | IAM actions required for the DeregisterApplication API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListApplications">ListApplications</a></code> | <code>string[]</code> | IAM actions required for the ListApplications API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListComponents">ListComponents</a></code> | <code>string[]</code> | IAM actions required for the ListComponents API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListConfigurationCheckDefinitions">ListConfigurationCheckDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListConfigurationCheckDefinitions API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListConfigurationCheckOperations">ListConfigurationCheckOperations</a></code> | <code>string[]</code> | IAM actions required for the ListConfigurationCheckOperations API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListDatabases">ListDatabases</a></code> | <code>string[]</code> | IAM actions required for the ListDatabases API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListOperationEvents">ListOperationEvents</a></code> | <code>string[]</code> | IAM actions required for the ListOperationEvents API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListOperations">ListOperations</a></code> | <code>string[]</code> | IAM actions required for the ListOperations API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListSubCheckResults">ListSubCheckResults</a></code> | <code>string[]</code> | IAM actions required for the ListSubCheckResults API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListSubCheckRuleResults">ListSubCheckRuleResults</a></code> | <code>string[]</code> | IAM actions required for the ListSubCheckRuleResults API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.opGetApplication">opGetApplication</a></code> | <code>string[]</code> | IAM actions required for the GetApplication API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.opGetComponent">opGetComponent</a></code> | <code>string[]</code> | IAM actions required for the GetComponent API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.opGetConfigurationCheckOperation">opGetConfigurationCheckOperation</a></code> | <code>string[]</code> | IAM actions required for the GetConfigurationCheckOperation API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.opGetDatabase">opGetDatabase</a></code> | <code>string[]</code> | IAM actions required for the GetDatabase API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.opGetOperation">opGetOperation</a></code> | <code>string[]</code> | IAM actions required for the GetOperation API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.opGetResourcePermission">opGetResourcePermission</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePermission API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.PutResourcePermission">PutResourcePermission</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePermission API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.RegisterApplication">RegisterApplication</a></code> | <code>string[]</code> | IAM actions required for the RegisterApplication API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.StartApplication">StartApplication</a></code> | <code>string[]</code> | IAM actions required for the StartApplication API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.StartApplicationRefresh">StartApplicationRefresh</a></code> | <code>string[]</code> | IAM actions required for the StartApplicationRefresh API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.StartConfigurationChecks">StartConfigurationChecks</a></code> | <code>string[]</code> | IAM actions required for the StartConfigurationChecks API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.StopApplication">StopApplication</a></code> | <code>string[]</code> | IAM actions required for the StopApplication API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapOperations.property.UpdateApplicationSettings">UpdateApplicationSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplicationSettings API call. |

---

##### `DeleteResourcePermission`<sup>Required</sup> <a name="DeleteResourcePermission" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.DeleteResourcePermission"></a>

```typescript
public readonly DeleteResourcePermission: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePermission API call.

---

##### `DeregisterApplication`<sup>Required</sup> <a name="DeregisterApplication" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.DeregisterApplication"></a>

```typescript
public readonly DeregisterApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterApplication API call.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListApplications"></a>

```typescript
public readonly ListApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListApplications API call.

---

##### `ListComponents`<sup>Required</sup> <a name="ListComponents" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListComponents"></a>

```typescript
public readonly ListComponents: string[];
```

- *Type:* string[]

IAM actions required for the ListComponents API call.

---

##### `ListConfigurationCheckDefinitions`<sup>Required</sup> <a name="ListConfigurationCheckDefinitions" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListConfigurationCheckDefinitions"></a>

```typescript
public readonly ListConfigurationCheckDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigurationCheckDefinitions API call.

---

##### `ListConfigurationCheckOperations`<sup>Required</sup> <a name="ListConfigurationCheckOperations" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListConfigurationCheckOperations"></a>

```typescript
public readonly ListConfigurationCheckOperations: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigurationCheckOperations API call.

---

##### `ListDatabases`<sup>Required</sup> <a name="ListDatabases" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListDatabases"></a>

```typescript
public readonly ListDatabases: string[];
```

- *Type:* string[]

IAM actions required for the ListDatabases API call.

---

##### `ListOperationEvents`<sup>Required</sup> <a name="ListOperationEvents" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListOperationEvents"></a>

```typescript
public readonly ListOperationEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListOperationEvents API call.

---

##### `ListOperations`<sup>Required</sup> <a name="ListOperations" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListOperations"></a>

```typescript
public readonly ListOperations: string[];
```

- *Type:* string[]

IAM actions required for the ListOperations API call.

---

##### `ListSubCheckResults`<sup>Required</sup> <a name="ListSubCheckResults" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListSubCheckResults"></a>

```typescript
public readonly ListSubCheckResults: string[];
```

- *Type:* string[]

IAM actions required for the ListSubCheckResults API call.

---

##### `ListSubCheckRuleResults`<sup>Required</sup> <a name="ListSubCheckRuleResults" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListSubCheckRuleResults"></a>

```typescript
public readonly ListSubCheckRuleResults: string[];
```

- *Type:* string[]

IAM actions required for the ListSubCheckRuleResults API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetApplication`<sup>Required</sup> <a name="opGetApplication" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.opGetApplication"></a>

```typescript
public readonly opGetApplication: string[];
```

- *Type:* string[]

IAM actions required for the GetApplication API call.

---

##### `opGetComponent`<sup>Required</sup> <a name="opGetComponent" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.opGetComponent"></a>

```typescript
public readonly opGetComponent: string[];
```

- *Type:* string[]

IAM actions required for the GetComponent API call.

---

##### `opGetConfigurationCheckOperation`<sup>Required</sup> <a name="opGetConfigurationCheckOperation" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.opGetConfigurationCheckOperation"></a>

```typescript
public readonly opGetConfigurationCheckOperation: string[];
```

- *Type:* string[]

IAM actions required for the GetConfigurationCheckOperation API call.

---

##### `opGetDatabase`<sup>Required</sup> <a name="opGetDatabase" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.opGetDatabase"></a>

```typescript
public readonly opGetDatabase: string[];
```

- *Type:* string[]

IAM actions required for the GetDatabase API call.

---

##### `opGetOperation`<sup>Required</sup> <a name="opGetOperation" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.opGetOperation"></a>

```typescript
public readonly opGetOperation: string[];
```

- *Type:* string[]

IAM actions required for the GetOperation API call.

---

##### `opGetResourcePermission`<sup>Required</sup> <a name="opGetResourcePermission" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.opGetResourcePermission"></a>

```typescript
public readonly opGetResourcePermission: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePermission API call.

---

##### `PutResourcePermission`<sup>Required</sup> <a name="PutResourcePermission" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.PutResourcePermission"></a>

```typescript
public readonly PutResourcePermission: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePermission API call.

---

##### `RegisterApplication`<sup>Required</sup> <a name="RegisterApplication" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.RegisterApplication"></a>

```typescript
public readonly RegisterApplication: string[];
```

- *Type:* string[]

IAM actions required for the RegisterApplication API call.

---

##### `StartApplication`<sup>Required</sup> <a name="StartApplication" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.StartApplication"></a>

```typescript
public readonly StartApplication: string[];
```

- *Type:* string[]

IAM actions required for the StartApplication API call.

---

##### `StartApplicationRefresh`<sup>Required</sup> <a name="StartApplicationRefresh" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.StartApplicationRefresh"></a>

```typescript
public readonly StartApplicationRefresh: string[];
```

- *Type:* string[]

IAM actions required for the StartApplicationRefresh API call.

---

##### `StartConfigurationChecks`<sup>Required</sup> <a name="StartConfigurationChecks" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.StartConfigurationChecks"></a>

```typescript
public readonly StartConfigurationChecks: string[];
```

- *Type:* string[]

IAM actions required for the StartConfigurationChecks API call.

---

##### `StopApplication`<sup>Required</sup> <a name="StopApplication" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.StopApplication"></a>

```typescript
public readonly StopApplication: string[];
```

- *Type:* string[]

IAM actions required for the StopApplication API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateApplicationSettings`<sup>Required</sup> <a name="UpdateApplicationSettings" id="@cdk_utils/iam.ssm_sap.SSMSapOperations.property.UpdateApplicationSettings"></a>

```typescript
public readonly UpdateApplicationSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplicationSettings API call.

---

### SSMSapResources <a name="SSMSapResources" id="@cdk_utils/iam.ssm_sap.SSMSapResources"></a>

ARN builders, validators, and parsers for ssm-sap resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm_sap.SSMSapResources.Initializer"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

new ssm_sap.SSMSapResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapResources.component">component</a></code> | Builds an ARN for the component resource. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapResources.database">database</a></code> | Builds an ARN for the database resource. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapResources.isValidComponentArn">isValidComponentArn</a></code> | Validates whether a string is a valid ARN for the component resource. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapResources.isValidDatabaseArn">isValidDatabaseArn</a></code> | Validates whether a string is a valid ARN for the database resource. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapResources.parseComponentArn">parseComponentArn</a></code> | Parses a component ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm_sap.SSMSapResources.parseDatabaseArn">parseDatabaseArn</a></code> | Parses a database ARN into its components. |

---

##### `application` <a name="application" id="@cdk_utils/iam.ssm_sap.SSMSapResources.application"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

ssm_sap.SSMSapResources.application(props: SSMSapApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm_sap.SSMSapResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm_sap.SSMSapApplicationArnProps">SSMSapApplicationArnProps</a>

---

##### `component` <a name="component" id="@cdk_utils/iam.ssm_sap.SSMSapResources.component"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

ssm_sap.SSMSapResources.component(props: SSMSapComponentArnProps)
```

Builds an ARN for the component resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm_sap.SSMSapResources.component.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm_sap.SSMSapComponentArnProps">SSMSapComponentArnProps</a>

---

##### `database` <a name="database" id="@cdk_utils/iam.ssm_sap.SSMSapResources.database"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

ssm_sap.SSMSapResources.database(props: SSMSapDatabaseArnProps)
```

Builds an ARN for the database resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm_sap.SSMSapResources.database.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm_sap.SSMSapDatabaseArnProps">SSMSapDatabaseArnProps</a>

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.ssm_sap.SSMSapResources.isValidApplicationArn"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

ssm_sap.SSMSapResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_sap.SSMSapResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidComponentArn` <a name="isValidComponentArn" id="@cdk_utils/iam.ssm_sap.SSMSapResources.isValidComponentArn"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

ssm_sap.SSMSapResources.isValidComponentArn(arn: string)
```

Validates whether a string is a valid ARN for the component resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_sap.SSMSapResources.isValidComponentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatabaseArn` <a name="isValidDatabaseArn" id="@cdk_utils/iam.ssm_sap.SSMSapResources.isValidDatabaseArn"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

ssm_sap.SSMSapResources.isValidDatabaseArn(arn: string)
```

Validates whether a string is a valid ARN for the database resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_sap.SSMSapResources.isValidDatabaseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.ssm_sap.SSMSapResources.parseApplicationArn"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

ssm_sap.SSMSapResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_sap.SSMSapResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseComponentArn` <a name="parseComponentArn" id="@cdk_utils/iam.ssm_sap.SSMSapResources.parseComponentArn"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

ssm_sap.SSMSapResources.parseComponentArn(arn: string)
```

Parses a component ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_sap.SSMSapResources.parseComponentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatabaseArn` <a name="parseDatabaseArn" id="@cdk_utils/iam.ssm_sap.SSMSapResources.parseDatabaseArn"></a>

```typescript
import { ssm_sap } from '@cdk_utils/iam'

ssm_sap.SSMSapResources.parseDatabaseArn(arn: string)
```

Parses a database ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_sap.SSMSapResources.parseDatabaseArn.parameter.arn"></a>

- *Type:* string

---




