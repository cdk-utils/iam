# `aoss` Submodule <a name="`aoss` Submodule" id="@cdk_utils/iam.aoss"></a>


## Structs <a name="Structs" id="Structs"></a>

### AossCollectionArnComponents <a name="AossCollectionArnComponents" id="@cdk_utils/iam.aoss.AossCollectionArnComponents"></a>

Parsed components of a Collection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aoss.AossCollectionArnComponents.Initializer"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

const aossCollectionArnComponents: aoss.AossCollectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aoss.AossCollectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aoss.AossCollectionArnComponents.property.collectionId">collectionId</a></code> | <code>string</code> | The CollectionId component. |
| <code><a href="#@cdk_utils/iam.aoss.AossCollectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aoss.AossCollectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aoss.AossCollectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdk_utils/iam.aoss.AossCollectionArnComponents.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

The CollectionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aoss.AossCollectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aoss.AossCollectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AossCollectionArnProps <a name="AossCollectionArnProps" id="@cdk_utils/iam.aoss.AossCollectionArnProps"></a>

Properties for building a Collection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aoss.AossCollectionArnProps.Initializer"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

const aossCollectionArnProps: aoss.AossCollectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aoss.AossCollectionArnProps.property.collectionId">collectionId</a></code> | <code>string</code> | The CollectionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aoss.AossCollectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aoss.AossCollectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aoss.AossCollectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdk_utils/iam.aoss.AossCollectionArnProps.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

The CollectionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aoss.AossCollectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aoss.AossCollectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aoss.AossCollectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AossCollectionGroupArnComponents <a name="AossCollectionGroupArnComponents" id="@cdk_utils/iam.aoss.AossCollectionGroupArnComponents"></a>

Parsed components of a CollectionGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aoss.AossCollectionGroupArnComponents.Initializer"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

const aossCollectionGroupArnComponents: aoss.AossCollectionGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aoss.AossCollectionGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aoss.AossCollectionGroupArnComponents.property.collectionGroupId">collectionGroupId</a></code> | <code>string</code> | The CollectionGroupId component. |
| <code><a href="#@cdk_utils/iam.aoss.AossCollectionGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aoss.AossCollectionGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aoss.AossCollectionGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `collectionGroupId`<sup>Required</sup> <a name="collectionGroupId" id="@cdk_utils/iam.aoss.AossCollectionGroupArnComponents.property.collectionGroupId"></a>

```typescript
public readonly collectionGroupId: string;
```

- *Type:* string

The CollectionGroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aoss.AossCollectionGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aoss.AossCollectionGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AossCollectionGroupArnProps <a name="AossCollectionGroupArnProps" id="@cdk_utils/iam.aoss.AossCollectionGroupArnProps"></a>

Properties for building a CollectionGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aoss.AossCollectionGroupArnProps.Initializer"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

const aossCollectionGroupArnProps: aoss.AossCollectionGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aoss.AossCollectionGroupArnProps.property.collectionGroupId">collectionGroupId</a></code> | <code>string</code> | The CollectionGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aoss.AossCollectionGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aoss.AossCollectionGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aoss.AossCollectionGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `collectionGroupId`<sup>Required</sup> <a name="collectionGroupId" id="@cdk_utils/iam.aoss.AossCollectionGroupArnProps.property.collectionGroupId"></a>

```typescript
public readonly collectionGroupId: string;
```

- *Type:* string

The CollectionGroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aoss.AossCollectionGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aoss.AossCollectionGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aoss.AossCollectionGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AossDashboardsArnComponents <a name="AossDashboardsArnComponents" id="@cdk_utils/iam.aoss.AossDashboardsArnComponents"></a>

Parsed components of a Dashboards ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aoss.AossDashboardsArnComponents.Initializer"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

const aossDashboardsArnComponents: aoss.AossDashboardsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aoss.AossDashboardsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aoss.AossDashboardsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aoss.AossDashboardsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aoss.AossDashboardsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aoss.AossDashboardsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aoss.AossDashboardsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AossDashboardsArnProps <a name="AossDashboardsArnProps" id="@cdk_utils/iam.aoss.AossDashboardsArnProps"></a>

Properties for building a Dashboards ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aoss.AossDashboardsArnProps.Initializer"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

const aossDashboardsArnProps: aoss.AossDashboardsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aoss.AossDashboardsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aoss.AossDashboardsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aoss.AossDashboardsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aoss.AossDashboardsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aoss.AossDashboardsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aoss.AossDashboardsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AossActions <a name="AossActions" id="@cdk_utils/iam.aoss.AossActions"></a>

IAM action constants for the aoss service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aoss.AossActions.Initializer"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

