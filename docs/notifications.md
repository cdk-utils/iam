# `notifications` Submodule <a name="`notifications` Submodule" id="@cdk_utils/iam.notifications"></a>


## Structs <a name="Structs" id="Structs"></a>

### NotificationsEventRuleArnComponents <a name="NotificationsEventRuleArnComponents" id="@cdk_utils/iam.notifications.NotificationsEventRuleArnComponents"></a>

Parsed components of a EventRule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.notifications.NotificationsEventRuleArnComponents.Initializer"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

const notificationsEventRuleArnComponents: notifications.NotificationsEventRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsEventRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsEventRuleArnComponents.property.eventRuleId">eventRuleId</a></code> | <code>string</code> | The EventRuleId component. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsEventRuleArnComponents.property.notificationConfigurationId">notificationConfigurationId</a></code> | <code>string</code> | The NotificationConfigurationId component. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsEventRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.notifications.NotificationsEventRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `eventRuleId`<sup>Required</sup> <a name="eventRuleId" id="@cdk_utils/iam.notifications.NotificationsEventRuleArnComponents.property.eventRuleId"></a>

```typescript
public readonly eventRuleId: string;
```

- *Type:* string

The EventRuleId component.

---

##### `notificationConfigurationId`<sup>Required</sup> <a name="notificationConfigurationId" id="@cdk_utils/iam.notifications.NotificationsEventRuleArnComponents.property.notificationConfigurationId"></a>

```typescript
public readonly notificationConfigurationId: string;
```

- *Type:* string

The NotificationConfigurationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.notifications.NotificationsEventRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### NotificationsEventRuleArnProps <a name="NotificationsEventRuleArnProps" id="@cdk_utils/iam.notifications.NotificationsEventRuleArnProps"></a>

Properties for building a EventRule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.notifications.NotificationsEventRuleArnProps.Initializer"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

const notificationsEventRuleArnProps: notifications.NotificationsEventRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsEventRuleArnProps.property.eventRuleId">eventRuleId</a></code> | <code>string</code> | The EventRuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsEventRuleArnProps.property.notificationConfigurationId">notificationConfigurationId</a></code> | <code>string</code> | The NotificationConfigurationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsEventRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsEventRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `eventRuleId`<sup>Required</sup> <a name="eventRuleId" id="@cdk_utils/iam.notifications.NotificationsEventRuleArnProps.property.eventRuleId"></a>

```typescript
public readonly eventRuleId: string;
```

- *Type:* string

The EventRuleId component of the ARN.

---

##### `notificationConfigurationId`<sup>Required</sup> <a name="notificationConfigurationId" id="@cdk_utils/iam.notifications.NotificationsEventRuleArnProps.property.notificationConfigurationId"></a>

```typescript
public readonly notificationConfigurationId: string;
```

- *Type:* string

The NotificationConfigurationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.notifications.NotificationsEventRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.notifications.NotificationsEventRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### NotificationsManagedNotificationChildEventArnComponents <a name="NotificationsManagedNotificationChildEventArnComponents" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnComponents"></a>

Parsed components of a ManagedNotificationChildEvent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnComponents.Initializer"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

const notificationsManagedNotificationChildEventArnComponents: notifications.NotificationsManagedNotificationChildEventArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnComponents.property.category">category</a></code> | <code>string</code> | The Category component. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnComponents.property.notificationChildEventId">notificationChildEventId</a></code> | <code>string</code> | The NotificationChildEventId component. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnComponents.property.notificationEventId">notificationEventId</a></code> | <code>string</code> | The NotificationEventId component. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnComponents.property.subcategory">subcategory</a></code> | <code>string</code> | The Subcategory component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `category`<sup>Required</sup> <a name="category" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnComponents.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

The Category component.

---

##### `notificationChildEventId`<sup>Required</sup> <a name="notificationChildEventId" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnComponents.property.notificationChildEventId"></a>

```typescript
public readonly notificationChildEventId: string;
```

- *Type:* string

The NotificationChildEventId component.

---

##### `notificationEventId`<sup>Required</sup> <a name="notificationEventId" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnComponents.property.notificationEventId"></a>

```typescript
public readonly notificationEventId: string;
```

- *Type:* string

The NotificationEventId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `subcategory`<sup>Required</sup> <a name="subcategory" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnComponents.property.subcategory"></a>

```typescript
public readonly subcategory: string;
```

- *Type:* string

The Subcategory component.

---

### NotificationsManagedNotificationChildEventArnProps <a name="NotificationsManagedNotificationChildEventArnProps" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnProps"></a>

Properties for building a ManagedNotificationChildEvent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnProps.Initializer"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

const notificationsManagedNotificationChildEventArnProps: notifications.NotificationsManagedNotificationChildEventArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnProps.property.category">category</a></code> | <code>string</code> | The Category component of the ARN. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnProps.property.notificationChildEventId">notificationChildEventId</a></code> | <code>string</code> | The NotificationChildEventId component of the ARN. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnProps.property.notificationEventId">notificationEventId</a></code> | <code>string</code> | The NotificationEventId component of the ARN. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnProps.property.subcategory">subcategory</a></code> | <code>string</code> | The Subcategory component of the ARN. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnProps.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

The Category component of the ARN.

---

##### `notificationChildEventId`<sup>Required</sup> <a name="notificationChildEventId" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnProps.property.notificationChildEventId"></a>

```typescript
public readonly notificationChildEventId: string;
```

- *Type:* string

The NotificationChildEventId component of the ARN.

---

##### `notificationEventId`<sup>Required</sup> <a name="notificationEventId" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnProps.property.notificationEventId"></a>

```typescript
public readonly notificationEventId: string;
```

- *Type:* string

The NotificationEventId component of the ARN.

---

##### `subcategory`<sup>Required</sup> <a name="subcategory" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnProps.property.subcategory"></a>

```typescript
public readonly subcategory: string;
```

- *Type:* string

The Subcategory component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### NotificationsManagedNotificationConfigurationArnComponents <a name="NotificationsManagedNotificationConfigurationArnComponents" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnComponents"></a>

Parsed components of a ManagedNotificationConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnComponents.Initializer"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

const notificationsManagedNotificationConfigurationArnComponents: notifications.NotificationsManagedNotificationConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnComponents.property.category">category</a></code> | <code>string</code> | The Category component. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnComponents.property.subcategory">subcategory</a></code> | <code>string</code> | The Subcategory component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `category`<sup>Required</sup> <a name="category" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnComponents.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

The Category component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `subcategory`<sup>Required</sup> <a name="subcategory" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnComponents.property.subcategory"></a>

```typescript
public readonly subcategory: string;
```

- *Type:* string

The Subcategory component.

---

### NotificationsManagedNotificationConfigurationArnProps <a name="NotificationsManagedNotificationConfigurationArnProps" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnProps"></a>

Properties for building a ManagedNotificationConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnProps.Initializer"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

const notificationsManagedNotificationConfigurationArnProps: notifications.NotificationsManagedNotificationConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnProps.property.category">category</a></code> | <code>string</code> | The Category component of the ARN. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnProps.property.subcategory">subcategory</a></code> | <code>string</code> | The Subcategory component of the ARN. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnProps.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

The Category component of the ARN.

---

##### `subcategory`<sup>Required</sup> <a name="subcategory" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnProps.property.subcategory"></a>

```typescript
public readonly subcategory: string;
```

- *Type:* string

The Subcategory component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### NotificationsManagedNotificationEventArnComponents <a name="NotificationsManagedNotificationEventArnComponents" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnComponents"></a>

Parsed components of a ManagedNotificationEvent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnComponents.Initializer"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

const notificationsManagedNotificationEventArnComponents: notifications.NotificationsManagedNotificationEventArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnComponents.property.category">category</a></code> | <code>string</code> | The Category component. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnComponents.property.notificationEventId">notificationEventId</a></code> | <code>string</code> | The NotificationEventId component. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnComponents.property.subcategory">subcategory</a></code> | <code>string</code> | The Subcategory component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `category`<sup>Required</sup> <a name="category" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnComponents.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

