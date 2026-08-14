# `route53profiles` Submodule <a name="`route53profiles` Submodule" id="@cdk_utils/iam.route53profiles"></a>


## Structs <a name="Structs" id="Structs"></a>

### Route53profilesProfileArnComponents <a name="Route53profilesProfileArnComponents" id="@cdk_utils/iam.route53profiles.Route53profilesProfileArnComponents"></a>

Parsed components of a profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53profiles.Route53profilesProfileArnComponents.Initializer"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

const route53profilesProfileArnComponents: route53profiles.Route53profilesProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesProfileArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53profiles.Route53profilesProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53profiles.Route53profilesProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53profiles.Route53profilesProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53profiles.Route53profilesProfileArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Route53profilesProfileArnProps <a name="Route53profilesProfileArnProps" id="@cdk_utils/iam.route53profiles.Route53profilesProfileArnProps"></a>

Properties for building a profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53profiles.Route53profilesProfileArnProps.Initializer"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

const route53profilesProfileArnProps: route53profiles.Route53profilesProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesProfileArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53profiles.Route53profilesProfileArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53profiles.Route53profilesProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53profiles.Route53profilesProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53profiles.Route53profilesProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Route53profilesProfileAssociationArnComponents <a name="Route53profilesProfileAssociationArnComponents" id="@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnComponents"></a>

Parsed components of a profile-association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnComponents.Initializer"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

const route53profilesProfileAssociationArnComponents: route53profiles.Route53profilesProfileAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Route53profilesProfileAssociationArnProps <a name="Route53profilesProfileAssociationArnProps" id="@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnProps"></a>

Properties for building a profile-association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnProps.Initializer"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

const route53profilesProfileAssociationArnProps: route53profiles.Route53profilesProfileAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### Route53profilesActions <a name="Route53profilesActions" id="@cdk_utils/iam.route53profiles.Route53profilesActions"></a>

IAM action constants for the route53profiles service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53profiles.Route53profilesActions.Initializer"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

new route53profiles.Route53profilesActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.actionGetProfile">actionGetProfile</a></code> | <code>string</code> | [Read] route53profiles:GetProfile. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.actionGetProfileAssociation">actionGetProfileAssociation</a></code> | <code>string</code> | [Read] route53profiles:GetProfileAssociation. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.actionGetProfilePolicy">actionGetProfilePolicy</a></code> | <code>string</code> | [Read] route53profiles:GetProfilePolicy. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.actionGetProfileResourceAssociation">actionGetProfileResourceAssociation</a></code> | <code>string</code> | [Read] route53profiles:GetProfileResourceAssociation. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.AssociateProfile">AssociateProfile</a></code> | <code>string</code> | [Write] route53profiles:AssociateProfile. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.AssociateResourceToProfile">AssociateResourceToProfile</a></code> | <code>string</code> | [Write] route53profiles:AssociateResourceToProfile. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.CreateProfile">CreateProfile</a></code> | <code>string</code> | [Write] route53profiles:CreateProfile. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.DeleteProfile">DeleteProfile</a></code> | <code>string</code> | [Write] route53profiles:DeleteProfile. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.DisassociateProfile">DisassociateProfile</a></code> | <code>string</code> | [Write] route53profiles:DisassociateProfile. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.DisassociateResourceFromProfile">DisassociateResourceFromProfile</a></code> | <code>string</code> | [Write] route53profiles:DisassociateResourceFromProfile. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.ListProfileAssociations">ListProfileAssociations</a></code> | <code>string</code> | [List] route53profiles:ListProfileAssociations. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.ListProfileResourceAssociations">ListProfileResourceAssociations</a></code> | <code>string</code> | [List] route53profiles:ListProfileResourceAssociations. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.ListProfiles">ListProfiles</a></code> | <code>string</code> | [List] route53profiles:ListProfiles. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] route53profiles:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.PutProfilePolicy">PutProfilePolicy</a></code> | <code>string</code> | [Write] route53profiles:PutProfilePolicy. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] route53profiles:TagResource. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] route53profiles:UntagResource. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesActions.property.UpdateProfileResourceAssociation">UpdateProfileResourceAssociation</a></code> | <code>string</code> | [Write] route53profiles:UpdateProfileResourceAssociation. |

---

