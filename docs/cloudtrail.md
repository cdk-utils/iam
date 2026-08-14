# `cloudtrail` Submodule <a name="`cloudtrail` Submodule" id="@cdk_utils/iam.cloudtrail"></a>


## Structs <a name="Structs" id="Structs"></a>

### CloudTrailChannelArnComponents <a name="CloudTrailChannelArnComponents" id="@cdk_utils/iam.cloudtrail.CloudTrailChannelArnComponents"></a>

Parsed components of a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudtrail.CloudTrailChannelArnComponents.Initializer"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

const cloudTrailChannelArnComponents: cloudtrail.CloudTrailChannelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailChannelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailChannelArnComponents.property.channelId">channelId</a></code> | <code>string</code> | The ChannelId component. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailChannelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailChannelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudtrail.CloudTrailChannelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdk_utils/iam.cloudtrail.CloudTrailChannelArnComponents.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

The ChannelId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudtrail.CloudTrailChannelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudtrail.CloudTrailChannelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudTrailChannelArnProps <a name="CloudTrailChannelArnProps" id="@cdk_utils/iam.cloudtrail.CloudTrailChannelArnProps"></a>

Properties for building a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudtrail.CloudTrailChannelArnProps.Initializer"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

const cloudTrailChannelArnProps: cloudtrail.CloudTrailChannelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailChannelArnProps.property.channelId">channelId</a></code> | <code>string</code> | The ChannelId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailChannelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailChannelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailChannelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdk_utils/iam.cloudtrail.CloudTrailChannelArnProps.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

The ChannelId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudtrail.CloudTrailChannelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudtrail.CloudTrailChannelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudtrail.CloudTrailChannelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudTrailDashboardArnComponents <a name="CloudTrailDashboardArnComponents" id="@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnComponents"></a>

Parsed components of a dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnComponents.Initializer"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

const cloudTrailDashboardArnComponents: cloudtrail.CloudTrailDashboardArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnComponents.property.dashboardName">dashboardName</a></code> | <code>string</code> | The DashboardName component. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dashboardName`<sup>Required</sup> <a name="dashboardName" id="@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnComponents.property.dashboardName"></a>

```typescript
public readonly dashboardName: string;
```

- *Type:* string

The DashboardName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudTrailDashboardArnProps <a name="CloudTrailDashboardArnProps" id="@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnProps"></a>

Properties for building a dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnProps.Initializer"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

const cloudTrailDashboardArnProps: cloudtrail.CloudTrailDashboardArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnProps.property.dashboardName">dashboardName</a></code> | <code>string</code> | The DashboardName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dashboardName`<sup>Required</sup> <a name="dashboardName" id="@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnProps.property.dashboardName"></a>

```typescript
public readonly dashboardName: string;
```

- *Type:* string

The DashboardName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudTrailEventdatastoreArnComponents <a name="CloudTrailEventdatastoreArnComponents" id="@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnComponents"></a>

Parsed components of a eventdatastore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnComponents.Initializer"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

const cloudTrailEventdatastoreArnComponents: cloudtrail.CloudTrailEventdatastoreArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnComponents.property.eventDataStoreId">eventDataStoreId</a></code> | <code>string</code> | The EventDataStoreId component. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `eventDataStoreId`<sup>Required</sup> <a name="eventDataStoreId" id="@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnComponents.property.eventDataStoreId"></a>

```typescript
public readonly eventDataStoreId: string;
```

- *Type:* string

The EventDataStoreId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudTrailEventdatastoreArnProps <a name="CloudTrailEventdatastoreArnProps" id="@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnProps"></a>

Properties for building a eventdatastore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnProps.Initializer"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

const cloudTrailEventdatastoreArnProps: cloudtrail.CloudTrailEventdatastoreArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnProps.property.eventDataStoreId">eventDataStoreId</a></code> | <code>string</code> | The EventDataStoreId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `eventDataStoreId`<sup>Required</sup> <a name="eventDataStoreId" id="@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnProps.property.eventDataStoreId"></a>

```typescript
public readonly eventDataStoreId: string;
```

- *Type:* string

The EventDataStoreId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudTrailTrailArnComponents <a name="CloudTrailTrailArnComponents" id="@cdk_utils/iam.cloudtrail.CloudTrailTrailArnComponents"></a>

Parsed components of a trail ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudtrail.CloudTrailTrailArnComponents.Initializer"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

const cloudTrailTrailArnComponents: cloudtrail.CloudTrailTrailArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailTrailArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailTrailArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailTrailArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailTrailArnComponents.property.trailName">trailName</a></code> | <code>string</code> | The TrailName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudtrail.CloudTrailTrailArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudtrail.CloudTrailTrailArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudtrail.CloudTrailTrailArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `trailName`<sup>Required</sup> <a name="trailName" id="@cdk_utils/iam.cloudtrail.CloudTrailTrailArnComponents.property.trailName"></a>

```typescript
public readonly trailName: string;
```

- *Type:* string

The TrailName component.

---

### CloudTrailTrailArnProps <a name="CloudTrailTrailArnProps" id="@cdk_utils/iam.cloudtrail.CloudTrailTrailArnProps"></a>

Properties for building a trail ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudtrail.CloudTrailTrailArnProps.Initializer"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

const cloudTrailTrailArnProps: cloudtrail.CloudTrailTrailArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailTrailArnProps.property.trailName">trailName</a></code> | <code>string</code> | The TrailName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailTrailArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailTrailArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailTrailArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `trailName`<sup>Required</sup> <a name="trailName" id="@cdk_utils/iam.cloudtrail.CloudTrailTrailArnProps.property.trailName"></a>

```typescript
public readonly trailName: string;
```

- *Type:* string

The TrailName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudtrail.CloudTrailTrailArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudtrail.CloudTrailTrailArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudtrail.CloudTrailTrailArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CloudTrailActions <a name="CloudTrailActions" id="@cdk_utils/iam.cloudtrail.CloudTrailActions"></a>

IAM action constants for the cloudtrail service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.Initializer"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

