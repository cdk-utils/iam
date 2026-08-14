# `imagebuilder` Submodule <a name="`imagebuilder` Submodule" id="@cdk_utils/iam.imagebuilder"></a>


## Structs <a name="Structs" id="Structs"></a>

### ImageBuilderAllComponentBuildVersionsArnComponents <a name="ImageBuilderAllComponentBuildVersionsArnComponents" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnComponents"></a>

Parsed components of a allComponentBuildVersions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnComponents.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderAllComponentBuildVersionsArnComponents: imagebuilder.ImageBuilderAllComponentBuildVersionsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnComponents.property.componentName">componentName</a></code> | <code>string</code> | The ComponentName component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnComponents.property.componentVersion">componentVersion</a></code> | <code>string</code> | The ComponentVersion component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `componentName`<sup>Required</sup> <a name="componentName" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnComponents.property.componentName"></a>

```typescript
public readonly componentName: string;
```

- *Type:* string

The ComponentName component.

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnComponents.property.componentVersion"></a>

```typescript
public readonly componentVersion: string;
```

- *Type:* string

The ComponentVersion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ImageBuilderAllComponentBuildVersionsArnProps <a name="ImageBuilderAllComponentBuildVersionsArnProps" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnProps"></a>

Properties for building a allComponentBuildVersions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnProps.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderAllComponentBuildVersionsArnProps: imagebuilder.ImageBuilderAllComponentBuildVersionsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnProps.property.componentName">componentName</a></code> | <code>string</code> | The ComponentName component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnProps.property.componentVersion">componentVersion</a></code> | <code>string</code> | The ComponentVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `componentName`<sup>Required</sup> <a name="componentName" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnProps.property.componentName"></a>

```typescript
public readonly componentName: string;
```

- *Type:* string

The ComponentName component of the ARN.

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnProps.property.componentVersion"></a>

```typescript
public readonly componentVersion: string;
```

- *Type:* string

The ComponentVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ImageBuilderAllImageBuildVersionsArnComponents <a name="ImageBuilderAllImageBuildVersionsArnComponents" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnComponents"></a>

Parsed components of a allImageBuildVersions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnComponents.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderAllImageBuildVersionsArnComponents: imagebuilder.ImageBuilderAllImageBuildVersionsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnComponents.property.imageName">imageName</a></code> | <code>string</code> | The ImageName component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnComponents.property.imageVersion">imageVersion</a></code> | <code>string</code> | The ImageVersion component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnComponents.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

The ImageName component.

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnComponents.property.imageVersion"></a>

```typescript
public readonly imageVersion: string;
```

- *Type:* string

The ImageVersion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ImageBuilderAllImageBuildVersionsArnProps <a name="ImageBuilderAllImageBuildVersionsArnProps" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnProps"></a>

Properties for building a allImageBuildVersions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnProps.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderAllImageBuildVersionsArnProps: imagebuilder.ImageBuilderAllImageBuildVersionsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnProps.property.imageName">imageName</a></code> | <code>string</code> | The ImageName component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnProps.property.imageVersion">imageVersion</a></code> | <code>string</code> | The ImageVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnProps.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

The ImageName component of the ARN.

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnProps.property.imageVersion"></a>

```typescript
public readonly imageVersion: string;
```

- *Type:* string

The ImageVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ImageBuilderAllWorkflowBuildVersionsArnComponents <a name="ImageBuilderAllWorkflowBuildVersionsArnComponents" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnComponents"></a>

Parsed components of a allWorkflowBuildVersions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnComponents.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderAllWorkflowBuildVersionsArnComponents: imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnComponents.property.workflowName">workflowName</a></code> | <code>string</code> | The WorkflowName component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnComponents.property.workflowType">workflowType</a></code> | <code>string</code> | The WorkflowType component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnComponents.property.workflowVersion">workflowVersion</a></code> | <code>string</code> | The WorkflowVersion component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnComponents.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

The WorkflowName component.

---

##### `workflowType`<sup>Required</sup> <a name="workflowType" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnComponents.property.workflowType"></a>

```typescript
public readonly workflowType: string;
```

- *Type:* string

The WorkflowType component.

---

##### `workflowVersion`<sup>Required</sup> <a name="workflowVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnComponents.property.workflowVersion"></a>

```typescript
public readonly workflowVersion: string;
```

- *Type:* string

The WorkflowVersion component.

---

### ImageBuilderAllWorkflowBuildVersionsArnProps <a name="ImageBuilderAllWorkflowBuildVersionsArnProps" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnProps"></a>

Properties for building a allWorkflowBuildVersions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnProps.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderAllWorkflowBuildVersionsArnProps: imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnProps.property.workflowName">workflowName</a></code> | <code>string</code> | The WorkflowName component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnProps.property.workflowType">workflowType</a></code> | <code>string</code> | The WorkflowType component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnProps.property.workflowVersion">workflowVersion</a></code> | <code>string</code> | The WorkflowVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnProps.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

The WorkflowName component of the ARN.

---

##### `workflowType`<sup>Required</sup> <a name="workflowType" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnProps.property.workflowType"></a>

```typescript
public readonly workflowType: string;
```

- *Type:* string

The WorkflowType component of the ARN.

---

##### `workflowVersion`<sup>Required</sup> <a name="workflowVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnProps.property.workflowVersion"></a>

```typescript
public readonly workflowVersion: string;
```

- *Type:* string

The WorkflowVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ImageBuilderComponentArnComponents <a name="ImageBuilderComponentArnComponents" id="@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnComponents"></a>

Parsed components of a component ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnComponents.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderComponentArnComponents: imagebuilder.ImageBuilderComponentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnComponents.property.componentBuildVersion">componentBuildVersion</a></code> | <code>string</code> | The ComponentBuildVersion component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnComponents.property.componentName">componentName</a></code> | <code>string</code> | The ComponentName component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnComponents.property.componentVersion">componentVersion</a></code> | <code>string</code> | The ComponentVersion component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `componentBuildVersion`<sup>Required</sup> <a name="componentBuildVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnComponents.property.componentBuildVersion"></a>

```typescript
public readonly componentBuildVersion: string;
```

- *Type:* string

The ComponentBuildVersion component.

---

##### `componentName`<sup>Required</sup> <a name="componentName" id="@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnComponents.property.componentName"></a>

```typescript
public readonly componentName: string;
```

- *Type:* string

The ComponentName component.

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnComponents.property.componentVersion"></a>

```typescript
public readonly componentVersion: string;
```

- *Type:* string

The ComponentVersion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ImageBuilderComponentArnProps <a name="ImageBuilderComponentArnProps" id="@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnProps"></a>

Properties for building a component ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnProps.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderComponentArnProps: imagebuilder.ImageBuilderComponentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnProps.property.componentBuildVersion">componentBuildVersion</a></code> | <code>string</code> | The ComponentBuildVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnProps.property.componentName">componentName</a></code> | <code>string</code> | The ComponentName component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnProps.property.componentVersion">componentVersion</a></code> | <code>string</code> | The ComponentVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `componentBuildVersion`<sup>Required</sup> <a name="componentBuildVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnProps.property.componentBuildVersion"></a>

```typescript
public readonly componentBuildVersion: string;
```

- *Type:* string

The ComponentBuildVersion component of the ARN.

---

##### `componentName`<sup>Required</sup> <a name="componentName" id="@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnProps.property.componentName"></a>

```typescript
public readonly componentName: string;
```

- *Type:* string

The ComponentName component of the ARN.

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnProps.property.componentVersion"></a>

```typescript
public readonly componentVersion: string;
```

- *Type:* string

The ComponentVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ImageBuilderContainerRecipeArnComponents <a name="ImageBuilderContainerRecipeArnComponents" id="@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnComponents"></a>

Parsed components of a containerRecipe ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnComponents.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderContainerRecipeArnComponents: imagebuilder.ImageBuilderContainerRecipeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnComponents.property.containerRecipeName">containerRecipeName</a></code> | <code>string</code> | The ContainerRecipeName component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnComponents.property.containerRecipeVersion">containerRecipeVersion</a></code> | <code>string</code> | The ContainerRecipeVersion component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `containerRecipeName`<sup>Required</sup> <a name="containerRecipeName" id="@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnComponents.property.containerRecipeName"></a>

```typescript
public readonly containerRecipeName: string;
```

- *Type:* string

The ContainerRecipeName component.

---

##### `containerRecipeVersion`<sup>Required</sup> <a name="containerRecipeVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnComponents.property.containerRecipeVersion"></a>

```typescript
public readonly containerRecipeVersion: string;
```

- *Type:* string

The ContainerRecipeVersion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ImageBuilderContainerRecipeArnProps <a name="ImageBuilderContainerRecipeArnProps" id="@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnProps"></a>

Properties for building a containerRecipe ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnProps.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderContainerRecipeArnProps: imagebuilder.ImageBuilderContainerRecipeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnProps.property.containerRecipeName">containerRecipeName</a></code> | <code>string</code> | The ContainerRecipeName component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnProps.property.containerRecipeVersion">containerRecipeVersion</a></code> | <code>string</code> | The ContainerRecipeVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `containerRecipeName`<sup>Required</sup> <a name="containerRecipeName" id="@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnProps.property.containerRecipeName"></a>

```typescript
public readonly containerRecipeName: string;
```

- *Type:* string

The ContainerRecipeName component of the ARN.

---

##### `containerRecipeVersion`<sup>Required</sup> <a name="containerRecipeVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnProps.property.containerRecipeVersion"></a>

```typescript
public readonly containerRecipeVersion: string;
```

- *Type:* string

The ContainerRecipeVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ImageBuilderDistributionConfigurationArnComponents <a name="ImageBuilderDistributionConfigurationArnComponents" id="@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnComponents"></a>

Parsed components of a distributionConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnComponents.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderDistributionConfigurationArnComponents: imagebuilder.ImageBuilderDistributionConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnComponents.property.distributionConfigurationName">distributionConfigurationName</a></code> | <code>string</code> | The DistributionConfigurationName component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `distributionConfigurationName`<sup>Required</sup> <a name="distributionConfigurationName" id="@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnComponents.property.distributionConfigurationName"></a>

```typescript
public readonly distributionConfigurationName: string;
```

- *Type:* string

The DistributionConfigurationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ImageBuilderDistributionConfigurationArnProps <a name="ImageBuilderDistributionConfigurationArnProps" id="@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnProps"></a>

Properties for building a distributionConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnProps.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderDistributionConfigurationArnProps: imagebuilder.ImageBuilderDistributionConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnProps.property.distributionConfigurationName">distributionConfigurationName</a></code> | <code>string</code> | The DistributionConfigurationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `distributionConfigurationName`<sup>Required</sup> <a name="distributionConfigurationName" id="@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnProps.property.distributionConfigurationName"></a>

```typescript
public readonly distributionConfigurationName: string;
```

- *Type:* string

The DistributionConfigurationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ImageBuilderImageArnComponents <a name="ImageBuilderImageArnComponents" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageArnComponents"></a>

Parsed components of a image ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageArnComponents.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderImageArnComponents: imagebuilder.ImageBuilderImageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageArnComponents.property.imageBuildVersion">imageBuildVersion</a></code> | <code>string</code> | The ImageBuildVersion component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageArnComponents.property.imageName">imageName</a></code> | <code>string</code> | The ImageName component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageArnComponents.property.imageVersion">imageVersion</a></code> | <code>string</code> | The ImageVersion component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `imageBuildVersion`<sup>Required</sup> <a name="imageBuildVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageArnComponents.property.imageBuildVersion"></a>

```typescript
public readonly imageBuildVersion: string;
```

- *Type:* string

The ImageBuildVersion component.

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageArnComponents.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

The ImageName component.

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageArnComponents.property.imageVersion"></a>

```typescript
public readonly imageVersion: string;
```

- *Type:* string

The ImageVersion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ImageBuilderImageArnProps <a name="ImageBuilderImageArnProps" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageArnProps"></a>

Properties for building a image ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageArnProps.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderImageArnProps: imagebuilder.ImageBuilderImageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageArnProps.property.imageBuildVersion">imageBuildVersion</a></code> | <code>string</code> | The ImageBuildVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageArnProps.property.imageName">imageName</a></code> | <code>string</code> | The ImageName component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageArnProps.property.imageVersion">imageVersion</a></code> | <code>string</code> | The ImageVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `imageBuildVersion`<sup>Required</sup> <a name="imageBuildVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageArnProps.property.imageBuildVersion"></a>

```typescript
public readonly imageBuildVersion: string;
```

- *Type:* string

The ImageBuildVersion component of the ARN.

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageArnProps.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

The ImageName component of the ARN.

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageArnProps.property.imageVersion"></a>

```typescript
public readonly imageVersion: string;
```

- *Type:* string

The ImageVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ImageBuilderImagePipelineArnComponents <a name="ImageBuilderImagePipelineArnComponents" id="@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnComponents"></a>

Parsed components of a imagePipeline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnComponents.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderImagePipelineArnComponents: imagebuilder.ImageBuilderImagePipelineArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnComponents.property.imagePipelineName">imagePipelineName</a></code> | <code>string</code> | The ImagePipelineName component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `imagePipelineName`<sup>Required</sup> <a name="imagePipelineName" id="@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnComponents.property.imagePipelineName"></a>

```typescript
public readonly imagePipelineName: string;
```

- *Type:* string

The ImagePipelineName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ImageBuilderImagePipelineArnProps <a name="ImageBuilderImagePipelineArnProps" id="@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnProps"></a>

Properties for building a imagePipeline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnProps.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderImagePipelineArnProps: imagebuilder.ImageBuilderImagePipelineArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnProps.property.imagePipelineName">imagePipelineName</a></code> | <code>string</code> | The ImagePipelineName component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `imagePipelineName`<sup>Required</sup> <a name="imagePipelineName" id="@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnProps.property.imagePipelineName"></a>

```typescript
public readonly imagePipelineName: string;
```

- *Type:* string

The ImagePipelineName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ImageBuilderImageRecipeArnComponents <a name="ImageBuilderImageRecipeArnComponents" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnComponents"></a>