##### `actionGetProfile`<sup>Required</sup> <a name="actionGetProfile" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.actionGetProfile"></a>

```typescript
public readonly actionGetProfile: string;
```

- *Type:* string

[Read] route53profiles:GetProfile.

---

##### `actionGetProfileAssociation`<sup>Required</sup> <a name="actionGetProfileAssociation" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.actionGetProfileAssociation"></a>

```typescript
public readonly actionGetProfileAssociation: string;
```

- *Type:* string

[Read] route53profiles:GetProfileAssociation.

---

##### `actionGetProfilePolicy`<sup>Required</sup> <a name="actionGetProfilePolicy" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.actionGetProfilePolicy"></a>

```typescript
public readonly actionGetProfilePolicy: string;
```

- *Type:* string

[Read] route53profiles:GetProfilePolicy.

---

##### `actionGetProfileResourceAssociation`<sup>Required</sup> <a name="actionGetProfileResourceAssociation" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.actionGetProfileResourceAssociation"></a>

```typescript
public readonly actionGetProfileResourceAssociation: string;
```

- *Type:* string

[Read] route53profiles:GetProfileResourceAssociation.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateProfile`<sup>Required</sup> <a name="AssociateProfile" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.AssociateProfile"></a>

```typescript
public readonly AssociateProfile: string;
```

- *Type:* string

[Write] route53profiles:AssociateProfile.

---

##### `AssociateResourceToProfile`<sup>Required</sup> <a name="AssociateResourceToProfile" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.AssociateResourceToProfile"></a>

```typescript
public readonly AssociateResourceToProfile: string;
```

- *Type:* string

[Write] route53profiles:AssociateResourceToProfile.

---

##### `CreateProfile`<sup>Required</sup> <a name="CreateProfile" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.CreateProfile"></a>

```typescript
public readonly CreateProfile: string;
```

- *Type:* string

[Write] route53profiles:CreateProfile.

---

##### `DeleteProfile`<sup>Required</sup> <a name="DeleteProfile" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.DeleteProfile"></a>

```typescript
public readonly DeleteProfile: string;
```

- *Type:* string

[Write] route53profiles:DeleteProfile.

---

##### `DisassociateProfile`<sup>Required</sup> <a name="DisassociateProfile" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.DisassociateProfile"></a>

```typescript
public readonly DisassociateProfile: string;
```

- *Type:* string

[Write] route53profiles:DisassociateProfile.

---

##### `DisassociateResourceFromProfile`<sup>Required</sup> <a name="DisassociateResourceFromProfile" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.DisassociateResourceFromProfile"></a>

```typescript
public readonly DisassociateResourceFromProfile: string;
```

- *Type:* string

[Write] route53profiles:DisassociateResourceFromProfile.

---

##### `ListProfileAssociations`<sup>Required</sup> <a name="ListProfileAssociations" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.ListProfileAssociations"></a>

```typescript
public readonly ListProfileAssociations: string;
```

- *Type:* string

[List] route53profiles:ListProfileAssociations.

---

##### `ListProfileResourceAssociations`<sup>Required</sup> <a name="ListProfileResourceAssociations" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.ListProfileResourceAssociations"></a>

```typescript
public readonly ListProfileResourceAssociations: string;
```

- *Type:* string

[List] route53profiles:ListProfileResourceAssociations.

---

##### `ListProfiles`<sup>Required</sup> <a name="ListProfiles" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.ListProfiles"></a>

```typescript
public readonly ListProfiles: string;
```

- *Type:* string

[List] route53profiles:ListProfiles.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] route53profiles:ListTagsForResource.

---

##### `PutProfilePolicy`<sup>Required</sup> <a name="PutProfilePolicy" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.PutProfilePolicy"></a>

```typescript
public readonly PutProfilePolicy: string;
```

- *Type:* string

[Write] route53profiles:PutProfilePolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] route53profiles:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] route53profiles:UntagResource.

---

##### `UpdateProfileResourceAssociation`<sup>Required</sup> <a name="UpdateProfileResourceAssociation" id="@cdk_utils/iam.route53profiles.Route53profilesActions.property.UpdateProfileResourceAssociation"></a>

```typescript
public readonly UpdateProfileResourceAssociation: string;
```

- *Type:* string

[Write] route53profiles:UpdateProfileResourceAssociation.

---

### Route53profilesConditions <a name="Route53profilesConditions" id="@cdk_utils/iam.route53profiles.Route53profilesConditions"></a>

Condition key constants and builders for route53profiles.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.Initializer"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

new route53profiles.Route53profilesConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.firewallRuleGroupPriority">firewallRuleGroupPriority</a></code> | Generates a condition block for `route53profiles:FirewallRuleGroupPriority`. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.hostedZoneDomains">hostedZoneDomains</a></code> | Generates a condition block for `route53profiles:HostedZoneDomains`. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.resolverRuleDomains">resolverRuleDomains</a></code> | Generates a condition block for `route53profiles:ResolverRuleDomains`. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.resourceArns">resourceArns</a></code> | Generates a condition block for `route53profiles:ResourceArns`. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.resourceIds">resourceIds</a></code> | Generates a condition block for `route53profiles:ResourceIds`. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.resourceTypes">resourceTypes</a></code> | Generates a condition block for `route53profiles:ResourceTypes`. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `firewallRuleGroupPriority` <a name="firewallRuleGroupPriority" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.firewallRuleGroupPriority"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

route53profiles.Route53profilesConditions.firewallRuleGroupPriority(value: number)
```

