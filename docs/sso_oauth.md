# `sso_oauth` Submodule <a name="`sso_oauth` Submodule" id="@cdk_utils/iam.sso_oauth"></a>


## Structs <a name="Structs" id="Structs"></a>

### SSOOauthApplicationArnComponents <a name="SSOOauthApplicationArnComponents" id="@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnComponents"></a>

Parsed components of a Application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnComponents.Initializer"></a>

```typescript
import { sso_oauth } from '@cdk_utils/iam'

const sSOOauthApplicationArnComponents: sso_oauth.SSOOauthApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSOOauthApplicationArnProps <a name="SSOOauthApplicationArnProps" id="@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnProps"></a>

Properties for building a Application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnProps.Initializer"></a>

```typescript
import { sso_oauth } from '@cdk_utils/iam'

const sSOOauthApplicationArnProps: sso_oauth.SSOOauthApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SSOOauthActions <a name="SSOOauthActions" id="@cdk_utils/iam.sso_oauth.SSOOauthActions"></a>

IAM action constants for the sso-oauth service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sso_oauth.SSOOauthActions.Initializer"></a>

```typescript
import { sso_oauth } from '@cdk_utils/iam'

new sso_oauth.SSOOauthActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthActions.property.CreateTokenWithIAM">CreateTokenWithIAM</a></code> | <code>string</code> | [Write] sso-oauth:CreateTokenWithIAM. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthActions.property.IntrospectTokenWithIAM">IntrospectTokenWithIAM</a></code> | <code>string</code> | [Write] sso-oauth:IntrospectTokenWithIAM. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthActions.property.RevokeTokenWithIAM">RevokeTokenWithIAM</a></code> | <code>string</code> | [Write] sso-oauth:RevokeTokenWithIAM. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.sso_oauth.SSOOauthActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.sso_oauth.SSOOauthActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.sso_oauth.SSOOauthActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.sso_oauth.SSOOauthActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.sso_oauth.SSOOauthActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateTokenWithIAM`<sup>Required</sup> <a name="CreateTokenWithIAM" id="@cdk_utils/iam.sso_oauth.SSOOauthActions.property.CreateTokenWithIAM"></a>

```typescript
public readonly CreateTokenWithIAM: string;
```

- *Type:* string

[Write] sso-oauth:CreateTokenWithIAM.

---

##### `IntrospectTokenWithIAM`<sup>Required</sup> <a name="IntrospectTokenWithIAM" id="@cdk_utils/iam.sso_oauth.SSOOauthActions.property.IntrospectTokenWithIAM"></a>

```typescript
public readonly IntrospectTokenWithIAM: string;
```

- *Type:* string

[Write] sso-oauth:IntrospectTokenWithIAM.

---

##### `RevokeTokenWithIAM`<sup>Required</sup> <a name="RevokeTokenWithIAM" id="@cdk_utils/iam.sso_oauth.SSOOauthActions.property.RevokeTokenWithIAM"></a>

```typescript
public readonly RevokeTokenWithIAM: string;
```

- *Type:* string

[Write] sso-oauth:RevokeTokenWithIAM.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.sso_oauth.SSOOauthActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### SSOOauthOperations <a name="SSOOauthOperations" id="@cdk_utils/iam.sso_oauth.SSOOauthOperations"></a>

API operation to required IAM actions mapping for sso-oauth.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sso_oauth.SSOOauthOperations.Initializer"></a>

```typescript
import { sso_oauth } from '@cdk_utils/iam'

new sso_oauth.SSOOauthOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthOperations.property.CreateToken">CreateToken</a></code> | <code>string[]</code> | IAM actions required for the CreateToken API call. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthOperations.property.CreateTokenWithIAM">CreateTokenWithIAM</a></code> | <code>string[]</code> | IAM actions required for the CreateTokenWithIAM API call. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthOperations.property.RegisterClient">RegisterClient</a></code> | <code>string[]</code> | IAM actions required for the RegisterClient API call. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthOperations.property.StartDeviceAuthorization">StartDeviceAuthorization</a></code> | <code>string[]</code> | IAM actions required for the StartDeviceAuthorization API call. |

---

##### `CreateToken`<sup>Required</sup> <a name="CreateToken" id="@cdk_utils/iam.sso_oauth.SSOOauthOperations.property.CreateToken"></a>

```typescript
public readonly CreateToken: string[];
```

- *Type:* string[]

IAM actions required for the CreateToken API call.

---

##### `CreateTokenWithIAM`<sup>Required</sup> <a name="CreateTokenWithIAM" id="@cdk_utils/iam.sso_oauth.SSOOauthOperations.property.CreateTokenWithIAM"></a>

```typescript
public readonly CreateTokenWithIAM: string[];
```

- *Type:* string[]

IAM actions required for the CreateTokenWithIAM API call.

---

##### `RegisterClient`<sup>Required</sup> <a name="RegisterClient" id="@cdk_utils/iam.sso_oauth.SSOOauthOperations.property.RegisterClient"></a>

```typescript
public readonly RegisterClient: string[];
```

- *Type:* string[]

IAM actions required for the RegisterClient API call.

---

##### `StartDeviceAuthorization`<sup>Required</sup> <a name="StartDeviceAuthorization" id="@cdk_utils/iam.sso_oauth.SSOOauthOperations.property.StartDeviceAuthorization"></a>

```typescript
public readonly StartDeviceAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the StartDeviceAuthorization API call.

---

### SSOOauthResources <a name="SSOOauthResources" id="@cdk_utils/iam.sso_oauth.SSOOauthResources"></a>

ARN builders, validators, and parsers for sso-oauth resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sso_oauth.SSOOauthResources.Initializer"></a>

```typescript
import { sso_oauth } from '@cdk_utils/iam'

new sso_oauth.SSOOauthResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthResources.application">application</a></code> | Builds an ARN for the Application resource. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the Application resource. |
| <code><a href="#@cdk_utils/iam.sso_oauth.SSOOauthResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a Application ARN into its components. |

---

##### `application` <a name="application" id="@cdk_utils/iam.sso_oauth.SSOOauthResources.application"></a>

```typescript
import { sso_oauth } from '@cdk_utils/iam'

sso_oauth.SSOOauthResources.application(props: SSOOauthApplicationArnProps)
```

Builds an ARN for the Application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sso_oauth.SSOOauthResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sso_oauth.SSOOauthApplicationArnProps">SSOOauthApplicationArnProps</a>

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.sso_oauth.SSOOauthResources.isValidApplicationArn"></a>

```typescript
import { sso_oauth } from '@cdk_utils/iam'

sso_oauth.SSOOauthResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the Application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sso_oauth.SSOOauthResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.sso_oauth.SSOOauthResources.parseApplicationArn"></a>

```typescript
import { sso_oauth } from '@cdk_utils/iam'

sso_oauth.SSOOauthResources.parseApplicationArn(arn: string)
```

Parses a Application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sso_oauth.SSOOauthResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---




