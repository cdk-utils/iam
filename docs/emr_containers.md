# `emr_containers` Submodule <a name="`emr_containers` Submodule" id="@cdk_utils/iam.emr_containers"></a>


## Structs <a name="Structs" id="Structs"></a>

### EmrContainersJobRunArnComponents <a name="EmrContainersJobRunArnComponents" id="@cdk_utils/iam.emr_containers.EmrContainersJobRunArnComponents"></a>

Parsed components of a jobRun ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.emr_containers.EmrContainersJobRunArnComponents.Initializer"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

const emrContainersJobRunArnComponents: emr_containers.EmrContainersJobRunArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersJobRunArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersJobRunArnComponents.property.jobRunId">jobRunId</a></code> | <code>string</code> | The JobRunId component. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersJobRunArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersJobRunArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersJobRunArnComponents.property.virtualClusterId">virtualClusterId</a></code> | <code>string</code> | The VirtualClusterId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.emr_containers.EmrContainersJobRunArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobRunId`<sup>Required</sup> <a name="jobRunId" id="@cdk_utils/iam.emr_containers.EmrContainersJobRunArnComponents.property.jobRunId"></a>

```typescript
public readonly jobRunId: string;
```

- *Type:* string

The JobRunId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.emr_containers.EmrContainersJobRunArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.emr_containers.EmrContainersJobRunArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `virtualClusterId`<sup>Required</sup> <a name="virtualClusterId" id="@cdk_utils/iam.emr_containers.EmrContainersJobRunArnComponents.property.virtualClusterId"></a>

```typescript
public readonly virtualClusterId: string;
```

- *Type:* string

The VirtualClusterId component.

---

### EmrContainersJobRunArnProps <a name="EmrContainersJobRunArnProps" id="@cdk_utils/iam.emr_containers.EmrContainersJobRunArnProps"></a>

Properties for building a jobRun ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.emr_containers.EmrContainersJobRunArnProps.Initializer"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

const emrContainersJobRunArnProps: emr_containers.EmrContainersJobRunArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersJobRunArnProps.property.jobRunId">jobRunId</a></code> | <code>string</code> | The JobRunId component of the ARN. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersJobRunArnProps.property.virtualClusterId">virtualClusterId</a></code> | <code>string</code> | The VirtualClusterId component of the ARN. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersJobRunArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersJobRunArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersJobRunArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobRunId`<sup>Required</sup> <a name="jobRunId" id="@cdk_utils/iam.emr_containers.EmrContainersJobRunArnProps.property.jobRunId"></a>

```typescript
public readonly jobRunId: string;
```

- *Type:* string

The JobRunId component of the ARN.

---

##### `virtualClusterId`<sup>Required</sup> <a name="virtualClusterId" id="@cdk_utils/iam.emr_containers.EmrContainersJobRunArnProps.property.virtualClusterId"></a>

```typescript
public readonly virtualClusterId: string;
```

- *Type:* string

The VirtualClusterId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.emr_containers.EmrContainersJobRunArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.emr_containers.EmrContainersJobRunArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.emr_containers.EmrContainersJobRunArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EmrContainersJobTemplateArnComponents <a name="EmrContainersJobTemplateArnComponents" id="@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnComponents"></a>

Parsed components of a jobTemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnComponents.Initializer"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

const emrContainersJobTemplateArnComponents: emr_containers.EmrContainersJobTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnComponents.property.jobTemplateId">jobTemplateId</a></code> | <code>string</code> | The JobTemplateId component. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobTemplateId`<sup>Required</sup> <a name="jobTemplateId" id="@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnComponents.property.jobTemplateId"></a>

```typescript
public readonly jobTemplateId: string;
```

- *Type:* string

The JobTemplateId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EmrContainersJobTemplateArnProps <a name="EmrContainersJobTemplateArnProps" id="@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnProps"></a>

Properties for building a jobTemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnProps.Initializer"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

const emrContainersJobTemplateArnProps: emr_containers.EmrContainersJobTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnProps.property.jobTemplateId">jobTemplateId</a></code> | <code>string</code> | The JobTemplateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobTemplateId`<sup>Required</sup> <a name="jobTemplateId" id="@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnProps.property.jobTemplateId"></a>

```typescript
public readonly jobTemplateId: string;
```

- *Type:* string

The JobTemplateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EmrContainersManagedEndpointArnComponents <a name="EmrContainersManagedEndpointArnComponents" id="@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnComponents"></a>

Parsed components of a managedEndpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnComponents.Initializer"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

