# `mediaconnect` Submodule <a name="`mediaconnect` Submodule" id="@cdk_utils/iam.mediaconnect"></a>


## Structs <a name="Structs" id="Structs"></a>

### MediaConnectBridgeArnComponents <a name="MediaConnectBridgeArnComponents" id="@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnComponents"></a>

Parsed components of a Bridge ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnComponents.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectBridgeArnComponents: mediaconnect.MediaConnectBridgeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnComponents.property.bridgeId">bridgeId</a></code> | <code>string</code> | The BridgeId component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnComponents.property.bridgeName">bridgeName</a></code> | <code>string</code> | The BridgeName component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `bridgeId`<sup>Required</sup> <a name="bridgeId" id="@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnComponents.property.bridgeId"></a>

```typescript
public readonly bridgeId: string;
```

- *Type:* string

The BridgeId component.

---

##### `bridgeName`<sup>Required</sup> <a name="bridgeName" id="@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnComponents.property.bridgeName"></a>

```typescript
public readonly bridgeName: string;
```

- *Type:* string

The BridgeName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaConnectBridgeArnProps <a name="MediaConnectBridgeArnProps" id="@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnProps"></a>

Properties for building a Bridge ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnProps.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectBridgeArnProps: mediaconnect.MediaConnectBridgeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnProps.property.bridgeId">bridgeId</a></code> | <code>string</code> | The BridgeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnProps.property.bridgeName">bridgeName</a></code> | <code>string</code> | The BridgeName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `bridgeId`<sup>Required</sup> <a name="bridgeId" id="@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnProps.property.bridgeId"></a>

```typescript
public readonly bridgeId: string;
```

- *Type:* string

The BridgeId component of the ARN.

---

##### `bridgeName`<sup>Required</sup> <a name="bridgeName" id="@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnProps.property.bridgeName"></a>

```typescript
public readonly bridgeName: string;
```

- *Type:* string

The BridgeName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaConnectEntitlementArnComponents <a name="MediaConnectEntitlementArnComponents" id="@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnComponents"></a>

Parsed components of a Entitlement ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnComponents.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectEntitlementArnComponents: mediaconnect.MediaConnectEntitlementArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnComponents.property.entitlementName">entitlementName</a></code> | <code>string</code> | The EntitlementName component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnComponents.property.flowId">flowId</a></code> | <code>string</code> | The FlowId component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `entitlementName`<sup>Required</sup> <a name="entitlementName" id="@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnComponents.property.entitlementName"></a>

```typescript
public readonly entitlementName: string;
```

- *Type:* string

The EntitlementName component.

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnComponents.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

The FlowId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaConnectEntitlementArnProps <a name="MediaConnectEntitlementArnProps" id="@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnProps"></a>

Properties for building a Entitlement ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnProps.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectEntitlementArnProps: mediaconnect.MediaConnectEntitlementArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnProps.property.entitlementName">entitlementName</a></code> | <code>string</code> | The EntitlementName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnProps.property.flowId">flowId</a></code> | <code>string</code> | The FlowId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `entitlementName`<sup>Required</sup> <a name="entitlementName" id="@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnProps.property.entitlementName"></a>

```typescript
public readonly entitlementName: string;
```

- *Type:* string

The EntitlementName component of the ARN.

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnProps.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

The FlowId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaConnectFlowArnComponents <a name="MediaConnectFlowArnComponents" id="@cdk_utils/iam.mediaconnect.MediaConnectFlowArnComponents"></a>

Parsed components of a Flow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectFlowArnComponents.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectFlowArnComponents: mediaconnect.MediaConnectFlowArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectFlowArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectFlowArnComponents.property.flowId">flowId</a></code> | <code>string</code> | The FlowId component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectFlowArnComponents.property.flowName">flowName</a></code> | <code>string</code> | The FlowName component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectFlowArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectFlowArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectFlowArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdk_utils/iam.mediaconnect.MediaConnectFlowArnComponents.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

The FlowId component.

---

##### `flowName`<sup>Required</sup> <a name="flowName" id="@cdk_utils/iam.mediaconnect.MediaConnectFlowArnComponents.property.flowName"></a>

```typescript
public readonly flowName: string;
```

- *Type:* string

The FlowName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectFlowArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectFlowArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaConnectFlowArnProps <a name="MediaConnectFlowArnProps" id="@cdk_utils/iam.mediaconnect.MediaConnectFlowArnProps"></a>

Properties for building a Flow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectFlowArnProps.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectFlowArnProps: mediaconnect.MediaConnectFlowArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectFlowArnProps.property.flowId">flowId</a></code> | <code>string</code> | The FlowId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectFlowArnProps.property.flowName">flowName</a></code> | <code>string</code> | The FlowName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectFlowArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectFlowArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectFlowArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdk_utils/iam.mediaconnect.MediaConnectFlowArnProps.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

The FlowId component of the ARN.

---

##### `flowName`<sup>Required</sup> <a name="flowName" id="@cdk_utils/iam.mediaconnect.MediaConnectFlowArnProps.property.flowName"></a>

```typescript
public readonly flowName: string;
```

- *Type:* string

The FlowName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectFlowArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectFlowArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectFlowArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaConnectGatewayArnComponents <a name="MediaConnectGatewayArnComponents" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnComponents"></a>

Parsed components of a Gateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnComponents.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectGatewayArnComponents: mediaconnect.MediaConnectGatewayArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnComponents.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnComponents.property.gatewayName">gatewayName</a></code> | <code>string</code> | The GatewayName component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnComponents.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component.

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnComponents.property.gatewayName"></a>

```typescript
public readonly gatewayName: string;
```

- *Type:* string

The GatewayName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaConnectGatewayArnProps <a name="MediaConnectGatewayArnProps" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnProps"></a>

Properties for building a Gateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnProps.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectGatewayArnProps: mediaconnect.MediaConnectGatewayArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnProps.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnProps.property.gatewayName">gatewayName</a></code> | <code>string</code> | The GatewayName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnProps.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component of the ARN.

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnProps.property.gatewayName"></a>

```typescript
public readonly gatewayName: string;
```

- *Type:* string

The GatewayName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaConnectGatewayInstanceArnComponents <a name="MediaConnectGatewayInstanceArnComponents" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnComponents"></a>

Parsed components of a GatewayInstance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnComponents.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectGatewayInstanceArnComponents: mediaconnect.MediaConnectGatewayInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnComponents.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnComponents.property.gatewayName">gatewayName</a></code> | <code>string</code> | The GatewayName component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnComponents.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component.

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnComponents.property.gatewayName"></a>

```typescript
public readonly gatewayName: string;
```

- *Type:* string

The GatewayName component.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaConnectGatewayInstanceArnProps <a name="MediaConnectGatewayInstanceArnProps" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnProps"></a>

Properties for building a GatewayInstance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnProps.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectGatewayInstanceArnProps: mediaconnect.MediaConnectGatewayInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnProps.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnProps.property.gatewayName">gatewayName</a></code> | <code>string</code> | The GatewayName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnProps.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component of the ARN.

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnProps.property.gatewayName"></a>

```typescript
public readonly gatewayName: string;
```

- *Type:* string

The GatewayName component of the ARN.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaConnectMediaStreamArnComponents <a name="MediaConnectMediaStreamArnComponents" id="@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnComponents"></a>

Parsed components of a MediaStream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnComponents.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectMediaStreamArnComponents: mediaconnect.MediaConnectMediaStreamArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnComponents.property.flowId">flowId</a></code> | <code>string</code> | The FlowId component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnComponents.property.flowName">flowName</a></code> | <code>string</code> | The FlowName component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnComponents.property.mediaStreamName">mediaStreamName</a></code> | <code>string</code> | The MediaStreamName component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnComponents.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

The FlowId component.

---

##### `flowName`<sup>Required</sup> <a name="flowName" id="@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnComponents.property.flowName"></a>

```typescript
public readonly flowName: string;
```

- *Type:* string

The FlowName component.

---

##### `mediaStreamName`<sup>Required</sup> <a name="mediaStreamName" id="@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnComponents.property.mediaStreamName"></a>

```typescript
public readonly mediaStreamName: string;
```

- *Type:* string

The MediaStreamName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaConnectMediaStreamArnProps <a name="MediaConnectMediaStreamArnProps" id="@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnProps"></a>

Properties for building a MediaStream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnProps.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectMediaStreamArnProps: mediaconnect.MediaConnectMediaStreamArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnProps.property.flowId">flowId</a></code> | <code>string</code> | The FlowId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnProps.property.flowName">flowName</a></code> | <code>string</code> | The FlowName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnProps.property.mediaStreamName">mediaStreamName</a></code> | <code>string</code> | The MediaStreamName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnProps.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

The FlowId component of the ARN.

---

##### `flowName`<sup>Required</sup> <a name="flowName" id="@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnProps.property.flowName"></a>

```typescript
public readonly flowName: string;
```

- *Type:* string

The FlowName component of the ARN.

---

##### `mediaStreamName`<sup>Required</sup> <a name="mediaStreamName" id="@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnProps.property.mediaStreamName"></a>

```typescript
public readonly mediaStreamName: string;
```

- *Type:* string

The MediaStreamName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaConnectOfferingArnComponents <a name="MediaConnectOfferingArnComponents" id="@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnComponents"></a>

Parsed components of a Offering ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnComponents.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectOfferingArnComponents: mediaconnect.MediaConnectOfferingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnComponents.property.offeringId">offeringId</a></code> | <code>string</code> | The OfferingId component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `offeringId`<sup>Required</sup> <a name="offeringId" id="@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnComponents.property.offeringId"></a>

```typescript
public readonly offeringId: string;
```

- *Type:* string

The OfferingId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaConnectOfferingArnProps <a name="MediaConnectOfferingArnProps" id="@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnProps"></a>

Properties for building a Offering ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnProps.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectOfferingArnProps: mediaconnect.MediaConnectOfferingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnProps.property.offeringId">offeringId</a></code> | <code>string</code> | The OfferingId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `offeringId`<sup>Required</sup> <a name="offeringId" id="@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnProps.property.offeringId"></a>

```typescript
public readonly offeringId: string;
```

- *Type:* string

The OfferingId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaConnectOutputArnComponents <a name="MediaConnectOutputArnComponents" id="@cdk_utils/iam.mediaconnect.MediaConnectOutputArnComponents"></a>

Parsed components of a Output ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectOutputArnComponents.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectOutputArnComponents: mediaconnect.MediaConnectOutputArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOutputArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOutputArnComponents.property.outputId">outputId</a></code> | <code>string</code> | The OutputId component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOutputArnComponents.property.outputName">outputName</a></code> | <code>string</code> | The OutputName component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOutputArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOutputArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectOutputArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `outputId`<sup>Required</sup> <a name="outputId" id="@cdk_utils/iam.mediaconnect.MediaConnectOutputArnComponents.property.outputId"></a>

```typescript
public readonly outputId: string;
```

- *Type:* string

The OutputId component.

---

##### `outputName`<sup>Required</sup> <a name="outputName" id="@cdk_utils/iam.mediaconnect.MediaConnectOutputArnComponents.property.outputName"></a>

```typescript
public readonly outputName: string;
```

- *Type:* string

The OutputName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectOutputArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectOutputArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaConnectOutputArnProps <a name="MediaConnectOutputArnProps" id="@cdk_utils/iam.mediaconnect.MediaConnectOutputArnProps"></a>

Properties for building a Output ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectOutputArnProps.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectOutputArnProps: mediaconnect.MediaConnectOutputArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOutputArnProps.property.outputId">outputId</a></code> | <code>string</code> | The OutputId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOutputArnProps.property.outputName">outputName</a></code> | <code>string</code> | The OutputName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOutputArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOutputArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOutputArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `outputId`<sup>Required</sup> <a name="outputId" id="@cdk_utils/iam.mediaconnect.MediaConnectOutputArnProps.property.outputId"></a>

```typescript
public readonly outputId: string;
```

- *Type:* string

The OutputId component of the ARN.

---

##### `outputName`<sup>Required</sup> <a name="outputName" id="@cdk_utils/iam.mediaconnect.MediaConnectOutputArnProps.property.outputName"></a>

```typescript
public readonly outputName: string;
```

- *Type:* string

The OutputName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectOutputArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectOutputArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectOutputArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaConnectReservationArnComponents <a name="MediaConnectReservationArnComponents" id="@cdk_utils/iam.mediaconnect.MediaConnectReservationArnComponents"></a>