new cloudtrail.CloudTrailActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetChannel">actionGetChannel</a></code> | <code>string</code> | [Read] cloudtrail:GetChannel. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetDashboard">actionGetDashboard</a></code> | <code>string</code> | [Read] cloudtrail:GetDashboard. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetEventConfiguration">actionGetEventConfiguration</a></code> | <code>string</code> | [Read] cloudtrail:GetEventConfiguration. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetEventDataStore">actionGetEventDataStore</a></code> | <code>string</code> | [Read] cloudtrail:GetEventDataStore. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetEventDataStoreData">actionGetEventDataStoreData</a></code> | <code>string</code> | [Read] cloudtrail:GetEventDataStoreData. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetEventSelectors">actionGetEventSelectors</a></code> | <code>string</code> | [Read] cloudtrail:GetEventSelectors. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetImport">actionGetImport</a></code> | <code>string</code> | [Read] cloudtrail:GetImport. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetInsightSelectors">actionGetInsightSelectors</a></code> | <code>string</code> | [Read] cloudtrail:GetInsightSelectors. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetQueryResults">actionGetQueryResults</a></code> | <code>string</code> | [Read] cloudtrail:GetQueryResults. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] cloudtrail:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetServiceLinkedChannel">actionGetServiceLinkedChannel</a></code> | <code>string</code> | [Read] cloudtrail:GetServiceLinkedChannel. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetTrail">actionGetTrail</a></code> | <code>string</code> | [Read] cloudtrail:GetTrail. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetTrailStatus">actionGetTrailStatus</a></code> | <code>string</code> | [Read] cloudtrail:GetTrailStatus. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.AddTags">AddTags</a></code> | <code>string</code> | [Tagging] cloudtrail:AddTags. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.CancelQuery">CancelQuery</a></code> | <code>string</code> | [Write] cloudtrail:CancelQuery. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.CreateChannel">CreateChannel</a></code> | <code>string</code> | [Write] cloudtrail:CreateChannel. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.CreateDashboard">CreateDashboard</a></code> | <code>string</code> | [Write] cloudtrail:CreateDashboard. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.CreateEventDataStore">CreateEventDataStore</a></code> | <code>string</code> | [Write] cloudtrail:CreateEventDataStore. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.CreateServiceLinkedChannel">CreateServiceLinkedChannel</a></code> | <code>string</code> | [Write] cloudtrail:CreateServiceLinkedChannel. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.CreateTrail">CreateTrail</a></code> | <code>string</code> | [Write] cloudtrail:CreateTrail. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DeleteChannel">DeleteChannel</a></code> | <code>string</code> | [Write] cloudtrail:DeleteChannel. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DeleteDashboard">DeleteDashboard</a></code> | <code>string</code> | [Write] cloudtrail:DeleteDashboard. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DeleteEventDataStore">DeleteEventDataStore</a></code> | <code>string</code> | [Write] cloudtrail:DeleteEventDataStore. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] cloudtrail:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DeleteServiceLinkedChannel">DeleteServiceLinkedChannel</a></code> | <code>string</code> | [Write] cloudtrail:DeleteServiceLinkedChannel. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DeleteTrail">DeleteTrail</a></code> | <code>string</code> | [Write] cloudtrail:DeleteTrail. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DeregisterOrganizationDelegatedAdmin">DeregisterOrganizationDelegatedAdmin</a></code> | <code>string</code> | [Write] cloudtrail:DeregisterOrganizationDelegatedAdmin. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DescribeQuery">DescribeQuery</a></code> | <code>string</code> | [Read] cloudtrail:DescribeQuery. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DescribeTrails">DescribeTrails</a></code> | <code>string</code> | [Read] cloudtrail:DescribeTrails. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DisableFederation">DisableFederation</a></code> | <code>string</code> | [Write] cloudtrail:DisableFederation. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.EnableFederation">EnableFederation</a></code> | <code>string</code> | [Write] cloudtrail:EnableFederation. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.GenerateQuery">GenerateQuery</a></code> | <code>string</code> | [Write] cloudtrail:GenerateQuery. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.GenerateQueryResultsSummary">GenerateQueryResultsSummary</a></code> | <code>string</code> | [Read] cloudtrail:GenerateQueryResultsSummary. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListChannels">ListChannels</a></code> | <code>string</code> | [List] cloudtrail:ListChannels. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListDashboards">ListDashboards</a></code> | <code>string</code> | [List] cloudtrail:ListDashboards. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListEventDataStores">ListEventDataStores</a></code> | <code>string</code> | [List] cloudtrail:ListEventDataStores. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListImportFailures">ListImportFailures</a></code> | <code>string</code> | [Read] cloudtrail:ListImportFailures. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListImports">ListImports</a></code> | <code>string</code> | [List] cloudtrail:ListImports. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListInsightsData">ListInsightsData</a></code> | <code>string</code> | [List] cloudtrail:ListInsightsData. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListPublicKeys">ListPublicKeys</a></code> | <code>string</code> | [Read] cloudtrail:ListPublicKeys. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListQueries">ListQueries</a></code> | <code>string</code> | [List] cloudtrail:ListQueries. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListServiceLinkedChannels">ListServiceLinkedChannels</a></code> | <code>string</code> | [List] cloudtrail:ListServiceLinkedChannels. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListTags">ListTags</a></code> | <code>string</code> | [Read] cloudtrail:ListTags. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListTrails">ListTrails</a></code> | <code>string</code> | [List] cloudtrail:ListTrails. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.LookupEvents">LookupEvents</a></code> | <code>string</code> | [Read] cloudtrail:LookupEvents. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.PutEventConfiguration">PutEventConfiguration</a></code> | <code>string</code> | [Write] cloudtrail:PutEventConfiguration. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.PutEventSelectors">PutEventSelectors</a></code> | <code>string</code> | [Write] cloudtrail:PutEventSelectors. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.PutInsightSelectors">PutInsightSelectors</a></code> | <code>string</code> | [Write] cloudtrail:PutInsightSelectors. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] cloudtrail:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.RegisterOrganizationDelegatedAdmin">RegisterOrganizationDelegatedAdmin</a></code> | <code>string</code> | [Write] cloudtrail:RegisterOrganizationDelegatedAdmin. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.RemoveTags">RemoveTags</a></code> | <code>string</code> | [Tagging] cloudtrail:RemoveTags. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.RestoreEventDataStore">RestoreEventDataStore</a></code> | <code>string</code> | [Write] cloudtrail:RestoreEventDataStore. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.SearchSampleQueries">SearchSampleQueries</a></code> | <code>string</code> | [Read] cloudtrail:SearchSampleQueries. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.StartDashboardRefresh">StartDashboardRefresh</a></code> | <code>string</code> | [Write] cloudtrail:StartDashboardRefresh. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.StartEventDataStoreIngestion">StartEventDataStoreIngestion</a></code> | <code>string</code> | [Write] cloudtrail:StartEventDataStoreIngestion. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.StartImport">StartImport</a></code> | <code>string</code> | [Write] cloudtrail:StartImport. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.StartLogging">StartLogging</a></code> | <code>string</code> | [Write] cloudtrail:StartLogging. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.StartQuery">StartQuery</a></code> | <code>string</code> | [Write] cloudtrail:StartQuery. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.StopEventDataStoreIngestion">StopEventDataStoreIngestion</a></code> | <code>string</code> | [Write] cloudtrail:StopEventDataStoreIngestion. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.StopImport">StopImport</a></code> | <code>string</code> | [Write] cloudtrail:StopImport. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.StopLogging">StopLogging</a></code> | <code>string</code> | [Write] cloudtrail:StopLogging. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.UpdateChannel">UpdateChannel</a></code> | <code>string</code> | [Write] cloudtrail:UpdateChannel. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.UpdateDashboard">UpdateDashboard</a></code> | <code>string</code> | [Write] cloudtrail:UpdateDashboard. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.UpdateEventDataStore">UpdateEventDataStore</a></code> | <code>string</code> | [Write] cloudtrail:UpdateEventDataStore. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.UpdateServiceLinkedChannel">UpdateServiceLinkedChannel</a></code> | <code>string</code> | [Write] cloudtrail:UpdateServiceLinkedChannel. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailActions.property.UpdateTrail">UpdateTrail</a></code> | <code>string</code> | [Write] cloudtrail:UpdateTrail. |

---

##### `actionGetChannel`<sup>Required</sup> <a name="actionGetChannel" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetChannel"></a>

```typescript
public readonly actionGetChannel: string;
```

- *Type:* string

[Read] cloudtrail:GetChannel.

---

##### `actionGetDashboard`<sup>Required</sup> <a name="actionGetDashboard" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetDashboard"></a>

