# `servicediscovery` Submodule <a name="`servicediscovery` Submodule" id="@cdk_utils/iam.servicediscovery"></a>


## Structs <a name="Structs" id="Structs"></a>

### ServiceDiscoveryNamespaceArnComponents <a name="ServiceDiscoveryNamespaceArnComponents" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnComponents"></a>

Parsed components of a namespace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnComponents.Initializer"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

const serviceDiscoveryNamespaceArnComponents: servicediscovery.ServiceDiscoveryNamespaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnComponents.property.namespaceId">namespaceId</a></code> | <code>string</code> | The NamespaceId component. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnComponents.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

The NamespaceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ServiceDiscoveryNamespaceArnProps <a name="ServiceDiscoveryNamespaceArnProps" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnProps"></a>

Properties for building a namespace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnProps.Initializer"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

const serviceDiscoveryNamespaceArnProps: servicediscovery.ServiceDiscoveryNamespaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnProps.property.namespaceId">namespaceId</a></code> | <code>string</code> | The NamespaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnProps.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

The NamespaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ServiceDiscoveryServiceArnComponents <a name="ServiceDiscoveryServiceArnComponents" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnComponents"></a>

Parsed components of a service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnComponents.Initializer"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

const serviceDiscoveryServiceArnComponents: servicediscovery.ServiceDiscoveryServiceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnComponents.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnComponents.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component.

---

### ServiceDiscoveryServiceArnProps <a name="ServiceDiscoveryServiceArnProps" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnProps"></a>

Properties for building a service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnProps.Initializer"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

const serviceDiscoveryServiceArnProps: servicediscovery.ServiceDiscoveryServiceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnProps.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnProps.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceDiscoveryActions <a name="ServiceDiscoveryActions" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions"></a>

IAM action constants for the servicediscovery service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.Initializer"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

new servicediscovery.ServiceDiscoveryActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.actionGetInstance">actionGetInstance</a></code> | <code>string</code> | [Read] servicediscovery:GetInstance. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.actionGetInstancesHealthStatus">actionGetInstancesHealthStatus</a></code> | <code>string</code> | [Read] servicediscovery:GetInstancesHealthStatus. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.actionGetNamespace">actionGetNamespace</a></code> | <code>string</code> | [Read] servicediscovery:GetNamespace. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.actionGetOperation">actionGetOperation</a></code> | <code>string</code> | [Read] servicediscovery:GetOperation. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] servicediscovery:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.actionGetService">actionGetService</a></code> | <code>string</code> | [Read] servicediscovery:GetService. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.actionGetServiceAttributes">actionGetServiceAttributes</a></code> | <code>string</code> | [Read] servicediscovery:GetServiceAttributes. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.CreateHttpNamespace">CreateHttpNamespace</a></code> | <code>string</code> | [Write] servicediscovery:CreateHttpNamespace. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.CreatePrivateDnsNamespace">CreatePrivateDnsNamespace</a></code> | <code>string</code> | [Write] servicediscovery:CreatePrivateDnsNamespace. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.CreatePublicDnsNamespace">CreatePublicDnsNamespace</a></code> | <code>string</code> | [Write] servicediscovery:CreatePublicDnsNamespace. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.CreateService">CreateService</a></code> | <code>string</code> | [Write] servicediscovery:CreateService. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.DeleteNamespace">DeleteNamespace</a></code> | <code>string</code> | [Write] servicediscovery:DeleteNamespace. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] servicediscovery:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.DeleteService">DeleteService</a></code> | <code>string</code> | [Write] servicediscovery:DeleteService. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.DeleteServiceAttributes">DeleteServiceAttributes</a></code> | <code>string</code> | [Write] servicediscovery:DeleteServiceAttributes. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.DeregisterInstance">DeregisterInstance</a></code> | <code>string</code> | [Write] servicediscovery:DeregisterInstance. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.DiscoverInstances">DiscoverInstances</a></code> | <code>string</code> | [Read] servicediscovery:DiscoverInstances. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.DiscoverInstancesRevision">DiscoverInstancesRevision</a></code> | <code>string</code> | [Read] servicediscovery:DiscoverInstancesRevision. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.ListInstances">ListInstances</a></code> | <code>string</code> | [Read] servicediscovery:ListInstances. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.ListNamespaces">ListNamespaces</a></code> | <code>string</code> | [Read] servicediscovery:ListNamespaces. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.ListOperations">ListOperations</a></code> | <code>string</code> | [List] servicediscovery:ListOperations. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.ListServices">ListServices</a></code> | <code>string</code> | [Read] servicediscovery:ListServices. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] servicediscovery:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] servicediscovery:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.RegisterInstance">RegisterInstance</a></code> | <code>string</code> | [Write] servicediscovery:RegisterInstance. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] servicediscovery:TagResource. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] servicediscovery:UntagResource. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.UpdateHttpNamespace">UpdateHttpNamespace</a></code> | <code>string</code> | [Write] servicediscovery:UpdateHttpNamespace. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.UpdateInstanceCustomHealthStatus">UpdateInstanceCustomHealthStatus</a></code> | <code>string</code> | [Write] servicediscovery:UpdateInstanceCustomHealthStatus. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.UpdatePrivateDnsNamespace">UpdatePrivateDnsNamespace</a></code> | <code>string</code> | [Write] servicediscovery:UpdatePrivateDnsNamespace. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.UpdatePublicDnsNamespace">UpdatePublicDnsNamespace</a></code> | <code>string</code> | [Write] servicediscovery:UpdatePublicDnsNamespace. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.UpdateService">UpdateService</a></code> | <code>string</code> | [Write] servicediscovery:UpdateService. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.UpdateServiceAttributes">UpdateServiceAttributes</a></code> | <code>string</code> | [Write] servicediscovery:UpdateServiceAttributes. |

