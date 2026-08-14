# `gamelift` Submodule <a name="`gamelift` Submodule" id="@cdk_utils/iam.gamelift"></a>


## Structs <a name="Structs" id="Structs"></a>

### GameLiftAliasArnComponents <a name="GameLiftAliasArnComponents" id="@cdk_utils/iam.gamelift.GameLiftAliasArnComponents"></a>

Parsed components of a alias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftAliasArnComponents.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftAliasArnComponents: gamelift.GameLiftAliasArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftAliasArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftAliasArnComponents.property.aliasId">aliasId</a></code> | <code>string</code> | The AliasId component. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftAliasArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftAliasArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftAliasArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `aliasId`<sup>Required</sup> <a name="aliasId" id="@cdk_utils/iam.gamelift.GameLiftAliasArnComponents.property.aliasId"></a>

```typescript
public readonly aliasId: string;
```

- *Type:* string

The AliasId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftAliasArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftAliasArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GameLiftAliasArnProps <a name="GameLiftAliasArnProps" id="@cdk_utils/iam.gamelift.GameLiftAliasArnProps"></a>

Properties for building a alias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftAliasArnProps.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftAliasArnProps: gamelift.GameLiftAliasArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftAliasArnProps.property.aliasId">aliasId</a></code> | <code>string</code> | The AliasId component of the ARN. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftAliasArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftAliasArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftAliasArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `aliasId`<sup>Required</sup> <a name="aliasId" id="@cdk_utils/iam.gamelift.GameLiftAliasArnProps.property.aliasId"></a>

```typescript
public readonly aliasId: string;
```

- *Type:* string

The AliasId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftAliasArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftAliasArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftAliasArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GameLiftBuildArnComponents <a name="GameLiftBuildArnComponents" id="@cdk_utils/iam.gamelift.GameLiftBuildArnComponents"></a>

Parsed components of a build ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftBuildArnComponents.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftBuildArnComponents: gamelift.GameLiftBuildArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftBuildArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftBuildArnComponents.property.buildId">buildId</a></code> | <code>string</code> | The BuildId component. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftBuildArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftBuildArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftBuildArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `buildId`<sup>Required</sup> <a name="buildId" id="@cdk_utils/iam.gamelift.GameLiftBuildArnComponents.property.buildId"></a>

```typescript
public readonly buildId: string;
```

- *Type:* string

The BuildId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftBuildArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftBuildArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GameLiftBuildArnProps <a name="GameLiftBuildArnProps" id="@cdk_utils/iam.gamelift.GameLiftBuildArnProps"></a>

Properties for building a build ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftBuildArnProps.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftBuildArnProps: gamelift.GameLiftBuildArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftBuildArnProps.property.buildId">buildId</a></code> | <code>string</code> | The BuildId component of the ARN. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftBuildArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftBuildArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftBuildArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `buildId`<sup>Required</sup> <a name="buildId" id="@cdk_utils/iam.gamelift.GameLiftBuildArnProps.property.buildId"></a>

```typescript
public readonly buildId: string;
```

- *Type:* string

The BuildId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftBuildArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftBuildArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftBuildArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GameLiftContainerFleetArnComponents <a name="GameLiftContainerFleetArnComponents" id="@cdk_utils/iam.gamelift.GameLiftContainerFleetArnComponents"></a>

Parsed components of a containerFleet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftContainerFleetArnComponents.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftContainerFleetArnComponents: gamelift.GameLiftContainerFleetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftContainerFleetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftContainerFleetArnComponents.property.fleetId">fleetId</a></code> | <code>string</code> | The FleetId component. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftContainerFleetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftContainerFleetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftContainerFleetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdk_utils/iam.gamelift.GameLiftContainerFleetArnComponents.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

The FleetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftContainerFleetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftContainerFleetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GameLiftContainerFleetArnProps <a name="GameLiftContainerFleetArnProps" id="@cdk_utils/iam.gamelift.GameLiftContainerFleetArnProps"></a>

Properties for building a containerFleet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftContainerFleetArnProps.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftContainerFleetArnProps: gamelift.GameLiftContainerFleetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftContainerFleetArnProps.property.fleetId">fleetId</a></code> | <code>string</code> | The FleetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftContainerFleetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftContainerFleetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftContainerFleetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdk_utils/iam.gamelift.GameLiftContainerFleetArnProps.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

The FleetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftContainerFleetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftContainerFleetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftContainerFleetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GameLiftContainerGroupDefinitionArnComponents <a name="GameLiftContainerGroupDefinitionArnComponents" id="@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnComponents"></a>

Parsed components of a containerGroupDefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnComponents.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftContainerGroupDefinitionArnComponents: gamelift.GameLiftContainerGroupDefinitionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GameLiftContainerGroupDefinitionArnProps <a name="GameLiftContainerGroupDefinitionArnProps" id="@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnProps"></a>

Properties for building a containerGroupDefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnProps.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftContainerGroupDefinitionArnProps: gamelift.GameLiftContainerGroupDefinitionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GameLiftFleetArnComponents <a name="GameLiftFleetArnComponents" id="@cdk_utils/iam.gamelift.GameLiftFleetArnComponents"></a>

Parsed components of a fleet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftFleetArnComponents.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftFleetArnComponents: gamelift.GameLiftFleetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftFleetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftFleetArnComponents.property.fleetId">fleetId</a></code> | <code>string</code> | The FleetId component. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftFleetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftFleetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftFleetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdk_utils/iam.gamelift.GameLiftFleetArnComponents.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

The FleetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftFleetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftFleetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GameLiftFleetArnProps <a name="GameLiftFleetArnProps" id="@cdk_utils/iam.gamelift.GameLiftFleetArnProps"></a>

Properties for building a fleet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftFleetArnProps.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftFleetArnProps: gamelift.GameLiftFleetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftFleetArnProps.property.fleetId">fleetId</a></code> | <code>string</code> | The FleetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftFleetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftFleetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftFleetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdk_utils/iam.gamelift.GameLiftFleetArnProps.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

The FleetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftFleetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftFleetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftFleetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GameLiftGameServerGroupArnComponents <a name="GameLiftGameServerGroupArnComponents" id="@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnComponents"></a>

Parsed components of a gameServerGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnComponents.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftGameServerGroupArnComponents: gamelift.GameLiftGameServerGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnComponents.property.gameServerGroupName">gameServerGroupName</a></code> | <code>string</code> | The GameServerGroupName component. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gameServerGroupName`<sup>Required</sup> <a name="gameServerGroupName" id="@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnComponents.property.gameServerGroupName"></a>

```typescript
public readonly gameServerGroupName: string;
```

- *Type:* string

The GameServerGroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GameLiftGameServerGroupArnProps <a name="GameLiftGameServerGroupArnProps" id="@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnProps"></a>

Properties for building a gameServerGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnProps.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftGameServerGroupArnProps: gamelift.GameLiftGameServerGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnProps.property.gameServerGroupName">gameServerGroupName</a></code> | <code>string</code> | The GameServerGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gameServerGroupName`<sup>Required</sup> <a name="gameServerGroupName" id="@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnProps.property.gameServerGroupName"></a>

```typescript
public readonly gameServerGroupName: string;
```

- *Type:* string

The GameServerGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GameLiftGameSessionQueueArnComponents <a name="GameLiftGameSessionQueueArnComponents" id="@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnComponents"></a>

Parsed components of a gameSessionQueue ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnComponents.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftGameSessionQueueArnComponents: gamelift.GameLiftGameSessionQueueArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnComponents.property.gameSessionQueueName">gameSessionQueueName</a></code> | <code>string</code> | The GameSessionQueueName component. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gameSessionQueueName`<sup>Required</sup> <a name="gameSessionQueueName" id="@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnComponents.property.gameSessionQueueName"></a>

```typescript
public readonly gameSessionQueueName: string;
```

- *Type:* string

The GameSessionQueueName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GameLiftGameSessionQueueArnProps <a name="GameLiftGameSessionQueueArnProps" id="@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnProps"></a>

Properties for building a gameSessionQueue ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnProps.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftGameSessionQueueArnProps: gamelift.GameLiftGameSessionQueueArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnProps.property.gameSessionQueueName">gameSessionQueueName</a></code> | <code>string</code> | The GameSessionQueueName component of the ARN. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gameSessionQueueName`<sup>Required</sup> <a name="gameSessionQueueName" id="@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnProps.property.gameSessionQueueName"></a>

```typescript
public readonly gameSessionQueueName: string;
```

- *Type:* string

The GameSessionQueueName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GameLiftLocationArnComponents <a name="GameLiftLocationArnComponents" id="@cdk_utils/iam.gamelift.GameLiftLocationArnComponents"></a>

Parsed components of a location ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftLocationArnComponents.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftLocationArnComponents: gamelift.GameLiftLocationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftLocationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftLocationArnComponents.property.locationId">locationId</a></code> | <code>string</code> | The LocationId component. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftLocationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftLocationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftLocationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `locationId`<sup>Required</sup> <a name="locationId" id="@cdk_utils/iam.gamelift.GameLiftLocationArnComponents.property.locationId"></a>

```typescript
public readonly locationId: string;
```

- *Type:* string

The LocationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftLocationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftLocationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GameLiftLocationArnProps <a name="GameLiftLocationArnProps" id="@cdk_utils/iam.gamelift.GameLiftLocationArnProps"></a>

Properties for building a location ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftLocationArnProps.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftLocationArnProps: gamelift.GameLiftLocationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftLocationArnProps.property.locationId">locationId</a></code> | <code>string</code> | The LocationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftLocationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftLocationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftLocationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `locationId`<sup>Required</sup> <a name="locationId" id="@cdk_utils/iam.gamelift.GameLiftLocationArnProps.property.locationId"></a>

```typescript
public readonly locationId: string;
```

- *Type:* string

The LocationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftLocationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftLocationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftLocationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GameLiftMatchmakingConfigurationArnComponents <a name="GameLiftMatchmakingConfigurationArnComponents" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnComponents"></a>

Parsed components of a matchmakingConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnComponents.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftMatchmakingConfigurationArnComponents: gamelift.GameLiftMatchmakingConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnComponents.property.matchmakingConfigurationName">matchmakingConfigurationName</a></code> | <code>string</code> | The MatchmakingConfigurationName component. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `matchmakingConfigurationName`<sup>Required</sup> <a name="matchmakingConfigurationName" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnComponents.property.matchmakingConfigurationName"></a>

```typescript
public readonly matchmakingConfigurationName: string;
```

- *Type:* string

The MatchmakingConfigurationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GameLiftMatchmakingConfigurationArnProps <a name="GameLiftMatchmakingConfigurationArnProps" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnProps"></a>

Properties for building a matchmakingConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnProps.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftMatchmakingConfigurationArnProps: gamelift.GameLiftMatchmakingConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnProps.property.matchmakingConfigurationName">matchmakingConfigurationName</a></code> | <code>string</code> | The MatchmakingConfigurationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `matchmakingConfigurationName`<sup>Required</sup> <a name="matchmakingConfigurationName" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnProps.property.matchmakingConfigurationName"></a>

```typescript
public readonly matchmakingConfigurationName: string;
```

- *Type:* string

The MatchmakingConfigurationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GameLiftMatchmakingRuleSetArnComponents <a name="GameLiftMatchmakingRuleSetArnComponents" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnComponents"></a>

Parsed components of a matchmakingRuleSet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnComponents.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftMatchmakingRuleSetArnComponents: gamelift.GameLiftMatchmakingRuleSetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnComponents.property.matchmakingRuleSetName">matchmakingRuleSetName</a></code> | <code>string</code> | The MatchmakingRuleSetName component. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `matchmakingRuleSetName`<sup>Required</sup> <a name="matchmakingRuleSetName" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnComponents.property.matchmakingRuleSetName"></a>

```typescript
public readonly matchmakingRuleSetName: string;
```

- *Type:* string

The MatchmakingRuleSetName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GameLiftMatchmakingRuleSetArnProps <a name="GameLiftMatchmakingRuleSetArnProps" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnProps"></a>

Properties for building a matchmakingRuleSet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnProps.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftMatchmakingRuleSetArnProps: gamelift.GameLiftMatchmakingRuleSetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnProps.property.matchmakingRuleSetName">matchmakingRuleSetName</a></code> | <code>string</code> | The MatchmakingRuleSetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `matchmakingRuleSetName`<sup>Required</sup> <a name="matchmakingRuleSetName" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnProps.property.matchmakingRuleSetName"></a>

```typescript
public readonly matchmakingRuleSetName: string;
```

- *Type:* string

The MatchmakingRuleSetName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GameLiftScriptArnComponents <a name="GameLiftScriptArnComponents" id="@cdk_utils/iam.gamelift.GameLiftScriptArnComponents"></a>

Parsed components of a script ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftScriptArnComponents.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftScriptArnComponents: gamelift.GameLiftScriptArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftScriptArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftScriptArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftScriptArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftScriptArnComponents.property.scriptId">scriptId</a></code> | <code>string</code> | The ScriptId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftScriptArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftScriptArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftScriptArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `scriptId`<sup>Required</sup> <a name="scriptId" id="@cdk_utils/iam.gamelift.GameLiftScriptArnComponents.property.scriptId"></a>

```typescript
public readonly scriptId: string;
```

- *Type:* string

The ScriptId component.

---

### GameLiftScriptArnProps <a name="GameLiftScriptArnProps" id="@cdk_utils/iam.gamelift.GameLiftScriptArnProps"></a>

Properties for building a script ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.gamelift.GameLiftScriptArnProps.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

const gameLiftScriptArnProps: gamelift.GameLiftScriptArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftScriptArnProps.property.scriptId">scriptId</a></code> | <code>string</code> | The ScriptId component of the ARN. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftScriptArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftScriptArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftScriptArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `scriptId`<sup>Required</sup> <a name="scriptId" id="@cdk_utils/iam.gamelift.GameLiftScriptArnProps.property.scriptId"></a>

```typescript
public readonly scriptId: string;
```

- *Type:* string

The ScriptId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.gamelift.GameLiftScriptArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.gamelift.GameLiftScriptArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.gamelift.GameLiftScriptArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### GameLiftActions <a name="GameLiftActions" id="@cdk_utils/iam.gamelift.GameLiftActions"></a>

IAM action constants for the gamelift service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.gamelift.GameLiftActions.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

