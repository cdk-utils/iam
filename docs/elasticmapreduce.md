# `elasticmapreduce` Submodule <a name="`elasticmapreduce` Submodule" id="@cdk_utils/iam.elasticmapreduce"></a>


## Structs <a name="Structs" id="Structs"></a>

### ElasticmapreduceClusterArnComponents <a name="ElasticmapreduceClusterArnComponents" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnComponents"></a>

Parsed components of a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnComponents.Initializer"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

const elasticmapreduceClusterArnComponents: elasticmapreduce.ElasticmapreduceClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnComponents.property.clusterId">clusterId</a></code> | <code>string</code> | The ClusterId component. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnComponents.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ClusterId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElasticmapreduceClusterArnProps <a name="ElasticmapreduceClusterArnProps" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnProps"></a>

Properties for building a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnProps.Initializer"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

const elasticmapreduceClusterArnProps: elasticmapreduce.ElasticmapreduceClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnProps.property.clusterId">clusterId</a></code> | <code>string</code> | The ClusterId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnProps.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ClusterId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticmapreduceEditorArnComponents <a name="ElasticmapreduceEditorArnComponents" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnComponents"></a>

Parsed components of a editor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnComponents.Initializer"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

const elasticmapreduceEditorArnComponents: elasticmapreduce.ElasticmapreduceEditorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnComponents.property.editorId">editorId</a></code> | <code>string</code> | The EditorId component. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `editorId`<sup>Required</sup> <a name="editorId" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnComponents.property.editorId"></a>

```typescript
public readonly editorId: string;
```

- *Type:* string

The EditorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElasticmapreduceEditorArnProps <a name="ElasticmapreduceEditorArnProps" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnProps"></a>

Properties for building a editor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnProps.Initializer"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

const elasticmapreduceEditorArnProps: elasticmapreduce.ElasticmapreduceEditorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnProps.property.editorId">editorId</a></code> | <code>string</code> | The EditorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `editorId`<sup>Required</sup> <a name="editorId" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnProps.property.editorId"></a>

```typescript
public readonly editorId: string;
```

- *Type:* string

The EditorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticmapreduceNotebookExecutionArnComponents <a name="ElasticmapreduceNotebookExecutionArnComponents" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnComponents"></a>

Parsed components of a notebook-execution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnComponents.Initializer"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

const elasticmapreduceNotebookExecutionArnComponents: elasticmapreduce.ElasticmapreduceNotebookExecutionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnComponents.property.notebookExecutionId">notebookExecutionId</a></code> | <code>string</code> | The NotebookExecutionId component. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `notebookExecutionId`<sup>Required</sup> <a name="notebookExecutionId" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnComponents.property.notebookExecutionId"></a>

```typescript
public readonly notebookExecutionId: string;
```

- *Type:* string

The NotebookExecutionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElasticmapreduceNotebookExecutionArnProps <a name="ElasticmapreduceNotebookExecutionArnProps" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnProps"></a>

Properties for building a notebook-execution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnProps.Initializer"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

const elasticmapreduceNotebookExecutionArnProps: elasticmapreduce.ElasticmapreduceNotebookExecutionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnProps.property.notebookExecutionId">notebookExecutionId</a></code> | <code>string</code> | The NotebookExecutionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `notebookExecutionId`<sup>Required</sup> <a name="notebookExecutionId" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnProps.property.notebookExecutionId"></a>

```typescript
public readonly notebookExecutionId: string;
```

- *Type:* string

The NotebookExecutionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticmapreduceSessionArnComponents <a name="ElasticmapreduceSessionArnComponents" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnComponents"></a>

Parsed components of a session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnComponents.Initializer"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

const elasticmapreduceSessionArnComponents: elasticmapreduce.ElasticmapreduceSessionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnComponents.property.clusterId">clusterId</a></code> | <code>string</code> | The ClusterId component. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnComponents.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnComponents.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ClusterId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnComponents.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component.

---

### ElasticmapreduceSessionArnProps <a name="ElasticmapreduceSessionArnProps" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnProps"></a>

Properties for building a session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnProps.Initializer"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

const elasticmapreduceSessionArnProps: elasticmapreduce.ElasticmapreduceSessionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnProps.property.clusterId">clusterId</a></code> | <code>string</code> | The ClusterId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnProps.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnProps.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ClusterId component of the ARN.

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnProps.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticmapreduceStudioArnComponents <a name="ElasticmapreduceStudioArnComponents" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnComponents"></a>

Parsed components of a studio ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnComponents.Initializer"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

const elasticmapreduceStudioArnComponents: elasticmapreduce.ElasticmapreduceStudioArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnComponents.property.studioId">studioId</a></code> | <code>string</code> | The StudioId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnComponents.property.studioId"></a>

```typescript
public readonly studioId: string;
```

- *Type:* string

The StudioId component.

---

### ElasticmapreduceStudioArnProps <a name="ElasticmapreduceStudioArnProps" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnProps"></a>

Properties for building a studio ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnProps.Initializer"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

const elasticmapreduceStudioArnProps: elasticmapreduce.ElasticmapreduceStudioArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnProps.property.studioId">studioId</a></code> | <code>string</code> | The StudioId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnProps.property.studioId"></a>

```typescript
public readonly studioId: string;
```

- *Type:* string

The StudioId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticmapreduceActions <a name="ElasticmapreduceActions" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions"></a>

IAM action constants for the elasticmapreduce service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.Initializer"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