new aoss.AossActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.actionGetAccessPolicy">actionGetAccessPolicy</a></code> | <code>string</code> | [Read] aoss:GetAccessPolicy. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.actionGetAccountSettings">actionGetAccountSettings</a></code> | <code>string</code> | [Read] aoss:GetAccountSettings. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.actionGetIndex">actionGetIndex</a></code> | <code>string</code> | [Read] aoss:GetIndex. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.actionGetPoliciesStats">actionGetPoliciesStats</a></code> | <code>string</code> | [Read] aoss:GetPoliciesStats. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.actionGetSecurityConfig">actionGetSecurityConfig</a></code> | <code>string</code> | [Read] aoss:GetSecurityConfig. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.actionGetSecurityPolicy">actionGetSecurityPolicy</a></code> | <code>string</code> | [Read] aoss:GetSecurityPolicy. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.AddCollectionToCollectionGroup">AddCollectionToCollectionGroup</a></code> | <code>string</code> | [Write] aoss:AddCollectionToCollectionGroup. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.APIAccessAll">APIAccessAll</a></code> | <code>string</code> | [Write] aoss:APIAccessAll. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.BatchGetCollection">BatchGetCollection</a></code> | <code>string</code> | [Read] aoss:BatchGetCollection. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.BatchGetCollectionGroup">BatchGetCollectionGroup</a></code> | <code>string</code> | [Read] aoss:BatchGetCollectionGroup. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.BatchGetEffectiveLifecyclePolicy">BatchGetEffectiveLifecyclePolicy</a></code> | <code>string</code> | [Read] aoss:BatchGetEffectiveLifecyclePolicy. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.BatchGetLifecyclePolicy">BatchGetLifecyclePolicy</a></code> | <code>string</code> | [Read] aoss:BatchGetLifecyclePolicy. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.BatchGetVpcEndpoint">BatchGetVpcEndpoint</a></code> | <code>string</code> | [Read] aoss:BatchGetVpcEndpoint. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.CreateAccessPolicy">CreateAccessPolicy</a></code> | <code>string</code> | [Write] aoss:CreateAccessPolicy. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.CreateCollection">CreateCollection</a></code> | <code>string</code> | [Write] aoss:CreateCollection. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.CreateCollectionGroup">CreateCollectionGroup</a></code> | <code>string</code> | [Write] aoss:CreateCollectionGroup. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.CreateIndex">CreateIndex</a></code> | <code>string</code> | [Write] aoss:CreateIndex. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.CreateLifecyclePolicy">CreateLifecyclePolicy</a></code> | <code>string</code> | [Write] aoss:CreateLifecyclePolicy. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.CreateSecurityConfig">CreateSecurityConfig</a></code> | <code>string</code> | [Write] aoss:CreateSecurityConfig. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.CreateSecurityPolicy">CreateSecurityPolicy</a></code> | <code>string</code> | [Write] aoss:CreateSecurityPolicy. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.CreateVpcEndpoint">CreateVpcEndpoint</a></code> | <code>string</code> | [Write] aoss:CreateVpcEndpoint. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.DashboardsAccessAll">DashboardsAccessAll</a></code> | <code>string</code> | [Write] aoss:DashboardsAccessAll. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.DeleteAccessPolicy">DeleteAccessPolicy</a></code> | <code>string</code> | [Write] aoss:DeleteAccessPolicy. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.DeleteCollection">DeleteCollection</a></code> | <code>string</code> | [Write] aoss:DeleteCollection. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.DeleteCollectionGroup">DeleteCollectionGroup</a></code> | <code>string</code> | [Write] aoss:DeleteCollectionGroup. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.DeleteIndex">DeleteIndex</a></code> | <code>string</code> | [Write] aoss:DeleteIndex. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.DeleteLifecyclePolicy">DeleteLifecyclePolicy</a></code> | <code>string</code> | [Write] aoss:DeleteLifecyclePolicy. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.DeleteSecurityConfig">DeleteSecurityConfig</a></code> | <code>string</code> | [Write] aoss:DeleteSecurityConfig. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.DeleteSecurityPolicy">DeleteSecurityPolicy</a></code> | <code>string</code> | [Write] aoss:DeleteSecurityPolicy. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.DeleteVpcEndpoint">DeleteVpcEndpoint</a></code> | <code>string</code> | [Write] aoss:DeleteVpcEndpoint. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.ListAccessPolicies">ListAccessPolicies</a></code> | <code>string</code> | [List] aoss:ListAccessPolicies. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.ListCollectionGroups">ListCollectionGroups</a></code> | <code>string</code> | [List] aoss:ListCollectionGroups. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.ListCollections">ListCollections</a></code> | <code>string</code> | [List] aoss:ListCollections. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.ListLifecyclePolicies">ListLifecyclePolicies</a></code> | <code>string</code> | [List] aoss:ListLifecyclePolicies. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.ListSecurityConfigs">ListSecurityConfigs</a></code> | <code>string</code> | [List] aoss:ListSecurityConfigs. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.ListSecurityPolicies">ListSecurityPolicies</a></code> | <code>string</code> | [List] aoss:ListSecurityPolicies. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] aoss:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.ListVpcEndpoints">ListVpcEndpoints</a></code> | <code>string</code> | [List] aoss:ListVpcEndpoints. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Write] aoss:TagResource. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Write] aoss:UntagResource. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.UpdateAccessPolicy">UpdateAccessPolicy</a></code> | <code>string</code> | [Write] aoss:UpdateAccessPolicy. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.UpdateAccountSettings">UpdateAccountSettings</a></code> | <code>string</code> | [Write] aoss:UpdateAccountSettings. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.UpdateCollection">UpdateCollection</a></code> | <code>string</code> | [Write] aoss:UpdateCollection. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.UpdateCollectionGroup">UpdateCollectionGroup</a></code> | <code>string</code> | [Write] aoss:UpdateCollectionGroup. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.UpdateIndex">UpdateIndex</a></code> | <code>string</code> | [Write] aoss:UpdateIndex. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.UpdateLifecyclePolicy">UpdateLifecyclePolicy</a></code> | <code>string</code> | [Write] aoss:UpdateLifecyclePolicy. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.UpdateSecurityConfig">UpdateSecurityConfig</a></code> | <code>string</code> | [Write] aoss:UpdateSecurityConfig. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.UpdateSecurityPolicy">UpdateSecurityPolicy</a></code> | <code>string</code> | [Write] aoss:UpdateSecurityPolicy. |
| <code><a href="#@cdk_utils/iam.aoss.AossActions.property.UpdateVpcEndpoint">UpdateVpcEndpoint</a></code> | <code>string</code> | [Write] aoss:UpdateVpcEndpoint. |

---

##### `actionGetAccessPolicy`<sup>Required</sup> <a name="actionGetAccessPolicy" id="@cdk_utils/iam.aoss.AossActions.property.actionGetAccessPolicy"></a>

```typescript
public readonly actionGetAccessPolicy: string;
```

- *Type:* string

[Read] aoss:GetAccessPolicy.

---

##### `actionGetAccountSettings`<sup>Required</sup> <a name="actionGetAccountSettings" id="@cdk_utils/iam.aoss.AossActions.property.actionGetAccountSettings"></a>

```typescript
public readonly actionGetAccountSettings: string;
```

- *Type:* string

[Read] aoss:GetAccountSettings.

---

##### `actionGetIndex`<sup>Required</sup> <a name="actionGetIndex" id="@cdk_utils/iam.aoss.AossActions.property.actionGetIndex"></a>

```typescript
public readonly actionGetIndex: string;
```

- *Type:* string

[Read] aoss:GetIndex.

---

##### `actionGetPoliciesStats`<sup>Required</sup> <a name="actionGetPoliciesStats" id="@cdk_utils/iam.aoss.AossActions.property.actionGetPoliciesStats"></a>

```typescript
public readonly actionGetPoliciesStats: string;
```

- *Type:* string

[Read] aoss:GetPoliciesStats.

---

##### `actionGetSecurityConfig`<sup>Required</sup> <a name="actionGetSecurityConfig" id="@cdk_utils/iam.aoss.AossActions.property.actionGetSecurityConfig"></a>

```typescript
public readonly actionGetSecurityConfig: string;
```

- *Type:* string

[Read] aoss:GetSecurityConfig.

---

##### `actionGetSecurityPolicy`<sup>Required</sup> <a name="actionGetSecurityPolicy" id="@cdk_utils/iam.aoss.AossActions.property.actionGetSecurityPolicy"></a>

```typescript
public readonly actionGetSecurityPolicy: string;
```

- *Type:* string

[Read] aoss:GetSecurityPolicy.

---

##### `AddCollectionToCollectionGroup`<sup>Required</sup> <a name="AddCollectionToCollectionGroup" id="@cdk_utils/iam.aoss.AossActions.property.AddCollectionToCollectionGroup"></a>

```typescript
public readonly AddCollectionToCollectionGroup: string;
```

- *Type:* string

[Write] aoss:AddCollectionToCollectionGroup.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.aoss.AossActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.aoss.AossActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.aoss.AossActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.aoss.AossActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.aoss.AossActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `APIAccessAll`<sup>Required</sup> <a name="APIAccessAll" id="@cdk_utils/iam.aoss.AossActions.property.APIAccessAll"></a>

```typescript
public readonly APIAccessAll: string;
```

- *Type:* string

[Write] aoss:APIAccessAll.

---

##### `BatchGetCollection`<sup>Required</sup> <a name="BatchGetCollection" id="@cdk_utils/iam.aoss.AossActions.property.BatchGetCollection"></a>

```typescript
public readonly BatchGetCollection: string;
```

- *Type:* string

[Read] aoss:BatchGetCollection.

---

##### `BatchGetCollectionGroup`<sup>Required</sup> <a name="BatchGetCollectionGroup" id="@cdk_utils/iam.aoss.AossActions.property.BatchGetCollectionGroup"></a>

```typescript
public readonly BatchGetCollectionGroup: string;
```

- *Type:* string

[Read] aoss:BatchGetCollectionGroup.

---

