# `refactor_spaces` Submodule <a name="`refactor_spaces` Submodule" id="@cdk_utils/iam.refactor_spaces"></a>


## Structs <a name="Structs" id="Structs"></a>

### RefactorSpacesApplicationArnComponents <a name="RefactorSpacesApplicationArnComponents" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnComponents.Initializer"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

const refactorSpacesApplicationArnComponents: refactor_spaces.RefactorSpacesApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RefactorSpacesApplicationArnProps <a name="RefactorSpacesApplicationArnProps" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnProps.Initializer"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

const refactorSpacesApplicationArnProps: refactor_spaces.RefactorSpacesApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RefactorSpacesEnvironmentArnComponents <a name="RefactorSpacesEnvironmentArnComponents" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnComponents"></a>

Parsed components of a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnComponents.Initializer"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

const refactorSpacesEnvironmentArnComponents: refactor_spaces.RefactorSpacesEnvironmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RefactorSpacesEnvironmentArnProps <a name="RefactorSpacesEnvironmentArnProps" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnProps"></a>

Properties for building a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnProps.Initializer"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

const refactorSpacesEnvironmentArnProps: refactor_spaces.RefactorSpacesEnvironmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RefactorSpacesRouteArnComponents <a name="RefactorSpacesRouteArnComponents" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnComponents"></a>

Parsed components of a route ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnComponents.Initializer"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

const refactorSpacesRouteArnComponents: refactor_spaces.RefactorSpacesRouteArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnComponents.property.routeId">routeId</a></code> | <code>string</code> | The RouteId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `routeId`<sup>Required</sup> <a name="routeId" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnComponents.property.routeId"></a>

```typescript
public readonly routeId: string;
```

- *Type:* string

The RouteId component.

---

### RefactorSpacesRouteArnProps <a name="RefactorSpacesRouteArnProps" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnProps"></a>

Properties for building a route ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnProps.Initializer"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

const refactorSpacesRouteArnProps: refactor_spaces.RefactorSpacesRouteArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnProps.property.routeId">routeId</a></code> | <code>string</code> | The RouteId component of the ARN. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `routeId`<sup>Required</sup> <a name="routeId" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnProps.property.routeId"></a>

```typescript
public readonly routeId: string;
```

- *Type:* string

The RouteId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RefactorSpacesServiceArnComponents <a name="RefactorSpacesServiceArnComponents" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnComponents"></a>

Parsed components of a service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnComponents.Initializer"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

const refactorSpacesServiceArnComponents: refactor_spaces.RefactorSpacesServiceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnComponents.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnComponents.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component.

---

### RefactorSpacesServiceArnProps <a name="RefactorSpacesServiceArnProps" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnProps"></a>

Properties for building a service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnProps.Initializer"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

const refactorSpacesServiceArnProps: refactor_spaces.RefactorSpacesServiceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnProps.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnProps.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### RefactorSpacesActions <a name="RefactorSpacesActions" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions"></a>

IAM action constants for the refactor-spaces service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.Initializer"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

new refactor_spaces.RefactorSpacesActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.actionGetApplication">actionGetApplication</a></code> | <code>string</code> | [Read] refactor-spaces:GetApplication. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.actionGetEnvironment">actionGetEnvironment</a></code> | <code>string</code> | [Read] refactor-spaces:GetEnvironment. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] refactor-spaces:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.actionGetRoute">actionGetRoute</a></code> | <code>string</code> | [Read] refactor-spaces:GetRoute. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.actionGetService">actionGetService</a></code> | <code>string</code> | [Read] refactor-spaces:GetService. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] refactor-spaces:CreateApplication. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string</code> | [Write] refactor-spaces:CreateEnvironment. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.CreateRoute">CreateRoute</a></code> | <code>string</code> | [Write] refactor-spaces:CreateRoute. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.CreateService">CreateService</a></code> | <code>string</code> | [Write] refactor-spaces:CreateService. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] refactor-spaces:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string</code> | [Write] refactor-spaces:DeleteEnvironment. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] refactor-spaces:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.DeleteRoute">DeleteRoute</a></code> | <code>string</code> | [Write] refactor-spaces:DeleteRoute. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.DeleteService">DeleteService</a></code> | <code>string</code> | [Write] refactor-spaces:DeleteService. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.ListApplications">ListApplications</a></code> | <code>string</code> | [Read] refactor-spaces:ListApplications. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.ListEnvironments">ListEnvironments</a></code> | <code>string</code> | [Read] refactor-spaces:ListEnvironments. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.ListEnvironmentVpcs">ListEnvironmentVpcs</a></code> | <code>string</code> | [Read] refactor-spaces:ListEnvironmentVpcs. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.ListRoutes">ListRoutes</a></code> | <code>string</code> | [Read] refactor-spaces:ListRoutes. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.ListServices">ListServices</a></code> | <code>string</code> | [Read] refactor-spaces:ListServices. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] refactor-spaces:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] refactor-spaces:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] refactor-spaces:TagResource. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] refactor-spaces:UntagResource. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.UpdateRoute">UpdateRoute</a></code> | <code>string</code> | [Write] refactor-spaces:UpdateRoute. |

