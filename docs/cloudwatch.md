# `cloudwatch` Submodule <a name="`cloudwatch` Submodule" id="@cdk_utils/iam.cloudwatch"></a>


## Structs <a name="Structs" id="Structs"></a>

### CloudWatchAccessGrantArnComponents <a name="CloudWatchAccessGrantArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnComponents"></a>

Parsed components of a access-grant ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchAccessGrantArnComponents: cloudwatch.CloudWatchAccessGrantArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnComponents.property.grantId">grantId</a></code> | <code>string</code> | The GrantId component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `grantId`<sup>Required</sup> <a name="grantId" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnComponents.property.grantId"></a>

```typescript
public readonly grantId: string;
```

- *Type:* string

The GrantId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudWatchAccessGrantArnProps <a name="CloudWatchAccessGrantArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnProps"></a>

Properties for building a access-grant ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchAccessGrantArnProps: cloudwatch.CloudWatchAccessGrantArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnProps.property.grantId">grantId</a></code> | <code>string</code> | The GrantId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `grantId`<sup>Required</sup> <a name="grantId" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnProps.property.grantId"></a>

```typescript
public readonly grantId: string;
```

- *Type:* string

The GrantId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchAccessProfileArnComponents <a name="CloudWatchAccessProfileArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnComponents"></a>

Parsed components of a access-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchAccessProfileArnComponents: cloudwatch.CloudWatchAccessProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnComponents.property.profileId">profileId</a></code> | <code>string</code> | The ProfileId component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnComponents.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

The ProfileId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudWatchAccessProfileArnProps <a name="CloudWatchAccessProfileArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnProps"></a>

Properties for building a access-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchAccessProfileArnProps: cloudwatch.CloudWatchAccessProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnProps.property.profileId">profileId</a></code> | <code>string</code> | The ProfileId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnProps.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

The ProfileId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchAlarmArnComponents <a name="CloudWatchAlarmArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents"></a>

Parsed components of a alarm ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchAlarmArnComponents: cloudwatch.CloudWatchAlarmArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents.property.alarmName">alarmName</a></code> | <code>string</code> | The AlarmName component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

The AlarmName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudWatchAlarmArnProps <a name="CloudWatchAlarmArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps"></a>

Properties for building a alarm ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchAlarmArnProps: cloudwatch.CloudWatchAlarmArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps.property.alarmName">alarmName</a></code> | <code>string</code> | The AlarmName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

The AlarmName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchAlarmMuteRuleArnComponents <a name="CloudWatchAlarmMuteRuleArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents"></a>

Parsed components of a alarm-mute-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchAlarmMuteRuleArnComponents: cloudwatch.CloudWatchAlarmMuteRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents.property.alarmMuteRuleName">alarmMuteRuleName</a></code> | <code>string</code> | The AlarmMuteRuleName component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `alarmMuteRuleName`<sup>Required</sup> <a name="alarmMuteRuleName" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents.property.alarmMuteRuleName"></a>

```typescript
public readonly alarmMuteRuleName: string;
```

- *Type:* string

The AlarmMuteRuleName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudWatchAlarmMuteRuleArnProps <a name="CloudWatchAlarmMuteRuleArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps"></a>

Properties for building a alarm-mute-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchAlarmMuteRuleArnProps: cloudwatch.CloudWatchAlarmMuteRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps.property.alarmMuteRuleName">alarmMuteRuleName</a></code> | <code>string</code> | The AlarmMuteRuleName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `alarmMuteRuleName`<sup>Required</sup> <a name="alarmMuteRuleName" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps.property.alarmMuteRuleName"></a>

```typescript
public readonly alarmMuteRuleName: string;
```

- *Type:* string

The AlarmMuteRuleName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchAlertArnComponents <a name="CloudWatchAlertArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchAlertArnComponents"></a>

Parsed components of a alert ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchAlertArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchAlertArnComponents: cloudwatch.CloudWatchAlertArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlertArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlertArnComponents.property.alertId">alertId</a></code> | <code>string</code> | The AlertId component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlertArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlertArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchAlertArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `alertId`<sup>Required</sup> <a name="alertId" id="@cdk_utils/iam.cloudwatch.CloudWatchAlertArnComponents.property.alertId"></a>

```typescript
public readonly alertId: string;
```

- *Type:* string

The AlertId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchAlertArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchAlertArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudWatchAlertArnProps <a name="CloudWatchAlertArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchAlertArnProps"></a>

Properties for building a alert ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchAlertArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchAlertArnProps: cloudwatch.CloudWatchAlertArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlertArnProps.property.alertId">alertId</a></code> | <code>string</code> | The AlertId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlertArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlertArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlertArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `alertId`<sup>Required</sup> <a name="alertId" id="@cdk_utils/iam.cloudwatch.CloudWatchAlertArnProps.property.alertId"></a>

```typescript
public readonly alertId: string;
```

- *Type:* string

The AlertId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchAlertArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchAlertArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchAlertArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchDashboardArnComponents <a name="CloudWatchDashboardArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnComponents"></a>

Parsed components of a dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchDashboardArnComponents: cloudwatch.CloudWatchDashboardArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnComponents.property.dashboardName">dashboardName</a></code> | <code>string</code> | The DashboardName component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dashboardName`<sup>Required</sup> <a name="dashboardName" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnComponents.property.dashboardName"></a>

```typescript
public readonly dashboardName: string;
```

- *Type:* string

The DashboardName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudWatchDashboardArnProps <a name="CloudWatchDashboardArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnProps"></a>

Properties for building a dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchDashboardArnProps: cloudwatch.CloudWatchDashboardArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnProps.property.dashboardName">dashboardName</a></code> | <code>string</code> | The DashboardName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `dashboardName`<sup>Required</sup> <a name="dashboardName" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnProps.property.dashboardName"></a>

```typescript
public readonly dashboardName: string;
```

- *Type:* string

The DashboardName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudWatchDatasetArnComponents <a name="CloudWatchDatasetArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents"></a>

Parsed components of a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchDatasetArnComponents: cloudwatch.CloudWatchDatasetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents.property.datasetId">datasetId</a></code> | <code>string</code> | The DatasetId component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The DatasetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudWatchDatasetArnProps <a name="CloudWatchDatasetArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps"></a>

Properties for building a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchDatasetArnProps: cloudwatch.CloudWatchDatasetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps.property.datasetId">datasetId</a></code> | <code>string</code> | The DatasetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The DatasetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchDomainArnComponents <a name="CloudWatchDomainArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchDomainArnComponents"></a>

Parsed components of a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchDomainArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchDomainArnComponents: cloudwatch.CloudWatchDomainArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDomainArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDomainArnComponents.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDomainArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDomainArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchDomainArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.cloudwatch.CloudWatchDomainArnComponents.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchDomainArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchDomainArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudWatchDomainArnProps <a name="CloudWatchDomainArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchDomainArnProps"></a>

Properties for building a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchDomainArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchDomainArnProps: cloudwatch.CloudWatchDomainArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDomainArnProps.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDomainArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDomainArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDomainArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.cloudwatch.CloudWatchDomainArnProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchDomainArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchDomainArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchDomainArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchIngestionEndpointArnComponents <a name="CloudWatchIngestionEndpointArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnComponents"></a>

Parsed components of a ingestion-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchIngestionEndpointArnComponents: cloudwatch.CloudWatchIngestionEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnComponents.property.ingestionEndpointId">ingestionEndpointId</a></code> | <code>string</code> | The IngestionEndpointId component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnComponents.property.ingestionEndpointName">ingestionEndpointName</a></code> | <code>string</code> | The IngestionEndpointName component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `ingestionEndpointId`<sup>Required</sup> <a name="ingestionEndpointId" id="@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnComponents.property.ingestionEndpointId"></a>

```typescript
public readonly ingestionEndpointId: string;
```

- *Type:* string

The IngestionEndpointId component.

---

##### `ingestionEndpointName`<sup>Required</sup> <a name="ingestionEndpointName" id="@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnComponents.property.ingestionEndpointName"></a>

```typescript
public readonly ingestionEndpointName: string;
```

- *Type:* string

The IngestionEndpointName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudWatchIngestionEndpointArnProps <a name="CloudWatchIngestionEndpointArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnProps"></a>

Properties for building a ingestion-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchIngestionEndpointArnProps: cloudwatch.CloudWatchIngestionEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnProps.property.ingestionEndpointId">ingestionEndpointId</a></code> | <code>string</code> | The IngestionEndpointId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnProps.property.ingestionEndpointName">ingestionEndpointName</a></code> | <code>string</code> | The IngestionEndpointName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `ingestionEndpointId`<sup>Required</sup> <a name="ingestionEndpointId" id="@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnProps.property.ingestionEndpointId"></a>

```typescript
public readonly ingestionEndpointId: string;
```

- *Type:* string

The IngestionEndpointId component of the ARN.

---

##### `ingestionEndpointName`<sup>Required</sup> <a name="ingestionEndpointName" id="@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnProps.property.ingestionEndpointName"></a>

```typescript
public readonly ingestionEndpointName: string;
```

- *Type:* string

The IngestionEndpointName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchInsightRuleArnComponents <a name="CloudWatchInsightRuleArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents"></a>

Parsed components of a insight-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchInsightRuleArnComponents: cloudwatch.CloudWatchInsightRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents.property.insightRuleName">insightRuleName</a></code> | <code>string</code> | The InsightRuleName component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `insightRuleName`<sup>Required</sup> <a name="insightRuleName" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents.property.insightRuleName"></a>

```typescript
public readonly insightRuleName: string;
```

- *Type:* string

The InsightRuleName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudWatchInsightRuleArnProps <a name="CloudWatchInsightRuleArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps"></a>

Properties for building a insight-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchInsightRuleArnProps: cloudwatch.CloudWatchInsightRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps.property.insightRuleName">insightRuleName</a></code> | <code>string</code> | The InsightRuleName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `insightRuleName`<sup>Required</sup> <a name="insightRuleName" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps.property.insightRuleName"></a>

```typescript
public readonly insightRuleName: string;
```

- *Type:* string

The InsightRuleName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchIntegrationArnComponents <a name="CloudWatchIntegrationArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnComponents"></a>

Parsed components of a integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchIntegrationArnComponents: cloudwatch.CloudWatchIntegrationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnComponents.property.integrationId">integrationId</a></code> | <code>string</code> | The IntegrationId component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnComponents.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

The IntegrationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudWatchIntegrationArnProps <a name="CloudWatchIntegrationArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnProps"></a>

Properties for building a integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchIntegrationArnProps: cloudwatch.CloudWatchIntegrationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnProps.property.integrationId">integrationId</a></code> | <code>string</code> | The IntegrationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnProps.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

The IntegrationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchMetricStreamArnComponents <a name="CloudWatchMetricStreamArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents"></a>

Parsed components of a metric-stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchMetricStreamArnComponents: cloudwatch.CloudWatchMetricStreamArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents.property.metricStreamName">metricStreamName</a></code> | <code>string</code> | The MetricStreamName component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `metricStreamName`<sup>Required</sup> <a name="metricStreamName" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents.property.metricStreamName"></a>

```typescript
public readonly metricStreamName: string;
```

- *Type:* string

The MetricStreamName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudWatchMetricStreamArnProps <a name="CloudWatchMetricStreamArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps"></a>

Properties for building a metric-stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchMetricStreamArnProps: cloudwatch.CloudWatchMetricStreamArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps.property.metricStreamName">metricStreamName</a></code> | <code>string</code> | The MetricStreamName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `metricStreamName`<sup>Required</sup> <a name="metricStreamName" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps.property.metricStreamName"></a>

```typescript
public readonly metricStreamName: string;
```

- *Type:* string

The MetricStreamName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchOmniDashboardArnComponents <a name="CloudWatchOmniDashboardArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnComponents"></a>

Parsed components of a omni-dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchOmniDashboardArnComponents: cloudwatch.CloudWatchOmniDashboardArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnComponents.property.dashboardId">dashboardId</a></code> | <code>string</code> | The DashboardId component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnComponents.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

The DashboardId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudWatchOmniDashboardArnProps <a name="CloudWatchOmniDashboardArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnProps"></a>

Properties for building a omni-dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchOmniDashboardArnProps: cloudwatch.CloudWatchOmniDashboardArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnProps.property.dashboardId">dashboardId</a></code> | <code>string</code> | The DashboardId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnProps.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

The DashboardId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchOrganizationAccessGrantArnComponents <a name="CloudWatchOrganizationAccessGrantArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnComponents"></a>

Parsed components of a organization-access-grant ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchOrganizationAccessGrantArnComponents: cloudwatch.CloudWatchOrganizationAccessGrantArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnComponents.property.grantId">grantId</a></code> | <code>string</code> | The GrantId component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `grantId`<sup>Required</sup> <a name="grantId" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnComponents.property.grantId"></a>

```typescript
public readonly grantId: string;
```

- *Type:* string

The GrantId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudWatchOrganizationAccessGrantArnProps <a name="CloudWatchOrganizationAccessGrantArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnProps"></a>

Properties for building a organization-access-grant ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchOrganizationAccessGrantArnProps: cloudwatch.CloudWatchOrganizationAccessGrantArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnProps.property.grantId">grantId</a></code> | <code>string</code> | The GrantId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `grantId`<sup>Required</sup> <a name="grantId" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnProps.property.grantId"></a>

```typescript
public readonly grantId: string;
```

- *Type:* string

The GrantId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchOrganizationDomainArnComponents <a name="CloudWatchOrganizationDomainArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnComponents"></a>

Parsed components of a organization-domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchOrganizationDomainArnComponents: cloudwatch.CloudWatchOrganizationDomainArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnComponents.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnComponents.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudWatchOrganizationDomainArnProps <a name="CloudWatchOrganizationDomainArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnProps"></a>

Properties for building a organization-domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchOrganizationDomainArnProps: cloudwatch.CloudWatchOrganizationDomainArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnProps.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchServiceArnComponents <a name="CloudWatchServiceArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents"></a>

Parsed components of a service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchServiceArnComponents: cloudwatch.CloudWatchServiceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.serviceName">serviceName</a></code> | <code>string</code> | The ServiceName component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.uniqueAttributesHex">uniqueAttributesHex</a></code> | <code>string</code> | The UniqueAttributesHex component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The ServiceName component.

---

##### `uniqueAttributesHex`<sup>Required</sup> <a name="uniqueAttributesHex" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.uniqueAttributesHex"></a>

```typescript
public readonly uniqueAttributesHex: string;
```

- *Type:* string

The UniqueAttributesHex component.

---

### CloudWatchServiceArnProps <a name="CloudWatchServiceArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps"></a>

Properties for building a service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchServiceArnProps: cloudwatch.CloudWatchServiceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.serviceName">serviceName</a></code> | <code>string</code> | The ServiceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.uniqueAttributesHex">uniqueAttributesHex</a></code> | <code>string</code> | The UniqueAttributesHex component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The ServiceName component of the ARN.

---

##### `uniqueAttributesHex`<sup>Required</sup> <a name="uniqueAttributesHex" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.uniqueAttributesHex"></a>

```typescript
public readonly uniqueAttributesHex: string;
```

- *Type:* string

The UniqueAttributesHex component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchSloArnComponents <a name="CloudWatchSloArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents"></a>

Parsed components of a slo ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchSloArnComponents: cloudwatch.CloudWatchSloArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents.property.sloName">sloName</a></code> | <code>string</code> | The SloName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sloName`<sup>Required</sup> <a name="sloName" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents.property.sloName"></a>

```typescript
public readonly sloName: string;
```

- *Type:* string

The SloName component.

---

### CloudWatchSloArnProps <a name="CloudWatchSloArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps"></a>

Properties for building a slo ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchSloArnProps: cloudwatch.CloudWatchSloArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps.property.sloName">sloName</a></code> | <code>string</code> | The SloName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sloName`<sup>Required</sup> <a name="sloName" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps.property.sloName"></a>

```typescript
public readonly sloName: string;
```

- *Type:* string

The SloName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchSpaceArnComponents <a name="CloudWatchSpaceArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnComponents"></a>

Parsed components of a space ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchSpaceArnComponents: cloudwatch.CloudWatchSpaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnComponents.property.spaceId">spaceId</a></code> | <code>string</code> | The SpaceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnComponents.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

The SpaceId component.

---

### CloudWatchSpaceArnProps <a name="CloudWatchSpaceArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnProps"></a>

Properties for building a space ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchSpaceArnProps: cloudwatch.CloudWatchSpaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnProps.property.spaceId">spaceId</a></code> | <code>string</code> | The SpaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnProps.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

The SpaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchViewArnComponents <a name="CloudWatchViewArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchViewArnComponents"></a>

Parsed components of a view ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchViewArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchViewArnComponents: cloudwatch.CloudWatchViewArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchViewArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchViewArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchViewArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchViewArnComponents.property.viewName">viewName</a></code> | <code>string</code> | The ViewName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchViewArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchViewArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchViewArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `viewName`<sup>Required</sup> <a name="viewName" id="@cdk_utils/iam.cloudwatch.CloudWatchViewArnComponents.property.viewName"></a>

```typescript
public readonly viewName: string;
```

- *Type:* string

The ViewName component.

---

### CloudWatchViewArnProps <a name="CloudWatchViewArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchViewArnProps"></a>

