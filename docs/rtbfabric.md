# `rtbfabric` Submodule <a name="`rtbfabric` Submodule" id="@cdk_utils/iam.rtbfabric"></a>


## Structs <a name="Structs" id="Structs"></a>

### RtbfabricInboundExternalLinkArnComponents <a name="RtbfabricInboundExternalLinkArnComponents" id="@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnComponents"></a>

Parsed components of a InboundExternalLink ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnComponents.Initializer"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

const rtbfabricInboundExternalLinkArnComponents: rtbfabric.RtbfabricInboundExternalLinkArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnComponents.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnComponents.property.linkId">linkId</a></code> | <code>string</code> | The LinkId component. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnComponents.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component.

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnComponents.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

The LinkId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RtbfabricInboundExternalLinkArnProps <a name="RtbfabricInboundExternalLinkArnProps" id="@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnProps"></a>

Properties for building a InboundExternalLink ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnProps.Initializer"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

const rtbfabricInboundExternalLinkArnProps: rtbfabric.RtbfabricInboundExternalLinkArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnProps.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnProps.property.linkId">linkId</a></code> | <code>string</code> | The LinkId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnProps.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component of the ARN.

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnProps.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

The LinkId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RtbfabricLinkArnComponents <a name="RtbfabricLinkArnComponents" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkArnComponents"></a>

Parsed components of a Link ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkArnComponents.Initializer"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

const rtbfabricLinkArnComponents: rtbfabric.RtbfabricLinkArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkArnComponents.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkArnComponents.property.linkId">linkId</a></code> | <code>string</code> | The LinkId component. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkArnComponents.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component.

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkArnComponents.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

The LinkId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RtbfabricLinkArnProps <a name="RtbfabricLinkArnProps" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkArnProps"></a>

Properties for building a Link ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkArnProps.Initializer"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

const rtbfabricLinkArnProps: rtbfabric.RtbfabricLinkArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkArnProps.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkArnProps.property.linkId">linkId</a></code> | <code>string</code> | The LinkId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkArnProps.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component of the ARN.

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkArnProps.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

The LinkId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RtbfabricLinkRoutingRuleArnComponents <a name="RtbfabricLinkRoutingRuleArnComponents" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnComponents"></a>

Parsed components of a LinkRoutingRule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnComponents.Initializer"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

const rtbfabricLinkRoutingRuleArnComponents: rtbfabric.RtbfabricLinkRoutingRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnComponents.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnComponents.property.linkId">linkId</a></code> | <code>string</code> | The LinkId component. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnComponents.property.ruleId">ruleId</a></code> | <code>string</code> | The RuleId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnComponents.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component.

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnComponents.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

The LinkId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnComponents.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The RuleId component.

---

### RtbfabricLinkRoutingRuleArnProps <a name="RtbfabricLinkRoutingRuleArnProps" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnProps"></a>

Properties for building a LinkRoutingRule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnProps.Initializer"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

const rtbfabricLinkRoutingRuleArnProps: rtbfabric.RtbfabricLinkRoutingRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnProps.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnProps.property.linkId">linkId</a></code> | <code>string</code> | The LinkId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnProps.property.ruleId">ruleId</a></code> | <code>string</code> | The RuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnProps.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component of the ARN.

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnProps.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

The LinkId component of the ARN.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnProps.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The RuleId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RtbfabricOutboundExternalLinkArnComponents <a name="RtbfabricOutboundExternalLinkArnComponents" id="@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnComponents"></a>

Parsed components of a OutboundExternalLink ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnComponents.Initializer"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

const rtbfabricOutboundExternalLinkArnComponents: rtbfabric.RtbfabricOutboundExternalLinkArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnComponents.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnComponents.property.linkId">linkId</a></code> | <code>string</code> | The LinkId component. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnComponents.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component.

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnComponents.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

The LinkId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RtbfabricOutboundExternalLinkArnProps <a name="RtbfabricOutboundExternalLinkArnProps" id="@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnProps"></a>

Properties for building a OutboundExternalLink ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnProps.Initializer"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

const rtbfabricOutboundExternalLinkArnProps: rtbfabric.RtbfabricOutboundExternalLinkArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnProps.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnProps.property.linkId">linkId</a></code> | <code>string</code> | The LinkId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnProps.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component of the ARN.

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnProps.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

The LinkId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RtbfabricRequesterGatewayArnComponents <a name="RtbfabricRequesterGatewayArnComponents" id="@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnComponents"></a>

Parsed components of a RequesterGateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnComponents.Initializer"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

const rtbfabricRequesterGatewayArnComponents: rtbfabric.RtbfabricRequesterGatewayArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnComponents.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnComponents.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RtbfabricRequesterGatewayArnProps <a name="RtbfabricRequesterGatewayArnProps" id="@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnProps"></a>

Properties for building a RequesterGateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnProps.Initializer"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

const rtbfabricRequesterGatewayArnProps: rtbfabric.RtbfabricRequesterGatewayArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnProps.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnProps.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RtbfabricResponderGatewayArnComponents <a name="RtbfabricResponderGatewayArnComponents" id="@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnComponents"></a>

Parsed components of a ResponderGateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnComponents.Initializer"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

const rtbfabricResponderGatewayArnComponents: rtbfabric.RtbfabricResponderGatewayArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnComponents.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnComponents.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RtbfabricResponderGatewayArnProps <a name="RtbfabricResponderGatewayArnProps" id="@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnProps"></a>

Properties for building a ResponderGateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnProps.Initializer"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

const rtbfabricResponderGatewayArnProps: rtbfabric.RtbfabricResponderGatewayArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnProps.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnProps.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### RtbfabricActions <a name="RtbfabricActions" id="@cdk_utils/iam.rtbfabric.RtbfabricActions"></a>

IAM action constants for the rtbfabric service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.Initializer"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