Parsed components of a Reservation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectReservationArnComponents.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectReservationArnComponents: mediaconnect.MediaConnectReservationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectReservationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectReservationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectReservationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectReservationArnComponents.property.reservationId">reservationId</a></code> | <code>string</code> | The ReservationId component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectReservationArnComponents.property.reservationName">reservationName</a></code> | <code>string</code> | The ReservationName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectReservationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectReservationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectReservationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `reservationId`<sup>Required</sup> <a name="reservationId" id="@cdk_utils/iam.mediaconnect.MediaConnectReservationArnComponents.property.reservationId"></a>

```typescript
public readonly reservationId: string;
```

- *Type:* string

The ReservationId component.

---

##### `reservationName`<sup>Required</sup> <a name="reservationName" id="@cdk_utils/iam.mediaconnect.MediaConnectReservationArnComponents.property.reservationName"></a>

```typescript
public readonly reservationName: string;
```

- *Type:* string

The ReservationName component.

---

### MediaConnectReservationArnProps <a name="MediaConnectReservationArnProps" id="@cdk_utils/iam.mediaconnect.MediaConnectReservationArnProps"></a>

Properties for building a Reservation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectReservationArnProps.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectReservationArnProps: mediaconnect.MediaConnectReservationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectReservationArnProps.property.reservationId">reservationId</a></code> | <code>string</code> | The ReservationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectReservationArnProps.property.reservationName">reservationName</a></code> | <code>string</code> | The ReservationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectReservationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectReservationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectReservationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `reservationId`<sup>Required</sup> <a name="reservationId" id="@cdk_utils/iam.mediaconnect.MediaConnectReservationArnProps.property.reservationId"></a>

```typescript
public readonly reservationId: string;
```

- *Type:* string

The ReservationId component of the ARN.

---

##### `reservationName`<sup>Required</sup> <a name="reservationName" id="@cdk_utils/iam.mediaconnect.MediaConnectReservationArnProps.property.reservationName"></a>

```typescript
public readonly reservationName: string;
```

- *Type:* string

The ReservationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectReservationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectReservationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectReservationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaConnectRouterInputArnComponents <a name="MediaConnectRouterInputArnComponents" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnComponents"></a>

Parsed components of a RouterInput ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnComponents.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectRouterInputArnComponents: mediaconnect.MediaConnectRouterInputArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnComponents.property.routerInputId">routerInputId</a></code> | <code>string</code> | The RouterInputId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `routerInputId`<sup>Required</sup> <a name="routerInputId" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnComponents.property.routerInputId"></a>

```typescript
public readonly routerInputId: string;
```

- *Type:* string

The RouterInputId component.

---

### MediaConnectRouterInputArnProps <a name="MediaConnectRouterInputArnProps" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnProps"></a>

Properties for building a RouterInput ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnProps.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectRouterInputArnProps: mediaconnect.MediaConnectRouterInputArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnProps.property.routerInputId">routerInputId</a></code> | <code>string</code> | The RouterInputId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `routerInputId`<sup>Required</sup> <a name="routerInputId" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnProps.property.routerInputId"></a>

```typescript
public readonly routerInputId: string;
```

- *Type:* string

The RouterInputId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaConnectRouterNetworkInterfaceArnComponents <a name="MediaConnectRouterNetworkInterfaceArnComponents" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnComponents"></a>

Parsed components of a RouterNetworkInterface ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnComponents.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectRouterNetworkInterfaceArnComponents: mediaconnect.MediaConnectRouterNetworkInterfaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnComponents.property.routerNetworkInterfaceId">routerNetworkInterfaceId</a></code> | <code>string</code> | The RouterNetworkInterfaceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `routerNetworkInterfaceId`<sup>Required</sup> <a name="routerNetworkInterfaceId" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnComponents.property.routerNetworkInterfaceId"></a>

```typescript
public readonly routerNetworkInterfaceId: string;
```

- *Type:* string

The RouterNetworkInterfaceId component.

---

### MediaConnectRouterNetworkInterfaceArnProps <a name="MediaConnectRouterNetworkInterfaceArnProps" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnProps"></a>

Properties for building a RouterNetworkInterface ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnProps.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectRouterNetworkInterfaceArnProps: mediaconnect.MediaConnectRouterNetworkInterfaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnProps.property.routerNetworkInterfaceId">routerNetworkInterfaceId</a></code> | <code>string</code> | The RouterNetworkInterfaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `routerNetworkInterfaceId`<sup>Required</sup> <a name="routerNetworkInterfaceId" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnProps.property.routerNetworkInterfaceId"></a>

```typescript
public readonly routerNetworkInterfaceId: string;
```

- *Type:* string

The RouterNetworkInterfaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaConnectRouterOutputArnComponents <a name="MediaConnectRouterOutputArnComponents" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnComponents"></a>

Parsed components of a RouterOutput ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnComponents.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectRouterOutputArnComponents: mediaconnect.MediaConnectRouterOutputArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnComponents.property.routerOutputId">routerOutputId</a></code> | <code>string</code> | The RouterOutputId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `routerOutputId`<sup>Required</sup> <a name="routerOutputId" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnComponents.property.routerOutputId"></a>

```typescript
public readonly routerOutputId: string;
```

- *Type:* string

The RouterOutputId component.

---

### MediaConnectRouterOutputArnProps <a name="MediaConnectRouterOutputArnProps" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnProps"></a>

Properties for building a RouterOutput ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnProps.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectRouterOutputArnProps: mediaconnect.MediaConnectRouterOutputArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnProps.property.routerOutputId">routerOutputId</a></code> | <code>string</code> | The RouterOutputId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `routerOutputId`<sup>Required</sup> <a name="routerOutputId" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnProps.property.routerOutputId"></a>

```typescript
public readonly routerOutputId: string;
```

- *Type:* string

The RouterOutputId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaConnectSourceArnComponents <a name="MediaConnectSourceArnComponents" id="@cdk_utils/iam.mediaconnect.MediaConnectSourceArnComponents"></a>

Parsed components of a Source ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectSourceArnComponents.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectSourceArnComponents: mediaconnect.MediaConnectSourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectSourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectSourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectSourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectSourceArnComponents.property.sourceId">sourceId</a></code> | <code>string</code> | The SourceId component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectSourceArnComponents.property.sourceName">sourceName</a></code> | <code>string</code> | The SourceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectSourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectSourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectSourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdk_utils/iam.mediaconnect.MediaConnectSourceArnComponents.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

The SourceId component.

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdk_utils/iam.mediaconnect.MediaConnectSourceArnComponents.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

The SourceName component.

---

### MediaConnectSourceArnProps <a name="MediaConnectSourceArnProps" id="@cdk_utils/iam.mediaconnect.MediaConnectSourceArnProps"></a>

Properties for building a Source ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectSourceArnProps.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectSourceArnProps: mediaconnect.MediaConnectSourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectSourceArnProps.property.sourceId">sourceId</a></code> | <code>string</code> | The SourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectSourceArnProps.property.sourceName">sourceName</a></code> | <code>string</code> | The SourceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectSourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectSourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectSourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdk_utils/iam.mediaconnect.MediaConnectSourceArnProps.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

The SourceId component of the ARN.

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdk_utils/iam.mediaconnect.MediaConnectSourceArnProps.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

The SourceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectSourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectSourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectSourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaConnectVPCInterfaceArnComponents <a name="MediaConnectVPCInterfaceArnComponents" id="@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnComponents"></a>

Parsed components of a VpcInterface ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnComponents.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectVPCInterfaceArnComponents: mediaconnect.MediaConnectVPCInterfaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnComponents.property.flowId">flowId</a></code> | <code>string</code> | The FlowId component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnComponents.property.flowName">flowName</a></code> | <code>string</code> | The FlowName component. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnComponents.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>string</code> | The VpcInterfaceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnComponents.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

The FlowId component.

---

##### `flowName`<sup>Required</sup> <a name="flowName" id="@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnComponents.property.flowName"></a>

```typescript
public readonly flowName: string;
```

- *Type:* string

The FlowName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="vpcInterfaceName" id="@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnComponents.property.vpcInterfaceName"></a>

```typescript
public readonly vpcInterfaceName: string;
```

- *Type:* string

The VpcInterfaceName component.

---

### MediaConnectVPCInterfaceArnProps <a name="MediaConnectVPCInterfaceArnProps" id="@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnProps"></a>

Properties for building a VpcInterface ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnProps.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

const mediaConnectVPCInterfaceArnProps: mediaconnect.MediaConnectVPCInterfaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnProps.property.flowId">flowId</a></code> | <code>string</code> | The FlowId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnProps.property.flowName">flowName</a></code> | <code>string</code> | The FlowName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnProps.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>string</code> | The VpcInterfaceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnProps.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

The FlowId component of the ARN.

---

##### `flowName`<sup>Required</sup> <a name="flowName" id="@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnProps.property.flowName"></a>

```typescript
public readonly flowName: string;
```

- *Type:* string

The FlowName component of the ARN.

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="vpcInterfaceName" id="@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnProps.property.vpcInterfaceName"></a>

```typescript
public readonly vpcInterfaceName: string;
```

- *Type:* string

The VpcInterfaceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### MediaConnectActions <a name="MediaConnectActions" id="@cdk_utils/iam.mediaconnect.MediaConnectActions"></a>

IAM action constants for the mediaconnect service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