Properties for building a view ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchViewArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchViewArnProps: cloudwatch.CloudWatchViewArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchViewArnProps.property.viewName">viewName</a></code> | <code>string</code> | The ViewName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchViewArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchViewArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchViewArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `viewName`<sup>Required</sup> <a name="viewName" id="@cdk_utils/iam.cloudwatch.CloudWatchViewArnProps.property.viewName"></a>

```typescript
public readonly viewName: string;
```

- *Type:* string

The ViewName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchViewArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchViewArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchViewArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CloudWatchActions <a name="CloudWatchActions" id="@cdk_utils/iam.cloudwatch.CloudWatchActions"></a>

IAM action constants for the cloudwatch service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

new cloudwatch.CloudWatchActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetAccessGrant">actionGetAccessGrant</a></code> | <code>string</code> | [Read] cloudwatch:GetAccessGrant. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetAccessProfile">actionGetAccessProfile</a></code> | <code>string</code> | [Read] cloudwatch:GetAccessProfile. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetAgentGraph">actionGetAgentGraph</a></code> | <code>string</code> | [Read] cloudwatch:GetAgentGraph. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetAlarmMuteRule">actionGetAlarmMuteRule</a></code> | <code>string</code> | [Read] cloudwatch:GetAlarmMuteRule. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetAlert">actionGetAlert</a></code> | <code>string</code> | [Read] cloudwatch:GetAlert. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetContextGraph">actionGetContextGraph</a></code> | <code>string</code> | [Read] cloudwatch:GetContextGraph. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetDashboard">actionGetDashboard</a></code> | <code>string</code> | [Read] cloudwatch:GetDashboard. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetDataset">actionGetDataset</a></code> | <code>string</code> | [Read] cloudwatch:GetDataset. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetDomain">actionGetDomain</a></code> | <code>string</code> | [Read] cloudwatch:GetDomain. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetDomainAccessGrantForOrganization">actionGetDomainAccessGrantForOrganization</a></code> | <code>string</code> | [Read] cloudwatch:GetDomainAccessGrantForOrganization. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetDomainForOrganization">actionGetDomainForOrganization</a></code> | <code>string</code> | [Read] cloudwatch:GetDomainForOrganization. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetIngestionEndpoint">actionGetIngestionEndpoint</a></code> | <code>string</code> | [Read] cloudwatch:GetIngestionEndpoint. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetInsightRuleReport">actionGetInsightRuleReport</a></code> | <code>string</code> | [Read] cloudwatch:GetInsightRuleReport. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetIntegration">actionGetIntegration</a></code> | <code>string</code> | [Read] cloudwatch:GetIntegration. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetIntelligenceConfiguration">actionGetIntelligenceConfiguration</a></code> | <code>string</code> | [Read] cloudwatch:GetIntelligenceConfiguration. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetMetricData">actionGetMetricData</a></code> | <code>string</code> | [Read] cloudwatch:GetMetricData. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetMetricStatistics">actionGetMetricStatistics</a></code> | <code>string</code> | [Read] cloudwatch:GetMetricStatistics. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetMetricStream">actionGetMetricStream</a></code> | <code>string</code> | [Read] cloudwatch:GetMetricStream. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetMetricWidgetImage">actionGetMetricWidgetImage</a></code> | <code>string</code> | [Read] cloudwatch:GetMetricWidgetImage. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetOmniDashboard">actionGetOmniDashboard</a></code> | <code>string</code> | [Read] cloudwatch:GetOmniDashboard. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetOmniThread">actionGetOmniThread</a></code> | <code>string</code> | [Read] cloudwatch:GetOmniThread. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetOTelEnrichment">actionGetOTelEnrichment</a></code> | <code>string</code> | [Read] cloudwatch:GetOTelEnrichment. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetPreferences">actionGetPreferences</a></code> | <code>string</code> | [Read] cloudwatch:GetPreferences. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetRecords">actionGetRecords</a></code> | <code>string</code> | [Read] cloudwatch:GetRecords. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetService">actionGetService</a></code> | <code>string</code> | [Read] cloudwatch:GetService. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetServiceData">actionGetServiceData</a></code> | <code>string</code> | [Read] cloudwatch:GetServiceData. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetServiceLevelObjective">actionGetServiceLevelObjective</a></code> | <code>string</code> | [Read] cloudwatch:GetServiceLevelObjective. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetSpace">actionGetSpace</a></code> | <code>string</code> | [Read] cloudwatch:GetSpace. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetSpaceCredentials">actionGetSpaceCredentials</a></code> | <code>string</code> | [Read] cloudwatch:GetSpaceCredentials. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetSpaceCredentialsForOrganization">actionGetSpaceCredentialsForOrganization</a></code> | <code>string</code> | [Read] cloudwatch:GetSpaceCredentialsForOrganization. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetTelemetryQueryResults">actionGetTelemetryQueryResults</a></code> | <code>string</code> | [Read] cloudwatch:GetTelemetryQueryResults. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetTopologyDiscoveryStatus">actionGetTopologyDiscoveryStatus</a></code> | <code>string</code> | [Read] cloudwatch:GetTopologyDiscoveryStatus. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetTopologyMap">actionGetTopologyMap</a></code> | <code>string</code> | [Read] cloudwatch:GetTopologyMap. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetView">actionGetView</a></code> | <code>string</code> | [Read] cloudwatch:GetView. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionSetAlarmState">actionSetAlarmState</a></code> | <code>string</code> | [Write] cloudwatch:SetAlarmState. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AssumeAccessProfile">AssumeAccessProfile</a></code> | <code>string</code> | [PermissionManagement] cloudwatch:AssumeAccessProfile. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.BatchGetServiceLevelIndicatorReport">BatchGetServiceLevelIndicatorReport</a></code> | <code>string</code> | [Read] cloudwatch:BatchGetServiceLevelIndicatorReport. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.BatchGetServiceLevelObjectiveBudgetReport">BatchGetServiceLevelObjectiveBudgetReport</a></code> | <code>string</code> | [Read] cloudwatch:BatchGetServiceLevelObjectiveBudgetReport. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CallWithBearerToken">CallWithBearerToken</a></code> | <code>string</code> | [Write] cloudwatch:CallWithBearerToken. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateAccessGrant">CreateAccessGrant</a></code> | <code>string</code> | [PermissionManagement] cloudwatch:CreateAccessGrant. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateAccessProfile">CreateAccessProfile</a></code> | <code>string</code> | [PermissionManagement] cloudwatch:CreateAccessProfile. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateAlert">CreateAlert</a></code> | <code>string</code> | [Write] cloudwatch:CreateAlert. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateDomain">CreateDomain</a></code> | <code>string</code> | [Write] cloudwatch:CreateDomain. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateDomainAccessGrantForOrganization">CreateDomainAccessGrantForOrganization</a></code> | <code>string</code> | [PermissionManagement] cloudwatch:CreateDomainAccessGrantForOrganization. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateDomainForOrganization">CreateDomainForOrganization</a></code> | <code>string</code> | [Write] cloudwatch:CreateDomainForOrganization. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateIngestionEndpoint">CreateIngestionEndpoint</a></code> | <code>string</code> | [Write] cloudwatch:CreateIngestionEndpoint. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateIntegration">CreateIntegration</a></code> | <code>string</code> | [Write] cloudwatch:CreateIntegration. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateOmniDashboard">CreateOmniDashboard</a></code> | <code>string</code> | [Write] cloudwatch:CreateOmniDashboard. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateOmniThread">CreateOmniThread</a></code> | <code>string</code> | [Write] cloudwatch:CreateOmniThread. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateOneTimeDeepLinkCode">CreateOneTimeDeepLinkCode</a></code> | <code>string</code> | [Write] cloudwatch:CreateOneTimeDeepLinkCode. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateServiceLevelObjective">CreateServiceLevelObjective</a></code> | <code>string</code> | [Write] cloudwatch:CreateServiceLevelObjective. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateSpace">CreateSpace</a></code> | <code>string</code> | [Write] cloudwatch:CreateSpace. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateView">CreateView</a></code> | <code>string</code> | [Write] cloudwatch:CreateView. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteAccessGrant">DeleteAccessGrant</a></code> | <code>string</code> | [PermissionManagement] cloudwatch:DeleteAccessGrant. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteAccessProfile">DeleteAccessProfile</a></code> | <code>string</code> | [PermissionManagement] cloudwatch:DeleteAccessProfile. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteAlarmMuteRule">DeleteAlarmMuteRule</a></code> | <code>string</code> | [Write] cloudwatch:DeleteAlarmMuteRule. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteAlarms">DeleteAlarms</a></code> | <code>string</code> | [Write] cloudwatch:DeleteAlarms. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteAlert">DeleteAlert</a></code> | <code>string</code> | [Write] cloudwatch:DeleteAlert. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteAnomalyDetector">DeleteAnomalyDetector</a></code> | <code>string</code> | [Write] cloudwatch:DeleteAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteDashboards">DeleteDashboards</a></code> | <code>string</code> | [Write] cloudwatch:DeleteDashboards. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteDomain">DeleteDomain</a></code> | <code>string</code> | [Write] cloudwatch:DeleteDomain. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteDomainAccessGrantForOrganization">DeleteDomainAccessGrantForOrganization</a></code> | <code>string</code> | [PermissionManagement] cloudwatch:DeleteDomainAccessGrantForOrganization. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteDomainForOrganization">DeleteDomainForOrganization</a></code> | <code>string</code> | [Write] cloudwatch:DeleteDomainForOrganization. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteIngestionEndpoint">DeleteIngestionEndpoint</a></code> | <code>string</code> | [Write] cloudwatch:DeleteIngestionEndpoint. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteInsightRules">DeleteInsightRules</a></code> | <code>string</code> | [Write] cloudwatch:DeleteInsightRules. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteIntegration">DeleteIntegration</a></code> | <code>string</code> | [Write] cloudwatch:DeleteIntegration. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteMetricStream">DeleteMetricStream</a></code> | <code>string</code> | [Write] cloudwatch:DeleteMetricStream. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteOmniDashboard">DeleteOmniDashboard</a></code> | <code>string</code> | [Write] cloudwatch:DeleteOmniDashboard. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteOmniThread">DeleteOmniThread</a></code> | <code>string</code> | [Write] cloudwatch:DeleteOmniThread. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeletePipelineRule">DeletePipelineRule</a></code> | <code>string</code> | [Write] cloudwatch:DeletePipelineRule. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteServiceLevelObjective">DeleteServiceLevelObjective</a></code> | <code>string</code> | [Write] cloudwatch:DeleteServiceLevelObjective. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteSpace">DeleteSpace</a></code> | <code>string</code> | [Write] cloudwatch:DeleteSpace. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteView">DeleteView</a></code> | <code>string</code> | [Write] cloudwatch:DeleteView. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeAlarmHistory">DescribeAlarmHistory</a></code> | <code>string</code> | [Read] cloudwatch:DescribeAlarmHistory. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeAlarms">DescribeAlarms</a></code> | <code>string</code> | [Read] cloudwatch:DescribeAlarms. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeAlarmsForMetric">DescribeAlarmsForMetric</a></code> | <code>string</code> | [Read] cloudwatch:DescribeAlarmsForMetric. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeAnomalyDetectors">DescribeAnomalyDetectors</a></code> | <code>string</code> | [Read] cloudwatch:DescribeAnomalyDetectors. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeInsightRules">DescribeInsightRules</a></code> | <code>string</code> | [Read] cloudwatch:DescribeInsightRules. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DisableAlarmActions">DisableAlarmActions</a></code> | <code>string</code> | [Write] cloudwatch:DisableAlarmActions. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DisableInsightRules">DisableInsightRules</a></code> | <code>string</code> | [Write] cloudwatch:DisableInsightRules. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.EnableAlarmActions">EnableAlarmActions</a></code> | <code>string</code> | [Write] cloudwatch:EnableAlarmActions. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.EnableInsightRules">EnableInsightRules</a></code> | <code>string</code> | [Write] cloudwatch:EnableInsightRules. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.EnableTopologyDiscovery">EnableTopologyDiscovery</a></code> | <code>string</code> | [Write] cloudwatch:EnableTopologyDiscovery. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.GenerateQuery">GenerateQuery</a></code> | <code>string</code> | [Read] cloudwatch:GenerateQuery. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.GenerateQueryResultsSummary">GenerateQueryResultsSummary</a></code> | <code>string</code> | [Read] cloudwatch:GenerateQueryResultsSummary. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.InvokeIntegration">InvokeIntegration</a></code> | <code>string</code> | [Write] cloudwatch:InvokeIntegration. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.Link">Link</a></code> | <code>string</code> | [Write] cloudwatch:Link. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListAccessGrants">ListAccessGrants</a></code> | <code>string</code> | [List] cloudwatch:ListAccessGrants. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListAccessProfiles">ListAccessProfiles</a></code> | <code>string</code> | [List] cloudwatch:ListAccessProfiles. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListAlarmMuteRules">ListAlarmMuteRules</a></code> | <code>string</code> | [List] cloudwatch:ListAlarmMuteRules. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListAlertContributors">ListAlertContributors</a></code> | <code>string</code> | [List] cloudwatch:ListAlertContributors. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListAlerts">ListAlerts</a></code> | <code>string</code> | [List] cloudwatch:ListAlerts. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListDashboards">ListDashboards</a></code> | <code>string</code> | [List] cloudwatch:ListDashboards. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListDomainAccessGrantsForOrganization">ListDomainAccessGrantsForOrganization</a></code> | <code>string</code> | [List] cloudwatch:ListDomainAccessGrantsForOrganization. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListDomains">ListDomains</a></code> | <code>string</code> | [List] cloudwatch:ListDomains. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListEntitiesForMetric">ListEntitiesForMetric</a></code> | <code>string</code> | [List] cloudwatch:ListEntitiesForMetric. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListIngestionEndpoints">ListIngestionEndpoints</a></code> | <code>string</code> | [List] cloudwatch:ListIngestionEndpoints. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListIntegrations">ListIntegrations</a></code> | <code>string</code> | [List] cloudwatch:ListIntegrations. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListManagedInsightRules">ListManagedInsightRules</a></code> | <code>string</code> | [Read] cloudwatch:ListManagedInsightRules. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListMetrics">ListMetrics</a></code> | <code>string</code> | [List] cloudwatch:ListMetrics. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListMetricStreams">ListMetricStreams</a></code> | <code>string</code> | [List] cloudwatch:ListMetricStreams. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListOmniDashboards">ListOmniDashboards</a></code> | <code>string</code> | [List] cloudwatch:ListOmniDashboards. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListOmniThreads">ListOmniThreads</a></code> | <code>string</code> | [List] cloudwatch:ListOmniThreads. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListServiceLevelObjectives">ListServiceLevelObjectives</a></code> | <code>string</code> | [List] cloudwatch:ListServiceLevelObjectives. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListServices">ListServices</a></code> | <code>string</code> | [List] cloudwatch:ListServices. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListSpaceAccess">ListSpaceAccess</a></code> | <code>string</code> | [List] cloudwatch:ListSpaceAccess. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListSpaces">ListSpaces</a></code> | <code>string</code> | [List] cloudwatch:ListSpaces. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListSpacesForOrganization">ListSpacesForOrganization</a></code> | <code>string</code> | [List] cloudwatch:ListSpacesForOrganization. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] cloudwatch:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListTelemetryFields">ListTelemetryFields</a></code> | <code>string</code> | [List] cloudwatch:ListTelemetryFields. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListTelemetryQuerySessions">ListTelemetryQuerySessions</a></code> | <code>string</code> | [List] cloudwatch:ListTelemetryQuerySessions. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListViews">ListViews</a></code> | <code>string</code> | [List] cloudwatch:ListViews. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutAlarmMuteRule">PutAlarmMuteRule</a></code> | <code>string</code> | [Write] cloudwatch:PutAlarmMuteRule. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutAnomalyDetector">PutAnomalyDetector</a></code> | <code>string</code> | [Write] cloudwatch:PutAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutCompositeAlarm">PutCompositeAlarm</a></code> | <code>string</code> | [Write] cloudwatch:PutCompositeAlarm. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutDashboard">PutDashboard</a></code> | <code>string</code> | [Write] cloudwatch:PutDashboard. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutInsightRule">PutInsightRule</a></code> | <code>string</code> | [Write] cloudwatch:PutInsightRule. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutIntelligenceConfiguration">PutIntelligenceConfiguration</a></code> | <code>string</code> | [Write] cloudwatch:PutIntelligenceConfiguration. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutLogAlarm">PutLogAlarm</a></code> | <code>string</code> | [Write] cloudwatch:PutLogAlarm. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutManagedInsightRules">PutManagedInsightRules</a></code> | <code>string</code> | [Write] cloudwatch:PutManagedInsightRules. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutMetricAlarm">PutMetricAlarm</a></code> | <code>string</code> | [Write] cloudwatch:PutMetricAlarm. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutMetricData">PutMetricData</a></code> | <code>string</code> | [Write] cloudwatch:PutMetricData. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutMetricStream">PutMetricStream</a></code> | <code>string</code> | [Write] cloudwatch:PutMetricStream. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutPipelineRule">PutPipelineRule</a></code> | <code>string</code> | [Write] cloudwatch:PutPipelineRule. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.QueryTraces">QueryTraces</a></code> | <code>string</code> | [Write] cloudwatch:QueryTraces. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.SearchPrincipals">SearchPrincipals</a></code> | <code>string</code> | [Write] cloudwatch:SearchPrincipals. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StartMetricStreams">StartMetricStreams</a></code> | <code>string</code> | [Write] cloudwatch:StartMetricStreams. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StartOmniThreadSession">StartOmniThreadSession</a></code> | <code>string</code> | [Write] cloudwatch:StartOmniThreadSession. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StartOTelEnrichment">StartOTelEnrichment</a></code> | <code>string</code> | [Write] cloudwatch:StartOTelEnrichment. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StartTelemetryQuery">StartTelemetryQuery</a></code> | <code>string</code> | [Write] cloudwatch:StartTelemetryQuery. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StartTelemetryQuerySession">StartTelemetryQuerySession</a></code> | <code>string</code> | [Write] cloudwatch:StartTelemetryQuerySession. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StopMetricStreams">StopMetricStreams</a></code> | <code>string</code> | [Write] cloudwatch:StopMetricStreams. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StopOTelEnrichment">StopOTelEnrichment</a></code> | <code>string</code> | [Write] cloudwatch:StopOTelEnrichment. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StopTelemetryQuery">StopTelemetryQuery</a></code> | <code>string</code> | [Write] cloudwatch:StopTelemetryQuery. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StopTelemetryQuerySession">StopTelemetryQuerySession</a></code> | <code>string</code> | [Write] cloudwatch:StopTelemetryQuerySession. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.SubmitFeedback">SubmitFeedback</a></code> | <code>string</code> | [Write] cloudwatch:SubmitFeedback. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] cloudwatch:TagResource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] cloudwatch:UntagResource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateAccessProfile">UpdateAccessProfile</a></code> | <code>string</code> | [PermissionManagement] cloudwatch:UpdateAccessProfile. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateAlert">UpdateAlert</a></code> | <code>string</code> | [Write] cloudwatch:UpdateAlert. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateDomain">UpdateDomain</a></code> | <code>string</code> | [Write] cloudwatch:UpdateDomain. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateDomainForOrganization">UpdateDomainForOrganization</a></code> | <code>string</code> | [Write] cloudwatch:UpdateDomainForOrganization. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateIngestionEndpoint">UpdateIngestionEndpoint</a></code> | <code>string</code> | [Write] cloudwatch:UpdateIngestionEndpoint. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateIntegration">UpdateIntegration</a></code> | <code>string</code> | [Write] cloudwatch:UpdateIntegration. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateOmniDashboard">UpdateOmniDashboard</a></code> | <code>string</code> | [Write] cloudwatch:UpdateOmniDashboard. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateOmniThread">UpdateOmniThread</a></code> | <code>string</code> | [Write] cloudwatch:UpdateOmniThread. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdatePreferences">UpdatePreferences</a></code> | <code>string</code> | [Write] cloudwatch:UpdatePreferences. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateServiceLevelObjective">UpdateServiceLevelObjective</a></code> | <code>string</code> | [Write] cloudwatch:UpdateServiceLevelObjective. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateSpace">UpdateSpace</a></code> | <code>string</code> | [Write] cloudwatch:UpdateSpace. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateView">UpdateView</a></code> | <code>string</code> | [Write] cloudwatch:UpdateView. |