new rtbfabric.RtbfabricActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.AcceptLink">AcceptLink</a></code> | <code>string</code> | [Write] rtbfabric:AcceptLink. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.actionGetCertificateAssociation">actionGetCertificateAssociation</a></code> | <code>string</code> | [Read] rtbfabric:GetCertificateAssociation. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.actionGetInboundExternalLink">actionGetInboundExternalLink</a></code> | <code>string</code> | [Read] rtbfabric:GetInboundExternalLink. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.actionGetLink">actionGetLink</a></code> | <code>string</code> | [Read] rtbfabric:GetLink. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.actionGetLinkRoutingRule">actionGetLinkRoutingRule</a></code> | <code>string</code> | [Read] rtbfabric:GetLinkRoutingRule. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.actionGetOutboundExternalLink">actionGetOutboundExternalLink</a></code> | <code>string</code> | [Read] rtbfabric:GetOutboundExternalLink. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.actionGetRequesterGateway">actionGetRequesterGateway</a></code> | <code>string</code> | [Read] rtbfabric:GetRequesterGateway. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.actionGetResponderGateway">actionGetResponderGateway</a></code> | <code>string</code> | [Read] rtbfabric:GetResponderGateway. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.AssociateCertificate">AssociateCertificate</a></code> | <code>string</code> | [Write] rtbfabric:AssociateCertificate. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.CreateInboundExternalLink">CreateInboundExternalLink</a></code> | <code>string</code> | [Write] rtbfabric:CreateInboundExternalLink. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.CreateLink">CreateLink</a></code> | <code>string</code> | [Write] rtbfabric:CreateLink. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.CreateLinkRoutingRule">CreateLinkRoutingRule</a></code> | <code>string</code> | [Write] rtbfabric:CreateLinkRoutingRule. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.CreateOutboundExternalLink">CreateOutboundExternalLink</a></code> | <code>string</code> | [Write] rtbfabric:CreateOutboundExternalLink. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.CreateRequesterGateway">CreateRequesterGateway</a></code> | <code>string</code> | [Write] rtbfabric:CreateRequesterGateway. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.CreateResponderGateway">CreateResponderGateway</a></code> | <code>string</code> | [Write] rtbfabric:CreateResponderGateway. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.DeleteInboundExternalLink">DeleteInboundExternalLink</a></code> | <code>string</code> | [Write] rtbfabric:DeleteInboundExternalLink. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.DeleteLink">DeleteLink</a></code> | <code>string</code> | [Write] rtbfabric:DeleteLink. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.DeleteLinkRoutingRule">DeleteLinkRoutingRule</a></code> | <code>string</code> | [Write] rtbfabric:DeleteLinkRoutingRule. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.DeleteOutboundExternalLink">DeleteOutboundExternalLink</a></code> | <code>string</code> | [Write] rtbfabric:DeleteOutboundExternalLink. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.DeleteRequesterGateway">DeleteRequesterGateway</a></code> | <code>string</code> | [Write] rtbfabric:DeleteRequesterGateway. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.DeleteResponderGateway">DeleteResponderGateway</a></code> | <code>string</code> | [Write] rtbfabric:DeleteResponderGateway. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.DisassociateCertificate">DisassociateCertificate</a></code> | <code>string</code> | [Write] rtbfabric:DisassociateCertificate. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.ListCertificateAssociations">ListCertificateAssociations</a></code> | <code>string</code> | [List] rtbfabric:ListCertificateAssociations. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.ListLinkRoutingRules">ListLinkRoutingRules</a></code> | <code>string</code> | [List] rtbfabric:ListLinkRoutingRules. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.ListLinks">ListLinks</a></code> | <code>string</code> | [List] rtbfabric:ListLinks. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.ListRequesterGateways">ListRequesterGateways</a></code> | <code>string</code> | [List] rtbfabric:ListRequesterGateways. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.ListResponderGateways">ListResponderGateways</a></code> | <code>string</code> | [List] rtbfabric:ListResponderGateways. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] rtbfabric:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.RejectLink">RejectLink</a></code> | <code>string</code> | [Write] rtbfabric:RejectLink. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] rtbfabric:TagResource. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] rtbfabric:UntagResource. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.UpdateLink">UpdateLink</a></code> | <code>string</code> | [Write] rtbfabric:UpdateLink. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.UpdateLinkModuleFlow">UpdateLinkModuleFlow</a></code> | <code>string</code> | [Write] rtbfabric:UpdateLinkModuleFlow. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.UpdateLinkRoutingRule">UpdateLinkRoutingRule</a></code> | <code>string</code> | [Write] rtbfabric:UpdateLinkRoutingRule. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.UpdateRequesterGateway">UpdateRequesterGateway</a></code> | <code>string</code> | [Write] rtbfabric:UpdateRequesterGateway. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricActions.property.UpdateResponderGateway">UpdateResponderGateway</a></code> | <code>string</code> | [Write] rtbfabric:UpdateResponderGateway. |

---

##### `AcceptLink`<sup>Required</sup> <a name="AcceptLink" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.AcceptLink"></a>

```typescript
public readonly AcceptLink: string;
```

- *Type:* string

[Write] rtbfabric:AcceptLink.

---

##### `actionGetCertificateAssociation`<sup>Required</sup> <a name="actionGetCertificateAssociation" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.actionGetCertificateAssociation"></a>

```typescript
public readonly actionGetCertificateAssociation: string;
```

- *Type:* string

[Read] rtbfabric:GetCertificateAssociation.

---

##### `actionGetInboundExternalLink`<sup>Required</sup> <a name="actionGetInboundExternalLink" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.actionGetInboundExternalLink"></a>

```typescript
public readonly actionGetInboundExternalLink: string;
```

- *Type:* string

[Read] rtbfabric:GetInboundExternalLink.

---

##### `actionGetLink`<sup>Required</sup> <a name="actionGetLink" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.actionGetLink"></a>

```typescript
public readonly actionGetLink: string;
```

- *Type:* string

[Read] rtbfabric:GetLink.

---

##### `actionGetLinkRoutingRule`<sup>Required</sup> <a name="actionGetLinkRoutingRule" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.actionGetLinkRoutingRule"></a>

```typescript
public readonly actionGetLinkRoutingRule: string;
```

- *Type:* string

[Read] rtbfabric:GetLinkRoutingRule.

---

##### `actionGetOutboundExternalLink`<sup>Required</sup> <a name="actionGetOutboundExternalLink" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.actionGetOutboundExternalLink"></a>

```typescript
public readonly actionGetOutboundExternalLink: string;
```

- *Type:* string

[Read] rtbfabric:GetOutboundExternalLink.

---

##### `actionGetRequesterGateway`<sup>Required</sup> <a name="actionGetRequesterGateway" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.actionGetRequesterGateway"></a>

```typescript
public readonly actionGetRequesterGateway: string;
```

- *Type:* string

[Read] rtbfabric:GetRequesterGateway.

---

##### `actionGetResponderGateway`<sup>Required</sup> <a name="actionGetResponderGateway" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.actionGetResponderGateway"></a>