new mediaconnect.MediaConnectActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.actionGetRouterInput">actionGetRouterInput</a></code> | <code>string</code> | [Read] mediaconnect:GetRouterInput. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.actionGetRouterInputSourceMetadata">actionGetRouterInputSourceMetadata</a></code> | <code>string</code> | [Read] mediaconnect:GetRouterInputSourceMetadata. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.actionGetRouterInputThumbnail">actionGetRouterInputThumbnail</a></code> | <code>string</code> | [Read] mediaconnect:GetRouterInputThumbnail. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.actionGetRouterNetworkInterface">actionGetRouterNetworkInterface</a></code> | <code>string</code> | [Read] mediaconnect:GetRouterNetworkInterface. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.actionGetRouterOutput">actionGetRouterOutput</a></code> | <code>string</code> | [Read] mediaconnect:GetRouterOutput. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AddBridgeOutputs">AddBridgeOutputs</a></code> | <code>string</code> | [Write] mediaconnect:AddBridgeOutputs. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AddBridgeSources">AddBridgeSources</a></code> | <code>string</code> | [Write] mediaconnect:AddBridgeSources. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AddFlowMediaStreams">AddFlowMediaStreams</a></code> | <code>string</code> | [Write] mediaconnect:AddFlowMediaStreams. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AddFlowOutputs">AddFlowOutputs</a></code> | <code>string</code> | [Write] mediaconnect:AddFlowOutputs. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AddFlowSources">AddFlowSources</a></code> | <code>string</code> | [Write] mediaconnect:AddFlowSources. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AddFlowVpcInterfaces">AddFlowVpcInterfaces</a></code> | <code>string</code> | [Write] mediaconnect:AddFlowVpcInterfaces. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AssociateRouterNetworkInterface">AssociateRouterNetworkInterface</a></code> | <code>string</code> | [Write] mediaconnect:AssociateRouterNetworkInterface. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.CreateBridge">CreateBridge</a></code> | <code>string</code> | [Write] mediaconnect:CreateBridge. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.CreateFlow">CreateFlow</a></code> | <code>string</code> | [Write] mediaconnect:CreateFlow. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.CreateGateway">CreateGateway</a></code> | <code>string</code> | [Write] mediaconnect:CreateGateway. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.CreateRouterInput">CreateRouterInput</a></code> | <code>string</code> | [Write] mediaconnect:CreateRouterInput. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.CreateRouterNetworkInterface">CreateRouterNetworkInterface</a></code> | <code>string</code> | [Write] mediaconnect:CreateRouterNetworkInterface. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.CreateRouterOutput">CreateRouterOutput</a></code> | <code>string</code> | [Write] mediaconnect:CreateRouterOutput. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DeleteBridge">DeleteBridge</a></code> | <code>string</code> | [Write] mediaconnect:DeleteBridge. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DeleteFlow">DeleteFlow</a></code> | <code>string</code> | [Write] mediaconnect:DeleteFlow. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DeleteGateway">DeleteGateway</a></code> | <code>string</code> | [Write] mediaconnect:DeleteGateway. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DeleteRouterInput">DeleteRouterInput</a></code> | <code>string</code> | [Write] mediaconnect:DeleteRouterInput. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DeleteRouterNetworkInterface">DeleteRouterNetworkInterface</a></code> | <code>string</code> | [Write] mediaconnect:DeleteRouterNetworkInterface. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DeleteRouterOutput">DeleteRouterOutput</a></code> | <code>string</code> | [Write] mediaconnect:DeleteRouterOutput. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DeregisterGatewayInstance">DeregisterGatewayInstance</a></code> | <code>string</code> | [Write] mediaconnect:DeregisterGatewayInstance. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DescribeBridge">DescribeBridge</a></code> | <code>string</code> | [Read] mediaconnect:DescribeBridge. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DescribeFlow">DescribeFlow</a></code> | <code>string</code> | [Read] mediaconnect:DescribeFlow. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DescribeFlowSourceMetadata">DescribeFlowSourceMetadata</a></code> | <code>string</code> | [Read] mediaconnect:DescribeFlowSourceMetadata. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DescribeFlowSourceThumbnail">DescribeFlowSourceThumbnail</a></code> | <code>string</code> | [Read] mediaconnect:DescribeFlowSourceThumbnail. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DescribeGateway">DescribeGateway</a></code> | <code>string</code> | [Read] mediaconnect:DescribeGateway. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DescribeGatewayInstance">DescribeGatewayInstance</a></code> | <code>string</code> | [Read] mediaconnect:DescribeGatewayInstance. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DescribeOffering">DescribeOffering</a></code> | <code>string</code> | [Read] mediaconnect:DescribeOffering. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DescribeReservation">DescribeReservation</a></code> | <code>string</code> | [Read] mediaconnect:DescribeReservation. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DiscoverGatewayPollEndpoint">DiscoverGatewayPollEndpoint</a></code> | <code>string</code> | [Read] mediaconnect:DiscoverGatewayPollEndpoint. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.GrantFlowEntitlements">GrantFlowEntitlements</a></code> | <code>string</code> | [Write] mediaconnect:GrantFlowEntitlements. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListBridges">ListBridges</a></code> | <code>string</code> | [List] mediaconnect:ListBridges. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListEntitlements">ListEntitlements</a></code> | <code>string</code> | [List] mediaconnect:ListEntitlements. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListFlows">ListFlows</a></code> | <code>string</code> | [List] mediaconnect:ListFlows. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListGatewayInstances">ListGatewayInstances</a></code> | <code>string</code> | [List] mediaconnect:ListGatewayInstances. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListGateways">ListGateways</a></code> | <code>string</code> | [List] mediaconnect:ListGateways. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListOfferings">ListOfferings</a></code> | <code>string</code> | [List] mediaconnect:ListOfferings. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListReservations">ListReservations</a></code> | <code>string</code> | [List] mediaconnect:ListReservations. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListRouterInputs">ListRouterInputs</a></code> | <code>string</code> | [List] mediaconnect:ListRouterInputs. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListRouterNetworkInterfaces">ListRouterNetworkInterfaces</a></code> | <code>string</code> | [List] mediaconnect:ListRouterNetworkInterfaces. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListRouterOutputs">ListRouterOutputs</a></code> | <code>string</code> | [List] mediaconnect:ListRouterOutputs. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] mediaconnect:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.PollGateway">PollGateway</a></code> | <code>string</code> | [Write] mediaconnect:PollGateway. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.PurchaseOffering">PurchaseOffering</a></code> | <code>string</code> | [Write] mediaconnect:PurchaseOffering. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.RemoveBridgeOutput">RemoveBridgeOutput</a></code> | <code>string</code> | [Write] mediaconnect:RemoveBridgeOutput. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.RemoveBridgeSource">RemoveBridgeSource</a></code> | <code>string</code> | [Write] mediaconnect:RemoveBridgeSource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.RemoveFlowMediaStream">RemoveFlowMediaStream</a></code> | <code>string</code> | [Write] mediaconnect:RemoveFlowMediaStream. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.RemoveFlowOutput">RemoveFlowOutput</a></code> | <code>string</code> | [Write] mediaconnect:RemoveFlowOutput. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.RemoveFlowSource">RemoveFlowSource</a></code> | <code>string</code> | [Write] mediaconnect:RemoveFlowSource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.RemoveFlowVpcInterface">RemoveFlowVpcInterface</a></code> | <code>string</code> | [Write] mediaconnect:RemoveFlowVpcInterface. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.RestartRouterInput">RestartRouterInput</a></code> | <code>string</code> | [Write] mediaconnect:RestartRouterInput. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.RestartRouterOutput">RestartRouterOutput</a></code> | <code>string</code> | [Write] mediaconnect:RestartRouterOutput. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.RevokeFlowEntitlement">RevokeFlowEntitlement</a></code> | <code>string</code> | [Write] mediaconnect:RevokeFlowEntitlement. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.StartFlow">StartFlow</a></code> | <code>string</code> | [Write] mediaconnect:StartFlow. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.StartRouterInput">StartRouterInput</a></code> | <code>string</code> | [Write] mediaconnect:StartRouterInput. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.StartRouterOutput">StartRouterOutput</a></code> | <code>string</code> | [Write] mediaconnect:StartRouterOutput. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.StopFlow">StopFlow</a></code> | <code>string</code> | [Write] mediaconnect:StopFlow. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.StopRouterInput">StopRouterInput</a></code> | <code>string</code> | [Write] mediaconnect:StopRouterInput. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.StopRouterOutput">StopRouterOutput</a></code> | <code>string</code> | [Write] mediaconnect:StopRouterOutput. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.SubmitGatewayStateChange">SubmitGatewayStateChange</a></code> | <code>string</code> | [Write] mediaconnect:SubmitGatewayStateChange. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] mediaconnect:TagResource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.TakeRouterInput">TakeRouterInput</a></code> | <code>string</code> | [Write] mediaconnect:TakeRouterInput. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] mediaconnect:UntagResource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateBridge">UpdateBridge</a></code> | <code>string</code> | [Write] mediaconnect:UpdateBridge. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateBridgeOutput">UpdateBridgeOutput</a></code> | <code>string</code> | [Write] mediaconnect:UpdateBridgeOutput. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateBridgeSource">UpdateBridgeSource</a></code> | <code>string</code> | [Write] mediaconnect:UpdateBridgeSource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateBridgeState">UpdateBridgeState</a></code> | <code>string</code> | [Write] mediaconnect:UpdateBridgeState. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateFlow">UpdateFlow</a></code> | <code>string</code> | [Write] mediaconnect:UpdateFlow. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateFlowEntitlement">UpdateFlowEntitlement</a></code> | <code>string</code> | [Write] mediaconnect:UpdateFlowEntitlement. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateFlowMediaStream">UpdateFlowMediaStream</a></code> | <code>string</code> | [Write] mediaconnect:UpdateFlowMediaStream. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateFlowOutput">UpdateFlowOutput</a></code> | <code>string</code> | [Write] mediaconnect:UpdateFlowOutput. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateFlowSource">UpdateFlowSource</a></code> | <code>string</code> | [Write] mediaconnect:UpdateFlowSource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateGatewayInstance">UpdateGatewayInstance</a></code> | <code>string</code> | [Write] mediaconnect:UpdateGatewayInstance. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateRouterInput">UpdateRouterInput</a></code> | <code>string</code> | [Write] mediaconnect:UpdateRouterInput. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateRouterNetworkInterface">UpdateRouterNetworkInterface</a></code> | <code>string</code> | [Write] mediaconnect:UpdateRouterNetworkInterface. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateRouterOutput">UpdateRouterOutput</a></code> | <code>string</code> | [Write] mediaconnect:UpdateRouterOutput. |

---

##### `actionGetRouterInput`<sup>Required</sup> <a name="actionGetRouterInput" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.actionGetRouterInput"></a>

```typescript
public readonly actionGetRouterInput: string;
```

- *Type:* string

[Read] mediaconnect:GetRouterInput.

---

##### `actionGetRouterInputSourceMetadata`<sup>Required</sup> <a name="actionGetRouterInputSourceMetadata" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.actionGetRouterInputSourceMetadata"></a>

```typescript
public readonly actionGetRouterInputSourceMetadata: string;
```

- *Type:* string

[Read] mediaconnect:GetRouterInputSourceMetadata.

---

##### `actionGetRouterInputThumbnail`<sup>Required</sup> <a name="actionGetRouterInputThumbnail" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.actionGetRouterInputThumbnail"></a>

```typescript
public readonly actionGetRouterInputThumbnail: string;
```

- *Type:* string

[Read] mediaconnect:GetRouterInputThumbnail.

---

##### `actionGetRouterNetworkInterface`<sup>Required</sup> <a name="actionGetRouterNetworkInterface" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.actionGetRouterNetworkInterface"></a>

```typescript
public readonly actionGetRouterNetworkInterface: string;
```

- *Type:* string

[Read] mediaconnect:GetRouterNetworkInterface.

---

##### `actionGetRouterOutput`<sup>Required</sup> <a name="actionGetRouterOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.actionGetRouterOutput"></a>

```typescript
public readonly actionGetRouterOutput: string;
```

- *Type:* string

[Read] mediaconnect:GetRouterOutput.

---

##### `AddBridgeOutputs`<sup>Required</sup> <a name="AddBridgeOutputs" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AddBridgeOutputs"></a>

```typescript
public readonly AddBridgeOutputs: string;
```

- *Type:* string

[Write] mediaconnect:AddBridgeOutputs.

---

##### `AddBridgeSources`<sup>Required</sup> <a name="AddBridgeSources" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AddBridgeSources"></a>

```typescript
public readonly AddBridgeSources: string;
```

- *Type:* string

[Write] mediaconnect:AddBridgeSources.

---

##### `AddFlowMediaStreams`<sup>Required</sup> <a name="AddFlowMediaStreams" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AddFlowMediaStreams"></a>

```typescript
public readonly AddFlowMediaStreams: string;
```

- *Type:* string

[Write] mediaconnect:AddFlowMediaStreams.

---

##### `AddFlowOutputs`<sup>Required</sup> <a name="AddFlowOutputs" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AddFlowOutputs"></a>

```typescript
public readonly AddFlowOutputs: string;
```

- *Type:* string

[Write] mediaconnect:AddFlowOutputs.

---

##### `AddFlowSources`<sup>Required</sup> <a name="AddFlowSources" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AddFlowSources"></a>

```typescript
public readonly AddFlowSources: string;
```

- *Type:* string

[Write] mediaconnect:AddFlowSources.

---

##### `AddFlowVpcInterfaces`<sup>Required</sup> <a name="AddFlowVpcInterfaces" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AddFlowVpcInterfaces"></a>

```typescript
public readonly AddFlowVpcInterfaces: string;
```

- *Type:* string