---

##### `actionGetAccessGrant`<sup>Required</sup> <a name="actionGetAccessGrant" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetAccessGrant"></a>

```typescript
public readonly actionGetAccessGrant: string;
```

- *Type:* string

[Read] cloudwatch:GetAccessGrant.

---

##### `actionGetAccessProfile`<sup>Required</sup> <a name="actionGetAccessProfile" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetAccessProfile"></a>

```typescript
public readonly actionGetAccessProfile: string;
```

- *Type:* string

[Read] cloudwatch:GetAccessProfile.

---

##### `actionGetAgentGraph`<sup>Required</sup> <a name="actionGetAgentGraph" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetAgentGraph"></a>

```typescript
public readonly actionGetAgentGraph: string;
```

- *Type:* string

[Read] cloudwatch:GetAgentGraph.

---

##### `actionGetAlarmMuteRule`<sup>Required</sup> <a name="actionGetAlarmMuteRule" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetAlarmMuteRule"></a>

```typescript
public readonly actionGetAlarmMuteRule: string;
```

- *Type:* string

[Read] cloudwatch:GetAlarmMuteRule.

---

##### `actionGetAlert`<sup>Required</sup> <a name="actionGetAlert" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetAlert"></a>

```typescript
public readonly actionGetAlert: string;
```

- *Type:* string

[Read] cloudwatch:GetAlert.

---

##### `actionGetContextGraph`<sup>Required</sup> <a name="actionGetContextGraph" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetContextGraph"></a>

```typescript
public readonly actionGetContextGraph: string;
```

- *Type:* string

[Read] cloudwatch:GetContextGraph.

---

##### `actionGetDashboard`<sup>Required</sup> <a name="actionGetDashboard" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetDashboard"></a>

```typescript
public readonly actionGetDashboard: string;
```

- *Type:* string

[Read] cloudwatch:GetDashboard.

---

##### `actionGetDataset`<sup>Required</sup> <a name="actionGetDataset" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetDataset"></a>

```typescript
public readonly actionGetDataset: string;
```

- *Type:* string

[Read] cloudwatch:GetDataset.

---

##### `actionGetDomain`<sup>Required</sup> <a name="actionGetDomain" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetDomain"></a>

```typescript
public readonly actionGetDomain: string;
```

- *Type:* string

[Read] cloudwatch:GetDomain.

---

##### `actionGetDomainAccessGrantForOrganization`<sup>Required</sup> <a name="actionGetDomainAccessGrantForOrganization" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetDomainAccessGrantForOrganization"></a>

```typescript
public readonly actionGetDomainAccessGrantForOrganization: string;
```

- *Type:* string

[Read] cloudwatch:GetDomainAccessGrantForOrganization.

---

##### `actionGetDomainForOrganization`<sup>Required</sup> <a name="actionGetDomainForOrganization" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetDomainForOrganization"></a>

```typescript
public readonly actionGetDomainForOrganization: string;
```

- *Type:* string

[Read] cloudwatch:GetDomainForOrganization.

---

##### `actionGetIngestionEndpoint`<sup>Required</sup> <a name="actionGetIngestionEndpoint" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetIngestionEndpoint"></a>

```typescript
public readonly actionGetIngestionEndpoint: string;
```

- *Type:* string

[Read] cloudwatch:GetIngestionEndpoint.

---

##### `actionGetInsightRuleReport`<sup>Required</sup> <a name="actionGetInsightRuleReport" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetInsightRuleReport"></a>

```typescript
public readonly actionGetInsightRuleReport: string;
```

- *Type:* string

[Read] cloudwatch:GetInsightRuleReport.

---

##### `actionGetIntegration`<sup>Required</sup> <a name="actionGetIntegration" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetIntegration"></a>

```typescript
public readonly actionGetIntegration: string;
```

- *Type:* string

[Read] cloudwatch:GetIntegration.

---

##### `actionGetIntelligenceConfiguration`<sup>Required</sup> <a name="actionGetIntelligenceConfiguration" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetIntelligenceConfiguration"></a>

```typescript
public readonly actionGetIntelligenceConfiguration: string;
```

- *Type:* string

[Read] cloudwatch:GetIntelligenceConfiguration.

---

##### `actionGetMetricData`<sup>Required</sup> <a name="actionGetMetricData" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetMetricData"></a>

```typescript
public readonly actionGetMetricData: string;
```

- *Type:* string

[Read] cloudwatch:GetMetricData.

---

##### `actionGetMetricStatistics`<sup>Required</sup> <a name="actionGetMetricStatistics" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetMetricStatistics"></a>

```typescript
public readonly actionGetMetricStatistics: string;
```

- *Type:* string

[Read] cloudwatch:GetMetricStatistics.

---

##### `actionGetMetricStream`<sup>Required</sup> <a name="actionGetMetricStream" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetMetricStream"></a>

```typescript
public readonly actionGetMetricStream: string;
```

- *Type:* string

[Read] cloudwatch:GetMetricStream.

---

##### `actionGetMetricWidgetImage`<sup>Required</sup> <a name="actionGetMetricWidgetImage" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetMetricWidgetImage"></a>

```typescript
public readonly actionGetMetricWidgetImage: string;
```

- *Type:* string

[Read] cloudwatch:GetMetricWidgetImage.

---

##### `actionGetOmniDashboard`<sup>Required</sup> <a name="actionGetOmniDashboard" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetOmniDashboard"></a>

```typescript
public readonly actionGetOmniDashboard: string;
```

- *Type:* string

[Read] cloudwatch:GetOmniDashboard.

---

##### `actionGetOmniThread`<sup>Required</sup> <a name="actionGetOmniThread" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetOmniThread"></a>

```typescript
public readonly actionGetOmniThread: string;
```

- *Type:* string

[Read] cloudwatch:GetOmniThread.

---

##### `actionGetOTelEnrichment`<sup>Required</sup> <a name="actionGetOTelEnrichment" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetOTelEnrichment"></a>

```typescript
public readonly actionGetOTelEnrichment: string;
```

- *Type:* string

[Read] cloudwatch:GetOTelEnrichment.

---

##### `actionGetPreferences`<sup>Required</sup> <a name="actionGetPreferences" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetPreferences"></a>

```typescript
public readonly actionGetPreferences: string;
```

- *Type:* string

[Read] cloudwatch:GetPreferences.

---

##### `actionGetRecords`<sup>Required</sup> <a name="actionGetRecords" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetRecords"></a>

```typescript
public readonly actionGetRecords: string;
```

- *Type:* string

[Read] cloudwatch:GetRecords.

---

##### `actionGetService`<sup>Required</sup> <a name="actionGetService" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetService"></a>

```typescript
public readonly actionGetService: string;
```

- *Type:* string

[Read] cloudwatch:GetService.

---

##### `actionGetServiceData`<sup>Required</sup> <a name="actionGetServiceData" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetServiceData"></a>

```typescript
public readonly actionGetServiceData: string;
```

- *Type:* string

[Read] cloudwatch:GetServiceData.

---

##### `actionGetServiceLevelObjective`<sup>Required</sup> <a name="actionGetServiceLevelObjective" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetServiceLevelObjective"></a>

```typescript
public readonly actionGetServiceLevelObjective: string;
```

- *Type:* string

[Read] cloudwatch:GetServiceLevelObjective.

---

##### `actionGetSpace`<sup>Required</sup> <a name="actionGetSpace" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetSpace"></a>

```typescript
public readonly actionGetSpace: string;
```

- *Type:* string

[Read] cloudwatch:GetSpace.

---

##### `actionGetSpaceCredentials`<sup>Required</sup> <a name="actionGetSpaceCredentials" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetSpaceCredentials"></a>

```typescript
public readonly actionGetSpaceCredentials: string;
```

- *Type:* string

[Read] cloudwatch:GetSpaceCredentials.

---

##### `actionGetSpaceCredentialsForOrganization`<sup>Required</sup> <a name="actionGetSpaceCredentialsForOrganization" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetSpaceCredentialsForOrganization"></a>

```typescript
public readonly actionGetSpaceCredentialsForOrganization: string;
```

- *Type:* string

[Read] cloudwatch:GetSpaceCredentialsForOrganization.

---

##### `actionGetTelemetryQueryResults`<sup>Required</sup> <a name="actionGetTelemetryQueryResults" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetTelemetryQueryResults"></a>

```typescript
public readonly actionGetTelemetryQueryResults: string;
```

- *Type:* string

[Read] cloudwatch:GetTelemetryQueryResults.

---

##### `actionGetTopologyDiscoveryStatus`<sup>Required</sup> <a name="actionGetTopologyDiscoveryStatus" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetTopologyDiscoveryStatus"></a>

```typescript
public readonly actionGetTopologyDiscoveryStatus: string;
```

- *Type:* string

[Read] cloudwatch:GetTopologyDiscoveryStatus.

---

##### `actionGetTopologyMap`<sup>Required</sup> <a name="actionGetTopologyMap" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetTopologyMap"></a>

```typescript
public readonly actionGetTopologyMap: string;
```

- *Type:* string

[Read] cloudwatch:GetTopologyMap.

---

##### `actionGetView`<sup>Required</sup> <a name="actionGetView" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetView"></a>

```typescript
public readonly actionGetView: string;
```

- *Type:* string

[Read] cloudwatch:GetView.

---

##### `actionSetAlarmState`<sup>Required</sup> <a name="actionSetAlarmState" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionSetAlarmState"></a>

```typescript
public readonly actionSetAlarmState: string;
```

- *Type:* string

[Write] cloudwatch:SetAlarmState.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssumeAccessProfile`<sup>Required</sup> <a name="AssumeAccessProfile" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AssumeAccessProfile"></a>

```typescript
public readonly AssumeAccessProfile: string;
```

- *Type:* string

[PermissionManagement] cloudwatch:AssumeAccessProfile.

---

##### `BatchGetServiceLevelIndicatorReport`<sup>Required</sup> <a name="BatchGetServiceLevelIndicatorReport" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.BatchGetServiceLevelIndicatorReport"></a>

```typescript
public readonly BatchGetServiceLevelIndicatorReport: string;
```

- *Type:* string

[Read] cloudwatch:BatchGetServiceLevelIndicatorReport.

---

##### `BatchGetServiceLevelObjectiveBudgetReport`<sup>Required</sup> <a name="BatchGetServiceLevelObjectiveBudgetReport" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.BatchGetServiceLevelObjectiveBudgetReport"></a>

```typescript
public readonly BatchGetServiceLevelObjectiveBudgetReport: string;
```

- *Type:* string

[Read] cloudwatch:BatchGetServiceLevelObjectiveBudgetReport.

---

##### `CallWithBearerToken`<sup>Required</sup> <a name="CallWithBearerToken" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CallWithBearerToken"></a>

```typescript
public readonly CallWithBearerToken: string;
```

- *Type:* string

[Write] cloudwatch:CallWithBearerToken.

---

##### `CreateAccessGrant`<sup>Required</sup> <a name="CreateAccessGrant" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateAccessGrant"></a>

```typescript
public readonly CreateAccessGrant: string;
```

- *Type:* string

[PermissionManagement] cloudwatch:CreateAccessGrant.

---

##### `CreateAccessProfile`<sup>Required</sup> <a name="CreateAccessProfile" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateAccessProfile"></a>

```typescript
public readonly CreateAccessProfile: string;
```

- *Type:* string

[PermissionManagement] cloudwatch:CreateAccessProfile.

---

##### `CreateAlert`<sup>Required</sup> <a name="CreateAlert" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateAlert"></a>

```typescript
public readonly CreateAlert: string;
```

- *Type:* string

[Write] cloudwatch:CreateAlert.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string;
```

- *Type:* string

[Write] cloudwatch:CreateDomain.

---

##### `CreateDomainAccessGrantForOrganization`<sup>Required</sup> <a name="CreateDomainAccessGrantForOrganization" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateDomainAccessGrantForOrganization"></a>

```typescript
public readonly CreateDomainAccessGrantForOrganization: string;
```

- *Type:* string

[PermissionManagement] cloudwatch:CreateDomainAccessGrantForOrganization.

---

##### `CreateDomainForOrganization`<sup>Required</sup> <a name="CreateDomainForOrganization" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateDomainForOrganization"></a>

```typescript
public readonly CreateDomainForOrganization: string;
```

- *Type:* string

[Write] cloudwatch:CreateDomainForOrganization.

---

##### `CreateIngestionEndpoint`<sup>Required</sup> <a name="CreateIngestionEndpoint" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateIngestionEndpoint"></a>

```typescript
public readonly CreateIngestionEndpoint: string;
```

- *Type:* string

[Write] cloudwatch:CreateIngestionEndpoint.

---

##### `CreateIntegration`<sup>Required</sup> <a name="CreateIntegration" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateIntegration"></a>

```typescript
public readonly CreateIntegration: string;
```

- *Type:* string

[Write] cloudwatch:CreateIntegration.

---

##### `CreateOmniDashboard`<sup>Required</sup> <a name="CreateOmniDashboard" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateOmniDashboard"></a>

```typescript
public readonly CreateOmniDashboard: string;
```

- *Type:* string

[Write] cloudwatch:CreateOmniDashboard.

---

##### `CreateOmniThread`<sup>Required</sup> <a name="CreateOmniThread" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateOmniThread"></a>

```typescript
public readonly CreateOmniThread: string;
```

- *Type:* string

[Write] cloudwatch:CreateOmniThread.

---

##### `CreateOneTimeDeepLinkCode`<sup>Required</sup> <a name="CreateOneTimeDeepLinkCode" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateOneTimeDeepLinkCode"></a>

```typescript
public readonly CreateOneTimeDeepLinkCode: string;
```

- *Type:* string

[Write] cloudwatch:CreateOneTimeDeepLinkCode.

---

##### `CreateServiceLevelObjective`<sup>Required</sup> <a name="CreateServiceLevelObjective" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateServiceLevelObjective"></a>

```typescript
public readonly CreateServiceLevelObjective: string;
```

- *Type:* string

[Write] cloudwatch:CreateServiceLevelObjective.

---

##### `CreateSpace`<sup>Required</sup> <a name="CreateSpace" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateSpace"></a>

```typescript
public readonly CreateSpace: string;
```

- *Type:* string

[Write] cloudwatch:CreateSpace.

---

##### `CreateView`<sup>Required</sup> <a name="CreateView" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateView"></a>

```typescript
public readonly CreateView: string;
```

- *Type:* string

[Write] cloudwatch:CreateView.

---

##### `DeleteAccessGrant`<sup>Required</sup> <a name="DeleteAccessGrant" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteAccessGrant"></a>

```typescript
public readonly DeleteAccessGrant: string;
```

- *Type:* string

[PermissionManagement] cloudwatch:DeleteAccessGrant.

---

##### `DeleteAccessProfile`<sup>Required</sup> <a name="DeleteAccessProfile" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteAccessProfile"></a>