const emrContainersManagedEndpointArnComponents: emr_containers.EmrContainersManagedEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnComponents.property.endpointId">endpointId</a></code> | <code>string</code> | The EndpointId component. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnComponents.property.virtualClusterId">virtualClusterId</a></code> | <code>string</code> | The VirtualClusterId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnComponents.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

The EndpointId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `virtualClusterId`<sup>Required</sup> <a name="virtualClusterId" id="@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnComponents.property.virtualClusterId"></a>

```typescript
public readonly virtualClusterId: string;
```

- *Type:* string

The VirtualClusterId component.

---

### EmrContainersManagedEndpointArnProps <a name="EmrContainersManagedEndpointArnProps" id="@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnProps"></a>

Properties for building a managedEndpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnProps.Initializer"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

const emrContainersManagedEndpointArnProps: emr_containers.EmrContainersManagedEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnProps.property.endpointId">endpointId</a></code> | <code>string</code> | The EndpointId component of the ARN. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnProps.property.virtualClusterId">virtualClusterId</a></code> | <code>string</code> | The VirtualClusterId component of the ARN. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnProps.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

The EndpointId component of the ARN.

---

##### `virtualClusterId`<sup>Required</sup> <a name="virtualClusterId" id="@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnProps.property.virtualClusterId"></a>

```typescript
public readonly virtualClusterId: string;
```

- *Type:* string

The VirtualClusterId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EmrContainersSecurityConfigurationArnComponents <a name="EmrContainersSecurityConfigurationArnComponents" id="@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnComponents"></a>

Parsed components of a securityConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnComponents.Initializer"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

const emrContainersSecurityConfigurationArnComponents: emr_containers.EmrContainersSecurityConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnComponents.property.securityConfigurationId">securityConfigurationId</a></code> | <code>string</code> | The SecurityConfigurationId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `securityConfigurationId`<sup>Required</sup> <a name="securityConfigurationId" id="@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnComponents.property.securityConfigurationId"></a>

```typescript
public readonly securityConfigurationId: string;
```

- *Type:* string

The SecurityConfigurationId component.

---

### EmrContainersSecurityConfigurationArnProps <a name="EmrContainersSecurityConfigurationArnProps" id="@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnProps"></a>

Properties for building a securityConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnProps.Initializer"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

const emrContainersSecurityConfigurationArnProps: emr_containers.EmrContainersSecurityConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnProps.property.securityConfigurationId">securityConfigurationId</a></code> | <code>string</code> | The SecurityConfigurationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `securityConfigurationId`<sup>Required</sup> <a name="securityConfigurationId" id="@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnProps.property.securityConfigurationId"></a>

```typescript
public readonly securityConfigurationId: string;
```

- *Type:* string

The SecurityConfigurationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EmrContainersVirtualClusterArnComponents <a name="EmrContainersVirtualClusterArnComponents" id="@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnComponents"></a>

Parsed components of a virtualCluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnComponents.Initializer"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

const emrContainersVirtualClusterArnComponents: emr_containers.EmrContainersVirtualClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnComponents.property.virtualClusterId">virtualClusterId</a></code> | <code>string</code> | The VirtualClusterId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `virtualClusterId`<sup>Required</sup> <a name="virtualClusterId" id="@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnComponents.property.virtualClusterId"></a>

```typescript
public readonly virtualClusterId: string;
```

- *Type:* string

The VirtualClusterId component.

---

### EmrContainersVirtualClusterArnProps <a name="EmrContainersVirtualClusterArnProps" id="@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnProps"></a>

Properties for building a virtualCluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnProps.Initializer"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

const emrContainersVirtualClusterArnProps: emr_containers.EmrContainersVirtualClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnProps.property.virtualClusterId">virtualClusterId</a></code> | <code>string</code> | The VirtualClusterId component of the ARN. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `virtualClusterId`<sup>Required</sup> <a name="virtualClusterId" id="@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnProps.property.virtualClusterId"></a>

```typescript
public readonly virtualClusterId: string;
```

- *Type:* string

The VirtualClusterId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### EmrContainersActions <a name="EmrContainersActions" id="@cdk_utils/iam.emr_containers.EmrContainersActions"></a>

IAM action constants for the emr-containers service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.emr_containers.EmrContainersActions.Initializer"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