Parsed components of a imageRecipe ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnComponents.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderImageRecipeArnComponents: imagebuilder.ImageBuilderImageRecipeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnComponents.property.imageRecipeName">imageRecipeName</a></code> | <code>string</code> | The ImageRecipeName component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnComponents.property.imageRecipeVersion">imageRecipeVersion</a></code> | <code>string</code> | The ImageRecipeVersion component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `imageRecipeName`<sup>Required</sup> <a name="imageRecipeName" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnComponents.property.imageRecipeName"></a>

```typescript
public readonly imageRecipeName: string;
```

- *Type:* string

The ImageRecipeName component.

---

##### `imageRecipeVersion`<sup>Required</sup> <a name="imageRecipeVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnComponents.property.imageRecipeVersion"></a>

```typescript
public readonly imageRecipeVersion: string;
```

- *Type:* string

The ImageRecipeVersion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ImageBuilderImageRecipeArnProps <a name="ImageBuilderImageRecipeArnProps" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnProps"></a>

Properties for building a imageRecipe ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnProps.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderImageRecipeArnProps: imagebuilder.ImageBuilderImageRecipeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnProps.property.imageRecipeName">imageRecipeName</a></code> | <code>string</code> | The ImageRecipeName component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnProps.property.imageRecipeVersion">imageRecipeVersion</a></code> | <code>string</code> | The ImageRecipeVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `imageRecipeName`<sup>Required</sup> <a name="imageRecipeName" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnProps.property.imageRecipeName"></a>

```typescript
public readonly imageRecipeName: string;
```

- *Type:* string

The ImageRecipeName component of the ARN.

---

##### `imageRecipeVersion`<sup>Required</sup> <a name="imageRecipeVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnProps.property.imageRecipeVersion"></a>

```typescript
public readonly imageRecipeVersion: string;
```

- *Type:* string

The ImageRecipeVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ImageBuilderImageVersionArnComponents <a name="ImageBuilderImageVersionArnComponents" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnComponents"></a>

Parsed components of a imageVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnComponents.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderImageVersionArnComponents: imagebuilder.ImageBuilderImageVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnComponents.property.imageName">imageName</a></code> | <code>string</code> | The ImageName component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnComponents.property.imageVersion">imageVersion</a></code> | <code>string</code> | The ImageVersion component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnComponents.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

The ImageName component.

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnComponents.property.imageVersion"></a>

```typescript
public readonly imageVersion: string;
```

- *Type:* string

The ImageVersion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ImageBuilderImageVersionArnProps <a name="ImageBuilderImageVersionArnProps" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnProps"></a>

Properties for building a imageVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnProps.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderImageVersionArnProps: imagebuilder.ImageBuilderImageVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnProps.property.imageName">imageName</a></code> | <code>string</code> | The ImageName component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnProps.property.imageVersion">imageVersion</a></code> | <code>string</code> | The ImageVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnProps.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

The ImageName component of the ARN.

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnProps.property.imageVersion"></a>

```typescript
public readonly imageVersion: string;
```

- *Type:* string

The ImageVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ImageBuilderInfrastructureConfigurationArnComponents <a name="ImageBuilderInfrastructureConfigurationArnComponents" id="@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnComponents"></a>

Parsed components of a infrastructureConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnComponents.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderInfrastructureConfigurationArnComponents: imagebuilder.ImageBuilderInfrastructureConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ImageBuilderInfrastructureConfigurationArnProps <a name="ImageBuilderInfrastructureConfigurationArnProps" id="@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnProps"></a>

Properties for building a infrastructureConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnProps.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderInfrastructureConfigurationArnProps: imagebuilder.ImageBuilderInfrastructureConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ImageBuilderLifecycleExecutionArnComponents <a name="ImageBuilderLifecycleExecutionArnComponents" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnComponents"></a>

Parsed components of a lifecycleExecution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnComponents.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderLifecycleExecutionArnComponents: imagebuilder.ImageBuilderLifecycleExecutionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnComponents.property.lifecycleExecutionId">lifecycleExecutionId</a></code> | <code>string</code> | The LifecycleExecutionId component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `lifecycleExecutionId`<sup>Required</sup> <a name="lifecycleExecutionId" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnComponents.property.lifecycleExecutionId"></a>

```typescript
public readonly lifecycleExecutionId: string;
```

- *Type:* string

The LifecycleExecutionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ImageBuilderLifecycleExecutionArnProps <a name="ImageBuilderLifecycleExecutionArnProps" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnProps"></a>

Properties for building a lifecycleExecution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnProps.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderLifecycleExecutionArnProps: imagebuilder.ImageBuilderLifecycleExecutionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnProps.property.lifecycleExecutionId">lifecycleExecutionId</a></code> | <code>string</code> | The LifecycleExecutionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `lifecycleExecutionId`<sup>Required</sup> <a name="lifecycleExecutionId" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnProps.property.lifecycleExecutionId"></a>

```typescript
public readonly lifecycleExecutionId: string;
```

- *Type:* string

The LifecycleExecutionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ImageBuilderLifecyclePolicyArnComponents <a name="ImageBuilderLifecyclePolicyArnComponents" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnComponents"></a>

Parsed components of a lifecyclePolicy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnComponents.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderLifecyclePolicyArnComponents: imagebuilder.ImageBuilderLifecyclePolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnComponents.property.lifecyclePolicyName">lifecyclePolicyName</a></code> | <code>string</code> | The LifecyclePolicyName component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `lifecyclePolicyName`<sup>Required</sup> <a name="lifecyclePolicyName" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnComponents.property.lifecyclePolicyName"></a>

```typescript
public readonly lifecyclePolicyName: string;
```

- *Type:* string

The LifecyclePolicyName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ImageBuilderLifecyclePolicyArnProps <a name="ImageBuilderLifecyclePolicyArnProps" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnProps"></a>

Properties for building a lifecyclePolicy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnProps.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderLifecyclePolicyArnProps: imagebuilder.ImageBuilderLifecyclePolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnProps.property.lifecyclePolicyName">lifecyclePolicyName</a></code> | <code>string</code> | The LifecyclePolicyName component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `lifecyclePolicyName`<sup>Required</sup> <a name="lifecyclePolicyName" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnProps.property.lifecyclePolicyName"></a>

```typescript
public readonly lifecyclePolicyName: string;
```

- *Type:* string

The LifecyclePolicyName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ImageBuilderWorkflowArnComponents <a name="ImageBuilderWorkflowArnComponents" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnComponents"></a>

Parsed components of a workflow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnComponents.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderWorkflowArnComponents: imagebuilder.ImageBuilderWorkflowArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnComponents.property.workflowBuildVersion">workflowBuildVersion</a></code> | <code>string</code> | The WorkflowBuildVersion component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnComponents.property.workflowName">workflowName</a></code> | <code>string</code> | The WorkflowName component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnComponents.property.workflowType">workflowType</a></code> | <code>string</code> | The WorkflowType component. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnComponents.property.workflowVersion">workflowVersion</a></code> | <code>string</code> | The WorkflowVersion component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workflowBuildVersion`<sup>Required</sup> <a name="workflowBuildVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnComponents.property.workflowBuildVersion"></a>

```typescript
public readonly workflowBuildVersion: string;
```

- *Type:* string

The WorkflowBuildVersion component.

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnComponents.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

The WorkflowName component.

---

##### `workflowType`<sup>Required</sup> <a name="workflowType" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnComponents.property.workflowType"></a>

```typescript
public readonly workflowType: string;
```

- *Type:* string

The WorkflowType component.

---

##### `workflowVersion`<sup>Required</sup> <a name="workflowVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnComponents.property.workflowVersion"></a>

```typescript
public readonly workflowVersion: string;
```

- *Type:* string

The WorkflowVersion component.

---

### ImageBuilderWorkflowArnProps <a name="ImageBuilderWorkflowArnProps" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnProps"></a>

Properties for building a workflow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnProps.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderWorkflowArnProps: imagebuilder.ImageBuilderWorkflowArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnProps.property.workflowBuildVersion">workflowBuildVersion</a></code> | <code>string</code> | The WorkflowBuildVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnProps.property.workflowName">workflowName</a></code> | <code>string</code> | The WorkflowName component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnProps.property.workflowType">workflowType</a></code> | <code>string</code> | The WorkflowType component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnProps.property.workflowVersion">workflowVersion</a></code> | <code>string</code> | The WorkflowVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workflowBuildVersion`<sup>Required</sup> <a name="workflowBuildVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnProps.property.workflowBuildVersion"></a>

```typescript
public readonly workflowBuildVersion: string;
```

- *Type:* string

The WorkflowBuildVersion component of the ARN.

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnProps.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

The WorkflowName component of the ARN.

---

##### `workflowType`<sup>Required</sup> <a name="workflowType" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnProps.property.workflowType"></a>

```typescript
public readonly workflowType: string;
```

- *Type:* string

The WorkflowType component of the ARN.

---

##### `workflowVersion`<sup>Required</sup> <a name="workflowVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnProps.property.workflowVersion"></a>

```typescript
public readonly workflowVersion: string;
```

- *Type:* string

The WorkflowVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ImageBuilderWorkflowExecutionArnComponents <a name="ImageBuilderWorkflowExecutionArnComponents" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnComponents"></a>

Parsed components of a workflowExecution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnComponents.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderWorkflowExecutionArnComponents: imagebuilder.ImageBuilderWorkflowExecutionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnComponents.property.workflowExecutionId">workflowExecutionId</a></code> | <code>string</code> | The WorkflowExecutionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workflowExecutionId`<sup>Required</sup> <a name="workflowExecutionId" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnComponents.property.workflowExecutionId"></a>

```typescript
public readonly workflowExecutionId: string;
```

- *Type:* string

The WorkflowExecutionId component.

---

### ImageBuilderWorkflowExecutionArnProps <a name="ImageBuilderWorkflowExecutionArnProps" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnProps"></a>

Properties for building a workflowExecution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnProps.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderWorkflowExecutionArnProps: imagebuilder.ImageBuilderWorkflowExecutionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnProps.property.workflowExecutionId">workflowExecutionId</a></code> | <code>string</code> | The WorkflowExecutionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workflowExecutionId`<sup>Required</sup> <a name="workflowExecutionId" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnProps.property.workflowExecutionId"></a>

```typescript
public readonly workflowExecutionId: string;
```

- *Type:* string

The WorkflowExecutionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ImageBuilderWorkflowStepExecutionArnComponents <a name="ImageBuilderWorkflowStepExecutionArnComponents" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnComponents"></a>

Parsed components of a workflowStepExecution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnComponents.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderWorkflowStepExecutionArnComponents: imagebuilder.ImageBuilderWorkflowStepExecutionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnComponents.property.workflowStepExecutionId">workflowStepExecutionId</a></code> | <code>string</code> | The WorkflowStepExecutionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workflowStepExecutionId`<sup>Required</sup> <a name="workflowStepExecutionId" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnComponents.property.workflowStepExecutionId"></a>

```typescript
public readonly workflowStepExecutionId: string;
```

- *Type:* string

The WorkflowStepExecutionId component.

---

### ImageBuilderWorkflowStepExecutionArnProps <a name="ImageBuilderWorkflowStepExecutionArnProps" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnProps"></a>

Properties for building a workflowStepExecution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnProps.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

const imageBuilderWorkflowStepExecutionArnProps: imagebuilder.ImageBuilderWorkflowStepExecutionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnProps.property.workflowStepExecutionId">workflowStepExecutionId</a></code> | <code>string</code> | The WorkflowStepExecutionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workflowStepExecutionId`<sup>Required</sup> <a name="workflowStepExecutionId" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnProps.property.workflowStepExecutionId"></a>

```typescript
public readonly workflowStepExecutionId: string;
```

- *Type:* string

The WorkflowStepExecutionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ImageBuilderActions <a name="ImageBuilderActions" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions"></a>

IAM action constants for the imagebuilder service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