##### `BatchGetEffectiveLifecyclePolicy`<sup>Required</sup> <a name="BatchGetEffectiveLifecyclePolicy" id="@cdk_utils/iam.aoss.AossActions.property.BatchGetEffectiveLifecyclePolicy"></a>

```typescript
public readonly BatchGetEffectiveLifecyclePolicy: string;
```

- *Type:* string

[Read] aoss:BatchGetEffectiveLifecyclePolicy.

---

##### `BatchGetLifecyclePolicy`<sup>Required</sup> <a name="BatchGetLifecyclePolicy" id="@cdk_utils/iam.aoss.AossActions.property.BatchGetLifecyclePolicy"></a>

```typescript
public readonly BatchGetLifecyclePolicy: string;
```

- *Type:* string

[Read] aoss:BatchGetLifecyclePolicy.

---

##### `BatchGetVpcEndpoint`<sup>Required</sup> <a name="BatchGetVpcEndpoint" id="@cdk_utils/iam.aoss.AossActions.property.BatchGetVpcEndpoint"></a>

```typescript
public readonly BatchGetVpcEndpoint: string;
```

- *Type:* string

[Read] aoss:BatchGetVpcEndpoint.

---

##### `CreateAccessPolicy`<sup>Required</sup> <a name="CreateAccessPolicy" id="@cdk_utils/iam.aoss.AossActions.property.CreateAccessPolicy"></a>

```typescript
public readonly CreateAccessPolicy: string;
```

- *Type:* string

[Write] aoss:CreateAccessPolicy.

---

##### `CreateCollection`<sup>Required</sup> <a name="CreateCollection" id="@cdk_utils/iam.aoss.AossActions.property.CreateCollection"></a>

```typescript
public readonly CreateCollection: string;
```

- *Type:* string

[Write] aoss:CreateCollection.

---

##### `CreateCollectionGroup`<sup>Required</sup> <a name="CreateCollectionGroup" id="@cdk_utils/iam.aoss.AossActions.property.CreateCollectionGroup"></a>

```typescript
public readonly CreateCollectionGroup: string;
```

- *Type:* string

[Write] aoss:CreateCollectionGroup.

---

##### `CreateIndex`<sup>Required</sup> <a name="CreateIndex" id="@cdk_utils/iam.aoss.AossActions.property.CreateIndex"></a>

```typescript
public readonly CreateIndex: string;
```

- *Type:* string

[Write] aoss:CreateIndex.

---

##### `CreateLifecyclePolicy`<sup>Required</sup> <a name="CreateLifecyclePolicy" id="@cdk_utils/iam.aoss.AossActions.property.CreateLifecyclePolicy"></a>

```typescript
public readonly CreateLifecyclePolicy: string;
```

- *Type:* string

[Write] aoss:CreateLifecyclePolicy.

---

##### `CreateSecurityConfig`<sup>Required</sup> <a name="CreateSecurityConfig" id="@cdk_utils/iam.aoss.AossActions.property.CreateSecurityConfig"></a>

```typescript
public readonly CreateSecurityConfig: string;
```

- *Type:* string

[Write] aoss:CreateSecurityConfig.

---

##### `CreateSecurityPolicy`<sup>Required</sup> <a name="CreateSecurityPolicy" id="@cdk_utils/iam.aoss.AossActions.property.CreateSecurityPolicy"></a>

```typescript
public readonly CreateSecurityPolicy: string;
```

- *Type:* string

[Write] aoss:CreateSecurityPolicy.

---

##### `CreateVpcEndpoint`<sup>Required</sup> <a name="CreateVpcEndpoint" id="@cdk_utils/iam.aoss.AossActions.property.CreateVpcEndpoint"></a>

```typescript
public readonly CreateVpcEndpoint: string;
```

- *Type:* string

[Write] aoss:CreateVpcEndpoint.

---

##### `DashboardsAccessAll`<sup>Required</sup> <a name="DashboardsAccessAll" id="@cdk_utils/iam.aoss.AossActions.property.DashboardsAccessAll"></a>

```typescript
public readonly DashboardsAccessAll: string;
```

- *Type:* string

[Write] aoss:DashboardsAccessAll.

---

##### `DeleteAccessPolicy`<sup>Required</sup> <a name="DeleteAccessPolicy" id="@cdk_utils/iam.aoss.AossActions.property.DeleteAccessPolicy"></a>

```typescript
public readonly DeleteAccessPolicy: string;
```

- *Type:* string

[Write] aoss:DeleteAccessPolicy.

---

##### `DeleteCollection`<sup>Required</sup> <a name="DeleteCollection" id="@cdk_utils/iam.aoss.AossActions.property.DeleteCollection"></a>

```typescript
public readonly DeleteCollection: string;
```

- *Type:* string

[Write] aoss:DeleteCollection.

---

##### `DeleteCollectionGroup`<sup>Required</sup> <a name="DeleteCollectionGroup" id="@cdk_utils/iam.aoss.AossActions.property.DeleteCollectionGroup"></a>

```typescript
public readonly DeleteCollectionGroup: string;
```

- *Type:* string

[Write] aoss:DeleteCollectionGroup.

---

##### `DeleteIndex`<sup>Required</sup> <a name="DeleteIndex" id="@cdk_utils/iam.aoss.AossActions.property.DeleteIndex"></a>

```typescript
public readonly DeleteIndex: string;
```

- *Type:* string

[Write] aoss:DeleteIndex.

---

##### `DeleteLifecyclePolicy`<sup>Required</sup> <a name="DeleteLifecyclePolicy" id="@cdk_utils/iam.aoss.AossActions.property.DeleteLifecyclePolicy"></a>

```typescript
public readonly DeleteLifecyclePolicy: string;
```

- *Type:* string

[Write] aoss:DeleteLifecyclePolicy.

---

##### `DeleteSecurityConfig`<sup>Required</sup> <a name="DeleteSecurityConfig" id="@cdk_utils/iam.aoss.AossActions.property.DeleteSecurityConfig"></a>

```typescript
public readonly DeleteSecurityConfig: string;
```

- *Type:* string

[Write] aoss:DeleteSecurityConfig.

---

##### `DeleteSecurityPolicy`<sup>Required</sup> <a name="DeleteSecurityPolicy" id="@cdk_utils/iam.aoss.AossActions.property.DeleteSecurityPolicy"></a>

```typescript
public readonly DeleteSecurityPolicy: string;
```

- *Type:* string

[Write] aoss:DeleteSecurityPolicy.

---

##### `DeleteVpcEndpoint`<sup>Required</sup> <a name="DeleteVpcEndpoint" id="@cdk_utils/iam.aoss.AossActions.property.DeleteVpcEndpoint"></a>

```typescript
public readonly DeleteVpcEndpoint: string;
```

- *Type:* string

[Write] aoss:DeleteVpcEndpoint.

---

##### `ListAccessPolicies`<sup>Required</sup> <a name="ListAccessPolicies" id="@cdk_utils/iam.aoss.AossActions.property.ListAccessPolicies"></a>

```typescript
public readonly ListAccessPolicies: string;
```

- *Type:* string

[List] aoss:ListAccessPolicies.

---

##### `ListCollectionGroups`<sup>Required</sup> <a name="ListCollectionGroups" id="@cdk_utils/iam.aoss.AossActions.property.ListCollectionGroups"></a>

```typescript
public readonly ListCollectionGroups: string;
```

- *Type:* string

[List] aoss:ListCollectionGroups.

---