The Category component.

---

##### `notificationEventId`<sup>Required</sup> <a name="notificationEventId" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnComponents.property.notificationEventId"></a>

```typescript
public readonly notificationEventId: string;
```

- *Type:* string

The NotificationEventId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `subcategory`<sup>Required</sup> <a name="subcategory" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnComponents.property.subcategory"></a>

```typescript
public readonly subcategory: string;
```

- *Type:* string

The Subcategory component.

---

### NotificationsManagedNotificationEventArnProps <a name="NotificationsManagedNotificationEventArnProps" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnProps"></a>

Properties for building a ManagedNotificationEvent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnProps.Initializer"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

const notificationsManagedNotificationEventArnProps: notifications.NotificationsManagedNotificationEventArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnProps.property.category">category</a></code> | <code>string</code> | The Category component of the ARN. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnProps.property.notificationEventId">notificationEventId</a></code> | <code>string</code> | The NotificationEventId component of the ARN. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnProps.property.subcategory">subcategory</a></code> | <code>string</code> | The Subcategory component of the ARN. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnProps.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

The Category component of the ARN.

---

##### `notificationEventId`<sup>Required</sup> <a name="notificationEventId" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnProps.property.notificationEventId"></a>

```typescript
public readonly notificationEventId: string;
```

- *Type:* string

The NotificationEventId component of the ARN.

---

##### `subcategory`<sup>Required</sup> <a name="subcategory" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnProps.property.subcategory"></a>

```typescript
public readonly subcategory: string;
```

- *Type:* string

The Subcategory component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### NotificationsNotificationConfigurationArnComponents <a name="NotificationsNotificationConfigurationArnComponents" id="@cdk_utils/iam.notifications.NotificationsNotificationConfigurationArnComponents"></a>

Parsed components of a NotificationConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.notifications.NotificationsNotificationConfigurationArnComponents.Initializer"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

const notificationsNotificationConfigurationArnComponents: notifications.NotificationsNotificationConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsNotificationConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsNotificationConfigurationArnComponents.property.notificationConfigurationId">notificationConfigurationId</a></code> | <code>string</code> | The NotificationConfigurationId component. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsNotificationConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.notifications.NotificationsNotificationConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `notificationConfigurationId`<sup>Required</sup> <a name="notificationConfigurationId" id="@cdk_utils/iam.notifications.NotificationsNotificationConfigurationArnComponents.property.notificationConfigurationId"></a>

```typescript
public readonly notificationConfigurationId: string;
```

- *Type:* string

The NotificationConfigurationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.notifications.NotificationsNotificationConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### NotificationsNotificationConfigurationArnProps <a name="NotificationsNotificationConfigurationArnProps" id="@cdk_utils/iam.notifications.NotificationsNotificationConfigurationArnProps"></a>

Properties for building a NotificationConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.notifications.NotificationsNotificationConfigurationArnProps.Initializer"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

const notificationsNotificationConfigurationArnProps: notifications.NotificationsNotificationConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsNotificationConfigurationArnProps.property.notificationConfigurationId">notificationConfigurationId</a></code> | <code>string</code> | The NotificationConfigurationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsNotificationConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsNotificationConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `notificationConfigurationId`<sup>Required</sup> <a name="notificationConfigurationId" id="@cdk_utils/iam.notifications.NotificationsNotificationConfigurationArnProps.property.notificationConfigurationId"></a>

```typescript
public readonly notificationConfigurationId: string;
```

- *Type:* string

The NotificationConfigurationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.notifications.NotificationsNotificationConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.notifications.NotificationsNotificationConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### NotificationsNotificationEventArnComponents <a name="NotificationsNotificationEventArnComponents" id="@cdk_utils/iam.notifications.NotificationsNotificationEventArnComponents"></a>

Parsed components of a NotificationEvent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.notifications.NotificationsNotificationEventArnComponents.Initializer"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

const notificationsNotificationEventArnComponents: notifications.NotificationsNotificationEventArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsNotificationEventArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsNotificationEventArnComponents.property.notificationConfigurationId">notificationConfigurationId</a></code> | <code>string</code> | The NotificationConfigurationId component. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsNotificationEventArnComponents.property.notificationEventId">notificationEventId</a></code> | <code>string</code> | The NotificationEventId component. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsNotificationEventArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsNotificationEventArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.notifications.NotificationsNotificationEventArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `notificationConfigurationId`<sup>Required</sup> <a name="notificationConfigurationId" id="@cdk_utils/iam.notifications.NotificationsNotificationEventArnComponents.property.notificationConfigurationId"></a>

```typescript
public readonly notificationConfigurationId: string;
```

- *Type:* string

The NotificationConfigurationId component.

---

##### `notificationEventId`<sup>Required</sup> <a name="notificationEventId" id="@cdk_utils/iam.notifications.NotificationsNotificationEventArnComponents.property.notificationEventId"></a>

```typescript
public readonly notificationEventId: string;
```

- *Type:* string

The NotificationEventId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.notifications.NotificationsNotificationEventArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.notifications.NotificationsNotificationEventArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NotificationsNotificationEventArnProps <a name="NotificationsNotificationEventArnProps" id="@cdk_utils/iam.notifications.NotificationsNotificationEventArnProps"></a>

Properties for building a NotificationEvent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.notifications.NotificationsNotificationEventArnProps.Initializer"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

const notificationsNotificationEventArnProps: notifications.NotificationsNotificationEventArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsNotificationEventArnProps.property.notificationConfigurationId">notificationConfigurationId</a></code> | <code>string</code> | The NotificationConfigurationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsNotificationEventArnProps.property.notificationEventId">notificationEventId</a></code> | <code>string</code> | The NotificationEventId component of the ARN. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsNotificationEventArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsNotificationEventArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsNotificationEventArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `notificationConfigurationId`<sup>Required</sup> <a name="notificationConfigurationId" id="@cdk_utils/iam.notifications.NotificationsNotificationEventArnProps.property.notificationConfigurationId"></a>

```typescript
public readonly notificationConfigurationId: string;
```

- *Type:* string

The NotificationConfigurationId component of the ARN.

---

##### `notificationEventId`<sup>Required</sup> <a name="notificationEventId" id="@cdk_utils/iam.notifications.NotificationsNotificationEventArnProps.property.notificationEventId"></a>

```typescript
public readonly notificationEventId: string;
```

- *Type:* string

The NotificationEventId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.notifications.NotificationsNotificationEventArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.notifications.NotificationsNotificationEventArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.notifications.NotificationsNotificationEventArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationsActions <a name="NotificationsActions" id="@cdk_utils/iam.notifications.NotificationsActions"></a>

IAM action constants for the notifications service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.notifications.NotificationsActions.Initializer"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