new gamelift.GameLiftActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.AcceptMatch">AcceptMatch</a></code> | <code>string</code> | [Write] gamelift:AcceptMatch. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.actionGetComputeAccess">actionGetComputeAccess</a></code> | <code>string</code> | [Read] gamelift:GetComputeAccess. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.actionGetComputeAuthToken">actionGetComputeAuthToken</a></code> | <code>string</code> | [Read] gamelift:GetComputeAuthToken. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.actionGetGameSessionLogUrl">actionGetGameSessionLogUrl</a></code> | <code>string</code> | [Read] gamelift:GetGameSessionLogUrl. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.actionGetInstanceAccess">actionGetInstanceAccess</a></code> | <code>string</code> | [Read] gamelift:GetInstanceAccess. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.actionGetPlayerConnectionDetails">actionGetPlayerConnectionDetails</a></code> | <code>string</code> | [Read] gamelift:GetPlayerConnectionDetails. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.ClaimGameServer">ClaimGameServer</a></code> | <code>string</code> | [Write] gamelift:ClaimGameServer. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.CreateAlias">CreateAlias</a></code> | <code>string</code> | [Write] gamelift:CreateAlias. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.CreateBuild">CreateBuild</a></code> | <code>string</code> | [Write] gamelift:CreateBuild. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.CreateContainerFleet">CreateContainerFleet</a></code> | <code>string</code> | [Write] gamelift:CreateContainerFleet. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.CreateContainerGroupDefinition">CreateContainerGroupDefinition</a></code> | <code>string</code> | [Write] gamelift:CreateContainerGroupDefinition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.CreateFleet">CreateFleet</a></code> | <code>string</code> | [Write] gamelift:CreateFleet. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.CreateFleetLocations">CreateFleetLocations</a></code> | <code>string</code> | [Write] gamelift:CreateFleetLocations. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.CreateGameServerGroup">CreateGameServerGroup</a></code> | <code>string</code> | [Write] gamelift:CreateGameServerGroup. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.CreateGameSession">CreateGameSession</a></code> | <code>string</code> | [Write] gamelift:CreateGameSession. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.CreateGameSessionQueue">CreateGameSessionQueue</a></code> | <code>string</code> | [Write] gamelift:CreateGameSessionQueue. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.CreateLocation">CreateLocation</a></code> | <code>string</code> | [Write] gamelift:CreateLocation. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.CreateMatchmakingConfiguration">CreateMatchmakingConfiguration</a></code> | <code>string</code> | [Write] gamelift:CreateMatchmakingConfiguration. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.CreateMatchmakingRuleSet">CreateMatchmakingRuleSet</a></code> | <code>string</code> | [Write] gamelift:CreateMatchmakingRuleSet. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.CreatePlayerSession">CreatePlayerSession</a></code> | <code>string</code> | [Write] gamelift:CreatePlayerSession. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.CreatePlayerSessions">CreatePlayerSessions</a></code> | <code>string</code> | [Write] gamelift:CreatePlayerSessions. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.CreateScript">CreateScript</a></code> | <code>string</code> | [Write] gamelift:CreateScript. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.CreateVpcPeeringAuthorization">CreateVpcPeeringAuthorization</a></code> | <code>string</code> | [Write] gamelift:CreateVpcPeeringAuthorization. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.CreateVpcPeeringConnection">CreateVpcPeeringConnection</a></code> | <code>string</code> | [Write] gamelift:CreateVpcPeeringConnection. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteAlias">DeleteAlias</a></code> | <code>string</code> | [Write] gamelift:DeleteAlias. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteBuild">DeleteBuild</a></code> | <code>string</code> | [Write] gamelift:DeleteBuild. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteContainerFleet">DeleteContainerFleet</a></code> | <code>string</code> | [Write] gamelift:DeleteContainerFleet. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteContainerGroupDefinition">DeleteContainerGroupDefinition</a></code> | <code>string</code> | [Write] gamelift:DeleteContainerGroupDefinition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteFleet">DeleteFleet</a></code> | <code>string</code> | [Write] gamelift:DeleteFleet. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteFleetLocations">DeleteFleetLocations</a></code> | <code>string</code> | [Write] gamelift:DeleteFleetLocations. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteGameServerGroup">DeleteGameServerGroup</a></code> | <code>string</code> | [Write] gamelift:DeleteGameServerGroup. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteGameSessionQueue">DeleteGameSessionQueue</a></code> | <code>string</code> | [Write] gamelift:DeleteGameSessionQueue. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteLocation">DeleteLocation</a></code> | <code>string</code> | [Write] gamelift:DeleteLocation. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteMatchmakingConfiguration">DeleteMatchmakingConfiguration</a></code> | <code>string</code> | [Write] gamelift:DeleteMatchmakingConfiguration. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteMatchmakingRuleSet">DeleteMatchmakingRuleSet</a></code> | <code>string</code> | [Write] gamelift:DeleteMatchmakingRuleSet. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteScalingPolicy">DeleteScalingPolicy</a></code> | <code>string</code> | [Write] gamelift:DeleteScalingPolicy. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteScript">DeleteScript</a></code> | <code>string</code> | [Write] gamelift:DeleteScript. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteVpcPeeringAuthorization">DeleteVpcPeeringAuthorization</a></code> | <code>string</code> | [Write] gamelift:DeleteVpcPeeringAuthorization. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteVpcPeeringConnection">DeleteVpcPeeringConnection</a></code> | <code>string</code> | [Write] gamelift:DeleteVpcPeeringConnection. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DeregisterCompute">DeregisterCompute</a></code> | <code>string</code> | [Write] gamelift:DeregisterCompute. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DeregisterGameServer">DeregisterGameServer</a></code> | <code>string</code> | [Write] gamelift:DeregisterGameServer. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeAlias">DescribeAlias</a></code> | <code>string</code> | [Read] gamelift:DescribeAlias. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeBuild">DescribeBuild</a></code> | <code>string</code> | [Read] gamelift:DescribeBuild. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeCompute">DescribeCompute</a></code> | <code>string</code> | [Read] gamelift:DescribeCompute. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeContainerFleet">DescribeContainerFleet</a></code> | <code>string</code> | [Read] gamelift:DescribeContainerFleet. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeContainerGroupDefinition">DescribeContainerGroupDefinition</a></code> | <code>string</code> | [Read] gamelift:DescribeContainerGroupDefinition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeContainerGroupPortMappings">DescribeContainerGroupPortMappings</a></code> | <code>string</code> | [Read] gamelift:DescribeContainerGroupPortMappings. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeEC2InstanceLimits">DescribeEC2InstanceLimits</a></code> | <code>string</code> | [Read] gamelift:DescribeEC2InstanceLimits. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeFleetAttributes">DescribeFleetAttributes</a></code> | <code>string</code> | [Read] gamelift:DescribeFleetAttributes. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeFleetCapacity">DescribeFleetCapacity</a></code> | <code>string</code> | [Read] gamelift:DescribeFleetCapacity. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeFleetDeployment">DescribeFleetDeployment</a></code> | <code>string</code> | [Read] gamelift:DescribeFleetDeployment. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeFleetEvents">DescribeFleetEvents</a></code> | <code>string</code> | [Read] gamelift:DescribeFleetEvents. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeFleetLocationAttributes">DescribeFleetLocationAttributes</a></code> | <code>string</code> | [Read] gamelift:DescribeFleetLocationAttributes. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeFleetLocationCapacity">DescribeFleetLocationCapacity</a></code> | <code>string</code> | [Read] gamelift:DescribeFleetLocationCapacity. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeFleetLocationUtilization">DescribeFleetLocationUtilization</a></code> | <code>string</code> | [Read] gamelift:DescribeFleetLocationUtilization. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeFleetPortSettings">DescribeFleetPortSettings</a></code> | <code>string</code> | [Read] gamelift:DescribeFleetPortSettings. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeFleetUtilization">DescribeFleetUtilization</a></code> | <code>string</code> | [Read] gamelift:DescribeFleetUtilization. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeGameServer">DescribeGameServer</a></code> | <code>string</code> | [Read] gamelift:DescribeGameServer. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeGameServerGroup">DescribeGameServerGroup</a></code> | <code>string</code> | [Read] gamelift:DescribeGameServerGroup. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeGameServerInstances">DescribeGameServerInstances</a></code> | <code>string</code> | [Read] gamelift:DescribeGameServerInstances. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeGameSessionDetails">DescribeGameSessionDetails</a></code> | <code>string</code> | [Read] gamelift:DescribeGameSessionDetails. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeGameSessionPlacement">DescribeGameSessionPlacement</a></code> | <code>string</code> | [Read] gamelift:DescribeGameSessionPlacement. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeGameSessionQueues">DescribeGameSessionQueues</a></code> | <code>string</code> | [Read] gamelift:DescribeGameSessionQueues. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeGameSessions">DescribeGameSessions</a></code> | <code>string</code> | [Read] gamelift:DescribeGameSessions. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeInstances">DescribeInstances</a></code> | <code>string</code> | [Read] gamelift:DescribeInstances. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeMatchmaking">DescribeMatchmaking</a></code> | <code>string</code> | [Read] gamelift:DescribeMatchmaking. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeMatchmakingConfigurations">DescribeMatchmakingConfigurations</a></code> | <code>string</code> | [Read] gamelift:DescribeMatchmakingConfigurations. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeMatchmakingRuleSets">DescribeMatchmakingRuleSets</a></code> | <code>string</code> | [Read] gamelift:DescribeMatchmakingRuleSets. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribePlayerSessions">DescribePlayerSessions</a></code> | <code>string</code> | [Read] gamelift:DescribePlayerSessions. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeRuntimeConfiguration">DescribeRuntimeConfiguration</a></code> | <code>string</code> | [Read] gamelift:DescribeRuntimeConfiguration. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeScalingPolicies">DescribeScalingPolicies</a></code> | <code>string</code> | [Read] gamelift:DescribeScalingPolicies. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeScript">DescribeScript</a></code> | <code>string</code> | [Read] gamelift:DescribeScript. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeVpcPeeringAuthorizations">DescribeVpcPeeringAuthorizations</a></code> | <code>string</code> | [Read] gamelift:DescribeVpcPeeringAuthorizations. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeVpcPeeringConnections">DescribeVpcPeeringConnections</a></code> | <code>string</code> | [Read] gamelift:DescribeVpcPeeringConnections. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.ListAliases">ListAliases</a></code> | <code>string</code> | [List] gamelift:ListAliases. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.ListBuilds">ListBuilds</a></code> | <code>string</code> | [List] gamelift:ListBuilds. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.ListCompute">ListCompute</a></code> | <code>string</code> | [List] gamelift:ListCompute. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.ListContainerFleets">ListContainerFleets</a></code> | <code>string</code> | [List] gamelift:ListContainerFleets. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.ListContainerGroupDefinitions">ListContainerGroupDefinitions</a></code> | <code>string</code> | [List] gamelift:ListContainerGroupDefinitions. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.ListContainerGroupDefinitionVersions">ListContainerGroupDefinitionVersions</a></code> | <code>string</code> | [List] gamelift:ListContainerGroupDefinitionVersions. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.ListFleetDeployments">ListFleetDeployments</a></code> | <code>string</code> | [List] gamelift:ListFleetDeployments. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.ListFleets">ListFleets</a></code> | <code>string</code> | [List] gamelift:ListFleets. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.ListGameServerGroups">ListGameServerGroups</a></code> | <code>string</code> | [List] gamelift:ListGameServerGroups. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.ListGameServers">ListGameServers</a></code> | <code>string</code> | [List] gamelift:ListGameServers. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.ListLocations">ListLocations</a></code> | <code>string</code> | [List] gamelift:ListLocations. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.ListScripts">ListScripts</a></code> | <code>string</code> | [List] gamelift:ListScripts. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] gamelift:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.PutScalingPolicy">PutScalingPolicy</a></code> | <code>string</code> | [Write] gamelift:PutScalingPolicy. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.RegisterCompute">RegisterCompute</a></code> | <code>string</code> | [Write] gamelift:RegisterCompute. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.RegisterGameServer">RegisterGameServer</a></code> | <code>string</code> | [Write] gamelift:RegisterGameServer. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.RequestUploadCredentials">RequestUploadCredentials</a></code> | <code>string</code> | [Read] gamelift:RequestUploadCredentials. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.ResolveAlias">ResolveAlias</a></code> | <code>string</code> | [Read] gamelift:ResolveAlias. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.ResumeGameServerGroup">ResumeGameServerGroup</a></code> | <code>string</code> | [Write] gamelift:ResumeGameServerGroup. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.SearchGameSessions">SearchGameSessions</a></code> | <code>string</code> | [Read] gamelift:SearchGameSessions. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.StartFleetActions">StartFleetActions</a></code> | <code>string</code> | [Write] gamelift:StartFleetActions. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.StartGameSessionPlacement">StartGameSessionPlacement</a></code> | <code>string</code> | [Write] gamelift:StartGameSessionPlacement. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.StartMatchBackfill">StartMatchBackfill</a></code> | <code>string</code> | [Write] gamelift:StartMatchBackfill. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.StartMatchmaking">StartMatchmaking</a></code> | <code>string</code> | [Write] gamelift:StartMatchmaking. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.StopFleetActions">StopFleetActions</a></code> | <code>string</code> | [Write] gamelift:StopFleetActions. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.StopGameSessionPlacement">StopGameSessionPlacement</a></code> | <code>string</code> | [Write] gamelift:StopGameSessionPlacement. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.StopMatchmaking">StopMatchmaking</a></code> | <code>string</code> | [Write] gamelift:StopMatchmaking. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.SuspendGameServerGroup">SuspendGameServerGroup</a></code> | <code>string</code> | [Write] gamelift:SuspendGameServerGroup. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] gamelift:TagResource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.TerminateGameSession">TerminateGameSession</a></code> | <code>string</code> | [Write] gamelift:TerminateGameSession. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] gamelift:UntagResource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateAlias">UpdateAlias</a></code> | <code>string</code> | [Write] gamelift:UpdateAlias. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateBuild">UpdateBuild</a></code> | <code>string</code> | [Write] gamelift:UpdateBuild. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateContainerFleet">UpdateContainerFleet</a></code> | <code>string</code> | [Write] gamelift:UpdateContainerFleet. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateContainerGroupDefinition">UpdateContainerGroupDefinition</a></code> | <code>string</code> | [Write] gamelift:UpdateContainerGroupDefinition. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateFleetAttributes">UpdateFleetAttributes</a></code> | <code>string</code> | [Write] gamelift:UpdateFleetAttributes. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateFleetCapacity">UpdateFleetCapacity</a></code> | <code>string</code> | [Write] gamelift:UpdateFleetCapacity. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateFleetPortSettings">UpdateFleetPortSettings</a></code> | <code>string</code> | [Write] gamelift:UpdateFleetPortSettings. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateGameServer">UpdateGameServer</a></code> | <code>string</code> | [Write] gamelift:UpdateGameServer. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateGameServerGroup">UpdateGameServerGroup</a></code> | <code>string</code> | [Write] gamelift:UpdateGameServerGroup. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateGameSession">UpdateGameSession</a></code> | <code>string</code> | [Write] gamelift:UpdateGameSession. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateGameSessionQueue">UpdateGameSessionQueue</a></code> | <code>string</code> | [Write] gamelift:UpdateGameSessionQueue. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateMatchmakingConfiguration">UpdateMatchmakingConfiguration</a></code> | <code>string</code> | [Write] gamelift:UpdateMatchmakingConfiguration. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateRuntimeConfiguration">UpdateRuntimeConfiguration</a></code> | <code>string</code> | [Write] gamelift:UpdateRuntimeConfiguration. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateScript">UpdateScript</a></code> | <code>string</code> | [Write] gamelift:UpdateScript. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftActions.property.ValidateMatchmakingRuleSet">ValidateMatchmakingRuleSet</a></code> | <code>string</code> | [Read] gamelift:ValidateMatchmakingRuleSet. |

---

##### `AcceptMatch`<sup>Required</sup> <a name="AcceptMatch" id="@cdk_utils/iam.gamelift.GameLiftActions.property.AcceptMatch"></a>

```typescript
public readonly AcceptMatch: string;
```

- *Type:* string

[Write] gamelift:AcceptMatch.

---

##### `actionGetComputeAccess`<sup>Required</sup> <a name="actionGetComputeAccess" id="@cdk_utils/iam.gamelift.GameLiftActions.property.actionGetComputeAccess"></a>

```typescript
public readonly actionGetComputeAccess: string;
```

- *Type:* string

[Read] gamelift:GetComputeAccess.

---

##### `actionGetComputeAuthToken`<sup>Required</sup> <a name="actionGetComputeAuthToken" id="@cdk_utils/iam.gamelift.GameLiftActions.property.actionGetComputeAuthToken"></a>

```typescript
public readonly actionGetComputeAuthToken: string;
```

- *Type:* string

[Read] gamelift:GetComputeAuthToken.

---