Generates a condition block for `route53profiles:FirewallRuleGroupPriority`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.firewallRuleGroupPriority.parameter.value"></a>

- *Type:* number

---

##### `hostedZoneDomains` <a name="hostedZoneDomains" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.hostedZoneDomains"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

route53profiles.Route53profilesConditions.hostedZoneDomains(value: string)
```

Generates a condition block for `route53profiles:HostedZoneDomains`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.hostedZoneDomains.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.requestTag"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

route53profiles.Route53profilesConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resolverRuleDomains` <a name="resolverRuleDomains" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.resolverRuleDomains"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

route53profiles.Route53profilesConditions.resolverRuleDomains(value: string)
```

Generates a condition block for `route53profiles:ResolverRuleDomains`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.resolverRuleDomains.parameter.value"></a>

- *Type:* string

---

##### `resourceArns` <a name="resourceArns" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.resourceArns"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

route53profiles.Route53profilesConditions.resourceArns(value: string)
```

Generates a condition block for `route53profiles:ResourceArns`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.resourceArns.parameter.value"></a>

- *Type:* string

---

##### `resourceIds` <a name="resourceIds" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.resourceIds"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

route53profiles.Route53profilesConditions.resourceIds(value: string)
```

Generates a condition block for `route53profiles:ResourceIds`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.resourceIds.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.resourceTag"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

route53profiles.Route53profilesConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTypes` <a name="resourceTypes" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.resourceTypes"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

route53profiles.Route53profilesConditions.resourceTypes(value: string)
```

Generates a condition block for `route53profiles:ResourceTypes`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.resourceTypes.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.tagKeys"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

route53profiles.Route53profilesConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.property.AssociateProfileConditionKeys">AssociateProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateProfile action. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.property.AssociateResourceToProfileConditionKeys">AssociateResourceToProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateResourceToProfile action. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.property.CreateProfileConditionKeys">CreateProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProfile action. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.property.DisassociateProfileConditionKeys">DisassociateProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateProfile action. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.property.DisassociateResourceFromProfileConditionKeys">DisassociateResourceFromProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateResourceFromProfile action. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.property.FIREWALL_RULE_GROUP_PRIORITY">FIREWALL_RULE_GROUP_PRIORITY</a></code> | <code>string</code> | Condition key: route53profiles:FirewallRuleGroupPriority (Numeric). |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.property.HOSTED_ZONE_DOMAINS">HOSTED_ZONE_DOMAINS</a></code> | <code>string</code> | Condition key: route53profiles:HostedZoneDomains (String). |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.property.RESOLVER_RULE_DOMAINS">RESOLVER_RULE_DOMAINS</a></code> | <code>string</code> | Condition key: route53profiles:ResolverRuleDomains (String). |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.property.RESOURCE_ARNS">RESOURCE_ARNS</a></code> | <code>string</code> | Condition key: route53profiles:ResourceArns (ARN). |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.property.RESOURCE_IDS">RESOURCE_IDS</a></code> | <code>string</code> | Condition key: route53profiles:ResourceIds (String). |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.property.RESOURCE_TYPES">RESOURCE_TYPES</a></code> | <code>string</code> | Condition key: route53profiles:ResourceTypes (String). |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesConditions.property.UpdateProfileResourceAssociationConditionKeys">UpdateProfileResourceAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateProfileResourceAssociation action. |

---

##### `AssociateProfileConditionKeys`<sup>Required</sup> <a name="AssociateProfileConditionKeys" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.property.AssociateProfileConditionKeys"></a>

```typescript
public readonly AssociateProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateProfile action.