```typescript
public readonly actionGetDashboard: string;
```

- *Type:* string

[Read] cloudtrail:GetDashboard.

---

##### `actionGetEventConfiguration`<sup>Required</sup> <a name="actionGetEventConfiguration" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetEventConfiguration"></a>

```typescript
public readonly actionGetEventConfiguration: string;
```

- *Type:* string

[Read] cloudtrail:GetEventConfiguration.

---

##### `actionGetEventDataStore`<sup>Required</sup> <a name="actionGetEventDataStore" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetEventDataStore"></a>

```typescript
public readonly actionGetEventDataStore: string;
```

- *Type:* string

[Read] cloudtrail:GetEventDataStore.

---

##### `actionGetEventDataStoreData`<sup>Required</sup> <a name="actionGetEventDataStoreData" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetEventDataStoreData"></a>

```typescript
public readonly actionGetEventDataStoreData: string;
```

- *Type:* string

[Read] cloudtrail:GetEventDataStoreData.

---

##### `actionGetEventSelectors`<sup>Required</sup> <a name="actionGetEventSelectors" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetEventSelectors"></a>

```typescript
public readonly actionGetEventSelectors: string;
```

- *Type:* string

[Read] cloudtrail:GetEventSelectors.

---

##### `actionGetImport`<sup>Required</sup> <a name="actionGetImport" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetImport"></a>

```typescript
public readonly actionGetImport: string;
```

- *Type:* string

[Read] cloudtrail:GetImport.

---

##### `actionGetInsightSelectors`<sup>Required</sup> <a name="actionGetInsightSelectors" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetInsightSelectors"></a>

```typescript
public readonly actionGetInsightSelectors: string;
```

- *Type:* string

[Read] cloudtrail:GetInsightSelectors.

---

##### `actionGetQueryResults`<sup>Required</sup> <a name="actionGetQueryResults" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetQueryResults"></a>

```typescript
public readonly actionGetQueryResults: string;
```

- *Type:* string

[Read] cloudtrail:GetQueryResults.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] cloudtrail:GetResourcePolicy.

---

##### `actionGetServiceLinkedChannel`<sup>Required</sup> <a name="actionGetServiceLinkedChannel" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetServiceLinkedChannel"></a>

```typescript
public readonly actionGetServiceLinkedChannel: string;
```

- *Type:* string

[Read] cloudtrail:GetServiceLinkedChannel.

---

##### `actionGetTrail`<sup>Required</sup> <a name="actionGetTrail" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetTrail"></a>

```typescript
public readonly actionGetTrail: string;
```

- *Type:* string

[Read] cloudtrail:GetTrail.

---

##### `actionGetTrailStatus`<sup>Required</sup> <a name="actionGetTrailStatus" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.actionGetTrailStatus"></a>

```typescript
public readonly actionGetTrailStatus: string;
```

- *Type:* string

[Read] cloudtrail:GetTrailStatus.

---

##### `AddTags`<sup>Required</sup> <a name="AddTags" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.AddTags"></a>

```typescript
public readonly AddTags: string;
```

- *Type:* string