##### `ListCollections`<sup>Required</sup> <a name="ListCollections" id="@cdk_utils/iam.aoss.AossActions.property.ListCollections"></a>

```typescript
public readonly ListCollections: string;
```

- *Type:* string

[List] aoss:ListCollections.

---

##### `ListLifecyclePolicies`<sup>Required</sup> <a name="ListLifecyclePolicies" id="@cdk_utils/iam.aoss.AossActions.property.ListLifecyclePolicies"></a>

```typescript
public readonly ListLifecyclePolicies: string;
```

- *Type:* string

[List] aoss:ListLifecyclePolicies.

---

##### `ListSecurityConfigs`<sup>Required</sup> <a name="ListSecurityConfigs" id="@cdk_utils/iam.aoss.AossActions.property.ListSecurityConfigs"></a>

```typescript
public readonly ListSecurityConfigs: string;
```

- *Type:* string

[List] aoss:ListSecurityConfigs.

---

##### `ListSecurityPolicies`<sup>Required</sup> <a name="ListSecurityPolicies" id="@cdk_utils/iam.aoss.AossActions.property.ListSecurityPolicies"></a>

```typescript
public readonly ListSecurityPolicies: string;
```

- *Type:* string

[List] aoss:ListSecurityPolicies.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.aoss.AossActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] aoss:ListTagsForResource.

---

##### `ListVpcEndpoints`<sup>Required</sup> <a name="ListVpcEndpoints" id="@cdk_utils/iam.aoss.AossActions.property.ListVpcEndpoints"></a>

```typescript
public readonly ListVpcEndpoints: string;
```

- *Type:* string

[List] aoss:ListVpcEndpoints.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.aoss.AossActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.aoss.AossActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Write] aoss:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.aoss.AossActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Write] aoss:UntagResource.

---

##### `UpdateAccessPolicy`<sup>Required</sup> <a name="UpdateAccessPolicy" id="@cdk_utils/iam.aoss.AossActions.property.UpdateAccessPolicy"></a>

```typescript
public readonly UpdateAccessPolicy: string;
```

- *Type:* string

[Write] aoss:UpdateAccessPolicy.

---

##### `UpdateAccountSettings`<sup>Required</sup> <a name="UpdateAccountSettings" id="@cdk_utils/iam.aoss.AossActions.property.UpdateAccountSettings"></a>

```typescript
public readonly UpdateAccountSettings: string;
```

- *Type:* string

[Write] aoss:UpdateAccountSettings.

---

##### `UpdateCollection`<sup>Required</sup> <a name="UpdateCollection" id="@cdk_utils/iam.aoss.AossActions.property.UpdateCollection"></a>

```typescript
public readonly UpdateCollection: string;
```

- *Type:* string

[Write] aoss:UpdateCollection.

---

##### `UpdateCollectionGroup`<sup>Required</sup> <a name="UpdateCollectionGroup" id="@cdk_utils/iam.aoss.AossActions.property.UpdateCollectionGroup"></a>

```typescript
public readonly UpdateCollectionGroup: string;
```

- *Type:* string

[Write] aoss:UpdateCollectionGroup.

---

##### `UpdateIndex`<sup>Required</sup> <a name="UpdateIndex" id="@cdk_utils/iam.aoss.AossActions.property.UpdateIndex"></a>

```typescript
public readonly UpdateIndex: string;
```

- *Type:* string

[Write] aoss:UpdateIndex.

---

##### `UpdateLifecyclePolicy`<sup>Required</sup> <a name="UpdateLifecyclePolicy" id="@cdk_utils/iam.aoss.AossActions.property.UpdateLifecyclePolicy"></a>

```typescript
public readonly UpdateLifecyclePolicy: string;
```

- *Type:* string

[Write] aoss:UpdateLifecyclePolicy.

---

##### `UpdateSecurityConfig`<sup>Required</sup> <a name="UpdateSecurityConfig" id="@cdk_utils/iam.aoss.AossActions.property.UpdateSecurityConfig"></a>

```typescript
public readonly UpdateSecurityConfig: string;
```

- *Type:* string

[Write] aoss:UpdateSecurityConfig.

---

##### `UpdateSecurityPolicy`<sup>Required</sup> <a name="UpdateSecurityPolicy" id="@cdk_utils/iam.aoss.AossActions.property.UpdateSecurityPolicy"></a>

```typescript
public readonly UpdateSecurityPolicy: string;
```

- *Type:* string

[Write] aoss:UpdateSecurityPolicy.

---

##### `UpdateVpcEndpoint`<sup>Required</sup> <a name="UpdateVpcEndpoint" id="@cdk_utils/iam.aoss.AossActions.property.UpdateVpcEndpoint"></a>

```typescript
public readonly UpdateVpcEndpoint: string;
```

- *Type:* string

[Write] aoss:UpdateVpcEndpoint.

---

### AossConditions <a name="AossConditions" id="@cdk_utils/iam.aoss.AossConditions"></a>

Condition key constants and builders for aoss.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aoss.AossConditions.Initializer"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

new aoss.AossConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.collection">collection</a></code> | Generates a condition block for `aoss:collection`. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.collectionGroup">collectionGroup</a></code> | Generates a condition block for `aoss:collection-group`. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.collectionId">collectionId</a></code> | Generates a condition block for `aoss:CollectionId`. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.index">index</a></code> | Generates a condition block for `aoss:index`. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `collection` <a name="collection" id="@cdk_utils/iam.aoss.AossConditions.collection"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

aoss.AossConditions.collection(value: string)
```

Generates a condition block for `aoss:collection`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aoss.AossConditions.collection.parameter.value"></a>

- *Type:* string

---

##### `collectionGroup` <a name="collectionGroup" id="@cdk_utils/iam.aoss.AossConditions.collectionGroup"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

aoss.AossConditions.collectionGroup(value: string)
```

Generates a condition block for `aoss:collection-group`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aoss.AossConditions.collectionGroup.parameter.value"></a>

- *Type:* string

---

##### `collectionId` <a name="collectionId" id="@cdk_utils/iam.aoss.AossConditions.collectionId"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

aoss.AossConditions.collectionId(value: string)
```

Generates a condition block for `aoss:CollectionId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aoss.AossConditions.collectionId.parameter.value"></a>

- *Type:* string

---

##### `index` <a name="index" id="@cdk_utils/iam.aoss.AossConditions.index"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