new elasticmapreduce.ElasticmapreduceActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AccessAllEventLogs">AccessAllEventLogs</a></code> | <code>string</code> | [Write] elasticmapreduce:AccessAllEventLogs. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionGetAutoTerminationPolicy">actionGetAutoTerminationPolicy</a></code> | <code>string</code> | [Read] elasticmapreduce:GetAutoTerminationPolicy. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionGetBlockPublicAccessConfiguration">actionGetBlockPublicAccessConfiguration</a></code> | <code>string</code> | [Read] elasticmapreduce:GetBlockPublicAccessConfiguration. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionGetClusterSessionCredentials">actionGetClusterSessionCredentials</a></code> | <code>string</code> | [Write] elasticmapreduce:GetClusterSessionCredentials. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionGetManagedScalingPolicy">actionGetManagedScalingPolicy</a></code> | <code>string</code> | [Read] elasticmapreduce:GetManagedScalingPolicy. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionGetOnClusterAppUIPresignedURL">actionGetOnClusterAppUIPresignedURL</a></code> | <code>string</code> | [Write] elasticmapreduce:GetOnClusterAppUIPresignedURL. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionGetPersistentAppUIPresignedURL">actionGetPersistentAppUIPresignedURL</a></code> | <code>string</code> | [Write] elasticmapreduce:GetPersistentAppUIPresignedURL. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionGetSession">actionGetSession</a></code> | <code>string</code> | [Read] elasticmapreduce:GetSession. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionGetSessionEndpoint">actionGetSessionEndpoint</a></code> | <code>string</code> | [Write] elasticmapreduce:GetSessionEndpoint. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionGetStudioSessionMapping">actionGetStudioSessionMapping</a></code> | <code>string</code> | [Read] elasticmapreduce:GetStudioSessionMapping. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionSetKeepJobFlowAliveWhenNoSteps">actionSetKeepJobFlowAliveWhenNoSteps</a></code> | <code>string</code> | [Write] elasticmapreduce:SetKeepJobFlowAliveWhenNoSteps. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionSetTerminationProtection">actionSetTerminationProtection</a></code> | <code>string</code> | [Write] elasticmapreduce:SetTerminationProtection. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionSetUnhealthyNodeReplacement">actionSetUnhealthyNodeReplacement</a></code> | <code>string</code> | [Write] elasticmapreduce:SetUnhealthyNodeReplacement. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionSetVisibleToAllUsers">actionSetVisibleToAllUsers</a></code> | <code>string</code> | [Write] elasticmapreduce:SetVisibleToAllUsers. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AddInstanceFleet">AddInstanceFleet</a></code> | <code>string</code> | [Write] elasticmapreduce:AddInstanceFleet. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AddInstanceGroups">AddInstanceGroups</a></code> | <code>string</code> | [Write] elasticmapreduce:AddInstanceGroups. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AddJobFlowSteps">AddJobFlowSteps</a></code> | <code>string</code> | [Write] elasticmapreduce:AddJobFlowSteps. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AddTags">AddTags</a></code> | <code>string</code> | [Tagging] elasticmapreduce:AddTags. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AttachEditor">AttachEditor</a></code> | <code>string</code> | [Write] elasticmapreduce:AttachEditor. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.CancelSteps">CancelSteps</a></code> | <code>string</code> | [Write] elasticmapreduce:CancelSteps. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.CreateEditor">CreateEditor</a></code> | <code>string</code> | [Write] elasticmapreduce:CreateEditor. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.CreatePersistentAppUI">CreatePersistentAppUI</a></code> | <code>string</code> | [Write] elasticmapreduce:CreatePersistentAppUI. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.CreateRepository">CreateRepository</a></code> | <code>string</code> | [Write] elasticmapreduce:CreateRepository. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.CreateSecurityConfiguration">CreateSecurityConfiguration</a></code> | <code>string</code> | [Write] elasticmapreduce:CreateSecurityConfiguration. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.CreateStudio">CreateStudio</a></code> | <code>string</code> | [Write] elasticmapreduce:CreateStudio. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.CreateStudioPresignedUrl">CreateStudioPresignedUrl</a></code> | <code>string</code> | [Write] elasticmapreduce:CreateStudioPresignedUrl. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.CreateStudioSessionMapping">CreateStudioSessionMapping</a></code> | <code>string</code> | [Write] elasticmapreduce:CreateStudioSessionMapping. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DeleteEditor">DeleteEditor</a></code> | <code>string</code> | [Write] elasticmapreduce:DeleteEditor. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DeleteRepository">DeleteRepository</a></code> | <code>string</code> | [Write] elasticmapreduce:DeleteRepository. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DeleteSecurityConfiguration">DeleteSecurityConfiguration</a></code> | <code>string</code> | [Write] elasticmapreduce:DeleteSecurityConfiguration. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DeleteStudio">DeleteStudio</a></code> | <code>string</code> | [Write] elasticmapreduce:DeleteStudio. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DeleteStudioSessionMapping">DeleteStudioSessionMapping</a></code> | <code>string</code> | [Write] elasticmapreduce:DeleteStudioSessionMapping. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DeleteWorkspaceAccess">DeleteWorkspaceAccess</a></code> | <code>string</code> | [PermissionManagement] elasticmapreduce:DeleteWorkspaceAccess. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribeCluster">DescribeCluster</a></code> | <code>string</code> | [Read] elasticmapreduce:DescribeCluster. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribeEditor">DescribeEditor</a></code> | <code>string</code> | [Read] elasticmapreduce:DescribeEditor. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribeJobFlows">DescribeJobFlows</a></code> | <code>string</code> | [Read] elasticmapreduce:DescribeJobFlows. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribeNotebookExecution">DescribeNotebookExecution</a></code> | <code>string</code> | [Read] elasticmapreduce:DescribeNotebookExecution. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribePersistentAppUI">DescribePersistentAppUI</a></code> | <code>string</code> | [Read] elasticmapreduce:DescribePersistentAppUI. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribeReleaseLabel">DescribeReleaseLabel</a></code> | <code>string</code> | [Read] elasticmapreduce:DescribeReleaseLabel. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribeRepository">DescribeRepository</a></code> | <code>string</code> | [Read] elasticmapreduce:DescribeRepository. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribeSecurityConfiguration">DescribeSecurityConfiguration</a></code> | <code>string</code> | [Read] elasticmapreduce:DescribeSecurityConfiguration. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribeStep">DescribeStep</a></code> | <code>string</code> | [Read] elasticmapreduce:DescribeStep. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribeStudio">DescribeStudio</a></code> | <code>string</code> | [Read] elasticmapreduce:DescribeStudio. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DetachEditor">DetachEditor</a></code> | <code>string</code> | [Write] elasticmapreduce:DetachEditor. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.LinkRepository">LinkRepository</a></code> | <code>string</code> | [Write] elasticmapreduce:LinkRepository. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListBootstrapActions">ListBootstrapActions</a></code> | <code>string</code> | [Read] elasticmapreduce:ListBootstrapActions. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListClusters">ListClusters</a></code> | <code>string</code> | [List] elasticmapreduce:ListClusters. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListEditors">ListEditors</a></code> | <code>string</code> | [List] elasticmapreduce:ListEditors. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListInstanceFleets">ListInstanceFleets</a></code> | <code>string</code> | [Read] elasticmapreduce:ListInstanceFleets. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListInstanceGroups">ListInstanceGroups</a></code> | <code>string</code> | [Read] elasticmapreduce:ListInstanceGroups. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListInstances">ListInstances</a></code> | <code>string</code> | [Read] elasticmapreduce:ListInstances. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListNotebookExecutions">ListNotebookExecutions</a></code> | <code>string</code> | [List] elasticmapreduce:ListNotebookExecutions. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListReleaseLabels">ListReleaseLabels</a></code> | <code>string</code> | [List] elasticmapreduce:ListReleaseLabels. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListRepositories">ListRepositories</a></code> | <code>string</code> | [List] elasticmapreduce:ListRepositories. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListSecurityConfigurations">ListSecurityConfigurations</a></code> | <code>string</code> | [List] elasticmapreduce:ListSecurityConfigurations. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListSessions">ListSessions</a></code> | <code>string</code> | [List] elasticmapreduce:ListSessions. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListSteps">ListSteps</a></code> | <code>string</code> | [Read] elasticmapreduce:ListSteps. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListStudios">ListStudios</a></code> | <code>string</code> | [List] elasticmapreduce:ListStudios. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListStudioSessionMappings">ListStudioSessionMappings</a></code> | <code>string</code> | [List] elasticmapreduce:ListStudioSessionMappings. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListSupportedInstanceTypes">ListSupportedInstanceTypes</a></code> | <code>string</code> | [List] elasticmapreduce:ListSupportedInstanceTypes. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListWorkspaceAccessIdentities">ListWorkspaceAccessIdentities</a></code> | <code>string</code> | [List] elasticmapreduce:ListWorkspaceAccessIdentities. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ModifyCluster">ModifyCluster</a></code> | <code>string</code> | [Write] elasticmapreduce:ModifyCluster. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ModifyInstanceFleet">ModifyInstanceFleet</a></code> | <code>string</code> | [Write] elasticmapreduce:ModifyInstanceFleet. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ModifyInstanceGroups">ModifyInstanceGroups</a></code> | <code>string</code> | [Write] elasticmapreduce:ModifyInstanceGroups. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.OpenEditorInConsole">OpenEditorInConsole</a></code> | <code>string</code> | [Write] elasticmapreduce:OpenEditorInConsole. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.PutAutoScalingPolicy">PutAutoScalingPolicy</a></code> | <code>string</code> | [Write] elasticmapreduce:PutAutoScalingPolicy. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.PutAutoTerminationPolicy">PutAutoTerminationPolicy</a></code> | <code>string</code> | [Write] elasticmapreduce:PutAutoTerminationPolicy. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.PutBlockPublicAccessConfiguration">PutBlockPublicAccessConfiguration</a></code> | <code>string</code> | [PermissionManagement] elasticmapreduce:PutBlockPublicAccessConfiguration. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.PutManagedScalingPolicy">PutManagedScalingPolicy</a></code> | <code>string</code> | [Write] elasticmapreduce:PutManagedScalingPolicy. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.PutWorkspaceAccess">PutWorkspaceAccess</a></code> | <code>string</code> | [PermissionManagement] elasticmapreduce:PutWorkspaceAccess. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.RemoveAutoScalingPolicy">RemoveAutoScalingPolicy</a></code> | <code>string</code> | [Write] elasticmapreduce:RemoveAutoScalingPolicy. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.RemoveAutoTerminationPolicy">RemoveAutoTerminationPolicy</a></code> | <code>string</code> | [Write] elasticmapreduce:RemoveAutoTerminationPolicy. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.RemoveManagedScalingPolicy">RemoveManagedScalingPolicy</a></code> | <code>string</code> | [Write] elasticmapreduce:RemoveManagedScalingPolicy. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.RemoveTags">RemoveTags</a></code> | <code>string</code> | [Tagging] elasticmapreduce:RemoveTags. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.RunJobFlow">RunJobFlow</a></code> | <code>string</code> | [Write] elasticmapreduce:RunJobFlow. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.StartEditor">StartEditor</a></code> | <code>string</code> | [Write] elasticmapreduce:StartEditor. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.StartNotebookExecution">StartNotebookExecution</a></code> | <code>string</code> | [Write] elasticmapreduce:StartNotebookExecution. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.StartSession">StartSession</a></code> | <code>string</code> | [Write] elasticmapreduce:StartSession. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.StopEditor">StopEditor</a></code> | <code>string</code> | [Write] elasticmapreduce:StopEditor. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.StopNotebookExecution">StopNotebookExecution</a></code> | <code>string</code> | [Write] elasticmapreduce:StopNotebookExecution. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.TerminateJobFlows">TerminateJobFlows</a></code> | <code>string</code> | [Write] elasticmapreduce:TerminateJobFlows. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.TerminateSession">TerminateSession</a></code> | <code>string</code> | [Write] elasticmapreduce:TerminateSession. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.UnlinkRepository">UnlinkRepository</a></code> | <code>string</code> | [Write] elasticmapreduce:UnlinkRepository. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.UpdateEditor">UpdateEditor</a></code> | <code>string</code> | [Write] elasticmapreduce:UpdateEditor. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.UpdateRepository">UpdateRepository</a></code> | <code>string</code> | [Write] elasticmapreduce:UpdateRepository. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.UpdateStudio">UpdateStudio</a></code> | <code>string</code> | [Write] elasticmapreduce:UpdateStudio. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.UpdateStudioSessionMapping">UpdateStudioSessionMapping</a></code> | <code>string</code> | [Write] elasticmapreduce:UpdateStudioSessionMapping. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ViewEventsFromAllClustersInConsole">ViewEventsFromAllClustersInConsole</a></code> | <code>string</code> | [List] elasticmapreduce:ViewEventsFromAllClustersInConsole. |

---

##### `AccessAllEventLogs`<sup>Required</sup> <a name="AccessAllEventLogs" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AccessAllEventLogs"></a>

```typescript
public readonly AccessAllEventLogs: string;
```

- *Type:* string

[Write] elasticmapreduce:AccessAllEventLogs.

---

##### `actionGetAutoTerminationPolicy`<sup>Required</sup> <a name="actionGetAutoTerminationPolicy" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionGetAutoTerminationPolicy"></a>

```typescript
public readonly actionGetAutoTerminationPolicy: string;
```

- *Type:* string

[Read] elasticmapreduce:GetAutoTerminationPolicy.

---

##### `actionGetBlockPublicAccessConfiguration`<sup>Required</sup> <a name="actionGetBlockPublicAccessConfiguration" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionGetBlockPublicAccessConfiguration"></a>

```typescript
public readonly actionGetBlockPublicAccessConfiguration: string;
```

- *Type:* string

[Read] elasticmapreduce:GetBlockPublicAccessConfiguration.

---

##### `actionGetClusterSessionCredentials`<sup>Required</sup> <a name="actionGetClusterSessionCredentials" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionGetClusterSessionCredentials"></a>

```typescript
public readonly actionGetClusterSessionCredentials: string;
```

- *Type:* string

[Write] elasticmapreduce:GetClusterSessionCredentials.

---

##### `actionGetManagedScalingPolicy`<sup>Required</sup> <a name="actionGetManagedScalingPolicy" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionGetManagedScalingPolicy"></a>

```typescript
public readonly actionGetManagedScalingPolicy: string;
```