```typescript
public readonly actionGetResponderGateway: string;
```

- *Type:* string

[Read] rtbfabric:GetResponderGateway.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateCertificate`<sup>Required</sup> <a name="AssociateCertificate" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.AssociateCertificate"></a>

```typescript
public readonly AssociateCertificate: string;
```

- *Type:* string

[Write] rtbfabric:AssociateCertificate.

---

##### `CreateInboundExternalLink`<sup>Required</sup> <a name="CreateInboundExternalLink" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.CreateInboundExternalLink"></a>

```typescript
public readonly CreateInboundExternalLink: string;
```

- *Type:* string

[Write] rtbfabric:CreateInboundExternalLink.

---

##### `CreateLink`<sup>Required</sup> <a name="CreateLink" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.CreateLink"></a>

```typescript
public readonly CreateLink: string;
```

- *Type:* string

[Write] rtbfabric:CreateLink.

---

##### `CreateLinkRoutingRule`<sup>Required</sup> <a name="CreateLinkRoutingRule" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.CreateLinkRoutingRule"></a>

```typescript
public readonly CreateLinkRoutingRule: string;
```

- *Type:* string

[Write] rtbfabric:CreateLinkRoutingRule.

---

##### `CreateOutboundExternalLink`<sup>Required</sup> <a name="CreateOutboundExternalLink" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.CreateOutboundExternalLink"></a>

```typescript
public readonly CreateOutboundExternalLink: string;
```

- *Type:* string

[Write] rtbfabric:CreateOutboundExternalLink.

---

##### `CreateRequesterGateway`<sup>Required</sup> <a name="CreateRequesterGateway" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.CreateRequesterGateway"></a>

```typescript
public readonly CreateRequesterGateway: string;
```

- *Type:* string

[Write] rtbfabric:CreateRequesterGateway.

---

##### `CreateResponderGateway`<sup>Required</sup> <a name="CreateResponderGateway" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.CreateResponderGateway"></a>

```typescript
public readonly CreateResponderGateway: string;
```

- *Type:* string

[Write] rtbfabric:CreateResponderGateway.

---

##### `DeleteInboundExternalLink`<sup>Required</sup> <a name="DeleteInboundExternalLink" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.DeleteInboundExternalLink"></a>

```typescript
public readonly DeleteInboundExternalLink: string;
```

- *Type:* string

[Write] rtbfabric:DeleteInboundExternalLink.

---

##### `DeleteLink`<sup>Required</sup> <a name="DeleteLink" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.DeleteLink"></a>

```typescript
public readonly DeleteLink: string;
```

- *Type:* string

[Write] rtbfabric:DeleteLink.

---

##### `DeleteLinkRoutingRule`<sup>Required</sup> <a name="DeleteLinkRoutingRule" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.DeleteLinkRoutingRule"></a>

```typescript
public readonly DeleteLinkRoutingRule: string;
```

- *Type:* string

[Write] rtbfabric:DeleteLinkRoutingRule.

---

##### `DeleteOutboundExternalLink`<sup>Required</sup> <a name="DeleteOutboundExternalLink" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.DeleteOutboundExternalLink"></a>

```typescript
public readonly DeleteOutboundExternalLink: string;
```

- *Type:* string

[Write] rtbfabric:DeleteOutboundExternalLink.

---

##### `DeleteRequesterGateway`<sup>Required</sup> <a name="DeleteRequesterGateway" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.DeleteRequesterGateway"></a>

```typescript
public readonly DeleteRequesterGateway: string;
```

- *Type:* string

[Write] rtbfabric:DeleteRequesterGateway.

---

##### `DeleteResponderGateway`<sup>Required</sup> <a name="DeleteResponderGateway" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.DeleteResponderGateway"></a>

```typescript
public readonly DeleteResponderGateway: string;
```

- *Type:* string

[Write] rtbfabric:DeleteResponderGateway.

---

##### `DisassociateCertificate`<sup>Required</sup> <a name="DisassociateCertificate" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.DisassociateCertificate"></a>

```typescript
public readonly DisassociateCertificate: string;
```

- *Type:* string

[Write] rtbfabric:DisassociateCertificate.

---

##### `ListCertificateAssociations`<sup>Required</sup> <a name="ListCertificateAssociations" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.ListCertificateAssociations"></a>

```typescript
public readonly ListCertificateAssociations: string;
```

- *Type:* string

[List] rtbfabric:ListCertificateAssociations.

---

##### `ListLinkRoutingRules`<sup>Required</sup> <a name="ListLinkRoutingRules" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.ListLinkRoutingRules"></a>

```typescript
public readonly ListLinkRoutingRules: string;
```

- *Type:* string

[List] rtbfabric:ListLinkRoutingRules.

---

##### `ListLinks`<sup>Required</sup> <a name="ListLinks" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.ListLinks"></a>

```typescript
public readonly ListLinks: string;
```

- *Type:* string

[List] rtbfabric:ListLinks.

---

##### `ListRequesterGateways`<sup>Required</sup> <a name="ListRequesterGateways" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.ListRequesterGateways"></a>

```typescript
public readonly ListRequesterGateways: string;
```

- *Type:* string

[List] rtbfabric:ListRequesterGateways.

---

##### `ListResponderGateways`<sup>Required</sup> <a name="ListResponderGateways" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.ListResponderGateways"></a>

```typescript
public readonly ListResponderGateways: string;
```

- *Type:* string

[List] rtbfabric:ListResponderGateways.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] rtbfabric:ListTagsForResource.

---

##### `RejectLink`<sup>Required</sup> <a name="RejectLink" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.RejectLink"></a>

```typescript
public readonly RejectLink: string;
```

- *Type:* string

[Write] rtbfabric:RejectLink.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] rtbfabric:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] rtbfabric:UntagResource.

---

##### `UpdateLink`<sup>Required</sup> <a name="UpdateLink" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.UpdateLink"></a>

```typescript
public readonly UpdateLink: string;
```

- *Type:* string

[Write] rtbfabric:UpdateLink.

---

##### `UpdateLinkModuleFlow`<sup>Required</sup> <a name="UpdateLinkModuleFlow" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.UpdateLinkModuleFlow"></a>

```typescript
public readonly UpdateLinkModuleFlow: string;
```

- *Type:* string

[Write] rtbfabric:UpdateLinkModuleFlow.

---

##### `UpdateLinkRoutingRule`<sup>Required</sup> <a name="UpdateLinkRoutingRule" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.UpdateLinkRoutingRule"></a>

```typescript
public readonly UpdateLinkRoutingRule: string;
```

- *Type:* string

[Write] rtbfabric:UpdateLinkRoutingRule.

---

##### `UpdateRequesterGateway`<sup>Required</sup> <a name="UpdateRequesterGateway" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.UpdateRequesterGateway"></a>

```typescript
public readonly UpdateRequesterGateway: string;
```

- *Type:* string

[Write] rtbfabric:UpdateRequesterGateway.

---

##### `UpdateResponderGateway`<sup>Required</sup> <a name="UpdateResponderGateway" id="@cdk_utils/iam.rtbfabric.RtbfabricActions.property.UpdateResponderGateway"></a>

```typescript
public readonly UpdateResponderGateway: string;
```

- *Type:* string

[Write] rtbfabric:UpdateResponderGateway.

---

### RtbfabricConditions <a name="RtbfabricConditions" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions"></a>

Condition key constants and builders for rtbfabric.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.Initializer"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

new rtbfabric.RtbfabricConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.inboundExternalLinkGatewayId">inboundExternalLinkGatewayId</a></code> | Generates a condition block for `rtbfabric:InboundExternalLinkGatewayId`. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.inboundExternalLinkLinkId">inboundExternalLinkLinkId</a></code> | Generates a condition block for `rtbfabric:InboundExternalLinkLinkId`. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.linkLinkId">linkLinkId</a></code> | Generates a condition block for `rtbfabric:LinkLinkId`. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.linkRoutingRuleRuleId">linkRoutingRuleRuleId</a></code> | Generates a condition block for `rtbfabric:LinkRoutingRuleRuleId`. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.outboundExternalLinkLinkId">outboundExternalLinkLinkId</a></code> | Generates a condition block for `rtbfabric:OutboundExternalLinkLinkId`. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.requesterGatewayGatewayId">requesterGatewayGatewayId</a></code> | Generates a condition block for `rtbfabric:RequesterGatewayGatewayId`. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.responderGatewayGatewayId">responderGatewayGatewayId</a></code> | Generates a condition block for `rtbfabric:ResponderGatewayGatewayId`. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `inboundExternalLinkGatewayId` <a name="inboundExternalLinkGatewayId" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.inboundExternalLinkGatewayId"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricConditions.inboundExternalLinkGatewayId(value: string)
```