[Write] mediaconnect:AddFlowVpcInterfaces.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateRouterNetworkInterface`<sup>Required</sup> <a name="AssociateRouterNetworkInterface" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.AssociateRouterNetworkInterface"></a>

```typescript
public readonly AssociateRouterNetworkInterface: string;
```

- *Type:* string

[Write] mediaconnect:AssociateRouterNetworkInterface.

---

##### `CreateBridge`<sup>Required</sup> <a name="CreateBridge" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.CreateBridge"></a>

```typescript
public readonly CreateBridge: string;
```

- *Type:* string

[Write] mediaconnect:CreateBridge.

---

##### `CreateFlow`<sup>Required</sup> <a name="CreateFlow" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.CreateFlow"></a>

```typescript
public readonly CreateFlow: string;
```

- *Type:* string

[Write] mediaconnect:CreateFlow.

---

##### `CreateGateway`<sup>Required</sup> <a name="CreateGateway" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.CreateGateway"></a>

```typescript
public readonly CreateGateway: string;
```

- *Type:* string

[Write] mediaconnect:CreateGateway.

---

##### `CreateRouterInput`<sup>Required</sup> <a name="CreateRouterInput" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.CreateRouterInput"></a>

```typescript
public readonly CreateRouterInput: string;
```

- *Type:* string

[Write] mediaconnect:CreateRouterInput.

---

##### `CreateRouterNetworkInterface`<sup>Required</sup> <a name="CreateRouterNetworkInterface" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.CreateRouterNetworkInterface"></a>

```typescript
public readonly CreateRouterNetworkInterface: string;
```

- *Type:* string

[Write] mediaconnect:CreateRouterNetworkInterface.

---

##### `CreateRouterOutput`<sup>Required</sup> <a name="CreateRouterOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.CreateRouterOutput"></a>

```typescript
public readonly CreateRouterOutput: string;
```

- *Type:* string

[Write] mediaconnect:CreateRouterOutput.

---

##### `DeleteBridge`<sup>Required</sup> <a name="DeleteBridge" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DeleteBridge"></a>

```typescript
public readonly DeleteBridge: string;
```

- *Type:* string

[Write] mediaconnect:DeleteBridge.

---

##### `DeleteFlow`<sup>Required</sup> <a name="DeleteFlow" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DeleteFlow"></a>

```typescript
public readonly DeleteFlow: string;
```

- *Type:* string

[Write] mediaconnect:DeleteFlow.

---

##### `DeleteGateway`<sup>Required</sup> <a name="DeleteGateway" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DeleteGateway"></a>

```typescript
public readonly DeleteGateway: string;
```

- *Type:* string

[Write] mediaconnect:DeleteGateway.

---

##### `DeleteRouterInput`<sup>Required</sup> <a name="DeleteRouterInput" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DeleteRouterInput"></a>

```typescript
public readonly DeleteRouterInput: string;
```

- *Type:* string

[Write] mediaconnect:DeleteRouterInput.

---

##### `DeleteRouterNetworkInterface`<sup>Required</sup> <a name="DeleteRouterNetworkInterface" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DeleteRouterNetworkInterface"></a>

```typescript
public readonly DeleteRouterNetworkInterface: string;
```

- *Type:* string

[Write] mediaconnect:DeleteRouterNetworkInterface.

---

##### `DeleteRouterOutput`<sup>Required</sup> <a name="DeleteRouterOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DeleteRouterOutput"></a>

```typescript
public readonly DeleteRouterOutput: string;
```

- *Type:* string

[Write] mediaconnect:DeleteRouterOutput.

---

##### `DeregisterGatewayInstance`<sup>Required</sup> <a name="DeregisterGatewayInstance" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DeregisterGatewayInstance"></a>

```typescript
public readonly DeregisterGatewayInstance: string;
```

- *Type:* string

[Write] mediaconnect:DeregisterGatewayInstance.

---

##### `DescribeBridge`<sup>Required</sup> <a name="DescribeBridge" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DescribeBridge"></a>

```typescript
public readonly DescribeBridge: string;
```

- *Type:* string

[Read] mediaconnect:DescribeBridge.

---

##### `DescribeFlow`<sup>Required</sup> <a name="DescribeFlow" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DescribeFlow"></a>

```typescript
public readonly DescribeFlow: string;
```

- *Type:* string

[Read] mediaconnect:DescribeFlow.

---

##### `DescribeFlowSourceMetadata`<sup>Required</sup> <a name="DescribeFlowSourceMetadata" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DescribeFlowSourceMetadata"></a>

```typescript
public readonly DescribeFlowSourceMetadata: string;
```

- *Type:* string

[Read] mediaconnect:DescribeFlowSourceMetadata.

---

##### `DescribeFlowSourceThumbnail`<sup>Required</sup> <a name="DescribeFlowSourceThumbnail" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DescribeFlowSourceThumbnail"></a>

```typescript
public readonly DescribeFlowSourceThumbnail: string;
```

- *Type:* string

[Read] mediaconnect:DescribeFlowSourceThumbnail.

---

##### `DescribeGateway`<sup>Required</sup> <a name="DescribeGateway" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DescribeGateway"></a>

```typescript
public readonly DescribeGateway: string;
```

- *Type:* string

[Read] mediaconnect:DescribeGateway.

---

##### `DescribeGatewayInstance`<sup>Required</sup> <a name="DescribeGatewayInstance" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DescribeGatewayInstance"></a>

```typescript
public readonly DescribeGatewayInstance: string;
```

- *Type:* string

[Read] mediaconnect:DescribeGatewayInstance.

---

##### `DescribeOffering`<sup>Required</sup> <a name="DescribeOffering" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DescribeOffering"></a>

```typescript
public readonly DescribeOffering: string;
```

- *Type:* string

[Read] mediaconnect:DescribeOffering.

---

##### `DescribeReservation`<sup>Required</sup> <a name="DescribeReservation" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DescribeReservation"></a>

```typescript
public readonly DescribeReservation: string;
```

- *Type:* string

[Read] mediaconnect:DescribeReservation.

---

##### `DiscoverGatewayPollEndpoint`<sup>Required</sup> <a name="DiscoverGatewayPollEndpoint" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.DiscoverGatewayPollEndpoint"></a>

```typescript
public readonly DiscoverGatewayPollEndpoint: string;
```

- *Type:* string

[Read] mediaconnect:DiscoverGatewayPollEndpoint.

---

##### `GrantFlowEntitlements`<sup>Required</sup> <a name="GrantFlowEntitlements" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.GrantFlowEntitlements"></a>

```typescript
public readonly GrantFlowEntitlements: string;
```

- *Type:* string

[Write] mediaconnect:GrantFlowEntitlements.

---

##### `ListBridges`<sup>Required</sup> <a name="ListBridges" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListBridges"></a>

```typescript
public readonly ListBridges: string;
```

- *Type:* string

[List] mediaconnect:ListBridges.

---

##### `ListEntitlements`<sup>Required</sup> <a name="ListEntitlements" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListEntitlements"></a>

```typescript
public readonly ListEntitlements: string;
```

- *Type:* string

[List] mediaconnect:ListEntitlements.

---

##### `ListFlows`<sup>Required</sup> <a name="ListFlows" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListFlows"></a>

```typescript
public readonly ListFlows: string;
```

- *Type:* string

[List] mediaconnect:ListFlows.

---

##### `ListGatewayInstances`<sup>Required</sup> <a name="ListGatewayInstances" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListGatewayInstances"></a>

```typescript
public readonly ListGatewayInstances: string;
```

- *Type:* string

[List] mediaconnect:ListGatewayInstances.

---

##### `ListGateways`<sup>Required</sup> <a name="ListGateways" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListGateways"></a>

```typescript
public readonly ListGateways: string;
```

- *Type:* string

[List] mediaconnect:ListGateways.

---

##### `ListOfferings`<sup>Required</sup> <a name="ListOfferings" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListOfferings"></a>

```typescript
public readonly ListOfferings: string;
```

- *Type:* string

[List] mediaconnect:ListOfferings.

---

##### `ListReservations`<sup>Required</sup> <a name="ListReservations" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListReservations"></a>

```typescript
public readonly ListReservations: string;
```

- *Type:* string

[List] mediaconnect:ListReservations.

---

##### `ListRouterInputs`<sup>Required</sup> <a name="ListRouterInputs" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListRouterInputs"></a>

```typescript
public readonly ListRouterInputs: string;
```

- *Type:* string

[List] mediaconnect:ListRouterInputs.

---

##### `ListRouterNetworkInterfaces`<sup>Required</sup> <a name="ListRouterNetworkInterfaces" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListRouterNetworkInterfaces"></a>

```typescript
public readonly ListRouterNetworkInterfaces: string;
```

- *Type:* string

[List] mediaconnect:ListRouterNetworkInterfaces.

---

##### `ListRouterOutputs`<sup>Required</sup> <a name="ListRouterOutputs" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListRouterOutputs"></a>

```typescript
public readonly ListRouterOutputs: string;
```

- *Type:* string

[List] mediaconnect:ListRouterOutputs.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] mediaconnect:ListTagsForResource.

---

##### `PollGateway`<sup>Required</sup> <a name="PollGateway" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.PollGateway"></a>

```typescript
public readonly PollGateway: string;
```

- *Type:* string

[Write] mediaconnect:PollGateway.

---

##### `PurchaseOffering`<sup>Required</sup> <a name="PurchaseOffering" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.PurchaseOffering"></a>

```typescript
public readonly PurchaseOffering: string;
```

- *Type:* string

[Write] mediaconnect:PurchaseOffering.

---

##### `RemoveBridgeOutput`<sup>Required</sup> <a name="RemoveBridgeOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.RemoveBridgeOutput"></a>

```typescript
public readonly RemoveBridgeOutput: string;
```

- *Type:* string

[Write] mediaconnect:RemoveBridgeOutput.

---

##### `RemoveBridgeSource`<sup>Required</sup> <a name="RemoveBridgeSource" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.RemoveBridgeSource"></a>

```typescript
public readonly RemoveBridgeSource: string;
```

- *Type:* string

[Write] mediaconnect:RemoveBridgeSource.

---

##### `RemoveFlowMediaStream`<sup>Required</sup> <a name="RemoveFlowMediaStream" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.RemoveFlowMediaStream"></a>

```typescript
public readonly RemoveFlowMediaStream: string;
```

- *Type:* string

[Write] mediaconnect:RemoveFlowMediaStream.

---

##### `RemoveFlowOutput`<sup>Required</sup> <a name="RemoveFlowOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.RemoveFlowOutput"></a>

```typescript
public readonly RemoveFlowOutput: string;
```

- *Type:* string

[Write] mediaconnect:RemoveFlowOutput.

---

##### `RemoveFlowSource`<sup>Required</sup> <a name="RemoveFlowSource" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.RemoveFlowSource"></a>

```typescript
public readonly RemoveFlowSource: string;
```

- *Type:* string

[Write] mediaconnect:RemoveFlowSource.

---

##### `RemoveFlowVpcInterface`<sup>Required</sup> <a name="RemoveFlowVpcInterface" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.RemoveFlowVpcInterface"></a>

```typescript
public readonly RemoveFlowVpcInterface: string;
```

- *Type:* string

[Write] mediaconnect:RemoveFlowVpcInterface.

---

##### `RestartRouterInput`<sup>Required</sup> <a name="RestartRouterInput" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.RestartRouterInput"></a>

```typescript
public readonly RestartRouterInput: string;
```

- *Type:* string

[Write] mediaconnect:RestartRouterInput.

---

##### `RestartRouterOutput`<sup>Required</sup> <a name="RestartRouterOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.RestartRouterOutput"></a>

```typescript
public readonly RestartRouterOutput: string;
```

- *Type:* string

[Write] mediaconnect:RestartRouterOutput.

---

##### `RevokeFlowEntitlement`<sup>Required</sup> <a name="RevokeFlowEntitlement" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.RevokeFlowEntitlement"></a>

```typescript
public readonly RevokeFlowEntitlement: string;
```

- *Type:* string

[Write] mediaconnect:RevokeFlowEntitlement.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartFlow`<sup>Required</sup> <a name="StartFlow" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.StartFlow"></a>

```typescript
public readonly StartFlow: string;
```

- *Type:* string

[Write] mediaconnect:StartFlow.

---

##### `StartRouterInput`<sup>Required</sup> <a name="StartRouterInput" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.StartRouterInput"></a>

```typescript
public readonly StartRouterInput: string;
```

- *Type:* string

[Write] mediaconnect:StartRouterInput.

---

##### `StartRouterOutput`<sup>Required</sup> <a name="StartRouterOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.StartRouterOutput"></a>

```typescript
public readonly StartRouterOutput: string;
```

- *Type:* string

[Write] mediaconnect:StartRouterOutput.

---

##### `StopFlow`<sup>Required</sup> <a name="StopFlow" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.StopFlow"></a>

```typescript
public readonly StopFlow: string;
```

- *Type:* string

[Write] mediaconnect:StopFlow.

---

##### `StopRouterInput`<sup>Required</sup> <a name="StopRouterInput" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.StopRouterInput"></a>

```typescript
public readonly StopRouterInput: string;
```

- *Type:* string

[Write] mediaconnect:StopRouterInput.

---

##### `StopRouterOutput`<sup>Required</sup> <a name="StopRouterOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.StopRouterOutput"></a>

```typescript
public readonly StopRouterOutput: string;
```

- *Type:* string

[Write] mediaconnect:StopRouterOutput.

---

##### `SubmitGatewayStateChange`<sup>Required</sup> <a name="SubmitGatewayStateChange" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.SubmitGatewayStateChange"></a>

```typescript
public readonly SubmitGatewayStateChange: string;
```

- *Type:* string

[Write] mediaconnect:SubmitGatewayStateChange.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] mediaconnect:TagResource.

---

##### `TakeRouterInput`<sup>Required</sup> <a name="TakeRouterInput" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.TakeRouterInput"></a>

```typescript
public readonly TakeRouterInput: string;
```

- *Type:* string

[Write] mediaconnect:TakeRouterInput.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] mediaconnect:UntagResource.

---

##### `UpdateBridge`<sup>Required</sup> <a name="UpdateBridge" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateBridge"></a>

```typescript
public readonly UpdateBridge: string;
```

- *Type:* string

[Write] mediaconnect:UpdateBridge.

---

##### `UpdateBridgeOutput`<sup>Required</sup> <a name="UpdateBridgeOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateBridgeOutput"></a>

```typescript
public readonly UpdateBridgeOutput: string;
```

- *Type:* string