- *Type:* string

[Read] elasticmapreduce:GetManagedScalingPolicy.

---

##### `actionGetOnClusterAppUIPresignedURL`<sup>Required</sup> <a name="actionGetOnClusterAppUIPresignedURL" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionGetOnClusterAppUIPresignedURL"></a>

```typescript
public readonly actionGetOnClusterAppUIPresignedURL: string;
```

- *Type:* string

[Write] elasticmapreduce:GetOnClusterAppUIPresignedURL.

---

##### `actionGetPersistentAppUIPresignedURL`<sup>Required</sup> <a name="actionGetPersistentAppUIPresignedURL" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionGetPersistentAppUIPresignedURL"></a>

```typescript
public readonly actionGetPersistentAppUIPresignedURL: string;
```

- *Type:* string

[Write] elasticmapreduce:GetPersistentAppUIPresignedURL.

---

##### `actionGetSession`<sup>Required</sup> <a name="actionGetSession" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionGetSession"></a>

```typescript
public readonly actionGetSession: string;
```

- *Type:* string

[Read] elasticmapreduce:GetSession.

---

##### `actionGetSessionEndpoint`<sup>Required</sup> <a name="actionGetSessionEndpoint" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionGetSessionEndpoint"></a>

```typescript
public readonly actionGetSessionEndpoint: string;
```

- *Type:* string

[Write] elasticmapreduce:GetSessionEndpoint.

---

##### `actionGetStudioSessionMapping`<sup>Required</sup> <a name="actionGetStudioSessionMapping" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionGetStudioSessionMapping"></a>

```typescript
public readonly actionGetStudioSessionMapping: string;
```

- *Type:* string

[Read] elasticmapreduce:GetStudioSessionMapping.

---

##### `actionSetKeepJobFlowAliveWhenNoSteps`<sup>Required</sup> <a name="actionSetKeepJobFlowAliveWhenNoSteps" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionSetKeepJobFlowAliveWhenNoSteps"></a>

```typescript
public readonly actionSetKeepJobFlowAliveWhenNoSteps: string;
```

- *Type:* string

[Write] elasticmapreduce:SetKeepJobFlowAliveWhenNoSteps.

---

##### `actionSetTerminationProtection`<sup>Required</sup> <a name="actionSetTerminationProtection" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionSetTerminationProtection"></a>

```typescript
public readonly actionSetTerminationProtection: string;
```

- *Type:* string

[Write] elasticmapreduce:SetTerminationProtection.

---

##### `actionSetUnhealthyNodeReplacement`<sup>Required</sup> <a name="actionSetUnhealthyNodeReplacement" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionSetUnhealthyNodeReplacement"></a>

```typescript
public readonly actionSetUnhealthyNodeReplacement: string;
```

- *Type:* string

[Write] elasticmapreduce:SetUnhealthyNodeReplacement.

---

##### `actionSetVisibleToAllUsers`<sup>Required</sup> <a name="actionSetVisibleToAllUsers" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.actionSetVisibleToAllUsers"></a>

```typescript
public readonly actionSetVisibleToAllUsers: string;
```

- *Type:* string

[Write] elasticmapreduce:SetVisibleToAllUsers.

---

##### `AddInstanceFleet`<sup>Required</sup> <a name="AddInstanceFleet" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AddInstanceFleet"></a>

```typescript
public readonly AddInstanceFleet: string;
```

- *Type:* string

[Write] elasticmapreduce:AddInstanceFleet.

---

##### `AddInstanceGroups`<sup>Required</sup> <a name="AddInstanceGroups" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AddInstanceGroups"></a>

```typescript
public readonly AddInstanceGroups: string;
```

- *Type:* string

[Write] elasticmapreduce:AddInstanceGroups.

---

##### `AddJobFlowSteps`<sup>Required</sup> <a name="AddJobFlowSteps" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AddJobFlowSteps"></a>

```typescript
public readonly AddJobFlowSteps: string;
```

- *Type:* string

[Write] elasticmapreduce:AddJobFlowSteps.

---

##### `AddTags`<sup>Required</sup> <a name="AddTags" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AddTags"></a>

```typescript
public readonly AddTags: string;
```

- *Type:* string

