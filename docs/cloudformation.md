# `cloudformation` Submodule <a name="`cloudformation` Submodule" id="@cdk_utils/iam.cloudformation"></a>


## Structs <a name="Structs" id="Structs"></a>

### CloudFormationChangesetArnComponents <a name="CloudFormationChangesetArnComponents" id="@cdk_utils/iam.cloudformation.CloudFormationChangesetArnComponents"></a>

Parsed components of a changeset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudformation.CloudFormationChangesetArnComponents.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

const cloudFormationChangesetArnComponents: cloudformation.CloudFormationChangesetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationChangesetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationChangesetArnComponents.property.changeSetName">changeSetName</a></code> | <code>string</code> | The ChangeSetName component. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationChangesetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationChangesetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationChangesetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudformation.CloudFormationChangesetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `changeSetName`<sup>Required</sup> <a name="changeSetName" id="@cdk_utils/iam.cloudformation.CloudFormationChangesetArnComponents.property.changeSetName"></a>

```typescript
public readonly changeSetName: string;
```

- *Type:* string

The ChangeSetName component.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudformation.CloudFormationChangesetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudformation.CloudFormationChangesetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudformation.CloudFormationChangesetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudFormationChangesetArnProps <a name="CloudFormationChangesetArnProps" id="@cdk_utils/iam.cloudformation.CloudFormationChangesetArnProps"></a>

Properties for building a changeset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudformation.CloudFormationChangesetArnProps.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

const cloudFormationChangesetArnProps: cloudformation.CloudFormationChangesetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationChangesetArnProps.property.changeSetName">changeSetName</a></code> | <code>string</code> | The ChangeSetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationChangesetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationChangesetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationChangesetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationChangesetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `changeSetName`<sup>Required</sup> <a name="changeSetName" id="@cdk_utils/iam.cloudformation.CloudFormationChangesetArnProps.property.changeSetName"></a>

```typescript
public readonly changeSetName: string;
```

- *Type:* string

The ChangeSetName component of the ARN.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudformation.CloudFormationChangesetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudformation.CloudFormationChangesetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudformation.CloudFormationChangesetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudformation.CloudFormationChangesetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudFormationGeneratedtemplateArnComponents <a name="CloudFormationGeneratedtemplateArnComponents" id="@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnComponents"></a>

Parsed components of a generatedtemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnComponents.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

const cloudFormationGeneratedtemplateArnComponents: cloudformation.CloudFormationGeneratedtemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudFormationGeneratedtemplateArnProps <a name="CloudFormationGeneratedtemplateArnProps" id="@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnProps"></a>

Properties for building a generatedtemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnProps.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

const cloudFormationGeneratedtemplateArnProps: cloudformation.CloudFormationGeneratedtemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudFormationResourcescanArnComponents <a name="CloudFormationResourcescanArnComponents" id="@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnComponents"></a>

Parsed components of a resourcescan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnComponents.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

const cloudFormationResourcescanArnComponents: cloudformation.CloudFormationResourcescanArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudFormationResourcescanArnProps <a name="CloudFormationResourcescanArnProps" id="@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnProps"></a>

Properties for building a resourcescan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnProps.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

const cloudFormationResourcescanArnProps: cloudformation.CloudFormationResourcescanArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudFormationStackArnComponents <a name="CloudFormationStackArnComponents" id="@cdk_utils/iam.cloudformation.CloudFormationStackArnComponents"></a>

Parsed components of a stack ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudformation.CloudFormationStackArnComponents.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

const cloudFormationStackArnComponents: cloudformation.CloudFormationStackArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStackArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStackArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStackArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStackArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStackArnComponents.property.stackName">stackName</a></code> | <code>string</code> | The StackName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudformation.CloudFormationStackArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudformation.CloudFormationStackArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudformation.CloudFormationStackArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudformation.CloudFormationStackArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@cdk_utils/iam.cloudformation.CloudFormationStackArnComponents.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The StackName component.

---

### CloudFormationStackArnProps <a name="CloudFormationStackArnProps" id="@cdk_utils/iam.cloudformation.CloudFormationStackArnProps"></a>

Properties for building a stack ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudformation.CloudFormationStackArnProps.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

const cloudFormationStackArnProps: cloudformation.CloudFormationStackArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStackArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStackArnProps.property.stackName">stackName</a></code> | <code>string</code> | The StackName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStackArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStackArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStackArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudformation.CloudFormationStackArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@cdk_utils/iam.cloudformation.CloudFormationStackArnProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The StackName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudformation.CloudFormationStackArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudformation.CloudFormationStackArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudformation.CloudFormationStackArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudFormationStacksetArnComponents <a name="CloudFormationStacksetArnComponents" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetArnComponents"></a>

Parsed components of a stackset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetArnComponents.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

const cloudFormationStacksetArnComponents: cloudformation.CloudFormationStacksetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetArnComponents.property.stackSetName">stackSetName</a></code> | <code>string</code> | The StackSetName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stackSetName`<sup>Required</sup> <a name="stackSetName" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetArnComponents.property.stackSetName"></a>

```typescript
public readonly stackSetName: string;
```

- *Type:* string

The StackSetName component.

---

### CloudFormationStacksetArnProps <a name="CloudFormationStacksetArnProps" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetArnProps"></a>

Properties for building a stackset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetArnProps.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

const cloudFormationStacksetArnProps: cloudformation.CloudFormationStacksetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetArnProps.property.stackSetName">stackSetName</a></code> | <code>string</code> | The StackSetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `stackSetName`<sup>Required</sup> <a name="stackSetName" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetArnProps.property.stackSetName"></a>

```typescript
public readonly stackSetName: string;
```

- *Type:* string

The StackSetName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudFormationStacksetTargetArnComponents <a name="CloudFormationStacksetTargetArnComponents" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnComponents"></a>

Parsed components of a stackset-target ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnComponents.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

const cloudFormationStacksetTargetArnComponents: cloudformation.CloudFormationStacksetTargetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnComponents.property.stackSetTarget">stackSetTarget</a></code> | <code>string</code> | The StackSetTarget component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stackSetTarget`<sup>Required</sup> <a name="stackSetTarget" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnComponents.property.stackSetTarget"></a>

```typescript
public readonly stackSetTarget: string;
```

- *Type:* string

The StackSetTarget component.

---

### CloudFormationStacksetTargetArnProps <a name="CloudFormationStacksetTargetArnProps" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnProps"></a>

Properties for building a stackset-target ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnProps.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

const cloudFormationStacksetTargetArnProps: cloudformation.CloudFormationStacksetTargetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnProps.property.stackSetTarget">stackSetTarget</a></code> | <code>string</code> | The StackSetTarget component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `stackSetTarget`<sup>Required</sup> <a name="stackSetTarget" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnProps.property.stackSetTarget"></a>

```typescript
public readonly stackSetTarget: string;
```

- *Type:* string

The StackSetTarget component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudFormationTypeArnComponents <a name="CloudFormationTypeArnComponents" id="@cdk_utils/iam.cloudformation.CloudFormationTypeArnComponents"></a>

Parsed components of a type ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudformation.CloudFormationTypeArnComponents.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

const cloudFormationTypeArnComponents: cloudformation.CloudFormationTypeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationTypeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationTypeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationTypeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationTypeArnComponents.property.type">type</a></code> | <code>string</code> | The Type component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudformation.CloudFormationTypeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudformation.CloudFormationTypeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudformation.CloudFormationTypeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdk_utils/iam.cloudformation.CloudFormationTypeArnComponents.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The Type component.

---

### CloudFormationTypeArnProps <a name="CloudFormationTypeArnProps" id="@cdk_utils/iam.cloudformation.CloudFormationTypeArnProps"></a>

Properties for building a type ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudformation.CloudFormationTypeArnProps.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

const cloudFormationTypeArnProps: cloudformation.CloudFormationTypeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationTypeArnProps.property.type">type</a></code> | <code>string</code> | The Type component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationTypeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationTypeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationTypeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdk_utils/iam.cloudformation.CloudFormationTypeArnProps.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The Type component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudformation.CloudFormationTypeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudformation.CloudFormationTypeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudformation.CloudFormationTypeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudFormationTypeHookArnComponents <a name="CloudFormationTypeHookArnComponents" id="@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnComponents"></a>

Parsed components of a typeHook ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnComponents.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

const cloudFormationTypeHookArnComponents: cloudformation.CloudFormationTypeHookArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnComponents.property.type">type</a></code> | <code>string</code> | The Type component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnComponents.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The Type component.

---

### CloudFormationTypeHookArnProps <a name="CloudFormationTypeHookArnProps" id="@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnProps"></a>

Properties for building a typeHook ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnProps.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

const cloudFormationTypeHookArnProps: cloudformation.CloudFormationTypeHookArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnProps.property.type">type</a></code> | <code>string</code> | The Type component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnProps.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The Type component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CloudFormationActions <a name="CloudFormationActions" id="@cdk_utils/iam.cloudformation.CloudFormationActions"></a>

IAM action constants for the cloudformation service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudformation.CloudFormationActions.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