##### `actionGetGameSessionLogUrl`<sup>Required</sup> <a name="actionGetGameSessionLogUrl" id="@cdk_utils/iam.gamelift.GameLiftActions.property.actionGetGameSessionLogUrl"></a>

```typescript
public readonly actionGetGameSessionLogUrl: string;
```

- *Type:* string

[Read] gamelift:GetGameSessionLogUrl.

---

##### `actionGetInstanceAccess`<sup>Required</sup> <a name="actionGetInstanceAccess" id="@cdk_utils/iam.gamelift.GameLiftActions.property.actionGetInstanceAccess"></a>

```typescript
public readonly actionGetInstanceAccess: string;
```

- *Type:* string

[Read] gamelift:GetInstanceAccess.

---

##### `actionGetPlayerConnectionDetails`<sup>Required</sup> <a name="actionGetPlayerConnectionDetails" id="@cdk_utils/iam.gamelift.GameLiftActions.property.actionGetPlayerConnectionDetails"></a>

```typescript
public readonly actionGetPlayerConnectionDetails: string;
```

- *Type:* string

[Read] gamelift:GetPlayerConnectionDetails.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.gamelift.GameLiftActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.gamelift.GameLiftActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.gamelift.GameLiftActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.gamelift.GameLiftActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.gamelift.GameLiftActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ClaimGameServer`<sup>Required</sup> <a name="ClaimGameServer" id="@cdk_utils/iam.gamelift.GameLiftActions.property.ClaimGameServer"></a>

```typescript
public readonly ClaimGameServer: string;
```

- *Type:* string

[Write] gamelift:ClaimGameServer.

---

##### `CreateAlias`<sup>Required</sup> <a name="CreateAlias" id="@cdk_utils/iam.gamelift.GameLiftActions.property.CreateAlias"></a>

```typescript
public readonly CreateAlias: string;
```

- *Type:* string

[Write] gamelift:CreateAlias.

---

##### `CreateBuild`<sup>Required</sup> <a name="CreateBuild" id="@cdk_utils/iam.gamelift.GameLiftActions.property.CreateBuild"></a>

```typescript
public readonly CreateBuild: string;
```

- *Type:* string

[Write] gamelift:CreateBuild.

---

##### `CreateContainerFleet`<sup>Required</sup> <a name="CreateContainerFleet" id="@cdk_utils/iam.gamelift.GameLiftActions.property.CreateContainerFleet"></a>

```typescript
public readonly CreateContainerFleet: string;
```

- *Type:* string

[Write] gamelift:CreateContainerFleet.

---

##### `CreateContainerGroupDefinition`<sup>Required</sup> <a name="CreateContainerGroupDefinition" id="@cdk_utils/iam.gamelift.GameLiftActions.property.CreateContainerGroupDefinition"></a>

```typescript
public readonly CreateContainerGroupDefinition: string;
```

- *Type:* string

[Write] gamelift:CreateContainerGroupDefinition.

---

##### `CreateFleet`<sup>Required</sup> <a name="CreateFleet" id="@cdk_utils/iam.gamelift.GameLiftActions.property.CreateFleet"></a>

```typescript
public readonly CreateFleet: string;
```

- *Type:* string

[Write] gamelift:CreateFleet.

---

##### `CreateFleetLocations`<sup>Required</sup> <a name="CreateFleetLocations" id="@cdk_utils/iam.gamelift.GameLiftActions.property.CreateFleetLocations"></a>

```typescript
public readonly CreateFleetLocations: string;
```

- *Type:* string

[Write] gamelift:CreateFleetLocations.

---

##### `CreateGameServerGroup`<sup>Required</sup> <a name="CreateGameServerGroup" id="@cdk_utils/iam.gamelift.GameLiftActions.property.CreateGameServerGroup"></a>

```typescript
public readonly CreateGameServerGroup: string;
```

- *Type:* string

[Write] gamelift:CreateGameServerGroup.

---

##### `CreateGameSession`<sup>Required</sup> <a name="CreateGameSession" id="@cdk_utils/iam.gamelift.GameLiftActions.property.CreateGameSession"></a>

```typescript
public readonly CreateGameSession: string;
```

- *Type:* string

[Write] gamelift:CreateGameSession.

---

##### `CreateGameSessionQueue`<sup>Required</sup> <a name="CreateGameSessionQueue" id="@cdk_utils/iam.gamelift.GameLiftActions.property.CreateGameSessionQueue"></a>

```typescript
public readonly CreateGameSessionQueue: string;
```

- *Type:* string

[Write] gamelift:CreateGameSessionQueue.

---

##### `CreateLocation`<sup>Required</sup> <a name="CreateLocation" id="@cdk_utils/iam.gamelift.GameLiftActions.property.CreateLocation"></a>

```typescript
public readonly CreateLocation: string;
```

- *Type:* string

[Write] gamelift:CreateLocation.

---

##### `CreateMatchmakingConfiguration`<sup>Required</sup> <a name="CreateMatchmakingConfiguration" id="@cdk_utils/iam.gamelift.GameLiftActions.property.CreateMatchmakingConfiguration"></a>

```typescript
public readonly CreateMatchmakingConfiguration: string;
```

- *Type:* string

[Write] gamelift:CreateMatchmakingConfiguration.

---

##### `CreateMatchmakingRuleSet`<sup>Required</sup> <a name="CreateMatchmakingRuleSet" id="@cdk_utils/iam.gamelift.GameLiftActions.property.CreateMatchmakingRuleSet"></a>

```typescript
public readonly CreateMatchmakingRuleSet: string;
```

- *Type:* string

[Write] gamelift:CreateMatchmakingRuleSet.

---

##### `CreatePlayerSession`<sup>Required</sup> <a name="CreatePlayerSession" id="@cdk_utils/iam.gamelift.GameLiftActions.property.CreatePlayerSession"></a>

```typescript
public readonly CreatePlayerSession: string;
```

- *Type:* string

[Write] gamelift:CreatePlayerSession.

---

##### `CreatePlayerSessions`<sup>Required</sup> <a name="CreatePlayerSessions" id="@cdk_utils/iam.gamelift.GameLiftActions.property.CreatePlayerSessions"></a>

```typescript
public readonly CreatePlayerSessions: string;
```

- *Type:* string

[Write] gamelift:CreatePlayerSessions.

---

##### `CreateScript`<sup>Required</sup> <a name="CreateScript" id="@cdk_utils/iam.gamelift.GameLiftActions.property.CreateScript"></a>

```typescript
public readonly CreateScript: string;
```

- *Type:* string

[Write] gamelift:CreateScript.

---

##### `CreateVpcPeeringAuthorization`<sup>Required</sup> <a name="CreateVpcPeeringAuthorization" id="@cdk_utils/iam.gamelift.GameLiftActions.property.CreateVpcPeeringAuthorization"></a>

```typescript
public readonly CreateVpcPeeringAuthorization: string;
```

- *Type:* string

[Write] gamelift:CreateVpcPeeringAuthorization.

---

##### `CreateVpcPeeringConnection`<sup>Required</sup> <a name="CreateVpcPeeringConnection" id="@cdk_utils/iam.gamelift.GameLiftActions.property.CreateVpcPeeringConnection"></a>

```typescript
public readonly CreateVpcPeeringConnection: string;
```

- *Type:* string

[Write] gamelift:CreateVpcPeeringConnection.

---

##### `DeleteAlias`<sup>Required</sup> <a name="DeleteAlias" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteAlias"></a>

```typescript
public readonly DeleteAlias: string;
```

- *Type:* string

[Write] gamelift:DeleteAlias.

---

##### `DeleteBuild`<sup>Required</sup> <a name="DeleteBuild" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteBuild"></a>

```typescript
public readonly DeleteBuild: string;
```

- *Type:* string

[Write] gamelift:DeleteBuild.

---

##### `DeleteContainerFleet`<sup>Required</sup> <a name="DeleteContainerFleet" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteContainerFleet"></a>

```typescript
public readonly DeleteContainerFleet: string;
```

- *Type:* string

[Write] gamelift:DeleteContainerFleet.

---

##### `DeleteContainerGroupDefinition`<sup>Required</sup> <a name="DeleteContainerGroupDefinition" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteContainerGroupDefinition"></a>

```typescript
public readonly DeleteContainerGroupDefinition: string;
```

- *Type:* string

[Write] gamelift:DeleteContainerGroupDefinition.

---

##### `DeleteFleet`<sup>Required</sup> <a name="DeleteFleet" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteFleet"></a>

```typescript
public readonly DeleteFleet: string;
```

- *Type:* string

[Write] gamelift:DeleteFleet.

---

##### `DeleteFleetLocations`<sup>Required</sup> <a name="DeleteFleetLocations" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteFleetLocations"></a>

```typescript
public readonly DeleteFleetLocations: string;
```

- *Type:* string

[Write] gamelift:DeleteFleetLocations.

---

##### `DeleteGameServerGroup`<sup>Required</sup> <a name="DeleteGameServerGroup" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteGameServerGroup"></a>

```typescript
public readonly DeleteGameServerGroup: string;
```

- *Type:* string

[Write] gamelift:DeleteGameServerGroup.

---

##### `DeleteGameSessionQueue`<sup>Required</sup> <a name="DeleteGameSessionQueue" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteGameSessionQueue"></a>

```typescript
public readonly DeleteGameSessionQueue: string;
```

- *Type:* string

[Write] gamelift:DeleteGameSessionQueue.

---

##### `DeleteLocation`<sup>Required</sup> <a name="DeleteLocation" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteLocation"></a>

```typescript
public readonly DeleteLocation: string;
```

- *Type:* string

[Write] gamelift:DeleteLocation.

---

##### `DeleteMatchmakingConfiguration`<sup>Required</sup> <a name="DeleteMatchmakingConfiguration" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteMatchmakingConfiguration"></a>

```typescript
public readonly DeleteMatchmakingConfiguration: string;
```

- *Type:* string

[Write] gamelift:DeleteMatchmakingConfiguration.

---

##### `DeleteMatchmakingRuleSet`<sup>Required</sup> <a name="DeleteMatchmakingRuleSet" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteMatchmakingRuleSet"></a>

```typescript
public readonly DeleteMatchmakingRuleSet: string;
```

- *Type:* string

[Write] gamelift:DeleteMatchmakingRuleSet.

---

##### `DeleteScalingPolicy`<sup>Required</sup> <a name="DeleteScalingPolicy" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteScalingPolicy"></a>

```typescript
public readonly DeleteScalingPolicy: string;
```

- *Type:* string

[Write] gamelift:DeleteScalingPolicy.

---

##### `DeleteScript`<sup>Required</sup> <a name="DeleteScript" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteScript"></a>

```typescript
public readonly DeleteScript: string;
```

- *Type:* string

[Write] gamelift:DeleteScript.

---

##### `DeleteVpcPeeringAuthorization`<sup>Required</sup> <a name="DeleteVpcPeeringAuthorization" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteVpcPeeringAuthorization"></a>

```typescript
public readonly DeleteVpcPeeringAuthorization: string;
```

- *Type:* string

[Write] gamelift:DeleteVpcPeeringAuthorization.

---

##### `DeleteVpcPeeringConnection`<sup>Required</sup> <a name="DeleteVpcPeeringConnection" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DeleteVpcPeeringConnection"></a>

```typescript
public readonly DeleteVpcPeeringConnection: string;
```

- *Type:* string

[Write] gamelift:DeleteVpcPeeringConnection.

---

##### `DeregisterCompute`<sup>Required</sup> <a name="DeregisterCompute" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DeregisterCompute"></a>

```typescript
public readonly DeregisterCompute: string;
```

- *Type:* string

[Write] gamelift:DeregisterCompute.

---

##### `DeregisterGameServer`<sup>Required</sup> <a name="DeregisterGameServer" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DeregisterGameServer"></a>

```typescript
public readonly DeregisterGameServer: string;
```

- *Type:* string

[Write] gamelift:DeregisterGameServer.

---

##### `DescribeAlias`<sup>Required</sup> <a name="DescribeAlias" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeAlias"></a>

```typescript
public readonly DescribeAlias: string;
```

- *Type:* string

[Read] gamelift:DescribeAlias.

---

##### `DescribeBuild`<sup>Required</sup> <a name="DescribeBuild" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeBuild"></a>

```typescript
public readonly DescribeBuild: string;
```

- *Type:* string

[Read] gamelift:DescribeBuild.

---

##### `DescribeCompute`<sup>Required</sup> <a name="DescribeCompute" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeCompute"></a>

```typescript
public readonly DescribeCompute: string;
```

- *Type:* string

[Read] gamelift:DescribeCompute.

---

##### `DescribeContainerFleet`<sup>Required</sup> <a name="DescribeContainerFleet" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeContainerFleet"></a>

```typescript
public readonly DescribeContainerFleet: string;
```

- *Type:* string

[Read] gamelift:DescribeContainerFleet.

---

##### `DescribeContainerGroupDefinition`<sup>Required</sup> <a name="DescribeContainerGroupDefinition" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeContainerGroupDefinition"></a>

```typescript
public readonly DescribeContainerGroupDefinition: string;
```

- *Type:* string

[Read] gamelift:DescribeContainerGroupDefinition.

---

##### `DescribeContainerGroupPortMappings`<sup>Required</sup> <a name="DescribeContainerGroupPortMappings" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeContainerGroupPortMappings"></a>

```typescript
public readonly DescribeContainerGroupPortMappings: string;
```

- *Type:* string

[Read] gamelift:DescribeContainerGroupPortMappings.

---

##### `DescribeEC2InstanceLimits`<sup>Required</sup> <a name="DescribeEC2InstanceLimits" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeEC2InstanceLimits"></a>

```typescript
public readonly DescribeEC2InstanceLimits: string;
```

- *Type:* string

[Read] gamelift:DescribeEC2InstanceLimits.

---

##### `DescribeFleetAttributes`<sup>Required</sup> <a name="DescribeFleetAttributes" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeFleetAttributes"></a>

```typescript
public readonly DescribeFleetAttributes: string;
```

- *Type:* string

[Read] gamelift:DescribeFleetAttributes.

---

##### `DescribeFleetCapacity`<sup>Required</sup> <a name="DescribeFleetCapacity" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeFleetCapacity"></a>

```typescript
public readonly DescribeFleetCapacity: string;
```

- *Type:* string

[Read] gamelift:DescribeFleetCapacity.

---

##### `DescribeFleetDeployment`<sup>Required</sup> <a name="DescribeFleetDeployment" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeFleetDeployment"></a>

```typescript
public readonly DescribeFleetDeployment: string;
```

- *Type:* string

[Read] gamelift:DescribeFleetDeployment.

---

##### `DescribeFleetEvents`<sup>Required</sup> <a name="DescribeFleetEvents" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeFleetEvents"></a>

```typescript
public readonly DescribeFleetEvents: string;
```

- *Type:* string

[Read] gamelift:DescribeFleetEvents.

---

##### `DescribeFleetLocationAttributes`<sup>Required</sup> <a name="DescribeFleetLocationAttributes" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeFleetLocationAttributes"></a>

```typescript
public readonly DescribeFleetLocationAttributes: string;
```

- *Type:* string

[Read] gamelift:DescribeFleetLocationAttributes.

---

##### `DescribeFleetLocationCapacity`<sup>Required</sup> <a name="DescribeFleetLocationCapacity" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeFleetLocationCapacity"></a>

```typescript
public readonly DescribeFleetLocationCapacity: string;
```

- *Type:* string

[Read] gamelift:DescribeFleetLocationCapacity.

---

##### `DescribeFleetLocationUtilization`<sup>Required</sup> <a name="DescribeFleetLocationUtilization" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeFleetLocationUtilization"></a>

```typescript
public readonly DescribeFleetLocationUtilization: string;
```

- *Type:* string

[Read] gamelift:DescribeFleetLocationUtilization.

---

##### `DescribeFleetPortSettings`<sup>Required</sup> <a name="DescribeFleetPortSettings" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeFleetPortSettings"></a>

```typescript
public readonly DescribeFleetPortSettings: string;
```

- *Type:* string

[Read] gamelift:DescribeFleetPortSettings.

---

##### `DescribeFleetUtilization`<sup>Required</sup> <a name="DescribeFleetUtilization" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeFleetUtilization"></a>

```typescript
public readonly DescribeFleetUtilization: string;
```

- *Type:* string

[Read] gamelift:DescribeFleetUtilization.

---

##### `DescribeGameServer`<sup>Required</sup> <a name="DescribeGameServer" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeGameServer"></a>

```typescript
public readonly DescribeGameServer: string;
```

- *Type:* string

[Read] gamelift:DescribeGameServer.

---

##### `DescribeGameServerGroup`<sup>Required</sup> <a name="DescribeGameServerGroup" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeGameServerGroup"></a>

```typescript
public readonly DescribeGameServerGroup: string;
```

- *Type:* string

[Read] gamelift:DescribeGameServerGroup.

---

##### `DescribeGameServerInstances`<sup>Required</sup> <a name="DescribeGameServerInstances" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeGameServerInstances"></a>

```typescript
public readonly DescribeGameServerInstances: string;
```

- *Type:* string

[Read] gamelift:DescribeGameServerInstances.

---

##### `DescribeGameSessionDetails`<sup>Required</sup> <a name="DescribeGameSessionDetails" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeGameSessionDetails"></a>

```typescript
public readonly DescribeGameSessionDetails: string;
```

- *Type:* string

[Read] gamelift:DescribeGameSessionDetails.

---

##### `DescribeGameSessionPlacement`<sup>Required</sup> <a name="DescribeGameSessionPlacement" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeGameSessionPlacement"></a>

```typescript
public readonly DescribeGameSessionPlacement: string;
```

- *Type:* string

[Read] gamelift:DescribeGameSessionPlacement.

---

##### `DescribeGameSessionQueues`<sup>Required</sup> <a name="DescribeGameSessionQueues" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeGameSessionQueues"></a>

```typescript
public readonly DescribeGameSessionQueues: string;
```

- *Type:* string

[Read] gamelift:DescribeGameSessionQueues.

---

##### `DescribeGameSessions`<sup>Required</sup> <a name="DescribeGameSessions" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeGameSessions"></a>

```typescript
public readonly DescribeGameSessions: string;
```

- *Type:* string

[Read] gamelift:DescribeGameSessions.

---

##### `DescribeInstances`<sup>Required</sup> <a name="DescribeInstances" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeInstances"></a>

```typescript
public readonly DescribeInstances: string;
```

- *Type:* string

[Read] gamelift:DescribeInstances.

---

##### `DescribeMatchmaking`<sup>Required</sup> <a name="DescribeMatchmaking" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeMatchmaking"></a>

```typescript
public readonly DescribeMatchmaking: string;
```

- *Type:* string

[Read] gamelift:DescribeMatchmaking.

---

##### `DescribeMatchmakingConfigurations`<sup>Required</sup> <a name="DescribeMatchmakingConfigurations" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeMatchmakingConfigurations"></a>

```typescript
public readonly DescribeMatchmakingConfigurations: string;
```

- *Type:* string

[Read] gamelift:DescribeMatchmakingConfigurations.

---

##### `DescribeMatchmakingRuleSets`<sup>Required</sup> <a name="DescribeMatchmakingRuleSets" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeMatchmakingRuleSets"></a>

```typescript
public readonly DescribeMatchmakingRuleSets: string;
```

- *Type:* string

[Read] gamelift:DescribeMatchmakingRuleSets.

---

##### `DescribePlayerSessions`<sup>Required</sup> <a name="DescribePlayerSessions" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribePlayerSessions"></a>

```typescript
public readonly DescribePlayerSessions: string;
```

- *Type:* string

[Read] gamelift:DescribePlayerSessions.

---

##### `DescribeRuntimeConfiguration`<sup>Required</sup> <a name="DescribeRuntimeConfiguration" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeRuntimeConfiguration"></a>

```typescript
public readonly DescribeRuntimeConfiguration: string;
```

- *Type:* string

[Read] gamelift:DescribeRuntimeConfiguration.

---

##### `DescribeScalingPolicies`<sup>Required</sup> <a name="DescribeScalingPolicies" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeScalingPolicies"></a>

```typescript
public readonly DescribeScalingPolicies: string;
```

- *Type:* string

[Read] gamelift:DescribeScalingPolicies.

---

##### `DescribeScript`<sup>Required</sup> <a name="DescribeScript" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeScript"></a>

```typescript
public readonly DescribeScript: string;
```

- *Type:* string

[Read] gamelift:DescribeScript.

---

##### `DescribeVpcPeeringAuthorizations`<sup>Required</sup> <a name="DescribeVpcPeeringAuthorizations" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeVpcPeeringAuthorizations"></a>

```typescript
public readonly DescribeVpcPeeringAuthorizations: string;
```

- *Type:* string

[Read] gamelift:DescribeVpcPeeringAuthorizations.

---

##### `DescribeVpcPeeringConnections`<sup>Required</sup> <a name="DescribeVpcPeeringConnections" id="@cdk_utils/iam.gamelift.GameLiftActions.property.DescribeVpcPeeringConnections"></a>

```typescript
public readonly DescribeVpcPeeringConnections: string;
```

- *Type:* string

[Read] gamelift:DescribeVpcPeeringConnections.

---

##### `ListAliases`<sup>Required</sup> <a name="ListAliases" id="@cdk_utils/iam.gamelift.GameLiftActions.property.ListAliases"></a>

```typescript
public readonly ListAliases: string;
```

- *Type:* string

[List] gamelift:ListAliases.

---

##### `ListBuilds`<sup>Required</sup> <a name="ListBuilds" id="@cdk_utils/iam.gamelift.GameLiftActions.property.ListBuilds"></a>

```typescript
public readonly ListBuilds: string;
```

- *Type:* string

[List] gamelift:ListBuilds.

---

##### `ListCompute`<sup>Required</sup> <a name="ListCompute" id="@cdk_utils/iam.gamelift.GameLiftActions.property.ListCompute"></a>

```typescript
public readonly ListCompute: string;
```

- *Type:* string

[List] gamelift:ListCompute.

---

##### `ListContainerFleets`<sup>Required</sup> <a name="ListContainerFleets" id="@cdk_utils/iam.gamelift.GameLiftActions.property.ListContainerFleets"></a>

```typescript
public readonly ListContainerFleets: string;
```

- *Type:* string

[List] gamelift:ListContainerFleets.

---

##### `ListContainerGroupDefinitions`<sup>Required</sup> <a name="ListContainerGroupDefinitions" id="@cdk_utils/iam.gamelift.GameLiftActions.property.ListContainerGroupDefinitions"></a>

```typescript
public readonly ListContainerGroupDefinitions: string;
```

- *Type:* string

[List] gamelift:ListContainerGroupDefinitions.

---

##### `ListContainerGroupDefinitionVersions`<sup>Required</sup> <a name="ListContainerGroupDefinitionVersions" id="@cdk_utils/iam.gamelift.GameLiftActions.property.ListContainerGroupDefinitionVersions"></a>

```typescript
public readonly ListContainerGroupDefinitionVersions: string;
```

- *Type:* string

[List] gamelift:ListContainerGroupDefinitionVersions.

---

##### `ListFleetDeployments`<sup>Required</sup> <a name="ListFleetDeployments" id="@cdk_utils/iam.gamelift.GameLiftActions.property.ListFleetDeployments"></a>

```typescript
public readonly ListFleetDeployments: string;
```

- *Type:* string

[List] gamelift:ListFleetDeployments.

---

##### `ListFleets`<sup>Required</sup> <a name="ListFleets" id="@cdk_utils/iam.gamelift.GameLiftActions.property.ListFleets"></a>

```typescript
public readonly ListFleets: string;
```

- *Type:* string

[List] gamelift:ListFleets.

---

##### `ListGameServerGroups`<sup>Required</sup> <a name="ListGameServerGroups" id="@cdk_utils/iam.gamelift.GameLiftActions.property.ListGameServerGroups"></a>

```typescript
public readonly ListGameServerGroups: string;
```

- *Type:* string

[List] gamelift:ListGameServerGroups.

---

##### `ListGameServers`<sup>Required</sup> <a name="ListGameServers" id="@cdk_utils/iam.gamelift.GameLiftActions.property.ListGameServers"></a>

```typescript
public readonly ListGameServers: string;
```

- *Type:* string

[List] gamelift:ListGameServers.

---

##### `ListLocations`<sup>Required</sup> <a name="ListLocations" id="@cdk_utils/iam.gamelift.GameLiftActions.property.ListLocations"></a>

```typescript
public readonly ListLocations: string;
```

- *Type:* string

[List] gamelift:ListLocations.

---

##### `ListScripts`<sup>Required</sup> <a name="ListScripts" id="@cdk_utils/iam.gamelift.GameLiftActions.property.ListScripts"></a>

```typescript
public readonly ListScripts: string;
```

- *Type:* string

[List] gamelift:ListScripts.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.gamelift.GameLiftActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] gamelift:ListTagsForResource.

---

##### `PutScalingPolicy`<sup>Required</sup> <a name="PutScalingPolicy" id="@cdk_utils/iam.gamelift.GameLiftActions.property.PutScalingPolicy"></a>

```typescript
public readonly PutScalingPolicy: string;
```

- *Type:* string

[Write] gamelift:PutScalingPolicy.

---

##### `RegisterCompute`<sup>Required</sup> <a name="RegisterCompute" id="@cdk_utils/iam.gamelift.GameLiftActions.property.RegisterCompute"></a>

```typescript
public readonly RegisterCompute: string;
```

- *Type:* string

[Write] gamelift:RegisterCompute.

---

##### `RegisterGameServer`<sup>Required</sup> <a name="RegisterGameServer" id="@cdk_utils/iam.gamelift.GameLiftActions.property.RegisterGameServer"></a>

```typescript
public readonly RegisterGameServer: string;
```

- *Type:* string

[Write] gamelift:RegisterGameServer.

---

##### `RequestUploadCredentials`<sup>Required</sup> <a name="RequestUploadCredentials" id="@cdk_utils/iam.gamelift.GameLiftActions.property.RequestUploadCredentials"></a>

```typescript
public readonly RequestUploadCredentials: string;
```

- *Type:* string

[Read] gamelift:RequestUploadCredentials.

---

##### `ResolveAlias`<sup>Required</sup> <a name="ResolveAlias" id="@cdk_utils/iam.gamelift.GameLiftActions.property.ResolveAlias"></a>

```typescript
public readonly ResolveAlias: string;
```

- *Type:* string

[Read] gamelift:ResolveAlias.

---

##### `ResumeGameServerGroup`<sup>Required</sup> <a name="ResumeGameServerGroup" id="@cdk_utils/iam.gamelift.GameLiftActions.property.ResumeGameServerGroup"></a>

```typescript
public readonly ResumeGameServerGroup: string;
```

- *Type:* string

[Write] gamelift:ResumeGameServerGroup.

---

##### `SearchGameSessions`<sup>Required</sup> <a name="SearchGameSessions" id="@cdk_utils/iam.gamelift.GameLiftActions.property.SearchGameSessions"></a>

```typescript
public readonly SearchGameSessions: string;
```

- *Type:* string

[Read] gamelift:SearchGameSessions.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.gamelift.GameLiftActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartFleetActions`<sup>Required</sup> <a name="StartFleetActions" id="@cdk_utils/iam.gamelift.GameLiftActions.property.StartFleetActions"></a>