[Tagging] elasticmapreduce:AddTags.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AttachEditor`<sup>Required</sup> <a name="AttachEditor" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.AttachEditor"></a>

```typescript
public readonly AttachEditor: string;
```

- *Type:* string

[Write] elasticmapreduce:AttachEditor.

---

##### `CancelSteps`<sup>Required</sup> <a name="CancelSteps" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.CancelSteps"></a>

```typescript
public readonly CancelSteps: string;
```

- *Type:* string

[Write] elasticmapreduce:CancelSteps.

---

##### `CreateEditor`<sup>Required</sup> <a name="CreateEditor" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.CreateEditor"></a>

```typescript
public readonly CreateEditor: string;
```

- *Type:* string

[Write] elasticmapreduce:CreateEditor.

---

##### `CreatePersistentAppUI`<sup>Required</sup> <a name="CreatePersistentAppUI" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.CreatePersistentAppUI"></a>

```typescript
public readonly CreatePersistentAppUI: string;
```

- *Type:* string

[Write] elasticmapreduce:CreatePersistentAppUI.

---

##### `CreateRepository`<sup>Required</sup> <a name="CreateRepository" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.CreateRepository"></a>

```typescript
public readonly CreateRepository: string;
```

- *Type:* string

[Write] elasticmapreduce:CreateRepository.

---

##### `CreateSecurityConfiguration`<sup>Required</sup> <a name="CreateSecurityConfiguration" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.CreateSecurityConfiguration"></a>

```typescript
public readonly CreateSecurityConfiguration: string;
```

- *Type:* string

[Write] elasticmapreduce:CreateSecurityConfiguration.

---

##### `CreateStudio`<sup>Required</sup> <a name="CreateStudio" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.CreateStudio"></a>

```typescript
public readonly CreateStudio: string;
```

- *Type:* string

[Write] elasticmapreduce:CreateStudio.

---

##### `CreateStudioPresignedUrl`<sup>Required</sup> <a name="CreateStudioPresignedUrl" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.CreateStudioPresignedUrl"></a>

```typescript
public readonly CreateStudioPresignedUrl: string;
```

- *Type:* string

[Write] elasticmapreduce:CreateStudioPresignedUrl.

---

##### `CreateStudioSessionMapping`<sup>Required</sup> <a name="CreateStudioSessionMapping" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.CreateStudioSessionMapping"></a>

```typescript
public readonly CreateStudioSessionMapping: string;
```

- *Type:* string

[Write] elasticmapreduce:CreateStudioSessionMapping.

---

##### `DeleteEditor`<sup>Required</sup> <a name="DeleteEditor" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DeleteEditor"></a>

```typescript
public readonly DeleteEditor: string;
```

- *Type:* string

[Write] elasticmapreduce:DeleteEditor.

---

##### `DeleteRepository`<sup>Required</sup> <a name="DeleteRepository" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DeleteRepository"></a>

```typescript
public readonly DeleteRepository: string;
```

- *Type:* string

[Write] elasticmapreduce:DeleteRepository.

---

##### `DeleteSecurityConfiguration`<sup>Required</sup> <a name="DeleteSecurityConfiguration" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DeleteSecurityConfiguration"></a>

```typescript
public readonly DeleteSecurityConfiguration: string;
```

- *Type:* string

[Write] elasticmapreduce:DeleteSecurityConfiguration.

---

##### `DeleteStudio`<sup>Required</sup> <a name="DeleteStudio" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DeleteStudio"></a>

```typescript
public readonly DeleteStudio: string;
```

- *Type:* string

[Write] elasticmapreduce:DeleteStudio.

---

##### `DeleteStudioSessionMapping`<sup>Required</sup> <a name="DeleteStudioSessionMapping" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DeleteStudioSessionMapping"></a>

```typescript
public readonly DeleteStudioSessionMapping: string;
```

- *Type:* string

[Write] elasticmapreduce:DeleteStudioSessionMapping.

---

##### `DeleteWorkspaceAccess`<sup>Required</sup> <a name="DeleteWorkspaceAccess" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DeleteWorkspaceAccess"></a>

```typescript
public readonly DeleteWorkspaceAccess: string;
```

- *Type:* string

[PermissionManagement] elasticmapreduce:DeleteWorkspaceAccess.

---

##### `DescribeCluster`<sup>Required</sup> <a name="DescribeCluster" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribeCluster"></a>

```typescript
public readonly DescribeCluster: string;
```

- *Type:* string

[Read] elasticmapreduce:DescribeCluster.

---

##### `DescribeEditor`<sup>Required</sup> <a name="DescribeEditor" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribeEditor"></a>

```typescript
public readonly DescribeEditor: string;
```

- *Type:* string

[Read] elasticmapreduce:DescribeEditor.

---

##### `DescribeJobFlows`<sup>Required</sup> <a name="DescribeJobFlows" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribeJobFlows"></a>

```typescript
public readonly DescribeJobFlows: string;
```

- *Type:* string

[Read] elasticmapreduce:DescribeJobFlows.

---

##### `DescribeNotebookExecution`<sup>Required</sup> <a name="DescribeNotebookExecution" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribeNotebookExecution"></a>

```typescript
public readonly DescribeNotebookExecution: string;
```

- *Type:* string

[Read] elasticmapreduce:DescribeNotebookExecution.

---

##### `DescribePersistentAppUI`<sup>Required</sup> <a name="DescribePersistentAppUI" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribePersistentAppUI"></a>

```typescript
public readonly DescribePersistentAppUI: string;
```

- *Type:* string

[Read] elasticmapreduce:DescribePersistentAppUI.

---

##### `DescribeReleaseLabel`<sup>Required</sup> <a name="DescribeReleaseLabel" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribeReleaseLabel"></a>

```typescript
public readonly DescribeReleaseLabel: string;
```

- *Type:* string

[Read] elasticmapreduce:DescribeReleaseLabel.

---

##### `DescribeRepository`<sup>Required</sup> <a name="DescribeRepository" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribeRepository"></a>

```typescript
public readonly DescribeRepository: string;
```

- *Type:* string

[Read] elasticmapreduce:DescribeRepository.

---

##### `DescribeSecurityConfiguration`<sup>Required</sup> <a name="DescribeSecurityConfiguration" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribeSecurityConfiguration"></a>

```typescript
public readonly DescribeSecurityConfiguration: string;
```

- *Type:* string

[Read] elasticmapreduce:DescribeSecurityConfiguration.

---

##### `DescribeStep`<sup>Required</sup> <a name="DescribeStep" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribeStep"></a>

```typescript
public readonly DescribeStep: string;
```

- *Type:* string

[Read] elasticmapreduce:DescribeStep.

---

##### `DescribeStudio`<sup>Required</sup> <a name="DescribeStudio" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DescribeStudio"></a>

```typescript
public readonly DescribeStudio: string;
```

- *Type:* string

[Read] elasticmapreduce:DescribeStudio.

---

##### `DetachEditor`<sup>Required</sup> <a name="DetachEditor" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.DetachEditor"></a>

```typescript
public readonly DetachEditor: string;
```

- *Type:* string

[Write] elasticmapreduce:DetachEditor.

---

##### `LinkRepository`<sup>Required</sup> <a name="LinkRepository" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.LinkRepository"></a>

```typescript
public readonly LinkRepository: string;
```

- *Type:* string

[Write] elasticmapreduce:LinkRepository.

---

##### `ListBootstrapActions`<sup>Required</sup> <a name="ListBootstrapActions" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListBootstrapActions"></a>

```typescript
public readonly ListBootstrapActions: string;
```

- *Type:* string

[Read] elasticmapreduce:ListBootstrapActions.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListClusters"></a>

```typescript
public readonly ListClusters: string;
```

- *Type:* string

[List] elasticmapreduce:ListClusters.

---

##### `ListEditors`<sup>Required</sup> <a name="ListEditors" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListEditors"></a>

```typescript
public readonly ListEditors: string;
```

- *Type:* string

[List] elasticmapreduce:ListEditors.

---

##### `ListInstanceFleets`<sup>Required</sup> <a name="ListInstanceFleets" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListInstanceFleets"></a>

```typescript
public readonly ListInstanceFleets: string;
```

- *Type:* string

[Read] elasticmapreduce:ListInstanceFleets.

---

##### `ListInstanceGroups`<sup>Required</sup> <a name="ListInstanceGroups" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListInstanceGroups"></a>

```typescript
public readonly ListInstanceGroups: string;
```

- *Type:* string

[Read] elasticmapreduce:ListInstanceGroups.

---

##### `ListInstances`<sup>Required</sup> <a name="ListInstances" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListInstances"></a>

```typescript
public readonly ListInstances: string;
```

- *Type:* string

[Read] elasticmapreduce:ListInstances.

---

##### `ListNotebookExecutions`<sup>Required</sup> <a name="ListNotebookExecutions" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListNotebookExecutions"></a>

```typescript
public readonly ListNotebookExecutions: string;
```

- *Type:* string

[List] elasticmapreduce:ListNotebookExecutions.

---

##### `ListReleaseLabels`<sup>Required</sup> <a name="ListReleaseLabels" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListReleaseLabels"></a>

```typescript
public readonly ListReleaseLabels: string;
```

- *Type:* string

[List] elasticmapreduce:ListReleaseLabels.

---

##### `ListRepositories`<sup>Required</sup> <a name="ListRepositories" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListRepositories"></a>

```typescript
public readonly ListRepositories: string;
```

- *Type:* string

[List] elasticmapreduce:ListRepositories.

---

##### `ListSecurityConfigurations`<sup>Required</sup> <a name="ListSecurityConfigurations" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListSecurityConfigurations"></a>

```typescript
public readonly ListSecurityConfigurations: string;
```

- *Type:* string

[List] elasticmapreduce:ListSecurityConfigurations.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListSessions"></a>

```typescript
public readonly ListSessions: string;
```

- *Type:* string

[List] elasticmapreduce:ListSessions.

---

##### `ListSteps`<sup>Required</sup> <a name="ListSteps" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListSteps"></a>

```typescript
public readonly ListSteps: string;
```

- *Type:* string

[Read] elasticmapreduce:ListSteps.

---

##### `ListStudios`<sup>Required</sup> <a name="ListStudios" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListStudios"></a>

```typescript
public readonly ListStudios: string;
```

- *Type:* string

[List] elasticmapreduce:ListStudios.

---

##### `ListStudioSessionMappings`<sup>Required</sup> <a name="ListStudioSessionMappings" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListStudioSessionMappings"></a>

```typescript
public readonly ListStudioSessionMappings: string;
```

- *Type:* string

[List] elasticmapreduce:ListStudioSessionMappings.

---

##### `ListSupportedInstanceTypes`<sup>Required</sup> <a name="ListSupportedInstanceTypes" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListSupportedInstanceTypes"></a>

```typescript
public readonly ListSupportedInstanceTypes: string;
```

- *Type:* string

[List] elasticmapreduce:ListSupportedInstanceTypes.

---

##### `ListWorkspaceAccessIdentities`<sup>Required</sup> <a name="ListWorkspaceAccessIdentities" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ListWorkspaceAccessIdentities"></a>

```typescript
public readonly ListWorkspaceAccessIdentities: string;
```

- *Type:* string

[List] elasticmapreduce:ListWorkspaceAccessIdentities.

---

##### `ModifyCluster`<sup>Required</sup> <a name="ModifyCluster" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ModifyCluster"></a>

```typescript
public readonly ModifyCluster: string;
```

- *Type:* string

[Write] elasticmapreduce:ModifyCluster.

---

##### `ModifyInstanceFleet`<sup>Required</sup> <a name="ModifyInstanceFleet" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ModifyInstanceFleet"></a>

```typescript
public readonly ModifyInstanceFleet: string;
```

- *Type:* string

[Write] elasticmapreduce:ModifyInstanceFleet.

---

##### `ModifyInstanceGroups`<sup>Required</sup> <a name="ModifyInstanceGroups" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ModifyInstanceGroups"></a>

```typescript
public readonly ModifyInstanceGroups: string;
```

- *Type:* string

[Write] elasticmapreduce:ModifyInstanceGroups.

---

##### `OpenEditorInConsole`<sup>Required</sup> <a name="OpenEditorInConsole" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.OpenEditorInConsole"></a>

```typescript
public readonly OpenEditorInConsole: string;
```

- *Type:* string

[Write] elasticmapreduce:OpenEditorInConsole.

---

##### `PutAutoScalingPolicy`<sup>Required</sup> <a name="PutAutoScalingPolicy" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.PutAutoScalingPolicy"></a>

```typescript
public readonly PutAutoScalingPolicy: string;
```

- *Type:* string

[Write] elasticmapreduce:PutAutoScalingPolicy.

---

##### `PutAutoTerminationPolicy`<sup>Required</sup> <a name="PutAutoTerminationPolicy" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.PutAutoTerminationPolicy"></a>

```typescript
public readonly PutAutoTerminationPolicy: string;
```

- *Type:* string

[Write] elasticmapreduce:PutAutoTerminationPolicy.

---

##### `PutBlockPublicAccessConfiguration`<sup>Required</sup> <a name="PutBlockPublicAccessConfiguration" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.PutBlockPublicAccessConfiguration"></a>

```typescript
public readonly PutBlockPublicAccessConfiguration: string;
```

- *Type:* string

[PermissionManagement] elasticmapreduce:PutBlockPublicAccessConfiguration.

---

##### `PutManagedScalingPolicy`<sup>Required</sup> <a name="PutManagedScalingPolicy" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.PutManagedScalingPolicy"></a>

```typescript
public readonly PutManagedScalingPolicy: string;
```

- *Type:* string

[Write] elasticmapreduce:PutManagedScalingPolicy.

---

##### `PutWorkspaceAccess`<sup>Required</sup> <a name="PutWorkspaceAccess" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.PutWorkspaceAccess"></a>

```typescript
public readonly PutWorkspaceAccess: string;
```

- *Type:* string

[PermissionManagement] elasticmapreduce:PutWorkspaceAccess.

---

##### `RemoveAutoScalingPolicy`<sup>Required</sup> <a name="RemoveAutoScalingPolicy" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.RemoveAutoScalingPolicy"></a>

```typescript
public readonly RemoveAutoScalingPolicy: string;
```

- *Type:* string

[Write] elasticmapreduce:RemoveAutoScalingPolicy.

---

##### `RemoveAutoTerminationPolicy`<sup>Required</sup> <a name="RemoveAutoTerminationPolicy" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.RemoveAutoTerminationPolicy"></a>

```typescript
public readonly RemoveAutoTerminationPolicy: string;
```

- *Type:* string

[Write] elasticmapreduce:RemoveAutoTerminationPolicy.

---

##### `RemoveManagedScalingPolicy`<sup>Required</sup> <a name="RemoveManagedScalingPolicy" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.RemoveManagedScalingPolicy"></a>

```typescript
public readonly RemoveManagedScalingPolicy: string;
```

- *Type:* string

[Write] elasticmapreduce:RemoveManagedScalingPolicy.

---

##### `RemoveTags`<sup>Required</sup> <a name="RemoveTags" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.RemoveTags"></a>

```typescript
public readonly RemoveTags: string;
```

- *Type:* string

[Tagging] elasticmapreduce:RemoveTags.

---

##### `RunJobFlow`<sup>Required</sup> <a name="RunJobFlow" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.RunJobFlow"></a>

```typescript
public readonly RunJobFlow: string;
```

- *Type:* string

[Write] elasticmapreduce:RunJobFlow.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartEditor`<sup>Required</sup> <a name="StartEditor" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.StartEditor"></a>

```typescript
public readonly StartEditor: string;
```

- *Type:* string