new cloudformation.CloudFormationActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionGetGeneratedTemplate">actionGetGeneratedTemplate</a></code> | <code>string</code> | [Read] cloudformation:GetGeneratedTemplate. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionGetHookResult">actionGetHookResult</a></code> | <code>string</code> | [Read] cloudformation:GetHookResult. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionGetResource">actionGetResource</a></code> | <code>string</code> | [Read] cloudformation:GetResource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionGetResourceRequestStatus">actionGetResourceRequestStatus</a></code> | <code>string</code> | [Read] cloudformation:GetResourceRequestStatus. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionGetStackPolicy">actionGetStackPolicy</a></code> | <code>string</code> | [Read] cloudformation:GetStackPolicy. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionGetTemplate">actionGetTemplate</a></code> | <code>string</code> | [Read] cloudformation:GetTemplate. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionGetTemplateSummary">actionGetTemplateSummary</a></code> | <code>string</code> | [Read] cloudformation:GetTemplateSummary. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionSetStackPolicy">actionSetStackPolicy</a></code> | <code>string</code> | [PermissionManagement] cloudformation:SetStackPolicy. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionSetTypeConfiguration">actionSetTypeConfiguration</a></code> | <code>string</code> | [Write] cloudformation:SetTypeConfiguration. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionSetTypeDefaultVersion">actionSetTypeDefaultVersion</a></code> | <code>string</code> | [Write] cloudformation:SetTypeDefaultVersion. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ActivateOrganizationsAccess">ActivateOrganizationsAccess</a></code> | <code>string</code> | [Write] cloudformation:ActivateOrganizationsAccess. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ActivateType">ActivateType</a></code> | <code>string</code> | [Write] cloudformation:ActivateType. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.BatchDescribeTypeConfigurations">BatchDescribeTypeConfigurations</a></code> | <code>string</code> | [Read] cloudformation:BatchDescribeTypeConfigurations. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.CancelResourceRequest">CancelResourceRequest</a></code> | <code>string</code> | [Write] cloudformation:CancelResourceRequest. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.CancelUpdateStack">CancelUpdateStack</a></code> | <code>string</code> | [Write] cloudformation:CancelUpdateStack. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ContinueUpdateRollback">ContinueUpdateRollback</a></code> | <code>string</code> | [Write] cloudformation:ContinueUpdateRollback. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.CreateChangeSet">CreateChangeSet</a></code> | <code>string</code> | [Write] cloudformation:CreateChangeSet. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.CreateGeneratedTemplate">CreateGeneratedTemplate</a></code> | <code>string</code> | [Write] cloudformation:CreateGeneratedTemplate. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.CreateResource">CreateResource</a></code> | <code>string</code> | [Write] cloudformation:CreateResource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.CreateStack">CreateStack</a></code> | <code>string</code> | [Write] cloudformation:CreateStack. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.CreateStackInstances">CreateStackInstances</a></code> | <code>string</code> | [Write] cloudformation:CreateStackInstances. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.CreateStackRefactor">CreateStackRefactor</a></code> | <code>string</code> | [Write] cloudformation:CreateStackRefactor. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.CreateStackSet">CreateStackSet</a></code> | <code>string</code> | [Write] cloudformation:CreateStackSet. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.CreateUploadBucket">CreateUploadBucket</a></code> | <code>string</code> | [Write] cloudformation:CreateUploadBucket. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DeactivateOrganizationsAccess">DeactivateOrganizationsAccess</a></code> | <code>string</code> | [Write] cloudformation:DeactivateOrganizationsAccess. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DeactivateType">DeactivateType</a></code> | <code>string</code> | [Write] cloudformation:DeactivateType. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DeleteChangeSet">DeleteChangeSet</a></code> | <code>string</code> | [Write] cloudformation:DeleteChangeSet. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DeleteGeneratedTemplate">DeleteGeneratedTemplate</a></code> | <code>string</code> | [Write] cloudformation:DeleteGeneratedTemplate. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DeleteResource">DeleteResource</a></code> | <code>string</code> | [Write] cloudformation:DeleteResource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DeleteStack">DeleteStack</a></code> | <code>string</code> | [Write] cloudformation:DeleteStack. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DeleteStackInstances">DeleteStackInstances</a></code> | <code>string</code> | [Write] cloudformation:DeleteStackInstances. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DeleteStackSet">DeleteStackSet</a></code> | <code>string</code> | [Write] cloudformation:DeleteStackSet. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DeregisterType">DeregisterType</a></code> | <code>string</code> | [Write] cloudformation:DeregisterType. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeAccountLimits">DescribeAccountLimits</a></code> | <code>string</code> | [Read] cloudformation:DescribeAccountLimits. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeChangeSet">DescribeChangeSet</a></code> | <code>string</code> | [Read] cloudformation:DescribeChangeSet. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeChangeSetHooks">DescribeChangeSetHooks</a></code> | <code>string</code> | [Read] cloudformation:DescribeChangeSetHooks. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeEvents">DescribeEvents</a></code> | <code>string</code> | [Read] cloudformation:DescribeEvents. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeGeneratedTemplate">DescribeGeneratedTemplate</a></code> | <code>string</code> | [Read] cloudformation:DescribeGeneratedTemplate. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeOrganizationsAccess">DescribeOrganizationsAccess</a></code> | <code>string</code> | [Read] cloudformation:DescribeOrganizationsAccess. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribePublisher">DescribePublisher</a></code> | <code>string</code> | [Read] cloudformation:DescribePublisher. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeResourceScan">DescribeResourceScan</a></code> | <code>string</code> | [Read] cloudformation:DescribeResourceScan. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStackDriftDetectionStatus">DescribeStackDriftDetectionStatus</a></code> | <code>string</code> | [Read] cloudformation:DescribeStackDriftDetectionStatus. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStackEvents">DescribeStackEvents</a></code> | <code>string</code> | [Read] cloudformation:DescribeStackEvents. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStackInstance">DescribeStackInstance</a></code> | <code>string</code> | [Read] cloudformation:DescribeStackInstance. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStackRefactor">DescribeStackRefactor</a></code> | <code>string</code> | [Read] cloudformation:DescribeStackRefactor. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStackResource">DescribeStackResource</a></code> | <code>string</code> | [Read] cloudformation:DescribeStackResource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStackResourceDrifts">DescribeStackResourceDrifts</a></code> | <code>string</code> | [Read] cloudformation:DescribeStackResourceDrifts. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStackResources">DescribeStackResources</a></code> | <code>string</code> | [Read] cloudformation:DescribeStackResources. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStacks">DescribeStacks</a></code> | <code>string</code> | [List] cloudformation:DescribeStacks. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStackSet">DescribeStackSet</a></code> | <code>string</code> | [Read] cloudformation:DescribeStackSet. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStackSetOperation">DescribeStackSetOperation</a></code> | <code>string</code> | [Read] cloudformation:DescribeStackSetOperation. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeType">DescribeType</a></code> | <code>string</code> | [Read] cloudformation:DescribeType. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeTypeRegistration">DescribeTypeRegistration</a></code> | <code>string</code> | [Read] cloudformation:DescribeTypeRegistration. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DetectStackDrift">DetectStackDrift</a></code> | <code>string</code> | [Read] cloudformation:DetectStackDrift. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DetectStackResourceDrift">DetectStackResourceDrift</a></code> | <code>string</code> | [Read] cloudformation:DetectStackResourceDrift. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.DetectStackSetDrift">DetectStackSetDrift</a></code> | <code>string</code> | [Read] cloudformation:DetectStackSetDrift. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.EstimateTemplateCost">EstimateTemplateCost</a></code> | <code>string</code> | [Read] cloudformation:EstimateTemplateCost. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ExecuteChangeSet">ExecuteChangeSet</a></code> | <code>string</code> | [Write] cloudformation:ExecuteChangeSet. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ExecuteStackRefactor">ExecuteStackRefactor</a></code> | <code>string</code> | [Write] cloudformation:ExecuteStackRefactor. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ImportStacksToStackSet">ImportStacksToStackSet</a></code> | <code>string</code> | [Write] cloudformation:ImportStacksToStackSet. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListAllHookResults">ListAllHookResults</a></code> | <code>string</code> | [List] cloudformation:ListAllHookResults. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListChangeSets">ListChangeSets</a></code> | <code>string</code> | [List] cloudformation:ListChangeSets. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListExports">ListExports</a></code> | <code>string</code> | [List] cloudformation:ListExports. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListGeneratedTemplates">ListGeneratedTemplates</a></code> | <code>string</code> | [List] cloudformation:ListGeneratedTemplates. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListHookResults">ListHookResults</a></code> | <code>string</code> | [List] cloudformation:ListHookResults. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListImports">ListImports</a></code> | <code>string</code> | [List] cloudformation:ListImports. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListResourceRequests">ListResourceRequests</a></code> | <code>string</code> | [Read] cloudformation:ListResourceRequests. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListResources">ListResources</a></code> | <code>string</code> | [Read] cloudformation:ListResources. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListResourceScanRelatedResources">ListResourceScanRelatedResources</a></code> | <code>string</code> | [List] cloudformation:ListResourceScanRelatedResources. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListResourceScanResources">ListResourceScanResources</a></code> | <code>string</code> | [List] cloudformation:ListResourceScanResources. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListResourceScans">ListResourceScans</a></code> | <code>string</code> | [List] cloudformation:ListResourceScans. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStackInstanceResourceDrifts">ListStackInstanceResourceDrifts</a></code> | <code>string</code> | [List] cloudformation:ListStackInstanceResourceDrifts. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStackInstances">ListStackInstances</a></code> | <code>string</code> | [List] cloudformation:ListStackInstances. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStackRefactorActions">ListStackRefactorActions</a></code> | <code>string</code> | [List] cloudformation:ListStackRefactorActions. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStackRefactors">ListStackRefactors</a></code> | <code>string</code> | [List] cloudformation:ListStackRefactors. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStackResources">ListStackResources</a></code> | <code>string</code> | [List] cloudformation:ListStackResources. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStacks">ListStacks</a></code> | <code>string</code> | [List] cloudformation:ListStacks. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStackSetAutoDeploymentTargets">ListStackSetAutoDeploymentTargets</a></code> | <code>string</code> | [List] cloudformation:ListStackSetAutoDeploymentTargets. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStackSetOperationResults">ListStackSetOperationResults</a></code> | <code>string</code> | [List] cloudformation:ListStackSetOperationResults. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStackSetOperations">ListStackSetOperations</a></code> | <code>string</code> | [List] cloudformation:ListStackSetOperations. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStackSets">ListStackSets</a></code> | <code>string</code> | [List] cloudformation:ListStackSets. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListTypeRegistrations">ListTypeRegistrations</a></code> | <code>string</code> | [List] cloudformation:ListTypeRegistrations. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListTypes">ListTypes</a></code> | <code>string</code> | [List] cloudformation:ListTypes. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListTypeVersions">ListTypeVersions</a></code> | <code>string</code> | [List] cloudformation:ListTypeVersions. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.PublishType">PublishType</a></code> | <code>string</code> | [Write] cloudformation:PublishType. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.RecordHandlerProgress">RecordHandlerProgress</a></code> | <code>string</code> | [Write] cloudformation:RecordHandlerProgress. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.RegisterPublisher">RegisterPublisher</a></code> | <code>string</code> | [Write] cloudformation:RegisterPublisher. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.RegisterType">RegisterType</a></code> | <code>string</code> | [Write] cloudformation:RegisterType. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.RollbackStack">RollbackStack</a></code> | <code>string</code> | [Write] cloudformation:RollbackStack. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.SignalResource">SignalResource</a></code> | <code>string</code> | [Write] cloudformation:SignalResource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.StartResourceScan">StartResourceScan</a></code> | <code>string</code> | [Write] cloudformation:StartResourceScan. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.StopStackSetOperation">StopStackSetOperation</a></code> | <code>string</code> | [Write] cloudformation:StopStackSetOperation. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] cloudformation:TagResource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.TestType">TestType</a></code> | <code>string</code> | [Write] cloudformation:TestType. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] cloudformation:UntagResource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.UpdateGeneratedTemplate">UpdateGeneratedTemplate</a></code> | <code>string</code> | [Write] cloudformation:UpdateGeneratedTemplate. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.UpdateResource">UpdateResource</a></code> | <code>string</code> | [Write] cloudformation:UpdateResource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.UpdateStack">UpdateStack</a></code> | <code>string</code> | [Write] cloudformation:UpdateStack. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.UpdateStackInstances">UpdateStackInstances</a></code> | <code>string</code> | [Write] cloudformation:UpdateStackInstances. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.UpdateStackSet">UpdateStackSet</a></code> | <code>string</code> | [Write] cloudformation:UpdateStackSet. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.UpdateTerminationProtection">UpdateTerminationProtection</a></code> | <code>string</code> | [Write] cloudformation:UpdateTerminationProtection. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationActions.property.ValidateTemplate">ValidateTemplate</a></code> | <code>string</code> | [Read] cloudformation:ValidateTemplate. |

---

##### `actionGetGeneratedTemplate`<sup>Required</sup> <a name="actionGetGeneratedTemplate" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionGetGeneratedTemplate"></a>

```typescript
public readonly actionGetGeneratedTemplate: string;
```

- *Type:* string

[Read] cloudformation:GetGeneratedTemplate.

---

##### `actionGetHookResult`<sup>Required</sup> <a name="actionGetHookResult" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionGetHookResult"></a>

```typescript
public readonly actionGetHookResult: string;
```

- *Type:* string

[Read] cloudformation:GetHookResult.

---

##### `actionGetResource`<sup>Required</sup> <a name="actionGetResource" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionGetResource"></a>

```typescript
public readonly actionGetResource: string;
```

- *Type:* string

[Read] cloudformation:GetResource.

---

##### `actionGetResourceRequestStatus`<sup>Required</sup> <a name="actionGetResourceRequestStatus" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionGetResourceRequestStatus"></a>

```typescript
public readonly actionGetResourceRequestStatus: string;
```

- *Type:* string

[Read] cloudformation:GetResourceRequestStatus.

---

##### `actionGetStackPolicy`<sup>Required</sup> <a name="actionGetStackPolicy" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionGetStackPolicy"></a>

```typescript
public readonly actionGetStackPolicy: string;
```

- *Type:* string

[Read] cloudformation:GetStackPolicy.

---

##### `actionGetTemplate`<sup>Required</sup> <a name="actionGetTemplate" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionGetTemplate"></a>

```typescript
public readonly actionGetTemplate: string;
```

- *Type:* string

[Read] cloudformation:GetTemplate.

---

##### `actionGetTemplateSummary`<sup>Required</sup> <a name="actionGetTemplateSummary" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionGetTemplateSummary"></a>

```typescript
public readonly actionGetTemplateSummary: string;
```

- *Type:* string

[Read] cloudformation:GetTemplateSummary.

---

##### `actionSetStackPolicy`<sup>Required</sup> <a name="actionSetStackPolicy" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionSetStackPolicy"></a>

```typescript
public readonly actionSetStackPolicy: string;
```

- *Type:* string

[PermissionManagement] cloudformation:SetStackPolicy.

---

##### `actionSetTypeConfiguration`<sup>Required</sup> <a name="actionSetTypeConfiguration" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionSetTypeConfiguration"></a>

```typescript
public readonly actionSetTypeConfiguration: string;
```

- *Type:* string

[Write] cloudformation:SetTypeConfiguration.

---

##### `actionSetTypeDefaultVersion`<sup>Required</sup> <a name="actionSetTypeDefaultVersion" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.actionSetTypeDefaultVersion"></a>

```typescript
public readonly actionSetTypeDefaultVersion: string;
```

- *Type:* string

[Write] cloudformation:SetTypeDefaultVersion.

---

##### `ActivateOrganizationsAccess`<sup>Required</sup> <a name="ActivateOrganizationsAccess" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ActivateOrganizationsAccess"></a>

```typescript
public readonly ActivateOrganizationsAccess: string;
```

- *Type:* string

[Write] cloudformation:ActivateOrganizationsAccess.

---

##### `ActivateType`<sup>Required</sup> <a name="ActivateType" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ActivateType"></a>

```typescript
public readonly ActivateType: string;
```

- *Type:* string