```typescript
public readonly StartFleetActions: string;
```

- *Type:* string

[Write] gamelift:StartFleetActions.

---

##### `StartGameSessionPlacement`<sup>Required</sup> <a name="StartGameSessionPlacement" id="@cdk_utils/iam.gamelift.GameLiftActions.property.StartGameSessionPlacement"></a>

```typescript
public readonly StartGameSessionPlacement: string;
```

- *Type:* string

[Write] gamelift:StartGameSessionPlacement.

---

##### `StartMatchBackfill`<sup>Required</sup> <a name="StartMatchBackfill" id="@cdk_utils/iam.gamelift.GameLiftActions.property.StartMatchBackfill"></a>

```typescript
public readonly StartMatchBackfill: string;
```

- *Type:* string

[Write] gamelift:StartMatchBackfill.

---

##### `StartMatchmaking`<sup>Required</sup> <a name="StartMatchmaking" id="@cdk_utils/iam.gamelift.GameLiftActions.property.StartMatchmaking"></a>

```typescript
public readonly StartMatchmaking: string;
```

- *Type:* string

[Write] gamelift:StartMatchmaking.

---

##### `StopFleetActions`<sup>Required</sup> <a name="StopFleetActions" id="@cdk_utils/iam.gamelift.GameLiftActions.property.StopFleetActions"></a>

```typescript
public readonly StopFleetActions: string;
```

- *Type:* string

[Write] gamelift:StopFleetActions.

---

##### `StopGameSessionPlacement`<sup>Required</sup> <a name="StopGameSessionPlacement" id="@cdk_utils/iam.gamelift.GameLiftActions.property.StopGameSessionPlacement"></a>

```typescript
public readonly StopGameSessionPlacement: string;
```

- *Type:* string

[Write] gamelift:StopGameSessionPlacement.

---

##### `StopMatchmaking`<sup>Required</sup> <a name="StopMatchmaking" id="@cdk_utils/iam.gamelift.GameLiftActions.property.StopMatchmaking"></a>

```typescript
public readonly StopMatchmaking: string;
```

- *Type:* string

[Write] gamelift:StopMatchmaking.

---

##### `SuspendGameServerGroup`<sup>Required</sup> <a name="SuspendGameServerGroup" id="@cdk_utils/iam.gamelift.GameLiftActions.property.SuspendGameServerGroup"></a>

```typescript
public readonly SuspendGameServerGroup: string;
```

- *Type:* string

[Write] gamelift:SuspendGameServerGroup.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.gamelift.GameLiftActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] gamelift:TagResource.

---

##### `TerminateGameSession`<sup>Required</sup> <a name="TerminateGameSession" id="@cdk_utils/iam.gamelift.GameLiftActions.property.TerminateGameSession"></a>

```typescript
public readonly TerminateGameSession: string;
```

- *Type:* string

[Write] gamelift:TerminateGameSession.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.gamelift.GameLiftActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] gamelift:UntagResource.

---

##### `UpdateAlias`<sup>Required</sup> <a name="UpdateAlias" id="@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateAlias"></a>

```typescript
public readonly UpdateAlias: string;
```

- *Type:* string

[Write] gamelift:UpdateAlias.

---

##### `UpdateBuild`<sup>Required</sup> <a name="UpdateBuild" id="@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateBuild"></a>

```typescript
public readonly UpdateBuild: string;
```

- *Type:* string

[Write] gamelift:UpdateBuild.

---

##### `UpdateContainerFleet`<sup>Required</sup> <a name="UpdateContainerFleet" id="@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateContainerFleet"></a>

```typescript
public readonly UpdateContainerFleet: string;
```

- *Type:* string

[Write] gamelift:UpdateContainerFleet.

---

##### `UpdateContainerGroupDefinition`<sup>Required</sup> <a name="UpdateContainerGroupDefinition" id="@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateContainerGroupDefinition"></a>

```typescript
public readonly UpdateContainerGroupDefinition: string;
```

- *Type:* string

[Write] gamelift:UpdateContainerGroupDefinition.

---

##### `UpdateFleetAttributes`<sup>Required</sup> <a name="UpdateFleetAttributes" id="@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateFleetAttributes"></a>

```typescript
public readonly UpdateFleetAttributes: string;
```

- *Type:* string

[Write] gamelift:UpdateFleetAttributes.

---

##### `UpdateFleetCapacity`<sup>Required</sup> <a name="UpdateFleetCapacity" id="@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateFleetCapacity"></a>