---

##### `actionGetInstance`<sup>Required</sup> <a name="actionGetInstance" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.actionGetInstance"></a>

```typescript
public readonly actionGetInstance: string;
```

- *Type:* string

[Read] servicediscovery:GetInstance.

---

##### `actionGetInstancesHealthStatus`<sup>Required</sup> <a name="actionGetInstancesHealthStatus" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.actionGetInstancesHealthStatus"></a>

```typescript
public readonly actionGetInstancesHealthStatus: string;
```

- *Type:* string

[Read] servicediscovery:GetInstancesHealthStatus.

---

##### `actionGetNamespace`<sup>Required</sup> <a name="actionGetNamespace" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.actionGetNamespace"></a>

```typescript
public readonly actionGetNamespace: string;
```

- *Type:* string

[Read] servicediscovery:GetNamespace.

---

##### `actionGetOperation`<sup>Required</sup> <a name="actionGetOperation" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.actionGetOperation"></a>

```typescript
public readonly actionGetOperation: string;
```

- *Type:* string

[Read] servicediscovery:GetOperation.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] servicediscovery:GetResourcePolicy.

---

##### `actionGetService`<sup>Required</sup> <a name="actionGetService" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.actionGetService"></a>

```typescript
public readonly actionGetService: string;
```

- *Type:* string

[Read] servicediscovery:GetService.

---

##### `actionGetServiceAttributes`<sup>Required</sup> <a name="actionGetServiceAttributes" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.actionGetServiceAttributes"></a>

```typescript
public readonly actionGetServiceAttributes: string;
```

- *Type:* string

