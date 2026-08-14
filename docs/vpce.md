# `vpce` Submodule <a name="`vpce` Submodule" id="@cdk_utils/iam.vpce"></a>


## Structs <a name="Structs" id="Structs"></a>

### VpceVPCEndpointArnComponents <a name="VpceVPCEndpointArnComponents" id="@cdk_utils/iam.vpce.VpceVPCEndpointArnComponents"></a>

Parsed components of a vpc-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpce.VpceVPCEndpointArnComponents.Initializer"></a>

```typescript
import { vpce } from '@cdk_utils/iam'

const vpceVPCEndpointArnComponents: vpce.VpceVPCEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpce.VpceVPCEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpce.VpceVPCEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpce.VpceVPCEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.vpce.VpceVPCEndpointArnComponents.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | The VpcEndpointId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.vpce.VpceVPCEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.vpce.VpceVPCEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.vpce.VpceVPCEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdk_utils/iam.vpce.VpceVPCEndpointArnComponents.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

The VpcEndpointId component.

---

### VpceVPCEndpointArnProps <a name="VpceVPCEndpointArnProps" id="@cdk_utils/iam.vpce.VpceVPCEndpointArnProps"></a>

Properties for building a vpc-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpce.VpceVPCEndpointArnProps.Initializer"></a>

```typescript
import { vpce } from '@cdk_utils/iam'

const vpceVPCEndpointArnProps: vpce.VpceVPCEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpce.VpceVPCEndpointArnProps.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | The VpcEndpointId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpce.VpceVPCEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpce.VpceVPCEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpce.VpceVPCEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdk_utils/iam.vpce.VpceVPCEndpointArnProps.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

The VpcEndpointId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.vpce.VpceVPCEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.vpce.VpceVPCEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.vpce.VpceVPCEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### VpceVPCEndpointServiceArnComponents <a name="VpceVPCEndpointServiceArnComponents" id="@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnComponents"></a>

Parsed components of a vpc-endpoint-service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnComponents.Initializer"></a>

```typescript
import { vpce } from '@cdk_utils/iam'

const vpceVPCEndpointServiceArnComponents: vpce.VpceVPCEndpointServiceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnComponents.property.vpcEndpointServiceId">vpcEndpointServiceId</a></code> | <code>string</code> | The VpcEndpointServiceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `vpcEndpointServiceId`<sup>Required</sup> <a name="vpcEndpointServiceId" id="@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnComponents.property.vpcEndpointServiceId"></a>

```typescript
public readonly vpcEndpointServiceId: string;
```

- *Type:* string

The VpcEndpointServiceId component.

---

### VpceVPCEndpointServiceArnProps <a name="VpceVPCEndpointServiceArnProps" id="@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnProps"></a>

Properties for building a vpc-endpoint-service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnProps.Initializer"></a>

```typescript
import { vpce } from '@cdk_utils/iam'

const vpceVPCEndpointServiceArnProps: vpce.VpceVPCEndpointServiceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnProps.property.vpcEndpointServiceId">vpcEndpointServiceId</a></code> | <code>string</code> | The VpcEndpointServiceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `vpcEndpointServiceId`<sup>Required</sup> <a name="vpcEndpointServiceId" id="@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnProps.property.vpcEndpointServiceId"></a>

```typescript
public readonly vpcEndpointServiceId: string;
```

- *Type:* string

The VpcEndpointServiceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### VpceActions <a name="VpceActions" id="@cdk_utils/iam.vpce.VpceActions"></a>

IAM action constants for the vpce service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.vpce.VpceActions.Initializer"></a>

```typescript
import { vpce } from '@cdk_utils/iam'

new vpce.VpceActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpce.VpceActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.vpce.VpceActions.property.AllowMultiRegion">AllowMultiRegion</a></code> | <code>string</code> | [Write] vpce:AllowMultiRegion. |
| <code><a href="#@cdk_utils/iam.vpce.VpceActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.vpce.VpceActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.vpce.VpceActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.vpce.VpceActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.vpce.VpceActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.vpce.VpceActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowMultiRegion`<sup>Required</sup> <a name="AllowMultiRegion" id="@cdk_utils/iam.vpce.VpceActions.property.AllowMultiRegion"></a>

```typescript
public readonly AllowMultiRegion: string;
```

- *Type:* string