```typescript
public readonly DeleteAccessProfile: string;
```

- *Type:* string

[PermissionManagement] cloudwatch:DeleteAccessProfile.

---

##### `DeleteAlarmMuteRule`<sup>Required</sup> <a name="DeleteAlarmMuteRule" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteAlarmMuteRule"></a>

```typescript
public readonly DeleteAlarmMuteRule: string;
```

- *Type:* string

[Write] cloudwatch:DeleteAlarmMuteRule.

---

##### `DeleteAlarms`<sup>Required</sup> <a name="DeleteAlarms" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteAlarms"></a>

```typescript
public readonly DeleteAlarms: string;
```

- *Type:* string

[Write] cloudwatch:DeleteAlarms.

---

##### `DeleteAlert`<sup>Required</sup> <a name="DeleteAlert" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteAlert"></a>

```typescript
public readonly DeleteAlert: string;
```

- *Type:* string

[Write] cloudwatch:DeleteAlert.

---

##### `DeleteAnomalyDetector`<sup>Required</sup> <a name="DeleteAnomalyDetector" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteAnomalyDetector"></a>

```typescript
public readonly DeleteAnomalyDetector: string;
```

- *Type:* string

[Write] cloudwatch:DeleteAnomalyDetector.

---

##### `DeleteDashboards`<sup>Required</sup> <a name="DeleteDashboards" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteDashboards"></a>

```typescript
public readonly DeleteDashboards: string;
```

- *Type:* string

[Write] cloudwatch:DeleteDashboards.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string;
```

- *Type:* string

[Write] cloudwatch:DeleteDomain.

---

##### `DeleteDomainAccessGrantForOrganization`<sup>Required</sup> <a name="DeleteDomainAccessGrantForOrganization" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteDomainAccessGrantForOrganization"></a>

```typescript
public readonly DeleteDomainAccessGrantForOrganization: string;
```

- *Type:* string

[PermissionManagement] cloudwatch:DeleteDomainAccessGrantForOrganization.

---

##### `DeleteDomainForOrganization`<sup>Required</sup> <a name="DeleteDomainForOrganization" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteDomainForOrganization"></a>

```typescript
public readonly DeleteDomainForOrganization: string;
```

- *Type:* string

[Write] cloudwatch:DeleteDomainForOrganization.

---

##### `DeleteIngestionEndpoint`<sup>Required</sup> <a name="DeleteIngestionEndpoint" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteIngestionEndpoint"></a>

```typescript
public readonly DeleteIngestionEndpoint: string;
```

- *Type:* string

[Write] cloudwatch:DeleteIngestionEndpoint.

---

##### `DeleteInsightRules`<sup>Required</sup> <a name="DeleteInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteInsightRules"></a>

```typescript
public readonly DeleteInsightRules: string;
```

- *Type:* string

[Write] cloudwatch:DeleteInsightRules.

---

##### `DeleteIntegration`<sup>Required</sup> <a name="DeleteIntegration" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteIntegration"></a>

```typescript
public readonly DeleteIntegration: string;
```

- *Type:* string

[Write] cloudwatch:DeleteIntegration.

---

##### `DeleteMetricStream`<sup>Required</sup> <a name="DeleteMetricStream" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteMetricStream"></a>

```typescript
public readonly DeleteMetricStream: string;
```

- *Type:* string

[Write] cloudwatch:DeleteMetricStream.

---

##### `DeleteOmniDashboard`<sup>Required</sup> <a name="DeleteOmniDashboard" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteOmniDashboard"></a>

```typescript
public readonly DeleteOmniDashboard: string;
```

- *Type:* string

[Write] cloudwatch:DeleteOmniDashboard.

---

##### `DeleteOmniThread`<sup>Required</sup> <a name="DeleteOmniThread" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteOmniThread"></a>

```typescript
public readonly DeleteOmniThread: string;
```

- *Type:* string

[Write] cloudwatch:DeleteOmniThread.

---

##### `DeletePipelineRule`<sup>Required</sup> <a name="DeletePipelineRule" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeletePipelineRule"></a>

```typescript
public readonly DeletePipelineRule: string;
```

- *Type:* string

[Write] cloudwatch:DeletePipelineRule.

---

##### `DeleteServiceLevelObjective`<sup>Required</sup> <a name="DeleteServiceLevelObjective" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteServiceLevelObjective"></a>

```typescript
public readonly DeleteServiceLevelObjective: string;
```

- *Type:* string

[Write] cloudwatch:DeleteServiceLevelObjective.

---

##### `DeleteSpace`<sup>Required</sup> <a name="DeleteSpace" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteSpace"></a>

```typescript
public readonly DeleteSpace: string;
```

- *Type:* string

[Write] cloudwatch:DeleteSpace.

---

##### `DeleteView`<sup>Required</sup> <a name="DeleteView" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteView"></a>

```typescript
public readonly DeleteView: string;
```

- *Type:* string

[Write] cloudwatch:DeleteView.

---

##### `DescribeAlarmHistory`<sup>Required</sup> <a name="DescribeAlarmHistory" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeAlarmHistory"></a>

```typescript
public readonly DescribeAlarmHistory: string;
```

- *Type:* string

[Read] cloudwatch:DescribeAlarmHistory.

---

##### `DescribeAlarms`<sup>Required</sup> <a name="DescribeAlarms" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeAlarms"></a>

```typescript
public readonly DescribeAlarms: string;
```

- *Type:* string

[Read] cloudwatch:DescribeAlarms.

---

##### `DescribeAlarmsForMetric`<sup>Required</sup> <a name="DescribeAlarmsForMetric" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeAlarmsForMetric"></a>

```typescript
public readonly DescribeAlarmsForMetric: string;
```

- *Type:* string

[Read] cloudwatch:DescribeAlarmsForMetric.

---

##### `DescribeAnomalyDetectors`<sup>Required</sup> <a name="DescribeAnomalyDetectors" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeAnomalyDetectors"></a>

```typescript
public readonly DescribeAnomalyDetectors: string;
```

- *Type:* string

[Read] cloudwatch:DescribeAnomalyDetectors.

---

##### `DescribeInsightRules`<sup>Required</sup> <a name="DescribeInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeInsightRules"></a>

```typescript
public readonly DescribeInsightRules: string;
```

- *Type:* string

[Read] cloudwatch:DescribeInsightRules.

---

##### `DisableAlarmActions`<sup>Required</sup> <a name="DisableAlarmActions" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DisableAlarmActions"></a>

```typescript
public readonly DisableAlarmActions: string;
```

- *Type:* string

[Write] cloudwatch:DisableAlarmActions.

---

##### `DisableInsightRules`<sup>Required</sup> <a name="DisableInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DisableInsightRules"></a>

```typescript
public readonly DisableInsightRules: string;
```

- *Type:* string

[Write] cloudwatch:DisableInsightRules.

---

##### `EnableAlarmActions`<sup>Required</sup> <a name="EnableAlarmActions" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.EnableAlarmActions"></a>

```typescript
public readonly EnableAlarmActions: string;
```

- *Type:* string

[Write] cloudwatch:EnableAlarmActions.

---

##### `EnableInsightRules`<sup>Required</sup> <a name="EnableInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.EnableInsightRules"></a>

```typescript
public readonly EnableInsightRules: string;
```

- *Type:* string

[Write] cloudwatch:EnableInsightRules.

---

##### `EnableTopologyDiscovery`<sup>Required</sup> <a name="EnableTopologyDiscovery" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.EnableTopologyDiscovery"></a>

```typescript
public readonly EnableTopologyDiscovery: string;
```

- *Type:* string

[Write] cloudwatch:EnableTopologyDiscovery.

---

##### `GenerateQuery`<sup>Required</sup> <a name="GenerateQuery" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.GenerateQuery"></a>

```typescript
public readonly GenerateQuery: string;
```

- *Type:* string

[Read] cloudwatch:GenerateQuery.

---

##### `GenerateQueryResultsSummary`<sup>Required</sup> <a name="GenerateQueryResultsSummary" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.GenerateQueryResultsSummary"></a>

```typescript
public readonly GenerateQueryResultsSummary: string;
```

- *Type:* string

[Read] cloudwatch:GenerateQueryResultsSummary.

---

##### `InvokeIntegration`<sup>Required</sup> <a name="InvokeIntegration" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.InvokeIntegration"></a>

```typescript
public readonly InvokeIntegration: string;
```

- *Type:* string

[Write] cloudwatch:InvokeIntegration.

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.Link"></a>

```typescript
public readonly Link: string;
```

- *Type:* string

[Write] cloudwatch:Link.

---

##### `ListAccessGrants`<sup>Required</sup> <a name="ListAccessGrants" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListAccessGrants"></a>

```typescript
public readonly ListAccessGrants: string;
```

- *Type:* string

[List] cloudwatch:ListAccessGrants.

---

##### `ListAccessProfiles`<sup>Required</sup> <a name="ListAccessProfiles" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListAccessProfiles"></a>

```typescript
public readonly ListAccessProfiles: string;
```

- *Type:* string

[List] cloudwatch:ListAccessProfiles.

---

##### `ListAlarmMuteRules`<sup>Required</sup> <a name="ListAlarmMuteRules" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListAlarmMuteRules"></a>

```typescript
public readonly ListAlarmMuteRules: string;
```

- *Type:* string

[List] cloudwatch:ListAlarmMuteRules.

---

##### `ListAlertContributors`<sup>Required</sup> <a name="ListAlertContributors" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListAlertContributors"></a>

```typescript
public readonly ListAlertContributors: string;
```

- *Type:* string

[List] cloudwatch:ListAlertContributors.

---

##### `ListAlerts`<sup>Required</sup> <a name="ListAlerts" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListAlerts"></a>

```typescript
public readonly ListAlerts: string;
```

- *Type:* string

[List] cloudwatch:ListAlerts.

---

##### `ListDashboards`<sup>Required</sup> <a name="ListDashboards" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListDashboards"></a>

```typescript
public readonly ListDashboards: string;
```

- *Type:* string

[List] cloudwatch:ListDashboards.

---

##### `ListDomainAccessGrantsForOrganization`<sup>Required</sup> <a name="ListDomainAccessGrantsForOrganization" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListDomainAccessGrantsForOrganization"></a>

```typescript
public readonly ListDomainAccessGrantsForOrganization: string;
```

- *Type:* string

[List] cloudwatch:ListDomainAccessGrantsForOrganization.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListDomains"></a>

```typescript
public readonly ListDomains: string;
```

- *Type:* string

[List] cloudwatch:ListDomains.

---

##### `ListEntitiesForMetric`<sup>Required</sup> <a name="ListEntitiesForMetric" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListEntitiesForMetric"></a>

```typescript
public readonly ListEntitiesForMetric: string;
```

- *Type:* string

[List] cloudwatch:ListEntitiesForMetric.

---

##### `ListIngestionEndpoints`<sup>Required</sup> <a name="ListIngestionEndpoints" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListIngestionEndpoints"></a>

```typescript
public readonly ListIngestionEndpoints: string;
```

- *Type:* string

[List] cloudwatch:ListIngestionEndpoints.

---

##### `ListIntegrations`<sup>Required</sup> <a name="ListIntegrations" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListIntegrations"></a>

```typescript
public readonly ListIntegrations: string;
```

- *Type:* string

[List] cloudwatch:ListIntegrations.

---

##### `ListManagedInsightRules`<sup>Required</sup> <a name="ListManagedInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListManagedInsightRules"></a>

```typescript
public readonly ListManagedInsightRules: string;
```

- *Type:* string

[Read] cloudwatch:ListManagedInsightRules.

---

##### `ListMetrics`<sup>Required</sup> <a name="ListMetrics" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListMetrics"></a>

```typescript
public readonly ListMetrics: string;
```

- *Type:* string

[List] cloudwatch:ListMetrics.

---

##### `ListMetricStreams`<sup>Required</sup> <a name="ListMetricStreams" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListMetricStreams"></a>

```typescript
public readonly ListMetricStreams: string;
```

- *Type:* string

[List] cloudwatch:ListMetricStreams.

---

##### `ListOmniDashboards`<sup>Required</sup> <a name="ListOmniDashboards" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListOmniDashboards"></a>

```typescript
public readonly ListOmniDashboards: string;
```

- *Type:* string

[List] cloudwatch:ListOmniDashboards.

---

##### `ListOmniThreads`<sup>Required</sup> <a name="ListOmniThreads" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListOmniThreads"></a>

```typescript
public readonly ListOmniThreads: string;
```

- *Type:* string

[List] cloudwatch:ListOmniThreads.

---

##### `ListServiceLevelObjectives`<sup>Required</sup> <a name="ListServiceLevelObjectives" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListServiceLevelObjectives"></a>

```typescript
public readonly ListServiceLevelObjectives: string;
```

- *Type:* string

[List] cloudwatch:ListServiceLevelObjectives.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListServices"></a>

```typescript
public readonly ListServices: string;
```

- *Type:* string

[List] cloudwatch:ListServices.

---

##### `ListSpaceAccess`<sup>Required</sup> <a name="ListSpaceAccess" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListSpaceAccess"></a>

```typescript
public readonly ListSpaceAccess: string;
```

- *Type:* string

[List] cloudwatch:ListSpaceAccess.

---

##### `ListSpaces`<sup>Required</sup> <a name="ListSpaces" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListSpaces"></a>

```typescript
public readonly ListSpaces: string;
```

- *Type:* string

[List] cloudwatch:ListSpaces.

---

##### `ListSpacesForOrganization`<sup>Required</sup> <a name="ListSpacesForOrganization" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListSpacesForOrganization"></a>

```typescript
public readonly ListSpacesForOrganization: string;
```

- *Type:* string

[List] cloudwatch:ListSpacesForOrganization.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] cloudwatch:ListTagsForResource.

---

##### `ListTelemetryFields`<sup>Required</sup> <a name="ListTelemetryFields" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListTelemetryFields"></a>

```typescript
public readonly ListTelemetryFields: string;
```

- *Type:* string

[List] cloudwatch:ListTelemetryFields.

---

##### `ListTelemetryQuerySessions`<sup>Required</sup> <a name="ListTelemetryQuerySessions" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListTelemetryQuerySessions"></a>

```typescript
public readonly ListTelemetryQuerySessions: string;
```

- *Type:* string

[List] cloudwatch:ListTelemetryQuerySessions.

---

##### `ListViews`<sup>Required</sup> <a name="ListViews" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListViews"></a>

```typescript
public readonly ListViews: string;
```

- *Type:* string

[List] cloudwatch:ListViews.

---

##### `PutAlarmMuteRule`<sup>Required</sup> <a name="PutAlarmMuteRule" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutAlarmMuteRule"></a>

```typescript
public readonly PutAlarmMuteRule: string;
```

- *Type:* string

[Write] cloudwatch:PutAlarmMuteRule.

---

##### `PutAnomalyDetector`<sup>Required</sup> <a name="PutAnomalyDetector" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutAnomalyDetector"></a>

```typescript
public readonly PutAnomalyDetector: string;
```

- *Type:* string

[Write] cloudwatch:PutAnomalyDetector.

---

##### `PutCompositeAlarm`<sup>Required</sup> <a name="PutCompositeAlarm" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutCompositeAlarm"></a>

```typescript
public readonly PutCompositeAlarm: string;
```

- *Type:* string

[Write] cloudwatch:PutCompositeAlarm.

---

##### `PutDashboard`<sup>Required</sup> <a name="PutDashboard" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutDashboard"></a>

```typescript
public readonly PutDashboard: string;
```

- *Type:* string

[Write] cloudwatch:PutDashboard.

---

##### `PutInsightRule`<sup>Required</sup> <a name="PutInsightRule" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutInsightRule"></a>

```typescript
public readonly PutInsightRule: string;
```

- *Type:* string

[Write] cloudwatch:PutInsightRule.

---

##### `PutIntelligenceConfiguration`<sup>Required</sup> <a name="PutIntelligenceConfiguration" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutIntelligenceConfiguration"></a>

```typescript
public readonly PutIntelligenceConfiguration: string;
```

- *Type:* string

[Write] cloudwatch:PutIntelligenceConfiguration.

---

##### `PutLogAlarm`<sup>Required</sup> <a name="PutLogAlarm" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutLogAlarm"></a>

```typescript
public readonly PutLogAlarm: string;
```

- *Type:* string

[Write] cloudwatch:PutLogAlarm.

---

##### `PutManagedInsightRules`<sup>Required</sup> <a name="PutManagedInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutManagedInsightRules"></a>

```typescript
public readonly PutManagedInsightRules: string;
```

- *Type:* string

[Write] cloudwatch:PutManagedInsightRules.

---

##### `PutMetricAlarm`<sup>Required</sup> <a name="PutMetricAlarm" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutMetricAlarm"></a>

```typescript
public readonly PutMetricAlarm: string;
```

- *Type:* string

[Write] cloudwatch:PutMetricAlarm.

---

##### `PutMetricData`<sup>Required</sup> <a name="PutMetricData" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutMetricData"></a>

```typescript
public readonly PutMetricData: string;
```

- *Type:* string

[Write] cloudwatch:PutMetricData.

---

##### `PutMetricStream`<sup>Required</sup> <a name="PutMetricStream" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutMetricStream"></a>

```typescript
public readonly PutMetricStream: string;
```

- *Type:* string

[Write] cloudwatch:PutMetricStream.

---

##### `PutPipelineRule`<sup>Required</sup> <a name="PutPipelineRule" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutPipelineRule"></a>

```typescript
public readonly PutPipelineRule: string;
```

- *Type:* string

[Write] cloudwatch:PutPipelineRule.

---

##### `QueryTraces`<sup>Required</sup> <a name="QueryTraces" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.QueryTraces"></a>

```typescript
public readonly QueryTraces: string;
```

- *Type:* string

[Write] cloudwatch:QueryTraces.

---

##### `SearchPrincipals`<sup>Required</sup> <a name="SearchPrincipals" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.SearchPrincipals"></a>

```typescript
public readonly SearchPrincipals: string;
```

- *Type:* string

[Write] cloudwatch:SearchPrincipals.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartMetricStreams`<sup>Required</sup> <a name="StartMetricStreams" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StartMetricStreams"></a>

