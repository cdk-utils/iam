# `mobiletargeting` Submodule <a name="`mobiletargeting` Submodule" id="@cdk_utils/iam.mobiletargeting"></a>


## Structs <a name="Structs" id="Structs"></a>

### MobiletargetingAppArnComponents <a name="MobiletargetingAppArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnComponents"></a>

Parsed components of a app ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingAppArnComponents: mobiletargeting.MobiletargetingAppArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingAppArnProps <a name="MobiletargetingAppArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnProps"></a>

Properties for building a app ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingAppArnProps: mobiletargeting.MobiletargetingAppArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingApplicationMetricsArnComponents <a name="MobiletargetingApplicationMetricsArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnComponents"></a>

Parsed components of a application-metrics ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingApplicationMetricsArnComponents: mobiletargeting.MobiletargetingApplicationMetricsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnComponents.property.kpiName">kpiName</a></code> | <code>string</code> | The KpiName component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `kpiName`<sup>Required</sup> <a name="kpiName" id="@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnComponents.property.kpiName"></a>

```typescript
public readonly kpiName: string;
```

- *Type:* string

The KpiName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingApplicationMetricsArnProps <a name="MobiletargetingApplicationMetricsArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnProps"></a>

Properties for building a application-metrics ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingApplicationMetricsArnProps: mobiletargeting.MobiletargetingApplicationMetricsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnProps.property.kpiName">kpiName</a></code> | <code>string</code> | The KpiName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `kpiName`<sup>Required</sup> <a name="kpiName" id="@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnProps.property.kpiName"></a>

```typescript
public readonly kpiName: string;
```

- *Type:* string

The KpiName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingAppsArnComponents <a name="MobiletargetingAppsArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppsArnComponents"></a>

Parsed components of a apps ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppsArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingAppsArnComponents: mobiletargeting.MobiletargetingAppsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAppsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAppsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAppsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingAppsArnProps <a name="MobiletargetingAppsArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppsArnProps"></a>

Properties for building a apps ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppsArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingAppsArnProps: mobiletargeting.MobiletargetingAppsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAppsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAppsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAppsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAppsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingAttributeArnComponents <a name="MobiletargetingAttributeArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnComponents"></a>

Parsed components of a attribute ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingAttributeArnComponents: mobiletargeting.MobiletargetingAttributeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnComponents.property.attributeType">attributeType</a></code> | <code>string</code> | The AttributeType component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `attributeType`<sup>Required</sup> <a name="attributeType" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnComponents.property.attributeType"></a>

```typescript
public readonly attributeType: string;
```

- *Type:* string

The AttributeType component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingAttributeArnProps <a name="MobiletargetingAttributeArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnProps"></a>

Properties for building a attribute ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingAttributeArnProps: mobiletargeting.MobiletargetingAttributeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnProps.property.attributeType">attributeType</a></code> | <code>string</code> | The AttributeType component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `attributeType`<sup>Required</sup> <a name="attributeType" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnProps.property.attributeType"></a>

```typescript
public readonly attributeType: string;
```

- *Type:* string

The AttributeType component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingCampaignArnComponents <a name="MobiletargetingCampaignArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnComponents"></a>

Parsed components of a campaign ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingCampaignArnComponents: mobiletargeting.MobiletargetingCampaignArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnComponents.property.campaignId">campaignId</a></code> | <code>string</code> | The CampaignId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `campaignId`<sup>Required</sup> <a name="campaignId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnComponents.property.campaignId"></a>

```typescript
public readonly campaignId: string;
```

- *Type:* string

The CampaignId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingCampaignArnProps <a name="MobiletargetingCampaignArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnProps"></a>

Properties for building a campaign ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingCampaignArnProps: mobiletargeting.MobiletargetingCampaignArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnProps.property.campaignId">campaignId</a></code> | <code>string</code> | The CampaignId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `campaignId`<sup>Required</sup> <a name="campaignId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnProps.property.campaignId"></a>

```typescript
public readonly campaignId: string;
```

- *Type:* string

The CampaignId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingCampaignMetricsArnComponents <a name="MobiletargetingCampaignMetricsArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnComponents"></a>

Parsed components of a campaign-metrics ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingCampaignMetricsArnComponents: mobiletargeting.MobiletargetingCampaignMetricsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnComponents.property.campaignId">campaignId</a></code> | <code>string</code> | The CampaignId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnComponents.property.kpiName">kpiName</a></code> | <code>string</code> | The KpiName component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `campaignId`<sup>Required</sup> <a name="campaignId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnComponents.property.campaignId"></a>

```typescript
public readonly campaignId: string;
```

- *Type:* string

The CampaignId component.

---

##### `kpiName`<sup>Required</sup> <a name="kpiName" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnComponents.property.kpiName"></a>

```typescript
public readonly kpiName: string;
```

- *Type:* string

The KpiName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingCampaignMetricsArnProps <a name="MobiletargetingCampaignMetricsArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnProps"></a>

Properties for building a campaign-metrics ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingCampaignMetricsArnProps: mobiletargeting.MobiletargetingCampaignMetricsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnProps.property.campaignId">campaignId</a></code> | <code>string</code> | The CampaignId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnProps.property.kpiName">kpiName</a></code> | <code>string</code> | The KpiName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `campaignId`<sup>Required</sup> <a name="campaignId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnProps.property.campaignId"></a>

```typescript
public readonly campaignId: string;
```

- *Type:* string

The CampaignId component of the ARN.

---

##### `kpiName`<sup>Required</sup> <a name="kpiName" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnProps.property.kpiName"></a>

```typescript
public readonly kpiName: string;
```

- *Type:* string

The KpiName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingChannelArnComponents <a name="MobiletargetingChannelArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnComponents"></a>

Parsed components of a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingChannelArnComponents: mobiletargeting.MobiletargetingChannelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnComponents.property.channelType">channelType</a></code> | <code>string</code> | The ChannelType component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `channelType`<sup>Required</sup> <a name="channelType" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnComponents.property.channelType"></a>

```typescript
public readonly channelType: string;
```

- *Type:* string

The ChannelType component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingChannelArnProps <a name="MobiletargetingChannelArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnProps"></a>

Properties for building a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingChannelArnProps: mobiletargeting.MobiletargetingChannelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnProps.property.channelType">channelType</a></code> | <code>string</code> | The ChannelType component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `channelType`<sup>Required</sup> <a name="channelType" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnProps.property.channelType"></a>

```typescript
public readonly channelType: string;
```

- *Type:* string

The ChannelType component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingChannelsArnComponents <a name="MobiletargetingChannelsArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnComponents"></a>

Parsed components of a channels ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingChannelsArnComponents: mobiletargeting.MobiletargetingChannelsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingChannelsArnProps <a name="MobiletargetingChannelsArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnProps"></a>

Properties for building a channels ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingChannelsArnProps: mobiletargeting.MobiletargetingChannelsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingEndpointArnComponents <a name="MobiletargetingEndpointArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnComponents"></a>

Parsed components of a endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingEndpointArnComponents: mobiletargeting.MobiletargetingEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnComponents.property.endpointId">endpointId</a></code> | <code>string</code> | The EndpointId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnComponents.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

The EndpointId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingEndpointArnProps <a name="MobiletargetingEndpointArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnProps"></a>

Properties for building a endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingEndpointArnProps: mobiletargeting.MobiletargetingEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnProps.property.endpointId">endpointId</a></code> | <code>string</code> | The EndpointId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnProps.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

The EndpointId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingEventsArnComponents <a name="MobiletargetingEventsArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnComponents"></a>

Parsed components of a events ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingEventsArnComponents: mobiletargeting.MobiletargetingEventsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingEventsArnProps <a name="MobiletargetingEventsArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnProps"></a>

Properties for building a events ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingEventsArnProps: mobiletargeting.MobiletargetingEventsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingEventStreamArnComponents <a name="MobiletargetingEventStreamArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnComponents"></a>

Parsed components of a event-stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingEventStreamArnComponents: mobiletargeting.MobiletargetingEventStreamArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingEventStreamArnProps <a name="MobiletargetingEventStreamArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnProps"></a>

Properties for building a event-stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingEventStreamArnProps: mobiletargeting.MobiletargetingEventStreamArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingExportJobArnComponents <a name="MobiletargetingExportJobArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnComponents"></a>

Parsed components of a export-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingExportJobArnComponents: mobiletargeting.MobiletargetingExportJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingExportJobArnProps <a name="MobiletargetingExportJobArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnProps"></a>

Properties for building a export-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingExportJobArnProps: mobiletargeting.MobiletargetingExportJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingImportJobArnComponents <a name="MobiletargetingImportJobArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnComponents"></a>

Parsed components of a import-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingImportJobArnComponents: mobiletargeting.MobiletargetingImportJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingImportJobArnProps <a name="MobiletargetingImportJobArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnProps"></a>

Properties for building a import-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingImportJobArnProps: mobiletargeting.MobiletargetingImportJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingJourneyArnComponents <a name="MobiletargetingJourneyArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnComponents"></a>

Parsed components of a journey ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingJourneyArnComponents: mobiletargeting.MobiletargetingJourneyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnComponents.property.journeyId">journeyId</a></code> | <code>string</code> | The JourneyId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `journeyId`<sup>Required</sup> <a name="journeyId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnComponents.property.journeyId"></a>

```typescript
public readonly journeyId: string;
```

- *Type:* string

The JourneyId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingJourneyArnProps <a name="MobiletargetingJourneyArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnProps"></a>

Properties for building a journey ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingJourneyArnProps: mobiletargeting.MobiletargetingJourneyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnProps.property.journeyId">journeyId</a></code> | <code>string</code> | The JourneyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `journeyId`<sup>Required</sup> <a name="journeyId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnProps.property.journeyId"></a>

```typescript
public readonly journeyId: string;
```

- *Type:* string

The JourneyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingJourneyExecutionActivityMetricsArnComponents <a name="MobiletargetingJourneyExecutionActivityMetricsArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnComponents"></a>

Parsed components of a journey-execution-activity-metrics ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingJourneyExecutionActivityMetricsArnComponents: mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnComponents.property.journeyActivityId">journeyActivityId</a></code> | <code>string</code> | The JourneyActivityId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnComponents.property.journeyId">journeyId</a></code> | <code>string</code> | The JourneyId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `journeyActivityId`<sup>Required</sup> <a name="journeyActivityId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnComponents.property.journeyActivityId"></a>

```typescript
public readonly journeyActivityId: string;
```

- *Type:* string

The JourneyActivityId component.

---

##### `journeyId`<sup>Required</sup> <a name="journeyId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnComponents.property.journeyId"></a>

```typescript
public readonly journeyId: string;
```

- *Type:* string

The JourneyId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingJourneyExecutionActivityMetricsArnProps <a name="MobiletargetingJourneyExecutionActivityMetricsArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnProps"></a>

Properties for building a journey-execution-activity-metrics ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingJourneyExecutionActivityMetricsArnProps: mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnProps.property.journeyActivityId">journeyActivityId</a></code> | <code>string</code> | The JourneyActivityId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnProps.property.journeyId">journeyId</a></code> | <code>string</code> | The JourneyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `journeyActivityId`<sup>Required</sup> <a name="journeyActivityId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnProps.property.journeyActivityId"></a>

```typescript
public readonly journeyActivityId: string;
```

- *Type:* string

The JourneyActivityId component of the ARN.

---

##### `journeyId`<sup>Required</sup> <a name="journeyId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnProps.property.journeyId"></a>

```typescript
public readonly journeyId: string;
```

- *Type:* string

The JourneyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingJourneyExecutionMetricsArnComponents <a name="MobiletargetingJourneyExecutionMetricsArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnComponents"></a>

Parsed components of a journey-execution-metrics ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingJourneyExecutionMetricsArnComponents: mobiletargeting.MobiletargetingJourneyExecutionMetricsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnComponents.property.journeyId">journeyId</a></code> | <code>string</code> | The JourneyId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `journeyId`<sup>Required</sup> <a name="journeyId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnComponents.property.journeyId"></a>

```typescript
public readonly journeyId: string;
```

- *Type:* string

The JourneyId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingJourneyExecutionMetricsArnProps <a name="MobiletargetingJourneyExecutionMetricsArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnProps"></a>

Properties for building a journey-execution-metrics ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingJourneyExecutionMetricsArnProps: mobiletargeting.MobiletargetingJourneyExecutionMetricsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnProps.property.journeyId">journeyId</a></code> | <code>string</code> | The JourneyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `journeyId`<sup>Required</sup> <a name="journeyId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnProps.property.journeyId"></a>

```typescript
public readonly journeyId: string;
```

- *Type:* string

The JourneyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingJourneyMetricsArnComponents <a name="MobiletargetingJourneyMetricsArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnComponents"></a>

Parsed components of a journey-metrics ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingJourneyMetricsArnComponents: mobiletargeting.MobiletargetingJourneyMetricsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnComponents.property.journeyId">journeyId</a></code> | <code>string</code> | The JourneyId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnComponents.property.kpiName">kpiName</a></code> | <code>string</code> | The KpiName component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `journeyId`<sup>Required</sup> <a name="journeyId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnComponents.property.journeyId"></a>

```typescript
public readonly journeyId: string;
```

- *Type:* string

The JourneyId component.

---

##### `kpiName`<sup>Required</sup> <a name="kpiName" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnComponents.property.kpiName"></a>

```typescript
public readonly kpiName: string;
```

- *Type:* string

The KpiName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingJourneyMetricsArnProps <a name="MobiletargetingJourneyMetricsArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnProps"></a>

Properties for building a journey-metrics ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingJourneyMetricsArnProps: mobiletargeting.MobiletargetingJourneyMetricsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnProps.property.journeyId">journeyId</a></code> | <code>string</code> | The JourneyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnProps.property.kpiName">kpiName</a></code> | <code>string</code> | The KpiName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `journeyId`<sup>Required</sup> <a name="journeyId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnProps.property.journeyId"></a>

```typescript
public readonly journeyId: string;
```

- *Type:* string

The JourneyId component of the ARN.

---

##### `kpiName`<sup>Required</sup> <a name="kpiName" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnProps.property.kpiName"></a>

```typescript
public readonly kpiName: string;
```

- *Type:* string

The KpiName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingJourneysArnComponents <a name="MobiletargetingJourneysArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnComponents"></a>

Parsed components of a journeys ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingJourneysArnComponents: mobiletargeting.MobiletargetingJourneysArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingJourneysArnProps <a name="MobiletargetingJourneysArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnProps"></a>

Properties for building a journeys ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingJourneysArnProps: mobiletargeting.MobiletargetingJourneysArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingMessagesArnComponents <a name="MobiletargetingMessagesArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnComponents"></a>

Parsed components of a messages ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingMessagesArnComponents: mobiletargeting.MobiletargetingMessagesArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingMessagesArnProps <a name="MobiletargetingMessagesArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnProps"></a>

Properties for building a messages ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingMessagesArnProps: mobiletargeting.MobiletargetingMessagesArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingOtpArnComponents <a name="MobiletargetingOtpArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnComponents"></a>

Parsed components of a otp ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingOtpArnComponents: mobiletargeting.MobiletargetingOtpArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingOtpArnProps <a name="MobiletargetingOtpArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnProps"></a>

Properties for building a otp ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingOtpArnProps: mobiletargeting.MobiletargetingOtpArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingPhoneNumberValidateArnComponents <a name="MobiletargetingPhoneNumberValidateArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingPhoneNumberValidateArnComponents"></a>

Parsed components of a phone-number-validate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingPhoneNumberValidateArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingPhoneNumberValidateArnComponents: mobiletargeting.MobiletargetingPhoneNumberValidateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingPhoneNumberValidateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingPhoneNumberValidateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingPhoneNumberValidateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingPhoneNumberValidateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingPhoneNumberValidateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingPhoneNumberValidateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingPhoneNumberValidateArnProps <a name="MobiletargetingPhoneNumberValidateArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingPhoneNumberValidateArnProps"></a>

Properties for building a phone-number-validate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingPhoneNumberValidateArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingPhoneNumberValidateArnProps: mobiletargeting.MobiletargetingPhoneNumberValidateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingPhoneNumberValidateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingPhoneNumberValidateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingPhoneNumberValidateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingPhoneNumberValidateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingPhoneNumberValidateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingPhoneNumberValidateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingRecommenderArnComponents <a name="MobiletargetingRecommenderArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnComponents"></a>

Parsed components of a recommender ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingRecommenderArnComponents: mobiletargeting.MobiletargetingRecommenderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnComponents.property.recommenderId">recommenderId</a></code> | <code>string</code> | The RecommenderId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `recommenderId`<sup>Required</sup> <a name="recommenderId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnComponents.property.recommenderId"></a>

```typescript
public readonly recommenderId: string;
```

- *Type:* string

The RecommenderId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingRecommenderArnProps <a name="MobiletargetingRecommenderArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnProps"></a>

Properties for building a recommender ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingRecommenderArnProps: mobiletargeting.MobiletargetingRecommenderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnProps.property.recommenderId">recommenderId</a></code> | <code>string</code> | The RecommenderId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `recommenderId`<sup>Required</sup> <a name="recommenderId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnProps.property.recommenderId"></a>