new emr_containers.EmrContainersActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.actionGetManagedEndpointSessionCredentials">actionGetManagedEndpointSessionCredentials</a></code> | <code>string</code> | [Write] emr-containers:GetManagedEndpointSessionCredentials. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.CancelJobRun">CancelJobRun</a></code> | <code>string</code> | [Write] emr-containers:CancelJobRun. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.CreateCertificate">CreateCertificate</a></code> | <code>string</code> | [Write] emr-containers:CreateCertificate. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.CreateJobTemplate">CreateJobTemplate</a></code> | <code>string</code> | [Write] emr-containers:CreateJobTemplate. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.CreateManagedEndpoint">CreateManagedEndpoint</a></code> | <code>string</code> | [Write] emr-containers:CreateManagedEndpoint. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.CreateSecurityConfiguration">CreateSecurityConfiguration</a></code> | <code>string</code> | [Write] emr-containers:CreateSecurityConfiguration. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.CreateVirtualCluster">CreateVirtualCluster</a></code> | <code>string</code> | [Write] emr-containers:CreateVirtualCluster. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.DeleteJobTemplate">DeleteJobTemplate</a></code> | <code>string</code> | [Write] emr-containers:DeleteJobTemplate. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.DeleteManagedEndpoint">DeleteManagedEndpoint</a></code> | <code>string</code> | [Write] emr-containers:DeleteManagedEndpoint. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.DeleteSecurityConfiguration">DeleteSecurityConfiguration</a></code> | <code>string</code> | [Write] emr-containers:DeleteSecurityConfiguration. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.DeleteVirtualCluster">DeleteVirtualCluster</a></code> | <code>string</code> | [Write] emr-containers:DeleteVirtualCluster. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.DescribeJobRun">DescribeJobRun</a></code> | <code>string</code> | [Read] emr-containers:DescribeJobRun. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.DescribeJobTemplate">DescribeJobTemplate</a></code> | <code>string</code> | [Read] emr-containers:DescribeJobTemplate. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.DescribeManagedEndpoint">DescribeManagedEndpoint</a></code> | <code>string</code> | [Read] emr-containers:DescribeManagedEndpoint. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.DescribeSecurityConfiguration">DescribeSecurityConfiguration</a></code> | <code>string</code> | [Read] emr-containers:DescribeSecurityConfiguration. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.DescribeVirtualCluster">DescribeVirtualCluster</a></code> | <code>string</code> | [Read] emr-containers:DescribeVirtualCluster. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.ListJobRuns">ListJobRuns</a></code> | <code>string</code> | [List] emr-containers:ListJobRuns. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.ListJobTemplates">ListJobTemplates</a></code> | <code>string</code> | [List] emr-containers:ListJobTemplates. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.ListManagedEndpoints">ListManagedEndpoints</a></code> | <code>string</code> | [List] emr-containers:ListManagedEndpoints. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.ListSecurityConfigurations">ListSecurityConfigurations</a></code> | <code>string</code> | [List] emr-containers:ListSecurityConfigurations. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] emr-containers:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.ListVirtualClusters">ListVirtualClusters</a></code> | <code>string</code> | [List] emr-containers:ListVirtualClusters. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.StartJobRun">StartJobRun</a></code> | <code>string</code> | [Write] emr-containers:StartJobRun. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] emr-containers:TagResource. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] emr-containers:UntagResource. |

---

##### `actionGetManagedEndpointSessionCredentials`<sup>Required</sup> <a name="actionGetManagedEndpointSessionCredentials" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.actionGetManagedEndpointSessionCredentials"></a>

```typescript
public readonly actionGetManagedEndpointSessionCredentials: string;
```

- *Type:* string