---

##### `AssociateResourceToProfileConditionKeys`<sup>Required</sup> <a name="AssociateResourceToProfileConditionKeys" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.property.AssociateResourceToProfileConditionKeys"></a>

```typescript
public readonly AssociateResourceToProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateResourceToProfile action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateProfileConditionKeys`<sup>Required</sup> <a name="CreateProfileConditionKeys" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.property.CreateProfileConditionKeys"></a>

```typescript
public readonly CreateProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProfile action.

---

##### `DisassociateProfileConditionKeys`<sup>Required</sup> <a name="DisassociateProfileConditionKeys" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.property.DisassociateProfileConditionKeys"></a>

```typescript
public readonly DisassociateProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateProfile action.

---

##### `DisassociateResourceFromProfileConditionKeys`<sup>Required</sup> <a name="DisassociateResourceFromProfileConditionKeys" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.property.DisassociateResourceFromProfileConditionKeys"></a>

```typescript
public readonly DisassociateResourceFromProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateResourceFromProfile action.

---

##### `FIREWALL_RULE_GROUP_PRIORITY`<sup>Required</sup> <a name="FIREWALL_RULE_GROUP_PRIORITY" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.property.FIREWALL_RULE_GROUP_PRIORITY"></a>

```typescript
public readonly FIREWALL_RULE_GROUP_PRIORITY: string;
```

- *Type:* string

Condition key: route53profiles:FirewallRuleGroupPriority (Numeric).

---

##### `HOSTED_ZONE_DOMAINS`<sup>Required</sup> <a name="HOSTED_ZONE_DOMAINS" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.property.HOSTED_ZONE_DOMAINS"></a>

```typescript
public readonly HOSTED_ZONE_DOMAINS: string;
```

- *Type:* string

Condition key: route53profiles:HostedZoneDomains (String).

---

##### `RESOLVER_RULE_DOMAINS`<sup>Required</sup> <a name="RESOLVER_RULE_DOMAINS" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.property.RESOLVER_RULE_DOMAINS"></a>

```typescript
public readonly RESOLVER_RULE_DOMAINS: string;
```

- *Type:* string

Condition key: route53profiles:ResolverRuleDomains (String).

---

##### `RESOURCE_ARNS`<sup>Required</sup> <a name="RESOURCE_ARNS" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.property.RESOURCE_ARNS"></a>

```typescript
public readonly RESOURCE_ARNS: string;
```

- *Type:* string

Condition key: route53profiles:ResourceArns (ARN).

---

##### `RESOURCE_IDS`<sup>Required</sup> <a name="RESOURCE_IDS" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.property.RESOURCE_IDS"></a>

```typescript
public readonly RESOURCE_IDS: string;
```

- *Type:* string

Condition key: route53profiles:ResourceIds (String).

---

##### `RESOURCE_TYPES`<sup>Required</sup> <a name="RESOURCE_TYPES" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.property.RESOURCE_TYPES"></a>

```typescript
public readonly RESOURCE_TYPES: string;
```

- *Type:* string

Condition key: route53profiles:ResourceTypes (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateProfileResourceAssociationConditionKeys`<sup>Required</sup> <a name="UpdateProfileResourceAssociationConditionKeys" id="@cdk_utils/iam.route53profiles.Route53profilesConditions.property.UpdateProfileResourceAssociationConditionKeys"></a>