```typescript
public readonly recommenderId: string;
```

- *Type:* string

The RecommenderId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingRecommendersArnComponents <a name="MobiletargetingRecommendersArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommendersArnComponents"></a>

Parsed components of a recommenders ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommendersArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingRecommendersArnComponents: mobiletargeting.MobiletargetingRecommendersArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingRecommendersArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingRecommendersArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingRecommendersArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommendersArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommendersArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommendersArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingRecommendersArnProps <a name="MobiletargetingRecommendersArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommendersArnProps"></a>

Properties for building a recommenders ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommendersArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingRecommendersArnProps: mobiletargeting.MobiletargetingRecommendersArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingRecommendersArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingRecommendersArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingRecommendersArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommendersArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommendersArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingRecommendersArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingReportsArnComponents <a name="MobiletargetingReportsArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingReportsArnComponents"></a>

Parsed components of a reports ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingReportsArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingReportsArnComponents: mobiletargeting.MobiletargetingReportsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingReportsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingReportsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingReportsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingReportsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingReportsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingReportsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingReportsArnProps <a name="MobiletargetingReportsArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingReportsArnProps"></a>

Properties for building a reports ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingReportsArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingReportsArnProps: mobiletargeting.MobiletargetingReportsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingReportsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingReportsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingReportsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingReportsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingReportsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingReportsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingSegmentArnComponents <a name="MobiletargetingSegmentArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnComponents"></a>

Parsed components of a segment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingSegmentArnComponents: mobiletargeting.MobiletargetingSegmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnComponents.property.segmentId">segmentId</a></code> | <code>string</code> | The SegmentId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `segmentId`<sup>Required</sup> <a name="segmentId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnComponents.property.segmentId"></a>

```typescript
public readonly segmentId: string;
```

- *Type:* string

The SegmentId component.

---

### MobiletargetingSegmentArnProps <a name="MobiletargetingSegmentArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnProps"></a>

Properties for building a segment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingSegmentArnProps: mobiletargeting.MobiletargetingSegmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnProps.property.segmentId">segmentId</a></code> | <code>string</code> | The SegmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `segmentId`<sup>Required</sup> <a name="segmentId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnProps.property.segmentId"></a>

```typescript
public readonly segmentId: string;
```

- *Type:* string

The SegmentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingTemplateArnComponents <a name="MobiletargetingTemplateArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnComponents"></a>

Parsed components of a template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingTemplateArnComponents: mobiletargeting.MobiletargetingTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnComponents.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnComponents.property.templateType">templateType</a></code> | <code>string</code> | The TemplateType component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnComponents.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component.

---

##### `templateType`<sup>Required</sup> <a name="templateType" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnComponents.property.templateType"></a>

```typescript
public readonly templateType: string;
```

- *Type:* string

The TemplateType component.

---

### MobiletargetingTemplateArnProps <a name="MobiletargetingTemplateArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnProps"></a>

Properties for building a template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingTemplateArnProps: mobiletargeting.MobiletargetingTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnProps.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnProps.property.templateType">templateType</a></code> | <code>string</code> | The TemplateType component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnProps.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component of the ARN.

---

##### `templateType`<sup>Required</sup> <a name="templateType" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnProps.property.templateType"></a>

```typescript
public readonly templateType: string;
```

- *Type:* string

The TemplateType component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingTemplatesArnComponents <a name="MobiletargetingTemplatesArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplatesArnComponents"></a>

Parsed components of a templates ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplatesArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingTemplatesArnComponents: mobiletargeting.MobiletargetingTemplatesArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingTemplatesArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingTemplatesArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingTemplatesArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplatesArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplatesArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplatesArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingTemplatesArnProps <a name="MobiletargetingTemplatesArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplatesArnProps"></a>

Properties for building a templates ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplatesArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingTemplatesArnProps: mobiletargeting.MobiletargetingTemplatesArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingTemplatesArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingTemplatesArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingTemplatesArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplatesArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplatesArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingTemplatesArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingUserArnComponents <a name="MobiletargetingUserArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnComponents"></a>

Parsed components of a user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingUserArnComponents: mobiletargeting.MobiletargetingUserArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnComponents.property.userId">userId</a></code> | <code>string</code> | The UserId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnComponents.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The UserId component.

---

### MobiletargetingUserArnProps <a name="MobiletargetingUserArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnProps"></a>

Properties for building a user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingUserArnProps: mobiletargeting.MobiletargetingUserArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnProps.property.userId">userId</a></code> | <code>string</code> | The UserId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnProps.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The UserId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MobiletargetingVerifyOtpArnComponents <a name="MobiletargetingVerifyOtpArnComponents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnComponents"></a>

Parsed components of a verify-otp ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnComponents.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingVerifyOtpArnComponents: mobiletargeting.MobiletargetingVerifyOtpArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MobiletargetingVerifyOtpArnProps <a name="MobiletargetingVerifyOtpArnProps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnProps"></a>

Properties for building a verify-otp ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnProps.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

const mobiletargetingVerifyOtpArnProps: mobiletargeting.MobiletargetingVerifyOtpArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### MobiletargetingActions <a name="MobiletargetingActions" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions"></a>

IAM action constants for the mobiletargeting service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

new mobiletargeting.MobiletargetingActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetAdmChannel">actionGetAdmChannel</a></code> | <code>string</code> | [Read] mobiletargeting:GetAdmChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetApnsChannel">actionGetApnsChannel</a></code> | <code>string</code> | [Read] mobiletargeting:GetApnsChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetApnsSandboxChannel">actionGetApnsSandboxChannel</a></code> | <code>string</code> | [Read] mobiletargeting:GetApnsSandboxChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetApnsVoipChannel">actionGetApnsVoipChannel</a></code> | <code>string</code> | [Read] mobiletargeting:GetApnsVoipChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetApnsVoipSandboxChannel">actionGetApnsVoipSandboxChannel</a></code> | <code>string</code> | [Read] mobiletargeting:GetApnsVoipSandboxChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetApp">actionGetApp</a></code> | <code>string</code> | [Read] mobiletargeting:GetApp. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetApplicationDateRangeKpi">actionGetApplicationDateRangeKpi</a></code> | <code>string</code> | [Read] mobiletargeting:GetApplicationDateRangeKpi. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetApplicationSettings">actionGetApplicationSettings</a></code> | <code>string</code> | [List] mobiletargeting:GetApplicationSettings. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetApps">actionGetApps</a></code> | <code>string</code> | [Read] mobiletargeting:GetApps. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetBaiduChannel">actionGetBaiduChannel</a></code> | <code>string</code> | [Read] mobiletargeting:GetBaiduChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetCampaign">actionGetCampaign</a></code> | <code>string</code> | [Read] mobiletargeting:GetCampaign. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetCampaignActivities">actionGetCampaignActivities</a></code> | <code>string</code> | [List] mobiletargeting:GetCampaignActivities. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetCampaignDateRangeKpi">actionGetCampaignDateRangeKpi</a></code> | <code>string</code> | [Read] mobiletargeting:GetCampaignDateRangeKpi. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetCampaigns">actionGetCampaigns</a></code> | <code>string</code> | [List] mobiletargeting:GetCampaigns. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetCampaignVersion">actionGetCampaignVersion</a></code> | <code>string</code> | [Read] mobiletargeting:GetCampaignVersion. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetCampaignVersions">actionGetCampaignVersions</a></code> | <code>string</code> | [List] mobiletargeting:GetCampaignVersions. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetChannels">actionGetChannels</a></code> | <code>string</code> | [List] mobiletargeting:GetChannels. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetEmailChannel">actionGetEmailChannel</a></code> | <code>string</code> | [Read] mobiletargeting:GetEmailChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetEmailTemplate">actionGetEmailTemplate</a></code> | <code>string</code> | [Read] mobiletargeting:GetEmailTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetEndpoint">actionGetEndpoint</a></code> | <code>string</code> | [Read] mobiletargeting:GetEndpoint. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetEventStream">actionGetEventStream</a></code> | <code>string</code> | [Read] mobiletargeting:GetEventStream. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetExportJob">actionGetExportJob</a></code> | <code>string</code> | [Read] mobiletargeting:GetExportJob. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetExportJobs">actionGetExportJobs</a></code> | <code>string</code> | [List] mobiletargeting:GetExportJobs. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetGcmChannel">actionGetGcmChannel</a></code> | <code>string</code> | [Read] mobiletargeting:GetGcmChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetImportJob">actionGetImportJob</a></code> | <code>string</code> | [Read] mobiletargeting:GetImportJob. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetImportJobs">actionGetImportJobs</a></code> | <code>string</code> | [List] mobiletargeting:GetImportJobs. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetInAppMessages">actionGetInAppMessages</a></code> | <code>string</code> | [Read] mobiletargeting:GetInAppMessages. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetInAppTemplate">actionGetInAppTemplate</a></code> | <code>string</code> | [Read] mobiletargeting:GetInAppTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetJourney">actionGetJourney</a></code> | <code>string</code> | [Read] mobiletargeting:GetJourney. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetJourneyDateRangeKpi">actionGetJourneyDateRangeKpi</a></code> | <code>string</code> | [Read] mobiletargeting:GetJourneyDateRangeKpi. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetJourneyExecutionActivityMetrics">actionGetJourneyExecutionActivityMetrics</a></code> | <code>string</code> | [Read] mobiletargeting:GetJourneyExecutionActivityMetrics. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetJourneyExecutionMetrics">actionGetJourneyExecutionMetrics</a></code> | <code>string</code> | [Read] mobiletargeting:GetJourneyExecutionMetrics. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetJourneyRunExecutionActivityMetrics">actionGetJourneyRunExecutionActivityMetrics</a></code> | <code>string</code> | [Read] mobiletargeting:GetJourneyRunExecutionActivityMetrics. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetJourneyRunExecutionMetrics">actionGetJourneyRunExecutionMetrics</a></code> | <code>string</code> | [Read] mobiletargeting:GetJourneyRunExecutionMetrics. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetJourneyRuns">actionGetJourneyRuns</a></code> | <code>string</code> | [List] mobiletargeting:GetJourneyRuns. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetPushTemplate">actionGetPushTemplate</a></code> | <code>string</code> | [Read] mobiletargeting:GetPushTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetRecommenderConfiguration">actionGetRecommenderConfiguration</a></code> | <code>string</code> | [Read] mobiletargeting:GetRecommenderConfiguration. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetRecommenderConfigurations">actionGetRecommenderConfigurations</a></code> | <code>string</code> | [List] mobiletargeting:GetRecommenderConfigurations. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetReports">actionGetReports</a></code> | <code>string</code> | [Read] mobiletargeting:GetReports. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetSegment">actionGetSegment</a></code> | <code>string</code> | [Read] mobiletargeting:GetSegment. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetSegmentExportJobs">actionGetSegmentExportJobs</a></code> | <code>string</code> | [List] mobiletargeting:GetSegmentExportJobs. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetSegmentImportJobs">actionGetSegmentImportJobs</a></code> | <code>string</code> | [List] mobiletargeting:GetSegmentImportJobs. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetSegments">actionGetSegments</a></code> | <code>string</code> | [List] mobiletargeting:GetSegments. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetSegmentVersion">actionGetSegmentVersion</a></code> | <code>string</code> | [Read] mobiletargeting:GetSegmentVersion. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetSegmentVersions">actionGetSegmentVersions</a></code> | <code>string</code> | [List] mobiletargeting:GetSegmentVersions. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetSmsChannel">actionGetSmsChannel</a></code> | <code>string</code> | [Read] mobiletargeting:GetSmsChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetSmsTemplate">actionGetSmsTemplate</a></code> | <code>string</code> | [Read] mobiletargeting:GetSmsTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetUserEndpoints">actionGetUserEndpoints</a></code> | <code>string</code> | [Read] mobiletargeting:GetUserEndpoints. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetVoiceChannel">actionGetVoiceChannel</a></code> | <code>string</code> | [Read] mobiletargeting:GetVoiceChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetVoiceTemplate">actionGetVoiceTemplate</a></code> | <code>string</code> | [Read] mobiletargeting:GetVoiceTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateApp">CreateApp</a></code> | <code>string</code> | [Write] mobiletargeting:CreateApp. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateCampaign">CreateCampaign</a></code> | <code>string</code> | [Write] mobiletargeting:CreateCampaign. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateEmailTemplate">CreateEmailTemplate</a></code> | <code>string</code> | [Write] mobiletargeting:CreateEmailTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateExportJob">CreateExportJob</a></code> | <code>string</code> | [Write] mobiletargeting:CreateExportJob. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateImportJob">CreateImportJob</a></code> | <code>string</code> | [Write] mobiletargeting:CreateImportJob. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateInAppTemplate">CreateInAppTemplate</a></code> | <code>string</code> | [Write] mobiletargeting:CreateInAppTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateJourney">CreateJourney</a></code> | <code>string</code> | [Write] mobiletargeting:CreateJourney. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreatePushTemplate">CreatePushTemplate</a></code> | <code>string</code> | [Write] mobiletargeting:CreatePushTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateRecommenderConfiguration">CreateRecommenderConfiguration</a></code> | <code>string</code> | [Write] mobiletargeting:CreateRecommenderConfiguration. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateSegment">CreateSegment</a></code> | <code>string</code> | [Write] mobiletargeting:CreateSegment. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateSmsTemplate">CreateSmsTemplate</a></code> | <code>string</code> | [Write] mobiletargeting:CreateSmsTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateVoiceTemplate">CreateVoiceTemplate</a></code> | <code>string</code> | [Write] mobiletargeting:CreateVoiceTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteAdmChannel">DeleteAdmChannel</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteAdmChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteApnsChannel">DeleteApnsChannel</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteApnsChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteApnsSandboxChannel">DeleteApnsSandboxChannel</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteApnsSandboxChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteApnsVoipChannel">DeleteApnsVoipChannel</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteApnsVoipChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteApnsVoipSandboxChannel">DeleteApnsVoipSandboxChannel</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteApnsVoipSandboxChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteApp">DeleteApp</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteApp. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteBaiduChannel">DeleteBaiduChannel</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteBaiduChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteCampaign">DeleteCampaign</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteCampaign. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteEmailChannel">DeleteEmailChannel</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteEmailChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteEmailTemplate">DeleteEmailTemplate</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteEmailTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteEndpoint">DeleteEndpoint</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteEndpoint. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteEventStream">DeleteEventStream</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteEventStream. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteGcmChannel">DeleteGcmChannel</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteGcmChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteInAppTemplate">DeleteInAppTemplate</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteInAppTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteJourney">DeleteJourney</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteJourney. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeletePushTemplate">DeletePushTemplate</a></code> | <code>string</code> | [Write] mobiletargeting:DeletePushTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteRecommenderConfiguration">DeleteRecommenderConfiguration</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteRecommenderConfiguration. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteSegment">DeleteSegment</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteSegment. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteSmsChannel">DeleteSmsChannel</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteSmsChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteSmsTemplate">DeleteSmsTemplate</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteSmsTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteUserEndpoints">DeleteUserEndpoints</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteUserEndpoints. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteVoiceChannel">DeleteVoiceChannel</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteVoiceChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteVoiceTemplate">DeleteVoiceTemplate</a></code> | <code>string</code> | [Write] mobiletargeting:DeleteVoiceTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.ListJourneys">ListJourneys</a></code> | <code>string</code> | [List] mobiletargeting:ListJourneys. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] mobiletargeting:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.ListTemplates">ListTemplates</a></code> | <code>string</code> | [List] mobiletargeting:ListTemplates. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.ListTemplateVersions">ListTemplateVersions</a></code> | <code>string</code> | [List] mobiletargeting:ListTemplateVersions. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.PhoneNumberValidate">PhoneNumberValidate</a></code> | <code>string</code> | [Read] mobiletargeting:PhoneNumberValidate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.PutEvents">PutEvents</a></code> | <code>string</code> | [Write] mobiletargeting:PutEvents. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.PutEventStream">PutEventStream</a></code> | <code>string</code> | [Write] mobiletargeting:PutEventStream. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.RemoveAttributes">RemoveAttributes</a></code> | <code>string</code> | [Write] mobiletargeting:RemoveAttributes. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.SendMessages">SendMessages</a></code> | <code>string</code> | [Write] mobiletargeting:SendMessages. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.SendOTPMessage">SendOTPMessage</a></code> | <code>string</code> | [Write] mobiletargeting:SendOTPMessage. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.SendUsersMessages">SendUsersMessages</a></code> | <code>string</code> | [Write] mobiletargeting:SendUsersMessages. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] mobiletargeting:TagResource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] mobiletargeting:UntagResource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateAdmChannel">UpdateAdmChannel</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateAdmChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateApnsChannel">UpdateApnsChannel</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateApnsChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateApnsSandboxChannel">UpdateApnsSandboxChannel</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateApnsSandboxChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateApnsVoipChannel">UpdateApnsVoipChannel</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateApnsVoipChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateApnsVoipSandboxChannel">UpdateApnsVoipSandboxChannel</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateApnsVoipSandboxChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateApplicationSettings">UpdateApplicationSettings</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateApplicationSettings. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateBaiduChannel">UpdateBaiduChannel</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateBaiduChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateCampaign">UpdateCampaign</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateCampaign. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateEmailChannel">UpdateEmailChannel</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateEmailChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateEmailTemplate">UpdateEmailTemplate</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateEmailTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateEndpoint">UpdateEndpoint</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateEndpoint. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateEndpointsBatch">UpdateEndpointsBatch</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateEndpointsBatch. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateGcmChannel">UpdateGcmChannel</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateGcmChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateInAppTemplate">UpdateInAppTemplate</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateInAppTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateJourney">UpdateJourney</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateJourney. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateJourneyState">UpdateJourneyState</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateJourneyState. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdatePushTemplate">UpdatePushTemplate</a></code> | <code>string</code> | [Write] mobiletargeting:UpdatePushTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateRecommenderConfiguration">UpdateRecommenderConfiguration</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateRecommenderConfiguration. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateSegment">UpdateSegment</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateSegment. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateSmsChannel">UpdateSmsChannel</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateSmsChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateSmsTemplate">UpdateSmsTemplate</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateSmsTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateTemplateActiveVersion">UpdateTemplateActiveVersion</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateTemplateActiveVersion. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateVoiceChannel">UpdateVoiceChannel</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateVoiceChannel. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateVoiceTemplate">UpdateVoiceTemplate</a></code> | <code>string</code> | [Write] mobiletargeting:UpdateVoiceTemplate. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.VerifyOTPMessage">VerifyOTPMessage</a></code> | <code>string</code> | [Write] mobiletargeting:VerifyOTPMessage. |

