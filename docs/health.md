# `health` Submodule <a name="`health` Submodule" id="@cdk_utils/iam.health"></a>


## Structs <a name="Structs" id="Structs"></a>

### HealthEventArnComponents <a name="HealthEventArnComponents" id="@cdk_utils/iam.health.HealthEventArnComponents"></a>

Parsed components of a event ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.health.HealthEventArnComponents.Initializer"></a>

```typescript
import { health } from '@cdk_utils/iam'

const healthEventArnComponents: health.HealthEventArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health.HealthEventArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.health.HealthEventArnComponents.property.eventTypeCode">eventTypeCode</a></code> | <code>string</code> | The EventTypeCode component. |
| <code><a href="#@cdk_utils/iam.health.HealthEventArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.health.HealthEventArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.health.HealthEventArnComponents.property.service">service</a></code> | <code>string</code> | The Service component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.health.HealthEventArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `eventTypeCode`<sup>Required</sup> <a name="eventTypeCode" id="@cdk_utils/iam.health.HealthEventArnComponents.property.eventTypeCode"></a>

```typescript
public readonly eventTypeCode: string;
```

- *Type:* string

The EventTypeCode component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.health.HealthEventArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.health.HealthEventArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdk_utils/iam.health.HealthEventArnComponents.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The Service component.

---

### HealthEventArnProps <a name="HealthEventArnProps" id="@cdk_utils/iam.health.HealthEventArnProps"></a>

Properties for building a event ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.health.HealthEventArnProps.Initializer"></a>

```typescript
import { health } from '@cdk_utils/iam'

const healthEventArnProps: health.HealthEventArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health.HealthEventArnProps.property.eventTypeCode">eventTypeCode</a></code> | <code>string</code> | The EventTypeCode component of the ARN. |
| <code><a href="#@cdk_utils/iam.health.HealthEventArnProps.property.service">service</a></code> | <code>string</code> | The Service component of the ARN. |
| <code><a href="#@cdk_utils/iam.health.HealthEventArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.health.HealthEventArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.health.HealthEventArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `eventTypeCode`<sup>Required</sup> <a name="eventTypeCode" id="@cdk_utils/iam.health.HealthEventArnProps.property.eventTypeCode"></a>

```typescript
public readonly eventTypeCode: string;
```

- *Type:* string

The EventTypeCode component of the ARN.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdk_utils/iam.health.HealthEventArnProps.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The Service component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.health.HealthEventArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.health.HealthEventArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.health.HealthEventArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### HealthActions <a name="HealthActions" id="@cdk_utils/iam.health.HealthActions"></a>

IAM action constants for the health service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.health.HealthActions.Initializer"></a>