[Write] elasticmapreduce:StartEditor.

---

##### `StartNotebookExecution`<sup>Required</sup> <a name="StartNotebookExecution" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.StartNotebookExecution"></a>

```typescript
public readonly StartNotebookExecution: string;
```

- *Type:* string

[Write] elasticmapreduce:StartNotebookExecution.

---

##### `StartSession`<sup>Required</sup> <a name="StartSession" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.StartSession"></a>

```typescript
public readonly StartSession: string;
```

- *Type:* string

[Write] elasticmapreduce:StartSession.

---

##### `StopEditor`<sup>Required</sup> <a name="StopEditor" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.StopEditor"></a>

```typescript
public readonly StopEditor: string;
```

- *Type:* string

[Write] elasticmapreduce:StopEditor.

---

##### `StopNotebookExecution`<sup>Required</sup> <a name="StopNotebookExecution" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.StopNotebookExecution"></a>

```typescript
public readonly StopNotebookExecution: string;
```

- *Type:* string

[Write] elasticmapreduce:StopNotebookExecution.

---

##### `TerminateJobFlows`<sup>Required</sup> <a name="TerminateJobFlows" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.TerminateJobFlows"></a>

```typescript
public readonly TerminateJobFlows: string;
```

- *Type:* string

[Write] elasticmapreduce:TerminateJobFlows.

---

##### `TerminateSession`<sup>Required</sup> <a name="TerminateSession" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.TerminateSession"></a>

```typescript
public readonly TerminateSession: string;
```

- *Type:* string

[Write] elasticmapreduce:TerminateSession.

---

##### `UnlinkRepository`<sup>Required</sup> <a name="UnlinkRepository" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.UnlinkRepository"></a>

```typescript
public readonly UnlinkRepository: string;
```

- *Type:* string

[Write] elasticmapreduce:UnlinkRepository.

---

##### `UpdateEditor`<sup>Required</sup> <a name="UpdateEditor" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.UpdateEditor"></a>

```typescript
public readonly UpdateEditor: string;
```

- *Type:* string

[Write] elasticmapreduce:UpdateEditor.

---

##### `UpdateRepository`<sup>Required</sup> <a name="UpdateRepository" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.UpdateRepository"></a>

```typescript
public readonly UpdateRepository: string;
```

- *Type:* string

[Write] elasticmapreduce:UpdateRepository.

---

##### `UpdateStudio`<sup>Required</sup> <a name="UpdateStudio" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.UpdateStudio"></a>

```typescript
public readonly UpdateStudio: string;
```

- *Type:* string

[Write] elasticmapreduce:UpdateStudio.

---

##### `UpdateStudioSessionMapping`<sup>Required</sup> <a name="UpdateStudioSessionMapping" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.UpdateStudioSessionMapping"></a>

```typescript
public readonly UpdateStudioSessionMapping: string;
```

- *Type:* string

[Write] elasticmapreduce:UpdateStudioSessionMapping.

---

##### `ViewEventsFromAllClustersInConsole`<sup>Required</sup> <a name="ViewEventsFromAllClustersInConsole" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceActions.property.ViewEventsFromAllClustersInConsole"></a>

```typescript
public readonly ViewEventsFromAllClustersInConsole: string;
```

- *Type:* string

[List] elasticmapreduce:ViewEventsFromAllClustersInConsole.

---

### ElasticmapreduceConditions <a name="ElasticmapreduceConditions" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions"></a>

Condition key constants and builders for elasticmapreduce.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.Initializer"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

new elasticmapreduce.ElasticmapreduceConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.executionRoleARN">executionRoleARN</a></code> | Generates a condition block for `elasticmapreduce:ExecutionRoleArn`. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `executionRoleARN` <a name="executionRoleARN" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.executionRoleARN"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

elasticmapreduce.ElasticmapreduceConditions.executionRoleARN(value: string)
```

Generates a condition block for `elasticmapreduce:ExecutionRoleArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.executionRoleARN.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.requestTag"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

elasticmapreduce.ElasticmapreduceConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.resourceTag"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

elasticmapreduce.ElasticmapreduceConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.tagKeys"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

elasticmapreduce.ElasticmapreduceConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.actionGetClusterSessionCredentialsConditionKeys">actionGetClusterSessionCredentialsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetClusterSessionCredentials action. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.actionGetPersistentAppUIPresignedURLConditionKeys">actionGetPersistentAppUIPresignedURLConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetPersistentAppUIPresignedURL action. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.AddJobFlowStepsConditionKeys">AddJobFlowStepsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddJobFlowSteps action. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.AddTagsConditionKeys">AddTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddTags action. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.CreateEditorConditionKeys">CreateEditorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEditor action. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.CreateStudioConditionKeys">CreateStudioConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStudio action. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.EXECUTION_ROLE_ARN">EXECUTION_ROLE_ARN</a></code> | <code>string</code> | Condition key: elasticmapreduce:ExecutionRoleArn (ARN). |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.RemoveTagsConditionKeys">RemoveTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoveTags action. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.REQUEST_TAG">REQUEST_TAG</a></code> | <code>string</code> | Condition key: elasticmapreduce:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.RESOURCE_TAG">RESOURCE_TAG</a></code> | <code>string</code> | Condition key: elasticmapreduce:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.RunJobFlowConditionKeys">RunJobFlowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RunJobFlow action. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.StartNotebookExecutionConditionKeys">StartNotebookExecutionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartNotebookExecution action. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.StartSessionConditionKeys">StartSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartSession action. |

---

##### `actionGetClusterSessionCredentialsConditionKeys`<sup>Required</sup> <a name="actionGetClusterSessionCredentialsConditionKeys" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.actionGetClusterSessionCredentialsConditionKeys"></a>

```typescript
public readonly actionGetClusterSessionCredentialsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetClusterSessionCredentials action.

---

##### `actionGetPersistentAppUIPresignedURLConditionKeys`<sup>Required</sup> <a name="actionGetPersistentAppUIPresignedURLConditionKeys" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.actionGetPersistentAppUIPresignedURLConditionKeys"></a>

```typescript
public readonly actionGetPersistentAppUIPresignedURLConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetPersistentAppUIPresignedURL action.

---

##### `AddJobFlowStepsConditionKeys`<sup>Required</sup> <a name="AddJobFlowStepsConditionKeys" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.AddJobFlowStepsConditionKeys"></a>

```typescript
public readonly AddJobFlowStepsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddJobFlowSteps action.

---

##### `AddTagsConditionKeys`<sup>Required</sup> <a name="AddTagsConditionKeys" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.AddTagsConditionKeys"></a>

```typescript
public readonly AddTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddTags action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateEditorConditionKeys`<sup>Required</sup> <a name="CreateEditorConditionKeys" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.CreateEditorConditionKeys"></a>

```typescript
public readonly CreateEditorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEditor action.

---

##### `CreateStudioConditionKeys`<sup>Required</sup> <a name="CreateStudioConditionKeys" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.CreateStudioConditionKeys"></a>

```typescript
public readonly CreateStudioConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStudio action.

---

##### `EXECUTION_ROLE_ARN`<sup>Required</sup> <a name="EXECUTION_ROLE_ARN" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.EXECUTION_ROLE_ARN"></a>

```typescript
public readonly EXECUTION_ROLE_ARN: string;
```

- *Type:* string

Condition key: elasticmapreduce:ExecutionRoleArn (ARN).

---

##### `RemoveTagsConditionKeys`<sup>Required</sup> <a name="RemoveTagsConditionKeys" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.RemoveTagsConditionKeys"></a>

```typescript
public readonly RemoveTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoveTags action.

---

##### `REQUEST_TAG`<sup>Required</sup> <a name="REQUEST_TAG" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.REQUEST_TAG"></a>

```typescript
public readonly REQUEST_TAG: string;
```

- *Type:* string

Condition key: elasticmapreduce:RequestTag/${TagKey} (String).

---

##### `RESOURCE_TAG`<sup>Required</sup> <a name="RESOURCE_TAG" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.RESOURCE_TAG"></a>

```typescript
public readonly RESOURCE_TAG: string;
```

- *Type:* string

Condition key: elasticmapreduce:ResourceTag/${TagKey} (String).

---

##### `RunJobFlowConditionKeys`<sup>Required</sup> <a name="RunJobFlowConditionKeys" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.RunJobFlowConditionKeys"></a>

```typescript
public readonly RunJobFlowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RunJobFlow action.

---

##### `StartNotebookExecutionConditionKeys`<sup>Required</sup> <a name="StartNotebookExecutionConditionKeys" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.StartNotebookExecutionConditionKeys"></a>

```typescript
public readonly StartNotebookExecutionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartNotebookExecution action.

---

##### `StartSessionConditionKeys`<sup>Required</sup> <a name="StartSessionConditionKeys" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceConditions.property.StartSessionConditionKeys"></a>