[Write] cloudformation:ActivateType.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchDescribeTypeConfigurations`<sup>Required</sup> <a name="BatchDescribeTypeConfigurations" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.BatchDescribeTypeConfigurations"></a>

```typescript
public readonly BatchDescribeTypeConfigurations: string;
```

- *Type:* string

[Read] cloudformation:BatchDescribeTypeConfigurations.

---

##### `CancelResourceRequest`<sup>Required</sup> <a name="CancelResourceRequest" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.CancelResourceRequest"></a>

```typescript
public readonly CancelResourceRequest: string;
```

- *Type:* string

[Write] cloudformation:CancelResourceRequest.

---

##### `CancelUpdateStack`<sup>Required</sup> <a name="CancelUpdateStack" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.CancelUpdateStack"></a>

```typescript
public readonly CancelUpdateStack: string;
```

- *Type:* string

[Write] cloudformation:CancelUpdateStack.

---

##### `ContinueUpdateRollback`<sup>Required</sup> <a name="ContinueUpdateRollback" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ContinueUpdateRollback"></a>

```typescript
public readonly ContinueUpdateRollback: string;
```

- *Type:* string

[Write] cloudformation:ContinueUpdateRollback.

---

##### `CreateChangeSet`<sup>Required</sup> <a name="CreateChangeSet" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.CreateChangeSet"></a>

```typescript
public readonly CreateChangeSet: string;
```

- *Type:* string

[Write] cloudformation:CreateChangeSet.

---

##### `CreateGeneratedTemplate`<sup>Required</sup> <a name="CreateGeneratedTemplate" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.CreateGeneratedTemplate"></a>

```typescript
public readonly CreateGeneratedTemplate: string;
```

- *Type:* string

[Write] cloudformation:CreateGeneratedTemplate.

---

##### `CreateResource`<sup>Required</sup> <a name="CreateResource" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.CreateResource"></a>

```typescript
public readonly CreateResource: string;
```

- *Type:* string

[Write] cloudformation:CreateResource.

---

##### `CreateStack`<sup>Required</sup> <a name="CreateStack" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.CreateStack"></a>

```typescript
public readonly CreateStack: string;
```

- *Type:* string

[Write] cloudformation:CreateStack.

---

##### `CreateStackInstances`<sup>Required</sup> <a name="CreateStackInstances" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.CreateStackInstances"></a>

```typescript
public readonly CreateStackInstances: string;
```

- *Type:* string

[Write] cloudformation:CreateStackInstances.

---

##### `CreateStackRefactor`<sup>Required</sup> <a name="CreateStackRefactor" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.CreateStackRefactor"></a>

```typescript
public readonly CreateStackRefactor: string;
```

- *Type:* string

[Write] cloudformation:CreateStackRefactor.

---

##### `CreateStackSet`<sup>Required</sup> <a name="CreateStackSet" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.CreateStackSet"></a>

```typescript
public readonly CreateStackSet: string;
```

- *Type:* string

[Write] cloudformation:CreateStackSet.

---

##### `CreateUploadBucket`<sup>Required</sup> <a name="CreateUploadBucket" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.CreateUploadBucket"></a>

```typescript
public readonly CreateUploadBucket: string;
```

- *Type:* string

[Write] cloudformation:CreateUploadBucket.

---

##### `DeactivateOrganizationsAccess`<sup>Required</sup> <a name="DeactivateOrganizationsAccess" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DeactivateOrganizationsAccess"></a>

```typescript
public readonly DeactivateOrganizationsAccess: string;
```

- *Type:* string

[Write] cloudformation:DeactivateOrganizationsAccess.

---

##### `DeactivateType`<sup>Required</sup> <a name="DeactivateType" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DeactivateType"></a>

```typescript
public readonly DeactivateType: string;
```

- *Type:* string

[Write] cloudformation:DeactivateType.

---

##### `DeleteChangeSet`<sup>Required</sup> <a name="DeleteChangeSet" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DeleteChangeSet"></a>

```typescript
public readonly DeleteChangeSet: string;
```

- *Type:* string

[Write] cloudformation:DeleteChangeSet.

---

##### `DeleteGeneratedTemplate`<sup>Required</sup> <a name="DeleteGeneratedTemplate" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DeleteGeneratedTemplate"></a>

```typescript
public readonly DeleteGeneratedTemplate: string;
```

- *Type:* string

[Write] cloudformation:DeleteGeneratedTemplate.

---

##### `DeleteResource`<sup>Required</sup> <a name="DeleteResource" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DeleteResource"></a>

```typescript
public readonly DeleteResource: string;
```

- *Type:* string

[Write] cloudformation:DeleteResource.

---

##### `DeleteStack`<sup>Required</sup> <a name="DeleteStack" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DeleteStack"></a>

```typescript
public readonly DeleteStack: string;
```

- *Type:* string

[Write] cloudformation:DeleteStack.

---

##### `DeleteStackInstances`<sup>Required</sup> <a name="DeleteStackInstances" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DeleteStackInstances"></a>

```typescript
public readonly DeleteStackInstances: string;
```

- *Type:* string

[Write] cloudformation:DeleteStackInstances.

---

##### `DeleteStackSet`<sup>Required</sup> <a name="DeleteStackSet" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DeleteStackSet"></a>

```typescript
public readonly DeleteStackSet: string;
```

- *Type:* string

[Write] cloudformation:DeleteStackSet.

---

##### `DeregisterType`<sup>Required</sup> <a name="DeregisterType" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DeregisterType"></a>

```typescript
public readonly DeregisterType: string;
```

- *Type:* string

[Write] cloudformation:DeregisterType.

---

##### `DescribeAccountLimits`<sup>Required</sup> <a name="DescribeAccountLimits" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeAccountLimits"></a>

```typescript
public readonly DescribeAccountLimits: string;
```

- *Type:* string

[Read] cloudformation:DescribeAccountLimits.

---

##### `DescribeChangeSet`<sup>Required</sup> <a name="DescribeChangeSet" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeChangeSet"></a>

```typescript
public readonly DescribeChangeSet: string;
```

- *Type:* string

[Read] cloudformation:DescribeChangeSet.

---

##### `DescribeChangeSetHooks`<sup>Required</sup> <a name="DescribeChangeSetHooks" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeChangeSetHooks"></a>

```typescript
public readonly DescribeChangeSetHooks: string;
```

- *Type:* string

[Read] cloudformation:DescribeChangeSetHooks.

---

##### `DescribeEvents`<sup>Required</sup> <a name="DescribeEvents" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeEvents"></a>

```typescript
public readonly DescribeEvents: string;
```

- *Type:* string

[Read] cloudformation:DescribeEvents.

---

##### `DescribeGeneratedTemplate`<sup>Required</sup> <a name="DescribeGeneratedTemplate" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeGeneratedTemplate"></a>

```typescript
public readonly DescribeGeneratedTemplate: string;
```

- *Type:* string

[Read] cloudformation:DescribeGeneratedTemplate.

---

##### `DescribeOrganizationsAccess`<sup>Required</sup> <a name="DescribeOrganizationsAccess" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeOrganizationsAccess"></a>

```typescript
public readonly DescribeOrganizationsAccess: string;
```

- *Type:* string

[Read] cloudformation:DescribeOrganizationsAccess.

---

##### `DescribePublisher`<sup>Required</sup> <a name="DescribePublisher" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribePublisher"></a>

```typescript
public readonly DescribePublisher: string;
```

- *Type:* string

[Read] cloudformation:DescribePublisher.

---

##### `DescribeResourceScan`<sup>Required</sup> <a name="DescribeResourceScan" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeResourceScan"></a>

```typescript
public readonly DescribeResourceScan: string;
```

- *Type:* string

[Read] cloudformation:DescribeResourceScan.

---

##### `DescribeStackDriftDetectionStatus`<sup>Required</sup> <a name="DescribeStackDriftDetectionStatus" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStackDriftDetectionStatus"></a>

```typescript
public readonly DescribeStackDriftDetectionStatus: string;
```

- *Type:* string

[Read] cloudformation:DescribeStackDriftDetectionStatus.

---

##### `DescribeStackEvents`<sup>Required</sup> <a name="DescribeStackEvents" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStackEvents"></a>

```typescript
public readonly DescribeStackEvents: string;
```

- *Type:* string

[Read] cloudformation:DescribeStackEvents.

---

##### `DescribeStackInstance`<sup>Required</sup> <a name="DescribeStackInstance" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStackInstance"></a>

```typescript
public readonly DescribeStackInstance: string;
```

- *Type:* string

[Read] cloudformation:DescribeStackInstance.

---

##### `DescribeStackRefactor`<sup>Required</sup> <a name="DescribeStackRefactor" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStackRefactor"></a>

```typescript
public readonly DescribeStackRefactor: string;
```

- *Type:* string

[Read] cloudformation:DescribeStackRefactor.

---

##### `DescribeStackResource`<sup>Required</sup> <a name="DescribeStackResource" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStackResource"></a>

```typescript
public readonly DescribeStackResource: string;
```

- *Type:* string

[Read] cloudformation:DescribeStackResource.

---

##### `DescribeStackResourceDrifts`<sup>Required</sup> <a name="DescribeStackResourceDrifts" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStackResourceDrifts"></a>

```typescript
public readonly DescribeStackResourceDrifts: string;
```

- *Type:* string

[Read] cloudformation:DescribeStackResourceDrifts.

---

##### `DescribeStackResources`<sup>Required</sup> <a name="DescribeStackResources" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStackResources"></a>

```typescript
public readonly DescribeStackResources: string;
```

- *Type:* string

[Read] cloudformation:DescribeStackResources.

---

##### `DescribeStacks`<sup>Required</sup> <a name="DescribeStacks" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStacks"></a>

```typescript
public readonly DescribeStacks: string;
```

- *Type:* string

[List] cloudformation:DescribeStacks.

---

##### `DescribeStackSet`<sup>Required</sup> <a name="DescribeStackSet" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStackSet"></a>

```typescript
public readonly DescribeStackSet: string;
```

- *Type:* string

[Read] cloudformation:DescribeStackSet.

---

##### `DescribeStackSetOperation`<sup>Required</sup> <a name="DescribeStackSetOperation" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeStackSetOperation"></a>

```typescript
public readonly DescribeStackSetOperation: string;
```

- *Type:* string

[Read] cloudformation:DescribeStackSetOperation.

---

##### `DescribeType`<sup>Required</sup> <a name="DescribeType" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeType"></a>

```typescript
public readonly DescribeType: string;
```

- *Type:* string

[Read] cloudformation:DescribeType.

---

##### `DescribeTypeRegistration`<sup>Required</sup> <a name="DescribeTypeRegistration" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DescribeTypeRegistration"></a>

```typescript
public readonly DescribeTypeRegistration: string;
```

- *Type:* string

[Read] cloudformation:DescribeTypeRegistration.

---

##### `DetectStackDrift`<sup>Required</sup> <a name="DetectStackDrift" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DetectStackDrift"></a>

```typescript
public readonly DetectStackDrift: string;
```

- *Type:* string

[Read] cloudformation:DetectStackDrift.

---

##### `DetectStackResourceDrift`<sup>Required</sup> <a name="DetectStackResourceDrift" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DetectStackResourceDrift"></a>

```typescript
public readonly DetectStackResourceDrift: string;
```

- *Type:* string

[Read] cloudformation:DetectStackResourceDrift.

---

##### `DetectStackSetDrift`<sup>Required</sup> <a name="DetectStackSetDrift" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.DetectStackSetDrift"></a>

```typescript
public readonly DetectStackSetDrift: string;
```

- *Type:* string

[Read] cloudformation:DetectStackSetDrift.

---

##### `EstimateTemplateCost`<sup>Required</sup> <a name="EstimateTemplateCost" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.EstimateTemplateCost"></a>

```typescript
public readonly EstimateTemplateCost: string;
```

- *Type:* string

[Read] cloudformation:EstimateTemplateCost.

---

##### `ExecuteChangeSet`<sup>Required</sup> <a name="ExecuteChangeSet" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ExecuteChangeSet"></a>

```typescript
public readonly ExecuteChangeSet: string;
```

- *Type:* string

[Write] cloudformation:ExecuteChangeSet.

---

##### `ExecuteStackRefactor`<sup>Required</sup> <a name="ExecuteStackRefactor" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ExecuteStackRefactor"></a>

```typescript
public readonly ExecuteStackRefactor: string;
```

- *Type:* string

[Write] cloudformation:ExecuteStackRefactor.

---

##### `ImportStacksToStackSet`<sup>Required</sup> <a name="ImportStacksToStackSet" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ImportStacksToStackSet"></a>

```typescript
public readonly ImportStacksToStackSet: string;
```

- *Type:* string

[Write] cloudformation:ImportStacksToStackSet.

---

##### `ListAllHookResults`<sup>Required</sup> <a name="ListAllHookResults" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListAllHookResults"></a>

```typescript
public readonly ListAllHookResults: string;
```

- *Type:* string

[List] cloudformation:ListAllHookResults.

---

##### `ListChangeSets`<sup>Required</sup> <a name="ListChangeSets" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListChangeSets"></a>

```typescript
public readonly ListChangeSets: string;
```

- *Type:* string

[List] cloudformation:ListChangeSets.

---

##### `ListExports`<sup>Required</sup> <a name="ListExports" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListExports"></a>

```typescript
public readonly ListExports: string;
```

- *Type:* string

[List] cloudformation:ListExports.

---

##### `ListGeneratedTemplates`<sup>Required</sup> <a name="ListGeneratedTemplates" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListGeneratedTemplates"></a>

```typescript
public readonly ListGeneratedTemplates: string;
```

- *Type:* string

[List] cloudformation:ListGeneratedTemplates.

---

##### `ListHookResults`<sup>Required</sup> <a name="ListHookResults" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListHookResults"></a>

```typescript
public readonly ListHookResults: string;
```

- *Type:* string

[List] cloudformation:ListHookResults.

---

##### `ListImports`<sup>Required</sup> <a name="ListImports" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListImports"></a>

```typescript
public readonly ListImports: string;
```

- *Type:* string

[List] cloudformation:ListImports.

---

##### `ListResourceRequests`<sup>Required</sup> <a name="ListResourceRequests" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListResourceRequests"></a>

```typescript
public readonly ListResourceRequests: string;
```

- *Type:* string

[Read] cloudformation:ListResourceRequests.

---

##### `ListResources`<sup>Required</sup> <a name="ListResources" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListResources"></a>

```typescript
public readonly ListResources: string;
```

- *Type:* string

[Read] cloudformation:ListResources.

---

##### `ListResourceScanRelatedResources`<sup>Required</sup> <a name="ListResourceScanRelatedResources" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListResourceScanRelatedResources"></a>

```typescript
public readonly ListResourceScanRelatedResources: string;
```

- *Type:* string

[List] cloudformation:ListResourceScanRelatedResources.

---

##### `ListResourceScanResources`<sup>Required</sup> <a name="ListResourceScanResources" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListResourceScanResources"></a>

```typescript
public readonly ListResourceScanResources: string;
```

- *Type:* string

[List] cloudformation:ListResourceScanResources.

---

##### `ListResourceScans`<sup>Required</sup> <a name="ListResourceScans" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListResourceScans"></a>

```typescript
public readonly ListResourceScans: string;
```

- *Type:* string

[List] cloudformation:ListResourceScans.

---

##### `ListStackInstanceResourceDrifts`<sup>Required</sup> <a name="ListStackInstanceResourceDrifts" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStackInstanceResourceDrifts"></a>

```typescript
public readonly ListStackInstanceResourceDrifts: string;
```

- *Type:* string

[List] cloudformation:ListStackInstanceResourceDrifts.

---

##### `ListStackInstances`<sup>Required</sup> <a name="ListStackInstances" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStackInstances"></a>

```typescript
public readonly ListStackInstances: string;
```

- *Type:* string

[List] cloudformation:ListStackInstances.

---

##### `ListStackRefactorActions`<sup>Required</sup> <a name="ListStackRefactorActions" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStackRefactorActions"></a>

```typescript
public readonly ListStackRefactorActions: string;
```

- *Type:* string

[List] cloudformation:ListStackRefactorActions.

---

##### `ListStackRefactors`<sup>Required</sup> <a name="ListStackRefactors" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStackRefactors"></a>

```typescript
public readonly ListStackRefactors: string;
```

- *Type:* string

[List] cloudformation:ListStackRefactors.

---

##### `ListStackResources`<sup>Required</sup> <a name="ListStackResources" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStackResources"></a>

```typescript
public readonly ListStackResources: string;
```

- *Type:* string

[List] cloudformation:ListStackResources.

---

##### `ListStacks`<sup>Required</sup> <a name="ListStacks" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStacks"></a>

```typescript
public readonly ListStacks: string;
```

- *Type:* string

[List] cloudformation:ListStacks.

---

##### `ListStackSetAutoDeploymentTargets`<sup>Required</sup> <a name="ListStackSetAutoDeploymentTargets" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStackSetAutoDeploymentTargets"></a>

```typescript
public readonly ListStackSetAutoDeploymentTargets: string;
```

- *Type:* string

[List] cloudformation:ListStackSetAutoDeploymentTargets.

---

##### `ListStackSetOperationResults`<sup>Required</sup> <a name="ListStackSetOperationResults" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStackSetOperationResults"></a>

```typescript
public readonly ListStackSetOperationResults: string;
```

- *Type:* string

[List] cloudformation:ListStackSetOperationResults.

---

##### `ListStackSetOperations`<sup>Required</sup> <a name="ListStackSetOperations" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStackSetOperations"></a>

```typescript
public readonly ListStackSetOperations: string;
```

- *Type:* string

[List] cloudformation:ListStackSetOperations.

---

##### `ListStackSets`<sup>Required</sup> <a name="ListStackSets" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListStackSets"></a>

```typescript
public readonly ListStackSets: string;
```

- *Type:* string

[List] cloudformation:ListStackSets.

---

##### `ListTypeRegistrations`<sup>Required</sup> <a name="ListTypeRegistrations" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListTypeRegistrations"></a>

```typescript
public readonly ListTypeRegistrations: string;
```

- *Type:* string

[List] cloudformation:ListTypeRegistrations.

---

##### `ListTypes`<sup>Required</sup> <a name="ListTypes" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListTypes"></a>

```typescript
public readonly ListTypes: string;
```

- *Type:* string

[List] cloudformation:ListTypes.

---

##### `ListTypeVersions`<sup>Required</sup> <a name="ListTypeVersions" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ListTypeVersions"></a>

```typescript
public readonly ListTypeVersions: string;
```

- *Type:* string

[List] cloudformation:ListTypeVersions.

---

##### `PublishType`<sup>Required</sup> <a name="PublishType" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.PublishType"></a>

```typescript
public readonly PublishType: string;
```

- *Type:* string

[Write] cloudformation:PublishType.

---

##### `RecordHandlerProgress`<sup>Required</sup> <a name="RecordHandlerProgress" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.RecordHandlerProgress"></a>

```typescript
public readonly RecordHandlerProgress: string;
```

- *Type:* string

[Write] cloudformation:RecordHandlerProgress.

---

##### `RegisterPublisher`<sup>Required</sup> <a name="RegisterPublisher" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.RegisterPublisher"></a>

```typescript
public readonly RegisterPublisher: string;
```

- *Type:* string

[Write] cloudformation:RegisterPublisher.

---

##### `RegisterType`<sup>Required</sup> <a name="RegisterType" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.RegisterType"></a>

```typescript
public readonly RegisterType: string;
```

- *Type:* string

[Write] cloudformation:RegisterType.

---

##### `RollbackStack`<sup>Required</sup> <a name="RollbackStack" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.RollbackStack"></a>

```typescript
public readonly RollbackStack: string;
```

- *Type:* string

[Write] cloudformation:RollbackStack.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SignalResource`<sup>Required</sup> <a name="SignalResource" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.SignalResource"></a>