```typescript
import { health } from '@cdk_utils/iam'

new health.HealthActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.DescribeAffectedAccountsForOrganization">DescribeAffectedAccountsForOrganization</a></code> | <code>string</code> | [Read] health:DescribeAffectedAccountsForOrganization. |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.DescribeAffectedEntities">DescribeAffectedEntities</a></code> | <code>string</code> | [Read] health:DescribeAffectedEntities. |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.DescribeAffectedEntitiesForOrganization">DescribeAffectedEntitiesForOrganization</a></code> | <code>string</code> | [Read] health:DescribeAffectedEntitiesForOrganization. |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.DescribeEntityAggregates">DescribeEntityAggregates</a></code> | <code>string</code> | [Read] health:DescribeEntityAggregates. |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.DescribeEntityAggregatesForOrganization">DescribeEntityAggregatesForOrganization</a></code> | <code>string</code> | [Read] health:DescribeEntityAggregatesForOrganization. |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.DescribeEventAggregates">DescribeEventAggregates</a></code> | <code>string</code> | [Read] health:DescribeEventAggregates. |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.DescribeEventDetails">DescribeEventDetails</a></code> | <code>string</code> | [Read] health:DescribeEventDetails. |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.DescribeEventDetailsForOrganization">DescribeEventDetailsForOrganization</a></code> | <code>string</code> | [Read] health:DescribeEventDetailsForOrganization. |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.DescribeEvents">DescribeEvents</a></code> | <code>string</code> | [Read] health:DescribeEvents. |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.DescribeEventsForOrganization">DescribeEventsForOrganization</a></code> | <code>string</code> | [Read] health:DescribeEventsForOrganization. |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.DescribeEventTypes">DescribeEventTypes</a></code> | <code>string</code> | [Read] health:DescribeEventTypes. |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.DescribeHealthServiceStatusForOrganization">DescribeHealthServiceStatusForOrganization</a></code> | <code>string</code> | [Read] health:DescribeHealthServiceStatusForOrganization. |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.DisableHealthServiceAccessForOrganization">DisableHealthServiceAccessForOrganization</a></code> | <code>string</code> | [PermissionManagement] health:DisableHealthServiceAccessForOrganization. |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.EnableHealthServiceAccessForOrganization">EnableHealthServiceAccessForOrganization</a></code> | <code>string</code> | [PermissionManagement] health:EnableHealthServiceAccessForOrganization. |
| <code><a href="#@cdk_utils/iam.health.HealthActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.health.HealthActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.health.HealthActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.health.HealthActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.health.HealthActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.health.HealthActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `DescribeAffectedAccountsForOrganization`<sup>Required</sup> <a name="DescribeAffectedAccountsForOrganization" id="@cdk_utils/iam.health.HealthActions.property.DescribeAffectedAccountsForOrganization"></a>

```typescript
public readonly DescribeAffectedAccountsForOrganization: string;
```

- *Type:* string

[Read] health:DescribeAffectedAccountsForOrganization.

---

##### `DescribeAffectedEntities`<sup>Required</sup> <a name="DescribeAffectedEntities" id="@cdk_utils/iam.health.HealthActions.property.DescribeAffectedEntities"></a>

```typescript
public readonly DescribeAffectedEntities: string;
```

- *Type:* string

[Read] health:DescribeAffectedEntities.

---

##### `DescribeAffectedEntitiesForOrganization`<sup>Required</sup> <a name="DescribeAffectedEntitiesForOrganization" id="@cdk_utils/iam.health.HealthActions.property.DescribeAffectedEntitiesForOrganization"></a>

```typescript
public readonly DescribeAffectedEntitiesForOrganization: string;
```

- *Type:* string

[Read] health:DescribeAffectedEntitiesForOrganization.

---

##### `DescribeEntityAggregates`<sup>Required</sup> <a name="DescribeEntityAggregates" id="@cdk_utils/iam.health.HealthActions.property.DescribeEntityAggregates"></a>

```typescript
public readonly DescribeEntityAggregates: string;
```

- *Type:* string

[Read] health:DescribeEntityAggregates.

---

##### `DescribeEntityAggregatesForOrganization`<sup>Required</sup> <a name="DescribeEntityAggregatesForOrganization" id="@cdk_utils/iam.health.HealthActions.property.DescribeEntityAggregatesForOrganization"></a>

```typescript
public readonly DescribeEntityAggregatesForOrganization: string;
```

- *Type:* string

[Read] health:DescribeEntityAggregatesForOrganization.

---

##### `DescribeEventAggregates`<sup>Required</sup> <a name="DescribeEventAggregates" id="@cdk_utils/iam.health.HealthActions.property.DescribeEventAggregates"></a>

```typescript
public readonly DescribeEventAggregates: string;
```

- *Type:* string

[Read] health:DescribeEventAggregates.

---

##### `DescribeEventDetails`<sup>Required</sup> <a name="DescribeEventDetails" id="@cdk_utils/iam.health.HealthActions.property.DescribeEventDetails"></a>

```typescript
public readonly DescribeEventDetails: string;
```

- *Type:* string

[Read] health:DescribeEventDetails.

---

##### `DescribeEventDetailsForOrganization`<sup>Required</sup> <a name="DescribeEventDetailsForOrganization" id="@cdk_utils/iam.health.HealthActions.property.DescribeEventDetailsForOrganization"></a>

```typescript
public readonly DescribeEventDetailsForOrganization: string;
```

- *Type:* string

[Read] health:DescribeEventDetailsForOrganization.

---

##### `DescribeEvents`<sup>Required</sup> <a name="DescribeEvents" id="@cdk_utils/iam.health.HealthActions.property.DescribeEvents"></a>

```typescript
public readonly DescribeEvents: string;
```

- *Type:* string

[Read] health:DescribeEvents.

---

##### `DescribeEventsForOrganization`<sup>Required</sup> <a name="DescribeEventsForOrganization" id="@cdk_utils/iam.health.HealthActions.property.DescribeEventsForOrganization"></a>

```typescript
public readonly DescribeEventsForOrganization: string;
```

- *Type:* string

[Read] health:DescribeEventsForOrganization.

---

##### `DescribeEventTypes`<sup>Required</sup> <a name="DescribeEventTypes" id="@cdk_utils/iam.health.HealthActions.property.DescribeEventTypes"></a>

```typescript
public readonly DescribeEventTypes: string;
```

- *Type:* string

[Read] health:DescribeEventTypes.

---

##### `DescribeHealthServiceStatusForOrganization`<sup>Required</sup> <a name="DescribeHealthServiceStatusForOrganization" id="@cdk_utils/iam.health.HealthActions.property.DescribeHealthServiceStatusForOrganization"></a>

```typescript
public readonly DescribeHealthServiceStatusForOrganization: string;
```

- *Type:* string

[Read] health:DescribeHealthServiceStatusForOrganization.

---

##### `DisableHealthServiceAccessForOrganization`<sup>Required</sup> <a name="DisableHealthServiceAccessForOrganization" id="@cdk_utils/iam.health.HealthActions.property.DisableHealthServiceAccessForOrganization"></a>

```typescript
public readonly DisableHealthServiceAccessForOrganization: string;
```

- *Type:* string

[PermissionManagement] health:DisableHealthServiceAccessForOrganization.

---

##### `EnableHealthServiceAccessForOrganization`<sup>Required</sup> <a name="EnableHealthServiceAccessForOrganization" id="@cdk_utils/iam.health.HealthActions.property.EnableHealthServiceAccessForOrganization"></a>

```typescript
public readonly EnableHealthServiceAccessForOrganization: string;
```

- *Type:* string

[PermissionManagement] health:EnableHealthServiceAccessForOrganization.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.health.HealthActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### HealthConditions <a name="HealthConditions" id="@cdk_utils/iam.health.HealthConditions"></a>

Condition key constants and builders for health.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.health.HealthConditions.Initializer"></a>

```typescript
import { health } from '@cdk_utils/iam'