new notifications.NotificationsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.actionGetEventRule">actionGetEventRule</a></code> | <code>string</code> | [Read] notifications:GetEventRule. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.actionGetFeatureOptInStatus">actionGetFeatureOptInStatus</a></code> | <code>string</code> | [Read] notifications:GetFeatureOptInStatus. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.actionGetManagedNotificationChildEvent">actionGetManagedNotificationChildEvent</a></code> | <code>string</code> | [Read] notifications:GetManagedNotificationChildEvent. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.actionGetManagedNotificationConfiguration">actionGetManagedNotificationConfiguration</a></code> | <code>string</code> | [Read] notifications:GetManagedNotificationConfiguration. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.actionGetManagedNotificationEvent">actionGetManagedNotificationEvent</a></code> | <code>string</code> | [Read] notifications:GetManagedNotificationEvent. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.actionGetNotificationConfiguration">actionGetNotificationConfiguration</a></code> | <code>string</code> | [Read] notifications:GetNotificationConfiguration. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.actionGetNotificationEvent">actionGetNotificationEvent</a></code> | <code>string</code> | [Read] notifications:GetNotificationEvent. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.actionGetNotificationsAccessForOrganization">actionGetNotificationsAccessForOrganization</a></code> | <code>string</code> | [Read] notifications:GetNotificationsAccessForOrganization. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.AssociateChannel">AssociateChannel</a></code> | <code>string</code> | [Write] notifications:AssociateChannel. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.AssociateManagedNotificationAccountContact">AssociateManagedNotificationAccountContact</a></code> | <code>string</code> | [Write] notifications:AssociateManagedNotificationAccountContact. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.AssociateManagedNotificationAdditionalChannel">AssociateManagedNotificationAdditionalChannel</a></code> | <code>string</code> | [Write] notifications:AssociateManagedNotificationAdditionalChannel. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.AssociateOrganizationalUnit">AssociateOrganizationalUnit</a></code> | <code>string</code> | [Write] notifications:AssociateOrganizationalUnit. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.CreateEventRule">CreateEventRule</a></code> | <code>string</code> | [Write] notifications:CreateEventRule. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.CreateNotificationConfiguration">CreateNotificationConfiguration</a></code> | <code>string</code> | [Write] notifications:CreateNotificationConfiguration. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.DeleteEventRule">DeleteEventRule</a></code> | <code>string</code> | [Write] notifications:DeleteEventRule. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.DeleteNotificationConfiguration">DeleteNotificationConfiguration</a></code> | <code>string</code> | [Write] notifications:DeleteNotificationConfiguration. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.DeregisterNotificationHub">DeregisterNotificationHub</a></code> | <code>string</code> | [Write] notifications:DeregisterNotificationHub. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.DisableNotificationsAccessForOrganization">DisableNotificationsAccessForOrganization</a></code> | <code>string</code> | [PermissionManagement] notifications:DisableNotificationsAccessForOrganization. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.DisassociateChannel">DisassociateChannel</a></code> | <code>string</code> | [Write] notifications:DisassociateChannel. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.DisassociateManagedNotificationAccountContact">DisassociateManagedNotificationAccountContact</a></code> | <code>string</code> | [Write] notifications:DisassociateManagedNotificationAccountContact. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.DisassociateManagedNotificationAdditionalChannel">DisassociateManagedNotificationAdditionalChannel</a></code> | <code>string</code> | [Write] notifications:DisassociateManagedNotificationAdditionalChannel. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.DisassociateOrganizationalUnit">DisassociateOrganizationalUnit</a></code> | <code>string</code> | [Write] notifications:DisassociateOrganizationalUnit. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.EnableNotificationsAccessForOrganization">EnableNotificationsAccessForOrganization</a></code> | <code>string</code> | [PermissionManagement] notifications:EnableNotificationsAccessForOrganization. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.ListChannels">ListChannels</a></code> | <code>string</code> | [List] notifications:ListChannels. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.ListEventRules">ListEventRules</a></code> | <code>string</code> | [List] notifications:ListEventRules. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.ListManagedNotificationChannelAssociations">ListManagedNotificationChannelAssociations</a></code> | <code>string</code> | [List] notifications:ListManagedNotificationChannelAssociations. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.ListManagedNotificationChildEvents">ListManagedNotificationChildEvents</a></code> | <code>string</code> | [List] notifications:ListManagedNotificationChildEvents. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.ListManagedNotificationConfigurations">ListManagedNotificationConfigurations</a></code> | <code>string</code> | [List] notifications:ListManagedNotificationConfigurations. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.ListManagedNotificationEvents">ListManagedNotificationEvents</a></code> | <code>string</code> | [List] notifications:ListManagedNotificationEvents. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.ListMemberAccounts">ListMemberAccounts</a></code> | <code>string</code> | [List] notifications:ListMemberAccounts. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.ListNotificationConfigurations">ListNotificationConfigurations</a></code> | <code>string</code> | [List] notifications:ListNotificationConfigurations. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.ListNotificationEvents">ListNotificationEvents</a></code> | <code>string</code> | [List] notifications:ListNotificationEvents. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.ListNotificationHubs">ListNotificationHubs</a></code> | <code>string</code> | [List] notifications:ListNotificationHubs. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.ListOrganizationalUnits">ListOrganizationalUnits</a></code> | <code>string</code> | [List] notifications:ListOrganizationalUnits. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] notifications:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.PutFeatureOptInStatus">PutFeatureOptInStatus</a></code> | <code>string</code> | [Write] notifications:PutFeatureOptInStatus. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.RegisterNotificationHub">RegisterNotificationHub</a></code> | <code>string</code> | [Write] notifications:RegisterNotificationHub. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] notifications:TagResource. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] notifications:UntagResource. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.UpdateEventRule">UpdateEventRule</a></code> | <code>string</code> | [Write] notifications:UpdateEventRule. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsActions.property.UpdateNotificationConfiguration">UpdateNotificationConfiguration</a></code> | <code>string</code> | [Write] notifications:UpdateNotificationConfiguration. |

---

##### `actionGetEventRule`<sup>Required</sup> <a name="actionGetEventRule" id="@cdk_utils/iam.notifications.NotificationsActions.property.actionGetEventRule"></a>

```typescript
public readonly actionGetEventRule: string;
```

- *Type:* string

[Read] notifications:GetEventRule.

---

##### `actionGetFeatureOptInStatus`<sup>Required</sup> <a name="actionGetFeatureOptInStatus" id="@cdk_utils/iam.notifications.NotificationsActions.property.actionGetFeatureOptInStatus"></a>

```typescript
public readonly actionGetFeatureOptInStatus: string;
```

- *Type:* string

[Read] notifications:GetFeatureOptInStatus.

---

##### `actionGetManagedNotificationChildEvent`<sup>Required</sup> <a name="actionGetManagedNotificationChildEvent" id="@cdk_utils/iam.notifications.NotificationsActions.property.actionGetManagedNotificationChildEvent"></a>

```typescript
public readonly actionGetManagedNotificationChildEvent: string;
```

- *Type:* string

[Read] notifications:GetManagedNotificationChildEvent.

---

##### `actionGetManagedNotificationConfiguration`<sup>Required</sup> <a name="actionGetManagedNotificationConfiguration" id="@cdk_utils/iam.notifications.NotificationsActions.property.actionGetManagedNotificationConfiguration"></a>

```typescript
public readonly actionGetManagedNotificationConfiguration: string;
```

- *Type:* string

[Read] notifications:GetManagedNotificationConfiguration.

---

##### `actionGetManagedNotificationEvent`<sup>Required</sup> <a name="actionGetManagedNotificationEvent" id="@cdk_utils/iam.notifications.NotificationsActions.property.actionGetManagedNotificationEvent"></a>

```typescript
public readonly actionGetManagedNotificationEvent: string;
```

- *Type:* string

[Read] notifications:GetManagedNotificationEvent.

---

##### `actionGetNotificationConfiguration`<sup>Required</sup> <a name="actionGetNotificationConfiguration" id="@cdk_utils/iam.notifications.NotificationsActions.property.actionGetNotificationConfiguration"></a>

```typescript
public readonly actionGetNotificationConfiguration: string;
```

- *Type:* string

[Read] notifications:GetNotificationConfiguration.

---

##### `actionGetNotificationEvent`<sup>Required</sup> <a name="actionGetNotificationEvent" id="@cdk_utils/iam.notifications.NotificationsActions.property.actionGetNotificationEvent"></a>

```typescript
public readonly actionGetNotificationEvent: string;
```

- *Type:* string

[Read] notifications:GetNotificationEvent.

---