```typescript
public readonly StartMetricStreams: string;
```

- *Type:* string

[Write] cloudwatch:StartMetricStreams.

---

##### `StartOmniThreadSession`<sup>Required</sup> <a name="StartOmniThreadSession" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StartOmniThreadSession"></a>

```typescript
public readonly StartOmniThreadSession: string;
```

- *Type:* string

[Write] cloudwatch:StartOmniThreadSession.

---

##### `StartOTelEnrichment`<sup>Required</sup> <a name="StartOTelEnrichment" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StartOTelEnrichment"></a>

```typescript
public readonly StartOTelEnrichment: string;
```

- *Type:* string

[Write] cloudwatch:StartOTelEnrichment.

---

##### `StartTelemetryQuery`<sup>Required</sup> <a name="StartTelemetryQuery" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StartTelemetryQuery"></a>

```typescript
public readonly StartTelemetryQuery: string;
```

- *Type:* string

[Write] cloudwatch:StartTelemetryQuery.

---

##### `StartTelemetryQuerySession`<sup>Required</sup> <a name="StartTelemetryQuerySession" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StartTelemetryQuerySession"></a>

```typescript
public readonly StartTelemetryQuerySession: string;
```

- *Type:* string

[Write] cloudwatch:StartTelemetryQuerySession.

---

##### `StopMetricStreams`<sup>Required</sup> <a name="StopMetricStreams" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StopMetricStreams"></a>

```typescript
public readonly StopMetricStreams: string;
```

- *Type:* string

[Write] cloudwatch:StopMetricStreams.

---

##### `StopOTelEnrichment`<sup>Required</sup> <a name="StopOTelEnrichment" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StopOTelEnrichment"></a>

```typescript
public readonly StopOTelEnrichment: string;
```

- *Type:* string

[Write] cloudwatch:StopOTelEnrichment.

---

##### `StopTelemetryQuery`<sup>Required</sup> <a name="StopTelemetryQuery" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StopTelemetryQuery"></a>

```typescript
public readonly StopTelemetryQuery: string;
```

- *Type:* string

[Write] cloudwatch:StopTelemetryQuery.

---

##### `StopTelemetryQuerySession`<sup>Required</sup> <a name="StopTelemetryQuerySession" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StopTelemetryQuerySession"></a>

```typescript
public readonly StopTelemetryQuerySession: string;
```

- *Type:* string

[Write] cloudwatch:StopTelemetryQuerySession.

---

##### `SubmitFeedback`<sup>Required</sup> <a name="SubmitFeedback" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.SubmitFeedback"></a>

```typescript
public readonly SubmitFeedback: string;
```

- *Type:* string

[Write] cloudwatch:SubmitFeedback.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] cloudwatch:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] cloudwatch:UntagResource.

---

##### `UpdateAccessProfile`<sup>Required</sup> <a name="UpdateAccessProfile" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateAccessProfile"></a>

```typescript
public readonly UpdateAccessProfile: string;
```

- *Type:* string

[PermissionManagement] cloudwatch:UpdateAccessProfile.

---

##### `UpdateAlert`<sup>Required</sup> <a name="UpdateAlert" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateAlert"></a>

```typescript
public readonly UpdateAlert: string;
```

- *Type:* string

[Write] cloudwatch:UpdateAlert.

---

##### `UpdateDomain`<sup>Required</sup> <a name="UpdateDomain" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateDomain"></a>

```typescript
public readonly UpdateDomain: string;
```

- *Type:* string

[Write] cloudwatch:UpdateDomain.

---

##### `UpdateDomainForOrganization`<sup>Required</sup> <a name="UpdateDomainForOrganization" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateDomainForOrganization"></a>

```typescript
public readonly UpdateDomainForOrganization: string;
```

- *Type:* string

[Write] cloudwatch:UpdateDomainForOrganization.

---

##### `UpdateIngestionEndpoint`<sup>Required</sup> <a name="UpdateIngestionEndpoint" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateIngestionEndpoint"></a>

```typescript
public readonly UpdateIngestionEndpoint: string;
```

- *Type:* string

[Write] cloudwatch:UpdateIngestionEndpoint.

---

##### `UpdateIntegration`<sup>Required</sup> <a name="UpdateIntegration" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateIntegration"></a>

```typescript
public readonly UpdateIntegration: string;
```

- *Type:* string

[Write] cloudwatch:UpdateIntegration.

---

##### `UpdateOmniDashboard`<sup>Required</sup> <a name="UpdateOmniDashboard" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateOmniDashboard"></a>

```typescript
public readonly UpdateOmniDashboard: string;
```

- *Type:* string

[Write] cloudwatch:UpdateOmniDashboard.

---

##### `UpdateOmniThread`<sup>Required</sup> <a name="UpdateOmniThread" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateOmniThread"></a>

```typescript
public readonly UpdateOmniThread: string;
```

- *Type:* string

[Write] cloudwatch:UpdateOmniThread.

---

##### `UpdatePreferences`<sup>Required</sup> <a name="UpdatePreferences" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdatePreferences"></a>

```typescript
public readonly UpdatePreferences: string;
```

- *Type:* string

[Write] cloudwatch:UpdatePreferences.

---

##### `UpdateServiceLevelObjective`<sup>Required</sup> <a name="UpdateServiceLevelObjective" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateServiceLevelObjective"></a>

```typescript
public readonly UpdateServiceLevelObjective: string;
```

- *Type:* string

[Write] cloudwatch:UpdateServiceLevelObjective.

---

##### `UpdateSpace`<sup>Required</sup> <a name="UpdateSpace" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateSpace"></a>

```typescript
public readonly UpdateSpace: string;
```

- *Type:* string

[Write] cloudwatch:UpdateSpace.

---

##### `UpdateView`<sup>Required</sup> <a name="UpdateView" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateView"></a>

```typescript
public readonly UpdateView: string;
```

- *Type:* string

[Write] cloudwatch:UpdateView.

---

### CloudWatchConditions <a name="CloudWatchConditions" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions"></a>

Condition key constants and builders for cloudwatch.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

new cloudwatch.CloudWatchConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.alarmActions">alarmActions</a></code> | Generates a condition block for `cloudwatch:AlarmActions`. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.hasAccessGrant">hasAccessGrant</a></code> | Generates a condition block for `cloudwatch:HasAccessGrant`. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.namespace">namespace</a></code> | Generates a condition block for `cloudwatch:namespace`. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.requestInsightRuleLogGroups">requestInsightRuleLogGroups</a></code> | Generates a condition block for `cloudwatch:requestInsightRuleLogGroups`. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.requestManagedResourceArNs">requestManagedResourceArNs</a></code> | Generates a condition block for `cloudwatch:requestManagedResourceARNs`. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `alarmActions` <a name="alarmActions" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.alarmActions"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchConditions.alarmActions(values: string[])
```

Generates a condition block for `cloudwatch:AlarmActions`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.alarmActions.parameter.values"></a>

- *Type:* string[]

---

##### `hasAccessGrant` <a name="hasAccessGrant" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.hasAccessGrant"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchConditions.hasAccessGrant(value: string)
```

Generates a condition block for `cloudwatch:HasAccessGrant`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.hasAccessGrant.parameter.value"></a>

- *Type:* string

---

##### `namespace` <a name="namespace" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.namespace"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchConditions.namespace(value: string)
```

Generates a condition block for `cloudwatch:namespace`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.namespace.parameter.value"></a>

- *Type:* string

---

##### `requestInsightRuleLogGroups` <a name="requestInsightRuleLogGroups" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.requestInsightRuleLogGroups"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchConditions.requestInsightRuleLogGroups(values: string[])
```

Generates a condition block for `cloudwatch:requestInsightRuleLogGroups`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.requestInsightRuleLogGroups.parameter.values"></a>

- *Type:* string[]

---

##### `requestManagedResourceArNs` <a name="requestManagedResourceArNs" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.requestManagedResourceArNs"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchConditions.requestManagedResourceArNs(values: string[])
```

Generates a condition block for `cloudwatch:requestManagedResourceARNs`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.requestManagedResourceArNs.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.requestTag"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.resourceTag"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.tagKeys"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetAccessGrantConditionKeys">actionGetAccessGrantConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAccessGrant action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetAccessProfileConditionKeys">actionGetAccessProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAccessProfile action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetAlertConditionKeys">actionGetAlertConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAlert action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetContextGraphConditionKeys">actionGetContextGraphConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetContextGraph action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetDatasetConditionKeys">actionGetDatasetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDataset action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetDomainAccessGrantForOrganizationConditionKeys">actionGetDomainAccessGrantForOrganizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDomainAccessGrantForOrganization action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetDomainConditionKeys">actionGetDomainConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDomain action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetIntegrationConditionKeys">actionGetIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetIntegration action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetIntelligenceConfigurationConditionKeys">actionGetIntelligenceConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetIntelligenceConfiguration action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetMetricDataConditionKeys">actionGetMetricDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetMetricData action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetOmniDashboardConditionKeys">actionGetOmniDashboardConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetOmniDashboard action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetOmniThreadConditionKeys">actionGetOmniThreadConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetOmniThread action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetPreferencesConditionKeys">actionGetPreferencesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetPreferences action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetRecordsConditionKeys">actionGetRecordsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRecords action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetSpaceConditionKeys">actionGetSpaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSpace action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetTelemetryQueryResultsConditionKeys">actionGetTelemetryQueryResultsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTelemetryQueryResults action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetViewConditionKeys">actionGetViewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetView action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ALARM_ACTIONS">ALARM_ACTIONS</a></code> | <code>string</code> | Condition key: cloudwatch:AlarmActions (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.AssumeAccessProfileConditionKeys">AssumeAccessProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssumeAccessProfile action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateAccessGrantConditionKeys">CreateAccessGrantConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAccessGrant action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateAccessProfileConditionKeys">CreateAccessProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAccessProfile action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateAlertConditionKeys">CreateAlertConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAlert action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateDomainAccessGrantForOrganizationConditionKeys">CreateDomainAccessGrantForOrganizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDomainAccessGrantForOrganization action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateIntegrationConditionKeys">CreateIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIntegration action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateOmniDashboardConditionKeys">CreateOmniDashboardConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOmniDashboard action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateOmniThreadConditionKeys">CreateOmniThreadConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOmniThread action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateServiceLevelObjectiveConditionKeys">CreateServiceLevelObjectiveConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServiceLevelObjective action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateViewConditionKeys">CreateViewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateView action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.DeleteAccessGrantConditionKeys">DeleteAccessGrantConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAccessGrant action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.DeleteAccessProfileConditionKeys">DeleteAccessProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAccessProfile action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.DeleteAlertConditionKeys">DeleteAlertConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAlert action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.DeleteDomainAccessGrantForOrganizationConditionKeys">DeleteDomainAccessGrantForOrganizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteDomainAccessGrantForOrganization action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.DeleteIntegrationConditionKeys">DeleteIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteIntegration action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.DeleteOmniDashboardConditionKeys">DeleteOmniDashboardConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteOmniDashboard action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.DeleteOmniThreadConditionKeys">DeleteOmniThreadConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteOmniThread action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.DeleteViewConditionKeys">DeleteViewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteView action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.HAS_ACCESS_GRANT">HAS_ACCESS_GRANT</a></code> | <code>string</code> | Condition key: cloudwatch:HasAccessGrant (String). |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.InvokeIntegrationConditionKeys">InvokeIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InvokeIntegration action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListAccessGrantsConditionKeys">ListAccessGrantsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAccessGrants action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListAccessProfilesConditionKeys">ListAccessProfilesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAccessProfiles action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListAlertContributorsConditionKeys">ListAlertContributorsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAlertContributors action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListAlertsConditionKeys">ListAlertsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAlerts action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListDomainAccessGrantsForOrganizationConditionKeys">ListDomainAccessGrantsForOrganizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListDomainAccessGrantsForOrganization action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListIntegrationsConditionKeys">ListIntegrationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListIntegrations action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListManagedInsightRulesConditionKeys">ListManagedInsightRulesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListManagedInsightRules action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListMetricsConditionKeys">ListMetricsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListMetrics action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListOmniDashboardsConditionKeys">ListOmniDashboardsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListOmniDashboards action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListOmniThreadsConditionKeys">ListOmniThreadsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListOmniThreads action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListSpaceAccessConditionKeys">ListSpaceAccessConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSpaceAccess action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListSpacesConditionKeys">ListSpacesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSpaces action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListSpacesForOrganizationConditionKeys">ListSpacesForOrganizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSpacesForOrganization action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListTelemetryFieldsConditionKeys">ListTelemetryFieldsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTelemetryFields action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListTelemetryQuerySessionsConditionKeys">ListTelemetryQuerySessionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTelemetryQuerySessions action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListViewsConditionKeys">ListViewsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListViews action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.NAMESPACE">NAMESPACE</a></code> | <code>string</code> | Condition key: cloudwatch:namespace (String). |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutAlarmMuteRuleConditionKeys">PutAlarmMuteRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAlarmMuteRule action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutCompositeAlarmConditionKeys">PutCompositeAlarmConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutCompositeAlarm action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutDashboardConditionKeys">PutDashboardConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutDashboard action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutInsightRuleConditionKeys">PutInsightRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutInsightRule action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutIntelligenceConfigurationConditionKeys">PutIntelligenceConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutIntelligenceConfiguration action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutLogAlarmConditionKeys">PutLogAlarmConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutLogAlarm action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutManagedInsightRulesConditionKeys">PutManagedInsightRulesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutManagedInsightRules action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutMetricAlarmConditionKeys">PutMetricAlarmConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutMetricAlarm action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutMetricDataConditionKeys">PutMetricDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutMetricData action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutMetricStreamConditionKeys">PutMetricStreamConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutMetricStream action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.REQUEST_INSIGHT_RULE_LOG_GROUPS">REQUEST_INSIGHT_RULE_LOG_GROUPS</a></code> | <code>string</code> | Condition key: cloudwatch:requestInsightRuleLogGroups (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.REQUEST_MANAGED_RESOURCE_AR_NS">REQUEST_MANAGED_RESOURCE_AR_NS</a></code> | <code>string</code> | Condition key: cloudwatch:requestManagedResourceARNs (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.SearchPrincipalsConditionKeys">SearchPrincipalsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchPrincipals action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.StartOmniThreadSessionConditionKeys">StartOmniThreadSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartOmniThreadSession action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.StartTelemetryQueryConditionKeys">StartTelemetryQueryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartTelemetryQuery action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.StartTelemetryQuerySessionConditionKeys">StartTelemetryQuerySessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartTelemetryQuerySession action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.StopTelemetryQueryConditionKeys">StopTelemetryQueryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopTelemetryQuery action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.StopTelemetryQuerySessionConditionKeys">StopTelemetryQuerySessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopTelemetryQuerySession action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.SubmitFeedbackConditionKeys">SubmitFeedbackConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SubmitFeedback action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UpdateAccessProfileConditionKeys">UpdateAccessProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAccessProfile action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UpdateAlertConditionKeys">UpdateAlertConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAlert action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UpdateIntegrationConditionKeys">UpdateIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateIntegration action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UpdateOmniDashboardConditionKeys">UpdateOmniDashboardConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateOmniDashboard action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UpdateOmniThreadConditionKeys">UpdateOmniThreadConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateOmniThread action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UpdatePreferencesConditionKeys">UpdatePreferencesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePreferences action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UpdateSpaceConditionKeys">UpdateSpaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSpace action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UpdateViewConditionKeys">UpdateViewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateView action. |

---

##### `actionGetAccessGrantConditionKeys`<sup>Required</sup> <a name="actionGetAccessGrantConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetAccessGrantConditionKeys"></a>

```typescript
public readonly actionGetAccessGrantConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAccessGrant action.

---

##### `actionGetAccessProfileConditionKeys`<sup>Required</sup> <a name="actionGetAccessProfileConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetAccessProfileConditionKeys"></a>

```typescript
public readonly actionGetAccessProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAccessProfile action.

---

##### `actionGetAlertConditionKeys`<sup>Required</sup> <a name="actionGetAlertConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetAlertConditionKeys"></a>

```typescript
public readonly actionGetAlertConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAlert action.

---

##### `actionGetContextGraphConditionKeys`<sup>Required</sup> <a name="actionGetContextGraphConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetContextGraphConditionKeys"></a>

```typescript
public readonly actionGetContextGraphConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetContextGraph action.

---

##### `actionGetDatasetConditionKeys`<sup>Required</sup> <a name="actionGetDatasetConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetDatasetConditionKeys"></a>

```typescript
public readonly actionGetDatasetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDataset action.

---

##### `actionGetDomainAccessGrantForOrganizationConditionKeys`<sup>Required</sup> <a name="actionGetDomainAccessGrantForOrganizationConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetDomainAccessGrantForOrganizationConditionKeys"></a>

```typescript
public readonly actionGetDomainAccessGrantForOrganizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDomainAccessGrantForOrganization action.

---

##### `actionGetDomainConditionKeys`<sup>Required</sup> <a name="actionGetDomainConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetDomainConditionKeys"></a>

```typescript
public readonly actionGetDomainConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDomain action.