```typescript
public readonly SignalResource: string;
```

- *Type:* string

[Write] cloudformation:SignalResource.

---

##### `StartResourceScan`<sup>Required</sup> <a name="StartResourceScan" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.StartResourceScan"></a>

```typescript
public readonly StartResourceScan: string;
```

- *Type:* string

[Write] cloudformation:StartResourceScan.

---

##### `StopStackSetOperation`<sup>Required</sup> <a name="StopStackSetOperation" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.StopStackSetOperation"></a>

```typescript
public readonly StopStackSetOperation: string;
```

- *Type:* string

[Write] cloudformation:StopStackSetOperation.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] cloudformation:TagResource.

---

##### `TestType`<sup>Required</sup> <a name="TestType" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.TestType"></a>

```typescript
public readonly TestType: string;
```

- *Type:* string

[Write] cloudformation:TestType.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] cloudformation:UntagResource.

---

##### `UpdateGeneratedTemplate`<sup>Required</sup> <a name="UpdateGeneratedTemplate" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.UpdateGeneratedTemplate"></a>

```typescript
public readonly UpdateGeneratedTemplate: string;
```

- *Type:* string

[Write] cloudformation:UpdateGeneratedTemplate.

---

##### `UpdateResource`<sup>Required</sup> <a name="UpdateResource" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.UpdateResource"></a>

```typescript
public readonly UpdateResource: string;
```

- *Type:* string

[Write] cloudformation:UpdateResource.

---

##### `UpdateStack`<sup>Required</sup> <a name="UpdateStack" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.UpdateStack"></a>

```typescript
public readonly UpdateStack: string;
```

- *Type:* string

[Write] cloudformation:UpdateStack.

---

##### `UpdateStackInstances`<sup>Required</sup> <a name="UpdateStackInstances" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.UpdateStackInstances"></a>

```typescript
public readonly UpdateStackInstances: string;
```

- *Type:* string

[Write] cloudformation:UpdateStackInstances.

---

##### `UpdateStackSet`<sup>Required</sup> <a name="UpdateStackSet" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.UpdateStackSet"></a>

```typescript
public readonly UpdateStackSet: string;
```

- *Type:* string

[Write] cloudformation:UpdateStackSet.

---

##### `UpdateTerminationProtection`<sup>Required</sup> <a name="UpdateTerminationProtection" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.UpdateTerminationProtection"></a>

```typescript
public readonly UpdateTerminationProtection: string;
```

- *Type:* string

[Write] cloudformation:UpdateTerminationProtection.

---

##### `ValidateTemplate`<sup>Required</sup> <a name="ValidateTemplate" id="@cdk_utils/iam.cloudformation.CloudFormationActions.property.ValidateTemplate"></a>

```typescript
public readonly ValidateTemplate: string;
```

- *Type:* string

[Read] cloudformation:ValidateTemplate.

---

### CloudFormationConditions <a name="CloudFormationConditions" id="@cdk_utils/iam.cloudformation.CloudFormationConditions"></a>

Condition key constants and builders for cloudformation.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

new cloudformation.CloudFormationConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.changeSetName">changeSetName</a></code> | Generates a condition block for `cloudformation:ChangeSetName`. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.createAction">createAction</a></code> | Generates a condition block for `cloudformation:CreateAction`. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.importResourceTypes">importResourceTypes</a></code> | Generates a condition block for `cloudformation:ImportResourceTypes`. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.resourceTypes">resourceTypes</a></code> | Generates a condition block for `cloudformation:ResourceTypes`. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.roleARN">roleARN</a></code> | Generates a condition block for `cloudformation:RoleArn`. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.stackPolicyURL">stackPolicyURL</a></code> | Generates a condition block for `cloudformation:StackPolicyUrl`. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.targetRegion">targetRegion</a></code> | Generates a condition block for `cloudformation:TargetRegion`. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.templateURL">templateURL</a></code> | Generates a condition block for `cloudformation:TemplateUrl`. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.typeARN">typeARN</a></code> | Generates a condition block for `cloudformation:TypeArn`. |

---

##### `changeSetName` <a name="changeSetName" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.changeSetName"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationConditions.changeSetName(value: string)
```

Generates a condition block for `cloudformation:ChangeSetName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.changeSetName.parameter.value"></a>

- *Type:* string

---

##### `createAction` <a name="createAction" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.createAction"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationConditions.createAction(value: string)
```

Generates a condition block for `cloudformation:CreateAction`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.createAction.parameter.value"></a>

- *Type:* string

---

##### `importResourceTypes` <a name="importResourceTypes" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.importResourceTypes"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationConditions.importResourceTypes(value: string)
```

Generates a condition block for `cloudformation:ImportResourceTypes`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.importResourceTypes.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.requestTag"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.resourceTag"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTypes` <a name="resourceTypes" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.resourceTypes"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationConditions.resourceTypes(values: string[])
```

Generates a condition block for `cloudformation:ResourceTypes`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.resourceTypes.parameter.values"></a>

- *Type:* string[]

---

##### `roleARN` <a name="roleARN" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.roleARN"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationConditions.roleARN(value: string)
```

Generates a condition block for `cloudformation:RoleArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.roleARN.parameter.value"></a>

- *Type:* string

---

##### `stackPolicyURL` <a name="stackPolicyURL" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.stackPolicyURL"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationConditions.stackPolicyURL(value: string)
```

Generates a condition block for `cloudformation:StackPolicyUrl`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.stackPolicyURL.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.tagKeys"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `targetRegion` <a name="targetRegion" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.targetRegion"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationConditions.targetRegion(values: string[])
```

Generates a condition block for `cloudformation:TargetRegion`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.targetRegion.parameter.values"></a>

- *Type:* string[]

---

##### `templateURL` <a name="templateURL" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.templateURL"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationConditions.templateURL(value: string)
```

Generates a condition block for `cloudformation:TemplateUrl`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.templateURL.parameter.value"></a>

- *Type:* string

---

##### `typeARN` <a name="typeARN" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.typeARN"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationConditions.typeARN(value: string)
```

Generates a condition block for `cloudformation:TypeArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.typeARN.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.actionGetHookResultConditionKeys">actionGetHookResultConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetHookResult action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.actionGetTemplateSummaryConditionKeys">actionGetTemplateSummaryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTemplateSummary action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.actionSetStackPolicyConditionKeys">actionSetStackPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SetStackPolicy action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.CHANGE_SET_NAME">CHANGE_SET_NAME</a></code> | <code>string</code> | Condition key: cloudformation:ChangeSetName (String). |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.ContinueUpdateRollbackConditionKeys">ContinueUpdateRollbackConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ContinueUpdateRollback action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.CREATE_ACTION">CREATE_ACTION</a></code> | <code>string</code> | Condition key: cloudformation:CreateAction (String). |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.CreateChangeSetConditionKeys">CreateChangeSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChangeSet action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.CreateStackConditionKeys">CreateStackConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStack action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.CreateStackInstancesConditionKeys">CreateStackInstancesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStackInstances action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.CreateStackSetConditionKeys">CreateStackSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStackSet action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.DeleteChangeSetConditionKeys">DeleteChangeSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteChangeSet action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.DeleteStackConditionKeys">DeleteStackConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteStack action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.DeleteStackInstancesConditionKeys">DeleteStackInstancesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteStackInstances action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.DescribeChangeSetConditionKeys">DescribeChangeSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeChangeSet action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.DescribeChangeSetHooksConditionKeys">DescribeChangeSetHooksConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeChangeSetHooks action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.EstimateTemplateCostConditionKeys">EstimateTemplateCostConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the EstimateTemplateCost action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.ExecuteChangeSetConditionKeys">ExecuteChangeSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ExecuteChangeSet action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.IMPORT_RESOURCE_TYPES">IMPORT_RESOURCE_TYPES</a></code> | <code>string</code> | Condition key: cloudformation:ImportResourceTypes (String). |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.ListAllHookResultsConditionKeys">ListAllHookResultsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAllHookResults action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.ListHookResultsConditionKeys">ListHookResultsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListHookResults action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.RESOURCE_TYPES">RESOURCE_TYPES</a></code> | <code>string</code> | Condition key: cloudformation:ResourceTypes (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.ROLE_ARN">ROLE_ARN</a></code> | <code>string</code> | Condition key: cloudformation:RoleArn (ARN). |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.RollbackStackConditionKeys">RollbackStackConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RollbackStack action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.STACK_POLICY_URL">STACK_POLICY_URL</a></code> | <code>string</code> | Condition key: cloudformation:StackPolicyUrl (String). |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.TARGET_REGION">TARGET_REGION</a></code> | <code>string</code> | Condition key: cloudformation:TargetRegion (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.TEMPLATE_URL">TEMPLATE_URL</a></code> | <code>string</code> | Condition key: cloudformation:TemplateUrl (String). |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.TYPE_ARN">TYPE_ARN</a></code> | <code>string</code> | Condition key: cloudformation:TypeArn (ARN). |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.UpdateStackConditionKeys">UpdateStackConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateStack action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.UpdateStackInstancesConditionKeys">UpdateStackInstancesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateStackInstances action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.UpdateStackSetConditionKeys">UpdateStackSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateStackSet action. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationConditions.property.ValidateTemplateConditionKeys">ValidateTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ValidateTemplate action. |

---

##### `actionGetHookResultConditionKeys`<sup>Required</sup> <a name="actionGetHookResultConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.actionGetHookResultConditionKeys"></a>

```typescript
public readonly actionGetHookResultConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetHookResult action.

