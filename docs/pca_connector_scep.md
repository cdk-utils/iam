# `pca_connector_scep` Submodule <a name="`pca_connector_scep` Submodule" id="@cdk_utils/iam.pca_connector_scep"></a>


## Structs <a name="Structs" id="Structs"></a>

### PcaConnectorScepChallengeArnComponents <a name="PcaConnectorScepChallengeArnComponents" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnComponents"></a>

Parsed components of a Challenge ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnComponents.Initializer"></a>

```typescript
import { pca_connector_scep } from '@cdk_utils/iam'

const pcaConnectorScepChallengeArnComponents: pca_connector_scep.PcaConnectorScepChallengeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnComponents.property.challengeId">challengeId</a></code> | <code>string</code> | The ChallengeId component. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnComponents.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorId component. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `challengeId`<sup>Required</sup> <a name="challengeId" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnComponents.property.challengeId"></a>

```typescript
public readonly challengeId: string;
```

- *Type:* string

The ChallengeId component.

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnComponents.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PcaConnectorScepChallengeArnProps <a name="PcaConnectorScepChallengeArnProps" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnProps"></a>

Properties for building a Challenge ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnProps.Initializer"></a>

```typescript
import { pca_connector_scep } from '@cdk_utils/iam'

const pcaConnectorScepChallengeArnProps: pca_connector_scep.PcaConnectorScepChallengeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnProps.property.challengeId">challengeId</a></code> | <code>string</code> | The ChallengeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnProps.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `challengeId`<sup>Required</sup> <a name="challengeId" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnProps.property.challengeId"></a>

```typescript
public readonly challengeId: string;
```

- *Type:* string

The ChallengeId component of the ARN.

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnProps.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PcaConnectorScepConnectorArnComponents <a name="PcaConnectorScepConnectorArnComponents" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnComponents"></a>

Parsed components of a Connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnComponents.Initializer"></a>

```typescript
import { pca_connector_scep } from '@cdk_utils/iam'

const pcaConnectorScepConnectorArnComponents: pca_connector_scep.PcaConnectorScepConnectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnComponents.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorId component. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnComponents.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PcaConnectorScepConnectorArnProps <a name="PcaConnectorScepConnectorArnProps" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnProps"></a>

Properties for building a Connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnProps.Initializer"></a>

```typescript
import { pca_connector_scep } from '@cdk_utils/iam'

const pcaConnectorScepConnectorArnProps: pca_connector_scep.PcaConnectorScepConnectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnProps.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnProps.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### PcaConnectorScepActions <a name="PcaConnectorScepActions" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions"></a>

IAM action constants for the pca-connector-scep service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.Initializer"></a>

```typescript
import { pca_connector_scep } from '@cdk_utils/iam'

new pca_connector_scep.PcaConnectorScepActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.actionGetChallengeMetadata">actionGetChallengeMetadata</a></code> | <code>string</code> | [Read] pca-connector-scep:GetChallengeMetadata. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.actionGetChallengePassword">actionGetChallengePassword</a></code> | <code>string</code> | [Read] pca-connector-scep:GetChallengePassword. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.actionGetConnector">actionGetConnector</a></code> | <code>string</code> | [Read] pca-connector-scep:GetConnector. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.CreateChallenge">CreateChallenge</a></code> | <code>string</code> | [Write] pca-connector-scep:CreateChallenge. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.CreateConnector">CreateConnector</a></code> | <code>string</code> | [Write] pca-connector-scep:CreateConnector. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.DeleteChallenge">DeleteChallenge</a></code> | <code>string</code> | [Write] pca-connector-scep:DeleteChallenge. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.DeleteConnector">DeleteConnector</a></code> | <code>string</code> | [Write] pca-connector-scep:DeleteConnector. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.ListChallengeMetadata">ListChallengeMetadata</a></code> | <code>string</code> | [List] pca-connector-scep:ListChallengeMetadata. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.ListConnectors">ListConnectors</a></code> | <code>string</code> | [List] pca-connector-scep:ListConnectors. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] pca-connector-scep:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] pca-connector-scep:TagResource. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] pca-connector-scep:UntagResource. |

---

##### `actionGetChallengeMetadata`<sup>Required</sup> <a name="actionGetChallengeMetadata" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.actionGetChallengeMetadata"></a>

```typescript
public readonly actionGetChallengeMetadata: string;
```

- *Type:* string

[Read] pca-connector-scep:GetChallengeMetadata.

---

##### `actionGetChallengePassword`<sup>Required</sup> <a name="actionGetChallengePassword" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.actionGetChallengePassword"></a>

```typescript
public readonly actionGetChallengePassword: string;
```

- *Type:* string

[Read] pca-connector-scep:GetChallengePassword.

---

##### `actionGetConnector`<sup>Required</sup> <a name="actionGetConnector" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.actionGetConnector"></a>

```typescript
public readonly actionGetConnector: string;
```

- *Type:* string

[Read] pca-connector-scep:GetConnector.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateChallenge`<sup>Required</sup> <a name="CreateChallenge" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.CreateChallenge"></a>