```typescript
public readonly StartSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartSession action.

---

### ElasticmapreduceOperations <a name="ElasticmapreduceOperations" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations"></a>

API operation to required IAM actions mapping for elasticmapreduce.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.Initializer"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

new elasticmapreduce.ElasticmapreduceOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.AddInstanceFleet">AddInstanceFleet</a></code> | <code>string[]</code> | IAM actions required for the AddInstanceFleet API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.AddInstanceGroups">AddInstanceGroups</a></code> | <code>string[]</code> | IAM actions required for the AddInstanceGroups API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.AddJobFlowSteps">AddJobFlowSteps</a></code> | <code>string[]</code> | IAM actions required for the AddJobFlowSteps API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.AddTags">AddTags</a></code> | <code>string[]</code> | IAM actions required for the AddTags API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.CancelSteps">CancelSteps</a></code> | <code>string[]</code> | IAM actions required for the CancelSteps API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.CreatePersistentAppUI">CreatePersistentAppUI</a></code> | <code>string[]</code> | IAM actions required for the CreatePersistentAppUI API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.CreateSecurityConfiguration">CreateSecurityConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateSecurityConfiguration API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.CreateStudio">CreateStudio</a></code> | <code>string[]</code> | IAM actions required for the CreateStudio API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.CreateStudioSessionMapping">CreateStudioSessionMapping</a></code> | <code>string[]</code> | IAM actions required for the CreateStudioSessionMapping API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DeleteSecurityConfiguration">DeleteSecurityConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteSecurityConfiguration API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DeleteStudio">DeleteStudio</a></code> | <code>string[]</code> | IAM actions required for the DeleteStudio API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DeleteStudioSessionMapping">DeleteStudioSessionMapping</a></code> | <code>string[]</code> | IAM actions required for the DeleteStudioSessionMapping API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DescribeCluster">DescribeCluster</a></code> | <code>string[]</code> | IAM actions required for the DescribeCluster API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DescribeJobFlows">DescribeJobFlows</a></code> | <code>string[]</code> | IAM actions required for the DescribeJobFlows API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DescribeNotebookExecution">DescribeNotebookExecution</a></code> | <code>string[]</code> | IAM actions required for the DescribeNotebookExecution API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DescribePersistentAppUI">DescribePersistentAppUI</a></code> | <code>string[]</code> | IAM actions required for the DescribePersistentAppUI API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DescribeReleaseLabel">DescribeReleaseLabel</a></code> | <code>string[]</code> | IAM actions required for the DescribeReleaseLabel API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DescribeSecurityConfiguration">DescribeSecurityConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeSecurityConfiguration API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DescribeStep">DescribeStep</a></code> | <code>string[]</code> | IAM actions required for the DescribeStep API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DescribeStudio">DescribeStudio</a></code> | <code>string[]</code> | IAM actions required for the DescribeStudio API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListBootstrapActions">ListBootstrapActions</a></code> | <code>string[]</code> | IAM actions required for the ListBootstrapActions API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListClusters">ListClusters</a></code> | <code>string[]</code> | IAM actions required for the ListClusters API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListInstanceFleets">ListInstanceFleets</a></code> | <code>string[]</code> | IAM actions required for the ListInstanceFleets API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListInstanceGroups">ListInstanceGroups</a></code> | <code>string[]</code> | IAM actions required for the ListInstanceGroups API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListInstances">ListInstances</a></code> | <code>string[]</code> | IAM actions required for the ListInstances API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListNotebookExecutions">ListNotebookExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListNotebookExecutions API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListReleaseLabels">ListReleaseLabels</a></code> | <code>string[]</code> | IAM actions required for the ListReleaseLabels API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListSecurityConfigurations">ListSecurityConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListSecurityConfigurations API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListSessions">ListSessions</a></code> | <code>string[]</code> | IAM actions required for the ListSessions API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListSteps">ListSteps</a></code> | <code>string[]</code> | IAM actions required for the ListSteps API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListStudios">ListStudios</a></code> | <code>string[]</code> | IAM actions required for the ListStudios API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListStudioSessionMappings">ListStudioSessionMappings</a></code> | <code>string[]</code> | IAM actions required for the ListStudioSessionMappings API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListSupportedInstanceTypes">ListSupportedInstanceTypes</a></code> | <code>string[]</code> | IAM actions required for the ListSupportedInstanceTypes API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ModifyCluster">ModifyCluster</a></code> | <code>string[]</code> | IAM actions required for the ModifyCluster API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ModifyInstanceFleet">ModifyInstanceFleet</a></code> | <code>string[]</code> | IAM actions required for the ModifyInstanceFleet API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ModifyInstanceGroups">ModifyInstanceGroups</a></code> | <code>string[]</code> | IAM actions required for the ModifyInstanceGroups API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opGetAutoTerminationPolicy">opGetAutoTerminationPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetAutoTerminationPolicy API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opGetBlockPublicAccessConfiguration">opGetBlockPublicAccessConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetBlockPublicAccessConfiguration API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opGetClusterSessionCredentials">opGetClusterSessionCredentials</a></code> | <code>string[]</code> | IAM actions required for the GetClusterSessionCredentials API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opGetManagedScalingPolicy">opGetManagedScalingPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetManagedScalingPolicy API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opGetOnClusterAppUIPresignedURL">opGetOnClusterAppUIPresignedURL</a></code> | <code>string[]</code> | IAM actions required for the GetOnClusterAppUIPresignedURL API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opGetPersistentAppUIPresignedURL">opGetPersistentAppUIPresignedURL</a></code> | <code>string[]</code> | IAM actions required for the GetPersistentAppUIPresignedURL API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opGetSession">opGetSession</a></code> | <code>string[]</code> | IAM actions required for the GetSession API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opGetSessionEndpoint">opGetSessionEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetSessionEndpoint API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opGetStudioSessionMapping">opGetStudioSessionMapping</a></code> | <code>string[]</code> | IAM actions required for the GetStudioSessionMapping API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opSetKeepJobFlowAliveWhenNoSteps">opSetKeepJobFlowAliveWhenNoSteps</a></code> | <code>string[]</code> | IAM actions required for the SetKeepJobFlowAliveWhenNoSteps API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opSetTerminationProtection">opSetTerminationProtection</a></code> | <code>string[]</code> | IAM actions required for the SetTerminationProtection API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opSetUnhealthyNodeReplacement">opSetUnhealthyNodeReplacement</a></code> | <code>string[]</code> | IAM actions required for the SetUnhealthyNodeReplacement API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opSetVisibleToAllUsers">opSetVisibleToAllUsers</a></code> | <code>string[]</code> | IAM actions required for the SetVisibleToAllUsers API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.PutAutoScalingPolicy">PutAutoScalingPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutAutoScalingPolicy API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.PutAutoTerminationPolicy">PutAutoTerminationPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutAutoTerminationPolicy API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.PutBlockPublicAccessConfiguration">PutBlockPublicAccessConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutBlockPublicAccessConfiguration API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.PutManagedScalingPolicy">PutManagedScalingPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutManagedScalingPolicy API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.RemoveAutoScalingPolicy">RemoveAutoScalingPolicy</a></code> | <code>string[]</code> | IAM actions required for the RemoveAutoScalingPolicy API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.RemoveAutoTerminationPolicy">RemoveAutoTerminationPolicy</a></code> | <code>string[]</code> | IAM actions required for the RemoveAutoTerminationPolicy API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.RemoveManagedScalingPolicy">RemoveManagedScalingPolicy</a></code> | <code>string[]</code> | IAM actions required for the RemoveManagedScalingPolicy API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.RemoveTags">RemoveTags</a></code> | <code>string[]</code> | IAM actions required for the RemoveTags API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.RunJobFlow">RunJobFlow</a></code> | <code>string[]</code> | IAM actions required for the RunJobFlow API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.StartNotebookExecution">StartNotebookExecution</a></code> | <code>string[]</code> | IAM actions required for the StartNotebookExecution API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.StartSession">StartSession</a></code> | <code>string[]</code> | IAM actions required for the StartSession API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.StopNotebookExecution">StopNotebookExecution</a></code> | <code>string[]</code> | IAM actions required for the StopNotebookExecution API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.TerminateJobFlows">TerminateJobFlows</a></code> | <code>string[]</code> | IAM actions required for the TerminateJobFlows API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.TerminateSession">TerminateSession</a></code> | <code>string[]</code> | IAM actions required for the TerminateSession API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.UpdateStudio">UpdateStudio</a></code> | <code>string[]</code> | IAM actions required for the UpdateStudio API call. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.UpdateStudioSessionMapping">UpdateStudioSessionMapping</a></code> | <code>string[]</code> | IAM actions required for the UpdateStudioSessionMapping API call. |

---

##### `AddInstanceFleet`<sup>Required</sup> <a name="AddInstanceFleet" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.AddInstanceFleet"></a>

```typescript
public readonly AddInstanceFleet: string[];
```

- *Type:* string[]

IAM actions required for the AddInstanceFleet API call.

---

##### `AddInstanceGroups`<sup>Required</sup> <a name="AddInstanceGroups" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.AddInstanceGroups"></a>

```typescript
public readonly AddInstanceGroups: string[];
```

- *Type:* string[]

IAM actions required for the AddInstanceGroups API call.

---

##### `AddJobFlowSteps`<sup>Required</sup> <a name="AddJobFlowSteps" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.AddJobFlowSteps"></a>

```typescript
public readonly AddJobFlowSteps: string[];
```

- *Type:* string[]

IAM actions required for the AddJobFlowSteps API call.

---

##### `AddTags`<sup>Required</sup> <a name="AddTags" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.AddTags"></a>

```typescript
public readonly AddTags: string[];
```

- *Type:* string[]

IAM actions required for the AddTags API call.

---

##### `CancelSteps`<sup>Required</sup> <a name="CancelSteps" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.CancelSteps"></a>

```typescript
public readonly CancelSteps: string[];
```

- *Type:* string[]

IAM actions required for the CancelSteps API call.

---

##### `CreatePersistentAppUI`<sup>Required</sup> <a name="CreatePersistentAppUI" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.CreatePersistentAppUI"></a>

```typescript
public readonly CreatePersistentAppUI: string[];
```

- *Type:* string[]

IAM actions required for the CreatePersistentAppUI API call.

---

##### `CreateSecurityConfiguration`<sup>Required</sup> <a name="CreateSecurityConfiguration" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.CreateSecurityConfiguration"></a>

```typescript
public readonly CreateSecurityConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateSecurityConfiguration API call.

---

##### `CreateStudio`<sup>Required</sup> <a name="CreateStudio" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.CreateStudio"></a>

```typescript
public readonly CreateStudio: string[];
```

- *Type:* string[]

IAM actions required for the CreateStudio API call.

---

##### `CreateStudioSessionMapping`<sup>Required</sup> <a name="CreateStudioSessionMapping" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.CreateStudioSessionMapping"></a>

```typescript
public readonly CreateStudioSessionMapping: string[];
```

- *Type:* string[]

IAM actions required for the CreateStudioSessionMapping API call.

---