---

##### `actionGetIntegrationConditionKeys`<sup>Required</sup> <a name="actionGetIntegrationConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetIntegrationConditionKeys"></a>

```typescript
public readonly actionGetIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetIntegration action.

---

##### `actionGetIntelligenceConfigurationConditionKeys`<sup>Required</sup> <a name="actionGetIntelligenceConfigurationConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetIntelligenceConfigurationConditionKeys"></a>

```typescript
public readonly actionGetIntelligenceConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetIntelligenceConfiguration action.

---

##### `actionGetMetricDataConditionKeys`<sup>Required</sup> <a name="actionGetMetricDataConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetMetricDataConditionKeys"></a>

```typescript
public readonly actionGetMetricDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetMetricData action.

---

##### `actionGetOmniDashboardConditionKeys`<sup>Required</sup> <a name="actionGetOmniDashboardConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetOmniDashboardConditionKeys"></a>

```typescript
public readonly actionGetOmniDashboardConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetOmniDashboard action.

---

##### `actionGetOmniThreadConditionKeys`<sup>Required</sup> <a name="actionGetOmniThreadConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetOmniThreadConditionKeys"></a>

```typescript
public readonly actionGetOmniThreadConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetOmniThread action.

---

##### `actionGetPreferencesConditionKeys`<sup>Required</sup> <a name="actionGetPreferencesConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetPreferencesConditionKeys"></a>

```typescript
public readonly actionGetPreferencesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetPreferences action.

---

##### `actionGetRecordsConditionKeys`<sup>Required</sup> <a name="actionGetRecordsConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetRecordsConditionKeys"></a>

```typescript
public readonly actionGetRecordsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRecords action.

---

##### `actionGetSpaceConditionKeys`<sup>Required</sup> <a name="actionGetSpaceConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetSpaceConditionKeys"></a>

```typescript
public readonly actionGetSpaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSpace action.

---

##### `actionGetTelemetryQueryResultsConditionKeys`<sup>Required</sup> <a name="actionGetTelemetryQueryResultsConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetTelemetryQueryResultsConditionKeys"></a>

```typescript
public readonly actionGetTelemetryQueryResultsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTelemetryQueryResults action.

---

##### `actionGetViewConditionKeys`<sup>Required</sup> <a name="actionGetViewConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetViewConditionKeys"></a>

```typescript
public readonly actionGetViewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetView action.

---

##### `ALARM_ACTIONS`<sup>Required</sup> <a name="ALARM_ACTIONS" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ALARM_ACTIONS"></a>

```typescript
public readonly ALARM_ACTIONS: string;
```

- *Type:* string

Condition key: cloudwatch:AlarmActions (ArrayOfString).

---

##### `AssumeAccessProfileConditionKeys`<sup>Required</sup> <a name="AssumeAccessProfileConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.AssumeAccessProfileConditionKeys"></a>

```typescript
public readonly AssumeAccessProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssumeAccessProfile action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAccessGrantConditionKeys`<sup>Required</sup> <a name="CreateAccessGrantConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateAccessGrantConditionKeys"></a>

```typescript
public readonly CreateAccessGrantConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAccessGrant action.

---

##### `CreateAccessProfileConditionKeys`<sup>Required</sup> <a name="CreateAccessProfileConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateAccessProfileConditionKeys"></a>

```typescript
public readonly CreateAccessProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAccessProfile action.

---

##### `CreateAlertConditionKeys`<sup>Required</sup> <a name="CreateAlertConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateAlertConditionKeys"></a>

```typescript
public readonly CreateAlertConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAlert action.

---

##### `CreateDomainAccessGrantForOrganizationConditionKeys`<sup>Required</sup> <a name="CreateDomainAccessGrantForOrganizationConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateDomainAccessGrantForOrganizationConditionKeys"></a>

```typescript
public readonly CreateDomainAccessGrantForOrganizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDomainAccessGrantForOrganization action.

---

##### `CreateIntegrationConditionKeys`<sup>Required</sup> <a name="CreateIntegrationConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateIntegrationConditionKeys"></a>

```typescript
public readonly CreateIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIntegration action.

---

##### `CreateOmniDashboardConditionKeys`<sup>Required</sup> <a name="CreateOmniDashboardConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateOmniDashboardConditionKeys"></a>

```typescript
public readonly CreateOmniDashboardConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOmniDashboard action.

---

##### `CreateOmniThreadConditionKeys`<sup>Required</sup> <a name="CreateOmniThreadConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateOmniThreadConditionKeys"></a>

```typescript
public readonly CreateOmniThreadConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOmniThread action.

---

##### `CreateServiceLevelObjectiveConditionKeys`<sup>Required</sup> <a name="CreateServiceLevelObjectiveConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateServiceLevelObjectiveConditionKeys"></a>

```typescript
public readonly CreateServiceLevelObjectiveConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServiceLevelObjective action.

---

##### `CreateViewConditionKeys`<sup>Required</sup> <a name="CreateViewConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateViewConditionKeys"></a>

```typescript
public readonly CreateViewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateView action.

---

##### `DeleteAccessGrantConditionKeys`<sup>Required</sup> <a name="DeleteAccessGrantConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.DeleteAccessGrantConditionKeys"></a>

```typescript
public readonly DeleteAccessGrantConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAccessGrant action.

---

##### `DeleteAccessProfileConditionKeys`<sup>Required</sup> <a name="DeleteAccessProfileConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.DeleteAccessProfileConditionKeys"></a>

```typescript
public readonly DeleteAccessProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAccessProfile action.

---

##### `DeleteAlertConditionKeys`<sup>Required</sup> <a name="DeleteAlertConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.DeleteAlertConditionKeys"></a>

```typescript
public readonly DeleteAlertConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAlert action.

---

##### `DeleteDomainAccessGrantForOrganizationConditionKeys`<sup>Required</sup> <a name="DeleteDomainAccessGrantForOrganizationConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.DeleteDomainAccessGrantForOrganizationConditionKeys"></a>

```typescript
public readonly DeleteDomainAccessGrantForOrganizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteDomainAccessGrantForOrganization action.

---

##### `DeleteIntegrationConditionKeys`<sup>Required</sup> <a name="DeleteIntegrationConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.DeleteIntegrationConditionKeys"></a>

```typescript
public readonly DeleteIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteIntegration action.

---

##### `DeleteOmniDashboardConditionKeys`<sup>Required</sup> <a name="DeleteOmniDashboardConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.DeleteOmniDashboardConditionKeys"></a>

```typescript
public readonly DeleteOmniDashboardConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteOmniDashboard action.

---

##### `DeleteOmniThreadConditionKeys`<sup>Required</sup> <a name="DeleteOmniThreadConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.DeleteOmniThreadConditionKeys"></a>

```typescript
public readonly DeleteOmniThreadConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteOmniThread action.

---

##### `DeleteViewConditionKeys`<sup>Required</sup> <a name="DeleteViewConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.DeleteViewConditionKeys"></a>

```typescript
public readonly DeleteViewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteView action.

---

##### `HAS_ACCESS_GRANT`<sup>Required</sup> <a name="HAS_ACCESS_GRANT" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.HAS_ACCESS_GRANT"></a>

```typescript
public readonly HAS_ACCESS_GRANT: string;
```

- *Type:* string

Condition key: cloudwatch:HasAccessGrant (String).

---

##### `InvokeIntegrationConditionKeys`<sup>Required</sup> <a name="InvokeIntegrationConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.InvokeIntegrationConditionKeys"></a>

```typescript
public readonly InvokeIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InvokeIntegration action.

---

##### `ListAccessGrantsConditionKeys`<sup>Required</sup> <a name="ListAccessGrantsConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListAccessGrantsConditionKeys"></a>

```typescript
public readonly ListAccessGrantsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAccessGrants action.

---

##### `ListAccessProfilesConditionKeys`<sup>Required</sup> <a name="ListAccessProfilesConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListAccessProfilesConditionKeys"></a>

```typescript
public readonly ListAccessProfilesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAccessProfiles action.

---

##### `ListAlertContributorsConditionKeys`<sup>Required</sup> <a name="ListAlertContributorsConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListAlertContributorsConditionKeys"></a>

```typescript
public readonly ListAlertContributorsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAlertContributors action.

---

##### `ListAlertsConditionKeys`<sup>Required</sup> <a name="ListAlertsConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListAlertsConditionKeys"></a>

```typescript
public readonly ListAlertsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAlerts action.

---

##### `ListDomainAccessGrantsForOrganizationConditionKeys`<sup>Required</sup> <a name="ListDomainAccessGrantsForOrganizationConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListDomainAccessGrantsForOrganizationConditionKeys"></a>

```typescript
public readonly ListDomainAccessGrantsForOrganizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListDomainAccessGrantsForOrganization action.

---

##### `ListIntegrationsConditionKeys`<sup>Required</sup> <a name="ListIntegrationsConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListIntegrationsConditionKeys"></a>

```typescript
public readonly ListIntegrationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListIntegrations action.

---

##### `ListManagedInsightRulesConditionKeys`<sup>Required</sup> <a name="ListManagedInsightRulesConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListManagedInsightRulesConditionKeys"></a>

```typescript
public readonly ListManagedInsightRulesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListManagedInsightRules action.

---

##### `ListMetricsConditionKeys`<sup>Required</sup> <a name="ListMetricsConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListMetricsConditionKeys"></a>

```typescript
public readonly ListMetricsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListMetrics action.

---

##### `ListOmniDashboardsConditionKeys`<sup>Required</sup> <a name="ListOmniDashboardsConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListOmniDashboardsConditionKeys"></a>

```typescript
public readonly ListOmniDashboardsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListOmniDashboards action.

---

##### `ListOmniThreadsConditionKeys`<sup>Required</sup> <a name="ListOmniThreadsConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListOmniThreadsConditionKeys"></a>

```typescript
public readonly ListOmniThreadsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListOmniThreads action.

---

##### `ListSpaceAccessConditionKeys`<sup>Required</sup> <a name="ListSpaceAccessConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListSpaceAccessConditionKeys"></a>

```typescript
public readonly ListSpaceAccessConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSpaceAccess action.

---

##### `ListSpacesConditionKeys`<sup>Required</sup> <a name="ListSpacesConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListSpacesConditionKeys"></a>

```typescript
public readonly ListSpacesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSpaces action.

---

##### `ListSpacesForOrganizationConditionKeys`<sup>Required</sup> <a name="ListSpacesForOrganizationConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListSpacesForOrganizationConditionKeys"></a>

```typescript
public readonly ListSpacesForOrganizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSpacesForOrganization action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `ListTelemetryFieldsConditionKeys`<sup>Required</sup> <a name="ListTelemetryFieldsConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListTelemetryFieldsConditionKeys"></a>

```typescript
public readonly ListTelemetryFieldsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTelemetryFields action.

---

##### `ListTelemetryQuerySessionsConditionKeys`<sup>Required</sup> <a name="ListTelemetryQuerySessionsConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListTelemetryQuerySessionsConditionKeys"></a>

```typescript
public readonly ListTelemetryQuerySessionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTelemetryQuerySessions action.

---

##### `ListViewsConditionKeys`<sup>Required</sup> <a name="ListViewsConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListViewsConditionKeys"></a>

```typescript
public readonly ListViewsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListViews action.

---

##### `NAMESPACE`<sup>Required</sup> <a name="NAMESPACE" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.NAMESPACE"></a>

```typescript
public readonly NAMESPACE: string;
```

- *Type:* string

Condition key: cloudwatch:namespace (String).

---

##### `PutAlarmMuteRuleConditionKeys`<sup>Required</sup> <a name="PutAlarmMuteRuleConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutAlarmMuteRuleConditionKeys"></a>

```typescript
public readonly PutAlarmMuteRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAlarmMuteRule action.

---

##### `PutCompositeAlarmConditionKeys`<sup>Required</sup> <a name="PutCompositeAlarmConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutCompositeAlarmConditionKeys"></a>

```typescript
public readonly PutCompositeAlarmConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutCompositeAlarm action.

---

##### `PutDashboardConditionKeys`<sup>Required</sup> <a name="PutDashboardConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutDashboardConditionKeys"></a>

```typescript
public readonly PutDashboardConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutDashboard action.

---

##### `PutInsightRuleConditionKeys`<sup>Required</sup> <a name="PutInsightRuleConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutInsightRuleConditionKeys"></a>

```typescript
public readonly PutInsightRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutInsightRule action.

---

##### `PutIntelligenceConfigurationConditionKeys`<sup>Required</sup> <a name="PutIntelligenceConfigurationConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutIntelligenceConfigurationConditionKeys"></a>

```typescript
public readonly PutIntelligenceConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutIntelligenceConfiguration action.

---

##### `PutLogAlarmConditionKeys`<sup>Required</sup> <a name="PutLogAlarmConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutLogAlarmConditionKeys"></a>

```typescript
public readonly PutLogAlarmConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutLogAlarm action.

---

##### `PutManagedInsightRulesConditionKeys`<sup>Required</sup> <a name="PutManagedInsightRulesConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutManagedInsightRulesConditionKeys"></a>

```typescript
public readonly PutManagedInsightRulesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutManagedInsightRules action.

---

##### `PutMetricAlarmConditionKeys`<sup>Required</sup> <a name="PutMetricAlarmConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutMetricAlarmConditionKeys"></a>

```typescript
public readonly PutMetricAlarmConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutMetricAlarm action.

---

##### `PutMetricDataConditionKeys`<sup>Required</sup> <a name="PutMetricDataConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutMetricDataConditionKeys"></a>

```typescript
public readonly PutMetricDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutMetricData action.

---

##### `PutMetricStreamConditionKeys`<sup>Required</sup> <a name="PutMetricStreamConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutMetricStreamConditionKeys"></a>

```typescript
public readonly PutMetricStreamConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutMetricStream action.

---

##### `REQUEST_INSIGHT_RULE_LOG_GROUPS`<sup>Required</sup> <a name="REQUEST_INSIGHT_RULE_LOG_GROUPS" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.REQUEST_INSIGHT_RULE_LOG_GROUPS"></a>

```typescript
public readonly REQUEST_INSIGHT_RULE_LOG_GROUPS: string;
```

- *Type:* string

Condition key: cloudwatch:requestInsightRuleLogGroups (ArrayOfString).

---

##### `REQUEST_MANAGED_RESOURCE_AR_NS`<sup>Required</sup> <a name="REQUEST_MANAGED_RESOURCE_AR_NS" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.REQUEST_MANAGED_RESOURCE_AR_NS"></a>

```typescript
public readonly REQUEST_MANAGED_RESOURCE_AR_NS: string;
```

- *Type:* string

Condition key: cloudwatch:requestManagedResourceARNs (ArrayOfARN).

---

##### `SearchPrincipalsConditionKeys`<sup>Required</sup> <a name="SearchPrincipalsConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.SearchPrincipalsConditionKeys"></a>

```typescript
public readonly SearchPrincipalsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchPrincipals action.

---

##### `StartOmniThreadSessionConditionKeys`<sup>Required</sup> <a name="StartOmniThreadSessionConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.StartOmniThreadSessionConditionKeys"></a>

```typescript
public readonly StartOmniThreadSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartOmniThreadSession action.

---

##### `StartTelemetryQueryConditionKeys`<sup>Required</sup> <a name="StartTelemetryQueryConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.StartTelemetryQueryConditionKeys"></a>

```typescript
public readonly StartTelemetryQueryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartTelemetryQuery action.

---

##### `StartTelemetryQuerySessionConditionKeys`<sup>Required</sup> <a name="StartTelemetryQuerySessionConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.StartTelemetryQuerySessionConditionKeys"></a>

```typescript
public readonly StartTelemetryQuerySessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartTelemetryQuerySession action.

---

##### `StopTelemetryQueryConditionKeys`<sup>Required</sup> <a name="StopTelemetryQueryConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.StopTelemetryQueryConditionKeys"></a>

```typescript
public readonly StopTelemetryQueryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopTelemetryQuery action.

---

##### `StopTelemetryQuerySessionConditionKeys`<sup>Required</sup> <a name="StopTelemetryQuerySessionConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.StopTelemetryQuerySessionConditionKeys"></a>

```typescript
public readonly StopTelemetryQuerySessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopTelemetryQuerySession action.

---

##### `SubmitFeedbackConditionKeys`<sup>Required</sup> <a name="SubmitFeedbackConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.SubmitFeedbackConditionKeys"></a>

```typescript
public readonly SubmitFeedbackConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SubmitFeedback action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateAccessProfileConditionKeys`<sup>Required</sup> <a name="UpdateAccessProfileConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UpdateAccessProfileConditionKeys"></a>

```typescript
public readonly UpdateAccessProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAccessProfile action.

---

##### `UpdateAlertConditionKeys`<sup>Required</sup> <a name="UpdateAlertConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UpdateAlertConditionKeys"></a>

```typescript
public readonly UpdateAlertConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAlert action.

---

##### `UpdateIntegrationConditionKeys`<sup>Required</sup> <a name="UpdateIntegrationConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UpdateIntegrationConditionKeys"></a>

```typescript
public readonly UpdateIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateIntegration action.

---

##### `UpdateOmniDashboardConditionKeys`<sup>Required</sup> <a name="UpdateOmniDashboardConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UpdateOmniDashboardConditionKeys"></a>

```typescript
public readonly UpdateOmniDashboardConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateOmniDashboard action.