[Write] emr-containers:GetManagedEndpointSessionCredentials.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelJobRun`<sup>Required</sup> <a name="CancelJobRun" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.CancelJobRun"></a>

```typescript
public readonly CancelJobRun: string;
```

- *Type:* string

[Write] emr-containers:CancelJobRun.

---

##### `CreateCertificate`<sup>Required</sup> <a name="CreateCertificate" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.CreateCertificate"></a>

```typescript
public readonly CreateCertificate: string;
```

- *Type:* string

[Write] emr-containers:CreateCertificate.

---

##### `CreateJobTemplate`<sup>Required</sup> <a name="CreateJobTemplate" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.CreateJobTemplate"></a>

```typescript
public readonly CreateJobTemplate: string;
```

- *Type:* string

[Write] emr-containers:CreateJobTemplate.

---

##### `CreateManagedEndpoint`<sup>Required</sup> <a name="CreateManagedEndpoint" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.CreateManagedEndpoint"></a>

```typescript
public readonly CreateManagedEndpoint: string;
```

- *Type:* string

[Write] emr-containers:CreateManagedEndpoint.

---

##### `CreateSecurityConfiguration`<sup>Required</sup> <a name="CreateSecurityConfiguration" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.CreateSecurityConfiguration"></a>

```typescript
public readonly CreateSecurityConfiguration: string;
```

- *Type:* string

[Write] emr-containers:CreateSecurityConfiguration.

---

##### `CreateVirtualCluster`<sup>Required</sup> <a name="CreateVirtualCluster" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.CreateVirtualCluster"></a>

```typescript
public readonly CreateVirtualCluster: string;
```

- *Type:* string

[Write] emr-containers:CreateVirtualCluster.

---

##### `DeleteJobTemplate`<sup>Required</sup> <a name="DeleteJobTemplate" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.DeleteJobTemplate"></a>

```typescript
public readonly DeleteJobTemplate: string;
```

- *Type:* string

[Write] emr-containers:DeleteJobTemplate.

---

##### `DeleteManagedEndpoint`<sup>Required</sup> <a name="DeleteManagedEndpoint" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.DeleteManagedEndpoint"></a>

```typescript
public readonly DeleteManagedEndpoint: string;
```

- *Type:* string

[Write] emr-containers:DeleteManagedEndpoint.

---

##### `DeleteSecurityConfiguration`<sup>Required</sup> <a name="DeleteSecurityConfiguration" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.DeleteSecurityConfiguration"></a>

```typescript
public readonly DeleteSecurityConfiguration: string;
```

- *Type:* string

[Write] emr-containers:DeleteSecurityConfiguration.

---

##### `DeleteVirtualCluster`<sup>Required</sup> <a name="DeleteVirtualCluster" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.DeleteVirtualCluster"></a>

```typescript
public readonly DeleteVirtualCluster: string;
```

- *Type:* string

[Write] emr-containers:DeleteVirtualCluster.

---

##### `DescribeJobRun`<sup>Required</sup> <a name="DescribeJobRun" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.DescribeJobRun"></a>

```typescript
public readonly DescribeJobRun: string;
```

- *Type:* string

[Read] emr-containers:DescribeJobRun.

---

##### `DescribeJobTemplate`<sup>Required</sup> <a name="DescribeJobTemplate" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.DescribeJobTemplate"></a>

```typescript
public readonly DescribeJobTemplate: string;
```

- *Type:* string

[Read] emr-containers:DescribeJobTemplate.

---

##### `DescribeManagedEndpoint`<sup>Required</sup> <a name="DescribeManagedEndpoint" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.DescribeManagedEndpoint"></a>

```typescript
public readonly DescribeManagedEndpoint: string;
```

- *Type:* string

[Read] emr-containers:DescribeManagedEndpoint.

---

##### `DescribeSecurityConfiguration`<sup>Required</sup> <a name="DescribeSecurityConfiguration" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.DescribeSecurityConfiguration"></a>

```typescript
public readonly DescribeSecurityConfiguration: string;
```

- *Type:* string

[Read] emr-containers:DescribeSecurityConfiguration.

---

##### `DescribeVirtualCluster`<sup>Required</sup> <a name="DescribeVirtualCluster" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.DescribeVirtualCluster"></a>

```typescript
public readonly DescribeVirtualCluster: string;
```

- *Type:* string

[Read] emr-containers:DescribeVirtualCluster.

---

##### `ListJobRuns`<sup>Required</sup> <a name="ListJobRuns" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.ListJobRuns"></a>

```typescript
public readonly ListJobRuns: string;
```

- *Type:* string

[List] emr-containers:ListJobRuns.

---

##### `ListJobTemplates`<sup>Required</sup> <a name="ListJobTemplates" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.ListJobTemplates"></a>

```typescript
public readonly ListJobTemplates: string;
```

- *Type:* string

[List] emr-containers:ListJobTemplates.

---

##### `ListManagedEndpoints`<sup>Required</sup> <a name="ListManagedEndpoints" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.ListManagedEndpoints"></a>

```typescript
public readonly ListManagedEndpoints: string;
```

- *Type:* string

[List] emr-containers:ListManagedEndpoints.

---

##### `ListSecurityConfigurations`<sup>Required</sup> <a name="ListSecurityConfigurations" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.ListSecurityConfigurations"></a>

```typescript
public readonly ListSecurityConfigurations: string;
```

- *Type:* string

[List] emr-containers:ListSecurityConfigurations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] emr-containers:ListTagsForResource.

---

##### `ListVirtualClusters`<sup>Required</sup> <a name="ListVirtualClusters" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.ListVirtualClusters"></a>

```typescript
public readonly ListVirtualClusters: string;
```

- *Type:* string

[List] emr-containers:ListVirtualClusters.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartJobRun`<sup>Required</sup> <a name="StartJobRun" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.StartJobRun"></a>

```typescript
public readonly StartJobRun: string;
```

- *Type:* string

[Write] emr-containers:StartJobRun.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] emr-containers:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.emr_containers.EmrContainersActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] emr-containers:UntagResource.

---

