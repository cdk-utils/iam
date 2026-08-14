# `amplify` Submodule <a name="`amplify` Submodule" id="@cdk_utils/iam.amplify"></a>


## Structs <a name="Structs" id="Structs"></a>

### AmplifyAppsArnComponents <a name="AmplifyAppsArnComponents" id="@cdk_utils/iam.amplify.AmplifyAppsArnComponents"></a>

Parsed components of a apps ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplify.AmplifyAppsArnComponents.Initializer"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

const amplifyAppsArnComponents: amplify.AmplifyAppsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyAppsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyAppsArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyAppsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyAppsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplify.AmplifyAppsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplify.AmplifyAppsArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplify.AmplifyAppsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplify.AmplifyAppsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AmplifyAppsArnProps <a name="AmplifyAppsArnProps" id="@cdk_utils/iam.amplify.AmplifyAppsArnProps"></a>

Properties for building a apps ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplify.AmplifyAppsArnProps.Initializer"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

const amplifyAppsArnProps: amplify.AmplifyAppsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyAppsArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyAppsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyAppsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyAppsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplify.AmplifyAppsArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplify.AmplifyAppsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplify.AmplifyAppsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplify.AmplifyAppsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AmplifyBranchesArnComponents <a name="AmplifyBranchesArnComponents" id="@cdk_utils/iam.amplify.AmplifyBranchesArnComponents"></a>

Parsed components of a branches ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplify.AmplifyBranchesArnComponents.Initializer"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

const amplifyBranchesArnComponents: amplify.AmplifyBranchesArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyBranchesArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyBranchesArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyBranchesArnComponents.property.branchName">branchName</a></code> | <code>string</code> | The BranchName component. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyBranchesArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyBranchesArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplify.AmplifyBranchesArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplify.AmplifyBranchesArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdk_utils/iam.amplify.AmplifyBranchesArnComponents.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

The BranchName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplify.AmplifyBranchesArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplify.AmplifyBranchesArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AmplifyBranchesArnProps <a name="AmplifyBranchesArnProps" id="@cdk_utils/iam.amplify.AmplifyBranchesArnProps"></a>

Properties for building a branches ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplify.AmplifyBranchesArnProps.Initializer"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

const amplifyBranchesArnProps: amplify.AmplifyBranchesArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyBranchesArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyBranchesArnProps.property.branchName">branchName</a></code> | <code>string</code> | The BranchName component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyBranchesArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyBranchesArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyBranchesArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplify.AmplifyBranchesArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdk_utils/iam.amplify.AmplifyBranchesArnProps.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

The BranchName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplify.AmplifyBranchesArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplify.AmplifyBranchesArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplify.AmplifyBranchesArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AmplifyDomainsArnComponents <a name="AmplifyDomainsArnComponents" id="@cdk_utils/iam.amplify.AmplifyDomainsArnComponents"></a>

Parsed components of a domains ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplify.AmplifyDomainsArnComponents.Initializer"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

const amplifyDomainsArnComponents: amplify.AmplifyDomainsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyDomainsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyDomainsArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyDomainsArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyDomainsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyDomainsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplify.AmplifyDomainsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplify.AmplifyDomainsArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.amplify.AmplifyDomainsArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplify.AmplifyDomainsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplify.AmplifyDomainsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AmplifyDomainsArnProps <a name="AmplifyDomainsArnProps" id="@cdk_utils/iam.amplify.AmplifyDomainsArnProps"></a>

Properties for building a domains ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplify.AmplifyDomainsArnProps.Initializer"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

const amplifyDomainsArnProps: amplify.AmplifyDomainsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyDomainsArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyDomainsArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyDomainsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyDomainsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyDomainsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplify.AmplifyDomainsArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.amplify.AmplifyDomainsArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplify.AmplifyDomainsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplify.AmplifyDomainsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplify.AmplifyDomainsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AmplifyJobsArnComponents <a name="AmplifyJobsArnComponents" id="@cdk_utils/iam.amplify.AmplifyJobsArnComponents"></a>

Parsed components of a jobs ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplify.AmplifyJobsArnComponents.Initializer"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

const amplifyJobsArnComponents: amplify.AmplifyJobsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyJobsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyJobsArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyJobsArnComponents.property.branchName">branchName</a></code> | <code>string</code> | The BranchName component. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyJobsArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyJobsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyJobsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplify.AmplifyJobsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplify.AmplifyJobsArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdk_utils/iam.amplify.AmplifyJobsArnComponents.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

The BranchName component.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.amplify.AmplifyJobsArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplify.AmplifyJobsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplify.AmplifyJobsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AmplifyJobsArnProps <a name="AmplifyJobsArnProps" id="@cdk_utils/iam.amplify.AmplifyJobsArnProps"></a>

Properties for building a jobs ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplify.AmplifyJobsArnProps.Initializer"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

const amplifyJobsArnProps: amplify.AmplifyJobsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyJobsArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyJobsArnProps.property.branchName">branchName</a></code> | <code>string</code> | The BranchName component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyJobsArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyJobsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyJobsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyJobsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplify.AmplifyJobsArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdk_utils/iam.amplify.AmplifyJobsArnProps.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

The BranchName component of the ARN.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.amplify.AmplifyJobsArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplify.AmplifyJobsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplify.AmplifyJobsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplify.AmplifyJobsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AmplifyWebhooksArnComponents <a name="AmplifyWebhooksArnComponents" id="@cdk_utils/iam.amplify.AmplifyWebhooksArnComponents"></a>

Parsed components of a webhooks ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplify.AmplifyWebhooksArnComponents.Initializer"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