aoss.AossConditions.index(value: string)
```

Generates a condition block for `aoss:index`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aoss.AossConditions.index.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.aoss.AossConditions.requestTag"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

aoss.AossConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aoss.AossConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.aoss.AossConditions.resourceTag"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

aoss.AossConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aoss.AossConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.aoss.AossConditions.tagKeys"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

aoss.AossConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.aoss.AossConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.actionGetAccessPolicyConditionKeys">actionGetAccessPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAccessPolicy action. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.actionGetSecurityPolicyConditionKeys">actionGetSecurityPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSecurityPolicy action. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.AddCollectionToCollectionGroupConditionKeys">AddCollectionToCollectionGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddCollectionToCollectionGroup action. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.APIAccessAllConditionKeys">APIAccessAllConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the APIAccessAll action. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.BatchGetCollectionConditionKeys">BatchGetCollectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchGetCollection action. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.BatchGetCollectionGroupConditionKeys">BatchGetCollectionGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchGetCollectionGroup action. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.COLLECTION">COLLECTION</a></code> | <code>string</code> | Condition key: aoss:collection (String). |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.COLLECTION_GROUP">COLLECTION_GROUP</a></code> | <code>string</code> | Condition key: aoss:collection-group (String). |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.COLLECTION_ID">COLLECTION_ID</a></code> | <code>string</code> | Condition key: aoss:CollectionId (String). |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.CreateAccessPolicyConditionKeys">CreateAccessPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAccessPolicy action. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.CreateCollectionConditionKeys">CreateCollectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCollection action. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.CreateCollectionGroupConditionKeys">CreateCollectionGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCollectionGroup action. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.CreateLifecyclePolicyConditionKeys">CreateLifecyclePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLifecyclePolicy action. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.CreateSecurityPolicyConditionKeys">CreateSecurityPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSecurityPolicy action. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.DashboardsAccessAllConditionKeys">DashboardsAccessAllConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DashboardsAccessAll action. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.DeleteAccessPolicyConditionKeys">DeleteAccessPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAccessPolicy action. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.DeleteLifecyclePolicyConditionKeys">DeleteLifecyclePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteLifecyclePolicy action. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.DeleteSecurityPolicyConditionKeys">DeleteSecurityPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteSecurityPolicy action. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.INDEX">INDEX</a></code> | <code>string</code> | Condition key: aoss:index (String). |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.UpdateAccessPolicyConditionKeys">UpdateAccessPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAccessPolicy action. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.UpdateLifecyclePolicyConditionKeys">UpdateLifecyclePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateLifecyclePolicy action. |
| <code><a href="#@cdk_utils/iam.aoss.AossConditions.property.UpdateSecurityPolicyConditionKeys">UpdateSecurityPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSecurityPolicy action. |

---

##### `actionGetAccessPolicyConditionKeys`<sup>Required</sup> <a name="actionGetAccessPolicyConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.actionGetAccessPolicyConditionKeys"></a>

```typescript
public readonly actionGetAccessPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAccessPolicy action.

---

##### `actionGetSecurityPolicyConditionKeys`<sup>Required</sup> <a name="actionGetSecurityPolicyConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.actionGetSecurityPolicyConditionKeys"></a>

```typescript
public readonly actionGetSecurityPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSecurityPolicy action.

---

##### `AddCollectionToCollectionGroupConditionKeys`<sup>Required</sup> <a name="AddCollectionToCollectionGroupConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.AddCollectionToCollectionGroupConditionKeys"></a>

```typescript
public readonly AddCollectionToCollectionGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddCollectionToCollectionGroup action.

---

##### `APIAccessAllConditionKeys`<sup>Required</sup> <a name="APIAccessAllConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.APIAccessAllConditionKeys"></a>

```typescript
public readonly APIAccessAllConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the APIAccessAll action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.aoss.AossConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.aoss.AossConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.aoss.AossConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BatchGetCollectionConditionKeys`<sup>Required</sup> <a name="BatchGetCollectionConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.BatchGetCollectionConditionKeys"></a>

```typescript
public readonly BatchGetCollectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchGetCollection action.

---

##### `BatchGetCollectionGroupConditionKeys`<sup>Required</sup> <a name="BatchGetCollectionGroupConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.BatchGetCollectionGroupConditionKeys"></a>

```typescript
public readonly BatchGetCollectionGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchGetCollectionGroup action.

---

##### `COLLECTION`<sup>Required</sup> <a name="COLLECTION" id="@cdk_utils/iam.aoss.AossConditions.property.COLLECTION"></a>

```typescript
public readonly COLLECTION: string;
```

- *Type:* string

Condition key: aoss:collection (String).

---

##### `COLLECTION_GROUP`<sup>Required</sup> <a name="COLLECTION_GROUP" id="@cdk_utils/iam.aoss.AossConditions.property.COLLECTION_GROUP"></a>

```typescript
public readonly COLLECTION_GROUP: string;
```

- *Type:* string

Condition key: aoss:collection-group (String).

---

##### `COLLECTION_ID`<sup>Required</sup> <a name="COLLECTION_ID" id="@cdk_utils/iam.aoss.AossConditions.property.COLLECTION_ID"></a>

```typescript
public readonly COLLECTION_ID: string;
```

- *Type:* string

Condition key: aoss:CollectionId (String).

---

##### `CreateAccessPolicyConditionKeys`<sup>Required</sup> <a name="CreateAccessPolicyConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.CreateAccessPolicyConditionKeys"></a>

```typescript
public readonly CreateAccessPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAccessPolicy action.

---

##### `CreateCollectionConditionKeys`<sup>Required</sup> <a name="CreateCollectionConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.CreateCollectionConditionKeys"></a>

```typescript
public readonly CreateCollectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCollection action.

---

##### `CreateCollectionGroupConditionKeys`<sup>Required</sup> <a name="CreateCollectionGroupConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.CreateCollectionGroupConditionKeys"></a>

```typescript
public readonly CreateCollectionGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCollectionGroup action.

---

##### `CreateLifecyclePolicyConditionKeys`<sup>Required</sup> <a name="CreateLifecyclePolicyConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.CreateLifecyclePolicyConditionKeys"></a>

```typescript
public readonly CreateLifecyclePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLifecyclePolicy action.

---

##### `CreateSecurityPolicyConditionKeys`<sup>Required</sup> <a name="CreateSecurityPolicyConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.CreateSecurityPolicyConditionKeys"></a>

```typescript
public readonly CreateSecurityPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSecurityPolicy action.

---

##### `DashboardsAccessAllConditionKeys`<sup>Required</sup> <a name="DashboardsAccessAllConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.DashboardsAccessAllConditionKeys"></a>

```typescript
public readonly DashboardsAccessAllConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DashboardsAccessAll action.

---

##### `DeleteAccessPolicyConditionKeys`<sup>Required</sup> <a name="DeleteAccessPolicyConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.DeleteAccessPolicyConditionKeys"></a>

```typescript
public readonly DeleteAccessPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAccessPolicy action.

---

##### `DeleteLifecyclePolicyConditionKeys`<sup>Required</sup> <a name="DeleteLifecyclePolicyConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.DeleteLifecyclePolicyConditionKeys"></a>

```typescript
public readonly DeleteLifecyclePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteLifecyclePolicy action.

---

##### `DeleteSecurityPolicyConditionKeys`<sup>Required</sup> <a name="DeleteSecurityPolicyConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.DeleteSecurityPolicyConditionKeys"></a>

```typescript
public readonly DeleteSecurityPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteSecurityPolicy action.

---

##### `INDEX`<sup>Required</sup> <a name="INDEX" id="@cdk_utils/iam.aoss.AossConditions.property.INDEX"></a>

```typescript
public readonly INDEX: string;
```

- *Type:* string

Condition key: aoss:index (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateAccessPolicyConditionKeys`<sup>Required</sup> <a name="UpdateAccessPolicyConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.UpdateAccessPolicyConditionKeys"></a>

```typescript
public readonly UpdateAccessPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAccessPolicy action.

---

##### `UpdateLifecyclePolicyConditionKeys`<sup>Required</sup> <a name="UpdateLifecyclePolicyConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.UpdateLifecyclePolicyConditionKeys"></a>

```typescript
public readonly UpdateLifecyclePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateLifecyclePolicy action.

---