[Tagging] cloudtrail:AddTags.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelQuery`<sup>Required</sup> <a name="CancelQuery" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.CancelQuery"></a>

```typescript
public readonly CancelQuery: string;
```

- *Type:* string

[Write] cloudtrail:CancelQuery.

---

##### `CreateChannel`<sup>Required</sup> <a name="CreateChannel" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.CreateChannel"></a>

```typescript
public readonly CreateChannel: string;
```

- *Type:* string

[Write] cloudtrail:CreateChannel.

---

##### `CreateDashboard`<sup>Required</sup> <a name="CreateDashboard" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.CreateDashboard"></a>

```typescript
public readonly CreateDashboard: string;
```

- *Type:* string

[Write] cloudtrail:CreateDashboard.

---

##### `CreateEventDataStore`<sup>Required</sup> <a name="CreateEventDataStore" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.CreateEventDataStore"></a>

```typescript
public readonly CreateEventDataStore: string;
```

- *Type:* string

[Write] cloudtrail:CreateEventDataStore.

---

##### `CreateServiceLinkedChannel`<sup>Required</sup> <a name="CreateServiceLinkedChannel" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.CreateServiceLinkedChannel"></a>

```typescript
public readonly CreateServiceLinkedChannel: string;
```

- *Type:* string

[Write] cloudtrail:CreateServiceLinkedChannel.

---

##### `CreateTrail`<sup>Required</sup> <a name="CreateTrail" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.CreateTrail"></a>

```typescript
public readonly CreateTrail: string;
```

- *Type:* string

[Write] cloudtrail:CreateTrail.

---

##### `DeleteChannel`<sup>Required</sup> <a name="DeleteChannel" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DeleteChannel"></a>

```typescript
public readonly DeleteChannel: string;
```

- *Type:* string

[Write] cloudtrail:DeleteChannel.

---

##### `DeleteDashboard`<sup>Required</sup> <a name="DeleteDashboard" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DeleteDashboard"></a>

```typescript
public readonly DeleteDashboard: string;
```

- *Type:* string

[Write] cloudtrail:DeleteDashboard.

---

##### `DeleteEventDataStore`<sup>Required</sup> <a name="DeleteEventDataStore" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DeleteEventDataStore"></a>

```typescript
public readonly DeleteEventDataStore: string;
```

- *Type:* string

[Write] cloudtrail:DeleteEventDataStore.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] cloudtrail:DeleteResourcePolicy.

---

##### `DeleteServiceLinkedChannel`<sup>Required</sup> <a name="DeleteServiceLinkedChannel" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DeleteServiceLinkedChannel"></a>

```typescript
public readonly DeleteServiceLinkedChannel: string;
```

- *Type:* string

[Write] cloudtrail:DeleteServiceLinkedChannel.

---

##### `DeleteTrail`<sup>Required</sup> <a name="DeleteTrail" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DeleteTrail"></a>

```typescript
public readonly DeleteTrail: string;
```

- *Type:* string

[Write] cloudtrail:DeleteTrail.

---

##### `DeregisterOrganizationDelegatedAdmin`<sup>Required</sup> <a name="DeregisterOrganizationDelegatedAdmin" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DeregisterOrganizationDelegatedAdmin"></a>

```typescript
public readonly DeregisterOrganizationDelegatedAdmin: string;
```

- *Type:* string

[Write] cloudtrail:DeregisterOrganizationDelegatedAdmin.

---

##### `DescribeQuery`<sup>Required</sup> <a name="DescribeQuery" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DescribeQuery"></a>

```typescript
public readonly DescribeQuery: string;
```

- *Type:* string

[Read] cloudtrail:DescribeQuery.

---

##### `DescribeTrails`<sup>Required</sup> <a name="DescribeTrails" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DescribeTrails"></a>

```typescript
public readonly DescribeTrails: string;
```

- *Type:* string

[Read] cloudtrail:DescribeTrails.

---

##### `DisableFederation`<sup>Required</sup> <a name="DisableFederation" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.DisableFederation"></a>

```typescript
public readonly DisableFederation: string;
```

- *Type:* string

[Write] cloudtrail:DisableFederation.

---

##### `EnableFederation`<sup>Required</sup> <a name="EnableFederation" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.EnableFederation"></a>

```typescript
public readonly EnableFederation: string;
```

- *Type:* string

[Write] cloudtrail:EnableFederation.

---

##### `GenerateQuery`<sup>Required</sup> <a name="GenerateQuery" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.GenerateQuery"></a>

```typescript
public readonly GenerateQuery: string;
```

- *Type:* string

[Write] cloudtrail:GenerateQuery.

---

##### `GenerateQueryResultsSummary`<sup>Required</sup> <a name="GenerateQueryResultsSummary" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.GenerateQueryResultsSummary"></a>

```typescript
public readonly GenerateQueryResultsSummary: string;
```

- *Type:* string

[Read] cloudtrail:GenerateQueryResultsSummary.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListChannels"></a>

```typescript
public readonly ListChannels: string;
```

- *Type:* string

[List] cloudtrail:ListChannels.

---

##### `ListDashboards`<sup>Required</sup> <a name="ListDashboards" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListDashboards"></a>

```typescript
public readonly ListDashboards: string;
```

- *Type:* string

[List] cloudtrail:ListDashboards.

---

##### `ListEventDataStores`<sup>Required</sup> <a name="ListEventDataStores" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListEventDataStores"></a>

```typescript
public readonly ListEventDataStores: string;
```

- *Type:* string

[List] cloudtrail:ListEventDataStores.

---

##### `ListImportFailures`<sup>Required</sup> <a name="ListImportFailures" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListImportFailures"></a>

```typescript
public readonly ListImportFailures: string;
```

- *Type:* string

[Read] cloudtrail:ListImportFailures.

---

##### `ListImports`<sup>Required</sup> <a name="ListImports" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListImports"></a>

```typescript
public readonly ListImports: string;
```

- *Type:* string

[List] cloudtrail:ListImports.

---

##### `ListInsightsData`<sup>Required</sup> <a name="ListInsightsData" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListInsightsData"></a>

```typescript
public readonly ListInsightsData: string;
```

- *Type:* string

[List] cloudtrail:ListInsightsData.

---

##### `ListPublicKeys`<sup>Required</sup> <a name="ListPublicKeys" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListPublicKeys"></a>

```typescript
public readonly ListPublicKeys: string;
```

- *Type:* string

[Read] cloudtrail:ListPublicKeys.

---

##### `ListQueries`<sup>Required</sup> <a name="ListQueries" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListQueries"></a>

```typescript
public readonly ListQueries: string;
```

- *Type:* string

[List] cloudtrail:ListQueries.

---

##### `ListServiceLinkedChannels`<sup>Required</sup> <a name="ListServiceLinkedChannels" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListServiceLinkedChannels"></a>

```typescript
public readonly ListServiceLinkedChannels: string;
```

- *Type:* string

[List] cloudtrail:ListServiceLinkedChannels.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListTags"></a>

```typescript
public readonly ListTags: string;
```

- *Type:* string

[Read] cloudtrail:ListTags.

---

##### `ListTrails`<sup>Required</sup> <a name="ListTrails" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.ListTrails"></a>

```typescript
public readonly ListTrails: string;
```

- *Type:* string

[List] cloudtrail:ListTrails.

---

##### `LookupEvents`<sup>Required</sup> <a name="LookupEvents" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.LookupEvents"></a>

```typescript
public readonly LookupEvents: string;
```

- *Type:* string

[Read] cloudtrail:LookupEvents.

---

##### `PutEventConfiguration`<sup>Required</sup> <a name="PutEventConfiguration" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.PutEventConfiguration"></a>

```typescript
public readonly PutEventConfiguration: string;
```

- *Type:* string

[Write] cloudtrail:PutEventConfiguration.

---

##### `PutEventSelectors`<sup>Required</sup> <a name="PutEventSelectors" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.PutEventSelectors"></a>

```typescript
public readonly PutEventSelectors: string;
```

- *Type:* string

[Write] cloudtrail:PutEventSelectors.

---

##### `PutInsightSelectors`<sup>Required</sup> <a name="PutInsightSelectors" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.PutInsightSelectors"></a>

```typescript
public readonly PutInsightSelectors: string;
```

- *Type:* string

[Write] cloudtrail:PutInsightSelectors.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] cloudtrail:PutResourcePolicy.

---

##### `RegisterOrganizationDelegatedAdmin`<sup>Required</sup> <a name="RegisterOrganizationDelegatedAdmin" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.RegisterOrganizationDelegatedAdmin"></a>

```typescript
public readonly RegisterOrganizationDelegatedAdmin: string;
```

- *Type:* string

[Write] cloudtrail:RegisterOrganizationDelegatedAdmin.

---

##### `RemoveTags`<sup>Required</sup> <a name="RemoveTags" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.RemoveTags"></a>

```typescript
public readonly RemoveTags: string;
```

- *Type:* string

[Tagging] cloudtrail:RemoveTags.

---

##### `RestoreEventDataStore`<sup>Required</sup> <a name="RestoreEventDataStore" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.RestoreEventDataStore"></a>

```typescript
public readonly RestoreEventDataStore: string;
```

- *Type:* string

[Write] cloudtrail:RestoreEventDataStore.

---

##### `SearchSampleQueries`<sup>Required</sup> <a name="SearchSampleQueries" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.SearchSampleQueries"></a>

```typescript
public readonly SearchSampleQueries: string;
```

- *Type:* string

[Read] cloudtrail:SearchSampleQueries.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDashboardRefresh`<sup>Required</sup> <a name="StartDashboardRefresh" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.StartDashboardRefresh"></a>

```typescript
public readonly StartDashboardRefresh: string;
```

- *Type:* string

[Write] cloudtrail:StartDashboardRefresh.

---

##### `StartEventDataStoreIngestion`<sup>Required</sup> <a name="StartEventDataStoreIngestion" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.StartEventDataStoreIngestion"></a>

```typescript
public readonly StartEventDataStoreIngestion: string;
```

- *Type:* string

[Write] cloudtrail:StartEventDataStoreIngestion.

---

##### `StartImport`<sup>Required</sup> <a name="StartImport" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.StartImport"></a>

```typescript
public readonly StartImport: string;
```

- *Type:* string

[Write] cloudtrail:StartImport.

---

##### `StartLogging`<sup>Required</sup> <a name="StartLogging" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.StartLogging"></a>

```typescript
public readonly StartLogging: string;
```

- *Type:* string

[Write] cloudtrail:StartLogging.

---

##### `StartQuery`<sup>Required</sup> <a name="StartQuery" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.StartQuery"></a>

```typescript
public readonly StartQuery: string;
```

- *Type:* string

[Write] cloudtrail:StartQuery.

---

##### `StopEventDataStoreIngestion`<sup>Required</sup> <a name="StopEventDataStoreIngestion" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.StopEventDataStoreIngestion"></a>

```typescript
public readonly StopEventDataStoreIngestion: string;
```

- *Type:* string

[Write] cloudtrail:StopEventDataStoreIngestion.

---

##### `StopImport`<sup>Required</sup> <a name="StopImport" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.StopImport"></a>

```typescript
public readonly StopImport: string;
```

- *Type:* string

[Write] cloudtrail:StopImport.

---

##### `StopLogging`<sup>Required</sup> <a name="StopLogging" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.StopLogging"></a>

```typescript
public readonly StopLogging: string;
```

- *Type:* string

[Write] cloudtrail:StopLogging.

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.UpdateChannel"></a>

```typescript
public readonly UpdateChannel: string;
```

- *Type:* string

[Write] cloudtrail:UpdateChannel.

---