const amplifyWebhooksArnComponents: amplify.AmplifyWebhooksArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyWebhooksArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyWebhooksArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyWebhooksArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyWebhooksArnComponents.property.webhookId">webhookId</a></code> | <code>string</code> | The WebhookId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplify.AmplifyWebhooksArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplify.AmplifyWebhooksArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplify.AmplifyWebhooksArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `webhookId`<sup>Required</sup> <a name="webhookId" id="@cdk_utils/iam.amplify.AmplifyWebhooksArnComponents.property.webhookId"></a>

```typescript
public readonly webhookId: string;
```

- *Type:* string

The WebhookId component.

---

### AmplifyWebhooksArnProps <a name="AmplifyWebhooksArnProps" id="@cdk_utils/iam.amplify.AmplifyWebhooksArnProps"></a>

Properties for building a webhooks ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplify.AmplifyWebhooksArnProps.Initializer"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

const amplifyWebhooksArnProps: amplify.AmplifyWebhooksArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyWebhooksArnProps.property.webhookId">webhookId</a></code> | <code>string</code> | The WebhookId component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyWebhooksArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyWebhooksArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyWebhooksArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `webhookId`<sup>Required</sup> <a name="webhookId" id="@cdk_utils/iam.amplify.AmplifyWebhooksArnProps.property.webhookId"></a>

```typescript
public readonly webhookId: string;
```

- *Type:* string

The WebhookId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplify.AmplifyWebhooksArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplify.AmplifyWebhooksArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplify.AmplifyWebhooksArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AmplifyActions <a name="AmplifyActions" id="@cdk_utils/iam.amplify.AmplifyActions"></a>

IAM action constants for the amplify service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.amplify.AmplifyActions.Initializer"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

new amplify.AmplifyActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.actionGetApp">actionGetApp</a></code> | <code>string</code> | [Read] amplify:GetApp. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.actionGetArtifactUrl">actionGetArtifactUrl</a></code> | <code>string</code> | [Read] amplify:GetArtifactUrl. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.actionGetBackendEnvironment">actionGetBackendEnvironment</a></code> | <code>string</code> | [Read] amplify:GetBackendEnvironment. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.actionGetBranch">actionGetBranch</a></code> | <code>string</code> | [Read] amplify:GetBranch. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.actionGetDomainAssociation">actionGetDomainAssociation</a></code> | <code>string</code> | [Read] amplify:GetDomainAssociation. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.actionGetJob">actionGetJob</a></code> | <code>string</code> | [Read] amplify:GetJob. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.actionGetWebACLForResource">actionGetWebACLForResource</a></code> | <code>string</code> | [Read] amplify:GetWebACLForResource. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.actionGetWebHook">actionGetWebHook</a></code> | <code>string</code> | [Read] amplify:GetWebHook. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.AssociateWebACL">AssociateWebACL</a></code> | <code>string</code> | [Write] amplify:AssociateWebACL. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.CreateApp">CreateApp</a></code> | <code>string</code> | [Write] amplify:CreateApp. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.CreateBackendEnvironment">CreateBackendEnvironment</a></code> | <code>string</code> | [Write] amplify:CreateBackendEnvironment. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.CreateBranch">CreateBranch</a></code> | <code>string</code> | [Write] amplify:CreateBranch. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.CreateDeployment">CreateDeployment</a></code> | <code>string</code> | [Write] amplify:CreateDeployment. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.CreateDomainAssociation">CreateDomainAssociation</a></code> | <code>string</code> | [Write] amplify:CreateDomainAssociation. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.CreateWebHook">CreateWebHook</a></code> | <code>string</code> | [Write] amplify:CreateWebHook. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.DeleteApp">DeleteApp</a></code> | <code>string</code> | [Write] amplify:DeleteApp. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.DeleteBackendEnvironment">DeleteBackendEnvironment</a></code> | <code>string</code> | [Write] amplify:DeleteBackendEnvironment. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.DeleteBranch">DeleteBranch</a></code> | <code>string</code> | [Write] amplify:DeleteBranch. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.DeleteDomainAssociation">DeleteDomainAssociation</a></code> | <code>string</code> | [Write] amplify:DeleteDomainAssociation. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.DeleteJob">DeleteJob</a></code> | <code>string</code> | [Write] amplify:DeleteJob. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.DeleteWebHook">DeleteWebHook</a></code> | <code>string</code> | [Write] amplify:DeleteWebHook. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.DisassociateWebACL">DisassociateWebACL</a></code> | <code>string</code> | [Write] amplify:DisassociateWebACL. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.GenerateAccessLogs">GenerateAccessLogs</a></code> | <code>string</code> | [Write] amplify:GenerateAccessLogs. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.ListApps">ListApps</a></code> | <code>string</code> | [List] amplify:ListApps. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.ListArtifacts">ListArtifacts</a></code> | <code>string</code> | [List] amplify:ListArtifacts. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.ListBackendEnvironments">ListBackendEnvironments</a></code> | <code>string</code> | [List] amplify:ListBackendEnvironments. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.ListBranches">ListBranches</a></code> | <code>string</code> | [List] amplify:ListBranches. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.ListDomainAssociations">ListDomainAssociations</a></code> | <code>string</code> | [List] amplify:ListDomainAssociations. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.ListJobs">ListJobs</a></code> | <code>string</code> | [List] amplify:ListJobs. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.ListResourcesForWebACL">ListResourcesForWebACL</a></code> | <code>string</code> | [List] amplify:ListResourcesForWebACL. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] amplify:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.ListWebHooks">ListWebHooks</a></code> | <code>string</code> | [List] amplify:ListWebHooks. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.StartDeployment">StartDeployment</a></code> | <code>string</code> | [Write] amplify:StartDeployment. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.StartJob">StartJob</a></code> | <code>string</code> | [Write] amplify:StartJob. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.StopJob">StopJob</a></code> | <code>string</code> | [Write] amplify:StopJob. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] amplify:TagResource. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] amplify:UntagResource. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.UpdateApp">UpdateApp</a></code> | <code>string</code> | [Write] amplify:UpdateApp. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.UpdateBranch">UpdateBranch</a></code> | <code>string</code> | [Write] amplify:UpdateBranch. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.UpdateDomainAssociation">UpdateDomainAssociation</a></code> | <code>string</code> | [Write] amplify:UpdateDomainAssociation. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyActions.property.UpdateWebHook">UpdateWebHook</a></code> | <code>string</code> | [Write] amplify:UpdateWebHook. |