##### `UpdateSecurityPolicyConditionKeys`<sup>Required</sup> <a name="UpdateSecurityPolicyConditionKeys" id="@cdk_utils/iam.aoss.AossConditions.property.UpdateSecurityPolicyConditionKeys"></a>

```typescript
public readonly UpdateSecurityPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSecurityPolicy action.

---

### AossOperations <a name="AossOperations" id="@cdk_utils/iam.aoss.AossOperations"></a>

API operation to required IAM actions mapping for aoss.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aoss.AossOperations.Initializer"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

new aoss.AossOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.BatchGetCollection">BatchGetCollection</a></code> | <code>string[]</code> | IAM actions required for the BatchGetCollection API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.BatchGetCollectionGroup">BatchGetCollectionGroup</a></code> | <code>string[]</code> | IAM actions required for the BatchGetCollectionGroup API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.BatchGetEffectiveLifecyclePolicy">BatchGetEffectiveLifecyclePolicy</a></code> | <code>string[]</code> | IAM actions required for the BatchGetEffectiveLifecyclePolicy API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.BatchGetLifecyclePolicy">BatchGetLifecyclePolicy</a></code> | <code>string[]</code> | IAM actions required for the BatchGetLifecyclePolicy API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.BatchGetVpcEndpoint">BatchGetVpcEndpoint</a></code> | <code>string[]</code> | IAM actions required for the BatchGetVpcEndpoint API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.CreateAccessPolicy">CreateAccessPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateAccessPolicy API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.CreateCollection">CreateCollection</a></code> | <code>string[]</code> | IAM actions required for the CreateCollection API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.CreateCollectionGroup">CreateCollectionGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateCollectionGroup API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.CreateIndex">CreateIndex</a></code> | <code>string[]</code> | IAM actions required for the CreateIndex API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.CreateLifecyclePolicy">CreateLifecyclePolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateLifecyclePolicy API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.CreateSecurityConfig">CreateSecurityConfig</a></code> | <code>string[]</code> | IAM actions required for the CreateSecurityConfig API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.CreateSecurityPolicy">CreateSecurityPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateSecurityPolicy API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.CreateVpcEndpoint">CreateVpcEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateVpcEndpoint API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.DeleteAccessPolicy">DeleteAccessPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccessPolicy API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.DeleteCollection">DeleteCollection</a></code> | <code>string[]</code> | IAM actions required for the DeleteCollection API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.DeleteCollectionGroup">DeleteCollectionGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteCollectionGroup API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.DeleteIndex">DeleteIndex</a></code> | <code>string[]</code> | IAM actions required for the DeleteIndex API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.DeleteLifecyclePolicy">DeleteLifecyclePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteLifecyclePolicy API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.DeleteSecurityConfig">DeleteSecurityConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteSecurityConfig API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.DeleteSecurityPolicy">DeleteSecurityPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteSecurityPolicy API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.DeleteVpcEndpoint">DeleteVpcEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteVpcEndpoint API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.ListAccessPolicies">ListAccessPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListAccessPolicies API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.ListCollectionGroups">ListCollectionGroups</a></code> | <code>string[]</code> | IAM actions required for the ListCollectionGroups API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.ListCollections">ListCollections</a></code> | <code>string[]</code> | IAM actions required for the ListCollections API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.ListLifecyclePolicies">ListLifecyclePolicies</a></code> | <code>string[]</code> | IAM actions required for the ListLifecyclePolicies API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.ListSecurityConfigs">ListSecurityConfigs</a></code> | <code>string[]</code> | IAM actions required for the ListSecurityConfigs API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.ListSecurityPolicies">ListSecurityPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListSecurityPolicies API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.ListVpcEndpoints">ListVpcEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListVpcEndpoints API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.opGetAccessPolicy">opGetAccessPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetAccessPolicy API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.opGetAccountSettings">opGetAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the GetAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.opGetIndex">opGetIndex</a></code> | <code>string[]</code> | IAM actions required for the GetIndex API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.opGetPoliciesStats">opGetPoliciesStats</a></code> | <code>string[]</code> | IAM actions required for the GetPoliciesStats API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.opGetSecurityConfig">opGetSecurityConfig</a></code> | <code>string[]</code> | IAM actions required for the GetSecurityConfig API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.opGetSecurityPolicy">opGetSecurityPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetSecurityPolicy API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.UpdateAccessPolicy">UpdateAccessPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccessPolicy API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.UpdateAccountSettings">UpdateAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.UpdateCollection">UpdateCollection</a></code> | <code>string[]</code> | IAM actions required for the UpdateCollection API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.UpdateCollectionGroup">UpdateCollectionGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateCollectionGroup API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.UpdateIndex">UpdateIndex</a></code> | <code>string[]</code> | IAM actions required for the UpdateIndex API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.UpdateLifecyclePolicy">UpdateLifecyclePolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateLifecyclePolicy API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.UpdateSecurityConfig">UpdateSecurityConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateSecurityConfig API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.UpdateSecurityPolicy">UpdateSecurityPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateSecurityPolicy API call. |
| <code><a href="#@cdk_utils/iam.aoss.AossOperations.property.UpdateVpcEndpoint">UpdateVpcEndpoint</a></code> | <code>string[]</code> | IAM actions required for the UpdateVpcEndpoint API call. |

---

##### `BatchGetCollection`<sup>Required</sup> <a name="BatchGetCollection" id="@cdk_utils/iam.aoss.AossOperations.property.BatchGetCollection"></a>

```typescript
public readonly BatchGetCollection: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetCollection API call.

---

##### `BatchGetCollectionGroup`<sup>Required</sup> <a name="BatchGetCollectionGroup" id="@cdk_utils/iam.aoss.AossOperations.property.BatchGetCollectionGroup"></a>

```typescript
public readonly BatchGetCollectionGroup: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetCollectionGroup API call.

---

##### `BatchGetEffectiveLifecyclePolicy`<sup>Required</sup> <a name="BatchGetEffectiveLifecyclePolicy" id="@cdk_utils/iam.aoss.AossOperations.property.BatchGetEffectiveLifecyclePolicy"></a>

```typescript
public readonly BatchGetEffectiveLifecyclePolicy: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetEffectiveLifecyclePolicy API call.

---

##### `BatchGetLifecyclePolicy`<sup>Required</sup> <a name="BatchGetLifecyclePolicy" id="@cdk_utils/iam.aoss.AossOperations.property.BatchGetLifecyclePolicy"></a>

```typescript
public readonly BatchGetLifecyclePolicy: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetLifecyclePolicy API call.

---

##### `BatchGetVpcEndpoint`<sup>Required</sup> <a name="BatchGetVpcEndpoint" id="@cdk_utils/iam.aoss.AossOperations.property.BatchGetVpcEndpoint"></a>

```typescript
public readonly BatchGetVpcEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetVpcEndpoint API call.

---

##### `CreateAccessPolicy`<sup>Required</sup> <a name="CreateAccessPolicy" id="@cdk_utils/iam.aoss.AossOperations.property.CreateAccessPolicy"></a>

```typescript
public readonly CreateAccessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccessPolicy API call.

---

##### `CreateCollection`<sup>Required</sup> <a name="CreateCollection" id="@cdk_utils/iam.aoss.AossOperations.property.CreateCollection"></a>

```typescript
public readonly CreateCollection: string[];
```

- *Type:* string[]

IAM actions required for the CreateCollection API call.

---

##### `CreateCollectionGroup`<sup>Required</sup> <a name="CreateCollectionGroup" id="@cdk_utils/iam.aoss.AossOperations.property.CreateCollectionGroup"></a>

```typescript
public readonly CreateCollectionGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateCollectionGroup API call.