```typescript
public readonly UpdateProfileResourceAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateProfileResourceAssociation action.

---

### Route53profilesOperations <a name="Route53profilesOperations" id="@cdk_utils/iam.route53profiles.Route53profilesOperations"></a>

API operation to required IAM actions mapping for route53profiles.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53profiles.Route53profilesOperations.Initializer"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

new route53profiles.Route53profilesOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesOperations.property.AssociateProfile">AssociateProfile</a></code> | <code>string[]</code> | IAM actions required for the AssociateProfile API call. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesOperations.property.AssociateResourceToProfile">AssociateResourceToProfile</a></code> | <code>string[]</code> | IAM actions required for the AssociateResourceToProfile API call. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesOperations.property.CreateProfile">CreateProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateProfile API call. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesOperations.property.DeleteProfile">DeleteProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteProfile API call. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesOperations.property.DisassociateProfile">DisassociateProfile</a></code> | <code>string[]</code> | IAM actions required for the DisassociateProfile API call. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesOperations.property.DisassociateResourceFromProfile">DisassociateResourceFromProfile</a></code> | <code>string[]</code> | IAM actions required for the DisassociateResourceFromProfile API call. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesOperations.property.ListProfileAssociations">ListProfileAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListProfileAssociations API call. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesOperations.property.ListProfileResourceAssociations">ListProfileResourceAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListProfileResourceAssociations API call. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesOperations.property.ListProfiles">ListProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListProfiles API call. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesOperations.property.opGetProfile">opGetProfile</a></code> | <code>string[]</code> | IAM actions required for the GetProfile API call. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesOperations.property.opGetProfileAssociation">opGetProfileAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetProfileAssociation API call. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesOperations.property.opGetProfileResourceAssociation">opGetProfileResourceAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetProfileResourceAssociation API call. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesOperations.property.UpdateProfileResourceAssociation">UpdateProfileResourceAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateProfileResourceAssociation API call. |

---

##### `AssociateProfile`<sup>Required</sup> <a name="AssociateProfile" id="@cdk_utils/iam.route53profiles.Route53profilesOperations.property.AssociateProfile"></a>

```typescript
public readonly AssociateProfile: string[];
```

- *Type:* string[]

IAM actions required for the AssociateProfile API call.

---

##### `AssociateResourceToProfile`<sup>Required</sup> <a name="AssociateResourceToProfile" id="@cdk_utils/iam.route53profiles.Route53profilesOperations.property.AssociateResourceToProfile"></a>

```typescript
public readonly AssociateResourceToProfile: string[];
```

- *Type:* string[]

IAM actions required for the AssociateResourceToProfile API call.

---

##### `CreateProfile`<sup>Required</sup> <a name="CreateProfile" id="@cdk_utils/iam.route53profiles.Route53profilesOperations.property.CreateProfile"></a>

```typescript
public readonly CreateProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateProfile API call.

---

##### `DeleteProfile`<sup>Required</sup> <a name="DeleteProfile" id="@cdk_utils/iam.route53profiles.Route53profilesOperations.property.DeleteProfile"></a>

```typescript
public readonly DeleteProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProfile API call.

---

##### `DisassociateProfile`<sup>Required</sup> <a name="DisassociateProfile" id="@cdk_utils/iam.route53profiles.Route53profilesOperations.property.DisassociateProfile"></a>

```typescript
public readonly DisassociateProfile: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateProfile API call.

---

##### `DisassociateResourceFromProfile`<sup>Required</sup> <a name="DisassociateResourceFromProfile" id="@cdk_utils/iam.route53profiles.Route53profilesOperations.property.DisassociateResourceFromProfile"></a>

```typescript
public readonly DisassociateResourceFromProfile: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateResourceFromProfile API call.

---

##### `ListProfileAssociations`<sup>Required</sup> <a name="ListProfileAssociations" id="@cdk_utils/iam.route53profiles.Route53profilesOperations.property.ListProfileAssociations"></a>

```typescript
public readonly ListProfileAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListProfileAssociations API call.

---

##### `ListProfileResourceAssociations`<sup>Required</sup> <a name="ListProfileResourceAssociations" id="@cdk_utils/iam.route53profiles.Route53profilesOperations.property.ListProfileResourceAssociations"></a>

```typescript
public readonly ListProfileResourceAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListProfileResourceAssociations API call.

---

##### `ListProfiles`<sup>Required</sup> <a name="ListProfiles" id="@cdk_utils/iam.route53profiles.Route53profilesOperations.property.ListProfiles"></a>

```typescript
public readonly ListProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListProfiles API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.route53profiles.Route53profilesOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetProfile`<sup>Required</sup> <a name="opGetProfile" id="@cdk_utils/iam.route53profiles.Route53profilesOperations.property.opGetProfile"></a>

```typescript
public readonly opGetProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetProfile API call.