---

##### `actionGetApplication`<sup>Required</sup> <a name="actionGetApplication" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.actionGetApplication"></a>

```typescript
public readonly actionGetApplication: string;
```

- *Type:* string

[Read] refactor-spaces:GetApplication.

---

##### `actionGetEnvironment`<sup>Required</sup> <a name="actionGetEnvironment" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.actionGetEnvironment"></a>

```typescript
public readonly actionGetEnvironment: string;
```

- *Type:* string

[Read] refactor-spaces:GetEnvironment.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] refactor-spaces:GetResourcePolicy.

---

##### `actionGetRoute`<sup>Required</sup> <a name="actionGetRoute" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.actionGetRoute"></a>

```typescript
public readonly actionGetRoute: string;
```

- *Type:* string

[Read] refactor-spaces:GetRoute.

---

##### `actionGetService`<sup>Required</sup> <a name="actionGetService" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.actionGetService"></a>

```typescript
public readonly actionGetService: string;
```

- *Type:* string

[Read] refactor-spaces:GetService.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] refactor-spaces:CreateApplication.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string;
```

- *Type:* string

[Write] refactor-spaces:CreateEnvironment.

---

##### `CreateRoute`<sup>Required</sup> <a name="CreateRoute" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.CreateRoute"></a>

```typescript
public readonly CreateRoute: string;
```

- *Type:* string

[Write] refactor-spaces:CreateRoute.

---

##### `CreateService`<sup>Required</sup> <a name="CreateService" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.CreateService"></a>

```typescript
public readonly CreateService: string;
```

- *Type:* string

[Write] refactor-spaces:CreateService.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] refactor-spaces:DeleteApplication.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string;
```

- *Type:* string

[Write] refactor-spaces:DeleteEnvironment.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] refactor-spaces:DeleteResourcePolicy.

---

##### `DeleteRoute`<sup>Required</sup> <a name="DeleteRoute" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.DeleteRoute"></a>

```typescript
public readonly DeleteRoute: string;
```

- *Type:* string

[Write] refactor-spaces:DeleteRoute.

---

##### `DeleteService`<sup>Required</sup> <a name="DeleteService" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.DeleteService"></a>

```typescript
public readonly DeleteService: string;
```

- *Type:* string

[Write] refactor-spaces:DeleteService.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.ListApplications"></a>

```typescript
public readonly ListApplications: string;
```

- *Type:* string