---

##### `CreateIndex`<sup>Required</sup> <a name="CreateIndex" id="@cdk_utils/iam.aoss.AossOperations.property.CreateIndex"></a>

```typescript
public readonly CreateIndex: string[];
```

- *Type:* string[]

IAM actions required for the CreateIndex API call.

---

##### `CreateLifecyclePolicy`<sup>Required</sup> <a name="CreateLifecyclePolicy" id="@cdk_utils/iam.aoss.AossOperations.property.CreateLifecyclePolicy"></a>

```typescript
public readonly CreateLifecyclePolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateLifecyclePolicy API call.

---

##### `CreateSecurityConfig`<sup>Required</sup> <a name="CreateSecurityConfig" id="@cdk_utils/iam.aoss.AossOperations.property.CreateSecurityConfig"></a>

```typescript
public readonly CreateSecurityConfig: string[];
```

- *Type:* string[]

IAM actions required for the CreateSecurityConfig API call.

---

##### `CreateSecurityPolicy`<sup>Required</sup> <a name="CreateSecurityPolicy" id="@cdk_utils/iam.aoss.AossOperations.property.CreateSecurityPolicy"></a>

```typescript
public readonly CreateSecurityPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateSecurityPolicy API call.

---

##### `CreateVpcEndpoint`<sup>Required</sup> <a name="CreateVpcEndpoint" id="@cdk_utils/iam.aoss.AossOperations.property.CreateVpcEndpoint"></a>

```typescript
public readonly CreateVpcEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateVpcEndpoint API call.

---

##### `DeleteAccessPolicy`<sup>Required</sup> <a name="DeleteAccessPolicy" id="@cdk_utils/iam.aoss.AossOperations.property.DeleteAccessPolicy"></a>

```typescript
public readonly DeleteAccessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccessPolicy API call.

---

##### `DeleteCollection`<sup>Required</sup> <a name="DeleteCollection" id="@cdk_utils/iam.aoss.AossOperations.property.DeleteCollection"></a>

```typescript
public readonly DeleteCollection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCollection API call.

---

##### `DeleteCollectionGroup`<sup>Required</sup> <a name="DeleteCollectionGroup" id="@cdk_utils/iam.aoss.AossOperations.property.DeleteCollectionGroup"></a>

```typescript
public readonly DeleteCollectionGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCollectionGroup API call.

---

##### `DeleteIndex`<sup>Required</sup> <a name="DeleteIndex" id="@cdk_utils/iam.aoss.AossOperations.property.DeleteIndex"></a>

```typescript
public readonly DeleteIndex: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIndex API call.

---

##### `DeleteLifecyclePolicy`<sup>Required</sup> <a name="DeleteLifecyclePolicy" id="@cdk_utils/iam.aoss.AossOperations.property.DeleteLifecyclePolicy"></a>

```typescript
public readonly DeleteLifecyclePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLifecyclePolicy API call.

---

##### `DeleteSecurityConfig`<sup>Required</sup> <a name="DeleteSecurityConfig" id="@cdk_utils/iam.aoss.AossOperations.property.DeleteSecurityConfig"></a>

```typescript
public readonly DeleteSecurityConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSecurityConfig API call.

---

##### `DeleteSecurityPolicy`<sup>Required</sup> <a name="DeleteSecurityPolicy" id="@cdk_utils/iam.aoss.AossOperations.property.DeleteSecurityPolicy"></a>

```typescript
public readonly DeleteSecurityPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSecurityPolicy API call.

---

##### `DeleteVpcEndpoint`<sup>Required</sup> <a name="DeleteVpcEndpoint" id="@cdk_utils/iam.aoss.AossOperations.property.DeleteVpcEndpoint"></a>

```typescript
public readonly DeleteVpcEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVpcEndpoint API call.

---

##### `ListAccessPolicies`<sup>Required</sup> <a name="ListAccessPolicies" id="@cdk_utils/iam.aoss.AossOperations.property.ListAccessPolicies"></a>

```typescript
public readonly ListAccessPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListAccessPolicies API call.

---

##### `ListCollectionGroups`<sup>Required</sup> <a name="ListCollectionGroups" id="@cdk_utils/iam.aoss.AossOperations.property.ListCollectionGroups"></a>

```typescript
public readonly ListCollectionGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListCollectionGroups API call.

---

##### `ListCollections`<sup>Required</sup> <a name="ListCollections" id="@cdk_utils/iam.aoss.AossOperations.property.ListCollections"></a>

```typescript
public readonly ListCollections: string[];
```

- *Type:* string[]

IAM actions required for the ListCollections API call.

---

##### `ListLifecyclePolicies`<sup>Required</sup> <a name="ListLifecyclePolicies" id="@cdk_utils/iam.aoss.AossOperations.property.ListLifecyclePolicies"></a>

```typescript
public readonly ListLifecyclePolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListLifecyclePolicies API call.

---

##### `ListSecurityConfigs`<sup>Required</sup> <a name="ListSecurityConfigs" id="@cdk_utils/iam.aoss.AossOperations.property.ListSecurityConfigs"></a>

```typescript
public readonly ListSecurityConfigs: string[];
```

- *Type:* string[]

IAM actions required for the ListSecurityConfigs API call.

---

##### `ListSecurityPolicies`<sup>Required</sup> <a name="ListSecurityPolicies" id="@cdk_utils/iam.aoss.AossOperations.property.ListSecurityPolicies"></a>

```typescript
public readonly ListSecurityPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListSecurityPolicies API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.aoss.AossOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListVpcEndpoints`<sup>Required</sup> <a name="ListVpcEndpoints" id="@cdk_utils/iam.aoss.AossOperations.property.ListVpcEndpoints"></a>

```typescript
public readonly ListVpcEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListVpcEndpoints API call.

---

##### `opGetAccessPolicy`<sup>Required</sup> <a name="opGetAccessPolicy" id="@cdk_utils/iam.aoss.AossOperations.property.opGetAccessPolicy"></a>

```typescript
public readonly opGetAccessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetAccessPolicy API call.

---

##### `opGetAccountSettings`<sup>Required</sup> <a name="opGetAccountSettings" id="@cdk_utils/iam.aoss.AossOperations.property.opGetAccountSettings"></a>

```typescript
public readonly opGetAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountSettings API call.

---

##### `opGetIndex`<sup>Required</sup> <a name="opGetIndex" id="@cdk_utils/iam.aoss.AossOperations.property.opGetIndex"></a>

```typescript
public readonly opGetIndex: string[];
```

- *Type:* string[]

IAM actions required for the GetIndex API call.

---

##### `opGetPoliciesStats`<sup>Required</sup> <a name="opGetPoliciesStats" id="@cdk_utils/iam.aoss.AossOperations.property.opGetPoliciesStats"></a>

```typescript
public readonly opGetPoliciesStats: string[];
```

- *Type:* string[]

IAM actions required for the GetPoliciesStats API call.

---

##### `opGetSecurityConfig`<sup>Required</sup> <a name="opGetSecurityConfig" id="@cdk_utils/iam.aoss.AossOperations.property.opGetSecurityConfig"></a>

```typescript
public readonly opGetSecurityConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetSecurityConfig API call.