Generates a condition block for `rtbfabric:InboundExternalLinkGatewayId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.inboundExternalLinkGatewayId.parameter.value"></a>

- *Type:* string

---

##### `inboundExternalLinkLinkId` <a name="inboundExternalLinkLinkId" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.inboundExternalLinkLinkId"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricConditions.inboundExternalLinkLinkId(value: string)
```

Generates a condition block for `rtbfabric:InboundExternalLinkLinkId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.inboundExternalLinkLinkId.parameter.value"></a>

- *Type:* string

---

##### `linkLinkId` <a name="linkLinkId" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.linkLinkId"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricConditions.linkLinkId(value: string)
```

Generates a condition block for `rtbfabric:LinkLinkId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.linkLinkId.parameter.value"></a>

- *Type:* string

---

##### `linkRoutingRuleRuleId` <a name="linkRoutingRuleRuleId" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.linkRoutingRuleRuleId"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricConditions.linkRoutingRuleRuleId(value: string)
```

Generates a condition block for `rtbfabric:LinkRoutingRuleRuleId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.linkRoutingRuleRuleId.parameter.value"></a>

- *Type:* string

---

##### `outboundExternalLinkLinkId` <a name="outboundExternalLinkLinkId" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.outboundExternalLinkLinkId"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricConditions.outboundExternalLinkLinkId(value: string)
```

Generates a condition block for `rtbfabric:OutboundExternalLinkLinkId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.outboundExternalLinkLinkId.parameter.value"></a>

- *Type:* string

---

##### `requesterGatewayGatewayId` <a name="requesterGatewayGatewayId" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.requesterGatewayGatewayId"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricConditions.requesterGatewayGatewayId(value: string)
```

Generates a condition block for `rtbfabric:RequesterGatewayGatewayId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.requesterGatewayGatewayId.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.requestTag"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.resourceTag"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `responderGatewayGatewayId` <a name="responderGatewayGatewayId" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.responderGatewayGatewayId"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricConditions.responderGatewayGatewayId(value: string)
```

Generates a condition block for `rtbfabric:ResponderGatewayGatewayId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.responderGatewayGatewayId.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.tagKeys"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.CreateInboundExternalLinkConditionKeys">CreateInboundExternalLinkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInboundExternalLink action. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.CreateLinkConditionKeys">CreateLinkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLink action. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.CreateLinkRoutingRuleConditionKeys">CreateLinkRoutingRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLinkRoutingRule action. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.CreateOutboundExternalLinkConditionKeys">CreateOutboundExternalLinkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOutboundExternalLink action. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.CreateRequesterGatewayConditionKeys">CreateRequesterGatewayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRequesterGateway action. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.CreateResponderGatewayConditionKeys">CreateResponderGatewayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateResponderGateway action. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.INBOUND_EXTERNAL_LINK_GATEWAY_ID">INBOUND_EXTERNAL_LINK_GATEWAY_ID</a></code> | <code>string</code> | Condition key: rtbfabric:InboundExternalLinkGatewayId (String). |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.INBOUND_EXTERNAL_LINK_LINK_ID">INBOUND_EXTERNAL_LINK_LINK_ID</a></code> | <code>string</code> | Condition key: rtbfabric:InboundExternalLinkLinkId (String). |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.LINK_LINK_ID">LINK_LINK_ID</a></code> | <code>string</code> | Condition key: rtbfabric:LinkLinkId (String). |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.LINK_ROUTING_RULE_RULE_ID">LINK_ROUTING_RULE_RULE_ID</a></code> | <code>string</code> | Condition key: rtbfabric:LinkRoutingRuleRuleId (String). |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.OUTBOUND_EXTERNAL_LINK_LINK_ID">OUTBOUND_EXTERNAL_LINK_LINK_ID</a></code> | <code>string</code> | Condition key: rtbfabric:OutboundExternalLinkLinkId (String). |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.REQUESTER_GATEWAY_GATEWAY_ID">REQUESTER_GATEWAY_GATEWAY_ID</a></code> | <code>string</code> | Condition key: rtbfabric:RequesterGatewayGatewayId (String). |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.RESPONDER_GATEWAY_GATEWAY_ID">RESPONDER_GATEWAY_GATEWAY_ID</a></code> | <code>string</code> | Condition key: rtbfabric:ResponderGatewayGatewayId (String). |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateInboundExternalLinkConditionKeys`<sup>Required</sup> <a name="CreateInboundExternalLinkConditionKeys" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.CreateInboundExternalLinkConditionKeys"></a>