[Read] refactor-spaces:ListApplications.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string;
```

- *Type:* string

[Read] refactor-spaces:ListEnvironments.

---

##### `ListEnvironmentVpcs`<sup>Required</sup> <a name="ListEnvironmentVpcs" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.ListEnvironmentVpcs"></a>

```typescript
public readonly ListEnvironmentVpcs: string;
```

- *Type:* string

[Read] refactor-spaces:ListEnvironmentVpcs.

---

##### `ListRoutes`<sup>Required</sup> <a name="ListRoutes" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.ListRoutes"></a>

```typescript
public readonly ListRoutes: string;
```

- *Type:* string

[Read] refactor-spaces:ListRoutes.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.ListServices"></a>

```typescript
public readonly ListServices: string;
```

- *Type:* string

[Read] refactor-spaces:ListServices.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] refactor-spaces:ListTagsForResource.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] refactor-spaces:PutResourcePolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] refactor-spaces:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] refactor-spaces:UntagResource.

---

##### `UpdateRoute`<sup>Required</sup> <a name="UpdateRoute" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesActions.property.UpdateRoute"></a>

```typescript
public readonly UpdateRoute: string;
```

- *Type:* string

[Write] refactor-spaces:UpdateRoute.

---

### RefactorSpacesConditions <a name="RefactorSpacesConditions" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions"></a>

Condition key constants and builders for refactor-spaces.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.Initializer"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

new refactor_spaces.RefactorSpacesConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.applicationCreatedByAccount">applicationCreatedByAccount</a></code> | Generates a condition block for `refactor-spaces:ApplicationCreatedByAccount`. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.createdByAccountIds">createdByAccountIds</a></code> | Generates a condition block for `refactor-spaces:CreatedByAccountIds`. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.routeCreatedByAccount">routeCreatedByAccount</a></code> | Generates a condition block for `refactor-spaces:RouteCreatedByAccount`. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.serviceCreatedByAccount">serviceCreatedByAccount</a></code> | Generates a condition block for `refactor-spaces:ServiceCreatedByAccount`. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.sourcePath">sourcePath</a></code> | Generates a condition block for `refactor-spaces:SourcePath`. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `applicationCreatedByAccount` <a name="applicationCreatedByAccount" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.applicationCreatedByAccount"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesConditions.applicationCreatedByAccount(value: string)
```

Generates a condition block for `refactor-spaces:ApplicationCreatedByAccount`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.applicationCreatedByAccount.parameter.value"></a>

- *Type:* string

---

##### `createdByAccountIds` <a name="createdByAccountIds" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.createdByAccountIds"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesConditions.createdByAccountIds(values: string[])
```

Generates a condition block for `refactor-spaces:CreatedByAccountIds`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.createdByAccountIds.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.requestTag"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.resourceTag"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `routeCreatedByAccount` <a name="routeCreatedByAccount" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.routeCreatedByAccount"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesConditions.routeCreatedByAccount(value: string)
```

Generates a condition block for `refactor-spaces:RouteCreatedByAccount`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.routeCreatedByAccount.parameter.value"></a>

- *Type:* string

---

##### `serviceCreatedByAccount` <a name="serviceCreatedByAccount" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.serviceCreatedByAccount"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesConditions.serviceCreatedByAccount(value: string)
```

Generates a condition block for `refactor-spaces:ServiceCreatedByAccount`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.serviceCreatedByAccount.parameter.value"></a>

- *Type:* string

---

##### `sourcePath` <a name="sourcePath" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.sourcePath"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesConditions.sourcePath(value: string)
```