[Read] servicediscovery:GetServiceAttributes.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateHttpNamespace`<sup>Required</sup> <a name="CreateHttpNamespace" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.CreateHttpNamespace"></a>

```typescript
public readonly CreateHttpNamespace: string;
```

- *Type:* string

[Write] servicediscovery:CreateHttpNamespace.

---

##### `CreatePrivateDnsNamespace`<sup>Required</sup> <a name="CreatePrivateDnsNamespace" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.CreatePrivateDnsNamespace"></a>

```typescript
public readonly CreatePrivateDnsNamespace: string;
```

- *Type:* string

[Write] servicediscovery:CreatePrivateDnsNamespace.

---

##### `CreatePublicDnsNamespace`<sup>Required</sup> <a name="CreatePublicDnsNamespace" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.CreatePublicDnsNamespace"></a>

```typescript
public readonly CreatePublicDnsNamespace: string;
```

- *Type:* string

[Write] servicediscovery:CreatePublicDnsNamespace.

---

##### `CreateService`<sup>Required</sup> <a name="CreateService" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.CreateService"></a>

```typescript
public readonly CreateService: string;
```

- *Type:* string

[Write] servicediscovery:CreateService.

---

##### `DeleteNamespace`<sup>Required</sup> <a name="DeleteNamespace" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.DeleteNamespace"></a>

```typescript
public readonly DeleteNamespace: string;
```

- *Type:* string

[Write] servicediscovery:DeleteNamespace.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] servicediscovery:DeleteResourcePolicy.

---

##### `DeleteService`<sup>Required</sup> <a name="DeleteService" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.DeleteService"></a>

```typescript
public readonly DeleteService: string;
```

- *Type:* string

[Write] servicediscovery:DeleteService.

---

##### `DeleteServiceAttributes`<sup>Required</sup> <a name="DeleteServiceAttributes" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.DeleteServiceAttributes"></a>

```typescript
public readonly DeleteServiceAttributes: string;
```

- *Type:* string

[Write] servicediscovery:DeleteServiceAttributes.

---

##### `DeregisterInstance`<sup>Required</sup> <a name="DeregisterInstance" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.DeregisterInstance"></a>

```typescript
public readonly DeregisterInstance: string;
```

- *Type:* string

[Write] servicediscovery:DeregisterInstance.

---

##### `DiscoverInstances`<sup>Required</sup> <a name="DiscoverInstances" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.DiscoverInstances"></a>

```typescript
public readonly DiscoverInstances: string;
```

- *Type:* string

[Read] servicediscovery:DiscoverInstances.

---

##### `DiscoverInstancesRevision`<sup>Required</sup> <a name="DiscoverInstancesRevision" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.DiscoverInstancesRevision"></a>

```typescript
public readonly DiscoverInstancesRevision: string;
```

- *Type:* string

[Read] servicediscovery:DiscoverInstancesRevision.

---

##### `ListInstances`<sup>Required</sup> <a name="ListInstances" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.ListInstances"></a>

```typescript
public readonly ListInstances: string;
```

- *Type:* string

[Read] servicediscovery:ListInstances.

---

##### `ListNamespaces`<sup>Required</sup> <a name="ListNamespaces" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.ListNamespaces"></a>

```typescript
public readonly ListNamespaces: string;
```

- *Type:* string

[Read] servicediscovery:ListNamespaces.

---

##### `ListOperations`<sup>Required</sup> <a name="ListOperations" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.ListOperations"></a>

```typescript
public readonly ListOperations: string;
```

- *Type:* string

[List] servicediscovery:ListOperations.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.ListServices"></a>

```typescript
public readonly ListServices: string;
```

- *Type:* string

[Read] servicediscovery:ListServices.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] servicediscovery:ListTagsForResource.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] servicediscovery:PutResourcePolicy.

---

##### `RegisterInstance`<sup>Required</sup> <a name="RegisterInstance" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.RegisterInstance"></a>

```typescript
public readonly RegisterInstance: string;
```

- *Type:* string

[Write] servicediscovery:RegisterInstance.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] servicediscovery:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] servicediscovery:UntagResource.

---

##### `UpdateHttpNamespace`<sup>Required</sup> <a name="UpdateHttpNamespace" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.UpdateHttpNamespace"></a>

```typescript
public readonly UpdateHttpNamespace: string;
```

- *Type:* string

[Write] servicediscovery:UpdateHttpNamespace.

---

##### `UpdateInstanceCustomHealthStatus`<sup>Required</sup> <a name="UpdateInstanceCustomHealthStatus" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.UpdateInstanceCustomHealthStatus"></a>

```typescript
public readonly UpdateInstanceCustomHealthStatus: string;
```

- *Type:* string

[Write] servicediscovery:UpdateInstanceCustomHealthStatus.

---

##### `UpdatePrivateDnsNamespace`<sup>Required</sup> <a name="UpdatePrivateDnsNamespace" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.UpdatePrivateDnsNamespace"></a>

```typescript
public readonly UpdatePrivateDnsNamespace: string;
```

- *Type:* string

[Write] servicediscovery:UpdatePrivateDnsNamespace.

---

##### `UpdatePublicDnsNamespace`<sup>Required</sup> <a name="UpdatePublicDnsNamespace" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.UpdatePublicDnsNamespace"></a>

```typescript
public readonly UpdatePublicDnsNamespace: string;
```

- *Type:* string

[Write] servicediscovery:UpdatePublicDnsNamespace.

---

##### `UpdateService`<sup>Required</sup> <a name="UpdateService" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.UpdateService"></a>

```typescript
public readonly UpdateService: string;
```

- *Type:* string

[Write] servicediscovery:UpdateService.

---

##### `UpdateServiceAttributes`<sup>Required</sup> <a name="UpdateServiceAttributes" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryActions.property.UpdateServiceAttributes"></a>

```typescript
public readonly UpdateServiceAttributes: string;
```

- *Type:* string

[Write] servicediscovery:UpdateServiceAttributes.

---

### ServiceDiscoveryConditions <a name="ServiceDiscoveryConditions" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions"></a>

Condition key constants and builders for servicediscovery.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.Initializer"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

new servicediscovery.ServiceDiscoveryConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.namespaceARN">namespaceARN</a></code> | Generates a condition block for `servicediscovery:NamespaceArn`. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.namespaceName">namespaceName</a></code> | Generates a condition block for `servicediscovery:NamespaceName`. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.serviceARN">serviceARN</a></code> | Generates a condition block for `servicediscovery:ServiceArn`. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.serviceCreatedByAccount">serviceCreatedByAccount</a></code> | Generates a condition block for `servicediscovery:ServiceCreatedByAccount`. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.serviceName">serviceName</a></code> | Generates a condition block for `servicediscovery:ServiceName`. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `namespaceARN` <a name="namespaceARN" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.namespaceARN"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

servicediscovery.ServiceDiscoveryConditions.namespaceARN(value: string)
```