---

##### `actionGetAdmChannel`<sup>Required</sup> <a name="actionGetAdmChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetAdmChannel"></a>

```typescript
public readonly actionGetAdmChannel: string;
```

- *Type:* string

[Read] mobiletargeting:GetAdmChannel.

---

##### `actionGetApnsChannel`<sup>Required</sup> <a name="actionGetApnsChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetApnsChannel"></a>

```typescript
public readonly actionGetApnsChannel: string;
```

- *Type:* string

[Read] mobiletargeting:GetApnsChannel.

---

##### `actionGetApnsSandboxChannel`<sup>Required</sup> <a name="actionGetApnsSandboxChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetApnsSandboxChannel"></a>

```typescript
public readonly actionGetApnsSandboxChannel: string;
```

- *Type:* string

[Read] mobiletargeting:GetApnsSandboxChannel.

---

##### `actionGetApnsVoipChannel`<sup>Required</sup> <a name="actionGetApnsVoipChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetApnsVoipChannel"></a>

```typescript
public readonly actionGetApnsVoipChannel: string;
```

- *Type:* string

[Read] mobiletargeting:GetApnsVoipChannel.

---

##### `actionGetApnsVoipSandboxChannel`<sup>Required</sup> <a name="actionGetApnsVoipSandboxChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetApnsVoipSandboxChannel"></a>

```typescript
public readonly actionGetApnsVoipSandboxChannel: string;
```

- *Type:* string

[Read] mobiletargeting:GetApnsVoipSandboxChannel.

---

##### `actionGetApp`<sup>Required</sup> <a name="actionGetApp" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetApp"></a>

```typescript
public readonly actionGetApp: string;
```

- *Type:* string

[Read] mobiletargeting:GetApp.

---

##### `actionGetApplicationDateRangeKpi`<sup>Required</sup> <a name="actionGetApplicationDateRangeKpi" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetApplicationDateRangeKpi"></a>

```typescript
public readonly actionGetApplicationDateRangeKpi: string;
```

- *Type:* string

[Read] mobiletargeting:GetApplicationDateRangeKpi.

---

##### `actionGetApplicationSettings`<sup>Required</sup> <a name="actionGetApplicationSettings" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetApplicationSettings"></a>

```typescript
public readonly actionGetApplicationSettings: string;
```

- *Type:* string

[List] mobiletargeting:GetApplicationSettings.

---

##### `actionGetApps`<sup>Required</sup> <a name="actionGetApps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetApps"></a>

```typescript
public readonly actionGetApps: string;
```

- *Type:* string

[Read] mobiletargeting:GetApps.

---

##### `actionGetBaiduChannel`<sup>Required</sup> <a name="actionGetBaiduChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetBaiduChannel"></a>

```typescript
public readonly actionGetBaiduChannel: string;
```

- *Type:* string

[Read] mobiletargeting:GetBaiduChannel.

---

##### `actionGetCampaign`<sup>Required</sup> <a name="actionGetCampaign" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetCampaign"></a>

```typescript
public readonly actionGetCampaign: string;
```

- *Type:* string

[Read] mobiletargeting:GetCampaign.

---

##### `actionGetCampaignActivities`<sup>Required</sup> <a name="actionGetCampaignActivities" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetCampaignActivities"></a>

```typescript
public readonly actionGetCampaignActivities: string;
```

- *Type:* string

[List] mobiletargeting:GetCampaignActivities.

---

##### `actionGetCampaignDateRangeKpi`<sup>Required</sup> <a name="actionGetCampaignDateRangeKpi" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetCampaignDateRangeKpi"></a>

```typescript
public readonly actionGetCampaignDateRangeKpi: string;
```

- *Type:* string

[Read] mobiletargeting:GetCampaignDateRangeKpi.

---

##### `actionGetCampaigns`<sup>Required</sup> <a name="actionGetCampaigns" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetCampaigns"></a>

```typescript
public readonly actionGetCampaigns: string;
```

- *Type:* string

[List] mobiletargeting:GetCampaigns.

---

##### `actionGetCampaignVersion`<sup>Required</sup> <a name="actionGetCampaignVersion" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetCampaignVersion"></a>

```typescript
public readonly actionGetCampaignVersion: string;
```

- *Type:* string

[Read] mobiletargeting:GetCampaignVersion.

---

##### `actionGetCampaignVersions`<sup>Required</sup> <a name="actionGetCampaignVersions" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetCampaignVersions"></a>

```typescript
public readonly actionGetCampaignVersions: string;
```

- *Type:* string

[List] mobiletargeting:GetCampaignVersions.

---

##### `actionGetChannels`<sup>Required</sup> <a name="actionGetChannels" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetChannels"></a>

```typescript
public readonly actionGetChannels: string;
```

- *Type:* string

[List] mobiletargeting:GetChannels.

---

##### `actionGetEmailChannel`<sup>Required</sup> <a name="actionGetEmailChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetEmailChannel"></a>

```typescript
public readonly actionGetEmailChannel: string;
```

- *Type:* string

[Read] mobiletargeting:GetEmailChannel.

---

##### `actionGetEmailTemplate`<sup>Required</sup> <a name="actionGetEmailTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetEmailTemplate"></a>

```typescript
public readonly actionGetEmailTemplate: string;
```

- *Type:* string

[Read] mobiletargeting:GetEmailTemplate.

---

##### `actionGetEndpoint`<sup>Required</sup> <a name="actionGetEndpoint" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetEndpoint"></a>

```typescript
public readonly actionGetEndpoint: string;
```

- *Type:* string

[Read] mobiletargeting:GetEndpoint.

---

##### `actionGetEventStream`<sup>Required</sup> <a name="actionGetEventStream" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetEventStream"></a>

```typescript
public readonly actionGetEventStream: string;
```

- *Type:* string

[Read] mobiletargeting:GetEventStream.

---

##### `actionGetExportJob`<sup>Required</sup> <a name="actionGetExportJob" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetExportJob"></a>

```typescript
public readonly actionGetExportJob: string;
```

- *Type:* string

[Read] mobiletargeting:GetExportJob.

---

##### `actionGetExportJobs`<sup>Required</sup> <a name="actionGetExportJobs" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetExportJobs"></a>

```typescript
public readonly actionGetExportJobs: string;
```

- *Type:* string

[List] mobiletargeting:GetExportJobs.

---

##### `actionGetGcmChannel`<sup>Required</sup> <a name="actionGetGcmChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetGcmChannel"></a>

```typescript
public readonly actionGetGcmChannel: string;
```

- *Type:* string

[Read] mobiletargeting:GetGcmChannel.

---

##### `actionGetImportJob`<sup>Required</sup> <a name="actionGetImportJob" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetImportJob"></a>

```typescript
public readonly actionGetImportJob: string;
```

- *Type:* string

[Read] mobiletargeting:GetImportJob.

---

##### `actionGetImportJobs`<sup>Required</sup> <a name="actionGetImportJobs" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetImportJobs"></a>

```typescript
public readonly actionGetImportJobs: string;
```

- *Type:* string

[List] mobiletargeting:GetImportJobs.

---

##### `actionGetInAppMessages`<sup>Required</sup> <a name="actionGetInAppMessages" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetInAppMessages"></a>

```typescript
public readonly actionGetInAppMessages: string;
```

- *Type:* string

[Read] mobiletargeting:GetInAppMessages.

---

##### `actionGetInAppTemplate`<sup>Required</sup> <a name="actionGetInAppTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetInAppTemplate"></a>

```typescript
public readonly actionGetInAppTemplate: string;
```

- *Type:* string

[Read] mobiletargeting:GetInAppTemplate.

---

##### `actionGetJourney`<sup>Required</sup> <a name="actionGetJourney" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetJourney"></a>

```typescript
public readonly actionGetJourney: string;
```

- *Type:* string

[Read] mobiletargeting:GetJourney.

---

##### `actionGetJourneyDateRangeKpi`<sup>Required</sup> <a name="actionGetJourneyDateRangeKpi" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetJourneyDateRangeKpi"></a>

```typescript
public readonly actionGetJourneyDateRangeKpi: string;
```

- *Type:* string

[Read] mobiletargeting:GetJourneyDateRangeKpi.

---

##### `actionGetJourneyExecutionActivityMetrics`<sup>Required</sup> <a name="actionGetJourneyExecutionActivityMetrics" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetJourneyExecutionActivityMetrics"></a>

```typescript
public readonly actionGetJourneyExecutionActivityMetrics: string;
```

- *Type:* string

[Read] mobiletargeting:GetJourneyExecutionActivityMetrics.

---

##### `actionGetJourneyExecutionMetrics`<sup>Required</sup> <a name="actionGetJourneyExecutionMetrics" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetJourneyExecutionMetrics"></a>

```typescript
public readonly actionGetJourneyExecutionMetrics: string;
```

- *Type:* string

[Read] mobiletargeting:GetJourneyExecutionMetrics.

---

##### `actionGetJourneyRunExecutionActivityMetrics`<sup>Required</sup> <a name="actionGetJourneyRunExecutionActivityMetrics" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetJourneyRunExecutionActivityMetrics"></a>

```typescript
public readonly actionGetJourneyRunExecutionActivityMetrics: string;
```

- *Type:* string

[Read] mobiletargeting:GetJourneyRunExecutionActivityMetrics.

---

##### `actionGetJourneyRunExecutionMetrics`<sup>Required</sup> <a name="actionGetJourneyRunExecutionMetrics" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetJourneyRunExecutionMetrics"></a>

```typescript
public readonly actionGetJourneyRunExecutionMetrics: string;
```

- *Type:* string

[Read] mobiletargeting:GetJourneyRunExecutionMetrics.

---

##### `actionGetJourneyRuns`<sup>Required</sup> <a name="actionGetJourneyRuns" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetJourneyRuns"></a>

```typescript
public readonly actionGetJourneyRuns: string;
```

- *Type:* string

[List] mobiletargeting:GetJourneyRuns.

---

##### `actionGetPushTemplate`<sup>Required</sup> <a name="actionGetPushTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetPushTemplate"></a>

```typescript
public readonly actionGetPushTemplate: string;
```

- *Type:* string

[Read] mobiletargeting:GetPushTemplate.

---

##### `actionGetRecommenderConfiguration`<sup>Required</sup> <a name="actionGetRecommenderConfiguration" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetRecommenderConfiguration"></a>

```typescript
public readonly actionGetRecommenderConfiguration: string;
```

- *Type:* string

[Read] mobiletargeting:GetRecommenderConfiguration.

---

##### `actionGetRecommenderConfigurations`<sup>Required</sup> <a name="actionGetRecommenderConfigurations" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetRecommenderConfigurations"></a>

```typescript
public readonly actionGetRecommenderConfigurations: string;
```

- *Type:* string

[List] mobiletargeting:GetRecommenderConfigurations.

---

##### `actionGetReports`<sup>Required</sup> <a name="actionGetReports" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetReports"></a>

```typescript
public readonly actionGetReports: string;
```

- *Type:* string

[Read] mobiletargeting:GetReports.

---

##### `actionGetSegment`<sup>Required</sup> <a name="actionGetSegment" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetSegment"></a>

```typescript
public readonly actionGetSegment: string;
```

- *Type:* string

[Read] mobiletargeting:GetSegment.

---

##### `actionGetSegmentExportJobs`<sup>Required</sup> <a name="actionGetSegmentExportJobs" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetSegmentExportJobs"></a>

```typescript
public readonly actionGetSegmentExportJobs: string;
```

- *Type:* string

[List] mobiletargeting:GetSegmentExportJobs.

---

##### `actionGetSegmentImportJobs`<sup>Required</sup> <a name="actionGetSegmentImportJobs" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetSegmentImportJobs"></a>

```typescript
public readonly actionGetSegmentImportJobs: string;
```

- *Type:* string

[List] mobiletargeting:GetSegmentImportJobs.

---

##### `actionGetSegments`<sup>Required</sup> <a name="actionGetSegments" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetSegments"></a>

```typescript
public readonly actionGetSegments: string;
```

- *Type:* string

[List] mobiletargeting:GetSegments.

---

##### `actionGetSegmentVersion`<sup>Required</sup> <a name="actionGetSegmentVersion" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetSegmentVersion"></a>

```typescript
public readonly actionGetSegmentVersion: string;
```

- *Type:* string

[Read] mobiletargeting:GetSegmentVersion.

---

##### `actionGetSegmentVersions`<sup>Required</sup> <a name="actionGetSegmentVersions" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetSegmentVersions"></a>

```typescript
public readonly actionGetSegmentVersions: string;
```

- *Type:* string

[List] mobiletargeting:GetSegmentVersions.

---

##### `actionGetSmsChannel`<sup>Required</sup> <a name="actionGetSmsChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetSmsChannel"></a>

```typescript
public readonly actionGetSmsChannel: string;
```

- *Type:* string

[Read] mobiletargeting:GetSmsChannel.

---

##### `actionGetSmsTemplate`<sup>Required</sup> <a name="actionGetSmsTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetSmsTemplate"></a>

```typescript
public readonly actionGetSmsTemplate: string;
```

- *Type:* string

[Read] mobiletargeting:GetSmsTemplate.

---

##### `actionGetUserEndpoints`<sup>Required</sup> <a name="actionGetUserEndpoints" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetUserEndpoints"></a>

```typescript
public readonly actionGetUserEndpoints: string;
```

- *Type:* string

[Read] mobiletargeting:GetUserEndpoints.

---

##### `actionGetVoiceChannel`<sup>Required</sup> <a name="actionGetVoiceChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetVoiceChannel"></a>

```typescript
public readonly actionGetVoiceChannel: string;
```

- *Type:* string

[Read] mobiletargeting:GetVoiceChannel.

---

##### `actionGetVoiceTemplate`<sup>Required</sup> <a name="actionGetVoiceTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.actionGetVoiceTemplate"></a>

```typescript
public readonly actionGetVoiceTemplate: string;
```

- *Type:* string

[Read] mobiletargeting:GetVoiceTemplate.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateApp`<sup>Required</sup> <a name="CreateApp" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateApp"></a>

```typescript
public readonly CreateApp: string;
```

- *Type:* string

[Write] mobiletargeting:CreateApp.

---

##### `CreateCampaign`<sup>Required</sup> <a name="CreateCampaign" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateCampaign"></a>

```typescript
public readonly CreateCampaign: string;
```

- *Type:* string

[Write] mobiletargeting:CreateCampaign.

---

##### `CreateEmailTemplate`<sup>Required</sup> <a name="CreateEmailTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateEmailTemplate"></a>

```typescript
public readonly CreateEmailTemplate: string;
```

- *Type:* string

[Write] mobiletargeting:CreateEmailTemplate.

---

##### `CreateExportJob`<sup>Required</sup> <a name="CreateExportJob" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateExportJob"></a>

```typescript
public readonly CreateExportJob: string;
```

- *Type:* string

[Write] mobiletargeting:CreateExportJob.

---

##### `CreateImportJob`<sup>Required</sup> <a name="CreateImportJob" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateImportJob"></a>

```typescript
public readonly CreateImportJob: string;
```

- *Type:* string

[Write] mobiletargeting:CreateImportJob.

---

##### `CreateInAppTemplate`<sup>Required</sup> <a name="CreateInAppTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateInAppTemplate"></a>

```typescript
public readonly CreateInAppTemplate: string;
```

- *Type:* string

[Write] mobiletargeting:CreateInAppTemplate.

---

##### `CreateJourney`<sup>Required</sup> <a name="CreateJourney" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateJourney"></a>

```typescript
public readonly CreateJourney: string;
```

- *Type:* string

[Write] mobiletargeting:CreateJourney.

---

##### `CreatePushTemplate`<sup>Required</sup> <a name="CreatePushTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreatePushTemplate"></a>

```typescript
public readonly CreatePushTemplate: string;
```

- *Type:* string

[Write] mobiletargeting:CreatePushTemplate.

---

##### `CreateRecommenderConfiguration`<sup>Required</sup> <a name="CreateRecommenderConfiguration" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateRecommenderConfiguration"></a>

```typescript
public readonly CreateRecommenderConfiguration: string;
```

- *Type:* string

[Write] mobiletargeting:CreateRecommenderConfiguration.

---

##### `CreateSegment`<sup>Required</sup> <a name="CreateSegment" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateSegment"></a>

```typescript
public readonly CreateSegment: string;
```

- *Type:* string

[Write] mobiletargeting:CreateSegment.

---

##### `CreateSmsTemplate`<sup>Required</sup> <a name="CreateSmsTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateSmsTemplate"></a>

```typescript
public readonly CreateSmsTemplate: string;
```

- *Type:* string

[Write] mobiletargeting:CreateSmsTemplate.

---

##### `CreateVoiceTemplate`<sup>Required</sup> <a name="CreateVoiceTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.CreateVoiceTemplate"></a>

```typescript
public readonly CreateVoiceTemplate: string;
```

- *Type:* string

[Write] mobiletargeting:CreateVoiceTemplate.

---

##### `DeleteAdmChannel`<sup>Required</sup> <a name="DeleteAdmChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteAdmChannel"></a>

```typescript
public readonly DeleteAdmChannel: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteAdmChannel.