```typescript
public readonly UpdateFleetCapacity: string;
```

- *Type:* string

[Write] gamelift:UpdateFleetCapacity.

---

##### `UpdateFleetPortSettings`<sup>Required</sup> <a name="UpdateFleetPortSettings" id="@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateFleetPortSettings"></a>

```typescript
public readonly UpdateFleetPortSettings: string;
```

- *Type:* string

[Write] gamelift:UpdateFleetPortSettings.

---

##### `UpdateGameServer`<sup>Required</sup> <a name="UpdateGameServer" id="@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateGameServer"></a>

```typescript
public readonly UpdateGameServer: string;
```

- *Type:* string

[Write] gamelift:UpdateGameServer.

---

##### `UpdateGameServerGroup`<sup>Required</sup> <a name="UpdateGameServerGroup" id="@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateGameServerGroup"></a>

```typescript
public readonly UpdateGameServerGroup: string;
```

- *Type:* string

[Write] gamelift:UpdateGameServerGroup.

---

##### `UpdateGameSession`<sup>Required</sup> <a name="UpdateGameSession" id="@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateGameSession"></a>

```typescript
public readonly UpdateGameSession: string;
```

- *Type:* string

[Write] gamelift:UpdateGameSession.

---

##### `UpdateGameSessionQueue`<sup>Required</sup> <a name="UpdateGameSessionQueue" id="@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateGameSessionQueue"></a>

```typescript
public readonly UpdateGameSessionQueue: string;
```

- *Type:* string

[Write] gamelift:UpdateGameSessionQueue.

---

##### `UpdateMatchmakingConfiguration`<sup>Required</sup> <a name="UpdateMatchmakingConfiguration" id="@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateMatchmakingConfiguration"></a>

```typescript
public readonly UpdateMatchmakingConfiguration: string;
```

- *Type:* string

[Write] gamelift:UpdateMatchmakingConfiguration.

---

##### `UpdateRuntimeConfiguration`<sup>Required</sup> <a name="UpdateRuntimeConfiguration" id="@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateRuntimeConfiguration"></a>

```typescript
public readonly UpdateRuntimeConfiguration: string;
```

- *Type:* string

[Write] gamelift:UpdateRuntimeConfiguration.

---

##### `UpdateScript`<sup>Required</sup> <a name="UpdateScript" id="@cdk_utils/iam.gamelift.GameLiftActions.property.UpdateScript"></a>

```typescript
public readonly UpdateScript: string;
```

- *Type:* string

[Write] gamelift:UpdateScript.

---

##### `ValidateMatchmakingRuleSet`<sup>Required</sup> <a name="ValidateMatchmakingRuleSet" id="@cdk_utils/iam.gamelift.GameLiftActions.property.ValidateMatchmakingRuleSet"></a>

```typescript
public readonly ValidateMatchmakingRuleSet: string;
```

- *Type:* string

[Read] gamelift:ValidateMatchmakingRuleSet.

---

### GameLiftConditions <a name="GameLiftConditions" id="@cdk_utils/iam.gamelift.GameLiftConditions"></a>

Condition key constants and builders for gamelift.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.gamelift.GameLiftConditions.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

new gamelift.GameLiftConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.gamelift.GameLiftConditions.requestTag"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.gamelift.GameLiftConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.gamelift.GameLiftConditions.resourceTag"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.gamelift.GameLiftConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.gamelift.GameLiftConditions.tagKeys"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.gamelift.GameLiftConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateAliasConditionKeys">CreateAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAlias action. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateBuildConditionKeys">CreateBuildConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBuild action. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateContainerFleetConditionKeys">CreateContainerFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateContainerFleet action. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateContainerGroupDefinitionConditionKeys">CreateContainerGroupDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateContainerGroupDefinition action. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateFleetConditionKeys">CreateFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFleet action. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateGameServerGroupConditionKeys">CreateGameServerGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGameServerGroup action. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateGameSessionQueueConditionKeys">CreateGameSessionQueueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGameSessionQueue action. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateLocationConditionKeys">CreateLocationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLocation action. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateMatchmakingConfigurationConditionKeys">CreateMatchmakingConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMatchmakingConfiguration action. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateMatchmakingRuleSetConditionKeys">CreateMatchmakingRuleSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMatchmakingRuleSet action. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateScriptConditionKeys">CreateScriptConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateScript action. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.gamelift.GameLiftConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.gamelift.GameLiftConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.gamelift.GameLiftConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAliasConditionKeys`<sup>Required</sup> <a name="CreateAliasConditionKeys" id="@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateAliasConditionKeys"></a>

```typescript
public readonly CreateAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAlias action.

---

##### `CreateBuildConditionKeys`<sup>Required</sup> <a name="CreateBuildConditionKeys" id="@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateBuildConditionKeys"></a>

```typescript
public readonly CreateBuildConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBuild action.

---

##### `CreateContainerFleetConditionKeys`<sup>Required</sup> <a name="CreateContainerFleetConditionKeys" id="@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateContainerFleetConditionKeys"></a>

```typescript
public readonly CreateContainerFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateContainerFleet action.

---

##### `CreateContainerGroupDefinitionConditionKeys`<sup>Required</sup> <a name="CreateContainerGroupDefinitionConditionKeys" id="@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateContainerGroupDefinitionConditionKeys"></a>

```typescript
public readonly CreateContainerGroupDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateContainerGroupDefinition action.

---

##### `CreateFleetConditionKeys`<sup>Required</sup> <a name="CreateFleetConditionKeys" id="@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateFleetConditionKeys"></a>

```typescript
public readonly CreateFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFleet action.

---

##### `CreateGameServerGroupConditionKeys`<sup>Required</sup> <a name="CreateGameServerGroupConditionKeys" id="@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateGameServerGroupConditionKeys"></a>

```typescript
public readonly CreateGameServerGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGameServerGroup action.

---

##### `CreateGameSessionQueueConditionKeys`<sup>Required</sup> <a name="CreateGameSessionQueueConditionKeys" id="@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateGameSessionQueueConditionKeys"></a>

```typescript
public readonly CreateGameSessionQueueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGameSessionQueue action.

---

##### `CreateLocationConditionKeys`<sup>Required</sup> <a name="CreateLocationConditionKeys" id="@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateLocationConditionKeys"></a>

```typescript
public readonly CreateLocationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLocation action.

---

##### `CreateMatchmakingConfigurationConditionKeys`<sup>Required</sup> <a name="CreateMatchmakingConfigurationConditionKeys" id="@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateMatchmakingConfigurationConditionKeys"></a>

```typescript
public readonly CreateMatchmakingConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMatchmakingConfiguration action.

---

##### `CreateMatchmakingRuleSetConditionKeys`<sup>Required</sup> <a name="CreateMatchmakingRuleSetConditionKeys" id="@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateMatchmakingRuleSetConditionKeys"></a>

```typescript
public readonly CreateMatchmakingRuleSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMatchmakingRuleSet action.

---

##### `CreateScriptConditionKeys`<sup>Required</sup> <a name="CreateScriptConditionKeys" id="@cdk_utils/iam.gamelift.GameLiftConditions.property.CreateScriptConditionKeys"></a>

```typescript
public readonly CreateScriptConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateScript action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.gamelift.GameLiftConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.gamelift.GameLiftConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### GameLiftOperations <a name="GameLiftOperations" id="@cdk_utils/iam.gamelift.GameLiftOperations"></a>

API operation to required IAM actions mapping for gamelift.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.gamelift.GameLiftOperations.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

new gamelift.GameLiftOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.AcceptMatch">AcceptMatch</a></code> | <code>string[]</code> | IAM actions required for the AcceptMatch API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.ClaimGameServer">ClaimGameServer</a></code> | <code>string[]</code> | IAM actions required for the ClaimGameServer API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateAlias">CreateAlias</a></code> | <code>string[]</code> | IAM actions required for the CreateAlias API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateBuild">CreateBuild</a></code> | <code>string[]</code> | IAM actions required for the CreateBuild API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateContainerFleet">CreateContainerFleet</a></code> | <code>string[]</code> | IAM actions required for the CreateContainerFleet API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateContainerGroupDefinition">CreateContainerGroupDefinition</a></code> | <code>string[]</code> | IAM actions required for the CreateContainerGroupDefinition API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateFleet">CreateFleet</a></code> | <code>string[]</code> | IAM actions required for the CreateFleet API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateFleetLocations">CreateFleetLocations</a></code> | <code>string[]</code> | IAM actions required for the CreateFleetLocations API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateGameServerGroup">CreateGameServerGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateGameServerGroup API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateGameSession">CreateGameSession</a></code> | <code>string[]</code> | IAM actions required for the CreateGameSession API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateGameSessionQueue">CreateGameSessionQueue</a></code> | <code>string[]</code> | IAM actions required for the CreateGameSessionQueue API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateLocation">CreateLocation</a></code> | <code>string[]</code> | IAM actions required for the CreateLocation API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateMatchmakingConfiguration">CreateMatchmakingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateMatchmakingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateMatchmakingRuleSet">CreateMatchmakingRuleSet</a></code> | <code>string[]</code> | IAM actions required for the CreateMatchmakingRuleSet API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.CreatePlayerSession">CreatePlayerSession</a></code> | <code>string[]</code> | IAM actions required for the CreatePlayerSession API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.CreatePlayerSessions">CreatePlayerSessions</a></code> | <code>string[]</code> | IAM actions required for the CreatePlayerSessions API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateScript">CreateScript</a></code> | <code>string[]</code> | IAM actions required for the CreateScript API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateVpcPeeringAuthorization">CreateVpcPeeringAuthorization</a></code> | <code>string[]</code> | IAM actions required for the CreateVpcPeeringAuthorization API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateVpcPeeringConnection">CreateVpcPeeringConnection</a></code> | <code>string[]</code> | IAM actions required for the CreateVpcPeeringConnection API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteAlias">DeleteAlias</a></code> | <code>string[]</code> | IAM actions required for the DeleteAlias API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteBuild">DeleteBuild</a></code> | <code>string[]</code> | IAM actions required for the DeleteBuild API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteContainerFleet">DeleteContainerFleet</a></code> | <code>string[]</code> | IAM actions required for the DeleteContainerFleet API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteContainerGroupDefinition">DeleteContainerGroupDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteContainerGroupDefinition API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteFleet">DeleteFleet</a></code> | <code>string[]</code> | IAM actions required for the DeleteFleet API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteFleetLocations">DeleteFleetLocations</a></code> | <code>string[]</code> | IAM actions required for the DeleteFleetLocations API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteGameServerGroup">DeleteGameServerGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteGameServerGroup API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteGameSessionQueue">DeleteGameSessionQueue</a></code> | <code>string[]</code> | IAM actions required for the DeleteGameSessionQueue API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteLocation">DeleteLocation</a></code> | <code>string[]</code> | IAM actions required for the DeleteLocation API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteMatchmakingConfiguration">DeleteMatchmakingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteMatchmakingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteMatchmakingRuleSet">DeleteMatchmakingRuleSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteMatchmakingRuleSet API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteScalingPolicy">DeleteScalingPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteScalingPolicy API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteScript">DeleteScript</a></code> | <code>string[]</code> | IAM actions required for the DeleteScript API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteVpcPeeringAuthorization">DeleteVpcPeeringAuthorization</a></code> | <code>string[]</code> | IAM actions required for the DeleteVpcPeeringAuthorization API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteVpcPeeringConnection">DeleteVpcPeeringConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteVpcPeeringConnection API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DeregisterCompute">DeregisterCompute</a></code> | <code>string[]</code> | IAM actions required for the DeregisterCompute API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DeregisterGameServer">DeregisterGameServer</a></code> | <code>string[]</code> | IAM actions required for the DeregisterGameServer API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeAlias">DescribeAlias</a></code> | <code>string[]</code> | IAM actions required for the DescribeAlias API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeBuild">DescribeBuild</a></code> | <code>string[]</code> | IAM actions required for the DescribeBuild API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeCompute">DescribeCompute</a></code> | <code>string[]</code> | IAM actions required for the DescribeCompute API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeContainerFleet">DescribeContainerFleet</a></code> | <code>string[]</code> | IAM actions required for the DescribeContainerFleet API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeContainerGroupDefinition">DescribeContainerGroupDefinition</a></code> | <code>string[]</code> | IAM actions required for the DescribeContainerGroupDefinition API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeContainerGroupPortMappings">DescribeContainerGroupPortMappings</a></code> | <code>string[]</code> | IAM actions required for the DescribeContainerGroupPortMappings API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeEC2InstanceLimits">DescribeEC2InstanceLimits</a></code> | <code>string[]</code> | IAM actions required for the DescribeEC2InstanceLimits API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeFleetAttributes">DescribeFleetAttributes</a></code> | <code>string[]</code> | IAM actions required for the DescribeFleetAttributes API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeFleetCapacity">DescribeFleetCapacity</a></code> | <code>string[]</code> | IAM actions required for the DescribeFleetCapacity API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeFleetDeployment">DescribeFleetDeployment</a></code> | <code>string[]</code> | IAM actions required for the DescribeFleetDeployment API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeFleetEvents">DescribeFleetEvents</a></code> | <code>string[]</code> | IAM actions required for the DescribeFleetEvents API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeFleetLocationAttributes">DescribeFleetLocationAttributes</a></code> | <code>string[]</code> | IAM actions required for the DescribeFleetLocationAttributes API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeFleetLocationCapacity">DescribeFleetLocationCapacity</a></code> | <code>string[]</code> | IAM actions required for the DescribeFleetLocationCapacity API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeFleetLocationUtilization">DescribeFleetLocationUtilization</a></code> | <code>string[]</code> | IAM actions required for the DescribeFleetLocationUtilization API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeFleetPortSettings">DescribeFleetPortSettings</a></code> | <code>string[]</code> | IAM actions required for the DescribeFleetPortSettings API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeFleetUtilization">DescribeFleetUtilization</a></code> | <code>string[]</code> | IAM actions required for the DescribeFleetUtilization API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeGameServer">DescribeGameServer</a></code> | <code>string[]</code> | IAM actions required for the DescribeGameServer API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeGameServerGroup">DescribeGameServerGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeGameServerGroup API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeGameServerInstances">DescribeGameServerInstances</a></code> | <code>string[]</code> | IAM actions required for the DescribeGameServerInstances API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeGameSessionDetails">DescribeGameSessionDetails</a></code> | <code>string[]</code> | IAM actions required for the DescribeGameSessionDetails API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeGameSessionPlacement">DescribeGameSessionPlacement</a></code> | <code>string[]</code> | IAM actions required for the DescribeGameSessionPlacement API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeGameSessionQueues">DescribeGameSessionQueues</a></code> | <code>string[]</code> | IAM actions required for the DescribeGameSessionQueues API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeGameSessions">DescribeGameSessions</a></code> | <code>string[]</code> | IAM actions required for the DescribeGameSessions API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeInstances">DescribeInstances</a></code> | <code>string[]</code> | IAM actions required for the DescribeInstances API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeMatchmaking">DescribeMatchmaking</a></code> | <code>string[]</code> | IAM actions required for the DescribeMatchmaking API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeMatchmakingConfigurations">DescribeMatchmakingConfigurations</a></code> | <code>string[]</code> | IAM actions required for the DescribeMatchmakingConfigurations API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeMatchmakingRuleSets">DescribeMatchmakingRuleSets</a></code> | <code>string[]</code> | IAM actions required for the DescribeMatchmakingRuleSets API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribePlayerSessions">DescribePlayerSessions</a></code> | <code>string[]</code> | IAM actions required for the DescribePlayerSessions API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeRuntimeConfiguration">DescribeRuntimeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeRuntimeConfiguration API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeScalingPolicies">DescribeScalingPolicies</a></code> | <code>string[]</code> | IAM actions required for the DescribeScalingPolicies API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeScript">DescribeScript</a></code> | <code>string[]</code> | IAM actions required for the DescribeScript API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeVpcPeeringAuthorizations">DescribeVpcPeeringAuthorizations</a></code> | <code>string[]</code> | IAM actions required for the DescribeVpcPeeringAuthorizations API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeVpcPeeringConnections">DescribeVpcPeeringConnections</a></code> | <code>string[]</code> | IAM actions required for the DescribeVpcPeeringConnections API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.ListAliases">ListAliases</a></code> | <code>string[]</code> | IAM actions required for the ListAliases API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.ListBuilds">ListBuilds</a></code> | <code>string[]</code> | IAM actions required for the ListBuilds API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.ListCompute">ListCompute</a></code> | <code>string[]</code> | IAM actions required for the ListCompute API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.ListContainerFleets">ListContainerFleets</a></code> | <code>string[]</code> | IAM actions required for the ListContainerFleets API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.ListContainerGroupDefinitions">ListContainerGroupDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListContainerGroupDefinitions API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.ListContainerGroupDefinitionVersions">ListContainerGroupDefinitionVersions</a></code> | <code>string[]</code> | IAM actions required for the ListContainerGroupDefinitionVersions API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.ListFleetDeployments">ListFleetDeployments</a></code> | <code>string[]</code> | IAM actions required for the ListFleetDeployments API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.ListFleets">ListFleets</a></code> | <code>string[]</code> | IAM actions required for the ListFleets API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.ListGameServerGroups">ListGameServerGroups</a></code> | <code>string[]</code> | IAM actions required for the ListGameServerGroups API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.ListGameServers">ListGameServers</a></code> | <code>string[]</code> | IAM actions required for the ListGameServers API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.ListLocations">ListLocations</a></code> | <code>string[]</code> | IAM actions required for the ListLocations API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.ListScripts">ListScripts</a></code> | <code>string[]</code> | IAM actions required for the ListScripts API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.opGetComputeAccess">opGetComputeAccess</a></code> | <code>string[]</code> | IAM actions required for the GetComputeAccess API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.opGetComputeAuthToken">opGetComputeAuthToken</a></code> | <code>string[]</code> | IAM actions required for the GetComputeAuthToken API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.opGetGameSessionLogUrl">opGetGameSessionLogUrl</a></code> | <code>string[]</code> | IAM actions required for the GetGameSessionLogUrl API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.opGetInstanceAccess">opGetInstanceAccess</a></code> | <code>string[]</code> | IAM actions required for the GetInstanceAccess API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.opGetPlayerConnectionDetails">opGetPlayerConnectionDetails</a></code> | <code>string[]</code> | IAM actions required for the GetPlayerConnectionDetails API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.PutScalingPolicy">PutScalingPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutScalingPolicy API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.RegisterCompute">RegisterCompute</a></code> | <code>string[]</code> | IAM actions required for the RegisterCompute API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.RegisterGameServer">RegisterGameServer</a></code> | <code>string[]</code> | IAM actions required for the RegisterGameServer API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.RequestUploadCredentials">RequestUploadCredentials</a></code> | <code>string[]</code> | IAM actions required for the RequestUploadCredentials API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.ResolveAlias">ResolveAlias</a></code> | <code>string[]</code> | IAM actions required for the ResolveAlias API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.ResumeGameServerGroup">ResumeGameServerGroup</a></code> | <code>string[]</code> | IAM actions required for the ResumeGameServerGroup API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.SearchGameSessions">SearchGameSessions</a></code> | <code>string[]</code> | IAM actions required for the SearchGameSessions API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.StartFleetActions">StartFleetActions</a></code> | <code>string[]</code> | IAM actions required for the StartFleetActions API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.StartGameSessionPlacement">StartGameSessionPlacement</a></code> | <code>string[]</code> | IAM actions required for the StartGameSessionPlacement API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.StartMatchBackfill">StartMatchBackfill</a></code> | <code>string[]</code> | IAM actions required for the StartMatchBackfill API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.StartMatchmaking">StartMatchmaking</a></code> | <code>string[]</code> | IAM actions required for the StartMatchmaking API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.StopFleetActions">StopFleetActions</a></code> | <code>string[]</code> | IAM actions required for the StopFleetActions API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.StopGameSessionPlacement">StopGameSessionPlacement</a></code> | <code>string[]</code> | IAM actions required for the StopGameSessionPlacement API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.StopMatchmaking">StopMatchmaking</a></code> | <code>string[]</code> | IAM actions required for the StopMatchmaking API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.SuspendGameServerGroup">SuspendGameServerGroup</a></code> | <code>string[]</code> | IAM actions required for the SuspendGameServerGroup API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.TerminateGameSession">TerminateGameSession</a></code> | <code>string[]</code> | IAM actions required for the TerminateGameSession API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateAlias">UpdateAlias</a></code> | <code>string[]</code> | IAM actions required for the UpdateAlias API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateBuild">UpdateBuild</a></code> | <code>string[]</code> | IAM actions required for the UpdateBuild API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateContainerFleet">UpdateContainerFleet</a></code> | <code>string[]</code> | IAM actions required for the UpdateContainerFleet API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateContainerGroupDefinition">UpdateContainerGroupDefinition</a></code> | <code>string[]</code> | IAM actions required for the UpdateContainerGroupDefinition API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateFleetAttributes">UpdateFleetAttributes</a></code> | <code>string[]</code> | IAM actions required for the UpdateFleetAttributes API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateFleetCapacity">UpdateFleetCapacity</a></code> | <code>string[]</code> | IAM actions required for the UpdateFleetCapacity API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateFleetPortSettings">UpdateFleetPortSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateFleetPortSettings API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateGameServer">UpdateGameServer</a></code> | <code>string[]</code> | IAM actions required for the UpdateGameServer API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateGameServerGroup">UpdateGameServerGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateGameServerGroup API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateGameSession">UpdateGameSession</a></code> | <code>string[]</code> | IAM actions required for the UpdateGameSession API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateGameSessionQueue">UpdateGameSessionQueue</a></code> | <code>string[]</code> | IAM actions required for the UpdateGameSessionQueue API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateMatchmakingConfiguration">UpdateMatchmakingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateMatchmakingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateRuntimeConfiguration">UpdateRuntimeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateRuntimeConfiguration API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateScript">UpdateScript</a></code> | <code>string[]</code> | IAM actions required for the UpdateScript API call. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftOperations.property.ValidateMatchmakingRuleSet">ValidateMatchmakingRuleSet</a></code> | <code>string[]</code> | IAM actions required for the ValidateMatchmakingRuleSet API call. |