---

##### `UpdateOmniThreadConditionKeys`<sup>Required</sup> <a name="UpdateOmniThreadConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UpdateOmniThreadConditionKeys"></a>

```typescript
public readonly UpdateOmniThreadConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateOmniThread action.

---

##### `UpdatePreferencesConditionKeys`<sup>Required</sup> <a name="UpdatePreferencesConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UpdatePreferencesConditionKeys"></a>

```typescript
public readonly UpdatePreferencesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePreferences action.

---

##### `UpdateSpaceConditionKeys`<sup>Required</sup> <a name="UpdateSpaceConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UpdateSpaceConditionKeys"></a>

```typescript
public readonly UpdateSpaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSpace action.

---

##### `UpdateViewConditionKeys`<sup>Required</sup> <a name="UpdateViewConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UpdateViewConditionKeys"></a>

```typescript
public readonly UpdateViewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateView action.

---

### CloudWatchOperations <a name="CloudWatchOperations" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations"></a>

API operation to required IAM actions mapping for cloudwatch.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

new cloudwatch.CloudWatchOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.AssociateDatasetKmsKey">AssociateDatasetKmsKey</a></code> | <code>string[]</code> | IAM actions required for the AssociateDatasetKmsKey API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteAlarmMuteRule">DeleteAlarmMuteRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteAlarmMuteRule API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteAlarms">DeleteAlarms</a></code> | <code>string[]</code> | IAM actions required for the DeleteAlarms API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteAnomalyDetector">DeleteAnomalyDetector</a></code> | <code>string[]</code> | IAM actions required for the DeleteAnomalyDetector API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteDashboards">DeleteDashboards</a></code> | <code>string[]</code> | IAM actions required for the DeleteDashboards API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteInsightRules">DeleteInsightRules</a></code> | <code>string[]</code> | IAM actions required for the DeleteInsightRules API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteMetricStream">DeleteMetricStream</a></code> | <code>string[]</code> | IAM actions required for the DeleteMetricStream API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAlarmContributors">DescribeAlarmContributors</a></code> | <code>string[]</code> | IAM actions required for the DescribeAlarmContributors API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAlarmHistory">DescribeAlarmHistory</a></code> | <code>string[]</code> | IAM actions required for the DescribeAlarmHistory API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAlarms">DescribeAlarms</a></code> | <code>string[]</code> | IAM actions required for the DescribeAlarms API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAlarmsForMetric">DescribeAlarmsForMetric</a></code> | <code>string[]</code> | IAM actions required for the DescribeAlarmsForMetric API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAnomalyDetectors">DescribeAnomalyDetectors</a></code> | <code>string[]</code> | IAM actions required for the DescribeAnomalyDetectors API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeInsightRules">DescribeInsightRules</a></code> | <code>string[]</code> | IAM actions required for the DescribeInsightRules API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DisableAlarmActions">DisableAlarmActions</a></code> | <code>string[]</code> | IAM actions required for the DisableAlarmActions API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DisableInsightRules">DisableInsightRules</a></code> | <code>string[]</code> | IAM actions required for the DisableInsightRules API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DisassociateDatasetKmsKey">DisassociateDatasetKmsKey</a></code> | <code>string[]</code> | IAM actions required for the DisassociateDatasetKmsKey API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.EnableAlarmActions">EnableAlarmActions</a></code> | <code>string[]</code> | IAM actions required for the EnableAlarmActions API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.EnableInsightRules">EnableInsightRules</a></code> | <code>string[]</code> | IAM actions required for the EnableInsightRules API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListAlarmMuteRules">ListAlarmMuteRules</a></code> | <code>string[]</code> | IAM actions required for the ListAlarmMuteRules API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListDashboards">ListDashboards</a></code> | <code>string[]</code> | IAM actions required for the ListDashboards API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListManagedInsightRules">ListManagedInsightRules</a></code> | <code>string[]</code> | IAM actions required for the ListManagedInsightRules API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListMetrics">ListMetrics</a></code> | <code>string[]</code> | IAM actions required for the ListMetrics API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListMetricStreams">ListMetricStreams</a></code> | <code>string[]</code> | IAM actions required for the ListMetricStreams API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetAlarmMuteRule">opGetAlarmMuteRule</a></code> | <code>string[]</code> | IAM actions required for the GetAlarmMuteRule API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetDashboard">opGetDashboard</a></code> | <code>string[]</code> | IAM actions required for the GetDashboard API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetDataset">opGetDataset</a></code> | <code>string[]</code> | IAM actions required for the GetDataset API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetInsightRuleReport">opGetInsightRuleReport</a></code> | <code>string[]</code> | IAM actions required for the GetInsightRuleReport API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetMetricData">opGetMetricData</a></code> | <code>string[]</code> | IAM actions required for the GetMetricData API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetMetricStatistics">opGetMetricStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetMetricStatistics API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetMetricStream">opGetMetricStream</a></code> | <code>string[]</code> | IAM actions required for the GetMetricStream API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetMetricWidgetImage">opGetMetricWidgetImage</a></code> | <code>string[]</code> | IAM actions required for the GetMetricWidgetImage API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetOTelEnrichment">opGetOTelEnrichment</a></code> | <code>string[]</code> | IAM actions required for the GetOTelEnrichment API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opSetAlarmState">opSetAlarmState</a></code> | <code>string[]</code> | IAM actions required for the SetAlarmState API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutAlarmMuteRule">PutAlarmMuteRule</a></code> | <code>string[]</code> | IAM actions required for the PutAlarmMuteRule API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutAnomalyDetector">PutAnomalyDetector</a></code> | <code>string[]</code> | IAM actions required for the PutAnomalyDetector API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutCompositeAlarm">PutCompositeAlarm</a></code> | <code>string[]</code> | IAM actions required for the PutCompositeAlarm API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutDashboard">PutDashboard</a></code> | <code>string[]</code> | IAM actions required for the PutDashboard API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutInsightRule">PutInsightRule</a></code> | <code>string[]</code> | IAM actions required for the PutInsightRule API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutLogAlarm">PutLogAlarm</a></code> | <code>string[]</code> | IAM actions required for the PutLogAlarm API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutManagedInsightRules">PutManagedInsightRules</a></code> | <code>string[]</code> | IAM actions required for the PutManagedInsightRules API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutMetricAlarm">PutMetricAlarm</a></code> | <code>string[]</code> | IAM actions required for the PutMetricAlarm API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutMetricData">PutMetricData</a></code> | <code>string[]</code> | IAM actions required for the PutMetricData API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutMetricStream">PutMetricStream</a></code> | <code>string[]</code> | IAM actions required for the PutMetricStream API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.StartMetricStreams">StartMetricStreams</a></code> | <code>string[]</code> | IAM actions required for the StartMetricStreams API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.StartOTelEnrichment">StartOTelEnrichment</a></code> | <code>string[]</code> | IAM actions required for the StartOTelEnrichment API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.StopMetricStreams">StopMetricStreams</a></code> | <code>string[]</code> | IAM actions required for the StopMetricStreams API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.StopOTelEnrichment">StopOTelEnrichment</a></code> | <code>string[]</code> | IAM actions required for the StopOTelEnrichment API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `AssociateDatasetKmsKey`<sup>Required</sup> <a name="AssociateDatasetKmsKey" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.AssociateDatasetKmsKey"></a>

```typescript
public readonly AssociateDatasetKmsKey: string[];
```

- *Type:* string[]

IAM actions required for the AssociateDatasetKmsKey API call.

---

##### `DeleteAlarmMuteRule`<sup>Required</sup> <a name="DeleteAlarmMuteRule" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteAlarmMuteRule"></a>

```typescript
public readonly DeleteAlarmMuteRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAlarmMuteRule API call.

---

##### `DeleteAlarms`<sup>Required</sup> <a name="DeleteAlarms" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteAlarms"></a>

```typescript
public readonly DeleteAlarms: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAlarms API call.

---

##### `DeleteAnomalyDetector`<sup>Required</sup> <a name="DeleteAnomalyDetector" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteAnomalyDetector"></a>

```typescript
public readonly DeleteAnomalyDetector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAnomalyDetector API call.

---

##### `DeleteDashboards`<sup>Required</sup> <a name="DeleteDashboards" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteDashboards"></a>

```typescript
public readonly DeleteDashboards: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDashboards API call.

---

##### `DeleteInsightRules`<sup>Required</sup> <a name="DeleteInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteInsightRules"></a>

```typescript
public readonly DeleteInsightRules: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInsightRules API call.

---

##### `DeleteMetricStream`<sup>Required</sup> <a name="DeleteMetricStream" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteMetricStream"></a>

```typescript
public readonly DeleteMetricStream: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMetricStream API call.

---

##### `DescribeAlarmContributors`<sup>Required</sup> <a name="DescribeAlarmContributors" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAlarmContributors"></a>

```typescript
public readonly DescribeAlarmContributors: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAlarmContributors API call.

---

##### `DescribeAlarmHistory`<sup>Required</sup> <a name="DescribeAlarmHistory" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAlarmHistory"></a>

```typescript
public readonly DescribeAlarmHistory: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAlarmHistory API call.

---

##### `DescribeAlarms`<sup>Required</sup> <a name="DescribeAlarms" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAlarms"></a>

```typescript
public readonly DescribeAlarms: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAlarms API call.

---

##### `DescribeAlarmsForMetric`<sup>Required</sup> <a name="DescribeAlarmsForMetric" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAlarmsForMetric"></a>

```typescript
public readonly DescribeAlarmsForMetric: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAlarmsForMetric API call.

---

##### `DescribeAnomalyDetectors`<sup>Required</sup> <a name="DescribeAnomalyDetectors" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAnomalyDetectors"></a>

```typescript
public readonly DescribeAnomalyDetectors: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAnomalyDetectors API call.

---

##### `DescribeInsightRules`<sup>Required</sup> <a name="DescribeInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeInsightRules"></a>

```typescript
public readonly DescribeInsightRules: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInsightRules API call.

---

##### `DisableAlarmActions`<sup>Required</sup> <a name="DisableAlarmActions" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DisableAlarmActions"></a>

```typescript
public readonly DisableAlarmActions: string[];
```

- *Type:* string[]

IAM actions required for the DisableAlarmActions API call.

---

##### `DisableInsightRules`<sup>Required</sup> <a name="DisableInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DisableInsightRules"></a>

```typescript
public readonly DisableInsightRules: string[];
```

- *Type:* string[]

IAM actions required for the DisableInsightRules API call.

---

##### `DisassociateDatasetKmsKey`<sup>Required</sup> <a name="DisassociateDatasetKmsKey" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DisassociateDatasetKmsKey"></a>

```typescript
public readonly DisassociateDatasetKmsKey: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateDatasetKmsKey API call.

---

##### `EnableAlarmActions`<sup>Required</sup> <a name="EnableAlarmActions" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.EnableAlarmActions"></a>

```typescript
public readonly EnableAlarmActions: string[];
```

- *Type:* string[]

IAM actions required for the EnableAlarmActions API call.

---

##### `EnableInsightRules`<sup>Required</sup> <a name="EnableInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.EnableInsightRules"></a>

```typescript
public readonly EnableInsightRules: string[];
```

- *Type:* string[]

IAM actions required for the EnableInsightRules API call.

---

##### `ListAlarmMuteRules`<sup>Required</sup> <a name="ListAlarmMuteRules" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListAlarmMuteRules"></a>

```typescript
public readonly ListAlarmMuteRules: string[];
```

- *Type:* string[]

IAM actions required for the ListAlarmMuteRules API call.

---

##### `ListDashboards`<sup>Required</sup> <a name="ListDashboards" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListDashboards"></a>

```typescript
public readonly ListDashboards: string[];
```

- *Type:* string[]

IAM actions required for the ListDashboards API call.

---

##### `ListManagedInsightRules`<sup>Required</sup> <a name="ListManagedInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListManagedInsightRules"></a>

```typescript
public readonly ListManagedInsightRules: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedInsightRules API call.

---

##### `ListMetrics`<sup>Required</sup> <a name="ListMetrics" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListMetrics"></a>

```typescript
public readonly ListMetrics: string[];
```

- *Type:* string[]

IAM actions required for the ListMetrics API call.

---

##### `ListMetricStreams`<sup>Required</sup> <a name="ListMetricStreams" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListMetricStreams"></a>

```typescript
public readonly ListMetricStreams: string[];
```

- *Type:* string[]

IAM actions required for the ListMetricStreams API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAlarmMuteRule`<sup>Required</sup> <a name="opGetAlarmMuteRule" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetAlarmMuteRule"></a>

```typescript
public readonly opGetAlarmMuteRule: string[];
```

- *Type:* string[]

IAM actions required for the GetAlarmMuteRule API call.

---

##### `opGetDashboard`<sup>Required</sup> <a name="opGetDashboard" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetDashboard"></a>

```typescript
public readonly opGetDashboard: string[];
```

- *Type:* string[]

IAM actions required for the GetDashboard API call.

---

##### `opGetDataset`<sup>Required</sup> <a name="opGetDataset" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetDataset"></a>

```typescript
public readonly opGetDataset: string[];
```

- *Type:* string[]

IAM actions required for the GetDataset API call.

---

##### `opGetInsightRuleReport`<sup>Required</sup> <a name="opGetInsightRuleReport" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetInsightRuleReport"></a>

```typescript
public readonly opGetInsightRuleReport: string[];
```

- *Type:* string[]

IAM actions required for the GetInsightRuleReport API call.

---

##### `opGetMetricData`<sup>Required</sup> <a name="opGetMetricData" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetMetricData"></a>

```typescript
public readonly opGetMetricData: string[];
```

- *Type:* string[]

IAM actions required for the GetMetricData API call.

---

##### `opGetMetricStatistics`<sup>Required</sup> <a name="opGetMetricStatistics" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetMetricStatistics"></a>

```typescript
public readonly opGetMetricStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetMetricStatistics API call.

---

##### `opGetMetricStream`<sup>Required</sup> <a name="opGetMetricStream" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetMetricStream"></a>

```typescript
public readonly opGetMetricStream: string[];
```

- *Type:* string[]

IAM actions required for the GetMetricStream API call.

---

##### `opGetMetricWidgetImage`<sup>Required</sup> <a name="opGetMetricWidgetImage" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetMetricWidgetImage"></a>

```typescript
public readonly opGetMetricWidgetImage: string[];
```

- *Type:* string[]

IAM actions required for the GetMetricWidgetImage API call.

---

##### `opGetOTelEnrichment`<sup>Required</sup> <a name="opGetOTelEnrichment" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetOTelEnrichment"></a>

```typescript
public readonly opGetOTelEnrichment: string[];
```

- *Type:* string[]

IAM actions required for the GetOTelEnrichment API call.

---

##### `opSetAlarmState`<sup>Required</sup> <a name="opSetAlarmState" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opSetAlarmState"></a>

```typescript
public readonly opSetAlarmState: string[];
```

- *Type:* string[]

IAM actions required for the SetAlarmState API call.

---

##### `PutAlarmMuteRule`<sup>Required</sup> <a name="PutAlarmMuteRule" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutAlarmMuteRule"></a>

```typescript
public readonly PutAlarmMuteRule: string[];
```

- *Type:* string[]

IAM actions required for the PutAlarmMuteRule API call.

---

##### `PutAnomalyDetector`<sup>Required</sup> <a name="PutAnomalyDetector" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutAnomalyDetector"></a>

```typescript
public readonly PutAnomalyDetector: string[];
```

- *Type:* string[]

IAM actions required for the PutAnomalyDetector API call.

---

##### `PutCompositeAlarm`<sup>Required</sup> <a name="PutCompositeAlarm" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutCompositeAlarm"></a>

```typescript
public readonly PutCompositeAlarm: string[];
```

- *Type:* string[]

IAM actions required for the PutCompositeAlarm API call.

---

##### `PutDashboard`<sup>Required</sup> <a name="PutDashboard" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutDashboard"></a>

```typescript
public readonly PutDashboard: string[];
```

- *Type:* string[]

IAM actions required for the PutDashboard API call.

---

##### `PutInsightRule`<sup>Required</sup> <a name="PutInsightRule" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutInsightRule"></a>

```typescript
public readonly PutInsightRule: string[];
```

- *Type:* string[]

IAM actions required for the PutInsightRule API call.

---

##### `PutLogAlarm`<sup>Required</sup> <a name="PutLogAlarm" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutLogAlarm"></a>

```typescript
public readonly PutLogAlarm: string[];
```

- *Type:* string[]

IAM actions required for the PutLogAlarm API call.

---

##### `PutManagedInsightRules`<sup>Required</sup> <a name="PutManagedInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutManagedInsightRules"></a>

```typescript
public readonly PutManagedInsightRules: string[];
```

- *Type:* string[]

IAM actions required for the PutManagedInsightRules API call.

---

##### `PutMetricAlarm`<sup>Required</sup> <a name="PutMetricAlarm" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutMetricAlarm"></a>

```typescript
public readonly PutMetricAlarm: string[];
```

- *Type:* string[]

IAM actions required for the PutMetricAlarm API call.

---

##### `PutMetricData`<sup>Required</sup> <a name="PutMetricData" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutMetricData"></a>

```typescript
public readonly PutMetricData: string[];
```

- *Type:* string[]

IAM actions required for the PutMetricData API call.

---

##### `PutMetricStream`<sup>Required</sup> <a name="PutMetricStream" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutMetricStream"></a>

```typescript
public readonly PutMetricStream: string[];
```

- *Type:* string[]

IAM actions required for the PutMetricStream API call.

---