---

##### `DeleteApnsChannel`<sup>Required</sup> <a name="DeleteApnsChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteApnsChannel"></a>

```typescript
public readonly DeleteApnsChannel: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteApnsChannel.

---

##### `DeleteApnsSandboxChannel`<sup>Required</sup> <a name="DeleteApnsSandboxChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteApnsSandboxChannel"></a>

```typescript
public readonly DeleteApnsSandboxChannel: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteApnsSandboxChannel.

---

##### `DeleteApnsVoipChannel`<sup>Required</sup> <a name="DeleteApnsVoipChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteApnsVoipChannel"></a>

```typescript
public readonly DeleteApnsVoipChannel: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteApnsVoipChannel.

---

##### `DeleteApnsVoipSandboxChannel`<sup>Required</sup> <a name="DeleteApnsVoipSandboxChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteApnsVoipSandboxChannel"></a>

```typescript
public readonly DeleteApnsVoipSandboxChannel: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteApnsVoipSandboxChannel.

---

##### `DeleteApp`<sup>Required</sup> <a name="DeleteApp" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteApp"></a>

```typescript
public readonly DeleteApp: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteApp.

---

##### `DeleteBaiduChannel`<sup>Required</sup> <a name="DeleteBaiduChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteBaiduChannel"></a>

```typescript
public readonly DeleteBaiduChannel: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteBaiduChannel.

---

##### `DeleteCampaign`<sup>Required</sup> <a name="DeleteCampaign" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteCampaign"></a>

```typescript
public readonly DeleteCampaign: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteCampaign.

---

##### `DeleteEmailChannel`<sup>Required</sup> <a name="DeleteEmailChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteEmailChannel"></a>

```typescript
public readonly DeleteEmailChannel: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteEmailChannel.

---

##### `DeleteEmailTemplate`<sup>Required</sup> <a name="DeleteEmailTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteEmailTemplate"></a>

```typescript
public readonly DeleteEmailTemplate: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteEmailTemplate.

---

##### `DeleteEndpoint`<sup>Required</sup> <a name="DeleteEndpoint" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteEndpoint"></a>

```typescript
public readonly DeleteEndpoint: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteEndpoint.

---

##### `DeleteEventStream`<sup>Required</sup> <a name="DeleteEventStream" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteEventStream"></a>

```typescript
public readonly DeleteEventStream: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteEventStream.

---

##### `DeleteGcmChannel`<sup>Required</sup> <a name="DeleteGcmChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteGcmChannel"></a>

```typescript
public readonly DeleteGcmChannel: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteGcmChannel.

---

##### `DeleteInAppTemplate`<sup>Required</sup> <a name="DeleteInAppTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteInAppTemplate"></a>

```typescript
public readonly DeleteInAppTemplate: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteInAppTemplate.

---

##### `DeleteJourney`<sup>Required</sup> <a name="DeleteJourney" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteJourney"></a>

```typescript
public readonly DeleteJourney: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteJourney.

---

##### `DeletePushTemplate`<sup>Required</sup> <a name="DeletePushTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeletePushTemplate"></a>

```typescript
public readonly DeletePushTemplate: string;
```

- *Type:* string

[Write] mobiletargeting:DeletePushTemplate.

---

##### `DeleteRecommenderConfiguration`<sup>Required</sup> <a name="DeleteRecommenderConfiguration" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteRecommenderConfiguration"></a>

```typescript
public readonly DeleteRecommenderConfiguration: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteRecommenderConfiguration.

---

##### `DeleteSegment`<sup>Required</sup> <a name="DeleteSegment" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteSegment"></a>

```typescript
public readonly DeleteSegment: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteSegment.

---

##### `DeleteSmsChannel`<sup>Required</sup> <a name="DeleteSmsChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteSmsChannel"></a>

```typescript
public readonly DeleteSmsChannel: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteSmsChannel.

---

##### `DeleteSmsTemplate`<sup>Required</sup> <a name="DeleteSmsTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteSmsTemplate"></a>

```typescript
public readonly DeleteSmsTemplate: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteSmsTemplate.

---

##### `DeleteUserEndpoints`<sup>Required</sup> <a name="DeleteUserEndpoints" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteUserEndpoints"></a>

```typescript
public readonly DeleteUserEndpoints: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteUserEndpoints.

---

##### `DeleteVoiceChannel`<sup>Required</sup> <a name="DeleteVoiceChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteVoiceChannel"></a>

```typescript
public readonly DeleteVoiceChannel: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteVoiceChannel.

---

##### `DeleteVoiceTemplate`<sup>Required</sup> <a name="DeleteVoiceTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.DeleteVoiceTemplate"></a>

```typescript
public readonly DeleteVoiceTemplate: string;
```

- *Type:* string

[Write] mobiletargeting:DeleteVoiceTemplate.

---

##### `ListJourneys`<sup>Required</sup> <a name="ListJourneys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.ListJourneys"></a>

```typescript
public readonly ListJourneys: string;
```

- *Type:* string

[List] mobiletargeting:ListJourneys.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] mobiletargeting:ListTagsForResource.

---

##### `ListTemplates`<sup>Required</sup> <a name="ListTemplates" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.ListTemplates"></a>

```typescript
public readonly ListTemplates: string;
```

- *Type:* string

[List] mobiletargeting:ListTemplates.

---

##### `ListTemplateVersions`<sup>Required</sup> <a name="ListTemplateVersions" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.ListTemplateVersions"></a>

```typescript
public readonly ListTemplateVersions: string;
```

- *Type:* string

[List] mobiletargeting:ListTemplateVersions.

---

##### `PhoneNumberValidate`<sup>Required</sup> <a name="PhoneNumberValidate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.PhoneNumberValidate"></a>

```typescript
public readonly PhoneNumberValidate: string;
```

- *Type:* string

[Read] mobiletargeting:PhoneNumberValidate.

---

##### `PutEvents`<sup>Required</sup> <a name="PutEvents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.PutEvents"></a>

```typescript
public readonly PutEvents: string;
```

- *Type:* string

[Write] mobiletargeting:PutEvents.

---

##### `PutEventStream`<sup>Required</sup> <a name="PutEventStream" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.PutEventStream"></a>

```typescript
public readonly PutEventStream: string;
```

- *Type:* string

[Write] mobiletargeting:PutEventStream.

---

##### `RemoveAttributes`<sup>Required</sup> <a name="RemoveAttributes" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.RemoveAttributes"></a>

```typescript
public readonly RemoveAttributes: string;
```

- *Type:* string

[Write] mobiletargeting:RemoveAttributes.

---

##### `SendMessages`<sup>Required</sup> <a name="SendMessages" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.SendMessages"></a>

```typescript
public readonly SendMessages: string;
```

- *Type:* string

[Write] mobiletargeting:SendMessages.

---

##### `SendOTPMessage`<sup>Required</sup> <a name="SendOTPMessage" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.SendOTPMessage"></a>

```typescript
public readonly SendOTPMessage: string;
```

- *Type:* string

[Write] mobiletargeting:SendOTPMessage.

---

##### `SendUsersMessages`<sup>Required</sup> <a name="SendUsersMessages" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.SendUsersMessages"></a>

```typescript
public readonly SendUsersMessages: string;
```

- *Type:* string

[Write] mobiletargeting:SendUsersMessages.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] mobiletargeting:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] mobiletargeting:UntagResource.

---

##### `UpdateAdmChannel`<sup>Required</sup> <a name="UpdateAdmChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateAdmChannel"></a>

```typescript
public readonly UpdateAdmChannel: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateAdmChannel.

---

##### `UpdateApnsChannel`<sup>Required</sup> <a name="UpdateApnsChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateApnsChannel"></a>

```typescript
public readonly UpdateApnsChannel: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateApnsChannel.

---

##### `UpdateApnsSandboxChannel`<sup>Required</sup> <a name="UpdateApnsSandboxChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateApnsSandboxChannel"></a>

```typescript
public readonly UpdateApnsSandboxChannel: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateApnsSandboxChannel.

---

##### `UpdateApnsVoipChannel`<sup>Required</sup> <a name="UpdateApnsVoipChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateApnsVoipChannel"></a>

```typescript
public readonly UpdateApnsVoipChannel: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateApnsVoipChannel.

---

##### `UpdateApnsVoipSandboxChannel`<sup>Required</sup> <a name="UpdateApnsVoipSandboxChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateApnsVoipSandboxChannel"></a>

```typescript
public readonly UpdateApnsVoipSandboxChannel: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateApnsVoipSandboxChannel.

---

##### `UpdateApplicationSettings`<sup>Required</sup> <a name="UpdateApplicationSettings" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateApplicationSettings"></a>

```typescript
public readonly UpdateApplicationSettings: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateApplicationSettings.

---

##### `UpdateBaiduChannel`<sup>Required</sup> <a name="UpdateBaiduChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateBaiduChannel"></a>

```typescript
public readonly UpdateBaiduChannel: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateBaiduChannel.

---

##### `UpdateCampaign`<sup>Required</sup> <a name="UpdateCampaign" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateCampaign"></a>

```typescript
public readonly UpdateCampaign: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateCampaign.

---

##### `UpdateEmailChannel`<sup>Required</sup> <a name="UpdateEmailChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateEmailChannel"></a>

```typescript
public readonly UpdateEmailChannel: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateEmailChannel.

---

##### `UpdateEmailTemplate`<sup>Required</sup> <a name="UpdateEmailTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateEmailTemplate"></a>

```typescript
public readonly UpdateEmailTemplate: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateEmailTemplate.

---

##### `UpdateEndpoint`<sup>Required</sup> <a name="UpdateEndpoint" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateEndpoint"></a>

```typescript
public readonly UpdateEndpoint: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateEndpoint.

---

##### `UpdateEndpointsBatch`<sup>Required</sup> <a name="UpdateEndpointsBatch" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateEndpointsBatch"></a>

```typescript
public readonly UpdateEndpointsBatch: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateEndpointsBatch.

---

##### `UpdateGcmChannel`<sup>Required</sup> <a name="UpdateGcmChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateGcmChannel"></a>

```typescript
public readonly UpdateGcmChannel: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateGcmChannel.

---

##### `UpdateInAppTemplate`<sup>Required</sup> <a name="UpdateInAppTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateInAppTemplate"></a>

```typescript
public readonly UpdateInAppTemplate: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateInAppTemplate.

---

##### `UpdateJourney`<sup>Required</sup> <a name="UpdateJourney" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateJourney"></a>

```typescript
public readonly UpdateJourney: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateJourney.

---

##### `UpdateJourneyState`<sup>Required</sup> <a name="UpdateJourneyState" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateJourneyState"></a>

```typescript
public readonly UpdateJourneyState: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateJourneyState.

---

##### `UpdatePushTemplate`<sup>Required</sup> <a name="UpdatePushTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdatePushTemplate"></a>

```typescript
public readonly UpdatePushTemplate: string;
```

- *Type:* string

[Write] mobiletargeting:UpdatePushTemplate.

---

##### `UpdateRecommenderConfiguration`<sup>Required</sup> <a name="UpdateRecommenderConfiguration" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateRecommenderConfiguration"></a>

```typescript
public readonly UpdateRecommenderConfiguration: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateRecommenderConfiguration.

---

##### `UpdateSegment`<sup>Required</sup> <a name="UpdateSegment" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateSegment"></a>

```typescript
public readonly UpdateSegment: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateSegment.

---

##### `UpdateSmsChannel`<sup>Required</sup> <a name="UpdateSmsChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateSmsChannel"></a>

```typescript
public readonly UpdateSmsChannel: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateSmsChannel.

---

##### `UpdateSmsTemplate`<sup>Required</sup> <a name="UpdateSmsTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateSmsTemplate"></a>

```typescript
public readonly UpdateSmsTemplate: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateSmsTemplate.

---

##### `UpdateTemplateActiveVersion`<sup>Required</sup> <a name="UpdateTemplateActiveVersion" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateTemplateActiveVersion"></a>

```typescript
public readonly UpdateTemplateActiveVersion: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateTemplateActiveVersion.

---

##### `UpdateVoiceChannel`<sup>Required</sup> <a name="UpdateVoiceChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateVoiceChannel"></a>

```typescript
public readonly UpdateVoiceChannel: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateVoiceChannel.

---

##### `UpdateVoiceTemplate`<sup>Required</sup> <a name="UpdateVoiceTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.UpdateVoiceTemplate"></a>

```typescript
public readonly UpdateVoiceTemplate: string;
```

- *Type:* string

[Write] mobiletargeting:UpdateVoiceTemplate.

---

##### `VerifyOTPMessage`<sup>Required</sup> <a name="VerifyOTPMessage" id="@cdk_utils/iam.mobiletargeting.MobiletargetingActions.property.VerifyOTPMessage"></a>

```typescript
public readonly VerifyOTPMessage: string;
```

- *Type:* string

[Write] mobiletargeting:VerifyOTPMessage.

---

### MobiletargetingConditions <a name="MobiletargetingConditions" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions"></a>

Condition key constants and builders for mobiletargeting.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

new mobiletargeting.MobiletargetingConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.requestTag"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.resourceTag"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.tagKeys"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.CreateAppConditionKeys">CreateAppConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApp action. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.CreateCampaignConditionKeys">CreateCampaignConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCampaign action. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.CreateEmailTemplateConditionKeys">CreateEmailTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEmailTemplate action. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.CreateInAppTemplateConditionKeys">CreateInAppTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInAppTemplate action. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.CreateJourneyConditionKeys">CreateJourneyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateJourney action. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.CreatePushTemplateConditionKeys">CreatePushTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePushTemplate action. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.CreateSegmentConditionKeys">CreateSegmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSegment action. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.CreateSmsTemplateConditionKeys">CreateSmsTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSmsTemplate action. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.CreateVoiceTemplateConditionKeys">CreateVoiceTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVoiceTemplate action. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UpdateCampaignConditionKeys">UpdateCampaignConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCampaign action. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UpdateEmailTemplateConditionKeys">UpdateEmailTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateEmailTemplate action. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UpdateInAppTemplateConditionKeys">UpdateInAppTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateInAppTemplate action. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UpdateJourneyConditionKeys">UpdateJourneyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateJourney action. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UpdateJourneyStateConditionKeys">UpdateJourneyStateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateJourneyState action. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UpdatePushTemplateConditionKeys">UpdatePushTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePushTemplate action. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UpdateSegmentConditionKeys">UpdateSegmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSegment action. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UpdateSmsTemplateConditionKeys">UpdateSmsTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSmsTemplate action. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UpdateVoiceTemplateConditionKeys">UpdateVoiceTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateVoiceTemplate action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAppConditionKeys`<sup>Required</sup> <a name="CreateAppConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.CreateAppConditionKeys"></a>

```typescript
public readonly CreateAppConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApp action.

---

##### `CreateCampaignConditionKeys`<sup>Required</sup> <a name="CreateCampaignConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.CreateCampaignConditionKeys"></a>

```typescript
public readonly CreateCampaignConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCampaign action.

---

##### `CreateEmailTemplateConditionKeys`<sup>Required</sup> <a name="CreateEmailTemplateConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.CreateEmailTemplateConditionKeys"></a>

```typescript
public readonly CreateEmailTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEmailTemplate action.

---

##### `CreateInAppTemplateConditionKeys`<sup>Required</sup> <a name="CreateInAppTemplateConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.CreateInAppTemplateConditionKeys"></a>

```typescript
public readonly CreateInAppTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInAppTemplate action.

---

##### `CreateJourneyConditionKeys`<sup>Required</sup> <a name="CreateJourneyConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.CreateJourneyConditionKeys"></a>