Generates a condition block for `servicediscovery:NamespaceArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.namespaceARN.parameter.value"></a>

- *Type:* string

---

##### `namespaceName` <a name="namespaceName" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.namespaceName"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

servicediscovery.ServiceDiscoveryConditions.namespaceName(value: string)
```

Generates a condition block for `servicediscovery:NamespaceName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.namespaceName.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.requestTag"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

servicediscovery.ServiceDiscoveryConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.resourceTag"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

servicediscovery.ServiceDiscoveryConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `serviceARN` <a name="serviceARN" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.serviceARN"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

servicediscovery.ServiceDiscoveryConditions.serviceARN(value: string)
```

Generates a condition block for `servicediscovery:ServiceArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.serviceARN.parameter.value"></a>

- *Type:* string

---

##### `serviceCreatedByAccount` <a name="serviceCreatedByAccount" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.serviceCreatedByAccount"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

servicediscovery.ServiceDiscoveryConditions.serviceCreatedByAccount(value: string)
```

Generates a condition block for `servicediscovery:ServiceCreatedByAccount`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.serviceCreatedByAccount.parameter.value"></a>

- *Type:* string

---

##### `serviceName` <a name="serviceName" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.serviceName"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

servicediscovery.ServiceDiscoveryConditions.serviceName(value: string)
```

Generates a condition block for `servicediscovery:ServiceName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.serviceName.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.tagKeys"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

servicediscovery.ServiceDiscoveryConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.actionGetInstanceConditionKeys">actionGetInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetInstance action. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.actionGetInstancesHealthStatusConditionKeys">actionGetInstancesHealthStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetInstancesHealthStatus action. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.CreateHttpNamespaceConditionKeys">CreateHttpNamespaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateHttpNamespace action. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.CreatePrivateDnsNamespaceConditionKeys">CreatePrivateDnsNamespaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePrivateDnsNamespace action. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.CreatePublicDnsNamespaceConditionKeys">CreatePublicDnsNamespaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePublicDnsNamespace action. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.CreateServiceConditionKeys">CreateServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateService action. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.DeleteServiceAttributesConditionKeys">DeleteServiceAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteServiceAttributes action. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.DeleteServiceConditionKeys">DeleteServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteService action. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.DeregisterInstanceConditionKeys">DeregisterInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeregisterInstance action. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.DiscoverInstancesConditionKeys">DiscoverInstancesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DiscoverInstances action. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.DiscoverInstancesRevisionConditionKeys">DiscoverInstancesRevisionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DiscoverInstancesRevision action. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.ListInstancesConditionKeys">ListInstancesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListInstances action. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.NAMESPACE_ARN">NAMESPACE_ARN</a></code> | <code>string</code> | Condition key: servicediscovery:NamespaceArn (ARN). |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.NAMESPACE_NAME">NAMESPACE_NAME</a></code> | <code>string</code> | Condition key: servicediscovery:NamespaceName (String). |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.RegisterInstanceConditionKeys">RegisterInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterInstance action. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.SERVICE_ARN">SERVICE_ARN</a></code> | <code>string</code> | Condition key: servicediscovery:ServiceArn (ARN). |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.SERVICE_CREATED_BY_ACCOUNT">SERVICE_CREATED_BY_ACCOUNT</a></code> | <code>string</code> | Condition key: servicediscovery:ServiceCreatedByAccount (String). |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.SERVICE_NAME">SERVICE_NAME</a></code> | <code>string</code> | Condition key: servicediscovery:ServiceName (String). |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.UpdateInstanceCustomHealthStatusConditionKeys">UpdateInstanceCustomHealthStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateInstanceCustomHealthStatus action. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.UpdateServiceAttributesConditionKeys">UpdateServiceAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateServiceAttributes action. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.UpdateServiceConditionKeys">UpdateServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateService action. |

---

##### `actionGetInstanceConditionKeys`<sup>Required</sup> <a name="actionGetInstanceConditionKeys" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.actionGetInstanceConditionKeys"></a>