---

##### `AcceptMatch`<sup>Required</sup> <a name="AcceptMatch" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.AcceptMatch"></a>

```typescript
public readonly AcceptMatch: string[];
```

- *Type:* string[]

IAM actions required for the AcceptMatch API call.

---

##### `ClaimGameServer`<sup>Required</sup> <a name="ClaimGameServer" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.ClaimGameServer"></a>

```typescript
public readonly ClaimGameServer: string[];
```

- *Type:* string[]

IAM actions required for the ClaimGameServer API call.

---

##### `CreateAlias`<sup>Required</sup> <a name="CreateAlias" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateAlias"></a>

```typescript
public readonly CreateAlias: string[];
```

- *Type:* string[]

IAM actions required for the CreateAlias API call.

---

##### `CreateBuild`<sup>Required</sup> <a name="CreateBuild" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateBuild"></a>

```typescript
public readonly CreateBuild: string[];
```

- *Type:* string[]

IAM actions required for the CreateBuild API call.

---

##### `CreateContainerFleet`<sup>Required</sup> <a name="CreateContainerFleet" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateContainerFleet"></a>

```typescript
public readonly CreateContainerFleet: string[];
```

- *Type:* string[]

IAM actions required for the CreateContainerFleet API call.

---

##### `CreateContainerGroupDefinition`<sup>Required</sup> <a name="CreateContainerGroupDefinition" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateContainerGroupDefinition"></a>

```typescript
public readonly CreateContainerGroupDefinition: string[];
```

- *Type:* string[]

IAM actions required for the CreateContainerGroupDefinition API call.

---

##### `CreateFleet`<sup>Required</sup> <a name="CreateFleet" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateFleet"></a>

```typescript
public readonly CreateFleet: string[];
```

- *Type:* string[]

IAM actions required for the CreateFleet API call.

---

##### `CreateFleetLocations`<sup>Required</sup> <a name="CreateFleetLocations" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateFleetLocations"></a>

```typescript
public readonly CreateFleetLocations: string[];
```

- *Type:* string[]

IAM actions required for the CreateFleetLocations API call.

---

##### `CreateGameServerGroup`<sup>Required</sup> <a name="CreateGameServerGroup" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateGameServerGroup"></a>

```typescript
public readonly CreateGameServerGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateGameServerGroup API call.

---

##### `CreateGameSession`<sup>Required</sup> <a name="CreateGameSession" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateGameSession"></a>

```typescript
public readonly CreateGameSession: string[];
```

- *Type:* string[]

IAM actions required for the CreateGameSession API call.

---

##### `CreateGameSessionQueue`<sup>Required</sup> <a name="CreateGameSessionQueue" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateGameSessionQueue"></a>

```typescript
public readonly CreateGameSessionQueue: string[];
```

- *Type:* string[]

IAM actions required for the CreateGameSessionQueue API call.

---

##### `CreateLocation`<sup>Required</sup> <a name="CreateLocation" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateLocation"></a>

```typescript
public readonly CreateLocation: string[];
```

- *Type:* string[]

IAM actions required for the CreateLocation API call.

---

##### `CreateMatchmakingConfiguration`<sup>Required</sup> <a name="CreateMatchmakingConfiguration" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateMatchmakingConfiguration"></a>

```typescript
public readonly CreateMatchmakingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateMatchmakingConfiguration API call.

---

##### `CreateMatchmakingRuleSet`<sup>Required</sup> <a name="CreateMatchmakingRuleSet" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateMatchmakingRuleSet"></a>

```typescript
public readonly CreateMatchmakingRuleSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateMatchmakingRuleSet API call.

---

##### `CreatePlayerSession`<sup>Required</sup> <a name="CreatePlayerSession" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.CreatePlayerSession"></a>

```typescript
public readonly CreatePlayerSession: string[];
```

- *Type:* string[]

IAM actions required for the CreatePlayerSession API call.

---

##### `CreatePlayerSessions`<sup>Required</sup> <a name="CreatePlayerSessions" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.CreatePlayerSessions"></a>

```typescript
public readonly CreatePlayerSessions: string[];
```

- *Type:* string[]

IAM actions required for the CreatePlayerSessions API call.

---

##### `CreateScript`<sup>Required</sup> <a name="CreateScript" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateScript"></a>

```typescript
public readonly CreateScript: string[];
```

- *Type:* string[]

IAM actions required for the CreateScript API call.

---

##### `CreateVpcPeeringAuthorization`<sup>Required</sup> <a name="CreateVpcPeeringAuthorization" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateVpcPeeringAuthorization"></a>

```typescript
public readonly CreateVpcPeeringAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the CreateVpcPeeringAuthorization API call.

---

##### `CreateVpcPeeringConnection`<sup>Required</sup> <a name="CreateVpcPeeringConnection" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.CreateVpcPeeringConnection"></a>

```typescript
public readonly CreateVpcPeeringConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreateVpcPeeringConnection API call.

---

##### `DeleteAlias`<sup>Required</sup> <a name="DeleteAlias" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteAlias"></a>

```typescript
public readonly DeleteAlias: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAlias API call.

---

##### `DeleteBuild`<sup>Required</sup> <a name="DeleteBuild" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteBuild"></a>

```typescript
public readonly DeleteBuild: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBuild API call.

---

##### `DeleteContainerFleet`<sup>Required</sup> <a name="DeleteContainerFleet" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteContainerFleet"></a>

```typescript
public readonly DeleteContainerFleet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContainerFleet API call.

---

##### `DeleteContainerGroupDefinition`<sup>Required</sup> <a name="DeleteContainerGroupDefinition" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteContainerGroupDefinition"></a>

```typescript
public readonly DeleteContainerGroupDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContainerGroupDefinition API call.

---

##### `DeleteFleet`<sup>Required</sup> <a name="DeleteFleet" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteFleet"></a>

```typescript
public readonly DeleteFleet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFleet API call.

---

##### `DeleteFleetLocations`<sup>Required</sup> <a name="DeleteFleetLocations" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteFleetLocations"></a>

```typescript
public readonly DeleteFleetLocations: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFleetLocations API call.

---

##### `DeleteGameServerGroup`<sup>Required</sup> <a name="DeleteGameServerGroup" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteGameServerGroup"></a>

```typescript
public readonly DeleteGameServerGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGameServerGroup API call.

---

##### `DeleteGameSessionQueue`<sup>Required</sup> <a name="DeleteGameSessionQueue" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteGameSessionQueue"></a>

```typescript
public readonly DeleteGameSessionQueue: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGameSessionQueue API call.

---

##### `DeleteLocation`<sup>Required</sup> <a name="DeleteLocation" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteLocation"></a>

```typescript
public readonly DeleteLocation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLocation API call.

---

##### `DeleteMatchmakingConfiguration`<sup>Required</sup> <a name="DeleteMatchmakingConfiguration" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteMatchmakingConfiguration"></a>

```typescript
public readonly DeleteMatchmakingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMatchmakingConfiguration API call.

---

##### `DeleteMatchmakingRuleSet`<sup>Required</sup> <a name="DeleteMatchmakingRuleSet" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteMatchmakingRuleSet"></a>

```typescript
public readonly DeleteMatchmakingRuleSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMatchmakingRuleSet API call.

---

##### `DeleteScalingPolicy`<sup>Required</sup> <a name="DeleteScalingPolicy" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteScalingPolicy"></a>

```typescript
public readonly DeleteScalingPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteScalingPolicy API call.

---

##### `DeleteScript`<sup>Required</sup> <a name="DeleteScript" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteScript"></a>

```typescript
public readonly DeleteScript: string[];
```

- *Type:* string[]

IAM actions required for the DeleteScript API call.

---

##### `DeleteVpcPeeringAuthorization`<sup>Required</sup> <a name="DeleteVpcPeeringAuthorization" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteVpcPeeringAuthorization"></a>

```typescript
public readonly DeleteVpcPeeringAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVpcPeeringAuthorization API call.

---

##### `DeleteVpcPeeringConnection`<sup>Required</sup> <a name="DeleteVpcPeeringConnection" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DeleteVpcPeeringConnection"></a>

```typescript
public readonly DeleteVpcPeeringConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVpcPeeringConnection API call.

---

##### `DeregisterCompute`<sup>Required</sup> <a name="DeregisterCompute" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DeregisterCompute"></a>

```typescript
public readonly DeregisterCompute: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterCompute API call.

---

##### `DeregisterGameServer`<sup>Required</sup> <a name="DeregisterGameServer" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DeregisterGameServer"></a>

```typescript
public readonly DeregisterGameServer: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterGameServer API call.

---

##### `DescribeAlias`<sup>Required</sup> <a name="DescribeAlias" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeAlias"></a>

```typescript
public readonly DescribeAlias: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAlias API call.

---

##### `DescribeBuild`<sup>Required</sup> <a name="DescribeBuild" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeBuild"></a>

```typescript
public readonly DescribeBuild: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBuild API call.

---

##### `DescribeCompute`<sup>Required</sup> <a name="DescribeCompute" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeCompute"></a>

```typescript
public readonly DescribeCompute: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCompute API call.

---

##### `DescribeContainerFleet`<sup>Required</sup> <a name="DescribeContainerFleet" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeContainerFleet"></a>

```typescript
public readonly DescribeContainerFleet: string[];
```

- *Type:* string[]