### EmrContainersConditions <a name="EmrContainersConditions" id="@cdk_utils/iam.emr_containers.EmrContainersConditions"></a>

Condition key constants and builders for emr-containers.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.Initializer"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

new emr_containers.EmrContainersConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersConditions.executionRoleARN">executionRoleARN</a></code> | Generates a condition block for `emr-containers:ExecutionRoleArn`. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersConditions.jobTemplateARN">jobTemplateARN</a></code> | Generates a condition block for `emr-containers:JobTemplateArn`. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `executionRoleARN` <a name="executionRoleARN" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.executionRoleARN"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersConditions.executionRoleARN(value: string)
```

Generates a condition block for `emr-containers:ExecutionRoleArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.executionRoleARN.parameter.value"></a>

- *Type:* string

---

##### `jobTemplateARN` <a name="jobTemplateARN" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.jobTemplateARN"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersConditions.jobTemplateARN(value: string)
```

Generates a condition block for `emr-containers:JobTemplateArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.jobTemplateARN.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.requestTag"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.resourceTag"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.tagKeys"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersConditions.property.CreateJobTemplateConditionKeys">CreateJobTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateJobTemplate action. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersConditions.property.CreateManagedEndpointConditionKeys">CreateManagedEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateManagedEndpoint action. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersConditions.property.CreateSecurityConfigurationConditionKeys">CreateSecurityConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSecurityConfiguration action. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersConditions.property.CreateVirtualClusterConditionKeys">CreateVirtualClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVirtualCluster action. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersConditions.property.EXECUTION_ROLE_ARN">EXECUTION_ROLE_ARN</a></code> | <code>string</code> | Condition key: emr-containers:ExecutionRoleArn (ARN). |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersConditions.property.JOB_TEMPLATE_ARN">JOB_TEMPLATE_ARN</a></code> | <code>string</code> | Condition key: emr-containers:JobTemplateArn (ARN). |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersConditions.property.StartJobRunConditionKeys">StartJobRunConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartJobRun action. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateJobTemplateConditionKeys`<sup>Required</sup> <a name="CreateJobTemplateConditionKeys" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.property.CreateJobTemplateConditionKeys"></a>

```typescript
public readonly CreateJobTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateJobTemplate action.

---

##### `CreateManagedEndpointConditionKeys`<sup>Required</sup> <a name="CreateManagedEndpointConditionKeys" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.property.CreateManagedEndpointConditionKeys"></a>

```typescript
public readonly CreateManagedEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateManagedEndpoint action.

---

##### `CreateSecurityConfigurationConditionKeys`<sup>Required</sup> <a name="CreateSecurityConfigurationConditionKeys" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.property.CreateSecurityConfigurationConditionKeys"></a>

```typescript
public readonly CreateSecurityConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSecurityConfiguration action.

---

##### `CreateVirtualClusterConditionKeys`<sup>Required</sup> <a name="CreateVirtualClusterConditionKeys" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.property.CreateVirtualClusterConditionKeys"></a>

```typescript
public readonly CreateVirtualClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVirtualCluster action.

---

##### `EXECUTION_ROLE_ARN`<sup>Required</sup> <a name="EXECUTION_ROLE_ARN" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.property.EXECUTION_ROLE_ARN"></a>

```typescript
public readonly EXECUTION_ROLE_ARN: string;
```

- *Type:* string

Condition key: emr-containers:ExecutionRoleArn (ARN).

---

##### `JOB_TEMPLATE_ARN`<sup>Required</sup> <a name="JOB_TEMPLATE_ARN" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.property.JOB_TEMPLATE_ARN"></a>

```typescript
public readonly JOB_TEMPLATE_ARN: string;
```

- *Type:* string

Condition key: emr-containers:JobTemplateArn (ARN).

---

##### `StartJobRunConditionKeys`<sup>Required</sup> <a name="StartJobRunConditionKeys" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.property.StartJobRunConditionKeys"></a>

```typescript
public readonly StartJobRunConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartJobRun action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.emr_containers.EmrContainersConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### EmrContainersOperations <a name="EmrContainersOperations" id="@cdk_utils/iam.emr_containers.EmrContainersOperations"></a>

API operation to required IAM actions mapping for emr-containers.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.Initializer"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