##### `UpdateDashboard`<sup>Required</sup> <a name="UpdateDashboard" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.UpdateDashboard"></a>

```typescript
public readonly UpdateDashboard: string;
```

- *Type:* string

[Write] cloudtrail:UpdateDashboard.

---

##### `UpdateEventDataStore`<sup>Required</sup> <a name="UpdateEventDataStore" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.UpdateEventDataStore"></a>

```typescript
public readonly UpdateEventDataStore: string;
```

- *Type:* string

[Write] cloudtrail:UpdateEventDataStore.

---

##### `UpdateServiceLinkedChannel`<sup>Required</sup> <a name="UpdateServiceLinkedChannel" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.UpdateServiceLinkedChannel"></a>

```typescript
public readonly UpdateServiceLinkedChannel: string;
```

- *Type:* string

[Write] cloudtrail:UpdateServiceLinkedChannel.

---

##### `UpdateTrail`<sup>Required</sup> <a name="UpdateTrail" id="@cdk_utils/iam.cloudtrail.CloudTrailActions.property.UpdateTrail"></a>

```typescript
public readonly UpdateTrail: string;
```

- *Type:* string

[Write] cloudtrail:UpdateTrail.

---

### CloudTrailConditions <a name="CloudTrailConditions" id="@cdk_utils/iam.cloudtrail.CloudTrailConditions"></a>

Condition key constants and builders for cloudtrail.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudtrail.CloudTrailConditions.Initializer"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

new cloudtrail.CloudTrailConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.cloudtrail.CloudTrailConditions.requestTag"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

cloudtrail.CloudTrailConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudtrail.CloudTrailConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.cloudtrail.CloudTrailConditions.resourceTag"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

cloudtrail.CloudTrailConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudtrail.CloudTrailConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.cloudtrail.CloudTrailConditions.tagKeys"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

cloudtrail.CloudTrailConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cloudtrail.CloudTrailConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailConditions.property.AddTagsConditionKeys">AddTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddTags action. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailConditions.property.CreateChannelConditionKeys">CreateChannelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChannel action. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailConditions.property.CreateDashboardConditionKeys">CreateDashboardConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDashboard action. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailConditions.property.CreateEventDataStoreConditionKeys">CreateEventDataStoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEventDataStore action. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailConditions.property.CreateTrailConditionKeys">CreateTrailConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTrail action. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailConditions.property.RemoveTagsConditionKeys">RemoveTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoveTags action. |

---

##### `AddTagsConditionKeys`<sup>Required</sup> <a name="AddTagsConditionKeys" id="@cdk_utils/iam.cloudtrail.CloudTrailConditions.property.AddTagsConditionKeys"></a>

```typescript
public readonly AddTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddTags action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.cloudtrail.CloudTrailConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.cloudtrail.CloudTrailConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.cloudtrail.CloudTrailConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateChannelConditionKeys`<sup>Required</sup> <a name="CreateChannelConditionKeys" id="@cdk_utils/iam.cloudtrail.CloudTrailConditions.property.CreateChannelConditionKeys"></a>

```typescript
public readonly CreateChannelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChannel action.

---

##### `CreateDashboardConditionKeys`<sup>Required</sup> <a name="CreateDashboardConditionKeys" id="@cdk_utils/iam.cloudtrail.CloudTrailConditions.property.CreateDashboardConditionKeys"></a>

```typescript
public readonly CreateDashboardConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDashboard action.

---

##### `CreateEventDataStoreConditionKeys`<sup>Required</sup> <a name="CreateEventDataStoreConditionKeys" id="@cdk_utils/iam.cloudtrail.CloudTrailConditions.property.CreateEventDataStoreConditionKeys"></a>

```typescript
public readonly CreateEventDataStoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEventDataStore action.

---

##### `CreateTrailConditionKeys`<sup>Required</sup> <a name="CreateTrailConditionKeys" id="@cdk_utils/iam.cloudtrail.CloudTrailConditions.property.CreateTrailConditionKeys"></a>

```typescript
public readonly CreateTrailConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTrail action.

---

##### `RemoveTagsConditionKeys`<sup>Required</sup> <a name="RemoveTagsConditionKeys" id="@cdk_utils/iam.cloudtrail.CloudTrailConditions.property.RemoveTagsConditionKeys"></a>