```typescript
public readonly CreateInboundExternalLinkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInboundExternalLink action.

---

##### `CreateLinkConditionKeys`<sup>Required</sup> <a name="CreateLinkConditionKeys" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.CreateLinkConditionKeys"></a>

```typescript
public readonly CreateLinkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLink action.

---

##### `CreateLinkRoutingRuleConditionKeys`<sup>Required</sup> <a name="CreateLinkRoutingRuleConditionKeys" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.CreateLinkRoutingRuleConditionKeys"></a>

```typescript
public readonly CreateLinkRoutingRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLinkRoutingRule action.

---

##### `CreateOutboundExternalLinkConditionKeys`<sup>Required</sup> <a name="CreateOutboundExternalLinkConditionKeys" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.CreateOutboundExternalLinkConditionKeys"></a>

```typescript
public readonly CreateOutboundExternalLinkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOutboundExternalLink action.

---

##### `CreateRequesterGatewayConditionKeys`<sup>Required</sup> <a name="CreateRequesterGatewayConditionKeys" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.CreateRequesterGatewayConditionKeys"></a>

```typescript
public readonly CreateRequesterGatewayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRequesterGateway action.

---

##### `CreateResponderGatewayConditionKeys`<sup>Required</sup> <a name="CreateResponderGatewayConditionKeys" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.CreateResponderGatewayConditionKeys"></a>

```typescript
public readonly CreateResponderGatewayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateResponderGateway action.

---

##### `INBOUND_EXTERNAL_LINK_GATEWAY_ID`<sup>Required</sup> <a name="INBOUND_EXTERNAL_LINK_GATEWAY_ID" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.INBOUND_EXTERNAL_LINK_GATEWAY_ID"></a>

```typescript
public readonly INBOUND_EXTERNAL_LINK_GATEWAY_ID: string;
```

- *Type:* string

Condition key: rtbfabric:InboundExternalLinkGatewayId (String).

---

##### `INBOUND_EXTERNAL_LINK_LINK_ID`<sup>Required</sup> <a name="INBOUND_EXTERNAL_LINK_LINK_ID" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.INBOUND_EXTERNAL_LINK_LINK_ID"></a>

```typescript
public readonly INBOUND_EXTERNAL_LINK_LINK_ID: string;
```

- *Type:* string

Condition key: rtbfabric:InboundExternalLinkLinkId (String).

---

##### `LINK_LINK_ID`<sup>Required</sup> <a name="LINK_LINK_ID" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.LINK_LINK_ID"></a>

```typescript
public readonly LINK_LINK_ID: string;
```

- *Type:* string

Condition key: rtbfabric:LinkLinkId (String).

---

##### `LINK_ROUTING_RULE_RULE_ID`<sup>Required</sup> <a name="LINK_ROUTING_RULE_RULE_ID" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.LINK_ROUTING_RULE_RULE_ID"></a>

```typescript
public readonly LINK_ROUTING_RULE_RULE_ID: string;
```

- *Type:* string

Condition key: rtbfabric:LinkRoutingRuleRuleId (String).

---

##### `OUTBOUND_EXTERNAL_LINK_LINK_ID`<sup>Required</sup> <a name="OUTBOUND_EXTERNAL_LINK_LINK_ID" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.OUTBOUND_EXTERNAL_LINK_LINK_ID"></a>

```typescript
public readonly OUTBOUND_EXTERNAL_LINK_LINK_ID: string;
```

- *Type:* string

Condition key: rtbfabric:OutboundExternalLinkLinkId (String).

---

##### `REQUESTER_GATEWAY_GATEWAY_ID`<sup>Required</sup> <a name="REQUESTER_GATEWAY_GATEWAY_ID" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.REQUESTER_GATEWAY_GATEWAY_ID"></a>

```typescript
public readonly REQUESTER_GATEWAY_GATEWAY_ID: string;
```

- *Type:* string

Condition key: rtbfabric:RequesterGatewayGatewayId (String).

---

##### `RESPONDER_GATEWAY_GATEWAY_ID`<sup>Required</sup> <a name="RESPONDER_GATEWAY_GATEWAY_ID" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.RESPONDER_GATEWAY_GATEWAY_ID"></a>

```typescript
public readonly RESPONDER_GATEWAY_GATEWAY_ID: string;
```

- *Type:* string