```typescript
public readonly CreateJourneyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateJourney action.

---

##### `CreatePushTemplateConditionKeys`<sup>Required</sup> <a name="CreatePushTemplateConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.CreatePushTemplateConditionKeys"></a>

```typescript
public readonly CreatePushTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePushTemplate action.

---

##### `CreateSegmentConditionKeys`<sup>Required</sup> <a name="CreateSegmentConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.CreateSegmentConditionKeys"></a>

```typescript
public readonly CreateSegmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSegment action.

---

##### `CreateSmsTemplateConditionKeys`<sup>Required</sup> <a name="CreateSmsTemplateConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.CreateSmsTemplateConditionKeys"></a>

```typescript
public readonly CreateSmsTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSmsTemplate action.

---

##### `CreateVoiceTemplateConditionKeys`<sup>Required</sup> <a name="CreateVoiceTemplateConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.CreateVoiceTemplateConditionKeys"></a>

```typescript
public readonly CreateVoiceTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVoiceTemplate action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateCampaignConditionKeys`<sup>Required</sup> <a name="UpdateCampaignConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UpdateCampaignConditionKeys"></a>

```typescript
public readonly UpdateCampaignConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCampaign action.

---

##### `UpdateEmailTemplateConditionKeys`<sup>Required</sup> <a name="UpdateEmailTemplateConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UpdateEmailTemplateConditionKeys"></a>

```typescript
public readonly UpdateEmailTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateEmailTemplate action.

---

##### `UpdateInAppTemplateConditionKeys`<sup>Required</sup> <a name="UpdateInAppTemplateConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UpdateInAppTemplateConditionKeys"></a>

```typescript
public readonly UpdateInAppTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateInAppTemplate action.

---

##### `UpdateJourneyConditionKeys`<sup>Required</sup> <a name="UpdateJourneyConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UpdateJourneyConditionKeys"></a>

```typescript
public readonly UpdateJourneyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateJourney action.

---

##### `UpdateJourneyStateConditionKeys`<sup>Required</sup> <a name="UpdateJourneyStateConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UpdateJourneyStateConditionKeys"></a>

```typescript
public readonly UpdateJourneyStateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateJourneyState action.

---

##### `UpdatePushTemplateConditionKeys`<sup>Required</sup> <a name="UpdatePushTemplateConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UpdatePushTemplateConditionKeys"></a>

```typescript
public readonly UpdatePushTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePushTemplate action.

---

##### `UpdateSegmentConditionKeys`<sup>Required</sup> <a name="UpdateSegmentConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UpdateSegmentConditionKeys"></a>

```typescript
public readonly UpdateSegmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSegment action.

---

##### `UpdateSmsTemplateConditionKeys`<sup>Required</sup> <a name="UpdateSmsTemplateConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UpdateSmsTemplateConditionKeys"></a>

```typescript
public readonly UpdateSmsTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSmsTemplate action.

---

##### `UpdateVoiceTemplateConditionKeys`<sup>Required</sup> <a name="UpdateVoiceTemplateConditionKeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingConditions.property.UpdateVoiceTemplateConditionKeys"></a>

```typescript
public readonly UpdateVoiceTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateVoiceTemplate action.

---

### MobiletargetingOperations <a name="MobiletargetingOperations" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations"></a>

API operation to required IAM actions mapping for mobiletargeting.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

new mobiletargeting.MobiletargetingOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateApp">CreateApp</a></code> | <code>string[]</code> | IAM actions required for the CreateApp API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateCampaign">CreateCampaign</a></code> | <code>string[]</code> | IAM actions required for the CreateCampaign API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateEmailTemplate">CreateEmailTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateEmailTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateExportJob">CreateExportJob</a></code> | <code>string[]</code> | IAM actions required for the CreateExportJob API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateImportJob">CreateImportJob</a></code> | <code>string[]</code> | IAM actions required for the CreateImportJob API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateInAppTemplate">CreateInAppTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateInAppTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateJourney">CreateJourney</a></code> | <code>string[]</code> | IAM actions required for the CreateJourney API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreatePushTemplate">CreatePushTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreatePushTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateRecommenderConfiguration">CreateRecommenderConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateRecommenderConfiguration API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateSegment">CreateSegment</a></code> | <code>string[]</code> | IAM actions required for the CreateSegment API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateSmsTemplate">CreateSmsTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateSmsTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateVoiceTemplate">CreateVoiceTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateVoiceTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteAdmChannel">DeleteAdmChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteAdmChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteApnsChannel">DeleteApnsChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteApnsChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteApnsSandboxChannel">DeleteApnsSandboxChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteApnsSandboxChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteApnsVoipChannel">DeleteApnsVoipChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteApnsVoipChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteApnsVoipSandboxChannel">DeleteApnsVoipSandboxChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteApnsVoipSandboxChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteApp">DeleteApp</a></code> | <code>string[]</code> | IAM actions required for the DeleteApp API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteBaiduChannel">DeleteBaiduChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteBaiduChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteCampaign">DeleteCampaign</a></code> | <code>string[]</code> | IAM actions required for the DeleteCampaign API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteEmailChannel">DeleteEmailChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteEmailChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteEmailTemplate">DeleteEmailTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteEmailTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteEndpoint">DeleteEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteEndpoint API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteEventStream">DeleteEventStream</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventStream API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteGcmChannel">DeleteGcmChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteGcmChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteInAppTemplate">DeleteInAppTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteInAppTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteJourney">DeleteJourney</a></code> | <code>string[]</code> | IAM actions required for the DeleteJourney API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeletePushTemplate">DeletePushTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeletePushTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteRecommenderConfiguration">DeleteRecommenderConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteRecommenderConfiguration API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteSegment">DeleteSegment</a></code> | <code>string[]</code> | IAM actions required for the DeleteSegment API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteSmsChannel">DeleteSmsChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteSmsChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteSmsTemplate">DeleteSmsTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteSmsTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteUserEndpoints">DeleteUserEndpoints</a></code> | <code>string[]</code> | IAM actions required for the DeleteUserEndpoints API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteVoiceChannel">DeleteVoiceChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteVoiceChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteVoiceTemplate">DeleteVoiceTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteVoiceTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.ListJourneys">ListJourneys</a></code> | <code>string[]</code> | IAM actions required for the ListJourneys API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.ListTemplates">ListTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListTemplates API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.ListTemplateVersions">ListTemplateVersions</a></code> | <code>string[]</code> | IAM actions required for the ListTemplateVersions API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetAdmChannel">opGetAdmChannel</a></code> | <code>string[]</code> | IAM actions required for the GetAdmChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetApnsChannel">opGetApnsChannel</a></code> | <code>string[]</code> | IAM actions required for the GetApnsChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetApnsSandboxChannel">opGetApnsSandboxChannel</a></code> | <code>string[]</code> | IAM actions required for the GetApnsSandboxChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetApnsVoipChannel">opGetApnsVoipChannel</a></code> | <code>string[]</code> | IAM actions required for the GetApnsVoipChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetApnsVoipSandboxChannel">opGetApnsVoipSandboxChannel</a></code> | <code>string[]</code> | IAM actions required for the GetApnsVoipSandboxChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetApp">opGetApp</a></code> | <code>string[]</code> | IAM actions required for the GetApp API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetApplicationDateRangeKpi">opGetApplicationDateRangeKpi</a></code> | <code>string[]</code> | IAM actions required for the GetApplicationDateRangeKpi API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetApplicationSettings">opGetApplicationSettings</a></code> | <code>string[]</code> | IAM actions required for the GetApplicationSettings API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetApps">opGetApps</a></code> | <code>string[]</code> | IAM actions required for the GetApps API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetBaiduChannel">opGetBaiduChannel</a></code> | <code>string[]</code> | IAM actions required for the GetBaiduChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetCampaign">opGetCampaign</a></code> | <code>string[]</code> | IAM actions required for the GetCampaign API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetCampaignActivities">opGetCampaignActivities</a></code> | <code>string[]</code> | IAM actions required for the GetCampaignActivities API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetCampaignDateRangeKpi">opGetCampaignDateRangeKpi</a></code> | <code>string[]</code> | IAM actions required for the GetCampaignDateRangeKpi API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetCampaigns">opGetCampaigns</a></code> | <code>string[]</code> | IAM actions required for the GetCampaigns API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetCampaignVersion">opGetCampaignVersion</a></code> | <code>string[]</code> | IAM actions required for the GetCampaignVersion API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetCampaignVersions">opGetCampaignVersions</a></code> | <code>string[]</code> | IAM actions required for the GetCampaignVersions API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetChannels">opGetChannels</a></code> | <code>string[]</code> | IAM actions required for the GetChannels API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetEmailChannel">opGetEmailChannel</a></code> | <code>string[]</code> | IAM actions required for the GetEmailChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetEmailTemplate">opGetEmailTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetEmailTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetEndpoint">opGetEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetEndpoint API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetEventStream">opGetEventStream</a></code> | <code>string[]</code> | IAM actions required for the GetEventStream API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetExportJob">opGetExportJob</a></code> | <code>string[]</code> | IAM actions required for the GetExportJob API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetExportJobs">opGetExportJobs</a></code> | <code>string[]</code> | IAM actions required for the GetExportJobs API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetGcmChannel">opGetGcmChannel</a></code> | <code>string[]</code> | IAM actions required for the GetGcmChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetImportJob">opGetImportJob</a></code> | <code>string[]</code> | IAM actions required for the GetImportJob API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetImportJobs">opGetImportJobs</a></code> | <code>string[]</code> | IAM actions required for the GetImportJobs API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetInAppMessages">opGetInAppMessages</a></code> | <code>string[]</code> | IAM actions required for the GetInAppMessages API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetInAppTemplate">opGetInAppTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetInAppTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetJourney">opGetJourney</a></code> | <code>string[]</code> | IAM actions required for the GetJourney API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetJourneyDateRangeKpi">opGetJourneyDateRangeKpi</a></code> | <code>string[]</code> | IAM actions required for the GetJourneyDateRangeKpi API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetJourneyExecutionActivityMetrics">opGetJourneyExecutionActivityMetrics</a></code> | <code>string[]</code> | IAM actions required for the GetJourneyExecutionActivityMetrics API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetJourneyExecutionMetrics">opGetJourneyExecutionMetrics</a></code> | <code>string[]</code> | IAM actions required for the GetJourneyExecutionMetrics API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetJourneyRunExecutionActivityMetrics">opGetJourneyRunExecutionActivityMetrics</a></code> | <code>string[]</code> | IAM actions required for the GetJourneyRunExecutionActivityMetrics API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetJourneyRunExecutionMetrics">opGetJourneyRunExecutionMetrics</a></code> | <code>string[]</code> | IAM actions required for the GetJourneyRunExecutionMetrics API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetJourneyRuns">opGetJourneyRuns</a></code> | <code>string[]</code> | IAM actions required for the GetJourneyRuns API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetPushTemplate">opGetPushTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetPushTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetRecommenderConfiguration">opGetRecommenderConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetRecommenderConfiguration API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetRecommenderConfigurations">opGetRecommenderConfigurations</a></code> | <code>string[]</code> | IAM actions required for the GetRecommenderConfigurations API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetSegment">opGetSegment</a></code> | <code>string[]</code> | IAM actions required for the GetSegment API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetSegmentExportJobs">opGetSegmentExportJobs</a></code> | <code>string[]</code> | IAM actions required for the GetSegmentExportJobs API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetSegmentImportJobs">opGetSegmentImportJobs</a></code> | <code>string[]</code> | IAM actions required for the GetSegmentImportJobs API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetSegments">opGetSegments</a></code> | <code>string[]</code> | IAM actions required for the GetSegments API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetSegmentVersion">opGetSegmentVersion</a></code> | <code>string[]</code> | IAM actions required for the GetSegmentVersion API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetSegmentVersions">opGetSegmentVersions</a></code> | <code>string[]</code> | IAM actions required for the GetSegmentVersions API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetSmsChannel">opGetSmsChannel</a></code> | <code>string[]</code> | IAM actions required for the GetSmsChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetSmsTemplate">opGetSmsTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetSmsTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetUserEndpoints">opGetUserEndpoints</a></code> | <code>string[]</code> | IAM actions required for the GetUserEndpoints API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetVoiceChannel">opGetVoiceChannel</a></code> | <code>string[]</code> | IAM actions required for the GetVoiceChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetVoiceTemplate">opGetVoiceTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetVoiceTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.PhoneNumberValidate">PhoneNumberValidate</a></code> | <code>string[]</code> | IAM actions required for the PhoneNumberValidate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.PutEvents">PutEvents</a></code> | <code>string[]</code> | IAM actions required for the PutEvents API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.PutEventStream">PutEventStream</a></code> | <code>string[]</code> | IAM actions required for the PutEventStream API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.RemoveAttributes">RemoveAttributes</a></code> | <code>string[]</code> | IAM actions required for the RemoveAttributes API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.SendMessages">SendMessages</a></code> | <code>string[]</code> | IAM actions required for the SendMessages API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.SendOTPMessage">SendOTPMessage</a></code> | <code>string[]</code> | IAM actions required for the SendOTPMessage API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.SendUsersMessages">SendUsersMessages</a></code> | <code>string[]</code> | IAM actions required for the SendUsersMessages API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateAdmChannel">UpdateAdmChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateAdmChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateApnsChannel">UpdateApnsChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateApnsChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateApnsSandboxChannel">UpdateApnsSandboxChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateApnsSandboxChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateApnsVoipChannel">UpdateApnsVoipChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateApnsVoipChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateApnsVoipSandboxChannel">UpdateApnsVoipSandboxChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateApnsVoipSandboxChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateApplicationSettings">UpdateApplicationSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplicationSettings API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateBaiduChannel">UpdateBaiduChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateBaiduChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateCampaign">UpdateCampaign</a></code> | <code>string[]</code> | IAM actions required for the UpdateCampaign API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateEmailChannel">UpdateEmailChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateEmailChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateEmailTemplate">UpdateEmailTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateEmailTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateEndpoint">UpdateEndpoint</a></code> | <code>string[]</code> | IAM actions required for the UpdateEndpoint API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateEndpointsBatch">UpdateEndpointsBatch</a></code> | <code>string[]</code> | IAM actions required for the UpdateEndpointsBatch API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateGcmChannel">UpdateGcmChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateGcmChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateInAppTemplate">UpdateInAppTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateInAppTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateJourney">UpdateJourney</a></code> | <code>string[]</code> | IAM actions required for the UpdateJourney API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateJourneyState">UpdateJourneyState</a></code> | <code>string[]</code> | IAM actions required for the UpdateJourneyState API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdatePushTemplate">UpdatePushTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdatePushTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateRecommenderConfiguration">UpdateRecommenderConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateRecommenderConfiguration API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateSegment">UpdateSegment</a></code> | <code>string[]</code> | IAM actions required for the UpdateSegment API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateSmsChannel">UpdateSmsChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateSmsChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateSmsTemplate">UpdateSmsTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateSmsTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateTemplateActiveVersion">UpdateTemplateActiveVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateTemplateActiveVersion API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateVoiceChannel">UpdateVoiceChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateVoiceChannel API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateVoiceTemplate">UpdateVoiceTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateVoiceTemplate API call. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.VerifyOTPMessage">VerifyOTPMessage</a></code> | <code>string[]</code> | IAM actions required for the VerifyOTPMessage API call. |

---

##### `CreateApp`<sup>Required</sup> <a name="CreateApp" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateApp"></a>

```typescript
public readonly CreateApp: string[];
```

- *Type:* string[]

IAM actions required for the CreateApp API call.

---

##### `CreateCampaign`<sup>Required</sup> <a name="CreateCampaign" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateCampaign"></a>

```typescript
public readonly CreateCampaign: string[];
```

- *Type:* string[]

IAM actions required for the CreateCampaign API call.

---

##### `CreateEmailTemplate`<sup>Required</sup> <a name="CreateEmailTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateEmailTemplate"></a>

```typescript
public readonly CreateEmailTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateEmailTemplate API call.

---

##### `CreateExportJob`<sup>Required</sup> <a name="CreateExportJob" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateExportJob"></a>

```typescript
public readonly CreateExportJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateExportJob API call.

---

##### `CreateImportJob`<sup>Required</sup> <a name="CreateImportJob" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateImportJob"></a>

```typescript
public readonly CreateImportJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateImportJob API call.

---

##### `CreateInAppTemplate`<sup>Required</sup> <a name="CreateInAppTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateInAppTemplate"></a>

```typescript
public readonly CreateInAppTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateInAppTemplate API call.

---

##### `CreateJourney`<sup>Required</sup> <a name="CreateJourney" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateJourney"></a>

```typescript
public readonly CreateJourney: string[];
```

- *Type:* string[]

IAM actions required for the CreateJourney API call.

---

##### `CreatePushTemplate`<sup>Required</sup> <a name="CreatePushTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreatePushTemplate"></a>

```typescript
public readonly CreatePushTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreatePushTemplate API call.

---

##### `CreateRecommenderConfiguration`<sup>Required</sup> <a name="CreateRecommenderConfiguration" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateRecommenderConfiguration"></a>