new imagebuilder.ImageBuilderActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetComponent">actionGetComponent</a></code> | <code>string</code> | [Read] imagebuilder:GetComponent. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetComponentPolicy">actionGetComponentPolicy</a></code> | <code>string</code> | [Read] imagebuilder:GetComponentPolicy. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetContainerRecipe">actionGetContainerRecipe</a></code> | <code>string</code> | [Read] imagebuilder:GetContainerRecipe. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetContainerRecipePolicy">actionGetContainerRecipePolicy</a></code> | <code>string</code> | [Read] imagebuilder:GetContainerRecipePolicy. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetDistributionConfiguration">actionGetDistributionConfiguration</a></code> | <code>string</code> | [Read] imagebuilder:GetDistributionConfiguration. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetImage">actionGetImage</a></code> | <code>string</code> | [Read] imagebuilder:GetImage. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetImagePipeline">actionGetImagePipeline</a></code> | <code>string</code> | [Read] imagebuilder:GetImagePipeline. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetImagePolicy">actionGetImagePolicy</a></code> | <code>string</code> | [Read] imagebuilder:GetImagePolicy. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetImageRecipe">actionGetImageRecipe</a></code> | <code>string</code> | [Read] imagebuilder:GetImageRecipe. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetImageRecipePolicy">actionGetImageRecipePolicy</a></code> | <code>string</code> | [Read] imagebuilder:GetImageRecipePolicy. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetInfrastructureConfiguration">actionGetInfrastructureConfiguration</a></code> | <code>string</code> | [Read] imagebuilder:GetInfrastructureConfiguration. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetLifecycleExecution">actionGetLifecycleExecution</a></code> | <code>string</code> | [Read] imagebuilder:GetLifecycleExecution. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetLifecyclePolicy">actionGetLifecyclePolicy</a></code> | <code>string</code> | [Read] imagebuilder:GetLifecyclePolicy. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetMarketplaceResource">actionGetMarketplaceResource</a></code> | <code>string</code> | [Read] imagebuilder:GetMarketplaceResource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetWorkflow">actionGetWorkflow</a></code> | <code>string</code> | [Read] imagebuilder:GetWorkflow. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetWorkflowExecution">actionGetWorkflowExecution</a></code> | <code>string</code> | [Read] imagebuilder:GetWorkflowExecution. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetWorkflowStepExecution">actionGetWorkflowStepExecution</a></code> | <code>string</code> | [Read] imagebuilder:GetWorkflowStepExecution. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CancelImageCreation">CancelImageCreation</a></code> | <code>string</code> | [Write] imagebuilder:CancelImageCreation. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CancelLifecycleExecution">CancelLifecycleExecution</a></code> | <code>string</code> | [Write] imagebuilder:CancelLifecycleExecution. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CreateComponent">CreateComponent</a></code> | <code>string</code> | [Write] imagebuilder:CreateComponent. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CreateContainerRecipe">CreateContainerRecipe</a></code> | <code>string</code> | [Write] imagebuilder:CreateContainerRecipe. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CreateDistributionConfiguration">CreateDistributionConfiguration</a></code> | <code>string</code> | [Write] imagebuilder:CreateDistributionConfiguration. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CreateImage">CreateImage</a></code> | <code>string</code> | [Write] imagebuilder:CreateImage. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CreateImagePipeline">CreateImagePipeline</a></code> | <code>string</code> | [Write] imagebuilder:CreateImagePipeline. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CreateImageRecipe">CreateImageRecipe</a></code> | <code>string</code> | [Write] imagebuilder:CreateImageRecipe. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CreateInfrastructureConfiguration">CreateInfrastructureConfiguration</a></code> | <code>string</code> | [Write] imagebuilder:CreateInfrastructureConfiguration. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CreateLifecyclePolicy">CreateLifecyclePolicy</a></code> | <code>string</code> | [Write] imagebuilder:CreateLifecyclePolicy. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CreateWorkflow">CreateWorkflow</a></code> | <code>string</code> | [Write] imagebuilder:CreateWorkflow. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DeleteComponent">DeleteComponent</a></code> | <code>string</code> | [Write] imagebuilder:DeleteComponent. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DeleteContainerRecipe">DeleteContainerRecipe</a></code> | <code>string</code> | [Write] imagebuilder:DeleteContainerRecipe. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DeleteDistributionConfiguration">DeleteDistributionConfiguration</a></code> | <code>string</code> | [Write] imagebuilder:DeleteDistributionConfiguration. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DeleteImage">DeleteImage</a></code> | <code>string</code> | [Write] imagebuilder:DeleteImage. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DeleteImagePipeline">DeleteImagePipeline</a></code> | <code>string</code> | [Write] imagebuilder:DeleteImagePipeline. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DeleteImageRecipe">DeleteImageRecipe</a></code> | <code>string</code> | [Write] imagebuilder:DeleteImageRecipe. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DeleteInfrastructureConfiguration">DeleteInfrastructureConfiguration</a></code> | <code>string</code> | [Write] imagebuilder:DeleteInfrastructureConfiguration. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DeleteLifecyclePolicy">DeleteLifecyclePolicy</a></code> | <code>string</code> | [Write] imagebuilder:DeleteLifecyclePolicy. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DeleteWorkflow">DeleteWorkflow</a></code> | <code>string</code> | [Write] imagebuilder:DeleteWorkflow. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DistributeImage">DistributeImage</a></code> | <code>string</code> | [Write] imagebuilder:DistributeImage. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ImportComponent">ImportComponent</a></code> | <code>string</code> | [Write] imagebuilder:ImportComponent. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ImportDiskImage">ImportDiskImage</a></code> | <code>string</code> | [Write] imagebuilder:ImportDiskImage. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ImportVmImage">ImportVmImage</a></code> | <code>string</code> | [Write] imagebuilder:ImportVmImage. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListComponentBuildVersions">ListComponentBuildVersions</a></code> | <code>string</code> | [List] imagebuilder:ListComponentBuildVersions. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListComponents">ListComponents</a></code> | <code>string</code> | [List] imagebuilder:ListComponents. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListContainerRecipes">ListContainerRecipes</a></code> | <code>string</code> | [List] imagebuilder:ListContainerRecipes. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListDistributionConfigurations">ListDistributionConfigurations</a></code> | <code>string</code> | [List] imagebuilder:ListDistributionConfigurations. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListImageBuildVersions">ListImageBuildVersions</a></code> | <code>string</code> | [List] imagebuilder:ListImageBuildVersions. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListImagePackages">ListImagePackages</a></code> | <code>string</code> | [List] imagebuilder:ListImagePackages. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListImagePipelineImages">ListImagePipelineImages</a></code> | <code>string</code> | [List] imagebuilder:ListImagePipelineImages. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListImagePipelines">ListImagePipelines</a></code> | <code>string</code> | [List] imagebuilder:ListImagePipelines. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListImageRecipes">ListImageRecipes</a></code> | <code>string</code> | [List] imagebuilder:ListImageRecipes. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListImages">ListImages</a></code> | <code>string</code> | [List] imagebuilder:ListImages. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListImageScanFindingAggregations">ListImageScanFindingAggregations</a></code> | <code>string</code> | [List] imagebuilder:ListImageScanFindingAggregations. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListImageScanFindings">ListImageScanFindings</a></code> | <code>string</code> | [List] imagebuilder:ListImageScanFindings. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListInfrastructureConfigurations">ListInfrastructureConfigurations</a></code> | <code>string</code> | [List] imagebuilder:ListInfrastructureConfigurations. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListLifecycleExecutionResources">ListLifecycleExecutionResources</a></code> | <code>string</code> | [List] imagebuilder:ListLifecycleExecutionResources. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListLifecycleExecutions">ListLifecycleExecutions</a></code> | <code>string</code> | [List] imagebuilder:ListLifecycleExecutions. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListLifecyclePolicies">ListLifecyclePolicies</a></code> | <code>string</code> | [List] imagebuilder:ListLifecyclePolicies. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] imagebuilder:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListWaitingWorkflowSteps">ListWaitingWorkflowSteps</a></code> | <code>string</code> | [List] imagebuilder:ListWaitingWorkflowSteps. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListWorkflowBuildVersions">ListWorkflowBuildVersions</a></code> | <code>string</code> | [List] imagebuilder:ListWorkflowBuildVersions. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListWorkflowExecutions">ListWorkflowExecutions</a></code> | <code>string</code> | [List] imagebuilder:ListWorkflowExecutions. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListWorkflows">ListWorkflows</a></code> | <code>string</code> | [List] imagebuilder:ListWorkflows. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListWorkflowStepExecutions">ListWorkflowStepExecutions</a></code> | <code>string</code> | [List] imagebuilder:ListWorkflowStepExecutions. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.PutComponentPolicy">PutComponentPolicy</a></code> | <code>string</code> | [PermissionManagement] imagebuilder:PutComponentPolicy. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.PutContainerRecipePolicy">PutContainerRecipePolicy</a></code> | <code>string</code> | [PermissionManagement] imagebuilder:PutContainerRecipePolicy. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.PutImagePolicy">PutImagePolicy</a></code> | <code>string</code> | [PermissionManagement] imagebuilder:PutImagePolicy. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.PutImageRecipePolicy">PutImageRecipePolicy</a></code> | <code>string</code> | [PermissionManagement] imagebuilder:PutImageRecipePolicy. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.RetryImage">RetryImage</a></code> | <code>string</code> | [Write] imagebuilder:RetryImage. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.SendWorkflowStepAction">SendWorkflowStepAction</a></code> | <code>string</code> | [Write] imagebuilder:SendWorkflowStepAction. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.StartImagePipelineExecution">StartImagePipelineExecution</a></code> | <code>string</code> | [Write] imagebuilder:StartImagePipelineExecution. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.StartResourceStateUpdate">StartResourceStateUpdate</a></code> | <code>string</code> | [Write] imagebuilder:StartResourceStateUpdate. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] imagebuilder:TagResource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] imagebuilder:UntagResource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.UpdateDistributionConfiguration">UpdateDistributionConfiguration</a></code> | <code>string</code> | [Write] imagebuilder:UpdateDistributionConfiguration. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.UpdateImagePipeline">UpdateImagePipeline</a></code> | <code>string</code> | [Write] imagebuilder:UpdateImagePipeline. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.UpdateInfrastructureConfiguration">UpdateInfrastructureConfiguration</a></code> | <code>string</code> | [Write] imagebuilder:UpdateInfrastructureConfiguration. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.UpdateLifecyclePolicy">UpdateLifecyclePolicy</a></code> | <code>string</code> | [Write] imagebuilder:UpdateLifecyclePolicy. |

---

##### `actionGetComponent`<sup>Required</sup> <a name="actionGetComponent" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetComponent"></a>

```typescript
public readonly actionGetComponent: string;
```

- *Type:* string

[Read] imagebuilder:GetComponent.

---

##### `actionGetComponentPolicy`<sup>Required</sup> <a name="actionGetComponentPolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetComponentPolicy"></a>

```typescript
public readonly actionGetComponentPolicy: string;
```

- *Type:* string

[Read] imagebuilder:GetComponentPolicy.

---

##### `actionGetContainerRecipe`<sup>Required</sup> <a name="actionGetContainerRecipe" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetContainerRecipe"></a>

```typescript
public readonly actionGetContainerRecipe: string;
```

- *Type:* string

[Read] imagebuilder:GetContainerRecipe.

---

##### `actionGetContainerRecipePolicy`<sup>Required</sup> <a name="actionGetContainerRecipePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetContainerRecipePolicy"></a>

```typescript
public readonly actionGetContainerRecipePolicy: string;
```

- *Type:* string

[Read] imagebuilder:GetContainerRecipePolicy.

---

##### `actionGetDistributionConfiguration`<sup>Required</sup> <a name="actionGetDistributionConfiguration" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetDistributionConfiguration"></a>

```typescript
public readonly actionGetDistributionConfiguration: string;
```

- *Type:* string

[Read] imagebuilder:GetDistributionConfiguration.

---

##### `actionGetImage`<sup>Required</sup> <a name="actionGetImage" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetImage"></a>

```typescript
public readonly actionGetImage: string;
```

- *Type:* string

[Read] imagebuilder:GetImage.

---

##### `actionGetImagePipeline`<sup>Required</sup> <a name="actionGetImagePipeline" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetImagePipeline"></a>

```typescript
public readonly actionGetImagePipeline: string;
```

- *Type:* string

[Read] imagebuilder:GetImagePipeline.

---

##### `actionGetImagePolicy`<sup>Required</sup> <a name="actionGetImagePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetImagePolicy"></a>

```typescript
public readonly actionGetImagePolicy: string;
```

- *Type:* string

[Read] imagebuilder:GetImagePolicy.

---

##### `actionGetImageRecipe`<sup>Required</sup> <a name="actionGetImageRecipe" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetImageRecipe"></a>

```typescript
public readonly actionGetImageRecipe: string;
```

- *Type:* string

[Read] imagebuilder:GetImageRecipe.

---

##### `actionGetImageRecipePolicy`<sup>Required</sup> <a name="actionGetImageRecipePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetImageRecipePolicy"></a>

```typescript
public readonly actionGetImageRecipePolicy: string;
```

- *Type:* string

[Read] imagebuilder:GetImageRecipePolicy.

---

##### `actionGetInfrastructureConfiguration`<sup>Required</sup> <a name="actionGetInfrastructureConfiguration" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetInfrastructureConfiguration"></a>

```typescript
public readonly actionGetInfrastructureConfiguration: string;
```

- *Type:* string

[Read] imagebuilder:GetInfrastructureConfiguration.

---

##### `actionGetLifecycleExecution`<sup>Required</sup> <a name="actionGetLifecycleExecution" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetLifecycleExecution"></a>

```typescript
public readonly actionGetLifecycleExecution: string;
```

- *Type:* string

[Read] imagebuilder:GetLifecycleExecution.

---

##### `actionGetLifecyclePolicy`<sup>Required</sup> <a name="actionGetLifecyclePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetLifecyclePolicy"></a>

```typescript
public readonly actionGetLifecyclePolicy: string;
```

- *Type:* string

[Read] imagebuilder:GetLifecyclePolicy.

---

##### `actionGetMarketplaceResource`<sup>Required</sup> <a name="actionGetMarketplaceResource" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetMarketplaceResource"></a>

```typescript
public readonly actionGetMarketplaceResource: string;
```

- *Type:* string

[Read] imagebuilder:GetMarketplaceResource.

---

##### `actionGetWorkflow`<sup>Required</sup> <a name="actionGetWorkflow" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetWorkflow"></a>

```typescript
public readonly actionGetWorkflow: string;
```

- *Type:* string

[Read] imagebuilder:GetWorkflow.

---

##### `actionGetWorkflowExecution`<sup>Required</sup> <a name="actionGetWorkflowExecution" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetWorkflowExecution"></a>

```typescript
public readonly actionGetWorkflowExecution: string;
```

- *Type:* string

[Read] imagebuilder:GetWorkflowExecution.

---

##### `actionGetWorkflowStepExecution`<sup>Required</sup> <a name="actionGetWorkflowStepExecution" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.actionGetWorkflowStepExecution"></a>

```typescript
public readonly actionGetWorkflowStepExecution: string;
```

- *Type:* string