new health.HealthConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.health.HealthConditions.eventTypeCode">eventTypeCode</a></code> | Generates a condition block for `health:eventTypeCode`. |
| <code><a href="#@cdk_utils/iam.health.HealthConditions.service">service</a></code> | Generates a condition block for `health:service`. |

---

##### `eventTypeCode` <a name="eventTypeCode" id="@cdk_utils/iam.health.HealthConditions.eventTypeCode"></a>

```typescript
import { health } from '@cdk_utils/iam'

health.HealthConditions.eventTypeCode(value: string)
```

Generates a condition block for `health:eventTypeCode`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.health.HealthConditions.eventTypeCode.parameter.value"></a>

- *Type:* string

---

##### `service` <a name="service" id="@cdk_utils/iam.health.HealthConditions.service"></a>

```typescript
import { health } from '@cdk_utils/iam'

health.HealthConditions.service(value: string)
```

Generates a condition block for `health:service`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.health.HealthConditions.service.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health.HealthConditions.property.DescribeAffectedEntitiesConditionKeys">DescribeAffectedEntitiesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeAffectedEntities action. |
| <code><a href="#@cdk_utils/iam.health.HealthConditions.property.DescribeEventDetailsConditionKeys">DescribeEventDetailsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeEventDetails action. |
| <code><a href="#@cdk_utils/iam.health.HealthConditions.property.EVENT_TYPE_CODE">EVENT_TYPE_CODE</a></code> | <code>string</code> | Condition key: health:eventTypeCode (String). |
| <code><a href="#@cdk_utils/iam.health.HealthConditions.property.SERVICE">SERVICE</a></code> | <code>string</code> | Condition key: health:service (String). |