```typescript
public readonly CreateChallenge: string;
```

- *Type:* string

[Write] pca-connector-scep:CreateChallenge.

---

##### `CreateConnector`<sup>Required</sup> <a name="CreateConnector" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.CreateConnector"></a>

```typescript
public readonly CreateConnector: string;
```

- *Type:* string

[Write] pca-connector-scep:CreateConnector.

---

##### `DeleteChallenge`<sup>Required</sup> <a name="DeleteChallenge" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.DeleteChallenge"></a>

```typescript
public readonly DeleteChallenge: string;
```

- *Type:* string

[Write] pca-connector-scep:DeleteChallenge.

---

##### `DeleteConnector`<sup>Required</sup> <a name="DeleteConnector" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.DeleteConnector"></a>

```typescript
public readonly DeleteConnector: string;
```

- *Type:* string

[Write] pca-connector-scep:DeleteConnector.

---

##### `ListChallengeMetadata`<sup>Required</sup> <a name="ListChallengeMetadata" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.ListChallengeMetadata"></a>

```typescript
public readonly ListChallengeMetadata: string;
```

- *Type:* string

[List] pca-connector-scep:ListChallengeMetadata.

---

##### `ListConnectors`<sup>Required</sup> <a name="ListConnectors" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.ListConnectors"></a>

```typescript
public readonly ListConnectors: string;
```

- *Type:* string

[List] pca-connector-scep:ListConnectors.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] pca-connector-scep:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] pca-connector-scep:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] pca-connector-scep:UntagResource.

---

### PcaConnectorScepConditions <a name="PcaConnectorScepConditions" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions"></a>

Condition key constants and builders for pca-connector-scep.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.Initializer"></a>

```typescript
import { pca_connector_scep } from '@cdk_utils/iam'

new pca_connector_scep.PcaConnectorScepConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.requestTag"></a>

```typescript
import { pca_connector_scep } from '@cdk_utils/iam'

pca_connector_scep.PcaConnectorScepConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.resourceTag"></a>

```typescript
import { pca_connector_scep } from '@cdk_utils/iam'

pca_connector_scep.PcaConnectorScepConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.tagKeys"></a>

```typescript
import { pca_connector_scep } from '@cdk_utils/iam'

pca_connector_scep.PcaConnectorScepConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.property.CreateChallengeConditionKeys">CreateChallengeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChallenge action. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.property.CreateConnectorConditionKeys">CreateConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnector action. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateChallengeConditionKeys`<sup>Required</sup> <a name="CreateChallengeConditionKeys" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.property.CreateChallengeConditionKeys"></a>

```typescript
public readonly CreateChallengeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChallenge action.

---

##### `CreateConnectorConditionKeys`<sup>Required</sup> <a name="CreateConnectorConditionKeys" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.property.CreateConnectorConditionKeys"></a>

```typescript
public readonly CreateConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnector action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### PcaConnectorScepOperations <a name="PcaConnectorScepOperations" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations"></a>

API operation to required IAM actions mapping for pca-connector-scep.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.Initializer"></a>

```typescript
import { pca_connector_scep } from '@cdk_utils/iam'

new pca_connector_scep.PcaConnectorScepOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.CreateChallenge">CreateChallenge</a></code> | <code>string[]</code> | IAM actions required for the CreateChallenge API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.CreateConnector">CreateConnector</a></code> | <code>string[]</code> | IAM actions required for the CreateConnector API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.DeleteChallenge">DeleteChallenge</a></code> | <code>string[]</code> | IAM actions required for the DeleteChallenge API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.DeleteConnector">DeleteConnector</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnector API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.ListChallengeMetadata">ListChallengeMetadata</a></code> | <code>string[]</code> | IAM actions required for the ListChallengeMetadata API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.ListConnectors">ListConnectors</a></code> | <code>string[]</code> | IAM actions required for the ListConnectors API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.opGetChallengeMetadata">opGetChallengeMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetChallengeMetadata API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.opGetChallengePassword">opGetChallengePassword</a></code> | <code>string[]</code> | IAM actions required for the GetChallengePassword API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.opGetConnector">opGetConnector</a></code> | <code>string[]</code> | IAM actions required for the GetConnector API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `CreateChallenge`<sup>Required</sup> <a name="CreateChallenge" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.CreateChallenge"></a>

```typescript
public readonly CreateChallenge: string[];
```

- *Type:* string[]

IAM actions required for the CreateChallenge API call.

---

##### `CreateConnector`<sup>Required</sup> <a name="CreateConnector" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.CreateConnector"></a>