##### `StartMetricStreams`<sup>Required</sup> <a name="StartMetricStreams" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.StartMetricStreams"></a>

```typescript
public readonly StartMetricStreams: string[];
```

- *Type:* string[]

IAM actions required for the StartMetricStreams API call.

---

##### `StartOTelEnrichment`<sup>Required</sup> <a name="StartOTelEnrichment" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.StartOTelEnrichment"></a>

```typescript
public readonly StartOTelEnrichment: string[];
```

- *Type:* string[]

IAM actions required for the StartOTelEnrichment API call.

---

##### `StopMetricStreams`<sup>Required</sup> <a name="StopMetricStreams" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.StopMetricStreams"></a>

```typescript
public readonly StopMetricStreams: string[];
```

- *Type:* string[]

IAM actions required for the StopMetricStreams API call.

---

##### `StopOTelEnrichment`<sup>Required</sup> <a name="StopOTelEnrichment" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.StopOTelEnrichment"></a>

```typescript
public readonly StopOTelEnrichment: string[];
```

- *Type:* string[]

IAM actions required for the StopOTelEnrichment API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### CloudWatchResources <a name="CloudWatchResources" id="@cdk_utils/iam.cloudwatch.CloudWatchResources"></a>

ARN builders, validators, and parsers for cloudwatch resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

new cloudwatch.CloudWatchResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.accessGrant">accessGrant</a></code> | Builds an ARN for the access-grant resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.accessProfile">accessProfile</a></code> | Builds an ARN for the access-profile resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.alarm">alarm</a></code> | Builds an ARN for the alarm resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.alarmMuteRule">alarmMuteRule</a></code> | Builds an ARN for the alarm-mute-rule resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.alert">alert</a></code> | Builds an ARN for the alert resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.dashboard">dashboard</a></code> | Builds an ARN for the dashboard resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.dataset">dataset</a></code> | Builds an ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.domain">domain</a></code> | Builds an ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.ingestionEndpoint">ingestionEndpoint</a></code> | Builds an ARN for the ingestion-endpoint resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.insightRule">insightRule</a></code> | Builds an ARN for the insight-rule resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.integration">integration</a></code> | Builds an ARN for the integration resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAccessGrantArn">isValidAccessGrantArn</a></code> | Validates whether a string is a valid ARN for the access-grant resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAccessProfileArn">isValidAccessProfileArn</a></code> | Validates whether a string is a valid ARN for the access-profile resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAlarmArn">isValidAlarmArn</a></code> | Validates whether a string is a valid ARN for the alarm resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAlarmMuteRuleArn">isValidAlarmMuteRuleArn</a></code> | Validates whether a string is a valid ARN for the alarm-mute-rule resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAlertArn">isValidAlertArn</a></code> | Validates whether a string is a valid ARN for the alert resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidDashboardArn">isValidDashboardArn</a></code> | Validates whether a string is a valid ARN for the dashboard resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidDatasetArn">isValidDatasetArn</a></code> | Validates whether a string is a valid ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidDomainArn">isValidDomainArn</a></code> | Validates whether a string is a valid ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidIngestionEndpointArn">isValidIngestionEndpointArn</a></code> | Validates whether a string is a valid ARN for the ingestion-endpoint resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidInsightRuleArn">isValidInsightRuleArn</a></code> | Validates whether a string is a valid ARN for the insight-rule resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidIntegrationArn">isValidIntegrationArn</a></code> | Validates whether a string is a valid ARN for the integration resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidMetricStreamArn">isValidMetricStreamArn</a></code> | Validates whether a string is a valid ARN for the metric-stream resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidOmniDashboardArn">isValidOmniDashboardArn</a></code> | Validates whether a string is a valid ARN for the omni-dashboard resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidOrganizationAccessGrantArn">isValidOrganizationAccessGrantArn</a></code> | Validates whether a string is a valid ARN for the organization-access-grant resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidOrganizationDomainArn">isValidOrganizationDomainArn</a></code> | Validates whether a string is a valid ARN for the organization-domain resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidServiceArn">isValidServiceArn</a></code> | Validates whether a string is a valid ARN for the service resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidSloArn">isValidSloArn</a></code> | Validates whether a string is a valid ARN for the slo resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidSpaceArn">isValidSpaceArn</a></code> | Validates whether a string is a valid ARN for the space resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidViewArn">isValidViewArn</a></code> | Validates whether a string is a valid ARN for the view resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.metricStream">metricStream</a></code> | Builds an ARN for the metric-stream resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.omniDashboard">omniDashboard</a></code> | Builds an ARN for the omni-dashboard resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.organizationAccessGrant">organizationAccessGrant</a></code> | Builds an ARN for the organization-access-grant resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.organizationDomain">organizationDomain</a></code> | Builds an ARN for the organization-domain resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAccessGrantArn">parseAccessGrantArn</a></code> | Parses a access-grant ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAccessProfileArn">parseAccessProfileArn</a></code> | Parses a access-profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAlarmArn">parseAlarmArn</a></code> | Parses a alarm ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAlarmMuteRuleArn">parseAlarmMuteRuleArn</a></code> | Parses a alarm-mute-rule ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAlertArn">parseAlertArn</a></code> | Parses a alert ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseDashboardArn">parseDashboardArn</a></code> | Parses a dashboard ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseDatasetArn">parseDatasetArn</a></code> | Parses a dataset ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseDomainArn">parseDomainArn</a></code> | Parses a domain ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseIngestionEndpointArn">parseIngestionEndpointArn</a></code> | Parses a ingestion-endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseInsightRuleArn">parseInsightRuleArn</a></code> | Parses a insight-rule ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseIntegrationArn">parseIntegrationArn</a></code> | Parses a integration ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseMetricStreamArn">parseMetricStreamArn</a></code> | Parses a metric-stream ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseOmniDashboardArn">parseOmniDashboardArn</a></code> | Parses a omni-dashboard ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseOrganizationAccessGrantArn">parseOrganizationAccessGrantArn</a></code> | Parses a organization-access-grant ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseOrganizationDomainArn">parseOrganizationDomainArn</a></code> | Parses a organization-domain ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseServiceArn">parseServiceArn</a></code> | Parses a service ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseSloArn">parseSloArn</a></code> | Parses a slo ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseSpaceArn">parseSpaceArn</a></code> | Parses a space ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseViewArn">parseViewArn</a></code> | Parses a view ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.service">service</a></code> | Builds an ARN for the service resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.slo">slo</a></code> | Builds an ARN for the slo resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.space">space</a></code> | Builds an ARN for the space resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.view">view</a></code> | Builds an ARN for the view resource. |

---

##### `accessGrant` <a name="accessGrant" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.accessGrant"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.accessGrant(props: CloudWatchAccessGrantArnProps)
```

Builds an ARN for the access-grant resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.accessGrant.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchAccessGrantArnProps">CloudWatchAccessGrantArnProps</a>

---

##### `accessProfile` <a name="accessProfile" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.accessProfile"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.accessProfile(props: CloudWatchAccessProfileArnProps)
```

Builds an ARN for the access-profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.accessProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchAccessProfileArnProps">CloudWatchAccessProfileArnProps</a>

---

##### `alarm` <a name="alarm" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.alarm"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.alarm(props: CloudWatchAlarmArnProps)
```

Builds an ARN for the alarm resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.alarm.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps">CloudWatchAlarmArnProps</a>

---

##### `alarmMuteRule` <a name="alarmMuteRule" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.alarmMuteRule"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.alarmMuteRule(props: CloudWatchAlarmMuteRuleArnProps)
```

Builds an ARN for the alarm-mute-rule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.alarmMuteRule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps">CloudWatchAlarmMuteRuleArnProps</a>

---

##### `alert` <a name="alert" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.alert"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.alert(props: CloudWatchAlertArnProps)
```

Builds an ARN for the alert resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.alert.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlertArnProps">CloudWatchAlertArnProps</a>

---

##### `dashboard` <a name="dashboard" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.dashboard"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.dashboard(props: CloudWatchDashboardArnProps)
```

Builds an ARN for the dashboard resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.dashboard.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnProps">CloudWatchDashboardArnProps</a>

---

##### `dataset` <a name="dataset" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.dataset"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.dataset(props: CloudWatchDatasetArnProps)
```

Builds an ARN for the dataset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.dataset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps">CloudWatchDatasetArnProps</a>

---

##### `domain` <a name="domain" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.domain"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.domain(props: CloudWatchDomainArnProps)
```

Builds an ARN for the domain resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.domain.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchDomainArnProps">CloudWatchDomainArnProps</a>

---

##### `ingestionEndpoint` <a name="ingestionEndpoint" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.ingestionEndpoint"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.ingestionEndpoint(props: CloudWatchIngestionEndpointArnProps)
```

Builds an ARN for the ingestion-endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.ingestionEndpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchIngestionEndpointArnProps">CloudWatchIngestionEndpointArnProps</a>

---

##### `insightRule` <a name="insightRule" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.insightRule"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.insightRule(props: CloudWatchInsightRuleArnProps)
```

Builds an ARN for the insight-rule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.insightRule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps">CloudWatchInsightRuleArnProps</a>

---

##### `integration` <a name="integration" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.integration"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.integration(props: CloudWatchIntegrationArnProps)
```

Builds an ARN for the integration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.integration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchIntegrationArnProps">CloudWatchIntegrationArnProps</a>

---

##### `isValidAccessGrantArn` <a name="isValidAccessGrantArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAccessGrantArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidAccessGrantArn(arn: string)
```

Validates whether a string is a valid ARN for the access-grant resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAccessGrantArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAccessProfileArn` <a name="isValidAccessProfileArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAccessProfileArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidAccessProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the access-profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAccessProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAlarmArn` <a name="isValidAlarmArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAlarmArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidAlarmArn(arn: string)
```

Validates whether a string is a valid ARN for the alarm resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAlarmArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAlarmMuteRuleArn` <a name="isValidAlarmMuteRuleArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAlarmMuteRuleArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidAlarmMuteRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the alarm-mute-rule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAlarmMuteRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAlertArn` <a name="isValidAlertArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAlertArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidAlertArn(arn: string)
```

Validates whether a string is a valid ARN for the alert resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAlertArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDashboardArn` <a name="isValidDashboardArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidDashboardArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidDashboardArn(arn: string)
```

Validates whether a string is a valid ARN for the dashboard resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasetArn` <a name="isValidDatasetArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidDatasetArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidDatasetArn(arn: string)
```

Validates whether a string is a valid ARN for the dataset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDomainArn` <a name="isValidDomainArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidDomainArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidDomainArn(arn: string)
```

Validates whether a string is a valid ARN for the domain resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIngestionEndpointArn` <a name="isValidIngestionEndpointArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidIngestionEndpointArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidIngestionEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the ingestion-endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidIngestionEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInsightRuleArn` <a name="isValidInsightRuleArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidInsightRuleArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidInsightRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the insight-rule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidInsightRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIntegrationArn` <a name="isValidIntegrationArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidIntegrationArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidIntegrationArn(arn: string)
```

Validates whether a string is a valid ARN for the integration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMetricStreamArn` <a name="isValidMetricStreamArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidMetricStreamArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidMetricStreamArn(arn: string)
```

Validates whether a string is a valid ARN for the metric-stream resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidMetricStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOmniDashboardArn` <a name="isValidOmniDashboardArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidOmniDashboardArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidOmniDashboardArn(arn: string)
```

Validates whether a string is a valid ARN for the omni-dashboard resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidOmniDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOrganizationAccessGrantArn` <a name="isValidOrganizationAccessGrantArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidOrganizationAccessGrantArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidOrganizationAccessGrantArn(arn: string)
```

Validates whether a string is a valid ARN for the organization-access-grant resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidOrganizationAccessGrantArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOrganizationDomainArn` <a name="isValidOrganizationDomainArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidOrganizationDomainArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidOrganizationDomainArn(arn: string)
```

Validates whether a string is a valid ARN for the organization-domain resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidOrganizationDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceArn` <a name="isValidServiceArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidServiceArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidServiceArn(arn: string)
```

Validates whether a string is a valid ARN for the service resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSloArn` <a name="isValidSloArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidSloArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidSloArn(arn: string)
```

Validates whether a string is a valid ARN for the slo resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidSloArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSpaceArn` <a name="isValidSpaceArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidSpaceArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidSpaceArn(arn: string)
```

Validates whether a string is a valid ARN for the space resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidSpaceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidViewArn` <a name="isValidViewArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidViewArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidViewArn(arn: string)
```

Validates whether a string is a valid ARN for the view resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidViewArn.parameter.arn"></a>

- *Type:* string

---

##### `metricStream` <a name="metricStream" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.metricStream"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.metricStream(props: CloudWatchMetricStreamArnProps)
```

Builds an ARN for the metric-stream resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.metricStream.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps">CloudWatchMetricStreamArnProps</a>

---

##### `omniDashboard` <a name="omniDashboard" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.omniDashboard"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.omniDashboard(props: CloudWatchOmniDashboardArnProps)
```

Builds an ARN for the omni-dashboard resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.omniDashboard.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchOmniDashboardArnProps">CloudWatchOmniDashboardArnProps</a>

---

##### `organizationAccessGrant` <a name="organizationAccessGrant" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.organizationAccessGrant"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.organizationAccessGrant(props: CloudWatchOrganizationAccessGrantArnProps)
```

Builds an ARN for the organization-access-grant resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.organizationAccessGrant.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchOrganizationAccessGrantArnProps">CloudWatchOrganizationAccessGrantArnProps</a>

---

##### `organizationDomain` <a name="organizationDomain" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.organizationDomain"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.organizationDomain(props: CloudWatchOrganizationDomainArnProps)
```

Builds an ARN for the organization-domain resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.organizationDomain.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchOrganizationDomainArnProps">CloudWatchOrganizationDomainArnProps</a>

---

##### `parseAccessGrantArn` <a name="parseAccessGrantArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAccessGrantArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseAccessGrantArn(arn: string)
```

Parses a access-grant ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAccessGrantArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAccessProfileArn` <a name="parseAccessProfileArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAccessProfileArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseAccessProfileArn(arn: string)
```

Parses a access-profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAccessProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAlarmArn` <a name="parseAlarmArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAlarmArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseAlarmArn(arn: string)
```

Parses a alarm ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAlarmArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAlarmMuteRuleArn` <a name="parseAlarmMuteRuleArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAlarmMuteRuleArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseAlarmMuteRuleArn(arn: string)
```

Parses a alarm-mute-rule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAlarmMuteRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAlertArn` <a name="parseAlertArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAlertArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseAlertArn(arn: string)
```

Parses a alert ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAlertArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDashboardArn` <a name="parseDashboardArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseDashboardArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseDashboardArn(arn: string)
```

Parses a dashboard ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasetArn` <a name="parseDatasetArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseDatasetArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseDatasetArn(arn: string)
```

Parses a dataset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainArn` <a name="parseDomainArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseDomainArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseDomainArn(arn: string)
```

Parses a domain ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIngestionEndpointArn` <a name="parseIngestionEndpointArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseIngestionEndpointArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseIngestionEndpointArn(arn: string)
```

Parses a ingestion-endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseIngestionEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInsightRuleArn` <a name="parseInsightRuleArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseInsightRuleArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseInsightRuleArn(arn: string)
```

Parses a insight-rule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseInsightRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIntegrationArn` <a name="parseIntegrationArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseIntegrationArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseIntegrationArn(arn: string)
```

Parses a integration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMetricStreamArn` <a name="parseMetricStreamArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseMetricStreamArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseMetricStreamArn(arn: string)
```

Parses a metric-stream ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseMetricStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOmniDashboardArn` <a name="parseOmniDashboardArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseOmniDashboardArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseOmniDashboardArn(arn: string)
```

Parses a omni-dashboard ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseOmniDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOrganizationAccessGrantArn` <a name="parseOrganizationAccessGrantArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseOrganizationAccessGrantArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseOrganizationAccessGrantArn(arn: string)
```

Parses a organization-access-grant ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseOrganizationAccessGrantArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOrganizationDomainArn` <a name="parseOrganizationDomainArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseOrganizationDomainArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseOrganizationDomainArn(arn: string)
```

Parses a organization-domain ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseOrganizationDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceArn` <a name="parseServiceArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseServiceArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseServiceArn(arn: string)
```

Parses a service ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSloArn` <a name="parseSloArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseSloArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseSloArn(arn: string)
```

Parses a slo ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseSloArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSpaceArn` <a name="parseSpaceArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseSpaceArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseSpaceArn(arn: string)
```

Parses a space ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseSpaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseViewArn` <a name="parseViewArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseViewArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseViewArn(arn: string)
```

Parses a view ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseViewArn.parameter.arn"></a>

- *Type:* string

---

##### `service` <a name="service" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.service"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.service(props: CloudWatchServiceArnProps)
```

Builds an ARN for the service resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.service.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps">CloudWatchServiceArnProps</a>

---

##### `slo` <a name="slo" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.slo"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.slo(props: CloudWatchSloArnProps)
```

Builds an ARN for the slo resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.slo.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps">CloudWatchSloArnProps</a>

---

##### `space` <a name="space" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.space"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.space(props: CloudWatchSpaceArnProps)
```

Builds an ARN for the space resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.space.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchSpaceArnProps">CloudWatchSpaceArnProps</a>

---

##### `view` <a name="view" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.view"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.view(props: CloudWatchViewArnProps)
```

Builds an ARN for the view resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.view.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchViewArnProps">CloudWatchViewArnProps</a>

---