[Read] imagebuilder:GetWorkflowStepExecution.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelImageCreation`<sup>Required</sup> <a name="CancelImageCreation" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CancelImageCreation"></a>

```typescript
public readonly CancelImageCreation: string;
```

- *Type:* string

[Write] imagebuilder:CancelImageCreation.

---

##### `CancelLifecycleExecution`<sup>Required</sup> <a name="CancelLifecycleExecution" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CancelLifecycleExecution"></a>

```typescript
public readonly CancelLifecycleExecution: string;
```

- *Type:* string

[Write] imagebuilder:CancelLifecycleExecution.

---

##### `CreateComponent`<sup>Required</sup> <a name="CreateComponent" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CreateComponent"></a>

```typescript
public readonly CreateComponent: string;
```

- *Type:* string

[Write] imagebuilder:CreateComponent.

---

##### `CreateContainerRecipe`<sup>Required</sup> <a name="CreateContainerRecipe" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CreateContainerRecipe"></a>

```typescript
public readonly CreateContainerRecipe: string;
```

- *Type:* string

[Write] imagebuilder:CreateContainerRecipe.

---

##### `CreateDistributionConfiguration`<sup>Required</sup> <a name="CreateDistributionConfiguration" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CreateDistributionConfiguration"></a>

```typescript
public readonly CreateDistributionConfiguration: string;
```

- *Type:* string

[Write] imagebuilder:CreateDistributionConfiguration.

---

##### `CreateImage`<sup>Required</sup> <a name="CreateImage" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CreateImage"></a>

```typescript
public readonly CreateImage: string;
```

- *Type:* string

[Write] imagebuilder:CreateImage.

---

##### `CreateImagePipeline`<sup>Required</sup> <a name="CreateImagePipeline" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CreateImagePipeline"></a>

```typescript
public readonly CreateImagePipeline: string;
```

- *Type:* string

[Write] imagebuilder:CreateImagePipeline.

---

##### `CreateImageRecipe`<sup>Required</sup> <a name="CreateImageRecipe" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CreateImageRecipe"></a>

```typescript
public readonly CreateImageRecipe: string;
```

- *Type:* string

[Write] imagebuilder:CreateImageRecipe.

---

##### `CreateInfrastructureConfiguration`<sup>Required</sup> <a name="CreateInfrastructureConfiguration" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CreateInfrastructureConfiguration"></a>

```typescript
public readonly CreateInfrastructureConfiguration: string;
```

- *Type:* string

[Write] imagebuilder:CreateInfrastructureConfiguration.

---

##### `CreateLifecyclePolicy`<sup>Required</sup> <a name="CreateLifecyclePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CreateLifecyclePolicy"></a>

```typescript
public readonly CreateLifecyclePolicy: string;
```

- *Type:* string

[Write] imagebuilder:CreateLifecyclePolicy.

---

##### `CreateWorkflow`<sup>Required</sup> <a name="CreateWorkflow" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.CreateWorkflow"></a>

```typescript
public readonly CreateWorkflow: string;
```

- *Type:* string

[Write] imagebuilder:CreateWorkflow.

---

##### `DeleteComponent`<sup>Required</sup> <a name="DeleteComponent" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DeleteComponent"></a>

```typescript
public readonly DeleteComponent: string;
```

- *Type:* string

[Write] imagebuilder:DeleteComponent.

---

##### `DeleteContainerRecipe`<sup>Required</sup> <a name="DeleteContainerRecipe" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DeleteContainerRecipe"></a>

```typescript
public readonly DeleteContainerRecipe: string;
```

- *Type:* string

[Write] imagebuilder:DeleteContainerRecipe.

---

##### `DeleteDistributionConfiguration`<sup>Required</sup> <a name="DeleteDistributionConfiguration" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DeleteDistributionConfiguration"></a>

```typescript
public readonly DeleteDistributionConfiguration: string;
```

- *Type:* string

[Write] imagebuilder:DeleteDistributionConfiguration.

---

##### `DeleteImage`<sup>Required</sup> <a name="DeleteImage" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DeleteImage"></a>

```typescript
public readonly DeleteImage: string;
```

- *Type:* string

[Write] imagebuilder:DeleteImage.

---

##### `DeleteImagePipeline`<sup>Required</sup> <a name="DeleteImagePipeline" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DeleteImagePipeline"></a>

```typescript
public readonly DeleteImagePipeline: string;
```

- *Type:* string

[Write] imagebuilder:DeleteImagePipeline.

---

##### `DeleteImageRecipe`<sup>Required</sup> <a name="DeleteImageRecipe" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DeleteImageRecipe"></a>

```typescript
public readonly DeleteImageRecipe: string;
```

- *Type:* string

[Write] imagebuilder:DeleteImageRecipe.

---

##### `DeleteInfrastructureConfiguration`<sup>Required</sup> <a name="DeleteInfrastructureConfiguration" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DeleteInfrastructureConfiguration"></a>

```typescript
public readonly DeleteInfrastructureConfiguration: string;
```

- *Type:* string

[Write] imagebuilder:DeleteInfrastructureConfiguration.

---

##### `DeleteLifecyclePolicy`<sup>Required</sup> <a name="DeleteLifecyclePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DeleteLifecyclePolicy"></a>

```typescript
public readonly DeleteLifecyclePolicy: string;
```

- *Type:* string

[Write] imagebuilder:DeleteLifecyclePolicy.

---

##### `DeleteWorkflow`<sup>Required</sup> <a name="DeleteWorkflow" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DeleteWorkflow"></a>

```typescript
public readonly DeleteWorkflow: string;
```

- *Type:* string

[Write] imagebuilder:DeleteWorkflow.

---

##### `DistributeImage`<sup>Required</sup> <a name="DistributeImage" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.DistributeImage"></a>

```typescript
public readonly DistributeImage: string;
```

- *Type:* string

[Write] imagebuilder:DistributeImage.

---

##### `ImportComponent`<sup>Required</sup> <a name="ImportComponent" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ImportComponent"></a>

```typescript
public readonly ImportComponent: string;
```

- *Type:* string

[Write] imagebuilder:ImportComponent.

---

##### `ImportDiskImage`<sup>Required</sup> <a name="ImportDiskImage" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ImportDiskImage"></a>

```typescript
public readonly ImportDiskImage: string;
```

- *Type:* string

[Write] imagebuilder:ImportDiskImage.

---

##### `ImportVmImage`<sup>Required</sup> <a name="ImportVmImage" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ImportVmImage"></a>

```typescript
public readonly ImportVmImage: string;
```

- *Type:* string

[Write] imagebuilder:ImportVmImage.

---

##### `ListComponentBuildVersions`<sup>Required</sup> <a name="ListComponentBuildVersions" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListComponentBuildVersions"></a>

```typescript
public readonly ListComponentBuildVersions: string;
```

- *Type:* string

[List] imagebuilder:ListComponentBuildVersions.

---

##### `ListComponents`<sup>Required</sup> <a name="ListComponents" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListComponents"></a>

```typescript
public readonly ListComponents: string;
```

- *Type:* string

[List] imagebuilder:ListComponents.

---

##### `ListContainerRecipes`<sup>Required</sup> <a name="ListContainerRecipes" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListContainerRecipes"></a>

```typescript
public readonly ListContainerRecipes: string;
```

- *Type:* string

[List] imagebuilder:ListContainerRecipes.

---

##### `ListDistributionConfigurations`<sup>Required</sup> <a name="ListDistributionConfigurations" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListDistributionConfigurations"></a>

```typescript
public readonly ListDistributionConfigurations: string;
```

- *Type:* string

[List] imagebuilder:ListDistributionConfigurations.

---

##### `ListImageBuildVersions`<sup>Required</sup> <a name="ListImageBuildVersions" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListImageBuildVersions"></a>

```typescript
public readonly ListImageBuildVersions: string;
```

- *Type:* string

[List] imagebuilder:ListImageBuildVersions.

---

##### `ListImagePackages`<sup>Required</sup> <a name="ListImagePackages" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListImagePackages"></a>

```typescript
public readonly ListImagePackages: string;
```

- *Type:* string

[List] imagebuilder:ListImagePackages.

---

##### `ListImagePipelineImages`<sup>Required</sup> <a name="ListImagePipelineImages" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListImagePipelineImages"></a>

```typescript
public readonly ListImagePipelineImages: string;
```

- *Type:* string

[List] imagebuilder:ListImagePipelineImages.

---

##### `ListImagePipelines`<sup>Required</sup> <a name="ListImagePipelines" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListImagePipelines"></a>

```typescript
public readonly ListImagePipelines: string;
```

- *Type:* string

[List] imagebuilder:ListImagePipelines.

---

##### `ListImageRecipes`<sup>Required</sup> <a name="ListImageRecipes" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListImageRecipes"></a>

```typescript
public readonly ListImageRecipes: string;
```

- *Type:* string

[List] imagebuilder:ListImageRecipes.

---

##### `ListImages`<sup>Required</sup> <a name="ListImages" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListImages"></a>

```typescript
public readonly ListImages: string;
```

- *Type:* string

[List] imagebuilder:ListImages.

---

##### `ListImageScanFindingAggregations`<sup>Required</sup> <a name="ListImageScanFindingAggregations" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListImageScanFindingAggregations"></a>

```typescript
public readonly ListImageScanFindingAggregations: string;
```

- *Type:* string

[List] imagebuilder:ListImageScanFindingAggregations.

---

##### `ListImageScanFindings`<sup>Required</sup> <a name="ListImageScanFindings" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListImageScanFindings"></a>

```typescript
public readonly ListImageScanFindings: string;
```

- *Type:* string

[List] imagebuilder:ListImageScanFindings.

---

##### `ListInfrastructureConfigurations`<sup>Required</sup> <a name="ListInfrastructureConfigurations" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListInfrastructureConfigurations"></a>

```typescript
public readonly ListInfrastructureConfigurations: string;
```

- *Type:* string

[List] imagebuilder:ListInfrastructureConfigurations.

---

##### `ListLifecycleExecutionResources`<sup>Required</sup> <a name="ListLifecycleExecutionResources" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListLifecycleExecutionResources"></a>

```typescript
public readonly ListLifecycleExecutionResources: string;
```

- *Type:* string

[List] imagebuilder:ListLifecycleExecutionResources.

---

##### `ListLifecycleExecutions`<sup>Required</sup> <a name="ListLifecycleExecutions" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListLifecycleExecutions"></a>

```typescript
public readonly ListLifecycleExecutions: string;
```

- *Type:* string

[List] imagebuilder:ListLifecycleExecutions.

---

##### `ListLifecyclePolicies`<sup>Required</sup> <a name="ListLifecyclePolicies" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListLifecyclePolicies"></a>

```typescript
public readonly ListLifecyclePolicies: string;
```

- *Type:* string

[List] imagebuilder:ListLifecyclePolicies.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] imagebuilder:ListTagsForResource.

---

##### `ListWaitingWorkflowSteps`<sup>Required</sup> <a name="ListWaitingWorkflowSteps" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListWaitingWorkflowSteps"></a>

```typescript
public readonly ListWaitingWorkflowSteps: string;
```

- *Type:* string

[List] imagebuilder:ListWaitingWorkflowSteps.

---

##### `ListWorkflowBuildVersions`<sup>Required</sup> <a name="ListWorkflowBuildVersions" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListWorkflowBuildVersions"></a>

```typescript
public readonly ListWorkflowBuildVersions: string;
```

- *Type:* string

[List] imagebuilder:ListWorkflowBuildVersions.

---

##### `ListWorkflowExecutions`<sup>Required</sup> <a name="ListWorkflowExecutions" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListWorkflowExecutions"></a>

```typescript
public readonly ListWorkflowExecutions: string;
```

- *Type:* string

[List] imagebuilder:ListWorkflowExecutions.

---

##### `ListWorkflows`<sup>Required</sup> <a name="ListWorkflows" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListWorkflows"></a>

```typescript
public readonly ListWorkflows: string;
```

- *Type:* string

[List] imagebuilder:ListWorkflows.

---

##### `ListWorkflowStepExecutions`<sup>Required</sup> <a name="ListWorkflowStepExecutions" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.ListWorkflowStepExecutions"></a>

```typescript
public readonly ListWorkflowStepExecutions: string;
```

- *Type:* string

[List] imagebuilder:ListWorkflowStepExecutions.

---

##### `PutComponentPolicy`<sup>Required</sup> <a name="PutComponentPolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.PutComponentPolicy"></a>

```typescript
public readonly PutComponentPolicy: string;
```

- *Type:* string

[PermissionManagement] imagebuilder:PutComponentPolicy.

---

##### `PutContainerRecipePolicy`<sup>Required</sup> <a name="PutContainerRecipePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.PutContainerRecipePolicy"></a>

```typescript
public readonly PutContainerRecipePolicy: string;
```

- *Type:* string

[PermissionManagement] imagebuilder:PutContainerRecipePolicy.

---

##### `PutImagePolicy`<sup>Required</sup> <a name="PutImagePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.PutImagePolicy"></a>

```typescript
public readonly PutImagePolicy: string;
```

- *Type:* string

[PermissionManagement] imagebuilder:PutImagePolicy.

---

##### `PutImageRecipePolicy`<sup>Required</sup> <a name="PutImageRecipePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.PutImageRecipePolicy"></a>

```typescript
public readonly PutImageRecipePolicy: string;
```

- *Type:* string

[PermissionManagement] imagebuilder:PutImageRecipePolicy.

---

##### `RetryImage`<sup>Required</sup> <a name="RetryImage" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.RetryImage"></a>

```typescript
public readonly RetryImage: string;
```

- *Type:* string

[Write] imagebuilder:RetryImage.

---

##### `SendWorkflowStepAction`<sup>Required</sup> <a name="SendWorkflowStepAction" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.SendWorkflowStepAction"></a>

```typescript
public readonly SendWorkflowStepAction: string;
```

- *Type:* string

[Write] imagebuilder:SendWorkflowStepAction.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartImagePipelineExecution`<sup>Required</sup> <a name="StartImagePipelineExecution" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.StartImagePipelineExecution"></a>

```typescript
public readonly StartImagePipelineExecution: string;
```

- *Type:* string

[Write] imagebuilder:StartImagePipelineExecution.

---

##### `StartResourceStateUpdate`<sup>Required</sup> <a name="StartResourceStateUpdate" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.StartResourceStateUpdate"></a>

```typescript
public readonly StartResourceStateUpdate: string;
```

- *Type:* string

[Write] imagebuilder:StartResourceStateUpdate.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] imagebuilder:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] imagebuilder:UntagResource.

---

##### `UpdateDistributionConfiguration`<sup>Required</sup> <a name="UpdateDistributionConfiguration" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.UpdateDistributionConfiguration"></a>

```typescript
public readonly UpdateDistributionConfiguration: string;
```

- *Type:* string

[Write] imagebuilder:UpdateDistributionConfiguration.

---