```typescript
public readonly CreateRecommenderConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateRecommenderConfiguration API call.

---

##### `CreateSegment`<sup>Required</sup> <a name="CreateSegment" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateSegment"></a>

```typescript
public readonly CreateSegment: string[];
```

- *Type:* string[]

IAM actions required for the CreateSegment API call.

---

##### `CreateSmsTemplate`<sup>Required</sup> <a name="CreateSmsTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateSmsTemplate"></a>

```typescript
public readonly CreateSmsTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateSmsTemplate API call.

---

##### `CreateVoiceTemplate`<sup>Required</sup> <a name="CreateVoiceTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.CreateVoiceTemplate"></a>

```typescript
public readonly CreateVoiceTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateVoiceTemplate API call.

---

##### `DeleteAdmChannel`<sup>Required</sup> <a name="DeleteAdmChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteAdmChannel"></a>

```typescript
public readonly DeleteAdmChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAdmChannel API call.

---

##### `DeleteApnsChannel`<sup>Required</sup> <a name="DeleteApnsChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteApnsChannel"></a>

```typescript
public readonly DeleteApnsChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApnsChannel API call.

---

##### `DeleteApnsSandboxChannel`<sup>Required</sup> <a name="DeleteApnsSandboxChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteApnsSandboxChannel"></a>

```typescript
public readonly DeleteApnsSandboxChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApnsSandboxChannel API call.

---

##### `DeleteApnsVoipChannel`<sup>Required</sup> <a name="DeleteApnsVoipChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteApnsVoipChannel"></a>

```typescript
public readonly DeleteApnsVoipChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApnsVoipChannel API call.

---

##### `DeleteApnsVoipSandboxChannel`<sup>Required</sup> <a name="DeleteApnsVoipSandboxChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteApnsVoipSandboxChannel"></a>

```typescript
public readonly DeleteApnsVoipSandboxChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApnsVoipSandboxChannel API call.

---

##### `DeleteApp`<sup>Required</sup> <a name="DeleteApp" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteApp"></a>

```typescript
public readonly DeleteApp: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApp API call.

---

##### `DeleteBaiduChannel`<sup>Required</sup> <a name="DeleteBaiduChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteBaiduChannel"></a>

```typescript
public readonly DeleteBaiduChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBaiduChannel API call.

---

##### `DeleteCampaign`<sup>Required</sup> <a name="DeleteCampaign" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteCampaign"></a>

```typescript
public readonly DeleteCampaign: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCampaign API call.

---

##### `DeleteEmailChannel`<sup>Required</sup> <a name="DeleteEmailChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteEmailChannel"></a>

```typescript
public readonly DeleteEmailChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEmailChannel API call.

---

##### `DeleteEmailTemplate`<sup>Required</sup> <a name="DeleteEmailTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteEmailTemplate"></a>

```typescript
public readonly DeleteEmailTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEmailTemplate API call.

---

##### `DeleteEndpoint`<sup>Required</sup> <a name="DeleteEndpoint" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteEndpoint"></a>

```typescript
public readonly DeleteEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEndpoint API call.

---

##### `DeleteEventStream`<sup>Required</sup> <a name="DeleteEventStream" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteEventStream"></a>

```typescript
public readonly DeleteEventStream: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventStream API call.

---

##### `DeleteGcmChannel`<sup>Required</sup> <a name="DeleteGcmChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteGcmChannel"></a>

```typescript
public readonly DeleteGcmChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGcmChannel API call.

---

##### `DeleteInAppTemplate`<sup>Required</sup> <a name="DeleteInAppTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteInAppTemplate"></a>

```typescript
public readonly DeleteInAppTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInAppTemplate API call.

---

##### `DeleteJourney`<sup>Required</sup> <a name="DeleteJourney" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteJourney"></a>

```typescript
public readonly DeleteJourney: string[];
```

- *Type:* string[]

IAM actions required for the DeleteJourney API call.

---

##### `DeletePushTemplate`<sup>Required</sup> <a name="DeletePushTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeletePushTemplate"></a>

```typescript
public readonly DeletePushTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeletePushTemplate API call.

---

##### `DeleteRecommenderConfiguration`<sup>Required</sup> <a name="DeleteRecommenderConfiguration" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteRecommenderConfiguration"></a>

```typescript
public readonly DeleteRecommenderConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRecommenderConfiguration API call.

---

##### `DeleteSegment`<sup>Required</sup> <a name="DeleteSegment" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteSegment"></a>

```typescript
public readonly DeleteSegment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSegment API call.

---

##### `DeleteSmsChannel`<sup>Required</sup> <a name="DeleteSmsChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteSmsChannel"></a>

```typescript
public readonly DeleteSmsChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSmsChannel API call.

---

##### `DeleteSmsTemplate`<sup>Required</sup> <a name="DeleteSmsTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteSmsTemplate"></a>

```typescript
public readonly DeleteSmsTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSmsTemplate API call.

---

##### `DeleteUserEndpoints`<sup>Required</sup> <a name="DeleteUserEndpoints" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteUserEndpoints"></a>

```typescript
public readonly DeleteUserEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUserEndpoints API call.

---

##### `DeleteVoiceChannel`<sup>Required</sup> <a name="DeleteVoiceChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteVoiceChannel"></a>

```typescript
public readonly DeleteVoiceChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVoiceChannel API call.

---

##### `DeleteVoiceTemplate`<sup>Required</sup> <a name="DeleteVoiceTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.DeleteVoiceTemplate"></a>

```typescript
public readonly DeleteVoiceTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVoiceTemplate API call.

---

##### `ListJourneys`<sup>Required</sup> <a name="ListJourneys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.ListJourneys"></a>

```typescript
public readonly ListJourneys: string[];
```

- *Type:* string[]

IAM actions required for the ListJourneys API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTemplates`<sup>Required</sup> <a name="ListTemplates" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.ListTemplates"></a>

```typescript
public readonly ListTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListTemplates API call.

---

##### `ListTemplateVersions`<sup>Required</sup> <a name="ListTemplateVersions" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.ListTemplateVersions"></a>

```typescript
public readonly ListTemplateVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListTemplateVersions API call.

---

##### `opGetAdmChannel`<sup>Required</sup> <a name="opGetAdmChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetAdmChannel"></a>

```typescript
public readonly opGetAdmChannel: string[];
```

- *Type:* string[]

IAM actions required for the GetAdmChannel API call.

---

##### `opGetApnsChannel`<sup>Required</sup> <a name="opGetApnsChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetApnsChannel"></a>

```typescript
public readonly opGetApnsChannel: string[];
```

- *Type:* string[]

IAM actions required for the GetApnsChannel API call.

---

##### `opGetApnsSandboxChannel`<sup>Required</sup> <a name="opGetApnsSandboxChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetApnsSandboxChannel"></a>

```typescript
public readonly opGetApnsSandboxChannel: string[];
```

- *Type:* string[]

IAM actions required for the GetApnsSandboxChannel API call.

---

##### `opGetApnsVoipChannel`<sup>Required</sup> <a name="opGetApnsVoipChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetApnsVoipChannel"></a>

```typescript
public readonly opGetApnsVoipChannel: string[];
```

- *Type:* string[]

IAM actions required for the GetApnsVoipChannel API call.

---

##### `opGetApnsVoipSandboxChannel`<sup>Required</sup> <a name="opGetApnsVoipSandboxChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetApnsVoipSandboxChannel"></a>

```typescript
public readonly opGetApnsVoipSandboxChannel: string[];
```

- *Type:* string[]

IAM actions required for the GetApnsVoipSandboxChannel API call.

---

##### `opGetApp`<sup>Required</sup> <a name="opGetApp" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetApp"></a>

```typescript
public readonly opGetApp: string[];
```

- *Type:* string[]

IAM actions required for the GetApp API call.

---

##### `opGetApplicationDateRangeKpi`<sup>Required</sup> <a name="opGetApplicationDateRangeKpi" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetApplicationDateRangeKpi"></a>

```typescript
public readonly opGetApplicationDateRangeKpi: string[];
```

- *Type:* string[]

IAM actions required for the GetApplicationDateRangeKpi API call.

---

##### `opGetApplicationSettings`<sup>Required</sup> <a name="opGetApplicationSettings" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetApplicationSettings"></a>

```typescript
public readonly opGetApplicationSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetApplicationSettings API call.

---

##### `opGetApps`<sup>Required</sup> <a name="opGetApps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetApps"></a>

```typescript
public readonly opGetApps: string[];
```

- *Type:* string[]

IAM actions required for the GetApps API call.

---

##### `opGetBaiduChannel`<sup>Required</sup> <a name="opGetBaiduChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetBaiduChannel"></a>

```typescript
public readonly opGetBaiduChannel: string[];
```

- *Type:* string[]

IAM actions required for the GetBaiduChannel API call.

---

##### `opGetCampaign`<sup>Required</sup> <a name="opGetCampaign" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetCampaign"></a>

```typescript
public readonly opGetCampaign: string[];
```

- *Type:* string[]

IAM actions required for the GetCampaign API call.

---

##### `opGetCampaignActivities`<sup>Required</sup> <a name="opGetCampaignActivities" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetCampaignActivities"></a>

```typescript
public readonly opGetCampaignActivities: string[];
```

- *Type:* string[]

IAM actions required for the GetCampaignActivities API call.

---

##### `opGetCampaignDateRangeKpi`<sup>Required</sup> <a name="opGetCampaignDateRangeKpi" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetCampaignDateRangeKpi"></a>

```typescript
public readonly opGetCampaignDateRangeKpi: string[];
```

- *Type:* string[]

IAM actions required for the GetCampaignDateRangeKpi API call.

---

##### `opGetCampaigns`<sup>Required</sup> <a name="opGetCampaigns" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetCampaigns"></a>

```typescript
public readonly opGetCampaigns: string[];
```

- *Type:* string[]

IAM actions required for the GetCampaigns API call.

---

##### `opGetCampaignVersion`<sup>Required</sup> <a name="opGetCampaignVersion" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetCampaignVersion"></a>

```typescript
public readonly opGetCampaignVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetCampaignVersion API call.

---

##### `opGetCampaignVersions`<sup>Required</sup> <a name="opGetCampaignVersions" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetCampaignVersions"></a>

```typescript
public readonly opGetCampaignVersions: string[];
```

- *Type:* string[]

IAM actions required for the GetCampaignVersions API call.

---

##### `opGetChannels`<sup>Required</sup> <a name="opGetChannels" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetChannels"></a>

```typescript
public readonly opGetChannels: string[];
```

- *Type:* string[]

IAM actions required for the GetChannels API call.

---

##### `opGetEmailChannel`<sup>Required</sup> <a name="opGetEmailChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetEmailChannel"></a>

```typescript
public readonly opGetEmailChannel: string[];
```

- *Type:* string[]

IAM actions required for the GetEmailChannel API call.

---

##### `opGetEmailTemplate`<sup>Required</sup> <a name="opGetEmailTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetEmailTemplate"></a>

```typescript
public readonly opGetEmailTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetEmailTemplate API call.

---

##### `opGetEndpoint`<sup>Required</sup> <a name="opGetEndpoint" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetEndpoint"></a>

```typescript
public readonly opGetEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetEndpoint API call.

---

##### `opGetEventStream`<sup>Required</sup> <a name="opGetEventStream" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetEventStream"></a>

```typescript
public readonly opGetEventStream: string[];
```

- *Type:* string[]

IAM actions required for the GetEventStream API call.

---

##### `opGetExportJob`<sup>Required</sup> <a name="opGetExportJob" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetExportJob"></a>

```typescript
public readonly opGetExportJob: string[];
```

- *Type:* string[]

IAM actions required for the GetExportJob API call.

---

##### `opGetExportJobs`<sup>Required</sup> <a name="opGetExportJobs" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetExportJobs"></a>

```typescript
public readonly opGetExportJobs: string[];
```

- *Type:* string[]

IAM actions required for the GetExportJobs API call.

---

##### `opGetGcmChannel`<sup>Required</sup> <a name="opGetGcmChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetGcmChannel"></a>

```typescript
public readonly opGetGcmChannel: string[];
```

- *Type:* string[]

IAM actions required for the GetGcmChannel API call.

---

##### `opGetImportJob`<sup>Required</sup> <a name="opGetImportJob" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetImportJob"></a>

```typescript
public readonly opGetImportJob: string[];
```

- *Type:* string[]

IAM actions required for the GetImportJob API call.

---

##### `opGetImportJobs`<sup>Required</sup> <a name="opGetImportJobs" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetImportJobs"></a>

```typescript
public readonly opGetImportJobs: string[];
```

- *Type:* string[]

IAM actions required for the GetImportJobs API call.

---

##### `opGetInAppMessages`<sup>Required</sup> <a name="opGetInAppMessages" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetInAppMessages"></a>

```typescript
public readonly opGetInAppMessages: string[];
```

- *Type:* string[]

IAM actions required for the GetInAppMessages API call.

---

##### `opGetInAppTemplate`<sup>Required</sup> <a name="opGetInAppTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetInAppTemplate"></a>

```typescript
public readonly opGetInAppTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetInAppTemplate API call.

---

##### `opGetJourney`<sup>Required</sup> <a name="opGetJourney" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetJourney"></a>

```typescript
public readonly opGetJourney: string[];
```

- *Type:* string[]

IAM actions required for the GetJourney API call.

---

##### `opGetJourneyDateRangeKpi`<sup>Required</sup> <a name="opGetJourneyDateRangeKpi" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetJourneyDateRangeKpi"></a>

```typescript
public readonly opGetJourneyDateRangeKpi: string[];
```

- *Type:* string[]

IAM actions required for the GetJourneyDateRangeKpi API call.

---

##### `opGetJourneyExecutionActivityMetrics`<sup>Required</sup> <a name="opGetJourneyExecutionActivityMetrics" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetJourneyExecutionActivityMetrics"></a>

```typescript
public readonly opGetJourneyExecutionActivityMetrics: string[];
```

- *Type:* string[]

IAM actions required for the GetJourneyExecutionActivityMetrics API call.

---

##### `opGetJourneyExecutionMetrics`<sup>Required</sup> <a name="opGetJourneyExecutionMetrics" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetJourneyExecutionMetrics"></a>

```typescript
public readonly opGetJourneyExecutionMetrics: string[];
```

- *Type:* string[]

IAM actions required for the GetJourneyExecutionMetrics API call.

---

##### `opGetJourneyRunExecutionActivityMetrics`<sup>Required</sup> <a name="opGetJourneyRunExecutionActivityMetrics" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetJourneyRunExecutionActivityMetrics"></a>

```typescript
public readonly opGetJourneyRunExecutionActivityMetrics: string[];
```

- *Type:* string[]

IAM actions required for the GetJourneyRunExecutionActivityMetrics API call.

---

##### `opGetJourneyRunExecutionMetrics`<sup>Required</sup> <a name="opGetJourneyRunExecutionMetrics" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetJourneyRunExecutionMetrics"></a>

```typescript
public readonly opGetJourneyRunExecutionMetrics: string[];
```

- *Type:* string[]

IAM actions required for the GetJourneyRunExecutionMetrics API call.

---

##### `opGetJourneyRuns`<sup>Required</sup> <a name="opGetJourneyRuns" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetJourneyRuns"></a>

```typescript
public readonly opGetJourneyRuns: string[];
```

- *Type:* string[]

IAM actions required for the GetJourneyRuns API call.

---

##### `opGetPushTemplate`<sup>Required</sup> <a name="opGetPushTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetPushTemplate"></a>

```typescript
public readonly opGetPushTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetPushTemplate API call.

---

##### `opGetRecommenderConfiguration`<sup>Required</sup> <a name="opGetRecommenderConfiguration" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetRecommenderConfiguration"></a>

```typescript
public readonly opGetRecommenderConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetRecommenderConfiguration API call.

---

##### `opGetRecommenderConfigurations`<sup>Required</sup> <a name="opGetRecommenderConfigurations" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetRecommenderConfigurations"></a>

```typescript
public readonly opGetRecommenderConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the GetRecommenderConfigurations API call.

---

##### `opGetSegment`<sup>Required</sup> <a name="opGetSegment" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetSegment"></a>

```typescript
public readonly opGetSegment: string[];
```

- *Type:* string[]

IAM actions required for the GetSegment API call.

---

##### `opGetSegmentExportJobs`<sup>Required</sup> <a name="opGetSegmentExportJobs" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetSegmentExportJobs"></a>

```typescript
public readonly opGetSegmentExportJobs: string[];
```

- *Type:* string[]

IAM actions required for the GetSegmentExportJobs API call.

---

##### `opGetSegmentImportJobs`<sup>Required</sup> <a name="opGetSegmentImportJobs" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetSegmentImportJobs"></a>

```typescript
public readonly opGetSegmentImportJobs: string[];
```

- *Type:* string[]

IAM actions required for the GetSegmentImportJobs API call.

---

##### `opGetSegments`<sup>Required</sup> <a name="opGetSegments" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetSegments"></a>

```typescript
public readonly opGetSegments: string[];
```

- *Type:* string[]

IAM actions required for the GetSegments API call.

---

##### `opGetSegmentVersion`<sup>Required</sup> <a name="opGetSegmentVersion" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetSegmentVersion"></a>