##### `actionGetNotificationsAccessForOrganization`<sup>Required</sup> <a name="actionGetNotificationsAccessForOrganization" id="@cdk_utils/iam.notifications.NotificationsActions.property.actionGetNotificationsAccessForOrganization"></a>

```typescript
public readonly actionGetNotificationsAccessForOrganization: string;
```

- *Type:* string

[Read] notifications:GetNotificationsAccessForOrganization.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.notifications.NotificationsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.notifications.NotificationsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.notifications.NotificationsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.notifications.NotificationsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.notifications.NotificationsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateChannel`<sup>Required</sup> <a name="AssociateChannel" id="@cdk_utils/iam.notifications.NotificationsActions.property.AssociateChannel"></a>

```typescript
public readonly AssociateChannel: string;
```

- *Type:* string

[Write] notifications:AssociateChannel.

---

##### `AssociateManagedNotificationAccountContact`<sup>Required</sup> <a name="AssociateManagedNotificationAccountContact" id="@cdk_utils/iam.notifications.NotificationsActions.property.AssociateManagedNotificationAccountContact"></a>

```typescript
public readonly AssociateManagedNotificationAccountContact: string;
```

- *Type:* string

[Write] notifications:AssociateManagedNotificationAccountContact.

---

##### `AssociateManagedNotificationAdditionalChannel`<sup>Required</sup> <a name="AssociateManagedNotificationAdditionalChannel" id="@cdk_utils/iam.notifications.NotificationsActions.property.AssociateManagedNotificationAdditionalChannel"></a>

```typescript
public readonly AssociateManagedNotificationAdditionalChannel: string;
```

- *Type:* string

[Write] notifications:AssociateManagedNotificationAdditionalChannel.

---

##### `AssociateOrganizationalUnit`<sup>Required</sup> <a name="AssociateOrganizationalUnit" id="@cdk_utils/iam.notifications.NotificationsActions.property.AssociateOrganizationalUnit"></a>

```typescript
public readonly AssociateOrganizationalUnit: string;
```

- *Type:* string

[Write] notifications:AssociateOrganizationalUnit.

---

##### `CreateEventRule`<sup>Required</sup> <a name="CreateEventRule" id="@cdk_utils/iam.notifications.NotificationsActions.property.CreateEventRule"></a>

```typescript
public readonly CreateEventRule: string;
```

- *Type:* string

[Write] notifications:CreateEventRule.

---

##### `CreateNotificationConfiguration`<sup>Required</sup> <a name="CreateNotificationConfiguration" id="@cdk_utils/iam.notifications.NotificationsActions.property.CreateNotificationConfiguration"></a>

```typescript
public readonly CreateNotificationConfiguration: string;
```

- *Type:* string

[Write] notifications:CreateNotificationConfiguration.

---

##### `DeleteEventRule`<sup>Required</sup> <a name="DeleteEventRule" id="@cdk_utils/iam.notifications.NotificationsActions.property.DeleteEventRule"></a>

```typescript
public readonly DeleteEventRule: string;
```

- *Type:* string

[Write] notifications:DeleteEventRule.

---

##### `DeleteNotificationConfiguration`<sup>Required</sup> <a name="DeleteNotificationConfiguration" id="@cdk_utils/iam.notifications.NotificationsActions.property.DeleteNotificationConfiguration"></a>

```typescript
public readonly DeleteNotificationConfiguration: string;
```

- *Type:* string

[Write] notifications:DeleteNotificationConfiguration.

---

##### `DeregisterNotificationHub`<sup>Required</sup> <a name="DeregisterNotificationHub" id="@cdk_utils/iam.notifications.NotificationsActions.property.DeregisterNotificationHub"></a>

```typescript
public readonly DeregisterNotificationHub: string;
```

- *Type:* string

[Write] notifications:DeregisterNotificationHub.

---

##### `DisableNotificationsAccessForOrganization`<sup>Required</sup> <a name="DisableNotificationsAccessForOrganization" id="@cdk_utils/iam.notifications.NotificationsActions.property.DisableNotificationsAccessForOrganization"></a>

```typescript
public readonly DisableNotificationsAccessForOrganization: string;
```

- *Type:* string

[PermissionManagement] notifications:DisableNotificationsAccessForOrganization.

---

##### `DisassociateChannel`<sup>Required</sup> <a name="DisassociateChannel" id="@cdk_utils/iam.notifications.NotificationsActions.property.DisassociateChannel"></a>

```typescript
public readonly DisassociateChannel: string;
```

- *Type:* string

[Write] notifications:DisassociateChannel.

---

##### `DisassociateManagedNotificationAccountContact`<sup>Required</sup> <a name="DisassociateManagedNotificationAccountContact" id="@cdk_utils/iam.notifications.NotificationsActions.property.DisassociateManagedNotificationAccountContact"></a>

```typescript
public readonly DisassociateManagedNotificationAccountContact: string;
```

- *Type:* string

[Write] notifications:DisassociateManagedNotificationAccountContact.

---

##### `DisassociateManagedNotificationAdditionalChannel`<sup>Required</sup> <a name="DisassociateManagedNotificationAdditionalChannel" id="@cdk_utils/iam.notifications.NotificationsActions.property.DisassociateManagedNotificationAdditionalChannel"></a>

```typescript
public readonly DisassociateManagedNotificationAdditionalChannel: string;
```

- *Type:* string

[Write] notifications:DisassociateManagedNotificationAdditionalChannel.

---

##### `DisassociateOrganizationalUnit`<sup>Required</sup> <a name="DisassociateOrganizationalUnit" id="@cdk_utils/iam.notifications.NotificationsActions.property.DisassociateOrganizationalUnit"></a>

```typescript
public readonly DisassociateOrganizationalUnit: string;
```

- *Type:* string

[Write] notifications:DisassociateOrganizationalUnit.

---

##### `EnableNotificationsAccessForOrganization`<sup>Required</sup> <a name="EnableNotificationsAccessForOrganization" id="@cdk_utils/iam.notifications.NotificationsActions.property.EnableNotificationsAccessForOrganization"></a>

```typescript
public readonly EnableNotificationsAccessForOrganization: string;
```

- *Type:* string

[PermissionManagement] notifications:EnableNotificationsAccessForOrganization.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.notifications.NotificationsActions.property.ListChannels"></a>

```typescript
public readonly ListChannels: string;
```

- *Type:* string

[List] notifications:ListChannels.

---

##### `ListEventRules`<sup>Required</sup> <a name="ListEventRules" id="@cdk_utils/iam.notifications.NotificationsActions.property.ListEventRules"></a>

```typescript
public readonly ListEventRules: string;
```

- *Type:* string

[List] notifications:ListEventRules.

---

##### `ListManagedNotificationChannelAssociations`<sup>Required</sup> <a name="ListManagedNotificationChannelAssociations" id="@cdk_utils/iam.notifications.NotificationsActions.property.ListManagedNotificationChannelAssociations"></a>

```typescript
public readonly ListManagedNotificationChannelAssociations: string;
```

- *Type:* string

[List] notifications:ListManagedNotificationChannelAssociations.

---

##### `ListManagedNotificationChildEvents`<sup>Required</sup> <a name="ListManagedNotificationChildEvents" id="@cdk_utils/iam.notifications.NotificationsActions.property.ListManagedNotificationChildEvents"></a>

```typescript
public readonly ListManagedNotificationChildEvents: string;
```

- *Type:* string

[List] notifications:ListManagedNotificationChildEvents.

---

##### `ListManagedNotificationConfigurations`<sup>Required</sup> <a name="ListManagedNotificationConfigurations" id="@cdk_utils/iam.notifications.NotificationsActions.property.ListManagedNotificationConfigurations"></a>

```typescript
public readonly ListManagedNotificationConfigurations: string;
```

- *Type:* string

[List] notifications:ListManagedNotificationConfigurations.

---

##### `ListManagedNotificationEvents`<sup>Required</sup> <a name="ListManagedNotificationEvents" id="@cdk_utils/iam.notifications.NotificationsActions.property.ListManagedNotificationEvents"></a>

```typescript
public readonly ListManagedNotificationEvents: string;
```

- *Type:* string

[List] notifications:ListManagedNotificationEvents.

---

##### `ListMemberAccounts`<sup>Required</sup> <a name="ListMemberAccounts" id="@cdk_utils/iam.notifications.NotificationsActions.property.ListMemberAccounts"></a>

```typescript
public readonly ListMemberAccounts: string;
```

- *Type:* string

[List] notifications:ListMemberAccounts.

---

##### `ListNotificationConfigurations`<sup>Required</sup> <a name="ListNotificationConfigurations" id="@cdk_utils/iam.notifications.NotificationsActions.property.ListNotificationConfigurations"></a>

```typescript
public readonly ListNotificationConfigurations: string;
```

- *Type:* string

[List] notifications:ListNotificationConfigurations.

---

##### `ListNotificationEvents`<sup>Required</sup> <a name="ListNotificationEvents" id="@cdk_utils/iam.notifications.NotificationsActions.property.ListNotificationEvents"></a>

```typescript
public readonly ListNotificationEvents: string;
```

- *Type:* string

[List] notifications:ListNotificationEvents.

---

##### `ListNotificationHubs`<sup>Required</sup> <a name="ListNotificationHubs" id="@cdk_utils/iam.notifications.NotificationsActions.property.ListNotificationHubs"></a>

```typescript
public readonly ListNotificationHubs: string;
```

- *Type:* string

[List] notifications:ListNotificationHubs.

---

##### `ListOrganizationalUnits`<sup>Required</sup> <a name="ListOrganizationalUnits" id="@cdk_utils/iam.notifications.NotificationsActions.property.ListOrganizationalUnits"></a>

```typescript
public readonly ListOrganizationalUnits: string;
```

- *Type:* string

[List] notifications:ListOrganizationalUnits.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.notifications.NotificationsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] notifications:ListTagsForResource.

---

##### `PutFeatureOptInStatus`<sup>Required</sup> <a name="PutFeatureOptInStatus" id="@cdk_utils/iam.notifications.NotificationsActions.property.PutFeatureOptInStatus"></a>

```typescript
public readonly PutFeatureOptInStatus: string;
```

- *Type:* string

[Write] notifications:PutFeatureOptInStatus.

---

##### `RegisterNotificationHub`<sup>Required</sup> <a name="RegisterNotificationHub" id="@cdk_utils/iam.notifications.NotificationsActions.property.RegisterNotificationHub"></a>

```typescript
public readonly RegisterNotificationHub: string;
```

- *Type:* string

[Write] notifications:RegisterNotificationHub.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.notifications.NotificationsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.notifications.NotificationsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] notifications:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.notifications.NotificationsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] notifications:UntagResource.

---

##### `UpdateEventRule`<sup>Required</sup> <a name="UpdateEventRule" id="@cdk_utils/iam.notifications.NotificationsActions.property.UpdateEventRule"></a>

```typescript
public readonly UpdateEventRule: string;
```

- *Type:* string

[Write] notifications:UpdateEventRule.

---

##### `UpdateNotificationConfiguration`<sup>Required</sup> <a name="UpdateNotificationConfiguration" id="@cdk_utils/iam.notifications.NotificationsActions.property.UpdateNotificationConfiguration"></a>

```typescript
public readonly UpdateNotificationConfiguration: string;
```

- *Type:* string

[Write] notifications:UpdateNotificationConfiguration.

---

### NotificationsConditions <a name="NotificationsConditions" id="@cdk_utils/iam.notifications.NotificationsConditions"></a>

Condition key constants and builders for notifications.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.notifications.NotificationsConditions.Initializer"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

new notifications.NotificationsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.notifications.NotificationsConditions.requestTag"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.notifications.NotificationsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.notifications.NotificationsConditions.resourceTag"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.notifications.NotificationsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.notifications.NotificationsConditions.tagKeys"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.notifications.NotificationsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsConditions.property.CreateNotificationConfigurationConditionKeys">CreateNotificationConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNotificationConfiguration action. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.notifications.NotificationsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.notifications.NotificationsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.notifications.NotificationsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateNotificationConfigurationConditionKeys`<sup>Required</sup> <a name="CreateNotificationConfigurationConditionKeys" id="@cdk_utils/iam.notifications.NotificationsConditions.property.CreateNotificationConfigurationConditionKeys"></a>