---

##### `actionGetTemplateSummaryConditionKeys`<sup>Required</sup> <a name="actionGetTemplateSummaryConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.actionGetTemplateSummaryConditionKeys"></a>

```typescript
public readonly actionGetTemplateSummaryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTemplateSummary action.

---

##### `actionSetStackPolicyConditionKeys`<sup>Required</sup> <a name="actionSetStackPolicyConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.actionSetStackPolicyConditionKeys"></a>

```typescript
public readonly actionSetStackPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SetStackPolicy action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CHANGE_SET_NAME`<sup>Required</sup> <a name="CHANGE_SET_NAME" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.CHANGE_SET_NAME"></a>

```typescript
public readonly CHANGE_SET_NAME: string;
```

- *Type:* string

Condition key: cloudformation:ChangeSetName (String).

---

##### `ContinueUpdateRollbackConditionKeys`<sup>Required</sup> <a name="ContinueUpdateRollbackConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.ContinueUpdateRollbackConditionKeys"></a>

```typescript
public readonly ContinueUpdateRollbackConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ContinueUpdateRollback action.

---

##### `CREATE_ACTION`<sup>Required</sup> <a name="CREATE_ACTION" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.CREATE_ACTION"></a>

```typescript
public readonly CREATE_ACTION: string;
```

- *Type:* string

Condition key: cloudformation:CreateAction (String).

---

##### `CreateChangeSetConditionKeys`<sup>Required</sup> <a name="CreateChangeSetConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.CreateChangeSetConditionKeys"></a>

```typescript
public readonly CreateChangeSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChangeSet action.

---

##### `CreateStackConditionKeys`<sup>Required</sup> <a name="CreateStackConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.CreateStackConditionKeys"></a>

```typescript
public readonly CreateStackConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStack action.

---

##### `CreateStackInstancesConditionKeys`<sup>Required</sup> <a name="CreateStackInstancesConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.CreateStackInstancesConditionKeys"></a>

```typescript
public readonly CreateStackInstancesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStackInstances action.

---

##### `CreateStackSetConditionKeys`<sup>Required</sup> <a name="CreateStackSetConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.CreateStackSetConditionKeys"></a>

```typescript
public readonly CreateStackSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStackSet action.

---

##### `DeleteChangeSetConditionKeys`<sup>Required</sup> <a name="DeleteChangeSetConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.DeleteChangeSetConditionKeys"></a>

```typescript
public readonly DeleteChangeSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteChangeSet action.

---

##### `DeleteStackConditionKeys`<sup>Required</sup> <a name="DeleteStackConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.DeleteStackConditionKeys"></a>

```typescript
public readonly DeleteStackConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteStack action.

---

##### `DeleteStackInstancesConditionKeys`<sup>Required</sup> <a name="DeleteStackInstancesConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.DeleteStackInstancesConditionKeys"></a>

```typescript
public readonly DeleteStackInstancesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteStackInstances action.

---

##### `DescribeChangeSetConditionKeys`<sup>Required</sup> <a name="DescribeChangeSetConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.DescribeChangeSetConditionKeys"></a>

```typescript
public readonly DescribeChangeSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeChangeSet action.

---

##### `DescribeChangeSetHooksConditionKeys`<sup>Required</sup> <a name="DescribeChangeSetHooksConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.DescribeChangeSetHooksConditionKeys"></a>

```typescript
public readonly DescribeChangeSetHooksConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeChangeSetHooks action.

---

##### `EstimateTemplateCostConditionKeys`<sup>Required</sup> <a name="EstimateTemplateCostConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.EstimateTemplateCostConditionKeys"></a>

```typescript
public readonly EstimateTemplateCostConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the EstimateTemplateCost action.

---

##### `ExecuteChangeSetConditionKeys`<sup>Required</sup> <a name="ExecuteChangeSetConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.ExecuteChangeSetConditionKeys"></a>

```typescript
public readonly ExecuteChangeSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ExecuteChangeSet action.

---

##### `IMPORT_RESOURCE_TYPES`<sup>Required</sup> <a name="IMPORT_RESOURCE_TYPES" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.IMPORT_RESOURCE_TYPES"></a>

```typescript
public readonly IMPORT_RESOURCE_TYPES: string;
```

- *Type:* string

Condition key: cloudformation:ImportResourceTypes (String).

---

##### `ListAllHookResultsConditionKeys`<sup>Required</sup> <a name="ListAllHookResultsConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.ListAllHookResultsConditionKeys"></a>

```typescript
public readonly ListAllHookResultsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAllHookResults action.

---

##### `ListHookResultsConditionKeys`<sup>Required</sup> <a name="ListHookResultsConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.ListHookResultsConditionKeys"></a>

```typescript
public readonly ListHookResultsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListHookResults action.

---

##### `RESOURCE_TYPES`<sup>Required</sup> <a name="RESOURCE_TYPES" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.RESOURCE_TYPES"></a>

```typescript
public readonly RESOURCE_TYPES: string;
```

- *Type:* string

Condition key: cloudformation:ResourceTypes (ArrayOfString).

---

##### `ROLE_ARN`<sup>Required</sup> <a name="ROLE_ARN" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.ROLE_ARN"></a>

```typescript
public readonly ROLE_ARN: string;
```

- *Type:* string

Condition key: cloudformation:RoleArn (ARN).

---

##### `RollbackStackConditionKeys`<sup>Required</sup> <a name="RollbackStackConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.RollbackStackConditionKeys"></a>

```typescript
public readonly RollbackStackConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RollbackStack action.

---

##### `STACK_POLICY_URL`<sup>Required</sup> <a name="STACK_POLICY_URL" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.STACK_POLICY_URL"></a>

```typescript
public readonly STACK_POLICY_URL: string;
```

- *Type:* string