Generates a condition block for `refactor-spaces:SourcePath`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.sourcePath.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.tagKeys"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.actionGetApplicationConditionKeys">actionGetApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetApplication action. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.actionGetEnvironmentConditionKeys">actionGetEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEnvironment action. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.actionGetRouteConditionKeys">actionGetRouteConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRoute action. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.actionGetServiceConditionKeys">actionGetServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetService action. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.APPLICATION_CREATED_BY_ACCOUNT">APPLICATION_CREATED_BY_ACCOUNT</a></code> | <code>string</code> | Condition key: refactor-spaces:ApplicationCreatedByAccount (String). |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.CreateApplicationConditionKeys">CreateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplication action. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.CREATED_BY_ACCOUNT_IDS">CREATED_BY_ACCOUNT_IDS</a></code> | <code>string</code> | Condition key: refactor-spaces:CreatedByAccountIds (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.CreateEnvironmentConditionKeys">CreateEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironment action. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.CreateRouteConditionKeys">CreateRouteConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRoute action. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.CreateServiceConditionKeys">CreateServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateService action. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.DeleteApplicationConditionKeys">DeleteApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteApplication action. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.DeleteEnvironmentConditionKeys">DeleteEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteEnvironment action. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.DeleteRouteConditionKeys">DeleteRouteConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteRoute action. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.DeleteServiceConditionKeys">DeleteServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteService action. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.ROUTE_CREATED_BY_ACCOUNT">ROUTE_CREATED_BY_ACCOUNT</a></code> | <code>string</code> | Condition key: refactor-spaces:RouteCreatedByAccount (String). |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.SERVICE_CREATED_BY_ACCOUNT">SERVICE_CREATED_BY_ACCOUNT</a></code> | <code>string</code> | Condition key: refactor-spaces:ServiceCreatedByAccount (String). |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.SOURCE_PATH">SOURCE_PATH</a></code> | <code>string</code> | Condition key: refactor-spaces:SourcePath (String). |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.UpdateRouteConditionKeys">UpdateRouteConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRoute action. |

---

##### `actionGetApplicationConditionKeys`<sup>Required</sup> <a name="actionGetApplicationConditionKeys" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.actionGetApplicationConditionKeys"></a>

```typescript
public readonly actionGetApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetApplication action.

---

##### `actionGetEnvironmentConditionKeys`<sup>Required</sup> <a name="actionGetEnvironmentConditionKeys" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.actionGetEnvironmentConditionKeys"></a>

```typescript
public readonly actionGetEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEnvironment action.

---

##### `actionGetRouteConditionKeys`<sup>Required</sup> <a name="actionGetRouteConditionKeys" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.actionGetRouteConditionKeys"></a>

```typescript
public readonly actionGetRouteConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRoute action.

---

##### `actionGetServiceConditionKeys`<sup>Required</sup> <a name="actionGetServiceConditionKeys" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.actionGetServiceConditionKeys"></a>

```typescript
public readonly actionGetServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetService action.

---

##### `APPLICATION_CREATED_BY_ACCOUNT`<sup>Required</sup> <a name="APPLICATION_CREATED_BY_ACCOUNT" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.APPLICATION_CREATED_BY_ACCOUNT"></a>

```typescript
public readonly APPLICATION_CREATED_BY_ACCOUNT: string;
```

- *Type:* string

Condition key: refactor-spaces:ApplicationCreatedByAccount (String).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateApplicationConditionKeys`<sup>Required</sup> <a name="CreateApplicationConditionKeys" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.CreateApplicationConditionKeys"></a>

```typescript
public readonly CreateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplication action.

---

##### `CREATED_BY_ACCOUNT_IDS`<sup>Required</sup> <a name="CREATED_BY_ACCOUNT_IDS" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.CREATED_BY_ACCOUNT_IDS"></a>

```typescript
public readonly CREATED_BY_ACCOUNT_IDS: string;
```

- *Type:* string

Condition key: refactor-spaces:CreatedByAccountIds (ArrayOfString).

---

##### `CreateEnvironmentConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentConditionKeys" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.CreateEnvironmentConditionKeys"></a>

```typescript
public readonly CreateEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironment action.

---

##### `CreateRouteConditionKeys`<sup>Required</sup> <a name="CreateRouteConditionKeys" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.CreateRouteConditionKeys"></a>

```typescript
public readonly CreateRouteConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRoute action.

---

##### `CreateServiceConditionKeys`<sup>Required</sup> <a name="CreateServiceConditionKeys" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.CreateServiceConditionKeys"></a>

```typescript
public readonly CreateServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateService action.

---

##### `DeleteApplicationConditionKeys`<sup>Required</sup> <a name="DeleteApplicationConditionKeys" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.DeleteApplicationConditionKeys"></a>

```typescript
public readonly DeleteApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteApplication action.

---

##### `DeleteEnvironmentConditionKeys`<sup>Required</sup> <a name="DeleteEnvironmentConditionKeys" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.DeleteEnvironmentConditionKeys"></a>

```typescript
public readonly DeleteEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteEnvironment action.

---

##### `DeleteRouteConditionKeys`<sup>Required</sup> <a name="DeleteRouteConditionKeys" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.DeleteRouteConditionKeys"></a>

```typescript
public readonly DeleteRouteConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteRoute action.

---

##### `DeleteServiceConditionKeys`<sup>Required</sup> <a name="DeleteServiceConditionKeys" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.DeleteServiceConditionKeys"></a>

```typescript
public readonly DeleteServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteService action.

---

##### `ROUTE_CREATED_BY_ACCOUNT`<sup>Required</sup> <a name="ROUTE_CREATED_BY_ACCOUNT" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.ROUTE_CREATED_BY_ACCOUNT"></a>

```typescript
public readonly ROUTE_CREATED_BY_ACCOUNT: string;
```

- *Type:* string

Condition key: refactor-spaces:RouteCreatedByAccount (String).

---

##### `SERVICE_CREATED_BY_ACCOUNT`<sup>Required</sup> <a name="SERVICE_CREATED_BY_ACCOUNT" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.SERVICE_CREATED_BY_ACCOUNT"></a>

```typescript
public readonly SERVICE_CREATED_BY_ACCOUNT: string;
```

- *Type:* string

Condition key: refactor-spaces:ServiceCreatedByAccount (String).

---

##### `SOURCE_PATH`<sup>Required</sup> <a name="SOURCE_PATH" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.SOURCE_PATH"></a>

```typescript
public readonly SOURCE_PATH: string;
```

- *Type:* string

Condition key: refactor-spaces:SourcePath (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateRouteConditionKeys`<sup>Required</sup> <a name="UpdateRouteConditionKeys" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesConditions.property.UpdateRouteConditionKeys"></a>

```typescript
public readonly UpdateRouteConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRoute action.

---

### RefactorSpacesOperations <a name="RefactorSpacesOperations" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations"></a>

API operation to required IAM actions mapping for refactor-spaces.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.Initializer"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

new refactor_spaces.RefactorSpacesOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironment API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.CreateRoute">CreateRoute</a></code> | <code>string[]</code> | IAM actions required for the CreateRoute API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.CreateService">CreateService</a></code> | <code>string[]</code> | IAM actions required for the CreateService API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironment API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.DeleteRoute">DeleteRoute</a></code> | <code>string[]</code> | IAM actions required for the DeleteRoute API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.DeleteService">DeleteService</a></code> | <code>string[]</code> | IAM actions required for the DeleteService API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.ListApplications">ListApplications</a></code> | <code>string[]</code> | IAM actions required for the ListApplications API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.ListEnvironments">ListEnvironments</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironments API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.ListEnvironmentVpcs">ListEnvironmentVpcs</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironmentVpcs API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.ListRoutes">ListRoutes</a></code> | <code>string[]</code> | IAM actions required for the ListRoutes API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.ListServices">ListServices</a></code> | <code>string[]</code> | IAM actions required for the ListServices API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.opGetApplication">opGetApplication</a></code> | <code>string[]</code> | IAM actions required for the GetApplication API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.opGetEnvironment">opGetEnvironment</a></code> | <code>string[]</code> | IAM actions required for the GetEnvironment API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.opGetRoute">opGetRoute</a></code> | <code>string[]</code> | IAM actions required for the GetRoute API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.opGetService">opGetService</a></code> | <code>string[]</code> | IAM actions required for the GetService API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.UpdateRoute">UpdateRoute</a></code> | <code>string[]</code> | IAM actions required for the UpdateRoute API call. |

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironment API call.

---

##### `CreateRoute`<sup>Required</sup> <a name="CreateRoute" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.CreateRoute"></a>

```typescript
public readonly CreateRoute: string[];
```

- *Type:* string[]

IAM actions required for the CreateRoute API call.

---

##### `CreateService`<sup>Required</sup> <a name="CreateService" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.CreateService"></a>

```typescript
public readonly CreateService: string[];
```

- *Type:* string[]

IAM actions required for the CreateService API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironment API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteRoute`<sup>Required</sup> <a name="DeleteRoute" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.DeleteRoute"></a>

```typescript
public readonly DeleteRoute: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRoute API call.

---

##### `DeleteService`<sup>Required</sup> <a name="DeleteService" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.DeleteService"></a>

```typescript
public readonly DeleteService: string[];
```

- *Type:* string[]

IAM actions required for the DeleteService API call.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.ListApplications"></a>

```typescript
public readonly ListApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListApplications API call.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironments API call.

---

##### `ListEnvironmentVpcs`<sup>Required</sup> <a name="ListEnvironmentVpcs" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.ListEnvironmentVpcs"></a>

```typescript
public readonly ListEnvironmentVpcs: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironmentVpcs API call.

---

##### `ListRoutes`<sup>Required</sup> <a name="ListRoutes" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.ListRoutes"></a>

```typescript
public readonly ListRoutes: string[];
```

- *Type:* string[]

IAM actions required for the ListRoutes API call.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.ListServices"></a>

```typescript
public readonly ListServices: string[];
```

- *Type:* string[]

IAM actions required for the ListServices API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetApplication`<sup>Required</sup> <a name="opGetApplication" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.opGetApplication"></a>

```typescript
public readonly opGetApplication: string[];
```

- *Type:* string[]

IAM actions required for the GetApplication API call.

---

##### `opGetEnvironment`<sup>Required</sup> <a name="opGetEnvironment" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.opGetEnvironment"></a>

```typescript
public readonly opGetEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the GetEnvironment API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `opGetRoute`<sup>Required</sup> <a name="opGetRoute" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.opGetRoute"></a>

```typescript
public readonly opGetRoute: string[];
```

- *Type:* string[]

IAM actions required for the GetRoute API call.

---

##### `opGetService`<sup>Required</sup> <a name="opGetService" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.opGetService"></a>

```typescript
public readonly opGetService: string[];
```

- *Type:* string[]

IAM actions required for the GetService API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateRoute`<sup>Required</sup> <a name="UpdateRoute" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesOperations.property.UpdateRoute"></a>

```typescript
public readonly UpdateRoute: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRoute API call.

---

### RefactorSpacesResources <a name="RefactorSpacesResources" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources"></a>

ARN builders, validators, and parsers for refactor-spaces resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.Initializer"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

new refactor_spaces.RefactorSpacesResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.environment">environment</a></code> | Builds an ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.isValidEnvironmentArn">isValidEnvironmentArn</a></code> | Validates whether a string is a valid ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.isValidRouteArn">isValidRouteArn</a></code> | Validates whether a string is a valid ARN for the route resource. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.isValidServiceArn">isValidServiceArn</a></code> | Validates whether a string is a valid ARN for the service resource. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.parseEnvironmentArn">parseEnvironmentArn</a></code> | Parses a environment ARN into its components. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.parseRouteArn">parseRouteArn</a></code> | Parses a route ARN into its components. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.parseServiceArn">parseServiceArn</a></code> | Parses a service ARN into its components. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.route">route</a></code> | Builds an ARN for the route resource. |
| <code><a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.service">service</a></code> | Builds an ARN for the service resource. |

---

##### `application` <a name="application" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.application"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesResources.application(props: RefactorSpacesApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesApplicationArnProps">RefactorSpacesApplicationArnProps</a>

---

##### `environment` <a name="environment" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.environment"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesResources.environment(props: RefactorSpacesEnvironmentArnProps)
```

Builds an ARN for the environment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.environment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesEnvironmentArnProps">RefactorSpacesEnvironmentArnProps</a>

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.isValidApplicationArn"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEnvironmentArn` <a name="isValidEnvironmentArn" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.isValidEnvironmentArn"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesResources.isValidEnvironmentArn(arn: string)
```

Validates whether a string is a valid ARN for the environment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.isValidEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRouteArn` <a name="isValidRouteArn" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.isValidRouteArn"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesResources.isValidRouteArn(arn: string)
```

Validates whether a string is a valid ARN for the route resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.isValidRouteArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceArn` <a name="isValidServiceArn" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.isValidServiceArn"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesResources.isValidServiceArn(arn: string)
```

Validates whether a string is a valid ARN for the service resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.isValidServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.parseApplicationArn"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnvironmentArn` <a name="parseEnvironmentArn" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.parseEnvironmentArn"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesResources.parseEnvironmentArn(arn: string)
```

Parses a environment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.parseEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRouteArn` <a name="parseRouteArn" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.parseRouteArn"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesResources.parseRouteArn(arn: string)
```

Parses a route ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.parseRouteArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceArn` <a name="parseServiceArn" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.parseServiceArn"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesResources.parseServiceArn(arn: string)
```

Parses a service ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.parseServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `route` <a name="route" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.route"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesResources.route(props: RefactorSpacesRouteArnProps)
```

Builds an ARN for the route resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.route.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesRouteArnProps">RefactorSpacesRouteArnProps</a>

---

##### `service` <a name="service" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.service"></a>

```typescript
import { refactor_spaces } from '@cdk_utils/iam'

refactor_spaces.RefactorSpacesResources.service(props: RefactorSpacesServiceArnProps)
```

Builds an ARN for the service resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.refactor_spaces.RefactorSpacesResources.service.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.refactor_spaces.RefactorSpacesServiceArnProps">RefactorSpacesServiceArnProps</a>

---