```typescript
public readonly actionGetInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetInstance action.

---

##### `actionGetInstancesHealthStatusConditionKeys`<sup>Required</sup> <a name="actionGetInstancesHealthStatusConditionKeys" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.actionGetInstancesHealthStatusConditionKeys"></a>

```typescript
public readonly actionGetInstancesHealthStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetInstancesHealthStatus action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateHttpNamespaceConditionKeys`<sup>Required</sup> <a name="CreateHttpNamespaceConditionKeys" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.CreateHttpNamespaceConditionKeys"></a>

```typescript
public readonly CreateHttpNamespaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateHttpNamespace action.

---

##### `CreatePrivateDnsNamespaceConditionKeys`<sup>Required</sup> <a name="CreatePrivateDnsNamespaceConditionKeys" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.CreatePrivateDnsNamespaceConditionKeys"></a>

```typescript
public readonly CreatePrivateDnsNamespaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePrivateDnsNamespace action.

---

##### `CreatePublicDnsNamespaceConditionKeys`<sup>Required</sup> <a name="CreatePublicDnsNamespaceConditionKeys" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.CreatePublicDnsNamespaceConditionKeys"></a>

```typescript
public readonly CreatePublicDnsNamespaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePublicDnsNamespace action.

---

##### `CreateServiceConditionKeys`<sup>Required</sup> <a name="CreateServiceConditionKeys" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.CreateServiceConditionKeys"></a>

```typescript
public readonly CreateServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateService action.

---

##### `DeleteServiceAttributesConditionKeys`<sup>Required</sup> <a name="DeleteServiceAttributesConditionKeys" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.DeleteServiceAttributesConditionKeys"></a>

```typescript
public readonly DeleteServiceAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteServiceAttributes action.

---

##### `DeleteServiceConditionKeys`<sup>Required</sup> <a name="DeleteServiceConditionKeys" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.DeleteServiceConditionKeys"></a>

```typescript
public readonly DeleteServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteService action.

---

##### `DeregisterInstanceConditionKeys`<sup>Required</sup> <a name="DeregisterInstanceConditionKeys" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.DeregisterInstanceConditionKeys"></a>

```typescript
public readonly DeregisterInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeregisterInstance action.

---

##### `DiscoverInstancesConditionKeys`<sup>Required</sup> <a name="DiscoverInstancesConditionKeys" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.DiscoverInstancesConditionKeys"></a>

```typescript
public readonly DiscoverInstancesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DiscoverInstances action.

---

##### `DiscoverInstancesRevisionConditionKeys`<sup>Required</sup> <a name="DiscoverInstancesRevisionConditionKeys" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.DiscoverInstancesRevisionConditionKeys"></a>

```typescript
public readonly DiscoverInstancesRevisionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DiscoverInstancesRevision action.

---

##### `ListInstancesConditionKeys`<sup>Required</sup> <a name="ListInstancesConditionKeys" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.ListInstancesConditionKeys"></a>

```typescript
public readonly ListInstancesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListInstances action.

---

##### `NAMESPACE_ARN`<sup>Required</sup> <a name="NAMESPACE_ARN" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.NAMESPACE_ARN"></a>

```typescript
public readonly NAMESPACE_ARN: string;
```

- *Type:* string

Condition key: servicediscovery:NamespaceArn (ARN).

---

##### `NAMESPACE_NAME`<sup>Required</sup> <a name="NAMESPACE_NAME" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.NAMESPACE_NAME"></a>

```typescript
public readonly NAMESPACE_NAME: string;
```

- *Type:* string

Condition key: servicediscovery:NamespaceName (String).

---

##### `RegisterInstanceConditionKeys`<sup>Required</sup> <a name="RegisterInstanceConditionKeys" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.RegisterInstanceConditionKeys"></a>

```typescript
public readonly RegisterInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterInstance action.

---

##### `SERVICE_ARN`<sup>Required</sup> <a name="SERVICE_ARN" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.SERVICE_ARN"></a>

```typescript
public readonly SERVICE_ARN: string;
```

- *Type:* string

Condition key: servicediscovery:ServiceArn (ARN).

---

##### `SERVICE_CREATED_BY_ACCOUNT`<sup>Required</sup> <a name="SERVICE_CREATED_BY_ACCOUNT" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.SERVICE_CREATED_BY_ACCOUNT"></a>

```typescript
public readonly SERVICE_CREATED_BY_ACCOUNT: string;
```

- *Type:* string

Condition key: servicediscovery:ServiceCreatedByAccount (String).

---

##### `SERVICE_NAME`<sup>Required</sup> <a name="SERVICE_NAME" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.SERVICE_NAME"></a>

```typescript
public readonly SERVICE_NAME: string;
```

- *Type:* string