---

##### `DescribeAffectedEntitiesConditionKeys`<sup>Required</sup> <a name="DescribeAffectedEntitiesConditionKeys" id="@cdk_utils/iam.health.HealthConditions.property.DescribeAffectedEntitiesConditionKeys"></a>

```typescript
public readonly DescribeAffectedEntitiesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeAffectedEntities action.

---

##### `DescribeEventDetailsConditionKeys`<sup>Required</sup> <a name="DescribeEventDetailsConditionKeys" id="@cdk_utils/iam.health.HealthConditions.property.DescribeEventDetailsConditionKeys"></a>

```typescript
public readonly DescribeEventDetailsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeEventDetails action.

---

##### `EVENT_TYPE_CODE`<sup>Required</sup> <a name="EVENT_TYPE_CODE" id="@cdk_utils/iam.health.HealthConditions.property.EVENT_TYPE_CODE"></a>

```typescript
public readonly EVENT_TYPE_CODE: string;
```

- *Type:* string

Condition key: health:eventTypeCode (String).

---

##### `SERVICE`<sup>Required</sup> <a name="SERVICE" id="@cdk_utils/iam.health.HealthConditions.property.SERVICE"></a>

```typescript
public readonly SERVICE: string;
```

- *Type:* string

Condition key: health:service (String).

---

### HealthOperations <a name="HealthOperations" id="@cdk_utils/iam.health.HealthOperations"></a>

API operation to required IAM actions mapping for health.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.health.HealthOperations.Initializer"></a>