##### `DeleteSecurityConfiguration`<sup>Required</sup> <a name="DeleteSecurityConfiguration" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DeleteSecurityConfiguration"></a>

```typescript
public readonly DeleteSecurityConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSecurityConfiguration API call.

---

##### `DeleteStudio`<sup>Required</sup> <a name="DeleteStudio" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DeleteStudio"></a>

```typescript
public readonly DeleteStudio: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStudio API call.

---

##### `DeleteStudioSessionMapping`<sup>Required</sup> <a name="DeleteStudioSessionMapping" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DeleteStudioSessionMapping"></a>

```typescript
public readonly DeleteStudioSessionMapping: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStudioSessionMapping API call.

---

##### `DescribeCluster`<sup>Required</sup> <a name="DescribeCluster" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DescribeCluster"></a>

```typescript
public readonly DescribeCluster: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCluster API call.

---

##### `DescribeJobFlows`<sup>Required</sup> <a name="DescribeJobFlows" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DescribeJobFlows"></a>

```typescript
public readonly DescribeJobFlows: string[];
```

- *Type:* string[]

IAM actions required for the DescribeJobFlows API call.

---

##### `DescribeNotebookExecution`<sup>Required</sup> <a name="DescribeNotebookExecution" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DescribeNotebookExecution"></a>

```typescript
public readonly DescribeNotebookExecution: string[];
```

- *Type:* string[]

IAM actions required for the DescribeNotebookExecution API call.

---

##### `DescribePersistentAppUI`<sup>Required</sup> <a name="DescribePersistentAppUI" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DescribePersistentAppUI"></a>

```typescript
public readonly DescribePersistentAppUI: string[];
```

- *Type:* string[]

IAM actions required for the DescribePersistentAppUI API call.

---

##### `DescribeReleaseLabel`<sup>Required</sup> <a name="DescribeReleaseLabel" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DescribeReleaseLabel"></a>

```typescript
public readonly DescribeReleaseLabel: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReleaseLabel API call.

---

##### `DescribeSecurityConfiguration`<sup>Required</sup> <a name="DescribeSecurityConfiguration" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DescribeSecurityConfiguration"></a>

```typescript
public readonly DescribeSecurityConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSecurityConfiguration API call.

---

##### `DescribeStep`<sup>Required</sup> <a name="DescribeStep" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DescribeStep"></a>

```typescript
public readonly DescribeStep: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStep API call.

---

##### `DescribeStudio`<sup>Required</sup> <a name="DescribeStudio" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.DescribeStudio"></a>

```typescript
public readonly DescribeStudio: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStudio API call.

---

##### `ListBootstrapActions`<sup>Required</sup> <a name="ListBootstrapActions" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListBootstrapActions"></a>

```typescript
public readonly ListBootstrapActions: string[];
```

- *Type:* string[]

IAM actions required for the ListBootstrapActions API call.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListClusters"></a>

```typescript
public readonly ListClusters: string[];
```

- *Type:* string[]

IAM actions required for the ListClusters API call.

---

##### `ListInstanceFleets`<sup>Required</sup> <a name="ListInstanceFleets" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListInstanceFleets"></a>

```typescript
public readonly ListInstanceFleets: string[];
```

- *Type:* string[]

IAM actions required for the ListInstanceFleets API call.

---

##### `ListInstanceGroups`<sup>Required</sup> <a name="ListInstanceGroups" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListInstanceGroups"></a>

```typescript
public readonly ListInstanceGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListInstanceGroups API call.

---

##### `ListInstances`<sup>Required</sup> <a name="ListInstances" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListInstances"></a>

```typescript
public readonly ListInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListInstances API call.

---

##### `ListNotebookExecutions`<sup>Required</sup> <a name="ListNotebookExecutions" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListNotebookExecutions"></a>

```typescript
public readonly ListNotebookExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListNotebookExecutions API call.

---

##### `ListReleaseLabels`<sup>Required</sup> <a name="ListReleaseLabels" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListReleaseLabels"></a>

```typescript
public readonly ListReleaseLabels: string[];
```

- *Type:* string[]

IAM actions required for the ListReleaseLabels API call.

---

##### `ListSecurityConfigurations`<sup>Required</sup> <a name="ListSecurityConfigurations" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListSecurityConfigurations"></a>

```typescript
public readonly ListSecurityConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListSecurityConfigurations API call.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListSessions"></a>

```typescript
public readonly ListSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListSessions API call.

---

##### `ListSteps`<sup>Required</sup> <a name="ListSteps" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListSteps"></a>

```typescript
public readonly ListSteps: string[];
```

- *Type:* string[]

IAM actions required for the ListSteps API call.

---

##### `ListStudios`<sup>Required</sup> <a name="ListStudios" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListStudios"></a>

```typescript
public readonly ListStudios: string[];
```

- *Type:* string[]

IAM actions required for the ListStudios API call.

---

##### `ListStudioSessionMappings`<sup>Required</sup> <a name="ListStudioSessionMappings" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListStudioSessionMappings"></a>

```typescript
public readonly ListStudioSessionMappings: string[];
```

- *Type:* string[]

IAM actions required for the ListStudioSessionMappings API call.

---

##### `ListSupportedInstanceTypes`<sup>Required</sup> <a name="ListSupportedInstanceTypes" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ListSupportedInstanceTypes"></a>

```typescript
public readonly ListSupportedInstanceTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListSupportedInstanceTypes API call.

---

##### `ModifyCluster`<sup>Required</sup> <a name="ModifyCluster" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ModifyCluster"></a>

```typescript
public readonly ModifyCluster: string[];
```

- *Type:* string[]

IAM actions required for the ModifyCluster API call.

---

##### `ModifyInstanceFleet`<sup>Required</sup> <a name="ModifyInstanceFleet" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ModifyInstanceFleet"></a>

```typescript
public readonly ModifyInstanceFleet: string[];
```

- *Type:* string[]

IAM actions required for the ModifyInstanceFleet API call.

---

##### `ModifyInstanceGroups`<sup>Required</sup> <a name="ModifyInstanceGroups" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.ModifyInstanceGroups"></a>

```typescript
public readonly ModifyInstanceGroups: string[];
```

- *Type:* string[]

IAM actions required for the ModifyInstanceGroups API call.

---

##### `opGetAutoTerminationPolicy`<sup>Required</sup> <a name="opGetAutoTerminationPolicy" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opGetAutoTerminationPolicy"></a>

```typescript
public readonly opGetAutoTerminationPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetAutoTerminationPolicy API call.

---

##### `opGetBlockPublicAccessConfiguration`<sup>Required</sup> <a name="opGetBlockPublicAccessConfiguration" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opGetBlockPublicAccessConfiguration"></a>

```typescript
public readonly opGetBlockPublicAccessConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetBlockPublicAccessConfiguration API call.

---

##### `opGetClusterSessionCredentials`<sup>Required</sup> <a name="opGetClusterSessionCredentials" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opGetClusterSessionCredentials"></a>

```typescript
public readonly opGetClusterSessionCredentials: string[];
```

- *Type:* string[]

IAM actions required for the GetClusterSessionCredentials API call.

---

##### `opGetManagedScalingPolicy`<sup>Required</sup> <a name="opGetManagedScalingPolicy" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opGetManagedScalingPolicy"></a>

```typescript
public readonly opGetManagedScalingPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetManagedScalingPolicy API call.

---

##### `opGetOnClusterAppUIPresignedURL`<sup>Required</sup> <a name="opGetOnClusterAppUIPresignedURL" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opGetOnClusterAppUIPresignedURL"></a>

```typescript
public readonly opGetOnClusterAppUIPresignedURL: string[];
```

- *Type:* string[]

IAM actions required for the GetOnClusterAppUIPresignedURL API call.

---

##### `opGetPersistentAppUIPresignedURL`<sup>Required</sup> <a name="opGetPersistentAppUIPresignedURL" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opGetPersistentAppUIPresignedURL"></a>

```typescript
public readonly opGetPersistentAppUIPresignedURL: string[];
```

- *Type:* string[]

IAM actions required for the GetPersistentAppUIPresignedURL API call.

---

##### `opGetSession`<sup>Required</sup> <a name="opGetSession" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opGetSession"></a>

```typescript
public readonly opGetSession: string[];
```

- *Type:* string[]

IAM actions required for the GetSession API call.

---

##### `opGetSessionEndpoint`<sup>Required</sup> <a name="opGetSessionEndpoint" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opGetSessionEndpoint"></a>

```typescript
public readonly opGetSessionEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetSessionEndpoint API call.

---

##### `opGetStudioSessionMapping`<sup>Required</sup> <a name="opGetStudioSessionMapping" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opGetStudioSessionMapping"></a>

```typescript
public readonly opGetStudioSessionMapping: string[];
```

- *Type:* string[]

IAM actions required for the GetStudioSessionMapping API call.

---

##### `opSetKeepJobFlowAliveWhenNoSteps`<sup>Required</sup> <a name="opSetKeepJobFlowAliveWhenNoSteps" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opSetKeepJobFlowAliveWhenNoSteps"></a>

```typescript
public readonly opSetKeepJobFlowAliveWhenNoSteps: string[];
```

- *Type:* string[]

IAM actions required for the SetKeepJobFlowAliveWhenNoSteps API call.

---

##### `opSetTerminationProtection`<sup>Required</sup> <a name="opSetTerminationProtection" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opSetTerminationProtection"></a>

```typescript
public readonly opSetTerminationProtection: string[];
```

- *Type:* string[]

IAM actions required for the SetTerminationProtection API call.

---

##### `opSetUnhealthyNodeReplacement`<sup>Required</sup> <a name="opSetUnhealthyNodeReplacement" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opSetUnhealthyNodeReplacement"></a>

```typescript
public readonly opSetUnhealthyNodeReplacement: string[];
```

- *Type:* string[]

IAM actions required for the SetUnhealthyNodeReplacement API call.

---