##### `UpdateImagePipeline`<sup>Required</sup> <a name="UpdateImagePipeline" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.UpdateImagePipeline"></a>

```typescript
public readonly UpdateImagePipeline: string;
```

- *Type:* string

[Write] imagebuilder:UpdateImagePipeline.

---

##### `UpdateInfrastructureConfiguration`<sup>Required</sup> <a name="UpdateInfrastructureConfiguration" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.UpdateInfrastructureConfiguration"></a>

```typescript
public readonly UpdateInfrastructureConfiguration: string;
```

- *Type:* string

[Write] imagebuilder:UpdateInfrastructureConfiguration.

---

##### `UpdateLifecyclePolicy`<sup>Required</sup> <a name="UpdateLifecyclePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderActions.property.UpdateLifecyclePolicy"></a>

```typescript
public readonly UpdateLifecyclePolicy: string;
```

- *Type:* string

[Write] imagebuilder:UpdateLifecyclePolicy.

---

### ImageBuilderConditions <a name="ImageBuilderConditions" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions"></a>

Condition key constants and builders for imagebuilder.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

new imagebuilder.ImageBuilderConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.createdResourceTag">createdResourceTag</a></code> | Generates a condition block for `imagebuilder:CreatedResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.createdResourceTagKeys">createdResourceTagKeys</a></code> | Generates a condition block for `imagebuilder:CreatedResourceTagKeys`. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.ec2MetadataHttpTokens">ec2MetadataHttpTokens</a></code> | Generates a condition block for `imagebuilder:Ec2MetadataHttpTokens`. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.lifecyclePolicyResourceType">lifecyclePolicyResourceType</a></code> | Generates a condition block for `imagebuilder:LifecyclePolicyResourceType`. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.statusTopicARN">statusTopicARN</a></code> | Generates a condition block for `imagebuilder:StatusTopicArn`. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `createdResourceTag` <a name="createdResourceTag" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.createdResourceTag"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderConditions.createdResourceTag(value: string)
```

Generates a condition block for `imagebuilder:CreatedResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.createdResourceTag.parameter.value"></a>

- *Type:* string

---

##### `createdResourceTagKeys` <a name="createdResourceTagKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.createdResourceTagKeys"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderConditions.createdResourceTagKeys(values: string[])
```

Generates a condition block for `imagebuilder:CreatedResourceTagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.createdResourceTagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `ec2MetadataHttpTokens` <a name="ec2MetadataHttpTokens" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.ec2MetadataHttpTokens"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderConditions.ec2MetadataHttpTokens(value: string)
```

Generates a condition block for `imagebuilder:Ec2MetadataHttpTokens`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.ec2MetadataHttpTokens.parameter.value"></a>

- *Type:* string

---

##### `lifecyclePolicyResourceType` <a name="lifecyclePolicyResourceType" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.lifecyclePolicyResourceType"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderConditions.lifecyclePolicyResourceType(value: string)
```

Generates a condition block for `imagebuilder:LifecyclePolicyResourceType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.lifecyclePolicyResourceType.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.requestTag"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.resourceTag"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `statusTopicARN` <a name="statusTopicARN" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.statusTopicARN"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderConditions.statusTopicARN(value: string)
```

Generates a condition block for `imagebuilder:StatusTopicArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.statusTopicARN.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.tagKeys"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CreateComponentConditionKeys">CreateComponentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateComponent action. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CreateContainerRecipeConditionKeys">CreateContainerRecipeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateContainerRecipe action. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CREATED_RESOURCE_TAG">CREATED_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: imagebuilder:CreatedResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CREATED_RESOURCE_TAG_KEYS">CREATED_RESOURCE_TAG_KEYS</a></code> | <code>string</code> | Condition key: imagebuilder:CreatedResourceTagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CreateDistributionConfigurationConditionKeys">CreateDistributionConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDistributionConfiguration action. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CreateImageConditionKeys">CreateImageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateImage action. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CreateImagePipelineConditionKeys">CreateImagePipelineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateImagePipeline action. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CreateImageRecipeConditionKeys">CreateImageRecipeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateImageRecipe action. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CreateInfrastructureConfigurationConditionKeys">CreateInfrastructureConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInfrastructureConfiguration action. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CreateLifecyclePolicyConditionKeys">CreateLifecyclePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLifecyclePolicy action. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CreateWorkflowConditionKeys">CreateWorkflowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkflow action. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.DistributeImageConditionKeys">DistributeImageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DistributeImage action. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.EC2_METADATA_HTTP_TOKENS">EC2_METADATA_HTTP_TOKENS</a></code> | <code>string</code> | Condition key: imagebuilder:Ec2MetadataHttpTokens (String). |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.ImportComponentConditionKeys">ImportComponentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportComponent action. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.ImportDiskImageConditionKeys">ImportDiskImageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportDiskImage action. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.ImportVmImageConditionKeys">ImportVmImageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportVmImage action. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.LIFECYCLE_POLICY_RESOURCE_TYPE">LIFECYCLE_POLICY_RESOURCE_TYPE</a></code> | <code>string</code> | Condition key: imagebuilder:LifecyclePolicyResourceType (String). |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.StartImagePipelineExecutionConditionKeys">StartImagePipelineExecutionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartImagePipelineExecution action. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.STATUS_TOPIC_ARN">STATUS_TOPIC_ARN</a></code> | <code>string</code> | Condition key: imagebuilder:StatusTopicArn (ARN). |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.UpdateInfrastructureConfigurationConditionKeys">UpdateInfrastructureConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateInfrastructureConfiguration action. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.UpdateLifecyclePolicyConditionKeys">UpdateLifecyclePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateLifecyclePolicy action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateComponentConditionKeys`<sup>Required</sup> <a name="CreateComponentConditionKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CreateComponentConditionKeys"></a>

```typescript
public readonly CreateComponentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateComponent action.

---

##### `CreateContainerRecipeConditionKeys`<sup>Required</sup> <a name="CreateContainerRecipeConditionKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CreateContainerRecipeConditionKeys"></a>

```typescript
public readonly CreateContainerRecipeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateContainerRecipe action.

---

##### `CREATED_RESOURCE_TAG`<sup>Required</sup> <a name="CREATED_RESOURCE_TAG" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CREATED_RESOURCE_TAG"></a>

```typescript
public readonly CREATED_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: imagebuilder:CreatedResourceTag/${TagKey} (String).

---

##### `CREATED_RESOURCE_TAG_KEYS`<sup>Required</sup> <a name="CREATED_RESOURCE_TAG_KEYS" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CREATED_RESOURCE_TAG_KEYS"></a>

```typescript
public readonly CREATED_RESOURCE_TAG_KEYS: string;
```

- *Type:* string

Condition key: imagebuilder:CreatedResourceTagKeys (ArrayOfString).

---

##### `CreateDistributionConfigurationConditionKeys`<sup>Required</sup> <a name="CreateDistributionConfigurationConditionKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CreateDistributionConfigurationConditionKeys"></a>

```typescript
public readonly CreateDistributionConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDistributionConfiguration action.

---

##### `CreateImageConditionKeys`<sup>Required</sup> <a name="CreateImageConditionKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CreateImageConditionKeys"></a>

```typescript
public readonly CreateImageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateImage action.

---

##### `CreateImagePipelineConditionKeys`<sup>Required</sup> <a name="CreateImagePipelineConditionKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CreateImagePipelineConditionKeys"></a>

```typescript
public readonly CreateImagePipelineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateImagePipeline action.

---

##### `CreateImageRecipeConditionKeys`<sup>Required</sup> <a name="CreateImageRecipeConditionKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CreateImageRecipeConditionKeys"></a>

```typescript
public readonly CreateImageRecipeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateImageRecipe action.

---

##### `CreateInfrastructureConfigurationConditionKeys`<sup>Required</sup> <a name="CreateInfrastructureConfigurationConditionKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CreateInfrastructureConfigurationConditionKeys"></a>

```typescript
public readonly CreateInfrastructureConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInfrastructureConfiguration action.

---

##### `CreateLifecyclePolicyConditionKeys`<sup>Required</sup> <a name="CreateLifecyclePolicyConditionKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CreateLifecyclePolicyConditionKeys"></a>

```typescript
public readonly CreateLifecyclePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLifecyclePolicy action.

---

##### `CreateWorkflowConditionKeys`<sup>Required</sup> <a name="CreateWorkflowConditionKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.CreateWorkflowConditionKeys"></a>

```typescript
public readonly CreateWorkflowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkflow action.

---

##### `DistributeImageConditionKeys`<sup>Required</sup> <a name="DistributeImageConditionKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.DistributeImageConditionKeys"></a>

```typescript
public readonly DistributeImageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DistributeImage action.

---

##### `EC2_METADATA_HTTP_TOKENS`<sup>Required</sup> <a name="EC2_METADATA_HTTP_TOKENS" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.EC2_METADATA_HTTP_TOKENS"></a>

```typescript
public readonly EC2_METADATA_HTTP_TOKENS: string;
```

- *Type:* string

Condition key: imagebuilder:Ec2MetadataHttpTokens (String).

---

##### `ImportComponentConditionKeys`<sup>Required</sup> <a name="ImportComponentConditionKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.ImportComponentConditionKeys"></a>

```typescript
public readonly ImportComponentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportComponent action.

---

##### `ImportDiskImageConditionKeys`<sup>Required</sup> <a name="ImportDiskImageConditionKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.ImportDiskImageConditionKeys"></a>

```typescript
public readonly ImportDiskImageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportDiskImage action.

---

##### `ImportVmImageConditionKeys`<sup>Required</sup> <a name="ImportVmImageConditionKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.ImportVmImageConditionKeys"></a>

```typescript
public readonly ImportVmImageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportVmImage action.

---

##### `LIFECYCLE_POLICY_RESOURCE_TYPE`<sup>Required</sup> <a name="LIFECYCLE_POLICY_RESOURCE_TYPE" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.LIFECYCLE_POLICY_RESOURCE_TYPE"></a>

```typescript
public readonly LIFECYCLE_POLICY_RESOURCE_TYPE: string;
```

- *Type:* string

Condition key: imagebuilder:LifecyclePolicyResourceType (String).

---

##### `StartImagePipelineExecutionConditionKeys`<sup>Required</sup> <a name="StartImagePipelineExecutionConditionKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.StartImagePipelineExecutionConditionKeys"></a>

```typescript
public readonly StartImagePipelineExecutionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartImagePipelineExecution action.

---

##### `STATUS_TOPIC_ARN`<sup>Required</sup> <a name="STATUS_TOPIC_ARN" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.STATUS_TOPIC_ARN"></a>

```typescript
public readonly STATUS_TOPIC_ARN: string;
```

- *Type:* string

Condition key: imagebuilder:StatusTopicArn (ARN).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateInfrastructureConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateInfrastructureConfigurationConditionKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.UpdateInfrastructureConfigurationConditionKeys"></a>

```typescript
public readonly UpdateInfrastructureConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateInfrastructureConfiguration action.

---

##### `UpdateLifecyclePolicyConditionKeys`<sup>Required</sup> <a name="UpdateLifecyclePolicyConditionKeys" id="@cdk_utils/iam.imagebuilder.ImageBuilderConditions.property.UpdateLifecyclePolicyConditionKeys"></a>