```typescript
import { health } from '@cdk_utils/iam'

new health.HealthOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health.HealthOperations.property.DescribeAffectedAccountsForOrganization">DescribeAffectedAccountsForOrganization</a></code> | <code>string[]</code> | IAM actions required for the DescribeAffectedAccountsForOrganization API call. |
| <code><a href="#@cdk_utils/iam.health.HealthOperations.property.DescribeAffectedEntities">DescribeAffectedEntities</a></code> | <code>string[]</code> | IAM actions required for the DescribeAffectedEntities API call. |
| <code><a href="#@cdk_utils/iam.health.HealthOperations.property.DescribeAffectedEntitiesForOrganization">DescribeAffectedEntitiesForOrganization</a></code> | <code>string[]</code> | IAM actions required for the DescribeAffectedEntitiesForOrganization API call. |
| <code><a href="#@cdk_utils/iam.health.HealthOperations.property.DescribeEntityAggregates">DescribeEntityAggregates</a></code> | <code>string[]</code> | IAM actions required for the DescribeEntityAggregates API call. |
| <code><a href="#@cdk_utils/iam.health.HealthOperations.property.DescribeEntityAggregatesForOrganization">DescribeEntityAggregatesForOrganization</a></code> | <code>string[]</code> | IAM actions required for the DescribeEntityAggregatesForOrganization API call. |
| <code><a href="#@cdk_utils/iam.health.HealthOperations.property.DescribeEventAggregates">DescribeEventAggregates</a></code> | <code>string[]</code> | IAM actions required for the DescribeEventAggregates API call. |
| <code><a href="#@cdk_utils/iam.health.HealthOperations.property.DescribeEventDetails">DescribeEventDetails</a></code> | <code>string[]</code> | IAM actions required for the DescribeEventDetails API call. |
| <code><a href="#@cdk_utils/iam.health.HealthOperations.property.DescribeEventDetailsForOrganization">DescribeEventDetailsForOrganization</a></code> | <code>string[]</code> | IAM actions required for the DescribeEventDetailsForOrganization API call. |
| <code><a href="#@cdk_utils/iam.health.HealthOperations.property.DescribeEvents">DescribeEvents</a></code> | <code>string[]</code> | IAM actions required for the DescribeEvents API call. |
| <code><a href="#@cdk_utils/iam.health.HealthOperations.property.DescribeEventsForOrganization">DescribeEventsForOrganization</a></code> | <code>string[]</code> | IAM actions required for the DescribeEventsForOrganization API call. |
| <code><a href="#@cdk_utils/iam.health.HealthOperations.property.DescribeEventTypes">DescribeEventTypes</a></code> | <code>string[]</code> | IAM actions required for the DescribeEventTypes API call. |
| <code><a href="#@cdk_utils/iam.health.HealthOperations.property.DescribeHealthServiceStatusForOrganization">DescribeHealthServiceStatusForOrganization</a></code> | <code>string[]</code> | IAM actions required for the DescribeHealthServiceStatusForOrganization API call. |
| <code><a href="#@cdk_utils/iam.health.HealthOperations.property.DisableHealthServiceAccessForOrganization">DisableHealthServiceAccessForOrganization</a></code> | <code>string[]</code> | IAM actions required for the DisableHealthServiceAccessForOrganization API call. |
| <code><a href="#@cdk_utils/iam.health.HealthOperations.property.EnableHealthServiceAccessForOrganization">EnableHealthServiceAccessForOrganization</a></code> | <code>string[]</code> | IAM actions required for the EnableHealthServiceAccessForOrganization API call. |

---

##### `DescribeAffectedAccountsForOrganization`<sup>Required</sup> <a name="DescribeAffectedAccountsForOrganization" id="@cdk_utils/iam.health.HealthOperations.property.DescribeAffectedAccountsForOrganization"></a>

```typescript
public readonly DescribeAffectedAccountsForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAffectedAccountsForOrganization API call.

---

##### `DescribeAffectedEntities`<sup>Required</sup> <a name="DescribeAffectedEntities" id="@cdk_utils/iam.health.HealthOperations.property.DescribeAffectedEntities"></a>

```typescript
public readonly DescribeAffectedEntities: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAffectedEntities API call.

---

##### `DescribeAffectedEntitiesForOrganization`<sup>Required</sup> <a name="DescribeAffectedEntitiesForOrganization" id="@cdk_utils/iam.health.HealthOperations.property.DescribeAffectedEntitiesForOrganization"></a>

```typescript
public readonly DescribeAffectedEntitiesForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAffectedEntitiesForOrganization API call.

---

##### `DescribeEntityAggregates`<sup>Required</sup> <a name="DescribeEntityAggregates" id="@cdk_utils/iam.health.HealthOperations.property.DescribeEntityAggregates"></a>

```typescript
public readonly DescribeEntityAggregates: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEntityAggregates API call.

---

##### `DescribeEntityAggregatesForOrganization`<sup>Required</sup> <a name="DescribeEntityAggregatesForOrganization" id="@cdk_utils/iam.health.HealthOperations.property.DescribeEntityAggregatesForOrganization"></a>

```typescript
public readonly DescribeEntityAggregatesForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEntityAggregatesForOrganization API call.

---

##### `DescribeEventAggregates`<sup>Required</sup> <a name="DescribeEventAggregates" id="@cdk_utils/iam.health.HealthOperations.property.DescribeEventAggregates"></a>

```typescript
public readonly DescribeEventAggregates: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEventAggregates API call.

---

##### `DescribeEventDetails`<sup>Required</sup> <a name="DescribeEventDetails" id="@cdk_utils/iam.health.HealthOperations.property.DescribeEventDetails"></a>

```typescript
public readonly DescribeEventDetails: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEventDetails API call.

---