---

##### `opGetSecurityPolicy`<sup>Required</sup> <a name="opGetSecurityPolicy" id="@cdk_utils/iam.aoss.AossOperations.property.opGetSecurityPolicy"></a>

```typescript
public readonly opGetSecurityPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetSecurityPolicy API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.aoss.AossOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.aoss.AossOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccessPolicy`<sup>Required</sup> <a name="UpdateAccessPolicy" id="@cdk_utils/iam.aoss.AossOperations.property.UpdateAccessPolicy"></a>

```typescript
public readonly UpdateAccessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccessPolicy API call.

---

##### `UpdateAccountSettings`<sup>Required</sup> <a name="UpdateAccountSettings" id="@cdk_utils/iam.aoss.AossOperations.property.UpdateAccountSettings"></a>

```typescript
public readonly UpdateAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccountSettings API call.

---

##### `UpdateCollection`<sup>Required</sup> <a name="UpdateCollection" id="@cdk_utils/iam.aoss.AossOperations.property.UpdateCollection"></a>

```typescript
public readonly UpdateCollection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCollection API call.

---

##### `UpdateCollectionGroup`<sup>Required</sup> <a name="UpdateCollectionGroup" id="@cdk_utils/iam.aoss.AossOperations.property.UpdateCollectionGroup"></a>

```typescript
public readonly UpdateCollectionGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCollectionGroup API call.

---

##### `UpdateIndex`<sup>Required</sup> <a name="UpdateIndex" id="@cdk_utils/iam.aoss.AossOperations.property.UpdateIndex"></a>

```typescript
public readonly UpdateIndex: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIndex API call.

---

##### `UpdateLifecyclePolicy`<sup>Required</sup> <a name="UpdateLifecyclePolicy" id="@cdk_utils/iam.aoss.AossOperations.property.UpdateLifecyclePolicy"></a>

```typescript
public readonly UpdateLifecyclePolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLifecyclePolicy API call.

---

##### `UpdateSecurityConfig`<sup>Required</sup> <a name="UpdateSecurityConfig" id="@cdk_utils/iam.aoss.AossOperations.property.UpdateSecurityConfig"></a>

```typescript
public readonly UpdateSecurityConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSecurityConfig API call.

---

##### `UpdateSecurityPolicy`<sup>Required</sup> <a name="UpdateSecurityPolicy" id="@cdk_utils/iam.aoss.AossOperations.property.UpdateSecurityPolicy"></a>

```typescript
public readonly UpdateSecurityPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSecurityPolicy API call.

---

##### `UpdateVpcEndpoint`<sup>Required</sup> <a name="UpdateVpcEndpoint" id="@cdk_utils/iam.aoss.AossOperations.property.UpdateVpcEndpoint"></a>

```typescript
public readonly UpdateVpcEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVpcEndpoint API call.

---

### AossResources <a name="AossResources" id="@cdk_utils/iam.aoss.AossResources"></a>

ARN builders, validators, and parsers for aoss resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aoss.AossResources.Initializer"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

new aoss.AossResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.aoss.AossResources.collection">collection</a></code> | Builds an ARN for the Collection resource. |
| <code><a href="#@cdk_utils/iam.aoss.AossResources.collectionGroup">collectionGroup</a></code> | Builds an ARN for the CollectionGroup resource. |
| <code><a href="#@cdk_utils/iam.aoss.AossResources.dashboards">dashboards</a></code> | Builds an ARN for the Dashboards resource. |
| <code><a href="#@cdk_utils/iam.aoss.AossResources.isValidCollectionArn">isValidCollectionArn</a></code> | Validates whether a string is a valid ARN for the Collection resource. |
| <code><a href="#@cdk_utils/iam.aoss.AossResources.isValidCollectionGroupArn">isValidCollectionGroupArn</a></code> | Validates whether a string is a valid ARN for the CollectionGroup resource. |
| <code><a href="#@cdk_utils/iam.aoss.AossResources.isValidDashboardsArn">isValidDashboardsArn</a></code> | Validates whether a string is a valid ARN for the Dashboards resource. |
| <code><a href="#@cdk_utils/iam.aoss.AossResources.parseCollectionArn">parseCollectionArn</a></code> | Parses a Collection ARN into its components. |
| <code><a href="#@cdk_utils/iam.aoss.AossResources.parseCollectionGroupArn">parseCollectionGroupArn</a></code> | Parses a CollectionGroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.aoss.AossResources.parseDashboardsArn">parseDashboardsArn</a></code> | Parses a Dashboards ARN into its components. |

---

##### `collection` <a name="collection" id="@cdk_utils/iam.aoss.AossResources.collection"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

aoss.AossResources.collection(props: AossCollectionArnProps)
```

Builds an ARN for the Collection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aoss.AossResources.collection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aoss.AossCollectionArnProps">AossCollectionArnProps</a>

---

##### `collectionGroup` <a name="collectionGroup" id="@cdk_utils/iam.aoss.AossResources.collectionGroup"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

aoss.AossResources.collectionGroup(props: AossCollectionGroupArnProps)
```

Builds an ARN for the CollectionGroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aoss.AossResources.collectionGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aoss.AossCollectionGroupArnProps">AossCollectionGroupArnProps</a>

---

##### `dashboards` <a name="dashboards" id="@cdk_utils/iam.aoss.AossResources.dashboards"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

aoss.AossResources.dashboards(props: AossDashboardsArnProps)
```

Builds an ARN for the Dashboards resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aoss.AossResources.dashboards.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aoss.AossDashboardsArnProps">AossDashboardsArnProps</a>

---

##### `isValidCollectionArn` <a name="isValidCollectionArn" id="@cdk_utils/iam.aoss.AossResources.isValidCollectionArn"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

aoss.AossResources.isValidCollectionArn(arn: string)
```

Validates whether a string is a valid ARN for the Collection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aoss.AossResources.isValidCollectionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCollectionGroupArn` <a name="isValidCollectionGroupArn" id="@cdk_utils/iam.aoss.AossResources.isValidCollectionGroupArn"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

aoss.AossResources.isValidCollectionGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the CollectionGroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aoss.AossResources.isValidCollectionGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDashboardsArn` <a name="isValidDashboardsArn" id="@cdk_utils/iam.aoss.AossResources.isValidDashboardsArn"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

aoss.AossResources.isValidDashboardsArn(arn: string)
```

Validates whether a string is a valid ARN for the Dashboards resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aoss.AossResources.isValidDashboardsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCollectionArn` <a name="parseCollectionArn" id="@cdk_utils/iam.aoss.AossResources.parseCollectionArn"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

aoss.AossResources.parseCollectionArn(arn: string)
```

Parses a Collection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aoss.AossResources.parseCollectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCollectionGroupArn` <a name="parseCollectionGroupArn" id="@cdk_utils/iam.aoss.AossResources.parseCollectionGroupArn"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

aoss.AossResources.parseCollectionGroupArn(arn: string)
```

Parses a CollectionGroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aoss.AossResources.parseCollectionGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDashboardsArn` <a name="parseDashboardsArn" id="@cdk_utils/iam.aoss.AossResources.parseDashboardsArn"></a>

```typescript
import { aoss } from '@cdk_utils/iam'

aoss.AossResources.parseDashboardsArn(arn: string)
```

Parses a Dashboards ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aoss.AossResources.parseDashboardsArn.parameter.arn"></a>

- *Type:* string

---