---

##### `actionGetApp`<sup>Required</sup> <a name="actionGetApp" id="@cdk_utils/iam.amplify.AmplifyActions.property.actionGetApp"></a>

```typescript
public readonly actionGetApp: string;
```

- *Type:* string

[Read] amplify:GetApp.

---

##### `actionGetArtifactUrl`<sup>Required</sup> <a name="actionGetArtifactUrl" id="@cdk_utils/iam.amplify.AmplifyActions.property.actionGetArtifactUrl"></a>

```typescript
public readonly actionGetArtifactUrl: string;
```

- *Type:* string

[Read] amplify:GetArtifactUrl.

---

##### `actionGetBackendEnvironment`<sup>Required</sup> <a name="actionGetBackendEnvironment" id="@cdk_utils/iam.amplify.AmplifyActions.property.actionGetBackendEnvironment"></a>

```typescript
public readonly actionGetBackendEnvironment: string;
```

- *Type:* string

[Read] amplify:GetBackendEnvironment.

---

##### `actionGetBranch`<sup>Required</sup> <a name="actionGetBranch" id="@cdk_utils/iam.amplify.AmplifyActions.property.actionGetBranch"></a>

```typescript
public readonly actionGetBranch: string;
```

- *Type:* string

[Read] amplify:GetBranch.

---

##### `actionGetDomainAssociation`<sup>Required</sup> <a name="actionGetDomainAssociation" id="@cdk_utils/iam.amplify.AmplifyActions.property.actionGetDomainAssociation"></a>

```typescript
public readonly actionGetDomainAssociation: string;
```

- *Type:* string

[Read] amplify:GetDomainAssociation.

---

##### `actionGetJob`<sup>Required</sup> <a name="actionGetJob" id="@cdk_utils/iam.amplify.AmplifyActions.property.actionGetJob"></a>

```typescript
public readonly actionGetJob: string;
```

- *Type:* string

[Read] amplify:GetJob.

---

##### `actionGetWebACLForResource`<sup>Required</sup> <a name="actionGetWebACLForResource" id="@cdk_utils/iam.amplify.AmplifyActions.property.actionGetWebACLForResource"></a>

```typescript
public readonly actionGetWebACLForResource: string;
```

- *Type:* string

[Read] amplify:GetWebACLForResource.

---

##### `actionGetWebHook`<sup>Required</sup> <a name="actionGetWebHook" id="@cdk_utils/iam.amplify.AmplifyActions.property.actionGetWebHook"></a>

```typescript
public readonly actionGetWebHook: string;
```

- *Type:* string