```typescript
public readonly CreateNotificationConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNotificationConfiguration action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.notifications.NotificationsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.notifications.NotificationsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### NotificationsOperations <a name="NotificationsOperations" id="@cdk_utils/iam.notifications.NotificationsOperations"></a>

API operation to required IAM actions mapping for notifications.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.notifications.NotificationsOperations.Initializer"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

new notifications.NotificationsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.AssociateChannel">AssociateChannel</a></code> | <code>string[]</code> | IAM actions required for the AssociateChannel API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.AssociateManagedNotificationAccountContact">AssociateManagedNotificationAccountContact</a></code> | <code>string[]</code> | IAM actions required for the AssociateManagedNotificationAccountContact API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.AssociateManagedNotificationAdditionalChannel">AssociateManagedNotificationAdditionalChannel</a></code> | <code>string[]</code> | IAM actions required for the AssociateManagedNotificationAdditionalChannel API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.AssociateOrganizationalUnit">AssociateOrganizationalUnit</a></code> | <code>string[]</code> | IAM actions required for the AssociateOrganizationalUnit API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.CreateEventRule">CreateEventRule</a></code> | <code>string[]</code> | IAM actions required for the CreateEventRule API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.CreateNotificationConfiguration">CreateNotificationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateNotificationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.DeleteEventRule">DeleteEventRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventRule API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.DeleteNotificationConfiguration">DeleteNotificationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteNotificationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.DeregisterNotificationHub">DeregisterNotificationHub</a></code> | <code>string[]</code> | IAM actions required for the DeregisterNotificationHub API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.DisableNotificationsAccessForOrganization">DisableNotificationsAccessForOrganization</a></code> | <code>string[]</code> | IAM actions required for the DisableNotificationsAccessForOrganization API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.DisassociateChannel">DisassociateChannel</a></code> | <code>string[]</code> | IAM actions required for the DisassociateChannel API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.DisassociateManagedNotificationAccountContact">DisassociateManagedNotificationAccountContact</a></code> | <code>string[]</code> | IAM actions required for the DisassociateManagedNotificationAccountContact API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.DisassociateManagedNotificationAdditionalChannel">DisassociateManagedNotificationAdditionalChannel</a></code> | <code>string[]</code> | IAM actions required for the DisassociateManagedNotificationAdditionalChannel API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.DisassociateOrganizationalUnit">DisassociateOrganizationalUnit</a></code> | <code>string[]</code> | IAM actions required for the DisassociateOrganizationalUnit API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.EnableNotificationsAccessForOrganization">EnableNotificationsAccessForOrganization</a></code> | <code>string[]</code> | IAM actions required for the EnableNotificationsAccessForOrganization API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.ListChannels">ListChannels</a></code> | <code>string[]</code> | IAM actions required for the ListChannels API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.ListEventRules">ListEventRules</a></code> | <code>string[]</code> | IAM actions required for the ListEventRules API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.ListManagedNotificationChannelAssociations">ListManagedNotificationChannelAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListManagedNotificationChannelAssociations API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.ListManagedNotificationChildEvents">ListManagedNotificationChildEvents</a></code> | <code>string[]</code> | IAM actions required for the ListManagedNotificationChildEvents API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.ListManagedNotificationConfigurations">ListManagedNotificationConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListManagedNotificationConfigurations API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.ListManagedNotificationEvents">ListManagedNotificationEvents</a></code> | <code>string[]</code> | IAM actions required for the ListManagedNotificationEvents API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.ListMemberAccounts">ListMemberAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListMemberAccounts API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.ListNotificationConfigurations">ListNotificationConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListNotificationConfigurations API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.ListNotificationEvents">ListNotificationEvents</a></code> | <code>string[]</code> | IAM actions required for the ListNotificationEvents API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.ListNotificationHubs">ListNotificationHubs</a></code> | <code>string[]</code> | IAM actions required for the ListNotificationHubs API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.ListOrganizationalUnits">ListOrganizationalUnits</a></code> | <code>string[]</code> | IAM actions required for the ListOrganizationalUnits API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.opGetEventRule">opGetEventRule</a></code> | <code>string[]</code> | IAM actions required for the GetEventRule API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.opGetManagedNotificationChildEvent">opGetManagedNotificationChildEvent</a></code> | <code>string[]</code> | IAM actions required for the GetManagedNotificationChildEvent API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.opGetManagedNotificationConfiguration">opGetManagedNotificationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetManagedNotificationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.opGetManagedNotificationEvent">opGetManagedNotificationEvent</a></code> | <code>string[]</code> | IAM actions required for the GetManagedNotificationEvent API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.opGetNotificationConfiguration">opGetNotificationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetNotificationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.opGetNotificationEvent">opGetNotificationEvent</a></code> | <code>string[]</code> | IAM actions required for the GetNotificationEvent API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.opGetNotificationsAccessForOrganization">opGetNotificationsAccessForOrganization</a></code> | <code>string[]</code> | IAM actions required for the GetNotificationsAccessForOrganization API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.RegisterNotificationHub">RegisterNotificationHub</a></code> | <code>string[]</code> | IAM actions required for the RegisterNotificationHub API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.UpdateEventRule">UpdateEventRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateEventRule API call. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsOperations.property.UpdateNotificationConfiguration">UpdateNotificationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateNotificationConfiguration API call. |

---

##### `AssociateChannel`<sup>Required</sup> <a name="AssociateChannel" id="@cdk_utils/iam.notifications.NotificationsOperations.property.AssociateChannel"></a>

```typescript
public readonly AssociateChannel: string[];
```

- *Type:* string[]

IAM actions required for the AssociateChannel API call.

---

##### `AssociateManagedNotificationAccountContact`<sup>Required</sup> <a name="AssociateManagedNotificationAccountContact" id="@cdk_utils/iam.notifications.NotificationsOperations.property.AssociateManagedNotificationAccountContact"></a>

```typescript
public readonly AssociateManagedNotificationAccountContact: string[];
```

- *Type:* string[]

IAM actions required for the AssociateManagedNotificationAccountContact API call.

---

##### `AssociateManagedNotificationAdditionalChannel`<sup>Required</sup> <a name="AssociateManagedNotificationAdditionalChannel" id="@cdk_utils/iam.notifications.NotificationsOperations.property.AssociateManagedNotificationAdditionalChannel"></a>

```typescript
public readonly AssociateManagedNotificationAdditionalChannel: string[];
```

- *Type:* string[]

IAM actions required for the AssociateManagedNotificationAdditionalChannel API call.

---

##### `AssociateOrganizationalUnit`<sup>Required</sup> <a name="AssociateOrganizationalUnit" id="@cdk_utils/iam.notifications.NotificationsOperations.property.AssociateOrganizationalUnit"></a>

```typescript
public readonly AssociateOrganizationalUnit: string[];
```

- *Type:* string[]

IAM actions required for the AssociateOrganizationalUnit API call.

---

##### `CreateEventRule`<sup>Required</sup> <a name="CreateEventRule" id="@cdk_utils/iam.notifications.NotificationsOperations.property.CreateEventRule"></a>

```typescript
public readonly CreateEventRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateEventRule API call.