[Write] mediaconnect:UpdateBridgeOutput.

---

##### `UpdateBridgeSource`<sup>Required</sup> <a name="UpdateBridgeSource" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateBridgeSource"></a>

```typescript
public readonly UpdateBridgeSource: string;
```

- *Type:* string

[Write] mediaconnect:UpdateBridgeSource.

---

##### `UpdateBridgeState`<sup>Required</sup> <a name="UpdateBridgeState" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateBridgeState"></a>

```typescript
public readonly UpdateBridgeState: string;
```

- *Type:* string

[Write] mediaconnect:UpdateBridgeState.

---

##### `UpdateFlow`<sup>Required</sup> <a name="UpdateFlow" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateFlow"></a>

```typescript
public readonly UpdateFlow: string;
```

- *Type:* string

[Write] mediaconnect:UpdateFlow.

---

##### `UpdateFlowEntitlement`<sup>Required</sup> <a name="UpdateFlowEntitlement" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateFlowEntitlement"></a>

```typescript
public readonly UpdateFlowEntitlement: string;
```

- *Type:* string

[Write] mediaconnect:UpdateFlowEntitlement.

---

##### `UpdateFlowMediaStream`<sup>Required</sup> <a name="UpdateFlowMediaStream" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateFlowMediaStream"></a>

```typescript
public readonly UpdateFlowMediaStream: string;
```

- *Type:* string

[Write] mediaconnect:UpdateFlowMediaStream.

---

##### `UpdateFlowOutput`<sup>Required</sup> <a name="UpdateFlowOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateFlowOutput"></a>

```typescript
public readonly UpdateFlowOutput: string;
```

- *Type:* string

[Write] mediaconnect:UpdateFlowOutput.

---

##### `UpdateFlowSource`<sup>Required</sup> <a name="UpdateFlowSource" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateFlowSource"></a>

```typescript
public readonly UpdateFlowSource: string;
```

- *Type:* string

[Write] mediaconnect:UpdateFlowSource.

---

##### `UpdateGatewayInstance`<sup>Required</sup> <a name="UpdateGatewayInstance" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateGatewayInstance"></a>

```typescript
public readonly UpdateGatewayInstance: string;
```

- *Type:* string

[Write] mediaconnect:UpdateGatewayInstance.

---

##### `UpdateRouterInput`<sup>Required</sup> <a name="UpdateRouterInput" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateRouterInput"></a>

```typescript
public readonly UpdateRouterInput: string;
```

- *Type:* string

[Write] mediaconnect:UpdateRouterInput.

---

##### `UpdateRouterNetworkInterface`<sup>Required</sup> <a name="UpdateRouterNetworkInterface" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateRouterNetworkInterface"></a>

```typescript
public readonly UpdateRouterNetworkInterface: string;
```

- *Type:* string

[Write] mediaconnect:UpdateRouterNetworkInterface.

---

##### `UpdateRouterOutput`<sup>Required</sup> <a name="UpdateRouterOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectActions.property.UpdateRouterOutput"></a>

```typescript
public readonly UpdateRouterOutput: string;
```

- *Type:* string

[Write] mediaconnect:UpdateRouterOutput.

---

### MediaConnectConditions <a name="MediaConnectConditions" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions"></a>

Condition key constants and builders for mediaconnect.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

new mediaconnect.MediaConnectConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.requestTag"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.resourceTag"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.tagKeys"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.AddFlowMediaStreamsConditionKeys">AddFlowMediaStreamsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddFlowMediaStreams action. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.AddFlowOutputsConditionKeys">AddFlowOutputsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddFlowOutputs action. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.AddFlowSourcesConditionKeys">AddFlowSourcesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddFlowSources action. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.AddFlowVpcInterfacesConditionKeys">AddFlowVpcInterfacesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddFlowVpcInterfaces action. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.CreateFlowConditionKeys">CreateFlowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFlow action. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.CreateRouterInputConditionKeys">CreateRouterInputConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRouterInput action. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.CreateRouterNetworkInterfaceConditionKeys">CreateRouterNetworkInterfaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRouterNetworkInterface action. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.CreateRouterOutputConditionKeys">CreateRouterOutputConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRouterOutput action. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.GrantFlowEntitlementsConditionKeys">GrantFlowEntitlementsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GrantFlowEntitlements action. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AddFlowMediaStreamsConditionKeys`<sup>Required</sup> <a name="AddFlowMediaStreamsConditionKeys" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.AddFlowMediaStreamsConditionKeys"></a>

```typescript
public readonly AddFlowMediaStreamsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddFlowMediaStreams action.

---

##### `AddFlowOutputsConditionKeys`<sup>Required</sup> <a name="AddFlowOutputsConditionKeys" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.AddFlowOutputsConditionKeys"></a>

```typescript
public readonly AddFlowOutputsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddFlowOutputs action.

---

##### `AddFlowSourcesConditionKeys`<sup>Required</sup> <a name="AddFlowSourcesConditionKeys" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.AddFlowSourcesConditionKeys"></a>

```typescript
public readonly AddFlowSourcesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddFlowSources action.

---

##### `AddFlowVpcInterfacesConditionKeys`<sup>Required</sup> <a name="AddFlowVpcInterfacesConditionKeys" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.AddFlowVpcInterfacesConditionKeys"></a>

```typescript
public readonly AddFlowVpcInterfacesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddFlowVpcInterfaces action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateFlowConditionKeys`<sup>Required</sup> <a name="CreateFlowConditionKeys" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.CreateFlowConditionKeys"></a>

```typescript
public readonly CreateFlowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFlow action.

---

##### `CreateRouterInputConditionKeys`<sup>Required</sup> <a name="CreateRouterInputConditionKeys" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.CreateRouterInputConditionKeys"></a>

```typescript
public readonly CreateRouterInputConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRouterInput action.

---

##### `CreateRouterNetworkInterfaceConditionKeys`<sup>Required</sup> <a name="CreateRouterNetworkInterfaceConditionKeys" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.CreateRouterNetworkInterfaceConditionKeys"></a>

```typescript
public readonly CreateRouterNetworkInterfaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRouterNetworkInterface action.

---

##### `CreateRouterOutputConditionKeys`<sup>Required</sup> <a name="CreateRouterOutputConditionKeys" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.CreateRouterOutputConditionKeys"></a>

```typescript
public readonly CreateRouterOutputConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRouterOutput action.

---

##### `GrantFlowEntitlementsConditionKeys`<sup>Required</sup> <a name="GrantFlowEntitlementsConditionKeys" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.GrantFlowEntitlementsConditionKeys"></a>