new emr_containers.EmrContainersOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.CancelJobRun">CancelJobRun</a></code> | <code>string[]</code> | IAM actions required for the CancelJobRun API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.CreateJobTemplate">CreateJobTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateJobTemplate API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.CreateManagedEndpoint">CreateManagedEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateManagedEndpoint API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.CreateSecurityConfiguration">CreateSecurityConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateSecurityConfiguration API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.CreateVirtualCluster">CreateVirtualCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateVirtualCluster API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.DeleteJobTemplate">DeleteJobTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteJobTemplate API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.DeleteManagedEndpoint">DeleteManagedEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteManagedEndpoint API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.DeleteSecurityConfiguration">DeleteSecurityConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteSecurityConfiguration API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.DeleteVirtualCluster">DeleteVirtualCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteVirtualCluster API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.DescribeJobRun">DescribeJobRun</a></code> | <code>string[]</code> | IAM actions required for the DescribeJobRun API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.DescribeJobTemplate">DescribeJobTemplate</a></code> | <code>string[]</code> | IAM actions required for the DescribeJobTemplate API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.DescribeManagedEndpoint">DescribeManagedEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DescribeManagedEndpoint API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.DescribeSecurityConfiguration">DescribeSecurityConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeSecurityConfiguration API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.DescribeVirtualCluster">DescribeVirtualCluster</a></code> | <code>string[]</code> | IAM actions required for the DescribeVirtualCluster API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.ListJobRuns">ListJobRuns</a></code> | <code>string[]</code> | IAM actions required for the ListJobRuns API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.ListJobTemplates">ListJobTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListJobTemplates API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.ListManagedEndpoints">ListManagedEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListManagedEndpoints API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.ListSecurityConfigurations">ListSecurityConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListSecurityConfigurations API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.ListVirtualClusters">ListVirtualClusters</a></code> | <code>string[]</code> | IAM actions required for the ListVirtualClusters API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.opGetManagedEndpointSessionCredentials">opGetManagedEndpointSessionCredentials</a></code> | <code>string[]</code> | IAM actions required for the GetManagedEndpointSessionCredentials API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.StartJobRun">StartJobRun</a></code> | <code>string[]</code> | IAM actions required for the StartJobRun API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersOperations.property.UpdateVirtualCluster">UpdateVirtualCluster</a></code> | <code>string[]</code> | IAM actions required for the UpdateVirtualCluster API call. |

---

##### `CancelJobRun`<sup>Required</sup> <a name="CancelJobRun" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.CancelJobRun"></a>

```typescript
public readonly CancelJobRun: string[];
```

- *Type:* string[]

IAM actions required for the CancelJobRun API call.

---

##### `CreateJobTemplate`<sup>Required</sup> <a name="CreateJobTemplate" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.CreateJobTemplate"></a>

```typescript
public readonly CreateJobTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateJobTemplate API call.

---

##### `CreateManagedEndpoint`<sup>Required</sup> <a name="CreateManagedEndpoint" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.CreateManagedEndpoint"></a>

```typescript
public readonly CreateManagedEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateManagedEndpoint API call.

---

##### `CreateSecurityConfiguration`<sup>Required</sup> <a name="CreateSecurityConfiguration" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.CreateSecurityConfiguration"></a>

```typescript
public readonly CreateSecurityConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateSecurityConfiguration API call.

---

##### `CreateVirtualCluster`<sup>Required</sup> <a name="CreateVirtualCluster" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.CreateVirtualCluster"></a>

```typescript
public readonly CreateVirtualCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateVirtualCluster API call.

---

##### `DeleteJobTemplate`<sup>Required</sup> <a name="DeleteJobTemplate" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.DeleteJobTemplate"></a>

```typescript
public readonly DeleteJobTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteJobTemplate API call.

---

##### `DeleteManagedEndpoint`<sup>Required</sup> <a name="DeleteManagedEndpoint" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.DeleteManagedEndpoint"></a>

```typescript
public readonly DeleteManagedEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteManagedEndpoint API call.

---

##### `DeleteSecurityConfiguration`<sup>Required</sup> <a name="DeleteSecurityConfiguration" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.DeleteSecurityConfiguration"></a>

```typescript
public readonly DeleteSecurityConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSecurityConfiguration API call.

---

##### `DeleteVirtualCluster`<sup>Required</sup> <a name="DeleteVirtualCluster" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.DeleteVirtualCluster"></a>

```typescript
public readonly DeleteVirtualCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVirtualCluster API call.

---

##### `DescribeJobRun`<sup>Required</sup> <a name="DescribeJobRun" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.DescribeJobRun"></a>

```typescript
public readonly DescribeJobRun: string[];
```

- *Type:* string[]

IAM actions required for the DescribeJobRun API call.

---

##### `DescribeJobTemplate`<sup>Required</sup> <a name="DescribeJobTemplate" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.DescribeJobTemplate"></a>