##### `opSetVisibleToAllUsers`<sup>Required</sup> <a name="opSetVisibleToAllUsers" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.opSetVisibleToAllUsers"></a>

```typescript
public readonly opSetVisibleToAllUsers: string[];
```

- *Type:* string[]

IAM actions required for the SetVisibleToAllUsers API call.

---

##### `PutAutoScalingPolicy`<sup>Required</sup> <a name="PutAutoScalingPolicy" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.PutAutoScalingPolicy"></a>

```typescript
public readonly PutAutoScalingPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutAutoScalingPolicy API call.

---

##### `PutAutoTerminationPolicy`<sup>Required</sup> <a name="PutAutoTerminationPolicy" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.PutAutoTerminationPolicy"></a>

```typescript
public readonly PutAutoTerminationPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutAutoTerminationPolicy API call.

---

##### `PutBlockPublicAccessConfiguration`<sup>Required</sup> <a name="PutBlockPublicAccessConfiguration" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.PutBlockPublicAccessConfiguration"></a>

```typescript
public readonly PutBlockPublicAccessConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutBlockPublicAccessConfiguration API call.

---

##### `PutManagedScalingPolicy`<sup>Required</sup> <a name="PutManagedScalingPolicy" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.PutManagedScalingPolicy"></a>

```typescript
public readonly PutManagedScalingPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutManagedScalingPolicy API call.

---

##### `RemoveAutoScalingPolicy`<sup>Required</sup> <a name="RemoveAutoScalingPolicy" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.RemoveAutoScalingPolicy"></a>

```typescript
public readonly RemoveAutoScalingPolicy: string[];
```

- *Type:* string[]

IAM actions required for the RemoveAutoScalingPolicy API call.

---

##### `RemoveAutoTerminationPolicy`<sup>Required</sup> <a name="RemoveAutoTerminationPolicy" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.RemoveAutoTerminationPolicy"></a>

```typescript
public readonly RemoveAutoTerminationPolicy: string[];
```

- *Type:* string[]

IAM actions required for the RemoveAutoTerminationPolicy API call.

---

##### `RemoveManagedScalingPolicy`<sup>Required</sup> <a name="RemoveManagedScalingPolicy" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.RemoveManagedScalingPolicy"></a>

```typescript
public readonly RemoveManagedScalingPolicy: string[];
```

- *Type:* string[]

IAM actions required for the RemoveManagedScalingPolicy API call.

---

##### `RemoveTags`<sup>Required</sup> <a name="RemoveTags" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.RemoveTags"></a>

```typescript
public readonly RemoveTags: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTags API call.

---

##### `RunJobFlow`<sup>Required</sup> <a name="RunJobFlow" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.RunJobFlow"></a>

```typescript
public readonly RunJobFlow: string[];
```

- *Type:* string[]

IAM actions required for the RunJobFlow API call.

---

##### `StartNotebookExecution`<sup>Required</sup> <a name="StartNotebookExecution" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.StartNotebookExecution"></a>

```typescript
public readonly StartNotebookExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartNotebookExecution API call.

---

##### `StartSession`<sup>Required</sup> <a name="StartSession" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.StartSession"></a>

```typescript
public readonly StartSession: string[];
```

- *Type:* string[]

IAM actions required for the StartSession API call.

---

##### `StopNotebookExecution`<sup>Required</sup> <a name="StopNotebookExecution" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.StopNotebookExecution"></a>

```typescript
public readonly StopNotebookExecution: string[];
```

- *Type:* string[]

IAM actions required for the StopNotebookExecution API call.

---

##### `TerminateJobFlows`<sup>Required</sup> <a name="TerminateJobFlows" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.TerminateJobFlows"></a>

```typescript
public readonly TerminateJobFlows: string[];
```

- *Type:* string[]

IAM actions required for the TerminateJobFlows API call.

---

##### `TerminateSession`<sup>Required</sup> <a name="TerminateSession" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.TerminateSession"></a>

```typescript
public readonly TerminateSession: string[];
```

- *Type:* string[]

IAM actions required for the TerminateSession API call.

---

##### `UpdateStudio`<sup>Required</sup> <a name="UpdateStudio" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.UpdateStudio"></a>

```typescript
public readonly UpdateStudio: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStudio API call.

---

##### `UpdateStudioSessionMapping`<sup>Required</sup> <a name="UpdateStudioSessionMapping" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceOperations.property.UpdateStudioSessionMapping"></a>

```typescript
public readonly UpdateStudioSessionMapping: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStudioSessionMapping API call.

---

### ElasticmapreduceResources <a name="ElasticmapreduceResources" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources"></a>

ARN builders, validators, and parsers for elasticmapreduce resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.Initializer"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

new elasticmapreduce.ElasticmapreduceResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.cluster">cluster</a></code> | Builds an ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.editor">editor</a></code> | Builds an ARN for the editor resource. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.isValidClusterArn">isValidClusterArn</a></code> | Validates whether a string is a valid ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.isValidEditorArn">isValidEditorArn</a></code> | Validates whether a string is a valid ARN for the editor resource. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.isValidNotebookExecutionArn">isValidNotebookExecutionArn</a></code> | Validates whether a string is a valid ARN for the notebook-execution resource. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.isValidSessionArn">isValidSessionArn</a></code> | Validates whether a string is a valid ARN for the session resource. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.isValidStudioArn">isValidStudioArn</a></code> | Validates whether a string is a valid ARN for the studio resource. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.notebookExecution">notebookExecution</a></code> | Builds an ARN for the notebook-execution resource. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.parseClusterArn">parseClusterArn</a></code> | Parses a cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.parseEditorArn">parseEditorArn</a></code> | Parses a editor ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.parseNotebookExecutionArn">parseNotebookExecutionArn</a></code> | Parses a notebook-execution ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.parseSessionArn">parseSessionArn</a></code> | Parses a session ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.parseStudioArn">parseStudioArn</a></code> | Parses a studio ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.session">session</a></code> | Builds an ARN for the session resource. |
| <code><a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.studio">studio</a></code> | Builds an ARN for the studio resource. |

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.cluster"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

elasticmapreduce.ElasticmapreduceResources.cluster(props: ElasticmapreduceClusterArnProps)
```

Builds an ARN for the cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.cluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceClusterArnProps">ElasticmapreduceClusterArnProps</a>

---

##### `editor` <a name="editor" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.editor"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

elasticmapreduce.ElasticmapreduceResources.editor(props: ElasticmapreduceEditorArnProps)
```

Builds an ARN for the editor resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.editor.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceEditorArnProps">ElasticmapreduceEditorArnProps</a>

---

##### `isValidClusterArn` <a name="isValidClusterArn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.isValidClusterArn"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

elasticmapreduce.ElasticmapreduceResources.isValidClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.isValidClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEditorArn` <a name="isValidEditorArn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.isValidEditorArn"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

elasticmapreduce.ElasticmapreduceResources.isValidEditorArn(arn: string)
```

Validates whether a string is a valid ARN for the editor resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.isValidEditorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNotebookExecutionArn` <a name="isValidNotebookExecutionArn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.isValidNotebookExecutionArn"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

elasticmapreduce.ElasticmapreduceResources.isValidNotebookExecutionArn(arn: string)
```

Validates whether a string is a valid ARN for the notebook-execution resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.isValidNotebookExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSessionArn` <a name="isValidSessionArn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.isValidSessionArn"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

elasticmapreduce.ElasticmapreduceResources.isValidSessionArn(arn: string)
```

Validates whether a string is a valid ARN for the session resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.isValidSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStudioArn` <a name="isValidStudioArn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.isValidStudioArn"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

elasticmapreduce.ElasticmapreduceResources.isValidStudioArn(arn: string)
```

Validates whether a string is a valid ARN for the studio resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.isValidStudioArn.parameter.arn"></a>

- *Type:* string

---

##### `notebookExecution` <a name="notebookExecution" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.notebookExecution"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

elasticmapreduce.ElasticmapreduceResources.notebookExecution(props: ElasticmapreduceNotebookExecutionArnProps)
```

Builds an ARN for the notebook-execution resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.notebookExecution.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceNotebookExecutionArnProps">ElasticmapreduceNotebookExecutionArnProps</a>

---

##### `parseClusterArn` <a name="parseClusterArn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.parseClusterArn"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

elasticmapreduce.ElasticmapreduceResources.parseClusterArn(arn: string)
```

Parses a cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.parseClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEditorArn` <a name="parseEditorArn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.parseEditorArn"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

elasticmapreduce.ElasticmapreduceResources.parseEditorArn(arn: string)
```

Parses a editor ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.parseEditorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNotebookExecutionArn` <a name="parseNotebookExecutionArn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.parseNotebookExecutionArn"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

elasticmapreduce.ElasticmapreduceResources.parseNotebookExecutionArn(arn: string)
```

Parses a notebook-execution ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.parseNotebookExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSessionArn` <a name="parseSessionArn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.parseSessionArn"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

elasticmapreduce.ElasticmapreduceResources.parseSessionArn(arn: string)
```

Parses a session ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.parseSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStudioArn` <a name="parseStudioArn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.parseStudioArn"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

elasticmapreduce.ElasticmapreduceResources.parseStudioArn(arn: string)
```

Parses a studio ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.parseStudioArn.parameter.arn"></a>

- *Type:* string

---

##### `session` <a name="session" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.session"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

elasticmapreduce.ElasticmapreduceResources.session(props: ElasticmapreduceSessionArnProps)
```

Builds an ARN for the session resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.session.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceSessionArnProps">ElasticmapreduceSessionArnProps</a>

---

##### `studio` <a name="studio" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.studio"></a>

```typescript
import { elasticmapreduce } from '@cdk_utils/iam'

elasticmapreduce.ElasticmapreduceResources.studio(props: ElasticmapreduceStudioArnProps)
```

Builds an ARN for the studio resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticmapreduce.ElasticmapreduceResources.studio.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticmapreduce.ElasticmapreduceStudioArnProps">ElasticmapreduceStudioArnProps</a>

---