```typescript
public readonly GrantFlowEntitlementsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GrantFlowEntitlements action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.mediaconnect.MediaConnectConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### MediaConnectOperations <a name="MediaConnectOperations" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations"></a>

API operation to required IAM actions mapping for mediaconnect.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

new mediaconnect.MediaConnectOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.AddBridgeOutputs">AddBridgeOutputs</a></code> | <code>string[]</code> | IAM actions required for the AddBridgeOutputs API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.AddBridgeSources">AddBridgeSources</a></code> | <code>string[]</code> | IAM actions required for the AddBridgeSources API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.AddFlowMediaStreams">AddFlowMediaStreams</a></code> | <code>string[]</code> | IAM actions required for the AddFlowMediaStreams API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.AddFlowOutputs">AddFlowOutputs</a></code> | <code>string[]</code> | IAM actions required for the AddFlowOutputs API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.AddFlowSources">AddFlowSources</a></code> | <code>string[]</code> | IAM actions required for the AddFlowSources API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.AddFlowVpcInterfaces">AddFlowVpcInterfaces</a></code> | <code>string[]</code> | IAM actions required for the AddFlowVpcInterfaces API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.BatchGetRouterInput">BatchGetRouterInput</a></code> | <code>string[]</code> | IAM actions required for the BatchGetRouterInput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.BatchGetRouterNetworkInterface">BatchGetRouterNetworkInterface</a></code> | <code>string[]</code> | IAM actions required for the BatchGetRouterNetworkInterface API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.BatchGetRouterOutput">BatchGetRouterOutput</a></code> | <code>string[]</code> | IAM actions required for the BatchGetRouterOutput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.CreateBridge">CreateBridge</a></code> | <code>string[]</code> | IAM actions required for the CreateBridge API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.CreateFlow">CreateFlow</a></code> | <code>string[]</code> | IAM actions required for the CreateFlow API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.CreateGateway">CreateGateway</a></code> | <code>string[]</code> | IAM actions required for the CreateGateway API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.CreateRouterInput">CreateRouterInput</a></code> | <code>string[]</code> | IAM actions required for the CreateRouterInput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.CreateRouterNetworkInterface">CreateRouterNetworkInterface</a></code> | <code>string[]</code> | IAM actions required for the CreateRouterNetworkInterface API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.CreateRouterOutput">CreateRouterOutput</a></code> | <code>string[]</code> | IAM actions required for the CreateRouterOutput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DeleteBridge">DeleteBridge</a></code> | <code>string[]</code> | IAM actions required for the DeleteBridge API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DeleteFlow">DeleteFlow</a></code> | <code>string[]</code> | IAM actions required for the DeleteFlow API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DeleteGateway">DeleteGateway</a></code> | <code>string[]</code> | IAM actions required for the DeleteGateway API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DeleteRouterInput">DeleteRouterInput</a></code> | <code>string[]</code> | IAM actions required for the DeleteRouterInput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DeleteRouterNetworkInterface">DeleteRouterNetworkInterface</a></code> | <code>string[]</code> | IAM actions required for the DeleteRouterNetworkInterface API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DeleteRouterOutput">DeleteRouterOutput</a></code> | <code>string[]</code> | IAM actions required for the DeleteRouterOutput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DeregisterGatewayInstance">DeregisterGatewayInstance</a></code> | <code>string[]</code> | IAM actions required for the DeregisterGatewayInstance API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DescribeBridge">DescribeBridge</a></code> | <code>string[]</code> | IAM actions required for the DescribeBridge API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DescribeFlow">DescribeFlow</a></code> | <code>string[]</code> | IAM actions required for the DescribeFlow API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DescribeFlowSourceMetadata">DescribeFlowSourceMetadata</a></code> | <code>string[]</code> | IAM actions required for the DescribeFlowSourceMetadata API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DescribeFlowSourceThumbnail">DescribeFlowSourceThumbnail</a></code> | <code>string[]</code> | IAM actions required for the DescribeFlowSourceThumbnail API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DescribeGateway">DescribeGateway</a></code> | <code>string[]</code> | IAM actions required for the DescribeGateway API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DescribeGatewayInstance">DescribeGatewayInstance</a></code> | <code>string[]</code> | IAM actions required for the DescribeGatewayInstance API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DescribeOffering">DescribeOffering</a></code> | <code>string[]</code> | IAM actions required for the DescribeOffering API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DescribeReservation">DescribeReservation</a></code> | <code>string[]</code> | IAM actions required for the DescribeReservation API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.GrantFlowEntitlements">GrantFlowEntitlements</a></code> | <code>string[]</code> | IAM actions required for the GrantFlowEntitlements API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListBridges">ListBridges</a></code> | <code>string[]</code> | IAM actions required for the ListBridges API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListEntitlements">ListEntitlements</a></code> | <code>string[]</code> | IAM actions required for the ListEntitlements API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListFlows">ListFlows</a></code> | <code>string[]</code> | IAM actions required for the ListFlows API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListGatewayInstances">ListGatewayInstances</a></code> | <code>string[]</code> | IAM actions required for the ListGatewayInstances API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListGateways">ListGateways</a></code> | <code>string[]</code> | IAM actions required for the ListGateways API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListOfferings">ListOfferings</a></code> | <code>string[]</code> | IAM actions required for the ListOfferings API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListReservations">ListReservations</a></code> | <code>string[]</code> | IAM actions required for the ListReservations API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListRouterInputs">ListRouterInputs</a></code> | <code>string[]</code> | IAM actions required for the ListRouterInputs API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListRouterNetworkInterfaces">ListRouterNetworkInterfaces</a></code> | <code>string[]</code> | IAM actions required for the ListRouterNetworkInterfaces API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListRouterOutputs">ListRouterOutputs</a></code> | <code>string[]</code> | IAM actions required for the ListRouterOutputs API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListTagsForGlobalResource">ListTagsForGlobalResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForGlobalResource API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.opGetRouterInput">opGetRouterInput</a></code> | <code>string[]</code> | IAM actions required for the GetRouterInput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.opGetRouterInputSourceMetadata">opGetRouterInputSourceMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetRouterInputSourceMetadata API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.opGetRouterInputThumbnail">opGetRouterInputThumbnail</a></code> | <code>string[]</code> | IAM actions required for the GetRouterInputThumbnail API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.opGetRouterNetworkInterface">opGetRouterNetworkInterface</a></code> | <code>string[]</code> | IAM actions required for the GetRouterNetworkInterface API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.opGetRouterOutput">opGetRouterOutput</a></code> | <code>string[]</code> | IAM actions required for the GetRouterOutput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.PurchaseOffering">PurchaseOffering</a></code> | <code>string[]</code> | IAM actions required for the PurchaseOffering API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.RemoveBridgeOutput">RemoveBridgeOutput</a></code> | <code>string[]</code> | IAM actions required for the RemoveBridgeOutput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.RemoveBridgeSource">RemoveBridgeSource</a></code> | <code>string[]</code> | IAM actions required for the RemoveBridgeSource API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.RemoveFlowMediaStream">RemoveFlowMediaStream</a></code> | <code>string[]</code> | IAM actions required for the RemoveFlowMediaStream API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.RemoveFlowOutput">RemoveFlowOutput</a></code> | <code>string[]</code> | IAM actions required for the RemoveFlowOutput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.RemoveFlowSource">RemoveFlowSource</a></code> | <code>string[]</code> | IAM actions required for the RemoveFlowSource API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.RemoveFlowVpcInterface">RemoveFlowVpcInterface</a></code> | <code>string[]</code> | IAM actions required for the RemoveFlowVpcInterface API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.RestartRouterInput">RestartRouterInput</a></code> | <code>string[]</code> | IAM actions required for the RestartRouterInput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.RestartRouterOutput">RestartRouterOutput</a></code> | <code>string[]</code> | IAM actions required for the RestartRouterOutput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.RevokeFlowEntitlement">RevokeFlowEntitlement</a></code> | <code>string[]</code> | IAM actions required for the RevokeFlowEntitlement API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.StartFlow">StartFlow</a></code> | <code>string[]</code> | IAM actions required for the StartFlow API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.StartRouterInput">StartRouterInput</a></code> | <code>string[]</code> | IAM actions required for the StartRouterInput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.StartRouterOutput">StartRouterOutput</a></code> | <code>string[]</code> | IAM actions required for the StartRouterOutput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.StopFlow">StopFlow</a></code> | <code>string[]</code> | IAM actions required for the StopFlow API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.StopRouterInput">StopRouterInput</a></code> | <code>string[]</code> | IAM actions required for the StopRouterInput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.StopRouterOutput">StopRouterOutput</a></code> | <code>string[]</code> | IAM actions required for the StopRouterOutput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.TagGlobalResource">TagGlobalResource</a></code> | <code>string[]</code> | IAM actions required for the TagGlobalResource API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.TakeRouterInput">TakeRouterInput</a></code> | <code>string[]</code> | IAM actions required for the TakeRouterInput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UntagGlobalResource">UntagGlobalResource</a></code> | <code>string[]</code> | IAM actions required for the UntagGlobalResource API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateBridge">UpdateBridge</a></code> | <code>string[]</code> | IAM actions required for the UpdateBridge API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateBridgeOutput">UpdateBridgeOutput</a></code> | <code>string[]</code> | IAM actions required for the UpdateBridgeOutput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateBridgeSource">UpdateBridgeSource</a></code> | <code>string[]</code> | IAM actions required for the UpdateBridgeSource API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateBridgeState">UpdateBridgeState</a></code> | <code>string[]</code> | IAM actions required for the UpdateBridgeState API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateFlow">UpdateFlow</a></code> | <code>string[]</code> | IAM actions required for the UpdateFlow API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateFlowEntitlement">UpdateFlowEntitlement</a></code> | <code>string[]</code> | IAM actions required for the UpdateFlowEntitlement API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateFlowMediaStream">UpdateFlowMediaStream</a></code> | <code>string[]</code> | IAM actions required for the UpdateFlowMediaStream API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateFlowOutput">UpdateFlowOutput</a></code> | <code>string[]</code> | IAM actions required for the UpdateFlowOutput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateFlowSource">UpdateFlowSource</a></code> | <code>string[]</code> | IAM actions required for the UpdateFlowSource API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateGatewayInstance">UpdateGatewayInstance</a></code> | <code>string[]</code> | IAM actions required for the UpdateGatewayInstance API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateRouterInput">UpdateRouterInput</a></code> | <code>string[]</code> | IAM actions required for the UpdateRouterInput API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateRouterNetworkInterface">UpdateRouterNetworkInterface</a></code> | <code>string[]</code> | IAM actions required for the UpdateRouterNetworkInterface API call. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateRouterOutput">UpdateRouterOutput</a></code> | <code>string[]</code> | IAM actions required for the UpdateRouterOutput API call. |

---

##### `AddBridgeOutputs`<sup>Required</sup> <a name="AddBridgeOutputs" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.AddBridgeOutputs"></a>

```typescript
public readonly AddBridgeOutputs: string[];
```

- *Type:* string[]

IAM actions required for the AddBridgeOutputs API call.

---

##### `AddBridgeSources`<sup>Required</sup> <a name="AddBridgeSources" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.AddBridgeSources"></a>

```typescript
public readonly AddBridgeSources: string[];
```

- *Type:* string[]

IAM actions required for the AddBridgeSources API call.

---

##### `AddFlowMediaStreams`<sup>Required</sup> <a name="AddFlowMediaStreams" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.AddFlowMediaStreams"></a>

```typescript
public readonly AddFlowMediaStreams: string[];
```

- *Type:* string[]

IAM actions required for the AddFlowMediaStreams API call.

---

##### `AddFlowOutputs`<sup>Required</sup> <a name="AddFlowOutputs" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.AddFlowOutputs"></a>

```typescript
public readonly AddFlowOutputs: string[];
```

- *Type:* string[]

IAM actions required for the AddFlowOutputs API call.

---

##### `AddFlowSources`<sup>Required</sup> <a name="AddFlowSources" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.AddFlowSources"></a>

```typescript
public readonly AddFlowSources: string[];
```

- *Type:* string[]

IAM actions required for the AddFlowSources API call.

---

##### `AddFlowVpcInterfaces`<sup>Required</sup> <a name="AddFlowVpcInterfaces" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.AddFlowVpcInterfaces"></a>

```typescript
public readonly AddFlowVpcInterfaces: string[];
```

- *Type:* string[]

IAM actions required for the AddFlowVpcInterfaces API call.

---

##### `BatchGetRouterInput`<sup>Required</sup> <a name="BatchGetRouterInput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.BatchGetRouterInput"></a>

```typescript
public readonly BatchGetRouterInput: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetRouterInput API call.

---

##### `BatchGetRouterNetworkInterface`<sup>Required</sup> <a name="BatchGetRouterNetworkInterface" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.BatchGetRouterNetworkInterface"></a>

```typescript
public readonly BatchGetRouterNetworkInterface: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetRouterNetworkInterface API call.

---

##### `BatchGetRouterOutput`<sup>Required</sup> <a name="BatchGetRouterOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.BatchGetRouterOutput"></a>

```typescript
public readonly BatchGetRouterOutput: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetRouterOutput API call.

---

##### `CreateBridge`<sup>Required</sup> <a name="CreateBridge" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.CreateBridge"></a>

```typescript
public readonly CreateBridge: string[];
```

- *Type:* string[]

IAM actions required for the CreateBridge API call.

---

##### `CreateFlow`<sup>Required</sup> <a name="CreateFlow" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.CreateFlow"></a>

```typescript
public readonly CreateFlow: string[];
```

- *Type:* string[]

IAM actions required for the CreateFlow API call.

---

##### `CreateGateway`<sup>Required</sup> <a name="CreateGateway" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.CreateGateway"></a>

```typescript
public readonly CreateGateway: string[];
```

- *Type:* string[]

IAM actions required for the CreateGateway API call.

---

##### `CreateRouterInput`<sup>Required</sup> <a name="CreateRouterInput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.CreateRouterInput"></a>

```typescript
public readonly CreateRouterInput: string[];
```

- *Type:* string[]

IAM actions required for the CreateRouterInput API call.

---

##### `CreateRouterNetworkInterface`<sup>Required</sup> <a name="CreateRouterNetworkInterface" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.CreateRouterNetworkInterface"></a>

```typescript
public readonly CreateRouterNetworkInterface: string[];
```

- *Type:* string[]

IAM actions required for the CreateRouterNetworkInterface API call.

---

##### `CreateRouterOutput`<sup>Required</sup> <a name="CreateRouterOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.CreateRouterOutput"></a>

```typescript
public readonly CreateRouterOutput: string[];
```

- *Type:* string[]

IAM actions required for the CreateRouterOutput API call.

---

##### `DeleteBridge`<sup>Required</sup> <a name="DeleteBridge" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DeleteBridge"></a>

```typescript
public readonly DeleteBridge: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBridge API call.

---

##### `DeleteFlow`<sup>Required</sup> <a name="DeleteFlow" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DeleteFlow"></a>

```typescript
public readonly DeleteFlow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFlow API call.

---

##### `DeleteGateway`<sup>Required</sup> <a name="DeleteGateway" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DeleteGateway"></a>

```typescript
public readonly DeleteGateway: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGateway API call.

---

##### `DeleteRouterInput`<sup>Required</sup> <a name="DeleteRouterInput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DeleteRouterInput"></a>

```typescript
public readonly DeleteRouterInput: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRouterInput API call.

---

##### `DeleteRouterNetworkInterface`<sup>Required</sup> <a name="DeleteRouterNetworkInterface" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DeleteRouterNetworkInterface"></a>

```typescript
public readonly DeleteRouterNetworkInterface: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRouterNetworkInterface API call.

---

##### `DeleteRouterOutput`<sup>Required</sup> <a name="DeleteRouterOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DeleteRouterOutput"></a>

```typescript
public readonly DeleteRouterOutput: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRouterOutput API call.

---

##### `DeregisterGatewayInstance`<sup>Required</sup> <a name="DeregisterGatewayInstance" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DeregisterGatewayInstance"></a>

```typescript
public readonly DeregisterGatewayInstance: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterGatewayInstance API call.

---

##### `DescribeBridge`<sup>Required</sup> <a name="DescribeBridge" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DescribeBridge"></a>

```typescript
public readonly DescribeBridge: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBridge API call.

---

##### `DescribeFlow`<sup>Required</sup> <a name="DescribeFlow" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DescribeFlow"></a>

```typescript
public readonly DescribeFlow: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFlow API call.

---

##### `DescribeFlowSourceMetadata`<sup>Required</sup> <a name="DescribeFlowSourceMetadata" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DescribeFlowSourceMetadata"></a>

```typescript
public readonly DescribeFlowSourceMetadata: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFlowSourceMetadata API call.

---

##### `DescribeFlowSourceThumbnail`<sup>Required</sup> <a name="DescribeFlowSourceThumbnail" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DescribeFlowSourceThumbnail"></a>

```typescript
public readonly DescribeFlowSourceThumbnail: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFlowSourceThumbnail API call.

---

##### `DescribeGateway`<sup>Required</sup> <a name="DescribeGateway" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DescribeGateway"></a>

```typescript
public readonly DescribeGateway: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGateway API call.

---

##### `DescribeGatewayInstance`<sup>Required</sup> <a name="DescribeGatewayInstance" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DescribeGatewayInstance"></a>

```typescript
public readonly DescribeGatewayInstance: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGatewayInstance API call.

---

##### `DescribeOffering`<sup>Required</sup> <a name="DescribeOffering" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DescribeOffering"></a>

```typescript
public readonly DescribeOffering: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOffering API call.

---

##### `DescribeReservation`<sup>Required</sup> <a name="DescribeReservation" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.DescribeReservation"></a>

```typescript
public readonly DescribeReservation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReservation API call.

---

##### `GrantFlowEntitlements`<sup>Required</sup> <a name="GrantFlowEntitlements" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.GrantFlowEntitlements"></a>

```typescript
public readonly GrantFlowEntitlements: string[];
```

- *Type:* string[]

IAM actions required for the GrantFlowEntitlements API call.

---

##### `ListBridges`<sup>Required</sup> <a name="ListBridges" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListBridges"></a>

```typescript
public readonly ListBridges: string[];
```

- *Type:* string[]

IAM actions required for the ListBridges API call.

---

##### `ListEntitlements`<sup>Required</sup> <a name="ListEntitlements" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListEntitlements"></a>

```typescript
public readonly ListEntitlements: string[];
```

- *Type:* string[]

IAM actions required for the ListEntitlements API call.

---

##### `ListFlows`<sup>Required</sup> <a name="ListFlows" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListFlows"></a>

```typescript
public readonly ListFlows: string[];
```

- *Type:* string[]

IAM actions required for the ListFlows API call.

---

##### `ListGatewayInstances`<sup>Required</sup> <a name="ListGatewayInstances" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListGatewayInstances"></a>

```typescript
public readonly ListGatewayInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListGatewayInstances API call.