[Write] vpce:AllowMultiRegion.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.vpce.VpceActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.vpce.VpceActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.vpce.VpceActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.vpce.VpceActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.vpce.VpceActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### VpceResources <a name="VpceResources" id="@cdk_utils/iam.vpce.VpceResources"></a>

ARN builders, validators, and parsers for vpce resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.vpce.VpceResources.Initializer"></a>

```typescript
import { vpce } from '@cdk_utils/iam'

new vpce.VpceResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.vpce.VpceResources.isValidVPCEndpointArn">isValidVPCEndpointArn</a></code> | Validates whether a string is a valid ARN for the vpc-endpoint resource. |
| <code><a href="#@cdk_utils/iam.vpce.VpceResources.isValidVPCEndpointServiceArn">isValidVPCEndpointServiceArn</a></code> | Validates whether a string is a valid ARN for the vpc-endpoint-service resource. |
| <code><a href="#@cdk_utils/iam.vpce.VpceResources.parseVPCEndpointArn">parseVPCEndpointArn</a></code> | Parses a vpc-endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.vpce.VpceResources.parseVPCEndpointServiceArn">parseVPCEndpointServiceArn</a></code> | Parses a vpc-endpoint-service ARN into its components. |
| <code><a href="#@cdk_utils/iam.vpce.VpceResources.vpcEndpoint">vpcEndpoint</a></code> | Builds an ARN for the vpc-endpoint resource. |
| <code><a href="#@cdk_utils/iam.vpce.VpceResources.vpcEndpointService">vpcEndpointService</a></code> | Builds an ARN for the vpc-endpoint-service resource. |

---

##### `isValidVPCEndpointArn` <a name="isValidVPCEndpointArn" id="@cdk_utils/iam.vpce.VpceResources.isValidVPCEndpointArn"></a>

```typescript
import { vpce } from '@cdk_utils/iam'

vpce.VpceResources.isValidVPCEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the vpc-endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpce.VpceResources.isValidVPCEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVPCEndpointServiceArn` <a name="isValidVPCEndpointServiceArn" id="@cdk_utils/iam.vpce.VpceResources.isValidVPCEndpointServiceArn"></a>

```typescript
import { vpce } from '@cdk_utils/iam'

vpce.VpceResources.isValidVPCEndpointServiceArn(arn: string)
```

Validates whether a string is a valid ARN for the vpc-endpoint-service resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpce.VpceResources.isValidVPCEndpointServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVPCEndpointArn` <a name="parseVPCEndpointArn" id="@cdk_utils/iam.vpce.VpceResources.parseVPCEndpointArn"></a>

```typescript
import { vpce } from '@cdk_utils/iam'

vpce.VpceResources.parseVPCEndpointArn(arn: string)
```

Parses a vpc-endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpce.VpceResources.parseVPCEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVPCEndpointServiceArn` <a name="parseVPCEndpointServiceArn" id="@cdk_utils/iam.vpce.VpceResources.parseVPCEndpointServiceArn"></a>

```typescript
import { vpce } from '@cdk_utils/iam'

vpce.VpceResources.parseVPCEndpointServiceArn(arn: string)
```

Parses a vpc-endpoint-service ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpce.VpceResources.parseVPCEndpointServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `vpcEndpoint` <a name="vpcEndpoint" id="@cdk_utils/iam.vpce.VpceResources.vpcEndpoint"></a>

```typescript
import { vpce } from '@cdk_utils/iam'

vpce.VpceResources.vpcEndpoint(props: VpceVPCEndpointArnProps)
```

Builds an ARN for the vpc-endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.vpce.VpceResources.vpcEndpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.vpce.VpceVPCEndpointArnProps">VpceVPCEndpointArnProps</a>

---

##### `vpcEndpointService` <a name="vpcEndpointService" id="@cdk_utils/iam.vpce.VpceResources.vpcEndpointService"></a>

```typescript
import { vpce } from '@cdk_utils/iam'

vpce.VpceResources.vpcEndpointService(props: VpceVPCEndpointServiceArnProps)
```

Builds an ARN for the vpc-endpoint-service resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.vpce.VpceResources.vpcEndpointService.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.vpce.VpceVPCEndpointServiceArnProps">VpceVPCEndpointServiceArnProps</a>

---