```typescript
public readonly UpdateLifecyclePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateLifecyclePolicy action.

---

### ImageBuilderOperations <a name="ImageBuilderOperations" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations"></a>

API operation to required IAM actions mapping for imagebuilder.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

new imagebuilder.ImageBuilderOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CancelImageCreation">CancelImageCreation</a></code> | <code>string[]</code> | IAM actions required for the CancelImageCreation API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CancelLifecycleExecution">CancelLifecycleExecution</a></code> | <code>string[]</code> | IAM actions required for the CancelLifecycleExecution API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CreateComponent">CreateComponent</a></code> | <code>string[]</code> | IAM actions required for the CreateComponent API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CreateContainerRecipe">CreateContainerRecipe</a></code> | <code>string[]</code> | IAM actions required for the CreateContainerRecipe API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CreateDistributionConfiguration">CreateDistributionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateDistributionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CreateImage">CreateImage</a></code> | <code>string[]</code> | IAM actions required for the CreateImage API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CreateImagePipeline">CreateImagePipeline</a></code> | <code>string[]</code> | IAM actions required for the CreateImagePipeline API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CreateImageRecipe">CreateImageRecipe</a></code> | <code>string[]</code> | IAM actions required for the CreateImageRecipe API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CreateInfrastructureConfiguration">CreateInfrastructureConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateInfrastructureConfiguration API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CreateLifecyclePolicy">CreateLifecyclePolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateLifecyclePolicy API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CreateWorkflow">CreateWorkflow</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkflow API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DeleteComponent">DeleteComponent</a></code> | <code>string[]</code> | IAM actions required for the DeleteComponent API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DeleteContainerRecipe">DeleteContainerRecipe</a></code> | <code>string[]</code> | IAM actions required for the DeleteContainerRecipe API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DeleteDistributionConfiguration">DeleteDistributionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteDistributionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DeleteImage">DeleteImage</a></code> | <code>string[]</code> | IAM actions required for the DeleteImage API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DeleteImagePipeline">DeleteImagePipeline</a></code> | <code>string[]</code> | IAM actions required for the DeleteImagePipeline API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DeleteImageRecipe">DeleteImageRecipe</a></code> | <code>string[]</code> | IAM actions required for the DeleteImageRecipe API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DeleteInfrastructureConfiguration">DeleteInfrastructureConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteInfrastructureConfiguration API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DeleteLifecyclePolicy">DeleteLifecyclePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteLifecyclePolicy API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DeleteWorkflow">DeleteWorkflow</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkflow API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DistributeImage">DistributeImage</a></code> | <code>string[]</code> | IAM actions required for the DistributeImage API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ImportComponent">ImportComponent</a></code> | <code>string[]</code> | IAM actions required for the ImportComponent API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ImportDiskImage">ImportDiskImage</a></code> | <code>string[]</code> | IAM actions required for the ImportDiskImage API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ImportVmImage">ImportVmImage</a></code> | <code>string[]</code> | IAM actions required for the ImportVmImage API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListComponentBuildVersions">ListComponentBuildVersions</a></code> | <code>string[]</code> | IAM actions required for the ListComponentBuildVersions API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListComponents">ListComponents</a></code> | <code>string[]</code> | IAM actions required for the ListComponents API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListContainerRecipes">ListContainerRecipes</a></code> | <code>string[]</code> | IAM actions required for the ListContainerRecipes API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListDistributionConfigurations">ListDistributionConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListDistributionConfigurations API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListImageBuildVersions">ListImageBuildVersions</a></code> | <code>string[]</code> | IAM actions required for the ListImageBuildVersions API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListImagePackages">ListImagePackages</a></code> | <code>string[]</code> | IAM actions required for the ListImagePackages API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListImagePipelineImages">ListImagePipelineImages</a></code> | <code>string[]</code> | IAM actions required for the ListImagePipelineImages API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListImagePipelines">ListImagePipelines</a></code> | <code>string[]</code> | IAM actions required for the ListImagePipelines API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListImageRecipes">ListImageRecipes</a></code> | <code>string[]</code> | IAM actions required for the ListImageRecipes API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListImages">ListImages</a></code> | <code>string[]</code> | IAM actions required for the ListImages API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListImageScanFindingAggregations">ListImageScanFindingAggregations</a></code> | <code>string[]</code> | IAM actions required for the ListImageScanFindingAggregations API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListImageScanFindings">ListImageScanFindings</a></code> | <code>string[]</code> | IAM actions required for the ListImageScanFindings API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListInfrastructureConfigurations">ListInfrastructureConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListInfrastructureConfigurations API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListLifecycleExecutionResources">ListLifecycleExecutionResources</a></code> | <code>string[]</code> | IAM actions required for the ListLifecycleExecutionResources API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListLifecycleExecutions">ListLifecycleExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListLifecycleExecutions API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListLifecyclePolicies">ListLifecyclePolicies</a></code> | <code>string[]</code> | IAM actions required for the ListLifecyclePolicies API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListWaitingWorkflowSteps">ListWaitingWorkflowSteps</a></code> | <code>string[]</code> | IAM actions required for the ListWaitingWorkflowSteps API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListWorkflowBuildVersions">ListWorkflowBuildVersions</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflowBuildVersions API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListWorkflowExecutions">ListWorkflowExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflowExecutions API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListWorkflows">ListWorkflows</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflows API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListWorkflowStepExecutions">ListWorkflowStepExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflowStepExecutions API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetComponent">opGetComponent</a></code> | <code>string[]</code> | IAM actions required for the GetComponent API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetComponentPolicy">opGetComponentPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetComponentPolicy API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetContainerRecipe">opGetContainerRecipe</a></code> | <code>string[]</code> | IAM actions required for the GetContainerRecipe API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetContainerRecipePolicy">opGetContainerRecipePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetContainerRecipePolicy API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetDistributionConfiguration">opGetDistributionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetDistributionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetImage">opGetImage</a></code> | <code>string[]</code> | IAM actions required for the GetImage API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetImagePipeline">opGetImagePipeline</a></code> | <code>string[]</code> | IAM actions required for the GetImagePipeline API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetImagePolicy">opGetImagePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetImagePolicy API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetImageRecipe">opGetImageRecipe</a></code> | <code>string[]</code> | IAM actions required for the GetImageRecipe API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetImageRecipePolicy">opGetImageRecipePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetImageRecipePolicy API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetInfrastructureConfiguration">opGetInfrastructureConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetInfrastructureConfiguration API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetLifecycleExecution">opGetLifecycleExecution</a></code> | <code>string[]</code> | IAM actions required for the GetLifecycleExecution API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetLifecyclePolicy">opGetLifecyclePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetLifecyclePolicy API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetMarketplaceResource">opGetMarketplaceResource</a></code> | <code>string[]</code> | IAM actions required for the GetMarketplaceResource API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetWorkflow">opGetWorkflow</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflow API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetWorkflowExecution">opGetWorkflowExecution</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflowExecution API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetWorkflowStepExecution">opGetWorkflowStepExecution</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflowStepExecution API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.PutComponentPolicy">PutComponentPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutComponentPolicy API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.PutContainerRecipePolicy">PutContainerRecipePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutContainerRecipePolicy API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.PutImagePolicy">PutImagePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutImagePolicy API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.PutImageRecipePolicy">PutImageRecipePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutImageRecipePolicy API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.RetryImage">RetryImage</a></code> | <code>string[]</code> | IAM actions required for the RetryImage API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.SendWorkflowStepAction">SendWorkflowStepAction</a></code> | <code>string[]</code> | IAM actions required for the SendWorkflowStepAction API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.StartImagePipelineExecution">StartImagePipelineExecution</a></code> | <code>string[]</code> | IAM actions required for the StartImagePipelineExecution API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.StartResourceStateUpdate">StartResourceStateUpdate</a></code> | <code>string[]</code> | IAM actions required for the StartResourceStateUpdate API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.UpdateDistributionConfiguration">UpdateDistributionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateDistributionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.UpdateImagePipeline">UpdateImagePipeline</a></code> | <code>string[]</code> | IAM actions required for the UpdateImagePipeline API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.UpdateInfrastructureConfiguration">UpdateInfrastructureConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateInfrastructureConfiguration API call. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.UpdateLifecyclePolicy">UpdateLifecyclePolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateLifecyclePolicy API call. |

---

##### `CancelImageCreation`<sup>Required</sup> <a name="CancelImageCreation" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CancelImageCreation"></a>

```typescript
public readonly CancelImageCreation: string[];
```

- *Type:* string[]

IAM actions required for the CancelImageCreation API call.

---

##### `CancelLifecycleExecution`<sup>Required</sup> <a name="CancelLifecycleExecution" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CancelLifecycleExecution"></a>

```typescript
public readonly CancelLifecycleExecution: string[];
```

- *Type:* string[]

IAM actions required for the CancelLifecycleExecution API call.

---

##### `CreateComponent`<sup>Required</sup> <a name="CreateComponent" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CreateComponent"></a>

```typescript
public readonly CreateComponent: string[];
```

- *Type:* string[]

IAM actions required for the CreateComponent API call.

---

##### `CreateContainerRecipe`<sup>Required</sup> <a name="CreateContainerRecipe" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CreateContainerRecipe"></a>

```typescript
public readonly CreateContainerRecipe: string[];
```

- *Type:* string[]

IAM actions required for the CreateContainerRecipe API call.

---

##### `CreateDistributionConfiguration`<sup>Required</sup> <a name="CreateDistributionConfiguration" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CreateDistributionConfiguration"></a>

```typescript
public readonly CreateDistributionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateDistributionConfiguration API call.

---

##### `CreateImage`<sup>Required</sup> <a name="CreateImage" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CreateImage"></a>

```typescript
public readonly CreateImage: string[];
```

- *Type:* string[]

IAM actions required for the CreateImage API call.

---

##### `CreateImagePipeline`<sup>Required</sup> <a name="CreateImagePipeline" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CreateImagePipeline"></a>

```typescript
public readonly CreateImagePipeline: string[];
```

- *Type:* string[]

IAM actions required for the CreateImagePipeline API call.

---

##### `CreateImageRecipe`<sup>Required</sup> <a name="CreateImageRecipe" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CreateImageRecipe"></a>

```typescript
public readonly CreateImageRecipe: string[];
```

- *Type:* string[]

IAM actions required for the CreateImageRecipe API call.

---

##### `CreateInfrastructureConfiguration`<sup>Required</sup> <a name="CreateInfrastructureConfiguration" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CreateInfrastructureConfiguration"></a>

```typescript
public readonly CreateInfrastructureConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateInfrastructureConfiguration API call.

---

##### `CreateLifecyclePolicy`<sup>Required</sup> <a name="CreateLifecyclePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CreateLifecyclePolicy"></a>

```typescript
public readonly CreateLifecyclePolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateLifecyclePolicy API call.

---

##### `CreateWorkflow`<sup>Required</sup> <a name="CreateWorkflow" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.CreateWorkflow"></a>

```typescript
public readonly CreateWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkflow API call.

---

##### `DeleteComponent`<sup>Required</sup> <a name="DeleteComponent" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DeleteComponent"></a>

```typescript
public readonly DeleteComponent: string[];
```

- *Type:* string[]

IAM actions required for the DeleteComponent API call.

---

##### `DeleteContainerRecipe`<sup>Required</sup> <a name="DeleteContainerRecipe" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DeleteContainerRecipe"></a>

```typescript
public readonly DeleteContainerRecipe: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContainerRecipe API call.

---

##### `DeleteDistributionConfiguration`<sup>Required</sup> <a name="DeleteDistributionConfiguration" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DeleteDistributionConfiguration"></a>

```typescript
public readonly DeleteDistributionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDistributionConfiguration API call.

---

##### `DeleteImage`<sup>Required</sup> <a name="DeleteImage" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DeleteImage"></a>

```typescript
public readonly DeleteImage: string[];
```

- *Type:* string[]

IAM actions required for the DeleteImage API call.

---

##### `DeleteImagePipeline`<sup>Required</sup> <a name="DeleteImagePipeline" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DeleteImagePipeline"></a>

```typescript
public readonly DeleteImagePipeline: string[];
```

- *Type:* string[]

IAM actions required for the DeleteImagePipeline API call.

---

##### `DeleteImageRecipe`<sup>Required</sup> <a name="DeleteImageRecipe" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DeleteImageRecipe"></a>

```typescript
public readonly DeleteImageRecipe: string[];
```

- *Type:* string[]

IAM actions required for the DeleteImageRecipe API call.

---

##### `DeleteInfrastructureConfiguration`<sup>Required</sup> <a name="DeleteInfrastructureConfiguration" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DeleteInfrastructureConfiguration"></a>

```typescript
public readonly DeleteInfrastructureConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInfrastructureConfiguration API call.

---

##### `DeleteLifecyclePolicy`<sup>Required</sup> <a name="DeleteLifecyclePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DeleteLifecyclePolicy"></a>

```typescript
public readonly DeleteLifecyclePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLifecyclePolicy API call.

---

##### `DeleteWorkflow`<sup>Required</sup> <a name="DeleteWorkflow" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DeleteWorkflow"></a>

```typescript
public readonly DeleteWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkflow API call.

---

##### `DistributeImage`<sup>Required</sup> <a name="DistributeImage" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.DistributeImage"></a>

```typescript
public readonly DistributeImage: string[];
```

- *Type:* string[]

IAM actions required for the DistributeImage API call.

---

##### `ImportComponent`<sup>Required</sup> <a name="ImportComponent" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ImportComponent"></a>

```typescript
public readonly ImportComponent: string[];
```

- *Type:* string[]

IAM actions required for the ImportComponent API call.

---

##### `ImportDiskImage`<sup>Required</sup> <a name="ImportDiskImage" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ImportDiskImage"></a>

```typescript
public readonly ImportDiskImage: string[];
```

- *Type:* string[]

IAM actions required for the ImportDiskImage API call.

---

##### `ImportVmImage`<sup>Required</sup> <a name="ImportVmImage" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ImportVmImage"></a>

```typescript
public readonly ImportVmImage: string[];
```

- *Type:* string[]

IAM actions required for the ImportVmImage API call.

---

##### `ListComponentBuildVersions`<sup>Required</sup> <a name="ListComponentBuildVersions" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListComponentBuildVersions"></a>

```typescript
public readonly ListComponentBuildVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListComponentBuildVersions API call.

---

##### `ListComponents`<sup>Required</sup> <a name="ListComponents" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListComponents"></a>

```typescript
public readonly ListComponents: string[];
```

- *Type:* string[]

IAM actions required for the ListComponents API call.

---

##### `ListContainerRecipes`<sup>Required</sup> <a name="ListContainerRecipes" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListContainerRecipes"></a>

```typescript
public readonly ListContainerRecipes: string[];
```

- *Type:* string[]

IAM actions required for the ListContainerRecipes API call.

---

##### `ListDistributionConfigurations`<sup>Required</sup> <a name="ListDistributionConfigurations" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListDistributionConfigurations"></a>

```typescript
public readonly ListDistributionConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListDistributionConfigurations API call.

---

##### `ListImageBuildVersions`<sup>Required</sup> <a name="ListImageBuildVersions" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListImageBuildVersions"></a>

```typescript
public readonly ListImageBuildVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListImageBuildVersions API call.

---

##### `ListImagePackages`<sup>Required</sup> <a name="ListImagePackages" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListImagePackages"></a>

```typescript
public readonly ListImagePackages: string[];
```

- *Type:* string[]

IAM actions required for the ListImagePackages API call.

---

##### `ListImagePipelineImages`<sup>Required</sup> <a name="ListImagePipelineImages" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListImagePipelineImages"></a>

```typescript
public readonly ListImagePipelineImages: string[];
```

- *Type:* string[]

IAM actions required for the ListImagePipelineImages API call.

---

##### `ListImagePipelines`<sup>Required</sup> <a name="ListImagePipelines" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListImagePipelines"></a>

```typescript
public readonly ListImagePipelines: string[];
```

- *Type:* string[]

IAM actions required for the ListImagePipelines API call.

---

##### `ListImageRecipes`<sup>Required</sup> <a name="ListImageRecipes" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListImageRecipes"></a>

```typescript
public readonly ListImageRecipes: string[];
```

- *Type:* string[]

IAM actions required for the ListImageRecipes API call.

---

##### `ListImages`<sup>Required</sup> <a name="ListImages" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListImages"></a>

```typescript
public readonly ListImages: string[];
```

- *Type:* string[]

IAM actions required for the ListImages API call.

---

##### `ListImageScanFindingAggregations`<sup>Required</sup> <a name="ListImageScanFindingAggregations" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListImageScanFindingAggregations"></a>

```typescript
public readonly ListImageScanFindingAggregations: string[];
```

- *Type:* string[]

IAM actions required for the ListImageScanFindingAggregations API call.

---

##### `ListImageScanFindings`<sup>Required</sup> <a name="ListImageScanFindings" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListImageScanFindings"></a>

```typescript
public readonly ListImageScanFindings: string[];
```

- *Type:* string[]

IAM actions required for the ListImageScanFindings API call.

---

##### `ListInfrastructureConfigurations`<sup>Required</sup> <a name="ListInfrastructureConfigurations" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListInfrastructureConfigurations"></a>

```typescript
public readonly ListInfrastructureConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListInfrastructureConfigurations API call.