---

##### `ListGateways`<sup>Required</sup> <a name="ListGateways" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListGateways"></a>

```typescript
public readonly ListGateways: string[];
```

- *Type:* string[]

IAM actions required for the ListGateways API call.

---

##### `ListOfferings`<sup>Required</sup> <a name="ListOfferings" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListOfferings"></a>

```typescript
public readonly ListOfferings: string[];
```

- *Type:* string[]

IAM actions required for the ListOfferings API call.

---

##### `ListReservations`<sup>Required</sup> <a name="ListReservations" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListReservations"></a>

```typescript
public readonly ListReservations: string[];
```

- *Type:* string[]

IAM actions required for the ListReservations API call.

---

##### `ListRouterInputs`<sup>Required</sup> <a name="ListRouterInputs" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListRouterInputs"></a>

```typescript
public readonly ListRouterInputs: string[];
```

- *Type:* string[]

IAM actions required for the ListRouterInputs API call.

---

##### `ListRouterNetworkInterfaces`<sup>Required</sup> <a name="ListRouterNetworkInterfaces" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListRouterNetworkInterfaces"></a>

```typescript
public readonly ListRouterNetworkInterfaces: string[];
```

- *Type:* string[]

IAM actions required for the ListRouterNetworkInterfaces API call.

---

##### `ListRouterOutputs`<sup>Required</sup> <a name="ListRouterOutputs" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListRouterOutputs"></a>

```typescript
public readonly ListRouterOutputs: string[];
```

- *Type:* string[]

IAM actions required for the ListRouterOutputs API call.

---

##### `ListTagsForGlobalResource`<sup>Required</sup> <a name="ListTagsForGlobalResource" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListTagsForGlobalResource"></a>

```typescript
public readonly ListTagsForGlobalResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForGlobalResource API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetRouterInput`<sup>Required</sup> <a name="opGetRouterInput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.opGetRouterInput"></a>

```typescript
public readonly opGetRouterInput: string[];
```

- *Type:* string[]

IAM actions required for the GetRouterInput API call.

---

##### `opGetRouterInputSourceMetadata`<sup>Required</sup> <a name="opGetRouterInputSourceMetadata" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.opGetRouterInputSourceMetadata"></a>

```typescript
public readonly opGetRouterInputSourceMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetRouterInputSourceMetadata API call.

---

##### `opGetRouterInputThumbnail`<sup>Required</sup> <a name="opGetRouterInputThumbnail" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.opGetRouterInputThumbnail"></a>

```typescript
public readonly opGetRouterInputThumbnail: string[];
```

- *Type:* string[]

IAM actions required for the GetRouterInputThumbnail API call.

---

##### `opGetRouterNetworkInterface`<sup>Required</sup> <a name="opGetRouterNetworkInterface" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.opGetRouterNetworkInterface"></a>

```typescript
public readonly opGetRouterNetworkInterface: string[];
```

- *Type:* string[]

IAM actions required for the GetRouterNetworkInterface API call.

---

##### `opGetRouterOutput`<sup>Required</sup> <a name="opGetRouterOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.opGetRouterOutput"></a>

```typescript
public readonly opGetRouterOutput: string[];
```

- *Type:* string[]

IAM actions required for the GetRouterOutput API call.

---

##### `PurchaseOffering`<sup>Required</sup> <a name="PurchaseOffering" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.PurchaseOffering"></a>

```typescript
public readonly PurchaseOffering: string[];
```

- *Type:* string[]

IAM actions required for the PurchaseOffering API call.

---

##### `RemoveBridgeOutput`<sup>Required</sup> <a name="RemoveBridgeOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.RemoveBridgeOutput"></a>

```typescript
public readonly RemoveBridgeOutput: string[];
```

- *Type:* string[]

IAM actions required for the RemoveBridgeOutput API call.

---

##### `RemoveBridgeSource`<sup>Required</sup> <a name="RemoveBridgeSource" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.RemoveBridgeSource"></a>

```typescript
public readonly RemoveBridgeSource: string[];
```

- *Type:* string[]

IAM actions required for the RemoveBridgeSource API call.

---

##### `RemoveFlowMediaStream`<sup>Required</sup> <a name="RemoveFlowMediaStream" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.RemoveFlowMediaStream"></a>

```typescript
public readonly RemoveFlowMediaStream: string[];
```

- *Type:* string[]

IAM actions required for the RemoveFlowMediaStream API call.

---

##### `RemoveFlowOutput`<sup>Required</sup> <a name="RemoveFlowOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.RemoveFlowOutput"></a>

```typescript
public readonly RemoveFlowOutput: string[];
```

- *Type:* string[]

IAM actions required for the RemoveFlowOutput API call.

---

##### `RemoveFlowSource`<sup>Required</sup> <a name="RemoveFlowSource" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.RemoveFlowSource"></a>

```typescript
public readonly RemoveFlowSource: string[];
```

- *Type:* string[]

IAM actions required for the RemoveFlowSource API call.

---

##### `RemoveFlowVpcInterface`<sup>Required</sup> <a name="RemoveFlowVpcInterface" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.RemoveFlowVpcInterface"></a>

```typescript
public readonly RemoveFlowVpcInterface: string[];
```

- *Type:* string[]

IAM actions required for the RemoveFlowVpcInterface API call.

---

##### `RestartRouterInput`<sup>Required</sup> <a name="RestartRouterInput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.RestartRouterInput"></a>

```typescript
public readonly RestartRouterInput: string[];
```

- *Type:* string[]

IAM actions required for the RestartRouterInput API call.

---

##### `RestartRouterOutput`<sup>Required</sup> <a name="RestartRouterOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.RestartRouterOutput"></a>

```typescript
public readonly RestartRouterOutput: string[];
```

- *Type:* string[]

IAM actions required for the RestartRouterOutput API call.

---

##### `RevokeFlowEntitlement`<sup>Required</sup> <a name="RevokeFlowEntitlement" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.RevokeFlowEntitlement"></a>

```typescript
public readonly RevokeFlowEntitlement: string[];
```

- *Type:* string[]

IAM actions required for the RevokeFlowEntitlement API call.

---

##### `StartFlow`<sup>Required</sup> <a name="StartFlow" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.StartFlow"></a>

```typescript
public readonly StartFlow: string[];
```

- *Type:* string[]

IAM actions required for the StartFlow API call.

---

##### `StartRouterInput`<sup>Required</sup> <a name="StartRouterInput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.StartRouterInput"></a>

```typescript
public readonly StartRouterInput: string[];
```

- *Type:* string[]

IAM actions required for the StartRouterInput API call.

---

##### `StartRouterOutput`<sup>Required</sup> <a name="StartRouterOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.StartRouterOutput"></a>

```typescript
public readonly StartRouterOutput: string[];
```

- *Type:* string[]

IAM actions required for the StartRouterOutput API call.

---

##### `StopFlow`<sup>Required</sup> <a name="StopFlow" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.StopFlow"></a>

```typescript
public readonly StopFlow: string[];
```

- *Type:* string[]

IAM actions required for the StopFlow API call.

---

##### `StopRouterInput`<sup>Required</sup> <a name="StopRouterInput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.StopRouterInput"></a>

```typescript
public readonly StopRouterInput: string[];
```

- *Type:* string[]

IAM actions required for the StopRouterInput API call.

---

##### `StopRouterOutput`<sup>Required</sup> <a name="StopRouterOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.StopRouterOutput"></a>

```typescript
public readonly StopRouterOutput: string[];
```

- *Type:* string[]

IAM actions required for the StopRouterOutput API call.

---

##### `TagGlobalResource`<sup>Required</sup> <a name="TagGlobalResource" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.TagGlobalResource"></a>

```typescript
public readonly TagGlobalResource: string[];
```

- *Type:* string[]

IAM actions required for the TagGlobalResource API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TakeRouterInput`<sup>Required</sup> <a name="TakeRouterInput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.TakeRouterInput"></a>

```typescript
public readonly TakeRouterInput: string[];
```

- *Type:* string[]

IAM actions required for the TakeRouterInput API call.

---

##### `UntagGlobalResource`<sup>Required</sup> <a name="UntagGlobalResource" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UntagGlobalResource"></a>

```typescript
public readonly UntagGlobalResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagGlobalResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateBridge`<sup>Required</sup> <a name="UpdateBridge" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateBridge"></a>

```typescript
public readonly UpdateBridge: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBridge API call.

---

##### `UpdateBridgeOutput`<sup>Required</sup> <a name="UpdateBridgeOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateBridgeOutput"></a>

```typescript
public readonly UpdateBridgeOutput: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBridgeOutput API call.

---

##### `UpdateBridgeSource`<sup>Required</sup> <a name="UpdateBridgeSource" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateBridgeSource"></a>

```typescript
public readonly UpdateBridgeSource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBridgeSource API call.

---

##### `UpdateBridgeState`<sup>Required</sup> <a name="UpdateBridgeState" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateBridgeState"></a>

```typescript
public readonly UpdateBridgeState: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBridgeState API call.

---

##### `UpdateFlow`<sup>Required</sup> <a name="UpdateFlow" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateFlow"></a>

```typescript
public readonly UpdateFlow: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFlow API call.

---

##### `UpdateFlowEntitlement`<sup>Required</sup> <a name="UpdateFlowEntitlement" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateFlowEntitlement"></a>

```typescript
public readonly UpdateFlowEntitlement: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFlowEntitlement API call.

---

##### `UpdateFlowMediaStream`<sup>Required</sup> <a name="UpdateFlowMediaStream" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateFlowMediaStream"></a>

```typescript
public readonly UpdateFlowMediaStream: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFlowMediaStream API call.

---

##### `UpdateFlowOutput`<sup>Required</sup> <a name="UpdateFlowOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateFlowOutput"></a>

```typescript
public readonly UpdateFlowOutput: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFlowOutput API call.

---

##### `UpdateFlowSource`<sup>Required</sup> <a name="UpdateFlowSource" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateFlowSource"></a>

```typescript
public readonly UpdateFlowSource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFlowSource API call.

---

##### `UpdateGatewayInstance`<sup>Required</sup> <a name="UpdateGatewayInstance" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateGatewayInstance"></a>

```typescript
public readonly UpdateGatewayInstance: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGatewayInstance API call.

---

##### `UpdateRouterInput`<sup>Required</sup> <a name="UpdateRouterInput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateRouterInput"></a>

```typescript
public readonly UpdateRouterInput: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRouterInput API call.

---

##### `UpdateRouterNetworkInterface`<sup>Required</sup> <a name="UpdateRouterNetworkInterface" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateRouterNetworkInterface"></a>

```typescript
public readonly UpdateRouterNetworkInterface: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRouterNetworkInterface API call.

---

##### `UpdateRouterOutput`<sup>Required</sup> <a name="UpdateRouterOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectOperations.property.UpdateRouterOutput"></a>