```typescript
public readonly opGetSegmentVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetSegmentVersion API call.

---

##### `opGetSegmentVersions`<sup>Required</sup> <a name="opGetSegmentVersions" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetSegmentVersions"></a>

```typescript
public readonly opGetSegmentVersions: string[];
```

- *Type:* string[]

IAM actions required for the GetSegmentVersions API call.

---

##### `opGetSmsChannel`<sup>Required</sup> <a name="opGetSmsChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetSmsChannel"></a>

```typescript
public readonly opGetSmsChannel: string[];
```

- *Type:* string[]

IAM actions required for the GetSmsChannel API call.

---

##### `opGetSmsTemplate`<sup>Required</sup> <a name="opGetSmsTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetSmsTemplate"></a>

```typescript
public readonly opGetSmsTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetSmsTemplate API call.

---

##### `opGetUserEndpoints`<sup>Required</sup> <a name="opGetUserEndpoints" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetUserEndpoints"></a>

```typescript
public readonly opGetUserEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the GetUserEndpoints API call.

---

##### `opGetVoiceChannel`<sup>Required</sup> <a name="opGetVoiceChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetVoiceChannel"></a>

```typescript
public readonly opGetVoiceChannel: string[];
```

- *Type:* string[]

IAM actions required for the GetVoiceChannel API call.

---

##### `opGetVoiceTemplate`<sup>Required</sup> <a name="opGetVoiceTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.opGetVoiceTemplate"></a>

```typescript
public readonly opGetVoiceTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetVoiceTemplate API call.

---

##### `PhoneNumberValidate`<sup>Required</sup> <a name="PhoneNumberValidate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.PhoneNumberValidate"></a>

```typescript
public readonly PhoneNumberValidate: string[];
```

- *Type:* string[]

IAM actions required for the PhoneNumberValidate API call.

---

##### `PutEvents`<sup>Required</sup> <a name="PutEvents" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.PutEvents"></a>

```typescript
public readonly PutEvents: string[];
```

- *Type:* string[]

IAM actions required for the PutEvents API call.

---

##### `PutEventStream`<sup>Required</sup> <a name="PutEventStream" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.PutEventStream"></a>

```typescript
public readonly PutEventStream: string[];
```

- *Type:* string[]

IAM actions required for the PutEventStream API call.

---

##### `RemoveAttributes`<sup>Required</sup> <a name="RemoveAttributes" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.RemoveAttributes"></a>

```typescript
public readonly RemoveAttributes: string[];
```

- *Type:* string[]

IAM actions required for the RemoveAttributes API call.

---

##### `SendMessages`<sup>Required</sup> <a name="SendMessages" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.SendMessages"></a>

```typescript
public readonly SendMessages: string[];
```

- *Type:* string[]

IAM actions required for the SendMessages API call.

---

##### `SendOTPMessage`<sup>Required</sup> <a name="SendOTPMessage" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.SendOTPMessage"></a>

```typescript
public readonly SendOTPMessage: string[];
```

- *Type:* string[]

IAM actions required for the SendOTPMessage API call.

---

##### `SendUsersMessages`<sup>Required</sup> <a name="SendUsersMessages" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.SendUsersMessages"></a>

```typescript
public readonly SendUsersMessages: string[];
```

- *Type:* string[]

IAM actions required for the SendUsersMessages API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAdmChannel`<sup>Required</sup> <a name="UpdateAdmChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateAdmChannel"></a>

```typescript
public readonly UpdateAdmChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAdmChannel API call.

---

##### `UpdateApnsChannel`<sup>Required</sup> <a name="UpdateApnsChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateApnsChannel"></a>

```typescript
public readonly UpdateApnsChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApnsChannel API call.

---

##### `UpdateApnsSandboxChannel`<sup>Required</sup> <a name="UpdateApnsSandboxChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateApnsSandboxChannel"></a>

```typescript
public readonly UpdateApnsSandboxChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApnsSandboxChannel API call.

---

##### `UpdateApnsVoipChannel`<sup>Required</sup> <a name="UpdateApnsVoipChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateApnsVoipChannel"></a>

```typescript
public readonly UpdateApnsVoipChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApnsVoipChannel API call.

---

##### `UpdateApnsVoipSandboxChannel`<sup>Required</sup> <a name="UpdateApnsVoipSandboxChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateApnsVoipSandboxChannel"></a>

```typescript
public readonly UpdateApnsVoipSandboxChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApnsVoipSandboxChannel API call.

---

##### `UpdateApplicationSettings`<sup>Required</sup> <a name="UpdateApplicationSettings" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateApplicationSettings"></a>

```typescript
public readonly UpdateApplicationSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplicationSettings API call.

---

##### `UpdateBaiduChannel`<sup>Required</sup> <a name="UpdateBaiduChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateBaiduChannel"></a>

```typescript
public readonly UpdateBaiduChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBaiduChannel API call.

---

##### `UpdateCampaign`<sup>Required</sup> <a name="UpdateCampaign" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateCampaign"></a>

```typescript
public readonly UpdateCampaign: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCampaign API call.

---

##### `UpdateEmailChannel`<sup>Required</sup> <a name="UpdateEmailChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateEmailChannel"></a>

```typescript
public readonly UpdateEmailChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEmailChannel API call.

---

##### `UpdateEmailTemplate`<sup>Required</sup> <a name="UpdateEmailTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateEmailTemplate"></a>

```typescript
public readonly UpdateEmailTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEmailTemplate API call.

---

##### `UpdateEndpoint`<sup>Required</sup> <a name="UpdateEndpoint" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateEndpoint"></a>

```typescript
public readonly UpdateEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEndpoint API call.

---

##### `UpdateEndpointsBatch`<sup>Required</sup> <a name="UpdateEndpointsBatch" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateEndpointsBatch"></a>

```typescript
public readonly UpdateEndpointsBatch: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEndpointsBatch API call.

---

##### `UpdateGcmChannel`<sup>Required</sup> <a name="UpdateGcmChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateGcmChannel"></a>

```typescript
public readonly UpdateGcmChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGcmChannel API call.

---

##### `UpdateInAppTemplate`<sup>Required</sup> <a name="UpdateInAppTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateInAppTemplate"></a>

```typescript
public readonly UpdateInAppTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateInAppTemplate API call.

---

##### `UpdateJourney`<sup>Required</sup> <a name="UpdateJourney" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateJourney"></a>

```typescript
public readonly UpdateJourney: string[];
```

- *Type:* string[]

IAM actions required for the UpdateJourney API call.

---

##### `UpdateJourneyState`<sup>Required</sup> <a name="UpdateJourneyState" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateJourneyState"></a>

```typescript
public readonly UpdateJourneyState: string[];
```

- *Type:* string[]

IAM actions required for the UpdateJourneyState API call.

---

##### `UpdatePushTemplate`<sup>Required</sup> <a name="UpdatePushTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdatePushTemplate"></a>

```typescript
public readonly UpdatePushTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePushTemplate API call.

---

##### `UpdateRecommenderConfiguration`<sup>Required</sup> <a name="UpdateRecommenderConfiguration" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateRecommenderConfiguration"></a>

```typescript
public readonly UpdateRecommenderConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRecommenderConfiguration API call.

---

##### `UpdateSegment`<sup>Required</sup> <a name="UpdateSegment" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateSegment"></a>

```typescript
public readonly UpdateSegment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSegment API call.

---

##### `UpdateSmsChannel`<sup>Required</sup> <a name="UpdateSmsChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateSmsChannel"></a>

```typescript
public readonly UpdateSmsChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSmsChannel API call.

---

##### `UpdateSmsTemplate`<sup>Required</sup> <a name="UpdateSmsTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateSmsTemplate"></a>

```typescript
public readonly UpdateSmsTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSmsTemplate API call.

---

##### `UpdateTemplateActiveVersion`<sup>Required</sup> <a name="UpdateTemplateActiveVersion" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateTemplateActiveVersion"></a>

```typescript
public readonly UpdateTemplateActiveVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTemplateActiveVersion API call.

---

##### `UpdateVoiceChannel`<sup>Required</sup> <a name="UpdateVoiceChannel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateVoiceChannel"></a>

```typescript
public readonly UpdateVoiceChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVoiceChannel API call.

---

##### `UpdateVoiceTemplate`<sup>Required</sup> <a name="UpdateVoiceTemplate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.UpdateVoiceTemplate"></a>

```typescript
public readonly UpdateVoiceTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVoiceTemplate API call.

---

##### `VerifyOTPMessage`<sup>Required</sup> <a name="VerifyOTPMessage" id="@cdk_utils/iam.mobiletargeting.MobiletargetingOperations.property.VerifyOTPMessage"></a>

```typescript
public readonly VerifyOTPMessage: string[];
```

- *Type:* string[]

IAM actions required for the VerifyOTPMessage API call.

---

### MobiletargetingResources <a name="MobiletargetingResources" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources"></a>

ARN builders, validators, and parsers for mobiletargeting resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.Initializer"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

new mobiletargeting.MobiletargetingResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.app">app</a></code> | Builds an ARN for the app resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.applicationMetrics">applicationMetrics</a></code> | Builds an ARN for the application-metrics resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.apps">apps</a></code> | Builds an ARN for the apps resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.attribute">attribute</a></code> | Builds an ARN for the attribute resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.campaign">campaign</a></code> | Builds an ARN for the campaign resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.campaignMetrics">campaignMetrics</a></code> | Builds an ARN for the campaign-metrics resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.channel">channel</a></code> | Builds an ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.channels">channels</a></code> | Builds an ARN for the channels resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.endpoint">endpoint</a></code> | Builds an ARN for the endpoint resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.events">events</a></code> | Builds an ARN for the events resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.eventStream">eventStream</a></code> | Builds an ARN for the event-stream resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.exportJob">exportJob</a></code> | Builds an ARN for the export-job resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.importJob">importJob</a></code> | Builds an ARN for the import-job resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidAppArn">isValidAppArn</a></code> | Validates whether a string is a valid ARN for the app resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidApplicationMetricsArn">isValidApplicationMetricsArn</a></code> | Validates whether a string is a valid ARN for the application-metrics resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidAppsArn">isValidAppsArn</a></code> | Validates whether a string is a valid ARN for the apps resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidAttributeArn">isValidAttributeArn</a></code> | Validates whether a string is a valid ARN for the attribute resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidCampaignArn">isValidCampaignArn</a></code> | Validates whether a string is a valid ARN for the campaign resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidCampaignMetricsArn">isValidCampaignMetricsArn</a></code> | Validates whether a string is a valid ARN for the campaign-metrics resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidChannelArn">isValidChannelArn</a></code> | Validates whether a string is a valid ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidChannelsArn">isValidChannelsArn</a></code> | Validates whether a string is a valid ARN for the channels resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidEndpointArn">isValidEndpointArn</a></code> | Validates whether a string is a valid ARN for the endpoint resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidEventsArn">isValidEventsArn</a></code> | Validates whether a string is a valid ARN for the events resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidEventStreamArn">isValidEventStreamArn</a></code> | Validates whether a string is a valid ARN for the event-stream resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidExportJobArn">isValidExportJobArn</a></code> | Validates whether a string is a valid ARN for the export-job resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidImportJobArn">isValidImportJobArn</a></code> | Validates whether a string is a valid ARN for the import-job resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidJourneyArn">isValidJourneyArn</a></code> | Validates whether a string is a valid ARN for the journey resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidJourneyExecutionActivityMetricsArn">isValidJourneyExecutionActivityMetricsArn</a></code> | Validates whether a string is a valid ARN for the journey-execution-activity-metrics resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidJourneyExecutionMetricsArn">isValidJourneyExecutionMetricsArn</a></code> | Validates whether a string is a valid ARN for the journey-execution-metrics resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidJourneyMetricsArn">isValidJourneyMetricsArn</a></code> | Validates whether a string is a valid ARN for the journey-metrics resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidJourneysArn">isValidJourneysArn</a></code> | Validates whether a string is a valid ARN for the journeys resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidMessagesArn">isValidMessagesArn</a></code> | Validates whether a string is a valid ARN for the messages resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidOtpArn">isValidOtpArn</a></code> | Validates whether a string is a valid ARN for the otp resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidPhoneNumberValidateArn">isValidPhoneNumberValidateArn</a></code> | Validates whether a string is a valid ARN for the phone-number-validate resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidRecommenderArn">isValidRecommenderArn</a></code> | Validates whether a string is a valid ARN for the recommender resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidRecommendersArn">isValidRecommendersArn</a></code> | Validates whether a string is a valid ARN for the recommenders resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidReportsArn">isValidReportsArn</a></code> | Validates whether a string is a valid ARN for the reports resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidSegmentArn">isValidSegmentArn</a></code> | Validates whether a string is a valid ARN for the segment resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidTemplateArn">isValidTemplateArn</a></code> | Validates whether a string is a valid ARN for the template resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidTemplatesArn">isValidTemplatesArn</a></code> | Validates whether a string is a valid ARN for the templates resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidUserArn">isValidUserArn</a></code> | Validates whether a string is a valid ARN for the user resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidVerifyOtpArn">isValidVerifyOtpArn</a></code> | Validates whether a string is a valid ARN for the verify-otp resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.journey">journey</a></code> | Builds an ARN for the journey resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.journeyExecutionActivityMetrics">journeyExecutionActivityMetrics</a></code> | Builds an ARN for the journey-execution-activity-metrics resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.journeyExecutionMetrics">journeyExecutionMetrics</a></code> | Builds an ARN for the journey-execution-metrics resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.journeyMetrics">journeyMetrics</a></code> | Builds an ARN for the journey-metrics resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.journeys">journeys</a></code> | Builds an ARN for the journeys resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.messages">messages</a></code> | Builds an ARN for the messages resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.otp">otp</a></code> | Builds an ARN for the otp resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseAppArn">parseAppArn</a></code> | Parses a app ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseApplicationMetricsArn">parseApplicationMetricsArn</a></code> | Parses a application-metrics ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseAppsArn">parseAppsArn</a></code> | Parses a apps ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseAttributeArn">parseAttributeArn</a></code> | Parses a attribute ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseCampaignArn">parseCampaignArn</a></code> | Parses a campaign ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseCampaignMetricsArn">parseCampaignMetricsArn</a></code> | Parses a campaign-metrics ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseChannelArn">parseChannelArn</a></code> | Parses a channel ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseChannelsArn">parseChannelsArn</a></code> | Parses a channels ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseEndpointArn">parseEndpointArn</a></code> | Parses a endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseEventsArn">parseEventsArn</a></code> | Parses a events ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseEventStreamArn">parseEventStreamArn</a></code> | Parses a event-stream ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseExportJobArn">parseExportJobArn</a></code> | Parses a export-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseImportJobArn">parseImportJobArn</a></code> | Parses a import-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseJourneyArn">parseJourneyArn</a></code> | Parses a journey ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseJourneyExecutionActivityMetricsArn">parseJourneyExecutionActivityMetricsArn</a></code> | Parses a journey-execution-activity-metrics ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseJourneyExecutionMetricsArn">parseJourneyExecutionMetricsArn</a></code> | Parses a journey-execution-metrics ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseJourneyMetricsArn">parseJourneyMetricsArn</a></code> | Parses a journey-metrics ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseJourneysArn">parseJourneysArn</a></code> | Parses a journeys ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseMessagesArn">parseMessagesArn</a></code> | Parses a messages ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseOtpArn">parseOtpArn</a></code> | Parses a otp ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parsePhoneNumberValidateArn">parsePhoneNumberValidateArn</a></code> | Parses a phone-number-validate ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseRecommenderArn">parseRecommenderArn</a></code> | Parses a recommender ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseRecommendersArn">parseRecommendersArn</a></code> | Parses a recommenders ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseReportsArn">parseReportsArn</a></code> | Parses a reports ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseSegmentArn">parseSegmentArn</a></code> | Parses a segment ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseTemplateArn">parseTemplateArn</a></code> | Parses a template ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseTemplatesArn">parseTemplatesArn</a></code> | Parses a templates ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseUserArn">parseUserArn</a></code> | Parses a user ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseVerifyOtpArn">parseVerifyOtpArn</a></code> | Parses a verify-otp ARN into its components. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.phoneNumberValidate">phoneNumberValidate</a></code> | Builds an ARN for the phone-number-validate resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.recommender">recommender</a></code> | Builds an ARN for the recommender resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.recommenders">recommenders</a></code> | Builds an ARN for the recommenders resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.reports">reports</a></code> | Builds an ARN for the reports resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.segment">segment</a></code> | Builds an ARN for the segment resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.template">template</a></code> | Builds an ARN for the template resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.templates">templates</a></code> | Builds an ARN for the templates resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.user">user</a></code> | Builds an ARN for the user resource. |
| <code><a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingResources.verifyOtp">verifyOtp</a></code> | Builds an ARN for the verify-otp resource. |

---

##### `app` <a name="app" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.app"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.app(props: MobiletargetingAppArnProps)
```

Builds an ARN for the app resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.app.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAppArnProps">MobiletargetingAppArnProps</a>

---

##### `applicationMetrics` <a name="applicationMetrics" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.applicationMetrics"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.applicationMetrics(props: MobiletargetingApplicationMetricsArnProps)
```

Builds an ARN for the application-metrics resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.applicationMetrics.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingApplicationMetricsArnProps">MobiletargetingApplicationMetricsArnProps</a>

---

##### `apps` <a name="apps" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.apps"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.apps(props: MobiletargetingAppsArnProps)
```