Condition key: cloudformation:StackPolicyUrl (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TARGET_REGION`<sup>Required</sup> <a name="TARGET_REGION" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.TARGET_REGION"></a>

```typescript
public readonly TARGET_REGION: string;
```

- *Type:* string

Condition key: cloudformation:TargetRegion (ArrayOfString).

---

##### `TEMPLATE_URL`<sup>Required</sup> <a name="TEMPLATE_URL" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.TEMPLATE_URL"></a>

```typescript
public readonly TEMPLATE_URL: string;
```

- *Type:* string

Condition key: cloudformation:TemplateUrl (String).

---

##### `TYPE_ARN`<sup>Required</sup> <a name="TYPE_ARN" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.TYPE_ARN"></a>

```typescript
public readonly TYPE_ARN: string;
```

- *Type:* string

Condition key: cloudformation:TypeArn (ARN).

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateStackConditionKeys`<sup>Required</sup> <a name="UpdateStackConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.UpdateStackConditionKeys"></a>

```typescript
public readonly UpdateStackConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateStack action.

---

##### `UpdateStackInstancesConditionKeys`<sup>Required</sup> <a name="UpdateStackInstancesConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.UpdateStackInstancesConditionKeys"></a>

```typescript
public readonly UpdateStackInstancesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateStackInstances action.

---

##### `UpdateStackSetConditionKeys`<sup>Required</sup> <a name="UpdateStackSetConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.UpdateStackSetConditionKeys"></a>

```typescript
public readonly UpdateStackSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateStackSet action.

---

##### `ValidateTemplateConditionKeys`<sup>Required</sup> <a name="ValidateTemplateConditionKeys" id="@cdk_utils/iam.cloudformation.CloudFormationConditions.property.ValidateTemplateConditionKeys"></a>

```typescript
public readonly ValidateTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ValidateTemplate action.

---

### CloudFormationOperations <a name="CloudFormationOperations" id="@cdk_utils/iam.cloudformation.CloudFormationOperations"></a>

API operation to required IAM actions mapping for cloudformation.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

new cloudformation.CloudFormationOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ActivateOrganizationsAccess">ActivateOrganizationsAccess</a></code> | <code>string[]</code> | IAM actions required for the ActivateOrganizationsAccess API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ActivateType">ActivateType</a></code> | <code>string[]</code> | IAM actions required for the ActivateType API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.BatchDescribeTypeConfigurations">BatchDescribeTypeConfigurations</a></code> | <code>string[]</code> | IAM actions required for the BatchDescribeTypeConfigurations API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.CancelResourceRequest">CancelResourceRequest</a></code> | <code>string[]</code> | IAM actions required for the CancelResourceRequest API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.CancelUpdateStack">CancelUpdateStack</a></code> | <code>string[]</code> | IAM actions required for the CancelUpdateStack API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ContinueUpdateRollback">ContinueUpdateRollback</a></code> | <code>string[]</code> | IAM actions required for the ContinueUpdateRollback API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.CreateChangeSet">CreateChangeSet</a></code> | <code>string[]</code> | IAM actions required for the CreateChangeSet API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.CreateGeneratedTemplate">CreateGeneratedTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateGeneratedTemplate API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.CreateResource">CreateResource</a></code> | <code>string[]</code> | IAM actions required for the CreateResource API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.CreateStack">CreateStack</a></code> | <code>string[]</code> | IAM actions required for the CreateStack API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.CreateStackInstances">CreateStackInstances</a></code> | <code>string[]</code> | IAM actions required for the CreateStackInstances API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.CreateStackRefactor">CreateStackRefactor</a></code> | <code>string[]</code> | IAM actions required for the CreateStackRefactor API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.CreateStackSet">CreateStackSet</a></code> | <code>string[]</code> | IAM actions required for the CreateStackSet API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DeactivateOrganizationsAccess">DeactivateOrganizationsAccess</a></code> | <code>string[]</code> | IAM actions required for the DeactivateOrganizationsAccess API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DeactivateType">DeactivateType</a></code> | <code>string[]</code> | IAM actions required for the DeactivateType API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DeleteChangeSet">DeleteChangeSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteChangeSet API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DeleteGeneratedTemplate">DeleteGeneratedTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteGeneratedTemplate API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DeleteResource">DeleteResource</a></code> | <code>string[]</code> | IAM actions required for the DeleteResource API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DeleteStack">DeleteStack</a></code> | <code>string[]</code> | IAM actions required for the DeleteStack API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DeleteStackInstances">DeleteStackInstances</a></code> | <code>string[]</code> | IAM actions required for the DeleteStackInstances API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DeleteStackSet">DeleteStackSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteStackSet API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DeregisterType">DeregisterType</a></code> | <code>string[]</code> | IAM actions required for the DeregisterType API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeAccountLimits">DescribeAccountLimits</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountLimits API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeChangeSet">DescribeChangeSet</a></code> | <code>string[]</code> | IAM actions required for the DescribeChangeSet API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeChangeSetHooks">DescribeChangeSetHooks</a></code> | <code>string[]</code> | IAM actions required for the DescribeChangeSetHooks API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeEvents">DescribeEvents</a></code> | <code>string[]</code> | IAM actions required for the DescribeEvents API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeGeneratedTemplate">DescribeGeneratedTemplate</a></code> | <code>string[]</code> | IAM actions required for the DescribeGeneratedTemplate API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeOrganizationsAccess">DescribeOrganizationsAccess</a></code> | <code>string[]</code> | IAM actions required for the DescribeOrganizationsAccess API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribePublisher">DescribePublisher</a></code> | <code>string[]</code> | IAM actions required for the DescribePublisher API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeResourceScan">DescribeResourceScan</a></code> | <code>string[]</code> | IAM actions required for the DescribeResourceScan API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStackDriftDetectionStatus">DescribeStackDriftDetectionStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeStackDriftDetectionStatus API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStackEvents">DescribeStackEvents</a></code> | <code>string[]</code> | IAM actions required for the DescribeStackEvents API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStackInstance">DescribeStackInstance</a></code> | <code>string[]</code> | IAM actions required for the DescribeStackInstance API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStackRefactor">DescribeStackRefactor</a></code> | <code>string[]</code> | IAM actions required for the DescribeStackRefactor API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStackResource">DescribeStackResource</a></code> | <code>string[]</code> | IAM actions required for the DescribeStackResource API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStackResourceDrifts">DescribeStackResourceDrifts</a></code> | <code>string[]</code> | IAM actions required for the DescribeStackResourceDrifts API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStackResources">DescribeStackResources</a></code> | <code>string[]</code> | IAM actions required for the DescribeStackResources API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStacks">DescribeStacks</a></code> | <code>string[]</code> | IAM actions required for the DescribeStacks API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStackSet">DescribeStackSet</a></code> | <code>string[]</code> | IAM actions required for the DescribeStackSet API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStackSetOperation">DescribeStackSetOperation</a></code> | <code>string[]</code> | IAM actions required for the DescribeStackSetOperation API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeType">DescribeType</a></code> | <code>string[]</code> | IAM actions required for the DescribeType API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeTypeRegistration">DescribeTypeRegistration</a></code> | <code>string[]</code> | IAM actions required for the DescribeTypeRegistration API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DetectStackDrift">DetectStackDrift</a></code> | <code>string[]</code> | IAM actions required for the DetectStackDrift API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DetectStackResourceDrift">DetectStackResourceDrift</a></code> | <code>string[]</code> | IAM actions required for the DetectStackResourceDrift API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DetectStackSetDrift">DetectStackSetDrift</a></code> | <code>string[]</code> | IAM actions required for the DetectStackSetDrift API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.EstimateTemplateCost">EstimateTemplateCost</a></code> | <code>string[]</code> | IAM actions required for the EstimateTemplateCost API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ExecuteChangeSet">ExecuteChangeSet</a></code> | <code>string[]</code> | IAM actions required for the ExecuteChangeSet API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ExecuteStackRefactor">ExecuteStackRefactor</a></code> | <code>string[]</code> | IAM actions required for the ExecuteStackRefactor API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ImportStacksToStackSet">ImportStacksToStackSet</a></code> | <code>string[]</code> | IAM actions required for the ImportStacksToStackSet API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListChangeSets">ListChangeSets</a></code> | <code>string[]</code> | IAM actions required for the ListChangeSets API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListExports">ListExports</a></code> | <code>string[]</code> | IAM actions required for the ListExports API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListGeneratedTemplates">ListGeneratedTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListGeneratedTemplates API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListHookResults">ListHookResults</a></code> | <code>string[]</code> | IAM actions required for the ListHookResults API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListImports">ListImports</a></code> | <code>string[]</code> | IAM actions required for the ListImports API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListResourceRequests">ListResourceRequests</a></code> | <code>string[]</code> | IAM actions required for the ListResourceRequests API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListResources">ListResources</a></code> | <code>string[]</code> | IAM actions required for the ListResources API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListResourceScanRelatedResources">ListResourceScanRelatedResources</a></code> | <code>string[]</code> | IAM actions required for the ListResourceScanRelatedResources API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListResourceScanResources">ListResourceScanResources</a></code> | <code>string[]</code> | IAM actions required for the ListResourceScanResources API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListResourceScans">ListResourceScans</a></code> | <code>string[]</code> | IAM actions required for the ListResourceScans API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStackInstanceResourceDrifts">ListStackInstanceResourceDrifts</a></code> | <code>string[]</code> | IAM actions required for the ListStackInstanceResourceDrifts API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStackInstances">ListStackInstances</a></code> | <code>string[]</code> | IAM actions required for the ListStackInstances API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStackRefactorActions">ListStackRefactorActions</a></code> | <code>string[]</code> | IAM actions required for the ListStackRefactorActions API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStackRefactors">ListStackRefactors</a></code> | <code>string[]</code> | IAM actions required for the ListStackRefactors API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStackResources">ListStackResources</a></code> | <code>string[]</code> | IAM actions required for the ListStackResources API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStacks">ListStacks</a></code> | <code>string[]</code> | IAM actions required for the ListStacks API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStackSetAutoDeploymentTargets">ListStackSetAutoDeploymentTargets</a></code> | <code>string[]</code> | IAM actions required for the ListStackSetAutoDeploymentTargets API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStackSetOperationResults">ListStackSetOperationResults</a></code> | <code>string[]</code> | IAM actions required for the ListStackSetOperationResults API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStackSetOperations">ListStackSetOperations</a></code> | <code>string[]</code> | IAM actions required for the ListStackSetOperations API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStackSets">ListStackSets</a></code> | <code>string[]</code> | IAM actions required for the ListStackSets API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListTypeRegistrations">ListTypeRegistrations</a></code> | <code>string[]</code> | IAM actions required for the ListTypeRegistrations API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListTypes">ListTypes</a></code> | <code>string[]</code> | IAM actions required for the ListTypes API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListTypeVersions">ListTypeVersions</a></code> | <code>string[]</code> | IAM actions required for the ListTypeVersions API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opGetGeneratedTemplate">opGetGeneratedTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetGeneratedTemplate API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opGetHookResult">opGetHookResult</a></code> | <code>string[]</code> | IAM actions required for the GetHookResult API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opGetResource">opGetResource</a></code> | <code>string[]</code> | IAM actions required for the GetResource API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opGetResourceRequestStatus">opGetResourceRequestStatus</a></code> | <code>string[]</code> | IAM actions required for the GetResourceRequestStatus API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opGetStackPolicy">opGetStackPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetStackPolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opGetTemplate">opGetTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetTemplate API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opGetTemplateSummary">opGetTemplateSummary</a></code> | <code>string[]</code> | IAM actions required for the GetTemplateSummary API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opSetStackPolicy">opSetStackPolicy</a></code> | <code>string[]</code> | IAM actions required for the SetStackPolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opSetTypeConfiguration">opSetTypeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the SetTypeConfiguration API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opSetTypeDefaultVersion">opSetTypeDefaultVersion</a></code> | <code>string[]</code> | IAM actions required for the SetTypeDefaultVersion API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.PublishType">PublishType</a></code> | <code>string[]</code> | IAM actions required for the PublishType API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.RecordHandlerProgress">RecordHandlerProgress</a></code> | <code>string[]</code> | IAM actions required for the RecordHandlerProgress API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.RegisterPublisher">RegisterPublisher</a></code> | <code>string[]</code> | IAM actions required for the RegisterPublisher API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.RegisterType">RegisterType</a></code> | <code>string[]</code> | IAM actions required for the RegisterType API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.RollbackStack">RollbackStack</a></code> | <code>string[]</code> | IAM actions required for the RollbackStack API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.SignalResource">SignalResource</a></code> | <code>string[]</code> | IAM actions required for the SignalResource API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.StartResourceScan">StartResourceScan</a></code> | <code>string[]</code> | IAM actions required for the StartResourceScan API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.StopStackSetOperation">StopStackSetOperation</a></code> | <code>string[]</code> | IAM actions required for the StopStackSetOperation API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.TestType">TestType</a></code> | <code>string[]</code> | IAM actions required for the TestType API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.UpdateGeneratedTemplate">UpdateGeneratedTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateGeneratedTemplate API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.UpdateResource">UpdateResource</a></code> | <code>string[]</code> | IAM actions required for the UpdateResource API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.UpdateStack">UpdateStack</a></code> | <code>string[]</code> | IAM actions required for the UpdateStack API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.UpdateStackInstances">UpdateStackInstances</a></code> | <code>string[]</code> | IAM actions required for the UpdateStackInstances API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.UpdateStackSet">UpdateStackSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateStackSet API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.UpdateTerminationProtection">UpdateTerminationProtection</a></code> | <code>string[]</code> | IAM actions required for the UpdateTerminationProtection API call. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ValidateTemplate">ValidateTemplate</a></code> | <code>string[]</code> | IAM actions required for the ValidateTemplate API call. |

---

##### `ActivateOrganizationsAccess`<sup>Required</sup> <a name="ActivateOrganizationsAccess" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ActivateOrganizationsAccess"></a>

```typescript
public readonly ActivateOrganizationsAccess: string[];
```

- *Type:* string[]

IAM actions required for the ActivateOrganizationsAccess API call.

---

##### `ActivateType`<sup>Required</sup> <a name="ActivateType" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ActivateType"></a>

```typescript
public readonly ActivateType: string[];
```

- *Type:* string[]

IAM actions required for the ActivateType API call.

---

##### `BatchDescribeTypeConfigurations`<sup>Required</sup> <a name="BatchDescribeTypeConfigurations" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.BatchDescribeTypeConfigurations"></a>

```typescript
public readonly BatchDescribeTypeConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the BatchDescribeTypeConfigurations API call.

---

##### `CancelResourceRequest`<sup>Required</sup> <a name="CancelResourceRequest" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.CancelResourceRequest"></a>

```typescript
public readonly CancelResourceRequest: string[];
```

- *Type:* string[]

IAM actions required for the CancelResourceRequest API call.

---

##### `CancelUpdateStack`<sup>Required</sup> <a name="CancelUpdateStack" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.CancelUpdateStack"></a>

```typescript
public readonly CancelUpdateStack: string[];
```

- *Type:* string[]

IAM actions required for the CancelUpdateStack API call.

---

##### `ContinueUpdateRollback`<sup>Required</sup> <a name="ContinueUpdateRollback" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ContinueUpdateRollback"></a>

```typescript
public readonly ContinueUpdateRollback: string[];
```

- *Type:* string[]

IAM actions required for the ContinueUpdateRollback API call.

---

##### `CreateChangeSet`<sup>Required</sup> <a name="CreateChangeSet" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.CreateChangeSet"></a>

```typescript
public readonly CreateChangeSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateChangeSet API call.

---

##### `CreateGeneratedTemplate`<sup>Required</sup> <a name="CreateGeneratedTemplate" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.CreateGeneratedTemplate"></a>

```typescript
public readonly CreateGeneratedTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateGeneratedTemplate API call.

---

##### `CreateResource`<sup>Required</sup> <a name="CreateResource" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.CreateResource"></a>

```typescript
public readonly CreateResource: string[];
```

- *Type:* string[]

IAM actions required for the CreateResource API call.

---

##### `CreateStack`<sup>Required</sup> <a name="CreateStack" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.CreateStack"></a>

```typescript
public readonly CreateStack: string[];
```

- *Type:* string[]

IAM actions required for the CreateStack API call.

---

##### `CreateStackInstances`<sup>Required</sup> <a name="CreateStackInstances" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.CreateStackInstances"></a>

```typescript
public readonly CreateStackInstances: string[];
```

- *Type:* string[]

IAM actions required for the CreateStackInstances API call.

---

##### `CreateStackRefactor`<sup>Required</sup> <a name="CreateStackRefactor" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.CreateStackRefactor"></a>

```typescript
public readonly CreateStackRefactor: string[];
```

- *Type:* string[]

IAM actions required for the CreateStackRefactor API call.

---

##### `CreateStackSet`<sup>Required</sup> <a name="CreateStackSet" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.CreateStackSet"></a>

```typescript
public readonly CreateStackSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateStackSet API call.

---

##### `DeactivateOrganizationsAccess`<sup>Required</sup> <a name="DeactivateOrganizationsAccess" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DeactivateOrganizationsAccess"></a>

```typescript
public readonly DeactivateOrganizationsAccess: string[];
```

- *Type:* string[]

IAM actions required for the DeactivateOrganizationsAccess API call.

---

##### `DeactivateType`<sup>Required</sup> <a name="DeactivateType" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DeactivateType"></a>

```typescript
public readonly DeactivateType: string[];
```

- *Type:* string[]

IAM actions required for the DeactivateType API call.

---

##### `DeleteChangeSet`<sup>Required</sup> <a name="DeleteChangeSet" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DeleteChangeSet"></a>

```typescript
public readonly DeleteChangeSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChangeSet API call.

---

##### `DeleteGeneratedTemplate`<sup>Required</sup> <a name="DeleteGeneratedTemplate" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DeleteGeneratedTemplate"></a>

```typescript
public readonly DeleteGeneratedTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGeneratedTemplate API call.

---

##### `DeleteResource`<sup>Required</sup> <a name="DeleteResource" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DeleteResource"></a>

```typescript
public readonly DeleteResource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResource API call.

---

##### `DeleteStack`<sup>Required</sup> <a name="DeleteStack" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DeleteStack"></a>

```typescript
public readonly DeleteStack: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStack API call.

---

##### `DeleteStackInstances`<sup>Required</sup> <a name="DeleteStackInstances" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DeleteStackInstances"></a>

```typescript
public readonly DeleteStackInstances: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStackInstances API call.

---

##### `DeleteStackSet`<sup>Required</sup> <a name="DeleteStackSet" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DeleteStackSet"></a>

```typescript
public readonly DeleteStackSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStackSet API call.

---

##### `DeregisterType`<sup>Required</sup> <a name="DeregisterType" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DeregisterType"></a>

```typescript
public readonly DeregisterType: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterType API call.

---

##### `DescribeAccountLimits`<sup>Required</sup> <a name="DescribeAccountLimits" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeAccountLimits"></a>

```typescript
public readonly DescribeAccountLimits: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountLimits API call.

---

##### `DescribeChangeSet`<sup>Required</sup> <a name="DescribeChangeSet" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeChangeSet"></a>

```typescript
public readonly DescribeChangeSet: string[];
```

- *Type:* string[]

IAM actions required for the DescribeChangeSet API call.

---

##### `DescribeChangeSetHooks`<sup>Required</sup> <a name="DescribeChangeSetHooks" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeChangeSetHooks"></a>

```typescript
public readonly DescribeChangeSetHooks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeChangeSetHooks API call.

---

##### `DescribeEvents`<sup>Required</sup> <a name="DescribeEvents" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeEvents"></a>

```typescript
public readonly DescribeEvents: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEvents API call.

---

##### `DescribeGeneratedTemplate`<sup>Required</sup> <a name="DescribeGeneratedTemplate" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeGeneratedTemplate"></a>

```typescript
public readonly DescribeGeneratedTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGeneratedTemplate API call.

---

##### `DescribeOrganizationsAccess`<sup>Required</sup> <a name="DescribeOrganizationsAccess" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeOrganizationsAccess"></a>

```typescript
public readonly DescribeOrganizationsAccess: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOrganizationsAccess API call.

---

##### `DescribePublisher`<sup>Required</sup> <a name="DescribePublisher" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribePublisher"></a>

```typescript
public readonly DescribePublisher: string[];
```

- *Type:* string[]

IAM actions required for the DescribePublisher API call.

---

##### `DescribeResourceScan`<sup>Required</sup> <a name="DescribeResourceScan" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeResourceScan"></a>

```typescript
public readonly DescribeResourceScan: string[];
```

- *Type:* string[]

IAM actions required for the DescribeResourceScan API call.

---

##### `DescribeStackDriftDetectionStatus`<sup>Required</sup> <a name="DescribeStackDriftDetectionStatus" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStackDriftDetectionStatus"></a>

```typescript
public readonly DescribeStackDriftDetectionStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStackDriftDetectionStatus API call.

---

##### `DescribeStackEvents`<sup>Required</sup> <a name="DescribeStackEvents" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStackEvents"></a>

```typescript
public readonly DescribeStackEvents: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStackEvents API call.

---

##### `DescribeStackInstance`<sup>Required</sup> <a name="DescribeStackInstance" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStackInstance"></a>

```typescript
public readonly DescribeStackInstance: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStackInstance API call.

---

##### `DescribeStackRefactor`<sup>Required</sup> <a name="DescribeStackRefactor" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStackRefactor"></a>

```typescript
public readonly DescribeStackRefactor: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStackRefactor API call.

---

##### `DescribeStackResource`<sup>Required</sup> <a name="DescribeStackResource" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStackResource"></a>

```typescript
public readonly DescribeStackResource: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStackResource API call.

---

##### `DescribeStackResourceDrifts`<sup>Required</sup> <a name="DescribeStackResourceDrifts" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStackResourceDrifts"></a>

```typescript
public readonly DescribeStackResourceDrifts: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStackResourceDrifts API call.

---

##### `DescribeStackResources`<sup>Required</sup> <a name="DescribeStackResources" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStackResources"></a>

```typescript
public readonly DescribeStackResources: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStackResources API call.

---

##### `DescribeStacks`<sup>Required</sup> <a name="DescribeStacks" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStacks"></a>

```typescript
public readonly DescribeStacks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStacks API call.

---

##### `DescribeStackSet`<sup>Required</sup> <a name="DescribeStackSet" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStackSet"></a>

```typescript
public readonly DescribeStackSet: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStackSet API call.

---

##### `DescribeStackSetOperation`<sup>Required</sup> <a name="DescribeStackSetOperation" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeStackSetOperation"></a>

```typescript
public readonly DescribeStackSetOperation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStackSetOperation API call.

---

##### `DescribeType`<sup>Required</sup> <a name="DescribeType" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeType"></a>

```typescript
public readonly DescribeType: string[];
```

- *Type:* string[]

IAM actions required for the DescribeType API call.

---

##### `DescribeTypeRegistration`<sup>Required</sup> <a name="DescribeTypeRegistration" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DescribeTypeRegistration"></a>

```typescript
public readonly DescribeTypeRegistration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTypeRegistration API call.

---

##### `DetectStackDrift`<sup>Required</sup> <a name="DetectStackDrift" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DetectStackDrift"></a>

```typescript
public readonly DetectStackDrift: string[];
```

- *Type:* string[]

IAM actions required for the DetectStackDrift API call.

---

##### `DetectStackResourceDrift`<sup>Required</sup> <a name="DetectStackResourceDrift" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DetectStackResourceDrift"></a>

```typescript
public readonly DetectStackResourceDrift: string[];
```

- *Type:* string[]

IAM actions required for the DetectStackResourceDrift API call.

---

##### `DetectStackSetDrift`<sup>Required</sup> <a name="DetectStackSetDrift" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.DetectStackSetDrift"></a>

```typescript
public readonly DetectStackSetDrift: string[];
```

- *Type:* string[]

IAM actions required for the DetectStackSetDrift API call.

---

##### `EstimateTemplateCost`<sup>Required</sup> <a name="EstimateTemplateCost" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.EstimateTemplateCost"></a>

```typescript
public readonly EstimateTemplateCost: string[];
```

- *Type:* string[]

IAM actions required for the EstimateTemplateCost API call.

---

##### `ExecuteChangeSet`<sup>Required</sup> <a name="ExecuteChangeSet" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ExecuteChangeSet"></a>

```typescript
public readonly ExecuteChangeSet: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteChangeSet API call.

---

##### `ExecuteStackRefactor`<sup>Required</sup> <a name="ExecuteStackRefactor" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ExecuteStackRefactor"></a>

```typescript
public readonly ExecuteStackRefactor: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteStackRefactor API call.

---

##### `ImportStacksToStackSet`<sup>Required</sup> <a name="ImportStacksToStackSet" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ImportStacksToStackSet"></a>

```typescript
public readonly ImportStacksToStackSet: string[];
```

- *Type:* string[]

IAM actions required for the ImportStacksToStackSet API call.

---

##### `ListChangeSets`<sup>Required</sup> <a name="ListChangeSets" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListChangeSets"></a>

```typescript
public readonly ListChangeSets: string[];
```

- *Type:* string[]

IAM actions required for the ListChangeSets API call.

---

##### `ListExports`<sup>Required</sup> <a name="ListExports" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListExports"></a>

```typescript
public readonly ListExports: string[];
```

- *Type:* string[]

IAM actions required for the ListExports API call.

---

##### `ListGeneratedTemplates`<sup>Required</sup> <a name="ListGeneratedTemplates" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListGeneratedTemplates"></a>

```typescript
public readonly ListGeneratedTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListGeneratedTemplates API call.

---

##### `ListHookResults`<sup>Required</sup> <a name="ListHookResults" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListHookResults"></a>

```typescript
public readonly ListHookResults: string[];
```

- *Type:* string[]

IAM actions required for the ListHookResults API call.

---

##### `ListImports`<sup>Required</sup> <a name="ListImports" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListImports"></a>

```typescript
public readonly ListImports: string[];
```

- *Type:* string[]

IAM actions required for the ListImports API call.

---

##### `ListResourceRequests`<sup>Required</sup> <a name="ListResourceRequests" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListResourceRequests"></a>

```typescript
public readonly ListResourceRequests: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceRequests API call.

---

##### `ListResources`<sup>Required</sup> <a name="ListResources" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListResources"></a>

```typescript
public readonly ListResources: string[];
```

- *Type:* string[]

IAM actions required for the ListResources API call.

---

##### `ListResourceScanRelatedResources`<sup>Required</sup> <a name="ListResourceScanRelatedResources" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListResourceScanRelatedResources"></a>

```typescript
public readonly ListResourceScanRelatedResources: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceScanRelatedResources API call.

---

##### `ListResourceScanResources`<sup>Required</sup> <a name="ListResourceScanResources" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListResourceScanResources"></a>

```typescript
public readonly ListResourceScanResources: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceScanResources API call.

---

##### `ListResourceScans`<sup>Required</sup> <a name="ListResourceScans" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListResourceScans"></a>

```typescript
public readonly ListResourceScans: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceScans API call.

---

##### `ListStackInstanceResourceDrifts`<sup>Required</sup> <a name="ListStackInstanceResourceDrifts" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStackInstanceResourceDrifts"></a>

```typescript
public readonly ListStackInstanceResourceDrifts: string[];
```

- *Type:* string[]

IAM actions required for the ListStackInstanceResourceDrifts API call.

---

##### `ListStackInstances`<sup>Required</sup> <a name="ListStackInstances" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStackInstances"></a>

```typescript
public readonly ListStackInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListStackInstances API call.

---

##### `ListStackRefactorActions`<sup>Required</sup> <a name="ListStackRefactorActions" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStackRefactorActions"></a>

```typescript
public readonly ListStackRefactorActions: string[];
```

- *Type:* string[]

IAM actions required for the ListStackRefactorActions API call.

---

##### `ListStackRefactors`<sup>Required</sup> <a name="ListStackRefactors" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStackRefactors"></a>

```typescript
public readonly ListStackRefactors: string[];
```

- *Type:* string[]

IAM actions required for the ListStackRefactors API call.

---

##### `ListStackResources`<sup>Required</sup> <a name="ListStackResources" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStackResources"></a>

```typescript
public readonly ListStackResources: string[];
```

- *Type:* string[]

IAM actions required for the ListStackResources API call.

---

##### `ListStacks`<sup>Required</sup> <a name="ListStacks" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStacks"></a>

```typescript
public readonly ListStacks: string[];
```

- *Type:* string[]

IAM actions required for the ListStacks API call.

---

##### `ListStackSetAutoDeploymentTargets`<sup>Required</sup> <a name="ListStackSetAutoDeploymentTargets" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStackSetAutoDeploymentTargets"></a>

```typescript
public readonly ListStackSetAutoDeploymentTargets: string[];
```

- *Type:* string[]

IAM actions required for the ListStackSetAutoDeploymentTargets API call.

---

##### `ListStackSetOperationResults`<sup>Required</sup> <a name="ListStackSetOperationResults" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStackSetOperationResults"></a>

```typescript
public readonly ListStackSetOperationResults: string[];
```

- *Type:* string[]

IAM actions required for the ListStackSetOperationResults API call.

---

##### `ListStackSetOperations`<sup>Required</sup> <a name="ListStackSetOperations" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStackSetOperations"></a>

```typescript
public readonly ListStackSetOperations: string[];
```

- *Type:* string[]

IAM actions required for the ListStackSetOperations API call.

---

##### `ListStackSets`<sup>Required</sup> <a name="ListStackSets" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListStackSets"></a>

```typescript
public readonly ListStackSets: string[];
```

- *Type:* string[]

IAM actions required for the ListStackSets API call.

---

##### `ListTypeRegistrations`<sup>Required</sup> <a name="ListTypeRegistrations" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListTypeRegistrations"></a>

```typescript
public readonly ListTypeRegistrations: string[];
```

- *Type:* string[]

IAM actions required for the ListTypeRegistrations API call.

---

##### `ListTypes`<sup>Required</sup> <a name="ListTypes" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListTypes"></a>

```typescript
public readonly ListTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListTypes API call.

---

##### `ListTypeVersions`<sup>Required</sup> <a name="ListTypeVersions" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ListTypeVersions"></a>

```typescript
public readonly ListTypeVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListTypeVersions API call.

---

##### `opGetGeneratedTemplate`<sup>Required</sup> <a name="opGetGeneratedTemplate" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opGetGeneratedTemplate"></a>

```typescript
public readonly opGetGeneratedTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetGeneratedTemplate API call.

---

##### `opGetHookResult`<sup>Required</sup> <a name="opGetHookResult" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opGetHookResult"></a>

```typescript
public readonly opGetHookResult: string[];
```

- *Type:* string[]

IAM actions required for the GetHookResult API call.

---

##### `opGetResource`<sup>Required</sup> <a name="opGetResource" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opGetResource"></a>

```typescript
public readonly opGetResource: string[];
```

- *Type:* string[]

IAM actions required for the GetResource API call.

---

##### `opGetResourceRequestStatus`<sup>Required</sup> <a name="opGetResourceRequestStatus" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opGetResourceRequestStatus"></a>

```typescript
public readonly opGetResourceRequestStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceRequestStatus API call.

---

##### `opGetStackPolicy`<sup>Required</sup> <a name="opGetStackPolicy" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opGetStackPolicy"></a>

```typescript
public readonly opGetStackPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetStackPolicy API call.

---

##### `opGetTemplate`<sup>Required</sup> <a name="opGetTemplate" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opGetTemplate"></a>

```typescript
public readonly opGetTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetTemplate API call.

---

##### `opGetTemplateSummary`<sup>Required</sup> <a name="opGetTemplateSummary" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opGetTemplateSummary"></a>

```typescript
public readonly opGetTemplateSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetTemplateSummary API call.

---

##### `opSetStackPolicy`<sup>Required</sup> <a name="opSetStackPolicy" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opSetStackPolicy"></a>

```typescript
public readonly opSetStackPolicy: string[];
```

- *Type:* string[]

IAM actions required for the SetStackPolicy API call.

---

##### `opSetTypeConfiguration`<sup>Required</sup> <a name="opSetTypeConfiguration" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opSetTypeConfiguration"></a>

```typescript
public readonly opSetTypeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the SetTypeConfiguration API call.

---

##### `opSetTypeDefaultVersion`<sup>Required</sup> <a name="opSetTypeDefaultVersion" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.opSetTypeDefaultVersion"></a>

```typescript
public readonly opSetTypeDefaultVersion: string[];
```

- *Type:* string[]

IAM actions required for the SetTypeDefaultVersion API call.

---

##### `PublishType`<sup>Required</sup> <a name="PublishType" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.PublishType"></a>

```typescript
public readonly PublishType: string[];
```

- *Type:* string[]

IAM actions required for the PublishType API call.

---

##### `RecordHandlerProgress`<sup>Required</sup> <a name="RecordHandlerProgress" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.RecordHandlerProgress"></a>

```typescript
public readonly RecordHandlerProgress: string[];
```

- *Type:* string[]

IAM actions required for the RecordHandlerProgress API call.

---

##### `RegisterPublisher`<sup>Required</sup> <a name="RegisterPublisher" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.RegisterPublisher"></a>

```typescript
public readonly RegisterPublisher: string[];
```

- *Type:* string[]

IAM actions required for the RegisterPublisher API call.

---

##### `RegisterType`<sup>Required</sup> <a name="RegisterType" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.RegisterType"></a>

```typescript
public readonly RegisterType: string[];
```

- *Type:* string[]

IAM actions required for the RegisterType API call.

---

##### `RollbackStack`<sup>Required</sup> <a name="RollbackStack" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.RollbackStack"></a>

```typescript
public readonly RollbackStack: string[];
```

- *Type:* string[]

IAM actions required for the RollbackStack API call.

---

##### `SignalResource`<sup>Required</sup> <a name="SignalResource" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.SignalResource"></a>

```typescript
public readonly SignalResource: string[];
```

- *Type:* string[]

IAM actions required for the SignalResource API call.

---

##### `StartResourceScan`<sup>Required</sup> <a name="StartResourceScan" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.StartResourceScan"></a>

```typescript
public readonly StartResourceScan: string[];
```

- *Type:* string[]

IAM actions required for the StartResourceScan API call.

---

##### `StopStackSetOperation`<sup>Required</sup> <a name="StopStackSetOperation" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.StopStackSetOperation"></a>

```typescript
public readonly StopStackSetOperation: string[];
```

- *Type:* string[]

IAM actions required for the StopStackSetOperation API call.

---

##### `TestType`<sup>Required</sup> <a name="TestType" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.TestType"></a>

```typescript
public readonly TestType: string[];
```

- *Type:* string[]

IAM actions required for the TestType API call.

---

##### `UpdateGeneratedTemplate`<sup>Required</sup> <a name="UpdateGeneratedTemplate" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.UpdateGeneratedTemplate"></a>

```typescript
public readonly UpdateGeneratedTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGeneratedTemplate API call.

---

##### `UpdateResource`<sup>Required</sup> <a name="UpdateResource" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.UpdateResource"></a>

```typescript
public readonly UpdateResource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResource API call.

---

##### `UpdateStack`<sup>Required</sup> <a name="UpdateStack" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.UpdateStack"></a>

```typescript
public readonly UpdateStack: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStack API call.

---

##### `UpdateStackInstances`<sup>Required</sup> <a name="UpdateStackInstances" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.UpdateStackInstances"></a>

```typescript
public readonly UpdateStackInstances: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStackInstances API call.

---

##### `UpdateStackSet`<sup>Required</sup> <a name="UpdateStackSet" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.UpdateStackSet"></a>

```typescript
public readonly UpdateStackSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStackSet API call.

---

##### `UpdateTerminationProtection`<sup>Required</sup> <a name="UpdateTerminationProtection" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.UpdateTerminationProtection"></a>

```typescript
public readonly UpdateTerminationProtection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTerminationProtection API call.

---

##### `ValidateTemplate`<sup>Required</sup> <a name="ValidateTemplate" id="@cdk_utils/iam.cloudformation.CloudFormationOperations.property.ValidateTemplate"></a>

```typescript
public readonly ValidateTemplate: string[];
```

- *Type:* string[]

IAM actions required for the ValidateTemplate API call.

---

### CloudFormationResources <a name="CloudFormationResources" id="@cdk_utils/iam.cloudformation.CloudFormationResources"></a>

ARN builders, validators, and parsers for cloudformation resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudformation.CloudFormationResources.Initializer"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

new cloudformation.CloudFormationResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.changeset">changeset</a></code> | Builds an ARN for the changeset resource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.generatedtemplate">generatedtemplate</a></code> | Builds an ARN for the generatedtemplate resource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.isValidChangesetArn">isValidChangesetArn</a></code> | Validates whether a string is a valid ARN for the changeset resource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.isValidGeneratedtemplateArn">isValidGeneratedtemplateArn</a></code> | Validates whether a string is a valid ARN for the generatedtemplate resource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.isValidResourcescanArn">isValidResourcescanArn</a></code> | Validates whether a string is a valid ARN for the resourcescan resource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.isValidStackArn">isValidStackArn</a></code> | Validates whether a string is a valid ARN for the stack resource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.isValidStacksetArn">isValidStacksetArn</a></code> | Validates whether a string is a valid ARN for the stackset resource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.isValidStacksetTargetArn">isValidStacksetTargetArn</a></code> | Validates whether a string is a valid ARN for the stackset-target resource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.isValidTypeArn">isValidTypeArn</a></code> | Validates whether a string is a valid ARN for the type resource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.isValidTypeHookArn">isValidTypeHookArn</a></code> | Validates whether a string is a valid ARN for the typeHook resource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.parseChangesetArn">parseChangesetArn</a></code> | Parses a changeset ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.parseGeneratedtemplateArn">parseGeneratedtemplateArn</a></code> | Parses a generatedtemplate ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.parseResourcescanArn">parseResourcescanArn</a></code> | Parses a resourcescan ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.parseStackArn">parseStackArn</a></code> | Parses a stack ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.parseStacksetArn">parseStacksetArn</a></code> | Parses a stackset ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.parseStacksetTargetArn">parseStacksetTargetArn</a></code> | Parses a stackset-target ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.parseTypeArn">parseTypeArn</a></code> | Parses a type ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.parseTypeHookArn">parseTypeHookArn</a></code> | Parses a typeHook ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.resourcescan">resourcescan</a></code> | Builds an ARN for the resourcescan resource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.stack">stack</a></code> | Builds an ARN for the stack resource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.stackset">stackset</a></code> | Builds an ARN for the stackset resource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.stacksetTarget">stacksetTarget</a></code> | Builds an ARN for the stackset-target resource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.type">type</a></code> | Builds an ARN for the type resource. |
| <code><a href="#@cdk_utils/iam.cloudformation.CloudFormationResources.typeHook">typeHook</a></code> | Builds an ARN for the typeHook resource. |

---

##### `changeset` <a name="changeset" id="@cdk_utils/iam.cloudformation.CloudFormationResources.changeset"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.changeset(props: CloudFormationChangesetArnProps)
```

Builds an ARN for the changeset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudformation.CloudFormationResources.changeset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudformation.CloudFormationChangesetArnProps">CloudFormationChangesetArnProps</a>

---

##### `generatedtemplate` <a name="generatedtemplate" id="@cdk_utils/iam.cloudformation.CloudFormationResources.generatedtemplate"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.generatedtemplate(props: CloudFormationGeneratedtemplateArnProps)
```

Builds an ARN for the generatedtemplate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudformation.CloudFormationResources.generatedtemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudformation.CloudFormationGeneratedtemplateArnProps">CloudFormationGeneratedtemplateArnProps</a>

---

##### `isValidChangesetArn` <a name="isValidChangesetArn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.isValidChangesetArn"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.isValidChangesetArn(arn: string)
```

Validates whether a string is a valid ARN for the changeset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.isValidChangesetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGeneratedtemplateArn` <a name="isValidGeneratedtemplateArn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.isValidGeneratedtemplateArn"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.isValidGeneratedtemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the generatedtemplate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.isValidGeneratedtemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResourcescanArn` <a name="isValidResourcescanArn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.isValidResourcescanArn"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.isValidResourcescanArn(arn: string)
```

Validates whether a string is a valid ARN for the resourcescan resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.isValidResourcescanArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStackArn` <a name="isValidStackArn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.isValidStackArn"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.isValidStackArn(arn: string)
```

Validates whether a string is a valid ARN for the stack resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.isValidStackArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStacksetArn` <a name="isValidStacksetArn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.isValidStacksetArn"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.isValidStacksetArn(arn: string)
```

Validates whether a string is a valid ARN for the stackset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.isValidStacksetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStacksetTargetArn` <a name="isValidStacksetTargetArn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.isValidStacksetTargetArn"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.isValidStacksetTargetArn(arn: string)
```

Validates whether a string is a valid ARN for the stackset-target resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.isValidStacksetTargetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTypeArn` <a name="isValidTypeArn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.isValidTypeArn"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.isValidTypeArn(arn: string)
```

Validates whether a string is a valid ARN for the type resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.isValidTypeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTypeHookArn` <a name="isValidTypeHookArn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.isValidTypeHookArn"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.isValidTypeHookArn(arn: string)
```

Validates whether a string is a valid ARN for the typeHook resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.isValidTypeHookArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChangesetArn` <a name="parseChangesetArn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.parseChangesetArn"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.parseChangesetArn(arn: string)
```

Parses a changeset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.parseChangesetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGeneratedtemplateArn` <a name="parseGeneratedtemplateArn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.parseGeneratedtemplateArn"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.parseGeneratedtemplateArn(arn: string)
```

Parses a generatedtemplate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.parseGeneratedtemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResourcescanArn` <a name="parseResourcescanArn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.parseResourcescanArn"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.parseResourcescanArn(arn: string)
```

Parses a resourcescan ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.parseResourcescanArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStackArn` <a name="parseStackArn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.parseStackArn"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.parseStackArn(arn: string)
```

Parses a stack ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.parseStackArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStacksetArn` <a name="parseStacksetArn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.parseStacksetArn"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.parseStacksetArn(arn: string)
```

Parses a stackset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.parseStacksetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStacksetTargetArn` <a name="parseStacksetTargetArn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.parseStacksetTargetArn"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.parseStacksetTargetArn(arn: string)
```

Parses a stackset-target ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.parseStacksetTargetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTypeArn` <a name="parseTypeArn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.parseTypeArn"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.parseTypeArn(arn: string)
```

Parses a type ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.parseTypeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTypeHookArn` <a name="parseTypeHookArn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.parseTypeHookArn"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.parseTypeHookArn(arn: string)
```

Parses a typeHook ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudformation.CloudFormationResources.parseTypeHookArn.parameter.arn"></a>

- *Type:* string

---

##### `resourcescan` <a name="resourcescan" id="@cdk_utils/iam.cloudformation.CloudFormationResources.resourcescan"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.resourcescan(props: CloudFormationResourcescanArnProps)
```

Builds an ARN for the resourcescan resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudformation.CloudFormationResources.resourcescan.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudformation.CloudFormationResourcescanArnProps">CloudFormationResourcescanArnProps</a>

---

##### `stack` <a name="stack" id="@cdk_utils/iam.cloudformation.CloudFormationResources.stack"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.stack(props: CloudFormationStackArnProps)
```

Builds an ARN for the stack resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudformation.CloudFormationResources.stack.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudformation.CloudFormationStackArnProps">CloudFormationStackArnProps</a>

---

##### `stackset` <a name="stackset" id="@cdk_utils/iam.cloudformation.CloudFormationResources.stackset"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.stackset(props: CloudFormationStacksetArnProps)
```

Builds an ARN for the stackset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudformation.CloudFormationResources.stackset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetArnProps">CloudFormationStacksetArnProps</a>

---

##### `stacksetTarget` <a name="stacksetTarget" id="@cdk_utils/iam.cloudformation.CloudFormationResources.stacksetTarget"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.stacksetTarget(props: CloudFormationStacksetTargetArnProps)
```

Builds an ARN for the stackset-target resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudformation.CloudFormationResources.stacksetTarget.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudformation.CloudFormationStacksetTargetArnProps">CloudFormationStacksetTargetArnProps</a>

---

##### `type` <a name="type" id="@cdk_utils/iam.cloudformation.CloudFormationResources.type"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.type(props: CloudFormationTypeArnProps)
```

Builds an ARN for the type resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudformation.CloudFormationResources.type.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudformation.CloudFormationTypeArnProps">CloudFormationTypeArnProps</a>

---

##### `typeHook` <a name="typeHook" id="@cdk_utils/iam.cloudformation.CloudFormationResources.typeHook"></a>

```typescript
import { cloudformation } from '@cdk_utils/iam'

cloudformation.CloudFormationResources.typeHook(props: CloudFormationTypeHookArnProps)
```

Builds an ARN for the typeHook resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudformation.CloudFormationResources.typeHook.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudformation.CloudFormationTypeHookArnProps">CloudFormationTypeHookArnProps</a>

---