---

##### `ListLifecycleExecutionResources`<sup>Required</sup> <a name="ListLifecycleExecutionResources" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListLifecycleExecutionResources"></a>

```typescript
public readonly ListLifecycleExecutionResources: string[];
```

- *Type:* string[]

IAM actions required for the ListLifecycleExecutionResources API call.

---

##### `ListLifecycleExecutions`<sup>Required</sup> <a name="ListLifecycleExecutions" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListLifecycleExecutions"></a>

```typescript
public readonly ListLifecycleExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListLifecycleExecutions API call.

---

##### `ListLifecyclePolicies`<sup>Required</sup> <a name="ListLifecyclePolicies" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListLifecyclePolicies"></a>

```typescript
public readonly ListLifecyclePolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListLifecyclePolicies API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWaitingWorkflowSteps`<sup>Required</sup> <a name="ListWaitingWorkflowSteps" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListWaitingWorkflowSteps"></a>

```typescript
public readonly ListWaitingWorkflowSteps: string[];
```

- *Type:* string[]

IAM actions required for the ListWaitingWorkflowSteps API call.

---

##### `ListWorkflowBuildVersions`<sup>Required</sup> <a name="ListWorkflowBuildVersions" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListWorkflowBuildVersions"></a>

```typescript
public readonly ListWorkflowBuildVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflowBuildVersions API call.

---

##### `ListWorkflowExecutions`<sup>Required</sup> <a name="ListWorkflowExecutions" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListWorkflowExecutions"></a>

```typescript
public readonly ListWorkflowExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflowExecutions API call.

---

##### `ListWorkflows`<sup>Required</sup> <a name="ListWorkflows" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListWorkflows"></a>

```typescript
public readonly ListWorkflows: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflows API call.

---

##### `ListWorkflowStepExecutions`<sup>Required</sup> <a name="ListWorkflowStepExecutions" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.ListWorkflowStepExecutions"></a>

```typescript
public readonly ListWorkflowStepExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflowStepExecutions API call.

---

##### `opGetComponent`<sup>Required</sup> <a name="opGetComponent" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetComponent"></a>

```typescript
public readonly opGetComponent: string[];
```

- *Type:* string[]

IAM actions required for the GetComponent API call.

---

##### `opGetComponentPolicy`<sup>Required</sup> <a name="opGetComponentPolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetComponentPolicy"></a>

```typescript
public readonly opGetComponentPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetComponentPolicy API call.

---

##### `opGetContainerRecipe`<sup>Required</sup> <a name="opGetContainerRecipe" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetContainerRecipe"></a>

```typescript
public readonly opGetContainerRecipe: string[];
```

- *Type:* string[]

IAM actions required for the GetContainerRecipe API call.

---

##### `opGetContainerRecipePolicy`<sup>Required</sup> <a name="opGetContainerRecipePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetContainerRecipePolicy"></a>

```typescript
public readonly opGetContainerRecipePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetContainerRecipePolicy API call.

---

##### `opGetDistributionConfiguration`<sup>Required</sup> <a name="opGetDistributionConfiguration" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetDistributionConfiguration"></a>

```typescript
public readonly opGetDistributionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetDistributionConfiguration API call.

---

##### `opGetImage`<sup>Required</sup> <a name="opGetImage" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetImage"></a>

```typescript
public readonly opGetImage: string[];
```

- *Type:* string[]

IAM actions required for the GetImage API call.

---

##### `opGetImagePipeline`<sup>Required</sup> <a name="opGetImagePipeline" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetImagePipeline"></a>

```typescript
public readonly opGetImagePipeline: string[];
```

- *Type:* string[]

IAM actions required for the GetImagePipeline API call.

---

##### `opGetImagePolicy`<sup>Required</sup> <a name="opGetImagePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetImagePolicy"></a>

```typescript
public readonly opGetImagePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetImagePolicy API call.

---

##### `opGetImageRecipe`<sup>Required</sup> <a name="opGetImageRecipe" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetImageRecipe"></a>

```typescript
public readonly opGetImageRecipe: string[];
```

- *Type:* string[]

IAM actions required for the GetImageRecipe API call.

---

##### `opGetImageRecipePolicy`<sup>Required</sup> <a name="opGetImageRecipePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetImageRecipePolicy"></a>

```typescript
public readonly opGetImageRecipePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetImageRecipePolicy API call.

---

##### `opGetInfrastructureConfiguration`<sup>Required</sup> <a name="opGetInfrastructureConfiguration" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetInfrastructureConfiguration"></a>

```typescript
public readonly opGetInfrastructureConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetInfrastructureConfiguration API call.

---

##### `opGetLifecycleExecution`<sup>Required</sup> <a name="opGetLifecycleExecution" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetLifecycleExecution"></a>

```typescript
public readonly opGetLifecycleExecution: string[];
```

- *Type:* string[]

IAM actions required for the GetLifecycleExecution API call.

---

##### `opGetLifecyclePolicy`<sup>Required</sup> <a name="opGetLifecyclePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetLifecyclePolicy"></a>

```typescript
public readonly opGetLifecyclePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetLifecyclePolicy API call.

---

##### `opGetMarketplaceResource`<sup>Required</sup> <a name="opGetMarketplaceResource" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetMarketplaceResource"></a>

```typescript
public readonly opGetMarketplaceResource: string[];
```

- *Type:* string[]

IAM actions required for the GetMarketplaceResource API call.

---

##### `opGetWorkflow`<sup>Required</sup> <a name="opGetWorkflow" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetWorkflow"></a>

```typescript
public readonly opGetWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflow API call.

---

##### `opGetWorkflowExecution`<sup>Required</sup> <a name="opGetWorkflowExecution" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetWorkflowExecution"></a>

```typescript
public readonly opGetWorkflowExecution: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflowExecution API call.

---

##### `opGetWorkflowStepExecution`<sup>Required</sup> <a name="opGetWorkflowStepExecution" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.opGetWorkflowStepExecution"></a>

```typescript
public readonly opGetWorkflowStepExecution: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflowStepExecution API call.

---

##### `PutComponentPolicy`<sup>Required</sup> <a name="PutComponentPolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.PutComponentPolicy"></a>

```typescript
public readonly PutComponentPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutComponentPolicy API call.

---

##### `PutContainerRecipePolicy`<sup>Required</sup> <a name="PutContainerRecipePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.PutContainerRecipePolicy"></a>

```typescript
public readonly PutContainerRecipePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutContainerRecipePolicy API call.

---

##### `PutImagePolicy`<sup>Required</sup> <a name="PutImagePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.PutImagePolicy"></a>

```typescript
public readonly PutImagePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutImagePolicy API call.

---

##### `PutImageRecipePolicy`<sup>Required</sup> <a name="PutImageRecipePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.PutImageRecipePolicy"></a>

```typescript
public readonly PutImageRecipePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutImageRecipePolicy API call.

---

##### `RetryImage`<sup>Required</sup> <a name="RetryImage" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.RetryImage"></a>

```typescript
public readonly RetryImage: string[];
```

- *Type:* string[]

IAM actions required for the RetryImage API call.

---

##### `SendWorkflowStepAction`<sup>Required</sup> <a name="SendWorkflowStepAction" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.SendWorkflowStepAction"></a>

```typescript
public readonly SendWorkflowStepAction: string[];
```

- *Type:* string[]

IAM actions required for the SendWorkflowStepAction API call.

---

##### `StartImagePipelineExecution`<sup>Required</sup> <a name="StartImagePipelineExecution" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.StartImagePipelineExecution"></a>

```typescript
public readonly StartImagePipelineExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartImagePipelineExecution API call.

---

##### `StartResourceStateUpdate`<sup>Required</sup> <a name="StartResourceStateUpdate" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.StartResourceStateUpdate"></a>

```typescript
public readonly StartResourceStateUpdate: string[];
```

- *Type:* string[]

IAM actions required for the StartResourceStateUpdate API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDistributionConfiguration`<sup>Required</sup> <a name="UpdateDistributionConfiguration" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.UpdateDistributionConfiguration"></a>

```typescript
public readonly UpdateDistributionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDistributionConfiguration API call.

---

##### `UpdateImagePipeline`<sup>Required</sup> <a name="UpdateImagePipeline" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.UpdateImagePipeline"></a>

```typescript
public readonly UpdateImagePipeline: string[];
```

- *Type:* string[]

IAM actions required for the UpdateImagePipeline API call.

---

##### `UpdateInfrastructureConfiguration`<sup>Required</sup> <a name="UpdateInfrastructureConfiguration" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.UpdateInfrastructureConfiguration"></a>

```typescript
public readonly UpdateInfrastructureConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateInfrastructureConfiguration API call.

---

##### `UpdateLifecyclePolicy`<sup>Required</sup> <a name="UpdateLifecyclePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderOperations.property.UpdateLifecyclePolicy"></a>

```typescript
public readonly UpdateLifecyclePolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLifecyclePolicy API call.

---

### ImageBuilderResources <a name="ImageBuilderResources" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources"></a>

ARN builders, validators, and parsers for imagebuilder resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.Initializer"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

new imagebuilder.ImageBuilderResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.allComponentBuildVersions">allComponentBuildVersions</a></code> | Builds an ARN for the allComponentBuildVersions resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.allImageBuildVersions">allImageBuildVersions</a></code> | Builds an ARN for the allImageBuildVersions resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.allWorkflowBuildVersions">allWorkflowBuildVersions</a></code> | Builds an ARN for the allWorkflowBuildVersions resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.component">component</a></code> | Builds an ARN for the component resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.containerRecipe">containerRecipe</a></code> | Builds an ARN for the containerRecipe resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.distributionConfiguration">distributionConfiguration</a></code> | Builds an ARN for the distributionConfiguration resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.image">image</a></code> | Builds an ARN for the image resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.imagePipeline">imagePipeline</a></code> | Builds an ARN for the imagePipeline resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.imageRecipe">imageRecipe</a></code> | Builds an ARN for the imageRecipe resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.imageVersion">imageVersion</a></code> | Builds an ARN for the imageVersion resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.infrastructureConfiguration">infrastructureConfiguration</a></code> | Builds an ARN for the infrastructureConfiguration resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidAllComponentBuildVersionsArn">isValidAllComponentBuildVersionsArn</a></code> | Validates whether a string is a valid ARN for the allComponentBuildVersions resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidAllImageBuildVersionsArn">isValidAllImageBuildVersionsArn</a></code> | Validates whether a string is a valid ARN for the allImageBuildVersions resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidAllWorkflowBuildVersionsArn">isValidAllWorkflowBuildVersionsArn</a></code> | Validates whether a string is a valid ARN for the allWorkflowBuildVersions resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidComponentArn">isValidComponentArn</a></code> | Validates whether a string is a valid ARN for the component resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidContainerRecipeArn">isValidContainerRecipeArn</a></code> | Validates whether a string is a valid ARN for the containerRecipe resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidDistributionConfigurationArn">isValidDistributionConfigurationArn</a></code> | Validates whether a string is a valid ARN for the distributionConfiguration resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidImageArn">isValidImageArn</a></code> | Validates whether a string is a valid ARN for the image resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidImagePipelineArn">isValidImagePipelineArn</a></code> | Validates whether a string is a valid ARN for the imagePipeline resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidImageRecipeArn">isValidImageRecipeArn</a></code> | Validates whether a string is a valid ARN for the imageRecipe resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidImageVersionArn">isValidImageVersionArn</a></code> | Validates whether a string is a valid ARN for the imageVersion resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidInfrastructureConfigurationArn">isValidInfrastructureConfigurationArn</a></code> | Validates whether a string is a valid ARN for the infrastructureConfiguration resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidLifecycleExecutionArn">isValidLifecycleExecutionArn</a></code> | Validates whether a string is a valid ARN for the lifecycleExecution resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidLifecyclePolicyArn">isValidLifecyclePolicyArn</a></code> | Validates whether a string is a valid ARN for the lifecyclePolicy resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidWorkflowArn">isValidWorkflowArn</a></code> | Validates whether a string is a valid ARN for the workflow resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidWorkflowExecutionArn">isValidWorkflowExecutionArn</a></code> | Validates whether a string is a valid ARN for the workflowExecution resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidWorkflowStepExecutionArn">isValidWorkflowStepExecutionArn</a></code> | Validates whether a string is a valid ARN for the workflowStepExecution resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.lifecycleExecution">lifecycleExecution</a></code> | Builds an ARN for the lifecycleExecution resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.lifecyclePolicy">lifecyclePolicy</a></code> | Builds an ARN for the lifecyclePolicy resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseAllComponentBuildVersionsArn">parseAllComponentBuildVersionsArn</a></code> | Parses a allComponentBuildVersions ARN into its components. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseAllImageBuildVersionsArn">parseAllImageBuildVersionsArn</a></code> | Parses a allImageBuildVersions ARN into its components. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseAllWorkflowBuildVersionsArn">parseAllWorkflowBuildVersionsArn</a></code> | Parses a allWorkflowBuildVersions ARN into its components. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseComponentArn">parseComponentArn</a></code> | Parses a component ARN into its components. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseContainerRecipeArn">parseContainerRecipeArn</a></code> | Parses a containerRecipe ARN into its components. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseDistributionConfigurationArn">parseDistributionConfigurationArn</a></code> | Parses a distributionConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseImageArn">parseImageArn</a></code> | Parses a image ARN into its components. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseImagePipelineArn">parseImagePipelineArn</a></code> | Parses a imagePipeline ARN into its components. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseImageRecipeArn">parseImageRecipeArn</a></code> | Parses a imageRecipe ARN into its components. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseImageVersionArn">parseImageVersionArn</a></code> | Parses a imageVersion ARN into its components. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseInfrastructureConfigurationArn">parseInfrastructureConfigurationArn</a></code> | Parses a infrastructureConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseLifecycleExecutionArn">parseLifecycleExecutionArn</a></code> | Parses a lifecycleExecution ARN into its components. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseLifecyclePolicyArn">parseLifecyclePolicyArn</a></code> | Parses a lifecyclePolicy ARN into its components. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseWorkflowArn">parseWorkflowArn</a></code> | Parses a workflow ARN into its components. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseWorkflowExecutionArn">parseWorkflowExecutionArn</a></code> | Parses a workflowExecution ARN into its components. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseWorkflowStepExecutionArn">parseWorkflowStepExecutionArn</a></code> | Parses a workflowStepExecution ARN into its components. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.workflow">workflow</a></code> | Builds an ARN for the workflow resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.workflowExecution">workflowExecution</a></code> | Builds an ARN for the workflowExecution resource. |
| <code><a href="#@cdk_utils/iam.imagebuilder.ImageBuilderResources.workflowStepExecution">workflowStepExecution</a></code> | Builds an ARN for the workflowStepExecution resource. |