[Read] amplify:GetWebHook.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.amplify.AmplifyActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.amplify.AmplifyActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.amplify.AmplifyActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.amplify.AmplifyActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.amplify.AmplifyActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateWebACL`<sup>Required</sup> <a name="AssociateWebACL" id="@cdk_utils/iam.amplify.AmplifyActions.property.AssociateWebACL"></a>

```typescript
public readonly AssociateWebACL: string;
```

- *Type:* string

[Write] amplify:AssociateWebACL.

---

##### `CreateApp`<sup>Required</sup> <a name="CreateApp" id="@cdk_utils/iam.amplify.AmplifyActions.property.CreateApp"></a>

```typescript
public readonly CreateApp: string;
```

- *Type:* string

[Write] amplify:CreateApp.

---

##### `CreateBackendEnvironment`<sup>Required</sup> <a name="CreateBackendEnvironment" id="@cdk_utils/iam.amplify.AmplifyActions.property.CreateBackendEnvironment"></a>

```typescript
public readonly CreateBackendEnvironment: string;
```

- *Type:* string

[Write] amplify:CreateBackendEnvironment.

---

##### `CreateBranch`<sup>Required</sup> <a name="CreateBranch" id="@cdk_utils/iam.amplify.AmplifyActions.property.CreateBranch"></a>

```typescript
public readonly CreateBranch: string;
```

- *Type:* string

[Write] amplify:CreateBranch.

---

##### `CreateDeployment`<sup>Required</sup> <a name="CreateDeployment" id="@cdk_utils/iam.amplify.AmplifyActions.property.CreateDeployment"></a>

```typescript
public readonly CreateDeployment: string;
```

- *Type:* string

[Write] amplify:CreateDeployment.

---

##### `CreateDomainAssociation`<sup>Required</sup> <a name="CreateDomainAssociation" id="@cdk_utils/iam.amplify.AmplifyActions.property.CreateDomainAssociation"></a>

```typescript
public readonly CreateDomainAssociation: string;
```

- *Type:* string

[Write] amplify:CreateDomainAssociation.

---

##### `CreateWebHook`<sup>Required</sup> <a name="CreateWebHook" id="@cdk_utils/iam.amplify.AmplifyActions.property.CreateWebHook"></a>

```typescript
public readonly CreateWebHook: string;
```

- *Type:* string

[Write] amplify:CreateWebHook.

---

##### `DeleteApp`<sup>Required</sup> <a name="DeleteApp" id="@cdk_utils/iam.amplify.AmplifyActions.property.DeleteApp"></a>

```typescript
public readonly DeleteApp: string;
```

- *Type:* string

[Write] amplify:DeleteApp.

---

##### `DeleteBackendEnvironment`<sup>Required</sup> <a name="DeleteBackendEnvironment" id="@cdk_utils/iam.amplify.AmplifyActions.property.DeleteBackendEnvironment"></a>

```typescript
public readonly DeleteBackendEnvironment: string;
```

- *Type:* string

[Write] amplify:DeleteBackendEnvironment.

---

##### `DeleteBranch`<sup>Required</sup> <a name="DeleteBranch" id="@cdk_utils/iam.amplify.AmplifyActions.property.DeleteBranch"></a>

```typescript
public readonly DeleteBranch: string;
```

- *Type:* string

[Write] amplify:DeleteBranch.

---

##### `DeleteDomainAssociation`<sup>Required</sup> <a name="DeleteDomainAssociation" id="@cdk_utils/iam.amplify.AmplifyActions.property.DeleteDomainAssociation"></a>

```typescript
public readonly DeleteDomainAssociation: string;
```

- *Type:* string

[Write] amplify:DeleteDomainAssociation.

---

##### `DeleteJob`<sup>Required</sup> <a name="DeleteJob" id="@cdk_utils/iam.amplify.AmplifyActions.property.DeleteJob"></a>

```typescript
public readonly DeleteJob: string;
```

- *Type:* string

[Write] amplify:DeleteJob.

---

##### `DeleteWebHook`<sup>Required</sup> <a name="DeleteWebHook" id="@cdk_utils/iam.amplify.AmplifyActions.property.DeleteWebHook"></a>

```typescript
public readonly DeleteWebHook: string;
```

- *Type:* string

[Write] amplify:DeleteWebHook.

---

##### `DisassociateWebACL`<sup>Required</sup> <a name="DisassociateWebACL" id="@cdk_utils/iam.amplify.AmplifyActions.property.DisassociateWebACL"></a>

```typescript
public readonly DisassociateWebACL: string;
```

- *Type:* string

[Write] amplify:DisassociateWebACL.

---

##### `GenerateAccessLogs`<sup>Required</sup> <a name="GenerateAccessLogs" id="@cdk_utils/iam.amplify.AmplifyActions.property.GenerateAccessLogs"></a>

```typescript
public readonly GenerateAccessLogs: string;
```

- *Type:* string

[Write] amplify:GenerateAccessLogs.

---

##### `ListApps`<sup>Required</sup> <a name="ListApps" id="@cdk_utils/iam.amplify.AmplifyActions.property.ListApps"></a>

```typescript
public readonly ListApps: string;
```

- *Type:* string

[List] amplify:ListApps.

---

##### `ListArtifacts`<sup>Required</sup> <a name="ListArtifacts" id="@cdk_utils/iam.amplify.AmplifyActions.property.ListArtifacts"></a>

```typescript
public readonly ListArtifacts: string;
```

- *Type:* string

[List] amplify:ListArtifacts.

---

##### `ListBackendEnvironments`<sup>Required</sup> <a name="ListBackendEnvironments" id="@cdk_utils/iam.amplify.AmplifyActions.property.ListBackendEnvironments"></a>

```typescript
public readonly ListBackendEnvironments: string;
```

- *Type:* string

[List] amplify:ListBackendEnvironments.

---

##### `ListBranches`<sup>Required</sup> <a name="ListBranches" id="@cdk_utils/iam.amplify.AmplifyActions.property.ListBranches"></a>

```typescript
public readonly ListBranches: string;
```

- *Type:* string

[List] amplify:ListBranches.

---

##### `ListDomainAssociations`<sup>Required</sup> <a name="ListDomainAssociations" id="@cdk_utils/iam.amplify.AmplifyActions.property.ListDomainAssociations"></a>

```typescript
public readonly ListDomainAssociations: string;
```

- *Type:* string

[List] amplify:ListDomainAssociations.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.amplify.AmplifyActions.property.ListJobs"></a>

```typescript
public readonly ListJobs: string;
```

- *Type:* string

[List] amplify:ListJobs.

---

##### `ListResourcesForWebACL`<sup>Required</sup> <a name="ListResourcesForWebACL" id="@cdk_utils/iam.amplify.AmplifyActions.property.ListResourcesForWebACL"></a>

```typescript
public readonly ListResourcesForWebACL: string;
```

- *Type:* string

[List] amplify:ListResourcesForWebACL.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.amplify.AmplifyActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] amplify:ListTagsForResource.

---

##### `ListWebHooks`<sup>Required</sup> <a name="ListWebHooks" id="@cdk_utils/iam.amplify.AmplifyActions.property.ListWebHooks"></a>

```typescript
public readonly ListWebHooks: string;
```

- *Type:* string

[List] amplify:ListWebHooks.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.amplify.AmplifyActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDeployment`<sup>Required</sup> <a name="StartDeployment" id="@cdk_utils/iam.amplify.AmplifyActions.property.StartDeployment"></a>

```typescript
public readonly StartDeployment: string;
```

- *Type:* string

[Write] amplify:StartDeployment.

---

##### `StartJob`<sup>Required</sup> <a name="StartJob" id="@cdk_utils/iam.amplify.AmplifyActions.property.StartJob"></a>

```typescript
public readonly StartJob: string;
```

- *Type:* string

[Write] amplify:StartJob.

---

##### `StopJob`<sup>Required</sup> <a name="StopJob" id="@cdk_utils/iam.amplify.AmplifyActions.property.StopJob"></a>

```typescript
public readonly StopJob: string;
```

- *Type:* string

[Write] amplify:StopJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.amplify.AmplifyActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] amplify:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.amplify.AmplifyActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] amplify:UntagResource.

---

##### `UpdateApp`<sup>Required</sup> <a name="UpdateApp" id="@cdk_utils/iam.amplify.AmplifyActions.property.UpdateApp"></a>