##### `DescribeEventDetailsForOrganization`<sup>Required</sup> <a name="DescribeEventDetailsForOrganization" id="@cdk_utils/iam.health.HealthOperations.property.DescribeEventDetailsForOrganization"></a>

```typescript
public readonly DescribeEventDetailsForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEventDetailsForOrganization API call.

---

##### `DescribeEvents`<sup>Required</sup> <a name="DescribeEvents" id="@cdk_utils/iam.health.HealthOperations.property.DescribeEvents"></a>

```typescript
public readonly DescribeEvents: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEvents API call.

---

##### `DescribeEventsForOrganization`<sup>Required</sup> <a name="DescribeEventsForOrganization" id="@cdk_utils/iam.health.HealthOperations.property.DescribeEventsForOrganization"></a>

```typescript
public readonly DescribeEventsForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEventsForOrganization API call.

---

##### `DescribeEventTypes`<sup>Required</sup> <a name="DescribeEventTypes" id="@cdk_utils/iam.health.HealthOperations.property.DescribeEventTypes"></a>

```typescript
public readonly DescribeEventTypes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEventTypes API call.

---

##### `DescribeHealthServiceStatusForOrganization`<sup>Required</sup> <a name="DescribeHealthServiceStatusForOrganization" id="@cdk_utils/iam.health.HealthOperations.property.DescribeHealthServiceStatusForOrganization"></a>

```typescript
public readonly DescribeHealthServiceStatusForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the DescribeHealthServiceStatusForOrganization API call.

---

##### `DisableHealthServiceAccessForOrganization`<sup>Required</sup> <a name="DisableHealthServiceAccessForOrganization" id="@cdk_utils/iam.health.HealthOperations.property.DisableHealthServiceAccessForOrganization"></a>

```typescript
public readonly DisableHealthServiceAccessForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the DisableHealthServiceAccessForOrganization API call.

---

##### `EnableHealthServiceAccessForOrganization`<sup>Required</sup> <a name="EnableHealthServiceAccessForOrganization" id="@cdk_utils/iam.health.HealthOperations.property.EnableHealthServiceAccessForOrganization"></a>

```typescript
public readonly EnableHealthServiceAccessForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the EnableHealthServiceAccessForOrganization API call.

---

### HealthResources <a name="HealthResources" id="@cdk_utils/iam.health.HealthResources"></a>

ARN builders, validators, and parsers for health resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.health.HealthResources.Initializer"></a>

```typescript
import { health } from '@cdk_utils/iam'

new health.HealthResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.health.HealthResources.event">event</a></code> | Builds an ARN for the event resource. |
| <code><a href="#@cdk_utils/iam.health.HealthResources.isValidEventArn">isValidEventArn</a></code> | Validates whether a string is a valid ARN for the event resource. |
| <code><a href="#@cdk_utils/iam.health.HealthResources.parseEventArn">parseEventArn</a></code> | Parses a event ARN into its components. |

---

##### `event` <a name="event" id="@cdk_utils/iam.health.HealthResources.event"></a>

```typescript
import { health } from '@cdk_utils/iam'

health.HealthResources.event(props: HealthEventArnProps)
```

Builds an ARN for the event resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.health.HealthResources.event.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.health.HealthEventArnProps">HealthEventArnProps</a>

---

##### `isValidEventArn` <a name="isValidEventArn" id="@cdk_utils/iam.health.HealthResources.isValidEventArn"></a>

```typescript
import { health } from '@cdk_utils/iam'

health.HealthResources.isValidEventArn(arn: string)
```

Validates whether a string is a valid ARN for the event resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.health.HealthResources.isValidEventArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventArn` <a name="parseEventArn" id="@cdk_utils/iam.health.HealthResources.parseEventArn"></a>

```typescript
import { health } from '@cdk_utils/iam'

health.HealthResources.parseEventArn(arn: string)
```

Parses a event ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.health.HealthResources.parseEventArn.parameter.arn"></a>

- *Type:* string

---