```typescript
public readonly CreateConnector: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnector API call.

---

##### `DeleteChallenge`<sup>Required</sup> <a name="DeleteChallenge" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.DeleteChallenge"></a>

```typescript
public readonly DeleteChallenge: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChallenge API call.

---

##### `DeleteConnector`<sup>Required</sup> <a name="DeleteConnector" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.DeleteConnector"></a>

```typescript
public readonly DeleteConnector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnector API call.

---

##### `ListChallengeMetadata`<sup>Required</sup> <a name="ListChallengeMetadata" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.ListChallengeMetadata"></a>

```typescript
public readonly ListChallengeMetadata: string[];
```

- *Type:* string[]

IAM actions required for the ListChallengeMetadata API call.

---

##### `ListConnectors`<sup>Required</sup> <a name="ListConnectors" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.ListConnectors"></a>

```typescript
public readonly ListConnectors: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectors API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetChallengeMetadata`<sup>Required</sup> <a name="opGetChallengeMetadata" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.opGetChallengeMetadata"></a>

```typescript
public readonly opGetChallengeMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetChallengeMetadata API call.

---

##### `opGetChallengePassword`<sup>Required</sup> <a name="opGetChallengePassword" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.opGetChallengePassword"></a>

```typescript
public readonly opGetChallengePassword: string[];
```

- *Type:* string[]

IAM actions required for the GetChallengePassword API call.

---

##### `opGetConnector`<sup>Required</sup> <a name="opGetConnector" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.opGetConnector"></a>

```typescript
public readonly opGetConnector: string[];
```

- *Type:* string[]

IAM actions required for the GetConnector API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### PcaConnectorScepResources <a name="PcaConnectorScepResources" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources"></a>

ARN builders, validators, and parsers for pca-connector-scep resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources.Initializer"></a>

```typescript
import { pca_connector_scep } from '@cdk_utils/iam'

new pca_connector_scep.PcaConnectorScepResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources.challenge">challenge</a></code> | Builds an ARN for the Challenge resource. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources.connector">connector</a></code> | Builds an ARN for the Connector resource. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources.isValidChallengeArn">isValidChallengeArn</a></code> | Validates whether a string is a valid ARN for the Challenge resource. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources.isValidConnectorArn">isValidConnectorArn</a></code> | Validates whether a string is a valid ARN for the Connector resource. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources.parseChallengeArn">parseChallengeArn</a></code> | Parses a Challenge ARN into its components. |
| <code><a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources.parseConnectorArn">parseConnectorArn</a></code> | Parses a Connector ARN into its components. |

---

##### `challenge` <a name="challenge" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources.challenge"></a>

```typescript
import { pca_connector_scep } from '@cdk_utils/iam'

pca_connector_scep.PcaConnectorScepResources.challenge(props: PcaConnectorScepChallengeArnProps)
```

Builds an ARN for the Challenge resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources.challenge.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepChallengeArnProps">PcaConnectorScepChallengeArnProps</a>

---

##### `connector` <a name="connector" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources.connector"></a>

```typescript
import { pca_connector_scep } from '@cdk_utils/iam'

pca_connector_scep.PcaConnectorScepResources.connector(props: PcaConnectorScepConnectorArnProps)
```

Builds an ARN for the Connector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources.connector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.pca_connector_scep.PcaConnectorScepConnectorArnProps">PcaConnectorScepConnectorArnProps</a>

---

##### `isValidChallengeArn` <a name="isValidChallengeArn" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources.isValidChallengeArn"></a>

```typescript
import { pca_connector_scep } from '@cdk_utils/iam'

pca_connector_scep.PcaConnectorScepResources.isValidChallengeArn(arn: string)
```

Validates whether a string is a valid ARN for the Challenge resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources.isValidChallengeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectorArn` <a name="isValidConnectorArn" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources.isValidConnectorArn"></a>

```typescript
import { pca_connector_scep } from '@cdk_utils/iam'

pca_connector_scep.PcaConnectorScepResources.isValidConnectorArn(arn: string)
```

Validates whether a string is a valid ARN for the Connector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources.isValidConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChallengeArn` <a name="parseChallengeArn" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources.parseChallengeArn"></a>

```typescript
import { pca_connector_scep } from '@cdk_utils/iam'

pca_connector_scep.PcaConnectorScepResources.parseChallengeArn(arn: string)
```

Parses a Challenge ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources.parseChallengeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectorArn` <a name="parseConnectorArn" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources.parseConnectorArn"></a>

```typescript
import { pca_connector_scep } from '@cdk_utils/iam'

pca_connector_scep.PcaConnectorScepResources.parseConnectorArn(arn: string)
```

Parses a Connector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pca_connector_scep.PcaConnectorScepResources.parseConnectorArn.parameter.arn"></a>

- *Type:* string

---