Condition key: servicediscovery:ServiceName (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateInstanceCustomHealthStatusConditionKeys`<sup>Required</sup> <a name="UpdateInstanceCustomHealthStatusConditionKeys" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.UpdateInstanceCustomHealthStatusConditionKeys"></a>

```typescript
public readonly UpdateInstanceCustomHealthStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateInstanceCustomHealthStatus action.

---

##### `UpdateServiceAttributesConditionKeys`<sup>Required</sup> <a name="UpdateServiceAttributesConditionKeys" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.UpdateServiceAttributesConditionKeys"></a>

```typescript
public readonly UpdateServiceAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateServiceAttributes action.

---

##### `UpdateServiceConditionKeys`<sup>Required</sup> <a name="UpdateServiceConditionKeys" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryConditions.property.UpdateServiceConditionKeys"></a>

```typescript
public readonly UpdateServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateService action.

---

### ServiceDiscoveryOperations <a name="ServiceDiscoveryOperations" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations"></a>

API operation to required IAM actions mapping for servicediscovery.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.Initializer"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

new servicediscovery.ServiceDiscoveryOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.CreateHttpNamespace">CreateHttpNamespace</a></code> | <code>string[]</code> | IAM actions required for the CreateHttpNamespace API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.CreatePrivateDnsNamespace">CreatePrivateDnsNamespace</a></code> | <code>string[]</code> | IAM actions required for the CreatePrivateDnsNamespace API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.CreatePublicDnsNamespace">CreatePublicDnsNamespace</a></code> | <code>string[]</code> | IAM actions required for the CreatePublicDnsNamespace API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.CreateService">CreateService</a></code> | <code>string[]</code> | IAM actions required for the CreateService API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.DeleteNamespace">DeleteNamespace</a></code> | <code>string[]</code> | IAM actions required for the DeleteNamespace API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.DeleteService">DeleteService</a></code> | <code>string[]</code> | IAM actions required for the DeleteService API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.DeleteServiceAttributes">DeleteServiceAttributes</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceAttributes API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.DeregisterInstance">DeregisterInstance</a></code> | <code>string[]</code> | IAM actions required for the DeregisterInstance API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.DiscoverInstances">DiscoverInstances</a></code> | <code>string[]</code> | IAM actions required for the DiscoverInstances API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.DiscoverInstancesRevision">DiscoverInstancesRevision</a></code> | <code>string[]</code> | IAM actions required for the DiscoverInstancesRevision API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.ListInstances">ListInstances</a></code> | <code>string[]</code> | IAM actions required for the ListInstances API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.ListNamespaces">ListNamespaces</a></code> | <code>string[]</code> | IAM actions required for the ListNamespaces API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.ListOperations">ListOperations</a></code> | <code>string[]</code> | IAM actions required for the ListOperations API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.ListServices">ListServices</a></code> | <code>string[]</code> | IAM actions required for the ListServices API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.opGetInstance">opGetInstance</a></code> | <code>string[]</code> | IAM actions required for the GetInstance API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.opGetInstancesHealthStatus">opGetInstancesHealthStatus</a></code> | <code>string[]</code> | IAM actions required for the GetInstancesHealthStatus API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.opGetNamespace">opGetNamespace</a></code> | <code>string[]</code> | IAM actions required for the GetNamespace API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.opGetOperation">opGetOperation</a></code> | <code>string[]</code> | IAM actions required for the GetOperation API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.opGetService">opGetService</a></code> | <code>string[]</code> | IAM actions required for the GetService API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.opGetServiceAttributes">opGetServiceAttributes</a></code> | <code>string[]</code> | IAM actions required for the GetServiceAttributes API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.RegisterInstance">RegisterInstance</a></code> | <code>string[]</code> | IAM actions required for the RegisterInstance API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.UpdateHttpNamespace">UpdateHttpNamespace</a></code> | <code>string[]</code> | IAM actions required for the UpdateHttpNamespace API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.UpdateInstanceCustomHealthStatus">UpdateInstanceCustomHealthStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateInstanceCustomHealthStatus API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.UpdatePrivateDnsNamespace">UpdatePrivateDnsNamespace</a></code> | <code>string[]</code> | IAM actions required for the UpdatePrivateDnsNamespace API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.UpdatePublicDnsNamespace">UpdatePublicDnsNamespace</a></code> | <code>string[]</code> | IAM actions required for the UpdatePublicDnsNamespace API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.UpdateService">UpdateService</a></code> | <code>string[]</code> | IAM actions required for the UpdateService API call. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.UpdateServiceAttributes">UpdateServiceAttributes</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceAttributes API call. |

---

##### `CreateHttpNamespace`<sup>Required</sup> <a name="CreateHttpNamespace" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.CreateHttpNamespace"></a>

```typescript
public readonly CreateHttpNamespace: string[];
```

- *Type:* string[]

IAM actions required for the CreateHttpNamespace API call.

---

##### `CreatePrivateDnsNamespace`<sup>Required</sup> <a name="CreatePrivateDnsNamespace" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.CreatePrivateDnsNamespace"></a>

```typescript
public readonly CreatePrivateDnsNamespace: string[];
```

- *Type:* string[]

IAM actions required for the CreatePrivateDnsNamespace API call.

---

##### `CreatePublicDnsNamespace`<sup>Required</sup> <a name="CreatePublicDnsNamespace" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.CreatePublicDnsNamespace"></a>

```typescript
public readonly CreatePublicDnsNamespace: string[];
```

- *Type:* string[]

IAM actions required for the CreatePublicDnsNamespace API call.

---

##### `CreateService`<sup>Required</sup> <a name="CreateService" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.CreateService"></a>

```typescript
public readonly CreateService: string[];
```

- *Type:* string[]

IAM actions required for the CreateService API call.

---

##### `DeleteNamespace`<sup>Required</sup> <a name="DeleteNamespace" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.DeleteNamespace"></a>

```typescript
public readonly DeleteNamespace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNamespace API call.

---

##### `DeleteService`<sup>Required</sup> <a name="DeleteService" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.DeleteService"></a>

```typescript
public readonly DeleteService: string[];
```

- *Type:* string[]

IAM actions required for the DeleteService API call.

---

##### `DeleteServiceAttributes`<sup>Required</sup> <a name="DeleteServiceAttributes" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.DeleteServiceAttributes"></a>

```typescript
public readonly DeleteServiceAttributes: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceAttributes API call.

---

##### `DeregisterInstance`<sup>Required</sup> <a name="DeregisterInstance" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.DeregisterInstance"></a>

```typescript
public readonly DeregisterInstance: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterInstance API call.

---

##### `DiscoverInstances`<sup>Required</sup> <a name="DiscoverInstances" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.DiscoverInstances"></a>

```typescript
public readonly DiscoverInstances: string[];
```

- *Type:* string[]

IAM actions required for the DiscoverInstances API call.

---

##### `DiscoverInstancesRevision`<sup>Required</sup> <a name="DiscoverInstancesRevision" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.DiscoverInstancesRevision"></a>

```typescript
public readonly DiscoverInstancesRevision: string[];
```

- *Type:* string[]

IAM actions required for the DiscoverInstancesRevision API call.

---

##### `ListInstances`<sup>Required</sup> <a name="ListInstances" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.ListInstances"></a>

```typescript
public readonly ListInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListInstances API call.

---

##### `ListNamespaces`<sup>Required</sup> <a name="ListNamespaces" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.ListNamespaces"></a>

```typescript
public readonly ListNamespaces: string[];
```

- *Type:* string[]

IAM actions required for the ListNamespaces API call.

---

##### `ListOperations`<sup>Required</sup> <a name="ListOperations" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.ListOperations"></a>

```typescript
public readonly ListOperations: string[];
```

- *Type:* string[]

IAM actions required for the ListOperations API call.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.ListServices"></a>

```typescript
public readonly ListServices: string[];
```

- *Type:* string[]

IAM actions required for the ListServices API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetInstance`<sup>Required</sup> <a name="opGetInstance" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.opGetInstance"></a>

```typescript
public readonly opGetInstance: string[];
```

- *Type:* string[]

IAM actions required for the GetInstance API call.

---

##### `opGetInstancesHealthStatus`<sup>Required</sup> <a name="opGetInstancesHealthStatus" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.opGetInstancesHealthStatus"></a>

```typescript
public readonly opGetInstancesHealthStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetInstancesHealthStatus API call.

---

##### `opGetNamespace`<sup>Required</sup> <a name="opGetNamespace" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.opGetNamespace"></a>

```typescript
public readonly opGetNamespace: string[];
```

- *Type:* string[]

IAM actions required for the GetNamespace API call.

---

##### `opGetOperation`<sup>Required</sup> <a name="opGetOperation" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.opGetOperation"></a>

```typescript
public readonly opGetOperation: string[];
```

- *Type:* string[]

IAM actions required for the GetOperation API call.

---

##### `opGetService`<sup>Required</sup> <a name="opGetService" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.opGetService"></a>

```typescript
public readonly opGetService: string[];
```

- *Type:* string[]

IAM actions required for the GetService API call.

---

##### `opGetServiceAttributes`<sup>Required</sup> <a name="opGetServiceAttributes" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.opGetServiceAttributes"></a>

```typescript
public readonly opGetServiceAttributes: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceAttributes API call.

---

##### `RegisterInstance`<sup>Required</sup> <a name="RegisterInstance" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.RegisterInstance"></a>

```typescript
public readonly RegisterInstance: string[];
```

- *Type:* string[]

IAM actions required for the RegisterInstance API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateHttpNamespace`<sup>Required</sup> <a name="UpdateHttpNamespace" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.UpdateHttpNamespace"></a>

```typescript
public readonly UpdateHttpNamespace: string[];
```

- *Type:* string[]

IAM actions required for the UpdateHttpNamespace API call.

---

##### `UpdateInstanceCustomHealthStatus`<sup>Required</sup> <a name="UpdateInstanceCustomHealthStatus" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.UpdateInstanceCustomHealthStatus"></a>

```typescript
public readonly UpdateInstanceCustomHealthStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateInstanceCustomHealthStatus API call.

---

##### `UpdatePrivateDnsNamespace`<sup>Required</sup> <a name="UpdatePrivateDnsNamespace" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.UpdatePrivateDnsNamespace"></a>

```typescript
public readonly UpdatePrivateDnsNamespace: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePrivateDnsNamespace API call.

---

##### `UpdatePublicDnsNamespace`<sup>Required</sup> <a name="UpdatePublicDnsNamespace" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.UpdatePublicDnsNamespace"></a>

```typescript
public readonly UpdatePublicDnsNamespace: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePublicDnsNamespace API call.

---

##### `UpdateService`<sup>Required</sup> <a name="UpdateService" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.UpdateService"></a>

```typescript
public readonly UpdateService: string[];
```

- *Type:* string[]

IAM actions required for the UpdateService API call.

---

##### `UpdateServiceAttributes`<sup>Required</sup> <a name="UpdateServiceAttributes" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryOperations.property.UpdateServiceAttributes"></a>

```typescript
public readonly UpdateServiceAttributes: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceAttributes API call.

---

### ServiceDiscoveryResources <a name="ServiceDiscoveryResources" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources"></a>

ARN builders, validators, and parsers for servicediscovery resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources.Initializer"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

new servicediscovery.ServiceDiscoveryResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources.isValidNamespaceArn">isValidNamespaceArn</a></code> | Validates whether a string is a valid ARN for the namespace resource. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources.isValidServiceArn">isValidServiceArn</a></code> | Validates whether a string is a valid ARN for the service resource. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources.namespace">namespace</a></code> | Builds an ARN for the namespace resource. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources.parseNamespaceArn">parseNamespaceArn</a></code> | Parses a namespace ARN into its components. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources.parseServiceArn">parseServiceArn</a></code> | Parses a service ARN into its components. |
| <code><a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources.service">service</a></code> | Builds an ARN for the service resource. |

---

##### `isValidNamespaceArn` <a name="isValidNamespaceArn" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources.isValidNamespaceArn"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

servicediscovery.ServiceDiscoveryResources.isValidNamespaceArn(arn: string)
```

Validates whether a string is a valid ARN for the namespace resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources.isValidNamespaceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceArn` <a name="isValidServiceArn" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources.isValidServiceArn"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

servicediscovery.ServiceDiscoveryResources.isValidServiceArn(arn: string)
```

Validates whether a string is a valid ARN for the service resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources.isValidServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `namespace` <a name="namespace" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources.namespace"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

servicediscovery.ServiceDiscoveryResources.namespace(props: ServiceDiscoveryNamespaceArnProps)
```

Builds an ARN for the namespace resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources.namespace.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryNamespaceArnProps">ServiceDiscoveryNamespaceArnProps</a>

---

##### `parseNamespaceArn` <a name="parseNamespaceArn" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources.parseNamespaceArn"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

servicediscovery.ServiceDiscoveryResources.parseNamespaceArn(arn: string)
```

Parses a namespace ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources.parseNamespaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceArn` <a name="parseServiceArn" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources.parseServiceArn"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

servicediscovery.ServiceDiscoveryResources.parseServiceArn(arn: string)
```

Parses a service ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources.parseServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `service` <a name="service" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources.service"></a>

```typescript
import { servicediscovery } from '@cdk_utils/iam'

servicediscovery.ServiceDiscoveryResources.service(props: ServiceDiscoveryServiceArnProps)
```

Builds an ARN for the service resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.servicediscovery.ServiceDiscoveryResources.service.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.servicediscovery.ServiceDiscoveryServiceArnProps">ServiceDiscoveryServiceArnProps</a>

---