```typescript
public readonly UpdateRouterOutput: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRouterOutput API call.

---

### MediaConnectResources <a name="MediaConnectResources" id="@cdk_utils/iam.mediaconnect.MediaConnectResources"></a>

ARN builders, validators, and parsers for mediaconnect resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.Initializer"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

new mediaconnect.MediaConnectResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.bridge">bridge</a></code> | Builds an ARN for the Bridge resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.entitlement">entitlement</a></code> | Builds an ARN for the Entitlement resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.flow">flow</a></code> | Builds an ARN for the Flow resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.gateway">gateway</a></code> | Builds an ARN for the Gateway resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.gatewayInstance">gatewayInstance</a></code> | Builds an ARN for the GatewayInstance resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidBridgeArn">isValidBridgeArn</a></code> | Validates whether a string is a valid ARN for the Bridge resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidEntitlementArn">isValidEntitlementArn</a></code> | Validates whether a string is a valid ARN for the Entitlement resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidFlowArn">isValidFlowArn</a></code> | Validates whether a string is a valid ARN for the Flow resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidGatewayArn">isValidGatewayArn</a></code> | Validates whether a string is a valid ARN for the Gateway resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidGatewayInstanceArn">isValidGatewayInstanceArn</a></code> | Validates whether a string is a valid ARN for the GatewayInstance resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidMediaStreamArn">isValidMediaStreamArn</a></code> | Validates whether a string is a valid ARN for the MediaStream resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidOfferingArn">isValidOfferingArn</a></code> | Validates whether a string is a valid ARN for the Offering resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidOutputArn">isValidOutputArn</a></code> | Validates whether a string is a valid ARN for the Output resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidReservationArn">isValidReservationArn</a></code> | Validates whether a string is a valid ARN for the Reservation resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidRouterInputArn">isValidRouterInputArn</a></code> | Validates whether a string is a valid ARN for the RouterInput resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidRouterNetworkInterfaceArn">isValidRouterNetworkInterfaceArn</a></code> | Validates whether a string is a valid ARN for the RouterNetworkInterface resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidRouterOutputArn">isValidRouterOutputArn</a></code> | Validates whether a string is a valid ARN for the RouterOutput resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidSourceArn">isValidSourceArn</a></code> | Validates whether a string is a valid ARN for the Source resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidVPCInterfaceArn">isValidVPCInterfaceArn</a></code> | Validates whether a string is a valid ARN for the VpcInterface resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.mediaStream">mediaStream</a></code> | Builds an ARN for the MediaStream resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.offering">offering</a></code> | Builds an ARN for the Offering resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.output">output</a></code> | Builds an ARN for the Output resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.parseBridgeArn">parseBridgeArn</a></code> | Parses a Bridge ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.parseEntitlementArn">parseEntitlementArn</a></code> | Parses a Entitlement ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.parseFlowArn">parseFlowArn</a></code> | Parses a Flow ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.parseGatewayArn">parseGatewayArn</a></code> | Parses a Gateway ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.parseGatewayInstanceArn">parseGatewayInstanceArn</a></code> | Parses a GatewayInstance ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.parseMediaStreamArn">parseMediaStreamArn</a></code> | Parses a MediaStream ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.parseOfferingArn">parseOfferingArn</a></code> | Parses a Offering ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.parseOutputArn">parseOutputArn</a></code> | Parses a Output ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.parseReservationArn">parseReservationArn</a></code> | Parses a Reservation ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.parseRouterInputArn">parseRouterInputArn</a></code> | Parses a RouterInput ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.parseRouterNetworkInterfaceArn">parseRouterNetworkInterfaceArn</a></code> | Parses a RouterNetworkInterface ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.parseRouterOutputArn">parseRouterOutputArn</a></code> | Parses a RouterOutput ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.parseSourceArn">parseSourceArn</a></code> | Parses a Source ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.parseVPCInterfaceArn">parseVPCInterfaceArn</a></code> | Parses a VpcInterface ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.reservation">reservation</a></code> | Builds an ARN for the Reservation resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.routerInput">routerInput</a></code> | Builds an ARN for the RouterInput resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.routerNetworkInterface">routerNetworkInterface</a></code> | Builds an ARN for the RouterNetworkInterface resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.routerOutput">routerOutput</a></code> | Builds an ARN for the RouterOutput resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.source">source</a></code> | Builds an ARN for the Source resource. |
| <code><a href="#@cdk_utils/iam.mediaconnect.MediaConnectResources.vpcInterface">vpcInterface</a></code> | Builds an ARN for the VpcInterface resource. |

---

##### `bridge` <a name="bridge" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.bridge"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.bridge(props: MediaConnectBridgeArnProps)
```

Builds an ARN for the Bridge resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.bridge.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediaconnect.MediaConnectBridgeArnProps">MediaConnectBridgeArnProps</a>

---

##### `entitlement` <a name="entitlement" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.entitlement"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.entitlement(props: MediaConnectEntitlementArnProps)
```

Builds an ARN for the Entitlement resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.entitlement.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediaconnect.MediaConnectEntitlementArnProps">MediaConnectEntitlementArnProps</a>

---

##### `flow` <a name="flow" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.flow"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.flow(props: MediaConnectFlowArnProps)
```

Builds an ARN for the Flow resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.flow.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediaconnect.MediaConnectFlowArnProps">MediaConnectFlowArnProps</a>

---

##### `gateway` <a name="gateway" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.gateway"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.gateway(props: MediaConnectGatewayArnProps)
```

Builds an ARN for the Gateway resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.gateway.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayArnProps">MediaConnectGatewayArnProps</a>

---

##### `gatewayInstance` <a name="gatewayInstance" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.gatewayInstance"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.gatewayInstance(props: MediaConnectGatewayInstanceArnProps)
```

Builds an ARN for the GatewayInstance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.gatewayInstance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediaconnect.MediaConnectGatewayInstanceArnProps">MediaConnectGatewayInstanceArnProps</a>

---

##### `isValidBridgeArn` <a name="isValidBridgeArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidBridgeArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.isValidBridgeArn(arn: string)
```

Validates whether a string is a valid ARN for the Bridge resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidBridgeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEntitlementArn` <a name="isValidEntitlementArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidEntitlementArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.isValidEntitlementArn(arn: string)
```

Validates whether a string is a valid ARN for the Entitlement resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidEntitlementArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFlowArn` <a name="isValidFlowArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidFlowArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.isValidFlowArn(arn: string)
```

Validates whether a string is a valid ARN for the Flow resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidFlowArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGatewayArn` <a name="isValidGatewayArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidGatewayArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.isValidGatewayArn(arn: string)
```

Validates whether a string is a valid ARN for the Gateway resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGatewayInstanceArn` <a name="isValidGatewayInstanceArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidGatewayInstanceArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.isValidGatewayInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the GatewayInstance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidGatewayInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMediaStreamArn` <a name="isValidMediaStreamArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidMediaStreamArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.isValidMediaStreamArn(arn: string)
```

Validates whether a string is a valid ARN for the MediaStream resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidMediaStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOfferingArn` <a name="isValidOfferingArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidOfferingArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.isValidOfferingArn(arn: string)
```

Validates whether a string is a valid ARN for the Offering resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidOfferingArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOutputArn` <a name="isValidOutputArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidOutputArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.isValidOutputArn(arn: string)
```

Validates whether a string is a valid ARN for the Output resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidOutputArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReservationArn` <a name="isValidReservationArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidReservationArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.isValidReservationArn(arn: string)
```

Validates whether a string is a valid ARN for the Reservation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidReservationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRouterInputArn` <a name="isValidRouterInputArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidRouterInputArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.isValidRouterInputArn(arn: string)
```

Validates whether a string is a valid ARN for the RouterInput resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidRouterInputArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRouterNetworkInterfaceArn` <a name="isValidRouterNetworkInterfaceArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidRouterNetworkInterfaceArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.isValidRouterNetworkInterfaceArn(arn: string)
```

Validates whether a string is a valid ARN for the RouterNetworkInterface resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidRouterNetworkInterfaceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRouterOutputArn` <a name="isValidRouterOutputArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidRouterOutputArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.isValidRouterOutputArn(arn: string)
```

Validates whether a string is a valid ARN for the RouterOutput resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidRouterOutputArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSourceArn` <a name="isValidSourceArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidSourceArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.isValidSourceArn(arn: string)
```

Validates whether a string is a valid ARN for the Source resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVPCInterfaceArn` <a name="isValidVPCInterfaceArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidVPCInterfaceArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.isValidVPCInterfaceArn(arn: string)
```

Validates whether a string is a valid ARN for the VpcInterface resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.isValidVPCInterfaceArn.parameter.arn"></a>

- *Type:* string

---

##### `mediaStream` <a name="mediaStream" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.mediaStream"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.mediaStream(props: MediaConnectMediaStreamArnProps)
```

Builds an ARN for the MediaStream resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.mediaStream.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediaconnect.MediaConnectMediaStreamArnProps">MediaConnectMediaStreamArnProps</a>

---

##### `offering` <a name="offering" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.offering"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.offering(props: MediaConnectOfferingArnProps)
```

Builds an ARN for the Offering resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.offering.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediaconnect.MediaConnectOfferingArnProps">MediaConnectOfferingArnProps</a>

---

##### `output` <a name="output" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.output"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.output(props: MediaConnectOutputArnProps)
```

Builds an ARN for the Output resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.output.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediaconnect.MediaConnectOutputArnProps">MediaConnectOutputArnProps</a>

---

##### `parseBridgeArn` <a name="parseBridgeArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseBridgeArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.parseBridgeArn(arn: string)
```

Parses a Bridge ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseBridgeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEntitlementArn` <a name="parseEntitlementArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseEntitlementArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.parseEntitlementArn(arn: string)
```

Parses a Entitlement ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseEntitlementArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFlowArn` <a name="parseFlowArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseFlowArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.parseFlowArn(arn: string)
```

Parses a Flow ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseFlowArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGatewayArn` <a name="parseGatewayArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseGatewayArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.parseGatewayArn(arn: string)
```

Parses a Gateway ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGatewayInstanceArn` <a name="parseGatewayInstanceArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseGatewayInstanceArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.parseGatewayInstanceArn(arn: string)
```

Parses a GatewayInstance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseGatewayInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMediaStreamArn` <a name="parseMediaStreamArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseMediaStreamArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.parseMediaStreamArn(arn: string)
```

Parses a MediaStream ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseMediaStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOfferingArn` <a name="parseOfferingArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseOfferingArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.parseOfferingArn(arn: string)
```

Parses a Offering ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseOfferingArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOutputArn` <a name="parseOutputArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseOutputArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.parseOutputArn(arn: string)
```

Parses a Output ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseOutputArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReservationArn` <a name="parseReservationArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseReservationArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.parseReservationArn(arn: string)
```

Parses a Reservation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseReservationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRouterInputArn` <a name="parseRouterInputArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseRouterInputArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.parseRouterInputArn(arn: string)
```

Parses a RouterInput ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseRouterInputArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRouterNetworkInterfaceArn` <a name="parseRouterNetworkInterfaceArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseRouterNetworkInterfaceArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.parseRouterNetworkInterfaceArn(arn: string)
```

Parses a RouterNetworkInterface ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseRouterNetworkInterfaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRouterOutputArn` <a name="parseRouterOutputArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseRouterOutputArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.parseRouterOutputArn(arn: string)
```

Parses a RouterOutput ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseRouterOutputArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSourceArn` <a name="parseSourceArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseSourceArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.parseSourceArn(arn: string)
```

Parses a Source ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVPCInterfaceArn` <a name="parseVPCInterfaceArn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseVPCInterfaceArn"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.parseVPCInterfaceArn(arn: string)
```

Parses a VpcInterface ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.parseVPCInterfaceArn.parameter.arn"></a>

- *Type:* string

---

##### `reservation` <a name="reservation" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.reservation"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.reservation(props: MediaConnectReservationArnProps)
```

Builds an ARN for the Reservation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.reservation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediaconnect.MediaConnectReservationArnProps">MediaConnectReservationArnProps</a>

---

##### `routerInput` <a name="routerInput" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.routerInput"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.routerInput(props: MediaConnectRouterInputArnProps)
```

Builds an ARN for the RouterInput resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.routerInput.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterInputArnProps">MediaConnectRouterInputArnProps</a>

---

##### `routerNetworkInterface` <a name="routerNetworkInterface" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.routerNetworkInterface"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.routerNetworkInterface(props: MediaConnectRouterNetworkInterfaceArnProps)
```

Builds an ARN for the RouterNetworkInterface resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.routerNetworkInterface.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterNetworkInterfaceArnProps">MediaConnectRouterNetworkInterfaceArnProps</a>

---

##### `routerOutput` <a name="routerOutput" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.routerOutput"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.routerOutput(props: MediaConnectRouterOutputArnProps)
```

Builds an ARN for the RouterOutput resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.routerOutput.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediaconnect.MediaConnectRouterOutputArnProps">MediaConnectRouterOutputArnProps</a>

---

##### `source` <a name="source" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.source"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.source(props: MediaConnectSourceArnProps)
```

Builds an ARN for the Source resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.source.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediaconnect.MediaConnectSourceArnProps">MediaConnectSourceArnProps</a>

---

##### `vpcInterface` <a name="vpcInterface" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.vpcInterface"></a>

```typescript
import { mediaconnect } from '@cdk_utils/iam'

mediaconnect.MediaConnectResources.vpcInterface(props: MediaConnectVPCInterfaceArnProps)
```

Builds an ARN for the VpcInterface resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediaconnect.MediaConnectResources.vpcInterface.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediaconnect.MediaConnectVPCInterfaceArnProps">MediaConnectVPCInterfaceArnProps</a>

---