```typescript
public readonly UpdateApp: string;
```

- *Type:* string

[Write] amplify:UpdateApp.

---

##### `UpdateBranch`<sup>Required</sup> <a name="UpdateBranch" id="@cdk_utils/iam.amplify.AmplifyActions.property.UpdateBranch"></a>

```typescript
public readonly UpdateBranch: string;
```

- *Type:* string

[Write] amplify:UpdateBranch.

---

##### `UpdateDomainAssociation`<sup>Required</sup> <a name="UpdateDomainAssociation" id="@cdk_utils/iam.amplify.AmplifyActions.property.UpdateDomainAssociation"></a>

```typescript
public readonly UpdateDomainAssociation: string;
```

- *Type:* string

[Write] amplify:UpdateDomainAssociation.

---

##### `UpdateWebHook`<sup>Required</sup> <a name="UpdateWebHook" id="@cdk_utils/iam.amplify.AmplifyActions.property.UpdateWebHook"></a>

```typescript
public readonly UpdateWebHook: string;
```

- *Type:* string

[Write] amplify:UpdateWebHook.

---

### AmplifyConditions <a name="AmplifyConditions" id="@cdk_utils/iam.amplify.AmplifyConditions"></a>

Condition key constants and builders for amplify.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.amplify.AmplifyConditions.Initializer"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

new amplify.AmplifyConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.amplify.AmplifyConditions.requestTag"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

amplify.AmplifyConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.amplify.AmplifyConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.amplify.AmplifyConditions.resourceTag"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

amplify.AmplifyConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.amplify.AmplifyConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.amplify.AmplifyConditions.tagKeys"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

amplify.AmplifyConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.amplify.AmplifyConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyConditions.property.CreateAppConditionKeys">CreateAppConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApp action. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyConditions.property.CreateBranchConditionKeys">CreateBranchConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBranch action. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.amplify.AmplifyConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.amplify.AmplifyConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.amplify.AmplifyConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAppConditionKeys`<sup>Required</sup> <a name="CreateAppConditionKeys" id="@cdk_utils/iam.amplify.AmplifyConditions.property.CreateAppConditionKeys"></a>

```typescript
public readonly CreateAppConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApp action.

---

##### `CreateBranchConditionKeys`<sup>Required</sup> <a name="CreateBranchConditionKeys" id="@cdk_utils/iam.amplify.AmplifyConditions.property.CreateBranchConditionKeys"></a>

```typescript
public readonly CreateBranchConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBranch action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.amplify.AmplifyConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.amplify.AmplifyConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### AmplifyOperations <a name="AmplifyOperations" id="@cdk_utils/iam.amplify.AmplifyOperations"></a>

API operation to required IAM actions mapping for amplify.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.amplify.AmplifyOperations.Initializer"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

new amplify.AmplifyOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.CreateApp">CreateApp</a></code> | <code>string[]</code> | IAM actions required for the CreateApp API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.CreateBackendEnvironment">CreateBackendEnvironment</a></code> | <code>string[]</code> | IAM actions required for the CreateBackendEnvironment API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.CreateBranch">CreateBranch</a></code> | <code>string[]</code> | IAM actions required for the CreateBranch API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.CreateDeployment">CreateDeployment</a></code> | <code>string[]</code> | IAM actions required for the CreateDeployment API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.CreateDomainAssociation">CreateDomainAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateDomainAssociation API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.CreateWebhook">CreateWebhook</a></code> | <code>string[]</code> | IAM actions required for the CreateWebhook API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.DeleteApp">DeleteApp</a></code> | <code>string[]</code> | IAM actions required for the DeleteApp API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.DeleteBackendEnvironment">DeleteBackendEnvironment</a></code> | <code>string[]</code> | IAM actions required for the DeleteBackendEnvironment API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.DeleteBranch">DeleteBranch</a></code> | <code>string[]</code> | IAM actions required for the DeleteBranch API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.DeleteDomainAssociation">DeleteDomainAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomainAssociation API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.DeleteJob">DeleteJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteJob API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.DeleteWebhook">DeleteWebhook</a></code> | <code>string[]</code> | IAM actions required for the DeleteWebhook API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.GenerateAccessLogs">GenerateAccessLogs</a></code> | <code>string[]</code> | IAM actions required for the GenerateAccessLogs API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.ListApps">ListApps</a></code> | <code>string[]</code> | IAM actions required for the ListApps API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.ListArtifacts">ListArtifacts</a></code> | <code>string[]</code> | IAM actions required for the ListArtifacts API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.ListBackendEnvironments">ListBackendEnvironments</a></code> | <code>string[]</code> | IAM actions required for the ListBackendEnvironments API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.ListBranches">ListBranches</a></code> | <code>string[]</code> | IAM actions required for the ListBranches API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.ListDomainAssociations">ListDomainAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListDomainAssociations API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.ListJobs">ListJobs</a></code> | <code>string[]</code> | IAM actions required for the ListJobs API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.ListWebhooks">ListWebhooks</a></code> | <code>string[]</code> | IAM actions required for the ListWebhooks API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.opGetApp">opGetApp</a></code> | <code>string[]</code> | IAM actions required for the GetApp API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.opGetArtifactUrl">opGetArtifactUrl</a></code> | <code>string[]</code> | IAM actions required for the GetArtifactUrl API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.opGetBackendEnvironment">opGetBackendEnvironment</a></code> | <code>string[]</code> | IAM actions required for the GetBackendEnvironment API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.opGetBranch">opGetBranch</a></code> | <code>string[]</code> | IAM actions required for the GetBranch API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.opGetDomainAssociation">opGetDomainAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetDomainAssociation API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.opGetJob">opGetJob</a></code> | <code>string[]</code> | IAM actions required for the GetJob API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.opGetWebhook">opGetWebhook</a></code> | <code>string[]</code> | IAM actions required for the GetWebhook API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.StartDeployment">StartDeployment</a></code> | <code>string[]</code> | IAM actions required for the StartDeployment API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.StartJob">StartJob</a></code> | <code>string[]</code> | IAM actions required for the StartJob API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.StopJob">StopJob</a></code> | <code>string[]</code> | IAM actions required for the StopJob API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.UpdateApp">UpdateApp</a></code> | <code>string[]</code> | IAM actions required for the UpdateApp API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.UpdateBranch">UpdateBranch</a></code> | <code>string[]</code> | IAM actions required for the UpdateBranch API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.UpdateDomainAssociation">UpdateDomainAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateDomainAssociation API call. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyOperations.property.UpdateWebhook">UpdateWebhook</a></code> | <code>string[]</code> | IAM actions required for the UpdateWebhook API call. |

---

##### `CreateApp`<sup>Required</sup> <a name="CreateApp" id="@cdk_utils/iam.amplify.AmplifyOperations.property.CreateApp"></a>

```typescript
public readonly CreateApp: string[];
```

- *Type:* string[]

IAM actions required for the CreateApp API call.

---

##### `CreateBackendEnvironment`<sup>Required</sup> <a name="CreateBackendEnvironment" id="@cdk_utils/iam.amplify.AmplifyOperations.property.CreateBackendEnvironment"></a>

```typescript
public readonly CreateBackendEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the CreateBackendEnvironment API call.