---

##### `CreateNotificationConfiguration`<sup>Required</sup> <a name="CreateNotificationConfiguration" id="@cdk_utils/iam.notifications.NotificationsOperations.property.CreateNotificationConfiguration"></a>

```typescript
public readonly CreateNotificationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateNotificationConfiguration API call.

---

##### `DeleteEventRule`<sup>Required</sup> <a name="DeleteEventRule" id="@cdk_utils/iam.notifications.NotificationsOperations.property.DeleteEventRule"></a>

```typescript
public readonly DeleteEventRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventRule API call.

---

##### `DeleteNotificationConfiguration`<sup>Required</sup> <a name="DeleteNotificationConfiguration" id="@cdk_utils/iam.notifications.NotificationsOperations.property.DeleteNotificationConfiguration"></a>

```typescript
public readonly DeleteNotificationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNotificationConfiguration API call.

---

##### `DeregisterNotificationHub`<sup>Required</sup> <a name="DeregisterNotificationHub" id="@cdk_utils/iam.notifications.NotificationsOperations.property.DeregisterNotificationHub"></a>

```typescript
public readonly DeregisterNotificationHub: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterNotificationHub API call.

---

##### `DisableNotificationsAccessForOrganization`<sup>Required</sup> <a name="DisableNotificationsAccessForOrganization" id="@cdk_utils/iam.notifications.NotificationsOperations.property.DisableNotificationsAccessForOrganization"></a>

```typescript
public readonly DisableNotificationsAccessForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the DisableNotificationsAccessForOrganization API call.

---

##### `DisassociateChannel`<sup>Required</sup> <a name="DisassociateChannel" id="@cdk_utils/iam.notifications.NotificationsOperations.property.DisassociateChannel"></a>

```typescript
public readonly DisassociateChannel: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateChannel API call.

---

##### `DisassociateManagedNotificationAccountContact`<sup>Required</sup> <a name="DisassociateManagedNotificationAccountContact" id="@cdk_utils/iam.notifications.NotificationsOperations.property.DisassociateManagedNotificationAccountContact"></a>

```typescript
public readonly DisassociateManagedNotificationAccountContact: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateManagedNotificationAccountContact API call.

---

##### `DisassociateManagedNotificationAdditionalChannel`<sup>Required</sup> <a name="DisassociateManagedNotificationAdditionalChannel" id="@cdk_utils/iam.notifications.NotificationsOperations.property.DisassociateManagedNotificationAdditionalChannel"></a>

```typescript
public readonly DisassociateManagedNotificationAdditionalChannel: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateManagedNotificationAdditionalChannel API call.

---

##### `DisassociateOrganizationalUnit`<sup>Required</sup> <a name="DisassociateOrganizationalUnit" id="@cdk_utils/iam.notifications.NotificationsOperations.property.DisassociateOrganizationalUnit"></a>

```typescript
public readonly DisassociateOrganizationalUnit: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateOrganizationalUnit API call.

---

##### `EnableNotificationsAccessForOrganization`<sup>Required</sup> <a name="EnableNotificationsAccessForOrganization" id="@cdk_utils/iam.notifications.NotificationsOperations.property.EnableNotificationsAccessForOrganization"></a>

```typescript
public readonly EnableNotificationsAccessForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the EnableNotificationsAccessForOrganization API call.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.notifications.NotificationsOperations.property.ListChannels"></a>

```typescript
public readonly ListChannels: string[];
```

- *Type:* string[]

IAM actions required for the ListChannels API call.

---

##### `ListEventRules`<sup>Required</sup> <a name="ListEventRules" id="@cdk_utils/iam.notifications.NotificationsOperations.property.ListEventRules"></a>

```typescript
public readonly ListEventRules: string[];
```

- *Type:* string[]

IAM actions required for the ListEventRules API call.

---

##### `ListManagedNotificationChannelAssociations`<sup>Required</sup> <a name="ListManagedNotificationChannelAssociations" id="@cdk_utils/iam.notifications.NotificationsOperations.property.ListManagedNotificationChannelAssociations"></a>