Builds an ARN for the apps resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.apps.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAppsArnProps">MobiletargetingAppsArnProps</a>

---

##### `attribute` <a name="attribute" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.attribute"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.attribute(props: MobiletargetingAttributeArnProps)
```

Builds an ARN for the attribute resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.attribute.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingAttributeArnProps">MobiletargetingAttributeArnProps</a>

---

##### `campaign` <a name="campaign" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.campaign"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.campaign(props: MobiletargetingCampaignArnProps)
```

Builds an ARN for the campaign resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.campaign.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignArnProps">MobiletargetingCampaignArnProps</a>

---

##### `campaignMetrics` <a name="campaignMetrics" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.campaignMetrics"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.campaignMetrics(props: MobiletargetingCampaignMetricsArnProps)
```

Builds an ARN for the campaign-metrics resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.campaignMetrics.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingCampaignMetricsArnProps">MobiletargetingCampaignMetricsArnProps</a>

---

##### `channel` <a name="channel" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.channel"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.channel(props: MobiletargetingChannelArnProps)
```

Builds an ARN for the channel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.channel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelArnProps">MobiletargetingChannelArnProps</a>

---

##### `channels` <a name="channels" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.channels"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.channels(props: MobiletargetingChannelsArnProps)
```

Builds an ARN for the channels resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.channels.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingChannelsArnProps">MobiletargetingChannelsArnProps</a>

---

##### `endpoint` <a name="endpoint" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.endpoint"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.endpoint(props: MobiletargetingEndpointArnProps)
```

Builds an ARN for the endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.endpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEndpointArnProps">MobiletargetingEndpointArnProps</a>

---

##### `events` <a name="events" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.events"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.events(props: MobiletargetingEventsArnProps)
```

Builds an ARN for the events resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.events.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEventsArnProps">MobiletargetingEventsArnProps</a>

---

##### `eventStream` <a name="eventStream" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.eventStream"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.eventStream(props: MobiletargetingEventStreamArnProps)
```

Builds an ARN for the event-stream resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.eventStream.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingEventStreamArnProps">MobiletargetingEventStreamArnProps</a>

---

##### `exportJob` <a name="exportJob" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.exportJob"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.exportJob(props: MobiletargetingExportJobArnProps)
```

Builds an ARN for the export-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.exportJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingExportJobArnProps">MobiletargetingExportJobArnProps</a>

---

##### `importJob` <a name="importJob" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.importJob"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.importJob(props: MobiletargetingImportJobArnProps)
```

Builds an ARN for the import-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.importJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingImportJobArnProps">MobiletargetingImportJobArnProps</a>

---

##### `isValidAppArn` <a name="isValidAppArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidAppArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidAppArn(arn: string)
```

Validates whether a string is a valid ARN for the app resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidAppArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidApplicationMetricsArn` <a name="isValidApplicationMetricsArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidApplicationMetricsArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidApplicationMetricsArn(arn: string)
```

Validates whether a string is a valid ARN for the application-metrics resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidApplicationMetricsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAppsArn` <a name="isValidAppsArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidAppsArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidAppsArn(arn: string)
```

Validates whether a string is a valid ARN for the apps resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidAppsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAttributeArn` <a name="isValidAttributeArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidAttributeArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidAttributeArn(arn: string)
```

Validates whether a string is a valid ARN for the attribute resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidAttributeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCampaignArn` <a name="isValidCampaignArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidCampaignArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidCampaignArn(arn: string)
```

Validates whether a string is a valid ARN for the campaign resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidCampaignArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCampaignMetricsArn` <a name="isValidCampaignMetricsArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidCampaignMetricsArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidCampaignMetricsArn(arn: string)
```

Validates whether a string is a valid ARN for the campaign-metrics resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidCampaignMetricsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidChannelArn` <a name="isValidChannelArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidChannelArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidChannelArn(arn: string)
```

Validates whether a string is a valid ARN for the channel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidChannelsArn` <a name="isValidChannelsArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidChannelsArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidChannelsArn(arn: string)
```

Validates whether a string is a valid ARN for the channels resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidChannelsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEndpointArn` <a name="isValidEndpointArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidEndpointArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEventsArn` <a name="isValidEventsArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidEventsArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidEventsArn(arn: string)
```

Validates whether a string is a valid ARN for the events resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidEventsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEventStreamArn` <a name="isValidEventStreamArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidEventStreamArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidEventStreamArn(arn: string)
```

Validates whether a string is a valid ARN for the event-stream resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidEventStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExportJobArn` <a name="isValidExportJobArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidExportJobArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidExportJobArn(arn: string)
```

Validates whether a string is a valid ARN for the export-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidExportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidImportJobArn` <a name="isValidImportJobArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidImportJobArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidImportJobArn(arn: string)
```

Validates whether a string is a valid ARN for the import-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidImportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJourneyArn` <a name="isValidJourneyArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidJourneyArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidJourneyArn(arn: string)
```

Validates whether a string is a valid ARN for the journey resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidJourneyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJourneyExecutionActivityMetricsArn` <a name="isValidJourneyExecutionActivityMetricsArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidJourneyExecutionActivityMetricsArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidJourneyExecutionActivityMetricsArn(arn: string)
```

Validates whether a string is a valid ARN for the journey-execution-activity-metrics resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidJourneyExecutionActivityMetricsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJourneyExecutionMetricsArn` <a name="isValidJourneyExecutionMetricsArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidJourneyExecutionMetricsArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidJourneyExecutionMetricsArn(arn: string)
```

Validates whether a string is a valid ARN for the journey-execution-metrics resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidJourneyExecutionMetricsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJourneyMetricsArn` <a name="isValidJourneyMetricsArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidJourneyMetricsArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidJourneyMetricsArn(arn: string)
```

Validates whether a string is a valid ARN for the journey-metrics resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidJourneyMetricsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJourneysArn` <a name="isValidJourneysArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidJourneysArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidJourneysArn(arn: string)
```

Validates whether a string is a valid ARN for the journeys resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidJourneysArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMessagesArn` <a name="isValidMessagesArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidMessagesArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidMessagesArn(arn: string)
```

Validates whether a string is a valid ARN for the messages resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidMessagesArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOtpArn` <a name="isValidOtpArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidOtpArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidOtpArn(arn: string)
```

Validates whether a string is a valid ARN for the otp resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidOtpArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPhoneNumberValidateArn` <a name="isValidPhoneNumberValidateArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidPhoneNumberValidateArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidPhoneNumberValidateArn(arn: string)
```

Validates whether a string is a valid ARN for the phone-number-validate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidPhoneNumberValidateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRecommenderArn` <a name="isValidRecommenderArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidRecommenderArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidRecommenderArn(arn: string)
```

Validates whether a string is a valid ARN for the recommender resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidRecommenderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRecommendersArn` <a name="isValidRecommendersArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidRecommendersArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidRecommendersArn(arn: string)
```

Validates whether a string is a valid ARN for the recommenders resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidRecommendersArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReportsArn` <a name="isValidReportsArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidReportsArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidReportsArn(arn: string)
```

Validates whether a string is a valid ARN for the reports resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidReportsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSegmentArn` <a name="isValidSegmentArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidSegmentArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidSegmentArn(arn: string)
```

Validates whether a string is a valid ARN for the segment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidSegmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTemplateArn` <a name="isValidTemplateArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidTemplateArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTemplatesArn` <a name="isValidTemplatesArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidTemplatesArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidTemplatesArn(arn: string)
```

Validates whether a string is a valid ARN for the templates resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidTemplatesArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUserArn` <a name="isValidUserArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidUserArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidUserArn(arn: string)
```

Validates whether a string is a valid ARN for the user resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidUserArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVerifyOtpArn` <a name="isValidVerifyOtpArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidVerifyOtpArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.isValidVerifyOtpArn(arn: string)
```

Validates whether a string is a valid ARN for the verify-otp resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.isValidVerifyOtpArn.parameter.arn"></a>

- *Type:* string

---

##### `journey` <a name="journey" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.journey"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.journey(props: MobiletargetingJourneyArnProps)
```

Builds an ARN for the journey resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.journey.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyArnProps">MobiletargetingJourneyArnProps</a>

---

##### `journeyExecutionActivityMetrics` <a name="journeyExecutionActivityMetrics" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.journeyExecutionActivityMetrics"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.journeyExecutionActivityMetrics(props: MobiletargetingJourneyExecutionActivityMetricsArnProps)
```

Builds an ARN for the journey-execution-activity-metrics resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.journeyExecutionActivityMetrics.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionActivityMetricsArnProps">MobiletargetingJourneyExecutionActivityMetricsArnProps</a>

---

##### `journeyExecutionMetrics` <a name="journeyExecutionMetrics" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.journeyExecutionMetrics"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.journeyExecutionMetrics(props: MobiletargetingJourneyExecutionMetricsArnProps)
```

Builds an ARN for the journey-execution-metrics resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.journeyExecutionMetrics.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyExecutionMetricsArnProps">MobiletargetingJourneyExecutionMetricsArnProps</a>

---

##### `journeyMetrics` <a name="journeyMetrics" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.journeyMetrics"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.journeyMetrics(props: MobiletargetingJourneyMetricsArnProps)
```

Builds an ARN for the journey-metrics resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.journeyMetrics.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneyMetricsArnProps">MobiletargetingJourneyMetricsArnProps</a>

---

##### `journeys` <a name="journeys" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.journeys"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.journeys(props: MobiletargetingJourneysArnProps)
```

Builds an ARN for the journeys resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.journeys.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingJourneysArnProps">MobiletargetingJourneysArnProps</a>

---

##### `messages` <a name="messages" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.messages"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.messages(props: MobiletargetingMessagesArnProps)
```

Builds an ARN for the messages resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.messages.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingMessagesArnProps">MobiletargetingMessagesArnProps</a>

---

##### `otp` <a name="otp" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.otp"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.otp(props: MobiletargetingOtpArnProps)
```

Builds an ARN for the otp resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.otp.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingOtpArnProps">MobiletargetingOtpArnProps</a>

---

##### `parseAppArn` <a name="parseAppArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseAppArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseAppArn(arn: string)
```

Parses a app ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseAppArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationMetricsArn` <a name="parseApplicationMetricsArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseApplicationMetricsArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseApplicationMetricsArn(arn: string)
```

Parses a application-metrics ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseApplicationMetricsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAppsArn` <a name="parseAppsArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseAppsArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseAppsArn(arn: string)
```

Parses a apps ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseAppsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAttributeArn` <a name="parseAttributeArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseAttributeArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseAttributeArn(arn: string)
```

Parses a attribute ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseAttributeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCampaignArn` <a name="parseCampaignArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseCampaignArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseCampaignArn(arn: string)
```

Parses a campaign ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseCampaignArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCampaignMetricsArn` <a name="parseCampaignMetricsArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseCampaignMetricsArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseCampaignMetricsArn(arn: string)
```

Parses a campaign-metrics ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseCampaignMetricsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChannelArn` <a name="parseChannelArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseChannelArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseChannelArn(arn: string)
```

Parses a channel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChannelsArn` <a name="parseChannelsArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseChannelsArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseChannelsArn(arn: string)
```

Parses a channels ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseChannelsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEndpointArn` <a name="parseEndpointArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseEndpointArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseEndpointArn(arn: string)
```

Parses a endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventsArn` <a name="parseEventsArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseEventsArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseEventsArn(arn: string)
```

Parses a events ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseEventsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventStreamArn` <a name="parseEventStreamArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseEventStreamArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseEventStreamArn(arn: string)
```

Parses a event-stream ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseEventStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExportJobArn` <a name="parseExportJobArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseExportJobArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseExportJobArn(arn: string)
```

Parses a export-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseExportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseImportJobArn` <a name="parseImportJobArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseImportJobArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseImportJobArn(arn: string)
```

Parses a import-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseImportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJourneyArn` <a name="parseJourneyArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseJourneyArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseJourneyArn(arn: string)
```

Parses a journey ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseJourneyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJourneyExecutionActivityMetricsArn` <a name="parseJourneyExecutionActivityMetricsArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseJourneyExecutionActivityMetricsArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseJourneyExecutionActivityMetricsArn(arn: string)
```

Parses a journey-execution-activity-metrics ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseJourneyExecutionActivityMetricsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJourneyExecutionMetricsArn` <a name="parseJourneyExecutionMetricsArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseJourneyExecutionMetricsArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseJourneyExecutionMetricsArn(arn: string)
```

Parses a journey-execution-metrics ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseJourneyExecutionMetricsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJourneyMetricsArn` <a name="parseJourneyMetricsArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseJourneyMetricsArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseJourneyMetricsArn(arn: string)
```

Parses a journey-metrics ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseJourneyMetricsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJourneysArn` <a name="parseJourneysArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseJourneysArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseJourneysArn(arn: string)
```

Parses a journeys ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseJourneysArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMessagesArn` <a name="parseMessagesArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseMessagesArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseMessagesArn(arn: string)
```

Parses a messages ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseMessagesArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOtpArn` <a name="parseOtpArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseOtpArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseOtpArn(arn: string)
```

Parses a otp ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseOtpArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePhoneNumberValidateArn` <a name="parsePhoneNumberValidateArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parsePhoneNumberValidateArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parsePhoneNumberValidateArn(arn: string)
```

Parses a phone-number-validate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parsePhoneNumberValidateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRecommenderArn` <a name="parseRecommenderArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseRecommenderArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseRecommenderArn(arn: string)
```

Parses a recommender ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseRecommenderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRecommendersArn` <a name="parseRecommendersArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseRecommendersArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseRecommendersArn(arn: string)
```

Parses a recommenders ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseRecommendersArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReportsArn` <a name="parseReportsArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseReportsArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseReportsArn(arn: string)
```

Parses a reports ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseReportsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSegmentArn` <a name="parseSegmentArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseSegmentArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseSegmentArn(arn: string)
```

Parses a segment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseSegmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTemplateArn` <a name="parseTemplateArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseTemplateArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseTemplateArn(arn: string)
```

Parses a template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTemplatesArn` <a name="parseTemplatesArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseTemplatesArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseTemplatesArn(arn: string)
```

Parses a templates ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseTemplatesArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUserArn` <a name="parseUserArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseUserArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseUserArn(arn: string)
```

Parses a user ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseUserArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVerifyOtpArn` <a name="parseVerifyOtpArn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseVerifyOtpArn"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.parseVerifyOtpArn(arn: string)
```

Parses a verify-otp ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.parseVerifyOtpArn.parameter.arn"></a>

- *Type:* string

---

##### `phoneNumberValidate` <a name="phoneNumberValidate" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.phoneNumberValidate"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.phoneNumberValidate(props: MobiletargetingPhoneNumberValidateArnProps)
```

Builds an ARN for the phone-number-validate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.phoneNumberValidate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingPhoneNumberValidateArnProps">MobiletargetingPhoneNumberValidateArnProps</a>

---

##### `recommender` <a name="recommender" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.recommender"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.recommender(props: MobiletargetingRecommenderArnProps)
```

Builds an ARN for the recommender resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.recommender.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingRecommenderArnProps">MobiletargetingRecommenderArnProps</a>

---

##### `recommenders` <a name="recommenders" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.recommenders"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.recommenders(props: MobiletargetingRecommendersArnProps)
```

Builds an ARN for the recommenders resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.recommenders.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingRecommendersArnProps">MobiletargetingRecommendersArnProps</a>

---

##### `reports` <a name="reports" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.reports"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.reports(props: MobiletargetingReportsArnProps)
```

Builds an ARN for the reports resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.reports.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingReportsArnProps">MobiletargetingReportsArnProps</a>

---

##### `segment` <a name="segment" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.segment"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.segment(props: MobiletargetingSegmentArnProps)
```

Builds an ARN for the segment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.segment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingSegmentArnProps">MobiletargetingSegmentArnProps</a>

---

##### `template` <a name="template" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.template"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.template(props: MobiletargetingTemplateArnProps)
```

Builds an ARN for the template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.template.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingTemplateArnProps">MobiletargetingTemplateArnProps</a>

---

##### `templates` <a name="templates" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.templates"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.templates(props: MobiletargetingTemplatesArnProps)
```

Builds an ARN for the templates resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.templates.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingTemplatesArnProps">MobiletargetingTemplatesArnProps</a>

---

##### `user` <a name="user" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.user"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.user(props: MobiletargetingUserArnProps)
```

Builds an ARN for the user resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.user.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingUserArnProps">MobiletargetingUserArnProps</a>

---

##### `verifyOtp` <a name="verifyOtp" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.verifyOtp"></a>

```typescript
import { mobiletargeting } from '@cdk_utils/iam'

mobiletargeting.MobiletargetingResources.verifyOtp(props: MobiletargetingVerifyOtpArnProps)
```

Builds an ARN for the verify-otp resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mobiletargeting.MobiletargetingResources.verifyOtp.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mobiletargeting.MobiletargetingVerifyOtpArnProps">MobiletargetingVerifyOtpArnProps</a>

---