---

##### `CreateBranch`<sup>Required</sup> <a name="CreateBranch" id="@cdk_utils/iam.amplify.AmplifyOperations.property.CreateBranch"></a>

```typescript
public readonly CreateBranch: string[];
```

- *Type:* string[]

IAM actions required for the CreateBranch API call.

---

##### `CreateDeployment`<sup>Required</sup> <a name="CreateDeployment" id="@cdk_utils/iam.amplify.AmplifyOperations.property.CreateDeployment"></a>

```typescript
public readonly CreateDeployment: string[];
```

- *Type:* string[]

IAM actions required for the CreateDeployment API call.

---

##### `CreateDomainAssociation`<sup>Required</sup> <a name="CreateDomainAssociation" id="@cdk_utils/iam.amplify.AmplifyOperations.property.CreateDomainAssociation"></a>

```typescript
public readonly CreateDomainAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateDomainAssociation API call.

---

##### `CreateWebhook`<sup>Required</sup> <a name="CreateWebhook" id="@cdk_utils/iam.amplify.AmplifyOperations.property.CreateWebhook"></a>

```typescript
public readonly CreateWebhook: string[];
```

- *Type:* string[]

IAM actions required for the CreateWebhook API call.

---

##### `DeleteApp`<sup>Required</sup> <a name="DeleteApp" id="@cdk_utils/iam.amplify.AmplifyOperations.property.DeleteApp"></a>

```typescript
public readonly DeleteApp: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApp API call.

---

##### `DeleteBackendEnvironment`<sup>Required</sup> <a name="DeleteBackendEnvironment" id="@cdk_utils/iam.amplify.AmplifyOperations.property.DeleteBackendEnvironment"></a>

```typescript
public readonly DeleteBackendEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBackendEnvironment API call.

---

##### `DeleteBranch`<sup>Required</sup> <a name="DeleteBranch" id="@cdk_utils/iam.amplify.AmplifyOperations.property.DeleteBranch"></a>

```typescript
public readonly DeleteBranch: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBranch API call.

---

##### `DeleteDomainAssociation`<sup>Required</sup> <a name="DeleteDomainAssociation" id="@cdk_utils/iam.amplify.AmplifyOperations.property.DeleteDomainAssociation"></a>

```typescript
public readonly DeleteDomainAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomainAssociation API call.

---

##### `DeleteJob`<sup>Required</sup> <a name="DeleteJob" id="@cdk_utils/iam.amplify.AmplifyOperations.property.DeleteJob"></a>

```typescript
public readonly DeleteJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteJob API call.

---

##### `DeleteWebhook`<sup>Required</sup> <a name="DeleteWebhook" id="@cdk_utils/iam.amplify.AmplifyOperations.property.DeleteWebhook"></a>

```typescript
public readonly DeleteWebhook: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWebhook API call.

---

##### `GenerateAccessLogs`<sup>Required</sup> <a name="GenerateAccessLogs" id="@cdk_utils/iam.amplify.AmplifyOperations.property.GenerateAccessLogs"></a>

```typescript
public readonly GenerateAccessLogs: string[];
```

- *Type:* string[]

IAM actions required for the GenerateAccessLogs API call.

---

##### `ListApps`<sup>Required</sup> <a name="ListApps" id="@cdk_utils/iam.amplify.AmplifyOperations.property.ListApps"></a>

```typescript
public readonly ListApps: string[];
```

- *Type:* string[]

IAM actions required for the ListApps API call.

---

##### `ListArtifacts`<sup>Required</sup> <a name="ListArtifacts" id="@cdk_utils/iam.amplify.AmplifyOperations.property.ListArtifacts"></a>

```typescript
public readonly ListArtifacts: string[];
```

- *Type:* string[]

IAM actions required for the ListArtifacts API call.

---

##### `ListBackendEnvironments`<sup>Required</sup> <a name="ListBackendEnvironments" id="@cdk_utils/iam.amplify.AmplifyOperations.property.ListBackendEnvironments"></a>

```typescript
public readonly ListBackendEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the ListBackendEnvironments API call.

---

##### `ListBranches`<sup>Required</sup> <a name="ListBranches" id="@cdk_utils/iam.amplify.AmplifyOperations.property.ListBranches"></a>

```typescript
public readonly ListBranches: string[];
```

- *Type:* string[]