```typescript
public readonly DescribeJobTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DescribeJobTemplate API call.

---

##### `DescribeManagedEndpoint`<sup>Required</sup> <a name="DescribeManagedEndpoint" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.DescribeManagedEndpoint"></a>

```typescript
public readonly DescribeManagedEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DescribeManagedEndpoint API call.

---

##### `DescribeSecurityConfiguration`<sup>Required</sup> <a name="DescribeSecurityConfiguration" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.DescribeSecurityConfiguration"></a>

```typescript
public readonly DescribeSecurityConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSecurityConfiguration API call.

---

##### `DescribeVirtualCluster`<sup>Required</sup> <a name="DescribeVirtualCluster" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.DescribeVirtualCluster"></a>

```typescript
public readonly DescribeVirtualCluster: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVirtualCluster API call.

---

##### `ListJobRuns`<sup>Required</sup> <a name="ListJobRuns" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.ListJobRuns"></a>

```typescript
public readonly ListJobRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListJobRuns API call.

---

##### `ListJobTemplates`<sup>Required</sup> <a name="ListJobTemplates" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.ListJobTemplates"></a>

```typescript
public readonly ListJobTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListJobTemplates API call.

---

##### `ListManagedEndpoints`<sup>Required</sup> <a name="ListManagedEndpoints" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.ListManagedEndpoints"></a>

```typescript
public readonly ListManagedEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedEndpoints API call.

---

##### `ListSecurityConfigurations`<sup>Required</sup> <a name="ListSecurityConfigurations" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.ListSecurityConfigurations"></a>

```typescript
public readonly ListSecurityConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListSecurityConfigurations API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListVirtualClusters`<sup>Required</sup> <a name="ListVirtualClusters" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.ListVirtualClusters"></a>

```typescript
public readonly ListVirtualClusters: string[];
```

- *Type:* string[]

IAM actions required for the ListVirtualClusters API call.

---

##### `opGetManagedEndpointSessionCredentials`<sup>Required</sup> <a name="opGetManagedEndpointSessionCredentials" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.opGetManagedEndpointSessionCredentials"></a>

```typescript
public readonly opGetManagedEndpointSessionCredentials: string[];
```

- *Type:* string[]

IAM actions required for the GetManagedEndpointSessionCredentials API call.

---

##### `StartJobRun`<sup>Required</sup> <a name="StartJobRun" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.StartJobRun"></a>

```typescript
public readonly StartJobRun: string[];
```

- *Type:* string[]

IAM actions required for the StartJobRun API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateVirtualCluster`<sup>Required</sup> <a name="UpdateVirtualCluster" id="@cdk_utils/iam.emr_containers.EmrContainersOperations.property.UpdateVirtualCluster"></a>

```typescript
public readonly UpdateVirtualCluster: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVirtualCluster API call.

---

### EmrContainersResources <a name="EmrContainersResources" id="@cdk_utils/iam.emr_containers.EmrContainersResources"></a>

ARN builders, validators, and parsers for emr-containers resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.emr_containers.EmrContainersResources.Initializer"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

new emr_containers.EmrContainersResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersResources.isValidJobRunArn">isValidJobRunArn</a></code> | Validates whether a string is a valid ARN for the jobRun resource. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersResources.isValidJobTemplateArn">isValidJobTemplateArn</a></code> | Validates whether a string is a valid ARN for the jobTemplate resource. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersResources.isValidManagedEndpointArn">isValidManagedEndpointArn</a></code> | Validates whether a string is a valid ARN for the managedEndpoint resource. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersResources.isValidSecurityConfigurationArn">isValidSecurityConfigurationArn</a></code> | Validates whether a string is a valid ARN for the securityConfiguration resource. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersResources.isValidVirtualClusterArn">isValidVirtualClusterArn</a></code> | Validates whether a string is a valid ARN for the virtualCluster resource. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersResources.jobRun">jobRun</a></code> | Builds an ARN for the jobRun resource. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersResources.jobTemplate">jobTemplate</a></code> | Builds an ARN for the jobTemplate resource. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersResources.managedEndpoint">managedEndpoint</a></code> | Builds an ARN for the managedEndpoint resource. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersResources.parseJobRunArn">parseJobRunArn</a></code> | Parses a jobRun ARN into its components. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersResources.parseJobTemplateArn">parseJobTemplateArn</a></code> | Parses a jobTemplate ARN into its components. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersResources.parseManagedEndpointArn">parseManagedEndpointArn</a></code> | Parses a managedEndpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersResources.parseSecurityConfigurationArn">parseSecurityConfigurationArn</a></code> | Parses a securityConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersResources.parseVirtualClusterArn">parseVirtualClusterArn</a></code> | Parses a virtualCluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersResources.securityConfiguration">securityConfiguration</a></code> | Builds an ARN for the securityConfiguration resource. |
| <code><a href="#@cdk_utils/iam.emr_containers.EmrContainersResources.virtualCluster">virtualCluster</a></code> | Builds an ARN for the virtualCluster resource. |

---

##### `isValidJobRunArn` <a name="isValidJobRunArn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.isValidJobRunArn"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersResources.isValidJobRunArn(arn: string)
```