```typescript
public readonly ListManagedNotificationChannelAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedNotificationChannelAssociations API call.

---

##### `ListManagedNotificationChildEvents`<sup>Required</sup> <a name="ListManagedNotificationChildEvents" id="@cdk_utils/iam.notifications.NotificationsOperations.property.ListManagedNotificationChildEvents"></a>

```typescript
public readonly ListManagedNotificationChildEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedNotificationChildEvents API call.

---

##### `ListManagedNotificationConfigurations`<sup>Required</sup> <a name="ListManagedNotificationConfigurations" id="@cdk_utils/iam.notifications.NotificationsOperations.property.ListManagedNotificationConfigurations"></a>

```typescript
public readonly ListManagedNotificationConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedNotificationConfigurations API call.

---

##### `ListManagedNotificationEvents`<sup>Required</sup> <a name="ListManagedNotificationEvents" id="@cdk_utils/iam.notifications.NotificationsOperations.property.ListManagedNotificationEvents"></a>

```typescript
public readonly ListManagedNotificationEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedNotificationEvents API call.

---

##### `ListMemberAccounts`<sup>Required</sup> <a name="ListMemberAccounts" id="@cdk_utils/iam.notifications.NotificationsOperations.property.ListMemberAccounts"></a>

```typescript
public readonly ListMemberAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListMemberAccounts API call.

---

##### `ListNotificationConfigurations`<sup>Required</sup> <a name="ListNotificationConfigurations" id="@cdk_utils/iam.notifications.NotificationsOperations.property.ListNotificationConfigurations"></a>

```typescript
public readonly ListNotificationConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListNotificationConfigurations API call.

---

##### `ListNotificationEvents`<sup>Required</sup> <a name="ListNotificationEvents" id="@cdk_utils/iam.notifications.NotificationsOperations.property.ListNotificationEvents"></a>

```typescript
public readonly ListNotificationEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListNotificationEvents API call.

---

##### `ListNotificationHubs`<sup>Required</sup> <a name="ListNotificationHubs" id="@cdk_utils/iam.notifications.NotificationsOperations.property.ListNotificationHubs"></a>

```typescript
public readonly ListNotificationHubs: string[];
```

- *Type:* string[]

IAM actions required for the ListNotificationHubs API call.

---

##### `ListOrganizationalUnits`<sup>Required</sup> <a name="ListOrganizationalUnits" id="@cdk_utils/iam.notifications.NotificationsOperations.property.ListOrganizationalUnits"></a>

```typescript
public readonly ListOrganizationalUnits: string[];
```

- *Type:* string[]

IAM actions required for the ListOrganizationalUnits API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.notifications.NotificationsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetEventRule`<sup>Required</sup> <a name="opGetEventRule" id="@cdk_utils/iam.notifications.NotificationsOperations.property.opGetEventRule"></a>

```typescript
public readonly opGetEventRule: string[];
```

- *Type:* string[]

IAM actions required for the GetEventRule API call.

---

##### `opGetManagedNotificationChildEvent`<sup>Required</sup> <a name="opGetManagedNotificationChildEvent" id="@cdk_utils/iam.notifications.NotificationsOperations.property.opGetManagedNotificationChildEvent"></a>

```typescript
public readonly opGetManagedNotificationChildEvent: string[];
```

- *Type:* string[]

IAM actions required for the GetManagedNotificationChildEvent API call.

---

##### `opGetManagedNotificationConfiguration`<sup>Required</sup> <a name="opGetManagedNotificationConfiguration" id="@cdk_utils/iam.notifications.NotificationsOperations.property.opGetManagedNotificationConfiguration"></a>

```typescript
public readonly opGetManagedNotificationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetManagedNotificationConfiguration API call.

---

##### `opGetManagedNotificationEvent`<sup>Required</sup> <a name="opGetManagedNotificationEvent" id="@cdk_utils/iam.notifications.NotificationsOperations.property.opGetManagedNotificationEvent"></a>

```typescript
public readonly opGetManagedNotificationEvent: string[];
```

- *Type:* string[]

IAM actions required for the GetManagedNotificationEvent API call.

---

##### `opGetNotificationConfiguration`<sup>Required</sup> <a name="opGetNotificationConfiguration" id="@cdk_utils/iam.notifications.NotificationsOperations.property.opGetNotificationConfiguration"></a>

```typescript
public readonly opGetNotificationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetNotificationConfiguration API call.

---

##### `opGetNotificationEvent`<sup>Required</sup> <a name="opGetNotificationEvent" id="@cdk_utils/iam.notifications.NotificationsOperations.property.opGetNotificationEvent"></a>

```typescript
public readonly opGetNotificationEvent: string[];
```

- *Type:* string[]

IAM actions required for the GetNotificationEvent API call.

---

##### `opGetNotificationsAccessForOrganization`<sup>Required</sup> <a name="opGetNotificationsAccessForOrganization" id="@cdk_utils/iam.notifications.NotificationsOperations.property.opGetNotificationsAccessForOrganization"></a>

```typescript
public readonly opGetNotificationsAccessForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the GetNotificationsAccessForOrganization API call.

---

##### `RegisterNotificationHub`<sup>Required</sup> <a name="RegisterNotificationHub" id="@cdk_utils/iam.notifications.NotificationsOperations.property.RegisterNotificationHub"></a>

```typescript
public readonly RegisterNotificationHub: string[];
```

- *Type:* string[]

IAM actions required for the RegisterNotificationHub API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.notifications.NotificationsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.notifications.NotificationsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateEventRule`<sup>Required</sup> <a name="UpdateEventRule" id="@cdk_utils/iam.notifications.NotificationsOperations.property.UpdateEventRule"></a>

```typescript
public readonly UpdateEventRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEventRule API call.

---

##### `UpdateNotificationConfiguration`<sup>Required</sup> <a name="UpdateNotificationConfiguration" id="@cdk_utils/iam.notifications.NotificationsOperations.property.UpdateNotificationConfiguration"></a>

```typescript
public readonly UpdateNotificationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNotificationConfiguration API call.

---

### NotificationsResources <a name="NotificationsResources" id="@cdk_utils/iam.notifications.NotificationsResources"></a>

ARN builders, validators, and parsers for notifications resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.notifications.NotificationsResources.Initializer"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

new notifications.NotificationsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsResources.eventRule">eventRule</a></code> | Builds an ARN for the EventRule resource. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsResources.isValidEventRuleArn">isValidEventRuleArn</a></code> | Validates whether a string is a valid ARN for the EventRule resource. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsResources.isValidManagedNotificationChildEventArn">isValidManagedNotificationChildEventArn</a></code> | Validates whether a string is a valid ARN for the ManagedNotificationChildEvent resource. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsResources.isValidManagedNotificationConfigurationArn">isValidManagedNotificationConfigurationArn</a></code> | Validates whether a string is a valid ARN for the ManagedNotificationConfiguration resource. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsResources.isValidManagedNotificationEventArn">isValidManagedNotificationEventArn</a></code> | Validates whether a string is a valid ARN for the ManagedNotificationEvent resource. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsResources.isValidNotificationConfigurationArn">isValidNotificationConfigurationArn</a></code> | Validates whether a string is a valid ARN for the NotificationConfiguration resource. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsResources.isValidNotificationEventArn">isValidNotificationEventArn</a></code> | Validates whether a string is a valid ARN for the NotificationEvent resource. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsResources.managedNotificationChildEvent">managedNotificationChildEvent</a></code> | Builds an ARN for the ManagedNotificationChildEvent resource. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsResources.managedNotificationConfiguration">managedNotificationConfiguration</a></code> | Builds an ARN for the ManagedNotificationConfiguration resource. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsResources.managedNotificationEvent">managedNotificationEvent</a></code> | Builds an ARN for the ManagedNotificationEvent resource. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsResources.notificationConfiguration">notificationConfiguration</a></code> | Builds an ARN for the NotificationConfiguration resource. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsResources.notificationEvent">notificationEvent</a></code> | Builds an ARN for the NotificationEvent resource. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsResources.parseEventRuleArn">parseEventRuleArn</a></code> | Parses a EventRule ARN into its components. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsResources.parseManagedNotificationChildEventArn">parseManagedNotificationChildEventArn</a></code> | Parses a ManagedNotificationChildEvent ARN into its components. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsResources.parseManagedNotificationConfigurationArn">parseManagedNotificationConfigurationArn</a></code> | Parses a ManagedNotificationConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsResources.parseManagedNotificationEventArn">parseManagedNotificationEventArn</a></code> | Parses a ManagedNotificationEvent ARN into its components. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsResources.parseNotificationConfigurationArn">parseNotificationConfigurationArn</a></code> | Parses a NotificationConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.notifications.NotificationsResources.parseNotificationEventArn">parseNotificationEventArn</a></code> | Parses a NotificationEvent ARN into its components. |