IAM actions required for the ListBranches API call.

---

##### `ListDomainAssociations`<sup>Required</sup> <a name="ListDomainAssociations" id="@cdk_utils/iam.amplify.AmplifyOperations.property.ListDomainAssociations"></a>

```typescript
public readonly ListDomainAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListDomainAssociations API call.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.amplify.AmplifyOperations.property.ListJobs"></a>

```typescript
public readonly ListJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListJobs API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.amplify.AmplifyOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWebhooks`<sup>Required</sup> <a name="ListWebhooks" id="@cdk_utils/iam.amplify.AmplifyOperations.property.ListWebhooks"></a>

```typescript
public readonly ListWebhooks: string[];
```

- *Type:* string[]

IAM actions required for the ListWebhooks API call.

---

##### `opGetApp`<sup>Required</sup> <a name="opGetApp" id="@cdk_utils/iam.amplify.AmplifyOperations.property.opGetApp"></a>

```typescript
public readonly opGetApp: string[];
```

- *Type:* string[]

IAM actions required for the GetApp API call.

---

##### `opGetArtifactUrl`<sup>Required</sup> <a name="opGetArtifactUrl" id="@cdk_utils/iam.amplify.AmplifyOperations.property.opGetArtifactUrl"></a>

```typescript
public readonly opGetArtifactUrl: string[];
```

- *Type:* string[]

IAM actions required for the GetArtifactUrl API call.

---

##### `opGetBackendEnvironment`<sup>Required</sup> <a name="opGetBackendEnvironment" id="@cdk_utils/iam.amplify.AmplifyOperations.property.opGetBackendEnvironment"></a>

```typescript
public readonly opGetBackendEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the GetBackendEnvironment API call.

---

##### `opGetBranch`<sup>Required</sup> <a name="opGetBranch" id="@cdk_utils/iam.amplify.AmplifyOperations.property.opGetBranch"></a>

```typescript
public readonly opGetBranch: string[];
```

- *Type:* string[]

IAM actions required for the GetBranch API call.

---

##### `opGetDomainAssociation`<sup>Required</sup> <a name="opGetDomainAssociation" id="@cdk_utils/iam.amplify.AmplifyOperations.property.opGetDomainAssociation"></a>

```typescript
public readonly opGetDomainAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetDomainAssociation API call.

---

##### `opGetJob`<sup>Required</sup> <a name="opGetJob" id="@cdk_utils/iam.amplify.AmplifyOperations.property.opGetJob"></a>

```typescript
public readonly opGetJob: string[];
```

- *Type:* string[]

IAM actions required for the GetJob API call.

---

##### `opGetWebhook`<sup>Required</sup> <a name="opGetWebhook" id="@cdk_utils/iam.amplify.AmplifyOperations.property.opGetWebhook"></a>

```typescript
public readonly opGetWebhook: string[];
```

- *Type:* string[]

IAM actions required for the GetWebhook API call.

---

##### `StartDeployment`<sup>Required</sup> <a name="StartDeployment" id="@cdk_utils/iam.amplify.AmplifyOperations.property.StartDeployment"></a>

```typescript
public readonly StartDeployment: string[];
```

- *Type:* string[]

IAM actions required for the StartDeployment API call.

---

##### `StartJob`<sup>Required</sup> <a name="StartJob" id="@cdk_utils/iam.amplify.AmplifyOperations.property.StartJob"></a>

```typescript
public readonly StartJob: string[];
```

- *Type:* string[]

IAM actions required for the StartJob API call.

---

##### `StopJob`<sup>Required</sup> <a name="StopJob" id="@cdk_utils/iam.amplify.AmplifyOperations.property.StopJob"></a>

```typescript
public readonly StopJob: string[];
```

- *Type:* string[]

IAM actions required for the StopJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.amplify.AmplifyOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.amplify.AmplifyOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateApp`<sup>Required</sup> <a name="UpdateApp" id="@cdk_utils/iam.amplify.AmplifyOperations.property.UpdateApp"></a>

```typescript
public readonly UpdateApp: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApp API call.

---

##### `UpdateBranch`<sup>Required</sup> <a name="UpdateBranch" id="@cdk_utils/iam.amplify.AmplifyOperations.property.UpdateBranch"></a>

```typescript
public readonly UpdateBranch: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBranch API call.

---

##### `UpdateDomainAssociation`<sup>Required</sup> <a name="UpdateDomainAssociation" id="@cdk_utils/iam.amplify.AmplifyOperations.property.UpdateDomainAssociation"></a>

```typescript
public readonly UpdateDomainAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDomainAssociation API call.

---

##### `UpdateWebhook`<sup>Required</sup> <a name="UpdateWebhook" id="@cdk_utils/iam.amplify.AmplifyOperations.property.UpdateWebhook"></a>

```typescript
public readonly UpdateWebhook: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWebhook API call.

---

### AmplifyResources <a name="AmplifyResources" id="@cdk_utils/iam.amplify.AmplifyResources"></a>

ARN builders, validators, and parsers for amplify resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.amplify.AmplifyResources.Initializer"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