```typescript
public readonly RemoveTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoveTags action.

---

### CloudTrailOperations <a name="CloudTrailOperations" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations"></a>

API operation to required IAM actions mapping for cloudtrail.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.Initializer"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

new cloudtrail.CloudTrailOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.AddTags">AddTags</a></code> | <code>string[]</code> | IAM actions required for the AddTags API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.CancelQuery">CancelQuery</a></code> | <code>string[]</code> | IAM actions required for the CancelQuery API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.CreateChannel">CreateChannel</a></code> | <code>string[]</code> | IAM actions required for the CreateChannel API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.CreateDashboard">CreateDashboard</a></code> | <code>string[]</code> | IAM actions required for the CreateDashboard API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.CreateEventDataStore">CreateEventDataStore</a></code> | <code>string[]</code> | IAM actions required for the CreateEventDataStore API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.CreateTrail">CreateTrail</a></code> | <code>string[]</code> | IAM actions required for the CreateTrail API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.DeleteChannel">DeleteChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteChannel API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.DeleteDashboard">DeleteDashboard</a></code> | <code>string[]</code> | IAM actions required for the DeleteDashboard API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.DeleteEventDataStore">DeleteEventDataStore</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventDataStore API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.DeleteTrail">DeleteTrail</a></code> | <code>string[]</code> | IAM actions required for the DeleteTrail API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.DeregisterOrganizationDelegatedAdmin">DeregisterOrganizationDelegatedAdmin</a></code> | <code>string[]</code> | IAM actions required for the DeregisterOrganizationDelegatedAdmin API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.DescribeQuery">DescribeQuery</a></code> | <code>string[]</code> | IAM actions required for the DescribeQuery API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.DescribeTrails">DescribeTrails</a></code> | <code>string[]</code> | IAM actions required for the DescribeTrails API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.DisableFederation">DisableFederation</a></code> | <code>string[]</code> | IAM actions required for the DisableFederation API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.EnableFederation">EnableFederation</a></code> | <code>string[]</code> | IAM actions required for the EnableFederation API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.GenerateQuery">GenerateQuery</a></code> | <code>string[]</code> | IAM actions required for the GenerateQuery API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListChannels">ListChannels</a></code> | <code>string[]</code> | IAM actions required for the ListChannels API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListDashboards">ListDashboards</a></code> | <code>string[]</code> | IAM actions required for the ListDashboards API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListEventDataStores">ListEventDataStores</a></code> | <code>string[]</code> | IAM actions required for the ListEventDataStores API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListImportFailures">ListImportFailures</a></code> | <code>string[]</code> | IAM actions required for the ListImportFailures API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListImports">ListImports</a></code> | <code>string[]</code> | IAM actions required for the ListImports API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListInsightsData">ListInsightsData</a></code> | <code>string[]</code> | IAM actions required for the ListInsightsData API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListInsightsMetricData">ListInsightsMetricData</a></code> | <code>string[]</code> | IAM actions required for the ListInsightsMetricData API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListPublicKeys">ListPublicKeys</a></code> | <code>string[]</code> | IAM actions required for the ListPublicKeys API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListQueries">ListQueries</a></code> | <code>string[]</code> | IAM actions required for the ListQueries API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListTags">ListTags</a></code> | <code>string[]</code> | IAM actions required for the ListTags API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListTrails">ListTrails</a></code> | <code>string[]</code> | IAM actions required for the ListTrails API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.LookupEvents">LookupEvents</a></code> | <code>string[]</code> | IAM actions required for the LookupEvents API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetChannel">opGetChannel</a></code> | <code>string[]</code> | IAM actions required for the GetChannel API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetDashboard">opGetDashboard</a></code> | <code>string[]</code> | IAM actions required for the GetDashboard API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetEventConfiguration">opGetEventConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetEventConfiguration API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetEventDataStore">opGetEventDataStore</a></code> | <code>string[]</code> | IAM actions required for the GetEventDataStore API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetEventSelectors">opGetEventSelectors</a></code> | <code>string[]</code> | IAM actions required for the GetEventSelectors API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetImport">opGetImport</a></code> | <code>string[]</code> | IAM actions required for the GetImport API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetInsightSelectors">opGetInsightSelectors</a></code> | <code>string[]</code> | IAM actions required for the GetInsightSelectors API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetQueryResults">opGetQueryResults</a></code> | <code>string[]</code> | IAM actions required for the GetQueryResults API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetTrail">opGetTrail</a></code> | <code>string[]</code> | IAM actions required for the GetTrail API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetTrailStatus">opGetTrailStatus</a></code> | <code>string[]</code> | IAM actions required for the GetTrailStatus API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.PutEventConfiguration">PutEventConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutEventConfiguration API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.PutEventSelectors">PutEventSelectors</a></code> | <code>string[]</code> | IAM actions required for the PutEventSelectors API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.PutInsightSelectors">PutInsightSelectors</a></code> | <code>string[]</code> | IAM actions required for the PutInsightSelectors API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.RegisterOrganizationDelegatedAdmin">RegisterOrganizationDelegatedAdmin</a></code> | <code>string[]</code> | IAM actions required for the RegisterOrganizationDelegatedAdmin API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.RemoveTags">RemoveTags</a></code> | <code>string[]</code> | IAM actions required for the RemoveTags API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.RestoreEventDataStore">RestoreEventDataStore</a></code> | <code>string[]</code> | IAM actions required for the RestoreEventDataStore API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.SearchSampleQueries">SearchSampleQueries</a></code> | <code>string[]</code> | IAM actions required for the SearchSampleQueries API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.StartDashboardRefresh">StartDashboardRefresh</a></code> | <code>string[]</code> | IAM actions required for the StartDashboardRefresh API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.StartEventDataStoreIngestion">StartEventDataStoreIngestion</a></code> | <code>string[]</code> | IAM actions required for the StartEventDataStoreIngestion API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.StartImport">StartImport</a></code> | <code>string[]</code> | IAM actions required for the StartImport API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.StartLogging">StartLogging</a></code> | <code>string[]</code> | IAM actions required for the StartLogging API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.StartQuery">StartQuery</a></code> | <code>string[]</code> | IAM actions required for the StartQuery API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.StopEventDataStoreIngestion">StopEventDataStoreIngestion</a></code> | <code>string[]</code> | IAM actions required for the StopEventDataStoreIngestion API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.StopImport">StopImport</a></code> | <code>string[]</code> | IAM actions required for the StopImport API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.StopLogging">StopLogging</a></code> | <code>string[]</code> | IAM actions required for the StopLogging API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.UpdateChannel">UpdateChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateChannel API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.UpdateDashboard">UpdateDashboard</a></code> | <code>string[]</code> | IAM actions required for the UpdateDashboard API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.UpdateEventDataStore">UpdateEventDataStore</a></code> | <code>string[]</code> | IAM actions required for the UpdateEventDataStore API call. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.UpdateTrail">UpdateTrail</a></code> | <code>string[]</code> | IAM actions required for the UpdateTrail API call. |

---

##### `AddTags`<sup>Required</sup> <a name="AddTags" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.AddTags"></a>

```typescript
public readonly AddTags: string[];
```

- *Type:* string[]

IAM actions required for the AddTags API call.

---

##### `CancelQuery`<sup>Required</sup> <a name="CancelQuery" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.CancelQuery"></a>

```typescript
public readonly CancelQuery: string[];
```

- *Type:* string[]

IAM actions required for the CancelQuery API call.

---

##### `CreateChannel`<sup>Required</sup> <a name="CreateChannel" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.CreateChannel"></a>

```typescript
public readonly CreateChannel: string[];
```

- *Type:* string[]

IAM actions required for the CreateChannel API call.

---

##### `CreateDashboard`<sup>Required</sup> <a name="CreateDashboard" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.CreateDashboard"></a>

```typescript
public readonly CreateDashboard: string[];
```

- *Type:* string[]

IAM actions required for the CreateDashboard API call.

---

##### `CreateEventDataStore`<sup>Required</sup> <a name="CreateEventDataStore" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.CreateEventDataStore"></a>

```typescript
public readonly CreateEventDataStore: string[];
```

- *Type:* string[]

IAM actions required for the CreateEventDataStore API call.

---

##### `CreateTrail`<sup>Required</sup> <a name="CreateTrail" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.CreateTrail"></a>

```typescript
public readonly CreateTrail: string[];
```

- *Type:* string[]

IAM actions required for the CreateTrail API call.

---

##### `DeleteChannel`<sup>Required</sup> <a name="DeleteChannel" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.DeleteChannel"></a>

```typescript
public readonly DeleteChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChannel API call.

---

##### `DeleteDashboard`<sup>Required</sup> <a name="DeleteDashboard" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.DeleteDashboard"></a>

```typescript
public readonly DeleteDashboard: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDashboard API call.

---

##### `DeleteEventDataStore`<sup>Required</sup> <a name="DeleteEventDataStore" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.DeleteEventDataStore"></a>

```typescript
public readonly DeleteEventDataStore: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventDataStore API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteTrail`<sup>Required</sup> <a name="DeleteTrail" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.DeleteTrail"></a>

```typescript
public readonly DeleteTrail: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTrail API call.

---

##### `DeregisterOrganizationDelegatedAdmin`<sup>Required</sup> <a name="DeregisterOrganizationDelegatedAdmin" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.DeregisterOrganizationDelegatedAdmin"></a>

```typescript
public readonly DeregisterOrganizationDelegatedAdmin: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterOrganizationDelegatedAdmin API call.

---

##### `DescribeQuery`<sup>Required</sup> <a name="DescribeQuery" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.DescribeQuery"></a>

```typescript
public readonly DescribeQuery: string[];
```

- *Type:* string[]

IAM actions required for the DescribeQuery API call.

---

##### `DescribeTrails`<sup>Required</sup> <a name="DescribeTrails" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.DescribeTrails"></a>

```typescript
public readonly DescribeTrails: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTrails API call.

---

##### `DisableFederation`<sup>Required</sup> <a name="DisableFederation" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.DisableFederation"></a>

```typescript
public readonly DisableFederation: string[];
```

- *Type:* string[]

IAM actions required for the DisableFederation API call.

---

##### `EnableFederation`<sup>Required</sup> <a name="EnableFederation" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.EnableFederation"></a>

```typescript
public readonly EnableFederation: string[];
```

- *Type:* string[]

IAM actions required for the EnableFederation API call.

---