Validates whether a string is a valid ARN for the jobRun resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.isValidJobRunArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobTemplateArn` <a name="isValidJobTemplateArn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.isValidJobTemplateArn"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersResources.isValidJobTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the jobTemplate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.isValidJobTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidManagedEndpointArn` <a name="isValidManagedEndpointArn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.isValidManagedEndpointArn"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersResources.isValidManagedEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the managedEndpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.isValidManagedEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSecurityConfigurationArn` <a name="isValidSecurityConfigurationArn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.isValidSecurityConfigurationArn"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersResources.isValidSecurityConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the securityConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.isValidSecurityConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVirtualClusterArn` <a name="isValidVirtualClusterArn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.isValidVirtualClusterArn"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersResources.isValidVirtualClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the virtualCluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.isValidVirtualClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `jobRun` <a name="jobRun" id="@cdk_utils/iam.emr_containers.EmrContainersResources.jobRun"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersResources.jobRun(props: EmrContainersJobRunArnProps)
```

Builds an ARN for the jobRun resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.emr_containers.EmrContainersResources.jobRun.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.emr_containers.EmrContainersJobRunArnProps">EmrContainersJobRunArnProps</a>

---

##### `jobTemplate` <a name="jobTemplate" id="@cdk_utils/iam.emr_containers.EmrContainersResources.jobTemplate"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersResources.jobTemplate(props: EmrContainersJobTemplateArnProps)
```

Builds an ARN for the jobTemplate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.emr_containers.EmrContainersResources.jobTemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.emr_containers.EmrContainersJobTemplateArnProps">EmrContainersJobTemplateArnProps</a>

---

##### `managedEndpoint` <a name="managedEndpoint" id="@cdk_utils/iam.emr_containers.EmrContainersResources.managedEndpoint"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersResources.managedEndpoint(props: EmrContainersManagedEndpointArnProps)
```

Builds an ARN for the managedEndpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.emr_containers.EmrContainersResources.managedEndpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.emr_containers.EmrContainersManagedEndpointArnProps">EmrContainersManagedEndpointArnProps</a>

---

##### `parseJobRunArn` <a name="parseJobRunArn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.parseJobRunArn"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersResources.parseJobRunArn(arn: string)
```

Parses a jobRun ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.parseJobRunArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobTemplateArn` <a name="parseJobTemplateArn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.parseJobTemplateArn"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersResources.parseJobTemplateArn(arn: string)
```

Parses a jobTemplate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.parseJobTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseManagedEndpointArn` <a name="parseManagedEndpointArn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.parseManagedEndpointArn"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersResources.parseManagedEndpointArn(arn: string)
```

Parses a managedEndpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.parseManagedEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSecurityConfigurationArn` <a name="parseSecurityConfigurationArn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.parseSecurityConfigurationArn"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersResources.parseSecurityConfigurationArn(arn: string)
```

Parses a securityConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.parseSecurityConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVirtualClusterArn` <a name="parseVirtualClusterArn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.parseVirtualClusterArn"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersResources.parseVirtualClusterArn(arn: string)
```

Parses a virtualCluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.emr_containers.EmrContainersResources.parseVirtualClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `securityConfiguration` <a name="securityConfiguration" id="@cdk_utils/iam.emr_containers.EmrContainersResources.securityConfiguration"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersResources.securityConfiguration(props: EmrContainersSecurityConfigurationArnProps)
```

Builds an ARN for the securityConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.emr_containers.EmrContainersResources.securityConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.emr_containers.EmrContainersSecurityConfigurationArnProps">EmrContainersSecurityConfigurationArnProps</a>

---

##### `virtualCluster` <a name="virtualCluster" id="@cdk_utils/iam.emr_containers.EmrContainersResources.virtualCluster"></a>

```typescript
import { emr_containers } from '@cdk_utils/iam'

emr_containers.EmrContainersResources.virtualCluster(props: EmrContainersVirtualClusterArnProps)
```

Builds an ARN for the virtualCluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.emr_containers.EmrContainersResources.virtualCluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.emr_containers.EmrContainersVirtualClusterArnProps">EmrContainersVirtualClusterArnProps</a>

---