new amplify.AmplifyResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyResources.apps">apps</a></code> | Builds an ARN for the apps resource. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyResources.branches">branches</a></code> | Builds an ARN for the branches resource. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyResources.domains">domains</a></code> | Builds an ARN for the domains resource. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyResources.isValidAppsArn">isValidAppsArn</a></code> | Validates whether a string is a valid ARN for the apps resource. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyResources.isValidBranchesArn">isValidBranchesArn</a></code> | Validates whether a string is a valid ARN for the branches resource. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyResources.isValidDomainsArn">isValidDomainsArn</a></code> | Validates whether a string is a valid ARN for the domains resource. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyResources.isValidJobsArn">isValidJobsArn</a></code> | Validates whether a string is a valid ARN for the jobs resource. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyResources.isValidWebhooksArn">isValidWebhooksArn</a></code> | Validates whether a string is a valid ARN for the webhooks resource. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyResources.jobs">jobs</a></code> | Builds an ARN for the jobs resource. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyResources.parseAppsArn">parseAppsArn</a></code> | Parses a apps ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyResources.parseBranchesArn">parseBranchesArn</a></code> | Parses a branches ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyResources.parseDomainsArn">parseDomainsArn</a></code> | Parses a domains ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyResources.parseJobsArn">parseJobsArn</a></code> | Parses a jobs ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyResources.parseWebhooksArn">parseWebhooksArn</a></code> | Parses a webhooks ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplify.AmplifyResources.webhooks">webhooks</a></code> | Builds an ARN for the webhooks resource. |

---

##### `apps` <a name="apps" id="@cdk_utils/iam.amplify.AmplifyResources.apps"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

amplify.AmplifyResources.apps(props: AmplifyAppsArnProps)
```

Builds an ARN for the apps resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplify.AmplifyResources.apps.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplify.AmplifyAppsArnProps">AmplifyAppsArnProps</a>

---

##### `branches` <a name="branches" id="@cdk_utils/iam.amplify.AmplifyResources.branches"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

amplify.AmplifyResources.branches(props: AmplifyBranchesArnProps)
```

Builds an ARN for the branches resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplify.AmplifyResources.branches.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplify.AmplifyBranchesArnProps">AmplifyBranchesArnProps</a>

---

##### `domains` <a name="domains" id="@cdk_utils/iam.amplify.AmplifyResources.domains"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

amplify.AmplifyResources.domains(props: AmplifyDomainsArnProps)
```

Builds an ARN for the domains resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplify.AmplifyResources.domains.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplify.AmplifyDomainsArnProps">AmplifyDomainsArnProps</a>

---

##### `isValidAppsArn` <a name="isValidAppsArn" id="@cdk_utils/iam.amplify.AmplifyResources.isValidAppsArn"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

amplify.AmplifyResources.isValidAppsArn(arn: string)
```

Validates whether a string is a valid ARN for the apps resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplify.AmplifyResources.isValidAppsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBranchesArn` <a name="isValidBranchesArn" id="@cdk_utils/iam.amplify.AmplifyResources.isValidBranchesArn"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

amplify.AmplifyResources.isValidBranchesArn(arn: string)
```

Validates whether a string is a valid ARN for the branches resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplify.AmplifyResources.isValidBranchesArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDomainsArn` <a name="isValidDomainsArn" id="@cdk_utils/iam.amplify.AmplifyResources.isValidDomainsArn"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

amplify.AmplifyResources.isValidDomainsArn(arn: string)
```

Validates whether a string is a valid ARN for the domains resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplify.AmplifyResources.isValidDomainsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobsArn` <a name="isValidJobsArn" id="@cdk_utils/iam.amplify.AmplifyResources.isValidJobsArn"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

amplify.AmplifyResources.isValidJobsArn(arn: string)
```

Validates whether a string is a valid ARN for the jobs resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplify.AmplifyResources.isValidJobsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWebhooksArn` <a name="isValidWebhooksArn" id="@cdk_utils/iam.amplify.AmplifyResources.isValidWebhooksArn"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

amplify.AmplifyResources.isValidWebhooksArn(arn: string)
```

Validates whether a string is a valid ARN for the webhooks resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplify.AmplifyResources.isValidWebhooksArn.parameter.arn"></a>

- *Type:* string

---

##### `jobs` <a name="jobs" id="@cdk_utils/iam.amplify.AmplifyResources.jobs"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

amplify.AmplifyResources.jobs(props: AmplifyJobsArnProps)
```

Builds an ARN for the jobs resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplify.AmplifyResources.jobs.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplify.AmplifyJobsArnProps">AmplifyJobsArnProps</a>

---

##### `parseAppsArn` <a name="parseAppsArn" id="@cdk_utils/iam.amplify.AmplifyResources.parseAppsArn"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

amplify.AmplifyResources.parseAppsArn(arn: string)
```

Parses a apps ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplify.AmplifyResources.parseAppsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBranchesArn` <a name="parseBranchesArn" id="@cdk_utils/iam.amplify.AmplifyResources.parseBranchesArn"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

amplify.AmplifyResources.parseBranchesArn(arn: string)
```

Parses a branches ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplify.AmplifyResources.parseBranchesArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainsArn` <a name="parseDomainsArn" id="@cdk_utils/iam.amplify.AmplifyResources.parseDomainsArn"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

amplify.AmplifyResources.parseDomainsArn(arn: string)
```

Parses a domains ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplify.AmplifyResources.parseDomainsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobsArn` <a name="parseJobsArn" id="@cdk_utils/iam.amplify.AmplifyResources.parseJobsArn"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

amplify.AmplifyResources.parseJobsArn(arn: string)
```

Parses a jobs ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplify.AmplifyResources.parseJobsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWebhooksArn` <a name="parseWebhooksArn" id="@cdk_utils/iam.amplify.AmplifyResources.parseWebhooksArn"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

amplify.AmplifyResources.parseWebhooksArn(arn: string)
```

Parses a webhooks ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplify.AmplifyResources.parseWebhooksArn.parameter.arn"></a>

- *Type:* string

---

##### `webhooks` <a name="webhooks" id="@cdk_utils/iam.amplify.AmplifyResources.webhooks"></a>

```typescript
import { amplify } from '@cdk_utils/iam'

amplify.AmplifyResources.webhooks(props: AmplifyWebhooksArnProps)
```

Builds an ARN for the webhooks resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplify.AmplifyResources.webhooks.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplify.AmplifyWebhooksArnProps">AmplifyWebhooksArnProps</a>

---