##### `GenerateQuery`<sup>Required</sup> <a name="GenerateQuery" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.GenerateQuery"></a>

```typescript
public readonly GenerateQuery: string[];
```

- *Type:* string[]

IAM actions required for the GenerateQuery API call.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListChannels"></a>

```typescript
public readonly ListChannels: string[];
```

- *Type:* string[]

IAM actions required for the ListChannels API call.

---

##### `ListDashboards`<sup>Required</sup> <a name="ListDashboards" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListDashboards"></a>

```typescript
public readonly ListDashboards: string[];
```

- *Type:* string[]

IAM actions required for the ListDashboards API call.

---

##### `ListEventDataStores`<sup>Required</sup> <a name="ListEventDataStores" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListEventDataStores"></a>

```typescript
public readonly ListEventDataStores: string[];
```

- *Type:* string[]

IAM actions required for the ListEventDataStores API call.

---

##### `ListImportFailures`<sup>Required</sup> <a name="ListImportFailures" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListImportFailures"></a>

```typescript
public readonly ListImportFailures: string[];
```

- *Type:* string[]

IAM actions required for the ListImportFailures API call.

---

##### `ListImports`<sup>Required</sup> <a name="ListImports" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListImports"></a>

```typescript
public readonly ListImports: string[];
```

- *Type:* string[]

IAM actions required for the ListImports API call.

---

##### `ListInsightsData`<sup>Required</sup> <a name="ListInsightsData" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListInsightsData"></a>

```typescript
public readonly ListInsightsData: string[];
```

- *Type:* string[]

IAM actions required for the ListInsightsData API call.

---

##### `ListInsightsMetricData`<sup>Required</sup> <a name="ListInsightsMetricData" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListInsightsMetricData"></a>

```typescript
public readonly ListInsightsMetricData: string[];
```

- *Type:* string[]

IAM actions required for the ListInsightsMetricData API call.

---

##### `ListPublicKeys`<sup>Required</sup> <a name="ListPublicKeys" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListPublicKeys"></a>

```typescript
public readonly ListPublicKeys: string[];
```

- *Type:* string[]

IAM actions required for the ListPublicKeys API call.

---

##### `ListQueries`<sup>Required</sup> <a name="ListQueries" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListQueries"></a>

```typescript
public readonly ListQueries: string[];
```

- *Type:* string[]

IAM actions required for the ListQueries API call.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListTags"></a>

```typescript
public readonly ListTags: string[];
```

- *Type:* string[]

IAM actions required for the ListTags API call.

---

##### `ListTrails`<sup>Required</sup> <a name="ListTrails" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.ListTrails"></a>

```typescript
public readonly ListTrails: string[];
```

- *Type:* string[]

IAM actions required for the ListTrails API call.

---

##### `LookupEvents`<sup>Required</sup> <a name="LookupEvents" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.LookupEvents"></a>

```typescript
public readonly LookupEvents: string[];
```

- *Type:* string[]

IAM actions required for the LookupEvents API call.

---

##### `opGetChannel`<sup>Required</sup> <a name="opGetChannel" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetChannel"></a>

```typescript
public readonly opGetChannel: string[];
```

- *Type:* string[]

IAM actions required for the GetChannel API call.

---

##### `opGetDashboard`<sup>Required</sup> <a name="opGetDashboard" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetDashboard"></a>

```typescript
public readonly opGetDashboard: string[];
```

- *Type:* string[]

IAM actions required for the GetDashboard API call.

---

##### `opGetEventConfiguration`<sup>Required</sup> <a name="opGetEventConfiguration" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetEventConfiguration"></a>

```typescript
public readonly opGetEventConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetEventConfiguration API call.

---

##### `opGetEventDataStore`<sup>Required</sup> <a name="opGetEventDataStore" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetEventDataStore"></a>

```typescript
public readonly opGetEventDataStore: string[];
```

- *Type:* string[]

IAM actions required for the GetEventDataStore API call.

---

##### `opGetEventSelectors`<sup>Required</sup> <a name="opGetEventSelectors" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetEventSelectors"></a>

```typescript
public readonly opGetEventSelectors: string[];
```

- *Type:* string[]

IAM actions required for the GetEventSelectors API call.

---

##### `opGetImport`<sup>Required</sup> <a name="opGetImport" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetImport"></a>

```typescript
public readonly opGetImport: string[];
```

- *Type:* string[]

IAM actions required for the GetImport API call.

---

##### `opGetInsightSelectors`<sup>Required</sup> <a name="opGetInsightSelectors" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetInsightSelectors"></a>

```typescript
public readonly opGetInsightSelectors: string[];
```

- *Type:* string[]

IAM actions required for the GetInsightSelectors API call.

---

##### `opGetQueryResults`<sup>Required</sup> <a name="opGetQueryResults" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetQueryResults"></a>

```typescript
public readonly opGetQueryResults: string[];
```

- *Type:* string[]

IAM actions required for the GetQueryResults API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `opGetTrail`<sup>Required</sup> <a name="opGetTrail" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetTrail"></a>

```typescript
public readonly opGetTrail: string[];
```

- *Type:* string[]

IAM actions required for the GetTrail API call.

---

##### `opGetTrailStatus`<sup>Required</sup> <a name="opGetTrailStatus" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.opGetTrailStatus"></a>

```typescript
public readonly opGetTrailStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetTrailStatus API call.

---

##### `PutEventConfiguration`<sup>Required</sup> <a name="PutEventConfiguration" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.PutEventConfiguration"></a>

```typescript
public readonly PutEventConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutEventConfiguration API call.

---

##### `PutEventSelectors`<sup>Required</sup> <a name="PutEventSelectors" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.PutEventSelectors"></a>

```typescript
public readonly PutEventSelectors: string[];
```

- *Type:* string[]

IAM actions required for the PutEventSelectors API call.

---

##### `PutInsightSelectors`<sup>Required</sup> <a name="PutInsightSelectors" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.PutInsightSelectors"></a>

```typescript
public readonly PutInsightSelectors: string[];
```

- *Type:* string[]

IAM actions required for the PutInsightSelectors API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `RegisterOrganizationDelegatedAdmin`<sup>Required</sup> <a name="RegisterOrganizationDelegatedAdmin" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.RegisterOrganizationDelegatedAdmin"></a>

```typescript
public readonly RegisterOrganizationDelegatedAdmin: string[];
```

- *Type:* string[]

IAM actions required for the RegisterOrganizationDelegatedAdmin API call.

---

##### `RemoveTags`<sup>Required</sup> <a name="RemoveTags" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.RemoveTags"></a>

```typescript
public readonly RemoveTags: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTags API call.

---

##### `RestoreEventDataStore`<sup>Required</sup> <a name="RestoreEventDataStore" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.RestoreEventDataStore"></a>

```typescript
public readonly RestoreEventDataStore: string[];
```

- *Type:* string[]

IAM actions required for the RestoreEventDataStore API call.

---

##### `SearchSampleQueries`<sup>Required</sup> <a name="SearchSampleQueries" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.SearchSampleQueries"></a>

```typescript
public readonly SearchSampleQueries: string[];
```

- *Type:* string[]

IAM actions required for the SearchSampleQueries API call.

---

##### `StartDashboardRefresh`<sup>Required</sup> <a name="StartDashboardRefresh" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.StartDashboardRefresh"></a>

```typescript
public readonly StartDashboardRefresh: string[];
```