IAM actions required for the DescribeContainerFleet API call.

---

##### `DescribeContainerGroupDefinition`<sup>Required</sup> <a name="DescribeContainerGroupDefinition" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeContainerGroupDefinition"></a>

```typescript
public readonly DescribeContainerGroupDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DescribeContainerGroupDefinition API call.

---

##### `DescribeContainerGroupPortMappings`<sup>Required</sup> <a name="DescribeContainerGroupPortMappings" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeContainerGroupPortMappings"></a>

```typescript
public readonly DescribeContainerGroupPortMappings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeContainerGroupPortMappings API call.

---

##### `DescribeEC2InstanceLimits`<sup>Required</sup> <a name="DescribeEC2InstanceLimits" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeEC2InstanceLimits"></a>

```typescript
public readonly DescribeEC2InstanceLimits: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEC2InstanceLimits API call.

---

##### `DescribeFleetAttributes`<sup>Required</sup> <a name="DescribeFleetAttributes" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeFleetAttributes"></a>

```typescript
public readonly DescribeFleetAttributes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFleetAttributes API call.

---

##### `DescribeFleetCapacity`<sup>Required</sup> <a name="DescribeFleetCapacity" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeFleetCapacity"></a>

```typescript
public readonly DescribeFleetCapacity: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFleetCapacity API call.

---

##### `DescribeFleetDeployment`<sup>Required</sup> <a name="DescribeFleetDeployment" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeFleetDeployment"></a>

```typescript
public readonly DescribeFleetDeployment: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFleetDeployment API call.

---

##### `DescribeFleetEvents`<sup>Required</sup> <a name="DescribeFleetEvents" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeFleetEvents"></a>

```typescript
public readonly DescribeFleetEvents: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFleetEvents API call.

---

##### `DescribeFleetLocationAttributes`<sup>Required</sup> <a name="DescribeFleetLocationAttributes" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeFleetLocationAttributes"></a>

```typescript
public readonly DescribeFleetLocationAttributes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFleetLocationAttributes API call.

---

##### `DescribeFleetLocationCapacity`<sup>Required</sup> <a name="DescribeFleetLocationCapacity" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeFleetLocationCapacity"></a>

```typescript
public readonly DescribeFleetLocationCapacity: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFleetLocationCapacity API call.

---

##### `DescribeFleetLocationUtilization`<sup>Required</sup> <a name="DescribeFleetLocationUtilization" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeFleetLocationUtilization"></a>

```typescript
public readonly DescribeFleetLocationUtilization: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFleetLocationUtilization API call.

---

##### `DescribeFleetPortSettings`<sup>Required</sup> <a name="DescribeFleetPortSettings" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeFleetPortSettings"></a>

```typescript
public readonly DescribeFleetPortSettings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFleetPortSettings API call.

---

##### `DescribeFleetUtilization`<sup>Required</sup> <a name="DescribeFleetUtilization" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeFleetUtilization"></a>

```typescript
public readonly DescribeFleetUtilization: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFleetUtilization API call.

---

##### `DescribeGameServer`<sup>Required</sup> <a name="DescribeGameServer" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeGameServer"></a>

```typescript
public readonly DescribeGameServer: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGameServer API call.

---

##### `DescribeGameServerGroup`<sup>Required</sup> <a name="DescribeGameServerGroup" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeGameServerGroup"></a>

```typescript
public readonly DescribeGameServerGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGameServerGroup API call.

---

##### `DescribeGameServerInstances`<sup>Required</sup> <a name="DescribeGameServerInstances" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeGameServerInstances"></a>

```typescript
public readonly DescribeGameServerInstances: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGameServerInstances API call.

---

##### `DescribeGameSessionDetails`<sup>Required</sup> <a name="DescribeGameSessionDetails" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeGameSessionDetails"></a>

```typescript
public readonly DescribeGameSessionDetails: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGameSessionDetails API call.

---

##### `DescribeGameSessionPlacement`<sup>Required</sup> <a name="DescribeGameSessionPlacement" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeGameSessionPlacement"></a>

```typescript
public readonly DescribeGameSessionPlacement: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGameSessionPlacement API call.

---

##### `DescribeGameSessionQueues`<sup>Required</sup> <a name="DescribeGameSessionQueues" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeGameSessionQueues"></a>

```typescript
public readonly DescribeGameSessionQueues: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGameSessionQueues API call.

---

##### `DescribeGameSessions`<sup>Required</sup> <a name="DescribeGameSessions" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeGameSessions"></a>

```typescript
public readonly DescribeGameSessions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGameSessions API call.

---

##### `DescribeInstances`<sup>Required</sup> <a name="DescribeInstances" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeInstances"></a>

```typescript
public readonly DescribeInstances: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInstances API call.

---

##### `DescribeMatchmaking`<sup>Required</sup> <a name="DescribeMatchmaking" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeMatchmaking"></a>

```typescript
public readonly DescribeMatchmaking: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMatchmaking API call.

---

##### `DescribeMatchmakingConfigurations`<sup>Required</sup> <a name="DescribeMatchmakingConfigurations" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeMatchmakingConfigurations"></a>

```typescript
public readonly DescribeMatchmakingConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMatchmakingConfigurations API call.

---

##### `DescribeMatchmakingRuleSets`<sup>Required</sup> <a name="DescribeMatchmakingRuleSets" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeMatchmakingRuleSets"></a>

```typescript
public readonly DescribeMatchmakingRuleSets: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMatchmakingRuleSets API call.

---

##### `DescribePlayerSessions`<sup>Required</sup> <a name="DescribePlayerSessions" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribePlayerSessions"></a>

```typescript
public readonly DescribePlayerSessions: string[];
```

- *Type:* string[]

IAM actions required for the DescribePlayerSessions API call.

---

##### `DescribeRuntimeConfiguration`<sup>Required</sup> <a name="DescribeRuntimeConfiguration" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeRuntimeConfiguration"></a>

```typescript
public readonly DescribeRuntimeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRuntimeConfiguration API call.

---

##### `DescribeScalingPolicies`<sup>Required</sup> <a name="DescribeScalingPolicies" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeScalingPolicies"></a>

```typescript
public readonly DescribeScalingPolicies: string[];
```

- *Type:* string[]

IAM actions required for the DescribeScalingPolicies API call.

---

##### `DescribeScript`<sup>Required</sup> <a name="DescribeScript" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeScript"></a>

```typescript
public readonly DescribeScript: string[];
```

- *Type:* string[]

IAM actions required for the DescribeScript API call.

---

##### `DescribeVpcPeeringAuthorizations`<sup>Required</sup> <a name="DescribeVpcPeeringAuthorizations" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeVpcPeeringAuthorizations"></a>

```typescript
public readonly DescribeVpcPeeringAuthorizations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVpcPeeringAuthorizations API call.

---

##### `DescribeVpcPeeringConnections`<sup>Required</sup> <a name="DescribeVpcPeeringConnections" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.DescribeVpcPeeringConnections"></a>

```typescript
public readonly DescribeVpcPeeringConnections: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVpcPeeringConnections API call.

---

##### `ListAliases`<sup>Required</sup> <a name="ListAliases" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.ListAliases"></a>

```typescript
public readonly ListAliases: string[];
```

- *Type:* string[]

IAM actions required for the ListAliases API call.

---

##### `ListBuilds`<sup>Required</sup> <a name="ListBuilds" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.ListBuilds"></a>

```typescript
public readonly ListBuilds: string[];
```

- *Type:* string[]

IAM actions required for the ListBuilds API call.

---

##### `ListCompute`<sup>Required</sup> <a name="ListCompute" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.ListCompute"></a>

```typescript
public readonly ListCompute: string[];
```

- *Type:* string[]

IAM actions required for the ListCompute API call.

---

##### `ListContainerFleets`<sup>Required</sup> <a name="ListContainerFleets" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.ListContainerFleets"></a>

```typescript
public readonly ListContainerFleets: string[];
```

- *Type:* string[]

IAM actions required for the ListContainerFleets API call.

---

##### `ListContainerGroupDefinitions`<sup>Required</sup> <a name="ListContainerGroupDefinitions" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.ListContainerGroupDefinitions"></a>

```typescript
public readonly ListContainerGroupDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListContainerGroupDefinitions API call.

---

##### `ListContainerGroupDefinitionVersions`<sup>Required</sup> <a name="ListContainerGroupDefinitionVersions" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.ListContainerGroupDefinitionVersions"></a>

```typescript
public readonly ListContainerGroupDefinitionVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListContainerGroupDefinitionVersions API call.

---

##### `ListFleetDeployments`<sup>Required</sup> <a name="ListFleetDeployments" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.ListFleetDeployments"></a>

```typescript
public readonly ListFleetDeployments: string[];
```

- *Type:* string[]

IAM actions required for the ListFleetDeployments API call.

---

##### `ListFleets`<sup>Required</sup> <a name="ListFleets" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.ListFleets"></a>

```typescript
public readonly ListFleets: string[];
```

- *Type:* string[]

IAM actions required for the ListFleets API call.

---

##### `ListGameServerGroups`<sup>Required</sup> <a name="ListGameServerGroups" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.ListGameServerGroups"></a>

```typescript
public readonly ListGameServerGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListGameServerGroups API call.

---

##### `ListGameServers`<sup>Required</sup> <a name="ListGameServers" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.ListGameServers"></a>

```typescript
public readonly ListGameServers: string[];
```

- *Type:* string[]

IAM actions required for the ListGameServers API call.

---

##### `ListLocations`<sup>Required</sup> <a name="ListLocations" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.ListLocations"></a>

```typescript
public readonly ListLocations: string[];
```

- *Type:* string[]

IAM actions required for the ListLocations API call.

---

##### `ListScripts`<sup>Required</sup> <a name="ListScripts" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.ListScripts"></a>

```typescript
public readonly ListScripts: string[];
```

- *Type:* string[]

IAM actions required for the ListScripts API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetComputeAccess`<sup>Required</sup> <a name="opGetComputeAccess" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.opGetComputeAccess"></a>

```typescript
public readonly opGetComputeAccess: string[];
```

- *Type:* string[]

IAM actions required for the GetComputeAccess API call.

---

##### `opGetComputeAuthToken`<sup>Required</sup> <a name="opGetComputeAuthToken" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.opGetComputeAuthToken"></a>

```typescript
public readonly opGetComputeAuthToken: string[];
```

- *Type:* string[]

IAM actions required for the GetComputeAuthToken API call.

---

##### `opGetGameSessionLogUrl`<sup>Required</sup> <a name="opGetGameSessionLogUrl" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.opGetGameSessionLogUrl"></a>

```typescript
public readonly opGetGameSessionLogUrl: string[];
```

- *Type:* string[]

IAM actions required for the GetGameSessionLogUrl API call.

---

##### `opGetInstanceAccess`<sup>Required</sup> <a name="opGetInstanceAccess" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.opGetInstanceAccess"></a>

```typescript
public readonly opGetInstanceAccess: string[];
```

- *Type:* string[]

IAM actions required for the GetInstanceAccess API call.

---

##### `opGetPlayerConnectionDetails`<sup>Required</sup> <a name="opGetPlayerConnectionDetails" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.opGetPlayerConnectionDetails"></a>

```typescript
public readonly opGetPlayerConnectionDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetPlayerConnectionDetails API call.

---

##### `PutScalingPolicy`<sup>Required</sup> <a name="PutScalingPolicy" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.PutScalingPolicy"></a>

```typescript
public readonly PutScalingPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutScalingPolicy API call.

---

##### `RegisterCompute`<sup>Required</sup> <a name="RegisterCompute" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.RegisterCompute"></a>

```typescript
public readonly RegisterCompute: string[];
```

- *Type:* string[]

IAM actions required for the RegisterCompute API call.

---

##### `RegisterGameServer`<sup>Required</sup> <a name="RegisterGameServer" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.RegisterGameServer"></a>

```typescript
public readonly RegisterGameServer: string[];
```

- *Type:* string[]

IAM actions required for the RegisterGameServer API call.

---

##### `RequestUploadCredentials`<sup>Required</sup> <a name="RequestUploadCredentials" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.RequestUploadCredentials"></a>

```typescript
public readonly RequestUploadCredentials: string[];
```

- *Type:* string[]

IAM actions required for the RequestUploadCredentials API call.

---

##### `ResolveAlias`<sup>Required</sup> <a name="ResolveAlias" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.ResolveAlias"></a>

```typescript
public readonly ResolveAlias: string[];
```

- *Type:* string[]

IAM actions required for the ResolveAlias API call.

---

##### `ResumeGameServerGroup`<sup>Required</sup> <a name="ResumeGameServerGroup" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.ResumeGameServerGroup"></a>

```typescript
public readonly ResumeGameServerGroup: string[];
```

- *Type:* string[]

IAM actions required for the ResumeGameServerGroup API call.

---

##### `SearchGameSessions`<sup>Required</sup> <a name="SearchGameSessions" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.SearchGameSessions"></a>

```typescript
public readonly SearchGameSessions: string[];
```

- *Type:* string[]

IAM actions required for the SearchGameSessions API call.

---

##### `StartFleetActions`<sup>Required</sup> <a name="StartFleetActions" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.StartFleetActions"></a>

```typescript
public readonly StartFleetActions: string[];
```

- *Type:* string[]

IAM actions required for the StartFleetActions API call.

---

##### `StartGameSessionPlacement`<sup>Required</sup> <a name="StartGameSessionPlacement" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.StartGameSessionPlacement"></a>

```typescript
public readonly StartGameSessionPlacement: string[];
```

- *Type:* string[]

IAM actions required for the StartGameSessionPlacement API call.

---

##### `StartMatchBackfill`<sup>Required</sup> <a name="StartMatchBackfill" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.StartMatchBackfill"></a>

```typescript
public readonly StartMatchBackfill: string[];
```

- *Type:* string[]

IAM actions required for the StartMatchBackfill API call.

---

##### `StartMatchmaking`<sup>Required</sup> <a name="StartMatchmaking" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.StartMatchmaking"></a>

```typescript
public readonly StartMatchmaking: string[];
```

- *Type:* string[]

IAM actions required for the StartMatchmaking API call.

---

##### `StopFleetActions`<sup>Required</sup> <a name="StopFleetActions" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.StopFleetActions"></a>

```typescript
public readonly StopFleetActions: string[];
```

- *Type:* string[]

IAM actions required for the StopFleetActions API call.

---

##### `StopGameSessionPlacement`<sup>Required</sup> <a name="StopGameSessionPlacement" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.StopGameSessionPlacement"></a>

```typescript
public readonly StopGameSessionPlacement: string[];
```

- *Type:* string[]

IAM actions required for the StopGameSessionPlacement API call.

---

##### `StopMatchmaking`<sup>Required</sup> <a name="StopMatchmaking" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.StopMatchmaking"></a>

```typescript
public readonly StopMatchmaking: string[];
```

- *Type:* string[]

IAM actions required for the StopMatchmaking API call.

---

##### `SuspendGameServerGroup`<sup>Required</sup> <a name="SuspendGameServerGroup" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.SuspendGameServerGroup"></a>

```typescript
public readonly SuspendGameServerGroup: string[];
```

- *Type:* string[]

IAM actions required for the SuspendGameServerGroup API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TerminateGameSession`<sup>Required</sup> <a name="TerminateGameSession" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.TerminateGameSession"></a>

```typescript
public readonly TerminateGameSession: string[];
```

- *Type:* string[]

IAM actions required for the TerminateGameSession API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAlias`<sup>Required</sup> <a name="UpdateAlias" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateAlias"></a>

```typescript
public readonly UpdateAlias: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAlias API call.

---

##### `UpdateBuild`<sup>Required</sup> <a name="UpdateBuild" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateBuild"></a>

```typescript
public readonly UpdateBuild: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBuild API call.

---

##### `UpdateContainerFleet`<sup>Required</sup> <a name="UpdateContainerFleet" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateContainerFleet"></a>