Condition key: rtbfabric:ResponderGatewayGatewayId (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.rtbfabric.RtbfabricConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### RtbfabricOperations <a name="RtbfabricOperations" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations"></a>

API operation to required IAM actions mapping for rtbfabric.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.Initializer"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

new rtbfabric.RtbfabricOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.AcceptLink">AcceptLink</a></code> | <code>string[]</code> | IAM actions required for the AcceptLink API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.AssociateCertificate">AssociateCertificate</a></code> | <code>string[]</code> | IAM actions required for the AssociateCertificate API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.CreateInboundExternalLink">CreateInboundExternalLink</a></code> | <code>string[]</code> | IAM actions required for the CreateInboundExternalLink API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.CreateLink">CreateLink</a></code> | <code>string[]</code> | IAM actions required for the CreateLink API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.CreateLinkRoutingRule">CreateLinkRoutingRule</a></code> | <code>string[]</code> | IAM actions required for the CreateLinkRoutingRule API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.CreateOutboundExternalLink">CreateOutboundExternalLink</a></code> | <code>string[]</code> | IAM actions required for the CreateOutboundExternalLink API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.CreateRequesterGateway">CreateRequesterGateway</a></code> | <code>string[]</code> | IAM actions required for the CreateRequesterGateway API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.CreateResponderGateway">CreateResponderGateway</a></code> | <code>string[]</code> | IAM actions required for the CreateResponderGateway API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.DeleteInboundExternalLink">DeleteInboundExternalLink</a></code> | <code>string[]</code> | IAM actions required for the DeleteInboundExternalLink API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.DeleteLink">DeleteLink</a></code> | <code>string[]</code> | IAM actions required for the DeleteLink API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.DeleteLinkRoutingRule">DeleteLinkRoutingRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteLinkRoutingRule API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.DeleteOutboundExternalLink">DeleteOutboundExternalLink</a></code> | <code>string[]</code> | IAM actions required for the DeleteOutboundExternalLink API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.DeleteRequesterGateway">DeleteRequesterGateway</a></code> | <code>string[]</code> | IAM actions required for the DeleteRequesterGateway API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.DeleteResponderGateway">DeleteResponderGateway</a></code> | <code>string[]</code> | IAM actions required for the DeleteResponderGateway API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.DisassociateCertificate">DisassociateCertificate</a></code> | <code>string[]</code> | IAM actions required for the DisassociateCertificate API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.ListCertificateAssociations">ListCertificateAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListCertificateAssociations API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.ListLinkRoutingRules">ListLinkRoutingRules</a></code> | <code>string[]</code> | IAM actions required for the ListLinkRoutingRules API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.ListLinks">ListLinks</a></code> | <code>string[]</code> | IAM actions required for the ListLinks API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.ListRequesterGateways">ListRequesterGateways</a></code> | <code>string[]</code> | IAM actions required for the ListRequesterGateways API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.ListResponderGateways">ListResponderGateways</a></code> | <code>string[]</code> | IAM actions required for the ListResponderGateways API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.opGetCertificateAssociation">opGetCertificateAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetCertificateAssociation API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.opGetInboundExternalLink">opGetInboundExternalLink</a></code> | <code>string[]</code> | IAM actions required for the GetInboundExternalLink API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.opGetLink">opGetLink</a></code> | <code>string[]</code> | IAM actions required for the GetLink API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.opGetLinkRoutingRule">opGetLinkRoutingRule</a></code> | <code>string[]</code> | IAM actions required for the GetLinkRoutingRule API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.opGetOutboundExternalLink">opGetOutboundExternalLink</a></code> | <code>string[]</code> | IAM actions required for the GetOutboundExternalLink API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.opGetRequesterGateway">opGetRequesterGateway</a></code> | <code>string[]</code> | IAM actions required for the GetRequesterGateway API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.opGetResponderGateway">opGetResponderGateway</a></code> | <code>string[]</code> | IAM actions required for the GetResponderGateway API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.RejectLink">RejectLink</a></code> | <code>string[]</code> | IAM actions required for the RejectLink API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.UpdateLink">UpdateLink</a></code> | <code>string[]</code> | IAM actions required for the UpdateLink API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.UpdateLinkModuleFlow">UpdateLinkModuleFlow</a></code> | <code>string[]</code> | IAM actions required for the UpdateLinkModuleFlow API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.UpdateLinkRoutingRule">UpdateLinkRoutingRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateLinkRoutingRule API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.UpdateRequesterGateway">UpdateRequesterGateway</a></code> | <code>string[]</code> | IAM actions required for the UpdateRequesterGateway API call. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.UpdateResponderGateway">UpdateResponderGateway</a></code> | <code>string[]</code> | IAM actions required for the UpdateResponderGateway API call. |

---

##### `AcceptLink`<sup>Required</sup> <a name="AcceptLink" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.AcceptLink"></a>

```typescript
public readonly AcceptLink: string[];
```

- *Type:* string[]

IAM actions required for the AcceptLink API call.

---

##### `AssociateCertificate`<sup>Required</sup> <a name="AssociateCertificate" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.AssociateCertificate"></a>

```typescript
public readonly AssociateCertificate: string[];
```

- *Type:* string[]

IAM actions required for the AssociateCertificate API call.

---

##### `CreateInboundExternalLink`<sup>Required</sup> <a name="CreateInboundExternalLink" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.CreateInboundExternalLink"></a>

```typescript
public readonly CreateInboundExternalLink: string[];
```

- *Type:* string[]

IAM actions required for the CreateInboundExternalLink API call.

---

##### `CreateLink`<sup>Required</sup> <a name="CreateLink" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.CreateLink"></a>

```typescript
public readonly CreateLink: string[];
```

- *Type:* string[]

IAM actions required for the CreateLink API call.

---

##### `CreateLinkRoutingRule`<sup>Required</sup> <a name="CreateLinkRoutingRule" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.CreateLinkRoutingRule"></a>

```typescript
public readonly CreateLinkRoutingRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateLinkRoutingRule API call.

---

##### `CreateOutboundExternalLink`<sup>Required</sup> <a name="CreateOutboundExternalLink" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.CreateOutboundExternalLink"></a>

```typescript
public readonly CreateOutboundExternalLink: string[];
```

- *Type:* string[]

IAM actions required for the CreateOutboundExternalLink API call.

---

##### `CreateRequesterGateway`<sup>Required</sup> <a name="CreateRequesterGateway" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.CreateRequesterGateway"></a>

```typescript
public readonly CreateRequesterGateway: string[];
```

- *Type:* string[]

IAM actions required for the CreateRequesterGateway API call.

---

##### `CreateResponderGateway`<sup>Required</sup> <a name="CreateResponderGateway" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.CreateResponderGateway"></a>

```typescript
public readonly CreateResponderGateway: string[];
```

- *Type:* string[]

IAM actions required for the CreateResponderGateway API call.

---

##### `DeleteInboundExternalLink`<sup>Required</sup> <a name="DeleteInboundExternalLink" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.DeleteInboundExternalLink"></a>

```typescript
public readonly DeleteInboundExternalLink: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInboundExternalLink API call.

---

##### `DeleteLink`<sup>Required</sup> <a name="DeleteLink" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.DeleteLink"></a>

```typescript
public readonly DeleteLink: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLink API call.

---

##### `DeleteLinkRoutingRule`<sup>Required</sup> <a name="DeleteLinkRoutingRule" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.DeleteLinkRoutingRule"></a>

```typescript
public readonly DeleteLinkRoutingRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLinkRoutingRule API call.

---

##### `DeleteOutboundExternalLink`<sup>Required</sup> <a name="DeleteOutboundExternalLink" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.DeleteOutboundExternalLink"></a>

```typescript
public readonly DeleteOutboundExternalLink: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOutboundExternalLink API call.

---

##### `DeleteRequesterGateway`<sup>Required</sup> <a name="DeleteRequesterGateway" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.DeleteRequesterGateway"></a>

```typescript
public readonly DeleteRequesterGateway: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRequesterGateway API call.

---

##### `DeleteResponderGateway`<sup>Required</sup> <a name="DeleteResponderGateway" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.DeleteResponderGateway"></a>

```typescript
public readonly DeleteResponderGateway: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResponderGateway API call.

---

##### `DisassociateCertificate`<sup>Required</sup> <a name="DisassociateCertificate" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.DisassociateCertificate"></a>

```typescript
public readonly DisassociateCertificate: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateCertificate API call.

---

##### `ListCertificateAssociations`<sup>Required</sup> <a name="ListCertificateAssociations" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.ListCertificateAssociations"></a>

```typescript
public readonly ListCertificateAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListCertificateAssociations API call.

---

##### `ListLinkRoutingRules`<sup>Required</sup> <a name="ListLinkRoutingRules" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.ListLinkRoutingRules"></a>

```typescript
public readonly ListLinkRoutingRules: string[];
```

- *Type:* string[]

IAM actions required for the ListLinkRoutingRules API call.

---

##### `ListLinks`<sup>Required</sup> <a name="ListLinks" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.ListLinks"></a>

```typescript
public readonly ListLinks: string[];
```

- *Type:* string[]

IAM actions required for the ListLinks API call.

---

##### `ListRequesterGateways`<sup>Required</sup> <a name="ListRequesterGateways" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.ListRequesterGateways"></a>

```typescript
public readonly ListRequesterGateways: string[];
```

- *Type:* string[]

IAM actions required for the ListRequesterGateways API call.

---

##### `ListResponderGateways`<sup>Required</sup> <a name="ListResponderGateways" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.ListResponderGateways"></a>

```typescript
public readonly ListResponderGateways: string[];
```

- *Type:* string[]

IAM actions required for the ListResponderGateways API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetCertificateAssociation`<sup>Required</sup> <a name="opGetCertificateAssociation" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.opGetCertificateAssociation"></a>

```typescript
public readonly opGetCertificateAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetCertificateAssociation API call.

---

##### `opGetInboundExternalLink`<sup>Required</sup> <a name="opGetInboundExternalLink" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.opGetInboundExternalLink"></a>

```typescript
public readonly opGetInboundExternalLink: string[];
```

- *Type:* string[]

IAM actions required for the GetInboundExternalLink API call.

---

##### `opGetLink`<sup>Required</sup> <a name="opGetLink" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.opGetLink"></a>

```typescript
public readonly opGetLink: string[];
```

- *Type:* string[]

IAM actions required for the GetLink API call.

---

##### `opGetLinkRoutingRule`<sup>Required</sup> <a name="opGetLinkRoutingRule" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.opGetLinkRoutingRule"></a>

```typescript
public readonly opGetLinkRoutingRule: string[];
```

- *Type:* string[]

IAM actions required for the GetLinkRoutingRule API call.

---

##### `opGetOutboundExternalLink`<sup>Required</sup> <a name="opGetOutboundExternalLink" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.opGetOutboundExternalLink"></a>

```typescript
public readonly opGetOutboundExternalLink: string[];
```

- *Type:* string[]

IAM actions required for the GetOutboundExternalLink API call.

---

##### `opGetRequesterGateway`<sup>Required</sup> <a name="opGetRequesterGateway" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.opGetRequesterGateway"></a>

```typescript
public readonly opGetRequesterGateway: string[];
```

- *Type:* string[]

IAM actions required for the GetRequesterGateway API call.

---

##### `opGetResponderGateway`<sup>Required</sup> <a name="opGetResponderGateway" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.opGetResponderGateway"></a>

```typescript
public readonly opGetResponderGateway: string[];
```

- *Type:* string[]

IAM actions required for the GetResponderGateway API call.

---

##### `RejectLink`<sup>Required</sup> <a name="RejectLink" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.RejectLink"></a>

```typescript
public readonly RejectLink: string[];
```

- *Type:* string[]

IAM actions required for the RejectLink API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateLink`<sup>Required</sup> <a name="UpdateLink" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.UpdateLink"></a>

```typescript
public readonly UpdateLink: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLink API call.

---

##### `UpdateLinkModuleFlow`<sup>Required</sup> <a name="UpdateLinkModuleFlow" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.UpdateLinkModuleFlow"></a>

```typescript
public readonly UpdateLinkModuleFlow: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLinkModuleFlow API call.

---

##### `UpdateLinkRoutingRule`<sup>Required</sup> <a name="UpdateLinkRoutingRule" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.UpdateLinkRoutingRule"></a>

```typescript
public readonly UpdateLinkRoutingRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLinkRoutingRule API call.

---

##### `UpdateRequesterGateway`<sup>Required</sup> <a name="UpdateRequesterGateway" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.UpdateRequesterGateway"></a>

```typescript
public readonly UpdateRequesterGateway: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRequesterGateway API call.

---

##### `UpdateResponderGateway`<sup>Required</sup> <a name="UpdateResponderGateway" id="@cdk_utils/iam.rtbfabric.RtbfabricOperations.property.UpdateResponderGateway"></a>

```typescript
public readonly UpdateResponderGateway: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResponderGateway API call.

---

### RtbfabricResources <a name="RtbfabricResources" id="@cdk_utils/iam.rtbfabric.RtbfabricResources"></a>

ARN builders, validators, and parsers for rtbfabric resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.Initializer"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

new rtbfabric.RtbfabricResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResources.inboundExternalLink">inboundExternalLink</a></code> | Builds an ARN for the InboundExternalLink resource. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResources.isValidInboundExternalLinkArn">isValidInboundExternalLinkArn</a></code> | Validates whether a string is a valid ARN for the InboundExternalLink resource. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResources.isValidLinkArn">isValidLinkArn</a></code> | Validates whether a string is a valid ARN for the Link resource. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResources.isValidLinkRoutingRuleArn">isValidLinkRoutingRuleArn</a></code> | Validates whether a string is a valid ARN for the LinkRoutingRule resource. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResources.isValidOutboundExternalLinkArn">isValidOutboundExternalLinkArn</a></code> | Validates whether a string is a valid ARN for the OutboundExternalLink resource. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResources.isValidRequesterGatewayArn">isValidRequesterGatewayArn</a></code> | Validates whether a string is a valid ARN for the RequesterGateway resource. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResources.isValidResponderGatewayArn">isValidResponderGatewayArn</a></code> | Validates whether a string is a valid ARN for the ResponderGateway resource. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResources.link">link</a></code> | Builds an ARN for the Link resource. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResources.linkRoutingRule">linkRoutingRule</a></code> | Builds an ARN for the LinkRoutingRule resource. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResources.outboundExternalLink">outboundExternalLink</a></code> | Builds an ARN for the OutboundExternalLink resource. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResources.parseInboundExternalLinkArn">parseInboundExternalLinkArn</a></code> | Parses a InboundExternalLink ARN into its components. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResources.parseLinkArn">parseLinkArn</a></code> | Parses a Link ARN into its components. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResources.parseLinkRoutingRuleArn">parseLinkRoutingRuleArn</a></code> | Parses a LinkRoutingRule ARN into its components. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResources.parseOutboundExternalLinkArn">parseOutboundExternalLinkArn</a></code> | Parses a OutboundExternalLink ARN into its components. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResources.parseRequesterGatewayArn">parseRequesterGatewayArn</a></code> | Parses a RequesterGateway ARN into its components. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResources.parseResponderGatewayArn">parseResponderGatewayArn</a></code> | Parses a ResponderGateway ARN into its components. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResources.requesterGateway">requesterGateway</a></code> | Builds an ARN for the RequesterGateway resource. |
| <code><a href="#@cdk_utils/iam.rtbfabric.RtbfabricResources.responderGateway">responderGateway</a></code> | Builds an ARN for the ResponderGateway resource. |

---

##### `inboundExternalLink` <a name="inboundExternalLink" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.inboundExternalLink"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricResources.inboundExternalLink(props: RtbfabricInboundExternalLinkArnProps)
```

Builds an ARN for the InboundExternalLink resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.inboundExternalLink.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rtbfabric.RtbfabricInboundExternalLinkArnProps">RtbfabricInboundExternalLinkArnProps</a>

---

##### `isValidInboundExternalLinkArn` <a name="isValidInboundExternalLinkArn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.isValidInboundExternalLinkArn"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricResources.isValidInboundExternalLinkArn(arn: string)
```

Validates whether a string is a valid ARN for the InboundExternalLink resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.isValidInboundExternalLinkArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLinkArn` <a name="isValidLinkArn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.isValidLinkArn"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricResources.isValidLinkArn(arn: string)
```

Validates whether a string is a valid ARN for the Link resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.isValidLinkArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLinkRoutingRuleArn` <a name="isValidLinkRoutingRuleArn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.isValidLinkRoutingRuleArn"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricResources.isValidLinkRoutingRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the LinkRoutingRule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.isValidLinkRoutingRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOutboundExternalLinkArn` <a name="isValidOutboundExternalLinkArn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.isValidOutboundExternalLinkArn"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricResources.isValidOutboundExternalLinkArn(arn: string)
```

Validates whether a string is a valid ARN for the OutboundExternalLink resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.isValidOutboundExternalLinkArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRequesterGatewayArn` <a name="isValidRequesterGatewayArn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.isValidRequesterGatewayArn"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricResources.isValidRequesterGatewayArn(arn: string)
```

Validates whether a string is a valid ARN for the RequesterGateway resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.isValidRequesterGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResponderGatewayArn` <a name="isValidResponderGatewayArn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.isValidResponderGatewayArn"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricResources.isValidResponderGatewayArn(arn: string)
```

Validates whether a string is a valid ARN for the ResponderGateway resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.isValidResponderGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `link` <a name="link" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.link"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricResources.link(props: RtbfabricLinkArnProps)
```

Builds an ARN for the Link resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.link.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkArnProps">RtbfabricLinkArnProps</a>

---

##### `linkRoutingRule` <a name="linkRoutingRule" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.linkRoutingRule"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricResources.linkRoutingRule(props: RtbfabricLinkRoutingRuleArnProps)
```

Builds an ARN for the LinkRoutingRule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.linkRoutingRule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rtbfabric.RtbfabricLinkRoutingRuleArnProps">RtbfabricLinkRoutingRuleArnProps</a>

---

##### `outboundExternalLink` <a name="outboundExternalLink" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.outboundExternalLink"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricResources.outboundExternalLink(props: RtbfabricOutboundExternalLinkArnProps)
```

Builds an ARN for the OutboundExternalLink resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.outboundExternalLink.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rtbfabric.RtbfabricOutboundExternalLinkArnProps">RtbfabricOutboundExternalLinkArnProps</a>

---

##### `parseInboundExternalLinkArn` <a name="parseInboundExternalLinkArn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.parseInboundExternalLinkArn"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricResources.parseInboundExternalLinkArn(arn: string)
```

Parses a InboundExternalLink ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.parseInboundExternalLinkArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLinkArn` <a name="parseLinkArn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.parseLinkArn"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricResources.parseLinkArn(arn: string)
```

Parses a Link ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.parseLinkArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLinkRoutingRuleArn` <a name="parseLinkRoutingRuleArn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.parseLinkRoutingRuleArn"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricResources.parseLinkRoutingRuleArn(arn: string)
```

Parses a LinkRoutingRule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.parseLinkRoutingRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOutboundExternalLinkArn` <a name="parseOutboundExternalLinkArn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.parseOutboundExternalLinkArn"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricResources.parseOutboundExternalLinkArn(arn: string)
```

Parses a OutboundExternalLink ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.parseOutboundExternalLinkArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRequesterGatewayArn` <a name="parseRequesterGatewayArn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.parseRequesterGatewayArn"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricResources.parseRequesterGatewayArn(arn: string)
```

Parses a RequesterGateway ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.parseRequesterGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResponderGatewayArn` <a name="parseResponderGatewayArn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.parseResponderGatewayArn"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricResources.parseResponderGatewayArn(arn: string)
```

Parses a ResponderGateway ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.parseResponderGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `requesterGateway` <a name="requesterGateway" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.requesterGateway"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricResources.requesterGateway(props: RtbfabricRequesterGatewayArnProps)
```

Builds an ARN for the RequesterGateway resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.requesterGateway.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rtbfabric.RtbfabricRequesterGatewayArnProps">RtbfabricRequesterGatewayArnProps</a>

---

##### `responderGateway` <a name="responderGateway" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.responderGateway"></a>

```typescript
import { rtbfabric } from '@cdk_utils/iam'

rtbfabric.RtbfabricResources.responderGateway(props: RtbfabricResponderGatewayArnProps)
```

Builds an ARN for the ResponderGateway resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rtbfabric.RtbfabricResources.responderGateway.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rtbfabric.RtbfabricResponderGatewayArnProps">RtbfabricResponderGatewayArnProps</a>

---