- *Type:* string[]

IAM actions required for the StartDashboardRefresh API call.

---

##### `StartEventDataStoreIngestion`<sup>Required</sup> <a name="StartEventDataStoreIngestion" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.StartEventDataStoreIngestion"></a>

```typescript
public readonly StartEventDataStoreIngestion: string[];
```

- *Type:* string[]

IAM actions required for the StartEventDataStoreIngestion API call.

---

##### `StartImport`<sup>Required</sup> <a name="StartImport" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.StartImport"></a>

```typescript
public readonly StartImport: string[];
```

- *Type:* string[]

IAM actions required for the StartImport API call.

---

##### `StartLogging`<sup>Required</sup> <a name="StartLogging" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.StartLogging"></a>

```typescript
public readonly StartLogging: string[];
```

- *Type:* string[]

IAM actions required for the StartLogging API call.

---

##### `StartQuery`<sup>Required</sup> <a name="StartQuery" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.StartQuery"></a>

```typescript
public readonly StartQuery: string[];
```

- *Type:* string[]

IAM actions required for the StartQuery API call.

---

##### `StopEventDataStoreIngestion`<sup>Required</sup> <a name="StopEventDataStoreIngestion" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.StopEventDataStoreIngestion"></a>

```typescript
public readonly StopEventDataStoreIngestion: string[];
```

- *Type:* string[]

IAM actions required for the StopEventDataStoreIngestion API call.

---

##### `StopImport`<sup>Required</sup> <a name="StopImport" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.StopImport"></a>

```typescript
public readonly StopImport: string[];
```

- *Type:* string[]

IAM actions required for the StopImport API call.

---

##### `StopLogging`<sup>Required</sup> <a name="StopLogging" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.StopLogging"></a>

```typescript
public readonly StopLogging: string[];
```

- *Type:* string[]

IAM actions required for the StopLogging API call.

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.UpdateChannel"></a>

```typescript
public readonly UpdateChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChannel API call.

---

##### `UpdateDashboard`<sup>Required</sup> <a name="UpdateDashboard" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.UpdateDashboard"></a>

```typescript
public readonly UpdateDashboard: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDashboard API call.

---

##### `UpdateEventDataStore`<sup>Required</sup> <a name="UpdateEventDataStore" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.UpdateEventDataStore"></a>

```typescript
public readonly UpdateEventDataStore: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEventDataStore API call.

---

##### `UpdateTrail`<sup>Required</sup> <a name="UpdateTrail" id="@cdk_utils/iam.cloudtrail.CloudTrailOperations.property.UpdateTrail"></a>

```typescript
public readonly UpdateTrail: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTrail API call.

---

### CloudTrailResources <a name="CloudTrailResources" id="@cdk_utils/iam.cloudtrail.CloudTrailResources"></a>

ARN builders, validators, and parsers for cloudtrail resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.Initializer"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

new cloudtrail.CloudTrailResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailResources.channel">channel</a></code> | Builds an ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailResources.dashboard">dashboard</a></code> | Builds an ARN for the dashboard resource. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailResources.eventdatastore">eventdatastore</a></code> | Builds an ARN for the eventdatastore resource. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailResources.isValidChannelArn">isValidChannelArn</a></code> | Validates whether a string is a valid ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailResources.isValidDashboardArn">isValidDashboardArn</a></code> | Validates whether a string is a valid ARN for the dashboard resource. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailResources.isValidEventdatastoreArn">isValidEventdatastoreArn</a></code> | Validates whether a string is a valid ARN for the eventdatastore resource. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailResources.isValidTrailArn">isValidTrailArn</a></code> | Validates whether a string is a valid ARN for the trail resource. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailResources.parseChannelArn">parseChannelArn</a></code> | Parses a channel ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailResources.parseDashboardArn">parseDashboardArn</a></code> | Parses a dashboard ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailResources.parseEventdatastoreArn">parseEventdatastoreArn</a></code> | Parses a eventdatastore ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailResources.parseTrailArn">parseTrailArn</a></code> | Parses a trail ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudtrail.CloudTrailResources.trail">trail</a></code> | Builds an ARN for the trail resource. |

---

##### `channel` <a name="channel" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.channel"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

cloudtrail.CloudTrailResources.channel(props: CloudTrailChannelArnProps)
```

Builds an ARN for the channel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.channel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudtrail.CloudTrailChannelArnProps">CloudTrailChannelArnProps</a>

---

##### `dashboard` <a name="dashboard" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.dashboard"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

cloudtrail.CloudTrailResources.dashboard(props: CloudTrailDashboardArnProps)
```

Builds an ARN for the dashboard resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.dashboard.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudtrail.CloudTrailDashboardArnProps">CloudTrailDashboardArnProps</a>

---

##### `eventdatastore` <a name="eventdatastore" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.eventdatastore"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

cloudtrail.CloudTrailResources.eventdatastore(props: CloudTrailEventdatastoreArnProps)
```

Builds an ARN for the eventdatastore resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.eventdatastore.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudtrail.CloudTrailEventdatastoreArnProps">CloudTrailEventdatastoreArnProps</a>

---

##### `isValidChannelArn` <a name="isValidChannelArn" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.isValidChannelArn"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

cloudtrail.CloudTrailResources.isValidChannelArn(arn: string)
```

Validates whether a string is a valid ARN for the channel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.isValidChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDashboardArn` <a name="isValidDashboardArn" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.isValidDashboardArn"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

cloudtrail.CloudTrailResources.isValidDashboardArn(arn: string)
```

Validates whether a string is a valid ARN for the dashboard resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.isValidDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEventdatastoreArn` <a name="isValidEventdatastoreArn" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.isValidEventdatastoreArn"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

cloudtrail.CloudTrailResources.isValidEventdatastoreArn(arn: string)
```

Validates whether a string is a valid ARN for the eventdatastore resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.isValidEventdatastoreArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTrailArn` <a name="isValidTrailArn" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.isValidTrailArn"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

cloudtrail.CloudTrailResources.isValidTrailArn(arn: string)
```

Validates whether a string is a valid ARN for the trail resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.isValidTrailArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChannelArn` <a name="parseChannelArn" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.parseChannelArn"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

cloudtrail.CloudTrailResources.parseChannelArn(arn: string)
```

Parses a channel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.parseChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDashboardArn` <a name="parseDashboardArn" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.parseDashboardArn"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

cloudtrail.CloudTrailResources.parseDashboardArn(arn: string)
```

Parses a dashboard ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.parseDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventdatastoreArn` <a name="parseEventdatastoreArn" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.parseEventdatastoreArn"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

cloudtrail.CloudTrailResources.parseEventdatastoreArn(arn: string)
```

Parses a eventdatastore ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.parseEventdatastoreArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTrailArn` <a name="parseTrailArn" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.parseTrailArn"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

cloudtrail.CloudTrailResources.parseTrailArn(arn: string)
```

Parses a trail ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.parseTrailArn.parameter.arn"></a>

- *Type:* string

---

##### `trail` <a name="trail" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.trail"></a>

```typescript
import { cloudtrail } from '@cdk_utils/iam'

cloudtrail.CloudTrailResources.trail(props: CloudTrailTrailArnProps)
```

Builds an ARN for the trail resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudtrail.CloudTrailResources.trail.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudtrail.CloudTrailTrailArnProps">CloudTrailTrailArnProps</a>

---