```typescript
public readonly UpdateContainerFleet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContainerFleet API call.

---

##### `UpdateContainerGroupDefinition`<sup>Required</sup> <a name="UpdateContainerGroupDefinition" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateContainerGroupDefinition"></a>

```typescript
public readonly UpdateContainerGroupDefinition: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContainerGroupDefinition API call.

---

##### `UpdateFleetAttributes`<sup>Required</sup> <a name="UpdateFleetAttributes" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateFleetAttributes"></a>

```typescript
public readonly UpdateFleetAttributes: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFleetAttributes API call.

---

##### `UpdateFleetCapacity`<sup>Required</sup> <a name="UpdateFleetCapacity" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateFleetCapacity"></a>

```typescript
public readonly UpdateFleetCapacity: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFleetCapacity API call.

---

##### `UpdateFleetPortSettings`<sup>Required</sup> <a name="UpdateFleetPortSettings" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateFleetPortSettings"></a>

```typescript
public readonly UpdateFleetPortSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFleetPortSettings API call.

---

##### `UpdateGameServer`<sup>Required</sup> <a name="UpdateGameServer" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateGameServer"></a>

```typescript
public readonly UpdateGameServer: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGameServer API call.

---

##### `UpdateGameServerGroup`<sup>Required</sup> <a name="UpdateGameServerGroup" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateGameServerGroup"></a>

```typescript
public readonly UpdateGameServerGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGameServerGroup API call.

---

##### `UpdateGameSession`<sup>Required</sup> <a name="UpdateGameSession" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateGameSession"></a>

```typescript
public readonly UpdateGameSession: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGameSession API call.

---

##### `UpdateGameSessionQueue`<sup>Required</sup> <a name="UpdateGameSessionQueue" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateGameSessionQueue"></a>

```typescript
public readonly UpdateGameSessionQueue: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGameSessionQueue API call.

---

##### `UpdateMatchmakingConfiguration`<sup>Required</sup> <a name="UpdateMatchmakingConfiguration" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateMatchmakingConfiguration"></a>

```typescript
public readonly UpdateMatchmakingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMatchmakingConfiguration API call.

---

##### `UpdateRuntimeConfiguration`<sup>Required</sup> <a name="UpdateRuntimeConfiguration" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateRuntimeConfiguration"></a>

```typescript
public readonly UpdateRuntimeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRuntimeConfiguration API call.

---

##### `UpdateScript`<sup>Required</sup> <a name="UpdateScript" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.UpdateScript"></a>

```typescript
public readonly UpdateScript: string[];
```

- *Type:* string[]

IAM actions required for the UpdateScript API call.

---

##### `ValidateMatchmakingRuleSet`<sup>Required</sup> <a name="ValidateMatchmakingRuleSet" id="@cdk_utils/iam.gamelift.GameLiftOperations.property.ValidateMatchmakingRuleSet"></a>

```typescript
public readonly ValidateMatchmakingRuleSet: string[];
```

- *Type:* string[]

IAM actions required for the ValidateMatchmakingRuleSet API call.

---

### GameLiftResources <a name="GameLiftResources" id="@cdk_utils/iam.gamelift.GameLiftResources"></a>

ARN builders, validators, and parsers for gamelift resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.gamelift.GameLiftResources.Initializer"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

new gamelift.GameLiftResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.alias">alias</a></code> | Builds an ARN for the alias resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.buildResource">buildResource</a></code> | Builds an ARN for the build resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.containerFleet">containerFleet</a></code> | Builds an ARN for the containerFleet resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.containerGroupDefinition">containerGroupDefinition</a></code> | Builds an ARN for the containerGroupDefinition resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.fleet">fleet</a></code> | Builds an ARN for the fleet resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.gameServerGroup">gameServerGroup</a></code> | Builds an ARN for the gameServerGroup resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.gameSessionQueue">gameSessionQueue</a></code> | Builds an ARN for the gameSessionQueue resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.isValidAliasArn">isValidAliasArn</a></code> | Validates whether a string is a valid ARN for the alias resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.isValidBuildArn">isValidBuildArn</a></code> | Validates whether a string is a valid ARN for the build resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.isValidContainerFleetArn">isValidContainerFleetArn</a></code> | Validates whether a string is a valid ARN for the containerFleet resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.isValidContainerGroupDefinitionArn">isValidContainerGroupDefinitionArn</a></code> | Validates whether a string is a valid ARN for the containerGroupDefinition resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.isValidFleetArn">isValidFleetArn</a></code> | Validates whether a string is a valid ARN for the fleet resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.isValidGameServerGroupArn">isValidGameServerGroupArn</a></code> | Validates whether a string is a valid ARN for the gameServerGroup resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.isValidGameSessionQueueArn">isValidGameSessionQueueArn</a></code> | Validates whether a string is a valid ARN for the gameSessionQueue resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.isValidLocationArn">isValidLocationArn</a></code> | Validates whether a string is a valid ARN for the location resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.isValidMatchmakingConfigurationArn">isValidMatchmakingConfigurationArn</a></code> | Validates whether a string is a valid ARN for the matchmakingConfiguration resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.isValidMatchmakingRuleSetArn">isValidMatchmakingRuleSetArn</a></code> | Validates whether a string is a valid ARN for the matchmakingRuleSet resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.isValidScriptArn">isValidScriptArn</a></code> | Validates whether a string is a valid ARN for the script resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.location">location</a></code> | Builds an ARN for the location resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.matchmakingConfiguration">matchmakingConfiguration</a></code> | Builds an ARN for the matchmakingConfiguration resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.matchmakingRuleSet">matchmakingRuleSet</a></code> | Builds an ARN for the matchmakingRuleSet resource. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.parseAliasArn">parseAliasArn</a></code> | Parses a alias ARN into its components. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.parseBuildArn">parseBuildArn</a></code> | Parses a build ARN into its components. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.parseContainerFleetArn">parseContainerFleetArn</a></code> | Parses a containerFleet ARN into its components. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.parseContainerGroupDefinitionArn">parseContainerGroupDefinitionArn</a></code> | Parses a containerGroupDefinition ARN into its components. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.parseFleetArn">parseFleetArn</a></code> | Parses a fleet ARN into its components. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.parseGameServerGroupArn">parseGameServerGroupArn</a></code> | Parses a gameServerGroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.parseGameSessionQueueArn">parseGameSessionQueueArn</a></code> | Parses a gameSessionQueue ARN into its components. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.parseLocationArn">parseLocationArn</a></code> | Parses a location ARN into its components. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.parseMatchmakingConfigurationArn">parseMatchmakingConfigurationArn</a></code> | Parses a matchmakingConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.parseMatchmakingRuleSetArn">parseMatchmakingRuleSetArn</a></code> | Parses a matchmakingRuleSet ARN into its components. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.parseScriptArn">parseScriptArn</a></code> | Parses a script ARN into its components. |
| <code><a href="#@cdk_utils/iam.gamelift.GameLiftResources.script">script</a></code> | Builds an ARN for the script resource. |

---

##### `alias` <a name="alias" id="@cdk_utils/iam.gamelift.GameLiftResources.alias"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.alias(props: GameLiftAliasArnProps)
```

Builds an ARN for the alias resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.gamelift.GameLiftResources.alias.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.gamelift.GameLiftAliasArnProps">GameLiftAliasArnProps</a>

---

##### `buildResource` <a name="buildResource" id="@cdk_utils/iam.gamelift.GameLiftResources.buildResource"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.buildResource(props: GameLiftBuildArnProps)
```

Builds an ARN for the build resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.gamelift.GameLiftResources.buildResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.gamelift.GameLiftBuildArnProps">GameLiftBuildArnProps</a>

---

##### `containerFleet` <a name="containerFleet" id="@cdk_utils/iam.gamelift.GameLiftResources.containerFleet"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.containerFleet(props: GameLiftContainerFleetArnProps)
```

Builds an ARN for the containerFleet resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.gamelift.GameLiftResources.containerFleet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.gamelift.GameLiftContainerFleetArnProps">GameLiftContainerFleetArnProps</a>

---

##### `containerGroupDefinition` <a name="containerGroupDefinition" id="@cdk_utils/iam.gamelift.GameLiftResources.containerGroupDefinition"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.containerGroupDefinition(props: GameLiftContainerGroupDefinitionArnProps)
```

Builds an ARN for the containerGroupDefinition resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.gamelift.GameLiftResources.containerGroupDefinition.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.gamelift.GameLiftContainerGroupDefinitionArnProps">GameLiftContainerGroupDefinitionArnProps</a>

---

##### `fleet` <a name="fleet" id="@cdk_utils/iam.gamelift.GameLiftResources.fleet"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.fleet(props: GameLiftFleetArnProps)
```

Builds an ARN for the fleet resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.gamelift.GameLiftResources.fleet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.gamelift.GameLiftFleetArnProps">GameLiftFleetArnProps</a>

---

##### `gameServerGroup` <a name="gameServerGroup" id="@cdk_utils/iam.gamelift.GameLiftResources.gameServerGroup"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.gameServerGroup(props: GameLiftGameServerGroupArnProps)
```

Builds an ARN for the gameServerGroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.gamelift.GameLiftResources.gameServerGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.gamelift.GameLiftGameServerGroupArnProps">GameLiftGameServerGroupArnProps</a>

---

##### `gameSessionQueue` <a name="gameSessionQueue" id="@cdk_utils/iam.gamelift.GameLiftResources.gameSessionQueue"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.gameSessionQueue(props: GameLiftGameSessionQueueArnProps)
```

Builds an ARN for the gameSessionQueue resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.gamelift.GameLiftResources.gameSessionQueue.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.gamelift.GameLiftGameSessionQueueArnProps">GameLiftGameSessionQueueArnProps</a>

---

##### `isValidAliasArn` <a name="isValidAliasArn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidAliasArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.isValidAliasArn(arn: string)
```

Validates whether a string is a valid ARN for the alias resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBuildArn` <a name="isValidBuildArn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidBuildArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.isValidBuildArn(arn: string)
```

Validates whether a string is a valid ARN for the build resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidBuildArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidContainerFleetArn` <a name="isValidContainerFleetArn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidContainerFleetArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.isValidContainerFleetArn(arn: string)
```

Validates whether a string is a valid ARN for the containerFleet resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidContainerFleetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidContainerGroupDefinitionArn` <a name="isValidContainerGroupDefinitionArn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidContainerGroupDefinitionArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.isValidContainerGroupDefinitionArn(arn: string)
```

Validates whether a string is a valid ARN for the containerGroupDefinition resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidContainerGroupDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFleetArn` <a name="isValidFleetArn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidFleetArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.isValidFleetArn(arn: string)
```

Validates whether a string is a valid ARN for the fleet resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidFleetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGameServerGroupArn` <a name="isValidGameServerGroupArn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidGameServerGroupArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.isValidGameServerGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the gameServerGroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidGameServerGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGameSessionQueueArn` <a name="isValidGameSessionQueueArn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidGameSessionQueueArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.isValidGameSessionQueueArn(arn: string)
```

Validates whether a string is a valid ARN for the gameSessionQueue resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidGameSessionQueueArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLocationArn` <a name="isValidLocationArn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidLocationArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.isValidLocationArn(arn: string)
```

Validates whether a string is a valid ARN for the location resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidLocationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMatchmakingConfigurationArn` <a name="isValidMatchmakingConfigurationArn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidMatchmakingConfigurationArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.isValidMatchmakingConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the matchmakingConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidMatchmakingConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMatchmakingRuleSetArn` <a name="isValidMatchmakingRuleSetArn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidMatchmakingRuleSetArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.isValidMatchmakingRuleSetArn(arn: string)
```

Validates whether a string is a valid ARN for the matchmakingRuleSet resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidMatchmakingRuleSetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidScriptArn` <a name="isValidScriptArn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidScriptArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.isValidScriptArn(arn: string)
```

Validates whether a string is a valid ARN for the script resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.isValidScriptArn.parameter.arn"></a>

- *Type:* string

---

##### `location` <a name="location" id="@cdk_utils/iam.gamelift.GameLiftResources.location"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.location(props: GameLiftLocationArnProps)
```

Builds an ARN for the location resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.gamelift.GameLiftResources.location.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.gamelift.GameLiftLocationArnProps">GameLiftLocationArnProps</a>

---

##### `matchmakingConfiguration` <a name="matchmakingConfiguration" id="@cdk_utils/iam.gamelift.GameLiftResources.matchmakingConfiguration"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.matchmakingConfiguration(props: GameLiftMatchmakingConfigurationArnProps)
```

Builds an ARN for the matchmakingConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.gamelift.GameLiftResources.matchmakingConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.gamelift.GameLiftMatchmakingConfigurationArnProps">GameLiftMatchmakingConfigurationArnProps</a>

---

##### `matchmakingRuleSet` <a name="matchmakingRuleSet" id="@cdk_utils/iam.gamelift.GameLiftResources.matchmakingRuleSet"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.matchmakingRuleSet(props: GameLiftMatchmakingRuleSetArnProps)
```

Builds an ARN for the matchmakingRuleSet resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.gamelift.GameLiftResources.matchmakingRuleSet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.gamelift.GameLiftMatchmakingRuleSetArnProps">GameLiftMatchmakingRuleSetArnProps</a>

---

##### `parseAliasArn` <a name="parseAliasArn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseAliasArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.parseAliasArn(arn: string)
```

Parses a alias ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBuildArn` <a name="parseBuildArn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseBuildArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.parseBuildArn(arn: string)
```

Parses a build ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseBuildArn.parameter.arn"></a>

- *Type:* string

---

##### `parseContainerFleetArn` <a name="parseContainerFleetArn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseContainerFleetArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.parseContainerFleetArn(arn: string)
```

Parses a containerFleet ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseContainerFleetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseContainerGroupDefinitionArn` <a name="parseContainerGroupDefinitionArn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseContainerGroupDefinitionArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.parseContainerGroupDefinitionArn(arn: string)
```

Parses a containerGroupDefinition ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseContainerGroupDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFleetArn` <a name="parseFleetArn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseFleetArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.parseFleetArn(arn: string)
```

Parses a fleet ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseFleetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGameServerGroupArn` <a name="parseGameServerGroupArn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseGameServerGroupArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.parseGameServerGroupArn(arn: string)
```

Parses a gameServerGroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseGameServerGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGameSessionQueueArn` <a name="parseGameSessionQueueArn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseGameSessionQueueArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.parseGameSessionQueueArn(arn: string)
```

Parses a gameSessionQueue ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseGameSessionQueueArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLocationArn` <a name="parseLocationArn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseLocationArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.parseLocationArn(arn: string)
```

Parses a location ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseLocationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMatchmakingConfigurationArn` <a name="parseMatchmakingConfigurationArn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseMatchmakingConfigurationArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.parseMatchmakingConfigurationArn(arn: string)
```

Parses a matchmakingConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseMatchmakingConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMatchmakingRuleSetArn` <a name="parseMatchmakingRuleSetArn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseMatchmakingRuleSetArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.parseMatchmakingRuleSetArn(arn: string)
```

Parses a matchmakingRuleSet ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseMatchmakingRuleSetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseScriptArn` <a name="parseScriptArn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseScriptArn"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.parseScriptArn(arn: string)
```

Parses a script ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.gamelift.GameLiftResources.parseScriptArn.parameter.arn"></a>

- *Type:* string

---

##### `script` <a name="script" id="@cdk_utils/iam.gamelift.GameLiftResources.script"></a>

```typescript
import { gamelift } from '@cdk_utils/iam'

gamelift.GameLiftResources.script(props: GameLiftScriptArnProps)
```

Builds an ARN for the script resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.gamelift.GameLiftResources.script.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.gamelift.GameLiftScriptArnProps">GameLiftScriptArnProps</a>

---