---

##### `eventRule` <a name="eventRule" id="@cdk_utils/iam.notifications.NotificationsResources.eventRule"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsResources.eventRule(props: NotificationsEventRuleArnProps)
```

Builds an ARN for the EventRule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.notifications.NotificationsResources.eventRule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.notifications.NotificationsEventRuleArnProps">NotificationsEventRuleArnProps</a>

---

##### `isValidEventRuleArn` <a name="isValidEventRuleArn" id="@cdk_utils/iam.notifications.NotificationsResources.isValidEventRuleArn"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsResources.isValidEventRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the EventRule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.notifications.NotificationsResources.isValidEventRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidManagedNotificationChildEventArn` <a name="isValidManagedNotificationChildEventArn" id="@cdk_utils/iam.notifications.NotificationsResources.isValidManagedNotificationChildEventArn"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsResources.isValidManagedNotificationChildEventArn(arn: string)
```

Validates whether a string is a valid ARN for the ManagedNotificationChildEvent resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.notifications.NotificationsResources.isValidManagedNotificationChildEventArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidManagedNotificationConfigurationArn` <a name="isValidManagedNotificationConfigurationArn" id="@cdk_utils/iam.notifications.NotificationsResources.isValidManagedNotificationConfigurationArn"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsResources.isValidManagedNotificationConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the ManagedNotificationConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.notifications.NotificationsResources.isValidManagedNotificationConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidManagedNotificationEventArn` <a name="isValidManagedNotificationEventArn" id="@cdk_utils/iam.notifications.NotificationsResources.isValidManagedNotificationEventArn"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsResources.isValidManagedNotificationEventArn(arn: string)
```

Validates whether a string is a valid ARN for the ManagedNotificationEvent resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.notifications.NotificationsResources.isValidManagedNotificationEventArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNotificationConfigurationArn` <a name="isValidNotificationConfigurationArn" id="@cdk_utils/iam.notifications.NotificationsResources.isValidNotificationConfigurationArn"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsResources.isValidNotificationConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the NotificationConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.notifications.NotificationsResources.isValidNotificationConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNotificationEventArn` <a name="isValidNotificationEventArn" id="@cdk_utils/iam.notifications.NotificationsResources.isValidNotificationEventArn"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsResources.isValidNotificationEventArn(arn: string)
```

Validates whether a string is a valid ARN for the NotificationEvent resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.notifications.NotificationsResources.isValidNotificationEventArn.parameter.arn"></a>

- *Type:* string

---

##### `managedNotificationChildEvent` <a name="managedNotificationChildEvent" id="@cdk_utils/iam.notifications.NotificationsResources.managedNotificationChildEvent"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsResources.managedNotificationChildEvent(props: NotificationsManagedNotificationChildEventArnProps)
```

Builds an ARN for the ManagedNotificationChildEvent resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.notifications.NotificationsResources.managedNotificationChildEvent.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationChildEventArnProps">NotificationsManagedNotificationChildEventArnProps</a>

---

##### `managedNotificationConfiguration` <a name="managedNotificationConfiguration" id="@cdk_utils/iam.notifications.NotificationsResources.managedNotificationConfiguration"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsResources.managedNotificationConfiguration(props: NotificationsManagedNotificationConfigurationArnProps)
```

Builds an ARN for the ManagedNotificationConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.notifications.NotificationsResources.managedNotificationConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationConfigurationArnProps">NotificationsManagedNotificationConfigurationArnProps</a>

---

##### `managedNotificationEvent` <a name="managedNotificationEvent" id="@cdk_utils/iam.notifications.NotificationsResources.managedNotificationEvent"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsResources.managedNotificationEvent(props: NotificationsManagedNotificationEventArnProps)
```

Builds an ARN for the ManagedNotificationEvent resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.notifications.NotificationsResources.managedNotificationEvent.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.notifications.NotificationsManagedNotificationEventArnProps">NotificationsManagedNotificationEventArnProps</a>

---

##### `notificationConfiguration` <a name="notificationConfiguration" id="@cdk_utils/iam.notifications.NotificationsResources.notificationConfiguration"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsResources.notificationConfiguration(props: NotificationsNotificationConfigurationArnProps)
```

Builds an ARN for the NotificationConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.notifications.NotificationsResources.notificationConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.notifications.NotificationsNotificationConfigurationArnProps">NotificationsNotificationConfigurationArnProps</a>

---

##### `notificationEvent` <a name="notificationEvent" id="@cdk_utils/iam.notifications.NotificationsResources.notificationEvent"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsResources.notificationEvent(props: NotificationsNotificationEventArnProps)
```

Builds an ARN for the NotificationEvent resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.notifications.NotificationsResources.notificationEvent.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.notifications.NotificationsNotificationEventArnProps">NotificationsNotificationEventArnProps</a>

---

##### `parseEventRuleArn` <a name="parseEventRuleArn" id="@cdk_utils/iam.notifications.NotificationsResources.parseEventRuleArn"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsResources.parseEventRuleArn(arn: string)
```

Parses a EventRule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.notifications.NotificationsResources.parseEventRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseManagedNotificationChildEventArn` <a name="parseManagedNotificationChildEventArn" id="@cdk_utils/iam.notifications.NotificationsResources.parseManagedNotificationChildEventArn"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsResources.parseManagedNotificationChildEventArn(arn: string)
```

Parses a ManagedNotificationChildEvent ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.notifications.NotificationsResources.parseManagedNotificationChildEventArn.parameter.arn"></a>

- *Type:* string

---

##### `parseManagedNotificationConfigurationArn` <a name="parseManagedNotificationConfigurationArn" id="@cdk_utils/iam.notifications.NotificationsResources.parseManagedNotificationConfigurationArn"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsResources.parseManagedNotificationConfigurationArn(arn: string)
```

Parses a ManagedNotificationConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.notifications.NotificationsResources.parseManagedNotificationConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseManagedNotificationEventArn` <a name="parseManagedNotificationEventArn" id="@cdk_utils/iam.notifications.NotificationsResources.parseManagedNotificationEventArn"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsResources.parseManagedNotificationEventArn(arn: string)
```

Parses a ManagedNotificationEvent ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.notifications.NotificationsResources.parseManagedNotificationEventArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNotificationConfigurationArn` <a name="parseNotificationConfigurationArn" id="@cdk_utils/iam.notifications.NotificationsResources.parseNotificationConfigurationArn"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsResources.parseNotificationConfigurationArn(arn: string)
```

Parses a NotificationConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.notifications.NotificationsResources.parseNotificationConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNotificationEventArn` <a name="parseNotificationEventArn" id="@cdk_utils/iam.notifications.NotificationsResources.parseNotificationEventArn"></a>

```typescript
import { notifications } from '@cdk_utils/iam'

notifications.NotificationsResources.parseNotificationEventArn(arn: string)
```

Parses a NotificationEvent ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.notifications.NotificationsResources.parseNotificationEventArn.parameter.arn"></a>

- *Type:* string

---