---

##### `allComponentBuildVersions` <a name="allComponentBuildVersions" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.allComponentBuildVersions"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.allComponentBuildVersions(props: ImageBuilderAllComponentBuildVersionsArnProps)
```

Builds an ARN for the allComponentBuildVersions resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.allComponentBuildVersions.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllComponentBuildVersionsArnProps">ImageBuilderAllComponentBuildVersionsArnProps</a>

---

##### `allImageBuildVersions` <a name="allImageBuildVersions" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.allImageBuildVersions"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.allImageBuildVersions(props: ImageBuilderAllImageBuildVersionsArnProps)
```

Builds an ARN for the allImageBuildVersions resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.allImageBuildVersions.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllImageBuildVersionsArnProps">ImageBuilderAllImageBuildVersionsArnProps</a>

---

##### `allWorkflowBuildVersions` <a name="allWorkflowBuildVersions" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.allWorkflowBuildVersions"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.allWorkflowBuildVersions(props: ImageBuilderAllWorkflowBuildVersionsArnProps)
```

Builds an ARN for the allWorkflowBuildVersions resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.allWorkflowBuildVersions.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.imagebuilder.ImageBuilderAllWorkflowBuildVersionsArnProps">ImageBuilderAllWorkflowBuildVersionsArnProps</a>

---

##### `component` <a name="component" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.component"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.component(props: ImageBuilderComponentArnProps)
```

Builds an ARN for the component resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.component.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.imagebuilder.ImageBuilderComponentArnProps">ImageBuilderComponentArnProps</a>

---

##### `containerRecipe` <a name="containerRecipe" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.containerRecipe"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.containerRecipe(props: ImageBuilderContainerRecipeArnProps)
```

Builds an ARN for the containerRecipe resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.containerRecipe.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.imagebuilder.ImageBuilderContainerRecipeArnProps">ImageBuilderContainerRecipeArnProps</a>

---

##### `distributionConfiguration` <a name="distributionConfiguration" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.distributionConfiguration"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.distributionConfiguration(props: ImageBuilderDistributionConfigurationArnProps)
```

Builds an ARN for the distributionConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.distributionConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.imagebuilder.ImageBuilderDistributionConfigurationArnProps">ImageBuilderDistributionConfigurationArnProps</a>

---

##### `image` <a name="image" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.image"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.image(props: ImageBuilderImageArnProps)
```

Builds an ARN for the image resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.image.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageArnProps">ImageBuilderImageArnProps</a>

---

##### `imagePipeline` <a name="imagePipeline" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.imagePipeline"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.imagePipeline(props: ImageBuilderImagePipelineArnProps)
```

Builds an ARN for the imagePipeline resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.imagePipeline.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImagePipelineArnProps">ImageBuilderImagePipelineArnProps</a>

---

##### `imageRecipe` <a name="imageRecipe" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.imageRecipe"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.imageRecipe(props: ImageBuilderImageRecipeArnProps)
```

Builds an ARN for the imageRecipe resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.imageRecipe.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageRecipeArnProps">ImageBuilderImageRecipeArnProps</a>

---

##### `imageVersion` <a name="imageVersion" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.imageVersion"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.imageVersion(props: ImageBuilderImageVersionArnProps)
```

Builds an ARN for the imageVersion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.imageVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.imagebuilder.ImageBuilderImageVersionArnProps">ImageBuilderImageVersionArnProps</a>

---

##### `infrastructureConfiguration` <a name="infrastructureConfiguration" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.infrastructureConfiguration"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.infrastructureConfiguration(props: ImageBuilderInfrastructureConfigurationArnProps)
```

Builds an ARN for the infrastructureConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.infrastructureConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.imagebuilder.ImageBuilderInfrastructureConfigurationArnProps">ImageBuilderInfrastructureConfigurationArnProps</a>

---

##### `isValidAllComponentBuildVersionsArn` <a name="isValidAllComponentBuildVersionsArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidAllComponentBuildVersionsArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.isValidAllComponentBuildVersionsArn(arn: string)
```

Validates whether a string is a valid ARN for the allComponentBuildVersions resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidAllComponentBuildVersionsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAllImageBuildVersionsArn` <a name="isValidAllImageBuildVersionsArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidAllImageBuildVersionsArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.isValidAllImageBuildVersionsArn(arn: string)
```

Validates whether a string is a valid ARN for the allImageBuildVersions resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidAllImageBuildVersionsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAllWorkflowBuildVersionsArn` <a name="isValidAllWorkflowBuildVersionsArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidAllWorkflowBuildVersionsArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.isValidAllWorkflowBuildVersionsArn(arn: string)
```

Validates whether a string is a valid ARN for the allWorkflowBuildVersions resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidAllWorkflowBuildVersionsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidComponentArn` <a name="isValidComponentArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidComponentArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.isValidComponentArn(arn: string)
```

Validates whether a string is a valid ARN for the component resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidComponentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidContainerRecipeArn` <a name="isValidContainerRecipeArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidContainerRecipeArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.isValidContainerRecipeArn(arn: string)
```

Validates whether a string is a valid ARN for the containerRecipe resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidContainerRecipeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDistributionConfigurationArn` <a name="isValidDistributionConfigurationArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidDistributionConfigurationArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.isValidDistributionConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the distributionConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidDistributionConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidImageArn` <a name="isValidImageArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidImageArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.isValidImageArn(arn: string)
```

Validates whether a string is a valid ARN for the image resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidImageArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidImagePipelineArn` <a name="isValidImagePipelineArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidImagePipelineArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.isValidImagePipelineArn(arn: string)
```

Validates whether a string is a valid ARN for the imagePipeline resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidImagePipelineArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidImageRecipeArn` <a name="isValidImageRecipeArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidImageRecipeArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.isValidImageRecipeArn(arn: string)
```

Validates whether a string is a valid ARN for the imageRecipe resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidImageRecipeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidImageVersionArn` <a name="isValidImageVersionArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidImageVersionArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.isValidImageVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the imageVersion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidImageVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInfrastructureConfigurationArn` <a name="isValidInfrastructureConfigurationArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidInfrastructureConfigurationArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.isValidInfrastructureConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the infrastructureConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidInfrastructureConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLifecycleExecutionArn` <a name="isValidLifecycleExecutionArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidLifecycleExecutionArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.isValidLifecycleExecutionArn(arn: string)
```

Validates whether a string is a valid ARN for the lifecycleExecution resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidLifecycleExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLifecyclePolicyArn` <a name="isValidLifecyclePolicyArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidLifecyclePolicyArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.isValidLifecyclePolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the lifecyclePolicy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidLifecyclePolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkflowArn` <a name="isValidWorkflowArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidWorkflowArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.isValidWorkflowArn(arn: string)
```

Validates whether a string is a valid ARN for the workflow resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidWorkflowArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkflowExecutionArn` <a name="isValidWorkflowExecutionArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidWorkflowExecutionArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.isValidWorkflowExecutionArn(arn: string)
```

Validates whether a string is a valid ARN for the workflowExecution resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidWorkflowExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkflowStepExecutionArn` <a name="isValidWorkflowStepExecutionArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidWorkflowStepExecutionArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.isValidWorkflowStepExecutionArn(arn: string)
```

Validates whether a string is a valid ARN for the workflowStepExecution resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.isValidWorkflowStepExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `lifecycleExecution` <a name="lifecycleExecution" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.lifecycleExecution"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.lifecycleExecution(props: ImageBuilderLifecycleExecutionArnProps)
```

Builds an ARN for the lifecycleExecution resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.lifecycleExecution.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.imagebuilder.ImageBuilderLifecycleExecutionArnProps">ImageBuilderLifecycleExecutionArnProps</a>

---

##### `lifecyclePolicy` <a name="lifecyclePolicy" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.lifecyclePolicy"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.lifecyclePolicy(props: ImageBuilderLifecyclePolicyArnProps)
```

Builds an ARN for the lifecyclePolicy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.lifecyclePolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.imagebuilder.ImageBuilderLifecyclePolicyArnProps">ImageBuilderLifecyclePolicyArnProps</a>

---

##### `parseAllComponentBuildVersionsArn` <a name="parseAllComponentBuildVersionsArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseAllComponentBuildVersionsArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.parseAllComponentBuildVersionsArn(arn: string)
```

Parses a allComponentBuildVersions ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseAllComponentBuildVersionsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAllImageBuildVersionsArn` <a name="parseAllImageBuildVersionsArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseAllImageBuildVersionsArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.parseAllImageBuildVersionsArn(arn: string)
```

Parses a allImageBuildVersions ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseAllImageBuildVersionsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAllWorkflowBuildVersionsArn` <a name="parseAllWorkflowBuildVersionsArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseAllWorkflowBuildVersionsArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.parseAllWorkflowBuildVersionsArn(arn: string)
```

Parses a allWorkflowBuildVersions ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseAllWorkflowBuildVersionsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseComponentArn` <a name="parseComponentArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseComponentArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.parseComponentArn(arn: string)
```

Parses a component ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseComponentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseContainerRecipeArn` <a name="parseContainerRecipeArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseContainerRecipeArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.parseContainerRecipeArn(arn: string)
```

Parses a containerRecipe ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseContainerRecipeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDistributionConfigurationArn` <a name="parseDistributionConfigurationArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseDistributionConfigurationArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.parseDistributionConfigurationArn(arn: string)
```

Parses a distributionConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseDistributionConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseImageArn` <a name="parseImageArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseImageArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.parseImageArn(arn: string)
```

Parses a image ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseImageArn.parameter.arn"></a>

- *Type:* string

---

##### `parseImagePipelineArn` <a name="parseImagePipelineArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseImagePipelineArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.parseImagePipelineArn(arn: string)
```

Parses a imagePipeline ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseImagePipelineArn.parameter.arn"></a>

- *Type:* string

---

##### `parseImageRecipeArn` <a name="parseImageRecipeArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseImageRecipeArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.parseImageRecipeArn(arn: string)
```

Parses a imageRecipe ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseImageRecipeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseImageVersionArn` <a name="parseImageVersionArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseImageVersionArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.parseImageVersionArn(arn: string)
```

Parses a imageVersion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseImageVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInfrastructureConfigurationArn` <a name="parseInfrastructureConfigurationArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseInfrastructureConfigurationArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.parseInfrastructureConfigurationArn(arn: string)
```

Parses a infrastructureConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseInfrastructureConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLifecycleExecutionArn` <a name="parseLifecycleExecutionArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseLifecycleExecutionArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.parseLifecycleExecutionArn(arn: string)
```

Parses a lifecycleExecution ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseLifecycleExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLifecyclePolicyArn` <a name="parseLifecyclePolicyArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseLifecyclePolicyArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.parseLifecyclePolicyArn(arn: string)
```

Parses a lifecyclePolicy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseLifecyclePolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkflowArn` <a name="parseWorkflowArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseWorkflowArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.parseWorkflowArn(arn: string)
```

Parses a workflow ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseWorkflowArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkflowExecutionArn` <a name="parseWorkflowExecutionArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseWorkflowExecutionArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.parseWorkflowExecutionArn(arn: string)
```

Parses a workflowExecution ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseWorkflowExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkflowStepExecutionArn` <a name="parseWorkflowStepExecutionArn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseWorkflowStepExecutionArn"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.parseWorkflowStepExecutionArn(arn: string)
```

Parses a workflowStepExecution ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.parseWorkflowStepExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `workflow` <a name="workflow" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.workflow"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.workflow(props: ImageBuilderWorkflowArnProps)
```

Builds an ARN for the workflow resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.workflow.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowArnProps">ImageBuilderWorkflowArnProps</a>

---

##### `workflowExecution` <a name="workflowExecution" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.workflowExecution"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.workflowExecution(props: ImageBuilderWorkflowExecutionArnProps)
```

Builds an ARN for the workflowExecution resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.workflowExecution.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowExecutionArnProps">ImageBuilderWorkflowExecutionArnProps</a>

---

##### `workflowStepExecution` <a name="workflowStepExecution" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.workflowStepExecution"></a>

```typescript
import { imagebuilder } from '@cdk_utils/iam'

imagebuilder.ImageBuilderResources.workflowStepExecution(props: ImageBuilderWorkflowStepExecutionArnProps)
```

Builds an ARN for the workflowStepExecution resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.imagebuilder.ImageBuilderResources.workflowStepExecution.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.imagebuilder.ImageBuilderWorkflowStepExecutionArnProps">ImageBuilderWorkflowStepExecutionArnProps</a>

---