---

##### `opGetProfileAssociation`<sup>Required</sup> <a name="opGetProfileAssociation" id="@cdk_utils/iam.route53profiles.Route53profilesOperations.property.opGetProfileAssociation"></a>

```typescript
public readonly opGetProfileAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetProfileAssociation API call.

---

##### `opGetProfileResourceAssociation`<sup>Required</sup> <a name="opGetProfileResourceAssociation" id="@cdk_utils/iam.route53profiles.Route53profilesOperations.property.opGetProfileResourceAssociation"></a>

```typescript
public readonly opGetProfileResourceAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetProfileResourceAssociation API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.route53profiles.Route53profilesOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.route53profiles.Route53profilesOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateProfileResourceAssociation`<sup>Required</sup> <a name="UpdateProfileResourceAssociation" id="@cdk_utils/iam.route53profiles.Route53profilesOperations.property.UpdateProfileResourceAssociation"></a>

```typescript
public readonly UpdateProfileResourceAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProfileResourceAssociation API call.

---

### Route53profilesResources <a name="Route53profilesResources" id="@cdk_utils/iam.route53profiles.Route53profilesResources"></a>

ARN builders, validators, and parsers for route53profiles resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53profiles.Route53profilesResources.Initializer"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

new route53profiles.Route53profilesResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesResources.isValidProfileArn">isValidProfileArn</a></code> | Validates whether a string is a valid ARN for the profile resource. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesResources.isValidProfileAssociationArn">isValidProfileAssociationArn</a></code> | Validates whether a string is a valid ARN for the profile-association resource. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesResources.parseProfileArn">parseProfileArn</a></code> | Parses a profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesResources.parseProfileAssociationArn">parseProfileAssociationArn</a></code> | Parses a profile-association ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesResources.profile">profile</a></code> | Builds an ARN for the profile resource. |
| <code><a href="#@cdk_utils/iam.route53profiles.Route53profilesResources.profileAssociation">profileAssociation</a></code> | Builds an ARN for the profile-association resource. |

---

##### `isValidProfileArn` <a name="isValidProfileArn" id="@cdk_utils/iam.route53profiles.Route53profilesResources.isValidProfileArn"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

route53profiles.Route53profilesResources.isValidProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53profiles.Route53profilesResources.isValidProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProfileAssociationArn` <a name="isValidProfileAssociationArn" id="@cdk_utils/iam.route53profiles.Route53profilesResources.isValidProfileAssociationArn"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

route53profiles.Route53profilesResources.isValidProfileAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the profile-association resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53profiles.Route53profilesResources.isValidProfileAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProfileArn` <a name="parseProfileArn" id="@cdk_utils/iam.route53profiles.Route53profilesResources.parseProfileArn"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

route53profiles.Route53profilesResources.parseProfileArn(arn: string)
```

Parses a profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53profiles.Route53profilesResources.parseProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProfileAssociationArn` <a name="parseProfileAssociationArn" id="@cdk_utils/iam.route53profiles.Route53profilesResources.parseProfileAssociationArn"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

route53profiles.Route53profilesResources.parseProfileAssociationArn(arn: string)
```

Parses a profile-association ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53profiles.Route53profilesResources.parseProfileAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `profile` <a name="profile" id="@cdk_utils/iam.route53profiles.Route53profilesResources.profile"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

route53profiles.Route53profilesResources.profile(props: Route53profilesProfileArnProps)
```

Builds an ARN for the profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53profiles.Route53profilesResources.profile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53profiles.Route53profilesProfileArnProps">Route53profilesProfileArnProps</a>

---

##### `profileAssociation` <a name="profileAssociation" id="@cdk_utils/iam.route53profiles.Route53profilesResources.profileAssociation"></a>

```typescript
import { route53profiles } from '@cdk_utils/iam'

route53profiles.Route53profilesResources.profileAssociation(props: Route53profilesProfileAssociationArnProps)
```

Builds an ARN for the profile-association resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53profiles.Route53profilesResources.profileAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53profiles.Route53profilesProfileAssociationArnProps">Route53profilesProfileAssociationArnProps</a>

---




